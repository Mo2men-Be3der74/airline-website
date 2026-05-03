
const CITIES = [
    "Cairo, Egypt (CAI)",
    "London, UK (LHR)",
    "Paris, France (CDG)",
    "Dubai, UAE (DXB)",
    "New York, USA (JFK)",
    "Tokyo, Japan (NRT)",
    "Istanbul, Turkey (IST)",
    "Amsterdam, Netherlands (AMS)",
    "Singapore, Singapore (SIN)",
    "Los Angeles, USA (LAX)",
    "Berlin, Germany (BER)",
    "Madrid, Spain (MAD)",
    "Rome, Italy (FCO)",
    "Barcelona, Spain (BCN)",
    "Milan, Italy (MXP)",
    "Toronto, Canada (YYZ)",
    "Vancouver, Canada (YVR)",
    "Sydney, Australia (SYD)",
    "Melbourne, Australia (MEL)",
    "Seoul, South Korea (ICN)",
    "Beijing, China (PEK)",
    "Shanghai, China (PVG)",
    "Hong Kong, China (HKG)",
    "Bangkok, Thailand (BKK)",
    "Kuala Lumpur, Malaysia (KUL)",
    "Manila, Philippines (MNL)",
    "Jakarta, Indonesia (CGK)",
    "Mumbai, India (BOM)",
    "Delhi, India (DEL)",
    "Karachi, Pakistan (KHI)",
    "Doha, Qatar (DOH)",
    "Riyadh, Saudi Arabia (RUH)",
    "Jeddah, Saudi Arabia (JED)",
    "Abu Dhabi, UAE (AUH)",
    "Casablanca, Morocco (CMN)",
    "Johannesburg, South Africa (JNB)",
    "Nairobi, Kenya (NBO)",
    "Lagos, Nigeria (LOS)",
    "Mexico City, Mexico (MEX)",
    "Sao Paulo, Brazil (GRU)",
    "Buenos Aires, Argentina (EZE)",
    "Santiago, Chile (SCL)",
    "Chicago, USA (ORD)",
    "San Francisco, USA (SFO)",
    "Washington DC, USA (IAD)",
    "Miami, USA (MIA)",
    "Boston, USA (BOS)",
    "Seattle, USA (SEA)",
    "Moscow, Russia (DME)",
    "Riyadh, Saudi Arabia (RUH)",
];

function fromList() 
{
    const input = document.getElementById("input-from");
    const list = document.getElementById("city-list");

    input.addEventListener("input", function () {
        const value = input.value.toLowerCase();
        list.innerHTML = "";

        if (value === "") {
            list.style.display = "none";
            return 0;
        }

        const result = [];

        for (let i = 0; i < CITIES.length; i++) {
            if (CITIES[i].toLowerCase().includes(value)) {
                result.push(CITIES[i]);
            }
        }

        if (result.length === 0) {
            list.style.display = "none";
            return 0;
        }

        list.style.display = "block";

        for (let i = 0; i < result.length; i++) {
            const item = document.createElement("div");
            item.innerHTML = result[i];

            item.onclick = function () {
                input.value = result[i];
                list.style.display = "none";
            };

            list.append(item);
        }
    });

}

function toList()
{
    const input = document.getElementById("input-to");
    const list = document.getElementById("city-list-to");

    input.addEventListener("input" , function () {
        const value = input.value.toLowerCase() ;
        list.innerHTML = "";

        if(value === "")
        {
            list.style.display = "none";
            return 0;
        }

        const result = [];
        for(let i =0 ; i<CITIES.length; i++)
        {
            if(CITIES[i].toLowerCase().includes(value))
                result.push(CITIES[i]);
        }

        if(result.length === 0)
        {
            list.style.display = "none" ;
            return 0; 
        }

        list.style.display = "block";

        for(let i=0 ; i<result.length ; i++)
        {
            const item = document.createElement("div");
            item.textContent= result[i];

            item.onclick = function() {
                input.value = result[i];
                list.style.display = "none";
            }
            list.append(item);
        }
    });
}

fromList();
toList();


function storgeInput()
{
    const from = document.getElementById("input-from").value.toLowerCase();
    const to = document.getElementById("input-to").value.toLowerCase();

    const departureDate = document.getElementById("departure-date").value;
    const returnDate = document.getElementById("return-date").value;

    let Class ;

    if (document.getElementById("cabin-economy").checked) {
        Class = "economy";
    }

    if (document.getElementById("cabin-business").checked) {
        Class = "business";
    }

    if (document.getElementById("cabin-first-class").checked) {
        Class = "first class";
    }

    localStorage.setItem("from", from);
    localStorage.setItem("to", to);
    localStorage.setItem("class", Class);
    localStorage.setItem("departureDate", departureDate);
    localStorage.setItem("returnDate", returnDate);

    sessionStorage.setItem("searched", "true");

    // Replace the redirect line in search.js with this:
    const resultsPath = window.location.pathname.includes("pages") ? "search-results.html" : "pages/booking/search-results.html";
    window.location.href = resultsPath;

    // window.location.href = "search-results.html";
    // window.location.href = "pages/booking/search-results.html";
    // window.location.replace(window.location.href);

}

const button = document.getElementById("search-button");
button.addEventListener("click", function(event) {
    event.preventDefault(); // Prevents the browser from stopping the script
    storgeInput();
});