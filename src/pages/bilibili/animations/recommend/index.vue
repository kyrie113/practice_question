<template>
  <div class="content">
    <div class="content__hot">
      <span class="hot__recommend">热门推荐</span>
      <div class="hot__right">
        <div class="hot__svg-block"><svg viewBox="0 0 1024 1024"
            width="100%"
            height="100%">
            <path d="M907.636364 884.363636H116.363636c-39.563636 0-69.818182-30.254545-69.818181-69.818181V442.181818c0-39.563636 30.254545-69.818182 69.818181-69.818182h209.454546V209.454545c0-39.563636 30.254545-69.818182 69.818182-69.818181h232.727272c39.563636 0 69.818182 30.254545 69.818182 69.818181v256h209.454546c39.563636 0 69.818182 30.254545 69.818181 69.818182v279.272728c0 39.563636-30.254545 69.818182-69.818181 69.818181zM325.818182 418.909091H128c-18.618182 0-34.909091 16.290909-34.909091 34.909091v349.090909c0 18.618182 16.290909 34.909091 34.909091 34.909091H325.818182V418.909091z m325.818182-197.818182c0-18.618182-16.290909-34.909091-34.909091-34.909091h-209.454546c-18.618182 0-34.909091 16.290909-34.909091 34.909091V837.818182h279.272728V221.090909z m279.272727 325.818182c0-18.618182-16.290909-34.909091-34.909091-34.909091H698.181818v325.818182h197.818182c18.618182 0 34.909091-16.290909 34.909091-34.909091v-256z m-411.927273-130.327273l23.272727 46.545455 51.2 6.981818c4.654545 0 6.981818 6.981818 4.654546 11.636364L558.545455 521.309091l9.30909 53.527273c0 4.654545-4.654545 9.309091-9.30909 6.981818l-46.545455-23.272727-44.218182 23.272727c-4.654545 2.327273-11.636364-2.327273-9.309091-6.981818l9.309091-53.527273-37.236363-37.236364c-4.654545-4.654545-2.327273-11.636364 4.654545-11.636363l51.2-6.981819 23.272727-46.545454c-2.327273-6.981818 6.981818-6.981818 9.309091-2.327273z"></path>
          </svg></div>
        <span class="hot__rank">排行榜</span>
        <div class="hot__svg-right">
          <svg viewBox="0 0 1024 1024"
            width="100%"
            height="100%">
            <path d="M336 73.6l406.4 412.8c12.8 12.8 12.8 38.4 0 51.2L336 950.4c-12.8 12.8-35.2 12.8-51.2 0l-3.2-3.2c-12.8-12.8-12.8-38.4 0-51.2l377.6-384L281.6 131.2c-12.8-12.8-12.8-38.4 0-51.2l3.2-3.2c16-16 38.4-16 51.2-3.2z"></path>
          </svg>
        </div>
      </div>
    </div>
    <b-video :content=cutData(content)></b-video>
    <bLine :title="madamv"></bLine>
    <b-video :content=cutData(content)></b-video>
    <bLine :title="mmd"></bLine>
    <b-video :content=cutData(content)></b-video>
    <b-footer></b-footer>
  </div>
</template>
<script>
import bVideo from '@/components/bilibili/bVideo.vue'
import content from '@/utils/data/videoDataList.js'
import bLine from '@/components/bilibili/bMiddleLine.vue'
import bFooter from '@/components/bilibili/bFooter.vue'
export default {
  components: {
    bVideo,
    bLine,
    bFooter
  },
  data() {
    return {
      content,
      madamv: 'MAD·AMD',
      mmd: 'MMD·3D'
    }
  },
  methods: {
    cutData(arr) {
      return arr.slice(0, 4)
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin-top: 42px;
  &__hot {
    display: flex;
    margin-top: 62px;
    margin-left: 10px;
    justify-content: space-between;
    .hot {
      &__right {
        display: flex;
      }
      &__recommend {
        text-align: left;
        font-size: 17.7px;
        color: black;
      }
      &__rank {
        color: #ffa726;
        margin-right: 10px;
      }
      &__svg-block {
        margin-top: 2px;
        width: 19px;
        height: 15.6px;
        margin-right: 10px;
        svg {
          fill: #ffa726;
        }
      }
      &__svg-right {
        margin-top: 2px;
        width: 15.5px;
        height: 15.5px;
        margin-right: 10px;
        svg {
          fill: #aaa;
        }
      }
    }
  }
}
</style>
