import getMyWeather from '../controllers/weatherController'

var keyword = ['La Laguna', 'Seville,ES'];
var apikey = '5f675490d49f5c0f5856ffaa1cbd3cec';
var res = [];
console.log('Ciudad 1: '+keyword[0]);
console.log('Ciudad 2: '+keyword[1]);
// console.log('Ciudad 3: '+keyword[2]);
res[0]= getMyWeather(keyword[0], apikey);
res[1]= getMyWeather(keyword[1], apikey);
// res[2]= getMyWeather(keyword[3], apikey);
console.log('res 0: '+ res[0])
var tempA = res[0];
var tempB =res[1];
// var tempMerida=res[2];
console.log(res);
console.log(' 1: '+tempA);
console.log(' 2: '+tempB);
// console.log(' 3: '+tempMerida);
// export {tempLaguna, tempSeville, tempMerida, keyword}
export {tempA, tempB, keyword}
