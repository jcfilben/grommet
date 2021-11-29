"use strict";

exports.__esModule = true;
exports["default"] = exports.Icon = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("styled-components");

var _grommetIcons = require("grommet-icons");

var _grommet = require("grommet");

var _themes = require("grommet/themes");

var _utils = require("grommet/utils");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var customTheme = (0, _utils.deepMerge)(_themes.grommet, {
  tab: {
    color: 'text',
    active: {
      background: 'background-back'
    },
    hover: {
      background: 'background-back',
      color: 'control'
    },
    border: {
      side: 'bottom',
      color: 'background-back',
      active: {
        color: 'border'
      },
      hover: {
        color: 'control'
      }
    },
    pad: 'small',
    margin: 'none',
    extend: function extend(_ref) {
      var theme = _ref.theme;
      return (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n      border-top-left-radius: '4px';\n        /* or 'border-top-left-radius: ", "' */\n      border-top-right-radius: '4px';\n      /* or 'border-top-right-radius: ", " */\n      font-weight: bold;\n    "])), theme.global.control.border.radius, theme.global.control.border.radius);
    }
  }
});

var IconTabs = function IconTabs() {
  return /*#__PURE__*/_react["default"].createElement(_grommet.Grommet, {
    theme: customTheme,
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    pad: "medium",
    fill: true
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Tabs, {
    flex: true
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Tab, {
    title: "Tab 1",
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Attraction, null)
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    fill: true,
    pad: "large",
    align: "center",
    background: "accent-1"
  }, /*#__PURE__*/_react["default"].createElement(_grommetIcons.Attraction, {
    size: "xlarge"
  }))), /*#__PURE__*/_react["default"].createElement(_grommet.Tab, {
    title: "Tab 2",
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.TreeOption, null)
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    fill: true,
    pad: "large",
    align: "center",
    background: "accent-2"
  }, /*#__PURE__*/_react["default"].createElement(_grommetIcons.TreeOption, {
    size: "xlarge"
  }))), /*#__PURE__*/_react["default"].createElement(_grommet.Tab, {
    title: "Tab 3",
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Car, null)
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    fill: true,
    pad: "large",
    align: "center",
    background: "accent-3"
  }, /*#__PURE__*/_react["default"].createElement(_grommetIcons.Car, {
    size: "xlarge"
  }))))));
};

var Icon = function Icon() {
  return /*#__PURE__*/_react["default"].createElement(IconTabs, null);
};

exports.Icon = Icon;
var _default = {
  title: 'Controls/Tabs/Icon'
};
exports["default"] = _default;