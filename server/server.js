require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const path = require("path");

const connectDB = require("./config/db");
const sanitize = require("./middleware/sanitize");

const { generateSalt, hashPassword } = require("./utils/hash");
const { calculateEntropy } = require("./utils/entropy");
const { calculateStrength } = require("./utils/strengthScore");
const { generateRecommendations } = require("./utils/recommendations");

const breachedList = require("./data/breachedPasswords.json");
const ScanLog = require("./models/ScanLog");

connectDB();

const app = express();

/* Security Middleware */
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(sanitize);

app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 25
}));

/* API Route */
app.post("/api/check", async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const salt = generateSalt();
    const passwordHash = hashPassword(password, salt);

    const plainHash = hashPassword(password);
    const breached = breachedList.includes(plainHash);

    const entropy = calculateEntropy(password);
    const score = calculateStrength(password, entropy);

    const risk =
      breached ? "HIGH"
      : score < 50 ? "HIGH"
      : score < 75 ? "MEDIUM"
      : "LOW";

    const recommendations = generateRecommendations(password, breached);

    await ScanLog.create({
      email,
      username,
      passwordHash,
      salt,
      breached,
      entropy,
      score,
      risk
    });

    res.json({ breached, entropy, score, risk, recommendations });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

/* Serve Frontend */
app.use(express.static(path.join(__dirname, "../client")));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);