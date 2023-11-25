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

/***/ "./models/enums.ts":
/*!*************************!*\
  !*** ./models/enums.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ROUTER_PATHS: () => (/* binding */ ROUTER_PATHS),\n/* harmony export */   URL: () => (/* binding */ URL)\n/* harmony export */ });\nvar ROUTER_PATHS;\n(function(ROUTER_PATHS) {\n    ROUTER_PATHS[\"MAIN\"] = \"/\";\n    ROUTER_PATHS[\"SEARCH\"] = \"search/shows\";\n    ROUTER_PATHS[\"SHOWS\"] = \"shows\";\n    ROUTER_PATHS[\"DETAILS\"] = \"/shows/details/:id\";\n    ROUTER_PATHS[\"NOTFOUND\"] = \"*\";\n})(ROUTER_PATHS || (ROUTER_PATHS = {}));\nvar URL;\n(function(URL) {\n    URL[\"BASE_URL\"] = \"https://api.tvmaze.com/\";\n    URL[\"SHOWS\"] = \"https://api.tvmaze.com/shows\";\n    URL[\"SEARCH\"] = \" https://api.tvmaze.com/search/shows?q=\";\n})(URL || (URL = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbHMvZW51bXMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O1VBQVlBOzs7Ozs7R0FBQUEsaUJBQUFBOztVQVFBQzs7OztHQUFBQSxRQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LWJlc3Qtc2hvdy8uL21vZGVscy9lbnVtcy50cz9iMDg2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIFJPVVRFUl9QQVRIUyB7XHJcbiAgTUFJTiA9ICcvJyxcclxuICBTRUFSQ0ggPSAnc2VhcmNoL3Nob3dzJyxcclxuICBTSE9XUyA9ICdzaG93cycsXHJcbiAgREVUQUlMUyA9ICcvc2hvd3MvZGV0YWlscy86aWQnLFxyXG4gIE5PVEZPVU5EID0gJyonLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBVUkwge1xyXG4gIEJBU0VfVVJMID0gJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vJyxcclxuICBTSE9XUyA9ICdodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzJyxcclxuICBTRUFSQ0ggPSAnIGh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9JyxcclxufVxyXG4iXSwibmFtZXMiOlsiUk9VVEVSX1BBVEhTIiwiVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./models/enums.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/store */ \"./redux/store.ts\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.scss */ \"./styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n        store: _redux_store__WEBPACK_IMPORTED_MODULE_1__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"D:\\\\IT\\\\RS\\\\React-PROJECT\\\\my-best-show\\\\pages\\\\_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\IT\\\\RS\\\\React-PROJECT\\\\my-best-show\\\\pages\\\\_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBdUM7QUFDUDtBQUVPO0FBRXZDLFNBQVNFLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDL0MscUJBQ0UsOERBQUNILGlEQUFRQTtRQUFDRCxPQUFPQSwrQ0FBS0E7a0JBQ3BCLDRFQUFDRztZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1iZXN0LXNob3cvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi4vcmVkdXgvc3RvcmUnO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5zY3NzJztcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbInN0b3JlIiwiUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./redux/api/apiSlice.ts":
/*!*******************************!*\
  !*** ./redux/api/apiSlice.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   apiSlice: () => (/* binding */ apiSlice),\n/* harmony export */   useGetShowByIdQuery: () => (/* binding */ useGetShowByIdQuery),\n/* harmony export */   useLoadShowsQuery: () => (/* binding */ useLoadShowsQuery),\n/* harmony export */   useSearchShowsQuery: () => (/* binding */ useSearchShowsQuery)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"@reduxjs/toolkit/query/react\");\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/enums */ \"./models/enums.ts\");\n\n\nconst apiSlice = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    reducerPath: \"api\",\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({\n        baseUrl: _models_enums__WEBPACK_IMPORTED_MODULE_1__.URL.BASE_URL\n    }),\n    endpoints: (builder)=>({\n            loadShows: builder.query({\n                query: (page)=>`shows?page=${page}`\n            }),\n            searchShows: builder.query({\n                query: (searchValue)=>`search/shows?q=${searchValue}`\n            }),\n            getShowById: builder.query({\n                query: (id)=>`shows/${id}`\n            })\n        })\n});\nconst { useLoadShowsQuery, useSearchShowsQuery, useGetShowByIdQuery } = apiSlice;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9hcGkvYXBpU2xpY2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5RTtBQUNoQztBQUdsQyxNQUFNRyxXQUFXSCx1RUFBU0EsQ0FBQztJQUNoQ0ksYUFBYTtJQUNiQyxXQUFXSiw0RUFBY0EsQ0FBQztRQUFFSyxTQUFTSiw4Q0FBR0EsQ0FBQ0ssUUFBUTtJQUFDO0lBQ2xEQyxXQUFXLENBQUNDLFVBQWE7WUFDdkJDLFdBQVdELFFBQVFFLEtBQUssQ0FBcUI7Z0JBQzNDQSxPQUFPLENBQUNDLE9BQVMsQ0FBQyxXQUFXLEVBQUVBLEtBQUssQ0FBQztZQUN2QztZQUNBQyxhQUFhSixRQUFRRSxLQUFLLENBQTRCO2dCQUNwREEsT0FBTyxDQUFDRyxjQUFnQixDQUFDLGVBQWUsRUFBRUEsWUFBWSxDQUFDO1lBQ3pEO1lBQ0FDLGFBQWFOLFFBQVFFLEtBQUssQ0FBbUI7Z0JBQzNDQSxPQUFPLENBQUNLLEtBQU8sQ0FBQyxNQUFNLEVBQUVBLEdBQUcsQ0FBQztZQUM5QjtRQUNGO0FBQ0YsR0FBRztBQUVJLE1BQU0sRUFBRUMsaUJBQWlCLEVBQUVDLG1CQUFtQixFQUFFQyxtQkFBbUIsRUFBRSxHQUFHaEIsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWJlc3Qtc2hvdy8uL3JlZHV4L2FwaS9hcGlTbGljZS50cz9jODQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFwaSwgZmV0Y2hCYXNlUXVlcnkgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0L3F1ZXJ5L3JlYWN0JztcclxuaW1wb3J0IHsgVVJMIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2VudW1zJztcclxuaW1wb3J0IHsgU2VhcmNoU2hvd3NEYXRhLCBTaG93RGF0YSB9IGZyb20gJy4uLy4uL21vZGVscy9pbnRlcmZhY2VzJztcclxuXHJcbmV4cG9ydCBjb25zdCBhcGlTbGljZSA9IGNyZWF0ZUFwaSh7XHJcbiAgcmVkdWNlclBhdGg6ICdhcGknLFxyXG4gIGJhc2VRdWVyeTogZmV0Y2hCYXNlUXVlcnkoeyBiYXNlVXJsOiBVUkwuQkFTRV9VUkwgfSksXHJcbiAgZW5kcG9pbnRzOiAoYnVpbGRlcikgPT4gKHtcclxuICAgIGxvYWRTaG93czogYnVpbGRlci5xdWVyeTxTaG93RGF0YVtdLCBudW1iZXI+KHtcclxuICAgICAgcXVlcnk6IChwYWdlKSA9PiBgc2hvd3M/cGFnZT0ke3BhZ2V9YCxcclxuICAgIH0pLFxyXG4gICAgc2VhcmNoU2hvd3M6IGJ1aWxkZXIucXVlcnk8U2VhcmNoU2hvd3NEYXRhW10sIHN0cmluZz4oe1xyXG4gICAgICBxdWVyeTogKHNlYXJjaFZhbHVlKSA9PiBgc2VhcmNoL3Nob3dzP3E9JHtzZWFyY2hWYWx1ZX1gLFxyXG4gICAgfSksXHJcbiAgICBnZXRTaG93QnlJZDogYnVpbGRlci5xdWVyeTxTaG93RGF0YSwgc3RyaW5nPih7XHJcbiAgICAgIHF1ZXJ5OiAoaWQpID0+IGBzaG93cy8ke2lkfWAsXHJcbiAgICB9KSxcclxuICB9KSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyB1c2VMb2FkU2hvd3NRdWVyeSwgdXNlU2VhcmNoU2hvd3NRdWVyeSwgdXNlR2V0U2hvd0J5SWRRdWVyeSB9ID0gYXBpU2xpY2U7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVBcGkiLCJmZXRjaEJhc2VRdWVyeSIsIlVSTCIsImFwaVNsaWNlIiwicmVkdWNlclBhdGgiLCJiYXNlUXVlcnkiLCJiYXNlVXJsIiwiQkFTRV9VUkwiLCJlbmRwb2ludHMiLCJidWlsZGVyIiwibG9hZFNob3dzIiwicXVlcnkiLCJwYWdlIiwic2VhcmNoU2hvd3MiLCJzZWFyY2hWYWx1ZSIsImdldFNob3dCeUlkIiwiaWQiLCJ1c2VMb2FkU2hvd3NRdWVyeSIsInVzZVNlYXJjaFNob3dzUXVlcnkiLCJ1c2VHZXRTaG93QnlJZFF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/api/apiSlice.ts\n");

/***/ }),

/***/ "./redux/slices/ShowsSlice.ts":
/*!************************************!*\
  !*** ./redux/slices/ShowsSlice.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SearchSlice: () => (/* binding */ SearchSlice),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   handleSearch: () => (/* binding */ handleSearch),\n/* harmony export */   loadShows: () => (/* binding */ loadShows),\n/* harmony export */   selectShows: () => (/* binding */ selectShows),\n/* harmony export */   setApiCallPage: () => (/* binding */ setApiCallPage),\n/* harmony export */   setCurrentPage: () => (/* binding */ setCurrentPage),\n/* harmony export */   setIsCardItemsDarked: () => (/* binding */ setIsCardItemsDarked),\n/* harmony export */   setIsError: () => (/* binding */ setIsError),\n/* harmony export */   setIsIsLoading: () => (/* binding */ setIsIsLoading),\n/* harmony export */   setNextPage: () => (/* binding */ setNextPage),\n/* harmony export */   setPrevPage: () => (/* binding */ setPrevPage),\n/* harmony export */   setSearchValue: () => (/* binding */ setSearchValue),\n/* harmony export */   setShows: () => (/* binding */ setShows),\n/* harmony export */   setSwitchMoreShows: () => (/* binding */ setSwitchMoreShows)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_getSearchValueFromLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/getSearchValueFromLocalStorage */ \"./utils/getSearchValueFromLocalStorage.ts\");\n\n\nconst initialState = {\n    searchValue: (0,_utils_getSearchValueFromLocalStorage__WEBPACK_IMPORTED_MODULE_1__.getSearchValueFromLocalStorage)(),\n    shows: [],\n    isLoading: false,\n    isError: false,\n    switchMoreShows: false,\n    isCardItemsDarked: false,\n    currentPage: 0,\n    apiCallPage: 0,\n    nextPage: null,\n    prevPage: null\n};\nconst SearchSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"shows\",\n    initialState,\n    reducers: {\n        setSearchValue (state, action) {\n            state.searchValue = action.payload;\n        },\n        setShows (state, action) {\n            state.shows = action.payload;\n        },\n        setSwitchMoreShows (state, action) {\n            state.switchMoreShows = action.payload;\n        },\n        setIsCardItemsDarked (state, action) {\n            state.isCardItemsDarked = action.payload;\n        },\n        setIsIsLoading (state, action) {\n            state.isLoading = action.payload;\n        },\n        setIsError (state, action) {\n            state.isError = action.payload;\n        },\n        setCurrentPage (state, action) {\n            state.currentPage = action.payload;\n        },\n        setApiCallPage (state, action) {\n            state.apiCallPage = action.payload;\n        },\n        setNextPage (state, action) {\n            state.nextPage = action.payload;\n        },\n        setPrevPage (state, action) {\n            state.prevPage = action.payload;\n        },\n        loadShows (state, action) {\n            state.shows = action.payload;\n            state.nextPage = state.currentPage + 1;\n            state.prevPage = state.currentPage > 0 ? state.currentPage - 1 : null;\n        },\n        handleSearch (state, action) {\n            if (!state.searchValue) {\n                return;\n            }\n            state.shows = action.payload;\n            state.currentPage = 0;\n        }\n    }\n});\nconst selectShows = (state)=>state.shows;\nconst { setSearchValue, setShows, setSwitchMoreShows, setIsCardItemsDarked, setIsIsLoading, setIsError, setCurrentPage, setApiCallPage, setNextPage, setPrevPage, loadShows, handleSearch } = SearchSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9zbGljZXMvU2hvd3NTbGljZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFHNkM7QUFtQjVGLE1BQU1FLGVBQTRCO0lBQ2hDQyxhQUFhRixxR0FBOEJBO0lBRTNDRyxPQUFPLEVBQUU7SUFDVEMsV0FBVztJQUNYQyxTQUFTO0lBRVRDLGlCQUFpQjtJQUNqQkMsbUJBQW1CO0lBRW5CQyxhQUFhO0lBQ2JDLGFBQWE7SUFDYkMsVUFBVTtJQUNWQyxVQUFVO0FBQ1o7QUFFTyxNQUFNQyxjQUFjYiw2REFBV0EsQ0FBQztJQUNyQ2MsTUFBTTtJQUNOWjtJQUNBYSxVQUFVO1FBQ1JDLGdCQUFlQyxLQUFLLEVBQUVDLE1BQTZCO1lBQ2pERCxNQUFNZCxXQUFXLEdBQUdlLE9BQU9DLE9BQU87UUFDcEM7UUFFQUMsVUFBU0gsS0FBSyxFQUFFQyxNQUFxRDtZQUNuRUQsTUFBTWIsS0FBSyxHQUFHYyxPQUFPQyxPQUFPO1FBQzlCO1FBQ0FFLG9CQUFtQkosS0FBSyxFQUFFQyxNQUE4QjtZQUN0REQsTUFBTVYsZUFBZSxHQUFHVyxPQUFPQyxPQUFPO1FBQ3hDO1FBQ0FHLHNCQUFxQkwsS0FBSyxFQUFFQyxNQUE4QjtZQUN4REQsTUFBTVQsaUJBQWlCLEdBQUdVLE9BQU9DLE9BQU87UUFDMUM7UUFDQUksZ0JBQWVOLEtBQUssRUFBRUMsTUFBOEI7WUFDbERELE1BQU1aLFNBQVMsR0FBR2EsT0FBT0MsT0FBTztRQUNsQztRQUNBSyxZQUFXUCxLQUFLLEVBQUVDLE1BQThCO1lBQzlDRCxNQUFNWCxPQUFPLEdBQUdZLE9BQU9DLE9BQU87UUFDaEM7UUFFQU0sZ0JBQWVSLEtBQUssRUFBRUMsTUFBNkI7WUFDakRELE1BQU1SLFdBQVcsR0FBR1MsT0FBT0MsT0FBTztRQUNwQztRQUNBTyxnQkFBZVQsS0FBSyxFQUFFQyxNQUE2QjtZQUNqREQsTUFBTVAsV0FBVyxHQUFHUSxPQUFPQyxPQUFPO1FBQ3BDO1FBQ0FRLGFBQVlWLEtBQUssRUFBRUMsTUFBb0M7WUFDckRELE1BQU1OLFFBQVEsR0FBR08sT0FBT0MsT0FBTztRQUNqQztRQUNBUyxhQUFZWCxLQUFLLEVBQUVDLE1BQW9DO1lBQ3JERCxNQUFNTCxRQUFRLEdBQUdNLE9BQU9DLE9BQU87UUFDakM7UUFFQVUsV0FBVVosS0FBSyxFQUFFQyxNQUFxRDtZQUNwRUQsTUFBTWIsS0FBSyxHQUFHYyxPQUFPQyxPQUFPO1lBQzVCRixNQUFNTixRQUFRLEdBQUdNLE1BQU1SLFdBQVcsR0FBRztZQUNyQ1EsTUFBTUwsUUFBUSxHQUFHSyxNQUFNUixXQUFXLEdBQUcsSUFBSVEsTUFBTVIsV0FBVyxHQUFHLElBQUk7UUFDbkU7UUFFQXFCLGNBQWFiLEtBQUssRUFBRUMsTUFBcUQ7WUFDdkUsSUFBSSxDQUFDRCxNQUFNZCxXQUFXLEVBQUU7Z0JBQ3RCO1lBQ0Y7WUFFQWMsTUFBTWIsS0FBSyxHQUFHYyxPQUFPQyxPQUFPO1lBQzVCRixNQUFNUixXQUFXLEdBQUc7UUFDdEI7SUFDRjtBQUNGLEdBQUc7QUFFSSxNQUFNc0IsY0FBYyxDQUFDZCxRQUFrQ0EsTUFBTWIsS0FBSyxDQUFDO0FBQ25FLE1BQU0sRUFDWFksY0FBYyxFQUNkSSxRQUFRLEVBQ1JDLGtCQUFrQixFQUNsQkMsb0JBQW9CLEVBQ3BCQyxjQUFjLEVBQ2RDLFVBQVUsRUFDVkMsY0FBYyxFQUNkQyxjQUFjLEVBQ2RDLFdBQVcsRUFDWEMsV0FBVyxFQUNYQyxTQUFTLEVBQ1RDLFlBQVksRUFDYixHQUFHakIsWUFBWW1CLE9BQU8sQ0FBQztBQUN4QixpRUFBZW5CLFlBQVlvQixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1iZXN0LXNob3cvLi9yZWR1eC9zbGljZXMvU2hvd3NTbGljZS50cz9iMTc5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB0eXBlIHsgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tICcuLi9zdG9yZSc7XHJcbmltcG9ydCB7IGdldFNlYXJjaFZhbHVlRnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gJy4uLy4uL3V0aWxzL2dldFNlYXJjaFZhbHVlRnJvbUxvY2FsU3RvcmFnZSc7XHJcbmltcG9ydCB7IFNlYXJjaFNob3dzRGF0YSwgU2hvd0RhdGEgfSBmcm9tICcuLi8uLi9tb2RlbHMvaW50ZXJmYWNlcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaFN0YXRlIHtcclxuICBzZWFyY2hWYWx1ZTogc3RyaW5nO1xyXG5cclxuICBzaG93czogU2hvd0RhdGFbXSB8IFNlYXJjaFNob3dzRGF0YVtdO1xyXG4gIGlzTG9hZGluZzogYm9vbGVhbjtcclxuICBpc0Vycm9yOiBib29sZWFuO1xyXG5cclxuICBzd2l0Y2hNb3JlU2hvd3M6IGJvb2xlYW47XHJcbiAgaXNDYXJkSXRlbXNEYXJrZWQ6IGJvb2xlYW47XHJcblxyXG4gIGN1cnJlbnRQYWdlOiBudW1iZXI7XHJcbiAgYXBpQ2FsbFBhZ2U6IG51bWJlcjtcclxuICBuZXh0UGFnZTogbnVtYmVyIHwgbnVsbDtcclxuICBwcmV2UGFnZTogbnVtYmVyIHwgbnVsbDtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBTZWFyY2hTdGF0ZSA9IHtcclxuICBzZWFyY2hWYWx1ZTogZ2V0U2VhcmNoVmFsdWVGcm9tTG9jYWxTdG9yYWdlKCksXHJcblxyXG4gIHNob3dzOiBbXSxcclxuICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gIGlzRXJyb3I6IGZhbHNlLFxyXG5cclxuICBzd2l0Y2hNb3JlU2hvd3M6IGZhbHNlLFxyXG4gIGlzQ2FyZEl0ZW1zRGFya2VkOiBmYWxzZSxcclxuXHJcbiAgY3VycmVudFBhZ2U6IDAsXHJcbiAgYXBpQ2FsbFBhZ2U6IDAsXHJcbiAgbmV4dFBhZ2U6IG51bGwsXHJcbiAgcHJldlBhZ2U6IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ3Nob3dzJyxcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHNldFNlYXJjaFZhbHVlKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xyXG4gICAgICBzdGF0ZS5zZWFyY2hWYWx1ZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXRTaG93cyhzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFNob3dEYXRhW10gfCBTZWFyY2hTaG93c0RhdGFbXT4pIHtcclxuICAgICAgc3RhdGUuc2hvd3MgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgICBzZXRTd2l0Y2hNb3JlU2hvd3Moc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxib29sZWFuPikge1xyXG4gICAgICBzdGF0ZS5zd2l0Y2hNb3JlU2hvd3MgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgICBzZXRJc0NhcmRJdGVtc0RhcmtlZChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KSB7XHJcbiAgICAgIHN0YXRlLmlzQ2FyZEl0ZW1zRGFya2VkID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gICAgc2V0SXNJc0xvYWRpbmcoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxib29sZWFuPikge1xyXG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgICBzZXRJc0Vycm9yKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248Ym9vbGVhbj4pIHtcclxuICAgICAgc3RhdGUuaXNFcnJvciA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXRDdXJyZW50UGFnZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcj4pIHtcclxuICAgICAgc3RhdGUuY3VycmVudFBhZ2UgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgICBzZXRBcGlDYWxsUGFnZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcj4pIHtcclxuICAgICAgc3RhdGUuYXBpQ2FsbFBhZ2UgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgICBzZXROZXh0UGFnZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlciB8IG51bGw+KSB7XHJcbiAgICAgIHN0YXRlLm5leHRQYWdlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gICAgc2V0UHJldlBhZ2Uoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXIgfCBudWxsPikge1xyXG4gICAgICBzdGF0ZS5wcmV2UGFnZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuXHJcbiAgICBsb2FkU2hvd3Moc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxTaG93RGF0YVtdIHwgU2VhcmNoU2hvd3NEYXRhW10+KSB7XHJcbiAgICAgIHN0YXRlLnNob3dzID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIHN0YXRlLm5leHRQYWdlID0gc3RhdGUuY3VycmVudFBhZ2UgKyAxO1xyXG4gICAgICBzdGF0ZS5wcmV2UGFnZSA9IHN0YXRlLmN1cnJlbnRQYWdlID4gMCA/IHN0YXRlLmN1cnJlbnRQYWdlIC0gMSA6IG51bGw7XHJcbiAgICB9LFxyXG5cclxuICAgIGhhbmRsZVNlYXJjaChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFNob3dEYXRhW10gfCBTZWFyY2hTaG93c0RhdGFbXT4pIHtcclxuICAgICAgaWYgKCFzdGF0ZS5zZWFyY2hWYWx1ZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3RhdGUuc2hvd3MgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgc3RhdGUuY3VycmVudFBhZ2UgPSAwO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RTaG93cyA9IChzdGF0ZTogUm9vdFN0YXRlKTogU2VhcmNoU3RhdGUgPT4gc3RhdGUuc2hvd3M7XHJcbmV4cG9ydCBjb25zdCB7XHJcbiAgc2V0U2VhcmNoVmFsdWUsXHJcbiAgc2V0U2hvd3MsXHJcbiAgc2V0U3dpdGNoTW9yZVNob3dzLFxyXG4gIHNldElzQ2FyZEl0ZW1zRGFya2VkLFxyXG4gIHNldElzSXNMb2FkaW5nLFxyXG4gIHNldElzRXJyb3IsXHJcbiAgc2V0Q3VycmVudFBhZ2UsXHJcbiAgc2V0QXBpQ2FsbFBhZ2UsXHJcbiAgc2V0TmV4dFBhZ2UsXHJcbiAgc2V0UHJldlBhZ2UsXHJcbiAgbG9hZFNob3dzLFxyXG4gIGhhbmRsZVNlYXJjaCxcclxufSA9IFNlYXJjaFNsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFNsaWNlLnJlZHVjZXI7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImdldFNlYXJjaFZhbHVlRnJvbUxvY2FsU3RvcmFnZSIsImluaXRpYWxTdGF0ZSIsInNlYXJjaFZhbHVlIiwic2hvd3MiLCJpc0xvYWRpbmciLCJpc0Vycm9yIiwic3dpdGNoTW9yZVNob3dzIiwiaXNDYXJkSXRlbXNEYXJrZWQiLCJjdXJyZW50UGFnZSIsImFwaUNhbGxQYWdlIiwibmV4dFBhZ2UiLCJwcmV2UGFnZSIsIlNlYXJjaFNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2V0U2VhcmNoVmFsdWUiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJzZXRTaG93cyIsInNldFN3aXRjaE1vcmVTaG93cyIsInNldElzQ2FyZEl0ZW1zRGFya2VkIiwic2V0SXNJc0xvYWRpbmciLCJzZXRJc0Vycm9yIiwic2V0Q3VycmVudFBhZ2UiLCJzZXRBcGlDYWxsUGFnZSIsInNldE5leHRQYWdlIiwic2V0UHJldlBhZ2UiLCJsb2FkU2hvd3MiLCJoYW5kbGVTZWFyY2giLCJzZWxlY3RTaG93cyIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/slices/ShowsSlice.ts\n");

/***/ }),

/***/ "./redux/store.ts":
/*!************************!*\
  !*** ./redux/store.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   store: () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_apiSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/apiSlice */ \"./redux/api/apiSlice.ts\");\n/* harmony import */ var _slices_ShowsSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slices/ShowsSlice */ \"./redux/slices/ShowsSlice.ts\");\n\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        shows: _slices_ShowsSlice__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        [_api_apiSlice__WEBPACK_IMPORTED_MODULE_1__.apiSlice.reducerPath]: _api_apiSlice__WEBPACK_IMPORTED_MODULE_1__.apiSlice.reducer\n    },\n    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(_api_apiSlice__WEBPACK_IMPORTED_MODULE_1__.apiSlice.middleware)\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9zdG9yZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFrRDtBQUNSO0FBQ0c7QUFFdEMsTUFBTUcsUUFBUUgsZ0VBQWNBLENBQUM7SUFDbENJLFNBQVM7UUFDUEMsT0FBT0gsMERBQVVBO1FBQ2pCLENBQUNELG1EQUFRQSxDQUFDSyxXQUFXLENBQUMsRUFBRUwsbURBQVFBLENBQUNHLE9BQU87SUFDMUM7SUFDQUcsWUFBWSxDQUFDQyx1QkFBeUJBLHVCQUF1QkMsTUFBTSxDQUFDUixtREFBUUEsQ0FBQ00sVUFBVTtBQUN6RixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYmVzdC1zaG93Ly4vcmVkdXgvc3RvcmUudHM/OTNhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgeyBhcGlTbGljZSB9IGZyb20gJy4vYXBpL2FwaVNsaWNlJztcclxuaW1wb3J0IFNob3dzU2xpY2UgZnJvbSAnLi9zbGljZXMvU2hvd3NTbGljZSc7XHJcblxyXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XHJcbiAgcmVkdWNlcjoge1xyXG4gICAgc2hvd3M6IFNob3dzU2xpY2UsXHJcbiAgICBbYXBpU2xpY2UucmVkdWNlclBhdGhdOiBhcGlTbGljZS5yZWR1Y2VyLFxyXG4gIH0sXHJcbiAgbWlkZGxld2FyZTogKGdldERlZmF1bHRNaWRkbGV3YXJlKSA9PiBnZXREZWZhdWx0TWlkZGxld2FyZSgpLmNvbmNhdChhcGlTbGljZS5taWRkbGV3YXJlKSxcclxufSk7XHJcblxyXG5leHBvcnQgdHlwZSBSb290U3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiBzdG9yZS5nZXRTdGF0ZT47XHJcbmV4cG9ydCB0eXBlIEFwcERpc3BhdGNoID0gdHlwZW9mIHN0b3JlLmRpc3BhdGNoO1xyXG4iXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJhcGlTbGljZSIsIlNob3dzU2xpY2UiLCJzdG9yZSIsInJlZHVjZXIiLCJzaG93cyIsInJlZHVjZXJQYXRoIiwibWlkZGxld2FyZSIsImdldERlZmF1bHRNaWRkbGV3YXJlIiwiY29uY2F0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/store.ts\n");

/***/ }),

/***/ "./utils/getSearchValueFromLocalStorage.ts":
/*!*************************************************!*\
  !*** ./utils/getSearchValueFromLocalStorage.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getSearchValueFromLocalStorage: () => (/* binding */ getSearchValueFromLocalStorage)\n/* harmony export */ });\nconst getSearchValueFromLocalStorage = ()=>{\n    return localStorage.getItem(\"TVShowSearch\") ?? \"\";\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9nZXRTZWFyY2hWYWx1ZUZyb21Mb2NhbFN0b3JhZ2UudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLGlDQUFpQztJQUM1QyxPQUFPQyxhQUFhQyxPQUFPLENBQUMsbUJBQW1CO0FBQ2pELEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1iZXN0LXNob3cvLi91dGlscy9nZXRTZWFyY2hWYWx1ZUZyb21Mb2NhbFN0b3JhZ2UudHM/ODRhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZ2V0U2VhcmNoVmFsdWVGcm9tTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVFZTaG93U2VhcmNoJykgPz8gJyc7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJnZXRTZWFyY2hWYWx1ZUZyb21Mb2NhbFN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/getSearchValueFromLocalStorage.ts\n");

/***/ }),

/***/ "./styles/globals.scss":
/*!*****************************!*\
  !*** ./styles/globals.scss ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "@reduxjs/toolkit/query/react":
/*!***********************************************!*\
  !*** external "@reduxjs/toolkit/query/react" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();