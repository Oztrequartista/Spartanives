webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/key-feature.js":
/*!*************************************!*\
  !*** ./src/sections/key-feature.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Strategy; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var _components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/section-header */ \"./src/components/section-header.js\");\n/* harmony import */ var components_feature_card_column_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/feature-card-column.js */ \"./src/components/feature-card-column.js\");\n/* harmony import */ var assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/key-feature/performance.svg */ \"./src/assets/key-feature/performance.svg\");\n/* harmony import */ var assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/key-feature/partnership.svg */ \"./src/assets/key-feature/partnership.svg\");\n/* harmony import */ var assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/key-feature/subscription.svg */ \"./src/assets/key-feature/subscription.svg\");\n/* harmony import */ var assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/key-feature/support.svg */ \"./src/assets/key-feature/support.svg\");\n/* harmony import */ var assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"/Users/Oztrequartista/Desktop/Spartanives/my-app/src/sections/key-feature.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/** @jsx jsx */\n\n\n\n\n\n\n\n\nvar data = [{\n  id: 1,\n  imgSrc: assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4___default.a,\n  altText: \"Entertainment\",\n  title: \"Entertainment\",\n  text: \"We focus on actively investing large scale entertainment, leisure, hospitality, \\n      medium to large scale real estate, renewable energy, and other strategic \\n      projects across Ghana\"\n}, {\n  id: 2,\n  imgSrc: assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5___default.a,\n  altText: \"Financial\",\n  title: \"Financial\",\n  text: \"Spartan Ives aims to create financial value by directly investing equity into \\n    our portfolio companies or debt in partnership with investment partners \\n    around the world using patient capital as well restructuring operations of \\n    the invested assets to extract value\"\n}, {\n  id: 3,\n  imgSrc: assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6___default.a,\n  altText: \"Hospitality\",\n  title: \"Hospitality\",\n  text: \"Ghana\\u2019s hospitality space is under-served by traditional financial institutions \\n    and Spartan Ives\\u2019 strategy is to fill this gap. Our most compelling reason is \\n    the impact our investments have on the wellbeing of our planet and how \\n    economic development can work hand in hand with sustaining the \\n    environment\"\n}];\nfunction Strategy() {\n  var _this = this;\n\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"section\", {\n    id: \"strategies\",\n    sx: {\n      variant: \"section.keyFeature\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_components_section_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    slogan: \"\",\n    title: \"Our Strategy\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    sx: styles.grid,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }, data.map(function (item) {\n    var id = item.id,\n        imgSrc = item.imgSrc,\n        altText = item.altText,\n        title = item.title,\n        text = item.text;\n    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(components_feature_card_column_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: id,\n      src: imgSrc,\n      alt: altText,\n      title: title,\n      text: text,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 15\n      }\n    });\n  }))));\n}\n_c = Strategy;\nvar styles = {\n  grid: {\n    width: [\"100%\", \"80%\", \"100%\"],\n    mx: \"auto\",\n    gridGap: [\"35px 0\", null, \"40px 40px\", \"50px 60px\", \"30px\", \"50px 40px\", \"55px 90px\"],\n    gridTemplateColumns: [\"repeat(1,1fr)\", null, \"repeat(2,1fr)\", null, \"repeat(3,1fr)\"]\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Strategy\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2tleS1mZWF0dXJlLmpzP2Q5OTEiXSwibmFtZXMiOlsiZGF0YSIsImlkIiwiaW1nU3JjIiwiUGVyZm9ybWFuY2UiLCJhbHRUZXh0IiwidGl0bGUiLCJ0ZXh0IiwiUGFydG5lcnNoaXAiLCJTdWJzY3JpcHRpb24iLCJTdHJhdGVneSIsInZhcmlhbnQiLCJzdHlsZXMiLCJncmlkIiwibWFwIiwiaXRlbSIsIndpZHRoIiwibXgiLCJncmlkR2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBRyxDQUNYO0FBQ0VDLElBQUUsRUFBRSxDQUROO0FBRUVDLFFBQU0sRUFBRUMseUVBRlY7QUFHRUMsU0FBTyxFQUFFLGVBSFg7QUFJRUMsT0FBSyxFQUFFLGVBSlQ7QUFLRUMsTUFBSTtBQUxOLENBRFcsRUFXWDtBQUNFTCxJQUFFLEVBQUUsQ0FETjtBQUVFQyxRQUFNLEVBQUVLLHlFQUZWO0FBR0VILFNBQU8sRUFBRSxXQUhYO0FBSUVDLE9BQUssRUFBRSxXQUpUO0FBS0VDLE1BQUk7QUFMTixDQVhXLEVBc0JYO0FBQ0VMLElBQUUsRUFBRSxDQUROO0FBRUVDLFFBQU0sRUFBRU0sMEVBRlY7QUFHRUosU0FBTyxFQUFFLGFBSFg7QUFJRUMsT0FBSyxFQUFFLGFBSlQ7QUFLRUMsTUFBSTtBQUxOLENBdEJXLENBQWI7QUFxQ2UsU0FBU0csUUFBVCxHQUFvQjtBQUFBOztBQUNqQyxTQUNFO0FBQVMsTUFBRSxFQUFDLFlBQVo7QUFBeUIsTUFBRSxFQUFFO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsa0VBQUQ7QUFDRSxVQUFNLEVBQUMsRUFEVDtBQUVFLFNBQUssRUFBQyxjQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU1FLHFEQUFDLDZDQUFEO0FBQU0sTUFBRSxFQUFFQyxNQUFNLENBQUNDLElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1osSUFBSSxDQUFDYSxHQUFMLENBQVMsVUFBQ0MsSUFBRCxFQUFVO0FBQUEsUUFDVmIsRUFEVSxHQUMyQmEsSUFEM0IsQ0FDVmIsRUFEVTtBQUFBLFFBQ05DLE1BRE0sR0FDMkJZLElBRDNCLENBQ05aLE1BRE07QUFBQSxRQUNFRSxPQURGLEdBQzJCVSxJQUQzQixDQUNFVixPQURGO0FBQUEsUUFDV0MsS0FEWCxHQUMyQlMsSUFEM0IsQ0FDV1QsS0FEWDtBQUFBLFFBQ2tCQyxJQURsQixHQUMyQlEsSUFEM0IsQ0FDa0JSLElBRGxCO0FBRWxCLFdBQ0UscURBQUMseUVBQUQ7QUFDRSxTQUFHLEVBQUVMLEVBRFA7QUFFRSxTQUFHLEVBQUVDLE1BRlA7QUFHRSxTQUFHLEVBQUVFLE9BSFA7QUFJRSxXQUFLLEVBQUVDLEtBSlQ7QUFLRSxVQUFJLEVBQUVDLElBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGO0FBU0QsR0FYQSxDQURILENBTkYsQ0FERixDQURGO0FBeUJEO0tBMUJ1QkcsUTtBQTRCeEIsSUFBTUUsTUFBTSxHQUFHO0FBQ2JDLE1BQUksRUFBRTtBQUNKRyxTQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixNQUFoQixDQURIO0FBRUpDLE1BQUUsRUFBRSxNQUZBO0FBR0pDLFdBQU8sRUFBRSxDQUNQLFFBRE8sRUFFUCxJQUZPLEVBR1AsV0FITyxFQUlQLFdBSk8sRUFLUCxNQUxPLEVBTVAsV0FOTyxFQU9QLFdBUE8sQ0FITDtBQVlKQyx1QkFBbUIsRUFBRSxDQUNuQixlQURtQixFQUVuQixJQUZtQixFQUduQixlQUhtQixFQUluQixJQUptQixFQUtuQixlQUxtQjtBQVpqQjtBQURPLENBQWYiLCJmaWxlIjoiLi9zcmMvc2VjdGlvbnMva2V5LWZlYXR1cmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJ0aGVtZS11aVwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkIH0gZnJvbSBcInRoZW1lLXVpXCI7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlclwiO1xuaW1wb3J0IEZlYXR1cmVDYXJkQ29sdW1uIGZyb20gXCJjb21wb25lbnRzL2ZlYXR1cmUtY2FyZC1jb2x1bW4uanNcIjtcbmltcG9ydCBQZXJmb3JtYW5jZSBmcm9tIFwiYXNzZXRzL2tleS1mZWF0dXJlL3BlcmZvcm1hbmNlLnN2Z1wiO1xuaW1wb3J0IFBhcnRuZXJzaGlwIGZyb20gXCJhc3NldHMva2V5LWZlYXR1cmUvcGFydG5lcnNoaXAuc3ZnXCI7XG5pbXBvcnQgU3Vic2NyaXB0aW9uIGZyb20gXCJhc3NldHMva2V5LWZlYXR1cmUvc3Vic2NyaXB0aW9uLnN2Z1wiO1xuaW1wb3J0IFN1cHBvcnQgZnJvbSBcImFzc2V0cy9rZXktZmVhdHVyZS9zdXBwb3J0LnN2Z1wiO1xuXG5jb25zdCBkYXRhID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgaW1nU3JjOiBQZXJmb3JtYW5jZSxcbiAgICBhbHRUZXh0OiBcIkVudGVydGFpbm1lbnRcIixcbiAgICB0aXRsZTogXCJFbnRlcnRhaW5tZW50XCIsXG4gICAgdGV4dDpcbiAgICAgIGBXZSBmb2N1cyBvbiBhY3RpdmVseSBpbnZlc3RpbmcgbGFyZ2Ugc2NhbGUgZW50ZXJ0YWlubWVudCwgbGVpc3VyZSwgaG9zcGl0YWxpdHksIFxuICAgICAgbWVkaXVtIHRvIGxhcmdlIHNjYWxlIHJlYWwgZXN0YXRlLCByZW5ld2FibGUgZW5lcmd5LCBhbmQgb3RoZXIgc3RyYXRlZ2ljIFxuICAgICAgcHJvamVjdHMgYWNyb3NzIEdoYW5hYCxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIGltZ1NyYzogUGFydG5lcnNoaXAsXG4gICAgYWx0VGV4dDogXCJGaW5hbmNpYWxcIixcbiAgICB0aXRsZTogXCJGaW5hbmNpYWxcIixcbiAgICB0ZXh0OlxuICAgIGBTcGFydGFuIEl2ZXMgYWltcyB0byBjcmVhdGUgZmluYW5jaWFsIHZhbHVlIGJ5IGRpcmVjdGx5IGludmVzdGluZyBlcXVpdHkgaW50byBcbiAgICBvdXIgcG9ydGZvbGlvIGNvbXBhbmllcyBvciBkZWJ0IGluIHBhcnRuZXJzaGlwIHdpdGggaW52ZXN0bWVudCBwYXJ0bmVycyBcbiAgICBhcm91bmQgdGhlIHdvcmxkIHVzaW5nIHBhdGllbnQgY2FwaXRhbCBhcyB3ZWxsIHJlc3RydWN0dXJpbmcgb3BlcmF0aW9ucyBvZiBcbiAgICB0aGUgaW52ZXN0ZWQgYXNzZXRzIHRvIGV4dHJhY3QgdmFsdWVgLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgaW1nU3JjOiBTdWJzY3JpcHRpb24sXG4gICAgYWx0VGV4dDogXCJIb3NwaXRhbGl0eVwiLFxuICAgIHRpdGxlOiBcIkhvc3BpdGFsaXR5XCIsXG4gICAgdGV4dDpcbiAgICBgR2hhbmHigJlzIGhvc3BpdGFsaXR5IHNwYWNlIGlzIHVuZGVyLXNlcnZlZCBieSB0cmFkaXRpb25hbCBmaW5hbmNpYWwgaW5zdGl0dXRpb25zIFxuICAgIGFuZCBTcGFydGFuIEl2ZXPigJkgc3RyYXRlZ3kgaXMgdG8gZmlsbCB0aGlzIGdhcC4gT3VyIG1vc3QgY29tcGVsbGluZyByZWFzb24gaXMgXG4gICAgdGhlIGltcGFjdCBvdXIgaW52ZXN0bWVudHMgaGF2ZSBvbiB0aGUgd2VsbGJlaW5nIG9mIG91ciBwbGFuZXQgYW5kIGhvdyBcbiAgICBlY29ub21pYyBkZXZlbG9wbWVudCBjYW4gd29yayBoYW5kIGluIGhhbmQgd2l0aCBzdXN0YWluaW5nIHRoZSBcbiAgICBlbnZpcm9ubWVudGAsXG4gIH0sXG5cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0cmF0ZWd5KCkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwic3RyYXRlZ2llc1wiIHN4PXt7IHZhcmlhbnQ6IFwic2VjdGlvbi5rZXlGZWF0dXJlXCIgfX0+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U2VjdGlvbkhlYWRlclxuICAgICAgICAgIHNsb2dhbj1cIlwiXG4gICAgICAgICAgdGl0bGU9XCJPdXIgU3RyYXRlZ3lcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxHcmlkIHN4PXtzdHlsZXMuZ3JpZH0+XG4gICAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGlkLCBpbWdTcmMsIGFsdFRleHQsIHRpdGxlLCB0ZXh0IH0gPSBpdGVtO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPEZlYXR1cmVDYXJkQ29sdW1uXG4gICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICBzcmM9e2ltZ1NyY31cbiAgICAgICAgICAgICAgICBhbHQ9e2FsdFRleHR9XG4gICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgICAgICAgIHRleHQ9e3RleHR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L0dyaWQ+IFxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGdyaWQ6IHtcbiAgICB3aWR0aDogW1wiMTAwJVwiLCBcIjgwJVwiLCBcIjEwMCVcIl0sXG4gICAgbXg6IFwiYXV0b1wiLFxuICAgIGdyaWRHYXA6IFtcbiAgICAgIFwiMzVweCAwXCIsXG4gICAgICBudWxsLFxuICAgICAgXCI0MHB4IDQwcHhcIixcbiAgICAgIFwiNTBweCA2MHB4XCIsXG4gICAgICBcIjMwcHhcIixcbiAgICAgIFwiNTBweCA0MHB4XCIsXG4gICAgICBcIjU1cHggOTBweFwiLFxuICAgIF0sXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xuICAgICAgXCJyZXBlYXQoMSwxZnIpXCIsXG4gICAgICBudWxsLFxuICAgICAgXCJyZXBlYXQoMiwxZnIpXCIsXG4gICAgICBudWxsLFxuICAgICAgXCJyZXBlYXQoMywxZnIpXCIsXG4gICAgXSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/sections/key-feature.js\n");

/***/ })

})