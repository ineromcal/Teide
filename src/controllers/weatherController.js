import WeatherAPI from 'simple-weather-api'
import _ from 'lodash'
import Vue from 'vue'
var temps =new Array()
var temp =0
var min=0
var max=0
export default function getMyWeather(location, apikey){
  var weather = new WeatherAPI(apikey)
  var myweather = weather.getWeather(location)
  myweather.then(function (response) {
  //  console.log('response.....' + response.body)
    var myo = JSON.parse(response.body)
    _.forEach(myo.main, function (value, key) {
      console.log(value, key)
      if (key == 'temp') {
        temp = value - 273.15
        temp = temp.toFixed(2)
        temp = parseFloat(temp)
        temps.push(temp)
      }
      if (key == 'temp_min') {
        min = value - 273.15
        temps.push(min)
      }
      if (key == 'temp_max') {
        max = value - 273.15
        temps.push(max)
      }
    })
  }
)
return temps
}
