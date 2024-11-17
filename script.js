const API = "479e028dfe027f588618f60d22e55b72";
const weatherDetails = document.getElementById("fetch-weather");

let details = {};

function windDirection(deg) {
  if (deg <= 22.5 && deg >= 337.7) {
    return "North";
  } else if (deg <= 67.5 && deg >= 22.5) {
    return "North East";
  } else if (deg <= 112.5 && deg >= 67.5) {
    return "East";
  } else if (deg <= 157.5 && deg >= 112.5) {
    return "South East";
  } else if (deg <= 202.5 && deg >= 157.5) {
    return "South";
  } else if (deg <= 247.5 && deg >= 202.5) {
    return "South West";
  } else if (deg <= 292.5 && deg >= 247.5) {
    return "West";
  } else if (deg <= 337.5 && deg >= 292.5) {
    return "North West";
  }
}

async function getDetails(latitude, longitude) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    details.location = data.name;
    details.windSpeed = Math.round(data.wind.speed * 3.6) + " kmph";
    details.humidity = data.main.humidity;
    details.timeZone = data.timezone;
    details.pressure = `${Math.round(data.main.pressure * 0.0009869233)} atm`;
    details.windDirection = windDirection(data.wind.deg);
    details.weatherCondition = data.weather[0].description;
    details.feelsLike = Math.round(data.main.feels_like - 273.15) + " deg";
    details.latitude = latitude;
    details.longitude = longitude;
    details.API = API;
  } catch (err) {
    console.log(`${err} in getDetails function`);
  }
}

function getLocation() {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      getDetails(latitude, longitude);
    },
    function (error) {
      console.error("Error occurred: " + error.message);
    }
  );
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("fetch-weather").addEventListener("click", () => {
    window.location.href = "weather.html";
    sessionStorage.setItem("details", JSON.stringify(details));
  });
  getLocation();
});
