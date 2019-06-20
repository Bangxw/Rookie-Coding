<template>
  <div class="comp-content">
    <h2>Input Number计数器</h2>
    <h3>基础用法</h3><br>
    <div class="gray-border-box">
        <el-input-number v-model='numb0' :min=12  :max=24 @change="handleChange" label="描述文字"></el-input-number>
    </div>
    <h3>禁用状态</h3><br>
    <div class="gray-border-box">
        <el-input-number v-model="numb1" :disabled=true></el-input-number>
    </div>
    <h3>步数</h3><br>
    <div class="gray-border-box">
        <el-input-number v-model="numb2" :step="3"></el-input-number>
    </div>
    <h3>尺寸</h3><br>
    <div class="gray-border-box">
        <el-input-number v-model="numb3" ></el-input-number><br><br>
        <el-input-number v-model="numb3" size="medium"></el-input-number><br><br>
        <el-input-number v-model="numb3" size="small"></el-input-number><br><br>
        <el-input-number v-model="numb3" size="mini"></el-input-number>
    </div>
    <h3>按钮位置</h3>
    <div class="gray-border-box">
        <el-input-number v-model="numb4" controls-position="right" @change="handleChange1" :min=4 :max=90></el-input-number>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      numb0: 13,
      numb1: 0,
      numb2: 1,
      numb3: 10,
      numb4: 30
    }
  },
  methods: {
    handleChange: function (msg) {
      console.log(msg)
    },
    handleChange1: function (msg) {
      console.log(msg)
    }
  }
}
</script>
