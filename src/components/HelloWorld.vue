<template>
  <div class="helloWorld">
    <div class="row margin">
      <div class="col-xs-1 offset-xs-10">
        <button class="btn btn-outline-light text-quicksand" v-on:click="logout">Logout</button>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-2 offset-sm-6">
        <h3 class="teide">Teide</h3>
      </div>
    </div>
    <div class="row" >
      <div class="weather col-sm-2">
        <p>{{ tempA.temp }} ºC</p>
        <p>{{ tempA.min }} ºC | {{ tempA.max }} ºC</p>
        <p>{{ locationA}}</p>
        <p>{{ tempA.condition}}</p>
      </div>
      <div class="weather col-sm-2">
        <p>{{ tempB.temp }} ºC</p>
        <p>{{ tempB.min }} ºC | {{ tempB.max }} ºC</p>
        <p>{{ locationB}}</p>
      </div>
      <div class="weather col-sm-2">
        <p>{{ tempC.temp }} ºC</p>
        <p>{{ tempC.min }} ºC | {{ tempC.max }} ºC</p>
        <p>{{ locationC}}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-4 offset-sm-4 hello">
        <h1>{{ time }}</h1>
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
// var conditions = {
//   condA:"",
//   condB:"",
//   condC:""
// };
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
      // getConditionSet().then(function(conditions){
      //   console.log(conditions);
      //   console.log("COND: "+JSON.stringify(conditions));
      //   conditions.condA = conditions.condA;
      //   conditions.condB = conditions.condB;
      //   conditions.condC = conditions.condC;
      // });

    }
  },
  methods: {
    logout: function(){
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
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
.helloWorld{
  z-index: -1;
  font-family: 'Arimo';
  color: #eee;
  text-shadow: 0.05em 0.05em grey;
}
.margin{
  margin-top: 50px;
  margin-right: 0%;
  float:right;
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
  /*border:1px solid white;
  background-color: rgba(255,255,255,0.25);*/
  margin-left: 10px;
  color:white;
}
</style>
