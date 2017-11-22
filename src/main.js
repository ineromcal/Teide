// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
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
