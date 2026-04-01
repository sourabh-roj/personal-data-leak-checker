function calculateRisk(password, breached) {
  if (breached) return "HIGH";

  if (password.length < 8) return "HIGH";
  if (password.length < 12) return "MEDIUM";

  return "LOW";
}

module.exports = { calculateRisk };