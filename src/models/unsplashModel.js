import {unsplahsApi} from '../controllers/unsplashController.js';

//our data
export default {
  data() {
    return {
      srcURLs: []
    };
  },
  methods: {
    fetchData() {
      //return 10 objects from the api
      unsplahsApi.get('/photos/random?count=20')
      //create a function to assign the response
      .then(splashResponse => {
        //assign the return to a variable
        var heroImages = splashResponse.data
        //array 10 urls from the return *look at map functions
        for (var i=0; i<heroImages.length; i++) {
          this.srcURLs.push(heroImages[i].urls.regular)
        }
      });
    }
  }
}
