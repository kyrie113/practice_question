<template>
  <mt-popup :value="visible"
    :closeOnClickModal="false"
    position="bottom">
    <mt-picker :slots="slots"
      ref="picker"
      :showToolbar="true"
      @change="onValuesChange">
      <div class="picker-toolbar-title">
        <div class="usi-btn-cancel"
          @click="onCancelClick">取消</div>
        <div class="usi-btn-sure"
          @click="onConfirmClick">确定</div>
      </div>
      <hr>
    </mt-picker>
  </mt-popup>
</template>

<script>
export default {
  props: {
    visible: Boolean,
    leftList: { type: Array, default: () => [] },
    rightList: { type: Array, default: () => [] }
  },

  computed: {
    slots() {
      return [
        {
          flex: 1,
          values: this.leftList,
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
          values: this.rightList,
          className: 'slot3',
          textAlign: 'center'
        }
      ]
    }
  },

  data() {
    return {
      currentValues: ['', '']
    }
  },

  methods: {
    onValuesChange(picker, data) {
      this.currentValues = data
      this.$emit('change', data)
    },

    onCancelClick() {
      this.$emit('close')
    },

    onConfirmClick() {
      this.$emit('confirm', this.currentValues)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
