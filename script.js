
document.getElementById("showErrorsBtn").addEventListener("click", () => {
    document.getElementById("errorList").innerHTML = `
        <h3>All Customized Error Messages</h3>
        <ul>
            <li>❌ Invalid email format</li>
            <li>❌ Password too short</li>
            <li>❌ Field cannot be empty</li>
            <li>⚠️ 404 Page not found</li>
            <li>⚠️ 500 Server error</li>
            <li>⚠️ API fetch failed</li>
            <li>❌ Wrong OTP</li>
            <li>❌ Invalid phone number</li>
            <li>📁 Unsupported file type</li>
            <li>📁 File size too large</li>
        </ul>
    `;
    document.getElementById("errorList").classList.remove("hidden");
});


document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let email = emailInput.value.trim();
    let password = passwordInput.value.trim();
    
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    successMessage.innerHTML = "";

    let error = false;

    if (email === "") {
        emailError.innerHTML = "❌ Email cannot be empty.";
        error = true;
    } else if (!email.includes("@") || !email.includes(".")) {
        emailError.innerHTML = "❌ Invalid email format.";
        error = true;
    }

    if (password === "") {
        passwordError.innerHTML = "❌ Password cannot be empty.";
        error = true;
    } else if (password.length < 6) {
        passwordError.innerHTML = "❌ Password must be at least 6 characters.";
        error = true;
    }

    if (!error) {
        successMessage.innerHTML = "✔ Login successful!";
    }
});


apiButton.addEventListener("click", () => {
    fetch("https://invalid-api-123123.com")
        .catch(() => {
            apiError.innerHTML = "⚠️ API request failed. Network or server error.";
        });
});

const accBtns = document.querySelectorAll(".accordion-btn");
accBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    const isOpen = content.style.display === "block";
    document.querySelectorAll(".accordion-content").forEach(c => c.style.display = "none");
    content.style.display = isOpen ? "none" : "block";
  });
});


const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let currentIndex = 0;

function updateCarousel() {
  const width = items[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentIndex * width}px)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
  updateCarousel();
});


setInterval(() => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
}, 5000);
