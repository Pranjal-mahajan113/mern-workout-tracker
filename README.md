Workout Tracker – Backend & API Logic

This project is the backend part of a Workout Tracker Application, built using Node.js, Express, MongoDB, and Mongoose.
It handles all the logic such as database connectivity and CRUD operations.
There is no UI section here — only backend functionality and API communication.

 # 📁 Project Structure
PROJECT13/
│
├─ client-app/              → Frontend (React + Vite)
│
├─ server/                  → Backend (Node.js + Express + MongoDB)
│   ├─ models/
│   ├─ routes/
│   ├─ server.js
│   └─ .env
│
├─ .gitignore
└─ README.md

## 🚀 Features

MongoDB database connection using Mongoose

RESTful API backend using Express

Perform CRUD operations:

Create Workout

Read / Get All Workouts

Update Workout

Delete Workout

Frontend communicates with backend via APIs

🛠️ Installation & Setup
1️⃣ Requirements

Make sure you have installed:

Node.js

MongoDB

Postman (optional – for testing APIs)

🗄️ Database Setup (MongoDB)
2️⃣ Install and Start MongoDB

Install MongoDB Community Server on Windows / Mac

Or install via terminal on Linux

Start the MongoDB service

MongoDB automatically creates the database when data is inserted.            

🔗 MongoDB Connection Using Mongoose

Go inside the server folder and install dependencies:

cd server
npm install
npm install mongoose

▶️ Start the Backend Server

Run the server using:

npm start


Server will start on:

http://localhost:4000


🔌 API Communication Flow (Frontend → Backend → Database)

1️⃣ User interacts on the frontend
2️⃣ Frontend sends API request to backend
3️⃣ Express receives the request
4️⃣ Mongoose interacts with MongoDB
5️⃣ Response is returned back to fronten


🛡️ Technologies Used

Node.js

Express.js

MongoDB

Mongoose

Axios (for frontend API requests)
