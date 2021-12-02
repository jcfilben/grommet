"use strict";

exports.__esModule = true;
exports["default"] = exports.Uncontrolled = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Attraction = _interopRequireDefault(require("grommet-icons/es6/icons/Attraction"));

var _Car = _interopRequireDefault(require("grommet-icons/es6/icons/Car"));

var _TreeOption = _interopRequireDefault(require("grommet-icons/es6/icons/TreeOption"));

var _grommet = require("grommet");

var _themes = require("grommet/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var UncontrolledTabs = function UncontrolledTabs(_ref) {
  var _ref$plain = _ref.plain,
      plain = _ref$plain === void 0 ? false : _ref$plain;
  return /*#__PURE__*/_react["default"].createElement(_grommet.Grommet, {
    theme: _themes.grommet,
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    fill: true
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Tabs, {
    flex: true
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Tab, {
    plain: plain,
    title: "Tab 1"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    fill: true,
    pad: "large",
    align: "center",
    background: "accent-1"
  }, /*#__PURE__*/_react["default"].createElement(_Attraction["default"], {
    size: "xlarge"
  }))), /*#__PURE__*/_react["default"].createElement(_grommet.Tab, {
    plain: plain,
    title: "Tab 2"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    fill: true,
    pad: "large",
    align: "center",
    background: "accent-2"
  }, /*#__PURE__*/_react["default"].createElement(_TreeOption["default"], {
    size: "xlarge"
  }))), /*#__PURE__*/_react["default"].createElement(_grommet.Tab, {
    plain: plain,
    title: "Tab 3"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    fill: true,
    pad: "large",
    align: "center",
    background: "accent-3"
  }, /*#__PURE__*/_react["default"].createElement(_Car["default"], {
    size: "xlarge"
  }))))));
};

UncontrolledTabs.propTypes = {
  plain: _propTypes["default"].bool // eslint-disable-line react/require-default-props

};

var Uncontrolled = function Uncontrolled() {
  return /*#__PURE__*/_react["default"].createElement(UncontrolledTabs, null);
};

exports.Uncontrolled = Uncontrolled;
var _default = {
  title: 'Controls/Tabs/Uncontrolled'
};
exports["default"] = _default;