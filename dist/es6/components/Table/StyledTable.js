var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';
import { backgroundStyle, borderStyle, edgeStyle, genericStyles } from '../../utils';
import { defaultProps } from '../../default-props';
var SIZE_MAP = {
  '1/2': '50%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/3': '33.33%',
  '2/3': '66.66%'
};
var sizeStyle = css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  width: ", ";\n  max-width: ", ";\n  overflow: hidden;\n"])), function (props) {
  return props.size === 'auto' ? // setting width to a small value will allow
  // the cell to fit width of its content. this
  // is a commonly implemented CSS pattern to
  // allow an auto-width behavior on fixed table
  // layouts (which is what DataTable applies)
  // https://stackoverflow.com/questions/4757844/css-table-column-autowidth?noredirect=1&lq=1
  '1px' : SIZE_MAP[props.size] || props.theme.global.size[props.size] || props.size;
}, function (props) {
  return props.size !== 'auto' ? SIZE_MAP[props.size] || props.theme.global.size[props.size] || props.size : undefined;
});
var StyledTableCell = styled.td(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  margin: 0;\n  padding: 0;\n  font-weight: inherit;\n  text-align: inherit;\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), function (props) {
  return props.size && sizeStyle;
}, function (props) {
  return props.verticalAlign && "vertical-align: " + props.verticalAlign + ";";
}, function (props) {
  return props.align && "text-align: " + props.align + ";";
}, function (props) {
  return props.background && backgroundStyle(props.background, props.theme);
}, function (props) {
  return props.border && borderStyle(props.border, props.responsive, props.theme);
}, function (props) {
  return props.pad && edgeStyle('padding', props.pad, props.responsive, props.theme.box.responsiveBreakpoint, props.theme);
}, function (props) {
  return props.tableContextTheme && props.tableContextTheme.extend;
});
StyledTableCell.defaultProps = {};
Object.setPrototypeOf(StyledTableCell.defaultProps, defaultProps);
var StyledTableDataCaption = styled.caption(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  margin-bottom: ", ";\n"])), function (props) {
  return props.theme.global.edgeSize.xxsmall;
});
StyledTableDataCaption.defaultProps = {};
Object.setPrototypeOf(StyledTableDataCaption.defaultProps, defaultProps);
var StyledTableRow = styled.tr(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose([""])));
StyledTableRow.defaultProps = {};
Object.setPrototypeOf(StyledTableRow.defaultProps, defaultProps);
var StyledTableBody = styled.tbody(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose([""])));
StyledTableBody.defaultProps = {};
Object.setPrototypeOf(StyledTableBody.defaultProps, defaultProps);
var StyledTableHeader = styled.thead(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose([""])));
StyledTableHeader.defaultProps = {};
Object.setPrototypeOf(StyledTableHeader.defaultProps, defaultProps);
var StyledTableFooter = styled.tfoot(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose([""])));
StyledTableFooter.defaultProps = {};
Object.setPrototypeOf(StyledTableFooter.defaultProps, defaultProps);
var StyledTable = styled.table(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n  border-spacing: 0;\n  border-collapse: collapse;\n  width: inherit;\n  @media all and (min--moz-device-pixel-ratio: 0) {\n    table-layout: fixed;\n  }\n  ", " ", ";\n"])), genericStyles, function (props) {
  return props.theme.table && props.theme.table.extend;
});
StyledTable.defaultProps = {};
Object.setPrototypeOf(StyledTable.defaultProps, defaultProps);
export { StyledTableCell, StyledTableDataCaption, StyledTableRow, StyledTableBody, StyledTableHeader, StyledTableFooter, StyledTable };