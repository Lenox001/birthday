const countdownEl = document.getElementById("countdown");
const birthdayMessageEl = document.getElementById("birthdayMessage");
const countdownTitleEl = document.querySelector("h1"); // Selecting the title element

// Set the actual birthday date (November 2nd)
const birthday = new Date(new Date().getFullYear(), 10, 2); // November 2nd

function updateCountdown() {
  const now = new Date();
  const distance = birthday - now;

  if (distance < 0) {
    // Show the birthday message and start fireworks
    birthdayMessageEl.innerText = "🎉 Happy Birthday, Lenox! 🎉";
    startFireworks();

    // Hide the countdown and title element
    countdownEl.style.display = "none";
    countdownTitleEl.style.display = "none"; // Hide the title
  } else {
    // Continue displaying countdown
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownEl.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}

function startFireworks() {
  setInterval(createFirework, 500);
}

function createFirework() {
  const firework = document.createElement("div");
  firework.classList.add("firework");
  firework.style.background = getRandomColor();
  firework.style.top = `${Math.random() * window.innerHeight}px`;
  firework.style.left = `${Math.random() * window.innerWidth}px`;
  document.body.appendChild(firework);
  setTimeout(() => firework.remove(), 1000);
}

function getRandomColor() {
  const colors = ["#ff4b5c", "#ffad46", "#ffd166", "#06d6a0", "#1b9aaa"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function createFloatingElements() {
  const symbols = [
    "\u270D",
    "\u270E",
    "\u2714",
    "\u2716",
    "\u2601",
    "\u263C",
    "\u2728",
    "\u2730",
  ];
  for (let i = 0; i < symbols.length; i++) {
    const floatElement = document.createElement("div");
    floatElement.classList.add("floating", `float${i + 1}`);
    floatElement.innerText = symbols[i];
    document.body.appendChild(floatElement);
  }
}

updateCountdown();
setInterval(updateCountdown, 1000);
createFloatingElements();
