"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _models = _interopRequireDefault(require("../models"));

var resetPassword = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$params, id, token, password, result, secret, payload;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$params = req.params, id = _req$params.id, token = _req$params.token;
            console.log('id', id);
            password = req.body.password;
            _context.next = 6;
            return _models["default"].Clients.findOne({
              where: {
                id: id
              }
            });

          case 6:
            result = _context.sent;
            secret = result.password;
            payload = _jsonwebtoken["default"].decode(token, secret);

            if (payload.client.id) {
              _bcryptjs["default"].genSalt(10, function (err, salt) {
                if (err) return;

                _bcryptjs["default"].hash(password, salt, function (error, hash) {
                  if (error) return;

                  _models["default"].Clients.update({
                    password: hash
                  }, {
                    where: {
                      id: id
                    } // eslint-disable-next-line comma-dangle

                  });
                });

                res.status(200).json({
                  message: 'Password changed accepted'
                });
              });
            }

            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            res.status(500).json(_context.t0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));

  return function resetPassword(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = resetPassword;
exports["default"] = _default;