<template>
  <div>
    <div> {{pickerValue}}</div>
    <img src="static/icon/tableIcon.svg"
      alt="">
    <mt-datetime-picker ref="picker"
      type="time"
      v-model="pickerValue"
      @confirm="handleConfirm"
      :hourFormat=left>
    </mt-datetime-picker>
    <div class="close-btn"
      @click=" openPicker"><img src="static/icon/close.png"
        alt=""></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pickerValue: null,
      left: 'dsd'
    }
  },

  methods: {
    openPicker() {
      this.$refs.picker.open()
    },
    handleConfirm() {
      console.log(this.pickerValue)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
