<template>
  <div class="helloWorld">
    <div class="row margin">
      <div class="col-xs-1 offset-xs-10">
        <button class="btn btn-outline-light text-quicksand" v-on:click="logout">Logout</button>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-3 offset-sm-5">
        <h3 class="teide">Teide</h3>
      </div>
    </div>
    <div class="weatherSet row" >
      <div class="weather col-sm-1.6">
        <p>{{ tempA.temp }} ºC</p>
        <p>{{ tempA.min }} ºC | {{ tempA.max }} ºC</p>
        <p>{{ locationA}}</p>
      </div>
      <div class="weather col-sm-1.6">
        <p>{{ tempB.temp }} ºC</p>
        <p>{{ tempB.min }} ºC | {{ tempB.max }} ºC</p>
        <p>{{ locationB}}</p>
      </div>
      <div class="weather col-sm-1.6">
        <p>{{ tempC.temp }} ºC</p>
        <p>{{ tempC.min }} ºC | {{ tempC.max }} ºC</p>
        <p>{{ locationC}}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-4 offset-sm-4 hello">
        <h1>{{ time }}</h1>
        <b><hr></b>
        <h2>{{ date }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import currentDate from '../controllers/momentController'
import weatherData, {getWeatherSet, keyword, getConditionSet} from '../models/weatherData'
var cdate = currentDate("date")
var ctime = currentDate("time")
var res = {};
var guard = false;
var weatherLoaded = false;
var res = {
  tempA:{temp:0, min:0, max:0, condition:" "},
  tempB:{temp:0, min:0, max:0, condition:" "},
  tempC:{temp:0, min:0, max:0, condition:" "}
};
export default {
  name: 'helloWorld',
  data () {
    return {
      msg: 'Hello World',
      date: cdate,
      time: ctime,
      tempA: res.tempA,
      tempB: res.tempB,
      tempC: res.tempC,
      locationA: keyword[0],
      locationB:keyword[1],
      locationC:keyword[2],
      weatherLoaded: weatherLoaded
    }
  },
  created(){
    if (!guard){
      guard = true;
      getWeatherSet().then(function(data){
        console.log(data);
        console.log("RESP: "+JSON.stringify(data));
        res.tempA.temp = data.tempA.temp;
        res.tempA.max = data.tempA.max;
        res.tempA.min = data.tempA.min;
        res.tempA.condition = data.tempA.condition;
        res.tempB.temp = data.tempB.temp;
        res.tempB.max = data.tempB.max;
        res.tempB.min = data.tempB.min;
        res.tempB.condition = data.tempB.condition;
        res.tempC.temp = data.tempC.temp;
        res.tempC.max = data.tempC.max;
        res.tempC.min = data.tempC.min;
        res.tempC.condition = data.tempC.condition;
        weatherLoaded = true;
      });

    }
  },
  methods: {
    logout: function(){
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },
    // getIcon: function(condition){
    //   if
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/main.css";
</style>
