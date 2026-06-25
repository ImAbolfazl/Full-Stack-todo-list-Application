# Full Stack Todo App

A full-stack todo list application built with **ReactJS**, **NodeJS**, and **ExpressJS**. users can register and login to their account and manage their todos ( Create, Read, Update, Delete ) with a basic and responsive UI made using **ReactJS**.

## Features

* User authentication & authorization using JWT
* Hashed passwords using BCrypt
* In-Memory SQLite database
* Create new todos
* Update existing todos
* Delete todos
* Backend server built using ExpressJS
* Clean and beginner-friendly code structure

## Libraries used

### Frontend

* React
* React Router
* Axios
* Tailwind
* React Icons

### Backend

* Node.js
* Express.js
* CORS
* JsonWebTokens
* BCrypt

## Getting started with the project!

### Clone the Repository

```bash
git clone https://github.com/ImAbolfazl/full-stack-todo-list/
cd full-stack-todo-list
```

### Backend Setup

```bash
cd backend
npm install
node --env-file=.env ./sec/server.js
```

The backend will run on:

```text
http://localhost:8080
```
#### You can change the port from the .env file located in the backend folder 

### Frontend Setup

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on:

```text
http://localhost:5173
```

## API Endpoints

### Get All Todos

```http
GET /api/todos
```

### Add Todo

```http
POST /api/todos
```

Request Body:

```json
{
  "task": "Learn Express",
  "completed": false
}
```

### Update Todo

```http
PUT /api/todos/:id
```

Request Body:

```json
{
  "task": "Learn React",
}
```

### Delete Todo

```http
DELETE /api/todos/:id
```

## Learning Goals

This project was built to practice:

* REST APIs
* CRUD operations
* React state management
* HTTP requests with Axios
* Express routing
* Full-stack application structure

## Author

Built by Abolfazl!