//node.js读取数据
const http = require("http")
const url = require("url")
const queryString = require("querystring")

let listData = [
  {
    id: 1,
    info: '华为鸿蒙 HarmonyOS 2.0 公测版',
    ctime: '2018-03-02T08:02:16.455Z'
  },
  {
    id: 2,
    info: 'Win11 上手初体验：任务栏和开始菜单等迎来大改',
    ctime: '2017-03-02T08:02:16.455Z'
  },
  {
    id: 3,
    info: '高考试题泄露，5G 该不该背锅',
    ctime: '2017-03-02T08:02:16.455Z'
  }
]

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type'); //可以支持的消息首部列表
  res.setHeader('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS'); //可以支持的提交方式
  res.setHeader('Content-Type', 'application/json;charset=utf-8'); //响应头中定义的类型

  let methods = req.method
  let params = url.parse(req.url, true, true);

  console.log("⏳", new Date(), params.pathname, methods);

  if (methods == "GET") {
    if (params.pathname == "/api/list") {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({
        status: 1,
        message: 'Get list success.',
        listData
      }))
    } else {
      res.writeHead(200)
      res.end('Get Info Success!!!')
    }
  } else if (methods == "POST") {
    let data = ""
    req.on("data", (chunk) => {
      data += chunk;
    })
    if (params.pathname == "/api/list") {
      req.on("end", () => {
        let postData = queryString.parse(data)
        // listData.push({
        //   id: listData.length + 1,
        //   info: postData.info,
        //   ctime: new Date()
        // })

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 1, message: 'Add success'}));
      })
    } else if (params.pathname == "/api/file") {
      req.on("end", () => {
        let postData = queryString.parse(data.toString())
        console.log(postData)
        res.end(JSON.stringify({ status: 1, message: 'Upload success.' }));
      })
    } else if (params.pathname == "/api/login") {
      req.on("end", () => {
        let postData = queryString.parse(data.toString())
        console.log(postData)
        res.end(JSON.stringify({ status: 1, message: 'Login success.' }));
      })
    } else {
      res.end(JSON.stringify({ message: 'Post info success' }));
    }
  } else if (methods == "OPTIONS") {
    res.writeHead(200)
    res.end('OPTIONS Success!!!')
  }
})

server.listen(3288, function () {
  console.log('server listen at http://127.0.0.1:3288')
})