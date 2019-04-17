<template>
  <div class="line">
    <div class="line__title">{{title}}</div>
    <div class="line__read">
      <div class="read__words">查看更多</div>
      <div class="read__right">
        <svg viewBox="0 0 1024 1024"
          width="100%"
          height="100%">
          <path d="M336 73.6l406.4 412.8c12.8 12.8 12.8 38.4 0 51.2L336 950.4c-12.8 12.8-35.2 12.8-51.2 0l-3.2-3.2c-12.8-12.8-12.8-38.4 0-51.2l377.6-384L281.6 131.2c-12.8-12.8-12.8-38.4 0-51.2l3.2-3.2c16-16 38.4-16 51.2-3.2z"></path>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String
  }
}
</script>
<style lang="scss" scoped>
.line {
  display: flex;
  margin-top: 20px;
  margin-left: 10px;
  justify-content: space-between;
  &__title {
    text-align: left;
    font-size: 17.7px;
    color: black;
  }
  &__read {
    display: flex;
    .read {
      &__right {
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
