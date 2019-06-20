<template>
  <div class="comp-content">
      <h2>DatePicker 日期选择器</h2>
      <p>用于选择或输入日期</p>

      <h3>选择日</h3>
      <p>以[日]为基本单位，基础的日期选择控件</p>
      <span class="demostration">默认 </span>
      <el-date-picker v-model="value0" type="date" placeholder="选择日期"></el-date-picker><br><br>
      <span class="demostration">带快捷选项 </span>
      <el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options="pickerOptions1"></el-date-picker>

      <h3>其他日期单位</h3>
      <p>通过扩展基础的日期选择，可以选择周、月、年</p>
      <span class="demostration">周</span>
      <el-date-picker v-model="value2" type="week" format="yyyy 第 WW 周" placeholder="选择周"></el-date-picker><br><br>
      <span class="demostration">月</span>
      <el-date-picker v-model="value3" type="month" placeholder="选择月"></el-date-picker><br><br>
      <span class="demostration">年</span>
      <el-date-picker v-model="value4" type="year" placeholder="选择年"></el-date-picker>

      <h3>选择日期范围</h3>
      <p>可在一个选择器中便捷地选择一个时间范围</p>
      <el-date-picker unlink-panels v-model="value5" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker><br><br>
      <el-date-picker unlink-panels v-model="value6" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions1"></el-date-picker>
  </div>
</template>

<style>
.demostration {
  display: inline-block;
  width: 100px;
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
      value6: '',
      pickerOptions1: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        },
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
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          },
          {
            text: '生日',
            onClick (picker) {
              picker.$emit('pick', new Date(1994, 3, 26))
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
      }
    }
  }
}
</script>
