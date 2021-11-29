var _excluded = ["children", "searching"];

var _templateObject, _templateObject2;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import { css } from 'styled-components';
import React, { useState } from 'react';
import { Box } from '../../..';
import { ThemeContext } from '../../../../contexts';
import { normalizeColor } from '../../../../utils';
var searchingStyle = css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  position: relative;\n  outline: none;\n  box-shadow: none;\n\n  &:before {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 2px;\n    background: ", ";\n  }\n\n  &:after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 2px;\n    will-change: left, right;\n    background: ", ";\n    animation: progress 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n    transform: translateX(-50%) scaleX(0);\n  }\n\n  @keyframes progress {\n    0% {\n      transform: translateX(-50%) scaleX(0);\n    }\n    50% {\n      transform: translateX(12.5%) scaleX(0.75);\n    }\n    100% {\n      transform: translateX(50%) scaleX(0);\n    }\n  }\n"])), function (props) {
  return normalizeColor('light-2', props.theme);
}, function (props) {
  return normalizeColor('brand', props.theme);
});
var defaultStyle = css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  position: relative;\n  outline: none;\n\n  &:after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    width: 0;\n    height: 2px;\n    background: transparent;\n    transition: width 0.2s ease, background 0.2s ease, left 0.2s ease;\n  }\n\n  ", ";\n"])), function (props) {
  return props.focus && "\n    box-shadow: none;\n    &:after {\n      left: 0;\n      width: 100%;\n      background: " + normalizeColor('brand', props.theme) + ";\n    }\n  ";
});
export var SearchBorderBox = function SearchBorderBox(_ref) {
  var children = _ref.children,
      searching = _ref.searching,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useState = useState(false),
      focus = _useState[0],
      setFocus = _useState[1];

  var boxBorderTheme = {
    box: {
      extend: searching ? searchingStyle : defaultStyle
    }
  };
  return /*#__PURE__*/React.createElement(ThemeContext.Extend, {
    value: boxBorderTheme
  }, /*#__PURE__*/React.createElement(Box, _extends({
    focus: focus,
    searching: searching,
    onFocus: function onFocus() {
      return setFocus(true);
    },
    onBlur: function onBlur() {
      return setFocus(false);
    }
  }, rest), children));
};