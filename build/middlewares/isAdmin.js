"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var isAdmin = function isAdmin(req, res, next) {
  if (!req.user.isAdmin) {
    return res.status(401).json({
      status: 401,
      message: 'you are not an Admin'
    });
  }

  next();
};

var _default = isAdmin;
exports["default"] = _default;