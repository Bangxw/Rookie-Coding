<template>
  <div class="comp-content div-container-content">
      <h2>Container布局</h2>
      <p>用于布局的容器组件，方便快速搭建页面的基本结构：</p>
      <p>&lt;el-container&gt;：外层容器。当子元素中包含 &lt;el-header&gt;或 &lt;el-footer&gt; 时，全部子元素会垂直上下排列，否则会水平左右排列。</p>
      <p>&lt;el-header&gt;：顶栏容器。</p>
      <p>&lt;el-aside&gt;：侧边栏容器。</p>
      <p>&lt;el-main&gt; 主要区域容器。</p>
      <p>&lt;el-footer&gt;：底栏容器。</p>
      <div class="gray-border-box">
          <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
          </el-container>

          <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
          </el-container>

          <el-container>
            <el-aside>Aside</el-aside>
            <el-main>Main</el-main>
          </el-container>

          <el-container>
            <el-header>Header</el-header>
            <el-container>
              <el-aside>Aside</el-aside>
              <el-main>Main</el-main>
            </el-container>
          </el-container>

          <el-container>
            <el-header>Header</el-header>
            <el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-container>
                  <el-main>Main</el-main>
                  <el-footer>Footer</el-footer>
                </el-container>
              </el-container>
          </el-container>
      </div>
  </div>
</template>

<style>
.div-container-content .el-header,
.div-container-content .el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.div-container-content .el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.div-container-content .el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.div-container-content .el-container {
  margin-bottom: 100px;
}

.div-container-content .el-container:last-child {
  margin-bottom: 0;
}
</style>
