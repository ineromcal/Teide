<template>
  <div class="login">
    <h3 class = "teide">Teide</h3>
    <div class="row text-quicksand">
      <div class="col-sm-6 offset-sm-3 border withRadius">
        <div class="form-group">
          <input class="form-control myInput" type="text" v-model="email" placeholder="Email"><br>
          <input class="form-control myInput" type="password" v-model="password" placeholder="Password"><br>
          <a href src="resetPassword">Did you forget your password?</button></a> <br/><br/>
          <button class="btn btn-outline-primary" v-on:click="signIn">Enter</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6 offset-sm-3 border text-quicksand withRadius">
        <p>You don't have a account? You can create one <router-link to="/sign-up">here</router-link>.</p>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default{
  name: 'login',
  data: function(){
    return {
      email:'',
      password:''
    }
  },
  methods: {
    signIn:function(){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user)=>{
          this.$router.replace('helloWorld')
        },
        (err)=>{
          alert('Ups..'+err.message)
        }
      );
    },
    resetPassword:function(){
      firebase.auth().sendPasswordResetEmail(this.email).then(
        (user)=>{
          alert('Check your email!')
        },
        (err)=>{
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
