<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
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
  }
</style>
