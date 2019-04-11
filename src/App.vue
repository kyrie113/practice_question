<template>
  <div id="app">

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
.back__color {
  position: fixed;
  width: 400px;
  height: 84px;
  top: 0;
  z-index: 1000;
  background: #ffff;
}
</style>
