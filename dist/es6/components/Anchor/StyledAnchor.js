var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';
import { focusStyle, genericStyles, normalizeColor } from '../../utils';
import { defaultProps } from '../../default-props';
var disabledStyle = "\n  opacity: 0.3;\n  cursor: default;\n  text-decoration: none;\n";

var sizeStyle = function sizeStyle(props) {
  if (props.size) {
    var size = props.size || 'medium';
    var data = props.theme.text[size];
    return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n      font-size: ", ";\n      line-height: ", ";\n    "])), data ? data.size : size, data ? data.height : 'normal');
  }

  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n    font-size: inherit;\n    line-height: inherit;\n  "])));
};

var StyledAnchor = styled.a.withConfig({
  // prevent custom props from bleeding into DOM
  // https://styled-components.com/docs/api#shouldforwardprop
  shouldForwardProp: function shouldForwardProp(prop, defaultValidatorFn) {
    return !['as', 'colorProp', 'focus', 'hasIcon', 'hasLabel', 'reverse'].includes(prop) && defaultValidatorFn(prop);
  }
})(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  ", "\n  color: ", ";\n  ", "\n  text-decoration: ", ";\n  cursor: pointer;\n  ", "\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), function (props) {
  return sizeStyle(props);
}, function (props) {
  return normalizeColor(props.colorProp || props.theme.anchor.color, props.theme);
}, function (props) {
  return props.weight ? "font-weight: " + props.weight + ";" : props.theme.anchor.fontWeight && "font-weight: " + props.theme.anchor.fontWeight + ";";
}, function (props) {
  return props.hasIcon ? 'none' : props.theme.anchor.textDecoration;
}, genericStyles, function (props) {
  return !props.disabled && props.theme.anchor.hover && css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n      &:hover {\n        ", "\n        ", "\n      ", "\n      }\n    "])), props.theme.anchor.hover.textDecoration && "text-decoration: " + props.theme.anchor.hover.textDecoration + ";", props.theme.anchor.hover.fontWeight && "font-weight: " + props.theme.anchor.hover.fontWeight + ";", props.theme.anchor.hover.extend);
}, function (props) {
  return props.hasIcon && !props.hasLabel && "\n    padding: " + props.theme.global.edgeSize.small + ";\n  ";
}, function (props) {
  return props.disabled && disabledStyle;
}, function (props) {
  return props.focus && focusStyle();
}, function (props) {
  return props.theme.anchor.extend;
});
StyledAnchor.defaultProps = {};
Object.setPrototypeOf(StyledAnchor.defaultProps, defaultProps);
export { StyledAnchor };