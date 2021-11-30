"use strict";

exports.__esModule = true;
exports.StyledSeparator = exports.StyledContainer = exports.StyledPaginationButton = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Button = require("../Button");

var _Text = require("../Text");

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var sizeStyle = function sizeStyle(props) {
  var style = props.theme.pagination.button && props.theme.pagination.button.size && props.theme.pagination.button.size[props.size || 'medium'];
  return style ? {
    content: {
      fontSize: style.font && style.font.size,
      lineHeight: style.font && style.font.height
    },
    container: {
      height: style.height,
      minWidth: style.width
    }
  } : '';
};

var StyledPaginationButton = (0, _styledComponents["default"])(_Button.Button)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  > svg {\n    vertical-align: middle;\n  }\n  ", ";\n"])), function (props) {
  return sizeStyle(props).content;
});
exports.StyledPaginationButton = StyledPaginationButton;

var StyledContainer = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  max-width: 100%;\n  ", ";\n  ", ";\n"])), function (props) {
  return sizeStyle(props).container;
}, function (props) {
  return props.theme.pagination.control && props.theme.pagination.control.extend;
});

exports.StyledContainer = StyledContainer;
var StyledSeparator = (0, _styledComponents["default"])(_Text.Text)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  font-weight: bold;\n  ", ";\n  ", ";\n"])), function (props) {
  return "font-size: " + (sizeStyle(props).content && sizeStyle(props).content.fontSize);
}, function (props) {
  return "line-height: " + (sizeStyle(props).content && sizeStyle(props).content.lineHeight);
});
exports.StyledSeparator = StyledSeparator;