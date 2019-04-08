<template>
  <div id="app">
    <div class="back_color"></div>
    <div class="top">
      <div class="top_left"><img src="static/icon/topIcon.png"
          alt=""></div>
      <div class="top_search"><img src="static/icon/find.png"
          alt=""
          width="100%"
          height="100%"></div>
      <div class="top_user-icon"><img src="static/icon/userIcon.webp"
          alt=""
          width="100%"></div>
      <button class="top-button">下载 App</button>
    </div>
    <div class="head_line">
      <mt-navbar v-model="selected"
        class="nav_bar">
        <mt-tab-item v-for=" (item, index) in temp"
          :key='index'
          :id="item.id"
          class="nav_bar_item"><span @click="tabLink(item)">{{item.name}}</span></mt-tab-item>
      </mt-navbar>
      <span class="popDown-btn"
        @click="popChange()"><img src="static/icon/down.png"
          alt=""
          width='100%'
          height="100%"></span>
    </div>
    <div class="popUp">
      <mt-popup v-model="popupVisible"
        :modal=false
        :position='right'>
        <mt-navbar v-model="selected"
          class="popUp_item">
          <mt-tab-item class="popUp_item_list"
            v-for=" item in temp"
            :key='item'
            :id="item.id">{{item.name}}</mt-tab-item>
        </mt-navbar>
        <div class="modal"></div>
        <div class="close_box">
          <div class="close_box_icon"
            @click="popChange()"><img src="static/icon/up.png"
              alt=""
              width='100%'
              height="100%"></div>
        </div>
      </mt-popup>
    </div>
    <router-view />
  </div>
</template>

<script>
import { METHODS } from "http";
export default {
  name: "App",
  data() {
    return {
      popupVisible: false,
      selected: 1,
      temp: [
        { name: "首页", id: 1, to: "/" },
        { name: "动画", id: 2, to: "/animation" },
        { name: "番剧", id: 3, to: "/" },
        { name: "国创", id: 4, to: "/" },
        { name: "音乐", id: 5, to: "/" },
        { name: "舞蹈", id: 6 },
        { name: "科技", id: 7 },
        { name: "数码", id: 8 },
        { name: "游戏", id: 9 },
        { name: "娱乐", id: 10 },
        { name: "鬼畜", id: 11 },
        { name: "电影", id: 12 },
        { name: "电视剧", id: 13 },
        { name: "纪录片", id: 14 },
        { name: "影视", id: 15 },
        { name: "时尚", id: 16 },
        { name: "生活", id: 17 },
        { name: "广告", id: 18 },
        { name: "直播", id: 19 },
        { name: "相簿", id: 20 },
        {},
        {},
        {},
        {}
      ]
    };
  },
  methods: {
    popChange: function() {
      this.popupVisible = !this.popupVisible;
    },
    tabLink(data) {
      this.$router.push(data.to);
    }
  }
};
</script>

<style lang="scss" scoped>
.back_color {
  position: fixed;
  width: 400px;
  height: 84px;
  top: 0;
  z-index: 1000;
  background: #ffff;
}
.top {
  position: fixed;
  top: 0px;
  z-index: 2500;
  color: #ffff;
  &_left {
    position: absolute;
    left: 14px;
    top: 6.5px;
  }
  &_search {
    position: absolute;
    width: 24px;
    height: 24px;
    overflow: hidden;
    left: 193px;
    top: 9.5px;
  }
  &_user-icon {
    position: absolute;
    width: 24px;
    height: 24px;
    overflow: hidden;
    left: 240px;
    top: 6.5px;
  }
  &-button {
    position: absolute;
    width: 80px;
    height: 25px;
    border: solid #fb7299;
    border-radius: 4px;
    background-color: #fb7299;
    font-size: 13px;
    color: #ffff;
    left: 275px;
    top: 9.5px;
  }
}
.head_line {
  position: fixed;
  top: 59px;
  z-index: 1000;
}
.popDown-btn {
  position: absolute;
  width: 17.4px;
  height: 17.75px;
  top: -4px;
  left: 335px;
  z-index: 2000;
}
.nav_bar {
  width: 325.5px;
  overflow-x: scroll;
  &_item {
    margin-right: 20px;
    margin-left: 18px;
    flex: none;
    color: #757575;
    padding: 0;
    padding-bottom: 8px;
  }
}
.popUp {
  &_item {
    width: 375px;
    position: absolute;
    flex-wrap: wrap;
    justify-content: flex-start;
    flex-direction: row;
    -webkit-align-items: center;
    &_list {
      display: block;
      flex: 16%;
      justify-content: flex-start;
    }
  }
}
.modal {
  position: absolute;
  top: 160px;
  left: 117px;
  width: 252px;
  height: 40px;
}
.close_box {
  position: relative;
  height: 35px;
  width: 375px;
  top: 180px;
  background-color: white;
  &_icon {
    position: absolute;
    left: 44%;
    width: 20px;
    height: 12px;
  }
}
.nav_bar::-webkit-scrollbar {
  display: none;
}
</style>

