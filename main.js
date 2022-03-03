let city
let condition
let weatherIcon
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
      weatherIcon = response.data.weather[0].icon;
      condition = response.data.weather[0].main;
      pushText();
      document.getElementById("result").style.display="block";
      console.log(city)
      console.log(weatherIcon);
      console.log(condition);
  } catch (error) {
    console.error('error');
    //error function should go in here as well
    whoopsie();
  }
}


document.getElementById("go").addEventListener("click", submit);


function submit() {
  document.getElementById("error").style.display="none";
  userZip = document.getElementById('zip').value; //why is this not redefining the userZip variable?
  weatherLink = `https://api.openweathermap.org/data/2.5/weather?zip=${userZip},us&appid=${appID}`;
  console.log(userZip)
  getWeather();
}

function pullUp(){
  document.getElementById("result").style.display="none";
  console.log('pullup');
  city='';
  condition='';
  weatherIcon='';
  tempK='';
  userZip = '';
  lat='';
  lon='';
  //bgUpdate();
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
  otherInfo.innerHTML = "<img src='https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png'></img>";
}

function whoopsie(){
  document.getElementById("error").style.display="block";
}

//make a function to change the background color based on the weather icon
// function bgUpdate(){
// if (weatherIcon==='10d'||'02d') {
//   //change css to yellow/sunny
//   console.log("i'm trying to change the color")
//   document.body.style.backgroundImage="linear-gradient(rgb(212, 131, 10), rgb(140, 200, 240))";
// } else if (weatherIcon==='03d'||'04d'||'50d') {
//   //change css to grey/overcast
//   document.body.style.backgroundImage="linear-gradient(rgb(46,46,46), rgb(140, 200, 240))"
// } else if (weatherIcon==='09d'||'10d'||'11d'||'13d') {
//   //change css to blue/precipitation
// }
// }

switch (weatherIcon) {
  case '': document.body.className=''
    break;
  case '01d': document.body.className='clearsky'
    break;
  case '02d': document.body.className='fewcloud'
    break;
  case '03d': document.body.className='scatteredclouds'
    break;
  case '04d': document.body.className='brokenclouds'
    break;
  case '09d': document.body.className='showerrain'
    break;
  case '10d': document.body.className='rain'
    break;
  case '11d': document.body.className='thunderstorm'
    break;
  case '13d': document.body.className='snow'
    break;
  case '50d': document.body.className='mist'
    break;
}