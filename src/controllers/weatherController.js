import WeatherAPI from 'simple-weather-api'
import _ from 'lodash'
import Vue from 'vue'
var data = {
  temp : 0,
  min : 0,
  max : 0,
  condition:" "
}

var celsiusize = function(num, key){
  var n = parseFloat(num)-273.15;
  if(key=='temp'){
    n = n.toFixed(2);
  }else if(key=='temp_min'){
    n= Math.floor(n);
  }else{
    n= Math.ceil(n);
  }
  return n
}
export default function getMyWeather(location, apikey){

  var weather = new WeatherAPI(apikey)
  var myweather = weather.getWeather(location)
  return new Promise(function(resolve) {
    myweather.then(function (response) {
      var myo = JSON.parse(response.body)
      console.log("MYO: "+JSON.stringify(myo));
      if(myo.weather.length>=1){
        _.forEach(myo.weather[0], function (value, key) {
          if(key == 'main'){
            data.condition = value;
          }
        })
      }
      _.forEach(myo.main, function (value, key) {
        if (key == 'temp') {
          data.temp = celsiusize(value, key)

        }
        if (key == 'temp_min') {
          data.min = celsiusize(value, key)

        }
        if (key == 'temp_max') {
          data.max =  celsiusize(value, key)
        }
      })
      resolve(data)
    })
  })
}
