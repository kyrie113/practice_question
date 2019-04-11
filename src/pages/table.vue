<template>
  <div>
    <div class="top">
      <div class="top__close-btn"><img src="static/icon/close.png"
          alt=""></div>
    </div>
    <div>{{targetValue}}</div>
    <img src="static/icon/tableIcon.svg"
      alt="">
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

    <div class="close-btn"
      @click="openPicker"><img src="static/icon/close.png"
        alt=""></div>
  </div>
</template>
<script>
import api from '@/utils/api.js'
export default {
  data() {
    return {
      classData: null,
      targetValue: null,
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
      this.targetValue = this.$refs.picker.getValues()
      this.popupVisible = false
    }
  }
}
</script>
<style lang="scss" scoped>
.top {
  display: flex;
  height: 70px;
  &__close-btn {
  }
}
</style>
