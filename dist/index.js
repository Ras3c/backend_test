"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* archivo de conexion a BD */
//import './database'
_app["default"].listen(3000);

console.log('server on port 3000');