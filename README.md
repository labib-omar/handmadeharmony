# HandmadeHarmony

A full-stack e-commerce application for handmade crafts with a modern, responsive user interface and a robust admin panel.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Development](#development)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## About

**HandmadeHarmony** is a complete e-commerce solution for selling handmade products. The application features a customer-facing storefront built with React, a dedicated admin dashboard for product management, and a scalable Node.js/Express backend with MongoDB integration. Perfect for artisans and small businesses looking to establish an online presence.

## Features

- **Customer Frontend**: Browse products, view details, manage shopping cart, and checkout
- **Admin Dashboard**: Create, edit, and manage product listings with multiple images per product
- **Image Upload**: Seamless product image management with Multer
- **User Authentication**: Secure signup and login with JWT tokens and bcrypt password hashing
- **Responsive Design**: Mobile-friendly UI for all screen sizes
- **Product Search & Filtering**: Easy navigation and discovery of products
- **Cart Management**: Real-time cart updates and order tracking
- **MongoDB Integration**: Robust data persistence with Mongoose ODM

## Project Structure

```
handmadeharmony/
├── backend/              # Express.js API server
│   ├── index.js         # Main server file with all routes
│   ├── package.json
│   ├── upload/
│   │   └── images/      # Uploaded product images
│   └── .env             # Environment variables (create this file)
│
├── frontend/            # React customer application (Create React App)
│   ├── public/
│   ├── src/
│   │   ├── Components/  # Reusable React components
│   │   ├── Pages/       # Page components
│   │   ├── Context/     # ShopContext for state management
│   │   └── App.js
│   └── package.json
│
├── admin/               # React admin dashboard (Vite)
│   ├── src/
│   │   ├── Components/  # Admin UI components
│   │   ├── Pages/       # Admin pages
│   │   └── App.jsx
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

## Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local instance or MongoDB Atlas cloud database)

### Clone the Repository

```bash
git clone https://github.com/labib-omar/handmadeharmony.git
cd handmadeharmony
```

### Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the `backend/` directory with the following variables:
   ```
   PORT=4000
   MONGO_URI=mongodb://localhost:27017/handmadeharmony
   ```
   
   For MongoDB Atlas, replace `MONGO_URI` with your connection string:
   ```
   MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/handmadeharmony
   ```

4. **Start the server:**
   ```bash
   node index.js
   ```
   
   The backend will be available at `http://localhost:4000`

### Frontend Setup

1. **In a new terminal, navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   
   The frontend will automatically open at `http://localhost:3000`

### Admin Dashboard Setup

1. **In another terminal, navigate to the admin directory:**
   ```bash
   cd admin
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   
   The admin dashboard will be available at `http://localhost:5173`

## Configuration

### Environment Variables

Create a `.env` file in the `backend/` directory:

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Backend server port | `4000` |
| `MONGO_URI` | MongoDB connection string | `mongodb://localhost:27017/handmadeharmony` |

### Image Upload

- Images are stored in `backend/upload/images/`
- Files are served statically at `/images` endpoint
- Maximum file size and allowed formats can be configured in `backend/index.js` multer settings

## Development

### Project Dependencies

**Backend:**
- Express.js - Web framework
- MongoDB/Mongoose - Database and ODM
- Multer - File upload handling
- JWT - Authentication tokens
- Bcrypt - Password hashing
- CORS - Cross-origin resource sharing

**Frontend:**
- React 19 - UI library
- React Router v6 - Navigation
- React Markdown - Markdown rendering

**Admin:**
- React 19 - UI library
- Vite - Build tool
- React Router v7 - Navigation

### Build for Production

**Frontend:**
```bash
cd frontend
npm run build
```
Output: `frontend/build/`

**Admin:**
```bash
cd admin
npm run build
```
Output: `admin/dist/`

### Linting

Check code style in the admin dashboard:
```bash
cd admin
npm run lint
```

## API Endpoints

### Products

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/allproducts` | Retrieve all products |
| `POST` | `/addproduct` | Create a new product (admin) |
| `POST` | `/removeproduct` | Delete a product by ID |

### Image Upload

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/upload` | Upload product images (multipart/form-data) |

**Upload Request:**
- Field names: `image`, `image2`, `image3`, `image4`
- Response includes URLs for each uploaded image

**Example using cURL:**
```bash
curl -F "image=@product.jpg" http://localhost:4000/upload
```

### Users (if implementing authentication)

User model includes fields for authentication and cart data management.

## Contributing

We welcome contributions! To get involved:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code follows the project's style conventions and includes appropriate comments.

## Support

For issues, questions, or suggestions:
- Open an [issue](https://github.com/labib-omar/handmadeharmony/issues) on GitHub
- Check existing documentation in the codebase
- Review the component structure for usage examples

## License

This project is licensed under the ISC License - see the LICENSE file for details.

---

**Made with ❤️ by the HandmadeHarmony team**
