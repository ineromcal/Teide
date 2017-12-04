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
@import "./assets/main.css";

</style>
