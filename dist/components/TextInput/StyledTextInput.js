'use strict';

exports.__esModule = true;
exports.StyledTextInputContainer =
  exports.StyledTextInput =
  exports.StyledSuggestions =
  exports.StyledPlaceholder =
  exports.StyledIcon =
    void 0;

var _styledComponents = _interopRequireWildcard(require('styled-components'));

var _utils = require('../../utils');

var _defaultProps = require('../../default-props');

var _templateObject,
  _templateObject2,
  _templateObject3,
  _templateObject4,
  _templateObject5,
  _templateObject6;

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(
    nodeInterop,
  ) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj['default'] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  strings.raw = raw;
  return strings;
}

var getPlainStyle = function getPlainStyle(plain) {
  if (plain === 'full') {
    return (0, _styledComponents.css)(
      _templateObject ||
        (_templateObject = _taggedTemplateLiteralLoose([
          '\n      ',
          ' padding: 0;\n    ',
        ])),
      _utils.plainInputStyle,
    );
  }

  return plain && _utils.plainInputStyle;
};

var StyledTextInput = _styledComponents['default'].input(
  _templateObject2 ||
    (_templateObject2 = _taggedTemplateLiteralLoose([
      '\n  ',
      '\n  ',
      '\n  ',
      '\n  ',
      '\n  ',
      '\n  ',
      ';\n',
    ])),
  _utils.inputStyle,
  function (props) {
    return getPlainStyle(props.plain);
  },
  function (props) {
    return (
      props.icon &&
      (props.reverse
        ? 'padding-right: ' + props.theme.global.edgeSize.large + ';'
        : 'padding-left: ' + props.theme.global.edgeSize.large + ';')
    );
  },
  function (props) {
    return (
      props.disabled &&
      (0, _utils.disabledStyle)(
        props.theme.textInput.disabled &&
          props.theme.textInput.disabled.opacity,
      )
    );
  },
  function (props) {
    return props.textAlign && _utils.textAlignStyle;
  },
  function (props) {
    return props.theme.textInput && props.theme.textInput.extend;
  },
);

exports.StyledTextInput = StyledTextInput;
StyledTextInput.defaultProps = {};
Object.setPrototypeOf(StyledTextInput.defaultProps, _defaultProps.defaultProps);

var StyledTextInputContainer = _styledComponents['default'].div(
  _templateObject3 ||
    (_templateObject3 = _taggedTemplateLiteralLoose([
      '\n  position: relative;\n  width: 100%;\n\n  ',
      ';\n',
    ])),
  function (props) {
    return (
      props.theme.textInput &&
      props.theme.textInput.container &&
      props.theme.textInput.container.extend
    );
  },
);

exports.StyledTextInputContainer = StyledTextInputContainer;
StyledTextInputContainer.defaultProps = {};
Object.setPrototypeOf(
  StyledTextInputContainer.defaultProps,
  _defaultProps.defaultProps,
);

var StyledPlaceholder = _styledComponents['default'].div(
  _templateObject4 ||
    (_templateObject4 = _taggedTemplateLiteralLoose([
      '\n  position: absolute;\n  left: ',
      'px;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  justify-content: center;\n  pointer-events: none;\n\n  ',
      ';\n',
    ])),
  function (props) {
    return (
      (0, _utils.parseMetricToNum)(
        (0, _utils.getInputPadBySide)(props, 'left'),
      ) - (0, _utils.parseMetricToNum)(props.theme.global.control.border.width)
    );
  },
  function (props) {
    return (
      props.theme.textInput &&
      props.theme.textInput.placeholder &&
      props.theme.textInput.placeholder.extend
    );
  },
);

exports.StyledPlaceholder = StyledPlaceholder;
StyledPlaceholder.defaultProps = {};
Object.setPrototypeOf(
  StyledPlaceholder.defaultProps,
  _defaultProps.defaultProps,
);

var StyledIcon = _styledComponents['default'].div(
  _templateObject5 ||
    (_templateObject5 = _taggedTemplateLiteralLoose([
      '\n  position: absolute;\n  display: flex;\n  justify: center;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n  ',
      '\n',
    ])),
  function (props) {
    return props.reverse
      ? 'right: ' + (0, _utils.getInputPadBySide)(props, 'right') + ';'
      : 'left: ' + (0, _utils.getInputPadBySide)(props, 'left') + ';';
  },
);

exports.StyledIcon = StyledIcon;

var StyledSuggestions = _styledComponents['default'].ol(
  _templateObject6 ||
    (_templateObject6 = _taggedTemplateLiteralLoose([
      '\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n\n  ',
      ';\n',
    ])),
  function (props) {
    return (
      props.theme.textInput &&
      props.theme.textInput.suggestions &&
      props.theme.textInput.suggestions.extend
    );
  },
);

exports.StyledSuggestions = StyledSuggestions;
StyledSuggestions.defaultProps = {};
Object.setPrototypeOf(
  StyledSuggestions.defaultProps,
  _defaultProps.defaultProps,
);
