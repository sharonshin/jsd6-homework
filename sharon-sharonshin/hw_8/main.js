/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for San Francisco (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.

*/

'use strict';

var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
var city = "sanfrancisco"
var apiKey = "&appid=5b63dee9a37781830c2f58ce3049fe81";


$.ajax({
    url: weatherUrl+city+apiKey,
    data: {
        format: 'json',
    },
    success: function(response){
        //console.log(response);
        console.log(response.main.temp)
                console.log(response)
    }

});




