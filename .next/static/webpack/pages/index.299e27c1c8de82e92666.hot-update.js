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

/***/ "./src/components/Hymns/AllHymns/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/Hymns/AllHymns/index.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _Hymn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hymn */ \"./src/components/Hymns/AllHymns/Hymn/index.tsx\");\n/* harmony import */ var _Hymn_Edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Hymn/Edit */ \"./src/components/Hymns/AllHymns/Hymn/Edit/index.tsx\");\n/* harmony import */ var _Hymn_Pin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Hymn/Pin */ \"./src/components/Hymns/AllHymns/Hymn/Pin/index.tsx\");\n/* harmony import */ var _Hymn_QuickAdd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Hymn/QuickAdd */ \"./src/components/Hymns/AllHymns/Hymn/QuickAdd/index.tsx\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var _Utils_fetcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Utils/fetcher */ \"./src/Utils/fetcher.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/thomasbackens/Desktop/Work/Personal/mcc/src/components/Hymns/AllHymns/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n // import { hymnsList, logsList } from \"./hymnsList\";\n\n\n\n\n // useSWR\n\n // import AddHymn from \"../Search/AddHymn\";\n\nconst AllHymns = ({\n  filter,\n  hymnData,\n  logData,\n  setHymns,\n  setLogs\n}) => {\n  _s();\n\n  const {\n    0: data,\n    1: setData\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    name: \"\",\n    number: 0 // logs: [{ logged: \"\", bywho: \"\" }],\n\n  });\n  const {\n    0: editModalOpen,\n    1: setEditModalOpen\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const {\n    0: pinModalOpen,\n    1: setPinModalOpen\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const {\n    0: quickAddModalOpen,\n    1: setQuickAddModalOpen\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const {\n    0: isPasswordCorrect,\n    1: setIsPasswordCorrect\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // const { data: hymns } = useSWR(\"/api/hymn\");\n  // const { data: logs } = useSWR(\"/api/log\");\n  // const [allHymns, setAllHymns] = useState<HymnValues[]>(hymnsList);\n  // const [allLogs, setAllLogs] = useState<LogValues[]>(logsList);\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    fetch(\"/api/hymn\").then(response => response.json()).then(hymn_data => setHymns(hymn_data.hymns));\n    fetch(\"/api/log\").then(response => response.json()).then(log_data => setLogs(log_data.logs));\n  }, [setHymns, setLogs]); // useEffect(() => {\n  //   addHymn(createMutation);\n  // }, [createMutation]);\n  // useEffect(() => {\n  //   setAllHymns([\n  //     ...allHymns.filter((hymn) => hymn.number !== addedHymn.number),\n  //     addedHymn,\n  //   ]);\n  //   const newLog = {\n  //     id: addedHymn.number,\n  //     logged: addedHymn.logged,\n  //     bywho: addedHymn.bywho,\n  //   };\n  //   setAllLogs([...allLogs.filter((log) => log.id !== newLog.id), newLog]);\n  // }, [addedHymn]);\n  // let dataHymns: HymnValues[] = [];\n  // let dataLogs: any[] = [];\n  // if (hymns) {\n  //   dataHymns = hymns.hymns;\n  // }\n  // if (logs) {\n  //   dataLogs = logs.logs;\n  // }\n  // useEffect(() => {\n  //   fetch(\"/api/hymn\")\n  //     .then((response) => response.json())\n  //     .then((data) => console.log(data));\n  // }, []);\n\n  const openEditModal = values => {\n    checkPasswordForEdit();\n    setPinModalOpen(true);\n    setData(values);\n  };\n\n  const openQuickAddModal = values => {\n    setQuickAddModalOpen(true);\n    setData(values);\n  }; // const editHymn = (values: EditValues) => {\n  //   const selectedhymn = hymnsList.filter(\n  //     (hymn) => hymn.number === data.number\n  //   );\n  //   selectedhymn[0].name = values.name;\n  //   selectedhymn[0].number = values.number;\n  // };\n\n\n  const editHymn = values => {\n    (0,swr__WEBPACK_IMPORTED_MODULE_6__.mutate)(\"/api/hymn\", async () => {\n      const editedHymn = await (0,_Utils_fetcher__WEBPACK_IMPORTED_MODULE_7__.default)(\"/api/hymn\", {\n        method: \"PATCH\",\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n          number: data.number,\n          newNumber: values.number,\n          newName: values.name\n        })\n      });\n      let newLogs = logData.filter(log => log.id === data.number);\n\n      if (values.number === data.number) {\n        editedHymn.number = data.number;\n      } else {\n        newLogs.forEach(newLog => {\n          newLog.id = values.number;\n        });\n      }\n\n      editedHymn.name = values.name;\n      setHymns([...hymnData.filter(hymn => hymn.number !== data.number), editedHymn]); // newLogs.forEach((newLog) => {\n      //   setLogs([...logData.filter((log) => log.id !== data.number), newLog]);\n      // });\n      // console.log(logData.filter((log) => log.id === values.number));\n      // setLogs([...logData.filter((log) => log.id !== data.number), newLogs[0]]);\n\n      setLogs([...logData.filter(log => log.id !== data.number)]);\n    });\n    closeModal();\n  };\n\n  const quickAddHymn = values => {\n    (0,swr__WEBPACK_IMPORTED_MODULE_6__.mutate)(\"/api/log\", async () => {\n      const addedLog = await (0,_Utils_fetcher__WEBPACK_IMPORTED_MODULE_7__.default)(\"/api/log\", {\n        method: \"POST\",\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n          id: data.number,\n          bywho: values.name,\n          logged: values.date\n        })\n      });\n      setLogs([...logData, addedLog]);\n    }); // window.location.reload();\n    // const selectedhymn = hymnsList.filter(\n    //   (hymn) => hymn.number === data.number\n    // );\n    // console.log(selectedhymn);\n    // selectedhymn[0].logs.push({ logged: values.date, bywho: values.name });\n  }; // const fakeHymns = hymnsList.filter(\n  //   (hymn) =>\n  //     hymn.name.toLowerCase().includes(filter.toLowerCase()) ||\n  //     hymn.number.toString().includes(filter)\n  // );\n  // console.log(allHymns);\n\n\n  const checkPasswordForEdit = values => {\n    setIsPasswordCorrect(values.password === \"rahab\" ? true : false);\n    setPinModalOpen(false);\n    setEditModalOpen(true);\n  };\n\n  const checkPasswordForQuickAdd = values => {\n    setIsPasswordCorrect(values.password === \"rahab\" ? true : false);\n    setPinModalOpen(false);\n    setQuickAddModalOpen(true);\n  };\n\n  const closeModal = () => {\n    setEditModalOpen(false);\n    setIsPasswordCorrect(false);\n  };\n\n  if (hymnData[0].number === 999 || logData[0].id === 999) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Hymn_Edit__WEBPACK_IMPORTED_MODULE_3__.default, {\n        open: editModalOpen,\n        handleClose: () => setEditModalOpen(false),\n        data: data,\n        editMutation: editHymn\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 233,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Hymn_QuickAdd__WEBPACK_IMPORTED_MODULE_5__.default, {\n        open: quickAddModalOpen,\n        handleClose: () => setQuickAddModalOpen(false),\n        quickAddMutation: quickAddHymn\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 239,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true);\n  }\n\n  const filteredHymns = hymnData.filter(hymn => hymn.name.toLowerCase().includes(filter.toLowerCase()) || hymn.number.toString().includes(filter));\n\n  const filteredLogs = hymnId => {\n    const flogs = logData.filter(log => log.id === hymnId);\n    return flogs;\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Hymn_Edit__WEBPACK_IMPORTED_MODULE_3__.default, {\n      open: editModalOpen,\n      handleClose: closeModal,\n      data: data,\n      editMutation: editHymn\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 274,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Hymn_Pin__WEBPACK_IMPORTED_MODULE_4__.default, {\n      open: pinModalOpen,\n      handleClose: () => setPinModalOpen(false),\n      isCorrect: values => setIsPasswordCorrect(values.password === \"rahab\" ? true : false)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 280,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Hymn_QuickAdd__WEBPACK_IMPORTED_MODULE_5__.default, {\n      open: quickAddModalOpen,\n      handleClose: () => setQuickAddModalOpen(false),\n      quickAddMutation: quickAddHymn\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 287,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Box, {\n      display: \"flex\",\n      justifyContent: \"center\",\n      flexDirection: \"column\",\n      children: filteredHymns.sort().map(hymn => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Hymn__WEBPACK_IMPORTED_MODULE_2__.default, {\n        name: hymn.name,\n        number: hymn.number,\n        logs:\n        /*allLogs.filter(\n          (log) => log.id === hymn.number\n        )*/\n        filteredLogs(hymn.number),\n        handleEdit: () => openEditModal(hymn),\n        handleQuickAdd: () => openQuickAddModal(hymn)\n      }, hymn.number, false, {\n        fileName: _jsxFileName,\n        lineNumber: 294,\n        columnNumber: 11\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 292,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true); // return (\n  //   <>\n  //     <EditModal\n  //       open={editModalOpen}\n  //       handleClose={() => setEditModalOpen(false)}\n  //       data={data}\n  //       editMutation={editHymn}\n  //     />\n  //     <QuickAddModal\n  //       open={quickAddModalOpen}\n  //       handleClose={() => setQuickAddModalOpen(false)}\n  //       quickAddMutation={quickAddHymn}\n  //     />\n  //     <Box display=\"flex\" justifyContent=\"center\" flexDirection=\"column\">\n  //       {fakeHymns.sort().map((hymn) => (\n  //         <Hymn\n  //           name={hymn.name}\n  //           number={hymn.number}\n  //           logs={hymn.logs}\n  //           handleEdit={() => openEditModal(hymn)}\n  //           handleQuickAdd={() => openQuickAddModal(hymn)}\n  //           key={hymn.number}\n  //         />\n  //       ))}\n  //     </Box>\n  //   </>\n  // );\n};\n\n_s(AllHymns, \"qTRllnEzCjTVeJ9+Cs6wqtVJwFg=\");\n\n_c = AllHymns;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AllHymns);\n\nvar _c;\n\n$RefreshReg$(_c, \"AllHymns\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IeW1ucy9BbGxIeW1ucy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBT0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7Q0FDOEI7O0NBRTlCOztBQTBDQSxNQUFNVSxRQUFpQyxHQUFHLENBQUM7QUFDekNDLEVBQUFBLE1BRHlDO0FBRXpDQyxFQUFBQSxRQUZ5QztBQUd6Q0MsRUFBQUEsT0FIeUM7QUFJekNDLEVBQUFBLFFBSnlDO0FBS3pDQyxFQUFBQTtBQUx5QyxDQUFELEtBTVA7QUFBQTs7QUFDakMsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCaEIsK0NBQVEsQ0FBYTtBQUMzQ2lCLElBQUFBLElBQUksRUFBRSxFQURxQztBQUUzQ0MsSUFBQUEsTUFBTSxFQUFFLENBRm1DLENBRzNDOztBQUgyQyxHQUFiLENBQWhDO0FBS0EsUUFBTTtBQUFBLE9BQUNDLGFBQUQ7QUFBQSxPQUFnQkM7QUFBaEIsTUFBb0NwQiwrQ0FBUSxDQUFVLEtBQVYsQ0FBbEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ3FCLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDdEIsK0NBQVEsQ0FBVSxLQUFWLENBQWhEO0FBQ0EsUUFBTTtBQUFBLE9BQUN1QixpQkFBRDtBQUFBLE9BQW9CQztBQUFwQixNQUE0Q3hCLCtDQUFRLENBQVUsS0FBVixDQUExRDtBQUVBLFFBQU07QUFBQSxPQUFDeUIsaUJBQUQ7QUFBQSxPQUFvQkM7QUFBcEIsTUFBNEMxQiwrQ0FBUSxDQUFVLEtBQVYsQ0FBMUQsQ0FWaUMsQ0FZakM7QUFDQTtBQUVBO0FBQ0E7O0FBRUFDLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkMEIsSUFBQUEsS0FBSyxDQUFDLFdBQUQsQ0FBTCxDQUNHQyxJQURILENBQ1NDLFFBQUQsSUFBY0EsUUFBUSxDQUFDQyxJQUFULEVBRHRCLEVBRUdGLElBRkgsQ0FFU0csU0FBRCxJQUFlbEIsUUFBUSxD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LElBQUQsQ0FSakM7QUFTRSxzQkFBYyxFQUFFLE1BQU1mLGlCQUFpQixDQUFDZSxJQUFEO0FBVHpDLFNBVU9BLElBQUksQ0FBQ25DLE1BVlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbkJGO0FBQUEsa0JBREYsQ0FoTmlDLENBdVBqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxDQXhSRDs7R0FBTVQ7O0tBQUFBO0FBMFJOLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0h5bW5zL0FsbEh5bW5zL2luZGV4LnRzeD8yNTc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICB1c2VTdGF0ZSxcbiAgUmVhY3RFbGVtZW50LFxuICB1c2VFZmZlY3QsXG4gIFNldFN0YXRlQWN0aW9uLFxuICBEaXNwYXRjaCxcbn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBIeW1uIGZyb20gXCIuL0h5bW5cIjtcbi8vIGltcG9ydCB7IGh5bW5zTGlzdCwgbG9nc0xpc3QgfSBmcm9tIFwiLi9oeW1uc0xpc3RcIjtcbmltcG9ydCBFZGl0TW9kYWwgZnJvbSBcIi4vSHltbi9FZGl0XCI7XG5pbXBvcnQgUGluTW9kYWwgZnJvbSBcIi4vSHltbi9QaW5cIjtcbmltcG9ydCBRdWlja0FkZE1vZGFsIGZyb20gXCIuL0h5bW4vUXVpY2tBZGRcIjtcbmltcG9ydCB7IG11dGF0ZSB9IGZyb20gXCJzd3JcIjsgLy8gdXNlU1dSXG5pbXBvcnQgZmV0Y2hlciBmcm9tIFwiLi4vLi4vLi4vVXRpbHMvZmV0Y2hlclwiO1xuLy8gaW1wb3J0IEFkZEh5bW4gZnJvbSBcIi4uL1NlYXJjaC9BZGRIeW1uXCI7XG5cbmludGVyZmFjZSBFZGl0VmFsdWVzIHtcbiAgbmFtZTogc3RyaW5nO1xuICBudW1iZXI6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIFBhc3N3b3JkVmFsdWVzIHtcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFF1aWNrQWRkVmFsdWVzIHtcbiAgbmFtZTogc3RyaW5nO1xuICBkYXRlOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBIeW1uVmFsdWVzIHtcbiAgbmFtZTogc3RyaW5nO1xuICBudW1iZXI6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIExvZ1ZhbHVlcyB7XG4gIGlkOiBudW1iZXI7XG4gIGxvZ2dlZDogc3RyaW5nO1xuICBieXdobzogc3RyaW5nO1xufVxuXG4vLyBpbnRlcmZhY2UgVmFsdWVzIHtcbi8vICAgbmFtZTogc3RyaW5nO1xuLy8gICBoeW1uX25hbWU6IHN0cmluZztcbi8vICAgaHltbl9udW1iZXI6IG51bWJlcjtcbi8vICAgZGF0ZTogc3RyaW5nO1xuLy8gfVxuXG5pbnRlcmZhY2UgQWxsSHltbnNQcm9wcyB7XG4gIGZpbHRlcjogc3RyaW5nO1xuICBoeW1uRGF0YTogSHltblZhbHVlc1tdO1xuICBsb2dEYXRhOiBMb2dWYWx1ZXNbXTtcbiAgc2V0SHltbnM6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPEh5bW5WYWx1ZXNbXT4+O1xuICBzZXRMb2dzOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxMb2dWYWx1ZXNbXT4+O1xufVxuXG5jb25zdCBBbGxIeW1uczogUmVhY3QuRkM8QWxsSHltbnNQcm9wcz4gPSAoe1xuICBmaWx0ZXIsXG4gIGh5bW5EYXRhLFxuICBsb2dEYXRhLFxuICBzZXRIeW1ucyxcbiAgc2V0TG9ncyxcbn06IEFsbEh5bW5zUHJvcHMpOiBSZWFjdEVsZW1lbnQgPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxIeW1uVmFsdWVzPih7XG4gICAgbmFtZTogXCJcIixcbiAgICBudW1iZXI6IDAsXG4gICAgLy8gbG9nczogW3sgbG9nZ2VkOiBcIlwiLCBieXdobzogXCJcIiB9XSxcbiAgfSk7XG4gIGNvbnN0IFtlZGl0TW9kYWxPcGVuLCBzZXRFZGl0TW9kYWxPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW3Bpbk1vZGFsT3Blbiwgc2V0UGluTW9kYWxPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW3F1aWNrQWRkTW9kYWxPcGVuLCBzZXRRdWlja0FkZE1vZGFsT3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgW2lzUGFzc3dvcmRDb3JyZWN0LCBzZXRJc1Bhc3N3b3JkQ29ycmVjdF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgLy8gY29uc3QgeyBkYXRhOiBoeW1ucyB9ID0gdXNlU1dSKFwiL2FwaS9oeW1uXCIpO1xuICAvLyBjb25zdCB7IGRhdGE6IGxvZ3MgfSA9IHVzZVNXUihcIi9hcGkvbG9nXCIpO1xuXG4gIC8vIGNvbnN0IFthbGxIeW1ucywgc2V0QWxsSHltbnNdID0gdXNlU3RhdGU8SHltblZhbHVlc1tdPihoeW1uc0xpc3QpO1xuICAvLyBjb25zdCBbYWxsTG9ncywgc2V0QWxsTG9nc10gPSB1c2VTdGF0ZTxMb2dWYWx1ZXNbXT4obG9nc0xpc3QpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goXCIvYXBpL2h5bW5cIilcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGh5bW5fZGF0YSkgPT4gc2V0SHltbnMoaHltbl9kYXRhLmh5bW5zKSk7XG4gICAgZmV0Y2goXCIvYXBpL2xvZ1wiKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigobG9nX2RhdGEpID0+IHNldExvZ3MobG9nX2RhdGEubG9ncykpO1xuICB9LCBbc2V0SHltbnMsIHNldExvZ3NdKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGFkZEh5bW4oY3JlYXRlTXV0YXRpb24pO1xuICAvLyB9LCBbY3JlYXRlTXV0YXRpb25dKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIHNldEFsbEh5bW5zKFtcbiAgLy8gICAgIC4uLmFsbEh5bW5zLmZpbHRlcigoaHltbikgPT4gaHltbi5udW1iZXIgIT09IGFkZGVkSHltbi5udW1iZXIpLFxuICAvLyAgICAgYWRkZWRIeW1uLFxuICAvLyAgIF0pO1xuICAvLyAgIGNvbnN0IG5ld0xvZyA9IHtcbiAgLy8gICAgIGlkOiBhZGRlZEh5bW4ubnVtYmVyLFxuICAvLyAgICAgbG9nZ2VkOiBhZGRlZEh5bW4ubG9nZ2VkLFxuICAvLyAgICAgYnl3aG86IGFkZGVkSHltbi5ieXdobyxcbiAgLy8gICB9O1xuICAvLyAgIHNldEFsbExvZ3MoWy4uLmFsbExvZ3MuZmlsdGVyKChsb2cpID0+IGxvZy5pZCAhPT0gbmV3TG9nLmlkKSwgbmV3TG9nXSk7XG4gIC8vIH0sIFthZGRlZEh5bW5dKTtcblxuICAvLyBsZXQgZGF0YUh5bW5zOiBIeW1uVmFsdWVzW10gPSBbXTtcbiAgLy8gbGV0IGRhdGFMb2dzOiBhbnlbXSA9IFtdO1xuXG4gIC8vIGlmIChoeW1ucykge1xuICAvLyAgIGRhdGFIeW1ucyA9IGh5bW5zLmh5bW5zO1xuICAvLyB9XG5cbiAgLy8gaWYgKGxvZ3MpIHtcbiAgLy8gICBkYXRhTG9ncyA9IGxvZ3MubG9ncztcbiAgLy8gfVxuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgZmV0Y2goXCIvYXBpL2h5bW5cIilcbiAgLy8gICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAvLyAgICAgLnRoZW4oKGRhdGEpID0+IGNvbnNvbGUubG9nKGRhdGEpKTtcbiAgLy8gfSwgW10pO1xuXG4gIGNvbnN0IG9wZW5FZGl0TW9kYWwgPSAodmFsdWVzOiBIeW1uVmFsdWVzKSA9PiB7XG4gICAgY2hlY2tQYXNzd29yZEZvckVkaXQoKTtcbiAgICBzZXRQaW5Nb2RhbE9wZW4odHJ1ZSk7XG4gICAgc2V0RGF0YSh2YWx1ZXMpO1xuICB9O1xuICBjb25zdCBvcGVuUXVpY2tBZGRNb2RhbCA9ICh2YWx1ZXM6IEh5bW5WYWx1ZXMpID0+IHtcbiAgICBzZXRRdWlja0FkZE1vZGFsT3Blbih0cnVlKTtcbiAgICBzZXREYXRhKHZhbHVlcyk7XG4gIH07XG5cbiAgLy8gY29uc3QgZWRpdEh5bW4gPSAodmFsdWVzOiBFZGl0VmFsdWVzKSA9PiB7XG4gIC8vICAgY29uc3Qgc2VsZWN0ZWRoeW1uID0gaHltbnNMaXN0LmZpbHRlcihcbiAgLy8gICAgIChoeW1uKSA9PiBoeW1uLm51bWJlciA9PT0gZGF0YS5udW1iZXJcbiAgLy8gICApO1xuXG4gIC8vICAgc2VsZWN0ZWRoeW1uWzBdLm5hbWUgPSB2YWx1ZXMubmFtZTtcbiAgLy8gICBzZWxlY3RlZGh5bW5bMF0ubnVtYmVyID0gdmFsdWVzLm51bWJlcjtcbiAgLy8gfTtcblxuICBjb25zdCBlZGl0SHltbiA9ICh2YWx1ZXM6IEVkaXRWYWx1ZXMpID0+IHtcbiAgICBtdXRhdGUoXCIvYXBpL2h5bW5cIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgZWRpdGVkSHltbiA9IGF3YWl0IGZldGNoZXIoXCIvYXBpL2h5bW5cIiwge1xuICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgbnVtYmVyOiBkYXRhLm51bWJlcixcbiAgICAgICAgICBuZXdOdW1iZXI6IHZhbHVlcy5udW1iZXIsXG4gICAgICAgICAgbmV3TmFtZTogdmFsdWVzLm5hbWUsXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG5cbiAgICAgIGxldCBuZXdMb2dzID0gbG9nRGF0YS5maWx0ZXIoKGxvZykgPT4gbG9nLmlkID09PSBkYXRhLm51bWJlcik7XG5cbiAgICAgIGlmICh2YWx1ZXMubnVtYmVyID09PSBkYXRhLm51bWJlcikge1xuICAgICAgICBlZGl0ZWRIeW1uLm51bWJlciA9IGRhdGEubnVtYmVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3TG9ncy5mb3JFYWNoKChuZXdMb2cpID0+IHtcbiAgICAgICAgICBuZXdMb2cuaWQgPSB2YWx1ZXMubnVtYmVyO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgZWRpdGVkSHltbi5uYW1lID0gdmFsdWVzLm5hbWU7XG4gICAgICBzZXRIeW1ucyhbXG4gICAgICAgIC4uLmh5bW5EYXRhLmZpbHRlcigoaHltbikgPT4gaHltbi5udW1iZXIgIT09IGRhdGEubnVtYmVyKSxcbiAgICAgICAgZWRpdGVkSHltbixcbiAgICAgIF0pO1xuICAgICAgLy8gbmV3TG9ncy5mb3JFYWNoKChuZXdMb2cpID0+IHtcbiAgICAgIC8vICAgc2V0TG9ncyhbLi4ubG9nRGF0YS5maWx0ZXIoKGxvZykgPT4gbG9nLmlkICE9PSBkYXRhLm51bWJlciksIG5ld0xvZ10pO1xuICAgICAgLy8gfSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhsb2dEYXRhLmZpbHRlcigobG9nKSA9PiBsb2cuaWQgPT09IHZhbHVlcy5udW1iZXIpKTtcbiAgICAgIC8vIHNldExvZ3MoWy4uLmxvZ0RhdGEuZmlsdGVyKChsb2cpID0+IGxvZy5pZCAhPT0gZGF0YS5udW1iZXIpLCBuZXdMb2dzWzBdXSk7XG4gICAgICBzZXRMb2dzKFsuLi5sb2dEYXRhLmZpbHRlcigobG9nKSA9PiBsb2cuaWQgIT09IGRhdGEubnVtYmVyKV0pO1xuICAgIH0pO1xuICAgIGNsb3NlTW9kYWwoKTtcbiAgfTtcblxuICBjb25zdCBxdWlja0FkZEh5bW4gPSAodmFsdWVzOiBRdWlja0FkZFZhbHVlcykgPT4ge1xuICAgIG11dGF0ZShcIi9hcGkvbG9nXCIsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGFkZGVkTG9nID0gYXdhaXQgZmV0Y2hlcihcIi9hcGkvbG9nXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaWQ6IGRhdGEubnVtYmVyLFxuICAgICAgICAgIGJ5d2hvOiB2YWx1ZXMubmFtZSxcbiAgICAgICAgICBsb2dnZWQ6IHZhbHVlcy5kYXRlLFxuICAgICAgICB9KSxcbiAgICAgIH0pO1xuXG4gICAgICBzZXRMb2dzKFsuLi5sb2dEYXRhLCBhZGRlZExvZ10pO1xuICAgIH0pO1xuICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblxuICAgIC8vIGNvbnN0IHNlbGVjdGVkaHltbiA9IGh5bW5zTGlzdC5maWx0ZXIoXG4gICAgLy8gICAoaHltbikgPT4gaHltbi5udW1iZXIgPT09IGRhdGEubnVtYmVyXG4gICAgLy8gKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHNlbGVjdGVkaHltbik7XG5cbiAgICAvLyBzZWxlY3RlZGh5bW5bMF0ubG9ncy5wdXNoKHsgbG9nZ2VkOiB2YWx1ZXMuZGF0ZSwgYnl3aG86IHZhbHVlcy5uYW1lIH0pO1xuICB9O1xuXG4gIC8vIGNvbnN0IGZha2VIeW1ucyA9IGh5bW5zTGlzdC5maWx0ZXIoXG4gIC8vICAgKGh5bW4pID0+XG4gIC8vICAgICBoeW1uLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXIudG9Mb3dlckNhc2UoKSkgfHxcbiAgLy8gICAgIGh5bW4ubnVtYmVyLnRvU3RyaW5nKCkuaW5jbHVkZXMoZmlsdGVyKVxuICAvLyApO1xuXG4gIC8vIGNvbnNvbGUubG9nKGFsbEh5bW5zKTtcblxuICBjb25zdCBjaGVja1Bhc3N3b3JkRm9yRWRpdCA9ICh2YWx1ZXM6IFBhc3N3b3JkVmFsdWVzKSA9PiB7XG4gICAgc2V0SXNQYXNzd29yZENvcnJlY3QodmFsdWVzLnBhc3N3b3JkID09PSBcInJhaGFiXCIgPyB0cnVlIDogZmFsc2UpO1xuICAgIHNldFBpbk1vZGFsT3BlbihmYWxzZSk7XG4gICAgc2V0RWRpdE1vZGFsT3Blbih0cnVlKTtcbiAgfTtcbiAgY29uc3QgY2hlY2tQYXNzd29yZEZvclF1aWNrQWRkID0gKHZhbHVlczogUGFzc3dvcmRWYWx1ZXMpID0+IHtcbiAgICBzZXRJc1Bhc3N3b3JkQ29ycmVjdCh2YWx1ZXMucGFzc3dvcmQgPT09IFwicmFoYWJcIiA/IHRydWUgOiBmYWxzZSk7XG4gICAgc2V0UGluTW9kYWxPcGVuKGZhbHNlKTtcbiAgICBzZXRRdWlja0FkZE1vZGFsT3Blbih0cnVlKTtcbiAgfTtcblxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgIHNldEVkaXRNb2RhbE9wZW4oZmFsc2UpO1xuICAgIHNldElzUGFzc3dvcmRDb3JyZWN0KGZhbHNlKTtcbiAgfTtcblxuICBpZiAoaHltbkRhdGFbMF0ubnVtYmVyID09PSA5OTkgfHwgbG9nRGF0YVswXS5pZCA9PT0gOTk5KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxFZGl0TW9kYWxcbiAgICAgICAgICBvcGVuPXtlZGl0TW9kYWxPcGVufVxuICAgICAgICAgIGhhbmRsZUNsb3NlPXsoKSA9PiBzZXRFZGl0TW9kYWxPcGVuKGZhbHNlKX1cbiAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgIGVkaXRNdXRhdGlvbj17ZWRpdEh5bW59XG4gICAgICAgIC8+XG4gICAgICAgIDxRdWlja0FkZE1vZGFsXG4gICAgICAgICAgb3Blbj17cXVpY2tBZGRNb2RhbE9wZW59XG4gICAgICAgICAgaGFuZGxlQ2xvc2U9eygpID0+IHNldFF1aWNrQWRkTW9kYWxPcGVuKGZhbHNlKX1cbiAgICAgICAgICBxdWlja0FkZE11dGF0aW9uPXtxdWlja0FkZEh5bW59XG4gICAgICAgIC8+XG4gICAgICAgIHsvKiA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAge2FsbEh5bW5zLm1hcCgoaHltbikgPT4gKFxuICAgICAgICAgICAgPEh5bW5cbiAgICAgICAgICAgICAgbmFtZT17aHltbi5uYW1lfVxuICAgICAgICAgICAgICBudW1iZXI9e2h5bW4ubnVtYmVyfVxuICAgICAgICAgICAgICBsb2dzPXthbGxMb2dzLmZpbHRlcigobG9nKSA9PiBsb2cuaWQgPT09IGh5bW4ubnVtYmVyKX1cbiAgICAgICAgICAgICAgaGFuZGxlRWRpdD17KCkgPT4gb3BlbkVkaXRNb2RhbChoeW1uKX1cbiAgICAgICAgICAgICAgaGFuZGxlUXVpY2tBZGQ9eygpID0+IG9wZW5RdWlja0FkZE1vZGFsKGh5bW4pfVxuICAgICAgICAgICAgICBrZXk9e2h5bW4ubnVtYmVyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Cb3g+ICovfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGZpbHRlcmVkSHltbnMgPSBoeW1uRGF0YS5maWx0ZXIoXG4gICAgKGh5bW4pID0+XG4gICAgICBoeW1uLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXIudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgIGh5bW4ubnVtYmVyLnRvU3RyaW5nKCkuaW5jbHVkZXMoZmlsdGVyKVxuICApO1xuXG4gIGNvbnN0IGZpbHRlcmVkTG9ncyA9IChoeW1uSWQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGZsb2dzID0gbG9nRGF0YS5maWx0ZXIoKGxvZykgPT4gbG9nLmlkID09PSBoeW1uSWQpO1xuXG4gICAgcmV0dXJuIGZsb2dzO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxFZGl0TW9kYWxcbiAgICAgICAgb3Blbj17ZWRpdE1vZGFsT3Blbn1cbiAgICAgICAgaGFuZGxlQ2xvc2U9e2Nsb3NlTW9kYWx9XG4gICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgIGVkaXRNdXRhdGlvbj17ZWRpdEh5bW59XG4gICAgICAvPlxuICAgICAgPFBpbk1vZGFsXG4gICAgICAgIG9wZW49e3Bpbk1vZGFsT3Blbn1cbiAgICAgICAgaGFuZGxlQ2xvc2U9eygpID0+IHNldFBpbk1vZGFsT3BlbihmYWxzZSl9XG4gICAgICAgIGlzQ29ycmVjdD17KHZhbHVlcykgPT5cbiAgICAgICAgICBzZXRJc1Bhc3N3b3JkQ29ycmVjdCh2YWx1ZXMucGFzc3dvcmQgPT09IFwicmFoYWJcIiA/IHRydWUgOiBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICAgIDxRdWlja0FkZE1vZGFsXG4gICAgICAgIG9wZW49e3F1aWNrQWRkTW9kYWxPcGVufVxuICAgICAgICBoYW5kbGVDbG9zZT17KCkgPT4gc2V0UXVpY2tBZGRNb2RhbE9wZW4oZmFsc2UpfVxuICAgICAgICBxdWlja0FkZE11dGF0aW9uPXtxdWlja0FkZEh5bW59XG4gICAgICAvPlxuICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICB7ZmlsdGVyZWRIeW1ucy5zb3J0KCkubWFwKChoeW1uKSA9PiAoXG4gICAgICAgICAgPEh5bW5cbiAgICAgICAgICAgIG5hbWU9e2h5bW4ubmFtZX1cbiAgICAgICAgICAgIG51bWJlcj17aHltbi5udW1iZXJ9XG4gICAgICAgICAgICBsb2dzPXtcbiAgICAgICAgICAgICAgLyphbGxMb2dzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAobG9nKSA9PiBsb2cuaWQgPT09IGh5bW4ubnVtYmVyXG4gICAgICAgICAgICAgICkqLyBmaWx0ZXJlZExvZ3MoaHltbi5udW1iZXIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoYW5kbGVFZGl0PXsoKSA9PiBvcGVuRWRpdE1vZGFsKGh5bW4pfVxuICAgICAgICAgICAgaGFuZGxlUXVpY2tBZGQ9eygpID0+IG9wZW5RdWlja0FkZE1vZGFsKGh5bW4pfVxuICAgICAgICAgICAga2V5PXtoeW1uLm51bWJlcn1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvQm94PlxuICAgIDwvPlxuICApO1xuXG4gIC8vIHJldHVybiAoXG4gIC8vICAgPD5cbiAgLy8gICAgIDxFZGl0TW9kYWxcbiAgLy8gICAgICAgb3Blbj17ZWRpdE1vZGFsT3Blbn1cbiAgLy8gICAgICAgaGFuZGxlQ2xvc2U9eygpID0+IHNldEVkaXRNb2RhbE9wZW4oZmFsc2UpfVxuICAvLyAgICAgICBkYXRhPXtkYXRhfVxuICAvLyAgICAgICBlZGl0TXV0YXRpb249e2VkaXRIeW1ufVxuICAvLyAgICAgLz5cbiAgLy8gICAgIDxRdWlja0FkZE1vZGFsXG4gIC8vICAgICAgIG9wZW49e3F1aWNrQWRkTW9kYWxPcGVufVxuICAvLyAgICAgICBoYW5kbGVDbG9zZT17KCkgPT4gc2V0UXVpY2tBZGRNb2RhbE9wZW4oZmFsc2UpfVxuICAvLyAgICAgICBxdWlja0FkZE11dGF0aW9uPXtxdWlja0FkZEh5bW59XG4gIC8vICAgICAvPlxuICAvLyAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAvLyAgICAgICB7ZmFrZUh5bW5zLnNvcnQoKS5tYXAoKGh5bW4pID0+IChcbiAgLy8gICAgICAgICA8SHltblxuICAvLyAgICAgICAgICAgbmFtZT17aHltbi5uYW1lfVxuICAvLyAgICAgICAgICAgbnVtYmVyPXtoeW1uLm51bWJlcn1cbiAgLy8gICAgICAgICAgIGxvZ3M9e2h5bW4ubG9nc31cbiAgLy8gICAgICAgICAgIGhhbmRsZUVkaXQ9eygpID0+IG9wZW5FZGl0TW9kYWwoaHltbil9XG4gIC8vICAgICAgICAgICBoYW5kbGVRdWlja0FkZD17KCkgPT4gb3BlblF1aWNrQWRkTW9kYWwoaHltbil9XG4gIC8vICAgICAgICAgICBrZXk9e2h5bW4ubnVtYmVyfVxuICAvLyAgICAgICAgIC8+XG4gIC8vICAgICAgICkpfVxuICAvLyAgICAgPC9Cb3g+XG4gIC8vICAgPC8+XG4gIC8vICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbGxIeW1ucztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQm94IiwiSHltbiIsIkVkaXRNb2RhbCIsIlBpbk1vZGFsIiwiUXVpY2tBZGRNb2RhbCIsIm11dGF0ZSIsImZldGNoZXIiLCJBbGxIeW1ucyIsImZpbHRlciIsImh5bW5EYXRhIiwibG9nRGF0YSIsInNldEh5bW5zIiwic2V0TG9ncyIsImRhdGEiLCJzZXREYXRhIiwibmFtZSIsIm51bWJlciIsImVkaXRNb2RhbE9wZW4iLCJzZXRFZGl0TW9kYWxPcGVuIiwicGluTW9kYWxPcGVuIiwic2V0UGluTW9kYWxPcGVuIiwicXVpY2tBZGRNb2RhbE9wZW4iLCJzZXRRdWlja0FkZE1vZGFsT3BlbiIsImlzUGFzc3dvcmRDb3JyZWN0Iiwic2V0SXNQYXNzd29yZENvcnJlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJoeW1uX2RhdGEiLCJoeW1ucyIsImxvZ19kYXRhIiwibG9ncyIsIm9wZW5FZGl0TW9kYWwiLCJ2YWx1ZXMiLCJjaGVja1Bhc3N3b3JkRm9yRWRpdCIsIm9wZW5RdWlja0FkZE1vZGFsIiwiZWRpdEh5bW4iLCJlZGl0ZWRIeW1uIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibmV3TnVtYmVyIiwibmV3TmFtZSIsIm5ld0xvZ3MiLCJsb2ciLCJpZCIsImZvckVhY2giLCJuZXdMb2ciLCJoeW1uIiwiY2xvc2VNb2RhbCIsInF1aWNrQWRkSHltbiIsImFkZGVkTG9nIiwiYnl3aG8iLCJsb2dnZWQiLCJkYXRlIiwicGFzc3dvcmQiLCJjaGVja1Bhc3N3b3JkRm9yUXVpY2tBZGQiLCJmaWx0ZXJlZEh5bW5zIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInRvU3RyaW5nIiwiZmlsdGVyZWRMb2dzIiwiaHltbklkIiwiZmxvZ3MiLCJzb3J0IiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Hymns/AllHymns/index.tsx\n");

/***/ })

});