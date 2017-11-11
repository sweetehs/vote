const request = require('request')
const fs = require('fs')
const http = require('http')
var list = [];
const getDetail = (page, callback) => {
    console.log(page)
    page = page || 2
    var url = 'http://www.ruyile.com/xuexiao/?a=3&t=1&p=' + page
    request({
        url: url,
        headers: {
            'Content-Type': 'application/json'
        }
    }, (error, response, body) => {
        let total = parseInt(body.match(/<span class=\"zys\".*?>(.*?)<\/span>/gi)[0].match(/\d+/)[0])
        list = list.concat(body.match(/<div class=\"sk\".*?>.*?<\/div>/gi).map((_d) => {
            let rData = {}
            try{
                rData = {
                    name: _d.match(/<a.*?>(.*?)<\/a>/)[1],
                    tel: _d.match(/<\/h4.*?>(.*?)<br \/>/)[1],
                    address: _d.match(/<br \/.*?>(?!邮)(.*?)<div/)[1]
                }
            }catch(e){
                rData = {}
            }
            return rData
        }))
        if (page <= total) {
            setTimeout(() => {
                page += 1
                getDetail(page, callback)
            }, 100)
        } else {
            let html = ""
            list.map((_d) => {
                html += (_d.name + _d.tel + _d.address + '\n')
            })
            fs.writeFile('school.txt', html, function (err) {
                if (err) throw err
            });
            callback && callback()
        }
    })
}
getDetail()


//https://www.zhihu.com/question/20392627

//http://www.ruyile.com/xuexiao/?a=3&t=1&p=100