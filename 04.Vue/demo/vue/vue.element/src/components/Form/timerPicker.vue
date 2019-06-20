<template>
  <div class="comp-content">
      <h2>TimePicker 时间选择器</h2>

      <h3>固定时间点</h3>
      <p>提供几个固定的时间点供用户选择</p>
      <el-time-select v-model="value0" :picker-options="{start: '08:30', step: '00:15', end: '18:30'}" placeholder="选择时间"></el-time-select>

      <h3>任意时间点</h3>
      <p>可以选择任意时间点</p>
      <el-time-picker v-model="value1" :picker-options="{selectableRange: '18:30:00 - 20:30:00'}" placeholder="任意时间点"></el-time-picker><br><br>
      <el-time-picker arrow-control v-model="value2" :picker-options="{selectableRange: '18:30:00 - 20:30:00'}" placeholder="任意时间点"></el-time-picker>

      <h3>固定时间范围</h3>
      <p>若先选择开始时间， 则结束时间内备选项的状态会随之改变</p>
      <el-time-select placeholder="起始时间" v-model="startTime" :picker-options="{start: '08:30', step:'00:15', end: '18:30'}"></el-time-select><br><br>
      <el-time-select placeholder="结束时间" v-model="endTime" :picker-options="{start: '08:30', step: '00:15', end: '18:30', minTime: startTime}"></el-time-select>

      <h3>任意时间范围</h3>
      <p>可选择任意的时间范围</p>
      <el-time-picker is-range v-model="value3" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围"></el-time-picker><br><br>
      <el-time-picker is-range v-model="value4" range-separator="至" arrow-control start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围"></el-time-picker>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value0: '',
      value1: new Date(2016, 9, 10, 18, 40, 23),
      value2: new Date(2016, 9, 10, 18, 40, 10),
      startTime: '',
      endTime: '',
      value3: [new Date(2018, 4, 16, 15, 3, 20), new Date(2019, 3, 26, 12)],
      value4: [new Date(2018, 2, 2, 2, 2, 2), new Date(2018, 4, 4, 4, 4, 4)]
    }
  }
}
</script>
