#Weather App Pseudocode
Page 1- what does the empty page look like the first time you view it?  Empty
Display and hide elements via js as the user progresses through the app
    something that appears when you have an error.  Does it always exist or is it created on error.
    *probably want to have the error case be something simple, like a red cue or a head shake.


##Frontend

Make an error case behavior.  this should not be visible by default.  ""Oops!  that postal code isn't working." Toast in the negative space beneath the h1 organism

make an h1 organism that contains the title, a field to enter the zip code, and a button to get the weather.  This should always be visible.  

    the field should validate that the postal code being entered is correct.

    the buttons should read "Go" and "My location".  The first one will grab the weather based on the postal code.  trap for onSubmit failure "prevent default".  DONT USE A FORM FIELD. and the my location button will base it on your lat and long

    The Title should be stationary text at the top of the screen.  No need for it to do anything.

    This needs a procedure to clear previous information with a new zip code.  onFocus lets you trap for new zip codes being entered.

##Backend


zipcode: "https://www.w3schools.com/jsref/event_onchange.asp"
hasError: true?false
city: City Name
Temperature: in Farenheit
condition: 

if < 30000 && zipcode === field, second error page explaining why they did a bad thing.