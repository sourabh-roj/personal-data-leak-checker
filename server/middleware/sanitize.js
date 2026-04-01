const xss = require("xss");

module.exports = (req, res, next) => {

  // If no body exists, skip sanitization
  if (!req.body || typeof req.body !== "object") {
    return next();
  }

  // Sanitize each field safely
  Object.keys(req.body).forEach(key => {
    if (typeof req.body[key] === "string") {
      req.body[key] = xss(req.body[key]);
    }
  });

  next();
};