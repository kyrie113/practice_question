<template>
  <div>
    <div class="header">知识竞答</div>
    <hr>
    <div class="search-banner">
      <el-select v-model="value"
        placeholder="光海微校通服务平台">
        <el-option v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-date-picker v-model="dateTimeValue"
        @change="getMyDateTime"
        type="daterange"
        range-separator="-">
      </el-date-picker>
      <el-button type="success"
        @click="regetPaper">查询</el-button>
    </div>
    <div class="container">
      <ul class="container__list">
        <li class="list__add"><i class="el-icon-plus"> </i></li>
        <li class="list__item"
          v-for="(item,index) in itemList"
          :key=index>
          <div class="item__content">
            <h4 class="content__title">{{item.title}}</h4>
            <p class="content__p">
              <span class="content__date">{{item.createTime}}</span>
              <i class="content__state-close">已关闭</i>
            </p>
            <p class="content__count">{{item.sum}}<span class="content__word">份数据</span></p>

          </div>
          <div class="item__action">
            <i class="el-icon-edit">详情</i>
            <i class="el-icon-delete">删除</i>
          </div>

        </li>

      </ul>
    </div>
  </div>
</template>
<script>
import api from '@/utils/myApi.js'
export default {
  data() {
    return {
      itemList: '',
      startTime: '',
      endTime: '',
      options: [
        {
          value: '选项1',
          label: '光海微校通服务平台'
        }
      ],
      value: '',
      dateTimeValue: ['2018-10-19 00:00:00', '2019-04-19 23:59:59']

      // dateTimeValue: [(Date.now() - 6 * 30 * 24 * 60 * 60 * 1000, Date.now()]
    }
  },
  created() {
    this.initData()
    this.reFindPaper()
    // let d = new Date()
    // console.log(d.toLocaleString())
  },
  methods: {
    // 获取试卷
    reFindPaper() {
      api('survey_survey_list', {
        params: {
          campusid: 1615,
          type: '2',
          startTime: this.startTime,
          endTime: this.endTime
        },
        readonly: true,
        async: false
      }).then(data => {
        data = data.data.data
        this.itemList = data
        console.log(data)
      })
    },
    // GMTToStr(time) {
    //   let date = new Date(time)
    //   let Str =
    //     date.getFullYear() +
    //     '-' +
    //     (date.getMonth() + 1) +
    //     '-' +
    //     date.getDate() +
    //     ' ' +
    //     date.getHours() +
    //     ':' +
    //     date.getMinutes() +
    //     ':' +
    //     date.getSeconds()
    //   return Str
    // },
    // StrToGMT(time) {
    //   let GMT = new Date(time)
    //   return GMT
    // },
    initData() {
      this.startTime = Date.now() - 6 * 30 * 24 * 60 * 60 * 1000
      this.endTime = Date.now()
    },
    getMyDateTime(t) {
      this.startTime = t[0].getTime()

      this.endTime = t[1].getTime()
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  padding-left: 40px;
}
.search-banner {
  padding-left: 40px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.container {
  display: block;
  &__list {
    display: flex;
    flex-wrap: wrap;
  }
  .list {
    &__add {
      align-items: center;
      border: 1px solid #e5e9f2;
      background-color: #f9feff;
      display: flex;
      -ms-flex-direction: column;
      flex-direction: column;
      margin: 0 22px 22px 0;
      width: 310px;
      height: 200px;
      list-style: none;
      border-radius: 3px;
      cursor: pointer;
      transition: all 0.3s ease;
      padding: 0 10px;
    }
    &__item {
      display: flex;
      -ms-flex-direction: column;
      flex-direction: column;
      margin: 0 22px 22px 0;
      width: 310px;
      height: 200px;
      list-style: none;
      border: 1px solid #c0ccda;
      border-radius: 3px;
      cursor: pointer;
      transition: all 0.3s ease;
      padding: 0 10px;
      .item {
        &__content {
          flex: none;
          padding-top: 10px;
          border-bottom: 1px solid #e5e9f2;
          cursor: pointer;
          .content {
            &__title {
              margin: 0;
              font-size: 16px;
              font-weight: normal;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            &__p {
              margin: 10px 0 0;
            }
            &__state-close {
              color: #737374;
              background-color: #e5e9f2;
              margin-left: 16px;
              padding: 3px 5px;
              height: 20px;
              font-style: normal;
              font-size: 12px;
              border-radius: 3px;
            }
            &__date {
              font-size: 12px;
              color: #999;
            }
            &__count {
              text-align: right;
              font-size: 20px;
              padding-right: 8px;
              line-height: 50px;
            }
            &__word {
              font-size: 15px;
              margin-left: 5px;
            }
          }
        }
        &__action {
          padding: 0 10px;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-pack: end;
          justify-content: flex-end;
          -ms-flex-align: center;
          align-items: center;
          -ms-flex: 1;
          flex: 1;
          font-size: 12px;
        }
      }
      &__list {
        color: #9d9d9d;
      }
    }
  }
}
.el-icon-edit {
  color: #9d9d9d;
}
.el-icon-delete {
  color: #9d9d9d;
}
.el-icon-plus {
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border: 1px dashed #bad1df;
  border-radius: 3px;
  color: #50bfff;
  font-family: element-icons !important;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  vertical-align: baseline;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
  margin-top: 70px;
}
.list__item:hover {
  box-shadow: 0px 26px 40px -24px rgba(0, 36, 100, 0.5);
  transform: translateY(-6px);
}
.el-select .el-input.is-focus .el-input__inner {
  border-color: #46c37b;
}
.el-select,
.el-select.is-active {
  border-color: #46c37b;
}
.el-range-editor.is-active,
.el-range-editor.is-active:hover {
  border-color: #46c37b;
}
.el-input__inner {
  border-color: #46c37b;
}
.el-icon-edit {
  margin-right: 16px;
}
</style>
