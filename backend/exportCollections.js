// exportCollections.js
require("dotenv").config();
const mongoose = require("mongoose");
const fs = require("fs");

const uri = process.env.MONGO_URI; // your MongoDB URI

mongoose.connect(uri)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("DB Connection Error:", err));

// Example for Products collection
const Product = mongoose.model("Product", new mongoose.Schema({}, { strict: false }));

async function exportCollection(model, fileName) {
  try {
    const data = await model.find({});
    fs.writeFileSync(fileName, JSON.stringify(data, null, 2));
    console.log(`${fileName} exported successfully!`);
  } catch (err) {
    console.error("Export Error:", err);
  }
}

// Export products and users
const User = mongoose.model("User", new mongoose.Schema({}, { strict: false }));

async function exportAll() {
  await exportCollection(Product, "products.json");
  await exportCollection(User, "users.json");
  mongoose.disconnect();
}

exportAll();
