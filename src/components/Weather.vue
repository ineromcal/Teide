<!-- <template>
  <div class="weather">
    <div>
      <p>{{ temp }}ºC</p>
      {{ min }}ºC,{{ max }}ºC
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import WeatherAPI from 'simple-weather-api'
import _ from 'lodash'
var keyword = 'La Laguna'
var apikey = '5f675490d49f5c0f5856ffaa1cbd3cec'
var weather = new WeatherAPI(apikey)
var myweather = weather.getWeather(keyword)
var temp = 0
var min = 0
var max = 0
myweather.then(function (response) {
  // console.log('response.....' + response.body)
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

</script>

<style scoped>

</style> -->
