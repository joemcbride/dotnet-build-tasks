'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = test;

var _exec = require('./exec');

var _exec2 = _interopRequireDefault(_exec);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function test(settings) {
  var cmd = 'dotnet test "' + settings.projectTestCsProjPath + '" -c ' + settings.target + ' --no-restore';
  return (0, _exec2.default)(cmd);
}