# HandmadeHarmony -- Full‑Stack E‑Commerce Application

HandmadeHarmony is a modern full‑stack e‑commerce platform designed for
selling handmade and craft products.\
It features a React frontend, Node.js/Express backend, and a complete
product management system with multi‑image uploads.

------------------------------------------------------------------------

## 🚀 Features

### 🛒 E‑Commerce Functionality

-   Product listing & details pages\
-   Shopping cart with quantity management\
-   Responsive UI built with React\
-   Context API for global state management

### 🛠 Admin Features

-   Add new products via the Admin Panel\
-   Upload **4 required images** per product\
-   Markdown‑friendly long descriptions\
-   Price & discounted price handling

### 📤 Image Upload System

-   Uses **Multer** on the backend\
-   Saves all images inside `backend/upload/`\
-   Returns public URLs to the frontend\
-   Supports 4‑image preview before uploading

------------------------------------------------------------------------

## 📁 Project Structure

    handmadeharmony/
    │
    ├── backend/
    │   ├── upload/                # Auto‑generated folder for image uploads
    │   ├── server.js              # Express server entry
    │   ├── routes/                # API routes
    │   ├── controllers/           # Logic for product & upload handling
    │   └── package.json
    │
    ├── frontend/
    │   ├── src/
    │   │   ├── Components/        # UI components
    │   │   ├── Pages/             # Application pages
    │   │   ├── Context/           # Global state management
    │   │   └── assets/            # Images, CSS
    │   └── package.json
    │
    └── README.md

------------------------------------------------------------------------

## ⚙️ Installation & Setup

### 📌 Backend Setup

``` sh
cd backend
npm install
npm run dev
```

Backend default URL: **http://localhost:4000**

#### Backend Dependencies

-   express\
-   cors\
-   multer\
-   path\
-   nodemon (dev)

------------------------------------------------------------------------

### 🎨 Frontend Setup

``` sh
cd frontend
npm install
npm run dev
```

Frontend default URL: **http://localhost:5173** (Vite)

------------------------------------------------------------------------

## 📦 API Endpoints

### **POST /upload**

Uploads product images using Multer.\
Returns URLs for all 4 images.

### **POST /addproduct**

Inserts a new product into the database, including: - name\
- description\
- price\
- 4 image URLs

### **GET /allproducts**

Fetches every product.

------------------------------------------------------------------------

## 📝 Environment Variables

Create `.env` in the backend:

    PORT=4000
    MONGO_URL=<your_mongodb_connection>

------------------------------------------------------------------------

## 🚀 Future Enhancements

-   User authentication (JWT)\
-   Payment integration (Stripe)\
-   Admin dashboard with analytics\
-   Product categories & filtering\
-   Wishlist and reviews

------------------------------------------------------------------------

## 📄 License

This project is open‑source and free to use for learning and portfolio
purposes.
