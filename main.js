let city;
let condition;
let weatherIcon;
let tempK //this will be set by the result
let tempC = tempK-273.15; //this will be set by a function after the result
let tempF = tempC*(9/5)+32;//this will be set by a function after the result
let userZip = ''; //change to 0 to make it an empty value
let appID = 'b18094427e022579a39c568a994093a0'
//lat and lon will only be set by the geolocator.  They may not end up needing to have their own variable.
// let lat=85.04 //this is a placeholder and should be replaced with user input
// let lon=84.50 //this is also a placeholder
let weatherLink = `https://api.openweathermap.org/data/2.5/weather?zip=${userZip},us&appid=${appID}`;

async function getWeather() {
  try{
      let response = await axios.get(weatherLink);
      console.log(response);
      weatherObject = await response.json;
      city = response.data.name;
      tempK = response.data.main.temp;
      weatherIcon = response.data.weather[0].icon;
      condition = response.data.weather[0].main;
      pushText();
      document.getElementById("result").style.display="block";
      //console.log(city)
      //console.log(weatherIcon);
      //console.log(condition);
      bgUpdate();
  } catch (error) {
    console.error('error');
    whoopsie();
  }
}

//what happens when the user clicks go
document.getElementById("go").addEventListener("click", submit);

function submit() {
  document.getElementById("error").style.display="none";
  userZip = document.getElementById('zip').value; //why is this not redefining the userZip variable?
  weatherLink = `https://api.openweathermap.org/data/2.5/weather?zip=${userZip},us&appid=${appID}`;
  console.log(userZip);
  getWeather();
  bgUpdate();
};
//a function to roll up the info cards to prepare them for a new zip code
function pullUp(){
  document.getElementById("result").style.display="none";
  console.log('pullup');
  city='';
  condition='';
  weatherIcon='none';
  tempK='';
  userZip = '';
  lat='';
  lon='';
  bgUpdate();
};

//pushes text to the fields
function pushText() {
  let userCity = document.getElementById("city");
  userCity.textContent =  city;
  let tempKelvin = document.getElementById("kelvin");
  tempKelvin.textContent = Math.floor(tempK) + '°' + ' K';
  let tempFaren = document.getElementById("farenheit");
  tempFaren.textContent = Math.floor((tempK-273.15)*(9/5)+32)+ '°' + ' F';
  let tempCels = document.getElementById('celsius');
  tempCels.textContent = Math.floor(tempK-273.15) +'°' + ' C';
  let newCondition= document.getElementById("condition");
  newCondition.textContent = condition;
  let otherInfo = document.getElementById("other");
  otherInfo.innerHTML = "<img src='https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png'></img>";
};

//error message function.  Set into its own function so that it is scalable for different types of errors
function whoopsie(){
  document.getElementById("error").style.display="block";
};

//updates the background gradient according to the weather icon displayed
function bgUpdate(){
  switch (weatherIcon) {
    case '01d': document.getElementById('background').style.backgroundImage="linear-gradient(rgb(245, 202, 61), white)"
      break;
    case '02d': document.getElementById('background').style.backgroundImage='linear-gradient(rgb(136, 161, 185), white)'
      break;
    case '03d': document.getElementById('background').style.backgroundImage='linear-gradient(rgb(65, 93, 95), white)'
      break;
    case '04d': document.getElementById('background').style.backgroundImage='linear-gradient(rgb(143, 188, 209), white)'
      break;
    case '09d': document.getElementById('background').style.backgroundImage='linear-gradient(rgb(99, 107, 226), white)'
      break;
    case '10d': document.getElementById('background').style.backgroundImage='linear-gradient(rgb(61, 79, 245), white)'
      break;
    case '11d': document.getElementById('background').style.backgroundImage='linear-gradient(rgb(22, 0, 121), white)'
      break;
    case '13d': document.getElementById('background').style.backgroundImage='linear-gradient(rgb(82, 155, 240), white)'
      break;
    case '50d': document.getElementById('background').style.backgroundImage='linear-gradient(rgb(70, 69, 68), white)'
      break;
    case 'none': document.getElementById('background').style.backgroundImage="linear-gradient(rgb(138, 76, 117), rgb(255, 255, 255))"
    //this wasn't working because it was night time, and the night icons were showing. so the bg wasn't updating right.  If this is somewthing I want to use at night, I'll refactor to include these
  };
  console.log('this is running')
};