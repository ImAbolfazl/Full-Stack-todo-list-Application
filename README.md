# Full Stack Todo App

A modern full-stack Todo List application built with **React**, **Node.js**, and **Express**. Users can create, update, delete, and manage their tasks through a clean and responsive interface.

## Features

* Create new tasks
* Update existing tasks
* Delete tasks
* Mark tasks as completed
* RESTful API architecture
* Responsive React frontend
* Express backend server
* JSON-based data handling
* Clean and beginner-friendly code structure

## Tech Stack

### Frontend

* React
* React Router
* Axios
* CSS

### Backend

* Node.js
* Express.js

## Project Structure

```text
todo-app/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── routes/
│   ├── controllers/
│   ├── package.json
│   └── index.js
│
└── README.md
```

## Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

### Backend Setup

```bash
cd server
npm install
npm start
```

The backend will run on:

```text
http://localhost:8080
```

### Frontend Setup

Open another terminal:

```bash
cd client
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

### Get Todo By ID

```http
GET /api/todos/:id
```

### Create Todo

```http
POST /api/todos
```

Request Body:

```json
{
  "title": "Learn Express",
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
  "title": "Learn React",
  "completed": true
}
```

### Delete Todo

```http
DELETE /api/todos/:id
```

## Environment Variables

Create a `.env` file in the server directory:

```env
PORT=8080
```

## Future Improvements

* User authentication
* MongoDB or MySQL integration
* JWT authorization
* Task categories
* Due dates
* Dark mode
* Drag-and-drop task organization

## Learning Goals

This project was built to practice:

* REST APIs
* CRUD operations
* React state management
* HTTP requests with Axios
* Express routing
* Full-stack application structure

## License

This project is licensed under the MIT License.

## Author

Built by Abolfazl using React, Node.js, and Express.
