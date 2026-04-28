# MERN Auth App

A full-stack authentication web application built with the MERN stack (MongoDB, Express, React, Node.js). Users can register, log in, and access a protected dashboard.

🔗 **Live Demo:** [https://dek-nek3-d-assignment.vercel.app](https://dek-nek3-d-assignment.vercel.app)

---

## Features

- User registration with username, email & password
- Secure login with JWT authentication
- Passwords hashed using bcryptjs
- Protected dashboard route (accessible only when logged in)
- Token stored in localStorage and sent with every request
- Clean error handling on both frontend and backend

---

## Tech Stack

**Frontend**
- React (Vite)
- React Router DOM
- Axios
- Tailwind CSS

**Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- bcryptjs

---

## Folder Structure

```
mern-auth/
├── backend/
│   ├── controllers/
│   │   └── user-controller.js
│   ├── database/
│   │   └── db.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── user-routes.js
│   ├── .env
│   └── server.js
│
└── frontend/
    ├── src/
    │   ├── context/
    │   │   └── AuthContext.jsx
    │   ├── pages/
    │   │   ├── Register.jsx
    │   │   ├── Login.jsx
    │   │   └── Dashboard.jsx
    │   ├── App.jsx
    │   └── main.jsx
    ├── .env
    └── index.html
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- MongoDB Atlas account

### 1. Clone the repository

```bash
git clone https://github.com/your-username/mern-auth.git
cd mern-auth
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=3000
```

Start the backend server:

```bash
npm run dev
```

### 3. Setup Frontend

```bash
cd frontend
npm install
```

Create a `.env` file inside the `frontend` folder:

```
VITE_API_URL=http://localhost:3000
```

Start the frontend:

```bash
npm run dev
```

---

## API Endpoints

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/api/auth/signup` | Public | Register a new user |
| POST | `/api/auth/login` | Public | Login and receive JWT |
| GET | `/api/auth/dashboard` | Private | Get logged-in user data |

### Example Request — Signup

```
POST /api/auth/signup
Content-Type: application/json

{
  "username": "john",
  "email": "john@example.com",
  "password": "123456"
}
```

### Example Request — Dashboard

```
GET /api/auth/dashboard
Authorization: Bearer <your_jwt_token>
```

---

## Deployment

| Service | Platform |
|---------|----------|
| Frontend | Vercel |
| Backend | Render |
| Database | MongoDB Atlas |

---

## Author

Built as part of the DekNek3D Full Stack Developer Internship Assignment.
