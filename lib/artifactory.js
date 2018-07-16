'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _shelljs = require('shelljs');

var _logUtils = require('simple-make/lib/logUtils');

var _exec = require('./exec');

var _exec2 = _interopRequireDefault(_exec);

var _git = require('./git');

var _git2 = _interopRequireDefault(_git);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(settings) {
    var _ref2, branch, source, packages, apiKey, promises;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (settings.CI) {
              _context.next = 3;
              break;
            }

            (0, _logUtils.log)('Not on CI, skipping nuget upload');
            return _context.abrupt('return', Promise.resolve());

          case 3:
            _context.next = 5;
            return (0, _git2.default)();

          case 5:
            _ref2 = _context.sent;
            branch = _ref2.branch;
            source = branch === (settings.masterBranchName || 'master') ? settings.nugetSourceMaster : settings.nugetSourceBranches;
            packages = (0, _shelljs.find)(settings.artifactsPath).filter(function (file) {
              return file.match(/\.nupkg$/);
            });
            apiKey = settings.nugetApiKey;
            promises = [];


            packages.forEach(function (p) {
              promises.push((0, _exec2.default)('nuget push ' + p + ' ' + apiKey + ' -Source ' + source));
            });

            return _context.abrupt('return', Promise.all(promises));

          case 13:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function artifactory(_x) {
    return _ref.apply(this, arguments);
  }

  return artifactory;
}();