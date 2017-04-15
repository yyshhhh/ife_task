var request = require('request')
var cheerio = require('cheerio')

var baseUrl = 'http://www.alexa.cn/siterank/'

var headers = {
    Host: 'www.alexa.cn',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36',
    'Cookie': 'PHPSESSID=uato8bn9q8rlbfds2fgf5gji93; exi_users=1G6bGoC8b9-D-Db5nIRqBtqMsn3-D-DzPwJy3ky58x94PbyP1vimNKEkK4-JGLpHyIT-DorGU2vKd-JD9p0Duigd8bczQRUTX25WNkCuVabZ-DbwBvSiGUbajh9G-D5pbETc4xMRdzsItgoojWVxpU94gWH65T0cHxWwwIl67I-JKQJ-D0aJ4Bz54xojNV-JcD-Jv7dORWdwsF9ft-JL7bx9-JTVOEMko0cgIYJyI17L-DyRodI9dvDlLnfQ7LL-JqlUxbF-Deux-DYvL5746abhzAWewy1JYStDgzQJhv2H5RDfuzcTGMZXGgzEQU2AszhgoG7cgJBJHIG-JNczveG-DmwPY-JHy-JVywsgK7ZXFsCFf5-Jk8KtD9Ye4I-DsVW2AtWhQBBgPDsLJq8PqS8FzgR6EKOJTQ5Qxwr38KWg4D-JnN4nP-DYzM6nWDkxQUkDSw-N'
}

for (var i = 1; i <= 10; i++) {
    var option = {
        url: baseUrl + i,
        headers: headers
    }
    request(option, function(err, response, body) {
        if (!err && response.statusCode == 200) {
            // console.log(body)
            var $ = cheerio.load(body);
            var aNum = $('.infos').length
            for (var j = 0; j < aNum; j++) {
                var domainInfo = $('.infos').eq(j).text()
                var index = domainInfo.indexOf('）')
                console.log(domainInfo.substring(0, index + 1))
            }

        }
    })
}
