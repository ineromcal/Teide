import $ from 'jquery'
import {unsplahsApi} from '../controllers/unsplashController.js';

export var srcURLs = [];
export var i =1


export function startRandom(srcURLs, m){
  return new Promise(function(resolve){
    $(".myContainer").css({"background-image": "url("+srcURLs[m]+")", "background-repeat":"no-repeat",
    "transition": "background-image 2s linear",
   "-moz-transition": "background-image 2s linear",
   "-webkit-transition": "background-image 2s linear",
   "-ms-transition": "background-image 2s linear"});
    setTimeout(() => {resolve(m); console.log("Changing image to", srcURLs[m])},6000);
  })

};
export function randomizeImages(srcURLs,m){
 startRandom(srcURLs,m).then(function(response){
   m++;
   if (m < srcURLs.length){
     randomizeImages(srcURLs,m);
   } else {
     m = 0;
     randomizeImages(srcURLs,m);
   }
 });

};
export function fetchData() {

  return new Promise(function(resolve) {
    //return 10 objects from the api
    unsplahsApi.get('/photos/random?count=3&collections=932809')
    //create a function to assign the response
    .then(splashResponse => {
      //assign the return to a variable
      var heroImages = splashResponse.data
      //array 10 urls from the return *look at map functions
      for (var j=0; j<heroImages.length; j++) {
          srcURLs.push(heroImages[j].urls.regular)//.urls.regular)
      }
      // startRandom(0);
      // setTimeout(randomizeImages(),5000);
      // // this.startRandom();
      resolve(srcURLs)
    })
  })
}
