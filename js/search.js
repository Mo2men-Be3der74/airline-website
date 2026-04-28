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
    "Seattle, USA (SEA)"
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


