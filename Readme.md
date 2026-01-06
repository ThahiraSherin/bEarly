# 🏥 Pharmacy Management System – Backend (Mini PMS)

This is the **backend API** for the Pharmacy Management System (Mini MVP).  
It provides authentication, medicine inventory management, and expiry/stock alert logic.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcrypt (password hashing)

---

## 📁 Folder Structure

backend/
├── controllers/
│ ├── authController.js
│ └── medicineController.js
│
├── middlewares/
│ ├── auth.js
│ └── errorMiddleware.js
│
├── models/
│ ├── User.js
│ └── Medicine.js
│
├── routes/
│ ├── authRoutes.js
│ └── medicineRoutes.js
│
├── utils/
│ └── config.js
│
├── app.js
├── server.js
├── package.json
└── README.md


---

## 🔐 Features

### Authentication
- User Register
- User Login
- JWT-based authorization

### Medicine Management
- Add medicine
- Update medicine
- Delete medicine
- Get all medicines

### Alerts Logic
- Low stock detection
- Expiry within 30 days calculation

---

## 🔗 API Endpoints

### Auth Routes
| Method | Endpoint | Description |
|------|---------|-------------|
| POST | `/api/auth/register` | Register user |
| POST | `/api/auth/login` | Login user |

### Medicine Routes (Protected)
| Method | Endpoint | Description |
|------|---------|-------------|
| GET | `/api/medicines` | Get all medicines |
| POST | `/api/medicines` | Add medicine |
| PUT | `/api/medicines/:id` | Update medicine |
| DELETE | `/api/medicines/:id` | Delete medicine |

---

## 🔐 Authentication Flow

- JWT token is generated on login
- Token must be sent in headers:
