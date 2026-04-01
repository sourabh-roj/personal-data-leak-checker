function generateRecommendations(password, breached) {
  const tips = [];

  if (breached) {
    tips.push({
      type: "critical",
      message: "🚨 CRITICAL: This password has been found in known breach databases. It is unsafe and must not be used."
    });

    tips.push({
      type: "critical",
      message: "Immediately change this password everywhere it is used."
    });

    tips.push({
      type: "critical",
      message: "If reused across multiple sites, those accounts may already be compromised."
    });
  }

  if (password.length < 12) {
    tips.push({ type: "warning", message: "Use at least 12 characters." });
  }

  if (!/[A-Z]/.test(password)) {
    tips.push({ type: "warning", message: "Add uppercase letters." });
  }

  if (!/[0-9]/.test(password)) {
    tips.push({ type: "warning", message: "Add numbers." });
  }

  if (!/[^a-zA-Z0-9]/.test(password)) {
    tips.push({ type: "warning", message: "Add special characters." });
  }

  tips.push({ type: "info", message: "Enable Two-Factor Authentication (2FA)." });
  tips.push({ type: "info", message: "Use a password manager." });

  return tips;
}

module.exports = { generateRecommendations };