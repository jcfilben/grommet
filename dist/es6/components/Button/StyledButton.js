var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';
import { activeStyle, backgroundStyle, disabledStyle, focusStyle, unfocusStyle, genericStyles, getHoverIndicatorStyle, normalizeColor } from '../../utils';
import { defaultProps } from '../../default-props';

var radiusStyle = function radiusStyle(props) {
  // border.radius shouldn't impact an only-icon rendering.
  var isIconOnly = props.hasIcon && !props.hasLabel;
  var size = props.sizeProp;

  if (!isIconOnly && size && props.theme.button.size && props.theme.button.size[size]) {
    return props.theme.button.size[size].border.radius;
  }

  return props.theme.button.border.radius;
};

var fontStyle = function fontStyle(props) {
  var size = props.sizeProp || 'medium';
  var data = props.theme.text[size];
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n    font-size: ", ";\n    line-height: ", ";\n  "])), data.size, data.height);
};

var padStyle = function padStyle(props) {
  var size = props.sizeProp;

  if (size && props.theme.button.size && props.theme.button.size[size]) {
    return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n      ", "\n      ", "\n    "])), props.theme.button.size[size].pad.vertical, props.theme.button.size[size].pad.horizontal);
  }

  return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n    ", "\n    ", "\n  "])), props.theme.button.padding.vertical, props.theme.button.padding.horizontal);
};

var basicStyle = function basicStyle(props) {
  return css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  border: ", " solid\n    ", ";\n  border-radius: ", ";\n  color: ", ";\n  padding: ", ";\n  ", "\n"])), props.theme.button.border.width, normalizeColor(props.colorValue || props.theme.button.border.color || 'control', props.theme), radiusStyle(props), normalizeColor(props.theme.button.color || 'text', props.theme), padStyle(props), fontStyle(props));
};

var primaryStyle = function primaryStyle(props) {
  return css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  ", "\n  border-radius: ", ";\n  ", "\n"])), backgroundStyle(normalizeColor(props.colorValue || props.theme.button.primary && props.theme.button.primary.color || 'control', props.theme), props.theme, props.theme.button.color), radiusStyle(props), props.theme.button.primary && props.theme.button.primary.extend);
};

function getHoverColor(props) {
  if (props.colorValue) {
    return normalizeColor(props.colorValue, props.theme);
  }

  if (props.active && props.primary && props.theme.button.primary && props.theme.button.primary.active && props.theme.button.primary.active.border && props.theme.button.primary.active.border.color) {
    return normalizeColor(props.theme.button.primary.active.border.color, props.theme);
  }

  return normalizeColor(props.theme.button.border.color || 'control', props.theme);
}

var hoverStyle = css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n  &:hover {\n    ", " ", ";\n  }\n"])), function (props) {
  return props.hoverIndicator && getHoverIndicatorStyle(props.hoverIndicator, props.theme);
}, function (props) {
  return !props.plain && css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n        box-shadow: 0px 0px 0px 2px ", ";\n      "])), getHoverColor(props));
});

var fillStyle = function fillStyle(fillContainer) {
  if (fillContainer === 'horizontal') {
    return 'width: 100%;';
  }

  if (fillContainer === 'vertical') {
    return 'height: 100%;';
  }

  if (fillContainer) {
    return "\n      width: 100%;\n      height: 100%;\n      max-width: none;\n      flex: 1 0 auto;\n    ";
  }

  return undefined;
};

var plainStyle = function plainStyle(props) {
  return css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  outline: none;\n  border: none;\n  padding: 0;\n  text-align: inherit;\n"])), normalizeColor(props.colorValue || 'inherit', props.theme));
};

var activeButtonStyle = function activeButtonStyle(props) {
  return css(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  ", "\n"])), activeStyle, props.primary && props.theme.button.primary && props.theme.button.primary.active && props.theme.button.primary.active.border && props.theme.button.primary.active.border.color && "border: " + props.theme.button.border.width + " solid\n    " + normalizeColor(props.theme.button.primary.active.border.color, props.theme) + ";\n    ", props.primary && props.theme.button.primary && props.theme.button.primary.active && props.theme.button.primary.active.extend);
};

var disabledButtonStyle = function disabledButtonStyle(props) {
  return css(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  ", "\n  ", "\n"])), disabledStyle(props.theme.button.disabled.opacity), !props.plain && props.theme.button.disabled.border && props.theme.button.disabled.border.color && "border: " + props.theme.button.border.width + " solid\n    " + normalizeColor(props.theme.button.disabled.border.color, props.theme) + ";", props.theme.button.disabled.color && (props.primary ? backgroundStyle(normalizeColor(props.theme.button.disabled.color, props.theme), props.theme, props.theme.button.color) : "color: " + normalizeColor(props.theme.button.disabled.color, props.theme) + ";"), props.theme.button.disabled && props.theme.button.disabled.extend);
}; // Deprecate props.theme.button.disabled.opacity in V3


var StyledButton = styled.button(_templateObject11 || (_templateObject11 = _taggedTemplateLiteralLoose(["\n  display: inline-block;\n  box-sizing: border-box;\n  cursor: pointer;\n  font: inherit;\n  text-decoration: none;\n  margin: 0;\n  background: transparent;\n  overflow: visible;\n  text-transform: none;\n\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ", "\n\n  ", "\n  ", "\n\n  &:focus {\n    ", "\n  }\n\n  &:focus:not(:focus-visible) {\n    ", "\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), genericStyles, function (props) {
  return props.plain && plainStyle(props);
}, function (props) {
  return !props.plain && basicStyle(props);
}, function (props) {
  return props.primary && primaryStyle(props);
}, function (props) {
  return !props.disabled && !props.selected && !props.focus && hoverStyle;
}, function (props) {
  return !props.disabled && props.active && activeButtonStyle(props);
}, function (props) {
  return props.disabled && props.theme.button && props.theme.button.disabled && disabledButtonStyle(props);
}, function (props) {
  return (!props.plain || props.focusIndicator) && focusStyle();
}, unfocusStyle(), function (props) {
  return !props.plain && props.theme.button.transition && "\n    transition-property: " + props.theme.button.transition.properties.join(',') + ";\n    transition-duration: " + props.theme.button.transition.duration + "s;\n    transition-timing-function: " + props.theme.button.transition.timing + ";\n  ";
}, function (props) {
  return props.fillContainer && fillStyle(props.fillContainer);
}, function (props) {
  return props.hasIcon && !props.hasLabel && "\n    line-height: 0;\n  ";
}, function (props) {
  return props.pad && props.hasIcon && !props.hasLabel && "\n    padding: " + props.theme.global.edgeSize.small + ";\n  ";
}, function (props) {
  return props.theme.button && props.theme.button.extend;
});
StyledButton.defaultProps = {};
Object.setPrototypeOf(StyledButton.defaultProps, defaultProps);
export { StyledButton };