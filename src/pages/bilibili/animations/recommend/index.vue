<template>
  <div class="container">
    <b-video :content=content></b-video>
  </div>
</template>
<script>
import bVideo from '@/components/bilibili/bVideo.vue'
import content from '@/utils/data/videoDataList.js'
export default {
  components: {
    bVideo
  },
  data() {
    return {
      content
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 30px;
}
</style>
