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
if ($(".flight-details").length > 0) {
      
      if (ticket) {
            let from = $(".flight-details .left .destination .start");
            let to = $(".flight-details .left .destination .end");
            let departureDate = $(".flight-details .left .card .start .time");
            let returnDate = $(".flight-details .left .card .end .time");
            let duration = $(".flight-details .left .card .mid .small");
            let Class = $(".flight-details .left .flight-small .class");
            let price = $(".flight-details .right .summary .total .amount .right");

            from[0].innerHTML = ticket.from;
            to[0].innerHTML = ticket.to;
            departureDate[0].innerHTML = ticket.startTime;
            returnDate[0].innerHTML = ticket.arriveTime;
            duration[0].innerHTML = ticket.duration + "  duration";
            Class[0].innerHTML = ticket.Class;
            price[0].innerHTML = ticket.price;

      }
}

const confirmation = {
      from : $(".main .journey .from"),
      to : $(".main .journey .to"),
      departureDate : $(".main .journey-details .value"),
      Class : $(".main .journey-details #class"),
      price : $(".main .price-tax #totalPrice"),
}

confirmation.from[0].innerHTML = ticket.from;
confirmation.to[0].innerHTML = ticket.to;
confirmation.departureDate[0].innerHTML = ticket.departureDate;
confirmation.Class[0].innerHTML = ticket.Class;

const priceObj = JSON.parse(localStorage.getItem("bookingTotalObj"));

confirmation.price[0].innerHTML = "$" + priceObj.totalAmount;