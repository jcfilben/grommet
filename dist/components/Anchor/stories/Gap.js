"use strict";

exports.__esModule = true;
exports["default"] = exports.Gap = void 0;

var _react = _interopRequireDefault(require("react"));

var _Upload = _interopRequireDefault(require("grommet-icons/es6/icons/Upload"));

var _grommet = require("grommet");

var _themes = require("grommet/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var GapAnchor = function GapAnchor() {
  return /*#__PURE__*/_react["default"].createElement(_grommet.Grommet, {
    theme: _themes.grommet
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    pad: "medium",
    gap: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Anchor, {
    icon: /*#__PURE__*/_react["default"].createElement(_Upload["default"], null),
    label: "Small Gap",
    href: "#",
    gap: "small"
  }), /*#__PURE__*/_react["default"].createElement(_grommet.Anchor, {
    icon: /*#__PURE__*/_react["default"].createElement(_Upload["default"], null),
    label: "Medium Gap",
    href: "#",
    gap: "medium"
  }), /*#__PURE__*/_react["default"].createElement(_grommet.Anchor, {
    icon: /*#__PURE__*/_react["default"].createElement(_Upload["default"], null),
    label: "Large Gap",
    href: "#",
    gap: "large"
  }), /*#__PURE__*/_react["default"].createElement(_grommet.Anchor, {
    icon: /*#__PURE__*/_react["default"].createElement(_Upload["default"], null),
    label: "5px Gap",
    href: "#",
    gap: "5px"
  })));
};

var Gap = function Gap() {
  return /*#__PURE__*/_react["default"].createElement(GapAnchor, null);
};

exports.Gap = Gap;
var _default = {
  title: 'Controls/Anchor/Gap'
};
exports["default"] = _default;