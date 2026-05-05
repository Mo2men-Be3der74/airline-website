
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
