var express = require('express');
var BackendConfig_1 = require('../../config/BackendConfig');
var fs = require('fs');
var frontendRouter = express.Router();
var config = BackendConfig_1.BackendConfig.getConfiguration();
frontendRouter.get('*', function (request, response) {
    var found = false;
    config.supportedLanguages.forEach(function (lang) {
        if (request.baseUrl.indexOf('/' + lang + '/') > -1) {
            found = true;
            response.sendFile('./dist/' + lang + '/index.html'); // load our public/index.html file
        }
    });
    if (found === false) {
        fs.exists('./dist' + config.defaultLanguage + '/index.html', function (res) {
            if (res) {
                response.sendFile('./dist/' + config.defaultLanguage + '/index.html'); // load our public/index.html file
            }
            else {
                response.sendFile('./dist/index.html'); // load our public/index.html file
            }
        });
    }
});
frontendRouter.get('/', function (request, response) {
    var found = false;
    config.supportedLanguage.forEach(function (lang) {
        if (request.baseUrl.indexOf('/' + lang + '/') > -1) {
            found = true;
            response.sendFile('./dist/' + lang + '/index.html'); // load our public/index.html file
        }
    });
    if (found === false) {
        fs.exists('./dist' + config.defaultLanguage + '/index.html', function (res) {
            if (res) {
                response.sendFile('./dist/' + config.defaultLanguage + '/index.html'); // load our public/index.html file
            }
            else {
                response.sendFile('./dist/index.html'); // load our public/index.html file
            }
        });
    }
});
module.exports = frontendRouter;
//# sourceMappingURL=frontendRouter.js.map