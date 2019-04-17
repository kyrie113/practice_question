<template>
  <div class="container">
    <div class="container__back-modal"></div>
    <div class="head">
      <mt-navbar v-model="model"
        class="head__nav">
        <mt-tab-item v-for=" (item, index) in banner"
          :key='index'
          :id="item.id"
          class="nav__item"><span @click="linkTo(item)">{{item.name}}</span></mt-tab-item>
      </mt-navbar>
      <hr>
    </div>
    <router-view />
  </div>

</template>
<script>
export default {
  data() {
    return {
      model: 1,
      banner: [
        { id: 1, name: '推荐', url: '/animation/recommend' },
        { id: 2, name: 'MAD·AMV', url: '/animation/channel' },
        { id: 3, name: 'MMD·3D', url: '/' },
        { id: 4, name: '短片·手书·配音', url: '/' },
        { id: 5, name: '综合', url: '/' }
      ]
    }
  },
  methods: {
    linkTo(data) {
      //   const url = this.$route.path;    有个路径判断问题， 这里不存在，子路由很多的时候存在拼接问题
      this.$router.push(data.url)
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  overflow: auto;
  margin-top: 89px;
  color: gray;
  width: 100%;
  &__back-modal {
    background-color: white;
    position: absolute;
    height: 20px;
  }
  .head {
    width: 414px;
    position: fixed;
    top: 90px;
    z-index: 1000;
    padding-top: 10px;
    // background-color: #ccc;
    &__nav {
      overflow: hidden;
      overflow-x: scroll;
      .nav {
        &__item {
          white-space: nowrap;
          color: #757575;
          padding: 0;
          padding-bottom: 8px;
          margin-left: 29px;
        }
      }
    }
  }
}
.head__nav::-webkit-scrollbar {
  display: none;
}
.mint-navbar .mint-tab-item.is-selected {
  border: none;
  color: #fb7299;
}
</style>
