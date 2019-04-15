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
      <div class="table__nav">
        <tr>
          <td v-for="(item ,index) in  weekWordList"
            :key="index">{{item}}</td>
        </tr>
      </div>
      <div class="table__body">
        <table>
          <tr v-for="(item,index ) in tableList"
            :key="index">
            <td class="body__class-name">{{item.classNum}}</td>
            <td v-for="(item,index ) in item.scheduleList "
              :key='index'
              :style="{backgroundColor:getColor(item.courseName)}">
              <span class="body__course-name">{{item.courseName}}</span><br><span class="body__teacher-name">
                {{item.teacherName}}</span></td>
          </tr>
        </table>
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

export default {
  components: {
    popupPicker
  },

  data() {
    return {
      classStyle: '',
      termCode: '181901',
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
      classNameList: [],
      colorList: [
        'white',
        '#88AEFF',
        '#AB8FFD',
        '#FFC44F',
        '#BBDC02',
        '#FF9ED5',
        '#02DCA2',
        '#F0A882',
        '#88D4FF',
        '#E98FFD',
        '#FF9962',
        '#76DC02',
        '#FF9E9E',
        '#00D6DD',
        '#FF7979',
        '#6C98FF',
        '#FFBB7C',
        '#FF7B52',
        '#00DF8D',
        '#78BFFE',
        '#00C8FF',
        '#D389FD'
      ]
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
        let classList = data.map(item => item.scheduleList)
        // 数组去重生成课程名数组
        let lessonList = classList.map(item =>
          item.map(item => item.courseName)
        )
        let lessonSet = new Set()
        lessonList.map(item => item.map(item => lessonSet.add(item)))
        this.classNameList = Array.from(lessonSet)
        // console.log(this.classNameList)
      })
    },

    getColor(lesson) {
      const index = this.classNameList.findIndex(item => item === lesson)
      return this.colorList[index]
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
      // console.log(data)
      this.isDisplayPopupPicker = false
      this.targetValue = data[0]
      // console.log(this.targetValue)
      this.targetValueOfWeek = data[1]
      // console.log(data[1])
      this.weekIndex = this.weekNameList.findIndex(
        item => item === this.targetValueOfWeek
      )
      switch (data[0]) {
        case '18-19学年上学期':
          this.termCode = 181901
          break
        case '18-19学年下学期':
          this.termCode = 181902
          break
        case '18-19学年暑假':
          this.termCode = 181904
          break
        default:
          break
      }

      this.reFindSchedule()
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
  &__nav {
    // border-collapse: collapse;
    background-color: aqua;
    font-size: 16px;
    line-height: 40px;
    text-align: center;
    height: 40px;
    tr {
      display: flex;
      td {
        flex: 1;
      }
    }
  }
  &__body {
    table {
      // border-collapse: collapse;
    }
    width: 375px;
    .body {
      &__class-name {
        background-color: aqua;
        border-radius: 0;
        border-collapse: collapse;
      }
      &__teacher-name {
        font-size: 5px;
      }
    }
    tr {
      height: 50px;
      td {
        height: 80px;
        color: white;
        width: 47px;
        vertical-align: middle;
        text-align: center;
        border-radius: 6px;
        padding: 2px 0;
      }
    }
  }
}
</style>
