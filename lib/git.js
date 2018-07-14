'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _exec = require('./exec');

var _exec2 = _interopRequireDefault(_exec);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var branch, sha;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _exec2.default)("git branch | sed -n '/* /s///p'", { echo: false });

          case 2:
            branch = _context.sent;
            _context.next = 5;
            return (0, _exec2.default)('git rev-parse --short HEAD', { echo: false });

          case 5:
            sha = _context.sent;
            return _context.abrupt('return', {
              branch: (branch || '').trim(),
              sha: (sha || '').trim()
            });

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function git() {
    return _ref.apply(this, arguments);
  }

  return git;
}();