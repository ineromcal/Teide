<template>
  <div class="login">
    <h3>Sign In</h3>
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <button v-on:click="signIn">Connection</button>
    <button v-on:click="resetPassword">I forgot my password</button>
    <p>You don't have a account? You can create one <router-link to="/sign-up">here</router-link>.</p>
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
p a{
  text-decoraion: underline;
  cursor: pointer;
}
</style>
