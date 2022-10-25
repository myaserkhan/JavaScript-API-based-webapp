/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/bg_texture.png */ \"./src/assets/bg_texture.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/icon?family=Material+Icons);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  color: white;\\n  list-style: none;\\n  text-decoration: none;\\n}\\n\\nhtml {\\n  scroll-behavior: smooth;\\n}\\n\\nbody {\\n  background-color: black;\\n  box-sizing: inherit;\\n}\\n\\nbutton {\\n  padding: 1em;\\n  border-radius: 50%;\\n}\\n\\n.icons {\\n  font-family: \\\"Material Icons\\\", sans-serif;\\n  font-size: 1.4rem;\\n}\\n\\n.hide {\\n  display: none !important;\\n}\\n\\nheader {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  align-items: center;\\n  font-size: 1.4rem;\\n  padding: 0.5rem;\\n  background-color: #121212;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\nheader h1 {\\n  font-size: 1rem;\\n  color: #f5c518;\\n  cursor: pointer;\\n}\\nheader h2 {\\n  font-size: 0.75rem;\\n  margin-left: auto;\\n}\\nheader button {\\n  background-color: transparent;\\n  border: none;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\nheader button:hover {\\n  background-color: #2c2c2c;\\n}\\n\\n.search-bar {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  gap: 10px;\\n  background-color: #1f1f1f;\\n  width: 100%;\\n  padding: 0.5rem 1rem;\\n}\\n.search-bar input {\\n  width: 100%;\\n  height: 20px;\\n  background-color: transparent;\\n  border: none;\\n  outline: none;\\n  font-size: 1rem;\\n  color: #f5c518;\\n}\\n.search-bar input::placeholder {\\n  font-style: italic;\\n  color: white;\\n}\\n\\n.cards {\\n  margin-top: 1rem;\\n  padding-bottom: 4rem;\\n  display: grid;\\n  grid-template-columns: auto;\\n  place-items: center;\\n  margin-left: auto;\\n  margin-right: auto;\\n  z-index: 1;\\n  overflow-y: scroll;\\n}\\n.cards .cardItem {\\n  margin-bottom: 2rem;\\n  display: flex;\\n  flex-direction: column;\\n  align-content: center;\\n  background-color: #1f1f1f;\\n  width: 300px;\\n  height: 600px;\\n  border-radius: 1rem;\\n  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);\\n}\\n.cards .cardItem .cardImg {\\n  border: 4px solid #2c2c2c;\\n  width: 100%;\\n  height: 400px;\\n  background-size: cover;\\n  background-position: center;\\n  background-repeat: no-repeat;\\n}\\n.cards .cardItem .cardImg:hover {\\n  box-shadow: 0 0 30px black inset;\\n}\\n.cards .cardItem .cardName {\\n  margin-top: 1rem;\\n  font-size: 1.5rem;\\n  color: white;\\n  height: 50px;\\n  text-align: center;\\n}\\n.cards .cardItem .cardName:hover {\\n  text-decoration: underline;\\n  cursor: crosshair;\\n}\\n.cards .cardItem .cardDetails {\\n  font-size: 1rem;\\n  margin-left: 1rem;\\n  margin-right: 1rem;\\n  color: #5799ef;\\n  margin-bottom: 1rem;\\n  font-style: italic;\\n  text-align: left;\\n  max-width: 100%;\\n  overflow-y: scroll;\\n  height: 150px;\\n  margin-top: 0.5rem;\\n  outline: 2px solid #2c2c2c;\\n}\\n.cards .cardItem .cardRuntime {\\n  font-size: 1rem;\\n  color: #f5c518;\\n  text-align: center;\\n}\\n.cards .cardItem .starContainer {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n  margin-top: 1rem;\\n  width: 80%;\\n}\\n.cards .cardItem .starRate {\\n  font-size: 1.5rem;\\n  margin-left: 1rem;\\n  color: #f5c518;\\n}\\n.cards .cardItem .starCount {\\n  font-size: 1rem;\\n  border-radius: 1rem;\\n  color: white;\\n  width: 10%;\\n  text-align: center;\\n  margin-right: auto;\\n}\\n.cards .cardItem .starBorder {\\n  color: #5799ef;\\n  cursor: pointer;\\n  margin-right: auto;\\n}\\n.cards .cardItem .starBorder:hover {\\n  background-color: #2c2c2c;\\n}\\n.cards .cardItem .liked {\\n  color: #f5c518;\\n}\\n.cards .cardItem .commentBtn {\\n  margin-left: auto;\\n  margin-right: auto;\\n  margin-bottom: 1rem;\\n  border-radius: 1rem;\\n  background-color: #1f1f1f;\\n  color: #5799ef;\\n  width: 40%;\\n  outline: 1px solid #121212;\\n}\\n\\nfooter {\\n  display: block;\\n  width: 100%;\\n  text-align: center;\\n  padding: 1rem;\\n  position: fixed;\\n  bottom: 0;\\n  background-color: #1f1f1f;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\nfooter a {\\n  margin-left: 1rem;\\n  color: #f5c518;\\n}\\n\\n@media screen and (min-width: 768px) {\\n  header {\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: flex-start;\\n    align-items: center;\\n  }\\n  header button {\\n    margin-left: 2rem;\\n  }\\n  header h1 {\\n    font-size: 2rem;\\n    margin-left: 2rem;\\n  }\\n  header h2 {\\n    font-size: 1rem;\\n    margin-left: auto;\\n  }\\n  h3 {\\n    margin-top: 1rem;\\n    font-size: 1.5rem;\\n    margin-left: 2rem;\\n    color: white;\\n  }\\n  h3:hover {\\n    text-decoration: underline;\\n  }\\n  .search-bar {\\n    position: static;\\n    width: 30vw;\\n    height: 35px;\\n    border: 1px solid #f5c518;\\n    margin-left: auto;\\n  }\\n  .search-bar input {\\n    width: 100%;\\n  }\\n  .searchIconDesktopBtn {\\n    margin: 0 4rem 0 0;\\n  }\\n  .cards {\\n    display: grid;\\n    grid-template-columns: auto auto auto auto;\\n  }\\n  .cards .cardItem .cardName {\\n    height: 75px;\\n  }\\n  .cards .cardItem .starCount {\\n    width: 10%;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-api-based-webapp/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://javascript-api-based-webapp/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://javascript-api-based-webapp/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-api-based-webapp/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-api-based-webapp/./src/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-api-based-webapp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-api-based-webapp/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-api-based-webapp/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-api-based-webapp/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-api-based-webapp/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-api-based-webapp/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _modules_tvmaze_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tvmaze.js */ \"./src/modules/tvmaze.js\");\n/* harmony import */ var _modules_involvement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/involvement.js */ \"./src/modules/involvement.js\");\n\r\n\r\n\r\n// import addElem from './modules/add-elem.js';\r\n\r\n// Search button\r\nconst searchIcon = document.querySelector('#search-btn');\r\nconst searchBarContainer = document.querySelector('.search-bar');\r\nconst searchCloseBtn = document.querySelector('#search-close-btn');\r\nconst menuIcon = document.querySelector('#menu-icon');\r\nconst header = document.querySelector('header');\r\n\r\n// Search Bar For Desktop\r\nif (window.innerWidth > 768) {\r\n  searchBarContainer.classList.remove('hide');\r\n  menuIcon.classList.remove('hide');\r\n  const menuText = document.createElement('span');\r\n  menuText.style.fontSize = '1.25rem';\r\n  menuText.textContent += 'Menu';\r\n  menuIcon.append(menuText);\r\n  searchCloseBtn.classList.add('hide');\r\n  searchIcon.classList.add('hide');\r\n\r\n  // Add Search Icon\r\n  const searchIconDesktopBtn = document.createElement('button');\r\n  searchIconDesktopBtn.setAttribute('type', 'button');\r\n  searchIconDesktopBtn.classList.add('searchIconDesktopBtn');\r\n  const searchIconDesktopSpan = document.createElement('span');\r\n  searchIconDesktopSpan.classList.add('material-icons-round', 'icons');\r\n  searchIconDesktopSpan.textContent = 'search';\r\n\r\n  searchIconDesktopBtn.append(searchIconDesktopSpan);\r\n  header.append(searchIconDesktopBtn);\r\n}\r\n\r\n// Get Data from TVMAZE API\r\nconst rootUrl = 'https://api.tvmaze.com/singlesearch/shows?q=';\r\nconst searchResults = document.querySelector('h2');\r\nlet query = '';\r\n\r\n// Update Likes\r\nconst updateLikes = async () => {\r\n  const response = await (0,_modules_involvement_js__WEBPACK_IMPORTED_MODULE_2__.getLikes)();\r\n  document.querySelectorAll('.starCount').forEach((button) => {\r\n    for (let i = 0; i < response.length; i += 1) {\r\n      if (response[i].item_id === Number(button.id)) {\r\n        button.lastChild.textContent = response[i].likes;\r\n      }\r\n    }\r\n  });\r\n};\r\n\r\n// Display Cards Dynamically\r\nconst cards = document.querySelector('.cards');\r\nconst createElement = async (requestURL) => {\r\n  cards.innerHTML = '';\r\n  await (0,_modules_tvmaze_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(requestURL)\r\n    .then((data) => {\r\n      let searchCount = 0;\r\n      const dataArray = data.embedded.episodes;\r\n      dataArray.forEach((el) => {\r\n        const div = document.createElement('div');\r\n        div.classList.add('cardItem');\r\n        const divImg = document.createElement('div');\r\n        divImg.classList.add('cardImg');\r\n        divImg.style.backgroundImage = `url(${el.image.original})`;\r\n        const h1 = document.createElement('h1');\r\n        h1.classList.add('cardName');\r\n        h1.textContent = `S${el.season}E${el.number} ${el.name}`;\r\n        const details = document.createElement('p');\r\n        details.classList.add('cardDetails');\r\n        details.innerHTML = `Plot Summary: <br>${el.summary}`;\r\n        const h2 = document.createElement('h2');\r\n        h2.classList.add('cardRuntime');\r\n        h2.textContent = `Runtime: ${el.runtime} mins Rating: ${el.rating.average}`;\r\n\r\n        const starContainer = document.createElement('div');\r\n        starContainer.classList.add('starContainer');\r\n\r\n        const starRate = document.createElement('span');\r\n        starRate.classList.add('material-icons-round');\r\n        starRate.classList.add('icons');\r\n        starRate.classList.add('starRate');\r\n        starRate.textContent = 'star_rate';\r\n\r\n        const starCount = document.createElement('span');\r\n        starCount.classList.add('starCount');\r\n        starCount.setAttribute('id', el.id);\r\n        starCount.textContent = '0';\r\n\r\n        const starBorder = document.createElement('span');\r\n        starBorder.classList.add('material-icons-round');\r\n        starBorder.classList.add('icons');\r\n        starBorder.classList.add('starBorder');\r\n        starBorder.textContent = 'star_border';\r\n        starBorder.setAttribute('id', el.id);\r\n\r\n        // Like Event\r\n        starBorder.addEventListener('click', () => {\r\n          (0,_modules_involvement_js__WEBPACK_IMPORTED_MODULE_2__.postLike)(el.show.id);\r\n          starBorder.classList.toggle('liked');\r\n          starCount.setAttribute('disabled', true);\r\n          setTimeout(updateLikes, 1000);\r\n        });\r\n\r\n        const cBtn = document.createElement('button');\r\n        cBtn.classList.add('commentBtn');\r\n        cBtn.textContent = 'Comments';\r\n        starContainer.append(starRate, starCount, starBorder);\r\n        div.append(divImg, starContainer, h1, h2, details, cBtn);\r\n        cards.append(div);\r\n        searchCount += 1;\r\n        searchResults.textContent = `Search Results (${searchCount})`;\r\n      });\r\n    });\r\n};\r\n\r\nconst searchInput = document.querySelector('#search-input');\r\n\r\n// Search Event - Mobile Version\r\nsearchIcon.onclick = () => {\r\n  searchBarContainer.classList.remove('hide');\r\n\r\n  // // Add event listener\r\n  searchCloseBtn.onclick = () => {\r\n    searchBarContainer.classList.add('hide');\r\n  };\r\n};\r\n\r\n// Enter Keyboard Support - Search Mobile\r\nif (window.innerWidth < 768) {\r\n  window.addEventListener('keypress', (e) => {\r\n    if (e.key === 'Enter') {\r\n      if (!searchInput.value) {\r\n        window.onload();\r\n      }\r\n      query = searchInput.value;\r\n      searchInput.value = '';\r\n      searchBarContainer.classList.add('hide');\r\n      createElement(`${rootUrl}${query}&embed=episodes`);\r\n      updateLikes();\r\n    }\r\n  });\r\n}\r\n\r\n// Search Event - Desktop Version\r\nif (window.innerWidth > 768) {\r\n  const searchIconDesktopBtn = document.querySelector('.searchIconDesktopBtn');\r\n  searchIconDesktopBtn.onclick = () => {\r\n    if (searchInput.value) {\r\n      query = searchInput.value;\r\n      searchInput.value = '';\r\n    }\r\n    if (!searchInput.value) {\r\n      window.onload();\r\n    }\r\n    createElement(`${rootUrl}${query}&embed=episodes`);\r\n    updateLikes();\r\n  };\r\n}\r\n\r\n// Enter Keyboard Support - Search Desktop\r\nif (window.innerWidth > 768) {\r\n  window.addEventListener('keypress', (e) => {\r\n    if (e.key === 'Enter') {\r\n      if (!searchInput.value) {\r\n        window.onload();\r\n      }\r\n      query = searchInput.value;\r\n      searchInput.value = '';\r\n      createElement(`${rootUrl}${query}&embed=episodes`);\r\n      updateLikes();\r\n    }\r\n  });\r\n}\r\n\r\n// Default Search On Page Load\r\nconst createElementForShows = async (requestURL) => {\r\n  cards.innerHTML = '';\r\n  await (0,_modules_tvmaze_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(requestURL)\r\n    .then((data) => {\r\n      let searchCount = 0;\r\n      data.forEach((el) => {\r\n        const div = document.createElement('div');\r\n        div.classList.add('cardItem');\r\n        const divImg = document.createElement('div');\r\n        divImg.classList.add('cardImg');\r\n        divImg.style.backgroundImage = `url(${el.image.original})`;\r\n        const h1 = document.createElement('h1');\r\n        h1.classList.add('cardName');\r\n        h1.textContent = el.name;\r\n\r\n        const starContainer = document.createElement('div');\r\n        starContainer.classList.add('starContainer');\r\n\r\n        const starRate = document.createElement('span');\r\n        starRate.classList.add('material-icons-round');\r\n        starRate.classList.add('icons');\r\n        starRate.classList.add('starRate');\r\n        starRate.textContent = 'star_rate';\r\n\r\n        const starCount = document.createElement('span');\r\n        starCount.classList.add('starCount');\r\n        starCount.setAttribute('id', el.id);\r\n        starCount.textContent = '0';\r\n\r\n        const starBorder = document.createElement('span');\r\n        starBorder.classList.add('material-icons-round');\r\n        starBorder.classList.add('icons');\r\n        starBorder.classList.add('starBorder');\r\n        starBorder.textContent = 'star_border';\r\n        starBorder.setAttribute('id', el.id);\r\n\r\n        // Like Event\r\n        starBorder.addEventListener('click', () => {\r\n          (0,_modules_involvement_js__WEBPACK_IMPORTED_MODULE_2__.postLike)(el.id);\r\n          starBorder.classList.toggle('liked');\r\n          starCount.setAttribute('disabled', true);\r\n          setTimeout(updateLikes, 1000);\r\n        });\r\n\r\n        const cBtn = document.createElement('button');\r\n        cBtn.classList.add('commentBtn');\r\n        cBtn.textContent = 'Comments';\r\n        starContainer.append(starRate, starCount, starBorder);\r\n        div.append(divImg, starContainer, h1, cBtn);\r\n        cards.append(div);\r\n        searchCount += 1;\r\n        searchResults.textContent = `Search Results (${searchCount})`;\r\n      });\r\n    });\r\n};\r\n\r\nwindow.onload = () => {\r\n  const defaultURL = 'https://api.tvmaze.com/shows';\r\n  createElementForShows(defaultURL);\r\n  setTimeout(updateLikes, 1000);\r\n};\r\n\r\n// // Homepage Link\r\nconst h1 = document.querySelector('h1');\r\nh1.addEventListener('click', () => {\r\n  window.location.reload();\r\n});\n\n//# sourceURL=webpack://javascript-api-based-webapp/./src/index.js?");

/***/ }),

/***/ "./src/modules/involvement.js":
/*!************************************!*\
  !*** ./src/modules/involvement.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment),\n/* harmony export */   \"postLike\": () => (/* binding */ postLike)\n/* harmony export */ });\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\r\nconst appID = 'OQCl5yEXf3GxJhpasEHV';\r\n\r\nconst postLike = async (itemID) => {\r\n  const response = await fetch(`${url}${appID}/likes`, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify({ item_id: itemID }),\r\n  });\r\n  const post = await response.text();\r\n  return post;\r\n};\r\n\r\nconst getLikes = async () => {\r\n  const response = await fetch(`${url}${appID}/likes`);\r\n  const likes = await response.json();\r\n  return likes;\r\n};\r\n\r\nconst postComment = async (_id, _name, _comment) => {\r\n  const response = await fetch(`${url}${appID}/comments`, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify({\r\n      item_id: _id,\r\n      username: _name,\r\n      comment: _comment,\r\n    }),\r\n  });\r\n  const post = await response.text();\r\n  return post;\r\n};\r\n\r\nconst getComments = async (_id) => {\r\n  const response = await fetch(`${url}${appID}/comments?item_id=${_id}`);\r\n  const comments = await response.json();\r\n  return comments;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://javascript-api-based-webapp/./src/modules/involvement.js?");

/***/ }),

/***/ "./src/modules/tvmaze.js":
/*!*******************************!*\
  !*** ./src/modules/tvmaze.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = async (url) => {\r\n  const response = await fetch(url);\r\n  const data = await response.json();\r\n  return data;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://javascript-api-based-webapp/./src/modules/tvmaze.js?");

/***/ }),

/***/ "./src/assets/bg_texture.png":
/*!***********************************!*\
  !*** ./src/assets/bg_texture.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a1ddc5f5295429dcc5a7.png\";\n\n//# sourceURL=webpack://javascript-api-based-webapp/./src/assets/bg_texture.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;