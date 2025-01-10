const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;

const authMiddleWare = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Unauthorized: Missing or invalid token" });
  }

  const token = authHeader.split(" ")[1];
  if (!process.env.SECRET_KEY) {
    console.error("ACCESS_TOKEN_SECRET is not set in environment variables.");
    return res.status(500).json({ message: "Internal server error" });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      console.error("JWT verification failed:", err.message);
      return res
        .status(403)
        .json({ message: "Forbidden: Invalid or expired token" });
    }
    req.user = user;
    next();
  });
};

module.exports = {
    authMiddleWare
};
