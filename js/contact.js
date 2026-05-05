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
document.querySelector('#booking').addEventListener('click', () => {
    const faqTitle = document.querySelector('.faq-title');
    const faqAnswer = document.querySelector('.faq-answer');
    const faqTitle2 = document.querySelector('.faq-title2');
    const faqAnswer2 = document.querySelector('.faq-answer2');
    const faqTitle3 = document.querySelector('.faq-title3');
    const faqAnswer3 = document.querySelector('.faq-answer3');
    faqTitle.innerText = 'What is a booking reference?';
    faqAnswer.innerText = 'A booking reference, also known as a Passenger Name Record (PNR), is a unique identifier for your reservation. It typically consists of six alphanumeric characters (e.g., B8XYZ6) or a 12-digit numerical characters.';
    faqTitle2.innerText = 'What is the validity of an e-ticket?';
    faqAnswer2.innerText = 'The validity of an e-ticket depends on the fare rules associated with your booking. Typically, tickets are valid for one year from the date of issue.';
    faqTitle3.innerText = 'How do I select my seat?';
    faqAnswer3.innerText = 'Seat selection is subject to availability and the fare you have purchased. You can select your seat during the booking process or through your online account after booking.';
});
document.querySelector('#baggage').addEventListener('click', () => {
    const faqTitle = document.querySelector('.faq-title');
    const faqAnswer = document.querySelector('.faq-answer');
    const faqTitle2 = document.querySelector('.faq-title2');
    const faqAnswer2 = document.querySelector('.faq-answer2');
    const faqTitle3 = document.querySelector('.faq-title3');
    const faqAnswer3 = document.querySelector('.faq-answer3');
    faqTitle.innerText = 'When can I check in my baggage at the airport?';
    faqAnswer.innerText = 'You can check in your baggage at the airport up to 24 hours before your flight departure. Make sure to have your booking reference and identification ready for the check-in process.';
    faqTitle2.innerText = 'Is there a price difference for excess baggage vouchers purchased online versus at the airport?';
    faqAnswer2.innerText = 'Purchasing excess baggage vouchers online may offer discounted rates compared to purchasing them at the airport.';
    faqTitle3.innerText = 'Can I place travel documents or valuables in my checked baggage?';
    faqAnswer3.innerText = 'It is generally recommended to keep travel documents and valuables in your carry-on baggage for security and accessibility reasons.';
});
document.querySelector('#seats').addEventListener('click', () => {
    const faqTitle = document.querySelector('.faq-title');
    const faqAnswer = document.querySelector('.faq-answer');
    const faqTitle2 = document.querySelector('.faq-title2');
    const faqAnswer2 = document.querySelector('.faq-answer2');
    const faqTitle3 = document.querySelector('.faq-title3');
    const faqAnswer3 = document.querySelector('.faq-answer3');
    faqTitle.innerText = 'How do I pay for the Seat Service?';
    faqAnswer.innerText = 'Payment can be made using any approved payment method by Istabraq.';
    faqTitle2.innerText = 'Will I receive a confirmation for the Seat Service?';
    faqAnswer2.innerText = 'Yes, you will receive a confirmation email with the details of your seat selection and any associated charges.';
    faqTitle3.innerText = 'Are there specific seating areas for ladies?';
    faqAnswer3.innerText = 'Yes, Istabraq provides specific designated seating areas for ladies in economy class on all domestic flights operated by Saudia, subject to availability to ensure additional comfort. This service allows female passengers to select their seats in advance during the reservation and ticketing process for an additional fee, facilitating the seating arrangement.';
});
let storedData = localStorage.getItem("user");
let userData = JSON.parse(storedData);
console.log(userData.firstName);
console.log(userData.lastName);
console.log(userData.email);
const fullname = document.getElementsByName('user_name')[0];
const email = document.getElementsByName('email_address')[0];
fullname.value = userData.firstName + ' ' + userData.lastName;
email.value = userData.email;