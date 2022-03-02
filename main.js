//define some variables that I need later
let weatherObject = [];
//lat and lon probably won't be needed
let lat=85.04 //this is a placeholder and should be replaced with user input
let lon=84.50 //this is also a placeholder
let tempF
let tempK
let tempC = '0';
let userZip = 40502; //change to 0 to make it an empty value
let appID = 'b18094427e022579a39c568a994093a0'
//this should allow the lat, lon, and app ID to be added in via variables, rather than typed into the url
let weatherLink = `https://api.openweathermap.org/data/2.5/weather?zip=${userZip},us&appid=${appID}`;
//set the temperature variable to fill in the temerature box
let temperature = document.querySelector(".temperature")
//make this the thing that isn't innerHTML
temperature.innerHTML = tempF
//need to set up the temperature-celsius class on the html side
// tempC = document.querySelector(".temperatureCelsius")
// tempC.innerHTML = tempC



//function noted as async right at the top
async function getWeather() {
    //explains what the function is waiting for
      let response = await axios.get(weatherLink)
      console.log(response);
      weatherObject = await response.data;
}

getWeather();
console.log(weatherObject)