// sub menu script
document.addEventListener("DOMContentLoaded", () => {
  const menuItem = document.querySelector(".has-submenu");

  menuItem.querySelector(".main-item").addEventListener("click", function () {
    const submenu = menuItem.querySelector(".submenu");

    submenu.classList.toggle("open");
    menuItem.classList.toggle("active");
  });
});



// Generate random captcha
function generateCaptcha() {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let captchaText = "";
  for (let i = 0; i < 5; i++) {
    captchaText += chars[Math.floor(Math.random() * chars.length)];
  }
  document.getElementById("captcha").textContent = captchaText;
}

generateCaptcha();

// Show / Hide Password
document.getElementById("togglePassword").onclick = function () {
  const pass = document.getElementById("password");
  pass.type = pass.type === "password" ? "text" : "password";
};

// Login BTN Click
function login() {
  const captcha = document.getElementById("captcha").textContent;
  const enteredCaptcha = document.getElementById("captchaInput").value;

  if (enteredCaptcha !== captcha) {
    alert("Captcha Incorrect!");
    generateCaptcha();
    return;
  }

  alert("Login Successful!");
}


// pia chat js here start

const ctx = document.getElementById('attendanceChart');

new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Present", "Absent"],
    datasets: [{
      data: [99.5, 0.5],
      backgroundColor: ["#2A75AE", "#F58634"]
    }]
  }
});

// pia chat js here end


// Aside show or hide 

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

// ============================================================






