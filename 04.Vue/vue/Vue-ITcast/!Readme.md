# Vue 传智播客视频学习

## 学习VUE

### Vue-resource实现get, post, jsonp请求

> - 传统数据请求方式: XMLHttpRequest、Jquery Ajax
> - 常见数据请求类型: get、post、jsonp
> - 除了Vue-resource之外，还可以用'axios'实现数据的请求

```js
this.$http.get('url',[options]).then(successRes => { console.log(successRes.body) }, errorRes => {})
this.$http.post('url',[data],[options]).then(succRes => {}, errorRes => {})
this.$http.jsonp('url',[options]).then(succRes => {}, errorRes => {})
```