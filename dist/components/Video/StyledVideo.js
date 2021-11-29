"use strict";

exports.__esModule = true;
exports.StyledVideoScrubber = exports.StyledVideoControls = exports.StyledVideoContainer = exports.StyledVideo = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _utils = require("../../utils");

var _defaultProps = require("../../default-props");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var FIT_MAP = {
  cover: 'cover',
  contain: 'contain'
};
var fitStyle = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  flex: 1 1;\n  min-height: 0;\n  object-fit: ", ";\n"])), function (props) {
  return FIT_MAP[props.fit];
}); // z-index is for Safari so controls aren't hidden

var StyledVideo = _styledComponents["default"].video(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  max-width: 100%;\n  z-index: 1;\n  ", " ::cue {\n    background: ", ";\n  }\n\n  ", ";\n"])), function (props) {
  return props.fit && fitStyle;
}, function (props) {
  return props.theme.video.captions.background;
}, function (props) {
  return props.theme.video && props.theme.video.extend;
});

exports.StyledVideo = StyledVideo;
StyledVideo.defaultProps = {};
Object.setPrototypeOf(StyledVideo.defaultProps, _defaultProps.defaultProps);

var StyledVideoContainer = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  flex: 1 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  position: relative;\n  ", ";\n"])), _utils.genericStyles);

exports.StyledVideoContainer = StyledVideoContainer;
StyledVideoContainer.defaultProps = {};
Object.setPrototypeOf(StyledVideoContainer.defaultProps, _defaultProps.defaultProps); // z-index is for Safari so controls aren't hidden

var positionStyle = (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n"])));

var StyledVideoControls = _styledComponents["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  flex: 0 0;\n  ", " opacity: 0;\n  transition: opacity 0.3s;\n  ", ";\n"])), function (props) {
  return props.over && positionStyle;
}, function (props) {
  return props.active ? 'opacity: 1;' : 'pointer-events: none';
});

exports.StyledVideoControls = StyledVideoControls;
StyledVideoControls.defaultProps = {};
Object.setPrototypeOf(StyledVideoControls.defaultProps, _defaultProps.defaultProps);
var headStyle = (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n  ::after {\n    content: '';\n    height: 100%;\n    width: ", ";\n    background: ", ";\n    position: absolute;\n    left: ", ";\n  }\n"])), function (props) {
  return props.theme.global.edgeSize.xsmall;
}, function (props) {
  return (0, _utils.normalizeColor)(props.theme.video.scrubber.color, props.theme);
}, function (props) {
  return props.value + "%";
});

var StyledVideoScrubber = _styledComponents["default"].div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  ", ";\n"])), function (props) {
  return props.value && headStyle;
});

exports.StyledVideoScrubber = StyledVideoScrubber;
StyledVideoScrubber.defaultProps = {};
Object.setPrototypeOf(StyledVideoScrubber.defaultProps, _defaultProps.defaultProps);