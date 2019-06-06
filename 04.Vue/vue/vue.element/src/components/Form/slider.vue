<template>
  <div class="comp-content">
      <h2>Slider 滑块</h2>

      <h3>基础用法</h3>
      <p>在拖动滑块时，显示当前值</p>
      <div class="gray-border-box">
          <span class="demostration">默认</span>
          <el-slider v-model="value0"></el-slider><br>

          <span class="demostration">自定义初始值</span>
          <el-slider v-model="value1"></el-slider><br>

          <span class="demostration">隐藏 Tooltip</span>
          <el-slider v-model="value2" :show-tooltip="false"></el-slider><br>

          <span class="demostration">格式化 Tooltip</span>
          <el-slider v-model="value3" :format-tooltip="formatTooltip"></el-slider><br>

          <span class="demostration">禁用</span>
          <el-slider v-model="value4" disabled></el-slider>
      </div>

      <h3>离散值</h3>
      <p>选项是可以离散的</p>
      <div class="gray-border-box">
        <span class="demostration">不显示间断点</span>
        <el-slider v-model="value5" :step="10"></el-slider><br>

        <span class="demostration">显示间断点</span>
        <el-slider v-model="value6" :step="10" show-stops></el-slider>
      </div>

      <h3>带有输入框</h3>
      <p>通过输入框设置精确数值</p>
      <el-slider v-model="value7" show-input></el-slider>

      <h3>范围选择</h3>
      <p>支持选择某一数值范围</p>
      <el-slider v-model="value8" range show-stops :max="10"></el-slider>

      <h3>竖向模式</h3><br>
      <el-slider v-model="value9" height="200px" vertical></el-slider>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value0: 50,
      value1: 0,
      value2: 20,
      value3: 100,
      value4: 67,
      value5: 40,
      value6: 10,
      value7: 0,
      value8: [2, 8],
      value9: 20
    }
  },
  methods: {
    formatTooltip (val) {
      return val / 100
    }
  }
}
</script>
