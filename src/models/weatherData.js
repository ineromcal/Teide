import getMyWeather from '../controllers/weatherController'

var keyword ='La Laguna'
var apikey = '5f675490d49f5c0f5856ffaa1cbd3cec'
var res = []
res= getMyWeather(keyword, apikey)
var temp = res[0]
var min= res[1]
var max = res[2]
console.log('1: '+temp+'2: '+min+'3: '+max);
export {temp, min, max, keyword}
