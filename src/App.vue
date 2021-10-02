<template>
  <div id="app">
    <navbar v-if="$route.name != 'Login'"/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar/Nav.vue'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0px;
  margin: 0px;
}
</style>
