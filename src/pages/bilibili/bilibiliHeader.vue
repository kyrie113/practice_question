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
    <b-footer-pop></b-footer-pop>
  </div>
</template>
<script>
import topBanner from '@/components/bilibili/bBanner.vue'
import bNav from '@/components/bilibili/bNav.vue'
import temp from '@/utils/data/biliHeaderItemList.js'
import bFooterPop from '@/components/bilibili/bFooterPop.vue'
export default {
  components: { topBanner, bNav, bFooterPop },
  data() {
    return {
      selected: 1,
      popupVisible: false,
      temp
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
