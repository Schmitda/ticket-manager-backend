"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WebApi_1 = require("./WebApi");
const mongoose = require("mongoose");
const express = require("express");
const BackendConfig_1 = require("./config/BackendConfig");
let db = BackendConfig_1.BackendConfig.getConfiguration();
let securePort;
let port;
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
let api = new WebApi_1.WebApi(express(), port, securePort);
api.run();
console.log('listen on ' + port);
//# sourceMappingURL=server.js.map