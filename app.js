// YOUR JS CODE HERE

const API_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current_weather=true&timezone=auto";

async function fetchWeatherData() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    // figuring out my required data for input
    const temperature = data.current_weather.temperature;
    const windSpeed = data.current_weather.windspeed;
    const timezone = data.timezone;
    const time = new Date(data.current_weather.time).toLocaleString();

    document.getElementById("temperature").textContent = `${temperature} °C`;
    document.getElementById("wind-speed").textContent = `${windSpeed} km/h`;
    document.getElementById("timezone").textContent = timezone;
    document.getElementById("time").textContent = time;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

// I have to call the function on page load to load it
fetchWeatherData();
