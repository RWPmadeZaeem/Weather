//api.openweathermap.org/data/2.5/weather?q={city name}&appid=d60c79e9997666259b848aed3e6bf6a2&units=metric

const apiKeys = "d60c79e9997666259b848aed3e6bf6a2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search = document.querySelector(".search input");
const btn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");





async function getWeather(city) {

    const response = await fetch(apiUrl  + city + `&appid=${apiKeys}`);

    const responseData = await response.json();
    
    document.querySelector(".city").innerHTML = responseData.name;

    document.querySelector(".temp").innerHTML = Math.round(responseData.main.temp) + "°C";
    document.querySelector(".condition").innerHTML = responseData.weather[0].main;

    document.querySelector(".humidity").innerHTML = responseData.main.humidity + "%";
    document.querySelector(".windspeed").innerHTML = responseData.wind.speed + "km/h";
    
    if (responseData.weather[0].main == "Clouds") {
        weatherIcon.src = "icons8-cloud-100.png";
    } else if (responseData.weather[0].main == "Rain") {
        weatherIcon.src = "icons8-rain-100.png";
    } else if (responseData.weather[0].main == "Clear") {
        weatherIcon.src = "icons8-sun-100.png";
    } else if (responseData.weather[0].main == "Snow") {
        weatherIcon.src = "icons8-snow-100.png";
    } else if (responseData.weather[0].main == "Thunderstorm") {
        weatherIcon.src = "icons8-storm-100.png";
    } else if (responseData.weather[0].main == "Drizzle") {
        weatherIcon.src = "icons8-drizzle-100.png";
    } else if (responseData.weather[0].main == "Mist") {
        weatherIcon.src = "icons8-fog-100.png";
    }
    document.querySelector(".weather").style.display = "block";




}



btn.addEventListener("click", function () {
    getWeather(search.value);
    search.value = "";
});





