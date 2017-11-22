<template>
  <div class="login">
    <h3>Let's enter to Teide!</h3>
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <button v-on:click="signUp">Sign Up</button>
    <span>Or go back to <router-link to="/login">login</router-link>.</span>
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
.login{
  margin-top: 100px;
  text-align: center;
}

input{
  margin: 10px 0;
  width: 30%;
  padding: 15px;
}
button{
  margin-top: 20px;
  width: 90px;
  padding: 10px;
  cursor: pointer;
}
span{
  display: block;
  margin-top: 20px;
}
</style>
