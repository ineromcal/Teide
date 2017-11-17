import WeatherAPI from 'simple-weather-api'
import weatherData from '../models/weatherData'
import _ from 'lodash'
var temp = 0
var min = 0
var max = 0
// export default
export default function myweather(keyword){
  var weather = new WeatherAPI(apikey)
  var myweather = weather.getWeather(keyword)
  myweather.then(function (response) {
    console.log('response.....' + response.body)
    var myo = JSON.parse(response.body)
    _.forEach(myo.main, function (value, key) {
      console.log(value, key)
      if (key == 'temp') {
        temp = value - 273.15
        temp = temp.toFixed(2)
      }
      if (key == 'temp_min') {
        min = value - 273.15
      }
      if (key == 'temp_max') {
        max = value - 273.15
      }
    })
  }

)

// var myweatherTemps = myweather(keyword)
}
// export default {
//   data () {
//     return {
//       temp: temp,
//       min: min,
//       max: max
//     }
//   }
// }
