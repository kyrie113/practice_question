<template>
  <div id="app">
    <div class="top">
      <div class="top_left" ><img src ="static/icon/topIcon.png" alt=""></div>
      <div class="top_search"><img src="static/icon/find.png" alt="" width="100%"></div>
      <div class="top_user-icon"><img src="static/icon/userIcon.webp" alt="" width="100%"></div>
      <button class="top-button">下载app</button>
    </div>
    <div class="head_line">
        <mt-navbar v-model="selected" class="nav_bar" >
           <mt-tab-item  v-for=" (item, index) in temp" :key='index' :id="item.id" class="nav_bar_item" ><span @click="tabLink(item)">{{item.name}}</span></mt-tab-item>
        </mt-navbar>
        <span class="popDown-btn" @click="popChange()"><img src="static/icon/down.png" alt="" width='100%' height="100%"></span>    
    </div>
    <div class="popUp">
        <mt-popup v-model="popupVisible" :modal=false :position='right'>
          <mt-navbar v-model="selected"  class="popUp_item" >
            <mt-tab-item class="popUp_item_list"  v-for=" item in temp" :key='item' :id="item.id" >{{item.name}}</mt-tab-item>
          </mt-navbar>
          <div class="modal"></div>
          <span class="close" @click="popChange()"><img src="static/icon/up.png" alt="" width='100%' height="100%"></span> 
      </mt-popup>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { METHODS } from 'http';
export default {
  name: 'App',
  data(){
    return{
      popupVisible:true,
       selected:1,
      temp:[
        { name:'首页',
          id:1,
          to:'/'
        },
        { name:'动画',
          id:2,
          to:'/animation'
        },
        { name:'番剧',
          id:3,
          to:'/'
        },
        { name:'国创',
          id:4,
          to:'/'
        },
        { name:'音乐',
          id:5,
          to:'/'
        },
        { name:'舞蹈',
          id:6
        },
        { name:'科技',
          id:7
        },
        { name:'数码',
          id:8
        },
        { name:'游戏',
          id:9
        },
        { name:'娱乐',
          id:10
        },
        { name:'鬼畜',
          id:11
        },
        { name:'电影',
          id:12
        },
        { name:'电视剧',
          id:13
        },
        { name:'纪录片',
          id:14
        },
        { name:'影视',
          id:15
        },
        { name:'时尚',
          id:16
        },
        { name:'生活',
          id:17
        },
        { name:'广告',
          id:18
        },
        { name:'直播',
          id:19
        },
        { name:'相簿',
          id:20
        },
        {},{},{},{}
      ]
    }
  },
  methods:{
    popChange: function(){
      this.popupVisible =!this.popupVisible
    },
    tabLink(data){
      this.$router.push(data.to);
    }
  }
}
</script>

<style lang="scss" scoped>
 .top{
  //  position:fixed;
   display: flex;
   &_left{
     margin-left:18px;
   }
   &_search{
     margin-left:auto;
     width: 24px;
     height: 24px;
     overflow: hidden;
     margin-right:22px;
   }
   &_user-icon{
     width: 24px;
     height: 24px;
     overflow: hidden;
     margin-right:12px;
   }
   &-button{
     width: 80px;
     height: 25px;
     border: solid #fb7299;
     border-radius: 4px;
     background-color:#fb7299;
     font-size: 13px;
     color: #ffff;
     margin-right:12px;
   }
  }
  .head_line{
  height: 44px;
  }
  .popDown-btn{
  position: absolute;
  width: 12.4px;
  height:6.75px;
  top:55px;
  left: 337px;
  // padding: 10px;
}
.nav_bar::-webkit-scrollbar { width: 0 !important }
.nav_bar{
      height:55px;
      width: 325.5px;
      overflow-x: scroll;
      &_item{
      margin-right: 35px;
      margin-left:8px;
      flex: none;
      color: #757575;
      }
}
.popUp{
  &_item{
      width: 360px;
      position: absolute;
      flex-wrap: wrap;
      justify-content: flex-start;
      flex-direction: row;
      -webkit-align-items: center;
      &_list{
            display: block;
            // width: 30.5px ;
            // padding-top:6px;
            // padding-bottom: 6px;
            // margin-left: 14px;
            // margin-right: 14px;
        flex:16%;
        justify-content: flex-start;
        // div{
        //   display:block;
        //   width: 10px;
        //   height: 1px;
        //   margin-left: 10px;
        // }
      }
    }
}
.modal{
      position: absolute;
    top: 160px;
    left: 117px;
    width: 252px;
    height: 40px;
}
.close{
    position: absolute;
    width: 32px;
    height: 32px;
    top: 180px;
    left: 33%;

}

</style>

