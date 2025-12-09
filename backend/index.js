require("dotenv").config();

const port = process.env.PORT;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { type } = require("os");
const { error } = require("console");
const bcrypt = require("bcrypt");

app.use(express.json());
app.use(cors());

//Database connection with MongoDB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.error("DB Error:", err));

// API Creation

app.get("/", (req, res) => {
    res.send("Express app is running");
});

// Image Storage Engine
const storage = multer.diskStorage({
    destination: "./upload/images",
    filename: (req, file, cb) => {
        return cb(
            null,
            `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
        );
    },
});
const upload = multer({ storage: storage });

// Creating Upload Endpoint for Images
app.use("/images", express.static("upload/images"));
app.post(
    "/upload",
    upload.fields([
        { name: "image", maxCount: 1 },
        { name: "image2", maxCount: 1 },
        { name: "image3", maxCount: 1 },
        { name: "image4", maxCount: 1 },
    ]),
    (req, res) => {
        const files = req.files;

        res.json({
            success: 1,
            image: files.image
                ? `http://localhost:${port}/images/${files.image[0].filename}`
                : "",
            image2: files.image2
                ? `http://localhost:${port}/images/${files.image2[0].filename}`
                : "",
            image3: files.image3
                ? `http://localhost:${port}/images/${files.image3[0].filename}`
                : "",
            image4: files.image4
                ? `http://localhost:${port}/images/${files.image4[0].filename}`
                : "",
        });
    }
);

// Schema for Creating Products
const Product = mongoose.model("Product", {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    image2: {
        type: String,
        required: true
    },
    image3: {
        type: String,
        required: true
    },
    image4: {
        type: String,
        required: true
    },
    short_description: {
        type: String,
        required: true,
    },
    long_description: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    },
});

app.post("/addproduct", async (req, res) => {
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    } else {
        id = 1;
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        image2: req.body.image2,
        image3: req.body.image3,
        image4: req.body.image4,
        short_description: req.body.short_description,
        long_description: req.body.long_description,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success: true,
        name: req.body.name,
    });
});

// Creating API for Deleting Products
app.post("/removeproduct", async (req, res) => {
    await Product.findOneAndDelete({
        id: req.body.id,
    });
    console.log("Removed");
    res.json({
        success: true,
        name: req.body.name,
    });
});

// Creating API for getting all products
app.get("/allproducts", async (req, res) => {
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.send(products);
});

// Schema for creating User model
const User = mongoose.model("User", {
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    cartData: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

// Creating Endpoint for User Registration
app.post("/signup", async (req, res) => {
    let check = await User.findOne({ email: req.body.email });
    if (check) {
        return res
            .status(400)
            .json({ success: false, errors: "User with same email already exists" });
    }

    let cart = {};
    for (let i = 1; i < 300; i++) {
        cart[i] = 0;
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
        name: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        cartData: cart,
    });

    await user.save();

    const data = {
        user: {
            id: user.id,
        },
    };

    const token = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.json({ success: true, token });
});

//Creating Endpoint for User Login
app.post("/login", async (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res
            .status(400)
            .json({ success: false, errors: "Email and password are required." });
    }

    let user = await User.findOne({ email: req.body.email });
    if (user) {
        const passCompare = await bcrypt.compare(req.body.password, user.password);
        if (passCompare) {
            const data = {
                user: {
                    id: user.id,
                },
            };
            const token = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: "7d" });
            res.json({ success: true, token });
        } else {
            res.json({ success: false, errors: "Wrong Password" });
        }
    } else {
        res.json({ success: false, errors: "User with this email does not exist" });
    }
});

// Create Endpoint for new Collection
app.get("/newcollections", async (req, res) => {
    let products = await Product.find({});
    let newcollection = products.slice(1).slice(-3).reverse();
    console.log("New Collections Fetched");
    res.send(newcollection);
});

// create middleware to fetch user
const fetchuser = (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" });
    } else {
        try {
            const data = jwt.verify(token, process.env.JWT_SECRET);
            req.user = data.user;
            next();
        } catch (error) {
            res
                .status(401)
                .send({ errors: "Please authenticate using a valid token" });
        }
    }
};

// // Creating Endpoint for adding products in cartdata
app.post("/addtocart", fetchuser, async (req, res) => {
    console.log("Add to cart received:", req.body);
    let userData = await User.findOne({ _id: req.user.id });
    userData.cartData[req.body.itemID] += 1;
    await User.findByIdAndUpdate(
        { _id: req.user.id },
        { cartData: userData.cartData }
    );
    res.send("Added");
    console.log("Cart updated for user:", req.user.id);
});

app.post("/removefromcart", fetchuser, async (req, res) => {
    console.log("Remove from cart received:", req.body);
    let userData = await User.findOne({ _id: req.user.id });
    if (userData.cartData[req.body.itemID] > 0)
        userData.cartData[req.body.itemID] -= 1;
    await User.findByIdAndUpdate(
        { _id: req.user.id },
        { cartData: userData.cartData }
    );
    res.send("Removed");
    console.log("Cart updated for user:", req.user.id);
});

// Creating Endpoint to get CartData
app.post("/getcartdata", fetchuser, async (req, res) => {
    let userData = await User.findOne({ _id: req.user.id });
    res.json(userData.cartData);
    console.log("Cart Data sent for user:", req.user.id);
});

app.listen(port, (error) => {
    if (!error) {
        console.log("Server Running and App is listening on port " + port);
    } else {
        console.log("Error occurred, server can't start: ", error);
    }
});
