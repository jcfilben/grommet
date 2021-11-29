var _templateObject, _templateObject2;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled, { keyframes } from 'styled-components';
import { baseStyle, edgeStyle, roundStyle } from '../../utils/styles';
import { backgroundStyle } from '../../utils/background';
import { defaultProps } from '../../default-props';

function getTransformOriginStyle(align) {
  var vertical = 'top';

  if (align.bottom) {
    vertical = 'bottom';
  }

  var horizontal = 'left';

  if (align.right) {
    horizontal = 'right';
  }

  return vertical + " " + horizontal;
}

var dropKeyFrames = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  0% {\n    opacity: 0.5;\n    transform: scale(0.8);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n"]))); // The desired margin may be adjusted depending on drops alignment

var marginStyle = function marginStyle(theme, align, data, responsive, marginProp) {
  var margin = theme.global.edgeSize[data] || data;
  var adjustedMargin = {}; // if user provides CSS string such as '50px 12px', apply that always

  var customCSS = typeof margin === 'string' && margin.split(' ').length > 1;

  if (theme.global.drop.intelligentMargin === true && !customCSS && typeof margin === 'string') {
    if (align.top === 'bottom') adjustedMargin.top = margin;else if (align.bottom === 'top') adjustedMargin.bottom = margin;
    if (align.right === 'left') adjustedMargin.left = "-" + margin;else if (align.left === 'right') adjustedMargin.left = margin;
    if (!Object.keys(adjustedMargin)) adjustedMargin = 'none';
  } else {
    return edgeStyle('margin', marginProp || theme.global.drop.margin, responsive, theme.global.edgeSize.responsiveBreakpoint, theme);
  }

  return edgeStyle('margin', adjustedMargin, responsive, theme.global.edgeSize.responsiveBreakpoint, theme);
};

var StyledDrop = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  ", "\n\n  ", "\n\n  position: fixed;\n  z-index: ", ";\n  outline: none;\n\n  ", "\n\n  ", "\n\n  opacity: 0;\n  transform-origin: ", ";\n  animation: ", " 0.1s forwards;\n  animation-delay: 0.01s;\n\n  /* IE11 hack to get drop contents to not overflow */\n  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n    display: flex;\n    align-items: stretch;\n  }\n\n  ", "\n"])), baseStyle, function (props) {
  return !props.plain && (props.round && roundStyle(props.round, true, props.theme) || "border-radius: " + props.theme.global.drop.border.radius + ";");
}, function (props) {
  return props.theme.global.drop.zIndex;
}, function (props) {
  return !props.plain && backgroundStyle(props.background || props.theme.global.drop.background, props.theme);
}, function (props) {
  return !props.plain && (props.margin || props.theme.global.drop.margin) && props.theme.global && marginStyle(props.theme, props.alignProp, props.theme.global.drop.margin, props.responsive, props.margin);
}, function (props) {
  return getTransformOriginStyle(props.alignProp);
}, dropKeyFrames, function (props) {
  return props.theme.global.drop && props.theme.global.drop.extend;
});
StyledDrop.defaultProps = {};
Object.setPrototypeOf(StyledDrop.defaultProps, defaultProps);
export { StyledDrop };