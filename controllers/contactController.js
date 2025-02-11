const nodemailer = require("nodemailer");

exports.getContact = (req, res) => {
    res.render("contact", { message: req.flash("message") });
};

exports.postContact = async (req, res) => {
    const { name, email, message } = req.body;

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,  // Your email
            pass: process.env.EMAIL_PASS   // Your app password
        }
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Contact Form Submission from ${name}`,
        text: message
    };

    try {
        await transporter.sendMail(mailOptions);
        req.flash("message", "Message sent successfully!");
    } catch (error) {
        req.flash("message", "Error sending message.");
        console.error(error);
    }

    res.redirect("/contact");
};
