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
const savedData = JSON.parse(localStorage.getItem('bookingTotalObj')).totalAmount;
function Payment() {
    const holder = document.getElementById("cardholder");
    const cardNumber = document.getElementById("cardnumber");
    const expiry = document.getElementById("exipry");
    const cvv = document.getElementById("cvv");
    const errorSound = document.getElementById("error-sound");
    const successSound = document.getElementById("success-sound");
    if (
        holder.value.trim() === "" ||
        cardNumber.value.trim() === "" ||
        expiry.value.trim() === "" ||
        cvv.value.trim() === ""
    ) {
        errorSound.play();
        alert("Please fill in all payment details.");
        return;
    } else {
        successSound.play();
        alert("Payment successful! Thank you for your purchase.");
    }
}
