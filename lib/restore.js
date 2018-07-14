'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = restore;

var _exec = require('./exec');

var _exec2 = _interopRequireDefault(_exec);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function restore(settings) {
  var cmd = 'dotnet restore ' + settings.restorePath;
  return (0, _exec2.default)(cmd);
}