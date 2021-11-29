var _templateObject;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled from 'styled-components';
import { Box } from '../Box';
import { defaultProps } from '../../default-props';
var StyledCheckBoxGroup = styled(Box)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  ", "\n"])), function (props) {
  return props.theme.checkBoxGroup && props.theme.checkBoxGroup.container && props.theme.checkBoxGroup.container.extend;
});
StyledCheckBoxGroup.defaultProps = {};
Object.setPrototypeOf(StyledCheckBoxGroup.defaultProps, defaultProps);
export { StyledCheckBoxGroup };