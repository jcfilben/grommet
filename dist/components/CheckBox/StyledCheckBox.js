"use strict";

exports.__esModule = true;
exports.StyledCheckBox = exports.StyledCheckBoxKnob = exports.StyledCheckBoxToggle = exports.StyledCheckBoxBox = exports.StyledCheckBoxInput = exports.StyledCheckBoxContainer = exports.StyledCheckBoxIcon = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _utils = require("../../utils");

var _defaultProps = require("../../default-props");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

// Note: since `fillStyle` is only used in one place, `justify-content` was
// added to it to simplify its logic. If this is ever reused somewhere else,
// consider the need of separating those once again.
var fillStyle = function fillStyle() {
  return "\n      width: 100%;\n      height: 100%;\n      max-width: none;\n      flex: 1 0 auto;\n      justify-content: space-between;\n    ";
};

var disabledStyle = "\n  opacity: 0.5;\n  cursor: default;\n";
var hoverStyle = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  :hover input:not([disabled]) + div,\n  :hover input:not([disabled]) + span {\n    border-color: ", ";\n  }\n  :hover {\n    background-color: ", ";\n  }\n"])), function (props) {
  var _props$theme$checkBox, _props$theme$checkBox2;

  return (0, _utils.normalizeColor)((_props$theme$checkBox = props.theme.checkBox.hover) == null ? void 0 : (_props$theme$checkBox2 = _props$theme$checkBox.border) == null ? void 0 : _props$theme$checkBox2.color, props.theme);
}, function (props) {
  var _props$theme$checkBox3, _props$theme$checkBox4;

  return (0, _utils.normalizeColor)(!props.disabled && ((_props$theme$checkBox3 = props.theme.checkBox.hover) == null ? void 0 : (_props$theme$checkBox4 = _props$theme$checkBox3.background) == null ? void 0 : _props$theme$checkBox4.color), props.theme);
});

var StyledCheckBoxIcon = _styledComponents["default"].svg(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  stroke-width: ", ";\n  stroke: ", ";\n  width: ", ";\n  height: ", ";\n  ", ";\n"])), function (props) {
  return props.theme.checkBox.check.thickness;
}, function (props) {
  return (0, _utils.normalizeColor)(props.theme.checkBox.color || 'control', props.theme);
}, function (props) {
  return props.theme.checkBox.icon.size || props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.icon.size || props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.icon.extend;
});

exports.StyledCheckBoxIcon = StyledCheckBoxIcon;
StyledCheckBoxIcon.defaultProps = {};
Object.setPrototypeOf(StyledCheckBoxIcon.defaultProps, _defaultProps.defaultProps);

var StyledCheckBoxContainer = _styledComponents["default"].label(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: row;\n  align-items: ", ";\n  user-select: none;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  // when the CheckBox has focus but there is no focusIndicator,\n  // apply the hover styling instead so that keyboard users know\n  // which CheckBox is active\n  ", "\n  ", "\n"])), function (props) {
  return typeof props.label === 'string' ? props.theme.checkBox.label.align : undefined;
}, function (props) {
  return props.fillProp ? fillStyle() : 'width: fit-content;';
}, function (props) {
  return (props.pad || props.theme.checkBox.pad) && (0, _utils.edgeStyle)('padding', props.pad || props.theme.checkBox.pad, props.responsive, props.theme.box.responsiveBreakpoint, props.theme);
}, function (props) {
  return props.disabled && disabledStyle;
}, function (props) {
  return !props.disabled && 'cursor: pointer;';
}, hoverStyle, function (props) {
  var _props$theme$checkBox5, _props$theme$checkBox6, _props$theme$checkBox7, _props$theme$checkBox8;

  return props.focus && !props.focusIndicator && "\n    input:not([disabled]) + div,\n    input:not([disabled]) + span {\n      border-color: " + (0, _utils.normalizeColor)((_props$theme$checkBox5 = props.theme.checkBox.hover) == null ? void 0 : (_props$theme$checkBox6 = _props$theme$checkBox5.border) == null ? void 0 : _props$theme$checkBox6.color, props.theme) + ";\n    }\n     \n    background-color: " + (0, _utils.normalizeColor)(!props.disabled && ((_props$theme$checkBox7 = props.theme.checkBox.hover) == null ? void 0 : (_props$theme$checkBox8 = _props$theme$checkBox7.background) == null ? void 0 : _props$theme$checkBox8.color), props.theme) + ";";
}, function (props) {
  return props.theme.checkBox.extend;
});

exports.StyledCheckBoxContainer = StyledCheckBoxContainer;
StyledCheckBoxContainer.defaultProps = {};
Object.setPrototypeOf(StyledCheckBoxContainer.defaultProps, _defaultProps.defaultProps);

var StyledCheckBoxInput = _styledComponents["default"].input(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  opacity: 0;\n  -moz-appearance: none;\n  width: 0;\n  height: 0;\n  margin: 0;\n\n  ", " :checked + span > span {\n    left: calc(\n      ", " -\n        ", "\n    );\n    background: ", ";\n  }\n"])), function (props) {
  return !props.disabled && 'cursor: pointer;';
}, function (props) {
  return props.theme.checkBox.toggle.size;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return (0, _utils.normalizeColor)(props.theme.checkBox.color || 'control', props.theme);
});

exports.StyledCheckBoxInput = StyledCheckBoxInput;
StyledCheckBoxInput.defaultProps = {};
Object.setPrototypeOf(StyledCheckBoxInput.defaultProps, _defaultProps.defaultProps);

var StyledCheckBoxBox = _styledComponents["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  ", ";\n  ", ";\n"])), function (props) {
  return props.focus && props.focusIndicator && (0, _utils.focusStyle)();
}, function (props) {
  return props.theme.checkBox.check.extend;
});

exports.StyledCheckBoxBox = StyledCheckBoxBox;
StyledCheckBoxBox.defaultProps = {};
Object.setPrototypeOf(StyledCheckBoxBox.defaultProps, _defaultProps.defaultProps);

var StyledCheckBoxToggle = _styledComponents["default"].span(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  vertical-align: middle;\n  display: inline-block;\n  width: ", ";\n  height: ", ";\n  border: ", " solid;\n  border-color: ", ";\n  border-radius: ", ";\n  background-color: ", ";\n\n  ", ";\n  ", ";\n"])), function (props) {
  return props.theme.checkBox.toggle.size;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.border.width;
}, function (props) {
  return (0, _utils.normalizeColor)(props.theme.checkBox.border.color, props.theme);
}, function (props) {
  return props.theme.checkBox.toggle.radius;
}, function (props) {
  return props.theme.checkBox.toggle.background ? (0, _utils.normalizeColor)(props.theme.checkBox.toggle.background, props.theme) : 'transparent';
}, function (props) {
  return props.focus && props.focusIndicator && (0, _utils.focusStyle)();
}, function (props) {
  return props.theme.checkBox.toggle.extend;
});

exports.StyledCheckBoxToggle = StyledCheckBoxToggle;
StyledCheckBoxToggle.defaultProps = {};
Object.setPrototypeOf(StyledCheckBoxToggle.defaultProps, _defaultProps.defaultProps);

var StyledCheckBoxKnob = _styledComponents["default"].span(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  position: relative;\n  display: inherit;\n  top: -", ";\n  left: -", ";\n  transition: all 0.3s;\n  width: ", ";\n  height: ", ";\n  background: ", ";\n  border-radius: ", ";\n  ", ";\n"])), function (props) {
  return props.theme.checkBox.border.width;
}, function (props) {
  return props.theme.checkBox.border.width;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return (0, _utils.normalizeColor)(props.theme.checkBox.toggle.color, props.theme);
}, function (props) {
  return props.theme.checkBox.toggle.radius;
}, function (props) {
  return props.theme.checkBox.toggle.knob.extend;
});

exports.StyledCheckBoxKnob = StyledCheckBoxKnob;
StyledCheckBoxKnob.defaultProps = {};
Object.setPrototypeOf(StyledCheckBoxKnob.defaultProps, _defaultProps.defaultProps);

var StyledCheckBox = _styledComponents["default"].div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n  flex-shrink: 0;\n"])));

exports.StyledCheckBox = StyledCheckBox;
StyledCheckBox.defaultProps = {};
Object.setPrototypeOf(StyledCheckBox.defaultProps, _defaultProps.defaultProps);