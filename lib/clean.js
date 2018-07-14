'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _shelljs = require('shelljs');

var _logUtils = require('simple-make/lib/logUtils');

exports.default = function (settings) {
  var paths = settings.cleanPaths;

  for (var i = 0; i < paths.length; i++) {
    (0, _logUtils.log)('cleaning ' + paths[i]);
    (0, _shelljs.rm)('-rf', paths[i]);
  }

  return Promise.resolve();
};