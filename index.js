let weatherImg = document.querySelector("#weather-img");
let weatherReactLink = document.querySelector("#weather-react-link");
let weatherLink = document.querySelector("#weather-link")

function WeatherReactLink(event) {
    event.preventDefault();
    weatherImg.innerHTML = `<img src="images/weather-react.png" alt="Weather project preview" class="img-fluid rounded" />`
}

function WeatherLink(event) {
    event.preventDefault();
    weatherImg.innerHTML = `<img src="images/weather.png" alt="Weather project preview" class="img-fluid rounded" />`

}

weatherReactLink.addEventListener('mouseenter', WeatherReactLink)
weatherLink.addEventListener('mouseenter', WeatherLink)