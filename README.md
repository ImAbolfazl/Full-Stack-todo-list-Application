[previewImage](https://github.com/ImAbolfazl/Full-Stack-todo-list-Application/blob/master/previewImage.png?raw=true)

>>>>>>> f4e56bfc296e869fd2e59494169b99a2fc722005

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
node --env-file=.env ./src/server.js
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
cd todo-app
npm run dev
```

The frontend will run on:

```text
http://localhost:5173
```
edit the cors origin in the server.js file if you changed the frontend url.

## User auth Endpoints

### Register a new user

```http
POST /auth/register
```

Request Body:

```json
{
  "username": "Abolfazl",
  "password": "AbolfazlsPassword"
}
```

### Login to an already registered account

```http
POST /auth/login
```

Request Body:

```json
{
  "username": "Abolfazl",
  "password": "AbolfazlsPassword"
}
```

## Todo Endpoints


- All the todo request require a JWT token in the header

```json
{
  "token": "a-jwt-token-that-is-created-after-login-or-register"
}
```

### Get All Todos

```http
GET /todo
```

### Add Todo

```http
POST /todo
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
PUT /todo/:id
```

Request Body:

```json
{
  "task": "Learn React",
}
```

### Delete Todo

```http
DELETE /todo/:id
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
