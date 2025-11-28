# HandmadeHarmony -- Full Stack E-Commerce App

HandmadeHarmony is a full-stack e-commerce web application built with a
React frontend and a Node.js/Express backend, following the architecture
shown in the tutorial video.

## Project Structure

    handmadeharmony/
    │
    ├── backend/        # Express server, API routes, multer uploads
    │   ├── uploads/    # Stored images (auto-created)
    │   ├── package.json
    │   └── server.js
    │
    ├── frontend/       # React application
    │   ├── src/
    │   └── package.json
    │
    └── README.md

## Getting Started

### Clone the repository

    git clone https://github.com/<your-username>/handmadeharmony.git
    cd handmadeharmony

## Backend Setup

    cd backend
    npm install

Install multer if using image uploads:

    npm install multer

Run the backend:

    npm run dev

Backend default URL: http://localhost:4000

## Frontend Setup

    cd frontend
    npm install
    npm start

Frontend default URL: http://localhost:3000 or http://localhost:5173

## Gitignore Notes

### frontend/.gitignore

    node_modules/
    dist/

### backend/.gitignore

    node_modules/
    uploads/

## Image Uploads

The backend uses Multer to handle file uploads. Uploaded images are
stored in:

    backend/uploads/

## Planned Features

-   Product listing
-   Admin product creation
-   Image uploads
-   Shopping cart
-   Checkout flow
-   Responsive UI
