"use strict";

exports.__esModule = true;
exports.StyledStackLayer = exports.StyledStack = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _utils = require("../../utils");

var _defaultProps = require("../../default-props");

var _templateObject, _templateObject2, _templateObject3;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var fillStyle = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  flex-grow: 1;\n  display: flex;\n"])), function (props) {
  return props.fillContainer === true || props.fillContainer === 'horizontal' ? "\n        width: 100%;\n        max-width: none;\n      " : '';
}, function (props) {
  return props.fillContainer === true || props.fillContainer === 'vertical' ? 'height: 100%;' : '';
});

var StyledStack = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  position: relative;\n  ", "\n  ", "\n  ", "\n"])), _utils.genericStyles, function (props) {
  return props.fillContainer && fillStyle;
}, function (props) {
  return props.theme.stack && props.theme.stack.extend;
});

exports.StyledStack = StyledStack;
StyledStack.defaultProps = {};
Object.setPrototypeOf(StyledStack.defaultProps, _defaultProps.defaultProps);
var styleMap = {
  fill: "\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  ",
  center: "\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  ",
  left: "\n    top: 50%;\n    left: 0;\n    transform: translateY(-50%);\n  ",
  right: "\n    top: 50%;\n    right: 0;\n    transform: translateY(-50%);\n  ",
  top: "\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n  ",
  bottom: "\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n  ",
  'top-left': "\n    top: 0;\n    left: 0;\n  ",
  'bottom-left': "\n    bottom: 0;\n    left: 0;\n  ",
  'top-right': "\n    top: 0;\n    right: 0;\n  ",
  'bottom-right': "\n    bottom: 0;\n    right: 0;\n  "
};

var StyledStackLayer = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  position: ", ";\n  ", "\n  ", "\n  ", "\n  ", "\n"])), function (props) {
  return props.guiding ? 'relative' : 'absolute';
}, function (props) {
  return props.guiding && 'display: block;';
}, function (props) {
  return !props.guiding && styleMap[props.anchor || 'fill'] + ";";
}, function (props) {
  return props.fillContainer && "\n    width: 100%;\n    height: 100%;\n  ";
}, function (props) {
  return !props.interactive && "pointer-events: none;";
});

exports.StyledStackLayer = StyledStackLayer;
StyledStackLayer.defaultProps = {};
Object.setPrototypeOf(StyledStackLayer.defaultProps, _defaultProps.defaultProps);