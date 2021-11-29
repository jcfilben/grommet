var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled, { css, keyframes } from 'styled-components';
import { backgroundStyle, focusStyle, genericStyles, kindPartStyles, parseMetricToNum } from '../../utils';
import { defaultProps } from '../../default-props';

var sizeStyle = function sizeStyle(props) {
  var data = props.theme.calendar[props.sizeProp];
  var width = props.fillContainer ? '100%' : props.theme.global.size[props.sizeProp];
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n    font-size: ", ";\n    line-height: ", ";\n    width: ", ";\n    ", "\n  "])), data.fontSize, data.lineHeight, width, function (p) {
    return p.fillContainer && 'height: 100%;';
  });
};

var StyledCalendar = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  ", "\n"])), genericStyles, function (props) {
  return sizeStyle(props);
}, function (props) {
  return props.theme.calendar && props.theme.calendar.extend;
});
StyledCalendar.defaultProps = {};
Object.setPrototypeOf(StyledCalendar.defaultProps, defaultProps);

var weeksContainerSizeStyle = function weeksContainerSizeStyle(props) {
  var height = props.fillContainer ? '100%' : parseMetricToNum(props.theme.calendar[props.sizeProp].daySize) * 6 + "px";
  return "\n    height: " + height + ";\n\n  ";
};

var StyledWeeksContainer = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  overflow: hidden;\n  ", "\n  ", ";\n"])), function (props) {
  return weeksContainerSizeStyle(props);
}, function (props) {
  return props.focus && !props.plain && focusStyle();
});
StyledWeeksContainer.defaultProps = {};
Object.setPrototypeOf(StyledWeeksContainer.defaultProps, defaultProps);

var slideStyle = function slideStyle(props) {
  var _props$slide = props.slide,
      direction = _props$slide.direction,
      weeks = _props$slide.weeks,
      sizeProp = props.sizeProp,
      theme = props.theme;
  var _theme$calendar$sizeP = theme.calendar[sizeProp],
      daySize = _theme$calendar$sizeP.daySize,
      slideDuration = _theme$calendar$sizeP.slideDuration;
  var amount = parseMetricToNum(daySize) * weeks;
  var translateYFrom = direction === 'down' ? "-" + amount + "px" : '0';
  var translateYTo = direction === 'up' ? "-" + amount + "px" : '0';
  var slideTransition = css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n    0% {\n      transform: translateY(", ");\n    }\n    100% {\n      transform: translateY(", ");\n    }\n  "])), translateYFrom, translateYTo);
  return css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n    animation: ", " ", " forwards;\n  "])), keyframes(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["", ""])), slideTransition), slideDuration);
};

var weeksSizeStyle = function weeksSizeStyle() {
  return css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"])));
};

var StyledWeeks = styled.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n  position: relative;\n  ", "\n  ", ";\n"])), function (props) {
  return props.fillContainer && weeksSizeStyle();
}, function (props) {
  return props.slide && slideStyle(props);
});
StyledWeeks.defaultProps = {};
Object.setPrototypeOf(StyledWeeks.defaultProps, defaultProps);
var StyledWeek = styled.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: space-between;\n  ", "\n"])), function (props) {
  return props.fillContainer && 'flex: 1;';
});
StyledWeek.defaultProps = {};
Object.setPrototypeOf(StyledWeek.defaultProps, defaultProps); // The width of 14.3% is derived from dividing 100/7. We want the
// widths of 7 days to equally fill 100% of the row.

var StyledDayContainer = styled.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n  flex: 0 1 auto;\n  ", "\n"])), function (props) {
  return props.fillContainer && 'width: 14.3%;';
});
StyledDayContainer.defaultProps = {};
Object.setPrototypeOf(StyledDayContainer.defaultProps, defaultProps);

var daySizeStyle = function daySizeStyle(props) {
  var data = props.theme.calendar[props.sizeProp];
  return css(_templateObject11 || (_templateObject11 = _taggedTemplateLiteralLoose(["\n    width: ", ";\n    height: ", ";\n  "])), props.fillContainer ? '100%' : data.daySize, props.fillContainer ? '100%' : data.daySize);
};

var StyledDay = styled.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), function (props) {
  return daySizeStyle(props);
}, function (props) {
  return props.isSelected && backgroundStyle('control', props.theme) || props.inRange && backgroundStyle({
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
    props.disabledProp && props.theme.button["default"] && kindPartStyles(props.theme.button.disabled, props.theme)
  );
}, function (props) {
  return props.theme.calendar && props.theme.calendar.day && props.theme.calendar.day.extend;
});
StyledDay.defaultProps = {};
Object.setPrototypeOf(StyledDay.defaultProps, defaultProps);
export { StyledCalendar, StyledWeeksContainer, StyledWeeks, StyledWeek, StyledDayContainer, StyledDay };