"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("joi"));

var signupValidation = function signupValidation(data) {
  var schema = {
    firstName: _joi["default"].string().min(4).max(150).required(),
    lastName: _joi["default"].string().min(4).max(150).required(),
    email: _joi["default"].string().email().min(3).max(150),
    password: _joi["default"].string().trim().max(100).required().regex(/^[0-9]{7,15}$/),
    phoneNumber: _joi["default"].string().min(11).required(),
    address: _joi["default"].string().trim().max(350),
    isAdmin: _joi["default"].number().integer().max(1)
  };
  return _joi["default"].validate(data, schema);
};

var _default = signupValidation;
exports["default"] = _default;