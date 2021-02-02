<template>
  <div id="app">
    <hello-world></hello-world>
    <b-icon-test></b-icon-test>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import BIconTest from './components/icon-test'

export default {
  name: 'App',
  components: {
    HelloWorld,
    BIconTest
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
