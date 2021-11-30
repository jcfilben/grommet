'use strict';

exports.__esModule = true;
exports.StyledTagButton = exports.StyledRemoveButton = void 0;

var _styledComponents = _interopRequireDefault(require('styled-components'));

var _defaultProps = require('../../default-props');

var _utils = require('../../utils');

var _Button = require('../Button');

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  strings.raw = raw;
  return strings;
}

var StyledTagButton = (0, _styledComponents['default'])(_Button.Button)(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n  ', '\n'])),
  function (props) {
    return (
      props.border && (0, _utils.borderStyle)(props.border, true, props.theme)
    );
  },
  function (props) {
    return (
      props.round && (0, _utils.roundStyle)(props.round, true, props.theme)
    );
  },
);
exports.StyledTagButton = StyledTagButton;
StyledTagButton.defaultProps = {};
Object.setPrototypeOf(StyledTagButton.defaultProps, _defaultProps.defaultProps);
var StyledRemoveButton = (0, _styledComponents['default'])(_Button.Button)(
  _templateObject2 ||
    (_templateObject2 = _taggedTemplateLiteralLoose(['\n  ', '\n'])),
  function (props) {
    return (
      props.round && (0, _utils.roundStyle)(props.round, true, props.theme)
    );
  },
);
exports.StyledRemoveButton = StyledRemoveButton;
StyledRemoveButton.defaultProps = {};
Object.setPrototypeOf(
  StyledRemoveButton.defaultProps,
  _defaultProps.defaultProps,
);
