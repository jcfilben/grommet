var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled, { css, keyframes } from 'styled-components';
import { normalizeColor, genericStyles } from '../../utils';
import { defaultProps } from '../../default-props';
var StyledHour = styled.line(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  stroke-width: ", ";\n  stroke: ", ";\n  transition: stroke 1s ease-out;\n"])), function (props) {
  return props.theme.clock.analog.hour.width;
}, function (props) {
  return normalizeColor(props.theme.clock.analog.hour.color, props.theme);
});
StyledHour.defaultProps = {};
Object.setPrototypeOf(StyledHour.defaultProps, defaultProps);
var StyledMinute = styled.line(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  stroke-width: ", ";\n  stroke: ", ";\n  transition: stroke 1s ease-out;\n"])), function (props) {
  return props.theme.clock.analog.minute.width;
}, function (props) {
  return normalizeColor(props.theme.clock.analog.minute.color, props.theme);
});
StyledMinute.defaultProps = {};
Object.setPrototypeOf(StyledMinute.defaultProps, defaultProps);
var StyledSecond = styled.line(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  stroke-width: ", ";\n  stroke: ", ";\n  transition: stroke 1s ease-out;\n"])), function (props) {
  return props.theme.clock.analog.second.width;
}, function (props) {
  return normalizeColor(props.theme.clock.analog.second.color, props.theme);
});
StyledSecond.defaultProps = {};
Object.setPrototypeOf(StyledSecond.defaultProps, defaultProps);
var StyledAnalog = styled.svg(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  width: ", ";\n  height: ", ";\n\n  ", "\n  ", ";\n"])), function (props) {
  return props.theme.clock.analog.size[props.size];
}, function (props) {
  return props.theme.clock.analog.size[props.size];
}, genericStyles, function (props) {
  return props.theme.clock.analog && props.theme.clock.analog.extend;
});
StyledAnalog.defaultProps = {};
Object.setPrototypeOf(StyledAnalog.defaultProps, defaultProps);

var sizeStyle = function sizeStyle(props) {
  // size is a combination of the size and height properties
  var size = props.size || 'medium';
  var data = props.theme.clock.digital.text[size] || {};
  return css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n    font-size: ", ";\n    line-height: ", ";\n  "])), data.size || props.theme.clock.digital.text.medium.size, data.height || props.theme.clock.digital.text.medium.height);
};

var StyledDigitalDigit = styled.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n  position: relative;\n  width: 0.8em;\n  text-align: center;\n  overflow: hidden;\n  ", ";\n"])), function (props) {
  return sizeStyle(props);
});
StyledDigitalDigit.defaultProps = {};
Object.setPrototypeOf(StyledDigitalDigit.defaultProps, defaultProps);
var previousUp = keyframes(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n  0% { transform: translateY(0); }\n  100% { transform: translateY(-100%); }\n"])));
var previousDown = keyframes(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n  0% { transform: translateY(0); }\n  100% { transform: translateY(100%); }\n"])));
var StyledDigitalPrevious = styled.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0.8em;\n  text-align: center;\n  animation: ", "\n    0.5s forwards;\n"])), function (props) {
  return props.direction === 'down' ? previousDown : previousUp;
});
StyledDigitalPrevious.defaultProps = {};
Object.setPrototypeOf(StyledDigitalPrevious.defaultProps, defaultProps);
var nextUp = keyframes(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n  0% { transform: translateY(100%); }\n  100% { transform: translateY(0); }\n"])));
var nextDown = keyframes(_templateObject11 || (_templateObject11 = _taggedTemplateLiteralLoose(["\n  0% { transform: translateY(-100%); }\n  100% { transform: translateY(0); }\n"])));
var StyledDigitalNext = styled.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0.8em;\n  text-align: center;\n  animation: ", " 0.5s\n    forwards;\n"])), function (props) {
  return props.direction === 'down' ? nextDown : nextUp;
});
StyledDigitalNext.defaultProps = {};
Object.setPrototypeOf(StyledDigitalNext.defaultProps, defaultProps);
export { StyledHour, StyledMinute, StyledSecond, StyledAnalog, StyledDigitalDigit, StyledDigitalPrevious, StyledDigitalNext };