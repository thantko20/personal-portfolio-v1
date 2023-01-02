"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/ScrollProvider.js":
/*!******************************************!*\
  !*** ./src/components/ScrollProvider.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"useScroll\": () => (/* binding */ useScroll)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/marco/webdev/personal-portfolio-v1/src/components/ScrollProvider.js\";\n\n\nconst ScrollProviderContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({\n  topRef: null,\n  heroRef: null,\n  technologiesRef: null,\n  worksRef: null,\n  aboutRef: null,\n  contactRef: null,\n  scrollTo: () => {}\n});\n\nconst ScrollProvider = ({\n  children\n}) => {\n  const topRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const heroRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const technologiesRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const worksRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const aboutRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const contactRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n\n  const scrollTo = ref => {\n    if (!ref.current) return;\n    ref.current.scrollIntoView({\n      behavior: 'smooth'\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ScrollProviderContext.Provider, {\n    value: {\n      topRef,\n      heroRef,\n      technologiesRef,\n      worksRef,\n      aboutRef,\n      contactRef,\n      scrollTo\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, undefined);\n};\n\nconst useScroll = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ScrollProviderContext);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollProvider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TY3JvbGxQcm92aWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUcscUJBQXFCLGdCQUFHSCxvREFBYSxDQUFDO0VBQzFDSSxNQUFNLEVBQUUsSUFEa0M7RUFFMUNDLE9BQU8sRUFBRSxJQUZpQztFQUcxQ0MsZUFBZSxFQUFFLElBSHlCO0VBSTFDQyxRQUFRLEVBQUUsSUFKZ0M7RUFLMUNDLFFBQVEsRUFBRSxJQUxnQztFQU0xQ0MsVUFBVSxFQUFFLElBTjhCO0VBTzFDQyxRQUFRLEVBQUUsTUFBTSxDQUFFO0FBUHdCLENBQUQsQ0FBM0M7O0FBVUEsTUFBTUMsY0FBYyxHQUFHLENBQUM7RUFBRUM7QUFBRixDQUFELEtBQWtCO0VBQ3ZDLE1BQU1SLE1BQU0sR0FBR0YsNkNBQU0sQ0FBQyxJQUFELENBQXJCO0VBQ0EsTUFBTUcsT0FBTyxHQUFHSCw2Q0FBTSxDQUFDLElBQUQsQ0FBdEI7RUFDQSxNQUFNSSxlQUFlLEdBQUdKLDZDQUFNLENBQUMsSUFBRCxDQUE5QjtFQUNBLE1BQU1LLFFBQVEsR0FBR0wsNkNBQU0sQ0FBQyxJQUFELENBQXZCO0VBQ0EsTUFBTU0sUUFBUSxHQUFHTiw2Q0FBTSxDQUFDLElBQUQsQ0FBdkI7RUFDQSxNQUFNTyxVQUFVLEdBQUdQLDZDQUFNLENBQUMsSUFBRCxDQUF6Qjs7RUFFQSxNQUFNUSxRQUFRLEdBQUlHLEdBQUQsSUFBUztJQUN4QixJQUFJLENBQUNBLEdBQUcsQ0FBQ0MsT0FBVCxFQUFrQjtJQUNsQkQsR0FBRyxDQUFDQyxPQUFKLENBQVlDLGNBQVosQ0FBMkI7TUFBRUMsUUFBUSxFQUFFO0lBQVosQ0FBM0I7RUFDRCxDQUhEOztFQUtBLG9CQUNFLDhEQUFDLHFCQUFELENBQXVCLFFBQXZCO0lBQ0UsS0FBSyxFQUFFO01BQ0xaLE1BREs7TUFFTEMsT0FGSztNQUdMQyxlQUhLO01BSUxDLFFBSks7TUFLTEMsUUFMSztNQU1MQyxVQU5LO01BT0xDO0lBUEssQ0FEVDtJQUFBLFVBV0dFO0VBWEg7SUFBQTtJQUFBO0lBQUE7RUFBQSxhQURGO0FBZUQsQ0E1QkQ7O0FBOEJPLE1BQU1LLFNBQVMsR0FBRyxNQUFNaEIsaURBQVUsQ0FBQ0UscUJBQUQsQ0FBbEM7QUFFUCxpRUFBZVEsY0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby12MS8uL3NyYy9jb21wb25lbnRzL1Njcm9sbFByb3ZpZGVyLmpzPzRmZjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTY3JvbGxQcm92aWRlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcbiAgdG9wUmVmOiBudWxsLFxuICBoZXJvUmVmOiBudWxsLFxuICB0ZWNobm9sb2dpZXNSZWY6IG51bGwsXG4gIHdvcmtzUmVmOiBudWxsLFxuICBhYm91dFJlZjogbnVsbCxcbiAgY29udGFjdFJlZjogbnVsbCxcbiAgc2Nyb2xsVG86ICgpID0+IHt9LFxufSk7XG5cbmNvbnN0IFNjcm9sbFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCB0b3BSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGhlcm9SZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHRlY2hub2xvZ2llc1JlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3Qgd29ya3NSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGFib3V0UmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBjb250YWN0UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IHNjcm9sbFRvID0gKHJlZikgPT4ge1xuICAgIGlmICghcmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICByZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxTY3JvbGxQcm92aWRlckNvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIHRvcFJlZixcbiAgICAgICAgaGVyb1JlZixcbiAgICAgICAgdGVjaG5vbG9naWVzUmVmLFxuICAgICAgICB3b3Jrc1JlZixcbiAgICAgICAgYWJvdXRSZWYsXG4gICAgICAgIGNvbnRhY3RSZWYsXG4gICAgICAgIHNjcm9sbFRvLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9TY3JvbGxQcm92aWRlckNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlU2Nyb2xsID0gKCkgPT4gdXNlQ29udGV4dChTY3JvbGxQcm92aWRlckNvbnRleHQpO1xuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxQcm92aWRlcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVJlZiIsIlNjcm9sbFByb3ZpZGVyQ29udGV4dCIsInRvcFJlZiIsImhlcm9SZWYiLCJ0ZWNobm9sb2dpZXNSZWYiLCJ3b3Jrc1JlZiIsImFib3V0UmVmIiwiY29udGFjdFJlZiIsInNjcm9sbFRvIiwiU2Nyb2xsUHJvdmlkZXIiLCJjaGlsZHJlbiIsInJlZiIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwidXNlU2Nyb2xsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ScrollProvider.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ \"./src/theme/index.js\");\n/* harmony import */ var _components_ScrollProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ScrollProvider */ \"./src/components/ScrollProvider.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/home/marco/webdev/personal-portfolio-v1/src/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {\n      theme: _theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"meta\", {\n          name: \"viewport\",\n          content: \"width=device-width, initial-scale=1\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"meta\", {\n          name: \"theme-color\",\n          content: \"#000000\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"meta\", {\n          name: \"description\",\n          content: \"A fullstack developer based in Myanmar who loves building web apps.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"title\", {\n          children: \"Thant Ko\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_theme__WEBPACK_IMPORTED_MODULE_2__.GlobalStyles, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_ScrollProvider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFZSxTQUFTSyxLQUFULENBQWU7RUFBRUMsU0FBRjtFQUFhQztBQUFiLENBQWYsRUFBeUM7RUFDdEQsb0JBQ0U7SUFBQSx1QkFDRSw4REFBQyw0REFBRDtNQUFlLEtBQUssRUFBRUwsOENBQXRCO01BQUEsd0JBQ0UsOERBQUMsa0RBQUQ7UUFBQSx3QkFDRTtVQUFNLElBQUksRUFBQyxVQUFYO1VBQXNCLE9BQU8sRUFBQztRQUE5QjtVQUFBO1VBQUE7VUFBQTtRQUFBLFFBREYsZUFFRTtVQUFNLElBQUksRUFBQyxhQUFYO1VBQXlCLE9BQU8sRUFBQztRQUFqQztVQUFBO1VBQUE7VUFBQTtRQUFBLFFBRkYsZUFHRTtVQUNFLElBQUksRUFBQyxhQURQO1VBRUUsT0FBTyxFQUFDO1FBRlY7VUFBQTtVQUFBO1VBQUE7UUFBQSxRQUhGLGVBT0U7VUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUFQRjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFERixlQVVFLDhEQUFDLGdEQUFEO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFWRixlQVdFLDhEQUFDLGtFQUFEO1FBQUEsdUJBQ0UsOERBQUMsU0FBRCxvQkFBZUssU0FBZjtVQUFBO1VBQUE7VUFBQTtRQUFBO01BREY7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQVhGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQURGLGlCQURGO0FBbUJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXYxLy4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB0aGVtZSwgeyBHbG9iYWxTdHlsZXMgfSBmcm9tICcuLi90aGVtZSc7XG5pbXBvcnQgU2Nyb2xsUHJvdmlkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9TY3JvbGxQcm92aWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEnIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT0ndGhlbWUtY29sb3InIGNvbnRlbnQ9JyMwMDAwMDAnIC8+XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIG5hbWU9J2Rlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgY29udGVudD0nQSBmdWxsc3RhY2sgZGV2ZWxvcGVyIGJhc2VkIGluIE15YW5tYXIgd2hvIGxvdmVzIGJ1aWxkaW5nIHdlYiBhcHBzLidcbiAgICAgICAgICAvPlxuICAgICAgICAgIDx0aXRsZT5UaGFudCBLbzwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPEdsb2JhbFN0eWxlcyAvPlxuICAgICAgICA8U2Nyb2xsUHJvdmlkZXI+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L1Njcm9sbFByb3ZpZGVyPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJUaGVtZVByb3ZpZGVyIiwidGhlbWUiLCJHbG9iYWxTdHlsZXMiLCJTY3JvbGxQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/theme/globalStyles.js":
/*!***********************************!*\
  !*** ./src/theme/globalStyles.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n // Used Josh Cameau's reset https://www.joshwcomeau.com/css/custom-css-reset/\n\nconst GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)([\"*,*::before,*::after{box-sizing:border-box;}*{margin:0;padding:0;}html,body{height:100%;}body{line-height:1.5;-webkit-font-smoothing:antialiased;}img,picture,video,canvas,svg{display:block;max-width:100%;}input,button,textarea,select{font:inherit;}p,h1,h2,h3,h4,h5,h6{overflow-wrap:break-word;}#root,#__next{isolation:isolate;}body{position:relative;font-size:1rem;font-family:\", \";background-color:\", \";color:\", \";}ul{list-style:none;}\"], ({\n  theme\n}) => theme.fontFamily.primary, ({\n  theme\n}) => theme.colors.bodyBg, ({\n  theme\n}) => theme.colors.neutral['200']);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyles);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGhlbWUvZ2xvYmFsU3R5bGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztDQUVBOztBQUVBLE1BQU1DLFlBQVksR0FBR0Qsb0VBQUgsMmJBd0NELENBQUM7RUFBRUU7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsVUFBTixDQUFpQkMsT0F4Qy9CLEVBeUNJLENBQUM7RUFBRUY7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0csTUFBTixDQUFhQyxNQXpDaEMsRUEwQ1AsQ0FBQztFQUFFSjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDRyxNQUFOLENBQWFFLE9BQWIsQ0FBcUIsS0FBckIsQ0ExQ1IsQ0FBbEI7QUFtREEsaUVBQWVOLFlBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8tdjEvLi9zcmMvdGhlbWUvZ2xvYmFsU3R5bGVzLmpzPzE0NDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbi8vIFVzZWQgSm9zaCBDYW1lYXUncyByZXNldCBodHRwczovL3d3dy5qb3Nod2NvbWVhdS5jb20vY3NzL2N1c3RvbS1jc3MtcmVzZXQvXG5cbmNvbnN0IEdsb2JhbFN0eWxlcyA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuaHRtbCwgYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5pbWcsIHBpY3R1cmUsIHZpZGVvLCBjYW52YXMsIHN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbmlucHV0LCBidXR0b24sIHRleHRhcmVhLCBzZWxlY3Qge1xuICBmb250OiBpbmhlcml0O1xufVxuXG5wLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbn1cbiNyb290LCAjX19uZXh0IHtcbiAgaXNvbGF0aW9uOiBpc29sYXRlO1xufVxuXG4vLyBteSBvd24gZGVmYXVsdCBzdHlsZVxuYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LWZhbWlseTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250RmFtaWx5LnByaW1hcnl9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ib2R5Qmd9O1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMubmV1dHJhbFsnMjAwJ119O1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlcztcbiJdLCJuYW1lcyI6WyJjcmVhdGVHbG9iYWxTdHlsZSIsIkdsb2JhbFN0eWxlcyIsInRoZW1lIiwiZm9udEZhbWlseSIsInByaW1hcnkiLCJjb2xvcnMiLCJib2R5QmciLCJuZXV0cmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/theme/globalStyles.js\n");

/***/ }),

/***/ "./src/theme/index.js":
/*!****************************!*\
  !*** ./src/theme/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GlobalStyles\": () => (/* reexport safe */ _globalStyles__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _globalStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalStyles */ \"./src/theme/globalStyles.js\");\n\nconst theme = {\n  colors: {\n    bodyBg: '#19191C',\n    primary: {\n      50: '#EEF2FF',\n      100: '#EEF2FF',\n      300: '#A5B4FC',\n      400: '#818CF8',\n      500: '#6366F1',\n      600: '#4F46E5',\n      700: '#4338CA',\n      900: '#272460'\n    },\n    neutral: {\n      200: '#E5E5E5',\n      300: '#d4d4d4',\n      400: '#a3a3a3',\n      500: '#737373',\n      600: '#525252',\n      800: '#262626'\n    },\n    text: '#C2C2C2',\n    white: '#ffffff',\n    black: '#000000'\n  },\n  fontFamily: {\n    primary: \"'Poppins', sans-serif\"\n  },\n  breakpoints: {\n    sm: '39.9375em',\n    md: '47.9375em',\n    lg: '73.75em'\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGhlbWUvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQSxNQUFNQyxLQUFLLEdBQUc7RUFDWkMsTUFBTSxFQUFFO0lBQ05DLE1BQU0sRUFBRSxTQURGO0lBRU5DLE9BQU8sRUFBRTtNQUNQLElBQUksU0FERztNQUVQLEtBQUssU0FGRTtNQUdQLEtBQUssU0FIRTtNQUlQLEtBQUssU0FKRTtNQUtQLEtBQUssU0FMRTtNQU1QLEtBQUssU0FORTtNQU9QLEtBQUssU0FQRTtNQVFQLEtBQUs7SUFSRSxDQUZIO0lBWU5DLE9BQU8sRUFBRTtNQUNQLEtBQUssU0FERTtNQUVQLEtBQUssU0FGRTtNQUdQLEtBQUssU0FIRTtNQUlQLEtBQUssU0FKRTtNQUtQLEtBQUssU0FMRTtNQU1QLEtBQUs7SUFORSxDQVpIO0lBb0JOQyxJQUFJLEVBQUUsU0FwQkE7SUFxQk5DLEtBQUssRUFBRSxTQXJCRDtJQXNCTkMsS0FBSyxFQUFFO0VBdEJELENBREk7RUF5QlpDLFVBQVUsRUFBRTtJQUNWTCxPQUFPLEVBQUU7RUFEQyxDQXpCQTtFQTRCWk0sV0FBVyxFQUFFO0lBQ1hDLEVBQUUsRUFBRSxXQURPO0lBRVhDLEVBQUUsRUFBRSxXQUZPO0lBR1hDLEVBQUUsRUFBRTtFQUhPO0FBNUJELENBQWQ7QUFtQ0EsaUVBQWVaLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8tdjEvLi9zcmMvdGhlbWUvaW5kZXguanM/ODljMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2xvYmFsU3R5bGVzIGZyb20gJy4vZ2xvYmFsU3R5bGVzJztcblxuY29uc3QgdGhlbWUgPSB7XG4gIGNvbG9yczoge1xuICAgIGJvZHlCZzogJyMxOTE5MUMnLFxuICAgIHByaW1hcnk6IHtcbiAgICAgIDUwOiAnI0VFRjJGRicsXG4gICAgICAxMDA6ICcjRUVGMkZGJyxcbiAgICAgIDMwMDogJyNBNUI0RkMnLFxuICAgICAgNDAwOiAnIzgxOENGOCcsXG4gICAgICA1MDA6ICcjNjM2NkYxJyxcbiAgICAgIDYwMDogJyM0RjQ2RTUnLFxuICAgICAgNzAwOiAnIzQzMzhDQScsXG4gICAgICA5MDA6ICcjMjcyNDYwJyxcbiAgICB9LFxuICAgIG5ldXRyYWw6IHtcbiAgICAgIDIwMDogJyNFNUU1RTUnLFxuICAgICAgMzAwOiAnI2Q0ZDRkNCcsXG4gICAgICA0MDA6ICcjYTNhM2EzJyxcbiAgICAgIDUwMDogJyM3MzczNzMnLFxuICAgICAgNjAwOiAnIzUyNTI1MicsXG4gICAgICA4MDA6ICcjMjYyNjI2JyxcbiAgICB9LFxuICAgIHRleHQ6ICcjQzJDMkMyJyxcbiAgICB3aGl0ZTogJyNmZmZmZmYnLFxuICAgIGJsYWNrOiAnIzAwMDAwMCcsXG4gIH0sXG4gIGZvbnRGYW1pbHk6IHtcbiAgICBwcmltYXJ5OiBcIidQb3BwaW5zJywgc2Fucy1zZXJpZlwiLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIHNtOiAnMzkuOTM3NWVtJyxcbiAgICBtZDogJzQ3LjkzNzVlbScsXG4gICAgbGc6ICc3My43NWVtJyxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xuZXhwb3J0IHsgR2xvYmFsU3R5bGVzIH07XG4iXSwibmFtZXMiOlsiR2xvYmFsU3R5bGVzIiwidGhlbWUiLCJjb2xvcnMiLCJib2R5QmciLCJwcmltYXJ5IiwibmV1dHJhbCIsInRleHQiLCJ3aGl0ZSIsImJsYWNrIiwiZm9udEZhbWlseSIsImJyZWFrcG9pbnRzIiwic20iLCJtZCIsImxnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/theme/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();