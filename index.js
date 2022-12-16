let weatherImg = document.querySelector("#weather-img");
let weatherReactLink = document.querySelector("#weather-react-link");
let weatherLink = document.querySelector("#weather-link");
let weatherText = document.querySelector("#weather-text");

function WeatherReactLink(event) {
    event.preventDefault();
    weatherImg.innerHTML = `<img src="images/weather-react.png" alt="Weather project preview" class="img-fluid rounded" />`
    weatherText.innerHTML = "A fully-functioning weather app built using HTML, CSS, advanced JavaScript, React, Bootstrap, API's and real-life development workflow. It's open-sourced and hosted on Netlify."
}

function WeatherLink(event) {
    event.preventDefault();
    weatherImg.innerHTML = `<img src="images/weather.png" alt="Weather project preview" class="img-fluid rounded" />`
    weatherText.innerHTML = "A fully-functioning weather app built using HTML, CSS, advanced JavaScript, Bootstrap, API's and real-life development workflow. It's open-sourced and hosted on Netlify."

}

weatherReactLink.addEventListener('mouseenter', WeatherReactLink)
weatherLink.addEventListener('mouseenter', WeatherLink)