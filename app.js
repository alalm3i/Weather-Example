const apiUrl = "https://api.openweathermap.org/data/2.5/weather?lang=ar&units=metric";
const apiKey = "72837a3fa36516d7ef556aaf2ca16d51";
var geoLocationDetails = "lat=24.759588&lon=46.738422";

function buildApiUrl(){
    var url = apiUrl + "&" + geoLocationDetails + "&APPID=" + apiKey; 
    console.log(url);
    return url;
}

window.addEventListener('load', e =>{
    getLocation();
    getWeather();
});
async function getWeather() {
    const res = await fetch(buildApiUrl());
    const json = await res.json();
    document.getElementById("city").innerText = json.name;
    document.getElementById("temp").innerText = json.main.temp;
    document.getElementById("weather").innerText = json.weather[0].main;

    console.log(json);
}
// Get location from users browser
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(currentPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}
function currentPosition(position) {
    geoLocationDetails = "lat="+ position.coords.latitude  + "&lon="+position.coords.longitude;
  }