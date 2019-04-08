<template>
  <div>
    <div class="swip">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in items"
          :key="item.id">
          <a :href="item.href">
            <img :src="item.url"
              width="100%"
              height="100%">
          </a>
        </mt-swipe-item>
      </mt-swipe>
    </div>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          href: "",
          url: "static/bannerMove/1.webp"
        },
        {
          href: "",
          url: "static/bannerMove/2.webp"
        },
        {
          href: "",
          url: "static/bannerMove/3.webp"
        }
      ],
      content: [
        {
          src: "static/contentImg/1.webp",
          num1: 1,
          num2: 2,
          words: "hahahah"
        },
        {
          src: "static/contentImg/2.webp",
          num1: 1,
          num2: 2,
          words: "lalalsds"
        },
        {
          src: "static/contentImg/3.webp",
          num1: 1,
          num2: 2,
          words: "xxxcsc"
        },
        {
          src: "static/contentImg/4.webp",
          num1: 1,
          num2: 2,
          words: "xxxxx"
        },
        {
          src: "static/contentImg/5.webp",
          num1: 1,
          num2: 2,
          words: "xxxxx"
        },
        {
          src: "static/contentImg/6.webp",
          num1: 1,
          num2: 2,
          words: "xxxxx"
        },
        {
          src: "static/contentImg/1.webp",
          num1: 1,
          num2: 2,
          words: "hahahah"
        },
        {
          src: "static/contentImg/1.webp",
          num1: 1,
          num2: 2,
          words: "hahahah"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.main {
  &--big {
    .header {
    }
  }
  .header {
  }
}

.head_line {
  height: 44px;
  top: 30px;
}
.swip {
  width: 351px;
  height: 109.98px;
  overflow: hidden;
  border-radius: 8px;
  margin-top: 88px;
  margin-left: 5px;
}
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


