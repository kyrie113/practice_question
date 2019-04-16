<template>
  <div class="top">
    <div class="top__bili-icon"><img src="static/icon/topIcon.png"></div>
    <div class="top__search"><img src="static/icon/find.png"></div>
    <div class="top__user-icon"><img src="static/icon/userIcon.webp"></div>
    <button class="top__download-btn">下载 App</button>
  </div>
</template>
<script>
export default {
  name: 'banner'
}
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 1000;
  color: #ffff;
  &__bili-icon {
    position: absolute;
    left: 14px;
    top: 6.5px;
  }
  &__search {
    position: absolute;
    width: 24px;
    height: 24px;
    overflow: hidden;
    left: 220px;
    top: 9.5px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &__user-icon {
    position: absolute;
    width: 24px;
    height: 24px;
    left: 265px;
    top: 6.5px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &__download-btn {
    position: absolute;
    width: 80px;
    height: 25px;
    border: solid #fb7299;
    border-radius: 4px;
    background-color: #fb7299;
    font-size: 13px;
    color: #ffff;
    left: 310px;
    top: 9.5px;
    margin: 0;
    padding: 0;
    border: 1px solid transparent; //自定义边框
    outline: none;
  }
}
</style>