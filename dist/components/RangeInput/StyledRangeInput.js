"use strict";

exports.__esModule = true;
exports.StyledRangeInput = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _utils = require("../../utils");

var _defaultProps = require("../../default-props");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

// opacity of the bound trumps the track opacity
var getBoundOpacity = function getBoundOpacity(props, bound) {
  return props.theme.rangeInput && props.theme.rangeInput.track && props.theme.rangeInput.track[bound] && props.theme.rangeInput.track[bound].opacity ? props.theme.rangeInput.track[bound].opacity : 1;
};

var getBoundColor = function getBoundColor(props, bound) {
  if (props.theme.rangeInput && props.theme.rangeInput.track && props.theme.rangeInput.track[bound] && props.theme.rangeInput.track[bound].color) {
    return (0, _utils.getRGBA)((0, _utils.normalizeColor)(props.theme.rangeInput.track[bound].color, props.theme), getBoundOpacity(props, bound));
  } // If bound color is undefined pick the default track color with bound opacity


  return (0, _utils.getRGBA)((0, _utils.normalizeColor)(props.theme.rangeInput.track.color, props.theme), getBoundOpacity(props, bound));
};

var trackColorStyle = function trackColorStyle(props) {
  var _props$theme$rangeInp, _props$theme$rangeInp2;

  var max = props.max,
      min = props.min;
  var thumbPosition = (props.value - min) / (max - min) * 100 + "%";
  var defaultTrackColor; // backward compatibility in case no bounds are defined

  if (props.theme.rangeInput && props.theme.rangeInput.track && !props.theme.rangeInput.track.lower && !props.theme.rangeInput.track.upper) {
    var color = (0, _utils.getRGBA)((0, _utils.normalizeColor)(props.theme.rangeInput.track.color, props.theme), 0.2); // Since the track color was changed from border-with-opacity to just border
    // this condition is used to make sure we are applying the opacity correctly
    // for 'border' color (for backward compatibility purposes).

    if (color === 'rgba(0, 0, 0, 0.2)') {
      defaultTrackColor = color;
    } // no bounds are defined but color may have changed
    else {
      defaultTrackColor = (0, _utils.getRGBA)((0, _utils.normalizeColor)(props.theme.rangeInput.track.color, props.theme), props.theme.rangeInput.track.opacity || 1);
    }

    if (!props.color) return "background: " + defaultTrackColor;
  }

  var upperTrackColor = (_props$theme$rangeInp = props.theme.rangeInput.track) != null && _props$theme$rangeInp.upper ? getBoundColor(props, 'upper') : defaultTrackColor;
  var lowerTrackColor = (_props$theme$rangeInp2 = props.theme.rangeInput.track) != null && _props$theme$rangeInp2.lower ? getBoundColor(props, 'lower') : (0, _utils.getRGBA)((0, _utils.normalizeColor)(props.theme.global.colors.control, props.theme), props.theme.rangeInput.track.opacity || 1);

  if (typeof props.color === 'string' || typeof props.color === 'object' && !Array.isArray(props.color)) {
    lowerTrackColor = (0, _utils.normalizeColor)(props.color, props.theme);
    return "background: linear-gradient(\n        to right,\n        " + lowerTrackColor + ",\n        " + lowerTrackColor + " " + thumbPosition + ",\n        " + upperTrackColor + " " + thumbPosition + ",\n        " + upperTrackColor + "\n      );\n    ";
  }

  if (Array.isArray(props.color)) {
    var arrayOfTrackColors = props.color;
    var valuePercentage = 0;
    var result = "background: linear-gradient(to right,";

    for (var index = 0; index < arrayOfTrackColors.length; index += 1) {
      var _arrayOfTrackColors$i = arrayOfTrackColors[index],
          value = _arrayOfTrackColors$i.value,
          _color = _arrayOfTrackColors$i.color,
          opacity = _arrayOfTrackColors$i.opacity;
      result += (0, _utils.getRGBA)((0, _utils.normalizeColor)(_color, props.theme), opacity || 1) + " " + valuePercentage + "%,";

      if (props.value >= value) {
        valuePercentage = (value - min) / (max - min) * 100;
        result += (0, _utils.getRGBA)((0, _utils.normalizeColor)(_color, props.theme), opacity || 1) + " " + valuePercentage + "%,";
      } else {
        result += (0, _utils.getRGBA)((0, _utils.normalizeColor)(_color, props.theme), opacity || 1) + " " + thumbPosition + ",";
        result += upperTrackColor + " " + thumbPosition + ", " + upperTrackColor + ")";
        break;
      }

      if (index === arrayOfTrackColors.length - 1) {
        result += upperTrackColor + " " + valuePercentage + "%, " + upperTrackColor + ")";
      }
    }

    return result;
  }

  return "background: linear-gradient(\n      to right,\n      " + lowerTrackColor + ",\n      " + lowerTrackColor + " " + thumbPosition + ",\n      " + upperTrackColor + " " + thumbPosition + ",\n      " + upperTrackColor + "\n    );\n  ";
};

var disabledRangeInputStyle = function disabledRangeInputStyle(props, context) {
  var _props$theme$rangeInp3;

  return (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n"])), (0, _utils.disabledStyle)(props.theme.rangeInput.disabled.opacity), ((_props$theme$rangeInp3 = props.theme.rangeInput.disabled[context]) == null ? void 0 : _props$theme$rangeInp3.color) && "background: " + (0, _utils.normalizeColor)(props.theme.rangeInput.disabled[context].color, props.theme) + ";");
};

var rangeTrackStyle = (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  width: 100%;\n  height: ", ";\n  ", ";\n  ", "\n  ", ";\n"])), function (props) {
  return props.theme.rangeInput.track.height;
}, function (props) {
  return trackColorStyle(props);
}, function (props) {
  return props.theme.rangeInput && props.theme.rangeInput.track && props.theme.rangeInput.track.extend;
}, function (props) {
  var _props$theme, _props$theme$rangeInp4;

  return props.disabled && ((_props$theme = props.theme) == null ? void 0 : (_props$theme$rangeInp4 = _props$theme.rangeInput) == null ? void 0 : _props$theme$rangeInp4.disabled) && disabledRangeInputStyle(props, 'track');
});
var rangeThumbStyle = (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  position: relative;\n  border-radius: ", ";\n  height: ", ";\n  width: ", ";\n  overflow: visible;\n  background: ", ";\n  -webkit-appearance: none;\n  cursor: pointer;\n  ", "\n  ", ";\n"])), function (props) {
  return props.theme.global.spacing;
}, function (props) {
  return props.theme.global.spacing;
}, function (props) {
  return props.theme.global.spacing;
}, function (props) {
  return (0, _utils.normalizeColor)(props.theme.rangeInput.thumb.color || 'control', props.theme);
}, function (props) {
  return props.theme.rangeInput && props.theme.rangeInput.thumb && props.theme.rangeInput.thumb.extend;
}, function (props) {
  var _props$theme2, _props$theme2$rangeIn;

  return props.disabled && ((_props$theme2 = props.theme) == null ? void 0 : (_props$theme2$rangeIn = _props$theme2.rangeInput) == null ? void 0 : _props$theme2$rangeIn.disabled) && disabledRangeInputStyle(props, 'thumb');
});
var firefoxMicrosoftThumbStyle = (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  ", " margin-top: 0px;\n  height: ", ";\n  width: ", ";\n  ", "\n  ", "\n"])), rangeThumbStyle, function (props) {
  return props.theme.global.spacing;
}, function (props) {
  return props.theme.global.spacing;
}, function (props) {
  return props.focus && (0, _utils.focusStyle)();
}, function (props) {
  return props.theme.rangeInput && props.theme.rangeInput.thumb && props.theme.rangeInput.thumb.extend;
});
/* eslint-disable max-len */

var StyledRangeInput = _styledComponents["default"].input(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  position: relative;\n  -webkit-appearance: none;\n  border-color: transparent;\n  height: ", ";\n  width: 100%;\n  padding: 0px;\n  cursor: ", ";\n  background: transparent;\n\n  ", "\n\n  &::-moz-focus-inner {\n    border: none;\n  }\n\n  &::-moz-focus-outer {\n    border: none;\n  }\n\n  &::-webkit-slider-runnable-track {\n    ", "\n  }\n\n  &::-webkit-slider-thumb {\n    margin-top: -", "px;\n    ", "\n    ", "\n  }\n\n  &::-moz-range-track {\n    ", "\n  }\n\n  &::-moz-range-thumb {\n    ", "\n  }\n\n  &::-ms-thumb {\n    ", "\n  }\n\n  ", "\n\n  &::-ms-track {\n    ", "\n    border-color: transparent;\n    color: transparent;\n  }\n\n  &::-ms-fill-lower {\n    ", ";\n    border-color: transparent;\n  }\n\n  &::-ms-fill-upper {\n    ", ";\n    border-color: transparent;\n  }\n\n  &:focus::-webkit-slider-thumb {\n    ", "\n  }\n\n  &:focus-visible {\n    outline: 0;\n  }\n  // to remove browser default on safari\n  &:focus {\n    outline: none;\n  }\n\n  ", "\n"])), function (props) {
  return props.theme.global.spacing;
}, function (props) {
  return props.disabled ? 'default' : 'pointer';
}, function (props) {
  return props.theme.rangeInput.pad && (0, _utils.edgeStyle)('padding', props.theme.rangeInput.pad, props.responsive, props.theme.box.responsiveBreakpoint, props.theme);
}, rangeTrackStyle, function (props) {
  return ((0, _utils.parseMetricToNum)(props.theme.global.spacing) - (0, _utils.parseMetricToNum)(props.theme.rangeInput.track.height || 0)) * 0.5;
}, rangeThumbStyle, function (props) {
  return !props.disabled && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n        &:hover {\n          box-shadow: 0px 0px 0px 2px\n            ", ";\n        }\n      "])), (0, _utils.normalizeColor)(props.theme.rangeInput.thumb.color || 'control', props.theme));
}, rangeTrackStyle, firefoxMicrosoftThumbStyle, firefoxMicrosoftThumbStyle, function (props) {
  return !props.disabled && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n      &:hover::-moz-range-thumb {\n        box-shadow: 0px 0px 0px 2px\n          ", ";\n      }\n\n      &:hover::-ms-thumb {\n        box-shadow: 0px 0px 0px 2px\n          ", ";\n      }\n    "])), (0, _utils.normalizeColor)(props.theme.rangeInput.thumb.color || 'control', props.theme), (0, _utils.normalizeColor)(props.theme.rangeInput.thumb.color || 'control', props.theme));
}, rangeTrackStyle, function (props) {
  return trackColorStyle(props, 'lower');
}, function (props) {
  return trackColorStyle(props, 'upper');
}, function (props) {
  return props.focus && (0, _utils.focusStyle)();
}, function (props) {
  return props.theme.rangeInput && props.theme.rangeInput.extend;
});
/* eslint-enable max-len */


exports.StyledRangeInput = StyledRangeInput;
StyledRangeInput.defaultProps = {};
Object.setPrototypeOf(StyledRangeInput.defaultProps, _defaultProps.defaultProps);