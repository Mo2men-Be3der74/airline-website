//DOMContentLoaded makes sure the all the html code loads first before any grabbing from the JS
document.addEventListener('DOMContentLoaded', () => {
    // setting a const to our modal with the #id=lang-modal
    // const (data type) modal (variable name) = document(represents the entire html document (DOM-Document object model-tree), the root of the nods element tree)
    //.(member access operator) getElementById(A method, a function, api function) 'lang-modal' (function's argument)
    //whole line creates a pointer that points directly to that element in the browser's memory
    const modal = document.getElementById('lang-modal');
    //same const for
    const openBtn = document.getElementById('open-lang-modal');
    const closeBtn = document.getElementById('close-lang-modal');

            //(addEventListener) watches the element openBtn.
            //it takes two arguements. 1.event type are we listening for 2.callback function
        openBtn.addEventListener('click', (e) => {
            e.preventDefault();
            //e. stands for event object. And its a giant object file containing details about that click or that event.
            //timing,element,coordinations
            //preventDefault(), prevents the default behaviour of the browser on clicking, telling it to do nothing.
            modal.showModal();
            //access the object modal and preform built in showModal function(pop-up)
        });

    closeBtn.addEventListener('click', () => {
        const countryText = document.querySelector('#country-dropdown .dropdown-const').innerText.trim();
        const langText = document.querySelector('#lang-dropdown .dropdown-const').innerText.trim();

        // update the header link text
        document.querySelector('#open-lang-modal span').innerText = countryText + ' | ' + langText;

        modal.close();
    });


    // close when clicking outside the modal
    modal.addEventListener('click', (e) => {
        const dialogDimensions = modal.getBoundingClientRect();
        //getBoudningClientRect creates an invisible prefect rectangle around the modal
        if (
            e.clientX < dialogDimensions.left ||
            //how far from the left the box *starts.*
            e.clientX > dialogDimensions.right ||
            //how far from the left the box *ends.*
            e.clientY < dialogDimensions.top ||
            //how far from the top of the screen the box *starts.*
            e.clientY > dialogDimensions.bottom
            //how far from the top the box *ends.*
        ) {
            modal.close();
        }
    });
});
// Toggle dropdown visibility
//(querySelectorAll(arg) -> it selects all the elements that has this specific class and puts them in a smth like a pile(Node list).
//(forRach) element in that pile name it dropdown and (=>){} -> do this methods/commands to it.
//1. an eventlistener to listen if there is a click event and if there (=>{}) -> from the same element
//2. (qureySelector)
document.querySelectorAll('.custom-dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', () => {
        dropdown.querySelector('.dropdown-list').classList.toggle('show');
    });
});

// updating the text when an item is selected

document.querySelectorAll('.dropdown-list li').forEach(item => {
    item.addEventListener('click', (e) => {
        const text = e.target.innerText;
        e.target.closest('.custom-dropdown').querySelector('.dropdown-const').innerText = text;
    });
});

//Toggle Theme
const themeCheck = document.getElementById('theme-check');
const stylesheet = document.getElementById('theme-stylesheet');

// On every page load, check saved theme and apply it
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    themeCheck.checked = true;
    const current = stylesheet.getAttribute('href');
    stylesheet.setAttribute('href', current.replace('.css', '-dark.css').replace('css/', 'css/dark-theme/'));
}

// When toggle is clicked, save preference and swap
themeCheck.addEventListener('change', () => {
    const current = stylesheet.getAttribute('href');
    if (themeCheck.checked) {
        stylesheet.setAttribute('href', current.replace('.css', '-dark.css').replace('css/', 'css/dark-theme/'));
        localStorage.setItem('theme', 'dark');
    } else {
        stylesheet.setAttribute('href', current.replace('dark-theme/', '').replace('-dark.css', '.css'));
        localStorage.setItem('theme', 'light');
    }
});

const nav = document.querySelector('.bottom-half');
const navTop = nav.offsetTop;

window.addEventListener('scroll', () => {
    if (window.scrollY >= navTop) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});

document.querySelectorAll('.search-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.search-tab').forEach(t => t.classList.remove('active-tab'));
        tab.classList.add('active-tab');
    });
});



window.addEventListener("DOMContentLoaded", function () {
    const authContainer = document.getElementById("auth-container");
    const userData = localStorage.getItem("user");

    if (userData) {
        const user = JSON.parse(userData);

        authContainer.innerHTML = `
            <span class="btn btn-login"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg> Welcome, ${user.firstName} ${user.lastName}</span>
            <button id="logout-btn" class="btn-logout"><span class="logout">Logout</span></button>
        `;
    }

    document.addEventListener("click", function (logOut) {
        if (logOut.target.id === "logout-btn") {
            localStorage.removeItem("user");
            window.location.reload();
        }
    });
});

