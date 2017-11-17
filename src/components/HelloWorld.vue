<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <h1>{{ time }}</h1>
    <h2>{{ date }}</h2>
    <p>{{ temp }}ºC</p>
    {{ min }}ºC,{{ max }}ºC
  </div>
</div>
</template>

<script>
import currentDate from '../controllers/momentController'
import weatherController from '../controllers/weatherController'
var cdate = currentDate("date")
var ctime = currentDate("time")
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello World',
      date: cdate,
      time: ctime,
      temp: temp,
      min: min,
      max: max
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
</style>
