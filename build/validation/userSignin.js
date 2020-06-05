"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("joi"));

var signinValidation = function signinValidation(data) {
  var schema = {
    email: _joi["default"].string().email().min(3).max(150),
    password: _joi["default"].string().trim().max(100).required().regex(/^[0-9]{7,15}$/)
  };
  return _joi["default"].validate(data, schema);
};

var _default = signinValidation;
exports["default"] = _default;