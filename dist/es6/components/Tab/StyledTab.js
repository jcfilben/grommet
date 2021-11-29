var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';
import { genericStyles, normalizeColor } from '../../utils';
import { defaultProps } from '../../default-props';
var tabHoverStyle = css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  &:hover {\n    ", "\n    ", "\n    ", ";\n  }\n"])), function (props) {
  return props.theme.tab.hover.background && css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n        background: ", ";\n      "])), normalizeColor(props.theme.tab.hover.background, props.theme));
}, function (props) {
  return props.theme.tab.hover.color && css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n        color: ", ";\n      "])), normalizeColor(props.theme.tab.hover.color, props.theme));
}, function (props) {
  return props.theme.tab.hover.extend;
});
var StyledTab = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  ", "\n  ", "\n"])), genericStyles, function (props) {
  return !props.plain && !props.disabled && props.theme.tab.hover && tabHoverStyle;
}, function (props) {
  return props.disabled && props.theme.tab.disabled;
}, function (props) {
  return props.theme.tab.extend;
});
StyledTab.defaultProps = {};
Object.setPrototypeOf(StyledTab.defaultProps, defaultProps);
export { StyledTab };