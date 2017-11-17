<template>
  <div class="link">
    <h1>{{msg}}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Link',
  data () {
    return {
      msg: 'Here is your link'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .router-link-active {
    color: red;
  }
</style>
