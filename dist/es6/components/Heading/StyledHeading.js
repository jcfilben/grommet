var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';
import { breakpointStyle, genericStyles, normalizeColor, textAlignStyle } from '../../utils';
import { defaultProps } from '../../default-props';

var sizeStyle = function sizeStyle(props) {
  // size is a combination of the level and size properties
  var size = props.size || 'medium';
  var headingTheme = props.theme.heading;
  var levelStyle = headingTheme.level[props.level];

  if (levelStyle) {
    var data = levelStyle[size];
    var styles = [css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n        font-size: ", ";\n        line-height: ", ";\n        max-width: ", ";\n        font-weight: ", ";\n      "])), data ? data.size : size, data ? data.height : 'normal', props.fillProp && 'none' || data && data.maxWidth || levelStyle.medium.maxWidth, levelStyle.font.weight || headingTheme.weight)];

    if (props.responsive && headingTheme.responsiveBreakpoint) {
      var breakpoint = props.theme.global.breakpoints[headingTheme.responsiveBreakpoint];

      if (breakpoint) {
        var responsiveData = headingTheme.level[props.level + 1] ? headingTheme.level[props.level + 1][size] : headingTheme.level[props.level][size];

        if (responsiveData) {
          styles.push(breakpointStyle(breakpoint, "\n            font-size: " + responsiveData.size + ";\n            line-height: " + responsiveData.height + ";\n            max-width: " + (props.fillProp && 'none' || responsiveData.maxWidth) + ";\n          "));
        }
      }
    }

    return styles;
  }

  console.warn("Heading level " + props.level + " is not defined in your theme.");
  return '';
};

var fontFamily = function fontFamily(props) {
  var _ref = props.theme.heading.level[props.level] || {},
      font = _ref.font;

  if (font && font.family) {
    return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n      font-family: ", ";\n    "])), font.family);
  }

  return props.theme.heading.font ? css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n        font-family: ", ";\n      "])), props.theme.heading.font.family) : '';
};

var truncateStyle = "\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n";
var colorStyle = css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  color: ", ";\n"])), function (props) {
  return normalizeColor(props.colorProp || props.theme.heading.color, props.theme);
});
var StyledHeading = styled.h1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), genericStyles, function (props) {
  return fontFamily(props);
}, function (props) {
  return sizeStyle(props);
}, function (props) {
  return props.textAlign && textAlignStyle;
}, function (props) {
  return props.truncate && truncateStyle;
}, function (props) {
  return (props.colorProp || props.theme.heading.color) && colorStyle;
}, function (props) {
  return props.theme.heading && props.theme.heading.extend;
});
StyledHeading.defaultProps = {};
Object.setPrototypeOf(StyledHeading.defaultProps, defaultProps);
export { StyledHeading };