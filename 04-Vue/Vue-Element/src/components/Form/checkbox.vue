<template>
  <div class="comp-content div-checkbox-content">
    <h2>Checkbox多选框</h2>

    <h3># 基础用法</h3><br>
    <div class="gray-border-box">
        <el-checkbox v-model="checked0">备选项</el-checkbox>
    </div>

    <h3># 禁用状态</h3>
    <div class="gray-border-box">
        <el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>
        <el-checkbox v-model="checked2" disabled>备选项2</el-checkbox>
    </div>

    <h3># 多选框组</h3><br>
    <div class="gray-border-box">
        <el-checkbox-group v-model="checkList">
            <el-checkbox label="复选框 A"></el-checkbox>
            <el-checkbox label="复选框 B"></el-checkbox>
            <el-checkbox label="复选框 C"></el-checkbox>
            <el-checkbox label="禁用"></el-checkbox>
            <el-checkbox label="选中且禁用" disabled></el-checkbox>
        </el-checkbox-group>
    </div>

    <h3># Indeterminate状态</h3><br>
    <div class="gray-border-box">
        <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</el-checkbox>
        <el-checkbox-group v-model="cityList" @change="handleCheckedCitiesChange" style="margin-top: 10px;">
            <el-checkbox v-for="city in cities" :key="city" :label="city">{{ city }}</el-checkbox>
        </el-checkbox-group>
    </div>

    <h3># 可选项目数量的限制</h3><br>
    <div class="gray-border-box">
      <el-checkbox-group v-model="limitCount" :min="2" :max="3">
        <el-checkbox v-for="city in cities" :key="city" :label="city"></el-checkbox>
      </el-checkbox-group>
    </div>

    <h3># 按钮样式</h3>
    <div class="gray-border-box">
      <el-checkbox-group v-model="buttonChecked0">
        <el-checkbox-button v-for="city in cities" :key="city" :label="city"></el-checkbox-button>
      </el-checkbox-group><br><br>

      <el-checkbox-group v-model="buttonChecked1" size="medium">
        <el-checkbox-button v-for="city in cities" :key="city" :label="city"></el-checkbox-button>
      </el-checkbox-group><br><br>

      <el-checkbox-group v-model="buttonChecked2" size="small">
        <el-checkbox-button v-for="city in cities" :key="city" :label="city"></el-checkbox-button>
      </el-checkbox-group><br><br>

      <el-checkbox-group v-model="buttonChecked3" size="mini">
        <el-checkbox-button v-for="city in cities" :key="city" :label="city"></el-checkbox-button>
      </el-checkbox-group>
    </div>

    <h3># 带有边框</h3>
    <div class="gray-border-box">
      <el-checkbox-group v-model="borderCheckbox0">
        <el-checkbox border label="选项1"></el-checkbox>
        <el-checkbox border label="选项11"></el-checkbox>
      </el-checkbox-group><br><br>

      <el-checkbox-group v-model="borderCheckbox1" size="medium">
        <el-checkbox border label="选项2"></el-checkbox>
        <el-checkbox border label="选项22"></el-checkbox>
      </el-checkbox-group><br><br>

      <el-checkbox-group v-model="borderCheckbox2" size="small">
        <el-checkbox border label="选项3" disabled></el-checkbox>
        <el-checkbox border label="选项33" disabled></el-checkbox>
      </el-checkbox-group><br><br>

      <el-checkbox-group v-model="borderCheckbox3" size="mini">
        <el-checkbox border label="选项4"></el-checkbox>
        <el-checkbox border label="选项44"></el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked0: true,
      checked1: false,
      checked2: true,
      checkList: ['选中且禁用', '复选框 A'],
      cities: ['北京', '上海', '广州', '深圳'],
      cityList: ['深圳'],
      isIndeterminate: true,
      checkAll: false,
      limitCount: ['北京', '广州'],
      buttonChecked0: ['北京'],
      buttonChecked1: ['上海'],
      buttonChecked2: ['广州'],
      buttonChecked3: ['深圳'],
      borderCheckbox0: ['选项1'],
      borderCheckbox1: ['选项22'],
      borderCheckbox2: ['选项33'],
      borderCheckbox3: ['选项4']
    }
  },
  methods: {
    handleCheckAllChange: function (val) {
      this.cityList = val ? this.cities : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange: function (val) {
      this.checkAll = val.length === this.cities.length
      this.isIndeterminate = val.length === 0 ? false : !this.checkAll
    }
  }
}
</script>
