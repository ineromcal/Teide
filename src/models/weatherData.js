import getMyWeather from '../controllers/weatherController'

var keyword = ['La Laguna', 'Seville,ES', 'Merida, MX'];
var apikey = '5f675490d49f5c0f5856ffaa1cbd3cec';
var res = {
  tempA:{temp:0, min:0, max:0, condition:""},
  tempB:{temp:0, min:0, max:0, condition:""},
  tempC:{temp:0, min:0, max:0, condition:""}
};
export function getWeatherSet(){
  return new Promise(function(resolve){
    getMyWeather(keyword[0], apikey).then(function(data){
      assignWeatherData(data, "A")
      getMyWeather(keyword[1], apikey).then(function(data2){
        assignWeatherData(data2, "B")
        getMyWeather(keyword[2], apikey).then(function(data3){
          assignWeatherData(data3, "C")
          resolve(res);
        });
      });
    })
  }
)
}

function assignWeatherData(data, index){
  if(index=="A"){
    res.tempA.temp = data.temp;
    res.tempA.max = data.max;
    res.tempA.min = data.min;
    res.tempA.condition = data.condition;
  }
  if(index=="B"){
    res.tempB.temp = data.temp;
    res.tempB.max = data.max;
    res.tempB.min = data.min;
    res.tempB.condition = data.condition;
  }
  if(index=="C"){
    res.tempC.temp = data.temp;
    res.tempC.max = data.max;
    res.tempC.min = data.min;
    res.tempC.condition = data.condition;
  }
}

export {res, keyword}
