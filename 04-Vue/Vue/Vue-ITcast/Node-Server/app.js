//导入http内置模块
const http = require('http')
//这个核心模块 能够帮我们解析url地址，从而拿到 pathname query
const urlModule =  require('url')

//创建一个http服务器
const server = http.createServer()

//监听http的request请求
server.on('request',function(req, res){
    //code here
    // const url = req.url
    const  {pathname: url, query} = urlModule.parse(req.url, true)
    if(url == '/getscript') {
        // var scriptStr = 'show()'
        var data = {
            name: 'wbx',
            age: 18,
            gender: 'girl'
        }
        var scriptStr = `${query.callback}(${JSON.stringify(data)})`
        res.end(scriptStr)
    } else {
        res.end('404')
    }
})

//指定端口号并启动服务器监听
server.listen(3000, function () {
    console.log('server listen at http://127.0.0.1:3000')
})