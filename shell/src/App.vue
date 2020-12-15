<template>
  <div id="app">
    <div class="nav">
      <div class="nav__item">
        <router-link class="link-btn" to="/a" active-class="activate">External View 1</router-link>
      </div>
      <div class="nav__item">
        <router-link class="link-btn" to="/b" active-class="activate">External View 2</router-link>
      </div>
      <div class="nav__item">
        <router-link class="link-btn" to="/c" active-class="activate">Internal View 3</router-link>
      </div>
    </div>
    <div class="content">
      <div id="subapp" />
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

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.link-btn {
  color: #999;
  text-decoration: none;

  &:hover, &.activate {
    color: #2E8CF0;
  }
}

.nav {
  padding: 8px 24px;
  border-bottom: 1px solid #ddd;
}

.nav__item {
  display: inline-block;
  padding: 8px 0;
  margin-right: 24px;
}

.content {
  padding: 8px 24px;
}
</style>
