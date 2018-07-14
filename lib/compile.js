'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pack;

var _exec = require('./exec');

var _exec2 = _interopRequireDefault(_exec);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function pack(settings) {
  var cmd = 'dotnet build ' + settings.projectPath + ' -c ' + settings.target + ' --no-restore';
  return (0, _exec2.default)(cmd);
}