<template>
  <div class="comp-content">
    <h2>Select 选择器</h2>
    <h3>基础用法</h3><br>
    <div class="gray-border-box">
        <el-select v-model="value0" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
    </div>
    <h3>有禁用选项</h3><br>
    <div class="gray-border-box">
        <el-select v-model="value1" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled"></el-option>
        </el-select>
    </div>
    <h3>可清空单选</h3><br>
    <div class="gray-border-box">
        <el-select v-model="value2" placeholder="请选择" clearable>
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
    </div>
    <h3>基础多选</h3><br>
    <div class="gray-border-box">
        <el-select v-model="value3" multiple placeholder="请选择">
            <el-option v-for="item in options" :label="item.label" :key="item.value" :value="item.value"></el-option>
        </el-select><br><br>
        <el-select v-model="value4" collapse-tags multiple placeholder="请选择">
            <el-option v-for="item in options" :label="item.label" :key="item.value" :value="item.value"></el-option>
        </el-select>
    </div>
    <h3>自定义模板</h3><br>
    <div class="gray-border-box">
        <el-select v-model="value5" multiple collapse-tags placeholder="请选择">
            <el-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value">
                <span style="float: left">{{ item.label }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px;margin-right: 15px;">{{ item.value }}</span>
            </el-option>
        </el-select>
    </div>
    <h3>分组</h3><br>
    <div class="gray-border-box">
        <el-select v-model="value6">
            <el-option-group v-for="group in options3" :key="group.label">
                <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-option-group>
        </el-select>
    </div>
    <h3>可搜索</h3><br>
    <div class="gray-border-box">
        <el-select v-model="value7" filterable placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
    </div>
    <h3>分组 + 可搜索 + 多选 + 自定义模板</h3><br>
    <div class="gray-border-box">
      <el-select v-model="value8" multiple filterable placeholder="请选择">
        <el-option-group v-for="options in options3" :key="options.label">
          <el-option v-for="option in options.options" :key="option.value" :label="option.label" :value="option.value">
            <span style="float: left">{{ option.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px;margin-right: 15px;">{{ option.value }}</span>
          </el-option>
        </el-option-group>
      </el-select>
    </div>
    <h3>远程搜索</h3><br>
    <div class="gray-border-box">
      <el-select v-model="value9" multiple filterable remote reserve-keyword placeholder="请输入关键词" :remote-method="remoteMethod" :loading="loading">
        <el-option v-for="item in options4" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </div>
    <h3>创建条目</h3><br>
    <div class="gray-border-box">
      <el-select v-model="value11" multiple filterable allow-create default-first-option placeholder="请选择">
        <el-option v-for="item in options5" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      test: 'hello world!',
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔面',
          disabled: true
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭',
          disabled: true
        }
      ],
      value0: '',
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      cities: [
        {
          value: 'Beijing',
          label: '北京'
        },
        {
          value: 'Shanghai',
          label: '上海'
        },
        {
          value: 'Nanjing',
          label: '南京'
        },
        {
          value: 'Chengdu',
          label: '成都'
        },
        {
          value: 'Shenzhen',
          label: '深圳'
        },
        {
          value: 'Guangzhou',
          label: '广州'
        }
      ],
      value5: '',
      options3: [
        {
          label: '热门城市',
          options: [
            {
              value: 'Shanghai',
              label: '上海'
            },
            {
              value: 'Beijing',
              label: '北京'
            }
          ]
        },
        {
          label: '城市名',
          options: [
            {
              value: 'Chengdu',
              label: '成都'
            },
            {
              value: 'Shenzhen',
              label: '深圳'
            },
            {
              value: 'Guangzhou',
              label: '广州'
            },
            {
              value: 'Dalian',
              label: '大连'
            }
          ]
        },
        {
          label: '冷门城市',
          options: [
            {
              value: 'Yinchun',
              label: '尹春'
            },
            {
              value: 'Yichang',
              label: '宜昌'
            }
          ]
        }
      ],
      value6: '',
      value7: '',
      value8: '',
      value9: '',
      options4: [],
      value10: '',
      list: [],
      loading: false,
      states: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnecsota', 'Mississippi', 'Missiuri', 'Montana', 'MNebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New Youk', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'Tennessee', 'Texas', 'Utash', 'Vermot', 'Virginia', 'Washington', 'West Virginia', 'Wiconsin', 'Wyoming'],
      options5: [{
        value: 'HTML',
        label: 'HTML'
      }, {
        value: 'CSS',
        label: 'CSS'
      }, {
        value: 'Javascript',
        label: 'Javascript'
      }],
      value11: ''
    }
  },
  mounted () {
    this.list = this.states.map(item => {
      return { value: item, label: item }
    })
  },
  methods: {
    remoteMethod (query) {
      if (query !== '') {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.options4 = this.list.filter(item => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
          })
        }, 200)
      }
    }
  }
}
</script>
