webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/team-card.js":
/*!*************************************!*\
  !*** ./src/components/team-card.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TeamCard; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\nvar _jsxFileName = \"/Users/Oztrequartista/Desktop/Spartanives/my-app/src/components/team-card.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/** @jsx jsx */\n\n\nfunction TeamCard(_ref) {\n  var _this = this;\n\n  var src = _ref.src,\n      altText = _ref.altText,\n      title = _ref.title,\n      designation = _ref.designation,\n      social = _ref.social;\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    sx: styles.card,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n    src: src,\n    alt: altText,\n    sx: styles.memberThumb,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    sx: styles.infoWrapper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n    className: \"info__name\",\n    sx: styles.infoWrapper.name,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    className: \"info__designation\",\n    sx: styles.infoWrapper.designation,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, designation)), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    sx: styles.socialShare,\n    className: \"social__share\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, social.map(function (item, index) {\n    var id = item.id,\n        name = item.name,\n        path = item.path,\n        icon = item.icon;\n    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      key: id,\n      href: path,\n      className: name,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 13\n      }\n    }, icon);\n  })));\n}\n_c = TeamCard;\nvar styles = {\n  card: {\n    display: \"flex\",\n    alignItems: \"center\",\n    flexDirection: \"column\",\n    py: [0, null, 4, 5, 6],\n    px: [2, null, 6, 7],\n    transition: \"ease-in-out 0.4s\",\n    borderRadius: \"8px\",\n    position: \"relative\",\n    \"&:hover\": {\n      boxShadow: [\"none\", null, \"0 4px 10px rgba(39, 83, 123, 0.12)\"],\n      \".info__name\": {\n        color: \"primary\"\n      },\n      \".info__designation\": {\n        color: \"primary\"\n      },\n      \".social__share\": {\n        opacity: 1,\n        a: {\n          my: 0,\n          py: [0, null, 1]\n        }\n      }\n    }\n  },\n  memberThumb: {\n    width: [\"70px\", \"80px\", \"100px\", null, null, \"130px\"],\n    height: [\"70px\", \"80px\", \"100px\", null, null, \"130px\"],\n    flexShrink: 0,\n    border: \"2px solid\",\n    borderColor: \"primary\",\n    borderRadius: \"50%\"\n  },\n  infoWrapper: {\n    width: \"100%\",\n    textAlign: \"center\",\n    mt: [3, null, 4],\n    padding: \"16px\",\n    name: {\n      fontSize: [1, 2, 3, null, null, 4],\n      fontWeight: \"bold\",\n      lineHeight: [1.25, 1.35],\n      transition: \"color 0.25s\",\n      mb: 1\n    },\n    designation: {\n      fontSize: [\"14px\", null, null, 1],\n      fontWeight: \"body\",\n      lineHeight: \"heading\",\n      color: \"text\",\n      transition: \"color 0.25s\"\n    }\n  },\n  socialShare: {\n    position: [\"relative\", null, \"absolute\"],\n    right: [0, null, 6, null, 4, 6],\n    bottom: [0, null, \"18px\", 5],\n    width: [\"100%\", null, \"auto\"],\n    display: \"flex\",\n    flexDirection: [\"row\", null, \"column\"],\n    alignItems: \"center\",\n    justifyContent: \"center\",\n    transition: \"all 0.25s\",\n    opacity: [1, null, 0],\n    pt: 2,\n    a: {\n      fontSize: [0, 1, null, 2],\n      color: [\"text\", null, \"primary\"],\n      lineHeight: \"1em\",\n      my: [0, null, \"-2px\"],\n      px: 1,\n      transition: \"all 0.25s\",\n      \"&:hover\": {\n        color: [\"primary\", null, \"text\"]\n      }\n    }\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"TeamCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVhbS1jYXJkLmpzPzNiMzkiXSwibmFtZXMiOlsiVGVhbUNhcmQiLCJzcmMiLCJhbHRUZXh0IiwidGl0bGUiLCJkZXNpZ25hdGlvbiIsInNvY2lhbCIsInN0eWxlcyIsImNhcmQiLCJtZW1iZXJUaHVtYiIsImluZm9XcmFwcGVyIiwibmFtZSIsInNvY2lhbFNoYXJlIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaWQiLCJwYXRoIiwiaWNvbiIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZmxleERpcmVjdGlvbiIsInB5IiwicHgiLCJ0cmFuc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwicG9zaXRpb24iLCJib3hTaGFkb3ciLCJjb2xvciIsIm9wYWNpdHkiLCJhIiwibXkiLCJ3aWR0aCIsImhlaWdodCIsImZsZXhTaHJpbmsiLCJib3JkZXIiLCJib3JkZXJDb2xvciIsInRleHRBbGlnbiIsIm10IiwicGFkZGluZyIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJtYiIsInJpZ2h0IiwiYm90dG9tIiwianVzdGlmeUNvbnRlbnQiLCJwdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxPQUFnRTtBQUFBOztBQUFBLE1BQTVDQyxHQUE0QyxRQUE1Q0EsR0FBNEM7QUFBQSxNQUF2Q0MsT0FBdUMsUUFBdkNBLE9BQXVDO0FBQUEsTUFBOUJDLEtBQThCLFFBQTlCQSxLQUE4QjtBQUFBLE1BQXZCQyxXQUF1QixRQUF2QkEsV0FBdUI7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7QUFDN0UsU0FDRSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUMsTUFBTSxDQUFDQyxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsOENBQUQ7QUFBTyxPQUFHLEVBQUVOLEdBQVo7QUFBaUIsT0FBRyxFQUFFQyxP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RDtBQVFYMEIsa0JBQWMsRUFBRSxRQVJMO0FBU1h0QixjQUFVLEVBQUUsV0FURDtBQVVYSyxXQUFPLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQVYsQ0FWRTtBQVdYa0IsTUFBRSxFQUFFLENBWE87QUFZWGpCLEtBQUMsRUFBRTtBQUNEVSxjQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLElBQVAsRUFBYSxDQUFiLENBRFQ7QUFFRFosV0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxTQUFmLENBRk47QUFHRGMsZ0JBQVUsRUFBRSxLQUhYO0FBSURYLFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsTUFBVixDQUpIO0FBS0RSLFFBQUUsRUFBRSxDQUxIO0FBTURDLGdCQUFVLEVBQUUsV0FOWDtBQU9ELGlCQUFXO0FBQ1RJLGFBQUssRUFBRSxDQUFDLFNBQUQsRUFBWSxJQUFaLEVBQWtCLE1BQWxCO0FBREU7QUFQVjtBQVpRO0FBeERBLENBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90ZWFtLWNhcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJ0aGVtZS11aVwiO1xuaW1wb3J0IHsgVGV4dCwgSGVhZGluZywgSW1hZ2UsIEJveCwgTGluayB9IGZyb20gXCJ0aGVtZS11aVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZWFtQ2FyZCh7IHNyYywgYWx0VGV4dCwgdGl0bGUsIGRlc2lnbmF0aW9uLCBzb2NpYWwgfSkge1xuICByZXR1cm4gKFxuICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJkfT5cbiAgICAgIDxJbWFnZSBzcmM9e3NyY30gYWx0PXthbHRUZXh0fSBzeD17c3R5bGVzLm1lbWJlclRodW1ifSAvPlxuICAgICAgPEJveCBzeD17c3R5bGVzLmluZm9XcmFwcGVyfT5cbiAgICAgICAgPEhlYWRpbmcgY2xhc3NOYW1lPVwiaW5mb19fbmFtZVwiIHN4PXtzdHlsZXMuaW5mb1dyYXBwZXIubmFtZX0+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cImluZm9fX2Rlc2lnbmF0aW9uXCIgc3g9e3N0eWxlcy5pbmZvV3JhcHBlci5kZXNpZ25hdGlvbn0+XG4gICAgICAgICAge2Rlc2lnbmF0aW9ufVxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICAgIDxCb3ggc3g9e3N0eWxlcy5zb2NpYWxTaGFyZX0gY2xhc3NOYW1lPVwic29jaWFsX19zaGFyZVwiPlxuICAgICAgICB7c29jaWFsLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCB7IGlkLCBuYW1lLCBwYXRoLCBpY29uIH0gPSBpdGVtO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGluayBrZXk9e2lkfSBocmVmPXtwYXRofSBjbGFzc05hbWU9e25hbWV9PlxuICAgICAgICAgICAgICB7aWNvbn1cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNhcmQ6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgcHk6IFswLCBudWxsLCA0LCA1LCA2XSxcbiAgICBweDogWzIsIG51bGwsIDYsIDddLFxuICAgIHRyYW5zaXRpb246IFwiZWFzZS1pbi1vdXQgMC40c1wiLFxuICAgIGJvcmRlclJhZGl1czogXCI4cHhcIixcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBib3hTaGFkb3c6IFtcIm5vbmVcIiwgbnVsbCwgXCIwIDRweCAxMHB4IHJnYmEoMzksIDgzLCAxMjMsIDAuMTIpXCJdLFxuICAgICAgXCIuaW5mb19fbmFtZVwiOiB7XG4gICAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICAgIH0sXG4gICAgICBcIi5pbmZvX19kZXNpZ25hdGlvblwiOiB7XG4gICAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICAgIH0sXG4gICAgICBcIi5zb2NpYWxfX3NoYXJlXCI6IHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgYToge1xuICAgICAgICAgIG15OiAwLFxuICAgICAgICAgIHB5OiBbMCwgbnVsbCwgMV0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5cbiAgbWVtYmVyVGh1bWI6IHtcbiAgICB3aWR0aDogW1wiNzBweFwiLCBcIjgwcHhcIiwgXCIxMDBweFwiLCBudWxsLCBudWxsLCBcIjEzMHB4XCJdLFxuICAgIGhlaWdodDogW1wiNzBweFwiLCBcIjgwcHhcIiwgXCIxMDBweFwiLCBudWxsLCBudWxsLCBcIjEzMHB4XCJdLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgYm9yZGVyOiBcIjJweCBzb2xpZFwiLFxuICAgIGJvcmRlckNvbG9yOiBcInByaW1hcnlcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gIH0sXG4gIGluZm9XcmFwcGVyOiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBtdDogWzMsIG51bGwsIDRdLFxuICAgIHBhZGRpbmc6XCIxNnB4XCIsXG4gICAgbmFtZToge1xuICAgICAgZm9udFNpemU6IFsxLCAyLCAzLCBudWxsLCBudWxsLCA0XSxcbiAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgbGluZUhlaWdodDogWzEuMjUsIDEuMzVdLFxuICAgICAgdHJhbnNpdGlvbjogXCJjb2xvciAwLjI1c1wiLFxuICAgICAgbWI6IDEsXG4gICAgfSxcbiAgICBkZXNpZ25hdGlvbjoge1xuICAgICAgZm9udFNpemU6IFtcIjE0cHhcIiwgbnVsbCwgbnVsbCwgMV0sXG4gICAgICBmb250V2VpZ2h0OiBcImJvZHlcIixcbiAgICAgIGxpbmVIZWlnaHQ6IFwiaGVhZGluZ1wiLFxuICAgICAgY29sb3I6IFwidGV4dFwiLFxuICAgICAgdHJhbnNpdGlvbjogXCJjb2xvciAwLjI1c1wiLFxuICAgIH0sXG4gIH0sXG4gIHNvY2lhbFNoYXJlOiB7XG4gICAgcG9zaXRpb246IFtcInJlbGF0aXZlXCIsIG51bGwsIFwiYWJzb2x1dGVcIl0sXG4gICAgcmlnaHQ6IFswLCBudWxsLCA2LCBudWxsLCA0LCA2XSxcbiAgICBib3R0b206IFswLCBudWxsLCBcIjE4cHhcIiwgNV0sXG4gICAgd2lkdGg6IFtcIjEwMCVcIiwgbnVsbCwgXCJhdXRvXCJdLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFtcInJvd1wiLCBudWxsLCBcImNvbHVtblwiXSxcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIHRyYW5zaXRpb246IFwiYWxsIDAuMjVzXCIsXG4gICAgb3BhY2l0eTogWzEsIG51bGwsIDBdLFxuICAgIHB0OiAyLFxuICAgIGE6IHtcbiAgICAgIGZvbnRTaXplOiBbMCwgMSwgbnVsbCwgMl0sXG4gICAgICBjb2xvcjogW1widGV4dFwiLCBudWxsLCBcInByaW1hcnlcIl0sXG4gICAgICBsaW5lSGVpZ2h0OiBcIjFlbVwiLFxuICAgICAgbXk6IFswLCBudWxsLCBcIi0ycHhcIl0sXG4gICAgICBweDogMSxcbiAgICAgIHRyYW5zaXRpb246IFwiYWxsIDAuMjVzXCIsXG4gICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICBjb2xvcjogW1wicHJpbWFyeVwiLCBudWxsLCBcInRleHRcIl0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/team-card.js\n");

/***/ })

})