import jwt from "jsonwebtoken"
import db from "../src/db.js"

function authMiddleware(req, res, next) {
    const token = req.headers.token

    if(!token){return res.status(401).json({message: "token is not provided"})}

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if(err){return res.status(401).json({message: "invalid token"})}

        const getUser = db.prepare("SELECT * FROM users WHERE id = ?")
        const user = getUser.get(decoded.id)

        if(!user){return res.status(401).json({message: "invalid token"})}

        req.userId = decoded.id
        next()
    })
}

export default authMiddleware