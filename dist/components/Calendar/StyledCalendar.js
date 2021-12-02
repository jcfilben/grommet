"use strict";

exports.__esModule = true;
exports.StyledWeeksContainer = exports.StyledWeeks = exports.StyledWeek = exports.StyledDayContainer = exports.StyledDay = exports.StyledCalendar = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _utils = require("../../utils");

var _defaultProps = require("../../default-props");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var sizeStyle = function sizeStyle(props) {
  var data = props.theme.calendar[props.sizeProp];
  var width = props.fillContainer ? '100%' : props.theme.global.size[props.sizeProp];
  return (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n    font-size: ", ";\n    line-height: ", ";\n    width: ", ";\n    ", "\n  "])), data.fontSize, data.lineHeight, width, function (p) {
    return p.fillContainer && 'height: 100%;';
  });
};

var StyledCalendar = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  ", "\n"])), _utils.genericStyles, function (props) {
  return sizeStyle(props);
}, function (props) {
  return props.theme.calendar && props.theme.calendar.extend;
});

exports.StyledCalendar = StyledCalendar;
StyledCalendar.defaultProps = {};
Object.setPrototypeOf(StyledCalendar.defaultProps, _defaultProps.defaultProps);

var weeksContainerSizeStyle = function weeksContainerSizeStyle(props) {
  var height = props.fillContainer ? '100%' : (0, _utils.parseMetricToNum)(props.theme.calendar[props.sizeProp].daySize) * 6 + "px";
  return "\n    height: " + height + ";\n\n  ";
};

var StyledWeeksContainer = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  overflow: hidden;\n  ", "\n  ", ";\n"])), function (props) {
  return weeksContainerSizeStyle(props);
}, function (props) {
  return props.focus && !props.plain && (0, _utils.focusStyle)();
});

exports.StyledWeeksContainer = StyledWeeksContainer;
StyledWeeksContainer.defaultProps = {};
Object.setPrototypeOf(StyledWeeksContainer.defaultProps, _defaultProps.defaultProps);

var slideStyle = function slideStyle(props) {
  var _props$slide = props.slide,
      direction = _props$slide.direction,
      weeks = _props$slide.weeks,
      sizeProp = props.sizeProp,
      theme = props.theme;
  var _theme$calendar$sizeP = theme.calendar[sizeProp],
      daySize = _theme$calendar$sizeP.daySize,
      slideDuration = _theme$calendar$sizeP.slideDuration;
  var amount = (0, _utils.parseMetricToNum)(daySize) * weeks;
  var translateYFrom = direction === 'down' ? "-" + amount + "px" : '0';
  var translateYTo = direction === 'up' ? "-" + amount + "px" : '0';
  var slideTransition = (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n    0% {\n      transform: translateY(", ");\n    }\n    100% {\n      transform: translateY(", ");\n    }\n  "])), translateYFrom, translateYTo);
  return (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n    animation: ", " ", " forwards;\n  "])), (0, _styledComponents.keyframes)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["", ""])), slideTransition), slideDuration);
};

var weeksSizeStyle = function weeksSizeStyle() {
  return (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"])));
};

var StyledWeeks = _styledComponents["default"].div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n  position: relative;\n  ", "\n  ", ";\n"])), function (props) {
  return props.fillContainer && weeksSizeStyle();
}, function (props) {
  return props.slide && slideStyle(props);
});

exports.StyledWeeks = StyledWeeks;
StyledWeeks.defaultProps = {};
Object.setPrototypeOf(StyledWeeks.defaultProps, _defaultProps.defaultProps);

var StyledWeek = _styledComponents["default"].div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: space-between;\n  ", "\n"])), function (props) {
  return props.fillContainer && 'flex: 1;';
});

exports.StyledWeek = StyledWeek;
StyledWeek.defaultProps = {};
Object.setPrototypeOf(StyledWeek.defaultProps, _defaultProps.defaultProps); // The width of 14.3% is derived from dividing 100/7. We want the
// widths of 7 days to equally fill 100% of the row.

var StyledDayContainer = _styledComponents["default"].div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n  flex: 0 1 auto;\n  ", "\n"])), function (props) {
  return props.fillContainer && 'width: 14.3%;';
});

exports.StyledDayContainer = StyledDayContainer;
StyledDayContainer.defaultProps = {};
Object.setPrototypeOf(StyledDayContainer.defaultProps, _defaultProps.defaultProps);

var daySizeStyle = function daySizeStyle(props) {
  var data = props.theme.calendar[props.sizeProp];
  return (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteralLoose(["\n    width: ", ";\n    height: ", ";\n  "])), props.fillContainer ? '100%' : data.daySize, props.fillContainer ? '100%' : data.daySize);
};

var StyledDay = _styledComponents["default"].div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), function (props) {
  return daySizeStyle(props);
}, function (props) {
  return props.isSelected && (0, _utils.backgroundStyle)('control', props.theme) || props.inRange && (0, _utils.backgroundStyle)({
    color: 'control',
    opacity: 'weak'
  }, props.theme);
}, function (props) {
  return props.otherMonth && 'opacity: 0.5;';
}, function (props) {
  return props.isSelected && 'font-weight: bold;';
}, function (props) {
  return (// when theme uses kind Buttons, since we use children for Button,
    // we have to special case how we handle disabled days here
    props.disabledProp && props.theme.button["default"] && (0, _utils.kindPartStyles)(props.theme.button.disabled, props.theme)
  );
}, function (props) {
  return props.theme.calendar && props.theme.calendar.day && props.theme.calendar.day.extend;
});

exports.StyledDay = StyledDay;
StyledDay.defaultProps = {};
Object.setPrototypeOf(StyledDay.defaultProps, _defaultProps.defaultProps);