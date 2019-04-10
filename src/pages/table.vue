<template>
  <div>
    <img src="static/icon/tableIcon.svg"
      alt="">
    <mt-datetime-picker ref="picker"
      type="time"
      v-model="pickerValue">
    </mt-datetime-picker>
  </div>
</template>
<script>
export default {
  methods: {
    openPicker() {
      this.$refs.picker.open()
    }
  }
}
</script>
<style lang="scss" scoped>
</style>


