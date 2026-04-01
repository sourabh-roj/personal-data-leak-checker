function calculateStrength(password, entropy) {
  let score = 0;

  score += Math.min(password.length * 4, 40);
  score += Math.min(entropy / 2, 40);

  if (/[A-Z]/.test(password)) score += 5;
  if (/[0-9]/.test(password)) score += 5;
  if (/[^a-zA-Z0-9]/.test(password)) score += 10;

  return Math.min(Math.round(score), 100);
}

module.exports = { calculateStrength };