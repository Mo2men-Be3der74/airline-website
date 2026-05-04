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
const holder = document.getElementById("cardholder").value.trim();
const cardNumber = document.getElementById("cardnumber").value.trim();
const expiry = document.getElementById("exipry").value.trim();
const cvv = document.getElementById("cvv").value.trim();
function Payment() {
    if ( holder=="" || cardNumber=="" || expiry=="" || cvv=="" ) {
        alert("Please fill in all payment details.");
        return;
    }else{
        alert("Payment successful! Thank you for your purchase.");
    }
}
