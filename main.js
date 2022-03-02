//define some variables that I need later
// let weatherObject = [{
//   "city":"",
//   "tempK":"",
//   "condition": ""

// }];
let city
let condition
//lat and lon probably won't be needed
// let lat=85.04 //this is a placeholder and should be replaced with user input
// let lon=84.50 //this is also a placeholder
let tempK //this will be set by the result
let tempC = tempK-273.15; //this will be set by a function after the result
let tempF = tempC*(9/5)+32;//this will be set by a function after the result
let userZip = 40502; //change to 0 to make it an empty value
let appID = 'b18094427e022579a39c568a994093a0'
//this should allow the lat, lon, and app ID to be added in via variables, rather than typed into the url
let weatherLink = `https://api.openweathermap.org/data/2.5/weather?zip=${userZip},us&appid=${appID}`;
//set the temperature variable to fill in the temerature box
let temperature = document.querySelector(".temperature")
//make this the thing that isn't innerHTML
//temperature.innerHTML = tempF
//need to set up the temperature-celsius class on the html side
// tempC = document.querySelector(".temperatureCelsius")
// tempC.innerHTML = tempC



//function noted as async right at the top
async function getWeather() {
  try{
    //explains what the function is waiting for
      let response = await axios.get(weatherLink)
      console.log(response);
      weatherObject = await response.json;
      city = response.data.name
      console.log(city)
      tempK = response.data.main.temp;
      console.log(tempK);
      //Need to pull the condition next
      // condition = response.data.main.weather.description; //work on making this save something valid to the condition variable
      // console.log(condition);
      //lets push these values into their right positions on the webpage
      let userCity = document.getElementById("city")
      userCity.textContent =  city;//this needs to be replaced by the value of the city variable, which is kg
      //push in the condition
      let newCondition = document.getElementById("condition")
      newCondition.textContent = 'This is where the condition gets pushed'
  } catch (error) {
    console.error('error')
  }
    
      
}

getWeather();  //this is not running before the declarations below it.  Maybe because they aren't functions 

//push in the temperatures

//other info goes here
let otherInfo = document.getElementById("other");
otherInfo.innerText = 'text about the weather'


//addData();
//update();
