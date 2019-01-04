var http = require('http') //NODE.JS提供的http模块
var fs = require('fs')
var url = require('url')

//创建服务器
http
  .createServer(function(request, responsee) {
    //解析请求，包括文件名
    var pathname = url.parse(request.url).pathname

    //输出请求的文件名
    console.log('Request for ' + pathname + ' recieved.')

    var contentType = { 'Content-Type': 'text/html' }
    //js ==> application/x-javascript
    //css ==> text/css
    if (pathname && pathname.indexOf('.css') > -1)
      contentType = { 'Content-Type': 'text/css' }
    else if (pathname && pathname.indexOf('.js') > -1)
      contentType = { 'Content-Type': 'application/x-javascript' }

    //从文件系统中请求文件内容
    fs.readFile(pathname.substr(1), function(err, data) {
      if (err) {
        console.log(err)
        //http 状态码 404:NOT FOUND
        //content type: text/plain
        responsee.writeHead(404, { 'Content-Type': 'text/html' })
      } else {
        //HTTP 状态码 200:OK
        //content Type: text/plain
        responsee.writeHead(200, contentType)
        responsee.write(data.toString())
      }

      //发送响应数据
      responsee.end()
    })
  })
  .listen(8081)

console.log('Server running at http://127.0.0.1:8081')
