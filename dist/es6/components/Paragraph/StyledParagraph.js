var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';
import { genericStyles, normalizeColor, textAlignStyle } from '../../utils';
import { defaultProps } from '../../default-props';
var colorStyle = css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  color: ", ";\n"])), function (props) {
  return normalizeColor(props.colorProp, props.theme);
});

var sizeStyle = function sizeStyle(props) {
  var size = props.size || 'medium';
  var data = props.theme.paragraph[size];
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n    font-size: ", ";\n    line-height: ", ";\n    max-width: ", ";\n  "])), data ? data.size : size, data ? data.height : 'normal', props.fillProp ? 'none' : data && data.maxWidth);
};

var fontFamily = css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  font-family: ", ";\n"])), function (props) {
  return props.theme.paragraph.font.family;
});
var StyledParagraph = styled.p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ", "\n"])), genericStyles, function (props) {
  return sizeStyle(props);
}, function (props) {
  return props.textAlign && textAlignStyle;
}, function (props) {
  return props.colorProp && colorStyle;
}, function (props) {
  return props.theme.paragraph.font && props.theme.paragraph.font.family && fontFamily;
}, function (props) {
  return props.theme.paragraph && props.theme.paragraph.extend;
});
StyledParagraph.defaultProps = {};
Object.setPrototypeOf(StyledParagraph.defaultProps, defaultProps);
export { StyledParagraph };