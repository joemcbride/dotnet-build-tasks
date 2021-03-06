'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function read(path) {
  return new Promise(function (resolve, reject) {
    _fs2.default.readFile(path, 'utf8', function (err, data) {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });
}

exports.default = read;