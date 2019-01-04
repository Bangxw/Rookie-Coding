<template>
  <div class="comp-content div-input-content">
      <h2>Input输入框</h2>

      <h3># 基础用法</h3><br>
      <div class="gray-border-box">
          <el-input v-model="input_0" placeholder="请输入内容"></el-input>
      </div>

      <h3># 基础用法</h3><br>
      <div class="gray-border-box">
          <el-input v-model="input_1" placeholder="请输入内容" disabled></el-input>
      </div>

      <h3># 可清空 clearable</h3><br>
      <div class="gray-border-box">
          <el-input v-model="input_2" placeholder="请输入内容" clearable></el-input>
      </div>

      <h3># 带icon的输入框</h3>
      <div class="gray-border-box">
          <span>属性方式：</span>
          <el-input v-model="input_3" placeholder="请选择日期" prefix-icon="el-icon-date" :style="inputstyle"></el-input>
          <el-input v-model="input_4" placeholder="请选择日期" suffix-icon="el-icon-date" clearable :style="inputstyle"></el-input>
          <br><br>
          <span>slot方式：</span>
          <el-input v-model="input_5" placeholder="请输入搜索内容" :style="inputstyle">
             <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
          <el-input v-model="input_6" placeholder="请输入搜索内容" :style="inputstyle">
             <i slot="suffix" class="el-input__icon el-icon-search"></i>
          </el-input>
      </div>

      <h3># 文本域</h3>
      <div class="gray-border-box">
          <el-input v-model="input_textarea" type="textarea" :rows="5" :style="inputstyle"></el-input>
          <p style="white-space: pre-line" contenteditable="true">{{ input_textarea }}</p>
      </div>

      <h3># 可自适应文本高度的文本域</h3><br>
      <div class="gray-border-box">
          <el-input v-model="input_textarea" type="textarea" placeholder="请输入内容" :autosize="{ minRows: 2, maxRows: 4}" :style="inputstyle"></el-input>
      </div>

      <h3># 复合型输入框</h3>
      <div class="gray-border-box">
          <el-input v-model="input_7" :style="inputstyle">
              <template slot="prepend">http://</template>
          </el-input><br><br>
          <el-input v-model="input_8" :style="inputstyle">
              <template slot="append">.com</template>
          </el-input><br><br>
          <el-input v-model="input_9"  placeholder="请输入内容" :style="inputstyle">
              <el-select v-model="selectType" slot="prepend">
                  <el-option v-for="option in options" :key="option" :value="option">{{ option }}</el-option>
              </el-select>
              <el-button slot="append" class="el-icon-search"></el-button>
          </el-input>
      </div>

      <h3># 尺寸</h3>
      <div class="gray-border-box">
          <el-input v-model="input_size0" size="" placeholder="请输入内容" suffix-icon="el-icon-date" :style="inputstyle"></el-input>
          <el-input v-model="input_size1" size="medium" placeholder="请输入内容" suffix-icon="el-icon-date" :style="inputstyle"></el-input>
          <el-input v-model="input_size2" size="small" placeholder="请输入内容" suffix-icon="el-icon-date" :style="inputstyle"></el-input>
          <el-input v-model="input_size3" size="mini" placeholder="请输入内容" suffix-icon="el-icon-date" :style="inputstyle"></el-input>
      </div>

      <h3># 带输入建议</h3>
      <div class="gray-border-box">
          <el-autocomplete class="inline-input" v-model="stateAutocomplete" placeholder="请输入内容"></el-autocomplete>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input_0: '',
      input_1: '当前处于禁用状态',
      input_2: '',
      input_3: '',
      input_4: '',
      input_5: '',
      input_6: '',
      input_7: '',
      input_8: '',
      input_9: '',
      input_size0: '',
      input_size1: '',
      input_size2: '',
      input_size3: '',
      inputstyle: {
        width: '300px'
      },
      input_textarea: '',
      options: ['餐厅名', '订单号', '用户电话'],
      selectType: ''
    }
  }
}
</script>
