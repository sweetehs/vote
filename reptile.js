import request from 'request'
import http from 'http'
// var url = 'http://api.mobile.meituan.com/group/v4/poi/pcsearch/1?userid=-1&areaId=-1&limit=30&offset=0&cateId=-1&q=%E7%90%B4%E8%A1%8C'
// request(url, (error, response, body) => {
//     if (!error && response.statusCode == 200) {
//         console.log(body)
//     }
// })

http.createServer(function (req, res) {
    res.writeHeader(200, { 'Content-Type': 'text/plain' });
    res.end('hello world');
}).listen(3000);