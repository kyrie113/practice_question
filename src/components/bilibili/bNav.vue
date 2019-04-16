<template>
  <div>
    <div class="nav">
      <mt-navbar v-model="isSelected"
        class="nav__bar">
        <mt-tab-item v-for=" (item, index) in temp"
          :key='index'
          :id="item.id"
          class="bar__item"><span @click="tabLink(item)">{{item.name}}</span></mt-tab-item>
      </mt-navbar>
      <span class="pop-btn"
        @click="popChange"><img src="static/icon/down.png"
          width='100%'
          height="100%"></span>
    </div>
    <div class="pop-up">
      <mt-popup v-model="popupVisible"
        :modal=false>
        <mt-navbar v-model="isSelected"
          class="pop-up__item">
          <mt-tab-item class="item__list"
            v-for=" (item,index) in temp"
            :key='index'
            :id="item.id">{{item.name}}</mt-tab-item>
        </mt-navbar>
        <div class="pop-up__modal"></div>
        <div class="pop-up__close-box">
          <div class="close-box__icon"
            @click="popChange"><img src="static/icon/up.png"
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
  // props: ['selected', 'temp', 'popupVisible'],  数据类型需要定义变量类型
  props: {
    popupVisible: Boolean,
    selected: Number,
    temp: { type: Array, default: () => [] }
  },
  data() {
    return {
      isSelected: this.selected // 路由二级跳转时同时改变了父子组件selected 的值，所以需要重新定义一个变量
    }
  },
  methods: {
    tabLink(data) {
      this.$router.push(data.to)
    },
    popChange() {
      this.$emit('close')
    }
  }
}
</script>
<style lang="scss" scoped>
.nav {
  position: fixed;
  top: 59px;
  z-index: 1000;
  &__bar {
    width: 325.5px;
    overflow-x: scroll;
    .bar {
      &__item {
        margin-right: 20px;
        margin-left: 18px;
        flex: none;
        color: #757575;
        padding: 0;
        padding-bottom: 8px;
      }
    }
  }
  .pop-btn {
    position: absolute;
    width: 17.4px;
    height: 17.75px;
    top: -4px;
    left: 335px;
    z-index: 2000;
  }
}

.pop-up {
  &__item {
    width: 375px;
    position: absolute;
    flex-wrap: wrap;
    justify-content: flex-start;
    flex-direction: row;
    -webkit-align-items: center;
    .item {
      &__list {
        display: block;
        flex: 16%;
        justify-content: flex-start;
      }
    }
  }
  &__modal {
    position: absolute;
    top: 160px;
    left: 117px;
    width: 252px;
    height: 40px;
  }
}

.close-box {
  position: relative;
  height: 35px;
  width: 375px;
  top: 180px;
  background-color: white;
  &__icon {
    position: absolute;
    top: 160px;
    left: 46%;
    width: 20px;
    height: 12px;
  }
}
.nav__bar::-webkit-scrollbar {
  display: none;
}
.mint-popup {
  top: 45px;
}
</style>
