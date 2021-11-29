var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled from 'styled-components';
import { disabledStyle, getInputPadBySide, inputStyle, plainInputStyle, textAlignStyle } from '../../utils';
export var StyledMaskedInput = styled.input(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", ";\n"])), inputStyle, function (props) {
  return props.plain && plainInputStyle;
}, function (props) {
  return props.icon && (props.reverse ? "padding-right: " + props.theme.global.edgeSize.large + ";" : "padding-left: " + props.theme.global.edgeSize.large + ";");
}, function (props) {
  return props.disabled && disabledStyle(props.theme.maskedInput.disabled && props.theme.maskedInput.disabled.opacity);
}, function (props) {
  return props.textAlign && textAlignStyle;
}, function (props) {
  return props.theme.maskedInput && props.theme.maskedInput.extend;
});
export var StyledMaskedInputContainer = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  position: relative;\n  width: 100%;\n\n  ", ";\n"])), function (props) {
  return props.theme.maskedInput && props.theme.maskedInput.container && props.theme.maskedInput.container.extend;
});
export var StyledIcon = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  display: flex;\n  justify: center;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n  ", "\n"])), function (props) {
  return props.reverse ? "right: " + getInputPadBySide(props, 'right') + ";" : "left: " + getInputPadBySide(props, 'left') + ";";
});