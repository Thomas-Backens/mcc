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

/***/ "./src/components/Hymns/Search/AddHymn/styles.ts":
/*!*******************************************************!*\
  !*** ./src/components/Hymns/Search/AddHymn/styles.ts ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nconst useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => ({\n  root: {\n    height: \"100%\"\n  },\n  addButton: {\n    backgroundColor: theme.palette.primary.main,\n    color: theme.palette.surface.white,\n    width: 130,\n    height: \"100%\",\n    borderRadius: 0,\n    fontSize: theme.typography.h6.fontSize,\n    fontWeight: 400,\n    \"&:hover\": {\n      backgroundColor: \"rgba(58, 208, 118, 0.8)\"\n    }\n  },\n  modal: {\n    display: \"flex\",\n    alignItems: \"center\",\n    justifyContent: \"center\",\n    \"& > div\": {\n      outline: \"none\"\n    }\n  },\n  modalBackground: {\n    backgroundColor: theme.palette.background.default,\n    position: \"absolute\",\n    top: \"50%\",\n    left: \"50%\",\n    transform: \"translate(-50%, -50%)\",\n    outline: \"none\",\n    maxHeight: \"100%\",\n    overflowY: \"auto\",\n    maxWidth: \"100%\"\n  },\n  field: {\n    backgroundColor: theme.palette.surface.black,\n    color: theme.palette.surface.white,\n    width: 500,\n    padding: theme.spacing(1),\n    borderRadius: 0,\n    border: \"none\",\n    \"& > *\": {\n      color: theme.palette.surface.white\n    }\n  },\n  title: {\n    color: theme.palette.surface.white,\n    fontSize: theme.typography.h4.fontSize,\n    fontWeight: 700\n  },\n  cancelButton: {\n    backgroundColor: theme.palette.background.default,\n    color: theme.palette.surface.white,\n    borderRadius: 0,\n    border: \"1px solid #6A6A6A\",\n    width: 100,\n    height: 40,\n    \"& > *\": {\n      fontSize: theme.typography.h6.fontSize,\n      fontWeight: 400\n    },\n    \"&:hover\": {\n      backgroundColor: theme.palette.surface.lightGrey\n    }\n  },\n  addHymnButton: {\n    backgroundColor: theme.palette.primary.main,\n    color: theme.palette.surface.white,\n    width: 100,\n    height: 40,\n    borderRadius: 0,\n    fontSize: theme.typography.h6.fontSize,\n    fontWeight: 400,\n    marginLeft: theme.spacing(2),\n    \"&:hover\": {\n      backgroundColor: \"rgba(58, 208, 118, 0.8)\"\n    }\n  }\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (useStyles);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IeW1ucy9TZWFyY2gvQWRkSHltbi9zdHlsZXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFFQSxNQUFNQyxTQUFTLEdBQUdELDZEQUFVLENBQUVFLEtBQUQsS0FBbUI7QUFDOUNDLEVBQUFBLElBQUksRUFBRTtBQUNKQyxJQUFBQSxNQUFNLEVBQUU7QUFESixHQUR3QztBQUk5Q0MsRUFBQUEsU0FBUyxFQUFFO0FBQ1RDLElBQUFBLGVBQWUsRUFBRUosS0FBSyxDQUFDSyxPQUFOLENBQWNDLE9BQWQsQ0FBc0JDLElBRDlCO0FBRVRDLElBQUFBLEtBQUssRUFBRVIsS0FBSyxDQUFDSyxPQUFOLENBQWNJLE9BQWQsQ0FBc0JDLEtBRnBCO0FBR1RDLElBQUFBLEtBQUssRUFBRSxHQUhFO0FBS1RULElBQUFBLE1BQU0sRUFBRSxNQUxDO0FBTVRVLElBQUFBLFlBQVksRUFBRSxDQU5MO0FBT1RDLElBQUFBLFFBQVEsRUFBRWIsS0FBSyxDQUFDYyxVQUFOLENBQWlCQyxFQUFqQixDQUFvQkYsUUFQckI7QUFRVEcsSUFBQUEsVUFBVSxFQUFFLEdBUkg7QUFTVCxlQUFXO0FBQ1RaLE1BQUFBLGVBQWUsRUFBRTtBQURSO0FBVEYsR0FKbUM7QUFpQjlDYSxFQUFBQSxLQUFLLEVBQUU7QUFDTEMsSUFBQUEsT0FBTyxFQUFFLE1BREo7QUFFTEMsSUFBQUEsVUFBVSxFQUFFLFFBRlA7QUFHTEMsSUFBQUEsY0FBYyxFQUFFLFFBSFg7QUFJTCxlQUFXO0FBQ1RDLE1BQUFBLE9BQU8sRUFBRTtBQURBO0FBSk4sR0FqQnVDO0FBeUI5Q0MsRUFBQUEsZUFBZSxFQUFFO0FBQ2ZsQixJQUFBQSxlQUFlLEVBQUVKLEtBQUssQ0FBQ0ssT0FBTixDQUFja0IsVUFBZCxDQUF5QkMsT0FEM0I7QUFFZkMsSUFBQUEsUUFBUSxFQUFFLFVBRks7QUFHZkMsSUFBQUEsR0FBRyxFQUFFLEtBSFU7QUFJZkMsSUFBQUEsSUFBSSxFQUFFLEtBSlM7QUFLZkMsSUFBQUEsU0FBUyxFQUFFLHVCQUxJO0FBTWZQLElBQUFBLE9BQU8sRUFBRSxNQU5NO0FBT2ZRLElBQUFBLFNBQVMsRUFBRSxNQVBJO0FBUWZDLElBQUFBLFNBQVMsRUFBRSxNQVJJO0FBU2ZDLElBQUFBLFFBQVEsRUFBRTtBQVRLLEdBekI2QjtBQW9DOUNDLEVBQUFBLEtBQUssRUFBRTtBQUNMNUIsSUFBQUEsZUFBZSxFQUFFSixLQUFLLENBQUNLLE9BQU4sQ0FBY0ksT0FBZCxDQUFzQndCLEtBRGxDO0FBRUx6QixJQUFBQSxLQUFLLEVBQUVSLEtBQUssQ0FBQ0ssT0FBTixDQUFjSSxPQUFkLENBQXNCQyxLQUZ4QjtBQUdMQyxJQUFBQSxLQUFLLEVBQUUsR0FIRjtBQUlMdUIsSUFBQUEsT0FBTyxFQUFFbEMsS0FBSyxDQUFDbUMsT0FBTixDQUFjLENBQWQsQ0FKSjtBQUtMdkIsSUFBQUEsWUFBWSxFQUFFLENBTFQ7QUFNTHdCLElBQUFBLE1BQU0sRUFBRSxNQU5IO0FBT0wsYUFBUztBQUNQNUIsTUFBQUEsS0FBSyxFQUFFUixLQUFLLENBQUNLLE9BQU4sQ0FBY0ksT0FBZCxDQUFzQkM7QUFEdEI7QUFQSixHQXBDdUM7QUErQzlDMkIsRUFBQUEsS0FBSyxFQUFFO0FBQ0w3QixJQUFBQSxLQUFLLEVBQUVSLEtBQUssQ0FBQ0ssT0FBTixDQUFjSSxPQUFkLENBQXNCQyxLQUR4QjtBQUVMRyxJQUFBQSxRQUFRLEVBQUViLEtBQUssQ0FBQ2MsVUFBTixDQUFpQndCLEVBQWpCLENBQW9CekIsUUFGekI7QUFHTEcsSUFBQUEsVUFBVSxFQUFFO0FBSFAsR0EvQ3VDO0FBb0Q5Q3VCLEVBQUFBLFlBQVksRUFBRTtBQUNabkMsSUFBQUEsZUFBZSxFQUFFSixLQUFLLENBQUNLLE9BQU4sQ0FBY2tCLFVBQWQsQ0FBeUJDLE9BRDlCO0FBRVpoQixJQUFBQSxLQUFLLEVBQUVSLEtBQUssQ0FBQ0ssT0FBTixDQUFjSSxPQUFkLENBQXNCQyxLQUZqQjtBQUdaRSxJQUFBQSxZQUFZLEVBQUUsQ0FIRjtBQUlad0IsSUFBQUEsTUFBTSxFQUFFLG1CQUpJO0FBS1p6QixJQUFBQSxLQUFLLEVBQUUsR0FMSztBQU1aVCxJQUFBQSxNQUFNLEVBQUUsRUFOSTtBQU9aLGFBQVM7QUFDUFcsTUFBQUEsUUFBUSxFQUFFYixLQUFLLENBQUNjLFVBQU4sQ0FBaUJDLEVBQWpCLENBQW9CRixRQUR2QjtBQUVQRyxNQUFBQSxVQUFVLEVBQUU7QUFGTCxLQVBHO0FBV1osZUFBVztBQUNUWixNQUFBQSxlQUFlLEVBQUVKLEtBQUssQ0FBQ0ssT0FBTixDQUFjSSxPQUFkLENBQXNCK0I7QUFEOUI7QUFYQyxHQXBEZ0M7QUFtRTlDQyxFQUFBQSxhQUFhLEVBQUU7QUFDYnJDLElBQUFBLGVBQWUsRUFBRUosS0FBSyxDQUFDSyxPQUFOLENBQWNDLE9BQWQsQ0FBc0JDLElBRDFCO0FBRWJDLElBQUFBLEtBQUssRUFBRVIsS0FBSyxDQUFDSyxPQUFOLENBQWNJLE9BQWQsQ0FBc0JDLEtBRmhCO0FBR2JDLElBQUFBLEtBQUssRUFBRSxHQUhNO0FBSWJULElBQUFBLE1BQU0sRUFBRSxFQUpLO0FBS2JVLElBQUFBLFlBQVksRUFBRSxDQUxEO0FBTWJDLElBQUFBLFFBQVEsRUFBRWIsS0FBSyxDQUFDYyxVQUFOLENBQWlCQyxFQUFqQixDQUFvQkYsUUFOakI7QUFPYkcsSUFBQUEsVUFBVSxFQUFFLEdBUEM7QUFRYjBCLElBQUFBLFVBQVUsRUFBRTFDLEtBQUssQ0FBQ21DLE9BQU4sQ0FBYyxDQUFkLENBUkM7QUFTYixlQUFXO0FBQ1QvQixNQUFBQSxlQUFlLEVBQUU7QUFEUjtBQVRFO0FBbkUrQixDQUFuQixDQUFELENBQTVCO0FBa0ZBLCtEQUFlTCxTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0h5bW5zL1NlYXJjaC9BZGRIeW1uL3N0eWxlcy50cz81NGJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIGhlaWdodDogXCIxMDAlXCIsXG4gIH0sXG4gIGFkZEJ1dHRvbjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc3VyZmFjZS53aGl0ZSxcbiAgICB3aWR0aDogMTMwLFxuICAgIFxuICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5Lmg2LmZvbnRTaXplLFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoNTgsIDIwOCwgMTE4LCAwLjgpXCIsXG4gICAgfSxcbiAgfSxcbiAgbW9kYWw6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIFwiJiA+IGRpdlwiOiB7XG4gICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICB9LFxuICB9LFxuICBtb2RhbEJhY2tncm91bmQ6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5kZWZhdWx0LFxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgdG9wOiBcIjUwJVwiLFxuICAgIGxlZnQ6IFwiNTAlXCIsXG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiLFxuICAgIG91dGxpbmU6IFwibm9uZVwiLFxuICAgIG1heEhlaWdodDogXCIxMDAlXCIsXG4gICAgb3ZlcmZsb3dZOiBcImF1dG9cIixcbiAgICBtYXhXaWR0aDogXCIxMDAlXCIsXG4gIH0sXG4gIGZpZWxkOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnN1cmZhY2UuYmxhY2ssXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc3VyZmFjZS53aGl0ZSxcbiAgICB3aWR0aDogNTAwLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgXCImID4gKlwiOiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zdXJmYWNlLndoaXRlLFxuICAgIH0sXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc3VyZmFjZS53aGl0ZSxcbiAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5oNC5mb250U2l6ZSxcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gIH0sXG4gIGNhbmNlbEJ1dHRvbjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLmRlZmF1bHQsXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc3VyZmFjZS53aGl0ZSxcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjNkE2QTZBXCIsXG4gICAgd2lkdGg6IDEwMCxcbiAgICBoZWlnaHQ6IDQwLFxuICAgIFwiJiA+ICpcIjoge1xuICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkuaDYuZm9udFNpemUsXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgfSxcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnN1cmZhY2UubGlnaHRHcmV5LFxuICAgIH0sXG4gIH0sXG4gIGFkZEh5bW5CdXR0b246IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnN1cmZhY2Uud2hpdGUsXG4gICAgd2lkdGg6IDEwMCxcbiAgICBoZWlnaHQ6IDQwLFxuICAgIGJvcmRlclJhZGl1czogMCxcbiAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5oNi5mb250U2l6ZSxcbiAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyKSxcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoNTgsIDIwOCwgMTE4LCAwLjgpXCIsXG4gICAgfSxcbiAgfSxcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlU3R5bGVzO1xuIl0sIm5hbWVzIjpbIm1ha2VTdHlsZXMiLCJ1c2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJoZWlnaHQiLCJhZGRCdXR0b24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJjb2xvciIsInN1cmZhY2UiLCJ3aGl0ZSIsIndpZHRoIiwiYm9yZGVyUmFkaXVzIiwiZm9udFNpemUiLCJ0eXBvZ3JhcGh5IiwiaDYiLCJmb250V2VpZ2h0IiwibW9kYWwiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50Iiwib3V0bGluZSIsIm1vZGFsQmFja2dyb3VuZCIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3dZIiwibWF4V2lkdGgiLCJmaWVsZCIsImJsYWNrIiwicGFkZGluZyIsInNwYWNpbmciLCJib3JkZXIiLCJ0aXRsZSIsImg0IiwiY2FuY2VsQnV0dG9uIiwibGlnaHRHcmV5IiwiYWRkSHltbkJ1dHRvbiIsIm1hcmdpbkxlZnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Hymns/Search/AddHymn/styles.ts\n");

/***/ })

});