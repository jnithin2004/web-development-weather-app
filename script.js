document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('cityInput').value;
    getWeather(city);
});

async function getWeather(city) {
    const apiKey = 'd837b2a1e4bb44598b266362c67aae87'; // Replace with your actual API key from OpenWeatherMap
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const weatherData = await response.json();
        displayWeather(weatherData);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeather(weatherData) {
    const weatherResult = document.getElementById('weatherResult');
    weatherResult.innerHTML = `
        <h3>Weather in ${weatherData.name}</h3>
        <p>Temperature: ${weatherData.main.temp} °C</p>
        <p>Condition: ${weatherData.weather[0].description}</p>
    `;
}
