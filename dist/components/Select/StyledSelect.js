"use strict";

exports.__esModule = true;
exports.StyledContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../../utils");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledContainer = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  /* IE11 hack to get drop contents to not overflow */\n  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n    width: 100%;\n  }\n\n  ", ";\n\n  ", ";\n"])), function (props) {
  return props.dropHeight ? (0, _utils.sizeStyle)('max-height', props.dropHeight, props.theme) : 'max-height: inherit;';
}, function (props) {
  return props.theme.select.container && props.theme.select.container.extend;
});

exports.StyledContainer = StyledContainer;