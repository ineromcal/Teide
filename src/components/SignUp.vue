<template>
  <div class="sign-up">
    <h3 class = "teide">Teide</h3>
    <div class="row text-quicksand">
      <div class="col-sm-6 offset-sm-3 border withRadius">
        <div class="form-group">
          <input class="form-control myInput" type="text" v-model="email" placeholder="Email"><br>
          <input class="form-control myInput" type="password" v-model="password" placeholder="Password"><br>
          <button v-on:click="signUp"class="btn btn-outline-primary">Sign Up</button> <br/><br/>
          <span>Already have an account?<router-link to="/login"> Log in</router-link></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default{
  name: 'signUp',
  data: function(){
    return {
      email:'',
      password: ''
    }
  },
  methods: {
    //I use ES6 arrow functions because method definition (function name() {}), have their own this context.
    //If we were using method definition, we wouldn’t be able to access this.$router inside our callbacks.
    //We should have encapsulate the this object of the parent method inside a variable to access it.
    //By using ES6 arrow function, we can access this.$router and let the redirection take place.
    signUp: function(){
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('helloWorld')
        },
        (err) => {
          alert('Ups..'+err.message)
        }
      );
    }
  }
}
</script>

<style scoped>
@import "../assets/main.css";
</style>
