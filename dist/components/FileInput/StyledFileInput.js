"use strict";

exports.__esModule = true;
exports.StyledFileInput = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../../utils");

var _defaultProps = require("../../default-props");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledFileInput = _styledComponents["default"].input(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  ", "\n  opacity: 0;\n  border: none;\n  ", "\n  ", "\n\n  &::-moz-focus-inner {\n    border: none;\n    outline: none;\n  }\n"])), _utils.inputStyle, function (props) {
  return !props.disabled && 'cursor: pointer;';
}, function (props) {
  return props.rightOffset && "\n    width: calc(100% - " + props.rightOffset + "px);\n    right: " + props.rightOffset + "px;\n    ";
});

exports.StyledFileInput = StyledFileInput;
StyledFileInput.defaultProps = {};
Object.setPrototypeOf(StyledFileInput.defaultProps, _defaultProps.defaultProps);