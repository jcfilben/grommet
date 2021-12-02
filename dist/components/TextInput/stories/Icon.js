"use strict";

exports.__esModule = true;
exports["default"] = exports.Icon = void 0;

var _react = _interopRequireDefault(require("react"));

var _Search = _interopRequireDefault(require("grommet-icons/es6/icons/Search"));

var _grommet = require("grommet");

var _themes = require("grommet/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Icon = function Icon() {
  return /*#__PURE__*/_react["default"].createElement(_grommet.Grommet, {
    full: true,
    theme: _themes.grommet
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    fill: true,
    align: "center",
    justify: "start",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    width: "medium",
    gap: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.TextInput, {
    icon: /*#__PURE__*/_react["default"].createElement(_Search["default"], null),
    placeholder: "search ..."
  }), /*#__PURE__*/_react["default"].createElement(_grommet.TextInput, {
    icon: /*#__PURE__*/_react["default"].createElement(_Search["default"], null),
    reverse: true,
    placeholder: "search ..."
  }))));
};

exports.Icon = Icon;
var _default = {
  title: 'Input/TextInput/Icon'
};
exports["default"] = _default;