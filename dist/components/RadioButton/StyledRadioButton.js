'use strict';

exports.__esModule = true;
exports.StyledRadioButtonLabel =
  exports.StyledRadioButtonInput =
  exports.StyledRadioButtonIcon =
  exports.StyledRadioButtonContainer =
  exports.StyledRadioButtonBox =
  exports.StyledRadioButton =
    void 0;

var _styledComponents = _interopRequireWildcard(require('styled-components'));

var _utils = require('../../utils');

var _defaultProps = require('../../default-props');

var _templateObject,
  _templateObject2,
  _templateObject3,
  _templateObject4,
  _templateObject5,
  _templateObject6,
  _templateObject7;

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

var disabledStyle = '\n  opacity: 0.5;\n  cursor: default;\n';

var StyledRadioButtonContainer = _styledComponents['default'].label(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteralLoose([
      '\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  user-select: none;\n  width: fit-content;\n  ',
      ' ',
      '\n\n  :hover input:not([disabled]) + div,\n  :hover input:not([disabled]) + span {\n    border-color: ',
      ';\n  }\n  :hover {\n    background-color: ',
      ';\n  }\n  // when the RadioButton has focus but there is no focusIndicator,\n  // apply the hover styling instead so that keyboard users know\n  // which RadioButton is active\n  ',
      '\n  ',
      ';\n',
    ])),
  function (props) {
    return props.disabled && disabledStyle;
  },
  function (props) {
    return !props.disabled && 'cursor: pointer;';
  },
  function (props) {
    return (0, _utils.normalizeColor)(
      props.theme.radioButton.hover.border.color,
      props.theme,
    );
  },
  function (props) {
    return (0, _utils.normalizeColor)(
      !props.disabled &&
        props.theme.radioButton.hover &&
        props.theme.radioButton.hover.background &&
        props.theme.radioButton.hover.background.color,
      props.theme,
    );
  },
  function (props) {
    return (
      props.focus &&
      !props.focusIndicator &&
      '\n      input:not([disabled]) + div,\n      input:not([disabled]) + span {\n      border-color: ' +
        (0, _utils.normalizeColor)(
          props.theme.radioButton.hover.border.color,
          props.theme,
        ) +
        ';\n    }\n    background-color: ' +
        (0, _utils.normalizeColor)(
          !props.disabled &&
            props.theme.radioButton.hover &&
            props.theme.radioButton.hover.background &&
            props.theme.radioButton.hover.background.color,
          props.theme,
        ) +
        ';\n    '
    );
  },
  function (props) {
    return props.theme.radioButton.container.extend;
  },
);

exports.StyledRadioButtonContainer = StyledRadioButtonContainer;
StyledRadioButtonContainer.defaultProps = {};
Object.setPrototypeOf(
  StyledRadioButtonContainer.defaultProps,
  _defaultProps.defaultProps,
);

var StyledRadioButtonInput = _styledComponents['default'].input(
  _templateObject2 ||
    (_templateObject2 = _taggedTemplateLiteralLoose([
      '\n  opacity: 0;\n  -moz-appearance: none;\n  width: 0;\n  height: 0;\n  margin: 0;\n  ',
      ';\n',
    ])),
  function (props) {
    return !props.disabled && 'cursor: pointer;';
  },
);

exports.StyledRadioButtonInput = StyledRadioButtonInput;
StyledRadioButtonInput.defaultProps = {};
Object.setPrototypeOf(
  StyledRadioButtonInput.defaultProps,
  _defaultProps.defaultProps,
);

var StyledRadioButtonLabel = _styledComponents['default'].span(
  _templateObject3 ||
    (_templateObject3 = _taggedTemplateLiteralLoose(['\n  ', '\n'])),
  function (props) {
    return (
      props.theme.radioButton.font.weight &&
      (0, _styledComponents.css)(
        _templateObject4 ||
          (_templateObject4 = _taggedTemplateLiteralLoose([
            '\n      font-weight: ',
            ';\n    ',
          ])),
        props.theme.radioButton.font.weight,
      )
    );
  },
);

exports.StyledRadioButtonLabel = StyledRadioButtonLabel;
StyledRadioButtonLabel.defaultProps = {};
Object.setPrototypeOf(
  StyledRadioButtonLabel.defaultProps,
  _defaultProps.defaultProps,
);

var StyledRadioButtonIcon = _styledComponents['default'].svg(
  _templateObject5 ||
    (_templateObject5 = _taggedTemplateLiteralLoose([
      '\n  box-sizing: border-box;\n  width: ',
      ';\n  height: ',
      ';\n  fill: ',
      ';\n  ',
      ';\n',
    ])),
  function (props) {
    return props.theme.radioButton.icon.size || props.theme.radioButton.size;
  },
  function (props) {
    return props.theme.radioButton.icon.size || props.theme.radioButton.size;
  },
  function (props) {
    return (0, _utils.normalizeColor)(
      props.theme.radioButton.check.color || 'control',
      props.theme,
    );
  },
  function (props) {
    return props.theme.radioButton.icon.extend;
  },
);

exports.StyledRadioButtonIcon = StyledRadioButtonIcon;
StyledRadioButtonIcon.defaultProps = {};
Object.setPrototypeOf(
  StyledRadioButtonIcon.defaultProps,
  _defaultProps.defaultProps,
);

var StyledRadioButtonBox = _styledComponents['default'].div(
  _templateObject6 ||
    (_templateObject6 = _taggedTemplateLiteralLoose([
      '\n  background-color: ',
      ';\n  ',
      ';\n  ',
      ';\n',
    ])),
  function (props) {
    var _props$theme$radioBut;

    return (0, _utils.normalizeColor)(
      (_props$theme$radioBut = props.theme.radioButton.check.background) == null
        ? void 0
        : _props$theme$radioBut.color,
      props.theme,
    );
  },
  function (props) {
    return props.focus && (0, _utils.focusStyle)();
  },
  function (props) {
    return props.theme.radioButton.check.extend;
  },
);

exports.StyledRadioButtonBox = StyledRadioButtonBox;
StyledRadioButtonBox.defaultProps = {};
Object.setPrototypeOf(
  StyledRadioButtonBox.defaultProps,
  _defaultProps.defaultProps,
);

var StyledRadioButton = _styledComponents['default'].div(
  _templateObject7 ||
    (_templateObject7 = _taggedTemplateLiteralLoose(['\n  ', ';\n'])),
  function (props) {
    return props.theme.radioButton && props.theme.radioButton.extend;
  },
);

exports.StyledRadioButton = StyledRadioButton;
StyledRadioButton.defaultProps = {};
Object.setPrototypeOf(
  StyledRadioButton.defaultProps,
  _defaultProps.defaultProps,
);
