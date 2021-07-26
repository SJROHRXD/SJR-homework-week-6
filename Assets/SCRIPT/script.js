// VARIABLES
let citiesList =[];

var currentDay = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").append(currentDay);

var currentTime = moment().format("LT");
$("#currentTime").append(currentTime);


// var maxTempArray = [];
// var minTempArray = [];
// var iconArray = [];
// var descArray = [];
// var humidArray = [];
// var windArray = [];

// // ON SUBMIT / BUTTON CLICK, GRABS CITY FROM FORM 🌎☔

$("#btnSubmit").click(function(event) {
    event.preventDefault();
    var city = $("#city").val();
    var apiKey = "24a0e80c68d5506ba3d18db9845f820f";
    var currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial"+"&appid="+apiKey;
    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid="+apiKey;
      
    $.ajax({
        url: currentWeatherURL,
        method: "GET",
        dataType: "json",
        success: function(jsonWeather) {
            
            
            console.log (jsonWeather)

        
            var cityName = $(`<p id='city-name'><i class='fas fa-search-location'></i> ${jsonWeather.name}</p>`);
            var cityWeather = $(`<p id='city-weather'><i class='fas fa-cloud-sun'></i> ${jsonWeather.weather[0].description}</p>`);
            var cityTemp = $(`<p id='city-temp'><i class='fas fa-thermometer-quarter'></i> ${jsonWeather.main.temp} F&deg;</p>`);

            $("#cWOPlist").append(cityName, cityWeather, cityTemp)
            
        }
    })

    $.ajax({
        url: forecastURL,
        method: "GET",
        dataType: "json",
        success: function (jsonForecast) {

            console.log (jsonForecast)

            // if time dt_text is 12:00:00 - compare

            //main.dt_txt
            var foreDate = $(`<p id='fore-Date'><i class='fas fa-calendar-week'></i> ${jsonForecast.main.dt_txt}</p>`)

            //main.temp_max 
            var foreTempHigh = $(`<p id='fore-TempHigh'><i class='fas fa-thermometer-full'></i> ${jsonForecast.main.temp_high} F&deg;</p>`);
            
            //main.temp_low 
            
            var foreTempLow = $(`<p id='fore-TempLow'><i class='fas fa-thermometer-empty'></i> ${jsonForecast.main.temp_low} F&deg;</p>`);
            
            //main.humidity 
            var foreHumidity = $(`<p id='fore-Humidity'><i class='fas fa-tint'></i> ${jsonForecast.main.humidity}</p>`);

            //weather[0].description
            var foreDescript = $(`<p id='fore-Descript'><i class='fas fa-cloud-sun'></i> ${jsonForecast.weather[0].description}</p>`);

            //sunrise
            var foreSunrise = $(`<p id='fore-Sunrise'><i class='far fa-sun'></i> ${jsonForecast.sunrise}</p>`);
            
            //sunset
            var foreSunset = $(`<p id='fore-Sunset'><i class='far fa-moon'></i> ${jsonForecast.sunset}</p>`);

            // console.log(foreDate, foreTempHigh, foreTempLow, foreDescript, foreHumidity, foreSunrise, foreSunset);

        }
    })



})
