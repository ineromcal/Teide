import getMyWeather from '../controllers/weatherController'

var keyword = ['La Laguna', 'Seville,ES'];
var apikey = '5f675490d49f5c0f5856ffaa1cbd3cec';
var res = {
  tempA:[],
  tempB:[]
};
console.log('Ciudad 1: '+keyword[0]);
console.log('Ciudad 2: '+keyword[1]);
// console.log('Ciudad 3: '+keyword[2]);
res.tempA = getMyWeather(keyword[0], apikey);
// var tempA = res[0];
res.tempB= getMyWeather(keyword[1], apikey);
//var tempB =res[1];
// res[2]= getMyWeather(keyword[3], apikey);
console.log('RES: '+res);
console.log('res A: '+ res.tempA)
console.log('res B: '+ res.tempB)
// var tempMerida=res[2];

// console.log(' 3: '+tempMerida);
// export {tempLaguna, tempSeville, tempMerida, keyword}
export {res, keyword}
