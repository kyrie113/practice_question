<template>
  <div id="app">
    <div class="back__color"></div>
    <top-banner></top-banner>
    <b-nav :temp="temp"
      :selected="selected"
      :popupVisible="false">
    </b-nav>
    <router-view />
  </div>
</template>

<script>
import topBanner from '@/components/bTopBanner.vue'
import bNav from '@/components/bNav.vue'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    topBanner,
    bNav
  },
  created(){
            axios({
                method:'get',
                url:'https://www.weixiaotong.com.cn/weixt/api/pc/base_term_listBySchoolYear',
                data:{
      "apiparams": {
        "params": {
            "campusid": 1615,
            "openid": 172691,
            "userid": 172691
        },
        "readonly": true
    }
}
            }).then((response) =>{          
                console.log(response)      
            }).catch((error) =>{
                console.log(error)      
            })
        },

  data() {
    return {
      popupVisible: false,
      selected: 1,
      temp: [
        { name: '首页', id: 1, to: '/' },
        { name: '动画', id: 2, to: '/animation/firstPage' },
        { name: '番剧', id: 3, to: '/' },
        { name: '国创', id: 4, to: '/' },
        { name: '音乐', id: 5, to: '/' },
        { name: '舞蹈', id: 6 },
        { name: '科技', id: 7 },
        { name: '数码', id: 8 },
        { name: '游戏', id: 9 },
        { name: '娱乐', id: 10 },
        { name: '鬼畜', id: 11 },
        { name: '电影', id: 12 },
        { name: '电视剧', id: 13 },
        { name: '纪录片', id: 14 },
        { name: '影视', id: 15 },
        { name: '时尚', id: 16 },
        { name: '生活', id: 17 },
        { name: '广告', id: 18 },
        { name: '直播', id: 19 },
        { name: '相簿', id: 20 },
        {},
        {},
        {},
        {}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.back__color {
  position: fixed;
  width: 400px;
  height: 84px;
  top: 0;
  z-index: 1000;
  background: #ffff;
}
</style>
