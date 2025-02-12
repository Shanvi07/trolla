const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.getRegister = (req, res) => res.render("register", { message: req.flash("message") });

exports.postRegister = async (req, res) => {
    const { name, email, password } = req.body;

    // Log the extracted data to check if it's coming through
    console.log("Register Data:", { name, email, password });

    let user = await User.findOne({ email });

    if (user) {
        req.flash("message", "User already exists!");
        return res.redirect("/register");
    }
else{
    res.redirect("/")
}
    user = new User({ name, email, password });

    try {
        await user.save();
        req.flash("message", "Registered successfully! Please login.");
        res.redirect("/login");
    } catch (error) {
        console.error("Error saving user:", error);
        req.flash("message", "An error occurred. Please try again.");
        res.redirect("/register");
    }
};

exports.getLogin = (req, res) => res.render("login", { message: req.flash("message") });

exports.postLogin = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
        req.flash("message", "Invalid email or password!");
        return res.redirect("/login");
    }

    req.session.user = { id: user._id, name: user.name };
    res.redirect("/");
};

exports.logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect("/login");
    });
};
 // Check the fetched user
