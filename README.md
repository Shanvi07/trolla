🚚 Trolla – Freight Transportation Platform

Trolla is a full-stack freight transportation web platform where users can explore logistics services, browse the freight market, register securely and get in touch with the team, built with Node.js, Express.js and MongoDB.

🔗 Live Demo: trolla.onrender.com

 The demo is hosted on Render's free tier, so the first load may take up to a minute while the server wakes up.

 Screenshots
Home	Services
Home page	Services page
Login	Profile
Login page	Profile page
 Features
User authentication: Registration and login with passwords hashed using bcrypt
Persistent sessions: Sessions stored in MongoDB with connect-mongo, so users stay logged in across server restarts
JWT support: Token-based authentication using jsonwebtoken
Contact form: Submissions saved to MongoDB, with email notifications sent through Nodemailer
Flash messages: Instant feedback for actions like successful login or form errors
Multiple pages: Home, Services, Market, Contact, Register, Login and Profile
Smooth animations: Built with GSAP for an engaging user experience
Responsive design: Works across desktop, tablet and mobile screens
 Tech Stack
Layer	Technologies
Backend	Node.js, Express.js
Database	MongoDB, Mongoose
Frontend	EJS, Tailwind CSS, JavaScript, GSAP
Authentication	bcrypt, JSON Web Tokens (JWT), express-session, connect-mongo
Other	Nodemailer, connect-flash, method-override, dotenv
Deployment	Render
Folder Structure
trolla/
├── config/          # Database connection setup
├── controllers/     # Request handling logic for auth and contact
├── models/          # Mongoose schemas (User, Contact)
├── routes/          # Express route definitions
├── views/           # EJS templates for each page
├── app.js           # App entry point: middleware, routes, server
├── package.json
└── .env.example     # Sample environment variables
⚙️ Getting Started
Prerequisites
Node.js (v18 or later)
A MongoDB database (local or MongoDB Atlas)
Installation
Clone the repository
bash
   git clone https://github.com/Shanvi07/trolla.git
   cd trolla
Install dependencies
bash
   npm install
Set up environment variables Create a .env file in the root folder (see the section below).
Start the server
bash
   npm start
Open http://localhost:3000 in your browser.
 Environment Variables

Create a .env file in the root directory with the following:

env
PORT=3000
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_app_password
 Challenges and What I Learned
Keeping users logged in: By default, Express sessions are stored in memory and are lost whenever the server restarts. I moved session storage to MongoDB using connect-mongo, which taught me how sessions work behind the scenes and why in-memory storage isn't suitable for production.
Securing passwords: I learned why passwords must never be stored as plain text and how bcrypt's salting and hashing protect user data, even if the database is exposed.
Structuring an Express app: Splitting the code into models, controllers and routes (MVC pattern) made the project easier to debug and extend as new pages and features were added.
Deploying to production: Deploying on Render taught me how to manage secrets with environment variables instead of hardcoding them, and how hosting platforms run Node.js apps.
 Future Improvements
Rebuild the frontend in React.js with TypeScript to make Trolla a complete MERN application
Add shipment booking and real-time shipment tracking
Expose RESTful JSON APIs for shipments and users
Add automated tests with Jest
 Author

Shanvi Pandey

GitHub: @Shanvi07
LinkedIn: shanvi-pandey
Email: pandey07shanvi@gmail.com
