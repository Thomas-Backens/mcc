"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Hymns/AllHymns/Hymn/styles.ts":
/*!******************************************************!*\
  !*** ./src/components/Hymns/AllHymns/Hymn/styles.ts ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nconsole.log(window);\nconst useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => ({\n  root: {\n    backgroundColor: theme.palette.surface.black,\n    height: 70,\n    paddingLeft: theme.spacing(2),\n    paddingRight: theme.spacing(2)\n  },\n  title: {\n    color: theme.palette.surface.white,\n    fontSize: theme.typography.h6.fontSize\n  },\n  number: {\n    color: theme.palette.surface.white,\n    fontSize: theme.typography.h6.fontSize,\n    textAlign: \"center\"\n  },\n  lastSang: {\n    color: theme.palette.surface.white,\n    fontSize: theme.typography.body1.fontSize,\n    fontWeight: 200,\n    textAlign: \"center\"\n  },\n  canSing: {\n    color: theme.palette.primary.main,\n    fontSize: theme.typography.h6.fontSize,\n    textAlign: \"center\"\n  },\n  cantSing: {\n    color: theme.palette.secondary.main,\n    fontSize: theme.typography.h6.fontSize,\n    textAlign: \"center\"\n  },\n  quickAdd: {\n    backgroundColor: theme.palette.primary.main,\n    width: 30,\n    height: 30,\n    marginRight: theme.spacing(2),\n    \"&:hover\": {\n      backgroundColor: \"rgba(58, 208, 118, 0.8)\"\n    }\n  },\n  quickAddPlus: {\n    color: theme.palette.surface.white\n  },\n  editButton: {\n    backgroundColor: theme.palette.surface.black,\n    color: theme.palette.surface.white,\n    borderRadius: 0,\n    border: \"1px solid #6A6A6A\",\n    width: 100,\n    height: 40,\n    \"& > *\": {\n      fontSize: theme.typography.h6.fontSize,\n      fontWeight: 400\n    },\n    \"&:hover\": {\n      backgroundColor: theme.palette.surface.lightGrey\n    }\n  },\n  logsButton: {\n    width: 40,\n    height: 40\n  },\n  arrow: {\n    width: 15,\n    height: 15,\n    color: \"white\",\n    transition: \"0.2s\"\n  },\n  rotated: {\n    transform: \"rotate(90deg)\"\n  },\n  logs: {\n    backgroundColor: theme.palette.surface.black,\n    marginBottom: theme.spacing(2),\n    overflow: \"hidden\"\n  },\n  log: {\n    color: theme.palette.surface.white,\n    fontSize: theme.typography.body1.fontSize,\n    fontWeight: 200,\n    marginLeft: theme.spacing(5),\n    marginBottom: theme.spacing(2)\n  },\n  closed: {\n    height: 0\n  }\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (useStyles);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IeW1ucy9BbGxIeW1ucy9IeW1uL3N0eWxlcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUVBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsTUFBWjtBQUVBLE1BQU1DLFNBQVMsR0FBR0osNkRBQVUsQ0FBRUssS0FBRCxLQUFtQjtBQUM5Q0MsRUFBQUEsSUFBSSxFQUFFO0FBQ0pDLElBQUFBLGVBQWUsRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWNDLE9BQWQsQ0FBc0JDLEtBRG5DO0FBRUpDLElBQUFBLE1BQU0sRUFBRSxFQUZKO0FBR0pDLElBQUFBLFdBQVcsRUFBRVAsS0FBSyxDQUFDUSxPQUFOLENBQWMsQ0FBZCxDQUhUO0FBSUpDLElBQUFBLFlBQVksRUFBRVQsS0FBSyxDQUFDUSxPQUFOLENBQWMsQ0FBZDtBQUpWLEdBRHdDO0FBTzlDRSxFQUFBQSxLQUFLLEVBQUU7QUFDTEMsSUFBQUEsS0FBSyxFQUFFWCxLQUFLLENBQUNHLE9BQU4sQ0FBY0MsT0FBZCxDQUFzQlEsS0FEeEI7QUFFTEMsSUFBQUEsUUFBUSxFQUFFYixLQUFLLENBQUNjLFVBQU4sQ0FBaUJDLEVBQWpCLENBQW9CRjtBQUZ6QixHQVB1QztBQVc5Q0csRUFBQUEsTUFBTSxFQUFFO0FBQ05MLElBQUFBLEtBQUssRUFBRVgsS0FBSyxDQUFDRyxPQUFOLENBQWNDLE9BQWQsQ0FBc0JRLEtBRHZCO0FBRU5DLElBQUFBLFFBQVEsRUFBRWIsS0FBSyxDQUFDYyxVQUFOLENBQWlCQyxFQUFqQixDQUFvQkYsUUFGeEI7QUFHTkksSUFBQUEsU0FBUyxFQUFFO0FBSEwsR0FYc0M7QUFnQjlDQyxFQUFBQSxRQUFRLEVBQUU7QUFDUlAsSUFBQUEsS0FBSyxFQUFFWCxLQUFLLENBQUNHLE9BQU4sQ0FBY0MsT0FBZCxDQUFzQlEsS0FEckI7QUFFUkMsSUFBQUEsUUFBUSxFQUFFYixLQUFLLENBQUNjLFVBQU4sQ0FBaUJLLEtBQWpCLENBQXVCTixRQUZ6QjtBQUdSTyxJQUFB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RWIsS0FBSyxDQUFDYyxVQUFOLENBQWlCSyxLQUFqQixDQUF1Qk4sUUFGOUI7QUFHSE8sSUFBQUEsVUFBVSxFQUFFLEdBSFQ7QUFJSHNCLElBQUFBLFVBQVUsRUFBRTFDLEtBQUssQ0FBQ1EsT0FBTixDQUFjLENBQWQsQ0FKVDtBQUtIZ0MsSUFBQUEsWUFBWSxFQUFFeEMsS0FBSyxDQUFDUSxPQUFOLENBQWMsQ0FBZDtBQUxYLEdBN0V5QztBQW9GOUNtQyxFQUFBQSxNQUFNLEVBQUU7QUFDTnJDLElBQUFBLE1BQU0sRUFBRTtBQURGO0FBcEZzQyxDQUFuQixDQUFELENBQTVCO0FBeUZBLCtEQUFlUCxTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0h5bW5zL0FsbEh5bW5zL0h5bW4vc3R5bGVzLnRzPzAwNzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcblxuY29uc29sZS5sb2cod2luZG93KTtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnN1cmZhY2UuYmxhY2ssXG4gICAgaGVpZ2h0OiA3MCxcbiAgICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZygyKSxcbiAgICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc3VyZmFjZS53aGl0ZSxcbiAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5oNi5mb250U2l6ZSxcbiAgfSxcbiAgbnVtYmVyOiB7XG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc3VyZmFjZS53aGl0ZSxcbiAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5oNi5mb250U2l6ZSxcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gIH0sXG4gIGxhc3RTYW5nOiB7XG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc3VyZmFjZS53aGl0ZSxcbiAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5ib2R5MS5mb250U2l6ZSxcbiAgICBmb250V2VpZ2h0OiAyMDAsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICB9LFxuICBjYW5TaW5nOiB7XG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5Lmg2LmZvbnRTaXplLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgfSxcbiAgY2FudFNpbmc6IHtcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcbiAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5oNi5mb250U2l6ZSxcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gIH0sXG4gIHF1aWNrQWRkOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICB3aWR0aDogMzAsXG4gICAgaGVpZ2h0OiAzMCxcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoNTgsIDIwOCwgMTE4LCAwLjgpXCIsXG4gICAgfSxcbiAgfSxcbiAgcXVpY2tBZGRQbHVzOiB7XG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc3VyZmFjZS53aGl0ZSxcbiAgfSxcbiAgZWRpdEJ1dHRvbjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5zdXJmYWNlLmJsYWNrLFxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnN1cmZhY2Uud2hpdGUsXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgIGJvcmRlcjogXCIxcHggc29saWQgIzZBNkE2QVwiLFxuICAgIHdpZHRoOiAxMDAsXG4gICAgaGVpZ2h0OiA0MCxcbiAgICBcIiYgPiAqXCI6IHtcbiAgICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5Lmg2LmZvbnRTaXplLFxuICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgIH0sXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5zdXJmYWNlLmxpZ2h0R3JleSxcbiAgICB9LFxuICB9LFxuICBsb2dzQnV0dG9uOiB7XG4gICAgd2lkdGg6IDQwLFxuICAgIGhlaWdodDogNDAsXG4gIH0sXG4gIGFycm93OiB7XG4gICAgd2lkdGg6IDE1LFxuICAgIGhlaWdodDogMTUsXG4gICAgY29sb3I6IFwid2hpdGVcIixcbiAgICB0cmFuc2l0aW9uOiBcIjAuMnNcIixcbiAgfSxcbiAgcm90YXRlZDoge1xuICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoOTBkZWcpXCIsXG4gIH0sXG4gIGxvZ3M6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc3VyZmFjZS5ibGFjayxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gIH0sXG4gIGxvZzoge1xuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnN1cmZhY2Uud2hpdGUsXG4gICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkuYm9keTEuZm9udFNpemUsXG4gICAgZm9udFdlaWdodDogMjAwLFxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoNSksXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxuICB9LFxuICBjbG9zZWQ6IHtcbiAgICBoZWlnaHQ6IDAsXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVN0eWxlcztcbiJdLCJuYW1lcyI6WyJtYWtlU3R5bGVzIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsInVzZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJzdXJmYWNlIiwiYmxhY2siLCJoZWlnaHQiLCJwYWRkaW5nTGVmdCIsInNwYWNpbmciLCJwYWRkaW5nUmlnaHQiLCJ0aXRsZSIsImNvbG9yIiwid2hpdGUiLCJmb250U2l6ZSIsInR5cG9ncmFwaHkiLCJoNiIsIm51bWJlciIsInRleHRBbGlnbiIsImxhc3RTYW5nIiwiYm9keTEiLCJmb250V2VpZ2h0IiwiY2FuU2luZyIsInByaW1hcnkiLCJtYWluIiwiY2FudFNpbmciLCJzZWNvbmRhcnkiLCJxdWlja0FkZCIsIndpZHRoIiwibWFyZ2luUmlnaHQiLCJxdWlja0FkZFBsdXMiLCJlZGl0QnV0dG9uIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwibGlnaHRHcmV5IiwibG9nc0J1dHRvbiIsImFycm93IiwidHJhbnNpdGlvbiIsInJvdGF0ZWQiLCJ0cmFuc2Zvcm0iLCJsb2dzIiwibWFyZ2luQm90dG9tIiwib3ZlcmZsb3ciLCJtYXJnaW5MZWZ0IiwiY2xvc2VkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Hymns/AllHymns/Hymn/styles.ts\n");

/***/ })

});