<template>
  <div class="comp-content">
    <h2>DateTimePicker 日期时间选择器</h2>
    <p>在同一个选择器里选择时间和日期</p>

    <h3>日期和时间点</h3><br>
    <span class="demostration">默认</span>
    <el-date-picker v-model="value0" type="datetime" placeholder="选择日期和时间"></el-date-picker><br><br>

    <span class="demostration">带快捷选项</span>
    <el-date-picker v-model="value1" type="datetime" placeholder="选择日期和时间" align="right" :picker-options="pickerOptions1"></el-date-picker><br><br>

    <span class="demostration">设置默认时间</span>
    <el-date-picker v-model="value2" type="datetime" default-time="12:00:00" placeholder="选择时间和日期"></el-date-picker>

    <h3>日期和时间范围</h3><br>
    <span class="demostration">默认</span>
    <el-date-picker v-model="value3" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker><br><br>
    <span class="demostration">带快捷选项</span>
    <el-date-picker v-model="value4" type="datetimerange" :picker-options="pickerOptions2" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>

    <h3>默认的起始与结束时刻</h3><br>
    <span>起始日期时刻为12：00：00</span>
    <el-date-picker v-model="value4" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :default-time="['12:00:00']"></el-date-picker><br><br>
    <span>起始日期时刻为12：00：00，结束日期时刻为08：00：00</span>
    <el-date-picker v-model="value5" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :default-time="['12:00:00','08:00:00']"></el-date-picker>
  </div>
</template>

<style>
.demostration {
  display: inline-block;
  min-width: 100px;
}
</style>

<script>
export default {
  data () {
    return {
      value0: '',
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      pickerOptions1: {
        shortcuts: [
          {
            text: '今天',
            onClick (picker) {
              picker.$emit('pick', new Date())
            }
          },
          {
            text: '昨天',
            onClick (picker) {
              var date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          },
          {
            text: '一周前',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }
        ]
      },
      pickerOptions2: {
        shortcuts: [
          {
            text: '最近一周',
            onClick (picker) {
              const start = new Date()
              const end = new Date()
              start.setTime(start.getTime() - 3600 * 24 * 7 * 1000)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick (picker) {
              const start = new Date()
              const end = new Date()
              start.setTime(start.getTime() - 3600 * 24 * 30 * 1000)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick (picker) {
              const start = new Date()
              const end = new Date()
              start.setTime(start.getTime() - 3600 * 24 * 90 * 1000)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      }
    }
  }
}
</script>
