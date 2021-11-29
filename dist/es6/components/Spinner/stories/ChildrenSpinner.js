var _templateObject;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import React from 'react';
import styled from 'styled-components';
import { Favorite, Nodes } from 'grommet-icons';
import { Box, Spinner, Text } from 'grommet';
var FavoriteFilled = styled(Favorite)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  path[fill='none'] {\n    fill: red;\n  }\n"])));
export var Children = function Children() {
  return /*#__PURE__*/React.createElement(Box, {
    fill: true
  }, /*#__PURE__*/React.createElement(Box, {
    margin: "large",
    align: "center"
  }, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    direction: "row",
    gap: "small",
    pad: "small"
  }, /*#__PURE__*/React.createElement(Spinner, {
    align: "center",
    justify: "center",
    size: "large"
  }, /*#__PURE__*/React.createElement(Nodes, {
    size: "large",
    color: "graph-0"
  })), /*#__PURE__*/React.createElement(Text, null, " Spinner with an icon child")), /*#__PURE__*/React.createElement(Box, {
    direction: "row",
    gap: "large",
    pad: "small"
  }, /*#__PURE__*/React.createElement(Spinner, {
    animation: {
      type: 'pulse',
      duration: 650,
      size: 'medium'
    },
    justify: "center"
  }, /*#__PURE__*/React.createElement(FavoriteFilled, {
    color: "red",
    size: "large"
  })), /*#__PURE__*/React.createElement(Text, {
    margin: {
      horizontal: 'small'
    }
  }, " Loading with LOVE..."))));
};
export default {
  title: 'Visualizations/Spinner/Children'
};