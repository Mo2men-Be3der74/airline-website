function bookTicket(ticket) {
      localStorage.setItem('selectedTicket', JSON.stringify(ticket));
      window.location.href = '../booking/flight-details.html';
}

// Only run this code on the flight-details page
if (document.querySelector(".flight-details")) {
      const ticket = JSON.parse(localStorage.getItem('selectedTicket'));
      
      if (ticket) {
            let from = document.querySelector(".flight-details .left .destination .start");
            let to = document.querySelector(".flight-details .left .destination .end");
            let departureDate = document.querySelector(".flight-details .left .card .start .time");
            let returnDate = document.querySelector(".flight-details .left .card .end .time");
            let duration = document.querySelector(".flight-details .left .card .mid .small");
            let Class = document.querySelector(".flight-details .left .flight-small .class");
            let price = document.querySelector(".flight-details .right .summary .total .amount .right");

            from.innerHTML = ticket.from;
            to.innerHTML = ticket.to;
            departureDate.innerHTML = ticket.startTime;
            returnDate.innerHTML = ticket.arriveTime;
            duration.innerHTML = ticket.duration + "  duration";
            Class.innerHTML = ticket.Class;
            price.innerHTML = ticket.price;
      }
}
const totalSum = baseFare + extraTotal;
const totalData = {
    totalAmount: totalSum
};
localStorage.setItem('bookingTotalObj', JSON.stringify(totalData));