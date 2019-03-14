//node.js读取数据
const http = require("http")
const url = require("url")
const queryString = require("querystring")

let listData = {
  status: 0,
  message: [{
    id: 1,
    name: '奥迪',
    ctime: '2018-03-02T08:02:16.455Z'
  }, {
    id: 2,
    name: '宝马',
    ctime: '2017-03-02T08:02:16.455Z'
  }, {
    id: 3,
    name: '奔驰',
    ctime: '2017-03-02T08:02:16.455Z'
  }]
}

const server = http.createServer((req, res) => {  
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type'); //可以支持的消息首部列表
  res.setHeader('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS'); //可以支持的提交方式
  res.setHeader('Content-Type', 'application/json;charset=utf-8'); //响应头中定义的类型

  let methods = req.method
  let params = url.parse(req.url, true, true); 
  console.log(params.pathname, methods);

  if (methods == "GET") {
    if (params.pathname == "/api/getproductlist") {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(listData))
    } else {
      res.writeHead(200)
      res.end('Get Info Success!!!')
    }
  } else if (methods == "POST") {
    let data = ""
    req.on("data", (chunk) => {      
      data += chunk;      
    })
    if (params.pathname == "/api/addproduct") {
      req.on("end", () => {             
        let postData = queryString.parse(data.toString()) 
        listData.message.push({
          id: listData.message.length + 1,
          name: postData.name,
          ctime: new Date()
        })
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 0, message: 'add success' }));
      })
    } else if (params.pathname == "/api/delproduct") {
      req.on("end", () => {             
        let postData = queryString.parse(data.toString()) 
        listData.message = listData.message.filter((item, index, arr) => {
          if (item.id != postData.delID) return true
          else return false
        })
        console.log(listData)
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 0, message: 'del success' }));
      })
    } else {
      res.end(JSON.stringify({ message: 'Post info success' }));
    }
  }
})

server.listen(3000, function() {
  console.log('server listen at http://127.0.0.1:3000')
})