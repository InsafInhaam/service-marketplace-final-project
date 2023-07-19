const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware to authenticate token
exports.authenticateToken = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({ error: 'You must be logged in' });
    return;
  }

  const token = authorization.replace('Bearer ', '');

  try {
    const payload = jwt.verify(token, process.env.JWT_SECERT_KEY);
    // console.log(payload);
    const userdata = await User.findById(payload.id);

    if (!userdata) {
      return res.status(401).json({ error: 'User not found' });
    }

    req.user = userdata;
    next();
  } catch (error) {
    res.status(401).json({ error: 'You must be logged in' });
  }
};

// Middleware to check user type
exports.requireUserType = (userType) => {
  return (req, res, next) => {
    const { user } = req;

    if (!user) {
      return res.status(401).json({ error: 'You must be logged in' });
    }

    if (user.role !== userType) {
      return res
        .status(401)
        .json({ error: 'You are not authorized to access this resource' });
    }

    next();
  };
};
