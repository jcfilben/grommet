var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';
import { edgeStyle, focusStyle, normalizeColor } from '../../utils';
import { defaultProps } from '../../default-props'; // Note: since `fillStyle` is only used in one place, `justify-content` was
// added to it to simplify its logic. If this is ever reused somewhere else,
// consider the need of separating those once again.

var fillStyle = function fillStyle() {
  return "\n      width: 100%;\n      height: 100%;\n      max-width: none;\n      flex: 1 0 auto;\n      justify-content: space-between;\n    ";
};

var disabledStyle = "\n  opacity: 0.5;\n  cursor: default;\n";
var hoverStyle = css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  :hover input:not([disabled]) + div,\n  :hover input:not([disabled]) + span {\n    border-color: ", ";\n  }\n  :hover {\n    background-color: ", ";\n  }\n"])), function (props) {
  var _props$theme$checkBox, _props$theme$checkBox2;

  return normalizeColor((_props$theme$checkBox = props.theme.checkBox.hover) == null ? void 0 : (_props$theme$checkBox2 = _props$theme$checkBox.border) == null ? void 0 : _props$theme$checkBox2.color, props.theme);
}, function (props) {
  var _props$theme$checkBox3, _props$theme$checkBox4;

  return normalizeColor(!props.disabled && ((_props$theme$checkBox3 = props.theme.checkBox.hover) == null ? void 0 : (_props$theme$checkBox4 = _props$theme$checkBox3.background) == null ? void 0 : _props$theme$checkBox4.color), props.theme);
});
var StyledCheckBoxIcon = styled.svg(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  stroke-width: ", ";\n  stroke: ", ";\n  width: ", ";\n  height: ", ";\n  ", ";\n"])), function (props) {
  return props.theme.checkBox.check.thickness;
}, function (props) {
  return normalizeColor(props.theme.checkBox.color || 'control', props.theme);
}, function (props) {
  return props.theme.checkBox.icon.size || props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.icon.size || props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.icon.extend;
});
StyledCheckBoxIcon.defaultProps = {};
Object.setPrototypeOf(StyledCheckBoxIcon.defaultProps, defaultProps);
var StyledCheckBoxContainer = styled.label(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: row;\n  align-items: ", ";\n  user-select: none;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  // when the CheckBox has focus but there is no focusIndicator,\n  // apply the hover styling instead so that keyboard users know\n  // which CheckBox is active\n  ", "\n  ", "\n"])), function (props) {
  return typeof props.label === 'string' ? props.theme.checkBox.label.align : undefined;
}, function (props) {
  return props.fillProp ? fillStyle() : 'width: fit-content;';
}, function (props) {
  return (props.pad || props.theme.checkBox.pad) && edgeStyle('padding', props.pad || props.theme.checkBox.pad, props.responsive, props.theme.box.responsiveBreakpoint, props.theme);
}, function (props) {
  return props.disabled && disabledStyle;
}, function (props) {
  return !props.disabled && 'cursor: pointer;';
}, hoverStyle, function (props) {
  var _props$theme$checkBox5, _props$theme$checkBox6, _props$theme$checkBox7, _props$theme$checkBox8;

  return props.focus && !props.focusIndicator && "\n    input:not([disabled]) + div,\n    input:not([disabled]) + span {\n      border-color: " + normalizeColor((_props$theme$checkBox5 = props.theme.checkBox.hover) == null ? void 0 : (_props$theme$checkBox6 = _props$theme$checkBox5.border) == null ? void 0 : _props$theme$checkBox6.color, props.theme) + ";\n    }\n     \n    background-color: " + normalizeColor(!props.disabled && ((_props$theme$checkBox7 = props.theme.checkBox.hover) == null ? void 0 : (_props$theme$checkBox8 = _props$theme$checkBox7.background) == null ? void 0 : _props$theme$checkBox8.color), props.theme) + ";";
}, function (props) {
  return props.theme.checkBox.extend;
});
StyledCheckBoxContainer.defaultProps = {};
Object.setPrototypeOf(StyledCheckBoxContainer.defaultProps, defaultProps);
var StyledCheckBoxInput = styled.input(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  opacity: 0;\n  -moz-appearance: none;\n  width: 0;\n  height: 0;\n  margin: 0;\n\n  ", " :checked + span > span {\n    left: calc(\n      ", " -\n        ", "\n    );\n    background: ", ";\n  }\n"])), function (props) {
  return !props.disabled && 'cursor: pointer;';
}, function (props) {
  return props.theme.checkBox.toggle.size;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return normalizeColor(props.theme.checkBox.color || 'control', props.theme);
});
StyledCheckBoxInput.defaultProps = {};
Object.setPrototypeOf(StyledCheckBoxInput.defaultProps, defaultProps);
var StyledCheckBoxBox = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  ", ";\n  ", ";\n"])), function (props) {
  return props.focus && props.focusIndicator && focusStyle();
}, function (props) {
  return props.theme.checkBox.check.extend;
});
StyledCheckBoxBox.defaultProps = {};
Object.setPrototypeOf(StyledCheckBoxBox.defaultProps, defaultProps);
var StyledCheckBoxToggle = styled.span(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  vertical-align: middle;\n  display: inline-block;\n  width: ", ";\n  height: ", ";\n  border: ", " solid;\n  border-color: ", ";\n  border-radius: ", ";\n  background-color: ", ";\n\n  ", ";\n  ", ";\n"])), function (props) {
  return props.theme.checkBox.toggle.size;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.border.width;
}, function (props) {
  return normalizeColor(props.theme.checkBox.border.color, props.theme);
}, function (props) {
  return props.theme.checkBox.toggle.radius;
}, function (props) {
  return props.theme.checkBox.toggle.background ? normalizeColor(props.theme.checkBox.toggle.background, props.theme) : 'transparent';
}, function (props) {
  return props.focus && props.focusIndicator && focusStyle();
}, function (props) {
  return props.theme.checkBox.toggle.extend;
});
StyledCheckBoxToggle.defaultProps = {};
Object.setPrototypeOf(StyledCheckBoxToggle.defaultProps, defaultProps);
var StyledCheckBoxKnob = styled.span(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  position: relative;\n  display: inherit;\n  top: -", ";\n  left: -", ";\n  transition: all 0.3s;\n  width: ", ";\n  height: ", ";\n  background: ", ";\n  border-radius: ", ";\n  ", ";\n"])), function (props) {
  return props.theme.checkBox.border.width;
}, function (props) {
  return props.theme.checkBox.border.width;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return normalizeColor(props.theme.checkBox.toggle.color, props.theme);
}, function (props) {
  return props.theme.checkBox.toggle.radius;
}, function (props) {
  return props.theme.checkBox.toggle.knob.extend;
});
StyledCheckBoxKnob.defaultProps = {};
Object.setPrototypeOf(StyledCheckBoxKnob.defaultProps, defaultProps);
var StyledCheckBox = styled.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n  flex-shrink: 0;\n"])));
StyledCheckBox.defaultProps = {};
Object.setPrototypeOf(StyledCheckBox.defaultProps, defaultProps);
export { StyledCheckBoxIcon, StyledCheckBoxContainer, StyledCheckBoxInput, StyledCheckBoxBox, StyledCheckBoxToggle, StyledCheckBoxKnob, StyledCheckBox };