"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _transporter = _interopRequireDefault(require("../middlewares/transporter"));

var _models = _interopRequireDefault(require("../models"));

var forgetPassword = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var email, result, secret, token, url, mailOptions;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            email = req.body.email;
            _context.next = 4;
            return _models["default"].Clients.findOne({
              where: {
                email: email
              }
            });

          case 4:
            result = _context.sent;

            if (result.length < 1) {
              res.status(400).send({
                message: "Sorry an Account with Email: ".concat(email, " doesn't exist")
              });
            } else {
              secret = result.password;
              token = _jsonwebtoken["default"].sign({
                result: result
              }, secret, {
                expiresIn: 3600 // 1 hour

              });
              url = "http://localhost:8080/resetPassword/".concat(result.id, "-").concat(token);
              mailOptions = {
                from: 'francisabonyi@gmail.com',
                to: email,
                subject: 'FORGOT PASSWORD',
                html: "Hello ".concat(result.firstName, " ").concat(result.lastName, ", \n                <br>\n                <br>\n                There was a request to reset your password\n                <br>\n                <br>\n                Please click on the button below to get a new password\n                <br>\n                <br>\n                <a href='").concat(url, "'><button>Reset Password</button></a>\n                <br>\n                <br>\n                If you did not make this request, just ignore this email as nothing has changed.\n                <br>\n                <br>\n                Best Regards,\n                <br>\n                The mentel Team!")
              };

              _transporter["default"].sendMail(mailOptions, function (err, data) {
                if (err) {
                  res.status(402).json({
                    success: false,
                    message: 'Failed to send e-mail reset Link'
                  });
                } else {
                  res.status(200).json({
                    status: 'success',
                    message: "A password reset link has been sent to ".concat(email)
                  });
                }
              });
            }

            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            res.status(500).json(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function forgetPassword(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = forgetPassword;
exports["default"] = _default;