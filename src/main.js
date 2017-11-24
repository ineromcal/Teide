// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import axios from 'axios'
import VueCarousel from 'vue-carousel'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

// Initialize Firebase
let app;
var config = {
  apiKey: "AIzaSyB8oFZAEWBU3-K0YzocgTwLSLbrP5WPXqo",
  authDomain: "teide-951eb.firebaseapp.com",
  databaseURL: "https://teide-951eb.firebaseio.com",
  projectId: "teide-951eb",
  storageBucket: "",
  messagingSenderId: "373621565080"
}
firebase.initializeApp(config);
//This fragment below is for validate the currentUser != null by observer and waiting
firebase.auth().onAuthStateChanged(function(user){
  if(!app){
    app=new Vue({
      el: '#app',
      render: h=>h(App),
      template:'<App/>',
      components: {App},
      router
    })
  }
});
//All this firebase fragment will go to LoginController.js and imported here




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

//rendering Carousel
Vue.use(VueCarousel);
new Vue({
  el: '#carousel',
  components:{
    'carousel': VueCarousel.Carousel,
    'slide': VueCarousel.Slide
  },
  render: h=>h(App),
})
