var _templateObject, _templateObject2;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';
import { fillStyle, genericStyles } from '../../utils';
import { defaultProps } from '../../default-props';
var FIT_MAP = {
  cover: 'cover',
  contain: 'contain'
};
var fitStyle = css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  flex: 1 1;\n  overflow: hidden;\n  object-fit: ", ";\n"])), function (props) {
  return FIT_MAP[props.fit];
});
var StyledImage = styled.img(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n    "])), genericStyles, function (props) {
  return props.fit && fitStyle;
}, function (props) {
  return props.fillProp && fillStyle(props.fillProp);
}, function (props) {
  return props.theme.image && props.theme.image.extend;
}, function (props) {
  return props.opacityProp && "opacity: " + (props.opacityProp === true ? props.theme.global.opacity.medium : props.theme.global.opacity[props.opacityProp] || props.opacityProp) + ";\n  ";
});
StyledImage.defaultProps = {};
Object.setPrototypeOf(StyledImage.defaultProps, defaultProps);
export { StyledImage };