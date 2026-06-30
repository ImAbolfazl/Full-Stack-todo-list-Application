import express from "express"
import db from "../src/db.js"

const router = express.Router()

router.get("/", (req, res) => {
    const getTodos = db.prepare("SELECT * FROM todos WHERE user_id = ?")
    const todos = getTodos.all(req.userId)
    
    res.json(todos)
})

router.post("/", (req, res) => {
    const {task} = req.body
    
    const insertTodo = db.prepare("INSERT INTO todos (user_id, task) VALUES (?, ?)")
    const todo = insertTodo.run(req.userId, task)

    res.json({completed: 0, id: todo.lastInsertRowid, task: task})
})

router.put("/:id", (req, res) => {
    const {task} = req.body
    const {id} = req.params

    const updateTodo = db.prepare("UPDATE todos SET task = ? WHERE id = ? AND userId = ?")
    const todo = updateTodo.run(task, id, req.userId)

    res.json({id: todo.lastInsertRowid, task: task})
})

router.delete("/:id", (req, res) => {
    const {id} = req.params

    const deleteTodo = db.prepare("DELETE FROM todos WHERE id = ? AND user_id = ?")
    const result = deleteTodo.run(id, req.userId)

    res.status(200)
})

export default router