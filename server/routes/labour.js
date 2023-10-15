const express = require("express");
const router = express.Router();
const Labour = require("../models/Labour");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { generateAccessToken, generateRefreshToken } = require("../helpers/token");
// const requireLogin = require("../middleware/requireLogin");

router.post("/register", async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      email,
      password,
      profilePic,
      address,
      phone,
      labourCategory,
      hourlyPrice,
      latitude,
      longitude,
    } = req.body;

    // Check if the email already exists
    const existingUser = await Labour.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new Labour instance
    const newLabour = new Labour({
      firstname,
      lastname,
      email,
      password: hashedPassword, // Save the hashed password
      address,
      phone,
      image: profilePic,
      serviceProvided: labourCategory,
      hourlyPrice,
      latitude,
      longitude,
    });

    // Save the new labour to the database
    const savedLabour = await newLabour.save();

    res.json({ message: "Labour registered successfully", data: savedLabour });
  } catch (error) {
    console.error("Error registering labour:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const labour = await Labour.findOne({ email });

    if (!labour) {
      return res.json({ success: false, error: "Labour not found" });
    }

    const validPassword = await bcrypt.compare(password, labour.password);

    if (!validPassword) {
      return res.json({ success: false, error: "Invalid password" });
    }

    // Generate JWT token
    const accessToken = generateAccessToken({ id: labour._id });
    const refreshToken = generateRefreshToken({ id: labour._id });

    // const token = jwt.sign({ id: labour._id }, process.env.JWT_SECERT_KEY);

    const { _id, name, image, address, phone, city, role } = labour;

    return res.status(200).json({
      message: "Successfully logged in",
      labour: {
        email: labour.email,
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
    return res.status(401).json({ error: "Refresh token not provided" });
  }

  try {
    // Verify the refresh token
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

    // Attach the labour ID to the request for further processing
    req.labourId = decoded.id;

    next();
  } catch (error) {
    console.error("Error verifying refresh token:", error);
    return res.status(403).json({ error: "Invalid refresh token" });
  }
};

// Route to refresh the access token
router.post("/refresh-token", authenticateRefreshToken, (req, res) => {
  // In this route, you would generate a new access token and send it back to the client
  const accessToken = jwt.sign(
    { id: req.labourId },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "15m", // Set an appropriate expiration time
    }
  );

  res.json({ accessToken });
});

// Get laborer profile by ID
router.get("/laborers/:id", async (req, res) => {
  try {
    const laborer = await Labour.findById(req.params.id);
    if (!laborer) {
      return res.status(404).json({ message: "Labour not found" });
    }
    res.json(laborer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get laborer ratings and reviews by ID
router.get("/laborers/:id/ratings-reviews", async (req, res) => {
  try {
    const laborer = await Labour.findById(req.params.id);
    if (!laborer) {
      return res.status(404).json({ message: "Labour not found" });
    }
    const ratingsAndReviews = laborer.ratingsAndReviews;
    res.json(ratingsAndReviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get labours based on service provided
router.get("/labours/service/:serviceProvided", async (req, res) => {
  try {
    const { serviceProvided } = req.params;

    const labours = await Labour.find({ serviceProvided });

    res.json(labours);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
