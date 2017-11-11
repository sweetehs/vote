const request = require('request')
const http = require('http')
const citys = [{
    name: '北京',
    id: '1'
}]
var key = '琴行'
const getList = (totalcount) => {
    return new Promise((resolve, reject) => {
        var limit = totalcount || 1
        var offset = 0
        var city = citys[0]
        var url = 'http://api.mobile.meituan.com/group/v4/poi/pcsearch/' + city.id + '?userid=-1&areaId=-1&limit=' + limit + '&offset=' + offset + '&cateId=-1&q=' + encodeURI(key)
        request({
            url: url,
            headers: {
                'Content-Type': 'application/json'
            }
        }, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                resolve(JSON.parse(body).data)
            }
        })
    })

}
const getAllList = () => {
    return new Promise((resolve, reject) => {
        getList().then((ajaxData) => {
            // ajaxData.totalCount
            return getList(1)
        }).then((ajaxData) => {
            resolve(ajaxData.searchResult);
        })
    })

}
const getDetail = (list) => {
    list.map((item) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
<<<<<<< HEAD
                debugger
                request.get({
                    url: 'http://www.meituan.com/shenghuo/' + item.id + '/',
                    headers: {
=======
                request.get({
                    url: 'http://www.meituan.com/shenghuo/' + item.id + '/',
                    header: {
>>>>>>> 48f4bf5d814d937f55133797ea4ca007d9d9928a
                        'Upgrade-Insecure-Requests': 1,
                        'Host': 'www.meituan.com',
                        'Referer': 'http://bj.meituan.com/s/' + encodeURI(key) + '/',
                        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36',
                        'Cookie': 'rvct=1; _lxsdk_cuid=15f995462b4c8-02a23e3f71a3d8-3b3e5906-1fa400-15f995462b4c8; ttgr=465390; _lx_utm=utm_source%3Dmeituan.com%26utm_medium%3Dreferral%26utm_content%3D%252Fshenghuo%252F159165473%252F; __utma=211559370.80247819.1510105965.1510105965.1510115377.2; __utmc=211559370; __utmz=211559370.1510115377.2.2.utmcsr=meituan.com|utmccn=(referral)|utmcmd=referral|utmcct=/shenghuo/159165473/; __utmv=211559370.|1=city=beijing=1^3=dealtype=6202=1; rvd=45912998; uuid=b294d521285d6fea1230.1510105964.0.0.0; oc=LI-47lhsiO9qKWDGFmcQA6TCwOSeXNC7jdMG3wK4WaoHvViVzkfIgyQevAfB70s1_0OhYTyqqzrdDXPApO5mdJ70R8VguXOX-CxwGUxX68fjiTtuXhjQ7a9Bm4UoRHF8DLkd4F_Ceb7-K_mK-0VocNfrtVyp_n0ygTGKGh7ZYcI; ci=1; __mta=150886025.1510106621309.1510129735604.1510129793620.19; _lxsdk_s=15f9aba19fe-11-abb-b10%7C%7C18'
                    }
                }, (error, response, body) => {
                    debugger;
                    if (!error && response.statusCode == 200) {
                        resolve(JSON.parse(body).data)
                    }
                })
            }, 1000)
        })
    })
}
http.createServer(function (req, res) {
    getAllList().then(getDetail)
    res.writeHeader(200, { 'Content-Type': 'text/plain' });
    res.end('hello world');
}).listen(3000);

//https://www.zhihu.com/question/20392627