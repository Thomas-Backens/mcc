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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _Hymn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hymn */ \"./src/components/Hymns/AllHymns/Hymn/index.tsx\");\n/* harmony import */ var _Hymn_Edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Hymn/Edit */ \"./src/components/Hymns/AllHymns/Hymn/Edit/index.tsx\");\n/* harmony import */ var _Hymn_Pin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Hymn/Pin */ \"./src/components/Hymns/AllHymns/Hymn/Pin/index.tsx\");\n/* harmony import */ var _Hymn_QuickAdd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Hymn/QuickAdd */ \"./src/components/Hymns/AllHymns/Hymn/QuickAdd/index.tsx\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var _Utils_fetcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Utils/fetcher */ \"./src/Utils/fetcher.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/thomasbackens/Desktop/Work/Personal/mcc/src/components/Hymns/AllHymns/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n // import { hymnsList, logsList } from \"./hymnsList\";\n\n\n\n\n // useSWR\n\n // import AddHymn from \"../Search/AddHymn\";\n\nconst AllHymns = ({\n  filter,\n  hymnData,\n  logData,\n  setHymns,\n  setLogs\n}) => {\n  _s();\n\n  const {\n    0: data,\n    1: setData\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    name: \"\",\n    number: 0 // logs: [{ logged: \"\", bywho: \"\" }],\n\n  });\n  const {\n    0: editModalOpen,\n    1: setEditModalOpen\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const {\n    0: pinModalOpen,\n    1: setPinModalOpen\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const {\n    0: quickAddModalOpen,\n    1: setQuickAddModalOpen\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const {\n    0: isPasswordCorrect,\n    1: setIsPasswordCorrect\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // const { data: hymns } = useSWR(\"/api/hymn\");\n  // const { data: logs } = useSWR(\"/api/log\");\n  // const [allHymns, setAllHymns] = useState<HymnValues[]>(hymnsList);\n  // const [allLogs, setAllLogs] = useState<LogValues[]>(logsList);\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    fetch(\"/api/hymn\").then(response => response.json()).then(hymn_data => setHymns(hymn_data.hymns));\n    fetch(\"/api/log\").then(response => response.json()).then(log_data => setLogs(log_data.logs));\n  }, [setHymns, setLogs]); // useEffect(() => {\n  //   addHymn(createMutation);\n  // }, [createMutation]);\n  // useEffect(() => {\n  //   setAllHymns([\n  //     ...allHymns.filter((hymn) => hymn.number !== addedHymn.number),\n  //     addedHymn,\n  //   ]);\n  //   const newLog = {\n  //     id: addedHymn.number,\n  //     logged: addedHymn.logged,\n  //     bywho: addedHymn.bywho,\n  //   };\n  //   setAllLogs([...allLogs.filter((log) => log.id !== newLog.id), newLog]);\n  // }, [addedHymn]);\n  // let dataHymns: HymnValues[] = [];\n  // let dataLogs: any[] = [];\n  // if (hymns) {\n  //   dataHymns = hymns.hymns;\n  // }\n  // if (logs) {\n  //   dataLogs = logs.logs;\n  // }\n  // useEffect(() => {\n  //   fetch(\"/api/hymn\")\n  //     .then((response) => response.json())\n  //     .then((data) => console.log(data));\n  // }, []);\n\n  const openEditModal = values => {\n    setEditModalOpen(true);\n    setPinModalOpen(true);\n    setData(values);\n  };\n\n  const openQuickAddModal = values => {\n    setQuickAddModalOpen(true);\n    setPinModalOpen(true);\n    setData(values);\n  }; // const editHymn = (values: EditValues) => {\n  //   const selectedhymn = hymnsList.filter(\n  //     (hymn) => hymn.number === data.number\n  //   );\n  //   selectedhymn[0].name = values.name;\n  //   selectedhymn[0].number = values.number;\n  // };\n\n\n  const editHymn = values => {\n    (0,swr__WEBPACK_IMPORTED_MODULE_6__.mutate)(\"/api/hymn\", async () => {\n      const editedHymn = await (0,_Utils_fetcher__WEBPACK_IMPORTED_MODULE_7__.default)(\"/api/hymn\", {\n        method: \"PATCH\",\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n          number: data.number,\n          newNumber: values.number,\n          newName: values.name\n        })\n      });\n      let newLogs = logData.filter(log => log.id === data.number);\n\n      if (values.number === data.number) {\n        editedHymn.number = data.number;\n      } else {\n        newLogs.forEach(newLog => {\n          newLog.id = values.number;\n        });\n      }\n\n      editedHymn.name = values.name;\n      setHymns([...hymnData.filter(hymn => hymn.number !== data.number), editedHymn]); // newLogs.forEach((newLog) => {\n      //   setLogs([...logData.filter((log) => log.id !== data.number), newLog]);\n      // });\n      // console.log(logData.filter((log) => log.id === values.number));\n      // setLogs([...logData.filter((log) => log.id !== data.number), newLogs[0]]);\n\n      setLogs([...logData.filter(log => log.id !== data.number)]);\n    });\n    setEditModalOpen(false);\n    setIsPasswordCorrect(false);\n  };\n\n  const quickAddHymn = values => {\n    (0,swr__WEBPACK_IMPORTED_MODULE_6__.mutate)(\"/api/log\", async () => {\n      const addedLog = await (0,_Utils_fetcher__WEBPACK_IMPORTED_MODULE_7__.default)(\"/api/log\", {\n        method: \"POST\",\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n          id: data.number,\n          bywho: values.name,\n          logged: values.date\n        })\n      });\n      setLogs([...logData, addedLog]);\n    });\n    setQuickAddModalOpen(false);\n    setIsPasswordCorrect(false); // window.location.reload();\n    // const selectedhymn = hymnsList.filter(\n    //   (hymn) => hymn.number === data.number\n    // );\n    // console.log(selectedhymn);\n    // selectedhymn[0].logs.push({ logged: values.date, bywho: values.name });\n  }; // const fakeHymns = hymnsList.filter(\n  //   (hymn) =>\n  //     hymn.name.toLowerCase().includes(filter.toLowerCase()) ||\n  //     hymn.number.toString().includes(filter)\n  // );\n  // console.log(allHymns);\n\n\n  if (hymnData[0].number === 999 || logData[0].id === 999) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Hymn_Edit__WEBPACK_IMPORTED_MODULE_3__.default, {\n        open: editModalOpen,\n        handleClose: () => setEditModalOpen(false),\n        data: data,\n        editMutation: editHymn\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 221,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Hymn_QuickAdd__WEBPACK_IMPORTED_MODULE_5__.default, {\n        open: quickAddModalOpen,\n        handleClose: () => setQuickAddModalOpen(false),\n        quickAddMutation: quickAddHymn\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 227,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true);\n  }\n\n  const filteredHymns = hymnData.filter(hymn => hymn.name.toLowerCase().includes(filter.toLowerCase()) || hymn.number.toString().includes(filter));\n\n  const filteredLogs = hymnId => {\n    const flogs = logData.filter(log => log.id === hymnId);\n    return flogs;\n  };\n\n  const checkPassword = values => {\n    setIsPasswordCorrect(values.password === \"rahab\" ? true : false);\n    setPinModalOpen(false);\n  };\n\n  const closeEdit = () => {\n    setPinModalOpen(false);\n    setEditModalOpen(false);\n    setIsPasswordCorrect(false);\n  };\n\n  const closeQuickAdd = () => {\n    setPinModalOpen(false);\n    setQuickAddModalOpen(false);\n    setIsPasswordCorrect(false);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Hymn_Edit__WEBPACK_IMPORTED_MODULE_3__.default, {\n      open: editModalOpen && isPasswordCorrect,\n      handleClose: closeEdit,\n      data: data,\n      editMutation: editHymn\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 278,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Hymn_Pin__WEBPACK_IMPORTED_MODULE_4__.default, {\n      open: pinModalOpen,\n      handleClose: () => setPinModalOpen(false),\n      isCorrect: values => checkPassword(values)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 284,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Hymn_QuickAdd__WEBPACK_IMPORTED_MODULE_5__.default, {\n      open: quickAddModalOpen && isPasswordCorrect,\n      handleClose: closeQuickAdd,\n      quickAddMutation: quickAddHymn\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 289,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Box, {\n      display: \"flex\",\n      justifyContent: \"center\",\n      flexDirection: \"column\",\n      children: filteredHymns.sort().map(hymn => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Hymn__WEBPACK_IMPORTED_MODULE_2__.default, {\n        name: hymn.name,\n        number: hymn.number,\n        logs:\n        /*allLogs.filter(\n          (log) => log.id === hymn.number\n        )*/\n        filteredLogs(hymn.number),\n        handleEdit: () => openEditModal(hymn),\n        handleQuickAdd: () => openQuickAddModal(hymn)\n      }, hymn.number, false, {\n        fileName: _jsxFileName,\n        lineNumber: 296,\n        columnNumber: 11\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 294,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true); // return (\n  //   <>\n  //     <EditModal\n  //       open={editModalOpen}\n  //       handleClose={() => setEditModalOpen(false)}\n  //       data={data}\n  //       editMutation={editHymn}\n  //     />\n  //     <QuickAddModal\n  //       open={quickAddModalOpen}\n  //       handleClose={() => setQuickAddModalOpen(false)}\n  //       quickAddMutation={quickAddHymn}\n  //     />\n  //     <Box display=\"flex\" justifyContent=\"center\" flexDirection=\"column\">\n  //       {fakeHymns.sort().map((hymn) => (\n  //         <Hymn\n  //           name={hymn.name}\n  //           number={hymn.number}\n  //           logs={hymn.logs}\n  //           handleEdit={() => openEditModal(hymn)}\n  //           handleQuickAdd={() => openQuickAddModal(hymn)}\n  //           key={hymn.number}\n  //         />\n  //       ))}\n  //     </Box>\n  //   </>\n  // );\n};\n\n_s(AllHymns, \"qTRllnEzCjTVeJ9+Cs6wqtVJwFg=\");\n\n_c = AllHymns;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AllHymns);\n\nvar _c;\n\n$RefreshReg$(_c, \"AllHymns\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IeW1ucy9BbGxIeW1ucy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBT0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7Q0FDOEI7O0NBRTlCOztBQTBDQSxNQUFNVSxRQUFpQyxHQUFHLENBQUM7QUFDekNDLEVBQUFBLE1BRHlDO0FBRXpDQyxFQUFBQSxRQUZ5QztBQUd6Q0MsRUFBQUEsT0FIeUM7QUFJekNDLEVBQUFBLFFBSnlDO0FBS3pDQyxFQUFBQTtBQUx5QyxDQUFELEtBTVA7QUFBQTs7QUFDakMsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCaEIsK0NBQVEsQ0FBYTtBQUMzQ2lCLElBQUFBLElBQUksRUFBRSxFQURxQztBQUUzQ0MsSUFBQUEsTUFBTSxFQUFFLENBRm1DLENBRzNDOztBQUgyQyxHQUFiLENBQWhDO0FBS0EsUUFBTTtBQUFBLE9BQUNDLGFBQUQ7QUFBQSxPQUFnQkM7QUFBaEIsTUFBb0NwQiwrQ0FBUSxDQUFVLEtBQVYsQ0FBbEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ3FCLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDdEIsK0NBQVEsQ0FBVSxLQUFWLENBQWhEO0FBQ0EsUUFBTTtBQUFBLE9BQUN1QixpQkFBRDtBQUFBLE9BQW9CQztBQUFwQixNQUE0Q3hCLCtDQUFRLENBQVUsS0FBVixDQUExRDtBQUVBLFFBQU07QUFBQSxPQUFDeUIsaUJBQUQ7QUFBQSxPQUFvQkM7QUFBcEIsTUFBNEMxQiwrQ0FBUSxDQUFVLEtBQVYsQ0FBMUQsQ0FWaUMsQ0FZakM7QUFDQTtBQUVBO0FBQ0E7O0FBRUFDLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkMEIsSUFBQUEsS0FBSyxDQUFDLFdBQUQsQ0FBTCxDQUNHQyxJQURILENBQ1NDLFFBQUQsSUFBY0EsUUFBUSxDQUFDQyxJQUFULEVBRHRCLEVBRUdGLElBRkgsQ0FFU0csU0FBRCxJQUFlbEIsUUFBUSxD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QUNWLElBQUksQ0FBQ2xDLE1BQU4sQ0FOcEI7QUFRRSxrQkFBVSxFQUFFLE1BQU1pQixhQUFhLENBQUNpQixJQUFELENBUmpDO0FBU0Usc0JBQWMsRUFBRSxNQUFNZixpQkFBaUIsQ0FBQ2UsSUFBRDtBQVR6QyxTQVVPQSxJQUFJLENBQUNsQyxNQVZaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpCRjtBQUFBLGtCQURGLENBcE5pQyxDQXlQakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsQ0ExUkQ7O0dBQU1UOztLQUFBQTtBQTRSTiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IeW1ucy9BbGxIeW1ucy9pbmRleC50c3g/MjU3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcbiAgdXNlU3RhdGUsXG4gIFJlYWN0RWxlbWVudCxcbiAgdXNlRWZmZWN0LFxuICBTZXRTdGF0ZUFjdGlvbixcbiAgRGlzcGF0Y2gsXG59IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgSHltbiBmcm9tIFwiLi9IeW1uXCI7XG4vLyBpbXBvcnQgeyBoeW1uc0xpc3QsIGxvZ3NMaXN0IH0gZnJvbSBcIi4vaHltbnNMaXN0XCI7XG5pbXBvcnQgRWRpdE1vZGFsIGZyb20gXCIuL0h5bW4vRWRpdFwiO1xuaW1wb3J0IFBpbk1vZGFsIGZyb20gXCIuL0h5bW4vUGluXCI7XG5pbXBvcnQgUXVpY2tBZGRNb2RhbCBmcm9tIFwiLi9IeW1uL1F1aWNrQWRkXCI7XG5pbXBvcnQgeyBtdXRhdGUgfSBmcm9tIFwic3dyXCI7IC8vIHVzZVNXUlxuaW1wb3J0IGZldGNoZXIgZnJvbSBcIi4uLy4uLy4uL1V0aWxzL2ZldGNoZXJcIjtcbi8vIGltcG9ydCBBZGRIeW1uIGZyb20gXCIuLi9TZWFyY2gvQWRkSHltblwiO1xuXG5pbnRlcmZhY2UgRWRpdFZhbHVlcyB7XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBQYXNzd29yZFZhbHVlcyB7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBRdWlja0FkZFZhbHVlcyB7XG4gIG5hbWU6IHN0cmluZztcbiAgZGF0ZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgSHltblZhbHVlcyB7XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBMb2dWYWx1ZXMge1xuICBpZDogbnVtYmVyO1xuICBsb2dnZWQ6IHN0cmluZztcbiAgYnl3aG86IHN0cmluZztcbn1cblxuLy8gaW50ZXJmYWNlIFZhbHVlcyB7XG4vLyAgIG5hbWU6IHN0cmluZztcbi8vICAgaHltbl9uYW1lOiBzdHJpbmc7XG4vLyAgIGh5bW5fbnVtYmVyOiBudW1iZXI7XG4vLyAgIGRhdGU6IHN0cmluZztcbi8vIH1cblxuaW50ZXJmYWNlIEFsbEh5bW5zUHJvcHMge1xuICBmaWx0ZXI6IHN0cmluZztcbiAgaHltbkRhdGE6IEh5bW5WYWx1ZXNbXTtcbiAgbG9nRGF0YTogTG9nVmFsdWVzW107XG4gIHNldEh5bW5zOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxIeW1uVmFsdWVzW10+PjtcbiAgc2V0TG9nczogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248TG9nVmFsdWVzW10+Pjtcbn1cblxuY29uc3QgQWxsSHltbnM6IFJlYWN0LkZDPEFsbEh5bW5zUHJvcHM+ID0gKHtcbiAgZmlsdGVyLFxuICBoeW1uRGF0YSxcbiAgbG9nRGF0YSxcbiAgc2V0SHltbnMsXG4gIHNldExvZ3MsXG59OiBBbGxIeW1uc1Byb3BzKTogUmVhY3RFbGVtZW50ID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8SHltblZhbHVlcz4oe1xuICAgIG5hbWU6IFwiXCIsXG4gICAgbnVtYmVyOiAwLFxuICAgIC8vIGxvZ3M6IFt7IGxvZ2dlZDogXCJcIiwgYnl3aG86IFwiXCIgfV0sXG4gIH0pO1xuICBjb25zdCBbZWRpdE1vZGFsT3Blbiwgc2V0RWRpdE1vZGFsT3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtwaW5Nb2RhbE9wZW4sIHNldFBpbk1vZGFsT3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtxdWlja0FkZE1vZGFsT3Blbiwgc2V0UXVpY2tBZGRNb2RhbE9wZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGNvbnN0IFtpc1Bhc3N3b3JkQ29ycmVjdCwgc2V0SXNQYXNzd29yZENvcnJlY3RdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIC8vIGNvbnN0IHsgZGF0YTogaHltbnMgfSA9IHVzZVNXUihcIi9hcGkvaHltblwiKTtcbiAgLy8gY29uc3QgeyBkYXRhOiBsb2dzIH0gPSB1c2VTV1IoXCIvYXBpL2xvZ1wiKTtcblxuICAvLyBjb25zdCBbYWxsSHltbnMsIHNldEFsbEh5bW5zXSA9IHVzZVN0YXRlPEh5bW5WYWx1ZXNbXT4oaHltbnNMaXN0KTtcbiAgLy8gY29uc3QgW2FsbExvZ3MsIHNldEFsbExvZ3NdID0gdXNlU3RhdGU8TG9nVmFsdWVzW10+KGxvZ3NMaXN0KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKFwiL2FwaS9oeW1uXCIpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChoeW1uX2RhdGEpID0+IHNldEh5bW5zKGh5bW5fZGF0YS5oeW1ucykpO1xuICAgIGZldGNoKFwiL2FwaS9sb2dcIilcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGxvZ19kYXRhKSA9PiBzZXRMb2dzKGxvZ19kYXRhLmxvZ3MpKTtcbiAgfSwgW3NldEh5bW5zLCBzZXRMb2dzXSk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBhZGRIeW1uKGNyZWF0ZU11dGF0aW9uKTtcbiAgLy8gfSwgW2NyZWF0ZU11dGF0aW9uXSk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBzZXRBbGxIeW1ucyhbXG4gIC8vICAgICAuLi5hbGxIeW1ucy5maWx0ZXIoKGh5bW4pID0+IGh5bW4ubnVtYmVyICE9PSBhZGRlZEh5bW4ubnVtYmVyKSxcbiAgLy8gICAgIGFkZGVkSHltbixcbiAgLy8gICBdKTtcbiAgLy8gICBjb25zdCBuZXdMb2cgPSB7XG4gIC8vICAgICBpZDogYWRkZWRIeW1uLm51bWJlcixcbiAgLy8gICAgIGxvZ2dlZDogYWRkZWRIeW1uLmxvZ2dlZCxcbiAgLy8gICAgIGJ5d2hvOiBhZGRlZEh5bW4uYnl3aG8sXG4gIC8vICAgfTtcbiAgLy8gICBzZXRBbGxMb2dzKFsuLi5hbGxMb2dzLmZpbHRlcigobG9nKSA9PiBsb2cuaWQgIT09IG5ld0xvZy5pZCksIG5ld0xvZ10pO1xuICAvLyB9LCBbYWRkZWRIeW1uXSk7XG5cbiAgLy8gbGV0IGRhdGFIeW1uczogSHltblZhbHVlc1tdID0gW107XG4gIC8vIGxldCBkYXRhTG9nczogYW55W10gPSBbXTtcblxuICAvLyBpZiAoaHltbnMpIHtcbiAgLy8gICBkYXRhSHltbnMgPSBoeW1ucy5oeW1ucztcbiAgLy8gfVxuXG4gIC8vIGlmIChsb2dzKSB7XG4gIC8vICAgZGF0YUxvZ3MgPSBsb2dzLmxvZ3M7XG4gIC8vIH1cblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGZldGNoKFwiL2FwaS9oeW1uXCIpXG4gIC8vICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLy8gICAgIC50aGVuKChkYXRhKSA9PiBjb25zb2xlLmxvZyhkYXRhKSk7XG4gIC8vIH0sIFtdKTtcblxuICBjb25zdCBvcGVuRWRpdE1vZGFsID0gKHZhbHVlczogSHltblZhbHVlcykgPT4ge1xuICAgIHNldEVkaXRNb2RhbE9wZW4odHJ1ZSk7XG4gICAgc2V0UGluTW9kYWxPcGVuKHRydWUpO1xuICAgIHNldERhdGEodmFsdWVzKTtcbiAgfTtcbiAgY29uc3Qgb3BlblF1aWNrQWRkTW9kYWwgPSAodmFsdWVzOiBIeW1uVmFsdWVzKSA9PiB7XG4gICAgc2V0UXVpY2tBZGRNb2RhbE9wZW4odHJ1ZSk7XG4gICAgc2V0UGluTW9kYWxPcGVuKHRydWUpO1xuICAgIHNldERhdGEodmFsdWVzKTtcbiAgfTtcblxuICAvLyBjb25zdCBlZGl0SHltbiA9ICh2YWx1ZXM6IEVkaXRWYWx1ZXMpID0+IHtcbiAgLy8gICBjb25zdCBzZWxlY3RlZGh5bW4gPSBoeW1uc0xpc3QuZmlsdGVyKFxuICAvLyAgICAgKGh5bW4pID0+IGh5bW4ubnVtYmVyID09PSBkYXRhLm51bWJlclxuICAvLyAgICk7XG5cbiAgLy8gICBzZWxlY3RlZGh5bW5bMF0ubmFtZSA9IHZhbHVlcy5uYW1lO1xuICAvLyAgIHNlbGVjdGVkaHltblswXS5udW1iZXIgPSB2YWx1ZXMubnVtYmVyO1xuICAvLyB9O1xuXG4gIGNvbnN0IGVkaXRIeW1uID0gKHZhbHVlczogRWRpdFZhbHVlcykgPT4ge1xuICAgIG11dGF0ZShcIi9hcGkvaHltblwiLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBlZGl0ZWRIeW1uID0gYXdhaXQgZmV0Y2hlcihcIi9hcGkvaHltblwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBudW1iZXI6IGRhdGEubnVtYmVyLFxuICAgICAgICAgIG5ld051bWJlcjogdmFsdWVzLm51bWJlcixcbiAgICAgICAgICBuZXdOYW1lOiB2YWx1ZXMubmFtZSxcbiAgICAgICAgfSksXG4gICAgICB9KTtcblxuICAgICAgbGV0IG5ld0xvZ3MgPSBsb2dEYXRhLmZpbHRlcigobG9nKSA9PiBsb2cuaWQgPT09IGRhdGEubnVtYmVyKTtcblxuICAgICAgaWYgKHZhbHVlcy5udW1iZXIgPT09IGRhdGEubnVtYmVyKSB7XG4gICAgICAgIGVkaXRlZEh5bW4ubnVtYmVyID0gZGF0YS5udW1iZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdMb2dzLmZvckVhY2goKG5ld0xvZykgPT4ge1xuICAgICAgICAgIG5ld0xvZy5pZCA9IHZhbHVlcy5udW1iZXI7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBlZGl0ZWRIeW1uLm5hbWUgPSB2YWx1ZXMubmFtZTtcbiAgICAgIHNldEh5bW5zKFtcbiAgICAgICAgLi4uaHltbkRhdGEuZmlsdGVyKChoeW1uKSA9PiBoeW1uLm51bWJlciAhPT0gZGF0YS5udW1iZXIpLFxuICAgICAgICBlZGl0ZWRIeW1uLFxuICAgICAgXSk7XG4gICAgICAvLyBuZXdMb2dzLmZvckVhY2goKG5ld0xvZykgPT4ge1xuICAgICAgLy8gICBzZXRMb2dzKFsuLi5sb2dEYXRhLmZpbHRlcigobG9nKSA9PiBsb2cuaWQgIT09IGRhdGEubnVtYmVyKSwgbmV3TG9nXSk7XG4gICAgICAvLyB9KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGxvZ0RhdGEuZmlsdGVyKChsb2cpID0+IGxvZy5pZCA9PT0gdmFsdWVzLm51bWJlcikpO1xuICAgICAgLy8gc2V0TG9ncyhbLi4ubG9nRGF0YS5maWx0ZXIoKGxvZykgPT4gbG9nLmlkICE9PSBkYXRhLm51bWJlciksIG5ld0xvZ3NbMF1dKTtcbiAgICAgIHNldExvZ3MoWy4uLmxvZ0RhdGEuZmlsdGVyKChsb2cpID0+IGxvZy5pZCAhPT0gZGF0YS5udW1iZXIpXSk7XG4gICAgfSk7XG4gICAgc2V0RWRpdE1vZGFsT3BlbihmYWxzZSk7XG4gICAgc2V0SXNQYXNzd29yZENvcnJlY3QoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IHF1aWNrQWRkSHltbiA9ICh2YWx1ZXM6IFF1aWNrQWRkVmFsdWVzKSA9PiB7XG4gICAgbXV0YXRlKFwiL2FwaS9sb2dcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgYWRkZWRMb2cgPSBhd2FpdCBmZXRjaGVyKFwiL2FwaS9sb2dcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpZDogZGF0YS5udW1iZXIsXG4gICAgICAgICAgYnl3aG86IHZhbHVlcy5uYW1lLFxuICAgICAgICAgIGxvZ2dlZDogdmFsdWVzLmRhdGUsXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG5cbiAgICAgIHNldExvZ3MoWy4uLmxvZ0RhdGEsIGFkZGVkTG9nXSk7XG4gICAgfSk7XG4gICAgc2V0UXVpY2tBZGRNb2RhbE9wZW4oZmFsc2UpO1xuICAgIHNldElzUGFzc3dvcmRDb3JyZWN0KGZhbHNlKTtcbiAgICAvLyB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cbiAgICAvLyBjb25zdCBzZWxlY3RlZGh5bW4gPSBoeW1uc0xpc3QuZmlsdGVyKFxuICAgIC8vICAgKGh5bW4pID0+IGh5bW4ubnVtYmVyID09PSBkYXRhLm51bWJlclxuICAgIC8vICk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RlZGh5bW4pO1xuXG4gICAgLy8gc2VsZWN0ZWRoeW1uWzBdLmxvZ3MucHVzaCh7IGxvZ2dlZDogdmFsdWVzLmRhdGUsIGJ5d2hvOiB2YWx1ZXMubmFtZSB9KTtcbiAgfTtcblxuICAvLyBjb25zdCBmYWtlSHltbnMgPSBoeW1uc0xpc3QuZmlsdGVyKFxuICAvLyAgIChoeW1uKSA9PlxuICAvLyAgICAgaHltbi5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyLnRvTG93ZXJDYXNlKCkpIHx8XG4gIC8vICAgICBoeW1uLm51bWJlci50b1N0cmluZygpLmluY2x1ZGVzKGZpbHRlcilcbiAgLy8gKTtcblxuICAvLyBjb25zb2xlLmxvZyhhbGxIeW1ucyk7XG5cbiAgaWYgKGh5bW5EYXRhWzBdLm51bWJlciA9PT0gOTk5IHx8IGxvZ0RhdGFbMF0uaWQgPT09IDk5OSkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8RWRpdE1vZGFsXG4gICAgICAgICAgb3Blbj17ZWRpdE1vZGFsT3Blbn1cbiAgICAgICAgICBoYW5kbGVDbG9zZT17KCkgPT4gc2V0RWRpdE1vZGFsT3BlbihmYWxzZSl9XG4gICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICBlZGl0TXV0YXRpb249e2VkaXRIeW1ufVxuICAgICAgICAvPlxuICAgICAgICA8UXVpY2tBZGRNb2RhbFxuICAgICAgICAgIG9wZW49e3F1aWNrQWRkTW9kYWxPcGVufVxuICAgICAgICAgIGhhbmRsZUNsb3NlPXsoKSA9PiBzZXRRdWlja0FkZE1vZGFsT3BlbihmYWxzZSl9XG4gICAgICAgICAgcXVpY2tBZGRNdXRhdGlvbj17cXVpY2tBZGRIeW1ufVxuICAgICAgICAvPlxuICAgICAgICB7LyogPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgIHthbGxIeW1ucy5tYXAoKGh5bW4pID0+IChcbiAgICAgICAgICAgIDxIeW1uXG4gICAgICAgICAgICAgIG5hbWU9e2h5bW4ubmFtZX1cbiAgICAgICAgICAgICAgbnVtYmVyPXtoeW1uLm51bWJlcn1cbiAgICAgICAgICAgICAgbG9ncz17YWxsTG9ncy5maWx0ZXIoKGxvZykgPT4gbG9nLmlkID09PSBoeW1uLm51bWJlcil9XG4gICAgICAgICAgICAgIGhhbmRsZUVkaXQ9eygpID0+IG9wZW5FZGl0TW9kYWwoaHltbil9XG4gICAgICAgICAgICAgIGhhbmRsZVF1aWNrQWRkPXsoKSA9PiBvcGVuUXVpY2tBZGRNb2RhbChoeW1uKX1cbiAgICAgICAgICAgICAga2V5PXtoeW1uLm51bWJlcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQm94PiAqL31cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cblxuICBjb25zdCBmaWx0ZXJlZEh5bW5zID0gaHltbkRhdGEuZmlsdGVyKFxuICAgIChoeW1uKSA9PlxuICAgICAgaHltbi5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyLnRvTG93ZXJDYXNlKCkpIHx8XG4gICAgICBoeW1uLm51bWJlci50b1N0cmluZygpLmluY2x1ZGVzKGZpbHRlcilcbiAgKTtcblxuICBjb25zdCBmaWx0ZXJlZExvZ3MgPSAoaHltbklkOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBmbG9ncyA9IGxvZ0RhdGEuZmlsdGVyKChsb2cpID0+IGxvZy5pZCA9PT0gaHltbklkKTtcblxuICAgIHJldHVybiBmbG9ncztcbiAgfTtcblxuICBjb25zdCBjaGVja1Bhc3N3b3JkID0gKHZhbHVlczogUGFzc3dvcmRWYWx1ZXMpID0+IHtcbiAgICBzZXRJc1Bhc3N3b3JkQ29ycmVjdCh2YWx1ZXMucGFzc3dvcmQgPT09IFwicmFoYWJcIiA/IHRydWUgOiBmYWxzZSk7XG4gICAgc2V0UGluTW9kYWxPcGVuKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBjbG9zZUVkaXQgPSAoKSA9PiB7XG4gICAgc2V0UGluTW9kYWxPcGVuKGZhbHNlKTtcbiAgICBzZXRFZGl0TW9kYWxPcGVuKGZhbHNlKTtcbiAgICBzZXRJc1Bhc3N3b3JkQ29ycmVjdChmYWxzZSk7XG4gIH07XG4gIGNvbnN0IGNsb3NlUXVpY2tBZGQgPSAoKSA9PiB7XG4gICAgc2V0UGluTW9kYWxPcGVuKGZhbHNlKTtcbiAgICBzZXRRdWlja0FkZE1vZGFsT3BlbihmYWxzZSk7XG4gICAgc2V0SXNQYXNzd29yZENvcnJlY3QoZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxFZGl0TW9kYWxcbiAgICAgICAgb3Blbj17ZWRpdE1vZGFsT3BlbiAmJiBpc1Bhc3N3b3JkQ29ycmVjdH1cbiAgICAgICAgaGFuZGxlQ2xvc2U9e2Nsb3NlRWRpdH1cbiAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgZWRpdE11dGF0aW9uPXtlZGl0SHltbn1cbiAgICAgIC8+XG4gICAgICA8UGluTW9kYWxcbiAgICAgICAgb3Blbj17cGluTW9kYWxPcGVufVxuICAgICAgICBoYW5kbGVDbG9zZT17KCkgPT4gc2V0UGluTW9kYWxPcGVuKGZhbHNlKX1cbiAgICAgICAgaXNDb3JyZWN0PXsodmFsdWVzKSA9PiBjaGVja1Bhc3N3b3JkKHZhbHVlcyl9XG4gICAgICAvPlxuICAgICAgPFF1aWNrQWRkTW9kYWxcbiAgICAgICAgb3Blbj17cXVpY2tBZGRNb2RhbE9wZW4gJiYgaXNQYXNzd29yZENvcnJlY3R9XG4gICAgICAgIGhhbmRsZUNsb3NlPXtjbG9zZVF1aWNrQWRkfVxuICAgICAgICBxdWlja0FkZE11dGF0aW9uPXtxdWlja0FkZEh5bW59XG4gICAgICAvPlxuICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICB7ZmlsdGVyZWRIeW1ucy5zb3J0KCkubWFwKChoeW1uKSA9PiAoXG4gICAgICAgICAgPEh5bW5cbiAgICAgICAgICAgIG5hbWU9e2h5bW4ubmFtZX1cbiAgICAgICAgICAgIG51bWJlcj17aHltbi5udW1iZXJ9XG4gICAgICAgICAgICBsb2dzPXtcbiAgICAgICAgICAgICAgLyphbGxMb2dzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAobG9nKSA9PiBsb2cuaWQgPT09IGh5bW4ubnVtYmVyXG4gICAgICAgICAgICAgICkqLyBmaWx0ZXJlZExvZ3MoaHltbi5udW1iZXIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoYW5kbGVFZGl0PXsoKSA9PiBvcGVuRWRpdE1vZGFsKGh5bW4pfVxuICAgICAgICAgICAgaGFuZGxlUXVpY2tBZGQ9eygpID0+IG9wZW5RdWlja0FkZE1vZGFsKGh5bW4pfVxuICAgICAgICAgICAga2V5PXtoeW1uLm51bWJlcn1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvQm94PlxuICAgIDwvPlxuICApO1xuXG4gIC8vIHJldHVybiAoXG4gIC8vICAgPD5cbiAgLy8gICAgIDxFZGl0TW9kYWxcbiAgLy8gICAgICAgb3Blbj17ZWRpdE1vZGFsT3Blbn1cbiAgLy8gICAgICAgaGFuZGxlQ2xvc2U9eygpID0+IHNldEVkaXRNb2RhbE9wZW4oZmFsc2UpfVxuICAvLyAgICAgICBkYXRhPXtkYXRhfVxuICAvLyAgICAgICBlZGl0TXV0YXRpb249e2VkaXRIeW1ufVxuICAvLyAgICAgLz5cbiAgLy8gICAgIDxRdWlja0FkZE1vZGFsXG4gIC8vICAgICAgIG9wZW49e3F1aWNrQWRkTW9kYWxPcGVufVxuICAvLyAgICAgICBoYW5kbGVDbG9zZT17KCkgPT4gc2V0UXVpY2tBZGRNb2RhbE9wZW4oZmFsc2UpfVxuICAvLyAgICAgICBxdWlja0FkZE11dGF0aW9uPXtxdWlja0FkZEh5bW59XG4gIC8vICAgICAvPlxuICAvLyAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAvLyAgICAgICB7ZmFrZUh5bW5zLnNvcnQoKS5tYXAoKGh5bW4pID0+IChcbiAgLy8gICAgICAgICA8SHltblxuICAvLyAgICAgICAgICAgbmFtZT17aHltbi5uYW1lfVxuICAvLyAgICAgICAgICAgbnVtYmVyPXtoeW1uLm51bWJlcn1cbiAgLy8gICAgICAgICAgIGxvZ3M9e2h5bW4ubG9nc31cbiAgLy8gICAgICAgICAgIGhhbmRsZUVkaXQ9eygpID0+IG9wZW5FZGl0TW9kYWwoaHltbil9XG4gIC8vICAgICAgICAgICBoYW5kbGVRdWlja0FkZD17KCkgPT4gb3BlblF1aWNrQWRkTW9kYWwoaHltbil9XG4gIC8vICAgICAgICAgICBrZXk9e2h5bW4ubnVtYmVyfVxuICAvLyAgICAgICAgIC8+XG4gIC8vICAgICAgICkpfVxuICAvLyAgICAgPC9Cb3g+XG4gIC8vICAgPC8+XG4gIC8vICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbGxIeW1ucztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQm94IiwiSHltbiIsIkVkaXRNb2RhbCIsIlBpbk1vZGFsIiwiUXVpY2tBZGRNb2RhbCIsIm11dGF0ZSIsImZldGNoZXIiLCJBbGxIeW1ucyIsImZpbHRlciIsImh5bW5EYXRhIiwibG9nRGF0YSIsInNldEh5bW5zIiwic2V0TG9ncyIsImRhdGEiLCJzZXREYXRhIiwibmFtZSIsIm51bWJlciIsImVkaXRNb2RhbE9wZW4iLCJzZXRFZGl0TW9kYWxPcGVuIiwicGluTW9kYWxPcGVuIiwic2V0UGluTW9kYWxPcGVuIiwicXVpY2tBZGRNb2RhbE9wZW4iLCJzZXRRdWlja0FkZE1vZGFsT3BlbiIsImlzUGFzc3dvcmRDb3JyZWN0Iiwic2V0SXNQYXNzd29yZENvcnJlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJoeW1uX2RhdGEiLCJoeW1ucyIsImxvZ19kYXRhIiwibG9ncyIsIm9wZW5FZGl0TW9kYWwiLCJ2YWx1ZXMiLCJvcGVuUXVpY2tBZGRNb2RhbCIsImVkaXRIeW1uIiwiZWRpdGVkSHltbiIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5ld051bWJlciIsIm5ld05hbWUiLCJuZXdMb2dzIiwibG9nIiwiaWQiLCJmb3JFYWNoIiwibmV3TG9nIiwiaHltbiIsInF1aWNrQWRkSHltbiIsImFkZGVkTG9nIiwiYnl3aG8iLCJsb2dnZWQiLCJkYXRlIiwiZmlsdGVyZWRIeW1ucyIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ0b1N0cmluZyIsImZpbHRlcmVkTG9ncyIsImh5bW5JZCIsImZsb2dzIiwiY2hlY2tQYXNzd29yZCIsInBhc3N3b3JkIiwiY2xvc2VFZGl0IiwiY2xvc2VRdWlja0FkZCIsInNvcnQiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Hymns/AllHymns/index.tsx\n");

/***/ })

});