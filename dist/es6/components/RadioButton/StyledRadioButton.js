var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';
import { focusStyle, normalizeColor } from '../../utils';
import { defaultProps } from '../../default-props';
var disabledStyle = "\n  opacity: 0.5;\n  cursor: default;\n";
var StyledRadioButtonContainer = styled.label(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  user-select: none;\n  width: fit-content;\n  ", " ", "\n\n  :hover input:not([disabled]) + div,\n  :hover input:not([disabled]) + span {\n    border-color: ", ";\n  }\n  :hover {\n    background-color: ", ";\n  }\n  // when the RadioButton has focus but there is no focusIndicator,\n  // apply the hover styling instead so that keyboard users know\n  // which RadioButton is active\n  ", "\n  ", ";\n"])), function (props) {
  return props.disabled && disabledStyle;
}, function (props) {
  return !props.disabled && 'cursor: pointer;';
}, function (props) {
  return normalizeColor(props.theme.radioButton.hover.border.color, props.theme);
}, function (props) {
  return normalizeColor(!props.disabled && props.theme.radioButton.hover && props.theme.radioButton.hover.background && props.theme.radioButton.hover.background.color, props.theme);
}, function (props) {
  return props.focus && !props.focusIndicator && "\n      input:not([disabled]) + div,\n      input:not([disabled]) + span {\n      border-color: " + normalizeColor(props.theme.radioButton.hover.border.color, props.theme) + ";\n    }\n    background-color: " + normalizeColor(!props.disabled && props.theme.radioButton.hover && props.theme.radioButton.hover.background && props.theme.radioButton.hover.background.color, props.theme) + ";\n    ";
}, function (props) {
  return props.theme.radioButton.container.extend;
});
StyledRadioButtonContainer.defaultProps = {};
Object.setPrototypeOf(StyledRadioButtonContainer.defaultProps, defaultProps);
var StyledRadioButtonInput = styled.input(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  opacity: 0;\n  -moz-appearance: none;\n  width: 0;\n  height: 0;\n  margin: 0;\n  ", ";\n"])), function (props) {
  return !props.disabled && 'cursor: pointer;';
});
StyledRadioButtonInput.defaultProps = {};
Object.setPrototypeOf(StyledRadioButtonInput.defaultProps, defaultProps);
var StyledRadioButtonLabel = styled.span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  ", "\n"])), function (props) {
  return props.theme.radioButton.font.weight && css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n      font-weight: ", ";\n    "])), props.theme.radioButton.font.weight);
});
StyledRadioButtonLabel.defaultProps = {};
Object.setPrototypeOf(StyledRadioButtonLabel.defaultProps, defaultProps);
var StyledRadioButtonIcon = styled.svg(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  width: ", ";\n  height: ", ";\n  fill: ", ";\n  ", ";\n"])), function (props) {
  return props.theme.radioButton.icon.size || props.theme.radioButton.size;
}, function (props) {
  return props.theme.radioButton.icon.size || props.theme.radioButton.size;
}, function (props) {
  return normalizeColor(props.theme.radioButton.check.color || 'control', props.theme);
}, function (props) {
  return props.theme.radioButton.icon.extend;
});
StyledRadioButtonIcon.defaultProps = {};
Object.setPrototypeOf(StyledRadioButtonIcon.defaultProps, defaultProps);
var StyledRadioButtonBox = styled.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  ", ";\n  ", ";\n"])), function (props) {
  var _props$theme$radioBut;

  return normalizeColor((_props$theme$radioBut = props.theme.radioButton.check.background) == null ? void 0 : _props$theme$radioBut.color, props.theme);
}, function (props) {
  return props.focus && focusStyle();
}, function (props) {
  return props.theme.radioButton.check.extend;
});
StyledRadioButtonBox.defaultProps = {};
Object.setPrototypeOf(StyledRadioButtonBox.defaultProps, defaultProps);
var StyledRadioButton = styled.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n  ", ";\n"])), function (props) {
  return props.theme.radioButton && props.theme.radioButton.extend;
});
StyledRadioButton.defaultProps = {};
Object.setPrototypeOf(StyledRadioButton.defaultProps, defaultProps);
export { StyledRadioButtonContainer, StyledRadioButtonInput, StyledRadioButtonLabel, StyledRadioButtonIcon, StyledRadioButtonBox, StyledRadioButton };