// VARIABLES
let citiesList =[];

// var maxTempArray = [];
// var minTempArray = [];
// var iconArray = [];
// var descArray = [];
// var humidArray = [];
// var windArray = [];





// // ON SUBMIT / BUTTON CLICK, GRABS CITY FROM FORM 
$("#btnSubmit").click(function(event) {
    event.preventDefault;
    var city = $("#city").val();
    var apiKey = "24a0e80c68d5506ba3d18db9845f820f";
    var currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey;
    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid="+apiKey
      
    $.ajax({
        url: currentWeatherURL,
        method: "GET",
    
        }).then(function (response) {
            console.log('AJAX Response \n-------------');
            console.log(response);
            // localStorage.setItem something something cities array
            
            //append to html elements for the right now weather
        });

    $.ajax({
        url: forecastURL,
        method: "GET",

    }).then(function(response) {

        // for loops holy fuck

        // append to html ellies
            
            // what time get weather
            // "5 Day Forecast: #city "
            // date for 5 days
                // today (date), day name (date), day name (date), day name (date), day name (date)
            // icon
            // description
            // high temp
            // low temp
            // humidity
            // wind speed

    }
    }) // idk something