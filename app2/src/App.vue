<template>
  <div id="subapp">
    <h3>App2 <a href="http://localhost:8200/app2">http://localhost:8200/app2</a></h3>
    <div>
      <router-link to="/page1">Page1</router-link>
      <router-link to="/page2">Page2</router-link>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style scoped>
#app1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
