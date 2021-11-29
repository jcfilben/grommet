"use strict";

exports.__esModule = true;
exports["default"] = exports.ComponentOverrideMarkdown = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _grommet = require("grommet");

var _themes = require("grommet/themes");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var CONTENT = "\n  # Out of Breath\n\n  You know, sometimes in life it seems like there's no way out. Like\n  a sheep trapped in a maze designed by wolves. See all the\n  options [here](https://github.com/probablyup/markdown-to-jsx/)\n\n  [reference](#)\n\n```\nimport { Grommet } from 'grommet';\n```\n\n  > i carry your heart with me\n\n  ![alt text](//v2.grommet.io/assets/IMG_4245.jpg \"Markdown Image\")\n\n  Markdown | Less | Pretty\n  --- | --- | ---\n  *Still* | `renders` | **nicely**\n  1 | 2 | 3\n";

var StyledPre = _styledComponents["default"].pre(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  background-color: #7d4cdb;\n"])));

var ComponentOverrideMarkdown = function ComponentOverrideMarkdown() {
  return /*#__PURE__*/_react["default"].createElement(_grommet.Grommet, {
    theme: _themes.grommet
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Markdown, {
    components: {
      pre: StyledPre
    }
  }, CONTENT)));
};

exports.ComponentOverrideMarkdown = ComponentOverrideMarkdown;
ComponentOverrideMarkdown.storyName = 'Component override markdown';
var _default = {
  title: 'Type/Markdown/Component override markdown'
};
exports["default"] = _default;