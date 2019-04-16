<template>
  <div class="bilibili">
    <div class="bilibili__back-modal"></div>
    <top-banner></top-banner>
    <b-nav :temp="temp"
      :selected="selected"
      :popupVisible="popupVisible"
      @close='onPopClose'>
    </b-nav>
    <router-view />
  </div>
</template>
<script>
import topBanner from '@/components/bilibili/bBanner.vue'
import bNav from '@/components/bilibili/bNav.vue'
export default {
  components: { topBanner, bNav },
  data() {
    return {
      selected: 1,
      popupVisible: false,
      temp: [
        { name: '首页', id: 1, to: '/bilibili/main', componentName: 'main' },
        {
          name: '动画',
          id: 2,
          to: '/animation/recommend',
          componentName: 'animation'
        },
        { name: '番剧', id: 3, to: '/' },
        { name: '国创', id: 4, to: '/' },
        { name: '音乐', id: 5, to: '/' },
        { name: '舞蹈', id: 6 },
        { name: '科技', id: 7 },
        { name: '数码', id: 8 },
        { name: '游戏', id: 9 },
        { name: '娱乐', id: 10 },
        { name: '鬼畜', id: 11 },
        { name: '电影', id: 12 },
        { name: '电视剧', id: 13 },
        { name: '纪录片', id: 14 },
        { name: '影视', id: 15 },
        { name: '时尚', id: 16 },
        { name: '生活', id: 17 },
        { name: '广告', id: 18 },
        { name: '直播', id: 19 },
        { name: '相簿', id: 20 },
        {},
        {},
        {},
        {}
      ]
    }
  },
  methods: {
    onPopClose() {
      this.popupVisible = !this.popupVisible
    }
  }
}
</script>
<style lang="scss" scoped>
.bilibili {
  &__back-modal {
    position: fixed;
    top: 0;
    z-index: 1;
    height: 86px;
    width: 100%;
    background-color: white;
  }
}
</style>
