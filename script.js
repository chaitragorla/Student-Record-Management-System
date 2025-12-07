// Default PIN
const DEFAULT_PIN = "1234";

const pinInput = document.getElementById("adminPin");
const loginBtn = document.getElementById("btnLogin");
const msg = document.getElementById("message");
window.location.href = "srms.html";



loginBtn.onclick = () => {
    const pin = pinInput.value.trim();

    if (pin === "") {
        showMessage("Enter PIN", "red");
        return;
    }

    if (pin === DEFAULT_PIN) {
        showMessage("Login Successful!", "green");

        // Redirect (change the page you want here)
        setTimeout(() => {
            window.location.href = "dashboard.html"; 
        }, 800);
    } else {
        showMessage("Invalid PIN!", "red");
    }
};

function showMessage(text, color) {
    msg.textContent = text;
    msg.style.color = color;
}
