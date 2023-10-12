const jwt = require("jsonwebtoken");

const generateAccessToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECERT_KEY, { expiresIn: "15m" });
};

const generateRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECERT_KEY);
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
};