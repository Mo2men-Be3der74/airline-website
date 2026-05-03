document.addEventListener('DOMContentLoaded', () => {
    const seats = document.querySelectorAll('.seat');
    const seatDisplay = document.getElementById('selected-seat-display');

    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            
            if (seat.classList.contains('booked')) return;


            if (seat.classList.contains('selected')) {
                seat.classList.remove('selected');
                seatDisplay.textContent = "No seat selected";
            } 
            else {
                
                seats.forEach(s => s.classList.remove('selected'));
                
                
                seat.classList.add('selected');
                
                
                const seatNumber = seat.textContent;
                seatDisplay.textContent = `Royal Suite (${seatNumber})`;
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const serviceToggles = document.querySelectorAll('.switch-card input[type="checkbox"]');
    const servicesList = document.querySelector('.services'); 
    const extraPriceDisplay = document.querySelector('.services + .price p'); 
    const finalTotalDisplay = document.querySelector('.total + .price p');

    function updateSummary() {
        let extraTotal = 0;
        
        let htmlContent = '<p>Extra Services</p>';
        let hasSelection = false;

        serviceToggles.forEach(toggle => {
            if (toggle.checked) {
                hasSelection = true;
                const card = toggle.closest('.card');
                const serviceName = card.querySelector('.header-card h3').innerText;
                const priceText = card.querySelector('.price-card').innerText;
                const servicePrice = parseInt(priceText.replace('$', ''));

                
                htmlContent += `<p style="color: white; margin: 5px 0; font-size: 0.9rem;">1x ${serviceName}</p>`;
                
                extraTotal += servicePrice;
            }
        });

        if (!hasSelection) {
            htmlContent += '<p>not selected</p>';
        }

    
        servicesList.innerHTML = htmlContent;

        
        if (extraPriceDisplay) {
            extraPriceDisplay.innerText = extraTotal; 
        }

        
        if (finalTotalDisplay) {
            finalTotalDisplay.innerText = `$${extraTotal.toLocaleString()}`;
        }
    }

    serviceToggles.forEach(toggle => {
        toggle.addEventListener('change', updateSummary);
    });
});