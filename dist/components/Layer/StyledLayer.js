"use strict";

exports.__esModule = true;
exports.animationDuration = exports.StyledOverlay = exports.StyledLayer = exports.StyledContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _utils = require("../../utils");

var _defaultProps = require("../../default-props");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72, _templateObject73, _templateObject74, _templateObject75, _templateObject76, _templateObject77, _templateObject78, _templateObject79, _templateObject80, _templateObject81, _templateObject82, _templateObject83, _templateObject84, _templateObject85, _templateObject86, _templateObject87, _templateObject88, _templateObject89, _templateObject90, _templateObject91, _templateObject92, _templateObject93, _templateObject94;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var hiddenPositionStyle = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  left: -100%;\n  right: 100%;\n  z-index: -1;\n  position: fixed;\n"])));
var desktopLayerStyle = "\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n";
var responsiveLayerStyle = "\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  min-height: 100vh;\n";

var StyledLayer = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  ", "\n  background: transparent;\n  position: relative;\n  z-index: ", ";\n  pointer-events: none;\n  outline: none;\n\n  ", "\n  ", ";\n"])), _utils.baseStyle, function (props) {
  return props.theme.layer.zIndex;
}, function (props) {
  if (props.position === 'hidden') {
    return hiddenPositionStyle;
  }

  var styles = [];
  styles.push(desktopLayerStyle);

  if (props.responsive && props.theme.layer.responsiveBreakpoint && !props.layerTarget) {
    var breakpoint = props.theme.global.breakpoints[props.theme.layer.responsiveBreakpoint];
    styles.push((0, _utils.breakpointStyle)(breakpoint, responsiveLayerStyle));
  }

  return styles;
}, function (props) {
  return props.theme.layer && props.theme.layer.extend;
});

exports.StyledLayer = StyledLayer;
StyledLayer.defaultProps = {};
Object.setPrototypeOf(StyledLayer.defaultProps, _defaultProps.defaultProps);

var StyledOverlay = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  ", " top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  ", " pointer-events: all;\n  // necessary so overlay doesn't get repainted on scroll\n  // improves scroll performance\n  // https://dev.opera.com/articles/css-will-change-property/\n  will-change: transform;\n"])), function (props) {
  if (props.responsive && props.theme.layer.responsiveBreakpoint) {
    var breakpoint = props.theme.global.breakpoints[props.theme.layer.responsiveBreakpoint];
    return (0, _utils.breakpointStyle)(breakpoint, 'position: relative;');
  }

  return '';
}, function (props) {
  return !props.plain && props.theme.layer.overlay.background && (0, _utils.backgroundStyle)(props.theme.layer.overlay.background, props.theme);
});

exports.StyledOverlay = StyledOverlay;

var getMargin = function getMargin(margin, theme, position) {
  var axis = position.indexOf('top') !== -1 || position.indexOf('bottom') !== -1 ? 'vertical' : 'horizontal';
  var marginValue = margin[position] || margin[axis] || margin;
  var marginApplied = theme.global.edgeSize[marginValue] || marginValue;
  var marginInTheme = !!theme.global.edgeSize[marginValue];
  return !marginInTheme && typeof marginValue !== 'string' ? 0 : (0, _utils.parseMetricToNum)(marginApplied);
};

var getBounds = function getBounds(bounds, margin, theme, position) {
  if (position === void 0) {
    position = undefined;
  }

  if (position) {
    return bounds[position] + getMargin(margin, theme, position);
  }

  return {
    bottom: bounds.bottom + getMargin(margin, theme, 'bottom'),
    // 'bottom-left': getMargin(margin, theme, 'bottom-left'),
    // 'bottom-right': getMargin(margin, theme, 'bottom-right'),
    end: bounds.right + getMargin(margin, theme, 'end'),
    left: bounds.left + getMargin(margin, theme, 'left'),
    right: bounds.right + getMargin(margin, theme, 'right'),
    start: bounds.left + getMargin(margin, theme, 'start'),
    top: bounds.top + getMargin(margin, theme, 'top') // 'top-right': getMargin(margin, theme, 'top-right'),
    // 'top-left': getMargin(margin, theme, 'top-left'),

  };
};

var KEYFRAMES = {
  center: {
    vertical: (0, _styledComponents.keyframes)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n      0% { transform: translateX(-50%) scale(0.8); }\n      100% { transform: translateX(-50%) scale(1); }\n    "]))),
    horizontal: (0, _styledComponents.keyframes)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n      0% { transform: translateY(-50%) scale(0.8); }\n      100% { transform: translateY(-50) scale(1); }\n    "]))),
    "true": (0, _styledComponents.keyframes)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n      0% { transform: scale(0.8); }\n      100% { transform: scale(1); }\n    "]))),
    "false": (0, _styledComponents.keyframes)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n      0% { transform: translate(-50%, -50%) scale(0.8); }\n      100% { transform: translate(-50%, -50%) scale(1); }\n    "])))
  },
  top: {
    vertical: (0, _styledComponents.keyframes)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n      0% { transform: translate(-50%, -100%); }\n      100% { transform: translate(-50%, 0); }\n    "]))),
    horizontal: (0, _styledComponents.keyframes)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n      0% { transform: translateY(-100%); }\n      100% { transform: translateY(0); }\n    "]))),
    "true": (0, _styledComponents.keyframes)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n      0% { transform: translateY(-100%); }\n      100% { transform: translateY(0); }\n    "]))),
    "false": (0, _styledComponents.keyframes)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteralLoose(["\n      0% { transform: translate(-50%, -100%); }\n      100% { transform: translate(-50%, 0); }\n    "])))
  },
  bottom: {
    vertical: (0, _styledComponents.keyframes)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteralLoose(["\n      0% { transform: translate(-50%, 100%); }\n      100% { transform: translate(-50%, 0); }\n    "]))),
    horizontal: (0, _styledComponents.keyframes)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteralLoose(["\n      0% { transform: translateY(100%); }\n      100% { transform: translateY(0); }\n    "]))),
    "true": (0, _styledComponents.keyframes)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteralLoose(["\n      0% { transform: translateY(100%); }\n      100% { transform: translateY(0); }\n    "]))),
    "false": (0, _styledComponents.keyframes)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteralLoose(["\n      0% { transform: translate(-50%, 100%); }\n      100% { transform: translate(-50%, 0); }\n    "])))
  },
  left: {
    vertical: (0, _styledComponents.keyframes)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteralLoose(["\n      0% { transform: translateX(-100%); }\n      100% { transform: translateX(0); }\n    "]))),
    horizontal: (0, _styledComponents.keyframes)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteralLoose(["\n      0% { transform: translate(-100%, -50%); }\n      100% { transform: translate(0, -50%); }\n    "]))),
    "true": (0, _styledComponents.keyframes)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteralLoose(["\n      0% { transform: translateX(-100%); }\n      100% { transform: translateX(0); }\n    "]))),
    "false": (0, _styledComponents.keyframes)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteralLoose(["\n      0% { transform: translate(-100%, -50%); }\n      100% { transform: translate(0, -50%); }\n    "])))
  },
  right: {
    vertical: (0, _styledComponents.keyframes)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteralLoose(["\n      0% { transform: translateX(100%); }\n      100% { transform: translateX(0); }\n    "]))),
    horizontal: (0, _styledComponents.keyframes)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteralLoose(["\n      0% { transform: translate(100%, -50%); }\n      100% { transform: translate(0, -50%); }\n    "]))),
    "true": (0, _styledComponents.keyframes)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteralLoose(["\n      0% { transform: translateX(100%); }\n      100% { transform: translateX(0); }\n    "]))),
    "false": (0, _styledComponents.keyframes)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteralLoose(["\n      0% { transform: translate(100%, -50%); }\n      100% { transform: translate(0, -50%); }\n    "])))
  },
  start: {
    vertical: (0, _styledComponents.keyframes)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteralLoose(["\n      0% { transform: translateX(-100%); }\n      100% { transform: translateX(0); }\n    "]))),
    horizontal: (0, _styledComponents.keyframes)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteralLoose(["\n      0% { transform: translate(-100%, -50%); }\n      100% { transform: translate(0, -50%); }\n    "]))),
    "true": (0, _styledComponents.keyframes)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteralLoose(["\n      0% { transform: translateX(-100%); }\n      100% { transform: translateX(0); }\n    "]))),
    "false": (0, _styledComponents.keyframes)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteralLoose(["\n      0% { transform: translate(-100%, -50%); }\n      100% { transform: translate(0, -50%); }\n    "])))
  },
  end: {
    vertical: (0, _styledComponents.keyframes)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteralLoose(["\n      0% { transform: translateX(100%); }\n      100% { transform: translateX(0); }\n    "]))),
    horizontal: (0, _styledComponents.keyframes)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteralLoose(["\n      0% { transform: translate(100%, -50%); }\n      100% { transform: translate(0, -50%); }\n    "]))),
    "true": (0, _styledComponents.keyframes)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteralLoose(["\n      0% { transform: translateX(100%); }\n      100% { transform: translateX(0); }\n    "]))),
    "false": (0, _styledComponents.keyframes)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteralLoose(["\n      0% { transform: translate(100%, -50%); }\n      100% { transform: translate(0, -50%); }\n    "])))
  }
};
var animationDuration = 200;
exports.animationDuration = animationDuration;

var getAnimationStyle = function getAnimationStyle(props, position, full) {
  var animation = props.animation !== undefined ? props.animation : props.animate;
  if (animation === undefined) animation = 'slide';
  var keys;

  if (animation === 'slide' || animation === true) {
    keys = KEYFRAMES[position][full];
  } else if (animation === 'fadeIn') {
    keys = (0, _styledComponents.keyframes)(_templateObject32 || (_templateObject32 = _taggedTemplateLiteralLoose(["0% { opacity: 0 } 100% { opacity: 1 }"])));
  }

  return keys ? (0, _styledComponents.css)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteralLoose(["\n        animation: ", " ", "s ease-in-out forwards;\n      "])), keys, animationDuration / 1000.0) : '';
}; // POSITIONS combines 'position', 'full', and 'margin' properties, since
// they are all interdependent.
// Basically, non-full axes combine 50% position with -50% translation.
// full axes pin to the window edges offset by any margin.
// The keyframe animations are included as they are done via translations
// as well so they must take into account the non-animated positioning.


var POSITIONS = {
  center: {
    vertical: function vertical(bounds) {
      return (0, _styledComponents.css)(_templateObject34 || (_templateObject34 = _taggedTemplateLiteralLoose(["\n      top: ", "px;\n      bottom: ", "px;\n      left: 50%;\n      transform: translateX(-50%);\n      ", "\n    "])), bounds.top, bounds.bottom, function (props) {
        return getAnimationStyle(props, 'center', 'vertical');
      });
    },
    horizontal: function horizontal(bounds) {
      return (0, _styledComponents.css)(_templateObject35 || (_templateObject35 = _taggedTemplateLiteralLoose(["\n      left: ", "px;\n      right: ", "px;\n      top: 50%;\n      transform: translateY(-50%);\n      ", "\n    "])), bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'center', 'horizontal');
      });
    },
    "true": function _true(bounds) {
      return (0, _styledComponents.css)(_templateObject36 || (_templateObject36 = _taggedTemplateLiteralLoose(["\n      top: ", "px;\n      bottom: ", "px;\n      left: ", "px;\n      right: ", "px;\n      ", "\n    "])), bounds.top, bounds.bottom, bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'center', 'true');
      });
    },
    "false": function _false() {
      return (0, _styledComponents.css)(_templateObject37 || (_templateObject37 = _taggedTemplateLiteralLoose(["\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      ", "\n    "])), function (props) {
        return getAnimationStyle(props, 'center', 'false');
      });
    }
  },
  top: {
    vertical: function vertical(bounds) {
      return (0, _styledComponents.css)(_templateObject38 || (_templateObject38 = _taggedTemplateLiteralLoose(["\n      top: ", "px;\n      bottom: ", "px;\n      left: 50%;\n      transform: translate(-50%, 0%);\n      ", "\n    "])), bounds.top, bounds.bottom, function (props) {
        return getAnimationStyle(props, 'top', 'vertical');
      });
    },
    horizontal: function horizontal(bounds) {
      return (0, _styledComponents.css)(_templateObject39 || (_templateObject39 = _taggedTemplateLiteralLoose(["\n      left: ", "px;\n      right: ", "px;\n      top: ", "px;\n      transform: translateY(0);\n      ", "\n    "])), bounds.left, bounds.right, bounds.top, function (props) {
        return getAnimationStyle(props, 'top', 'horizontal');
      });
    },
    "true": function _true(bounds) {
      return (0, _styledComponents.css)(_templateObject40 || (_templateObject40 = _taggedTemplateLiteralLoose(["\n      top: ", "px;\n      bottom: ", "px;\n      left: ", "px;\n      right: ", "px;\n      transform: translateY(0);\n      ", "\n    "])), bounds.top, bounds.bottom, bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'top', 'true');
      });
    },
    "false": function _false(bounds) {
      return (0, _styledComponents.css)(_templateObject41 || (_templateObject41 = _taggedTemplateLiteralLoose(["\n      top: ", "px;\n      left: 50%;\n      transform: translate(-50%, 0);\n      ", "\n    "])), bounds.top, function (props) {
        return getAnimationStyle(props, 'top', 'false');
      });
    }
  },
  bottom: {
    vertical: function vertical(bounds) {
      return (0, _styledComponents.css)(_templateObject42 || (_templateObject42 = _taggedTemplateLiteralLoose(["\n      top: ", "px;\n      bottom: ", "px;\n      left: 50%;\n      transform: translate(-50%, 0);\n      ", "\n    "])), bounds.top, bounds.bottom, function (props) {
        return getAnimationStyle(props, 'bottom', 'vertical');
      });
    },
    horizontal: function horizontal(bounds) {
      return (0, _styledComponents.css)(_templateObject43 || (_templateObject43 = _taggedTemplateLiteralLoose(["\n      left: ", "px;\n      right: ", "px;\n      bottom: ", "px;\n      transform: translateY(0);\n      ", "\n    "])), bounds.left, bounds.top, bounds.bottom, function (props) {
        return getAnimationStyle(props, 'bottom', 'horizontal');
      });
    },
    "true": function _true(bounds) {
      return (0, _styledComponents.css)(_templateObject44 || (_templateObject44 = _taggedTemplateLiteralLoose(["\n      top: ", "px;\n      bottom: ", "px;\n      left: ", "px;\n      right: ", "px;\n      transform: translateY(0);\n      ", "\n    "])), bounds.top, bounds.bottom, bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'bottom', 'true');
      });
    },
    "false": function _false(bounds) {
      return (0, _styledComponents.css)(_templateObject45 || (_templateObject45 = _taggedTemplateLiteralLoose(["\n      bottom: ", "px;\n      left: 50%;\n      transform: translate(-50%, 0);\n      ", "\n    "])), bounds.bottom, function (props) {
        return getAnimationStyle(props, 'bottom', 'false');
      });
    }
  },
  left: {
    vertical: function vertical(bounds) {
      return (0, _styledComponents.css)(_templateObject46 || (_templateObject46 = _taggedTemplateLiteralLoose(["\n      top: ", "px;\n      bottom: ", "px;\n      left: ", "px;\n      transform: translateX(0);\n      ", "\n    "])), bounds.top, bounds.bottom, bounds.left, function (props) {
        return getAnimationStyle(props, 'left', 'vertical');
      });
    },
    horizontal: function horizontal(bounds) {
      return (0, _styledComponents.css)(_templateObject47 || (_templateObject47 = _taggedTemplateLiteralLoose(["\n      left: ", "px;\n      right: ", "px;\n      top: 50%;\n      transform: translate(0, -50%);\n      ", "\n    "])), bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'left', 'horizontal');
      });
    },
    "true": function _true(bounds) {
      return (0, _styledComponents.css)(_templateObject48 || (_templateObject48 = _taggedTemplateLiteralLoose(["\n      top: ", "px;\n      bottom: ", "px;\n      left: ", "px;\n      right: ", "px;\n      transform: translateX(0);\n      ", "\n    "])), bounds.top, bounds.bottom, bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'left', 'true');
      });
    },
    "false": function _false(bounds) {
      return (0, _styledComponents.css)(_templateObject49 || (_templateObject49 = _taggedTemplateLiteralLoose(["\n      left: ", "px;\n      top: 50%;\n      transform: translate(0, -50%);\n      ", "\n    "])), bounds.left, function (props) {
        return getAnimationStyle(props, 'left', 'false');
      });
    }
  },
  right: {
    vertical: function vertical(bounds) {
      return (0, _styledComponents.css)(_templateObject50 || (_templateObject50 = _taggedTemplateLiteralLoose(["\n      top: ", "px;\n      bottom: ", "px;\n      right: ", "px;\n      transform: translateX(0);\n      ", "\n    "])), bounds.top, bounds.bottom, bounds.right, function (props) {
        return getAnimationStyle(props, 'right', 'vertical');
      });
    },
    horizontal: function horizontal(bounds) {
      return (0, _styledComponents.css)(_templateObject51 || (_templateObject51 = _taggedTemplateLiteralLoose(["\n      left: ", "px;\n      right: ", "px;\n      top: 50%;\n      transform: translate(0, -50%);\n      ", "\n    "])), bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'right', 'horizontal');
      });
    },
    "true": function _true(bounds) {
      return (0, _styledComponents.css)(_templateObject52 || (_templateObject52 = _taggedTemplateLiteralLoose(["\n      top: ", "px;\n      bottom: ", "px;\n      left: ", "px;\n      right: ", "px;\n      transform: translateX(0);\n      ", "\n    "])), bounds.top, bounds.bottom, bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'right', 'true');
      });
    },
    "false": function _false(bounds) {
      return (0, _styledComponents.css)(_templateObject53 || (_templateObject53 = _taggedTemplateLiteralLoose(["\n      right: ", "px;\n      top: 50%;\n      transform: translate(0, -50%);\n      ", "\n    "])), bounds.right, function (props) {
        return getAnimationStyle(props, 'right', 'false');
      });
    }
  },
  start: {
    vertical: function vertical(bounds) {
      return (0, _styledComponents.css)(_templateObject54 || (_templateObject54 = _taggedTemplateLiteralLoose(["\n      top: ", "px;\n      bottom: ", "px;\n      inset-inline-start: ", "px;\n      transform: translateX(0);\n      ", "\n    "])), bounds.top, bounds.bottom, bounds.start, function (props) {
        return getAnimationStyle(props, 'start', 'vertical');
      });
    },
    horizontal: function horizontal(bounds) {
      return (0, _styledComponents.css)(_templateObject55 || (_templateObject55 = _taggedTemplateLiteralLoose(["\n      inset-inline-start: ", "px;\n      inset-inline-end: ", "px;\n      top: 50%;\n      transform: translate(0, -50%);\n      ", "\n    "])), bounds.start, bounds.end, function (props) {
        return getAnimationStyle(props, 'start', 'horizontal');
      });
    },
    "true": function _true(bounds) {
      return (0, _styledComponents.css)(_templateObject56 || (_templateObject56 = _taggedTemplateLiteralLoose(["\n      top: ", "px;\n      bottom: ", "px;\n      inset-inline-start: ", "px;\n      inset-inline-end: ", "px;\n      transform: translateX(0);\n      ", "\n    "])), bounds.top, bounds.bottom, bounds.start, bounds.end, function (props) {
        return getAnimationStyle(props, 'start', 'true');
      });
    },
    "false": function _false(bounds) {
      return (0, _styledComponents.css)(_templateObject57 || (_templateObject57 = _taggedTemplateLiteralLoose(["\n      inset-inline-start: ", "px;\n      top: 50%;\n      transform: translate(0, -50%);\n      ", "\n    "])), bounds.start, function (props) {
        return getAnimationStyle(props, 'start', 'false');
      });
    }
  },
  end: {
    vertical: function vertical(bounds) {
      return (0, _styledComponents.css)(_templateObject58 || (_templateObject58 = _taggedTemplateLiteralLoose(["\n      top: ", "px;\n      bottom: ", "px;\n      inset-inline-end: ", "px;\n      transform: translateX(0);\n      ", "\n    "])), bounds.top, bounds.bottom, bounds.end, function (props) {
        return getAnimationStyle(props, 'end', 'vertical');
      });
    },
    horizontal: function horizontal(bounds) {
      return (0, _styledComponents.css)(_templateObject59 || (_templateObject59 = _taggedTemplateLiteralLoose(["\n      inset-inline-start: ", "px;\n      inset-inline-end: ", "px;\n      top: 50%;\n      transform: translate(0, -50%);\n      ", "\n    "])), bounds.start, bounds.end, function (props) {
        return getAnimationStyle(props, 'end', 'horizontal');
      });
    },
    "true": function _true(bounds) {
      return (0, _styledComponents.css)(_templateObject60 || (_templateObject60 = _taggedTemplateLiteralLoose(["\n      top: ", "px;\n      bottom: ", "px;\n      inset-inline-start: ", "px;\n      inset-inline-end: ", "px;\n      transform: translateX(0);\n      ", "\n    "])), bounds.top, bounds.bottom, bounds.start, bounds.end, function (props) {
        return getAnimationStyle(props, 'end', 'true');
      });
    },
    "false": function _false(bounds) {
      return (0, _styledComponents.css)(_templateObject61 || (_templateObject61 = _taggedTemplateLiteralLoose(["\n      inset-inline-end: ", "px;\n      top: 50%;\n      transform: translate(0, -50%);\n      ", "\n    "])), bounds.end, function (props) {
        return getAnimationStyle(props, 'end', 'false');
      });
    }
  },
  'top-right': {
    vertical: function vertical(bounds) {
      return (0, _styledComponents.css)(_templateObject62 || (_templateObject62 = _taggedTemplateLiteralLoose(["\n      top: ", "px;\n      bottom: ", "px;\n      right: ", "px;\n      transform: translateX(0);\n      ", ";\n    "])), bounds.top, bounds.bottom, bounds.right, function (props) {
        return getAnimationStyle(props, 'top', 'true');
      });
    },
    horizontal: function horizontal(bounds) {
      return (0, _styledComponents.css)(_templateObject63 || (_templateObject63 = _taggedTemplateLiteralLoose(["\n      left: ", "px;\n      right: ", "px;\n      top: 0;\n      transform: translateX(0);\n      ", ";\n    "])), bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'top', 'true');
      });
    },
    "true": function _true(bounds) {
      return (0, _styledComponents.css)(_templateObject64 || (_templateObject64 = _taggedTemplateLiteralLoose(["\n      top: ", "px;\n      bottom: ", "px;\n      left: ", "px;\n      right: ", "px;\n      transform: translateX(0);\n      ", ";\n    "])), bounds.top, bounds.bottom, bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'top', 'true');
      });
    },
    "false": function _false(bounds) {
      return (0, _styledComponents.css)(_templateObject65 || (_templateObject65 = _taggedTemplateLiteralLoose(["\n      top: ", "px;\n      right: ", "px;\n      transform: translateY(0);\n      ", ";\n    "])), bounds.top, bounds.right, function (props) {
        return getAnimationStyle(props, 'top', 'true');
      });
    }
  },
  'top-left': {
    vertical: function vertical(bounds) {
      return (0, _styledComponents.css)(_templateObject66 || (_templateObject66 = _taggedTemplateLiteralLoose(["\n      top: ", "px;\n      bottom: ", "px;\n      left: ", "px;\n      transform: translateX(0);\n      ", "\n    "])), bounds.top, bounds.bottom, bounds.left, function (props) {
        return getAnimationStyle(props, 'top', 'true');
      });
    },
    horizontal: function horizontal(bounds) {
      return (0, _styledComponents.css)(_templateObject67 || (_templateObject67 = _taggedTemplateLiteralLoose(["\n      left: ", "px;\n      right: ", "px;\n      top: 0;\n      transform: translateX(0);\n      ", "\n    "])), bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'top', 'true');
      });
    },
    "true": function _true(bounds) {
      return (0, _styledComponents.css)(_templateObject68 || (_templateObject68 = _taggedTemplateLiteralLoose(["\n      top: ", "px;\n      bottom: ", "px;\n      left: ", "px;\n      right: ", "px;\n      transform: translateX(0);\n      ", "\n    "])), bounds.top, bounds.bottom, bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'top', 'true');
      });
    },
    "false": function _false(bounds) {
      return (0, _styledComponents.css)(_templateObject69 || (_templateObject69 = _taggedTemplateLiteralLoose(["\n      top: ", "px;\n      left: ", "px;\n      transform: translateY(0);\n      ", "\n    "])), bounds.top, bounds.left, function (props) {
        return getAnimationStyle(props, 'top', 'true');
      });
    }
  },
  'bottom-right': {
    vertical: function vertical(bounds) {
      return (0, _styledComponents.css)(_templateObject70 || (_templateObject70 = _taggedTemplateLiteralLoose(["\n      top: ", "px;\n      bottom: ", "px;\n      right: ", "px;\n      transform: translateX(0);\n      ", "\n    "])), bounds.top, bounds.bottom, bounds.right, function (props) {
        return getAnimationStyle(props, 'bottom', 'true');
      });
    },
    horizontal: function horizontal(bounds) {
      return (0, _styledComponents.css)(_templateObject71 || (_templateObject71 = _taggedTemplateLiteralLoose(["\n      left: ", "px;\n      right: ", "px;\n      bottom: ", "px;\n      transform: translateY(0);\n      ", "\n    "])), bounds.left, bounds.right, bounds.bottom, function (props) {
        return getAnimationStyle(props, 'bottom', 'true');
      });
    },
    "true": function _true(bounds) {
      return (0, _styledComponents.css)(_templateObject72 || (_templateObject72 = _taggedTemplateLiteralLoose(["\n      top: ", "px;\n      bottom: ", "px;\n      left: ", "px;\n      right: ", "px;\n      transform: translateX(0);\n      ", "\n    "])), bounds.top, bounds.bottom, bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'bottom', 'true');
      });
    },
    "false": function _false(bounds) {
      return (0, _styledComponents.css)(_templateObject73 || (_templateObject73 = _taggedTemplateLiteralLoose(["\n      bottom: ", "px;\n      right: ", "px;\n      transform: translateY(0);\n      ", "\n    "])), bounds.bottom, bounds.right, function (props) {
        return getAnimationStyle(props, 'bottom', 'true');
      });
    }
  },
  'bottom-left': {
    vertical: function vertical(bounds) {
      return (0, _styledComponents.css)(_templateObject74 || (_templateObject74 = _taggedTemplateLiteralLoose(["\n      top: ", "px;\n      bottom: ", "px;\n      left: ", "px;\n      transform: translateX(0);\n      ", "\n    "])), bounds.top, bounds.bottom, bounds.left, function (props) {
        return getAnimationStyle(props, 'bottom', 'true');
      });
    },
    horizontal: function horizontal(bounds) {
      return (0, _styledComponents.css)(_templateObject75 || (_templateObject75 = _taggedTemplateLiteralLoose(["\n      left: ", "px;\n      right: ", "px;\n      bottom: ", "px;\n      transform: translateY(0);\n      ", "\n    "])), bounds.left, bounds.right, bounds.bottom, function (props) {
        return getAnimationStyle(props, 'bottom', 'true');
      });
    },
    "true": function _true(bounds) {
      return (0, _styledComponents.css)(_templateObject76 || (_templateObject76 = _taggedTemplateLiteralLoose(["\n      top: ", "px;\n      bottom: ", "px;\n      left: ", "px;\n      right: ", "px;\n      transform: translateX(0);\n      ", "\n    "])), bounds.top, bounds.bottom, bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'bottom', 'true');
      });
    },
    "false": function _false(bounds) {
      return (0, _styledComponents.css)(_templateObject77 || (_templateObject77 = _taggedTemplateLiteralLoose(["\n      bottom: ", "px;\n      left: ", "px;\n      transform: translateY(0);\n      ", "\n    "])), bounds.bottom, bounds.left, function (props) {
        return getAnimationStyle(props, 'bottom', 'true');
      });
    }
  }
};

var roundStyle = function roundStyle(data, theme, position, margin) {
  var styles = [];
  var size = data === true ? 'medium' : data;
  var round = theme.global.edgeSize[size] || size; // if user provides CSS string such as '50px 12px', apply that always

  var customCSS = round.split(' ').length > 1;

  if (margin === 'none' && !customCSS && theme.layer.border.intelligentRounding === true) {
    if (position === 'bottom') {
      styles.push((0, _styledComponents.css)(_templateObject78 || (_templateObject78 = _taggedTemplateLiteralLoose(["\n          border-radius: ", " ", " 0 0;\n        "])), round, round));
    } else if (position === 'bottom-left') {
      styles.push((0, _styledComponents.css)(_templateObject79 || (_templateObject79 = _taggedTemplateLiteralLoose(["\n          border-radius: 0 ", " 0 0;\n        "])), round));
    } else if (position === 'bottom-right') {
      styles.push((0, _styledComponents.css)(_templateObject80 || (_templateObject80 = _taggedTemplateLiteralLoose(["\n          border-radius: ", " 0 0 0;\n        "])), round));
    } else if (position === 'end') {
      // only works on Firefox, what should be fallback?
      styles.push((0, _styledComponents.css)(_templateObject81 || (_templateObject81 = _taggedTemplateLiteralLoose(["\n        border-start-start-radius: ", ";\n        border-end-start-radius: ", ";\n      "])), round, round));
    } else if (position === 'left') {
      styles.push((0, _styledComponents.css)(_templateObject82 || (_templateObject82 = _taggedTemplateLiteralLoose(["\n          border-radius: 0 ", " ", " 0;\n        "])), round, round));
    } else if (position === 'right') {
      styles.push((0, _styledComponents.css)(_templateObject83 || (_templateObject83 = _taggedTemplateLiteralLoose(["\n          border-radius: ", " 0 0 ", ";\n        "])), round, round));
    } else if (position === 'start') {
      // only works on Firefox, what should be fallback?
      styles.push((0, _styledComponents.css)(_templateObject84 || (_templateObject84 = _taggedTemplateLiteralLoose(["\n        border-end-end-radius: ", ";\n        border-start-end-radius: ", ";\n      "])), round, round));
    } else if (position === 'top') {
      styles.push((0, _styledComponents.css)(_templateObject85 || (_templateObject85 = _taggedTemplateLiteralLoose(["\n          border-radius: 0 0 ", " ", ";\n        "])), round, round));
    } else if (position === 'top-left') {
      styles.push((0, _styledComponents.css)(_templateObject86 || (_templateObject86 = _taggedTemplateLiteralLoose(["\n          border-radius: 0 0 ", " 0;\n        "])), round));
    } else if (position === 'top-right') {
      styles.push((0, _styledComponents.css)(_templateObject87 || (_templateObject87 = _taggedTemplateLiteralLoose(["\n          border-radius: 0 0 0 ", ";\n        "])), round));
    } else {
      // position is center, apply uniform border-radius
      styles.push((0, _styledComponents.css)(_templateObject88 || (_templateObject88 = _taggedTemplateLiteralLoose(["\n          border-radius: ", ";\n        "])), round));
    }
  } else {
    // if there's a margin apply uniform border-radius, or if user has supplied
    // a complex CSS string such as "50px 20px" apply this
    styles.push((0, _styledComponents.css)(_templateObject89 || (_templateObject89 = _taggedTemplateLiteralLoose(["\n      border-radius: ", ";\n    "])), round));
  }

  return styles;
};

var bounds = {
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};
var desktopContainerStyle = (0, _styledComponents.css)(_templateObject90 || (_templateObject90 = _taggedTemplateLiteralLoose(["\n  ", "\n  max-height: ", ";\n  max-width: ", ";\n  ", ";\n  ", ";\n"])), function (props) {
  if (!props.modal && props.position === 'hidden') {
    return hiddenPositionStyle;
  }

  return (0, _styledComponents.css)(_templateObject91 || (_templateObject91 = _taggedTemplateLiteralLoose(["\n      // when there is a target (modal or non-modal) we need to position\n      // layer with respect to the target's position\n      // ensures positioning and animations stay aligned\n      position: ", ";\n    "])), props.modal || props.layerTarget ? 'absolute' : 'fixed');
}, function (props) {
  return "calc(100% - " + getBounds(bounds, props.margin, props.theme, 'top') + "px - " + getBounds(bounds, props.margin, props.theme, 'bottom') + "px)";
}, function (props) {
  return "calc(100% - " + getBounds(bounds, props.margin, props.theme, 'left') + "px - " + getBounds(bounds, props.margin, props.theme, 'right') + "px)";
}, function (props) {
  return props.plain || props.full && props.margin === 'none' ? "border-radius: 0;" : roundStyle(props.theme.layer.border.radius, props.theme, props.position, props.margin);
}, function (props) {
  return props.position !== 'hidden' && POSITIONS[props.position][props.full](getBounds(bounds, props.margin, props.theme), bounds) || '';
});

var responsiveContainerStyle = function responsiveContainerStyle(props) {
  return (0, _styledComponents.css)(_templateObject92 || (_templateObject92 = _taggedTemplateLiteralLoose(["\n  position: relative;\n  max-height: none;\n  max-width: none;\n  border-radius: 0;\n  height: ", ";\n  width: ", ";\n"])), !props.layerTarget ? '100vh' : '100%', !props.layerTarget ? '100vw' : '100%');
};

var elevationStyle = (0, _styledComponents.css)(_templateObject93 || (_templateObject93 = _taggedTemplateLiteralLoose(["\n  box-shadow: ", ";\n"])), function (props) {
  return props.theme.global.elevation[props.theme.dark ? 'dark' : 'light'][props.theme.layer.container.elevation];
});

var StyledContainer = _styledComponents["default"].div.withConfig({
  // don't let elevation leak to DOM
  // https://styled-components.com/docs/api#shouldforwardprop
  shouldForwardProp: function shouldForwardProp(prop, defaultValidatorFn) {
    return !['elevation'].includes(prop) && defaultValidatorFn(prop);
  }
})(_templateObject94 || (_templateObject94 = _taggedTemplateLiteralLoose(["\n  ", "\n  display: flex;\n  flex-direction: column;\n  min-height: ", ";\n  ", " outline: none;\n  pointer-events: all;\n  z-index: ", ";\n  ", "\n  ", "\n  ", ";\n  ", ";\n"])), function (props) {
  return !props.modal ? _utils.baseStyle : '';
}, function (props) {
  return props.theme.global.size.xxsmall;
}, function (props) {
  return !props.plain && (props.background || props.theme.layer.background) && (0, _utils.backgroundStyle)(props.background || props.theme.layer.background, props.theme);
}, function (props) {
  return props.theme.layer.container.zIndex;
}, function (props) {
  return !props.plain && props.theme.layer.container.elevation && elevationStyle;
}, desktopContainerStyle, function (props) {
  if (props.responsive && props.theme.layer.responsiveBreakpoint) {
    var breakpoint = props.theme.global.breakpoints[props.theme.layer.responsiveBreakpoint];

    if (breakpoint) {
      return (0, _utils.breakpointStyle)(breakpoint, responsiveContainerStyle);
    }
  }

  return '';
}, function (props) {
  return props.theme.layer.container && props.theme.layer.container.extend;
});

exports.StyledContainer = StyledContainer;
StyledContainer.defaultProps = {};
Object.setPrototypeOf(StyledContainer.defaultProps, _defaultProps.defaultProps);