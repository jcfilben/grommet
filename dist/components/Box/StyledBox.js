"use strict";

exports.__esModule = true;
exports.StyledBoxGap = exports.StyledBox = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _defaultProps = require("../../default-props");

var _utils = require("../../utils");

var _styles = require("../../utils/styles");

var _animation = require("../../utils/animation");

var _templateObject, _templateObject2, _templateObject3, _FLEX_MAP, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var BASIS_MAP = {
  auto: 'auto',
  full: '100%',
  '1/2': '50%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/3': '33.33%',
  '2/3': '66.66%'
};
var basisStyle = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  flex-basis: ", ";\n"])), function (props) {
  return BASIS_MAP[props.basis] || props.theme.global.size[props.basis] || props.basis;
}); // min-width and min-height needed because of this
// https://stackoverflow.com/questions/36247140/why-doesnt-flex-item-shrink-past-content-size
// we assume we are in the context of a Box going the other direction
// TODO: revisit this

var directionStyle = function directionStyle(direction, theme) {
  var styles = [(0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n      min-width: 0;\n      min-height: 0;\n      flex-direction: ", ";\n    "])), direction === 'row-responsive' ? 'row' : direction)];

  if (direction === 'row-responsive' && theme.box.responsiveBreakpoint) {
    var breakpoint = (0, _utils.getBreakpointStyle)(theme, theme.box.responsiveBreakpoint);

    if (breakpoint) {
      styles.push((0, _utils.breakpointStyle)(breakpoint, "\n        flex-direction: column;\n        flex-basis: auto;\n        justify-content: flex-start;\n        align-items: stretch;\n      "));
    }
  }

  return styles;
};

var elevationStyle = function elevationStyle(elevation) {
  return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  box-shadow: ", ";\n"])), function (props) {
    return props.theme.global.elevation[props.theme.dark ? 'dark' : 'light'][elevation];
  });
};

var FLEX_MAP = (_FLEX_MAP = {}, _FLEX_MAP[true] = '1 1', _FLEX_MAP[false] = '0 0', _FLEX_MAP.grow = '1 0', _FLEX_MAP.shrink = '0 1', _FLEX_MAP);

var flexGrowShrinkProp = function flexGrowShrinkProp(flex) {
  if (typeof flex === 'boolean' || typeof flex === 'string') {
    return FLEX_MAP[flex];
  }

  return (flex.grow ? flex.grow : 0) + " " + (flex.shrink ? flex.shrink : 0);
};

var flexStyle = (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  flex: ", ";\n"])), function (props) {
  return "" + flexGrowShrinkProp(props.flex) + (props.flex !== true && !props.basis ? ' auto' : '');
});
var JUSTIFY_MAP = {
  around: 'space-around',
  between: 'space-between',
  center: 'center',
  end: 'flex-end',
  evenly: 'space-evenly',
  start: 'flex-start'
};
var justifyStyle = (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  justify-content: ", ";\n"])), function (props) {
  return JUSTIFY_MAP[props.justify];
});
var WRAP_MAP = {
  "true": 'wrap',
  reverse: 'wrap-reverse'
};
var wrapStyle = (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n  flex-wrap: ", ";\n"])), function (props) {
  return WRAP_MAP[props.wrapProp];
});

var animationItemStyle = function animationItemStyle(item, theme) {
  if (typeof item === 'string') {
    return (0, _animation.animationObjectStyle)({
      type: item
    }, theme);
  }

  if (Array.isArray(item)) {
    return item.reduce(function (style, a, index) {
      return (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n          ", "", " ", "\n        "])), style, index > 0 ? ',' : '', animationItemStyle(a, theme));
    }, '');
  }

  if (typeof item === 'object') {
    return (0, _animation.animationObjectStyle)(item, theme);
  }

  return '';
};

var animationAncilaries = function animationAncilaries(animation) {
  if (animation.type === 'flipIn' || animation.type === 'flipOut') {
    return 'perspective: 1000px; transform-style: preserve-3d;';
  }

  return '';
};

var animationObjectInitialStyle = function animationObjectInitialStyle(animation) {
  var bounds = (0, _animation.animationBounds)(animation.type, animation.size);

  if (bounds) {
    return bounds[0] + " " + animationAncilaries(animation);
  }

  return '';
};

var animationInitialStyle = function animationInitialStyle(item) {
  if (typeof item === 'string') {
    return animationObjectInitialStyle({
      type: item
    });
  }

  if (Array.isArray(item)) {
    return item.map(function (a) {
      return typeof a === 'string' ? animationObjectInitialStyle({
        type: a
      }) : animationObjectInitialStyle(a);
    }).join('');
  }

  if (typeof item === 'object') {
    return animationObjectInitialStyle(item);
  }

  return '';
};

var animationStyle = (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n  ", ";\n"])), function (props) {
  return (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n    ", "\n    animation: ", ";\n  "])), animationInitialStyle(props.animation), animationItemStyle(props.animation, props.theme));
});
var interactiveStyle = (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n  cursor: pointer;\n\n  &:hover {\n    ", "\n    ", "\n  }\n"])), function (props) {
  var _props$kindProp;

  return ((_props$kindProp = props.kindProp) == null ? void 0 : _props$kindProp.hover) && (0, _utils.getHoverIndicatorStyle)(props.kindProp.hover, props.theme);
}, function (props) {
  return props.hoverIndicator && (0, _utils.getHoverIndicatorStyle)(props.hoverIndicator, props.theme);
}); // NOTE: basis must be after flex! Otherwise, flex overrides basis

var StyledBox = _styledComponents["default"].div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  box-sizing: border-box;\n  ", ";\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), function (props) {
  return !props.basis && 'max-width: 100%;';
}, _utils.genericStyles, function (props) {
  return props.align && _utils.alignStyle;
}, function (props) {
  return props.alignContent && _utils.alignContentStyle;
}, function (props) {
  return props.background && (0, _utils.backgroundStyle)(props.background, props.theme);
}, function (props) {
  return props.border && (Array.isArray(props.border) ? props.border.map(function (border) {
    return (0, _utils.borderStyle)(border, props.responsive, props.theme);
  }) : (0, _utils.borderStyle)(props.border, props.responsive, props.theme));
}, function (props) {
  return props.directionProp && directionStyle(props.directionProp, props.theme);
}, function (props) {
  return props.heightProp && (0, _utils.heightStyle)(props.heightProp, props.theme);
}, function (props) {
  return props.widthProp && (0, _utils.widthStyle)(props.widthProp, props.theme);
}, function (props) {
  return props.flex !== undefined && flexStyle;
}, function (props) {
  return props.basis && basisStyle;
}, function (props) {
  return props.fillProp && (0, _utils.fillStyle)(props.fillProp);
}, function (props) {
  return props.justify && justifyStyle;
}, function (props) {
  return props.pad && (0, _utils.edgeStyle)('padding', props.pad, props.responsive, props.theme.box.responsiveBreakpoint, props.theme);
}, function (props) {
  return props.round && (0, _styles.roundStyle)(props.round, props.responsive, props.theme);
}, function (props) {
  return props.wrapProp && wrapStyle;
}, function (props) {
  return props.overflowProp && (0, _utils.overflowStyle)(props.overflowProp);
}, function (props) {
  return props.elevationProp && elevationStyle(props.elevationProp);
}, function (props) {
  return props.animation && animationStyle;
}, function (props) {
  return props.onClick && interactiveStyle;
}, function (props) {
  return props.onClick && props.focus && props.focusIndicator !== false && (0, _utils.focusStyle)();
}, function (props) {
  return props.theme.box && props.theme.box.extend;
}, function (props) {
  return props.kindProp && props.kindProp.extend;
});

exports.StyledBox = StyledBox;

var gapStyle = function gapStyle(directionProp, gap, responsive, border, theme) {
  var metric = theme.global.edgeSize[gap] || gap;
  var breakpoint = (0, _utils.getBreakpointStyle)(theme, theme.box.responsiveBreakpoint);
  var responsiveMetric = responsive && breakpoint && breakpoint.edgeSize[gap];
  var styles = [];

  if (directionProp === 'column' || directionProp === 'column-reverse') {
    styles.push("height: " + metric + ";");

    if (responsiveMetric) {
      styles.push((0, _utils.breakpointStyle)(breakpoint, "height: " + responsiveMetric + ";"));
    }
  } else {
    styles.push("width: " + metric + ";");

    if (responsiveMetric) {
      if (directionProp === 'row' || directionProp === 'row-reverse') {
        styles.push((0, _utils.breakpointStyle)(breakpoint, "width: " + responsiveMetric + ";"));
      } else if (directionProp === 'row-responsive') {
        styles.push((0, _utils.breakpointStyle)(breakpoint, "\n          width: auto;\n          height: " + responsiveMetric + ";\n        "));
      }
    }
  }

  if (border === 'between' || border && border.side === 'between') {
    var borderSize = border.size || 'xsmall';
    var borderMetric = theme.global.borderSize[borderSize] || borderSize;
    var borderOffset = (0, _utils.parseMetricToNum)(metric) / 2 - (0, _utils.parseMetricToNum)(borderMetric) / 2 + "px";
    var responsiveBorderMetric = responsive && breakpoint && (breakpoint.borderSize[borderSize] || borderSize);
    var responsiveBorderOffset = responsiveBorderMetric && (0, _utils.parseMetricToNum)(responsiveMetric) / 2 - (0, _utils.parseMetricToNum)(responsiveBorderMetric) / 2 + "px";

    if (directionProp === 'column' || directionProp === 'column-reverse') {
      var adjustedBorder = typeof border === 'string' ? 'top' : _extends({}, border, {
        side: 'top'
      });
      styles.push((0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteralLoose(["\n        position: relative;\n        &:after {\n          content: '';\n          position: absolute;\n          width: 100%;\n          top: ", ";\n          ", "\n        }\n      "])), borderOffset, (0, _utils.borderStyle)(adjustedBorder, responsive, theme)));

      if (responsiveBorderOffset) {
        styles.push((0, _utils.breakpointStyle)(breakpoint, "\n            &:after {\n              content: '';\n              top: " + responsiveBorderOffset + ";\n            }"));
      }
    } else {
      var _adjustedBorder = typeof border === 'string' ? 'left' : _extends({}, border, {
        side: 'left'
      });

      styles.push((0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteralLoose(["\n        position: relative;\n        &:after {\n          content: '';\n          position: absolute;\n          height: 100%;\n          left: ", ";\n          ", "\n        }\n      "])), borderOffset, (0, _utils.borderStyle)(_adjustedBorder, directionProp !== 'row-responsive' && responsive, theme)));

      if (responsiveBorderOffset) {
        if (directionProp === 'row' || directionProp === 'row-reverse') {
          styles.push((0, _utils.breakpointStyle)(breakpoint, "\n              &:after {\n                content: '';\n                left: " + responsiveBorderOffset + ";\n              }"));
        } else if (directionProp === 'row-responsive') {
          var adjustedBorder2 = typeof border === 'string' ? 'top' : _extends({}, border, {
            side: 'top'
          });
          styles.push((0, _utils.breakpointStyle)(breakpoint, "\n              &:after {\n                content: '';\n                height: auto;\n                left: unset;\n                width: 100%;\n                top: " + responsiveBorderOffset + ";\n                border-left: none;\n                " + (0, _utils.responsiveBorderStyle)(adjustedBorder2, theme) + "\n              }"));
        }
      }
    }
  }

  return styles;
};

StyledBox.defaultProps = {};
Object.setPrototypeOf(StyledBox.defaultProps, _defaultProps.defaultProps);

var StyledBoxGap = _styledComponents["default"].div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteralLoose(["\n  flex: 0 0 auto;\n  align-self: stretch;\n  ", ";\n"])), function (props) {
  return props.gap && gapStyle(props.directionProp, props.gap, props.responsive, props.border, props.theme);
});

exports.StyledBoxGap = StyledBoxGap;
StyledBoxGap.defaultProps = {};
Object.setPrototypeOf(StyledBoxGap.defaultProps, _defaultProps.defaultProps);