"use strict";

exports.__esModule = true;
exports["default"] = exports.CustomCarousel = void 0;

var _react = _interopRequireDefault(require("react"));

var _Attraction = _interopRequireDefault(require("grommet-icons/es6/icons/Attraction"));

var _Car = _interopRequireDefault(require("grommet-icons/es6/icons/Car"));

var _TreeOption = _interopRequireDefault(require("grommet-icons/es6/icons/TreeOption"));

var _grommet = require("grommet");

var _excluded = ["controls"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var customTheme = {
  carousel: {
    animation: {
      duration: 400
    },
    icons: {
      color: 'blue'
    },
    disabled: {
      icons: {
        color: 'grey'
      }
    }
  }
};

var CustomCarousel = function CustomCarousel(_ref) {
  var controls = _ref.controls,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement(_grommet.Grommet, {
    theme: customTheme
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Carousel, _extends({
    controls: controls
  }, rest), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
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

exports.CustomCarousel = CustomCarousel;
CustomCarousel.storyName = 'Custom controls';
var _default = {
  title: "Media/Carousel/Custom controls"
};
exports["default"] = _default;