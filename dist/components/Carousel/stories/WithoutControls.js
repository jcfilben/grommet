"use strict";

exports.__esModule = true;
exports["default"] = exports.NoControls = void 0;

var _react = _interopRequireDefault(require("react"));

var _Attraction = _interopRequireDefault(require("grommet-icons/es6/icons/Attraction"));

var _Car = _interopRequireDefault(require("grommet-icons/es6/icons/Car"));

var _TreeOption = _interopRequireDefault(require("grommet-icons/es6/icons/TreeOption"));

var _grommet = require("grommet");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var NoControls = function NoControls() {
  return /*#__PURE__*/_react["default"].createElement(_grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Carousel, {
    controls: false,
    play: 1500
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    pad: "xlarge",
    background: "accent-1"
  }, /*#__PURE__*/_react["default"].createElement(_Attraction["default"], {
    size: "xlarge"
  })), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    pad: "xlarge",
    background: "accent-2"
  }, /*#__PURE__*/_react["default"].createElement(_TreeOption["default"], {
    size: "xlarge"
  })), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    pad: "xlarge",
    background: "accent-3"
  }, /*#__PURE__*/_react["default"].createElement(_Car["default"], {
    size: "xlarge"
  })))));
};

exports.NoControls = NoControls;
NoControls.storyName = 'Without controls';
var _default = {
  title: 'Media/Carousel/Without controls'
};
exports["default"] = _default;