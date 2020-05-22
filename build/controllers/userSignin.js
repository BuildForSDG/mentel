"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _models = _interopRequireDefault(require("../models"));

var _userSignin = _interopRequireDefault(require("../validation/userSignin"));

/** /Login:
   post:
      description: client can login
      responses: "200"
       description: A successful Login
*/
var signin = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _signinValidation, error, _req$body, email, password, client, passwordIsValid, token, data;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _signinValidation = (0, _userSignin["default"])(req.body), error = _signinValidation.error;

            if (!error) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", res.status(400).send(error.details[0].message));

          case 3:
            _req$body = req.body, email = _req$body.email, password = _req$body.password;
            _context.prev = 4;
            _context.next = 7;
            return _models["default"].Clients.findOne({
              where: {
                email: email
              }
            });

          case 7:
            client = _context.sent;

            if (client) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", res.status(404).send({
              message: 'Client Not found.'
            }));

          case 10:
            passwordIsValid = _bcryptjs["default"].compareSync(password, client.password);

            if (passwordIsValid) {
              _context.next = 13;
              break;
            }

            return _context.abrupt("return", res.status(401).send({
              token: null,
              message: 'Invalid Password!'
            }));

          case 13:
            token = _jsonwebtoken["default"].sign({
              client: client
            }, process.env.TOKEN_SECRET, {
              expiresIn: 86400 // 24 hours

            });
            data = {
              id: client.id,
              email: client.email,
              password: client.password
            };
            data.token = token;
            res.cookie('token', token);
            return _context.abrupt("return", res.header('Authorization', token).status(200).send({
              data: data,
              message: 'Client is successfully logged in!'
            }));

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](4);
            res.status(500).send({
              message: _context.t0.message
            });

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 20]]);
  }));

  return function signin(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = signin;
exports["default"] = _default;