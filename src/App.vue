<template>
  <div id="app">
    <div class="container">
      <carousel class="randomImages" id="carousel"
        :autoplay="true"
        :navigationEnabled="true"
        :pageCount="10"
        :navigationClickTargetSize="40"
        :perPage="1">
      <slide id="hero" v-for="src in srcURLs" :key="srcURLs.src">
        <img class="hero-image" v-bind:src="src"><img>
          <router-view/>
      </slide>
      </carousel>
    </div>
  </div>
</template>
<script>
// import unsplahsModel from './models/unsplahsModel.js'
import {unsplahsApi} from './controllers/unsplashController.js';
export default {
  data() {
    return {
      name: 'app',
      srcURLs: []
    };
  },
  created(){
    this.fetchData();
  },
  methods: {

    fetchData() {
      //return 10 objects from the api
      unsplahsApi.get('/photos/random?count=20&collections=932809')
      //create a function to assign the response
      .then(splashResponse => {
        //assign the return to a variable
        var heroImages = splashResponse.data
        console.log("Splash: "+splashResponse.data)
        //array 10 urls from the return *look at map functions
        for (var i=0; i<heroImages.length; i++) {
          this.srcURLs.push(heroImages[i].urls.regular)
        }
      });
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
.container{
}

/*#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  margin: 0%;
  font-size: 18px;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.2);
  position: fixed;
}
html,
body,
.background{
  width: 100%;
  height: 100%;
  margin: 0%;
}

.background {
  position: fixed;
}

.background:after {
  content: "";
  background-image: url("../images/image2.jpg");
  background-size: cover;
  position: fixed;
  z-index:-1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: .9;
}*/
</style>
