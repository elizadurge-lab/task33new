# Full-Stack MERN To-Do List Application (TuteDude Assignment)

A fully functional Full-Stack To-Do List web application built using the MERN stack (MongoDB, Express.js, React, Node.js) with Axios for API communication.

---

## Features
* **Backend REST APIs**: Built using Node.js, Express.js, and Mongoose with MongoDB Atlas.
* **Frontend Integration**: Developed using React (Vite) and Axios to perform asynchronous HTTP requests (GET and POST).
* **Dynamic UI**: Real-time task listing and status tracking (Pending/Completed).
* **Error Handling**: Graceful frontend and backend error management.

---

## Tech Stack
* **Frontend**: React.js, Vite, Axios, HTML5, CSS3
* **Backend**: Node.js, Express.js
* **Database**: MongoDB Atlas (Mongoose ODM)

---

## Project Structure
```text
task33/
│
├── client/              # React Frontend (Vite)
│   ├── src/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── controllers/         # Request handlers
├── models/              # Mongoose Schema & Models
├── routes/              # Express API Routes
├── services/            # Business logic services
├── .env                 # Environment variables (Mongo URI)
├── package.json         # Backend dependencies
└── server.js            # Entry point for backend