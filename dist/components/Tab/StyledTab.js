"use strict";

exports.__esModule = true;
exports.StyledTab = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _utils = require("../../utils");

var _defaultProps = require("../../default-props");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var tabHoverStyle = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  &:hover {\n    ", "\n    ", "\n    ", ";\n  }\n"])), function (props) {
  return props.theme.tab.hover.background && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n        background: ", ";\n      "])), (0, _utils.normalizeColor)(props.theme.tab.hover.background, props.theme));
}, function (props) {
  return props.theme.tab.hover.color && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n        color: ", ";\n      "])), (0, _utils.normalizeColor)(props.theme.tab.hover.color, props.theme));
}, function (props) {
  return props.theme.tab.hover.extend;
});

var StyledTab = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  ", "\n  ", "\n"])), _utils.genericStyles, function (props) {
  return !props.plain && !props.disabled && props.theme.tab.hover && tabHoverStyle;
}, function (props) {
  return props.disabled && props.theme.tab.disabled;
}, function (props) {
  return props.theme.tab.extend;
});

exports.StyledTab = StyledTab;
StyledTab.defaultProps = {};
Object.setPrototypeOf(StyledTab.defaultProps, _defaultProps.defaultProps);