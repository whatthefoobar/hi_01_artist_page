const toggleBtn = document.querySelectorAll(".toggle-btn")[0];
const navLinks = document.querySelectorAll(".nav-links")[0];

toggleBtn.addEventListener("click", function() {
  navLinks.classList.toggle("active")
});

