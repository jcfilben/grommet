var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';
import { disabledStyle, getInputPadBySide, inputStyle, parseMetricToNum, plainInputStyle, textAlignStyle } from '../../utils';
import { defaultProps } from '../../default-props';

var getPlainStyle = function getPlainStyle(plain) {
  if (plain === 'full') {
    return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n      ", " padding: 0;\n    "])), plainInputStyle);
  }

  return plain && plainInputStyle;
};

var StyledTextInput = styled.input(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", ";\n"])), inputStyle, function (props) {
  return getPlainStyle(props.plain);
}, function (props) {
  return props.icon && (props.reverse ? "padding-right: " + props.theme.global.edgeSize.large + ";" : "padding-left: " + props.theme.global.edgeSize.large + ";");
}, function (props) {
  return props.disabled && disabledStyle(props.theme.textInput.disabled && props.theme.textInput.disabled.opacity);
}, function (props) {
  return props.textAlign && textAlignStyle;
}, function (props) {
  return props.theme.textInput && props.theme.textInput.extend;
});
StyledTextInput.defaultProps = {};
Object.setPrototypeOf(StyledTextInput.defaultProps, defaultProps);
var StyledTextInputContainer = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  position: relative;\n  width: 100%;\n\n  ", ";\n"])), function (props) {
  return props.theme.textInput && props.theme.textInput.container && props.theme.textInput.container.extend;
});
StyledTextInputContainer.defaultProps = {};
Object.setPrototypeOf(StyledTextInputContainer.defaultProps, defaultProps);
var StyledPlaceholder = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  left: ", "px;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  justify-content: center;\n  pointer-events: none;\n\n  ", ";\n"])), function (props) {
  return parseMetricToNum(getInputPadBySide(props, 'left')) - parseMetricToNum(props.theme.global.control.border.width);
}, function (props) {
  return props.theme.textInput && props.theme.textInput.placeholder && props.theme.textInput.placeholder.extend;
});
StyledPlaceholder.defaultProps = {};
Object.setPrototypeOf(StyledPlaceholder.defaultProps, defaultProps);
var StyledIcon = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  display: flex;\n  justify: center;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n  ", "\n"])), function (props) {
  return props.reverse ? "right: " + getInputPadBySide(props, 'right') + ";" : "left: " + getInputPadBySide(props, 'left') + ";";
});
var StyledSuggestions = styled.ol(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n\n  ", ";\n"])), function (props) {
  return props.theme.textInput && props.theme.textInput.suggestions && props.theme.textInput.suggestions.extend;
});
StyledSuggestions.defaultProps = {};
Object.setPrototypeOf(StyledSuggestions.defaultProps, defaultProps);
export { StyledTextInput, StyledTextInputContainer, StyledPlaceholder, StyledIcon, StyledSuggestions };