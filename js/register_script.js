document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let num = document.getElementById("number").value; // Matches <input id="number">
    let country = document.getElementById("country").value; // Matches <select id="country">


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
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        email: email,
        password: password,
        mobile: num,      // Use "mobile" key to match profile expectations
        country: country  // Use "country" key
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registered successfully");

    window.location.href = "login.html";
});


