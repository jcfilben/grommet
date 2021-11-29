var _templateObject, _templateObject2;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled from 'styled-components';
import { defaultProps } from '../../default-props';
import { Box } from '../Box';
import { Text } from '../Text';
var StyledAvatarText = styled(Text)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n"])), function (props) {
  return props.theme.avatar && props.theme.avatar.text && props.theme.avatar.text.fontWeight && "font-weight: " + props.theme.avatar.text.fontWeight + ";";
}, function (props) {
  return props.theme.avatar.text && props.theme.avatar.text.extend;
});
StyledAvatarText.defaultProps = {};
Object.setPrototypeOf(StyledAvatarText.defaultProps, defaultProps);
var StyledAvatar = styled(Box)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  ", "\n"])), function (props) {
  return props.theme.avatar && props.theme.avatar.extend;
});
StyledAvatar.defaultProps = {};
Object.setPrototypeOf(StyledAvatar.defaultProps, defaultProps);
export { StyledAvatar, StyledAvatarText };