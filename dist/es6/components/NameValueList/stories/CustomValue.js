import React from 'react';
import { Box, Grommet, NameValueList, NameValuePair, Text } from 'grommet';
import { grommet } from 'grommet/themes';
import Language from "grommet-icons/es6/icons/Language";
import StatusCriticalSmall from "grommet-icons/es6/icons/StatusCriticalSmall";
import StatusGoodSmall from "grommet-icons/es6/icons/StatusGoodSmall";
import System from "grommet-icons/es6/icons/System";
import { languageData, statusData } from './data';
export var CustomValue = function CustomValue() {
  return /*#__PURE__*/React.createElement(Grommet, {
    theme: grommet
  }, /*#__PURE__*/React.createElement(Box, {
    pad: "small",
    gap: "medium"
  }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Text, {
    weight: "bold",
    size: "3xl"
  }, "Custom Value"), /*#__PURE__*/React.createElement(NameValueList, null, Object.entries(statusData).map(function (_ref) {
    var name = _ref[0],
        value = _ref[1];
    var icon;
    if (value === 'Ok') icon = /*#__PURE__*/React.createElement(StatusGoodSmall, {
      color: "green",
      size: "small"
    });else if (value === 'Critical') icon = /*#__PURE__*/React.createElement(StatusCriticalSmall, {
      color: "red",
      size: "small"
    });
    return /*#__PURE__*/React.createElement(NameValuePair, {
      key: name,
      name: name
    }, /*#__PURE__*/React.createElement(Box, {
      align: "center",
      direction: "row",
      gap: "xsmall"
    }, icon, /*#__PURE__*/React.createElement(Text, {
      color: "text-strong"
    }, value)));
  })))), /*#__PURE__*/React.createElement(Box, {
    pad: "small",
    gap: "medium"
  }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Text, {
    weight: "bold",
    size: "3xl"
  }, "Custom Mult-Line Value"), /*#__PURE__*/React.createElement(NameValueList, null, Object.entries(languageData).map(function (_ref2) {
    var name = _ref2[0],
        value = _ref2[1];
    var icon;
    if (name === 'Languages') icon = /*#__PURE__*/React.createElement(Language, {
      size: "small"
    });else if (name === 'Operating System') icon = /*#__PURE__*/React.createElement(System, {
      size: "small"
    });
    return /*#__PURE__*/React.createElement(NameValuePair, {
      key: name,
      name: name
    }, /*#__PURE__*/React.createElement(Box, {
      align: "start",
      direction: "row",
      gap: "xsmall"
    }, /*#__PURE__*/React.createElement(Box, {
      flex: false,
      margin: {
        top: 'xsmall'
      }
    }, icon), /*#__PURE__*/React.createElement(Text, {
      color: "text-strong"
    }, value)));
  })))));
};
export default {
  title: 'Visualizations/NameValueList/Custom Value'
};