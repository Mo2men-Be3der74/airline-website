function bookTicket(ticket) {
      localStorage.setItem('selectedTicket', JSON.stringify(ticket));
      if (localStorage.getItem("user")) {
            window.location.href = '../booking/flight-details.html';
      }
      else {
            window.location.href = '../auth/login.html';
      }
}

// Only run this code on the flight-details page
const ticket = JSON.parse(localStorage.getItem('selectedTicket'));
if (document.querySelector(".flight-details")) {
      
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

const confirmaiton = {
      from : document.querySelector(".main .journey .from"),
      to : document.querySelector(".main .journey .to"),
      departureDate : document.querySelector(".main .journey-details .value"),
      Class : document.querySelector(".main .journey-details #class"),
      price : document.querySelector(".main .price-tax #totalPrice"),
}

confirmaiton.from.innerHTML = ticket.from;
confirmaiton.to.innerHTML = ticket.to;
confirmaiton.departureDate.innerHTML = ticket.departureDate;
confirmaiton.Class.innerHTML = ticket.Class;

const priceObj = JSON.parse(localStorage.getItem("bookingTotalObj"));

confirmaiton.price.innerHTML = "$" + priceObj.totalAmount;