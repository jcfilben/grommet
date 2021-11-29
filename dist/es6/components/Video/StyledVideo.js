var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';
import { genericStyles, normalizeColor } from '../../utils';
import { defaultProps } from '../../default-props';
var FIT_MAP = {
  cover: 'cover',
  contain: 'contain'
};
var fitStyle = css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  flex: 1 1;\n  min-height: 0;\n  object-fit: ", ";\n"])), function (props) {
  return FIT_MAP[props.fit];
}); // z-index is for Safari so controls aren't hidden

var StyledVideo = styled.video(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  max-width: 100%;\n  z-index: 1;\n  ", " ::cue {\n    background: ", ";\n  }\n\n  ", ";\n"])), function (props) {
  return props.fit && fitStyle;
}, function (props) {
  return props.theme.video.captions.background;
}, function (props) {
  return props.theme.video && props.theme.video.extend;
});
StyledVideo.defaultProps = {};
Object.setPrototypeOf(StyledVideo.defaultProps, defaultProps);
var StyledVideoContainer = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  flex: 1 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  position: relative;\n  ", ";\n"])), genericStyles);
StyledVideoContainer.defaultProps = {};
Object.setPrototypeOf(StyledVideoContainer.defaultProps, defaultProps); // z-index is for Safari so controls aren't hidden

var positionStyle = css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n"])));
var StyledVideoControls = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  flex: 0 0;\n  ", " opacity: 0;\n  transition: opacity 0.3s;\n  ", ";\n"])), function (props) {
  return props.over && positionStyle;
}, function (props) {
  return props.active ? 'opacity: 1;' : 'pointer-events: none';
});
StyledVideoControls.defaultProps = {};
Object.setPrototypeOf(StyledVideoControls.defaultProps, defaultProps);
var headStyle = css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n  ::after {\n    content: '';\n    height: 100%;\n    width: ", ";\n    background: ", ";\n    position: absolute;\n    left: ", ";\n  }\n"])), function (props) {
  return props.theme.global.edgeSize.xsmall;
}, function (props) {
  return normalizeColor(props.theme.video.scrubber.color, props.theme);
}, function (props) {
  return props.value + "%";
});
var StyledVideoScrubber = styled.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  ", ";\n"])), function (props) {
  return props.value && headStyle;
});
StyledVideoScrubber.defaultProps = {};
Object.setPrototypeOf(StyledVideoScrubber.defaultProps, defaultProps);
export { StyledVideo, StyledVideoContainer, StyledVideoControls, StyledVideoScrubber };