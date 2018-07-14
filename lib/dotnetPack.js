'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _exec = require('./exec');

var _exec2 = _interopRequireDefault(_exec);

var _git = require('./git');

var _git2 = _interopRequireDefault(_git);

var _projectVersion = require('./utils/projectVersion');

var _projectVersion2 = _interopRequireDefault(_projectVersion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(settings) {
    var _ref2, branch, branchName, suffix, version;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _git2.default)();

          case 2:
            _ref2 = _context.sent;
            branch = _ref2.branch;
            branchName = branch === 'master' ? '.' : '-' + branch + '-';
            suffix = '' + branchName + settings.buildNumber;
            _context.next = 8;
            return (0, _projectVersion2.default)(settings.projectCsProjPath);

          case 8:
            version = _context.sent;
            return _context.abrupt('return', (0, _exec2.default)('dotnet pack ' + settings.projectPath + ' -o ' + settings.artifactsPath + ' -c ' + settings.target + ' /p:PackageVersion=' + version + suffix));

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function pack(_x) {
    return _ref.apply(this, arguments);
  }

  return pack;
}();