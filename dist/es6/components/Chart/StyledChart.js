var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled, { css, keyframes } from 'styled-components';
import { genericStyles } from '../../utils';
import { defaultProps } from '../../default-props';

var animateStyle = function animateStyle(_ref) {
  var theme = _ref.theme,
      typeProp = _ref.typeProp;
  var animateBounds;
  if (typeProp === 'line') // 200% allows the line to be squiggly
    animateBounds = ['stroke-dashoffset: 200%;', 'stroke-dashoffset: 0%;'];else if (typeProp === 'point') animateBounds = ['opacity: 0;', 'opacity: 1;'];else animateBounds = ['transform: scaleY(0);', 'transform: scaleY(1);'];
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n    ", "\n    animation:\n    ", "\n    ", "\n    forwards;\n    ", "\n  "])), typeProp === 'line' && 'stroke-dasharray: 200%;', keyframes(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["from { ", " } to { ", " }"])), animateBounds[0], animateBounds[1]), theme.global.animation.duration, (typeProp === 'bar' || typeProp === 'area') && 'transform-origin: center bottom 0;');
};

var StyledChart = styled.svg(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  display: block;\n  max-width: 100%;\n  overflow: visible;\n\n  ", "\n  ", "\n  ", ";\n"])), genericStyles, function (props) {
  return props.animate && animateStyle(props);
}, function (props) {
  return props.theme.chart && props.theme.chart.extend;
});
StyledChart.defaultProps = {};
Object.setPrototypeOf(StyledChart.defaultProps, defaultProps);
export { StyledChart };