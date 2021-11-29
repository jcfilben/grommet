var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';
import { genericStyles } from '../../utils';
import { defaultProps } from '../../default-props';
var fillStyle = css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  flex-grow: 1;\n  display: flex;\n"])), function (props) {
  return props.fillContainer === true || props.fillContainer === 'horizontal' ? "\n        width: 100%;\n        max-width: none;\n      " : '';
}, function (props) {
  return props.fillContainer === true || props.fillContainer === 'vertical' ? 'height: 100%;' : '';
});
var StyledStack = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  position: relative;\n  ", "\n  ", "\n  ", "\n"])), genericStyles, function (props) {
  return props.fillContainer && fillStyle;
}, function (props) {
  return props.theme.stack && props.theme.stack.extend;
});
StyledStack.defaultProps = {};
Object.setPrototypeOf(StyledStack.defaultProps, defaultProps);
var styleMap = {
  fill: "\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  ",
  center: "\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  ",
  left: "\n    top: 50%;\n    left: 0;\n    transform: translateY(-50%);\n  ",
  right: "\n    top: 50%;\n    right: 0;\n    transform: translateY(-50%);\n  ",
  top: "\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n  ",
  bottom: "\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n  ",
  'top-left': "\n    top: 0;\n    left: 0;\n  ",
  'bottom-left': "\n    bottom: 0;\n    left: 0;\n  ",
  'top-right': "\n    top: 0;\n    right: 0;\n  ",
  'bottom-right': "\n    bottom: 0;\n    right: 0;\n  "
};
var StyledStackLayer = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  position: ", ";\n  ", "\n  ", "\n  ", "\n  ", "\n"])), function (props) {
  return props.guiding ? 'relative' : 'absolute';
}, function (props) {
  return props.guiding && 'display: block;';
}, function (props) {
  return !props.guiding && styleMap[props.anchor || 'fill'] + ";";
}, function (props) {
  return props.fillContainer && "\n    width: 100%;\n    height: 100%;\n  ";
}, function (props) {
  return !props.interactive && "pointer-events: none;";
});
StyledStackLayer.defaultProps = {};
Object.setPrototypeOf(StyledStackLayer.defaultProps, defaultProps);
export { StyledStack, StyledStackLayer };