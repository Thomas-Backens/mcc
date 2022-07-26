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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _Hymn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hymn */ \"./src/components/Hymns/AllHymns/Hymn/index.tsx\");\n/* harmony import */ var _Hymn_Edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Hymn/Edit */ \"./src/components/Hymns/AllHymns/Hymn/Edit/index.tsx\");\n/* harmony import */ var _Hymn_Pin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Hymn/Pin */ \"./src/components/Hymns/AllHymns/Hymn/Pin/index.tsx\");\n/* harmony import */ var _Hymn_QuickAdd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Hymn/QuickAdd */ \"./src/components/Hymns/AllHymns/Hymn/QuickAdd/index.tsx\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var _Utils_fetcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Utils/fetcher */ \"./src/Utils/fetcher.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/thomasbackens/Desktop/Work/Personal/mcc/src/components/Hymns/AllHymns/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n // import { hymnsList, logsList } from \"./hymnsList\";\n\n\n\n\n // useSWR\n\n // import AddHymn from \"../Search/AddHymn\";\n\nconst AllHymns = ({\n  filter,\n  hymnData,\n  logData,\n  setHymns,\n  setLogs\n}) => {\n  _s();\n\n  const {\n    0: data,\n    1: setData\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    name: \"\",\n    number: 0 // logs: [{ logged: \"\", bywho: \"\" }],\n\n  });\n  const {\n    0: editModalOpen,\n    1: setEditModalOpen\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const {\n    0: pinModalOpen,\n    1: setPinModalOpen\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const {\n    0: quickAddModalOpen,\n    1: setQuickAddModalOpen\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const {\n    0: isPasswordCorrect,\n    1: setIsPasswordCorrect\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // const { data: hymns } = useSWR(\"/api/hymn\");\n  // const { data: logs } = useSWR(\"/api/log\");\n  // const [allHymns, setAllHymns] = useState<HymnValues[]>(hymnsList);\n  // const [allLogs, setAllLogs] = useState<LogValues[]>(logsList);\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    fetch(\"/api/hymn\").then(response => response.json()).then(hymn_data => setHymns(hymn_data.hymns));\n    fetch(\"/api/log\").then(response => response.json()).then(log_data => setLogs(log_data.logs));\n  }, [setHymns, setLogs]); // useEffect(() => {\n  //   addHymn(createMutation);\n  // }, [createMutation]);\n  // useEffect(() => {\n  //   setAllHymns([\n  //     ...allHymns.filter((hymn) => hymn.number !== addedHymn.number),\n  //     addedHymn,\n  //   ]);\n  //   const newLog = {\n  //     id: addedHymn.number,\n  //     logged: addedHymn.logged,\n  //     bywho: addedHymn.bywho,\n  //   };\n  //   setAllLogs([...allLogs.filter((log) => log.id !== newLog.id), newLog]);\n  // }, [addedHymn]);\n  // let dataHymns: HymnValues[] = [];\n  // let dataLogs: any[] = [];\n  // if (hymns) {\n  //   dataHymns = hymns.hymns;\n  // }\n  // if (logs) {\n  //   dataLogs = logs.logs;\n  // }\n  // useEffect(() => {\n  //   fetch(\"/api/hymn\")\n  //     .then((response) => response.json())\n  //     .then((data) => console.log(data));\n  // }, []);\n\n  const openEditModal = values => {\n    setPinModalOpen(true);\n    setData(values);\n  };\n\n  const openQuickAddModal = values => {\n    setQuickAddModalOpen(true);\n    setData(values);\n  }; // const editHymn = (values: EditValues) => {\n  //   const selectedhymn = hymnsList.filter(\n  //     (hymn) => hymn.number === data.number\n  //   );\n  //   selectedhymn[0].name = values.name;\n  //   selectedhymn[0].number = values.number;\n  // };\n\n\n  const editHymn = values => {\n    (0,swr__WEBPACK_IMPORTED_MODULE_6__.mutate)(\"/api/hymn\", async () => {\n      const editedHymn = await (0,_Utils_fetcher__WEBPACK_IMPORTED_MODULE_7__.default)(\"/api/hymn\", {\n        method: \"PATCH\",\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n          number: data.number,\n          newNumber: values.number,\n          newName: values.name\n        })\n      });\n      let newLogs = logData.filter(log => log.id === data.number);\n\n      if (values.number === data.number) {\n        editedHymn.number = data.number;\n      } else {\n        newLogs.forEach(newLog => {\n          newLog.id = values.number;\n        });\n      }\n\n      editedHymn.name = values.name;\n      setHymns([...hymnData.filter(hymn => hymn.number !== data.number), editedHymn]); // newLogs.forEach((newLog) => {\n      //   setLogs([...logData.filter((log) => log.id !== data.number), newLog]);\n      // });\n      // console.log(logData.filter((log) => log.id === values.number));\n      // setLogs([...logData.filter((log) => log.id !== data.number), newLogs[0]]);\n\n      setLogs([...logData.filter(log => log.id !== data.number)]);\n    });\n    closeModal();\n  };\n\n  const quickAddHymn = values => {\n    (0,swr__WEBPACK_IMPORTED_MODULE_6__.mutate)(\"/api/log\", async () => {\n      const addedLog = await (0,_Utils_fetcher__WEBPACK_IMPORTED_MODULE_7__.default)(\"/api/log\", {\n        method: \"POST\",\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n          id: data.number,\n          bywho: values.name,\n          logged: values.date\n        })\n      });\n      setLogs([...logData, addedLog]);\n    }); // window.location.reload();\n    // const selectedhymn = hymnsList.filter(\n    //   (hymn) => hymn.number === data.number\n    // );\n    // console.log(selectedhymn);\n    // selectedhymn[0].logs.push({ logged: values.date, bywho: values.name });\n  }; // const fakeHymns = hymnsList.filter(\n  //   (hymn) =>\n  //     hymn.name.toLowerCase().includes(filter.toLowerCase()) ||\n  //     hymn.number.toString().includes(filter)\n  // );\n  // console.log(allHymns);\n  // const checkPasswordForEdit = (values: PasswordValues) => {\n  //   setIsPasswordCorrect(values.password === \"rahab\" ? true : false);\n  //   setPinModalOpen(false);\n  //   setEditModalOpen(true);\n  // };\n  // const checkPasswordForQuickAdd = (values: PasswordValues) => {\n  //   setIsPasswordCorrect(values.password === \"rahab\" ? true : false);\n  //   setPinModalOpen(false);\n  //   setQuickAddModalOpen(true);\n  // };\n\n\n  const checkPassword = values => {\n    setIsPasswordCorrect(values.password === \"rahab\" ? true : false);\n    setPinModalOpen(false);\n  };\n\n  const closeModal = () => {\n    setEditModalOpen(false);\n    setIsPasswordCorrect(false);\n  };\n\n  if (hymnData[0].number === 999 || logData[0].id === 999) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Hymn_Edit__WEBPACK_IMPORTED_MODULE_3__.default, {\n        open: editModalOpen,\n        handleClose: () => setEditModalOpen(false),\n        data: data,\n        editMutation: editHymn\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 237,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Hymn_QuickAdd__WEBPACK_IMPORTED_MODULE_5__.default, {\n        open: quickAddModalOpen,\n        handleClose: () => setQuickAddModalOpen(false),\n        quickAddMutation: quickAddHymn\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 243,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true);\n  }\n\n  const filteredHymns = hymnData.filter(hymn => hymn.name.toLowerCase().includes(filter.toLowerCase()) || hymn.number.toString().includes(filter));\n\n  const filteredLogs = hymnId => {\n    const flogs = logData.filter(log => log.id === hymnId);\n    return flogs;\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Hymn_Edit__WEBPACK_IMPORTED_MODULE_3__.default, {\n      open: editModalOpen,\n      handleClose: () => setEditModalOpen(false),\n      data: data,\n      editMutation: editHymn\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 278,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Hymn_Pin__WEBPACK_IMPORTED_MODULE_4__.default, {\n      open: pinModalOpen,\n      handleClose: () => setPinModalOpen(false),\n      isCorrect: values => checkPassword(values)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 284,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Hymn_QuickAdd__WEBPACK_IMPORTED_MODULE_5__.default, {\n      open: quickAddModalOpen,\n      handleClose: () => setQuickAddModalOpen(false),\n      quickAddMutation: quickAddHymn\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 289,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Box, {\n      display: \"flex\",\n      justifyContent: \"center\",\n      flexDirection: \"column\",\n      children: filteredHymns.sort().map(hymn => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Hymn__WEBPACK_IMPORTED_MODULE_2__.default, {\n        name: hymn.name,\n        number: hymn.number,\n        logs:\n        /*allLogs.filter(\n          (log) => log.id === hymn.number\n        )*/\n        filteredLogs(hymn.number),\n        handleEdit: () => openEditModal(hymn),\n        handleQuickAdd: () => openQuickAddModal(hymn)\n      }, hymn.number, false, {\n        fileName: _jsxFileName,\n        lineNumber: 296,\n        columnNumber: 11\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 294,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true); // return (\n  //   <>\n  //     <EditModal\n  //       open={editModalOpen}\n  //       handleClose={() => setEditModalOpen(false)}\n  //       data={data}\n  //       editMutation={editHymn}\n  //     />\n  //     <QuickAddModal\n  //       open={quickAddModalOpen}\n  //       handleClose={() => setQuickAddModalOpen(false)}\n  //       quickAddMutation={quickAddHymn}\n  //     />\n  //     <Box display=\"flex\" justifyContent=\"center\" flexDirection=\"column\">\n  //       {fakeHymns.sort().map((hymn) => (\n  //         <Hymn\n  //           name={hymn.name}\n  //           number={hymn.number}\n  //           logs={hymn.logs}\n  //           handleEdit={() => openEditModal(hymn)}\n  //           handleQuickAdd={() => openQuickAddModal(hymn)}\n  //           key={hymn.number}\n  //         />\n  //       ))}\n  //     </Box>\n  //   </>\n  // );\n};\n\n_s(AllHymns, \"qTRllnEzCjTVeJ9+Cs6wqtVJwFg=\");\n\n_c = AllHymns;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AllHymns);\n\nvar _c;\n\n$RefreshReg$(_c, \"AllHymns\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IeW1ucy9BbGxIeW1ucy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBT0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7Q0FDOEI7O0NBRTlCOztBQTBDQSxNQUFNVSxRQUFpQyxHQUFHLENBQUM7QUFDekNDLEVBQUFBLE1BRHlDO0FBRXpDQyxFQUFBQSxRQUZ5QztBQUd6Q0MsRUFBQUEsT0FIeUM7QUFJekNDLEVBQUFBLFFBSnlDO0FBS3pDQyxFQUFBQTtBQUx5QyxDQUFELEtBTVA7QUFBQTs7QUFDakMsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCaEIsK0NBQVEsQ0FBYTtBQUMzQ2lCLElBQUFBLElBQUksRUFBRSxFQURxQztBQUUzQ0MsSUFBQUEsTUFBTSxFQUFFLENBRm1DLENBRzNDOztBQUgyQyxHQUFiLENBQWhDO0FBS0EsUUFBTTtBQUFBLE9BQUNDLGFBQUQ7QUFBQSxPQUFnQkM7QUFBaEIsTUFBb0NwQiwrQ0FBUSxDQUFVLEtBQVYsQ0FBbEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ3FCLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDdEIsK0NBQVEsQ0FBVSxLQUFWLENBQWhEO0FBQ0EsUUFBTTtBQUFBLE9BQUN1QixpQkFBRDtBQUFBLE9BQW9CQztBQUFwQixNQUE0Q3hCLCtDQUFRLENBQVUsS0FBVixDQUExRDtBQUVBLFFBQU07QUFBQSxPQUFDeUIsaUJBQUQ7QUFBQSxPQUFvQkM7QUFBcEIsTUFBNEMxQiwrQ0FBUSxDQUFVLEtBQVYsQ0FBMUQsQ0FWaUMsQ0FZakM7QUFDQTtBQUVBO0FBQ0E7O0FBRUFDLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkMEIsSUFBQUEsS0FBSyxDQUFDLFdBQUQsQ0FBTCxDQUNHQyxJQURILENBQ1NDLFFBQUQsSUFBY0EsUUFBUSxDQUFDQyxJQUFULEVBRHRCLEVBRUdGLElBRkgsQ0FFU0csU0FBRCxJQUFlbEIsUUFBUSxDQUFDa0IsU0FBUyxDQUFDQyxLQUFYLENBRi9CO0FBR0FMLElBQUFBLEtBQUssQ0FBQyxVQUFELENBQUwsQ0FDR0MsSUFESCxDQUNTQyxRQUFELElBQWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQUR0QixFQUVHRixJQUZILENBRVNLLFFBQUQsSUFBY25CLE9BQU8sQ0FBQ21CLFFBQVEsQ0FBQ0MsSUFBVixDQUY3QjtBQUdELEdBUFEsRUFPTixDQUFDckIsUUFBRCxFQUFXQyxPQUFYLENBUE0sQ0FBVCxDQWxCaUMsQ0EyQmpDO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQU1xQixhQUFhLEdBQUlDLE1BQUQsSUFBd0I7QUFDNUNkLElBQUFBLGVBQWUsQ0FBQyxJQUFELENBQWY7QUFDQU4sSUFBQUEsT0FBTyxDQUFDb0IsTUFBRCxDQUFQO0FBQ0QsR0FIRDs7QUFJQSxRQUFNQyxpQkFBaUIsR0FBSUQsTUFBRCxJQUF3QjtBQUNoRFosSUFBQUEsb0JBQW9CLENBQUMsSUFBRCxDQUFwQjtBQUNBUixJQUFBQSxPQUFPLENBQUNvQixNQUFELENBQVA7QUFDRCxHQUhELENBakVpQyxDQXNFakM7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUVBLFFBQU1FLFFBQVEsR0FBSUYsTUFBRCxJQUF3QjtBQUN2QzdCLElBQUFBLDJDQUFNLENBQUMsV0FBRCxFQUFjLFlBQVk7QUFDOUIsWUFBTWdDLFVBQVUsR0FBRyxNQUFNL0IsdURBQU8sQ0FBQyxXQUFELEVBQWM7QUFDNUNnQyxRQUFBQSxNQUFNLEVBQUUsT0FEb0M7QUFFNUNDLFFBQUFBLE9BQU8sRUFBRTtBQUFFLDBCQUFnQjtBQUFsQixTQUZtQztBQUc1Q0MsUUFBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNuQjFCLFVBQUFBLE1BQU0sRUFBRUgsSUFBSSxDQUFDRyxNQURNO0FBRW5CMkIsVUFBQUEsU0FBUyxFQUFFVCxNQUFNLENBQUNsQixNQUZDO0FBR25CNEIsVUFBQUEsT0FBTyxFQUFFVixNQUFNLENBQUNuQjtBQUhHLFNBQWY7QUFIc0MsT0FBZCxDQUFoQztBQVVBLFVBQUk4QixPQUFPLEdBQUduQyxPQUFPLENBQUNGLE1BQVIsQ0FBZ0JzQyxHQUFELElBQVNBLEdBQUcsQ0FBQ0MsRUFBSixLQUFXbEMsSUFBSSxDQUFDRyxNQUF4QyxDQUFkOztBQUVBLFVBQUlrQixNQUFNLENBQUNsQixNQUFQLEtBQWtCSCxJQUFJLENBQUNHLE1BQTNCLEVBQW1DO0FBQ2pDcUIsUUFBQUEsVUFBVSxDQUFDckIsTUFBWCxHQUFvQkgsSUFBSSxDQUFDRyxNQUF6QjtBQUNELE9BRkQsTUFFTztBQUNMNkIsUUFBQUEsT0FBTyxDQUFDRyxPQUFSLENBQWlCQyxNQUFELElBQVk7QUFDMUJBLFVBQUFBLE1BQU0sQ0FBQ0YsRUFBUCxHQUFZYixNQUFNLENBQUNsQixNQUFuQjtBQUNELFNBRkQ7QUFHRDs7QUFFRHFCLE1BQUFBLFVBQVUsQ0FBQ3RCLElBQVgsR0FBa0JtQixNQUFNLENBQUNuQixJQUF6QjtBQUNBSixNQUFBQSxRQUFRLENBQUMsQ0FDUCxHQUFHRixRQUFRLENBQUNELE1BQVQsQ0FBaUIwQyxJQUFELElBQVVBLElBQUksQ0FBQ2xDLE1BQUwsS0FBZ0JILElBQUksQ0FBQ0csTUFBL0MsQ0FESSxFQUVQcUIsVUFGTyxDQUFELENBQVIsQ0F0QjhCLENBMEI5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBekIsTUFBQUEsT0FBTyxDQUFDLENBQUMsR0FBR0YsT0FBTyxDQUFDRixNQUFSLENBQWdCc0MsR0FBRCxJQUFTQSxHQUFHLENBQUNDLEVBQUosS0FBV2xDLElBQUksQ0FBQ0csTUFBeEMsQ0FBSixDQUFELENBQVA7QUFDRCxLQWhDSyxDQUFOO0FBaUNBbUMsSUFBQUEsVUFBVTtBQUNYLEdBbkNEOztBQXFDQSxRQUFNQyxZQUFZLEdBQUlsQixNQUFELElBQTRCO0FBQy9DN0IsSUFBQUEsMkNBQU0sQ0FBQyxVQUFELEVBQWEsWUFBWTtBQUM3QixZQUFNZ0QsUUFBUSxHQUFHLE1BQU0vQyx1REFBTyxDQUFDLFVBQUQsRUFBYTtBQUN6Q2dDLFFBQUFBLE1BQU0sRUFBRSxNQURpQztBQUV6Q0MsUUFBQUEsT0FBTyxFQUFFO0FBQUUsMEJBQWdCO0FBQWxCLFNBRmdDO0FBR3pDQyxRQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CSyxVQUFBQSxFQUFFLEVBQUVsQyxJQUFJLENBQUNHLE1BRFU7QUFFbkJzQyxVQUFBQSxLQUFLLEVBQUVwQixNQUFNLENBQUNuQixJQUZLO0FBR25Cd0MsVUFBQUEsTUFBTSxFQUFFckIsTUFBTSxDQUFDc0I7QUFISSxTQUFmO0FBSG1DLE9BQWIsQ0FBOUI7QUFVQTVDLE1BQUFBLE9BQU8sQ0FBQyxDQUFDLEdBQUdGLE9BQUosRUFBYTJDLFFBQWIsQ0FBRCxDQUFQO0FBQ0QsS0FaSyxDQUFOLENBRCtDLENBYy9DO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNELEdBdkJELENBcEhpQyxDQTZJakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFFBQU1JLGFBQWEsR0FBSXZCLE1BQUQsSUFBNEI7QUFDaERWLElBQUFBLG9CQUFvQixDQUFDVSxNQUFNLENBQUN3QixRQUFQLEtBQW9CLE9BQXBCLEdBQThCLElBQTlCLEdBQXFDLEtBQXRDLENBQXBCO0FBQ0F0QyxJQUFBQSxlQUFlLENBQUMsS0FBRCxDQUFmO0FBQ0QsR0FIRDs7QUFLQSxRQUFNK0IsVUFBVSxHQUFHLE1BQU07QUFDdkJqQyxJQUFBQSxnQkFBZ0IsQ0FBQyxLQUFELENBQWhCO0FBQ0FNLElBQUFBLG9CQUFvQixDQUFDLEtBQUQsQ0FBcEI7QUFDRCxHQUhEOztBQUtBLE1BQUlmLFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWU8sTUFBWixLQUF1QixHQUF2QixJQUE4Qk4sT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXcUMsRUFBWCxLQUFrQixHQUFwRCxFQUF5RDtBQUN2RCx3QkFDRTtBQUFBLDhCQUNFLDhEQUFDLCtDQUFEO0FBQ0UsWUFBSSxFQUFFOUIsYUFEUjtBQUVFLG1CQUFXLEVBQUUsTUFBTUMsZ0JBQWdCLENBQUMsS0FBRCxDQUZyQztBQUdFLFlBQUksRUFBRUwsSUFIUjtBQUlFLG9CQUFZLEVBQUV1QjtBQUpoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBT0UsOERBQUMsbURBQUQ7QUFDRSxZQUFJLEVBQUVmLGlCQURSO0FBRUUsbUJBQVcsRUFBRSxNQUFNQyxvQkFBb0IsQ0FBQyxLQUFELENBRnpDO0FBR0Usd0JBQWdCLEVBQUU4QjtBQUhwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGO0FBQUEsb0JBREY7QUEyQkQ7O0FBRUQsUUFBTU8sYUFBYSxHQUFHbEQsUUFBUSxDQUFDRCxNQUFULENBQ25CMEMsSUFBRCxJQUNFQSxJQUFJLENBQUNuQyxJQUFMLENBQVU2QyxXQUFWLEdBQXdCQyxRQUF4QixDQUFpQ3JELE1BQU0sQ0FBQ29ELFdBQVAsRUFBakMsS0FDQVYsSUFBSSxDQUFDbEMsTUFBTCxDQUFZOEMsUUFBWixHQUF1QkQsUUFBdkIsQ0FBZ0NyRCxNQUFoQyxDQUhrQixDQUF0Qjs7QUFNQSxRQUFNdUQsWUFBWSxHQUFJQyxNQUFELElBQW9CO0FBQ3ZDLFVBQU1DLEtBQUssR0FBR3ZELE9BQU8sQ0FBQ0YsTUFBUixDQUFnQnNDLEdBQUQsSUFBU0EsR0FBRyxDQUFDQyxFQUFKLEtBQVdpQixNQUFuQyxDQUFkO0FBRUEsV0FBT0MsS0FBUDtBQUNELEdBSkQ7O0FBTUEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQywrQ0FBRDtBQUNFLFVBQUksRUFBRWhELGFBRFI7QUFFRSxpQkFBVyxFQUFFLE1BQU1DLGdCQUFnQixDQUFDLEtBQUQsQ0FGckM7QUFHRSxVQUFJLEVBQUVMLElBSFI7QUFJRSxrQkFBWSxFQUFFdUI7QUFKaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU9FLDhEQUFDLDhDQUFEO0FBQ0UsVUFBSSxFQUFFakIsWUFEUjtBQUVFLGlCQUFXLEVBQUUsTUFBTUMsZUFBZSxDQUFDLEtBQUQsQ0FGcEM7QUFHRSxlQUFTLEVBQUdjLE1BQUQsSUFBWXVCLGFBQWEsQ0FBQ3ZCLE1BQUQ7QUFIdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRixlQVlFLDhEQUFDLG1EQUFEO0FBQ0UsVUFBSSxFQUFFYixpQkFEUjtBQUVFLGlCQUFXLEVBQUUsTUFBTUMsb0JBQW9CLENBQUMsS0FBRCxDQUZ6QztBQUdFLHNCQUFnQixFQUFFOEI7QUFIcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaRixlQWlCRSw4REFBQyxrREFBRDtBQUFLLGFBQU8sRUFBQyxNQUFiO0FBQW9CLG9CQUFjLEVBQUMsUUFBbkM7QUFBNEMsbUJBQWEsRUFBQyxRQUExRDtBQUFBLGdCQUNHTyxhQUFhLENBQUNPLElBQWQsR0FBcUJDLEdBQXJCLENBQTBCakIsSUFBRCxpQkFDeEIsOERBQUMsMENBQUQ7QUFDRSxZQUFJLEVBQUVBLElBQUksQ0FBQ25DLElBRGI7QUFFRSxjQUFNLEVBQUVtQyxJQUFJLENBQUNsQyxNQUZmO0FBR0UsWUFBSTtBQUNGO0FBQ2Q7QUFDQTtBQUFrQitDLFFBQUFBLFlBQVksQ0FBQ2IsSUFBSSxDQUFDbEMsTUFBTixDQU5wQjtBQVFFLGtCQUFVLEVBQUUsTUFBTWlCLGFBQWEsQ0FBQ2lCLElBQUQsQ0FSakM7QUFTRSxzQkFBYyxFQUFFLE1BQU1mLGlCQUFpQixDQUFDZSxJQUFEO0FBVHpDLFNBVU9BLElBQUksQ0FBQ2xDLE1BVlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakJGO0FBQUEsa0JBREYsQ0FwTmlDLENBeVBqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxDQTFSRDs7R0FBTVQ7O0tBQUFBO0FBNFJOLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0h5bW5zL0FsbEh5bW5zL2luZGV4LnRzeD8yNTc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICB1c2VTdGF0ZSxcbiAgUmVhY3RFbGVtZW50LFxuICB1c2VFZmZlY3QsXG4gIFNldFN0YXRlQWN0aW9uLFxuICBEaXNwYXRjaCxcbn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBIeW1uIGZyb20gXCIuL0h5bW5cIjtcbi8vIGltcG9ydCB7IGh5bW5zTGlzdCwgbG9nc0xpc3QgfSBmcm9tIFwiLi9oeW1uc0xpc3RcIjtcbmltcG9ydCBFZGl0TW9kYWwgZnJvbSBcIi4vSHltbi9FZGl0XCI7XG5pbXBvcnQgUGluTW9kYWwgZnJvbSBcIi4vSHltbi9QaW5cIjtcbmltcG9ydCBRdWlja0FkZE1vZGFsIGZyb20gXCIuL0h5bW4vUXVpY2tBZGRcIjtcbmltcG9ydCB7IG11dGF0ZSB9IGZyb20gXCJzd3JcIjsgLy8gdXNlU1dSXG5pbXBvcnQgZmV0Y2hlciBmcm9tIFwiLi4vLi4vLi4vVXRpbHMvZmV0Y2hlclwiO1xuLy8gaW1wb3J0IEFkZEh5bW4gZnJvbSBcIi4uL1NlYXJjaC9BZGRIeW1uXCI7XG5cbmludGVyZmFjZSBFZGl0VmFsdWVzIHtcbiAgbmFtZTogc3RyaW5nO1xuICBudW1iZXI6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIFBhc3N3b3JkVmFsdWVzIHtcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFF1aWNrQWRkVmFsdWVzIHtcbiAgbmFtZTogc3RyaW5nO1xuICBkYXRlOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBIeW1uVmFsdWVzIHtcbiAgbmFtZTogc3RyaW5nO1xuICBudW1iZXI6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIExvZ1ZhbHVlcyB7XG4gIGlkOiBudW1iZXI7XG4gIGxvZ2dlZDogc3RyaW5nO1xuICBieXdobzogc3RyaW5nO1xufVxuXG4vLyBpbnRlcmZhY2UgVmFsdWVzIHtcbi8vICAgbmFtZTogc3RyaW5nO1xuLy8gICBoeW1uX25hbWU6IHN0cmluZztcbi8vICAgaHltbl9udW1iZXI6IG51bWJlcjtcbi8vICAgZGF0ZTogc3RyaW5nO1xuLy8gfVxuXG5pbnRlcmZhY2UgQWxsSHltbnNQcm9wcyB7XG4gIGZpbHRlcjogc3RyaW5nO1xuICBoeW1uRGF0YTogSHltblZhbHVlc1tdO1xuICBsb2dEYXRhOiBMb2dWYWx1ZXNbXTtcbiAgc2V0SHltbnM6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPEh5bW5WYWx1ZXNbXT4+O1xuICBzZXRMb2dzOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxMb2dWYWx1ZXNbXT4+O1xufVxuXG5jb25zdCBBbGxIeW1uczogUmVhY3QuRkM8QWxsSHltbnNQcm9wcz4gPSAoe1xuICBmaWx0ZXIsXG4gIGh5bW5EYXRhLFxuICBsb2dEYXRhLFxuICBzZXRIeW1ucyxcbiAgc2V0TG9ncyxcbn06IEFsbEh5bW5zUHJvcHMpOiBSZWFjdEVsZW1lbnQgPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxIeW1uVmFsdWVzPih7XG4gICAgbmFtZTogXCJcIixcbiAgICBudW1iZXI6IDAsXG4gICAgLy8gbG9nczogW3sgbG9nZ2VkOiBcIlwiLCBieXdobzogXCJcIiB9XSxcbiAgfSk7XG4gIGNvbnN0IFtlZGl0TW9kYWxPcGVuLCBzZXRFZGl0TW9kYWxPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW3Bpbk1vZGFsT3Blbiwgc2V0UGluTW9kYWxPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW3F1aWNrQWRkTW9kYWxPcGVuLCBzZXRRdWlja0FkZE1vZGFsT3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgW2lzUGFzc3dvcmRDb3JyZWN0LCBzZXRJc1Bhc3N3b3JkQ29ycmVjdF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgLy8gY29uc3QgeyBkYXRhOiBoeW1ucyB9ID0gdXNlU1dSKFwiL2FwaS9oeW1uXCIpO1xuICAvLyBjb25zdCB7IGRhdGE6IGxvZ3MgfSA9IHVzZVNXUihcIi9hcGkvbG9nXCIpO1xuXG4gIC8vIGNvbnN0IFthbGxIeW1ucywgc2V0QWxsSHltbnNdID0gdXNlU3RhdGU8SHltblZhbHVlc1tdPihoeW1uc0xpc3QpO1xuICAvLyBjb25zdCBbYWxsTG9ncywgc2V0QWxsTG9nc10gPSB1c2VTdGF0ZTxMb2dWYWx1ZXNbXT4obG9nc0xpc3QpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goXCIvYXBpL2h5bW5cIilcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGh5bW5fZGF0YSkgPT4gc2V0SHltbnMoaHltbl9kYXRhLmh5bW5zKSk7XG4gICAgZmV0Y2goXCIvYXBpL2xvZ1wiKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigobG9nX2RhdGEpID0+IHNldExvZ3MobG9nX2RhdGEubG9ncykpO1xuICB9LCBbc2V0SHltbnMsIHNldExvZ3NdKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGFkZEh5bW4oY3JlYXRlTXV0YXRpb24pO1xuICAvLyB9LCBbY3JlYXRlTXV0YXRpb25dKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIHNldEFsbEh5bW5zKFtcbiAgLy8gICAgIC4uLmFsbEh5bW5zLmZpbHRlcigoaHltbikgPT4gaHltbi5udW1iZXIgIT09IGFkZGVkSHltbi5udW1iZXIpLFxuICAvLyAgICAgYWRkZWRIeW1uLFxuICAvLyAgIF0pO1xuICAvLyAgIGNvbnN0IG5ld0xvZyA9IHtcbiAgLy8gICAgIGlkOiBhZGRlZEh5bW4ubnVtYmVyLFxuICAvLyAgICAgbG9nZ2VkOiBhZGRlZEh5bW4ubG9nZ2VkLFxuICAvLyAgICAgYnl3aG86IGFkZGVkSHltbi5ieXdobyxcbiAgLy8gICB9O1xuICAvLyAgIHNldEFsbExvZ3MoWy4uLmFsbExvZ3MuZmlsdGVyKChsb2cpID0+IGxvZy5pZCAhPT0gbmV3TG9nLmlkKSwgbmV3TG9nXSk7XG4gIC8vIH0sIFthZGRlZEh5bW5dKTtcblxuICAvLyBsZXQgZGF0YUh5bW5zOiBIeW1uVmFsdWVzW10gPSBbXTtcbiAgLy8gbGV0IGRhdGFMb2dzOiBhbnlbXSA9IFtdO1xuXG4gIC8vIGlmIChoeW1ucykge1xuICAvLyAgIGRhdGFIeW1ucyA9IGh5bW5zLmh5bW5zO1xuICAvLyB9XG5cbiAgLy8gaWYgKGxvZ3MpIHtcbiAgLy8gICBkYXRhTG9ncyA9IGxvZ3MubG9ncztcbiAgLy8gfVxuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgZmV0Y2goXCIvYXBpL2h5bW5cIilcbiAgLy8gICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAvLyAgICAgLnRoZW4oKGRhdGEpID0+IGNvbnNvbGUubG9nKGRhdGEpKTtcbiAgLy8gfSwgW10pO1xuXG4gIGNvbnN0IG9wZW5FZGl0TW9kYWwgPSAodmFsdWVzOiBIeW1uVmFsdWVzKSA9PiB7XG4gICAgc2V0UGluTW9kYWxPcGVuKHRydWUpO1xuICAgIHNldERhdGEodmFsdWVzKTtcbiAgfTtcbiAgY29uc3Qgb3BlblF1aWNrQWRkTW9kYWwgPSAodmFsdWVzOiBIeW1uVmFsdWVzKSA9PiB7XG4gICAgc2V0UXVpY2tBZGRNb2RhbE9wZW4odHJ1ZSk7XG4gICAgc2V0RGF0YSh2YWx1ZXMpO1xuICB9O1xuXG4gIC8vIGNvbnN0IGVkaXRIeW1uID0gKHZhbHVlczogRWRpdFZhbHVlcykgPT4ge1xuICAvLyAgIGNvbnN0IHNlbGVjdGVkaHltbiA9IGh5bW5zTGlzdC5maWx0ZXIoXG4gIC8vICAgICAoaHltbikgPT4gaHltbi5udW1iZXIgPT09IGRhdGEubnVtYmVyXG4gIC8vICAgKTtcblxuICAvLyAgIHNlbGVjdGVkaHltblswXS5uYW1lID0gdmFsdWVzLm5hbWU7XG4gIC8vICAgc2VsZWN0ZWRoeW1uWzBdLm51bWJlciA9IHZhbHVlcy5udW1iZXI7XG4gIC8vIH07XG5cbiAgY29uc3QgZWRpdEh5bW4gPSAodmFsdWVzOiBFZGl0VmFsdWVzKSA9PiB7XG4gICAgbXV0YXRlKFwiL2FwaS9oeW1uXCIsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGVkaXRlZEh5bW4gPSBhd2FpdCBmZXRjaGVyKFwiL2FwaS9oeW1uXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIG51bWJlcjogZGF0YS5udW1iZXIsXG4gICAgICAgICAgbmV3TnVtYmVyOiB2YWx1ZXMubnVtYmVyLFxuICAgICAgICAgIG5ld05hbWU6IHZhbHVlcy5uYW1lLFxuICAgICAgICB9KSxcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgbmV3TG9ncyA9IGxvZ0RhdGEuZmlsdGVyKChsb2cpID0+IGxvZy5pZCA9PT0gZGF0YS5udW1iZXIpO1xuXG4gICAgICBpZiAodmFsdWVzLm51bWJlciA9PT0gZGF0YS5udW1iZXIpIHtcbiAgICAgICAgZWRpdGVkSHltbi5udW1iZXIgPSBkYXRhLm51bWJlcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0xvZ3MuZm9yRWFjaCgobmV3TG9nKSA9PiB7XG4gICAgICAgICAgbmV3TG9nLmlkID0gdmFsdWVzLm51bWJlcjtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGVkaXRlZEh5bW4ubmFtZSA9IHZhbHVlcy5uYW1lO1xuICAgICAgc2V0SHltbnMoW1xuICAgICAgICAuLi5oeW1uRGF0YS5maWx0ZXIoKGh5bW4pID0+IGh5bW4ubnVtYmVyICE9PSBkYXRhLm51bWJlciksXG4gICAgICAgIGVkaXRlZEh5bW4sXG4gICAgICBdKTtcbiAgICAgIC8vIG5ld0xvZ3MuZm9yRWFjaCgobmV3TG9nKSA9PiB7XG4gICAgICAvLyAgIHNldExvZ3MoWy4uLmxvZ0RhdGEuZmlsdGVyKChsb2cpID0+IGxvZy5pZCAhPT0gZGF0YS5udW1iZXIpLCBuZXdMb2ddKTtcbiAgICAgIC8vIH0pO1xuICAgICAgLy8gY29uc29sZS5sb2cobG9nRGF0YS5maWx0ZXIoKGxvZykgPT4gbG9nLmlkID09PSB2YWx1ZXMubnVtYmVyKSk7XG4gICAgICAvLyBzZXRMb2dzKFsuLi5sb2dEYXRhLmZpbHRlcigobG9nKSA9PiBsb2cuaWQgIT09IGRhdGEubnVtYmVyKSwgbmV3TG9nc1swXV0pO1xuICAgICAgc2V0TG9ncyhbLi4ubG9nRGF0YS5maWx0ZXIoKGxvZykgPT4gbG9nLmlkICE9PSBkYXRhLm51bWJlcildKTtcbiAgICB9KTtcbiAgICBjbG9zZU1vZGFsKCk7XG4gIH07XG5cbiAgY29uc3QgcXVpY2tBZGRIeW1uID0gKHZhbHVlczogUXVpY2tBZGRWYWx1ZXMpID0+IHtcbiAgICBtdXRhdGUoXCIvYXBpL2xvZ1wiLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBhZGRlZExvZyA9IGF3YWl0IGZldGNoZXIoXCIvYXBpL2xvZ1wiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGlkOiBkYXRhLm51bWJlcixcbiAgICAgICAgICBieXdobzogdmFsdWVzLm5hbWUsXG4gICAgICAgICAgbG9nZ2VkOiB2YWx1ZXMuZGF0ZSxcbiAgICAgICAgfSksXG4gICAgICB9KTtcblxuICAgICAgc2V0TG9ncyhbLi4ubG9nRGF0YSwgYWRkZWRMb2ddKTtcbiAgICB9KTtcbiAgICAvLyB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cbiAgICAvLyBjb25zdCBzZWxlY3RlZGh5bW4gPSBoeW1uc0xpc3QuZmlsdGVyKFxuICAgIC8vICAgKGh5bW4pID0+IGh5bW4ubnVtYmVyID09PSBkYXRhLm51bWJlclxuICAgIC8vICk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RlZGh5bW4pO1xuXG4gICAgLy8gc2VsZWN0ZWRoeW1uWzBdLmxvZ3MucHVzaCh7IGxvZ2dlZDogdmFsdWVzLmRhdGUsIGJ5d2hvOiB2YWx1ZXMubmFtZSB9KTtcbiAgfTtcblxuICAvLyBjb25zdCBmYWtlSHltbnMgPSBoeW1uc0xpc3QuZmlsdGVyKFxuICAvLyAgIChoeW1uKSA9PlxuICAvLyAgICAgaHltbi5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyLnRvTG93ZXJDYXNlKCkpIHx8XG4gIC8vICAgICBoeW1uLm51bWJlci50b1N0cmluZygpLmluY2x1ZGVzKGZpbHRlcilcbiAgLy8gKTtcblxuICAvLyBjb25zb2xlLmxvZyhhbGxIeW1ucyk7XG5cbiAgLy8gY29uc3QgY2hlY2tQYXNzd29yZEZvckVkaXQgPSAodmFsdWVzOiBQYXNzd29yZFZhbHVlcykgPT4ge1xuICAvLyAgIHNldElzUGFzc3dvcmRDb3JyZWN0KHZhbHVlcy5wYXNzd29yZCA9PT0gXCJyYWhhYlwiID8gdHJ1ZSA6IGZhbHNlKTtcbiAgLy8gICBzZXRQaW5Nb2RhbE9wZW4oZmFsc2UpO1xuICAvLyAgIHNldEVkaXRNb2RhbE9wZW4odHJ1ZSk7XG4gIC8vIH07XG4gIC8vIGNvbnN0IGNoZWNrUGFzc3dvcmRGb3JRdWlja0FkZCA9ICh2YWx1ZXM6IFBhc3N3b3JkVmFsdWVzKSA9PiB7XG4gIC8vICAgc2V0SXNQYXNzd29yZENvcnJlY3QodmFsdWVzLnBhc3N3b3JkID09PSBcInJhaGFiXCIgPyB0cnVlIDogZmFsc2UpO1xuICAvLyAgIHNldFBpbk1vZGFsT3BlbihmYWxzZSk7XG4gIC8vICAgc2V0UXVpY2tBZGRNb2RhbE9wZW4odHJ1ZSk7XG4gIC8vIH07XG5cbiAgY29uc3QgY2hlY2tQYXNzd29yZCA9ICh2YWx1ZXM6IFBhc3N3b3JkVmFsdWVzKSA9PiB7XG4gICAgc2V0SXNQYXNzd29yZENvcnJlY3QodmFsdWVzLnBhc3N3b3JkID09PSBcInJhaGFiXCIgPyB0cnVlIDogZmFsc2UpO1xuICAgIHNldFBpbk1vZGFsT3BlbihmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICBzZXRFZGl0TW9kYWxPcGVuKGZhbHNlKTtcbiAgICBzZXRJc1Bhc3N3b3JkQ29ycmVjdChmYWxzZSk7XG4gIH07XG5cbiAgaWYgKGh5bW5EYXRhWzBdLm51bWJlciA9PT0gOTk5IHx8IGxvZ0RhdGFbMF0uaWQgPT09IDk5OSkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8RWRpdE1vZGFsXG4gICAgICAgICAgb3Blbj17ZWRpdE1vZGFsT3Blbn1cbiAgICAgICAgICBoYW5kbGVDbG9zZT17KCkgPT4gc2V0RWRpdE1vZGFsT3BlbihmYWxzZSl9XG4gICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICBlZGl0TXV0YXRpb249e2VkaXRIeW1ufVxuICAgICAgICAvPlxuICAgICAgICA8UXVpY2tBZGRNb2RhbFxuICAgICAgICAgIG9wZW49e3F1aWNrQWRkTW9kYWxPcGVufVxuICAgICAgICAgIGhhbmRsZUNsb3NlPXsoKSA9PiBzZXRRdWlja0FkZE1vZGFsT3BlbihmYWxzZSl9XG4gICAgICAgICAgcXVpY2tBZGRNdXRhdGlvbj17cXVpY2tBZGRIeW1ufVxuICAgICAgICAvPlxuICAgICAgICB7LyogPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgIHthbGxIeW1ucy5tYXAoKGh5bW4pID0+IChcbiAgICAgICAgICAgIDxIeW1uXG4gICAgICAgICAgICAgIG5hbWU9e2h5bW4ubmFtZX1cbiAgICAgICAgICAgICAgbnVtYmVyPXtoeW1uLm51bWJlcn1cbiAgICAgICAgICAgICAgbG9ncz17YWxsTG9ncy5maWx0ZXIoKGxvZykgPT4gbG9nLmlkID09PSBoeW1uLm51bWJlcil9XG4gICAgICAgICAgICAgIGhhbmRsZUVkaXQ9eygpID0+IG9wZW5FZGl0TW9kYWwoaHltbil9XG4gICAgICAgICAgICAgIGhhbmRsZVF1aWNrQWRkPXsoKSA9PiBvcGVuUXVpY2tBZGRNb2RhbChoeW1uKX1cbiAgICAgICAgICAgICAga2V5PXtoeW1uLm51bWJlcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQm94PiAqL31cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cblxuICBjb25zdCBmaWx0ZXJlZEh5bW5zID0gaHltbkRhdGEuZmlsdGVyKFxuICAgIChoeW1uKSA9PlxuICAgICAgaHltbi5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyLnRvTG93ZXJDYXNlKCkpIHx8XG4gICAgICBoeW1uLm51bWJlci50b1N0cmluZygpLmluY2x1ZGVzKGZpbHRlcilcbiAgKTtcblxuICBjb25zdCBmaWx0ZXJlZExvZ3MgPSAoaHltbklkOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBmbG9ncyA9IGxvZ0RhdGEuZmlsdGVyKChsb2cpID0+IGxvZy5pZCA9PT0gaHltbklkKTtcblxuICAgIHJldHVybiBmbG9ncztcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8RWRpdE1vZGFsXG4gICAgICAgIG9wZW49e2VkaXRNb2RhbE9wZW59XG4gICAgICAgIGhhbmRsZUNsb3NlPXsoKSA9PiBzZXRFZGl0TW9kYWxPcGVuKGZhbHNlKX1cbiAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgZWRpdE11dGF0aW9uPXtlZGl0SHltbn1cbiAgICAgIC8+XG4gICAgICA8UGluTW9kYWxcbiAgICAgICAgb3Blbj17cGluTW9kYWxPcGVufVxuICAgICAgICBoYW5kbGVDbG9zZT17KCkgPT4gc2V0UGluTW9kYWxPcGVuKGZhbHNlKX1cbiAgICAgICAgaXNDb3JyZWN0PXsodmFsdWVzKSA9PiBjaGVja1Bhc3N3b3JkKHZhbHVlcyl9XG4gICAgICAvPlxuICAgICAgPFF1aWNrQWRkTW9kYWxcbiAgICAgICAgb3Blbj17cXVpY2tBZGRNb2RhbE9wZW59XG4gICAgICAgIGhhbmRsZUNsb3NlPXsoKSA9PiBzZXRRdWlja0FkZE1vZGFsT3BlbihmYWxzZSl9XG4gICAgICAgIHF1aWNrQWRkTXV0YXRpb249e3F1aWNrQWRkSHltbn1cbiAgICAgIC8+XG4gICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgIHtmaWx0ZXJlZEh5bW5zLnNvcnQoKS5tYXAoKGh5bW4pID0+IChcbiAgICAgICAgICA8SHltblxuICAgICAgICAgICAgbmFtZT17aHltbi5uYW1lfVxuICAgICAgICAgICAgbnVtYmVyPXtoeW1uLm51bWJlcn1cbiAgICAgICAgICAgIGxvZ3M9e1xuICAgICAgICAgICAgICAvKmFsbExvZ3MuZmlsdGVyKFxuICAgICAgICAgICAgICAgIChsb2cpID0+IGxvZy5pZCA9PT0gaHltbi5udW1iZXJcbiAgICAgICAgICAgICAgKSovIGZpbHRlcmVkTG9ncyhoeW1uLm51bWJlcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhhbmRsZUVkaXQ9eygpID0+IG9wZW5FZGl0TW9kYWwoaHltbil9XG4gICAgICAgICAgICBoYW5kbGVRdWlja0FkZD17KCkgPT4gb3BlblF1aWNrQWRkTW9kYWwoaHltbil9XG4gICAgICAgICAgICBrZXk9e2h5bW4ubnVtYmVyfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9Cb3g+XG4gICAgPC8+XG4gICk7XG5cbiAgLy8gcmV0dXJuIChcbiAgLy8gICA8PlxuICAvLyAgICAgPEVkaXRNb2RhbFxuICAvLyAgICAgICBvcGVuPXtlZGl0TW9kYWxPcGVufVxuICAvLyAgICAgICBoYW5kbGVDbG9zZT17KCkgPT4gc2V0RWRpdE1vZGFsT3BlbihmYWxzZSl9XG4gIC8vICAgICAgIGRhdGE9e2RhdGF9XG4gIC8vICAgICAgIGVkaXRNdXRhdGlvbj17ZWRpdEh5bW59XG4gIC8vICAgICAvPlxuICAvLyAgICAgPFF1aWNrQWRkTW9kYWxcbiAgLy8gICAgICAgb3Blbj17cXVpY2tBZGRNb2RhbE9wZW59XG4gIC8vICAgICAgIGhhbmRsZUNsb3NlPXsoKSA9PiBzZXRRdWlja0FkZE1vZGFsT3BlbihmYWxzZSl9XG4gIC8vICAgICAgIHF1aWNrQWRkTXV0YXRpb249e3F1aWNrQWRkSHltbn1cbiAgLy8gICAgIC8+XG4gIC8vICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gIC8vICAgICAgIHtmYWtlSHltbnMuc29ydCgpLm1hcCgoaHltbikgPT4gKFxuICAvLyAgICAgICAgIDxIeW1uXG4gIC8vICAgICAgICAgICBuYW1lPXtoeW1uLm5hbWV9XG4gIC8vICAgICAgICAgICBudW1iZXI9e2h5bW4ubnVtYmVyfVxuICAvLyAgICAgICAgICAgbG9ncz17aHltbi5sb2dzfVxuICAvLyAgICAgICAgICAgaGFuZGxlRWRpdD17KCkgPT4gb3BlbkVkaXRNb2RhbChoeW1uKX1cbiAgLy8gICAgICAgICAgIGhhbmRsZVF1aWNrQWRkPXsoKSA9PiBvcGVuUXVpY2tBZGRNb2RhbChoeW1uKX1cbiAgLy8gICAgICAgICAgIGtleT17aHltbi5udW1iZXJ9XG4gIC8vICAgICAgICAgLz5cbiAgLy8gICAgICAgKSl9XG4gIC8vICAgICA8L0JveD5cbiAgLy8gICA8Lz5cbiAgLy8gKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFsbEh5bW5zO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCb3giLCJIeW1uIiwiRWRpdE1vZGFsIiwiUGluTW9kYWwiLCJRdWlja0FkZE1vZGFsIiwibXV0YXRlIiwiZmV0Y2hlciIsIkFsbEh5bW5zIiwiZmlsdGVyIiwiaHltbkRhdGEiLCJsb2dEYXRhIiwic2V0SHltbnMiLCJzZXRMb2dzIiwiZGF0YSIsInNldERhdGEiLCJuYW1lIiwibnVtYmVyIiwiZWRpdE1vZGFsT3BlbiIsInNldEVkaXRNb2RhbE9wZW4iLCJwaW5Nb2RhbE9wZW4iLCJzZXRQaW5Nb2RhbE9wZW4iLCJxdWlja0FkZE1vZGFsT3BlbiIsInNldFF1aWNrQWRkTW9kYWxPcGVuIiwiaXNQYXNzd29yZENvcnJlY3QiLCJzZXRJc1Bhc3N3b3JkQ29ycmVjdCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImh5bW5fZGF0YSIsImh5bW5zIiwibG9nX2RhdGEiLCJsb2dzIiwib3BlbkVkaXRNb2RhbCIsInZhbHVlcyIsIm9wZW5RdWlja0FkZE1vZGFsIiwiZWRpdEh5bW4iLCJlZGl0ZWRIeW1uIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibmV3TnVtYmVyIiwibmV3TmFtZSIsIm5ld0xvZ3MiLCJsb2ciLCJpZCIsImZvckVhY2giLCJuZXdMb2ciLCJoeW1uIiwiY2xvc2VNb2RhbCIsInF1aWNrQWRkSHltbiIsImFkZGVkTG9nIiwiYnl3aG8iLCJsb2dnZWQiLCJkYXRlIiwiY2hlY2tQYXNzd29yZCIsInBhc3N3b3JkIiwiZmlsdGVyZWRIeW1ucyIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ0b1N0cmluZyIsImZpbHRlcmVkTG9ncyIsImh5bW5JZCIsImZsb2dzIiwic29ydCIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Hymns/AllHymns/index.tsx\n");

/***/ })

});