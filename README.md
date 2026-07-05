# 🛍️ Products Store

A full-stack **MERN** (MongoDB, Express, React, Node) application for managing a product catalog — built with **TypeScript** end to end.

---

## ✨ Features

- 📦 Create, view, update, and delete products (CRUD)
- ⚡ Fast, typed backend with Express + TypeScript
- 🗄️ MongoDB persistence via Mongoose
- 🎨 React + Vite frontend with a clean, component-based UI
- 🔔 Toast/notification feedback for user actions
- 🌐 Single build pipeline — backend serves the compiled frontend in production

---

## 🧰 Tech Stack

**Backend**
- Node.js + Express 5
- TypeScript
- MongoDB + Mongoose
- dotenv (environment config)
- Nodemon / ts-node (dev workflow)

**Frontend**
- React + Vite
- TypeScript
- Component-based architecture (Navbar, Product Card, Notification Card)
- Client-side state store for product data

---

## 📁 Project Structure

```
products_store/
├── backend/
│   ├── config/
│   │   └── db.ts              # MongoDB connection setup
│   ├── controllers/
│   │   └── product.controller.ts   # Request handlers for product logic
│   ├── models/
│   │   └── product.models.ts       # Mongoose schema/model
│   ├── routes/
│   │   └── product.route.ts        # API route definitions
│   └── server.ts                   # Express app entry point
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── navbar.tsx
│   │   │   ├── productCard.tsx
│   │   │   └── NotificationCard.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   └── Create.tsx
│   │   ├── store/
│   │   │   └── product.ts          # Client-side state management
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── vite.config.ts
├── package.json
├── tsconfig.json
└── .gitignore
```

---

## 🔌 API Overview

The backend exposes a RESTful API for managing products, following standard CRUD conventions:

| Method | Endpoint            | Description              |
|--------|----------------------|---------------------------|
| GET    | `/api/products`      | Fetch all products        |
| POST   | `/api/products`      | Create a new product      |
| PUT    | `/api/products/:id`  | Update an existing product|
| DELETE | `/api/products/:id`  | Delete a product          |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- A MongoDB connection string (local or Atlas)

### 1. Clone the repo
```bash
git clone https://github.com/ImSatyamK/products_store.git
cd products_store
```

### 2. Set up environment variables
Create a `.env` file in the project root:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 3. Install dependencies
```bash
npm install
npm install --prefix frontend
```

### 4. Run in development
```bash
npm run dev
```
This starts the backend with hot-reload via `nodemon`.

To run the frontend dev server separately:
```bash
cd frontend
npm run dev
```

### 5. Build for production
```bash
npm run build
```
This installs frontend dependencies, builds the React app, and compiles the TypeScript backend.

### 6. Start the production server
```bash
npm start
```
Serves the compiled backend (and built frontend) from `dist/`.

---

## 📄 License

This project is licensed under the **ISC License**.

---

## 👤 Author

**Satyam Kumar** ([@ImSatyamK](https://github.com/ImSatyamK))