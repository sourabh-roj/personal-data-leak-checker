const passwordInput = document.getElementById("password");
const strengthBar = document.getElementById("strength");
const form = document.getElementById("form");
const resultDiv = document.getElementById("result");

passwordInput.addEventListener("input", () => {
  const val = passwordInput.value;
  let score = 0;

  if (val.length >= 8) score += 20;
  if (/[A-Z]/.test(val)) score += 20;
  if (/[a-z]/.test(val)) score += 20;
  if (/[0-9]/.test(val)) score += 20;
  if (/[^A-Za-z0-9]/.test(val)) score += 20;

  strengthBar.style.width = score + "%";
  strengthBar.style.background =
    score < 40 ? "red" :
    score < 80 ? "yellow" : "green";
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch("/api/check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, username, password })
    });

    const result = await res.json();

    resultDiv.innerHTML = `
      <p><strong>Risk:</strong> ${result.risk}</p>
      <p><strong>Score:</strong> ${result.score}</p>
      <p><strong>Entropy:</strong> ${result.entropy} bits</p>
      <ul>
        ${result.recommendations.map(r => 
  `<li class="${r.type}">${r.message}</li>`
).join("")}
      </ul>
    `;
  } catch (err) {
    resultDiv.innerHTML = "<p style='color:red;'>Server Error</p>";
  }
});