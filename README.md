# Workout Tracker – Backend & API Logic

This project is the backend part of a Workout Tracker Application, built using **Node.js, Express, MongoDB, and Mongoose**.  
It handles database connectivity and complete CRUD operations.  
There is **no UI section here** — only backend functionality and API communication.

---

## 📁 Project Structure

```
PROJECT13/
│
├─ client-app/              → Frontend (React + Vite)
│
├─ server/                  → Backend (Node.js + Express + MongoDB)
│   ├─ models/
│   ├─ routes/
│   ├─ server.js
│   
│
├─ .gitignore
└─ README.md
```

---

## 🚀 Features

- MongoDB database connection using Mongoose  
- RESTful API backend using Express  
- Perform CRUD operations:
  - Create Workout  
  - Read / Get All Workouts  
  - Update Workout  
  - Delete Workout  

---

## 🛠️ Requirements

- Node.js  
- MongoDB  
- Postman (optional – for testing APIs)

---

## 🗄️ Database Setup (MongoDB)

### 1️⃣ Install and Start MongoDB
- Install MongoDB Community Server on Windows / Mac  
- Or install using terminal on Linux  
- Start the MongoDB service  

MongoDB automatically creates the database when data is inserted.

---

## 🔗 MongoDB Connection Using Mongoose

Go inside the **server** folder and install dependencies:

```bash
cd server
npm install
npm install mongoose
```

---

### ✅ Database Connection Code

```js
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Project")
.then(() => {
    console.log("Connection Established!");
})
.catch((err) => {
    console.log(err);
});
```

The database named **Project** will be created automatically.

---

## ▶️ Start the Backend Server

```bash
npm start
```

Server will start on:

```
http://localhost:4000
```

---

## 🔌 API Communication Flow

1️⃣ Frontend sends request  
2️⃣ Express backend receives request  
3️⃣ Mongoose communicates with MongoDB  
4️⃣ Response returned to frontend  

---

## 🧠 CRUD API Summary

| Action | Endpoint | Description |
|--------|----------|-------------|
| Create Workout | POST /workouts | Add new workout |
| Get All Workouts | GET /workouts | Fetch all workouts |
| Update Workout | PUT /workouts/:id | Update workout |
| Delete Workout | DELETE /workouts/:id | Remove workout |

---

## ⚠️ Important Notes

- Run backend before frontend  
 - `node_modules` must remain ignored  
- Update frontend API URLs if backend port changes  

---

## 🛡️ Technologies Used

- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- Axios (frontend API requests)

---

Happy Coding 🎯
