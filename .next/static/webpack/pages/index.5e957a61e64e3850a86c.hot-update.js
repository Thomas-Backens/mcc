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

/***/ "./src/components/Hymns/index.tsx":
/*!****************************************!*\
  !*** ./src/components/Hymns/index.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _Search_SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Search/SearchBar */ \"./src/components/Hymns/Search/SearchBar/index.tsx\");\n/* harmony import */ var _Search_AddHymn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Search/AddHymn */ \"./src/components/Hymns/Search/AddHymn/index.tsx\");\n/* harmony import */ var _AllHymns_Hymn_Pin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AllHymns/Hymn/Pin */ \"./src/components/Hymns/AllHymns/Hymn/Pin/index.tsx\");\n/* harmony import */ var _AllHymns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AllHymns */ \"./src/components/Hymns/AllHymns/index.tsx\");\n/* harmony import */ var _AllHymns_hymnsList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AllHymns/hymnsList */ \"./src/components/Hymns/AllHymns/hymnsList.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ \"./src/components/Hymns/styles.ts\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var _Utils_fetcher__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Utils/fetcher */ \"./src/Utils/fetcher.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/thomasbackens/Desktop/Work/Personal/mcc/src/components/Hymns/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst Hymns = () => {\n  _s();\n\n  const s = (0,_styles__WEBPACK_IMPORTED_MODULE_7__.default)(); // const [newHymnValues, setNewHymnValues] = useState<Values>({\n  //   name: \"\",\n  //   hymn_name: \"\",\n  //   hymn_number: 0,\n  //   date: \"\",\n  // });\n\n  const {\n    0: allHymns,\n    1: setAllHymns\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_AllHymns_hymnsList__WEBPACK_IMPORTED_MODULE_6__.hymnsList);\n  const {\n    0: allLogs,\n    1: setAllLogs\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_AllHymns_hymnsList__WEBPACK_IMPORTED_MODULE_6__.logsList);\n  const {\n    0: searchBarValue,\n    1: setSearchBarValue\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n  const {\n    0: addModalOpen,\n    1: setAddModalOpen\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const {\n    0: pinModalOpen,\n    1: setPinModalOpen\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const {\n    0: isPasswordCorrect,\n    1: setIsPasswordCorrect\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // const createHymn = (values: Values) => {\n  //   const { name, hymn_name, hymn_number, date } = values;\n  //   const newHymn = {\n  //     name: hymn_name,\n  //     number: hymn_number,\n  //     logs: [{ logged: date, by: name }],\n  //   };\n  //   hymnsList.push(newHymn);\n  // };\n  // const addHymn = (values: Values) => {\n  //   mutate(\"/api/hymn\", async () => {\n  //     const addedHymn = await fetcher(\"/api/hymn\", {\n  //       method: \"POST\",\n  //       headers: { \"Content-Type\": \"application/json\" },\n  //       body: JSON.stringify({\n  //         bywho: values.name,\n  //         name: values.hymn_name,\n  //         number: values.hymn_number,\n  //         logged: values.date,\n  //       }),\n  //     });\n  //     newHymn = addedHymn;\n  //   });\n  // };\n\n  const checkPassword = values => {\n    setIsPasswordCorrect(values.password === \"rahab\" ? true : false);\n    setPinModalOpen(false);\n  };\n\n  const openAddModal = () => {\n    setAddModalOpen(true);\n    setPinModalOpen(true);\n  };\n\n  const closeAddModal = () => {\n    setPinModalOpen(false);\n    setAddModalOpen(false);\n    setIsPasswordCorrect(false);\n  };\n\n  const addHymn = values => {\n    (0,swr__WEBPACK_IMPORTED_MODULE_8__.mutate)(\"/api/hymn\", async () => {\n      const addedHymn = await (0,_Utils_fetcher__WEBPACK_IMPORTED_MODULE_9__.default)(\"/api/hymn\", {\n        method: \"POST\",\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n          bywho: values.name,\n          name: values.hymn_name,\n          number: values.hymn_number,\n          logged: values.date\n        })\n      });\n      const newHymn = {\n        name: addedHymn.name,\n        number: addedHymn.number\n      };\n      setAllHymns([...allHymns, newHymn]);\n      const newLog = {\n        id: addedHymn.number,\n        logged: addedHymn.logged,\n        bywho: addedHymn.bywho\n      };\n      setAllLogs([...allLogs, newLog]);\n      window.location.reload();\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AllHymns_Hymn_Pin__WEBPACK_IMPORTED_MODULE_4__.default, {\n      open: pinModalOpen,\n      handleClose: () => setPinModalOpen(false),\n      isCorrect: values => checkPassword(values)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Box, {\n      display: \"flex\",\n      alignItems: \"center\",\n      flexDirection: \"column\" // marginTop={20}\n      ,\n      className: s.root,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Box, {\n        display: \"flex\",\n        alignItems: \"center\",\n        className: s.search,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Search_SearchBar__WEBPACK_IMPORTED_MODULE_2__.default, {\n          value: searchBarValue,\n          handleChange: value => setSearchBarValue(value)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 142,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Search_AddHymn__WEBPACK_IMPORTED_MODULE_3__.default, {\n          open: addModalOpen && isPasswordCorrect,\n          handleClose: closeAddModal,\n          handleOpen: openAddModal,\n          createMutation: addHymn\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 146,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 141,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Box, {\n        className: s.hymns,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AllHymns__WEBPACK_IMPORTED_MODULE_5__.default, {\n          filter: searchBarValue,\n          hymnData: allHymns,\n          logData: allLogs,\n          setHymns: setAllHymns,\n          setLogs: setAllLogs\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 154,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 153,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n_s(Hymns, \"qAFAjNQBVUVHWNR0EAHkpPSI15w=\", false, function () {\n  return [_styles__WEBPACK_IMPORTED_MODULE_7__.default];\n});\n\n_c = Hymns;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hymns);\n\nvar _c;\n\n$RefreshReg$(_c, \"Hymns\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLEVBQUVELFlBSGQ7QUFJRSx3QkFBYyxFQUFFRTtBQUpsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRixlQW1CRSw4REFBQyxtREFBRDtBQUFLLGlCQUFTLEVBQUVsQixDQUFDLENBQUN5QyxLQUFsQjtBQUFBLCtCQUNFLDhEQUFDLDhDQUFEO0FBQ0UsZ0JBQU0sRUFBRXBDLGNBRFY7QUFFRSxrQkFBUSxFQUFFSixRQUZaO0FBR0UsaUJBQU8sRUFBRUUsT0FIWDtBQUlFLGtCQUFRLEVBQUVELFdBSlo7QUFLRSxpQkFBTyxFQUFFRTtBQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkY7QUFBQSxrQkFERjtBQXNDRCxDQW5JRDs7R0FBTUw7VUFDTUg7OztLQURORztBQXFJTiwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IeW1ucy9pbmRleC50c3g/NzY5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIFJlYWN0RWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuL1NlYXJjaC9TZWFyY2hCYXJcIjtcbmltcG9ydCBBZGRIeW1uIGZyb20gXCIuL1NlYXJjaC9BZGRIeW1uXCI7XG5pbXBvcnQgUGluTW9kYWwgZnJvbSBcIi4vQWxsSHltbnMvSHltbi9QaW5cIjtcbmltcG9ydCBBbGxIeW1ucyBmcm9tIFwiLi9BbGxIeW1uc1wiO1xuaW1wb3J0IHsgaHltbnNMaXN0LCBsb2dzTGlzdCB9IGZyb20gXCIuL0FsbEh5bW5zL2h5bW5zTGlzdFwiO1xuaW1wb3J0IHVzZVN0eWxlcyBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCB7IG11dGF0ZSB9IGZyb20gXCJzd3JcIjtcbmltcG9ydCBmZXRjaGVyIGZyb20gXCIuLi8uLi9VdGlscy9mZXRjaGVyXCI7XG5cbmludGVyZmFjZSBWYWx1ZXMge1xuICBuYW1lOiBzdHJpbmc7XG4gIGh5bW5fbmFtZTogc3RyaW5nO1xuICBoeW1uX251bWJlcjogbnVtYmVyO1xuICBkYXRlOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBQYXNzd29yZFZhbHVlcyB7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBIeW1uVmFsdWVzIHtcbiAgbmFtZTogc3RyaW5nO1xuICBudW1iZXI6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIExvZ1ZhbHVlcyB7XG4gIGlkOiBudW1iZXI7XG4gIGxvZ2dlZDogc3RyaW5nO1xuICBieXdobzogc3RyaW5nO1xufVxuXG5jb25zdCBIeW1ucyA9ICgpOiBSZWFjdEVsZW1lbnQgPT4ge1xuICBjb25zdCBzID0gdXNlU3R5bGVzKCk7XG5cbiAgLy8gY29uc3QgW25ld0h5bW5WYWx1ZXMsIHNldE5ld0h5bW5WYWx1ZXNdID0gdXNlU3RhdGU8VmFsdWVzPih7XG4gIC8vICAgbmFtZTogXCJcIixcbiAgLy8gICBoeW1uX25hbWU6IFwiXCIsXG4gIC8vICAgaHltbl9udW1iZXI6IDAsXG4gIC8vICAgZGF0ZTogXCJcIixcbiAgLy8gfSk7XG5cbiAgY29uc3QgW2FsbEh5bW5zLCBzZXRBbGxIeW1uc10gPSB1c2VTdGF0ZTxIeW1uVmFsdWVzW10+KGh5bW5zTGlzdCk7XG4gIGNvbnN0IFthbGxMb2dzLCBzZXRBbGxMb2dzXSA9IHVzZVN0YXRlPExvZ1ZhbHVlc1tdPihsb2dzTGlzdCk7XG5cbiAgY29uc3QgW3NlYXJjaEJhclZhbHVlLCBzZXRTZWFyY2hCYXJWYWx1ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuXG4gIGNvbnN0IFthZGRNb2RhbE9wZW4sIHNldEFkZE1vZGFsT3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtwaW5Nb2RhbE9wZW4sIHNldFBpbk1vZGFsT3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgW2lzUGFzc3dvcmRDb3JyZWN0LCBzZXRJc1Bhc3N3b3JkQ29ycmVjdF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgLy8gY29uc3QgY3JlYXRlSHltbiA9ICh2YWx1ZXM6IFZhbHVlcykgPT4ge1xuICAvLyAgIGNvbnN0IHsgbmFtZSwgaHltbl9uYW1lLCBoeW1uX251bWJlciwgZGF0ZSB9ID0gdmFsdWVzO1xuICAvLyAgIGNvbnN0IG5ld0h5bW4gPSB7XG4gIC8vICAgICBuYW1lOiBoeW1uX25hbWUsXG4gIC8vICAgICBudW1iZXI6IGh5bW5fbnVtYmVyLFxuICAvLyAgICAgbG9nczogW3sgbG9nZ2VkOiBkYXRlLCBieTogbmFtZSB9XSxcbiAgLy8gICB9O1xuXG4gIC8vICAgaHltbnNMaXN0LnB1c2gobmV3SHltbik7XG4gIC8vIH07XG5cbiAgLy8gY29uc3QgYWRkSHltbiA9ICh2YWx1ZXM6IFZhbHVlcykgPT4ge1xuICAvLyAgIG11dGF0ZShcIi9hcGkvaHltblwiLCBhc3luYyAoKSA9PiB7XG4gIC8vICAgICBjb25zdCBhZGRlZEh5bW4gPSBhd2FpdCBmZXRjaGVyKFwiL2FwaS9oeW1uXCIsIHtcbiAgLy8gICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgLy8gICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAvLyAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gIC8vICAgICAgICAgYnl3aG86IHZhbHVlcy5uYW1lLFxuICAvLyAgICAgICAgIG5hbWU6IHZhbHVlcy5oeW1uX25hbWUsXG4gIC8vICAgICAgICAgbnVtYmVyOiB2YWx1ZXMuaHltbl9udW1iZXIsXG4gIC8vICAgICAgICAgbG9nZ2VkOiB2YWx1ZXMuZGF0ZSxcbiAgLy8gICAgICAgfSksXG4gIC8vICAgICB9KTtcblxuICAvLyAgICAgbmV3SHltbiA9IGFkZGVkSHltbjtcbiAgLy8gICB9KTtcbiAgLy8gfTtcblxuICBjb25zdCBjaGVja1Bhc3N3b3JkID0gKHZhbHVlczogUGFzc3dvcmRWYWx1ZXMpID0+IHtcbiAgICBzZXRJc1Bhc3N3b3JkQ29ycmVjdCh2YWx1ZXMucGFzc3dvcmQgPT09IFwicmFoYWJcIiA/IHRydWUgOiBmYWxzZSk7XG4gICAgc2V0UGluTW9kYWxPcGVuKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBvcGVuQWRkTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0QWRkTW9kYWxPcGVuKHRydWUpO1xuICAgIHNldFBpbk1vZGFsT3Blbih0cnVlKTtcbiAgfTtcblxuICBjb25zdCBjbG9zZUFkZE1vZGFsID0gKCkgPT4ge1xuICAgIHNldFBpbk1vZGFsT3BlbihmYWxzZSk7XG4gICAgc2V0QWRkTW9kYWxPcGVuKGZhbHNlKTtcbiAgICBzZXRJc1Bhc3N3b3JkQ29ycmVjdChmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgYWRkSHltbiA9ICh2YWx1ZXM6IFZhbHVlcykgPT4ge1xuICAgIG11dGF0ZShcIi9hcGkvaHltblwiLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBhZGRlZEh5bW4gPSBhd2FpdCBmZXRjaGVyKFwiL2FwaS9oeW1uXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgYnl3aG86IHZhbHVlcy5uYW1lLFxuICAgICAgICAgIG5hbWU6IHZhbHVlcy5oeW1uX25hbWUsXG4gICAgICAgICAgbnVtYmVyOiB2YWx1ZXMuaHltbl9udW1iZXIsXG4gICAgICAgICAgbG9nZ2VkOiB2YWx1ZXMuZGF0ZSxcbiAgICAgICAgfSksXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgbmV3SHltbiA9IHtcbiAgICAgICAgbmFtZTogYWRkZWRIeW1uLm5hbWUsXG4gICAgICAgIG51bWJlcjogYWRkZWRIeW1uLm51bWJlcixcbiAgICAgIH07XG4gICAgICBzZXRBbGxIeW1ucyhbLi4uYWxsSHltbnMsIG5ld0h5bW5dKTtcbiAgICAgIGNvbnN0IG5ld0xvZyA9IHtcbiAgICAgICAgaWQ6IGFkZGVkSHltbi5udW1iZXIsXG4gICAgICAgIGxvZ2dlZDogYWRkZWRIeW1uLmxvZ2dlZCxcbiAgICAgICAgYnl3aG86IGFkZGVkSHltbi5ieXdobyxcbiAgICAgIH07XG4gICAgICBzZXRBbGxMb2dzKFsuLi5hbGxMb2dzLCBuZXdMb2ddKTtcblxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxQaW5Nb2RhbFxuICAgICAgICBvcGVuPXtwaW5Nb2RhbE9wZW59XG4gICAgICAgIGhhbmRsZUNsb3NlPXsoKSA9PiBzZXRQaW5Nb2RhbE9wZW4oZmFsc2UpfVxuICAgICAgICBpc0NvcnJlY3Q9eyh2YWx1ZXMpID0+IGNoZWNrUGFzc3dvcmQodmFsdWVzKX1cbiAgICAgIC8+XG4gICAgICA8Qm94XG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAvLyBtYXJnaW5Ub3A9ezIwfVxuICAgICAgICBjbGFzc05hbWU9e3Mucm9vdH1cbiAgICAgID5cbiAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBjbGFzc05hbWU9e3Muc2VhcmNofT5cbiAgICAgICAgICA8U2VhcmNoQmFyXG4gICAgICAgICAgICB2YWx1ZT17c2VhcmNoQmFyVmFsdWV9XG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0U2VhcmNoQmFyVmFsdWUodmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEFkZEh5bW5cbiAgICAgICAgICAgIG9wZW49e2FkZE1vZGFsT3BlbiAmJiBpc1Bhc3N3b3JkQ29ycmVjdH1cbiAgICAgICAgICAgIGhhbmRsZUNsb3NlPXtjbG9zZUFkZE1vZGFsfVxuICAgICAgICAgICAgaGFuZGxlT3Blbj17b3BlbkFkZE1vZGFsfVxuICAgICAgICAgICAgY3JlYXRlTXV0YXRpb249e2FkZEh5bW59XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtzLmh5bW5zfT5cbiAgICAgICAgICA8QWxsSHltbnNcbiAgICAgICAgICAgIGZpbHRlcj17c2VhcmNoQmFyVmFsdWV9XG4gICAgICAgICAgICBoeW1uRGF0YT17YWxsSHltbnN9XG4gICAgICAgICAgICBsb2dEYXRhPXthbGxMb2dzfVxuICAgICAgICAgICAgc2V0SHltbnM9e3NldEFsbEh5bW5zfVxuICAgICAgICAgICAgc2V0TG9ncz17c2V0QWxsTG9nc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSHltbnM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJveCIsIlNlYXJjaEJhciIsIkFkZEh5bW4iLCJQaW5Nb2RhbCIsIkFsbEh5bW5zIiwiaHltbnNMaXN0IiwibG9nc0xpc3QiLCJ1c2VTdHlsZXMiLCJtdXRhdGUiLCJmZXRjaGVyIiwiSHltbnMiLCJzIiwiYWxsSHltbnMiLCJzZXRBbGxIeW1ucyIsImFsbExvZ3MiLCJzZXRBbGxMb2dzIiwic2VhcmNoQmFyVmFsdWUiLCJzZXRTZWFyY2hCYXJWYWx1ZSIsImFkZE1vZGFsT3BlbiIsInNldEFkZE1vZGFsT3BlbiIsInBpbk1vZGFsT3BlbiIsInNldFBpbk1vZGFsT3BlbiIsImlzUGFzc3dvcmRDb3JyZWN0Iiwic2V0SXNQYXNzd29yZENvcnJlY3QiLCJjaGVja1Bhc3N3b3JkIiwidmFsdWVzIiwicGFzc3dvcmQiLCJvcGVuQWRkTW9kYWwiLCJjbG9zZUFkZE1vZGFsIiwiYWRkSHltbiIsImFkZGVkSHltbiIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImJ5d2hvIiwibmFtZSIsImh5bW5fbmFtZSIsIm51bWJlciIsImh5bW5fbnVtYmVyIiwibG9nZ2VkIiwiZGF0ZSIsIm5ld0h5bW4iLCJuZXdMb2ciLCJpZCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwicm9vdCIsInNlYXJjaCIsInZhbHVlIiwiaHltbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Hymns/index.tsx\n");

/***/ })

});