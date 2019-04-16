<template>
  <div class="video">
    <div class="video__box"
      v-for="key in content"
      :key=key.item>
      <div class="box__img"
        :style="{
            backgroundImage: 'url('+key.src+')'
          }">
        <div class="img__comment"><img src="static/icon/video.png"
            width="100%"
            height="100%"><span>{{key.num1}}万</span></div>
        <div class="img__tanmu"><img src="static/icon/list.png"
            width="100%"
            height="100%"><span>{{key.num2}}万</span></div>
        <span>{{key.words}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'bVideo',
  props: ['content']
}
</script>
<style lang="scss" scoped>
.video {
  position: relative;
  height: 600px;
  top: -25px;
  &__box {
    width: 50%;
    float: left;
    margin-top: 40px;
    .box {
      &__img {
        background-repeat: no-repeat;
        background-size: 100% 100%;
        position: relative;
        width: 187px;
        height: 117px;
        border-radius: 6px;
        margin: auto;
        span {
          position: absolute;
          top: 120px;
          left: 10px;
        }
        .img {
          &__comment {
            width: 16px;
            height: 16px;
            position: absolute;
            top: 90px;
            left: 10px;
            span {
              position: absolute;
              top: -2px;
              left: 20px;
              color: #fff;
              width: 40px;
            }
          }
          &__tanmu {
            width: 16px;
            height: 16px;
            position: absolute;
            top: 90px;
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
  }
}
</style>
