import jwt from "jsonwebtoken"

function authMiddleware(req, res, next) {
    const token = req.headers.token

    if(!token){return res.status(401).json({message: "token is not provided"})}

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if(err){return res.status(401).json({message: "invalid token"})}

        req.userId = decoded.id
        next()
    })
}

export default authMiddleware