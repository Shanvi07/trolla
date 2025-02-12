require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/db.config");
const authRoutes = require("./routes/authRoutes");
const contactRoutes = require("./routes/contactRoutes");
const session = require("express-session");
const flash = require("connect-flash");
const methodOverride = require("method-override");
const MongoStore = require("connect-mongo");

// Use flash middleware


const app = express();
connectDB();

// Middleware
app.use(express.urlencoded({ extended: true}));


app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,  // Use your MongoDB URI here
    }),
    cookie: { secure: false } // Set secure to true if using HTTPS
}));

app.use(flash());
app.use(methodOverride("_method"));
app.set("view engine", "ejs");

// Routes
app.use(authRoutes);
app.use(contactRoutes);
app.use(flash());
app.get("/", (req, res) => {
  res.render("home", { title: "Home Page" });
});
app.get("/services", (req, res) => {
    res.render("services", { title: "services" });
  });
  app.get("/market", (req, res) => {
    res.render("market", { title: "market" });
  });
  app.get("/contact", (req, res) => {
    res.render("contact", { title: "contact" });
  });
  app.get("/register", (req, res) => {
    res.render("register", { title: "register" });
  });
  app.get("/login", (req, res) => {
    res.render("login", { title: "login" });
  });
  app.get("/profile", (req, res) => {
    res.render("profile", { title: "profile" });
  });
 
  app.listen(3001, () => {
      console.log(`Server is running on port ${3001}`);
  });
  