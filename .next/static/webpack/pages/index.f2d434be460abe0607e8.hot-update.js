webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/workflow.js":
/*!**********************************!*\
  !*** ./src/sections/workflow.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WorkFlow; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ \"./src/components/section-header.js\");\n/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/patternBG.png */ \"./src/assets/patternBG.png\");\n/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/arrowOdd.svg */ \"./src/assets/arrowOdd.svg\");\n/* harmony import */ var assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/arrowEven.svg */ \"./src/assets/arrowEven.svg\");\n/* harmony import */ var assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/Oztrequartista/Desktop/Spartanives/my-app/src/sections/workflow.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/** @jsx jsx */\n\n\n\n\n\n\nvar data = [{\n  id: 1,\n  title: \"Hospitality Acquisition\",\n  text: \"Get your blood tests delivered at home collect a sample from the your blood tests.\"\n}, {\n  id: 2,\n  title: \"Expansion on Real Estate Portfolio\",\n  text: \"Get your blood tests delivered at home collect a sample from the your blood tests.\"\n}, {\n  id: 3,\n  title: \"Distribution and Logistics\",\n  text: \"Get your blood tests delivered at home collect a sample from the your blood tests.\"\n}, {\n  id: 4,\n  title: \"Public Facilities - Ghana Goes Solar\",\n  text: \"Get your blood tests delivered at home collect a sample from the your blood tests.\"\n}];\nfunction WorkFlow() {\n  var _this = this;\n\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"section\", {\n    sx: styles.workflow,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(components_section_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    slogan: \"WHAT'S THE FUNCTION?\",\n    title: \"See Our Products Section\",\n    isWhite: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    sx: styles.grid,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }, data.map(function (item) {\n    var id = item.id,\n        title = item.title,\n        text = item.text;\n    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      sx: styles.card,\n      key: id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 15\n      }\n    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      sx: styles.iconBox,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }\n    }, \"0\".concat(id)), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      sx: styles.wrapper,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 17\n      }\n    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n      sx: styles.wrapper.title,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 19\n      }\n    }, title)));\n  }))));\n}\n_c = WorkFlow;\nvar styles = {\n  workflow: {\n    backgroundColor: \"primary\",\n    backgroundImage: \"url(\".concat(assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3___default.a, \")\"),\n    backgroundRepeat: \"no-repeat\",\n    backgroundPosition: \"center center\",\n    backgroundSize: \"cover\",\n    position: \"relative\",\n    py: [8, null, 9, null, null, 10]\n  },\n  grid: {\n    mb: -1,\n    pt: 0,\n    gridGap: [\"35px 0\", null, \"45px 30px\", null, \"50px 25px\", null, null, \"50px 65px\"],\n    gridTemplateColumns: [\"repeat(1,1fr)\", null, \"repeat(2,1fr)\", null, \"repeat(4,1fr)\"]\n  },\n  card: {\n    display: \"flex\",\n    flexDirection: \"column\",\n    position: \"relative\",\n    textAlign: [\"center\", null, \"left\"],\n    width: [\"100%\", \"80%\", \"100%\"],\n    mx: [\"auto\"],\n    px: [4, null, null, 0],\n    \"&::before\": {\n      position: \"absolute\",\n      content: '\"\"',\n      top: 0,\n      left: [0, null, null, null, null, 72, null, 90],\n      backgroundRepeat: \"no-repeat\",\n      backgroundPosition: \"center center\",\n      width: 215,\n      height: 60,\n      \"@media screen and (max-width:1220px)\": {\n        display: \"none\"\n      }\n    },\n    \"&:nth-of-type(2n-1)::before\": {// backgroundImage: `url(${ArrowOdd})`,\n    },\n    \"&:nth-of-type(2n)::before\": {// backgroundImage: `url(${ArrowEven})`,\n      // top: 17,\n    },\n    \"&:last-child::before\": {\n      display: \"none\"\n    }\n  },\n  iconBox: {\n    width: [\"50px\", null, \"60px\", null, null, \"70px\"],\n    height: [\"50px\", null, \"60px\", null, null, \"70px\"],\n    flexShrink: 0,\n    borderRadius: [15, null, 23, null, null, 30],\n    backgroundColor: \"white\",\n    display: \"flex\",\n    alignItems: \"center\",\n    mb: [5, null, null, null, null, 6],\n    mx: [\"auto\", null, 0],\n    fontSize: [6, null, 7, null, null, \"30px\"],\n    fontWeight: 700,\n    justifyContent: \"center\",\n    color: \"#234582\"\n  },\n  wrapper: {\n    width: \"100%\",\n    display: \"flex\",\n    flexDirection: \"column\",\n    mt: \"-5px\",\n    title: {\n      fontSize: [3, null, 4, null, null, 4],\n      color: \"white\",\n      lineHeight: [1.4, null, null, null, null, 1.55],\n      pr: [0, null, null, null, null, 2],\n      mb: [2, 3]\n    },\n    subTitle: {\n      fontSize: 1,\n      fontWeight: 400,\n      lineHeight: [1.85, null, null, 1.9, 2],\n      color: \"white\",\n      opacity: 0.75,\n      pr: [0, null, null, null, null, 5]\n    }\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"WorkFlow\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3dvcmtmbG93LmpzPzM2MzkiXSwibmFtZXMiOlsiZGF0YSIsImlkIiwidGl0bGUiLCJ0ZXh0IiwiV29ya0Zsb3ciLCJzdHlsZXMiLCJ3b3JrZmxvdyIsImdyaWQiLCJtYXAiLCJpdGVtIiwiY2FyZCIsImljb25Cb3giLCJ3cmFwcGVyIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZEltYWdlIiwiUGF0dGVybkJHIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwicG9zaXRpb24iLCJweSIsIm1iIiwicHQiLCJncmlkR2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwidGV4dEFsaWduIiwid2lkdGgiLCJteCIsInB4IiwiY29udGVudCIsInRvcCIsImxlZnQiLCJoZWlnaHQiLCJmbGV4U2hyaW5rIiwiYm9yZGVyUmFkaXVzIiwiYWxpZ25JdGVtcyIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImp1c3RpZnlDb250ZW50IiwiY29sb3IiLCJtdCIsImxpbmVIZWlnaHQiLCJwciIsInN1YlRpdGxlIiwib3BhY2l0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFDRUMsSUFBRSxFQUFFLENBRE47QUFFRUMsT0FBSyxFQUFFLHlCQUZUO0FBR0VDLE1BQUksRUFDRjtBQUpKLENBRFcsRUFPWDtBQUNFRixJQUFFLEVBQUUsQ0FETjtBQUVFQyxPQUFLLHNDQUZQO0FBR0VDLE1BQUksRUFDRjtBQUpKLENBUFcsRUFhWDtBQUNFRixJQUFFLEVBQUUsQ0FETjtBQUVFQyxPQUFLLDhCQUZQO0FBR0VDLE1BQUksRUFDRjtBQUpKLENBYlcsRUFtQlg7QUFDRUYsSUFBRSxFQUFFLENBRE47QUFF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QUFWLEVBQWdCLElBQWhCLEVBQXNCLElBQXRCLEVBQTRCLENBQTVCO0FBTkk7QUFiSDtBQS9FSSxDQUFmIiwiZmlsZSI6Ii4vc3JjL3NlY3Rpb25zL3dvcmtmbG93LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tIFwidGhlbWUtdWlcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCwgQm94LCBIZWFkaW5nLCBUZXh0IH0gZnJvbSBcInRoZW1lLXVpXCI7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tIFwiY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlclwiO1xuXG5pbXBvcnQgUGF0dGVybkJHIGZyb20gXCJhc3NldHMvcGF0dGVybkJHLnBuZ1wiO1xuaW1wb3J0IEFycm93T2RkIGZyb20gXCJhc3NldHMvYXJyb3dPZGQuc3ZnXCI7XG5pbXBvcnQgQXJyb3dFdmVuIGZyb20gXCJhc3NldHMvYXJyb3dFdmVuLnN2Z1wiO1xuXG5jb25zdCBkYXRhID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgdGl0bGU6IFwiSG9zcGl0YWxpdHkgQWNxdWlzaXRpb25cIixcbiAgICB0ZXh0OlxuICAgICAgXCJHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICB0aXRsZTogYEV4cGFuc2lvbiBvbiBSZWFsIEVzdGF0ZSBQb3J0Zm9saW9gLFxuICAgIHRleHQ6XG4gICAgICBcIkdldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSB0aGUgeW91ciBibG9vZCB0ZXN0cy5cIixcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIHRpdGxlOiBgRGlzdHJpYnV0aW9uIGFuZCBMb2dpc3RpY3NgLFxuICAgIHRleHQ6XG4gICAgICBcIkdldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSB0aGUgeW91ciBibG9vZCB0ZXN0cy5cIixcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIHRpdGxlOiBgUHVibGljIEZhY2lsaXRpZXMgLSBHaGFuYSBHb2VzIFNvbGFyYCxcbiAgICB0ZXh0OlxuICAgICAgXCJHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXb3JrRmxvdygpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBzeD17c3R5bGVzLndvcmtmbG93fT5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxTZWN0aW9uSGVhZGVyXG4gICAgICAgICAgc2xvZ2FuPVwiV0hBVCdTIFRIRSBGVU5DVElPTj9cIlxuICAgICAgICAgIHRpdGxlPVwiU2VlIE91ciBQcm9kdWN0cyBTZWN0aW9uXCJcbiAgICAgICAgICBpc1doaXRlPXt0cnVlfVxuICAgICAgICAvPlxuICAgICAgICA8R3JpZCBzeD17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBpZCwgdGl0bGUsIHRleHQgfSA9IGl0ZW07XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY2FyZH0ga2V5PXtpZH0+XG4gICAgICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmljb25Cb3h9PntgMCR7aWR9YH08L0JveD5cbiAgICAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgICA8SGVhZGluZyBzeD17c3R5bGVzLndyYXBwZXIudGl0bGV9Pnt0aXRsZX08L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgICB7LyogPFRleHQgc3g9e3N0eWxlcy53cmFwcGVyLnN1YlRpdGxlfT57dGV4dH08L1RleHQ+ICovfVxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICB3b3JrZmxvdzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7UGF0dGVybkJHfSlgLFxuICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXIgY2VudGVyXCIsXG4gICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIHB5OiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTBdLFxuICB9LFxuICBncmlkOiB7XG4gICAgbWI6IC0xLFxuICAgIHB0OiAwLFxuICAgIGdyaWRHYXA6IFtcbiAgICAgIFwiMzVweCAwXCIsXG4gICAgICBudWxsLFxuICAgICAgXCI0NXB4IDMwcHhcIixcbiAgICAgIG51bGwsXG4gICAgICBcIjUwcHggMjVweFwiLFxuICAgICAgbnVsbCxcbiAgICAgIG51bGwsXG4gICAgICBcIjUwcHggNjVweFwiLFxuICAgIF0sXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xuICAgICAgXCJyZXBlYXQoMSwxZnIpXCIsXG4gICAgICBudWxsLFxuICAgICAgXCJyZXBlYXQoMiwxZnIpXCIsXG4gICAgICBudWxsLFxuICAgICAgXCJyZXBlYXQoNCwxZnIpXCIsXG4gICAgXSxcbiAgfSxcbiAgY2FyZDoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICB0ZXh0QWxpZ246IFtcImNlbnRlclwiLCBudWxsLCBcImxlZnRcIl0sXG4gICAgd2lkdGg6IFtcIjEwMCVcIiwgXCI4MCVcIiwgXCIxMDAlXCJdLFxuICAgIG14OiBbXCJhdXRvXCJdLFxuICAgIHB4OiBbNCwgbnVsbCwgbnVsbCwgMF0sXG4gICAgXCImOjpiZWZvcmVcIjoge1xuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA3MiwgbnVsbCwgOTBdLFxuICAgICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyIGNlbnRlclwiLFxuICAgICAgd2lkdGg6IDIxNSxcbiAgICAgIGhlaWdodDogNjAsXG4gICAgICBcIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTIyMHB4KVwiOiB7XG4gICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiJjpudGgtb2YtdHlwZSgybi0xKTo6YmVmb3JlXCI6IHtcbiAgICAgIC8vIGJhY2tncm91bmRJbWFnZTogYHVybCgke0Fycm93T2RkfSlgLFxuICAgIH0sXG4gICAgXCImOm50aC1vZi10eXBlKDJuKTo6YmVmb3JlXCI6IHtcbiAgICAgIC8vIGJhY2tncm91bmRJbWFnZTogYHVybCgke0Fycm93RXZlbn0pYCxcbiAgICAgIC8vIHRvcDogMTcsXG4gICAgfSxcbiAgICBcIiY6bGFzdC1jaGlsZDo6YmVmb3JlXCI6IHtcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICAgIH0sXG4gIH0sXG5cbiAgaWNvbkJveDoge1xuICAgIHdpZHRoOiBbXCI1MHB4XCIsIG51bGwsIFwiNjBweFwiLCBudWxsLCBudWxsLCBcIjcwcHhcIl0sXG4gICAgaGVpZ2h0OiBbXCI1MHB4XCIsIG51bGwsIFwiNjBweFwiLCBudWxsLCBudWxsLCBcIjcwcHhcIl0sXG4gICAgZmxleFNocmluazogMCxcbiAgICBib3JkZXJSYWRpdXM6IFsxNSwgbnVsbCwgMjMsIG51bGwsIG51bGwsIDMwXSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIG1iOiBbNSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNl0sXG4gICAgbXg6IFtcImF1dG9cIiwgbnVsbCwgMF0sXG4gICAgZm9udFNpemU6IFs2LCBudWxsLCA3LCBudWxsLCBudWxsLCBcIjMwcHhcIl0sXG4gICAgZm9udFdlaWdodDogNzAwLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGNvbG9yOiBcIiMyMzQ1ODJcIixcbiAgfSxcbiAgd3JhcHBlcjoge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIG10OiBcIi01cHhcIixcbiAgICB0aXRsZToge1xuICAgICAgZm9udFNpemU6IFszLCBudWxsLCA0LCBudWxsLCBudWxsLCA0XSxcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICBsaW5lSGVpZ2h0OiBbMS40LCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAxLjU1XSxcbiAgICAgIHByOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMl0sXG4gICAgICBtYjogWzIsIDNdLFxuICAgIH0sXG5cbiAgICBzdWJUaXRsZToge1xuICAgICAgZm9udFNpemU6IDEsXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICBsaW5lSGVpZ2h0OiBbMS44NSwgbnVsbCwgbnVsbCwgMS45LCAyXSxcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICBvcGFjaXR5OiAwLjc1LFxuICAgICAgcHI6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA1XSxcbiAgICB9LFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/sections/workflow.js\n");

/***/ })

})