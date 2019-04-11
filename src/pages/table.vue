<template>
  <div>
    <div class="top">
      <div class="top__close-btn"><img src="static/icon/close.png"
          alt=""
          width="100%"
          height="100%"></div>
      <div class="top__title">我的课表</div>
      <div class="top__more-btn">
        <img src="static/icon/more.png"
          alt=""
          width="100%"
          height="100%">
      </div>
    </div>
    <div class="term">{{targetValue}}-{{targetValueOfWeek }}<span @click="openPicker"> <img src="static/icon/down.png"
          alt=""
          width="100%"
          height="100%"></span></div>
    <div class="table">
      <div class="table__row">
        <div class="row__cell"
          v-for="(item,index) in weekWordList"
          :key='index'>{{item}}</div>
      </div>
      <div class="table__col">
        <div class="col__cell"
          v-for='(item,index) in 14'
          :key='index'>
          {{item}}
        </div>
      </div>
      <div class="table__container">5555</div>
    </div>

    <mt-popup v-model="popupVisible"
      position="bottom">
      <mt-picker :slots="slots"
        ref="picker"
        :showToolbar="true"
        @change="onValuesChange">
        <div class="picker-toolbar-title">
          <div class="usi-btn-cancel"
            @click="openPicker">取消</div>
          <div class="usi-btn-sure"
            @click="handleConfirm">确定</div>
        </div>
        <hr>
      </mt-picker>
    </mt-popup>
  </div>
</template>
<script>
import api from '@/utils/api.js'
export default {
  data() {
    return {
      weekWordList: [
        '',
        '周一',
        '周二',
        '周三',
        '周四',
        '周五',
        '周六',
        '周日'
      ],
      targetValue: null,
      targetValueOfWeek: null,
      classData: null,
      popupVisible: false,
      slots: [
        {
          flex: 1,
          values: [],
          className: 'slot1',
          textAlign: 'center'
        },
        {
          divider: true,
          content: '-',
          className: 'slot2'
        },
        {
          flex: 1,
          values: [],
          className: 'slot3',
          textAlign: 'center'
        }
      ]
    }
  },
  created() {
    this.reFindSchoolYear()
  },

  methods: {
    // 获取学年
    reFindSchoolYear() {
      api('base_term_listBySchoolYear', {
        params: {
          campusid: 1615,
          openid: 172691,
          userid: 172691
        },
        readonly: true
      }).then(data => {
        this.schoolYearList = data
        this.slots[0].values = data.map(item => item.termName)
      })
    },

    openPicker() {
      this.popupVisible = !this.popupVisible
    },
    onValuesChange(picker, values) {
      const index = this.slots[0].values.findIndex(item => item === values[0])
      if (index !== -1) {
        const weekList = this.schoolYearList[index].weekList
        this.slots[2].values = weekList.map(item => item.weekName)
      }
    },
    handleConfirm() {
      this.targetValue = this.$refs.picker.getValues()[0]
      this.targetValueOfWeek = this.$refs.picker.getValues()[1]
      this.popupVisible = false
    }
  }
}
</script>
<style lang="scss" scoped>
.top {
  background-color: #0033cc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  &__close-btn {
    height: 30px;
    width: 30px;
    margin-left: 10px;
  }
  &__title {
    color: #cdcdcd;
  }
  &__more-btn {
    height: 30px;
    width: 30px;
    margin-right: 10px;
  }
}
.term {
  font-size: 16px;
  text-align: center;
  line-height: 60px;
  height: 60px;
  span {
    display: inline-block;
    width: 16px;
    height: 16px;
  }
}
.table {
  &__row {
    display: flex;
  }
  .row {
    &__cell {
      flex: 1;
      height: 40px;
      line-height: 40px;
      color: #2894ff;
      text-align: center;
      background-color: #dcdcdc;
    }
  }
  &__col {
    flex-direction: column;
    width: 46.88px;
    display: inlineflex;
  }
  .col {
    &__cell {
      text-align: center;

      height: 80px;
      line-height: 46.88px;
      color: #2894ff;
      background-color: #dcdcdc;
    }
  }
  &__container {
    // display: inline-block;
    width: 300px;
  }
}
</style>
