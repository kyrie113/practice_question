<template>
  <div>
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
  </div>
</template>
<script>
export default {
  name: 'myNav',
  props: ['selected', 'temp', 'popupVisible'],
  methods: {
    tabLink(data) {
      this.$router.push(data.to)
    },
    popChange: function() {
      this.popupVisible = !this.popupVisible
    }
  }
}
</script>
<style lang="scss" scoped>
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


