"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/styles/global.ts":
/*!******************************!*\
  !*** ./src/styles/global.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    * {\\n      box-sizing: border-box;\\n      margin: 0;\\n      outline: 0;\\n      padding: 0;\\n    }\\n\\n    html,\\n    body {\\n      min-height: 100%;\\n    }\\n\\n    body {\\n      position: absolute;\\n      top: 0;\\n      right: 0;\\n      bottom: 0;\\n      left: 0;\\n      padding-bottom: 1.875rem;\\n      font-family: \",\n        \";\\n      background: \",\n        \";\\n      color: \",\n        \";\\n    }\\n\\n    body,\\n    input,\\n    select,\\n    button {\\n      font-size: \",\n        \";\\n    }\\n\\n    h1,\\n    h2,\\n    h3,\\n    h4,\\n    h5,\\n    h6,\\n    strong {\\n      font-weight: \",\n        \";\\n    }\\n\\n    button:not(:disabled) {\\n      cursor: pointer;\\n    }\\n\\n    a {\\n      color: inherit;\\n      text-decoration: none;\\n      cursor: pointer;\\n    }\\n\\n    li {\\n      list-style: none;\\n    }\\n\\n    scrollbar-color: \",\n        \"\\n      \",\n        \";\\n    scrollbar-width: thin;\\n\\n    ::-webkit-scrollbar {\\n      width: 0.9rem;\\n      background: #dedede;\\n    }\\n\\n    ::-webkit-scrollbar-thumb {\\n      background: \",\n        \";\\n      border-radius: 0.25rem;\\n    }\\n\\n    html {\\n      font-size: 62.5%;\\n    }\\n  \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  @font-face {\\n    font-family: Poppins;\\n    font-weight: 400;\\n    src: local('Poppins'), url(/) format('truetype');\\n  }\\n\\n  @font-face {\\n    font-family: Poppins;\\n    font-weight: 500;\\n    src: local('Poppins'), url(/fonts/Poppins-Medium.ttf) format('truetype');\\n  }\\n\\n  @font-face {\\n    font-family: Poppins;\\n    font-weight: 700;\\n    src: local('Poppins'), url(/fonts/Poppins-Bold.ttf) format('truetype');\\n  }\\n\\n  \",\n        \"\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(_templateObject1(), function(param) {\n    var theme = param.theme;\n    return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject(), theme.font.family, theme.colors.tertiary.xwhite, theme.colors.secondary.xxdark, theme.font.sizes.midle, theme.font.bold, theme.colors.primary.xblue, theme.colors.secondary.xxdark, theme.colors.primary.xblue);\n}));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2dsb2JhbC50cy5qcyIsIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBEO0FBRTFELCtEQUFlQSxvRUFBaUIscUJBbUI1QjtRQUFHRSxLQUFLLFNBQUxBLEtBQUs7V0FBT0Qsc0RBQUcsb0JBb0JEQyxLQUFLLENBQUNDLElBQUksQ0FBQ0MsTUFBTSxFQUNsQkYsS0FBSyxDQUFDRyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTSxFQUNqQ0wsS0FBSyxDQUFDRyxNQUFNLENBQUNHLFNBQVMsQ0FBQ0MsTUFBTSxFQU96QlAsS0FBSyxDQUFDQyxJQUFJLENBQUNPLEtBQUssQ0FBQ0MsS0FBSyxFQVVwQlQsS0FBSyxDQUFDQyxJQUFJLENBQUNTLElBQUksRUFpQmJWLEtBQUssQ0FBQ0csTUFBTSxDQUFDUSxPQUFPLENBQUNDLEtBQUssRUFDekNaLEtBQUssQ0FBQ0csTUFBTSxDQUFDRyxTQUFTLENBQUNDLE1BQU0sRUFTakJQLEtBQUssQ0FBQ0csTUFBTSxDQUFDUSxPQUFPLENBQUNDLEtBQUs7Q0FPM0MsR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3R5bGVzL2dsb2JhbC50cz8wZmUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlLCBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gIEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgc3JjOiBsb2NhbCgnUG9wcGlucycpLCB1cmwoLykgZm9ybWF0KCd0cnVldHlwZScpO1xyXG4gIH1cclxuXHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBzcmM6IGxvY2FsKCdQb3BwaW5zJyksIHVybCgvZm9udHMvUG9wcGlucy1NZWRpdW0udHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbiAgfVxyXG5cclxuICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHNyYzogbG9jYWwoJ1BvcHBpbnMnKSwgdXJsKC9mb250cy9Qb3BwaW5zLUJvbGQudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IGNzc2BcclxuICAgICoge1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaHRtbCxcclxuICAgIGJvZHkge1xyXG4gICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIGJvZHkge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDEuODc1cmVtO1xyXG4gICAgICBmb250LWZhbWlseTogJHt0aGVtZS5mb250LmZhbWlseX07XHJcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLnRlcnRpYXJ5Lnh3aGl0ZX07XHJcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5zZWNvbmRhcnkueHhkYXJrfTtcclxuICAgIH1cclxuXHJcbiAgICBib2R5LFxyXG4gICAgaW5wdXQsXHJcbiAgICBzZWxlY3QsXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udC5zaXplcy5taWRsZX07XHJcbiAgICB9XHJcblxyXG4gICAgaDEsXHJcbiAgICBoMixcclxuICAgIGgzLFxyXG4gICAgaDQsXHJcbiAgICBoNSxcclxuICAgIGg2LFxyXG4gICAgc3Ryb25nIHtcclxuICAgICAgZm9udC13ZWlnaHQ6ICR7dGhlbWUuZm9udC5ib2xkfTtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b246bm90KDpkaXNhYmxlZCkge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBsaSB7XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsYmFyLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5wcmltYXJ5LnhibHVlfVxyXG4gICAgICAke3RoZW1lLmNvbG9ycy5zZWNvbmRhcnkueHhkYXJrfTtcclxuICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjtcclxuXHJcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgd2lkdGg6IDAuOXJlbTtcclxuICAgICAgYmFja2dyb3VuZDogI2RlZGVkZTtcclxuICAgIH1cclxuXHJcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMucHJpbWFyeS54Ymx1ZX07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgaHRtbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNjIuNSU7XHJcbiAgICB9XHJcbiAgYH1gXHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVHbG9iYWxTdHlsZSIsImNzcyIsInRoZW1lIiwiZm9udCIsImZhbWlseSIsImNvbG9ycyIsInRlcnRpYXJ5IiwieHdoaXRlIiwic2Vjb25kYXJ5IiwieHhkYXJrIiwic2l6ZXMiLCJtaWRsZSIsImJvbGQiLCJwcmltYXJ5IiwieGJsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/global.ts\n");

/***/ })

});