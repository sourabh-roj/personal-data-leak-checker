function calculateEntropy(password) {
  const charset = 94;
  return Math.round(password.length * Math.log2(charset));
}

module.exports = { calculateEntropy };