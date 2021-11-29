var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';
import { genericStyles, normalizeColor, textAlignStyle } from '../../utils';
import { defaultProps } from '../../default-props';

var sizeStyle = function sizeStyle(props) {
  var size = props.size || 'medium';
  var data = props.theme.text[size];

  if (data) {
    return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n      font-size: ", ";\n      line-height: ", ";\n    "])), data.size, data.height);
  }

  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n    font-size: ", ";\n    line-height: normal;\n  "])), size);
};

var truncateStyle = "\n  white-space: nowrap;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n";
var colorStyle = css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  color: ", ";\n"])), function (props) {
  return normalizeColor(props.colorProp, props.theme);
});
var weightStyle = css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  font-weight: ", ";\n"])), function (props) {
  return props.weight;
});
var wordBreakStyle = css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  word-break: ", ";\n"])), function (props) {
  return props.wordBreak;
});
var fontFamily = css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n  font-family: ", ";\n"])), function (props) {
  return props.theme.text.font.family;
});
var StyledText = styled('span').withConfig({
  shouldForwardProp: function shouldForwardProp(prop, defaultValidatorFn) {
    return defaultValidatorFn(prop) && prop !== 'size';
  }
})(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ", "\n"])), genericStyles, function (props) {
  return sizeStyle(props);
}, function (props) {
  return props.textAlign && textAlignStyle;
}, function (props) {
  return props.truncate && truncateStyle;
}, function (props) {
  return props.colorProp && colorStyle;
}, function (props) {
  return props.weight && weightStyle;
}, function (props) {
  return props.wordBreak && wordBreakStyle;
}, function (props) {
  return props.theme.text.font && props.theme.text.font.family && fontFamily;
}, function (props) {
  return props.theme.text && props.theme.text.extend;
});
StyledText.defaultProps = {};
Object.setPrototypeOf(StyledText.defaultProps, defaultProps);
export { StyledText };