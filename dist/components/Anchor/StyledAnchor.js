"use strict";

exports.__esModule = true;
exports.StyledAnchor = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _utils = require("../../utils");

var _defaultProps = require("../../default-props");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var disabledStyle = "\n  opacity: 0.3;\n  cursor: default;\n  text-decoration: none;\n";

var sizeStyle = function sizeStyle(props) {
  if (props.size) {
    var size = props.size || 'medium';
    var data = props.theme.text[size];
    return (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n      font-size: ", ";\n      line-height: ", ";\n    "])), data ? data.size : size, data ? data.height : 'normal');
  }

  return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n    font-size: inherit;\n    line-height: inherit;\n  "])));
};

var StyledAnchor = _styledComponents["default"].a.withConfig({
  // prevent custom props from bleeding into DOM
  // https://styled-components.com/docs/api#shouldforwardprop
  shouldForwardProp: function shouldForwardProp(prop, defaultValidatorFn) {
    return !['as', 'colorProp', 'focus', 'hasIcon', 'hasLabel', 'reverse'].includes(prop) && defaultValidatorFn(prop);
  }
})(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  ", "\n  color: ", ";\n  ", "\n  text-decoration: ", ";\n  cursor: pointer;\n  ", "\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), function (props) {
  return sizeStyle(props);
}, function (props) {
  return (0, _utils.normalizeColor)(props.colorProp || props.theme.anchor.color, props.theme);
}, function (props) {
  return props.weight ? "font-weight: " + props.weight + ";" : props.theme.anchor.fontWeight && "font-weight: " + props.theme.anchor.fontWeight + ";";
}, function (props) {
  return props.hasIcon ? 'none' : props.theme.anchor.textDecoration;
}, _utils.genericStyles, function (props) {
  return !props.disabled && props.theme.anchor.hover && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n      &:hover {\n        ", "\n        ", "\n      ", "\n      }\n    "])), props.theme.anchor.hover.textDecoration && "text-decoration: " + props.theme.anchor.hover.textDecoration + ";", props.theme.anchor.hover.fontWeight && "font-weight: " + props.theme.anchor.hover.fontWeight + ";", props.theme.anchor.hover.extend);
}, function (props) {
  return props.hasIcon && !props.hasLabel && "\n    padding: " + props.theme.global.edgeSize.small + ";\n  ";
}, function (props) {
  return props.disabled && disabledStyle;
}, function (props) {
  return props.focus && (0, _utils.focusStyle)();
}, function (props) {
  return props.theme.anchor.extend;
});

exports.StyledAnchor = StyledAnchor;
StyledAnchor.defaultProps = {};
Object.setPrototypeOf(StyledAnchor.defaultProps, _defaultProps.defaultProps);