'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = exec2;

var _shelljs = require('shelljs');

var _Deferred = require('simple-make/lib/Deferred');

var _Deferred2 = _interopRequireDefault(_Deferred);

var _logUtils = require('simple-make/lib/logUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultOptions = {
  echo: true
};

function exec2(cmd, options) {
  var _defaultOptions$optio = _extends({}, defaultOptions, options),
      echo = _defaultOptions$optio.echo;

  if (echo) {
    (0, _logUtils.log)(cmd);
  }

  var deferred = new _Deferred2.default();
  (0, _shelljs.exec)(cmd, function (code, stdout, stderr) {
    if (code === 0) {
      deferred.resolve(stdout);
    } else {
      deferred.reject(stderr);
    }
  });
  return deferred.promise;
}