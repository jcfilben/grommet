"use strict";

exports.__esModule = true;
exports["default"] = exports.Icon = void 0;

var _react = _interopRequireDefault(require("react"));

var _Close = _interopRequireDefault(require("grommet-icons/es6/icons/Close"));

var _Send = _interopRequireDefault(require("grommet-icons/es6/icons/Send"));

var _User = _interopRequireDefault(require("grommet-icons/es6/icons/User"));

var _grommet = require("grommet");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Icon = function Icon() {
  return /*#__PURE__*/_react["default"].createElement(_grommet.Box, null, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Text, {
    margin: "small"
  }, " plain=true "), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    direction: "row"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
    plain: true,
    icon: /*#__PURE__*/_react["default"].createElement(_Close["default"], null),
    onClick: function onClick() {},
    primary: true
  }), /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
    plain: true,
    icon: /*#__PURE__*/_react["default"].createElement(_Send["default"], null),
    onClick: function onClick() {}
  }), /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
    plain: true,
    icon: /*#__PURE__*/_react["default"].createElement(_User["default"], null),
    onClick: function onClick() {}
  }))), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Text, {
    margin: "small"
  }, " plain=false "), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    direction: "row"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
    plain: false,
    icon: /*#__PURE__*/_react["default"].createElement(_Close["default"], null),
    onClick: function onClick() {},
    primary: true
  }), /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
    plain: false,
    icon: /*#__PURE__*/_react["default"].createElement(_Send["default"], null),
    onClick: function onClick() {}
  }), /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
    plain: false,
    icon: /*#__PURE__*/_react["default"].createElement(_User["default"], null),
    onClick: function onClick() {}
  }))), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Text, {
    margin: "small"
  }, " plain=undefined "), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    direction: "row"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
    icon: /*#__PURE__*/_react["default"].createElement(_Close["default"], null),
    onClick: function onClick() {},
    primary: true
  }), /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
    icon: /*#__PURE__*/_react["default"].createElement(_Send["default"], null),
    onClick: function onClick() {}
  }), /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
    icon: /*#__PURE__*/_react["default"].createElement(_User["default"], null),
    onClick: function onClick() {}
  }))));
};

exports.Icon = Icon;
Icon.storyName = 'Icon plain';
var _default = {
  title: "Controls/Button/Icon plain"
};
exports["default"] = _default;