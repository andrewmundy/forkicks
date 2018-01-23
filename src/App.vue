<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
  @import './assets/main.scss';
   #app {
     font-family: $sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     text-align: center;
    //  color: #2c3e50;
     padding: 0px;
     background: url("./assets/projects/bella2.jpg") center center no-repeat;
     height: 100vh;
     background-size: cover;
    //  overflow: hidden;
 }
</style>
