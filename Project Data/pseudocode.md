# Weather App Pseudocode
Page 1- what does the empty page look like the first time you view it?  Empty
Display and hide elements via js as the user progresses through the app
    something that appears when you have an error.  Does it always exist or is it created on error.
    *probably want to have the error case be something simple, like a red cue or a head shake.


## user interface

Make an error case behavior.  this should not be visible by default.  ""Oops!  that postal code isn't working." Toast in the negative space beneath the h1 organism

make an h1 organism that contains the title, a field to enter the zip code, and a button to get the weather.  This should always be visible.  

    the field should validate that the postal code being entered is valid.

    the buttons should read "Go" and "Use My location".  The first one will grab the lat and lon based on the postal code, then store the results into those variables.  trap for onSubmit failure "prevent default".  DONT USE A FORM FIELD. and the my location button will base it on your lat and long

    The Title should be stationary text at the top of the screen.  No need for it to do anything.

    This needs a procedure to clear previous information with a new zip code.  onFocus lets you trap for new zip codes being entered.
        https://www.w3schools.com/jsref/event_onfocus.asp

empty fields show on success (async await)

create a div with the following fields

City
city name should be based on longitude and latitude or zip code, whichever ends up being fewer lines.  Find City function

temperature
should display in kelvin, farenheit, and celsius.  The first is probably going to be the default.  the makeKelvin function and makeCelsius function can take the temperature variable and transform them appropriately.

----------------------------------------------------------------------------


## logic and JS

take the properties of weatherObject and move them into the appropriate properties of weatherFields (tough part.  Not sure how this is going to be done or what the usable data will look like when I am able to accomplish this)

weatherFields=[
zipcode: "https://www.w3schools.com/jsref/event_onchange.asp"
hasError: true?false
city: City Name
Temperature: in Farenheit
temperature: in Kelvin (this seems to be the default value that the api is returning as a result)
temperature: in celsius
condition: 
]

use querySelector? to print these properties into their appropriate fields on the page.
have all of the fields visible in 

let tempCelsius
function makeCelsius(){
    tempCelsius = tempFarenheit - 32 * (5/9)
}

let tempKelvin
function makeKelvin(){
    tempKelvin = tempCelsius + 273.15 
}

function clearFields(){
    reset the weatherFields object to defaults
    //this will be invoked when the user reselects the zip code field using an event listener
}

eventlistener on click for button

//hide and show functions for elements that I want to appear conditionally
function hide(id){
    document.getElementById(id).style.display="none"
}

function reveal(id) {
    document.getElementById(id).style.display="block"

function findCity(userInput) {
    takes the user input of a postal code and returns a city name to print to the page
    takes either the initial input or the city name (depending on what I can make work) and saves the lat and lon to their respective variables.
        make sure not to have the return for this function above redefining these variables, or it won't continue.
}

if time to complete > 30000ms && zipcode === field, second error page explaining why they did a bad thing.

