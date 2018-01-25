var WebApi_1 = require('./WebApi');
var mongoose = require('mongoose');
var express = require('express');
var BackendConfig_1 = require('./config/BackendConfig');
var db = BackendConfig_1.BackendConfig.getConfiguration();
var securePort;
var port;
if (process.env.NODE_ENV === 'production') {
    securePort = 5001;
    port = 5001;
}
else {
    securePort = 5001;
    port = 5001;
}
/****** SETUP-DEV & PRODUCTION ******/
//SETTING UP DB
mongoose.connect(db.url, {
    server: {
        socketOptions: {
            socketTimeoutMS: 20000,
            connectionTimeout: 20000
        }
    }
});
// TODO FIX add third argument
var api = new WebApi_1.WebApi(express(), port, securePort);
api.run();
console.log('listen on ' + port);
//# sourceMappingURL=server.js.map