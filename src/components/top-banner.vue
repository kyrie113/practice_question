<template>
  <div class="top">
    <div class="top_left"><img src="static/icon/topIcon.png"
        alt=""></div>
    <div class="top_search"><img src="static/icon/find.png"
        alt=""
        width="100%"
        height="100%"></div>
    <div class="top_user-icon"><img src="static/icon/userIcon.webp"
        alt=""
        width="100%"></div>
    <button class="top-button">下载 App</button>
  </div>
</template>
<script>
export default {
  name: 'top-banner'
}
</script>

<style lang="scss" scoped>
.top {
  position: fixed;
  top: 0px;
  z-index: 2500;
  color: #ffff;
  &_left {
    position: absolute;
    left: 14px;
    top: 6.5px;
  }
  &_search {
    position: absolute;
    width: 24px;
    height: 24px;
    overflow: hidden;
    left: 193px;
    top: 9.5px;
  }
  &_user-icon {
    position: absolute;
    width: 24px;
    height: 24px;
    overflow: hidden;
    left: 240px;
    top: 6.5px;
  }
  &-button {
    position: absolute;
    width: 80px;
    height: 25px;
    border: solid #fb7299;
    border-radius: 4px;
    background-color: #fb7299;
    font-size: 13px;
    color: #ffff;
    left: 275px;
    top: 9.5px;
  }
}
</style>

