document.querySelectorAll('.question-title').forEach(button => {
    button.addEventListener('click', () => {
        const question = button.classList;
        question.toggle('activee');
        document.querySelectorAll('.question-title').forEach(otherButton => {
            if (otherButton !== button) {
                otherButton.classList.remove('activee');
            }
        });
    });
});
