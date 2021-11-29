var _templateObject;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled from 'styled-components';
import { sizeStyle } from '../../utils';
export var StyledContainer = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  /* IE11 hack to get drop contents to not overflow */\n  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n    width: 100%;\n  }\n\n  ", ";\n\n  ", ";\n"])), function (props) {
  return props.dropHeight ? sizeStyle('max-height', props.dropHeight, props.theme) : 'max-height: inherit;';
}, function (props) {
  return props.theme.select.container && props.theme.select.container.extend;
});