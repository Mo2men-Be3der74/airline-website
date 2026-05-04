document.addEventListener("DOMContentLoaded", function() {
    const storedData = localStorage.getItem("user"); 
    if (storedData) {
            const user = JSON.parse(storedData);
            const fnameInput = document.querySelector(".main div section .form-info #fname");
            const lnameInput = document.querySelector(".main div section .form-info #lname");
            const emailInput = document.querySelector(".main div section .form-info #email");

            if (fnameInput) fnameInput.value = user.firstName || "";
            if (lnameInput) lnameInput.value = user.lastName  || "";
            if (emailInput) emailInput.value = user.email     || "";
            
    } else {
        console.warn("No registration data found. Please register first.");
    }
});

const savedData = JSON.parse(localStorage.getItem('bookingTotalObj'));
if (savedData) {
    console.log("السعر النهائي هو: " + savedData.totalAmount);
}

