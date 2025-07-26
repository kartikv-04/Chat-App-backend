
---

```md
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

```

📦 backend/
├── 📁 src/
│   ├── 📁 lib/         # DB connection, environment setup
│   │   └── db.js
│   │   └── cloudinary.js
│   │   └── socket.js
│   │   └── util.js
│   │
│   ├── 📁 controllers/    # Route logic (auth, message, etc.)
│   │   ├── auth.controller.js
│   │   └── message.controller.js
│   │
│   ├── 📁 models/         # Mongoose schemas
│   │   ├── user.model.js
│   │   └── message.model.js
│   │
│   ├── 📁 routes/         # Express route definitions
│   │   ├── auth.route.js
│   │   └── message.route.js
│   │
│   ├── 📁 middlewares/    # Middleware (auth)
│   │   ├── auth.middleware.js
│   │  
│   │
│   ├── 📁 seeds/        # Socket.IO logic
│   │   └── user.seed.js
│   └── index.js          # Main entry point
│
├
├── .gitignore
├── package.json
└── README.md


---

## 🛠️ Tech Stack

- **Node.js**
- **Express**
- **MongoDB + Mongoose**
- **Socket.IO**
- **JWT + bcrypt**
- **dotenv**
- **cookie-parser**
- **CORS**

---

## 🔧 Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/kartikv-04/Chat-App-backend.git
cd Chat-App-backend
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root:

```env
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key
CLIENT_URL=https://your-frontend-url.com
```

### 4. Run the Server

```bash
npm start
```

> For development with auto-restart:

```bash
npm run dev
```

---

## 🔌 API Endpoints

### Auth Routes

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| POST   | `/api/auth/signup` | Register a user   |
| POST   | `/api/auth/login`  | Login user        |
| POST   | `/api/auth/logout` | Clear auth cookie |
| GET    | `/api/auth/me`     | Get current user  |

### Message Routes

| Method | Endpoint           | Description                |
| ------ | ------------------ | -------------------------- |
| POST   | `/api/message`     | Send a message             |
| GET    | `/api/message/:id` | Get chat history with user |

---

## 🔄 Real-Time Events (Socket.IO)

| Event            | Payload           | Description                   |
| ---------------- | ----------------- | ----------------------------- |
| `connect`        | -                 | Client connects               |
| `sendMessage`    | `{to, message}`   | Send a message                |
| `receiveMessage` | `{from, message}` | Receive a message (broadcast) |
| `disconnect`     | -                 | Client disconnects            |

---

## 🛡️ Security & Middleware

* Passwords hashed using **bcryptjs**
* JWT stored in **HTTP-only cookies**
* **CORS** restricted to frontend domain
* **Rate limiting** and **sanitization** (optional for production)

---

## 📦 Deployment

* Backend hosted on **Render** or **VPS**
* Frontend hosted on **Vercel**
* Use **Procfile** or `start` script for production
* Set `NODE_ENV=production` in your environment

---

## 🧪 Testing (Optional)

Add with tools like:

* **Postman** for API
* **Jest** + **Supertest** for unit/integration tests

---

## 👨‍💻 Author

Made with 💻 by [Kartik Varia](https://github.com/kartikv-04)

---

## 📜 License

MIT License. Do whatever you want, but give credit where it’s due 😄

```

---

Let me know if you want to add database schema examples, Postman collection, or WebSocket flow diagrams in the README. Happy to add!
```
