import React from 'react';
import PropTypes from 'prop-types';
import { Attraction, Car, TreeOption } from 'grommet-icons';
import { Box, Grommet, Tab, Tabs } from 'grommet';
import { grommet } from 'grommet/themes';

var UncontrolledTabs = function UncontrolledTabs(_ref) {
  var _ref$plain = _ref.plain,
      plain = _ref$plain === void 0 ? false : _ref$plain;
  return /*#__PURE__*/React.createElement(Grommet, {
    theme: grommet,
    full: true
  }, /*#__PURE__*/React.createElement(Box, {
    fill: true
  }, /*#__PURE__*/React.createElement(Tabs, {
    flex: true
  }, /*#__PURE__*/React.createElement(Tab, {
    plain: plain,
    title: "Tab 1"
  }, /*#__PURE__*/React.createElement(Box, {
    fill: true,
    pad: "large",
    align: "center",
    background: "accent-1"
  }, /*#__PURE__*/React.createElement(Attraction, {
    size: "xlarge"
  }))), /*#__PURE__*/React.createElement(Tab, {
    plain: plain,
    title: "Tab 2"
  }, /*#__PURE__*/React.createElement(Box, {
    fill: true,
    pad: "large",
    align: "center",
    background: "accent-2"
  }, /*#__PURE__*/React.createElement(TreeOption, {
    size: "xlarge"
  }))), /*#__PURE__*/React.createElement(Tab, {
    plain: plain,
    title: "Tab 3"
  }, /*#__PURE__*/React.createElement(Box, {
    fill: true,
    pad: "large",
    align: "center",
    background: "accent-3"
  }, /*#__PURE__*/React.createElement(Car, {
    size: "xlarge"
  }))))));
};

UncontrolledTabs.propTypes = {
  plain: PropTypes.bool // eslint-disable-line react/require-default-props

};
export var Plain = function Plain() {
  return /*#__PURE__*/React.createElement(UncontrolledTabs, {
    plain: true
  });
};
export default {
  title: 'Controls/Tabs/Plain'
};