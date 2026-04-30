document.getElementById("loginform").addEventListener("submit", function(e) {
    e.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if(username === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    let storedUser;

    try {
        storedUser = JSON.parse(localStorage.getItem("user"));
    } catch {
        alert("Error reading user data");
        return;
    }

    if(!storedUser) {
        alert("No user found, please register first");
        return;
    }

    if(username === storedUser.userName && password === storedUser.password) {
        alert("Login successful ✅");
        window.location.href = "../../index.html";
    } else {
        alert("❌ Wrong username or password");
    }
});
function togglePassword() {
    let pass = document.getElementById("password");

    if(pass.type === "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
}
