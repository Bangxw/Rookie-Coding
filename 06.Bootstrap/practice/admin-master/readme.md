# Bootstrap admin master

## 备注

1. 我们使用全局暴露统一入口
```js
// ./scripts/webpack.plugins.js
new Webpack.ProvidePlugin({
  $: "jquery",
  Popper: ['popper.js', 'default'], // bootstrap v4依赖的资源
}),
```

2. 不打包第三方包（jQuery），开发模式引用不受影响，比如`import $ from 'jquery'`；我们在模板页面通过\<script\>自己引入jquery资源文件, 线上环境直接引用cdn资源文件，加载速度会更快
```js
// ./scripts/webpack.config.js
externals: /^(jquery|\$)$/i

<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
```

3. 多页面入口: entry
4. 当多入口文件对应多出口文件时，出口文件的name需要与入口项的key相对应
5. 多html文件需要 “new” 多个 “htmlWebpackPlugin” 实例，为了减少代码冗余，我们提取 `htmlWebpackPluginConfig` 函数
6. 利用`nodemon`实现热更新 webpack的配置文件，换句话说，修改了webpack.config.js等webpack配置文件，不需要每次手动npm start
7. 通过ejs语法引入cdn资源文件

webpack4的开箱即用
