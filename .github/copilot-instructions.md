<!-- copilot-instructions.md: concise, actionable guidance for AI coding agents -->

# HandmadeHarmony — Copilot instructions

This file explains the project layout, run/build commands, key integration points, and code patterns an AI agent should know to be productive immediately.

- **Big picture:** Full-stack e-commerce app with three apps in the repo:

  - `backend/` — Express + MongoDB API and image uploads (single `index.js`).
  - `frontend/` — React app bootstrapped with Create React App (`frontend/src`).
  - `admin/` — Separate admin React app using Vite (`admin/`).

- **Where data lives & flows:**

  - Products are persisted in MongoDB via the Mongoose model in `backend/index.js` (fields: `id, name, image, category, new_price, old_price, date, available`).
  - Uploaded images are stored on disk at `backend/upload/images` and served statically at `/images`.
  - Frontend reads product lists from the backend endpoint `GET /allproducts` and posts product creation to `POST /addproduct`.

- **Important endpoints (examples)**

  - `GET /allproducts` — returns product array (see `backend/index.js`).
  - `POST /upload` — multipart form upload; form field name is `product`; response contains `image_url` like `http://localhost:{PORT}/images/{filename}`.
  - `POST /addproduct` — accepts JSON product data and auto-increments `id`.
  - `POST /removeproduct` — removes by `id`.

- **Environment & run commands**

  - Backend expects environment variables: `PORT` and `MONGO_URI` (used in `backend/index.js`). Start the server with `node index.js` from `backend/` (there is no `start`/`dev` script in `backend/package.json`).
  - Frontend (CRA): run `npm install` then `npm start` from `frontend/`.
  - Admin (Vite): run `npm install` then `npm run dev` from `admin/`.

- **Project-specific conventions & patterns**

  - Frontend uses functional React components and one CSS file per component (see `frontend/src/Components/*`).
  - App-level state for cart is implemented in `frontend/src/Context/ShopContext.jsx`. The `cartItems` object is initialized based on `all_product` (index keyed numeric properties).
  - Product assets/data live under `frontend/src/Components/Assets/` (example: `all_product.js`).
  - The backend uses a simple numeric auto-increment `id` derived from the last saved product (see `addproduct` logic).

- **Integration notes for agents**

  - Always check or create a `.env` in `backend/` with `PORT` and `MONGO_URI` before running the server locally. README suggests `http://localhost:4000` as a common backend URL, but the actual port is the configured `PORT`.
  - Uploaded images are referenced by URL returned from `/upload`; callers expect the `image_url` field.
  - When changing backend routes or response shapes, update frontend calls and any hard-coded URLs in `frontend/src` and `admin/src`.

- **Where to look for examples and patterns**

  - API and upload handling: `backend/index.js`.
  - Cart and product state: `frontend/src/Context/ShopContext.jsx` and `frontend/src/Components/CartItems/`.
  - Product seed/data and details: `frontend/src/Components/Assets/all_product.js` and adjacent `details.txt` files.

- **Quick code tasks an agent may be asked to do (how-to hints)**
  - Add a backend start script: modify `backend/package.json` scripts to include `"start": "node index.js"` so `npm start` works.
  - Use `fetch('http://localhost:{PORT}/allproducts')` from frontend to retrieve products; prefer using a single base-URL constant if adding multiple API calls.
  - To test image upload: `curl -F "product=@path/to/file.jpg" http://localhost:{PORT}/upload`.

If anything here is unclear or you want additional examples (API client snippets, suggested npm scripts, or precise port defaults), tell me which section to expand.
