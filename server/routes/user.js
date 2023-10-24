const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { authenticateToken } = require("../middleware/requireLogin");
var nodemailer = require("nodemailer");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../helpers/token");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ success: false, error: "User not found" });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.json({ success: false, error: "Invalid password" });
    }

    // Generate JWT token
    const accessToken = generateAccessToken({ id: user._id });
    const refreshToken = generateRefreshToken({ id: user._id });

    const decodedToken = jwt.decode(accessToken);
    const expirationTime = decodedToken.exp * 1000; // Convert seconds to milliseconds
  
    // const token = jwt.sign({ id: user._id }, process.env.JWT_SECERT_KEY);

    const { _id, name, image, address, phone, city, role } = user;

    return res.status(200).json({
      message: "Successfully logged in",
      user: {
        email: user.email,
        _id,
        name,
        image,
        address,
        phone,
        city,
        role,
      },
      accessToken,
      refreshToken,
      expirationTime
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "An error occurred while logging",
      details: error.message,
    });
  }
});

// Middleware to authenticate the refresh token
const authenticateRefreshToken = (req, res, next) => {
  const refreshToken = req.body.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ error: 'Refresh token not provided' });
  }

  try {
    // Verify the refresh token
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

    // Attach the user ID to the request for further processing
    req.userId = decoded.id;

    next();
  } catch (error) {
    console.error('Error verifying refresh token:', error);
    return res.status(403).json({ error: 'Invalid refresh token' });
  }
};

// Route to refresh the access token
router.post('/refresh-token', authenticateRefreshToken, (req, res) => {
  // In this route, you would generate a new access token and send it back to the client
  const accessToken = jwt.sign({ id: req.userId }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '15m', // Set an appropriate expiration time
  });

  res.json({ accessToken });
});

// User registration
router.post("/register", async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      // role,
      // address,
      // city,
      // phone,
      // profilePic,
      // labourCategory,
      // hourlyPrice,
    } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({
      name,
      email,
      password: hashedPassword,
      // role,
      // address,
      // city,
      // phone,
      // image: profilePic,
      // serviceProvided: labourCategory,
      // hourlyPrice,
    });

    // Save the user to the database
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  try {
    const olduser = await User.findOne({ email });
    if (!olduser) {
      return res.json({ error: "User Not Exists" });
    }
    const secret = process.env.JWT_SECERT_KEY + olduser.password;
    const token = jwt.sign({ email: olduser.email, id: olduser._id }, secret, {
      expiresIn: "5m",
    });
    const link = `http://localhost:5000/api/user/reset-password/${olduser._id}/${token}`;
    console.log(link);

    var transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "cdb220c46b7ba4",
        pass: "02f20cd955bee5",
      },
    });

    var mailOptions = {
      from: "insafinh@gmail.com",
      to: olduser.email,
      subject: "Reset Password link",
      text: link,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
        return res.json({
          message: "Reset Password link has been sent to your email!!",
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  console.log(req.params);
  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ error: "User Not Exists!!" });
  }
  const secret = process.env.JWT_SECERT_KEY + oldUser.password;

  try {
    const verify = jwt.verify(token, secret);

    res.render("index", { email: verify.email, status: "Not Verified" });
  } catch (error) {
    res.send("Not Verified");
  }
});

router.post("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  const oldUser = await User.findOne({ _id: id });

  if (!oldUser) {
    return res.json({ error: "User Not Exists!" });
  }

  const secret = process.env.JWT_SECERT_KEY + oldUser.password;

  try {
    const verify = jwt.verify(token, secret);
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          password: hashedPassword,
        },
      }
    );

    res.render("index", { email: verify.email, status: "verified" });
  } catch (error) {
    console.log(error);
    res.render("index", { error: "Something Went Wrong!" });
  }
});

router.post("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  try {
    const user = await User.findOne({
      _id: id,
      resetToken: token,
      resetTokenExpiration: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ error: "Invalid or expired token" });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update the user's password in the database
    user.password = hashedPassword;
    user.resetToken = null;
    user.resetTokenExpiration = null;
    await user.save();

    res.json({ message: "Password reset successful" });
  } catch (err) {
    console.error("Error resetting password:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get users based on service provided
router.get(
  "/users/service/:serviceProvided",
  // authenticateToken,
  async (req, res) => {
    try {
      const { serviceProvided } = req.params;

      const users = await User.find({ serviceProvided, role: "labour" });

      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

// Get customers
router.get("/users/customers", async (req, res) => {
  try {
    const customers = await User.find({ role: "customer" });

    res.json(customers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get labourers
router.get("/users/labourers", async (req, res) => {
  try {
    const labourers = await User.find({ role: "labour" });

    res.json(labourers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Delete an user
router.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndRemove(req.params.id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get users by ID
router.get("/user/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update user's latitude and longitude and address
router.put('/updateLocation/:userId', async (req, res) => {
  const { address, latitude, longitude } = req.body;
  const userId = req.params.userId;

  try {
    const updatedUser = await User.findByIdAndUpdate(userId, { address, latitude, longitude }, { new: true });
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error('Error updating user location:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;