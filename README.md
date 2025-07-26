# 💬 Chat App Backend

This is the backend server for the **Chat App**, built with **Node.js**, **Express**, **MongoDB**, and **Socket.IO**. It handles user authentication, real-time messaging, and database operations. Frontend is separately hosted and connects via REST API and WebSockets.

## 🚀 Features

- 🔐 JWT-based Authentication (Signup / Login)
- 📩 Real-time messaging using Socket.IO
- 🧠 MongoDB (Mongoose) for user and message storage
- 🍪 Cookie-based token handling with `cookie-parser`
- 🔄 CORS configured for secure cross-origin communication
- 🌐 Environment-based config (`.env`)
- 📁 Clean folder structure (controllers, routes, models, etc.)

---

## 📁 Folder Structure

```bash
backend/
└── src/
    ├── lib/
    ├── controllers/
    ├── models/
    ├── routes/
    ├── middlewares/
    └── seeds/
