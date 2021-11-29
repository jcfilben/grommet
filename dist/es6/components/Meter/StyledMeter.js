var _templateObject, _templateObject2;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';
import { genericStyles } from '../../utils';
import { defaultProps } from '../../default-props';
var roundStyle = css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  border-radius: ", ";\n"])), function (props) {
  return props.theme.global.edgeSize[props.round.size];
}); // overflow: hidden is needed for ie11

var StyledMeter = styled.svg(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  max-width: 100%;\n  overflow: hidden;\n\n  ", " ", "\n\n  path {\n    transition: stroke 0.3s, stroke-width 0.3s;\n  }\n\n  ", ";\n"])), genericStyles, function (props) {
  return props.round && roundStyle;
}, function (props) {
  return props.theme.meter && props.theme.meter.extend;
});
StyledMeter.defaultProps = {};
Object.setPrototypeOf(StyledMeter.defaultProps, defaultProps);
export { StyledMeter };