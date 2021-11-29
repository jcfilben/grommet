var _templateObject;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled from 'styled-components';
import { inputStyle } from '../../utils';
import { defaultProps } from '../../default-props';
var StyledFileInput = styled.input(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  ", "\n  opacity: 0;\n  border: none;\n  ", "\n  ", "\n\n  &::-moz-focus-inner {\n    border: none;\n    outline: none;\n  }\n"])), inputStyle, function (props) {
  return !props.disabled && 'cursor: pointer;';
}, function (props) {
  return props.rightOffset && "\n    width: calc(100% - " + props.rightOffset + "px);\n    right: " + props.rightOffset + "px;\n    ";
});
StyledFileInput.defaultProps = {};
Object.setPrototypeOf(StyledFileInput.defaultProps, defaultProps);
export { StyledFileInput };