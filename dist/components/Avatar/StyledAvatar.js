"use strict";

exports.__esModule = true;
exports.StyledAvatarText = exports.StyledAvatar = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _defaultProps = require("../../default-props");

var _Box = require("../Box");

var _Text = require("../Text");

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledAvatarText = (0, _styledComponents["default"])(_Text.Text)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n"])), function (props) {
  return props.theme.avatar && props.theme.avatar.text && props.theme.avatar.text.fontWeight && "font-weight: " + props.theme.avatar.text.fontWeight + ";";
}, function (props) {
  return props.theme.avatar.text && props.theme.avatar.text.extend;
});
exports.StyledAvatarText = StyledAvatarText;
StyledAvatarText.defaultProps = {};
Object.setPrototypeOf(StyledAvatarText.defaultProps, _defaultProps.defaultProps);
var StyledAvatar = (0, _styledComponents["default"])(_Box.Box)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  ", "\n"])), function (props) {
  return props.theme.avatar && props.theme.avatar.extend;
});
exports.StyledAvatar = StyledAvatar;
StyledAvatar.defaultProps = {};
Object.setPrototypeOf(StyledAvatar.defaultProps, _defaultProps.defaultProps);