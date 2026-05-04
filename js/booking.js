document.addEventListener('DOMContentLoaded', () => {
    const ticket = JSON.parse(localStorage.getItem('selectedTicket'));
    const baseFare = ticket ? parseInt(ticket.price.replace(/[^0-9]/g, '')) : 0;

    const baseFarePriceDisplay = document.querySelector('.seat-bosion + .price p');
    const serviceToggles = document.querySelectorAll('.switch-card input[type="checkbox"]');
    const servicesList = document.querySelector('.services'); 
    const extraPriceDisplay = document.querySelector('.services + .price p'); 
    const finalTotalDisplay = document.querySelector('.total + .price p');

    if (baseFarePriceDisplay && ticket) {
        baseFarePriceDisplay.textContent = ticket.price;
    }

    
    function updateSummary() {
        let extraTotal = 0;
        let htmlContent = '<p>Extra Services</p>';
        let hasSelection = false;

        serviceToggles.forEach(toggle => {
            if (toggle.checked) {
                hasSelection = true;
                const card = toggle.closest('.card');
                const serviceName = card.querySelector('.header-card h3').innerText;
                const priceText = card.querySelector('.price-card p').innerText;
                const servicePrice = parseInt(priceText.replace('$', ''));

                htmlContent += `<p style="color: white; margin: 5px 0; font-size: 0.9rem;">1x ${serviceName}</p>`;
                extraTotal += servicePrice;
            }
        });

        servicesList.innerHTML = hasSelection ? htmlContent : '<p>Extra Services</p><p>not selected</p>';

        if (extraPriceDisplay) {
            extraPriceDisplay.innerText = extraTotal > 0 ? `$${extraTotal}` : "$0";
        }

    
        const totalSum = baseFare + extraTotal;

        if (finalTotalDisplay) {
            finalTotalDisplay.innerText = `$${totalSum.toLocaleString()}`;
        }

        
        const totalData = {
            totalAmount: totalSum
        };
        localStorage.setItem('bookingTotalObj', JSON.stringify(totalData)); 
    }

    serviceToggles.forEach(toggle => {
        toggle.addEventListener('change', updateSummary);
    });

    updateSummary(); 
});


document.addEventListener('DOMContentLoaded', () => {
    const seats = document.querySelectorAll('.seat');
    const seatDisplay = document.getElementById('selected-seat-display');

    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            if (seat.classList.contains('booked')) return;

            if (seat.classList.contains('selected')) {
                seat.classList.remove('selected');
                seatDisplay.textContent = "No seat selected";
            } else {
                seats.forEach(s => s.classList.remove('selected'));
                seat.classList.add('selected');
                seatDisplay.textContent = `Royal Suite (${seat.textContent})`;
            }
        });
    });
});