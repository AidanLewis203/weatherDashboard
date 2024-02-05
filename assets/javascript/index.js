const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

const searchForm = document.getElementById('search-form');
const cityInput = document.getElementById('city-input');
const currentWeatherSection = document.getElementById('current-weather');
const forecastSection = document.getElementById('forecast');
const searchHistorySection = document.getElementById('search-history');

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const city = cityInput.value.trim();

  // Fetch current weather data
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      // Update current weather section
      currentWeatherSection.innerHTML = `
        <h2>${data.name} (${new Date().toLocaleDateString()})</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        <!-- Add icon representation of weather conditions here -->
      `;
      
      // Fetch 5-day forecast data
      return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
    })
    .then(response => response.json())
    .then(data => {
      // Update forecast section
      // Display 5-day forecast with date, icon representation, temperature, wind speed, and humidity
      // ...
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });

  // Add the city to the search history
  // ...
});

// Display current and future conditions for a city when clicked on the search history
searchHistorySection.addEventListener('click', function(event) {
  if (event.target.matches('button')) {
    const city = event.target.textContent;
    // Use the city to fetch and display the current and future conditions
    // ...
  }
});