<template>
  <div class="comp-content">
      <h2>Transfer 穿梭框</h2>

      <h3>基础用法</h3><br>
      <el-transfer v-model="value0" :data="data"></el-transfer>

      <h3>可搜索</h3><br>
      <el-transfer filterable :filter-method="filterMethod" filter-placeholder="请输入城市拼音" v-model="value2" :data="data2"></el-transfer>

      <h3>可自定义</h3>
      <p>可以对列表标题文案、按钮文案、数据项的渲染函数、列表底部的勾选状态文案、列表底部的内容区等进行自定义。</p>
      <span class="demonstration">使用render-content自定数据项</span>
      <el-transfer
      style="text-align:left; display: inline-block;"
      v-model="value3"
      filterable
      :left-default-checked="[2, 3]"
      :right-default-checked="[1]"
      :render-content="renderFunc"
      :titles="['Source', 'Target']"
      :button-texts="['到左边','到右边']"
      :format="{noChecked: '${total}', hasChecked: '${checked}/${total}'}"
      @change="handleChange"
      :data="data">
        <el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
        <el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button>
      </el-transfer>
  </div>
</template>

<script>
export default {
  data () {
    const generateData = _ => {
      const data = []
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项${i}`,
          disabled: i % 4 === 0
        })
      }
      return data
    }
    const generateData2 = _ => {
      const data = []
      const cities = [
        '北京',
        '上海',
        '广州',
        '深圳',
        '重庆',
        '成都',
        '杭州',
        '武汉',
        '长沙',
        '郑州',
        '吉林',
        '桂林'
      ]
      const citiespinyin = [
        'beijing',
        'shanghai',
        'guangzhou',
        'shenzhen',
        'chongqin',
        'chengdu',
        'hangzhou',
        'wuhan',
        'changsha',
        'zhengzhou',
        'jilin',
        'guiling'
      ]
      cities.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
          pinyin: citiespinyin[index]
        })
      })
      return data
    }
    const generateData3 = _ => {
      const data = []
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 === 0
        })
      }
      return data
    }

    return {
      data: generateData(),
      data2: generateData2(),
      data3: generateData3(),
      value0: [1, 4, 11],
      value2: [0, 4, 5],
      value3: [1],
      filterMethod (query, item) {
        console.log(item)
        return item.pinyin.indexOf(query) > -1
      },
      renderFunc (h, option) {
        return (
          <span>{option.key} - {option.label}</span>
        )
      }
    }
  },
  methods: {
    handleChange (value, direction, movedkeys) {
      console.log(value, direction, movedkeys)
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

.transfer-footer{
  margin-left: 20px;
  padding: 6px 5px;
}
</style>
