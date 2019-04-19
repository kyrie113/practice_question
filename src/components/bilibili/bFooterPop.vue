<template>
  <div class="bottom">
    <mt-popup v-model="isOpen"
      :modal='false'>
      <div class="bottom__footer">
        <div class="footer__close-btn"
          @click="isOpen=false">
          <img src="static/icon/close.png">
        </div>
        <div class="footer__bili-icon">
          <img src="static/icon/logo_bottom.png">
        </div>
        <div class="footer__detail">
          <div class="detail__top">上bilibili客户端</div>
          <div class="detail__bottom">高清视频 新番电影 一览无余</div>
        </div>
        <div class="footer__try-btn">
          立即体验
        </div>
      </div>
    </mt-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: true
    }
  }
}
</script>

<style lang="scss" scoped>
.bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 66.24px;
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000;
    // opacity: 0.8;  要写在mint的样式里 坑
    z-index: -100;

    height: 66px;
  }
  .footer {
    &__close-btn {
      width: 20px;
      height: 20px;
      margin-left: 5px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &__bili-icon {
      width: 35px;
      height: 35px;

      margin-left: 14px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &__detail {
      margin-right: 60px;
      .detail {
        &__top {
          font-size: 15.5px;
          color: #fff;
        }
        &__bottom {
          font-size: 13.2px;
          color: #999;
        }
      }
    }
    &__try-btn {
      border: solid #fb7299;
      border-radius: 4px;
      background-color: #fb7299;
      width: 80px;
      height: 25px;
      color: #fff;
      text-align: center;

      margin-right: 20px;
    }
  }
}
.mint-popup {
  top: 671px;
  width: 414px;
  opacity: 0.8;
}
</style> 