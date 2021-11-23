import React from 'react';
import { Attraction, Car, TreeOption } from 'grommet-icons';
import { Grommet, Box, Carousel } from 'grommet';
export var Simple = function Simple() {
  return /*#__PURE__*/React.createElement(Grommet, null, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/React.createElement(Carousel, null, /*#__PURE__*/React.createElement(Box, {
    pad: "xlarge",
    background: "accent-1"
  }, /*#__PURE__*/React.createElement(Attraction, {
    size: "xlarge"
  })), /*#__PURE__*/React.createElement(Box, {
    pad: "xlarge",
    background: "accent-2"
  }, /*#__PURE__*/React.createElement(TreeOption, {
    size: "xlarge"
  })), /*#__PURE__*/React.createElement(Box, {
    pad: "xlarge",
    background: "accent-3"
  }, /*#__PURE__*/React.createElement(Car, {
    size: "xlarge"
  })))));
};
Simple.parameters = {
  chromatic: {
    disable: true
  }
};
export default {
  title: 'Media/Carousel/Simple'
};