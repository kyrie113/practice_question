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
    <div class="term"
      @click="openPicker">
      <span>{{ targetValue }}-{{ targetValueOfWeek }}</span>
      <img src="static/icon/down.png"
        alt=""
        width="100%"
        height="100%">
    </div>
    <div class="table">
      <div class="table__row">
        <div class="row__cell"
          v-for="(item,index) in weekWordList"
          :key='index'>{{item}}</div>
      </div>
      <div class="table__col">
        <div class="col__cell"
          v-for='(item,index) in 15'
          :key='index'>
          {{item}}
        </div>
      </div>
      <div class="table__container">
        <td v-for="(item1,index) in scheduleList"
          :key='index'>
          <tr v-for="(item,index) in 6 "
            :style="{classStyle}"
            :key='index'>
            <div v-show="(index+1)===item1.classNum">
              <span>{{item1.courseName}}</span>
              <span>{{item1.teacherName}}</span>
            </div>
          </tr>
        </td>
      </div>
    </div>

    <popup-picker :visible="isDisplayPopupPicker"
      :leftList="schoolYearNameList"
      :rightList="weekNameList"
      @close="onPopupPickerClose"
      @confirm="onPopupPickerConfirm"
      @change="onPopupPickerChange"></popup-picker>
  </div>
</template>
<script>
import api from '@/utils/api.js'
import popupPicker from '@/components/popupPicker'
import getColor from '@/utils/getColor.js'

export default {
  components: {
    popupPicker
  },

  data() {
    return {
      classStyle: '',
      termCode: '181902',
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
      schoolYearList: [],
      schoolYearNameList: [],
      weekNameList: [],
      isDisplayPopupPicker: false,
      weekClassNumber: null,
      weekIndex: 0,
      tableList: [],
      scheduleList: []
    }
  },

  created() {
    this.reFindSchoolYear()
  },
  updated() {},

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
        this.schoolYearNameList = data.map(item => item.termName)
      })
    },
    // 获取课表
    reFindSchedule() {
      api('elective_schedule_listStu', {
        params: {
          campusid: 1615,
          classid: 0,
          stuid: 1561247655,
          termcode: this.termCode
        },
        readonly: true
      }).then(data => {
        this.tableList = data
        // console.log(data)
        this.scheduleList = this.tableList[this.weekIndex].scheduleList
      })
    },

    openPicker() {
      this.isDisplayPopupPicker = true
    },

    onPopupPickerChange(data) {
      const index = this.schoolYearNameList.findIndex(item => item === data[0])
      if (index !== -1) {
        const weekList = this.schoolYearList[index].weekList
        this.weekNameList = weekList.map(item => item.weekName)
      }
    },

    onPopupPickerClose() {
      this.isDisplayPopupPicker = false
    },

    onPopupPickerConfirm(data) {
      this.isDisplayPopupPicker = false
      this.targetValue = data[0]
      this.targetValueOfWeek = data[1]
      this.weekIndex = this.weekNameList.findIndex(
        item => item === this.targetValueOfWeek
      )
      this.reFindSchedule()
      console.log(this.weekIndex)
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
  }
  img {
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
    display: inline-grid;
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
    position: absolute;
    display: inline-block;
    width: 328px;
    height: 482px;
    td {
      width: 328px;
      height: 80px;
      border-collapse: collapse;
      tr {
        cellpadding: 1px;
        border-radius: 3px;
        width: 47px;
        background-color: red;
      }
    }
  }
}
</style>
