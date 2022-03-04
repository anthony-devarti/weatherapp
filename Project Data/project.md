DESCRIPTION
Create a webpage that prompts users to enter a zip code, then displays current weather  information for that location or a friendly error message if the zip code is not found.

For this project, we will be using an external API to retrieve weather data.
OBJECTIVES
Learn how to consume APIs via Fetch and Axios in the Weather App project
WIREFRAMES
Use the wireframes provided to recreate the User Interface.  Try to deliver the solution as close to the design as possible.


Weather App
REQUIREMENTS
To complete the assignment, you must complete the following:

Allow the user to enter their location (zip code is probably easiest) and press a button to load the weather.

Run an onClick or onSubmit that executes an Axios GET request to retrieve weather data from the API.

If the request is successful, display the following in a 'mobile app' format:
    City name
    Current weather conditions
    Current temperature in Kelvin, Fahrenheit, and Celsius

A unique image, decided by the current temperature (The API has icons built-in, be sure to read the docs)

If the request is unsuccessful, display a specific error message such as "Invalid Zip Code" or anything else that might come back from the API.
200 means that the data call was good, even if there's an error.  400 means that the call was invalid.

Allow the user to continue entering new zip codes to get new weather data.



STRETCH GOALS
    Get weather based on location data (no need for user input). 
        (related to geolocation)
    Store Multiple Locations for weather data.
        array/state store the results of what comes back.  Goes away on refresh.
    Save the location data and/or weather data in LocalStorage.
        Big stretch
    Use more data provided by the API (forecast data, historical data, daily change in weather, etc.)

    Use JS to render the entire app (only have a single <div id='main'></div> in the body of your index.html).
        probably should be the start point to limit the amount of  html I can mess up.
        init function that builds the ui.
    Keep track of the users' current page if they accidentally refresh using LocalStorage
        big stretch
        Tip: See additional resources.
    Dynamically generate content using JavaScript
        Tip: Initialize, BuildUI, START would be a good start to doing everything in JS
    Dynamically change CSS with JavaScript
        Tip: Alter a css property of a dynamic or static element

Application File Structure
repo/
    index.html - your main page

    css/ - folder to contain CSS files
        style.css - main stylesheet

    img/ - folder to contain any images

    js/ - folder to contain JavaScript files
        main.js - main JavaScript file

    README.md - any important info like a log of changes and a wishlist

    pseudocode.md - pseudocode first!

    .gitignore - a file that omits any directory/file from being tracked



Develop
Use your pseudocode to start coding
Transition from Pseudocode to Procedural Code
Tip: When the page loads start with an init function to setup the next series of subroutines
Transition from Procedural Code to Functional Code
Tip: When the init function is invoked you can invoke other functions like “setState” or “buildUserInterface” or “getData”.
Transition from Functional Code to Object Oriented Code
Tip: All of the project’s properties, state, and methods (subroutines) can be encapsulated within a single object: mindReader.
Note: This might be tougher for some.  It is not expected to create Objects from scratch just yet.  Feel free to try.
Refactor as needed
Debug often using DevTools’ console, elements, sources
Tip: Use breakpoints for better control of your code while debugging
Test often
Save often
Commit and Push to your branch on GitHub when important changes happen
Deploy
Create a Pull Request from your ‘working’ branch into the ‘dev’ branch on GitHub
Confirm code is up to date without any conflicts and merge into dev
Allow your page to be viewed as a website
Follow this guide: https://pages.github.com/
Submit your final working version and GitHub Repo URL in the Google Classroom assignment
If you finish early
Add info to your project's README.md
README.md Best Practices
Share links and resources from this week to the Help slack channel.


API for weather:
    api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={b18094427e022579a39c568a994093a0}

    https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=minutely,hourly,daily,alerts&appid=b18094427e022579a39c568a994093a0