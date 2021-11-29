"use strict";

exports.__esModule = true;
exports.StyledChart = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _utils = require("../../utils");

var _defaultProps = require("../../default-props");

var _templateObject, _templateObject2, _templateObject3;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var animateStyle = function animateStyle(_ref) {
  var theme = _ref.theme,
      typeProp = _ref.typeProp;
  var animateBounds;
  if (typeProp === 'line') // 200% allows the line to be squiggly
    animateBounds = ['stroke-dashoffset: 200%;', 'stroke-dashoffset: 0%;'];else if (typeProp === 'point') animateBounds = ['opacity: 0;', 'opacity: 1;'];else animateBounds = ['transform: scaleY(0);', 'transform: scaleY(1);'];
  return (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n    ", "\n    animation:\n    ", "\n    ", "\n    forwards;\n    ", "\n  "])), typeProp === 'line' && 'stroke-dasharray: 200%;', (0, _styledComponents.keyframes)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["from { ", " } to { ", " }"])), animateBounds[0], animateBounds[1]), theme.global.animation.duration, (typeProp === 'bar' || typeProp === 'area') && 'transform-origin: center bottom 0;');
};

var StyledChart = _styledComponents["default"].svg(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  display: block;\n  max-width: 100%;\n  overflow: visible;\n\n  ", "\n  ", "\n  ", ";\n"])), _utils.genericStyles, function (props) {
  return props.animate && animateStyle(props);
}, function (props) {
  return props.theme.chart && props.theme.chart.extend;
});

exports.StyledChart = StyledChart;
StyledChart.defaultProps = {};
Object.setPrototypeOf(StyledChart.defaultProps, _defaultProps.defaultProps);