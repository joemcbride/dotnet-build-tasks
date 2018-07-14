'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xmlReader = require('xml-reader');

var _xmlReader2 = _interopRequireDefault(_xmlReader);

var _readFile = require('./readFile');

var _readFile2 = _interopRequireDefault(_readFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function getText(element) {
  var text = element.children.find(function (el) {
    return el.type === 'text';
  }) || { value: '' };
  return text.value;
}

exports.default = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file) {
    var xml;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _readFile2.default)(file);

          case 2:
            xml = _context.sent;
            return _context.abrupt('return', new Promise(function (resolve, reject) {
              var version = '';

              var reader = _xmlReader2.default.create();
              reader.on('tag:VersionPrefix', function (data) {
                return version = getText(data);
              });
              reader.on('done', function (data) {
                return version !== '' ? resolve(version) : reject('Unable to read project version');
              });
              reader.parse(xml);
            }));

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function projectVersion(_x) {
    return _ref.apply(this, arguments);
  }

  return projectVersion;
}();