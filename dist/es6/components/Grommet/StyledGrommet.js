var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';
import { baseStyle } from '../../utils';
import { defaultProps } from '../../default-props';

var fullStyle = function fullStyle(full) {
  if (full === 'min') return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n      min-height: 100vh;\n    "])));
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n    width: 100vw;\n    height: 100vh;\n    overflow: auto;\n  "])));
};

var StyledGrommet = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), function (props) {
  return !props.plain && baseStyle;
}, function (props) {
  return props.full && fullStyle(props.full);
}, function (props) {
  return props.theme.global.font.face;
}, function (props) {
  return props.theme.grommet.extend;
}, function (props) {
  return props.cssVars && Object.keys(props.theme.global.colors).filter(function (k) {
    return typeof props.theme.global.colors[k] === 'string';
  }).map(function (k) {
    return "--" + k + ": " + props.theme.global.colors[k] + ";";
  }).join('\n');
});
StyledGrommet.defaultProps = {};
Object.setPrototypeOf(StyledGrommet.defaultProps, defaultProps);
export { StyledGrommet };