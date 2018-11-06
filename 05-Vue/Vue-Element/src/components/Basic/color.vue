<template>
  <div class="comp-content">
      <div class="color-container-border">
          <h2>主色</h2>
          <p>Element 主要品牌颜色是鲜艳、友好的蓝色。</p>
          <el-row>
              <el-col :span="3" class="bg-blue"><div>Blue <br> #409EFF</div></el-col>
          </el-row>

          <h2>辅助色</h2>
          <p>除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。</p>
          <el-row :gutter="20">
              <el-col :span="3" class="bg-success"><div>Success <br> #67C23A</div></el-col>
              <el-col :span="3" class="bg-Warning"><div>Warning <br> #E6A23C</div></el-col>
              <el-col :span="3" class="bg-Danger"><div>Danger <br> #F56C6C</div></el-col>
              <el-col :span="3" class="bg-Info"><div>Info <br> #909399</div></el-col>
          </el-row>
      </div>
  </div>
</template>

<style>
.color-container-border {
  border: 1px solid #ebebeb;
  padding: 20px;
  font-size: 12px;
}

.color-container-border .el-col {
  text-align: center;
  color: #fff;
}

.color-container-border .el-col > div {
  padding: 15px;
  border-radius: 5px;
}

.bg-blue > div {
  background-color: #409eff;
}

.bg-success > div{
  background-color: #67C23A;
}

.bg-Warning > div{
  background-color: #E6A23C;
}

.bg-Danger > div{
  background-color: #F56C6C;
}

.bg-Info > div{
  background-color: #909399;
}
</style>
