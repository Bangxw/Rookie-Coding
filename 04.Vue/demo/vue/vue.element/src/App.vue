<template>
    <el-container class="top-wap-container">
      <el-header class="app-top-header">
        <el-row>
          <el-col :xs="4" :sm="4" :md="4" :lg="4">
            <div class="nav-logo-div">
              <img data-v-5797d63d="" src="./assets/images/element.png" alt="element-logo" class="nav-logo">
            </div>
          </el-col>
          <el-col :xs="24" :sm="20" :md="16" :lg="20" style="line-height:60px;">
            <el-color-picker v-model="color0" style="float: right;margin-right: 40px;margin-top:10px;"></el-color-picker>
            <el-menu class="el-menu-horizontal" mode="horizontal" :default-active="activeIndex">
                <el-menu-item index="3">资源</el-menu-item>
                <el-menu-item index="4">组件</el-menu-item>
                <el-menu-item index="5">指南</el-menu-item>
                <el-submenu index="2">
                  <template slot="title">2.3.4</template>
                  <el-menu-item index="2-1">1.4.13</el-menu-item>
                  <el-menu-item index="2-2">2.0.11</el-menu-item>
                  <el-menu-item index="2-3">2.1.0</el-menu-item>
                </el-submenu>
                <el-submenu index="1">
                  <template slot="title">中文</template>
                  <el-menu-item index="1-1">中文</el-menu-item>
                  <el-menu-item index="1-2">English</el-menu-item>
                  <el-menu-item index="1-3">Español</el-menu-item>
                </el-submenu>
            </el-menu>
            <el-input type="search" placeholder="搜索文档" style="float: right; width: 200px;"></el-input>
          </el-col>
        </el-row>
      </el-header>

      <el-container class="app-main-body">
        <el-aside width="260px" style="padding:20px 0; height: 100%;">
          <el-scrollbar class="page-component__scroll">
            <el-menu default-active="2" class="el-menu-vertical-demo" router>
              <el-menu-item-group v-for="options in navOptions" :key="options.value" :index="options.index">
                <div class="nav-top-item-label">{{ options.label }}</div>
                <el-menu-item-group v-for="option in options.children" :key="option.value" >
                  <template slot="title">{{ option.label }}</template>
                  <el-menu-item v-for='item in option.children' :index="item.value" :key='item.value'>{{ item.label }}</el-menu-item>
                </el-menu-item-group>
              </el-menu-item-group>
            </el-menu>
          </el-scrollbar>
        </el-aside>

        <el-main>
          <el-scrollbar class="page-component__scroll">
            <router-view keep-alive transition="fade" transition-mode='out-in' class="router-view-content"></router-view>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
</template>

<style>
html,
body {
  height: 100%;
  overflow-y: hidden;
}

.top-wap-container {
  width: 1140px;
  margin: 0 auto;
  height: 100%;
}

.app-top-header {
  position: fixed;
  width: 1140px;
  left: 50%;
  top: 0;
  margin-left: -570px;
  z-index: 1500;
  background-color: #fff;
}

.app-main-body {
  height: 100%;
  margin: 72px 0 0;
}

.el-header {
  padding: 0 !important;
}

.el-menu {
    border-right: 0;
}

.nav-logo-div {
  padding: 15px 0;
}

.nav-top-item-label {
  font-size: 16px;
  color: #333;
  line-height: 40px;
  height: 40px;
  margin: 0;
  padding: 0;
  text-decoration: none;
  display: block;
  position: relative;
  transition: 0.15s ease-out;
  font-weight: 700;
}

.page-component__scroll {
  height: 100%;
}

.page-component__scroll .el-scrollbar__wap {
  overflow: auto;
}

.el-scrollbar__wrap {
  overflow-x: hidden;
}

.comp-content{
  padding-right: 20px;
}

.el-menu-vertical-demo,
.router-view-content{
  padding-bottom: 100px;
}

.el-menu-horizontal{
  float: right;
}

.el-menu--horizontal {
  border-bottom: 0;
}
</style>

<script>
export default {
  data () {
    return {
      navOptions: [
        {
          value: 'zhinan',
          label: '指南',
          index: 0,
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则'
              // children: [
              //   {
              //     value: 'yizhi',
              //     label: '一致'
              //   },
              //   {
              //     value: 'fankui',
              //     label: '反馈'
              //   },
              //   {
              //     value: 'xiaolv',
              //     label: '效率'
              //   },
              //   {
              //     value: 'kekong',
              //     label: '可控'
              //   }
              // ]
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
          index: 1,
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
                  value: 'container',
                  label: 'Container布局容器'
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
                  value: 'date-picker',
                  label: 'DatePicker 日期选择器'
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
                  value: 'color-picker',
                  label: 'ColorPicker颜色选择器'
                },
                {
                  value: 'transfer',
                  label: 'Transfer穿梭框'
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
          index: 2,
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
      navTopItemLabel: 'nav-top-item-label',
      activeIndex: '1',
      color0: '#409EFF'
    }
  }
}
</script>
