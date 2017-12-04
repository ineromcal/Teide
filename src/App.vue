<template>
  <div id="app">
    <div class="myBackground myContainer">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import {fetchData, startRandom, randomizeImages} from './utils/randomizeImages.js';
var guard = false;
var i = 0;
export default {
  data() {
    return {
      name: 'app',
    };
  },
  mounted() {
    if (!guard){
      guard = true;
      this.getImages();
    };
  },
  methods:{
    getImages: function(){
      fetchData().then(function(response){
        console.log("RESPONSE: "+response);
        var mydata = response;
        randomizeImages(mydata,i);

      })
    }
  }
}

</script>

<style>
/*@import "./assets/custom-bootstrap.scss";
@import "../node_modules/bootstrap/scss/bootstrap.scss";*/
.randomImages {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
}
.withRadius {
  border-radius: 8px;
}


.myInput, .myInput:focus, .myInput:active {
  background-color: #eeeeee !important;
}

.border{
  text-align: center;
  margin-top: 15px;
  border-width: 1px;
  border-color: white;
  padding: 10px;
  width: 40%;
  background-color: rgba(255,255,255,0.9);
}
.teide{
  text-align: center;
  font-family: 'Dancing Script', cursive;
  color: white;
  font-size: 50px;
  margin-top: 40px;
}
html,
body,
.myBackground{
  width: 100%;
  height: 100%;
  margin: 0%;

}

.myBackground {
  position: fixed;
  content: "";
  /*background-image: url("../images/image3.jpg");*/
  background-size: cover;
  object-fit: cover;
  z-index:0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: .9;

}

/*.myBackground:after {
content: "";
background-image: url("../images/image3.jpg");
background-size: cover;
position: fixed;
z-index:-1;
top: 0;
left: 0;
bottom: 0;
right: 0;
opacity: .9;
}*/

.text-quicksand {
  font-family: 'Quicksand' !important;
  font-size: 16px;
}

</style>
