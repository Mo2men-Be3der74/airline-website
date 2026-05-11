var maps = {
      "paris":      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.8!2d2.2769!3d48.8589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sen!2seg!4v1",
      "london":     "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d159748.0!2d-0.1276!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon!5e0!3m2!1sen!2seg!4v1",
      "tokyo":      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207567.0!2d139.6503!3d35.6762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b857628235d%3A0xcdd8aef709a2b520!2sTokyo!5e0!3m2!1sen!2seg!4v1",
      "los angeles":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211456.0!2d-118.2437!3d34.0522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fefa1835ded16!2sLos+Angeles!5e0!3m2!1sen!2seg!4v1",
      "rome":       "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d189508.0!2d12.4964!3d41.9028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693656e38!2sRome!5e0!3m2!1sen!2seg!4v1",
      "barcelona":  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96284.0!2d2.1734!3d41.3851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelona!5e0!3m2!1sen!2seg!4v1",
      "moscow":     "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236590.0!2d37.6173!3d55.7558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc0e19b4b5!2sMoscow!5e0!3m2!1sen!2seg!4v1",
      "singapore":  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.0!2d103.8198!3d1.3521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11238a8b9375%3A0x5ad4f98494c4dc71!2sSingapore!5e0!3m2!1sen!2seg!4v1",
      "chicago":    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d189514.0!2d-87.6298!3d41.8781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad019a2e6f!2sChicago!5e0!3m2!1sen!2seg!4v1",
      "cairo":      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221560.0!2d31.2357!3d30.0444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840120aad3237%3A0x7c7f1faeef5d9d95!2sCairo!5e0!3m2!1sen!2seg!4v1",
      "dubai":      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231757.0!2d55.2708!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai!5e0!3m2!1sen!2seg!4v1",
      "seoul":      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202176.0!2d126.9780!3d37.5665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca28b3e8b2e37%3A0x5ad4f98494c4dc71!2sSeoul!5e0!3m2!1sen!2seg!4v1"
};

function showMap(destination) {
      const map = document.getElementById("destinationMap");
      const key = Object.keys(maps).find(k => destination.toLowerCase().includes(k));
      if (key) map.src = maps[key];
}


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
            showMap(ticket.to);

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


