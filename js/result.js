const flightTickets = [
{
    from: "Cairo, Egypt (CAI)",
    to: "Paris, France (CDG)",
    startTime: "08:30 AM",
    arriveTime: "12:45 PM",
    duration: "5h 15m",
    departureDate: "2026-06-10",
    returnDate: "2026-06-18",
    Class: "Economy",
    price: "$320"
},
{
    from: "Cairo, Egypt (CAI)",
    to: "London, UK (LHR)",
    startTime: "10:00 AM",
    arriveTime: "02:30 PM",
    duration: "5h 30m",
    departureDate: "2026-06-12",
    returnDate: "2026-06-20",
    Class: "Business",
    price: "$540"
},
{
    from: "Dubai, UAE (DXB)",
    to: "Tokyo, Japan (NRT)",
    startTime: "01:15 PM",
    arriveTime: "03:45 AM",
    duration: "10h 30m",
    departureDate: "2026-07-01",
    returnDate: "2026-07-14",
    Class: "Economy",
    price: "$690"
},
{
    from: "New York, USA (JFK)",
    to: "Los Angeles, USA (LAX)",
    startTime: "07:00 AM",
    arriveTime: "10:20 AM",
    duration: "6h 20m",
    departureDate: "2026-05-22",
    returnDate: "2026-05-29",
    Class: "First Class",
    price: "$880"
},
{
    from: "Berlin, Germany (BER)",
    to: "Rome, Italy (FCO)",
    startTime: "09:45 AM",
    arriveTime: "11:55 AM",
    duration: "2h 10m",
    departureDate: "2026-06-05",
    returnDate: "2026-06-11",
    Class: "Economy",
    price: "$180"
},
{
    from: "Madrid, Spain (MAD)",
    to: "Barcelona, Spain (BCN)",
    startTime: "03:20 PM",
    arriveTime: "04:35 PM",
    duration: "1h 15m",
    departureDate: "2026-05-18",
    returnDate: "2026-05-21",
    Class: "Business",
    price: "$140"
},
{
    from: "Istanbul, Turkey (IST)",
    to: "Moscow, Russia (DME)",
    startTime: "06:10 PM",
    arriveTime: "10:25 PM",
    duration: "4h 15m",
    departureDate: "2026-07-09",
    returnDate: "2026-07-17",
    Class: "Economy",
    price: "$260"
},
{
    from: "Sydney, Australia (SYD)",
    to: "Singapore, Singapore (SIN)",
    startTime: "11:00 AM",
    arriveTime: "05:10 PM",
    duration: "8h 10m",
    departureDate: "2026-08-03",
    returnDate: "2026-08-16",
    Class: "Business",
    price: "$730"
},
{
    from: "Toronto, Canada (YYZ)",
    to: "Chicago, USA (ORD)",
    startTime: "02:40 PM",
    arriveTime: "04:15 PM",
    duration: "1h 35m",
    departureDate: "2026-06-25",
    returnDate: "2026-06-30",
    Class: "Economy",
    price: "$150"
},
{
    from: "Riyadh, Saudi Arabia (RUH)",
    to: "Cairo, Egypt (CAI)",
    startTime: "05:50 AM",
    arriveTime: "08:10 AM",
    duration: "2h 20m",
    departureDate: "2026-05-27",
    returnDate: "2026-06-02",
    Class: "Economy",
    price: "$210"
},
{
    from: "Paris, France (CDG)",
    to: "Dubai, UAE (DXB)",
    startTime: "09:30 PM",
    arriveTime: "06:10 AM",
    duration: "6h 40m",
    departureDate: "2026-07-20",
    returnDate: "2026-07-29",
    Class: "First Class",
    price: "$980"
},
{
    from: "Bangkok, Thailand (BKK)",
    to: "Seoul, South Korea (ICN)",
    startTime: "12:00 PM",
    arriveTime: "07:15 PM",
    duration: "5h 15m",
    departureDate: "2026-06-14",
    returnDate: "2026-06-23",
    Class: "Economy",
    price: "$340"
}
];

const resultsContainer = document.getElementById("result");
const Class = (localStorage.getItem("class")).toLowerCase();
const from = localStorage.getItem("from") || " ";
const to = localStorage.getItem("to") || " ";
const departureDate = localStorage.getItem("departureDate") || '-';
const returnDate = localStorage.getItem("returnDate") || '-';
const filtered = [];

if (from && to) {
    for (let i = 0; i < flightTickets.length; i++) {
            if (flightTickets[i].from.toLowerCase().includes(from) &&
                flightTickets[i].to.toLowerCase().includes(to) &&
                Class === flightTickets[i].Class.toLowerCase() &&
                flightTickets[i].departureDate.includes(departureDate) &&
                flightTickets[i].returnDate.includes(returnDate)) {
                filtered.push(flightTickets[i]);
            }
    }
}


let t;

for (let i = 0; i < filtered.length; i++) {
    t = filtered[i];

    resultsContainer.innerHTML += `
                        <div class="card">
                        <div class="icon"><i class="fa-solid fa-plane"></i></div>
                        <div class="destination">
                            <div class="from">${t.from}</div>
                            <div class="to">${t.to}</div>
                        </div>
                        <div class="time">
                            <div class="from">${t.startTime}</div>
                            <div class="to">${t.arriveTime}</div>
                        </div>
                        <div class="duration">${t.duration}</div>
                        <div class="class">${t.Class}</div>
                        <div class="right">
                            <div class="price">${t.price}</div>
                            <button class="btn-secondary" id="ticket_${i}" onclick='bookTicket(${JSON.stringify(t)})'>Book Now</button>
                        </div>
                    </div>
                        </div>
                        `;
}

// ADD THIS AT THE VERY END OF THE FILE
localStorage.removeItem("from");
localStorage.removeItem("to");
localStorage.removeItem("class");
localStorage.removeItem("departureDate");
localStorage.removeItem("returnDate");