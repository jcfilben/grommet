"use strict";

exports.__esModule = true;
exports.StyledCheckBoxGroup = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Box = require("../Box");

var _defaultProps = require("../../default-props");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledCheckBoxGroup = (0, _styledComponents["default"])(_Box.Box)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  ", "\n"])), function (props) {
  return props.theme.checkBoxGroup && props.theme.checkBoxGroup.container && props.theme.checkBoxGroup.container.extend;
});
exports.StyledCheckBoxGroup = StyledCheckBoxGroup;
StyledCheckBoxGroup.defaultProps = {};
Object.setPrototypeOf(StyledCheckBoxGroup.defaultProps, _defaultProps.defaultProps);