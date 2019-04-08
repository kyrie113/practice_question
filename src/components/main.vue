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
              width="100%"><span>{{key.num1}}</span></div>
          <div class="content-box-img_container2"><img src="static/icon/list.png"
              alt=""
              width="100%"><span>{{key.num2}}</span></div>
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
          words: "xxxxx"
        },
        {
          src: "static/contentImg/2.webp",
          num1: 1,
          num2: 2,
          words: "xxxxx"
        },
        {
          src: "static/contentImg/3.webp",
          num1: 1,
          num2: 2,
          words: "xxxxx"
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
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.head_line {
  height: 44px;
}
.swip {
  width: 351px;
  height: 109.98px;
  overflow: hidden;
  border-radius: 8px;
  margin-top: 10px;
  // font-size: 0;
  // line-height: 1;
}
.content {
  &-box {
    width: 165px;
    height: 143px;
    float: left;
    margin-top: 40px;
    &-img {
      background-repeat: no-repeat;
      background-size: 100% 100%;
      position: relative;
      width: 150px;
      height: 150px;
      border-radius: 6px;
      margin: auto;
      span {
        position: absolute;
        top: 150px;
        left: 10px;
      }
      &_container1 {
        width: 16px;
        position: absolute;
        top: 125px;
        left: 10px;
        span {
          position: absolute;
          top: 0px;
          left: 15px;
          color: #fff;
        }
      }
      &_container2 {
        width: 16px;
        position: absolute;
        top: 123px;
        left: 50px;
        span {
          position: absolute;
          top: 0px;
          left: 15px;
          color: #fff;
        }
      }
    }
  }
}
</style>


