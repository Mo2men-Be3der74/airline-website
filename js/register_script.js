document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let userName = document.getElementById("userName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let country = document.getElementById("country").value;
    let terms = document.getElementById("terms").checked;

    if(firstName === "" || lastName === "" || userName === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill all fields");
        return;
    }

    if(password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    if(!terms) {
        alert("You must agree to terms");
        return;
    }

    let user = {
        firstName,
        lastName,
        userName,
        email,
        password,
        country
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registered successfully");

    window.location.href = "login.html";
});