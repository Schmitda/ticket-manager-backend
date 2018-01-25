import {WebApi} from './WebApi';
import mongoose = require('mongoose');
import express = require('express');
import {BackendConfig} from './config/BackendConfig';

let db = BackendConfig.getConfiguration();
let securePort: number;
let port: number;
if (process.env.NODE_ENV === 'production') {
  securePort = 5001;
  port = 5001;
}else{
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
let api = new WebApi(express(), port, securePort);
api.run();
console.log('listen on ' + port);
