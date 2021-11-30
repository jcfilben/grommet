'use strict';

exports.__esModule = true;
exports.parseMetricToNum =
  exports.getAvailableAtBadge =
  exports.fontSize =
  exports.findAllByType =
  exports.breakpointStyle =
    void 0;

var _styledComponents = require('styled-components');

var _templateObject, _templateObject2;

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  strings.raw = raw;
  return strings;
}

var parseMetricToNum = function parseMetricToNum(metric) {
  if (typeof metric === 'number') return metric;

  if (metric.match(/\s/) && process.env.NODE_ENV !== 'production') {
    console.warn('Invalid single measurement value: "' + metric + '"');
  }

  return parseFloat(metric.match(/\d+(\.\d+)?/), 10);
};

exports.parseMetricToNum = parseMetricToNum;

var fontSize = function fontSize(size, lineHeight) {
  return (0, _styledComponents.css)(
    _templateObject ||
      (_templateObject = _taggedTemplateLiteralLoose([
        '\n  font-size: ',
        ';\n  line-height: ',
        ';\n',
      ])),
    function (props) {
      return (
        (parseMetricToNum(size) /
          parseMetricToNum(props.theme.global.font.size)) *
          1 +
        'rem'
      );
    },
    function (props) {
      return (
        lineHeight ||
        Math.ceil(
          parseMetricToNum(size) /
            parseMetricToNum(props.theme.global.lineHeight),
        ) *
          (parseMetricToNum(props.theme.global.lineHeight) /
            parseMetricToNum(size)) +
          'px'
      );
    },
  );
};

exports.fontSize = fontSize;

var breakpointStyle = function breakpointStyle(breakpoint, content) {
  return (0, _styledComponents.css)(
    _templateObject2 ||
      (_templateObject2 = _taggedTemplateLiteralLoose([
        '\n  @media only screen ',
        ' {\n    ',
        ';\n  }\n',
      ])),
    breakpoint.value && 'and (max-width: ' + breakpoint.value + 'px)',
    content,
  );
};

exports.breakpointStyle = breakpointStyle;

var findAllByType = function findAllByType(component, type) {
  var matches = [];

  if (component.type === type) {
    matches.push(component);
  }

  if (component.children) {
    component.children.forEach(function (child) {
      matches = matches.concat(findAllByType(child, type));
    });
  }

  return matches;
};

exports.findAllByType = findAllByType;

var getAvailableAtBadge = function getAvailableAtBadge(
  availableAt,
  componentType,
) {
  return [
    {
      url:
        'https://storybook.grommet.io/?selectedKind=' +
        componentType +
        '-' +
        availableAt +
        '&full=0&stories=1&panelRight=0',
      badge:
        'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
      label: 'Storybook',
    },
    {
      url:
        'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/' +
        availableAt.toLowerCase() +
        '&module=%2Fsrc%2F' +
        availableAt +
        '.js',
      badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
      label: 'CodeSandbox',
    },
  ];
};

exports.getAvailableAtBadge = getAvailableAtBadge;
