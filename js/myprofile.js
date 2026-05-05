
/* ========================================
   PASSWORD TOGGLE
   ======================================== */


document.addEventListener('DOMContentLoaded', function() {
    const passwordField = document.getElementById('password');
    const passwordToggle = document.querySelector('.password-toggle');

    if (passwordToggle && passwordField) {
        passwordToggle.addEventListener('click', function(e) {
            e.preventDefault();

            // Toggle input type
            if (passwordField.type === 'password') {
                passwordField.type = 'text';
                passwordToggle.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
            } else {
                passwordField.type = 'password';
                passwordToggle.innerHTML = '<i class="fa-solid fa-eye"></i>';
            }
        });
    }
});

/* ========================================
   FORM HANDLING
   ======================================== */

const profileForm = document.getElementById('profileForm');
const saveBtn = document.getElementById('save-btn');
const cancelBtn = document.getElementById('cancel-btn');

// Form data object to store original values
let originalFormData = {};

// Store original form data on page load
function storeOriginalData() {
    if (profileForm) {
        const inputs = profileForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            originalFormData[input.id] = input.value;
        });
    }
}

// Cancel button - Clear all inputs
if (cancelBtn) {
    cancelBtn.addEventListener('click', (e) => {
        e.preventDefault();

        // Clear all form inputs
        if (profileForm) {
            const inputs = profileForm.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                if (input.type === 'password') {
                    input.type = 'password'; // Reset password visibility
                    if (passwordToggleBtn) {
                        passwordToggleBtn.innerHTML = '<i class="fa-solid fa-eye"></i>';
                    }
                }
                input.value = '';
            });
        }
    });
}

// Save button - Form submission
if (saveBtn) {
    saveBtn.addEventListener('click', (e) => {
        e.preventDefault();

        // Get form data
        if (profileForm) {
            const formData = new FormData(profileForm);
            const data = Object.fromEntries(formData);

            // Validation example
            if (!data.firstName || !data.lastName) {
                alert('Please fill in all required fields');
                return;
            }

            // Here you would normally send data to backend
            console.log('Form Data:', data);
            alert('Profile saved successfully!');

            // Store new data as original
            storeOriginalData();
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    storeOriginalData();
});

/* ========================================
   LOAD DATA FROM LOCALSTORAGE
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Get user data from localStorage
    let user = localStorage.getItem("user");

    if (user) {
        // Parse the stored JSON data
        user = JSON.parse(user);

        // Fill form inputs with stored data
        document.getElementById("first-name").value = user.firstName || "";
        document.getElementById("last-name").value = user.lastName || "";
        document.getElementById("email").value = user.email || "";
        document.getElementById("password").value = user.password || "";
        // document.getElementById("mobile").value = user.mobile || "";
        // document.getElementById("nationality").value = user.country || "";
        document.getElementById("mobile").value = user.mobile || "";
        document.getElementById("nationality").value = user.country || "";
        document.getElementById("address").value = user.address || "";

        // Update user info in sidebar
        document.querySelector(".user-info h2").textContent = user.firstName + " " + user.lastName;
        document.querySelector(".user-info p").textContent = user.email;
    }
});

/* ========================================
   SAVE FORM DATA TO LOCALSTORAGE ON SUBMIT
   ======================================== */

document.getElementById("profile-form").addEventListener("submit", function(e) {
    e.preventDefault();

    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let mobile = document.getElementById("mobile").value;
    let nationality = document.getElementById("nationality").value;
    let address = document.getElementById("address").value;

    if(firstName === "" || lastName === "" || email === "" || mobile === "" || nationality === "" || address === "") {
        alert("Please fill all fields");
        return;
    }

    // Get existing user data and update it
    let user = JSON.parse(localStorage.getItem("user")) || {};

    user = {
        firstName: firstName,
        lastName: lastName,
        userName: user.userName || "",
        email: email,
        password: password,
        country: nationality,
        mobile: mobile,
        address: address
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Profile updated successfully!");

    // Update sidebar
    document.querySelector(".user-info h2").textContent = firstName + " " + lastName;
    document.querySelector(".user-info p").textContent = email;
});
