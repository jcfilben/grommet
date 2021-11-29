var _templateObject;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled from 'styled-components';
import { genericStyles } from '../../utils';
import { defaultProps } from '../../default-props';

var fillStyle = function fillStyle(fillProp) {
  if (fillProp === 'horizontal') {
    return "\n      width: 100%;\n      height: unset;\n    ";
  }

  if (fillProp === 'vertical') {
    return "\n      width: unset;\n      height: 100%;\n    ";
  }

  if (fillProp) {
    return "\n      width: 100%;\n      height: 100%;\n    ";
  }

  return '';
}; // undefined fillProp has width for backwards compatibility


var StyledWorldMap = styled.svg(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  ", ";\n"])), genericStyles, function (props) {
  return props.fillProp !== undefined ? fillStyle(props.fillProp) : 'width: 100%;';
}, function (props) {
  return props.theme.worldMap && props.theme.worldMap.extend;
});
StyledWorldMap.defaultProps = {};
Object.setPrototypeOf(StyledWorldMap.defaultProps, defaultProps);
export { StyledWorldMap };