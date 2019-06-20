<template>
  <div class="comp-content">
      <h2>Table表格</h2>
      <p>用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作</p>

      <h3>基础表格</h3>
      <p>基础的表格展示用法</p>
      <template>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
      </template>

      <h3>带边框表格</h3><br>
      <template>
          <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="date" label="日期" width="180"></el-table-column>
              <el-table-column prop="name" label="姓名" width="180"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
      </template>

      <h3>带状态表格</h3><br>
      <template>
          <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
      </template>

      <h3>固定表头</h3>
      <template>
          <el-table :data="tableData" style="width:100%" height="200px">
              <el-table-column prop="date" label="日期" width="180"></el-table-column>
              <el-table-column prop="name" label="姓名" width="180"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
      </template>

      <h3>固定列</h3>
      <template>
          <el-table :data="tableData" style="width:100%">
              <el-table-column fixed prop="date" label="日期" width="180"></el-table-column>
              <el-table-column prop="name" label="姓名" width="120"></el-table-column>
              <el-table-column prop="province" label="省份" width="120"></el-table-column>
              <el-table-column prop="city" label="城市" width="120"></el-table-column>
              <el-table-column prop="address" label="地址" width="300"></el-table-column>
              <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
              <el-table-column fixed="right" label="操作" width="100">
                  <template slot-scope="scopt">
                      <el-button @click="handleClick(scopt.row)" type="text" size="small">查看</el-button>
                      <el-button type="text" size="small">编辑</el-button>
                  </template>
              </el-table-column>
          </el-table>
      </template>

      <h3>多级表头</h3>
      <p>数据机构比较复杂的时候，可以用多级表头展现数据的层次关系</p>
      <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="日期" width="150"></el-table-column>
          <el-table-column label="配送信息">
              <el-table-column prop="name" label="姓名" width="120"></el-table-column>
              <el-table-column label="地址">
                  <el-table-column prop="province" label="省份" width="120"></el-table-column>
                  <el-table-column prop="city" label="市区" width="120"></el-table-column>
                  <el-table-column prop="address" label="地址"></el-table-column>
              </el-table-column>
          </el-table-column>
      </el-table>
  </div>
</template>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          date: '2018-02-15',
          name: 'Basir',
          province: '广东省',
          city: '深圳市',
          address: '深圳市南山区粤海大厦xx',
          zip: 200333
        },
        {
          date: '2018-03-15',
          name: 'STreaker',
          province: '广东省',
          city: '深圳市',
          address: '深圳市宝安区xx村',
          zip: 200333
        },
        {
          date: '2018-04-14',
          name: 'WBX',
          province: '广东省',
          city: '深圳市',
          address: '深圳市南山区南龙苑xx',
          zip: 200333
        },
        {
          date: '2018-04-14',
          name: '虎子',
          province: '上海',
          city: '上海市',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2018-05-14',
          name: '狗子',
          province: '上海',
          city: '上海市',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }
      ]
    }
  },
  methods: {
    tableRowClassName ({ row, rowIndex }) {
      if (rowIndex % 2 === 0) {
        return 'warning-row'
      } else if (rowIndex % 3 === 0) {
        return 'success-row'
      }
    },
    handleClick (row) {
      console.log(row)
    }
  }
}
</script>
