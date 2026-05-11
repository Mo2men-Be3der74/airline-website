document.addEventListener("DOMContentLoaded", function () {
    function checkEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    }

    function checkPassword(password) {
        const rules = [
            { test: password.length >= 8,           label: "8+ characters" },
            { test: /[A-Z]/.test(password),         label: "uppercase letter" },
            { test: /[0-9]/.test(password),         label: "number" },
            { test: /[^A-Za-z0-9]/.test(password),  label: "special character" },
        ];
        return {
            score:   rules.filter(r => r.test).length,
            missing: rules.filter(r => !r.test).map(r => r.label),
        };
    }
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

            let confirmPassword = document.getElementById("confirmPassword")?.value.trim();


            if (!firstName || !lastName || !email || !password) {
                alert("Please fill all fields");
                return;
            }

            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }

            if (!checkEmail(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            const strength = checkPassword(password);
            if (strength.score < 3) {
                alert("Weak password. Add: " + strength.missing.join(", ") + ".");
                return;
            }

            let country = document.getElementById("country")?.value.trim();

            let user = {
                firstName,
                lastName,
                email,
                mobile: number,
                country,
                password
            };
            //added mobile and country and fixed the profile not showing both problem

            localStorage.setItem("user", JSON.stringify(user));

            alert("Registered successfully");
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
                alert("Login successful");
                window.location.href = "../../index.html";
            } else {
                alert("Wrong Email or password");
            }
        });
    }
    // TOGGLE PASSWORD
window.togglePassword = function (inputId, iconId) {
    let passInput = document.getElementById(inputId);
    let icon = document.getElementById(iconId);

    if (!passInput) return;

    if (passInput.type === "password") {
        passInput.type = "text";
        if (icon) {
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");
        }
    } else {
        passInput.type = "password";
        if (icon) {
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");
        }
    }
};

});