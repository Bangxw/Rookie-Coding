<template>
  <div class="comp-content div-button-content">
      <h2>Button 按钮</h2>

      <h3>基础用法</h3>
      <p>使用type、plain和round属性来定义 Button 的样式。</p>

      <div class="gray-border-box">
          <el-row>
              <el-col>
                <el-button>默认按钮</el-button>
                <el-button type="primary">主要按钮</el-button>
                <el-button type="success">成功按钮</el-button>
                <el-button type="info">信息按钮</el-button>
                <el-button type="warning">警告按钮</el-button>
                <el-button type="danger">危险按钮</el-button>
              </el-col>
          </el-row><br>
          <el-row>
              <el-col>
                <el-button plain>朴素按钮</el-button>
                <el-button type="primary" plain>主要按钮</el-button>
                <el-button type="success" plain>成功按钮</el-button>
                <el-button type="info" plain>信息按钮</el-button>
                <el-button type="warning" plain>警告按钮</el-button>
                <el-button type="danger" plain>危险按钮</el-button>
              </el-col>
          </el-row><br>
          <el-row>
              <el-col>
                <el-button plain>朴素按钮</el-button>
                <el-button type="primary" plain round>主要按钮</el-button>
                <el-button type="success" plain round>成功按钮</el-button>
                <el-button type="info" plain round>信息按钮</el-button>
                <el-button type="warning" plain round>警告按钮</el-button>
                <el-button type="danger" plain round>危险按钮</el-button>
              </el-col>
          </el-row>
      </div>

      <h3>禁用状态</h3>
      <p>按钮不可用状态。</p>
      <div class="gray-border-box">
          <el-row>
              <el-col>
                  <el-button disabled>默认按钮</el-button>
                  <el-button type="success" round disabled>默认按钮</el-button>
                  <el-button type="danger" plain disabled>默认按钮</el-button>
              </el-col>
          </el-row>
      </div>

      <h3>文字按钮</h3>
      <p></p>
      <div class="gray-border-box">
          <el-row>
              <el-col>
                  <el-button type="text">文字按钮</el-button>
                  <el-button type="text" disabled>文字按钮</el-button>
              </el-col>
          </el-row>
      </div>

      <h3>图标按钮</h3>
      <p></p>
      <div class="gray-border-box">
          <el-row>
              <el-col>
                  <el-button type="primary" icon="el-icon-edit"></el-button>
                  <el-button type="primary" icon="el-icon-delete"></el-button>
                  <el-button type="success" icon="el-icon-search">搜索</el-button>
              </el-col>
          </el-row>
      </div>

      <h3>按钮组</h3>
      <p></p>
      <div class="gray-border-box">
          <el-row>
              <el-col>
                  <el-button-group>
                      <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
                      <el-button type="primary" icon="el-icon-arrow-right">下一页</el-button>
                  </el-button-group>

                  <el-button-group>
                    <el-button type="success" icon="el-icon-edit"></el-button>
                    <el-button type="success" icon="el-icon-delete"></el-button>
                    <el-button type="success" icon="el-icon-search">搜索</el-button>
                  </el-button-group>
              </el-col>
          </el-row>
      </div>

      <h3>加载中</h3>
      <p>要设置为 loading 状态，只要设置loading属性为true即可。</p>
      <div class="gray-border-box" id="button-box">
          <el-row>
              <el-col>
                  <el-button type="primary" :loading="true" @click="handleClick">加载中</el-button>
              </el-col>
          </el-row>
      </div>

      <h3>不同尺寸</h3>
      <p>尺寸：medium、small、mini，通过设置size属性来配置它们。</p>
      <div class="gray-border-box" id="button-box">
          <div>
            <el-button>默认按钮</el-button>
            <el-button size="medium">中等按钮</el-button>
            <el-button size="small">小型按钮</el-button>
            <el-button size="mini">超小按钮</el-button>
            </div>
            <div style="margin-top: 20px">
            <el-button round>默认按钮</el-button>
            <el-button size="medium" round>中等按钮</el-button>
            <el-button size="small" round>小型按钮</el-button>
            <el-button size="mini" round>超小按钮</el-button>
            </div>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick () {
      console.log(1)
    }
  }
}
</script>
