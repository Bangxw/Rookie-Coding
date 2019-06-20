<template>
  <div class='comp-content'>
      <h2>Cascader级联选择器</h2>

      <h3>基础用法</h3><br>
      <div class='gray-border-box'>
        <span class="demonstration">默认click触发子菜单</span>
        <el-cascader :options="options" v-model="selectedOptions" @change="handleChange"></el-cascader>
        <br><br>
        <span class="demonstration">hover 触发子菜单</span>
        <el-cascader expand-trigger="hover" :options="options" v-model="selectedOptions2" @change="handleChange"></el-cascader>
      </div>

      <h3>禁用选项</h3><br>
      <div class="gray-border-box">
        <el-cascader :options="options" expand-trigger="hover" v-model="selectedOptions3"></el-cascader>
      </div>

      <h3>仅显示最后一级</h3><br>
      <div class="gray-border-box">
        <el-cascader :options="options" :show-all-levels="false" v-model="selectedOptions4"></el-cascader>
      </div>

      <h3>默认值</h3><br>
      <div class="gray-border-box">
        <el-cascader :options="options" v-model="selectedOptions5"></el-cascader>
      </div>

      <h3>选择既改变</h3>
      <p>点击或移动选项即表示选中该项， 可用于选择任意一级菜单的选项</p>
      <div class="gray-border-box">
        <el-cascader :options="options" change-on-select></el-cascader>
      </div>

      <h3>动态加载次级选项</h3>
      <p>当选中某一级时，动态加载该级下的选项</p>
      <div class="gray-border-box">
        <el-cascader :options="options2" @active-item-change="handleItemChange" :props="props"></el-cascader>
      </div>

      <h3>可搜索</h3>
      <p>可以快捷地搜索选项并选择。</p>
      <div class="gray-border-box">
        <span class="demonstration">只可选择最后一级菜单的选项</span>
        <el-cascader placeholder="试试搜索: 指南" :options="options" filterable></el-cascader><br><br>
        <span class="demonstration">可选择任意一级菜单的选项</span>
        <el-cascader placeholder="试试搜索：指南" :options="options" filterable change-on-select></el-cascader>
      </div>
  </div>
</template>

<style>
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>

<script>
export default {
  data () {
    return {
      test: 'hello world!',
      options: [
        {
          value: 'zhinan',
          label: '指南',
          disabled: true,
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
              children: [
                {
                  value: 'yizhi',
                  label: '一致'
                },
                {
                  value: 'fankui',
                  label: '反馈'
                },
                {
                  value: 'xiaolv',
                  label: '效率'
                },
                {
                  value: 'kekong',
                  label: '可控'
                }
              ]
            },
            {
              value: 'daohang',
              label: '导航',
              children: [
                {
                  value: 'cexiangdaohang',
                  label: '侧向导航'
                },
                {
                  value: 'dingbudaohang',
                  label: '顶部导航'
                }
              ]
            }
          ]
        },
        {
          value: 'zujian',
          label: '组件',
          children: [
            {
              value: 'basic',
              label: 'Basic',
              children: [
                {
                  value: 'layout',
                  label: 'Layout 布局'
                },
                {
                  value: 'color',
                  label: 'Color 色彩'
                },
                {
                  value: 'typography',
                  label: 'Typography 字体'
                },
                {
                  value: 'icon',
                  label: 'Icon 图标'
                },
                {
                  value: 'button',
                  label: 'Button 按钮'
                }
              ]
            },
            {
              value: 'form',
              label: 'Form',
              children: [
                {
                  value: 'radio',
                  label: 'Radio单选框'
                },
                {
                  value: 'checkbox',
                  label: 'Checkbox 多选框'
                },
                {
                  value: 'input',
                  label: 'Input 输入框'
                },
                {
                  value: 'input-number',
                  label: 'InputNumber 计数器'
                },
                {
                  value: 'select',
                  label: 'Select 选择器'
                },
                {
                  value: 'cascader',
                  label: 'Cascader 级联选择器'
                },
                {
                  value: 'switch',
                  label: 'Switch 开关'
                },
                {
                  value: 'slider',
                  label: 'Slider 滑块'
                },
                {
                  value: 'time-picker',
                  label: 'TimePicker 时间选择器'
                },
                {
                  value: 'data-picker',
                  label: 'DataPicker 日期选择器'
                },
                {
                  value: 'datetime-picker',
                  label: 'DateTimePicker 日期时间选择器'
                },
                {
                  value: 'upload',
                  label: 'Upload 上传'
                },
                {
                  value: 'rate',
                  label: 'Rate 评分'
                },
                {
                  value: 'form',
                  label: 'Form 表单'
                }
              ]
            },
            {
              value: 'data',
              label: 'Data',
              children: [
                {
                  value: 'table',
                  label: 'Table 表格'
                },
                {
                  value: 'tag',
                  label: 'Tag 标签'
                },
                {
                  value: 'progress',
                  label: 'Progress 进度条'
                },
                {
                  value: 'tree',
                  label: 'Tree 树形控件'
                },
                {
                  value: 'pagination',
                  label: 'Pagination 分页'
                },
                {
                  value: 'badge',
                  label: 'Badge 标记'
                }
              ]
            },
            {
              value: 'notice',
              label: 'Notice',
              children: [
                {
                  value: 'alert',
                  label: 'Alert 警告'
                },
                {
                  value: 'loading',
                  label: 'Loading 加载'
                },
                {
                  value: 'message',
                  label: 'Message 消息提示'
                },
                {
                  value: 'message-box',
                  label: 'MessageBox 弹框'
                },
                {
                  value: 'notification',
                  label: 'Notification 通知'
                }
              ]
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'menu',
                  label: 'NavMenu 导航菜单'
                },
                {
                  value: 'tabs',
                  label: 'Tabs 标签页'
                },
                {
                  value: 'breadcrumb',
                  label: 'BreadCrumb 面包屑'
                },
                {
                  value: 'dropdown',
                  label: 'Dropdown 下拉菜单'
                },
                {
                  value: 'steps',
                  label: 'Steps 步骤条'
                }
              ]
            },
            {
              value: 'others',
              label: 'Others',
              children: [
                {
                  value: 'dialog',
                  label: 'Dialog 对话框'
                },
                {
                  value: 'tooltip',
                  label: 'Tooltip 文字提示'
                },
                {
                  value: 'popover',
                  label: 'Popover 弹出框'
                },
                {
                  value: 'card',
                  label: 'Card 卡片'
                },
                {
                  value: 'carousel',
                  label: 'Carousel 走马灯'
                },
                {
                  value: 'collapse',
                  label: 'Collapse 折叠面板'
                }
              ]
            }
          ]
        },
        {
          value: 'ziyuan',
          label: '资源',
          children: [
            {
              value: 'axure',
              label: 'Axure Components'
            },
            {
              value: 'sketch',
              label: 'Sketch Templates'
            },
            {
              value: 'jiaohu',
              label: '组件交互文档'
            }
          ]
        }
      ],
      selectedOptions: [],
      selectedOptions2: [],
      selectedOptions3: [],
      selectedOptions4: [],
      selectedOptions5: ['zujian', 'data', 'tag'],
      options2: [
        {
          label: '江苏',
          cities: []
        },
        {
          label: '浙江',
          cities: []
        },
        {
          label: '湖北',
          cities: []
        }
      ],
      props: {
        value: 'label',
        children: 'cities'
      }
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    },
    handleItemChange (val) {
      console.log('active item:', val)
      setTimeout(_ => {
        if (val.indexOf('江苏') > -1 && !this.options2[0].cities.length) {
          this.options2[0].cities = [
            {
              label: '南京'
            }
          ]
        } else if (
          val.indexOf('浙江') > -1 &&
          !this.options2[1].cities.length
        ) {
          this.options2[1].cities = [
            {
              label: '杭州'
            }
          ]
        } else if (
          val.indexOf('湖北') > -1 &&
          !this.options2[2].cities.length
        ) {
          this.options2[2].cities = [
            {
              label: '武汉',
              value: 'Wuhan'
            },
            {
              label: '宜昌',
              value: 'Yichang'
            }
          ]
        }
      }, 300)
    }
  }
}
</script>
