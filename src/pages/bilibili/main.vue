<template>
  <div>
    <div class="swip">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in items"
          :key="item.id">
          <a :href="item.href">
            <img :src="item.url">
          </a>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <b-video :content=content></b-video>
    <b-footer></b-footer>
  </div>
</template>
<script>
import bVideo from '@/components/bilibili/bVideo.vue'
import bFooter from '@/components/bilibili/bFooter.vue'
import content from '@/utils/data/videoDataList.js'
export default {
  components: {
    bVideo,
    bFooter
  },

  data() {
    return {
      items: [
        {
          href: '',
          url: 'static/bannerMove/1.webp'
        },
        {
          href: '',
          url: 'static/bannerMove/2.webp'
        },
        {
          href: '',
          url: 'static/bannerMove/3.webp'
        }
      ],
      content
    }
  }
}
</script>
<style lang="scss" scoped>
a {
  img {
    height: 100%;
    width: 100%;
  }
}
.head_line {
  height: 44px;
  top: 30px;
}
.swip {
  width: 387.5px;
  height: 121.5px;
  overflow: hidden;
  border-radius: 8px;
  margin-top: 88px;
  margin-right: auto;
  margin-left: auto;
}
</style>