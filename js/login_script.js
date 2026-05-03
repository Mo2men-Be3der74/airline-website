document.addEventListener("DOMContentLoaded", function () {
    // REGISTER

    const registerForm = document.getElementById("registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let firstName = document.getElementById("firstName")?.value.trim();
            let lastName = document.getElementById("lastName")?.value.trim();
            let email = document.getElementById("email")?.value.trim();
            let password = document.getElementById("password")?.value.trim();
            let number = document.getElementById("number")?.value.trim();

            if (!firstName || !lastName || !email || !password) {
                alert("Please fill all fields");
                return;
            }

            let user = {
                firstName,
                lastName,
                email,
                number,
                password
            };

            localStorage.setItem("user", JSON.stringify(user));

            alert("Registered successfully ✅");
            window.location.href = "login.html";
        });
    }
    // LOGIN
    const loginForm = document.getElementById("loginform");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let email = document.getElementById("email")?.value.trim();
            let password = document.getElementById("password")?.value.trim();

            if (!email || !password) {
                alert("Please fill all fields");
                return;
            }

            let storedUser = JSON.parse(localStorage.getItem("user"));

            if (!storedUser) {
                alert("No user found, please register first");
                return;
            }

            if (email === storedUser.email && password === storedUser.password) {
                alert("Login successful ✅");
                window.location.href = "../../index.html";
            } else {
                alert("❌ Wrong Email or password");
            }
        });
    }
    // TOGGLE PASSWORD
    window.togglePassword = function () {
        let pass = document.getElementById("password");
        let icon = document.getElementById("eyeIcon");

        if (!pass) return;

        if (pass.type === "password") {
            pass.type = "text";

            if (icon) {
                icon.classList.remove("fa-eye-slash");
                icon.classList.add("fa-eye");
            }

        } else {
            pass.type = "password";

            if (icon) {
                icon.classList.remove("fa-eye");
                icon.classList.add("fa-eye-slash");
            }
        }
    };

});