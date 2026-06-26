import express from "express"
import authRoutes from "../routes/authRoutes.js"
import todoRoutes from "../routes/todoRouter.js"
import authMiddleware from "../middleware/auth.js"
import cors from "cors"

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({
    origin: "http://localhost:5174",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "token"],
    credentials: true
}));

app.use(express.json())
app.use("/auth", authRoutes)
app.use("/todo", authMiddleware, todoRoutes)

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})