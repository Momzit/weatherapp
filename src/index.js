function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temp");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "6acodfbfaa832f9t2d0703f439a0aaeb";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#searchinfo");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Johannesburg");
