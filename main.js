//define some variables that I need later
let weatherObject = [];
let lat=85.04
let lon=84.50
let temperature
let tempF
let tempC
let tempK
let userZip
let weatherLink = 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=minutely,hourly,daily,alerts&appid=b18094427e022579a39c568a994093a0';
//set the temperature variable to fill in the temerature box
let temperature = document.querySelector(".temperature")
//make this the thing that isn't innerHTML
temperature.innerHTML = tempF
//need to set up the temperature-celsius class on the html side
let tempC = document.querySelector(".temperatureCelsius")
temperatureCelsius.innerHTML = tempC



//function noted as async right at the top
async function getWeather() {
    //explains what the function is waiting for
      let response = await axios.get(weatherLink)
      console.log(response);
      weatherObject = response;
}

getWeather();
console.log(weatherObject)