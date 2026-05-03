document.addEventListener("DOMContentLoaded", function() {
    const storedData = localStorage.getItem("user "); 
    if (storedData) {
        try {
            const user = JSON.parse(storedData);
            const fnameInput = document.getElementById("firstName ");
            const lnameInput = document.getElementById("lastName ");
            const emailInput = document.getElementById("email ");
            const passInput  = document.getElementById("password ");
            if (fnameInput) fnameInput.value = user.firstName || "";
            if (lnameInput) lnameInput.value = user.lastName  || "";
            if (emailInput) emailInput.value = user.email     || "";
            if (passInput)  passInput.value  = user.password  || "";
        } catch (error) {
            console.error("Failed to parse registration data:", error);
        }
    } else {
        console.warn("No registration data found. Please register first.");
    }
});