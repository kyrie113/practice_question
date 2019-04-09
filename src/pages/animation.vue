<template>
  <div class="container">
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
        { id: 1, name: '推荐', url: '/animation/firstPage' },
        { id: 2, name: 'MAD·AMV', url: '/animation/sonPage' },
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
  position: fixed;
  margin-top: 96px;
  left: 4px;
  color: gray;
  .head {
    position: fixed;
    top: 100px;
    z-index: 1000;
    &__nav {
      width: 380px;
      overflow-x: scroll;
      .nav {
        &__item {
          white-space: nowrap;
          flex: 1;
          color: #757575;
          padding: 0;
          padding-bottom: 8px;
        }
      }
    }
  }
}
.nav_bar_an::-webkit-scrollbar {
  display: none;
}

.mint-navbar .mint-tab-item.is-selected {
  border: none;
  width: 44px;
  color: #fb7299;
}
</style>
