<template>
  <div class="container">
    <b-video :content=content></b-video>
  </div>
</template>
<script>
import bVideo from '@/components/bilibili/bVideo.vue'
export default {
  components: {
    bVideo
  },
  data() {
    return {
      content: [
        {
          src: 'static/contentImg/1.webp',
          num1: 1,
          num2: 2,
          words: 'hahahah'
        },
        {
          src: 'static/contentImg/2.webp',
          num1: 1,
          num2: 2,
          words: 'lalalsds'
        },
        {
          src: 'static/contentImg/3.webp',
          num1: 1,
          num2: 2,
          words: 'xxxcsc'
        },
        {
          src: 'static/contentImg/4.webp',
          num1: 1,
          num2: 2,
          words: 'xxxxx'
        },
        {
          src: 'static/contentImg/5.webp',
          num1: 1,
          num2: 2,
          words: 'xxxxx'
        },
        {
          src: 'static/contentImg/6.webp',
          num1: 1,
          num2: 2,
          words: 'xxxxx'
        },
        {
          src: 'static/contentImg/1.webp',
          num1: 1,
          num2: 2,
          words: 'hahahah'
        },
        {
          src: 'static/contentImg/1.webp',
          num1: 1,
          num2: 2,
          words: 'hahahah'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 30px;
}
</style>
