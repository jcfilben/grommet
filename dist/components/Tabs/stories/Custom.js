"use strict";

exports.__esModule = true;
exports["default"] = exports.Custom = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("styled-components");

var _grommetIcons = require("grommet-icons");

var _grommet = require("grommet");

var _themes = require("grommet/themes");

var _utils = require("grommet/utils");

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var RichTabTitle = function RichTabTitle(_ref) {
  var icon = _ref.icon,
      label = _ref.label;
  return /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    direction: "row",
    align: "center",
    gap: "xsmall",
    margin: "xsmall"
  }, icon, /*#__PURE__*/_react["default"].createElement(_grommet.Text, {
    size: "small"
  }, /*#__PURE__*/_react["default"].createElement("strong", null, label)));
};

var customTheme = (0, _utils.deepMerge)(_themes.grommet, {
  global: {
    edgeSize: {
      small: '10px'
    },
    elevation: {
      light: {
        small: '0px 1px 5px rgba(0, 0, 0, 0.50)',
        medium: '0px 3px 8px rgba(0, 0, 0, 0.50)'
      }
    }
  },
  tab: {
    active: {
      background: 'dark-1',
      color: 'accent-1'
    },
    background: 'dark-3',
    border: undefined,
    color: 'white',
    hover: {
      background: 'dark-1'
    },
    margin: undefined,
    pad: {
      bottom: undefined,
      horizontal: 'small'
    },
    extend: function extend(_ref2) {
      var theme = _ref2.theme;
      return (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n      border-radius: 4px;\n      /* or 'border-radius: ", "' */\n      box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.5);\n      /* or 'box-shadow: ", "' */\n    "])), theme.global.control.border.radius, theme.global.elevation.light.small);
    }
  },
  tabs: {
    background: 'dark-3',
    gap: 'medium',
    header: {
      background: 'dark-2',
      extend: function extend(_ref3) {
        var theme = _ref3.theme;
        return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n      padding: 10px;\n      /* or 'padding: ", "' */\n      box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.50);\n      /* or 'box-shadow: ", "' */\n    "])), theme.global.edgeSize.small, theme.global.elevation.light.medium);
      }
    },
    panel: {
      extend: function extend(_ref4) {
        var theme = _ref4.theme;
        return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n      padding: 48px;\n      /* or 'padding: ", "' */\n      box-shadow:  0px 3px 8px rgba(0, 0, 0, 0.50);\n       /* or 'box-shadow: ", "' */\n    "])), theme.global.edgeSize.large, theme.global.elevation.light.medium);
      }
    }
  }
});

var CustomTabs = function CustomTabs() {
  return /*#__PURE__*/_react["default"].createElement(_grommet.Grommet, {
    theme: customTheme
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Tabs, null, /*#__PURE__*/_react["default"].createElement(_grommet.Tab, {
    title: /*#__PURE__*/_react["default"].createElement(RichTabTitle, {
      icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.CircleInformation, {
        color: "accent-1"
      }),
      label: "Personal Data"
    })
  }, /*#__PURE__*/_react["default"].createElement(_grommet.FormField, {
    label: "Name"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.TextInput, {
    placeholder: "Enter your name..."
  }))), /*#__PURE__*/_react["default"].createElement(_grommet.Tab, {
    title: /*#__PURE__*/_react["default"].createElement(RichTabTitle, {
      icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Currency, {
        color: "light-3"
      }),
      label: "Payment"
    })
  }, /*#__PURE__*/_react["default"].createElement(_grommet.FormField, {
    label: "Card Number"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.TextInput, {
    placeholder: "Enter your card number..."
  }))), /*#__PURE__*/_react["default"].createElement(_grommet.Tab, {
    title: "Simple Tab"
  }, "This Tab has a different styling than the RichTabTitle (e.g tab.active.color)")));
};

var Custom = function Custom() {
  return /*#__PURE__*/_react["default"].createElement(CustomTabs, null);
};

exports.Custom = Custom;
var _default = {
  title: 'Controls/Tabs/Custom'
};
exports["default"] = _default;