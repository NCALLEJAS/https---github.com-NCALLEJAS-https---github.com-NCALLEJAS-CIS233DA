//dropdown

function setState(obj){
    let stateId = obj.selectedIndex;
    
    for (let y = 0; y < 6; y++) {
        document.getElementById(`state${y}`).style.display = 'none';
        if (y == stateId){
            document.getElementById(`state${stateId}`).style.display = 'inline';
        }
    }

    getWeather();
}



    // Function to fetch weather data
    function getWeather(location) {
        const apiKey = 'f20271e1f7ee7090419a7e90be1422b2';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
  
        fetch(url)
          .then(response => response.json())
          .then(data => {
            const weatherDiv = document.getElementById('weather');
            const temperature = parseInt(data.main.temp);
            const description = data.weather[0].description;
  
            weatherDiv.innerHTML = `Current temperature in ${location}: ${temperature}&deg;C. ${description}`;
          })
          .catch(error => {
            console.log('Error:', error);
            const weatherDiv = document.getElementById('weather');
            weatherDiv.innerHTML = 'Failed to fetch weather data.';
          });
      }
  
      // Event listener for location select
      const locationSelect = document.getElementById('location');
      locationSelect.addEventListener('change', function() {
        const selectedLocation = this.value;
        getWeather(selectedLocation);
      });
  
      // Fetch initial weather on page load
      const initialLocation = locationSelect.value;
      getWeather(initialLocation);



