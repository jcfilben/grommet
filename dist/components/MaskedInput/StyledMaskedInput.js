"use strict";

exports.__esModule = true;
exports.StyledMaskedInputContainer = exports.StyledMaskedInput = exports.StyledIcon = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../../utils");

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledMaskedInput = _styledComponents["default"].input(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", ";\n"])), _utils.inputStyle, function (props) {
  return props.plain && _utils.plainInputStyle;
}, function (props) {
  return props.icon && (props.reverse ? "padding-right: " + props.theme.global.edgeSize.large + ";" : "padding-left: " + props.theme.global.edgeSize.large + ";");
}, function (props) {
  return props.disabled && (0, _utils.disabledStyle)(props.theme.maskedInput.disabled && props.theme.maskedInput.disabled.opacity);
}, function (props) {
  return props.textAlign && _utils.textAlignStyle;
}, function (props) {
  return props.theme.maskedInput && props.theme.maskedInput.extend;
});

exports.StyledMaskedInput = StyledMaskedInput;

var StyledMaskedInputContainer = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  position: relative;\n  width: 100%;\n\n  ", ";\n"])), function (props) {
  return props.theme.maskedInput && props.theme.maskedInput.container && props.theme.maskedInput.container.extend;
});

exports.StyledMaskedInputContainer = StyledMaskedInputContainer;

var StyledIcon = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  display: flex;\n  justify: center;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n  ", "\n"])), function (props) {
  return props.reverse ? "right: " + (0, _utils.getInputPadBySide)(props, 'right') + ";" : "left: " + (0, _utils.getInputPadBySide)(props, 'left') + ";";
});

exports.StyledIcon = StyledIcon;