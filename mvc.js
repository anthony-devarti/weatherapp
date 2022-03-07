//model no calculations just getters and setters
class Weather {
    constructor(){
        this.city = '',
        this.temperature = 0,
        this.CurrenntCodition = '',
        this.CurrentIcon = ''
    }

    setState(x) {
        //set state stuff goes in here.
    }
    setCity(x) {
        this.city = x
    }
    getCity() {
        return this.city
    }

    setTemperature(x) {
        this.temperature = x
    }
    getTemperature(x) {
        return this.temperature
    }

    setCurrentCodition(x) {
        this.CurrenntCodition = x
    }
    getCurrentCondition(x) {
        return this.CurrenntCodition
    }

    setCurrentIcon(x) {
        this.CurrenntIcon
    }
    getCurrentIcon(x) {
        return this.CurrentIcon
    }
}

//controller
class Weather {
    constructor(){
        this.city = '',
        this.temperature = 0,
        this.CurrenntCodition = '',
        this.CurrentIcon = ''
    }

    setWeather(x) {
        //set state stuff goes in here.
    }
    setCity(x) {
        this.city = x
    }
    getCity() {
        return this.city
    }

    setTemperature(x) {
        this.temperature = x
    }
    getTemperature(x) {
        return this.temperature
    }

    setCurrentCodition(x) {
        this.CurrenntCodition = x
    }
    getCurrentCondition(x) {
        return this.CurrenntCodition
    }

    setCurrentIcon(x) {
        this.CurrenntIcon
    }
    getCurrentIcon(x) {
        return this.CurrentIcon
    }
}

//controller
class WeatherController{
    constructor(model, view){
        this.m=model;
        this.v=view;
    }

    onApiCall = (data) => {
        this.v.displayWeather(data);
    }

    async getWeatherByZipcode(zip){
        try {
            let response = await axios.get(API_URL, `?zip=${zip}&appid=${APP_ID}`)
            if (response.data){
                return response.data;
            }
        } catch (error) {
            console.log(error)
        }
    };

    async handleInputChange(e){
        const value = e.target.value;
        const validZip = await this.validateZipCode(value);
        if (validZip){
            let data = await this.getWeatherByZipcode(zip)
            console.log(data)
            // //this.setState ({
            //     city
            //     temperature

            // })
        }
    };
    validatezipCode() {
        if (!isNaN(value) && value.length ===5) {
            return true
        } else
        return false
    }

}

//View
class Weatherview{
    constructor() { 
        this.userCity = document.getElementById("city");
        thisthis.tempKelvin = document.getElementById("kelvin");
        this.tempFaren = document.getElementById("farenheit");
        this.tempCels = document.getElementById('celsius');
        this.newCondition= document.getElementById("condition");
        this.otherInfo = document.getElementById("other");
     }


createElement(tag,className) {
    const element = document.createElement(tag)
    if (className) element.classList.add(className)

    return element
  }

  // Retrieve an element from the DOM
    getElement(selector) {
        const element = document.querySelector(selector)

        return element
    }

//   function submit() {
//     document.getElementById("error").style.display="none";
//     userZip = document.getElementById('zip').value; //why is this not redefining the userZip variable?
//     weatherLink = `https://api.openweathermap.org/data/2.5/weather?zip=${userZip},us&appid=${appID}`;
//     console.log(userZip);
//     getWeather();
//     bgUpdate();
//   };

    get _zipCodeText() {
        return this.input.value
    }
    
    _resetZipCodeText() {
        this.input.value = ''
    }

    displayWeather(){
        this.userCity.textContent =  city;
        this.tempKelvin.textContent = Math.floor(tempK) + '°' + ' K';
        this.tempFaren.textContent = Math.floor((tempK-273.15)*(9/5)+32)+ '°' + ' F';
        this.tempCels.textContent = Math.floor(tempK-273.15) +'°' + ' C';
        this.newCondition.textContent = condition;
        this.otherInfo.innerHTML = "<img src='https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png'></img>";
          
    }

    hideWeather(){

    }


}

const app = new WeatherController(new Weather(), new Weatherview());
app.model.setCity('lexington')