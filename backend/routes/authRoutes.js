import express from "express"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import db from "../src/db.js"
import authMiddleware from "../middleware/auth.js"

const router = express.Router()

router.post("/register", async (req, res) => {
    const {username, password} = req.body

    if(!username || !password){return res.status(400).json({message: "username and password are required"})}
    
    try{
        const hashedPassword = await bcrypt.hash(password, 10)

        const registerUser = db.prepare("INSERT INTO users (username, password) VALUES (?, ?)")
        const result = registerUser.run(username, hashedPassword)

        const token = jwt.sign({id: result.lastInsertRowid}, process.env.SECRET_KEY, {expiresIn: "7d"})

        res.status(201).json({token})
    }catch(err){
        if (err.code === 'SQLITE_CONSTRAINT') {
            return res.status(409).json({ message: "username already taken" });
        }
        res.sendStatus(500)
    }
})

router.post("/login", async (req, res) => {
    const {username, password} = req.body

    if(!username || !password){return res.status(400).json({message: "username and password are required"})}

    try{
        const getUser = db.prepare("SELECT * FROM users WHERE username = ?")
        const user = getUser.get(username)

        if(!user){return res.status(400).json({message: "user doesnt exist"})}

        const isPasswordValid = await bcrypt.compare(password, user.password)

        if(!isPasswordValid){return res.status(401).json({message: "username or password is invalid"})}

        const token = jwt.sign({id: user.id}, process.env.SECRET_KEY, {expiresIn: "7d"})

        res.status(200).json({token})
    }catch(err){
        res.sendStatus(500)
    }
})

router.get("/check", authMiddleware, async (req, res) => {
    res.sendStatus(200)
})

export default router