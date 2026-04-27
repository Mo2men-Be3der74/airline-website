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
            modal.close();
            //perform the close() method/function on the closebtn object.
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
//Theme-toggling
const themeCheck = document.getElementById('theme-check');
const stylesheet = document.getElementById('theme-stylesheet');

themeCheck.addEventListener('change', () => {
    // We listen for 'change' (the moment it becomes checked or unchecked)

    if (themeCheck.checked) {
        // User swiped right (turned ON dark mode)
        stylesheet.setAttribute('href', 'dark-theme.css');
    } else {
        // User swiped left (turned OFF dark mode, back to light)
        stylesheet.setAttribute('href', 'light-theme.css');
    }
});