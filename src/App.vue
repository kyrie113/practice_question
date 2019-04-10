<template>
  <div id="app">

    <router-view />
  </div>
</template>

<script>
import api from '@/utils/api.js'
export default {
  name: 'App',
  components: {},
  created() {
    // let params = qs.stringify({ apiparams: JSON.stringify(data) })
    // let instance = axios.create({
    //   headers: { 'content-type': 'application/x-www-form-urlencoded' }
    // })
    // instance({
    //   method: 'POST',
    //   url: 'http://10.10.10.190:8899/api/pc/base_term_listBySchoolYear',
    //   data: params
    // })
    //   .then(response => {
    //     console.log(response)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })

    api('base_term_listBySchoolYear', {
      params: {
        campusid: 1615,
        openid: 172691,
        userid: 172691
      },
      readonly: true
    }).then(data => {
      console.log(data)
    })
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
