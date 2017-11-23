import WeatherAPI from 'simple-weather-api'
import _ from 'lodash'
import Vue from 'vue'
// var data =new Array()
var data = {
  temp : 0,
  min : 0,
  max : 0,
}
// var temp =0
// var min=0
// var max=0
// var icon =''

export default function getMyWeather(location, apikey){
  var weather = new WeatherAPI(apikey)
  var myweather = weather.getWeather(location)
  myweather.then(function (response) {
    console.log('response.....' + response.body)
    var myo = JSON.parse(response.body)
    _.forEach(myo.main, function (value, key) {
      console.log(value, key)
      if (key == 'temp') {
        data.temp = value - 273.15
        data.temp = data.temp.toFixed(2)
        data.temp = parseFloat(data.temp)
        //data.push(temp)
        console.log('TEMP '+data.temp);
      }
      if (key == 'temp_min') {
        data.min = value - 273.15
        //data.push(min)
        console.log('MIN '+data.min);
      }
      if (key == 'temp_max') {
        data.max = value - 273.15
        //data.push(max)
        console.log('MAX '+data.max);
      }
    })
  }
)
console.log('DATOS: '+ data.temp);
return data

}
