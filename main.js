let city
let condition
let description
let tempK //this will be set by the result
let tempC = tempK-273.15; //this will be set by a function after the result
let tempF = tempC*(9/5)+32;//this will be set by a function after the result
let userZip = ''; //change to 0 to make it an empty value
let appID = 'b18094427e022579a39c568a994093a0'
//lat and lon will only be set by the geolocator.  They may not end up needing to have their own variable.
let lat=85.04 //this is a placeholder and should be replaced with user input
let lon=84.50 //this is also a placeholder
let weatherLink = `https://api.openweathermap.org/data/2.5/weather?zip=${userZip},us&appid=${appID}`;


//submitZip function should excecute on click and grab the zip from the entry form

//function noted as async right at the top
async function getWeather() {
  try{
    //explains what the function is waiting for
      let response = await axios.get(weatherLink)
      console.log(response);
      weatherObject = await response.json;
      city = response.data.name
      tempK = response.data.main.temp;
      description = response.data.weather[0].description;
      condition = response.data.weather[0].main;
      pushText();
      console.log(city)
      console.log(description);
      console.log(condition);
  } catch (error) {
    console.error('error')
    //error function should go in here as well
  }
}


document.getElementById("go").addEventListener("click", submit);

function submit() {
  userZip = document.getElementById('zip').value; //why is this not redefining the userZip variable?
  weatherLink = `https://api.openweathermap.org/data/2.5/weather?zip=${userZip},us&appid=${appID}`;
  console.log(userZip)
  getWeather();
}

function pushText() {
  let userCity = document.getElementById("city")
  userCity.textContent =  city;
  let tempKelvin = document.getElementById("kelvin")
  tempKelvin.textContent = Math.floor(tempK) + '°' + ' K'
  let tempFaren = document.getElementById("farenheit")
  tempFaren.textContent = Math.floor((tempK-273.15)*(9/5)+32)+ '°' + ' F'
  let tempCels = document.getElementById('celsius')
  tempCels.textContent = Math.floor(tempK-273.15) +'°' + ' C';
  let newCondition= document.getElementById("condition");
  newCondition.textContent = condition;
  let otherInfo = document.getElementById("other");
  otherInfo.innerText = description
}

function whoopsie(){
  
}