let weatherObj = JSON.parse(sessionStorage.getItem("details"));

document.getElementById("gmap").src = `https://maps.google.com/maps?q=${weatherObj.latitude},${weatherObj.longitude}&z=18&output=embed`;

document.getElementById("latitude").innerText = `Latitude: ${weatherObj.latitude}`;
document.getElementById("longitude").innerText = `Longitude: ${weatherObj.longitude}`;
document.getElementById("location").innerText = `Location: ${weatherObj.location}`;
document.getElementById("windSpeed").innerText = `Wind Speed: ${weatherObj.windSpeed}`;
document.getElementById("humidity").innerText = `Humidity: ${weatherObj.humidity}`;
document.getElementById("timeZone").innerText = `TimeZone: ${weatherObj.timeZone}`;
document.getElementById("pressure").innerText = `Pressure: ${weatherObj.pressure}`;
document.getElementById("windDirection").innerText = `Wind Direction: ${weatherObj.windDirection}`;
document.getElementById("weatherCondition").innerText = `Weather Condition: ${weatherObj.weatherCondition}`;
document.getElementById("feelsLike").innerText = `Feels Like: ${weatherObj.feelsLike}`;
