const express = require("express");
const connectDB = require("./config/Database");
const dotenv = require("dotenv").config();
const cors = require("cors");
const http = require("http");
const socketIO = require("socket.io");
const orderRoute = require("./routes/orderRoute"); // Import your order route

const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

const server = http.createServer(app);
const io = socketIO(server);
// Set up Socket.IO to use in the routes
app.set("io", io);

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
app.use("/api/orders", orderRoute);
app.use("/api/wallet", require("./routes/wallet"));

// Socket.IO handling
// io.on("connection", (socket) => {
//   console.log("A user connected");

//   // Inside your 'newOrder' event handler
//   socket.on("newOrder", async (order) => {
//     try {
//       // Assuming the order has customerLatitude and customerLongitude properties
//       const { customerLatitude, customerLongitude } = order;

//       // Find labor within a certain radius (e.g., 10 kilometers)
//       const labor = await Labour.findOne({
//         location: {
//           $near: {
//             $geometry: {
//               type: "Point",
//               coordinates: [customerLongitude, customerLatitude],
//             },
//             $maxDistance: 10000, // 10 kilometers in meters
//           },
//         },
//       });

//       if (labor) {
//         // Emit an event to the specific labor
//         io.to(labor.socketId).emit("newOrderNotification", order);
//       }
//     } catch (error) {
//       console.error("Error handling new order:", error);
//     }
//   });

//   socket.on("disconnect", () => {
//     console.log("A user disconnected");
//   });
// });

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
