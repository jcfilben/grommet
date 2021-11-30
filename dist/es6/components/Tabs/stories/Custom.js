var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import React from 'react';
import { css } from 'styled-components';
import CircleInformation from "grommet-icons/es6/icons/CircleInformation";
import Currency from "grommet-icons/es6/icons/Currency";
import { Box, Grommet, FormField, Tab, Tabs, Text, TextInput } from 'grommet';
import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';

var RichTabTitle = function RichTabTitle(_ref) {
  var icon = _ref.icon,
      label = _ref.label;
  return /*#__PURE__*/React.createElement(Box, {
    direction: "row",
    align: "center",
    gap: "xsmall",
    margin: "xsmall"
  }, icon, /*#__PURE__*/React.createElement(Text, {
    size: "small"
  }, /*#__PURE__*/React.createElement("strong", null, label)));
};

var customTheme = deepMerge(grommet, {
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
      return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n      border-radius: 4px;\n      /* or 'border-radius: ", "' */\n      box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.5);\n      /* or 'box-shadow: ", "' */\n    "])), theme.global.control.border.radius, theme.global.elevation.light.small);
    }
  },
  tabs: {
    background: 'dark-3',
    gap: 'medium',
    header: {
      background: 'dark-2',
      extend: function extend(_ref3) {
        var theme = _ref3.theme;
        return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n      padding: 10px;\n      /* or 'padding: ", "' */\n      box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.50);\n      /* or 'box-shadow: ", "' */\n    "])), theme.global.edgeSize.small, theme.global.elevation.light.medium);
      }
    },
    panel: {
      extend: function extend(_ref4) {
        var theme = _ref4.theme;
        return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n      padding: 48px;\n      /* or 'padding: ", "' */\n      box-shadow:  0px 3px 8px rgba(0, 0, 0, 0.50);\n       /* or 'box-shadow: ", "' */\n    "])), theme.global.edgeSize.large, theme.global.elevation.light.medium);
      }
    }
  }
});

var CustomTabs = function CustomTabs() {
  return /*#__PURE__*/React.createElement(Grommet, {
    theme: customTheme
  }, /*#__PURE__*/React.createElement(Tabs, null, /*#__PURE__*/React.createElement(Tab, {
    title: /*#__PURE__*/React.createElement(RichTabTitle, {
      icon: /*#__PURE__*/React.createElement(CircleInformation, {
        color: "accent-1"
      }),
      label: "Personal Data"
    })
  }, /*#__PURE__*/React.createElement(FormField, {
    label: "Name"
  }, /*#__PURE__*/React.createElement(TextInput, {
    placeholder: "Enter your name..."
  }))), /*#__PURE__*/React.createElement(Tab, {
    title: /*#__PURE__*/React.createElement(RichTabTitle, {
      icon: /*#__PURE__*/React.createElement(Currency, {
        color: "light-3"
      }),
      label: "Payment"
    })
  }, /*#__PURE__*/React.createElement(FormField, {
    label: "Card Number"
  }, /*#__PURE__*/React.createElement(TextInput, {
    placeholder: "Enter your card number..."
  }))), /*#__PURE__*/React.createElement(Tab, {
    title: "Simple Tab"
  }, "This Tab has a different styling than the RichTabTitle (e.g tab.active.color)")));
};

export var Custom = function Custom() {
  return /*#__PURE__*/React.createElement(CustomTabs, null);
};
export default {
  title: 'Controls/Tabs/Custom'
};