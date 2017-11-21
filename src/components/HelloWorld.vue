<template>
  <div class="hello">
    <div class="weather">
      <p>{{ tempA[0] }} ºC</p>
      {{ tempA[1] }} ºC | {{ tempA[2] }} ºC
      <p>{{ locationA}}</p>
    </div>
    <div class="weather">
      <p>{{ tempB[0] }} ºC</p>
      {{ tempB[1] }} ºC | {{ tempB[2] }} ºC
      <p>{{ locationB}}</p>
    </div>
    <h2>{{ msg }}</h2>
    <h1>{{ time }}</h1>
    <h2>{{ date }}</h2>
  </div>
</template>

<script>
import currentDate from '../controllers/momentController'
// import weatherData, {tempLaguna, tempSeville, tempMerida, keyword} from '../models/weatherData'
import weatherData, {tempA,tempB, keyword} from '../models/weatherData'
var cdate = currentDate("date")
var ctime = currentDate("time")
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello World',
      date: cdate,
      time: ctime,
      tempA: tempA,
      tempB: tempB,
      // max: tempLaguna,
      locationA: keyword[0],
      locationB:keyword[1]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: bold;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.weather{
  border:1px solid white;
  width:120px;
  background-color: rgba(255,255,255,0.25);
}
</style>
