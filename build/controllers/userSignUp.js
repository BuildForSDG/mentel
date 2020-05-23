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

var _userSignup = _interopRequireDefault(require("../validation/userSignup"));

/** /register:
   post:
      description: client can register
      responses: "200"
       description: A successful registration
*/
var signUp = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _signupValidation, error, clientData, token, data;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _signupValidation = (0, _userSignup["default"])(req.body), error = _signupValidation.error;

            if (!error) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", res.status(400).send(error.details[0].message));

          case 4:
            _context.next = 6;
            return _models["default"].Clients.create({
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              email: req.body.email,
              password: _bcryptjs["default"].hashSync(req.body.password, 10),
              phoneNumber: req.body.phoneNumber,
              address: req.body.address,
              isAdmin: req.body.isAdmin
            });

          case 6:
            clientData = _context.sent;
            _context.next = 9;
            return _models["default"].Clients.findOne({
              where: {
                email: req.body.email
              }
            });

          case 9:
            token = _jsonwebtoken["default"].sign({
              clientData: clientData
            }, process.env.TOKEN_SECRET, {
              expiresIn: 86400 // 24 hours

            });
            data = {
              id: clientData.id,
              firstName: clientData.firstName,
              lastName: clientData.lastName,
              email: clientData.email,
              phoneNumber: clientData.phoneNumber,
              address: clientData.address,
              isAdmin: clientData.isAdmin
            };
            data.token = token;
            res.cookie('token', token);
            res.header('Authorization', token).status(200).send({
              data: data,
              message: 'Client was registered successfully!'
            });
            _context.next = 20;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](0);
            res.status(_context.t0.status || 500);
            res.render('error');

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 16]]);
  }));

  return function signUp(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = signUp;
exports["default"] = _default;