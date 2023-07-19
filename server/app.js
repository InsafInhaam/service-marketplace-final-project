const express = require("express");
const connectDB = require("./config/Database");
const dotenv = require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.use("/api/labour", require('./routes/labour'));
app.use("/api/user", require('./routes/user'));
app.use("/api/booking", require('./routes/booking'));
app.use("/api/ratingReviews", require('./routes/ratingReviews'));
app.use("/api/services", require('./routes/services'));
app.use("/api/admin", require('./routes/admin'));
app.use("/api/categories", require('./routes/categories'));

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});