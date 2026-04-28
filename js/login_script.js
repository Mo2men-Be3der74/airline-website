document.getElementById("loginform").addEventListener("submit", function(e) {
    e.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let storedUser = JSON.parse(localStorage.getItem("user"));

    if(!storedUser) {
        alert("No user found, please register first");
        return;
    }

    if(username === storedUser.userName && password === storedUser.password) {
        alert("Login successful");

        window.location.href = "home.html";
    } else {
        alert("Wrong username or password");
    }
});