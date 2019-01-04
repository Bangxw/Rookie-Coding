<template>
    <div class="comp-content div-basic-layout">
        <h2>Layout布局</h2>
        <p class="marginBottom-30">通过基础的24分栏，迅速简便的创建布局。</p>

        <h3>基础布局</h3>
        <p>使用单一分栏创建基础的栅格布局。</p>
        <div class="gray-border-box">
            <el-row>
                <el-col :span="24">
                    <div class="grid-content"></div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12"><div class="grid-content"></div></el-col>
                <el-col :span="12"><div class="grid-content"></div></el-col>
            </el-row>
            <el-row>
                <el-col :span="8"><div class="grid-content"></div></el-col>
                <el-col :span="8"><div class="grid-content"></div></el-col>
                <el-col :span="8"><div class="grid-content"></div></el-col>
            </el-row>
            <el-row>
                <el-col :span="6"><div class="grid-content"></div></el-col>
                <el-col :span="6"><div class="grid-content"></div></el-col>
                <el-col :span="6"><div class="grid-content"></div></el-col>
                <el-col :span="6"><div class="grid-content"></div></el-col>
            </el-row>
            <el-row>
                <el-col :span="4"><div class="grid-content"></div></el-col>
                <el-col :span="4"><div class="grid-content"></div></el-col>
                <el-col :span="4"><div class="grid-content"></div></el-col>
                <el-col :span="4"><div class="grid-content"></div></el-col>
                <el-col :span="4"><div class="grid-content"></div></el-col>
                <el-col :span="4"><div class="grid-content"></div></el-col>
            </el-row>
        </div>

        <h3>分栏间隔</h3>
        <p>Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。</p>
        <div class="gray-border-box">
            <el-row :gutter="30">
                <el-col :span="6"><div class="grid-content"></div></el-col>
                <el-col :span="6"><div class="grid-content"></div></el-col>
                <el-col :span="6"><div class="grid-content"></div></el-col>
                <el-col :span="6"><div class="grid-content"></div></el-col>
            </el-row>
        </div>

        <h3>混合布局</h3>
        <p>通过基础的1/24分栏任意扩展组合形成较为复杂的混合布局</p>
        <div class="gray-border-box">
            <el-row :gutter="20">
                <el-col :span="18"><div class="grid-content"></div></el-col>
                <el-col :span="6"><div class="grid-content"></div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content"></div></el-col>
                <el-col :span="8"><div class="grid-content"></div></el-col>
                <el-col :span="8"><div class="grid-content"></div></el-col>
                <el-col :span="4"><div class="grid-content"></div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content"></div></el-col>
                <el-col :span="12"><div class="grid-content"></div></el-col>
                <el-col :span="8"><div class="grid-content"></div></el-col>
            </el-row>
        </div>

        <h3>分栏偏移</h3>
        <p>通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数。</p>
        <div class="gray-border-box">
            <el-row :gutter="20">
                <el-col :span="6"><div class="grid-content"></div></el-col>
                <el-col :span="6" :offset="6"><div class="grid-content"></div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8"><div class="grid-content"></div></el-col>
                <el-col :span="4" :offset="4"><div class="grid-content"></div></el-col>
                <el-col :span="8"><div class="grid-content"></div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="10"><div class="grid-content"></div></el-col>
                <el-col :span="2" :offset="2"><div class="grid-content"></div></el-col>
                <el-col :span="10"><div class="grid-content"></div></el-col>
            </el-row>
        </div>

        <h3>对齐方式</h3>
        <p>通过flex布局对分栏进行灵活的对齐。</p>
        <p>将 type 属性赋值为 'flex'，可以启用 flex 布局，并可通过 justify 属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的排版方式。</p>
        <div class="gray-border-box">
            <el-row type="flex">
                <el-col :span="6"><div class="grid-content"></div></el-col>
                <el-col :span="6"><div class="grid-content"></div></el-col>
                <el-col :span="6"><div class="grid-content"></div></el-col>
            </el-row>

            <el-row type="flex" justify="start">
                <el-col :span="6"><div class="grid-content"></div></el-col>
                <el-col :span="6"><div class="grid-content"></div></el-col>
                <el-col :span="6"><div class="grid-content"></div></el-col>
            </el-row>

            <el-row type="flex" justify="center">
                <el-col :span="6"><div class="grid-content"></div></el-col>
                <el-col :span="6"><div class="grid-content"></div></el-col>
                <el-col :span="6"><div class="grid-content"></div></el-col>
            </el-row>

            <el-row type="flex" justify="end">
                <el-col :span="6"><div class="grid-content"></div></el-col>
                <el-col :span="6"><div class="grid-content"></div></el-col>
                <el-col :span="6"><div class="grid-content"></div></el-col>
            </el-row>

            <el-row type="flex" justify="space-between">
                <el-col :span="6"><div class="grid-content"></div></el-col>
                <el-col :span="6"><div class="grid-content"></div></el-col>
                <el-col :span="6"><div class="grid-content"></div></el-col>
            </el-row>

            <el-row type="flex" justify="space-around">
                <el-col :span="6"><div class="grid-content"></div></el-col>
                <el-col :span="6"><div class="grid-content"></div></el-col>
                <el-col :span="6"><div class="grid-content"></div></el-col>
            </el-row>
        </div>

        <h3>响应式布局</h3>
        <P>参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。</P>
        <div class="gray-border-box">
            <el-row :gutter="10">
                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content"></div></el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content"></div></el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content"></div></el-col>
                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content"></div></el-col>
            </el-row>
        </div>
    </div>
</template>

<style>
.div-basic-layout .grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.div-basic-layout .el-row {
  margin-bottom: 20px;
}

.div-basic-layout .el-row:last-child {
  margin-bottom: 0;
}

.div-basic-layout .el-col {
  border-radius: 5px;
}

.div-basic-layout  .el-col:nth-child(2n) > div {
  background-color: #e5e9f2;
}

.div-basic-layout  .el-col:nth-child(2n + 1) > div {
  background-color: #d3dce6;
}

.div-basic-layout .el-row:first-child .el-col > div {
  background-color: #99a9bf !important;
}

.marginBottom-30{
    margin-bottom: 30px;
}
</style>
