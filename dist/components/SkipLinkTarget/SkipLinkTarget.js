"use strict";

exports.__esModule = true;
exports.SkipLinkTarget = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Anchor = require("../Anchor");

var _excluded = ["label"];

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var HiddenAnchor = (0, _styledComponents["default"])(_Anchor.Anchor)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  position: absolute;\n"])));

var SkipLinkTarget = function SkipLinkTarget(_ref) {
  var label = _ref.label,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement(HiddenAnchor, _extends({}, rest, {
    tabIndex: "-1",
    "aria-hidden": "true"
  }), label);
};

exports.SkipLinkTarget = SkipLinkTarget;