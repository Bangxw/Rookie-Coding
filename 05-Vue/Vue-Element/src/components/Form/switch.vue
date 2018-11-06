<template>
  <div class="comp-content">
    <h2>Switch 开关</h2>

    <h3>基本用法</h3><br>
    <div class="gray-border-box">
      <el-switch v-model="value0" active-color='#13ce66' inactive-color="#ff4949"></el-switch>
    </div>

    <h3>文字描述</h3><br>
    <div class="gray-border-box">
      <el-switch v-model="value1" active-text="按月付费" inactive-text="按年付费"></el-switch><br><br><br>
      <el-switch v-model="value2" active-text="按月付费" inactive-text="按年付费" inactive-color="#ff4949" active-color="#13ce66"></el-switch>
    </div>

    <h3>扩展的value类型</h3><br>
    <div class="gray-border-box">
      <el-tooltip :content="'Switch value: ' + value3" placement="top">
        <el-switch v-model="value3" active-color="#13ce66" inactive-color="#ff4949" active-value="100" inacitve-value="0"></el-switch>
      </el-tooltip>
    </div>

    <h3>禁用状态</h3><br>
    <div class="gray-border-box">
      <el-switch v-model="value4" disabled></el-switch><br><br><br>
      <el-switch v-model="value5" disabled></el-switch>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value0: true,
      value1: false,
      value2: true,
      value3: '100',
      value4: true,
      value5: false
    }
  }
}
</script>
