const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Labour = require("../models/Labour");

// Middleware to authenticate token
exports.authenticateToken = async (req, res, next) => {
  const { authorization } = req.headers;

  console.log('Authorization header:', authorization);

  if (!authorization) {
    console.error('No Authorization header');
    return res.status(401).json({ error: 'You must be logged in' });
  }

  const token = authorization.replace("Bearer ", "");

  try {
    const payload = jwt.verify(token, process.env.JWT_SECERT_KEY);
    // console.log(payload);
    const user = await User.findById(payload.id);

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error('Token verification error:', error);
    res.status(401).json({ error: "You must be logged in" });
  }
};

exports.authenticateTokenLabour = async (req, res, next) => {
  const { authorization } = req.headers;

  console.log('Authorization header:', authorization);

  if (!authorization) {
    console.error('No Authorization header');
    return res.status(401).json({ error: 'You must be logged in' });
  }

  const token = authorization.replace("Bearer ", "");

  try {
    const payload = jwt.verify(token, process.env.JWT_SECERT_KEY);
    // console.log(payload);
    const user = await Labour.findById(payload.id);

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error('Token verification error:', error);
    res.status(401).json({ error: "You must be logged in" });
  }
};

// Middleware to check user type
exports.requireUserType = (userType) => {
  return (req, res, next) => {
    const { user } = req;

    if (!user) {
      return res.status(401).json({ error: "You must be logged in" });
    }

    if (user.role !== userType) {
      return res
        .status(401)
        .json({ error: "You are not authorized to access this resource" });
    }

    next();
  };
};
