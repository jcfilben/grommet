"use strict";

exports.__esModule = true;
exports["default"] = exports.Children = void 0;

var _react = _interopRequireWildcard(require("react"));

var _FormClose = _interopRequireDefault(require("grommet-icons/es6/icons/FormClose"));

var _grommet = require("grommet");

var _themes = require("grommet/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var allSeasons = ['S01', 'S02', 'S03', 'S04', 'S05', 'S06', 'S07', 'S08', 'S09', 'S10'];

var Children = function Children() {
  var _useState = (0, _react.useState)([]),
      selected = _useState[0],
      setSelected = _useState[1];

  var onRemoveSeason = function onRemoveSeason(season) {
    var seasonIndex = allSeasons.indexOf(season);
    setSelected(selected.filter(function (selectedSeason) {
      return selectedSeason !== seasonIndex;
    }));
  };

  var renderSeason = function renderSeason(season) {
    return /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
      key: "season_tag_" + season,
      href: "#",
      onClick: function onClick(event) {
        event.preventDefault();
        event.stopPropagation();
        onRemoveSeason(season);
      },
      onFocus: function onFocus(event) {
        return event.stopPropagation();
      }
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      align: "center",
      direction: "row",
      gap: "xsmall",
      pad: {
        vertical: 'xsmall',
        horizontal: 'small'
      },
      margin: "xsmall",
      background: "brand",
      round: "large"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Text, {
      size: "small"
    }, season), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      round: "full",
      margin: {
        left: 'xsmall'
      }
    }, /*#__PURE__*/_react["default"].createElement(_FormClose["default"], {
      size: "small",
      style: {
        width: '12px',
        height: '12px'
      }
    }))));
  };

  var renderOption = function renderOption(option, state) {
    return /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      pad: "small",
      background: state.active ? 'active' : undefined
    }, option);
  };

  return /*#__PURE__*/_react["default"].createElement(_grommet.Grommet, {
    full: true,
    theme: _themes.grommet
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    fill: true,
    align: "center",
    justify: "center"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Select, {
    closeOnChange: false,
    multiple: true,
    value: /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      wrap: true,
      direction: "row",
      width: "small"
    }, selected && selected.length ? selected.map(function (index) {
      return renderSeason(allSeasons[index]);
    }) : /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      pad: {
        vertical: 'xsmall',
        horizontal: 'small'
      },
      margin: "xsmall"
    }, "Select Season")),
    options: allSeasons,
    selected: selected,
    disabled: [2, 6],
    onChange: function onChange(_ref) {
      var nextSelected = _ref.selected;
      setSelected([].concat(nextSelected).sort());
    }
  }, renderOption)));
};

exports.Children = Children;
Children.parameters = {
  chromatic: {
    disable: true
  }
};
var _default = {
  title: 'Input/Select/Children'
};
exports["default"] = _default;