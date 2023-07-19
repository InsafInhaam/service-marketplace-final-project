const express = require("express");
const router = express.Router();
const Labour = require("../models/Labour");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const requireLogin = require("../middleware/requireLogin");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  // console.log({ email, password });
  // return res.json({ email, password });

  try {
    const labour = await Labour.findOne({ email });

    if (!labour) {
      return res.json({ success: false, message: "Labour not found" });
    }

    const validPassword = await bcrypt.compare(password, labour.password);

    if (!validPassword) {
      return res.json({ success: false, message: "Invalid password" });
    }

    // Generate JWT token
    const token = jwt.sign({ email: labour.email }, process.env.JWT_SECERT_KEY);

    res.json({ success: true, token });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "An error occurred while logging insaf" });
  }
});

router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const labour = new Labour({ email, password: hashedPassword });
    await labour.save();

    res.json({ success: true, message: "Labour registered successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        success: false,
        message: "An error occurred while registering labour",
      });
  }
});

// Get laborer profile by ID
router.get('/laborers/:id', async (req, res) => {
  try {
    const laborer = await Labour.findById(req.params.id);
    if (!laborer) {
      return res.status(404).json({ message: 'Labour not found' });
    }
    res.json(laborer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});  

// Get laborer ratings and reviews by ID
router.get('/laborers/:id/ratings-reviews', async (req, res) => {
  try {
    const laborer = await Labour.findById(req.params.id);
    if (!laborer) {
      return res.status(404).json({ message: 'Labour not found' });
    }
    const ratingsAndReviews = laborer.ratingsAndReviews;
    res.json(ratingsAndReviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get labours based on service provided
router.get('/labours/service/:serviceProvided', async (req, res) => {
  try {
    const { serviceProvided } = req.params;

    const labours = await Labour.find({ serviceProvided });

    res.json(labours);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// router.get("/alluser", requireLogin, async (req, res) => {
//   const users = await Labour.find()
//   .sort('-createdAt')

//   try {
//     res.status(201).json(users);
//   } catch (error) {
//     res.status(422).json({
//       error: error,
//     });
//   }
// });

// router.get("/getUserById/:id", requireLogin, async (req, res) => {
//   const labour = await Labour.findById(req.params.id)

//   try {
//     res.status(201).json(labour);
//   } catch (error) {
//     res.status(422).json({
//       error: error,
//     });
//   }
// });

// router.put("/updateuser/:id", requireLogin, async (req, res) => {
//   const updateUser = await Labour.findByIdAndUpdate(
//     req.params.id,
//     {
//       $set: req.body,
//     },
//     {
//       new: true,
//     }
//   );

//   try {
//     res.status(201).json({updateUser, message: "Updated successfully"});
//   } catch (error) {
//     res.status(422).json({
//       error: error,
//     });
//   }
// });

module.exports = router;