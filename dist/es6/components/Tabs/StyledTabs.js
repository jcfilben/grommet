var _templateObject, _FLEX_MAP, _templateObject2, _templateObject3, _templateObject4;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';
import { genericStyles } from '../../utils';
import { defaultProps } from '../../default-props';
var StyledTabsHeader = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  ", ";\n"])), function (props) {
  return props.theme.tabs.header.extend;
});
StyledTabsHeader.defaultProps = {};
Object.setPrototypeOf(StyledTabsHeader.defaultProps, defaultProps);
var FLEX_MAP = (_FLEX_MAP = {}, _FLEX_MAP[true] = '1 1', _FLEX_MAP[false] = '0 0', _FLEX_MAP.grow = '1 0', _FLEX_MAP.shrink = '0 1', _FLEX_MAP);
var flexStyle = css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  flex: ", ";\n"])), function (props) {
  return "" + FLEX_MAP[props.flex] + (props.flex !== true ? ' auto' : '');
});
var StyledTabPanel = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  min-height: 0;\n  ", " ", ";\n"])), function (props) {
  return props.flex && flexStyle;
}, function (props) {
  return props.theme.tabs.panel.extend;
});
StyledTabPanel.defaultProps = {};
Object.setPrototypeOf(StyledTabPanel.defaultProps, defaultProps);
var StyledTabs = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  ", " ", ";\n"])), genericStyles, function (props) {
  return props.theme.tabs.extend;
});
StyledTabs.defaultProps = {};
Object.setPrototypeOf(StyledTabs.defaultProps, defaultProps);
export { StyledTabsHeader, StyledTabPanel, StyledTabs };