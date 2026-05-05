
//password toggle
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

//form handling
const profileForm = document.getElementById('profileForm');
const saveBtn = document.getElementById('save-btn');
const cancelBtn = document.getElementById('cancel-btn');

let originalFormData = {};

function storeOriginalData() {
    if (profileForm) {
        const inputs = profileForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            originalFormData[input.id] = input.value;
        });
    }
}

//clearing inputs
if (cancelBtn) {
    cancelBtn.addEventListener('click', (e) => {
        e.preventDefault();

        // Clear all form inputs
        if (profileForm) {
            const inputs = profileForm.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                if (input.type === 'password') {
                    input.type = 'password'; // resets
                    if (passwordToggleBtn) {
                        passwordToggleBtn.innerHTML = '<i class="fa-solid fa-eye"></i>';
                    }
                }
                input.value = '';
            });
        }
    });
}

// saves the new info
if (saveBtn) {
    saveBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (profileForm) {
            const formData = new FormData(profileForm);
            const data = Object.fromEntries(formData);


            if (!data.firstName || !data.lastName) {
                alert('Please fill in all required fields');
                return;
            }

            console.log('Form Data:', data);
            alert('Profile saved successfully!');

            // Store new info as original
            storeOriginalData();
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    storeOriginalData();
});


//load data from localstorage

document.addEventListener('DOMContentLoaded', function() {
    //get the data from the localstorage
    let user = localStorage.getItem("user");

    if (user) {
        // parse the json
        user = JSON.parse(user);

        // fill form inputs with stored data
        document.getElementById("first-name").value = user.firstName || "";
        document.getElementById("last-name").value = user.lastName || "";
        document.getElementById("email").value = user.email || "";
        document.getElementById("password").value = user.password || "";
        // document.getElementById("mobile").value = user.mobile || "";
        // document.getElementById("nationality").value = user.country || "";
        document.getElementById("mobile").value = user.mobile || "";
        document.getElementById("nationality").value = user.country || "";
        document.getElementById("address").value = user.address || "";

        // update user info in sidebar
        document.querySelector(".user-info h2").textContent = user.firstName + " " + user.lastName;
        document.querySelector(".user-info p").textContent = user.email;
    }
});

//save form data to localstorage on submitting

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

    // update sidebar
    document.querySelector(".user-info h2").textContent = firstName + " " + lastName;
    document.querySelector(".user-info p").textContent = email;
});
