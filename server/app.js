require('dotenv').config();
const express = require('express');
const cors = require('cors');

require('./models/associations');


const userRoutes = require('./routes/userRoutes');
const productRoutes = require ('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const wishlistRoutes = require('./routes/wishlistRoutes');
const orderRoutes = require('./routes/orderRoutes');
const emailRoutes = require('./routes/emailRoutes');


const app = express();

// CORS setup
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3002",
];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// Middlewares
app.use(cors());
// app.use(cors()); // Allow all origins in dev
app.use(express.json());

// Routes
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/cart', cartRoutes);
app.use('/wishlist', wishlistRoutes);
app.use('/orders', orderRoutes);
app.use('/email', emailRoutes);


// Static files
app.use("/uploads", express.static("uploads"));


const errorHandler = require("./middlewares/errorHandler");
app.use(errorHandler);


// Database and server setup
const sequelize = require("./config/database");
const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log(
      "Connection to the database has been established successfully."
    );
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

startServer();
