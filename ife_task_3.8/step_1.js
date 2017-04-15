var fs = require('fs')
var request =require('request')
var argv = require('yargs').argv

if (!argv.site) {
    console.log('A site name is needed!')
    return
}

if (!argv.lib) {
    console.log('A library name is needed!')
    return
}

var siteName = argv.site
var libName = argv.lib
request({url: siteName}, function(error, response, body) {
    if (!error && response.statusCode === 200) {
        if (body.indexOf(libName) > -1) {
            console.log('site ' + siteName + ' uses ' + libName)
        } else {
            console.log('site ' + siteName + ' dosent use ' + libName)
        }
    }
})
