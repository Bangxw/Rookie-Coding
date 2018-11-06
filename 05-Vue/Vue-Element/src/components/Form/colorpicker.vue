<template>
  <div class="comp-content">
      <h2>ColorPicker颜色选择器</h2>
      <p>用于颜色选择，支持多种格式</p>

      <h3>基础选择</h3><br>
      <span class="demonstration">有默认值</span>
      <el-color-picker v-model="color0"></el-color-picker><br><br>
      <span class="demonstration">无默认值</span>
      <el-color-picker v-model="color1"></el-color-picker>

      <h3>选择透明度</h3><br>
      <el-color-picker v-model="color2" show-alpha></el-color-picker>

      <h3>预定义颜色</h3><br>
      <el-color-picker v-model="color3" show-alpha :predefine="predefineColors"></el-color-picker>

      <h3>不同尺寸</h3><br>
      <el-color-picker v-model="color4" size=""></el-color-picker>
      <el-color-picker v-model="color5" size="medium"></el-color-picker>
      <el-color-picker v-model="color6" size="small"></el-color-picker>
      <el-color-picker v-model="color7" size="mini"></el-color-picker>
  </div>
</template>

<script>
export default {
  data () {
    return {
      color0: '#f00',
      color1: null,
      color2: 'rgba(19, 206, 102, 0.8)',
      color3: 'rgba(255, 69, 0, 0.68)',
      color4: null,
      color5: null,
      color6: null,
      color7: null,
      predefineColors: [
        '#ff4500',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585',
        'rgba(255, 69, 0, 0.68)',
        'rgb(255, 120, 0)',
        'hsv(51, 100, 98)',
        'hsv(120, 40, 94, 0.5)',
        'hsla(209, 100%, 56%, 0.73)',
        '#c7158577'
      ]
    }
  }
}
</script>

<style>
.demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 10px;
}
</style>
