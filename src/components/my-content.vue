<template>
  <div class="content">
    <div class="content-box"
      v-for="key in content"
      :key=key.item>
      <div class="content-box-img"
        :style="{
            backgroundImage: 'url('+key.src+')' 
          }">
        <div class="content-box-img_container1"><img src="static/icon/video.png"
            alt=""
            width="100%"
            height="100%"><span>{{key.num1}}万</span></div>
        <div class="content-box-img_container2"><img src="static/icon/list.png"
            alt=""
            width="100%"
            height="100%"><span>{{key.num2}}万</span></div>
        <span>{{key.words}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'myContent',
  props: ['content']
}
</script>
<style lang="scss" scoped>
.content {
  position: relative;
  top: -25px;
  &-box {
    // width: 170px;
    // height: 106px;
    width: 50%;
    float: left;
    margin-top: 40px;
    &-img {
      background-repeat: no-repeat;
      background-size: 100% 100%;
      position: relative;
      width: 170px;
      height: 106px;
      border-radius: 6px;
      margin: auto;
      span {
        position: absolute;
        top: 108px;
        left: 10px;
      }
      &_container1 {
        width: 16px;
        height: 16px;
        position: absolute;
        top: 80px;
        left: 10px;
        span {
          position: absolute;
          top: -2px;
          left: 20px;
          color: #fff;
          width: 40px;
        }
      }
      &_container2 {
        width: 16px;
        height: 16px;
        position: absolute;
        top: 80px;
        left: 100px;
        span {
          position: absolute;
          top: -2px;
          left: 20px;
          color: #fff;
          width: 40px;
        }
      }
    }
  }
}
</style>

