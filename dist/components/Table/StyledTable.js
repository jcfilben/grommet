"use strict";

exports.__esModule = true;
exports.StyledTable = exports.StyledTableFooter = exports.StyledTableHeader = exports.StyledTableBody = exports.StyledTableRow = exports.StyledTableDataCaption = exports.StyledTableCell = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _utils = require("../../utils");

var _defaultProps = require("../../default-props");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var SIZE_MAP = {
  '1/2': '50%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/3': '33.33%',
  '2/3': '66.66%'
};
var sizeStyle = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  width: ", ";\n  max-width: ", ";\n  overflow: hidden;\n"])), function (props) {
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

var StyledTableCell = _styledComponents["default"].td(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  margin: 0;\n  padding: 0;\n  font-weight: inherit;\n  text-align: inherit;\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), function (props) {
  return props.size && sizeStyle;
}, function (props) {
  return props.verticalAlign && "vertical-align: " + props.verticalAlign + ";";
}, function (props) {
  return props.align && "text-align: " + props.align + ";";
}, function (props) {
  return props.background && (0, _utils.backgroundStyle)(props.background, props.theme);
}, function (props) {
  return props.border && (0, _utils.borderStyle)(props.border, props.responsive, props.theme);
}, function (props) {
  return props.pad && (0, _utils.edgeStyle)('padding', props.pad, props.responsive, props.theme.box.responsiveBreakpoint, props.theme);
}, function (props) {
  return props.tableContextTheme && props.tableContextTheme.extend;
});

exports.StyledTableCell = StyledTableCell;
StyledTableCell.defaultProps = {};
Object.setPrototypeOf(StyledTableCell.defaultProps, _defaultProps.defaultProps);

var StyledTableDataCaption = _styledComponents["default"].caption(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  margin-bottom: ", ";\n"])), function (props) {
  return props.theme.global.edgeSize.xxsmall;
});

exports.StyledTableDataCaption = StyledTableDataCaption;
StyledTableDataCaption.defaultProps = {};
Object.setPrototypeOf(StyledTableDataCaption.defaultProps, _defaultProps.defaultProps);

var StyledTableRow = _styledComponents["default"].tr(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose([""])));

exports.StyledTableRow = StyledTableRow;
StyledTableRow.defaultProps = {};
Object.setPrototypeOf(StyledTableRow.defaultProps, _defaultProps.defaultProps);

var StyledTableBody = _styledComponents["default"].tbody(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose([""])));

exports.StyledTableBody = StyledTableBody;
StyledTableBody.defaultProps = {};
Object.setPrototypeOf(StyledTableBody.defaultProps, _defaultProps.defaultProps);

var StyledTableHeader = _styledComponents["default"].thead(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose([""])));

exports.StyledTableHeader = StyledTableHeader;
StyledTableHeader.defaultProps = {};
Object.setPrototypeOf(StyledTableHeader.defaultProps, _defaultProps.defaultProps);

var StyledTableFooter = _styledComponents["default"].tfoot(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose([""])));

exports.StyledTableFooter = StyledTableFooter;
StyledTableFooter.defaultProps = {};
Object.setPrototypeOf(StyledTableFooter.defaultProps, _defaultProps.defaultProps);

var StyledTable = _styledComponents["default"].table(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n  border-spacing: 0;\n  border-collapse: collapse;\n  width: inherit;\n  @media all and (min--moz-device-pixel-ratio: 0) {\n    table-layout: fixed;\n  }\n  ", " ", ";\n"])), _utils.genericStyles, function (props) {
  return props.theme.table && props.theme.table.extend;
});

exports.StyledTable = StyledTable;
StyledTable.defaultProps = {};
Object.setPrototypeOf(StyledTable.defaultProps, _defaultProps.defaultProps);