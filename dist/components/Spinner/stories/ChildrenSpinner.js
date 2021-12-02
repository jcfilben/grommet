"use strict";

exports.__esModule = true;
exports["default"] = exports.Children = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Favorite = _interopRequireDefault(require("grommet-icons/es6/icons/Favorite"));

var _Nodes = _interopRequireDefault(require("grommet-icons/es6/icons/Nodes"));

var _grommet = require("grommet");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var FavoriteFilled = (0, _styledComponents["default"])(_Favorite["default"])(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  path[fill='none'] {\n    fill: red;\n  }\n"])));

var Children = function Children() {
  return /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    fill: true
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    margin: "large",
    align: "center"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    align: "center",
    direction: "row",
    gap: "small",
    pad: "small"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Spinner, {
    align: "center",
    justify: "center",
    size: "large"
  }, /*#__PURE__*/_react["default"].createElement(_Nodes["default"], {
    size: "large",
    color: "graph-0"
  })), /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, " Spinner with an icon child")), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    direction: "row",
    gap: "large",
    pad: "small"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Spinner, {
    animation: {
      type: 'pulse',
      duration: 650,
      size: 'medium'
    },
    justify: "center"
  }, /*#__PURE__*/_react["default"].createElement(FavoriteFilled, {
    color: "red",
    size: "large"
  })), /*#__PURE__*/_react["default"].createElement(_grommet.Text, {
    margin: {
      horizontal: 'small'
    }
  }, " Loading with LOVE..."))));
};

exports.Children = Children;
var _default = {
  title: 'Visualizations/Spinner/Children'
};
exports["default"] = _default;