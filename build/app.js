"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _helmet = _interopRequireDefault(require("helmet"));

var _userSignUp = _interopRequireDefault(require("./controllers/userSignUp"));

var _userSignin = _interopRequireDefault(require("./controllers/userSignin"));

var _forgetPassword = _interopRequireDefault(require("./controllers/forgetPassword"));

var _resetPassword = _interopRequireDefault(require("./controllers/resetPassword"));

var app = (0, _express["default"])(); // view engine setup

app.set('views', _path["default"].join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use((0, _helmet["default"])());
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
app.use(_express["default"]["static"](_path["default"].join(__dirname, 'public')));

require('dotenv').config();

app.post('/api/signup', _userSignUp["default"]);
app.post('/api/signin', _userSignin["default"]);
app.post('/forgetPassword', _forgetPassword["default"]);
app.post('/resetpasstoken/:id-:token', _resetPassword["default"]);
app.get("/", function (req, res) {
  res.send("Welcome to Mentel API");
}); // catch 404 and forward to error handler

app.use(function (req, res, next) {
  next((0, _httpErrors["default"])(404));
}); // error handler

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page

  res.status(err.status || 500);
  res.render('error');
});
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log("Server listening at: http://localhost:".concat(PORT));
});
var _default = app;
exports["default"] = _default;