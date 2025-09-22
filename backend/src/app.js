const express = require("express");
const cookieParser = require("cookie-parser")
const authRoutes = require("./routes/auth.route");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//Auth routes
app.use("/api/auth", authRoutes);

module.exports = app;
