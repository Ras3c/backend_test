"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER || 'root',
  database: process.env.DB_DATABASE || 'tasksdb',
  password: process.env.DB_PASSWORD || ''
};
exports.config = config;