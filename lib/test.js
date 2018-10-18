'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = test;

var _exec = require('./exec');

var _exec2 = _interopRequireDefault(_exec);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function test(settings) {
  var verbosity = settings.testVerbosity || settings.CI ? 'normal' : 'minimal';
  var cmd = 'dotnet test "' + settings.projectTestCsProjPath + '" -c ' + settings.target + ' --no-restore --verbosity ' + verbosity;
  return (0, _exec2.default)(cmd);
}