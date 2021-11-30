'use strict';

exports.__esModule = true;
exports.StyledSecond =
  exports.StyledMinute =
  exports.StyledHour =
  exports.StyledDigitalPrevious =
  exports.StyledDigitalNext =
  exports.StyledDigitalDigit =
  exports.StyledAnalog =
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
  _templateObject7,
  _templateObject8,
  _templateObject9,
  _templateObject10,
  _templateObject11,
  _templateObject12;

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

var StyledHour = _styledComponents['default'].line(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteralLoose([
      '\n  stroke-width: ',
      ';\n  stroke: ',
      ';\n  transition: stroke 1s ease-out;\n',
    ])),
  function (props) {
    return props.theme.clock.analog.hour.width;
  },
  function (props) {
    return (0, _utils.normalizeColor)(
      props.theme.clock.analog.hour.color,
      props.theme,
    );
  },
);

exports.StyledHour = StyledHour;
StyledHour.defaultProps = {};
Object.setPrototypeOf(StyledHour.defaultProps, _defaultProps.defaultProps);

var StyledMinute = _styledComponents['default'].line(
  _templateObject2 ||
    (_templateObject2 = _taggedTemplateLiteralLoose([
      '\n  stroke-width: ',
      ';\n  stroke: ',
      ';\n  transition: stroke 1s ease-out;\n',
    ])),
  function (props) {
    return props.theme.clock.analog.minute.width;
  },
  function (props) {
    return (0, _utils.normalizeColor)(
      props.theme.clock.analog.minute.color,
      props.theme,
    );
  },
);

exports.StyledMinute = StyledMinute;
StyledMinute.defaultProps = {};
Object.setPrototypeOf(StyledMinute.defaultProps, _defaultProps.defaultProps);

var StyledSecond = _styledComponents['default'].line(
  _templateObject3 ||
    (_templateObject3 = _taggedTemplateLiteralLoose([
      '\n  stroke-width: ',
      ';\n  stroke: ',
      ';\n  transition: stroke 1s ease-out;\n',
    ])),
  function (props) {
    return props.theme.clock.analog.second.width;
  },
  function (props) {
    return (0, _utils.normalizeColor)(
      props.theme.clock.analog.second.color,
      props.theme,
    );
  },
);

exports.StyledSecond = StyledSecond;
StyledSecond.defaultProps = {};
Object.setPrototypeOf(StyledSecond.defaultProps, _defaultProps.defaultProps);

var StyledAnalog = _styledComponents['default'].svg(
  _templateObject4 ||
    (_templateObject4 = _taggedTemplateLiteralLoose([
      '\n  width: ',
      ';\n  height: ',
      ';\n\n  ',
      '\n  ',
      ';\n',
    ])),
  function (props) {
    return props.theme.clock.analog.size[props.size];
  },
  function (props) {
    return props.theme.clock.analog.size[props.size];
  },
  _utils.genericStyles,
  function (props) {
    return props.theme.clock.analog && props.theme.clock.analog.extend;
  },
);

exports.StyledAnalog = StyledAnalog;
StyledAnalog.defaultProps = {};
Object.setPrototypeOf(StyledAnalog.defaultProps, _defaultProps.defaultProps);

var sizeStyle = function sizeStyle(props) {
  // size is a combination of the size and height properties
  var size = props.size || 'medium';
  var data = props.theme.clock.digital.text[size] || {};
  return (0, _styledComponents.css)(
    _templateObject5 ||
      (_templateObject5 = _taggedTemplateLiteralLoose([
        '\n    font-size: ',
        ';\n    line-height: ',
        ';\n  ',
      ])),
    data.size || props.theme.clock.digital.text.medium.size,
    data.height || props.theme.clock.digital.text.medium.height,
  );
};

var StyledDigitalDigit = _styledComponents['default'].div(
  _templateObject6 ||
    (_templateObject6 = _taggedTemplateLiteralLoose([
      '\n  position: relative;\n  width: 0.8em;\n  text-align: center;\n  overflow: hidden;\n  ',
      ';\n',
    ])),
  function (props) {
    return sizeStyle(props);
  },
);

exports.StyledDigitalDigit = StyledDigitalDigit;
StyledDigitalDigit.defaultProps = {};
Object.setPrototypeOf(
  StyledDigitalDigit.defaultProps,
  _defaultProps.defaultProps,
);
var previousUp = (0, _styledComponents.keyframes)(
  _templateObject7 ||
    (_templateObject7 = _taggedTemplateLiteralLoose([
      '\n  0% { transform: translateY(0); }\n  100% { transform: translateY(-100%); }\n',
    ])),
);
var previousDown = (0, _styledComponents.keyframes)(
  _templateObject8 ||
    (_templateObject8 = _taggedTemplateLiteralLoose([
      '\n  0% { transform: translateY(0); }\n  100% { transform: translateY(100%); }\n',
    ])),
);

var StyledDigitalPrevious = _styledComponents['default'].div(
  _templateObject9 ||
    (_templateObject9 = _taggedTemplateLiteralLoose([
      '\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0.8em;\n  text-align: center;\n  animation: ',
      '\n    0.5s forwards;\n',
    ])),
  function (props) {
    return props.direction === 'down' ? previousDown : previousUp;
  },
);

exports.StyledDigitalPrevious = StyledDigitalPrevious;
StyledDigitalPrevious.defaultProps = {};
Object.setPrototypeOf(
  StyledDigitalPrevious.defaultProps,
  _defaultProps.defaultProps,
);
var nextUp = (0, _styledComponents.keyframes)(
  _templateObject10 ||
    (_templateObject10 = _taggedTemplateLiteralLoose([
      '\n  0% { transform: translateY(100%); }\n  100% { transform: translateY(0); }\n',
    ])),
);
var nextDown = (0, _styledComponents.keyframes)(
  _templateObject11 ||
    (_templateObject11 = _taggedTemplateLiteralLoose([
      '\n  0% { transform: translateY(-100%); }\n  100% { transform: translateY(0); }\n',
    ])),
);

var StyledDigitalNext = _styledComponents['default'].div(
  _templateObject12 ||
    (_templateObject12 = _taggedTemplateLiteralLoose([
      '\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0.8em;\n  text-align: center;\n  animation: ',
      ' 0.5s\n    forwards;\n',
    ])),
  function (props) {
    return props.direction === 'down' ? nextDown : nextUp;
  },
);

exports.StyledDigitalNext = StyledDigitalNext;
StyledDigitalNext.defaultProps = {};
Object.setPrototypeOf(
  StyledDigitalNext.defaultProps,
  _defaultProps.defaultProps,
);
