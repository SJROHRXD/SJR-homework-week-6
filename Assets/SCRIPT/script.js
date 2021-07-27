// ---- VARIABLES ⛅🌎☔ ----
// HISTORY VARIABLE FOR HISTORY SECTION; --☔--
// CONTAINS MOST RECENT CITIES IN ORDER OF ??? --☔--
let historyArray =[];

// MOMENT / TIME / DATE / DAY VARIABLES --☔--
var currentDay = moment().format("dddd, MMMM Do, YYYY");
    // QUICK APPEND TO CURRENTDAY ELLIE
    $("#currentDay").append(currentDay);

var currentTime = moment().format("LT");
    // QUICK APPEND TO CURRENTTIME ELLIE
    $("#currentTime").append(currentTime);

// OTHER TIME / DATE / DAY VARIABLES --☔--
// var Date = moment();
// var Time = moment();
// var Day = moment();




// SUBMIT / BUTTON CLICK, GRABS CITY FROM FORM ⛅🌎☔
// DOCUMENT IS READY FOR  ⛅🌎☔


$(document).ready(function(){
    $("#btnSubmit")
})



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
        success: function (jsonWeather) {
            
            
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

            console.log (jsonForecast);
            console.table(jsonForecast.list);


            
            
            

            // main.dt_txt //list[].dt_txt
            // var foreDate = $(`<p id='fore-Date'><i class='fas fa-calendar-week'></i> ${jsonForecast.list.dt_txt}</p>`)

            // main.temp_max 
            // var foreTempHigh = $(`<p id='fore-TempHigh'><i class='fas fa-thermometer-full'></i> ${jsonForecast.main.temp_high} F&deg;</p>`);
            
            // main.temp_low            
            // var foreTempLow = $(`<p id='fore-TempLow'><i class='fas fa-thermometer-empty'></i> ${jsonForecast.main.temp_low} F&deg;</p>`);
            
            // main.humidity 
            // var foreHumidity = $(`<p id='fore-Humidity'><i class='fas fa-tint'></i> ${jsonForecast.main.humidity}</p>`);

            // weather[].description
            // var foreDescript = $(`<p id='fore-Descript'><i class='fas fa-cloud-sun'></i> ${jsonForecast.weather[].description}</p>`);

            // sunrise
            // var foreSunrise = $(`<p id='fore-Sunrise'><i class='far fa-sun'></i> ${jsonForecast.sunrise}</p>`);
            
            // sunset
            // var foreSunset = $(`<p id='fore-Sunset'><i class='far fa-moon'></i> ${jsonForecast.sunset}</p>`);

            // console.log(foreDate, foreTempHigh, foreTempLow, foreDescript, foreHumidity, foreSunrise, foreSunset);

        }
    })



})


// VALUABLE RESOURCES ⛅🌎☔
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections
// https://github.com/30-seconds/30-seconds-of-code/blob/master/snippets/everyNth.md
// https://levelup.gitconnected.com/5-ways-to-log-an-object-to-the-console-in-javascript-7b995c56af5a
// https://dmitripavlutin.com/foreach-iterate-array-javascript/
// https://www.w3schools.com/jsref/jsref_includes_array.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://githubmemory.com/repo/stephenlprice/marduk AMAZING FREAKIN EXPLANATION OMG.
// https://codeburst.io/how-to-display-openweathermap-api-data-in-a-jquery-datatables-a5a0a91fb62
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
// https://www.digitalocean.com/community/tutorials/js-array-search-methods
// https://fontawesome.com/ I just love them so much.
// https://www.youtube.com/watch?v=R8rmfD9Y5-c

