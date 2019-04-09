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
    <my-content :content=content></my-content>
  </div>
</template>
<script>
import myContent from '@/components/my-content.vue'
export default {
  components: {
    myContent
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
// .main {
//   &--big {
//     .header {
//     }
//   }
//   .header {
//   }
// }

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
</style>


