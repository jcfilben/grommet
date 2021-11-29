var _templateObject, _templateObject2;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled from 'styled-components';
import { defaultProps } from '../../default-props';
import { borderStyle, roundStyle } from '../../utils';
import { Button } from '../Button';
export var StyledTagButton = styled(Button)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n"])), function (props) {
  return props.border && borderStyle(props.border, true, props.theme);
}, function (props) {
  return props.round && roundStyle(props.round, true, props.theme);
});
StyledTagButton.defaultProps = {};
Object.setPrototypeOf(StyledTagButton.defaultProps, defaultProps);
export var StyledRemoveButton = styled(Button)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  ", "\n"])), function (props) {
  return props.round && roundStyle(props.round, true, props.theme);
});
StyledRemoveButton.defaultProps = {};
Object.setPrototypeOf(StyledRemoveButton.defaultProps, defaultProps);