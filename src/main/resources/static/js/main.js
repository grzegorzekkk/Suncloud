var globalForecast = [];

$(function(){
  getLatestDbWeather();
  getClientPosition();
  startClock();  
});

function startClock(){
  setInterval(function(){
    $("#localTime").text(new Date().toLocaleTimeString());
  }, 1000);
}

function getLatestDbWeather(){
  $.getJSON("/api/weather/measurement/latest/", function(weather) {
    $("#wrapper2 #mainTemperature").text(weather.temperature);
    $("#wrapper2 #localDate").text(getFormattedTimestamp(weather.dateTime));
    $("#wrapper2 #humidity").text(weather.airHumidity);
    $("#wrapper2 #soilHumidity").text(weather.soilHumidity);
    $("#wrapper2 #rainfallLevel").text(weather.rainfallLevel);
    $("#wrapper2 #localTime").text(new Date(weather.dateTime).toLocaleTimeString());
    $("#wrapper2 #DbMeasureTitle").text(document.getElementById("latestStationMeasurementLabel").value);
  });
}

function getWeatherFromDbById(id) {
  $.getJSON("/api/weather/measurement/id/" + id + "/", function(weather) {
    $("#wrapper2 #mainTemperature").text(weather.temperature);
    $("#wrapper2 #localDate").text(getFormattedTimestamp(weather.dateTime));
    $("#wrapper2 #humidity").text(weather.airHumidity);
    $("#wrapper2 #soilHumidity").text(weather.soilHumidity);
    $("#wrapper2 #rainfallLevel").text(weather.rainfallLevel);
    $("#wrapper2 #localTime").text(new Date(weather.dateTime).toLocaleTimeString());
    $("#wrapper2 #DbMeasureTitle").text(document.getElementById("measurementLabel").value + getFormattedTimestamp(weather.dateTime));
  });
}

function getClientPosition(){
  $.getJSON("https://ipapi.co/json/", function(position) {
    $("#cityName").text(position.city);
    $("#cityCode").text(position.country);
    
    getWeatherData(position.latitude, position.longitude);
  });
}

function getWeatherData(latitude, longitude){
  $.ajax({
    type: "GET",
    url: "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast/daily?APPID=9b4bbf30228eb8528d36e79d05da1fac&lat=" + latitude + "&lon=" + longitude + "&units=metric&cnt=5",
    cache: true,
    headers: {
      "Access-Control-Allow-Headers": "x-requested-with"
    },
    success: function(forecast){
      globalForecast = forecast;
      updateForecast(forecast);
    },
    error: function(error){
      console.log("Error with ajax: "+ error);
    }
  });
}

function updateForecast(forecast){

  var today = forecast.list[0];
  $("#tempDescription").text(toCamelCase(today.weather[0].description));
  $("#humidity").text(today.humidity);
  $("#wind").text(today.speed);
  $("#localDate").text(getFormattedDate(today.dt));
  $("#mainTemperature").text(Math.round(today.temp.day));
  $("#mainTempHot").text(Math.round(today.temp.max));
  $("#mainTempLow").text(Math.round(today.temp.min));

  for(var i = 1; i < (forecast.list).length; i++){
    var day = forecast.list[i];
    var dayName = getFormattedDate(day.dt).substring(0,3);
  }
}



function getFormattedDate(date){
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date * 1000).toLocaleDateString("pl-PL",options);
}

function getFormattedTimestamp(timestamp){
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(timestamp).toLocaleDateString("pl-PL",options);
}

function toCamelCase(str) {
  var arr = str.split(" ").map(
    function(sentence){
      return sentence.charAt(0).toUpperCase() + sentence.substring(1);
    }
  );
  return arr.join(" ");
}

$(document).ready(function () {
    $('#weatherDropdown li').on('click', function(){
        getWeatherFromDbById($(this).val());
    });
});
