👤 Author

Thahira Sherin


---

# 🎨 Frontend – README.md

```md
# 🏥 Pharmacy Management System – Frontend (Mini PMS)

This is the **frontend React application** for the Pharmacy Management System.  
It provides login, registration, and a dashboard to manage medicines.

---

## 🚀 Tech Stack

- React (Vite)
- React Router DOM
- Axios
- Tailwind CSS
- JWT-based auth handling

---

## 📁 Folder Structure



frontend/
├── src/
│ ├── services/
│ │ └── api.js
│ │
│ ├── components/
│ │ ├── AddMedicine.jsx
│ │ └── MedicineList.jsx
│ │
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── Login.jsx
│ │ ├── Register.jsx
│ │ └── Dashboard.jsx
│ │
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md


---

## 🌟 Features

- Home page
- User registration
- User login
- Protected dashboard
- Medicine CRUD operations
- Expiry & low-stock indicators
- Color-coded alerts
- JWT-based route protection

---

## 🔐 Authentication Flow

- On login, JWT token is stored in `localStorage`
- Axios interceptor attaches token automatically
- Protected routes redirect to login if token is missing

---

## 🌐 Pages

| Page | Route |
|----|------|
| Home | `/` |
| Register | `/register` |
| Login | `/login` |
| Dashboard | `/dashboard` |

---

## 🎨 UI

- Built using Tailwind CSS
- Responsive design
- Color indicators:
  - 🟢 Good stock
  - 🟡 Expiring soon
  - 🔴 Low stock

---

## ▶️ Run the App

```bash
npm install
npm run dev


App runs on:

http://localhost:5173

🔗 Backend Connection

Ensure backend is running on:

http://localhost:3001


Update API base URL if needed in:

src/api/api.js

📌 Notes

Role-based dashboards are not implemented (not required for MVP)

Easily extendable for admin/pharmacist roles

Clean and modular React structure

👤 Author

Thahira Sherin


---

## ✅ Final Result

You now have:
✔ Professional backend README  
✔ Professional frontend README  
✔ Interview-ready documentation  
✔ Clear project explanation  

If you want next, I can:
- ✨ Improve README for **monorepo**
- 📸 Add screenshots section
- 🧪 Add API docs section
- 💼 Optimize for resume & interview explanation  

Just tell me 👍
