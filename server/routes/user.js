const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { authenticateToken } = require("../middleware/requireLogin");
var nodemailer = require("nodemailer");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.json({ success: false, message: "Invalid password" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECERT_KEY);

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
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "An error occurred while logging",
    });
  }
});

// User registration
router.post("/register", async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      role,
      address,
      city,
      phone,
      profilePic,
      labourCategory,
    } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({
      name,
      email,
      password: hashedPassword,
      role,
      address,
      city,
      phone,
      image: profilePic,
      serviceProvided: labourCategory,
    });

    // Save the user to the database
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  try {
    const olduser = await User.findOne({ email });
    if (!olduser) {
      return res.json({ message: "User Not Exists" });
    }
    const secret = process.env.JWT_SECERT_KEY + olduser.password;
    const token = jwt.sign({ email: olduser.email, id: olduser._id }, secret, {
      expiresIn: "5m",
    });
    const link = `http://localhost:5000/api/user/reset-password/${olduser._id}/${token}`;
    console.log(link);
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "westley.mosciski@ethereal.email",
        pass: "mf3aRurpWy3zwP5N5F",
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
    return res.json({ status: "User Not Exists!!" });
  }
  const secret = process.env.JWT_SECERT_KEY + oldUser.password;

  try {
    const verify = jwt.verify(token, secret);
    res.render("index", { email: verify.email, status: "Verified" });
  } catch (error) {
    res.send("Not Verified");
  }
});

router.post("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  const oldUser = await User.findOne({ _id: id });

  if (!oldUser) {
    return res.json({ status: "User Not Exists!" });
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
    res.render("index", { status: "Something Went Wrong!" });
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
      res.status(500).json({ message: "Internal server error" });
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
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get labourers
router.get("/users/labourers", async (req, res) => {
  try {
    const labourers = await User.find({ role: "labour" });

    res.json(labourers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;