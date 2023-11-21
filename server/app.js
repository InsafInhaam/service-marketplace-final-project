const express = require("express");
const connectDB = require("./config/Database");
const dotenv = require("dotenv").config();
const cors = require("cors");
const http = require("http");
const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.use("/api/labour", require("./routes/labour"));
app.use("/api/user", require("./routes/user"));
app.use("/api/booking", require("./routes/booking"));
app.use("/api/services", require("./routes/services"));
app.use("/api/admin", require("./routes/admin"));
app.use("/api/categories", require("./routes/categories"));
app.use("/api/subcategories", require("./routes/subcategories"));
app.use("/api/promo", require("./routes/promo"));
app.use("/api/complain", require("./routes/complain"));
app.use("/api/reviews", require("./routes/reviews"));
app.use("/api/orders", require("./routes/orderRoute"));
app.use("/api/wallet", require("./routes/wallet"));
app.use("/api/message", require("./routes/messages"));
app.use("/api/notification", require("./routes/notification"));
app.use("/api/contact", require("./routes/contactRoutes"));

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});

module.exports = app;