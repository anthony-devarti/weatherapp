let weatherObject = [];
let lat=85.04
let lon=84.50


//function noted as async right at the top
async function getWeather() {
    //explains what the function is waiting for
      let response = await axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=38.04&lon=84.5&exclude=minutely,hourly,daily,alerts&appid=b18094427e022579a39c568a994093a0 ')
      console.log(response);
      weatherObject = response;
}

getWeather();