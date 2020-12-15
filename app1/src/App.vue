<template>
  <div id="subapp">
    <h3>App1 <a href="http://localhost:8100/app1">http://localhost:8100/app1</a></h3>
    <div class="nav">
      <router-link to="/page1" class="nav__item">Page1</router-link>
      <router-link to="/page2" class="nav__item">Page2</router-link>
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

.nav {
  padding: 8px 0;
}

.nav__item {
  margin-right: 12px;
}
</style>
