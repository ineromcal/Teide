
import myweather from '../controllers/weatherController'

var keyword ='La Laguna'
var apikey = '5f675490d49f5c0f5856ffaa1cbd3cec'
var i=0
// for(i; i < keyword.length; i++){
var myweatherTemps = myweather(keyword)
// }

export default {
  name: 'Weather',
  data () {
    return {
      temp: temp,
      min: min,
      max: max
    }
  }
}
