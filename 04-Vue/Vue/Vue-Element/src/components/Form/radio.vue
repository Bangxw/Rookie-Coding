<template>
  <div class="comp-content div-radio-content">
      <h2>Radio单选按钮</h2>

      <h3># 基础用法</h3><br>
      <div class="gray-border-box">
        <el-radio v-model="radio0" label="1">备选项</el-radio>
        <el-radio v-model="radio0" label="2">备选项</el-radio>
      </div>

      <h3>#  禁用状态</h3><br>
      <div class="gray-border-box">
          <el-radio disabled v-model="radio1" label="禁用">备选项</el-radio>
          <el-radio disabled v-model="radio1" label="选中且禁用">备选项</el-radio>
      </div>

      <h3># 单选框组</h3><br>
      <div class="gray-border-box">
          <el-radio-group v-model="radio2">
              <el-radio :label="3">备选项</el-radio>
              <el-radio :label="6">备选项</el-radio>
              <el-radio :label="9">备选项</el-radio>
          </el-radio-group>
      </div>

      <h3># 按钮样式</h3><br>
      <div class="gray-border-box">
        <el-radio-group v-model="radio3">
          <el-radio-button label="shanghai">上海</el-radio-button>
          <el-radio-button label="beijing">北京</el-radio-button>
          <el-radio-button label="guangzhou">广州</el-radio-button>
          <el-radio-button label="shengzheng">深圳</el-radio-button>
        </el-radio-group><br><br>

        <el-radio-group v-model="radio4" size="medium">
          <el-radio-button label="shanghai">上海</el-radio-button>
          <el-radio-button label="beijing">北京</el-radio-button>
          <el-radio-button label="guangzhou">广州</el-radio-button>
          <el-radio-button label="shengzheng">深圳</el-radio-button>
        </el-radio-group><br><br>

        <el-radio-group v-model="radio5" size="small">
          <el-radio-button label="shanghai">上海</el-radio-button>
          <el-radio-button label="beijing">北京</el-radio-button>
          <el-radio-button label="guangzhou">广州</el-radio-button>
          <el-radio-button label="shengzheng">深圳</el-radio-button>
        </el-radio-group><br><br>

        <el-radio-group v-model="radio6" size="mini">
          <el-radio-button label="shanghai">上海</el-radio-button>
          <el-radio-button label="beijing">北京</el-radio-button>
          <el-radio-button label="guangzhou">广州</el-radio-button>
          <el-radio-button label="shengzheng">深圳</el-radio-button>
        </el-radio-group>
      </div>

      <h3># 带有边框</h3><br>
      <div class="gray-border-box">
        <el-radio-group v-model="radio7">
          <el-radio border :label=1>备选项1</el-radio>
          <el-radio border :label=2>备选项2</el-radio>
        </el-radio-group><br><br>

        <el-radio-group v-model="radio8" size="medium">
          <el-radio label="1" border>备选项1</el-radio>
          <el-radio label="2" border>备选项1</el-radio>
        </el-radio-group><br><br>

        <el-radio-group v-model="radio9" size="small">
          <el-radio label="1" border>备选项1</el-radio>
          <el-radio label="2" border>备选项2</el-radio>
        </el-radio-group><br><br>

        <el-radio-group v-model="radio10" size="small">
          <el-radio label="1" border disabled>备选项1</el-radio>
          <el-radio label="2" border>备选项2</el-radio>
        </el-radio-group>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio0: 1,
      radio1: '选中且禁用',
      radio2: 6,
      radio3: 'shanghai',
      radio4: 'beijing',
      radio5: 'guangzhou',
      radio6: 'shengzheng',
      radio7: 1,
      radio8: '2',
      radio9: '1',
      radio10: '1'
    }
  }
}
</script>
