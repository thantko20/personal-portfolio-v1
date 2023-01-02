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

/***/ "./src/components/Works/Projects.js":
/*!******************************************!*\
  !*** ./src/components/Works/Projects.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_marco_webdev_personal_portfolio_v1_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/go */ \"./node_modules/react-icons/go/index.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/marco/webdev/personal-portfolio-v1/src/components/Works/Projects.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_home_marco_webdev_personal_portfolio_v1_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\n\n\nconst Tag = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].span.withConfig({\n  displayName: \"Projects__Tag\",\n  componentId: \"sc-ido8hb-0\"\n})([\"background-color:rgba(255,255,255,0.1);color:\", \";font-size:0.75rem;font-weight:500;margin-top:-1rem;padding:0.25rem 0.5rem;border-radius:9999px;\"], _ref => {\n  let {\n    theme\n  } = _ref;\n  return theme.colors.primary['100'];\n});\n_c = Tag;\nconst TagsContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Projects__TagsContainer\",\n  componentId: \"sc-ido8hb-1\"\n})([\"display:flex;flex-wrap:wrap;justify-content:start;gap:0.5rem;row-gap:1.375rem;\"]);\n_c2 = TagsContainer;\nconst ProjectImage = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Projects__ProjectImage\",\n  componentId: \"sc-ido8hb-2\"\n})([\"flex:1;width:100%;aspect-ratio:2/1;\"]);\nconst ProjectTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h3.withConfig({\n  displayName: \"Projects__ProjectTitle\",\n  componentId: \"sc-ido8hb-3\"\n})([\"font-size:1.875rem;font-weight:500;\"]);\n_c3 = ProjectTitle;\nconst ProjectDescription = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].p.withConfig({\n  displayName: \"Projects__ProjectDescription\",\n  componentId: \"sc-ido8hb-4\"\n})([\"font-size:1rem;margin-bottom:2rem;color:\", \";max-width:45em;\"], _ref2 => {\n  let {\n    theme\n  } = _ref2;\n  return theme.colors.neutral['400'];\n});\n_c4 = ProjectDescription;\nconst Link = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].a.withConfig({\n  displayName: \"Projects__Link\",\n  componentId: \"sc-ido8hb-5\"\n})([\"color:white;text-decoration:underline;font-weight:500;transition:color 0.3s ease-in-out;display:flex;align-items:center;gap:0.25rem;&:hover{color:\", \";}\"], _ref3 => {\n  let {\n    theme\n  } = _ref3;\n  return theme.colors.primary['400'];\n});\n_c5 = Link;\nconst LinksContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Projects__LinksContainer\",\n  componentId: \"sc-ido8hb-6\"\n})([\"display:flex;gap:1.5rem;width:max-content;margin-top:auto;\"]);\n_c6 = LinksContainer;\nconst ProjectDetail = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Projects__ProjectDetail\",\n  componentId: \"sc-ido8hb-7\"\n})([\"padding:1.375rem;flex:2;display:flex;gap:1rem;flex-direction:column;\"]);\n_c7 = ProjectDetail;\nconst StyledProject = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div).withConfig({\n  displayName: \"Projects__StyledProject\",\n  componentId: \"sc-ido8hb-8\"\n})([\"width:100%;min-height:15rem;background-color:rgba(0,0,0,0.6);display:flex;flex-direction:column;border-radius:1.25rem;overflow:hidden;@media (min-width:\", \"){flex-direction:row;\", \"}\"], _ref4 => {\n  let {\n    theme\n  } = _ref4;\n  return theme.breakpoints.sm;\n}, _ref5 => {\n  let {\n    orientation\n  } = _ref5;\n  return orientation === 'right' && (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css)([\"text-align:right;flex-direction:row-reverse;\", \"{align-items:flex-end;}\"], ProjectDetail);\n});\n_c8 = StyledProject;\nconst StyledProjectsContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Projects__StyledProjectsContainer\",\n  componentId: \"sc-ido8hb-9\"\n})([\"display:flex;flex-direction:column;gap:3rem;\"]);\n_c9 = StyledProjectsContainer;\nconst projectVariants = {\n  offscreen: {\n    opacity: 0,\n    y: 20\n  },\n  onscreen: {\n    opacity: 1,\n    y: 0,\n    transition: {\n      duration: 0.3,\n      delay: 0.2\n    }\n  }\n};\n\nconst Project = props => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(StyledProject, {\n    variants: projectVariants,\n    initial: \"offscreen\",\n    whileInView: \"onscreen\",\n    orientation: props.orientation,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n      src: props.imgURL,\n      alt: props.name,\n      style: {\n        objectFit: 'contain',\n        width: '100%',\n        aspectRatio: 2 / 1,\n        flex: 1\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(ProjectDetail, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(ProjectTitle, {\n        children: props.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 137,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(TagsContainer, {\n        children: props.tags.map(tag => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Tag, {\n          children: tag\n        }, tag, false, {\n          fileName: _jsxFileName,\n          lineNumber: 140,\n          columnNumber: 13\n        }, undefined))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 138,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(ProjectDescription, {\n        children: props.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 143,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(LinksContainer, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Link, {\n          href: props.repoURL,\n          target: \"_blank\",\n          children: [\"View Repo \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillGithub, {\n            size: 20\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 146,\n            columnNumber: 24\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 145,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Link, {\n          href: props.liveURL,\n          target: \"_blank\",\n          children: [\"Live Preview \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_go__WEBPACK_IMPORTED_MODULE_6__.GoLinkExternal, {\n            size: 20\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 149,\n            columnNumber: 27\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 148,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 144,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 120,\n    columnNumber: 5\n  }, undefined);\n};\n\n_c10 = Project;\n\nconst ProjectsContainer = _ref6 => {\n  let {\n    projects\n  } = _ref6;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(StyledProjectsContainer, {\n    children: projects.map((project, idx) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Project, _objectSpread({\n      orientation: idx % 2 === 0 ? 'left' : 'right'\n    }, project), idx, false, {\n      fileName: _jsxFileName,\n      lineNumber: 161,\n      columnNumber: 9\n    }, undefined))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 159,\n    columnNumber: 5\n  }, undefined);\n};\n\n_c11 = ProjectsContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsContainer);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;\n\n$RefreshReg$(_c, \"Tag\");\n$RefreshReg$(_c2, \"TagsContainer\");\n$RefreshReg$(_c3, \"ProjectTitle\");\n$RefreshReg$(_c4, \"ProjectDescription\");\n$RefreshReg$(_c5, \"Link\");\n$RefreshReg$(_c6, \"LinksContainer\");\n$RefreshReg$(_c7, \"ProjectDetail\");\n$RefreshReg$(_c8, \"StyledProject\");\n$RefreshReg$(_c9, \"StyledProjectsContainer\");\n$RefreshReg$(_c10, \"Project\");\n$RefreshReg$(_c11, \"ProjectsContainer\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Xb3Jrcy9Qcm9qZWN0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTU0sR0FBRyxHQUFHTCx5RUFBSDtFQUFBO0VBQUE7QUFBQSwwSkFFRTtFQUFBLElBQUM7SUFBRU87RUFBRixDQUFEO0VBQUEsT0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLE9BQWIsQ0FBcUIsS0FBckIsQ0FBZjtBQUFBLENBRkYsQ0FBVDtLQUFNSjtBQVVOLE1BQU1LLGFBQWEsR0FBR1Ysd0VBQUg7RUFBQTtFQUFBO0FBQUEsc0ZBQW5CO01BQU1VO0FBUU4sTUFBTUUsWUFBWSxHQUFHWix3RUFBSDtFQUFBO0VBQUE7QUFBQSwyQ0FBbEI7QUFNQSxNQUFNYSxZQUFZLEdBQUdiLHVFQUFIO0VBQUE7RUFBQTtBQUFBLDJDQUFsQjtNQUFNYTtBQUtOLE1BQU1FLGtCQUFrQixHQUFHZixzRUFBSDtFQUFBO0VBQUE7QUFBQSxxRUFHYjtFQUFBLElBQUM7SUFBRU87RUFBRixDQUFEO0VBQUEsT0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFTLE9BQWIsQ0FBcUIsS0FBckIsQ0FBZjtBQUFBLENBSGEsQ0FBeEI7TUFBTUY7QUFPTixNQUFNRyxJQUFJLEdBQUdsQixzRUFBSDtFQUFBO0VBQUE7QUFBQSxpS0FXRztFQUFBLElBQUM7SUFBRU87RUFBRixDQUFEO0VBQUEsT0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLE9BQWIsQ0FBcUIsS0FBckIsQ0FBZjtBQUFBLENBWEgsQ0FBVjtNQUFNUztBQWVOLE1BQU1FLGNBQWMsR0FBR3BCLHdFQUFIO0VBQUE7RUFBQTtBQUFBLGtFQUFwQjtNQUFNb0I7QUFPTixNQUFNQyxhQUFhLEdBQUdyQix3RUFBSDtFQUFBO0VBQUE7QUFBQSw0RUFBbkI7TUFBTXFCO0FBUU4sTUFBTUMsYUFBYSxHQUFHdEIsNkRBQU0sQ0FBQ0QscURBQUQsQ0FBVDtFQUFBO0VBQUE7QUFBQSwrTEFTSTtFQUFBLElBQUM7SUFBRVE7RUFBRixDQUFEO0VBQUEsT0FBZUEsS0FBSyxDQUFDZ0IsV0FBTixDQUFrQkMsRUFBakM7QUFBQSxDQVRKLEVBWWI7RUFBQSxJQUFDO0lBQUVDO0VBQUYsQ0FBRDtFQUFBLE9BQ0FBLFdBQVcsS0FBSyxPQUFoQixJQUNBeEIsc0RBREEsOEVBSUlvQixhQUpKLENBREE7QUFBQSxDQVphLENBQW5CO01BQU1DO0FBd0JOLE1BQU1JLHVCQUF1QixHQUFHMUIsd0VBQUg7RUFBQTtFQUFBO0FBQUEsb0RBQTdCO01BQU0wQjtBQU1OLE1BQU1DLGVBQWUsR0FBRztFQUN0QkMsU0FBUyxFQUFFO0lBQ1RDLE9BQU8sRUFBRSxDQURBO0lBRVRDLENBQUMsRUFBRTtFQUZNLENBRFc7RUFLdEJDLFFBQVEsRUFBRTtJQUNSRixPQUFPLEVBQUUsQ0FERDtJQUVSQyxDQUFDLEVBQUUsQ0FGSztJQUdSRSxVQUFVLEVBQUU7TUFDVkMsUUFBUSxFQUFFLEdBREE7TUFFVkMsS0FBSyxFQUFFO0lBRkc7RUFISjtBQUxZLENBQXhCOztBQWVBLE1BQU1DLE9BQU8sR0FBSUMsS0FBRCxJQUFXO0VBQ3pCLG9CQUNFLDhEQUFDLGFBQUQ7SUFDRSxRQUFRLEVBQUVULGVBRFo7SUFFRSxPQUFPLEVBQUMsV0FGVjtJQUdFLFdBQVcsRUFBQyxVQUhkO0lBSUUsV0FBVyxFQUFFUyxLQUFLLENBQUNYLFdBSnJCO0lBQUEsd0JBTUUsOERBQUMsbURBQUQ7TUFDRSxHQUFHLEVBQUVXLEtBQUssQ0FBQ0MsTUFEYjtNQUVFLEdBQUcsRUFBRUQsS0FBSyxDQUFDRSxJQUZiO01BR0UsS0FBSyxFQUFFO1FBQ0xDLFNBQVMsRUFBRSxTQUROO1FBRUxDLEtBQUssRUFBRSxNQUZGO1FBR0xDLFdBQVcsRUFBRSxJQUFJLENBSFo7UUFJTEMsSUFBSSxFQUFFO01BSkQ7SUFIVDtNQUFBO01BQUE7TUFBQTtJQUFBLGFBTkYsZUFnQkUsOERBQUMsYUFBRDtNQUFBLHdCQUNFLDhEQUFDLFlBQUQ7UUFBQSxVQUFlTixLQUFLLENBQUNFO01BQXJCO1FBQUE7UUFBQTtRQUFBO01BQUEsYUFERixlQUVFLDhEQUFDLGFBQUQ7UUFBQSxVQUNHRixLQUFLLENBQUNPLElBQU4sQ0FBV0MsR0FBWCxDQUFnQkMsR0FBRCxpQkFDZCw4REFBQyxHQUFEO1VBQUEsVUFBZ0JBO1FBQWhCLEdBQVVBLEdBQVY7VUFBQTtVQUFBO1VBQUE7UUFBQSxhQUREO01BREg7UUFBQTtRQUFBO1FBQUE7TUFBQSxhQUZGLGVBT0UsOERBQUMsa0JBQUQ7UUFBQSxVQUFxQlQsS0FBSyxDQUFDVTtNQUEzQjtRQUFBO1FBQUE7UUFBQTtNQUFBLGFBUEYsZUFRRSw4REFBQyxjQUFEO1FBQUEsd0JBQ0UsOERBQUMsSUFBRDtVQUFNLElBQUksRUFBRVYsS0FBSyxDQUFDVyxPQUFsQjtVQUEyQixNQUFNLEVBQUMsUUFBbEM7VUFBQSxzQ0FDYSw4REFBQyx3REFBRDtZQUFjLElBQUksRUFBRTtVQUFwQjtZQUFBO1lBQUE7WUFBQTtVQUFBLGFBRGI7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLGFBREYsZUFJRSw4REFBQyxJQUFEO1VBQU0sSUFBSSxFQUFFWCxLQUFLLENBQUNZLE9BQWxCO1VBQTJCLE1BQU0sRUFBQyxRQUFsQztVQUFBLHlDQUNnQiw4REFBQywwREFBRDtZQUFnQixJQUFJLEVBQUU7VUFBdEI7WUFBQTtZQUFBO1lBQUE7VUFBQSxhQURoQjtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsYUFKRjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsYUFSRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsYUFoQkY7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLGFBREY7QUFvQ0QsQ0FyQ0Q7O09BQU1iOztBQXVDTixNQUFNYyxpQkFBaUIsR0FBRyxTQUFrQjtFQUFBLElBQWpCO0lBQUVDO0VBQUYsQ0FBaUI7RUFDMUMsb0JBQ0UsOERBQUMsdUJBQUQ7SUFBQSxVQUNHQSxRQUFRLENBQUNOLEdBQVQsQ0FBYSxDQUFDTyxPQUFELEVBQVVDLEdBQVYsa0JBQ1osOERBQUMsT0FBRDtNQUVFLFdBQVcsRUFBRUEsR0FBRyxHQUFHLENBQU4sS0FBWSxDQUFaLEdBQWdCLE1BQWhCLEdBQXlCO0lBRnhDLEdBR01ELE9BSE4sR0FDT0MsR0FEUDtNQUFBO01BQUE7TUFBQTtJQUFBLGFBREQ7RUFESDtJQUFBO0lBQUE7SUFBQTtFQUFBLGFBREY7QUFXRCxDQVpEOztPQUFNSDtBQWNOLCtEQUFlQSxpQkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Xb3Jrcy9Qcm9qZWN0cy5qcz9hZGY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBBaUZpbGxHaXRodWIgfSBmcm9tICdyZWFjdC1pY29ucy9haSc7XG5pbXBvcnQgeyBHb0xpbmtFeHRlcm5hbCB9IGZyb20gJ3JlYWN0LWljb25zL2dvJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuY29uc3QgVGFnID0gc3R5bGVkLnNwYW5gXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnlbJzEwMCddfTtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiAtMXJlbTtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbmA7XG5cbmNvbnN0IFRhZ3NDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIGdhcDogMC41cmVtO1xuICByb3ctZ2FwOiAxLjM3NXJlbTtcbmA7XG5cbmNvbnN0IFByb2plY3RJbWFnZSA9IHN0eWxlZC5kaXZgXG4gIGZsZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBhc3BlY3QtcmF0aW86IDIvMTtcbmA7XG5cbmNvbnN0IFByb2plY3RUaXRsZSA9IHN0eWxlZC5oM2BcbiAgZm9udC1zaXplOiAxLjg3NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbmA7XG5cbmNvbnN0IFByb2plY3REZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5uZXV0cmFsWyc0MDAnXX07XG4gIG1heC13aWR0aDogNDVlbTtcbmA7XG5cbmNvbnN0IExpbmsgPSBzdHlsZWQuYWBcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluLW91dDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuMjVyZW07XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnlbJzQwMCddfTtcbiAgfVxuYDtcblxuY29uc3QgTGlua3NDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEuNXJlbTtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuYDtcblxuY29uc3QgUHJvamVjdERldGFpbCA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDEuMzc1cmVtO1xuICBmbGV4OiAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5gO1xuXG5jb25zdCBTdHlsZWRQcm9qZWN0ID0gc3R5bGVkKG1vdGlvbi5kaXYpYFxuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyLXJhZGl1czogMS4yNXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbX0pIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAgJHsoeyBvcmllbnRhdGlvbiB9KSA9PlxuICAgICAgb3JpZW50YXRpb24gPT09ICdyaWdodCcgJiZcbiAgICAgIGNzc2BcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICAgICAgJHtQcm9qZWN0RGV0YWlsfSB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICB9XG4gICAgICBgfVxuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRQcm9qZWN0c0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogM3JlbTtcbmA7XG5cbmNvbnN0IHByb2plY3RWYXJpYW50cyA9IHtcbiAgb2Zmc2NyZWVuOiB7XG4gICAgb3BhY2l0eTogMCxcbiAgICB5OiAyMCxcbiAgfSxcbiAgb25zY3JlZW46IHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIHk6IDAsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgIGRlbGF5OiAwLjIsXG4gICAgfSxcbiAgfSxcbn07XG5cbmNvbnN0IFByb2plY3QgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkUHJvamVjdFxuICAgICAgdmFyaWFudHM9e3Byb2plY3RWYXJpYW50c31cbiAgICAgIGluaXRpYWw9J29mZnNjcmVlbidcbiAgICAgIHdoaWxlSW5WaWV3PSdvbnNjcmVlbidcbiAgICAgIG9yaWVudGF0aW9uPXtwcm9wcy5vcmllbnRhdGlvbn1cbiAgICA+XG4gICAgICA8SW1hZ2VcbiAgICAgICAgc3JjPXtwcm9wcy5pbWdVUkx9XG4gICAgICAgIGFsdD17cHJvcHMubmFtZX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBvYmplY3RGaXQ6ICdjb250YWluJyxcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgIGFzcGVjdFJhdGlvOiAyIC8gMSxcbiAgICAgICAgICBmbGV4OiAxLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxQcm9qZWN0RGV0YWlsPlxuICAgICAgICA8UHJvamVjdFRpdGxlPntwcm9wcy5uYW1lfTwvUHJvamVjdFRpdGxlPlxuICAgICAgICA8VGFnc0NvbnRhaW5lcj5cbiAgICAgICAgICB7cHJvcHMudGFncy5tYXAoKHRhZykgPT4gKFxuICAgICAgICAgICAgPFRhZyBrZXk9e3RhZ30+e3RhZ308L1RhZz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9UYWdzQ29udGFpbmVyPlxuICAgICAgICA8UHJvamVjdERlc2NyaXB0aW9uPntwcm9wcy5kZXNjcmlwdGlvbn08L1Byb2plY3REZXNjcmlwdGlvbj5cbiAgICAgICAgPExpbmtzQ29udGFpbmVyPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb3BzLnJlcG9VUkx9IHRhcmdldD0nX2JsYW5rJz5cbiAgICAgICAgICAgIFZpZXcgUmVwbyB7PEFpRmlsbEdpdGh1YiBzaXplPXsyMH0gLz59XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb3BzLmxpdmVVUkx9IHRhcmdldD0nX2JsYW5rJz5cbiAgICAgICAgICAgIExpdmUgUHJldmlldyB7PEdvTGlua0V4dGVybmFsIHNpemU9ezIwfSAvPn1cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvTGlua3NDb250YWluZXI+XG4gICAgICA8L1Byb2plY3REZXRhaWw+XG4gICAgPC9TdHlsZWRQcm9qZWN0PlxuICApO1xufTtcblxuY29uc3QgUHJvamVjdHNDb250YWluZXIgPSAoeyBwcm9qZWN0cyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFN0eWxlZFByb2plY3RzQ29udGFpbmVyPlxuICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCwgaWR4KSA9PiAoXG4gICAgICAgIDxQcm9qZWN0XG4gICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgb3JpZW50YXRpb249e2lkeCAlIDIgPT09IDAgPyAnbGVmdCcgOiAncmlnaHQnfVxuICAgICAgICAgIHsuLi5wcm9qZWN0fVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC9TdHlsZWRQcm9qZWN0c0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzQ29udGFpbmVyO1xuIl0sIm5hbWVzIjpbIm1vdGlvbiIsInN0eWxlZCIsImNzcyIsIkFpRmlsbEdpdGh1YiIsIkdvTGlua0V4dGVybmFsIiwiSW1hZ2UiLCJUYWciLCJzcGFuIiwidGhlbWUiLCJjb2xvcnMiLCJwcmltYXJ5IiwiVGFnc0NvbnRhaW5lciIsImRpdiIsIlByb2plY3RJbWFnZSIsIlByb2plY3RUaXRsZSIsImgzIiwiUHJvamVjdERlc2NyaXB0aW9uIiwicCIsIm5ldXRyYWwiLCJMaW5rIiwiYSIsIkxpbmtzQ29udGFpbmVyIiwiUHJvamVjdERldGFpbCIsIlN0eWxlZFByb2plY3QiLCJicmVha3BvaW50cyIsInNtIiwib3JpZW50YXRpb24iLCJTdHlsZWRQcm9qZWN0c0NvbnRhaW5lciIsInByb2plY3RWYXJpYW50cyIsIm9mZnNjcmVlbiIsIm9wYWNpdHkiLCJ5Iiwib25zY3JlZW4iLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsIlByb2plY3QiLCJwcm9wcyIsImltZ1VSTCIsIm5hbWUiLCJvYmplY3RGaXQiLCJ3aWR0aCIsImFzcGVjdFJhdGlvIiwiZmxleCIsInRhZ3MiLCJtYXAiLCJ0YWciLCJkZXNjcmlwdGlvbiIsInJlcG9VUkwiLCJsaXZlVVJMIiwiUHJvamVjdHNDb250YWluZXIiLCJwcm9qZWN0cyIsInByb2plY3QiLCJpZHgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Works/Projects.js\n"));

/***/ })

});