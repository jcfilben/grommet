var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';
import { activeStyle, disabledStyle, focusStyle, unfocusStyle, genericStyles, kindPartStyles, parseMetricToNum } from '../../utils';
import { defaultProps } from '../../default-props';

var radiusStyle = function radiusStyle(props) {
  var size = props.sizeProp; // caller has specified a themeObj to use for styling
  // relevant for cases like pagination which looks to theme.pagination.button

  var themeObj = typeof props.kind === 'object' ? props.kind : props.theme.button;
  if (size && themeObj.size && themeObj.size[size]) return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n      border-radius: ", ";\n    "])), themeObj.size[size].border.radius);
  if (themeObj.border && themeObj.border.radius) return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n      border-radius: ", ";\n    "])), themeObj.border.radius);
  return '';
};

var fontStyle = function fontStyle(props) {
  var size = props.sizeProp || 'medium';
  var data = props.theme.text[size];
  return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n    font-size: ", ";\n    line-height: ", ";\n  "])), data.size, data.height);
};

var padFromTheme = function padFromTheme(size, theme, themeObj) {
  if (size === void 0) {
    size = 'medium';
  }

  if (size && themeObj.size && themeObj.size[size] && themeObj.size[size].pad) {
    return {
      vertical: themeObj.size[size].pad.vertical,
      horizontal: themeObj.size[size].pad.horizontal
    };
  }

  if (theme.button.padding) {
    return {
      vertical: theme.global.edgeSize[theme.button.padding.vertical] || theme.button.padding.vertical,
      horizontal: theme.global.edgeSize[theme.button.padding.horizontal] || theme.button.padding.horizontal
    };
  }

  return undefined;
};

var padStyle = function padStyle(_ref) {
  var size = _ref.sizeProp,
      theme = _ref.theme,
      kind = _ref.kind;
  // caller has specified a themeObj to use for styling
  // relevant for cases like pagination which looks to theme.pagination.button
  var themeObj = typeof kind === 'object' ? kind : theme.button;
  var pad = padFromTheme(size, theme, themeObj);
  return pad ? css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n        padding: ", " ", ";\n      "])), pad.vertical, pad.horizontal) : '';
}; // The > svg rule is to ensure Buttons with just an icon don't add additional
// vertical height internally.


var basicStyle = function basicStyle(props) {
  return css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  border: none;\n  ", ";\n  ", "\n  ", "\n\n  // when button has badge, the SVG won't necessarily\n  // be the direct descendant\n  ", "\n"])), radiusStyle(props), padStyle(props), fontStyle(props), props.badge ? "\n  svg {\n    vertical-align: bottom;\n  }" : "> svg {\n    vertical-align: bottom;\n  }");
};

var getPath = function getPath(theme, path) {
  var obj;

  if (path) {
    obj = theme;
    var parts = path.split('.');

    while (obj && parts.length) {
      obj = obj[parts.shift()];
    }
  }

  return obj;
};

var adjustPadStyle = function adjustPadStyle(pad, width) {
  var offset = parseMetricToNum(width);
  return css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n    padding: ", "px\n      ", "px;\n  "])), Math.max(parseMetricToNum(pad.vertical) - offset, 0), Math.max(parseMetricToNum(pad.horizontal) - offset, 0));
}; // build up CSS from basic to specific based on the supplied sub-object paths


var kindStyle = function kindStyle(_ref2) {
  var colorValue = _ref2.colorValue,
      kind = _ref2.kind,
      size = _ref2.sizeProp,
      themePaths = _ref2.themePaths,
      theme = _ref2.theme;
  var styles = []; // caller has specified a themeObj to use for styling
  // relevant for cases like pagination which looks to theme.pagination.button

  var themeObj = typeof kind === 'object' ? kind : theme.button;
  var pad = padFromTheme(size, theme, themeObj);
  themePaths.base.forEach(function (themePath) {
    var obj = getPath(themeObj, themePath);

    if (obj) {
      styles.push(kindPartStyles(obj, theme, colorValue));

      if (obj.border && obj.border.width && pad && !obj.padding) {
        // Adjust padding from the button.size or just top button.padding
        // to deal with the kind's border width. But don't override any
        // padding in the kind itself for backward compatibility
        styles.push(adjustPadStyle(pad, obj.border.width));
      }
    }
  }); // do the styling from the root of the object if caller passes one

  if (!themePaths.base.length && typeof kind === 'object') {
    var obj = kind;

    if (obj) {
      styles.push(kindPartStyles(obj, theme, colorValue));

      if (obj.border && obj.border.width && pad && !obj.padding) {
        // Adjust padding from the button.size or just top button.padding
        // to deal with the kind's border width. But don't override any
        // padding in the kind itself for backward compatibility
        styles.push(adjustPadStyle(pad, obj.border.width));
      }
    }
  }

  themePaths.hover.forEach(function (themePath) {
    var obj = getPath(themeObj, themePath);

    if (obj) {
      var partStyles = kindPartStyles(obj, theme);
      var adjPadStyles = '';

      if (obj.border && obj.border.width && pad && !obj.padding) {
        // Adjust padding from the button.size or just top button.padding
        // to deal with the hover's border width. But don't override any
        // padding in the hover or hover.kind itself for backward compatibility
        adjPadStyles = adjustPadStyle(pad, obj.border.width);
      }

      if (partStyles.length > 0) {
        styles.push(css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n            &:hover {\n              ", "\n              ", "\n            }\n          "])), partStyles, adjPadStyles));
      }
    }
  });
  return styles;
};

var hoverIndicatorStyle = function hoverIndicatorStyle(_ref3) {
  var hoverIndicator = _ref3.hoverIndicator,
      theme = _ref3.theme;
  var themishObj = {};
  if (hoverIndicator === true || hoverIndicator === 'background') themishObj.background = theme.global.hover.background;else if (hoverIndicator.color || hoverIndicator.background) {
    if (hoverIndicator.background) themishObj.background = hoverIndicator.background;
    if (hoverIndicator.color) themishObj.color = hoverIndicator.color;
  } else themishObj.background = hoverIndicator;
  var styles = kindPartStyles(themishObj, theme);
  if (styles.length > 0) return css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n      &:hover {\n        ", "\n      }\n    "])), styles);
  return '';
};

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
}; // The > svg rule is to ensure Buttons with just an icon don't add additional
// vertical height internally.


var plainStyle = function plainStyle() {
  return css(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n  outline: none;\n  border: none;\n  padding: 0;\n  text-align: inherit;\n  color: inherit;\n\n  > svg {\n    vertical-align: bottom;\n  }\n"])));
};

var StyledButtonKind = styled.button.withConfig({
  // don't let kind attribute leak to DOM
  // https://styled-components.com/docs/api#shouldforwardprop
  shouldForwardProp: function shouldForwardProp(prop, defaultValidatorFn) {
    return !['kind'].includes(prop) && defaultValidatorFn(prop);
  }
})(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n  display: inline-block;\n  box-sizing: border-box;\n  cursor: pointer;\n  font: inherit;\n  text-decoration: none;\n  margin: 0;\n  background: transparent;\n  overflow: visible;\n  text-transform: none;\n\n  ", "\n  ", "\n  // set baseline activeStyle for all buttons including plain buttons\n  // buttons with kind will have active styling overridden by kindStyle\n  // if they have specific state styles\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  &:focus {\n    ", "\n  }\n\n  &:focus:not(:focus-visible) {\n    ", "\n  }\n\n  ", "\n  ", "\n  ", "\n"])), genericStyles, function (props) {
  return props.plain && plainStyle(props);
}, function (props) {
  return !props.disabled && props.active && activeStyle;
}, function (props) {
  return !props.plain && basicStyle(props);
}, function (props) {
  return !props.plain && kindStyle(props);
}, function (props) {
  return !props.plain && props.align && "\n    text-align: " + props.align + ";\n    ";
}, function (props) {
  return !props.disabled && props.hoverIndicator && hoverIndicatorStyle(props);
}, function (props) {
  return props.disabled && disabledStyle(props.theme.button.disabled.opacity);
}, function (props) {
  return (!props.plain || props.focusIndicator) && focusStyle();
}, unfocusStyle(), function (props) {
  return !props.plain && props.theme.button.transition && "\n    transition-property: " + props.theme.button.transition.properties.join(',') + ";\n    transition-duration: " + props.theme.button.transition.duration + "s;\n    transition-timing-function: " + props.theme.button.transition.timing + ";\n  ";
}, function (props) {
  return props.fillContainer && fillStyle(props.fillContainer);
}, function (props) {
  return props.theme.button && props.theme.button.extend;
});
StyledButtonKind.defaultProps = {};
Object.setPrototypeOf(StyledButtonKind.defaultProps, defaultProps);
export { StyledButtonKind };