"use strict";
const express = require("express");
const BackendConfig_1 = require("../../config/BackendConfig");
let fs = require('fs');
let frontendRouter = express.Router();
let config = BackendConfig_1.BackendConfig.getConfiguration();
frontendRouter.get('*', (request, response) => {
    let found = false;
    config.supportedLanguages.forEach(lang => {
        if (request.baseUrl.indexOf('/' + lang + '/') > -1) {
            found = true;
            response.sendFile('./dist/' + lang + '/index.html'); // load our public/index.html file
        }
    });
    if (found === false) {
        fs.exists('./dist' + config.defaultLanguage + '/index.html', (res) => {
            if (res) {
                response.sendFile('./dist/' + config.defaultLanguage + '/index.html'); // load our public/index.html file
            }
            else {
                response.sendFile('./dist/index.html'); // load our public/index.html file
            }
        });
    }
});
frontendRouter.get('/', (request, response) => {
    let found = false;
    config.supportedLanguage.forEach(lang => {
        if (request.baseUrl.indexOf('/' + lang + '/') > -1) {
            found = true;
            response.sendFile('./dist/' + lang + '/index.html'); // load our public/index.html file
        }
    });
    if (found === false) {
        fs.exists('./dist' + config.defaultLanguage + '/index.html', (res) => {
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