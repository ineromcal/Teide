import getMyWeather from '../controllers/weatherController'

var keyword = ['La Laguna', 'Seville,ES', 'Merida, MX'];
var apikey = '5f675490d49f5c0f5856ffaa1cbd3cec';

export function getWeatherSet(){
  return new Promise(function(resolve){
    var res = {
      tempA:{temp:0, min:0, max:0},
      tempB:{temp:0, min:0, max:0},
      tempC:{temp:0, min:0, max:0}
    };
    getMyWeather(keyword[0], apikey).then(function(data){
      res.tempA.temp = data.temp;
      res.tempA.max = data.max;
      res.tempA.min = data.min;
      getMyWeather(keyword[1], apikey).then(function(data2){
        res.tempB.temp = data.temp;
        res.tempB.max = data.max;
        res.tempB.min = data.min;
        getMyWeather(keyword[2], apikey).then(function(data3){
          res.tempC.temp = data.temp;
          res.tempC.max = data.max;
          res.tempC.min = data.min;
          resolve(res);
        });  
      });

    })
  }
)
}
//var tempB =res[1];
// res[2]= getMyWeather(keyword[3], apikey);
// console.log('RES: '+res);
// console.log('res A: '+ res.tempA)
// console.log('res B: '+ res.tempB)
// var tempMerida=res[2];

// console.log(' 3: '+tempMerida);
// export {tempLaguna, tempSeville, tempMerida, keyword}
export {res, keyword}
