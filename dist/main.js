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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/styles/style.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/styles/style.scss ***!
  \****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  background-color: #E4E5E7;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 50px;\n  min-width: 50vh;\n}\n\n.input-group {\n  border: 1px solid rgb(13, 110, 253);\n  border-radius: var(--bs-border-radius);\n}\n\n#deleteAll {\n  margin-top: 20px;\n}\n\n.container {\n  max-width: 600px;\n}\n\n.bh {\n  height: 40px;\n}\n\nhtml {\n  min-width: 50vh;\n}\n\n.aside {\n  height: 400px;\n}\n\n.main {\n  height: 400px;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.task-title {\n  font-weight: 400;\n  padding-top: 5px;\n}\n\n.gray {\n  color: #BDBDBD;\n}\n\n.task-title--done {\n  text-decoration: line-through;\n  color: #CDCDCD;\n}\n\n.task-item__buttons {\n  display: flex;\n  column-gap: 5px;\n}\n\n.notify-holder {\n  height: 60px;\n  margin-bottom: 20px;\n}\n\n.empty-list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 1em;\n  padding-bottom: 1em;\n}\n\n.empty-list__title {\n  font-size: 28px;\n  margin-bottom: 15px;\n  font-weight: 300;\n}\n\n.empty-list__icon {\n  color: #42BE2A;\n  font-size: 32px;\n}\n\n.btn-action {\n  background-color: #e0e5ea;\n  padding: 8px 10px;\n  cursor: pointer;\n  border: 0;\n  border-radius: 4px;\n  transition: opacity 0.2s ease-in;\n  opacity: 0.5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.btn-action:hover {\n  background-color: #e0e5ea;\n  opacity: 1;\n}\n.btn-action img {\n  pointer-events: none;\n}\n\n.none {\n  display: none !important;\n}\n\n.float-right {\n  float: right;\n}\n\n.copyright {\n  margin-top: 40px;\n  font-size: 14px;\n  color: gray;\n  text-align: center;\n  margin-bottom: 30px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/app/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/app/styles/style.scss":
/*!***********************************!*\
  !*** ./src/app/styles/style.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/styles/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo/./src/app/styles/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   defTasks: () => (/* binding */ defTasks),\n/* harmony export */   deleteAllTasks: () => (/* binding */ deleteAllTasks),\n/* harmony export */   doneAllTasks: () => (/* binding */ doneAllTasks),\n/* harmony export */   form: () => (/* binding */ form),\n/* harmony export */   renderTask: () => (/* binding */ renderTask),\n/* harmony export */   taskInput: () => (/* binding */ taskInput),\n/* harmony export */   tasksList: () => (/* binding */ tasksList)\n/* harmony export */ });\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/app/styles/style.scss\");\n/* harmony import */ var _scripts_addTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/addTask */ \"./src/app/scripts/addTask.js\");\n/* harmony import */ var _scripts_deleteTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/deleteTask */ \"./src/app/scripts/deleteTask.js\");\n/* harmony import */ var _scripts_doneAllTasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/doneAllTasks */ \"./src/app/scripts/doneAllTasks.js\");\n/* harmony import */ var _scripts_doneTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/doneTask */ \"./src/app/scripts/doneTask.js\");\n/* harmony import */ var _scripts_removeAllTasks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/removeAllTasks */ \"./src/app/scripts/removeAllTasks.js\");\n/* harmony import */ var _scripts_getTasksService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/getTasksService */ \"./src/app/scripts/getTasksService.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Находим элементы на странице\r\nconst form = document.querySelector(\"#form\");\r\nconst taskInput = document.querySelector(\"#taskInput\");\r\nconst tasksList = document.querySelector(\"#tasksList\");\r\nconst deleteAllTasks = document.querySelector(\"#deleteAll\");\r\nconst doneAllTasks = document.querySelector(\"#doneAll\");\r\n\r\nform.addEventListener(\"submit\",  _scripts_addTask__WEBPACK_IMPORTED_MODULE_1__.addTask); // Добавление задачи\r\ntasksList.addEventListener(\"click\", _scripts_deleteTask__WEBPACK_IMPORTED_MODULE_2__.deleteTask); // Удаление задачи\r\ntasksList.addEventListener(\"click\", _scripts_doneTask__WEBPACK_IMPORTED_MODULE_4__.doneTask); // Задача выполнена\r\ndeleteAllTasks.addEventListener(\"click\", _scripts_removeAllTasks__WEBPACK_IMPORTED_MODULE_5__.removeAllTasks); // Удалить все задачи\r\ndoneAllTasks.addEventListener(\"click\", _scripts_doneAllTasks__WEBPACK_IMPORTED_MODULE_3__.doneAllTask); // Удалить все задачи\r\n\r\n\r\nclass tasksType {\r\n    constructor() {\r\n        this.tasks = [];\r\n    }\r\n\r\n    GetTasks() {\r\n        return this.tasks;\r\n    }\r\n    SetTasks(newTask) {\r\n        this.tasks = [...this.tasks, newTask];\r\n    }\r\n    ReplaceTasks(newTasks){\r\n        this.tasks = newTasks;\r\n    }\r\n}\r\nconst defTasks = new tasksType()\r\n\r\n;(0,_scripts_getTasksService__WEBPACK_IMPORTED_MODULE_6__.getTasksFromLocalStorage)();\r\n\r\n\r\n\r\n\r\n\r\n// Функции\r\n\r\nfunction renderTask(task) {\r\n    const cssClass = task.done === true ? \"task-title task-title--done\" : \"task-title\";\r\n\r\n    const taskHTML = `<li id=\"${task.id}\"class=\"list-group-item d-flex justify-content-between task-item\">\r\n                <span class=\"${cssClass}\">${task.text}</span>\r\n                <div class=\"task-item__buttons\">\r\n                    <button type=\"button\" data-action=\"done\" class=\"btn-action\">\r\n                        <img src=\"./img/tick.svg\" alt=\"Done\" width=\"18\" height=\"18\">\r\n                    </button>\r\n                    <button type=\"button\" data-action=\"delete\" class=\"btn-action\">\r\n                        <img src=\"./img/cross.svg\" alt=\"Done\" width=\"18\" height=\"18\">\r\n                    </button>\r\n                </div>\r\n            </li>`;\r\n    // добавляем на страницу\r\n    tasksList.insertAdjacentHTML(\"beforeend\", taskHTML);\r\n}\r\n\n\n//# sourceURL=webpack://todo/./src/app/app.js?");

/***/ }),

/***/ "./src/app/scripts/addTask.js":
/*!************************************!*\
  !*** ./src/app/scripts/addTask.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTask: () => (/* binding */ addTask)\n/* harmony export */ });\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.js */ \"./src/app/app.js\");\n/* harmony import */ var _checkEmptyList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkEmptyList.js */ \"./src/app/scripts/checkEmptyList.js\");\n/* harmony import */ var _saveToLocalStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saveToLocalStorage.js */ \"./src/app/scripts/saveToLocalStorage.js\");\n\r\n\r\n\r\n\r\nfunction addTask(event) {\r\n    console.log('>>>ADD TASK<<<');\r\n    // отмена отправки формы\r\n    event.preventDefault()\r\n\r\n    // достаем текст из поля ввода\r\n    const taskText = _app_js__WEBPACK_IMPORTED_MODULE_0__.taskInput.value;\r\n\r\n    //Описываем задачу в виде объекта\r\n    const newTask = {\r\n        id: Date.now(),\r\n        text: taskText,\r\n        done: false\r\n    };\r\n    _app_js__WEBPACK_IMPORTED_MODULE_0__.defTasks.SetTasks(newTask)\r\n    ;(0,_app_js__WEBPACK_IMPORTED_MODULE_0__.renderTask)(newTask)\r\n\r\n    // Очистка поля ввода и фокус\r\n    _app_js__WEBPACK_IMPORTED_MODULE_0__.taskInput.value = '';\r\n    _app_js__WEBPACK_IMPORTED_MODULE_0__.taskInput.focus();\r\n    (0,_checkEmptyList_js__WEBPACK_IMPORTED_MODULE_1__.checkEmptyList)()\r\n    ;(0,_saveToLocalStorage_js__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)()\r\n}\n\n//# sourceURL=webpack://todo/./src/app/scripts/addTask.js?");

/***/ }),

/***/ "./src/app/scripts/checkEmptyList.js":
/*!*******************************************!*\
  !*** ./src/app/scripts/checkEmptyList.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkEmptyList: () => (/* binding */ checkEmptyList)\n/* harmony export */ });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ \"./src/app/app.js\");\n\r\n\r\nfunction checkEmptyList() {\r\n    console.log('>>>CHECK EMPTY LIST<<<');\r\n\r\n    if (_app__WEBPACK_IMPORTED_MODULE_0__.defTasks.GetTasks().length === 0) {\r\n        const emptyListElement = `<li id=\"emptyList\" class=\"list-group-item empty-list\">\r\n              <img src=\"./img/leaf.svg\" alt=\"Empty\" width=\"48\" class=\"mt-3\">\r\n              <div class=\"empty-list__title\">Список дел пуст</div>\r\n           </li>`;\r\n        _app__WEBPACK_IMPORTED_MODULE_0__.tasksList.insertAdjacentHTML(\"afterbegin\", emptyListElement)\r\n    }\r\n    if (_app__WEBPACK_IMPORTED_MODULE_0__.defTasks.GetTasks().length > 0) {\r\n        const emptyListElement = document.querySelector('#emptyList')\r\n        emptyListElement ? emptyListElement.remove() : null;\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://todo/./src/app/scripts/checkEmptyList.js?");

/***/ }),

/***/ "./src/app/scripts/deleteTask.js":
/*!***************************************!*\
  !*** ./src/app/scripts/deleteTask.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteTask: () => (/* binding */ deleteTask)\n/* harmony export */ });\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.js */ \"./src/app/app.js\");\n/* harmony import */ var _checkEmptyList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkEmptyList.js */ \"./src/app/scripts/checkEmptyList.js\");\n/* harmony import */ var _saveToLocalStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saveToLocalStorage.js */ \"./src/app/scripts/saveToLocalStorage.js\");\n\r\n\r\n\r\n\r\nfunction deleteTask(event) {\r\n    console.log('>>>DELETE TASK<<<');\r\n\r\n    //Если клик не по кнопке удалить задачу\r\n    if (event.target.dataset.action !== 'delete') return;\r\n\r\n    const parentNode = event.target.closest('.list-group-item');\r\n    const id = Number(parentNode.id);\r\n\r\n    // удаляем из массива фильтрацией\r\n    const newTasks = _app_js__WEBPACK_IMPORTED_MODULE_0__.defTasks.GetTasks().filter((task) => task.id !== id)\r\n    _app_js__WEBPACK_IMPORTED_MODULE_0__.defTasks.ReplaceTasks(newTasks)\r\n\r\n    // удаляем из разметки\r\n    parentNode.remove();\r\n    (0,_checkEmptyList_js__WEBPACK_IMPORTED_MODULE_1__.checkEmptyList)()\r\n    ;(0,_saveToLocalStorage_js__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)()\r\n}\n\n//# sourceURL=webpack://todo/./src/app/scripts/deleteTask.js?");

/***/ }),

/***/ "./src/app/scripts/doneAllTasks.js":
/*!*****************************************!*\
  !*** ./src/app/scripts/doneAllTasks.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   doneAllTask: () => (/* binding */ doneAllTask)\n/* harmony export */ });\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.js */ \"./src/app/app.js\");\n/* harmony import */ var _saveToLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saveToLocalStorage.js */ \"./src/app/scripts/saveToLocalStorage.js\");\n\r\n\r\n\r\nfunction doneAllTask() {\r\n    console.log('>>>DELETE ALL TASK<<<');\r\n\r\n    const newTasks = _app_js__WEBPACK_IMPORTED_MODULE_0__.defTasks.GetTasks().map((task) => {\r\n        const newTask = { ...task };\r\n        newTask.done = true;\r\n        return newTask;\r\n    });\r\n\r\n    _app_js__WEBPACK_IMPORTED_MODULE_0__.defTasks.ReplaceTasks(newTasks);\r\n    (0,_saveToLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.saveToLocalStorage)();\r\n\r\n    const taskTitle = _app_js__WEBPACK_IMPORTED_MODULE_0__.tasksList.querySelectorAll(\".task-title\");\r\n    for (const element of taskTitle) {\r\n        element.classList.add(\"task-title--done\");\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://todo/./src/app/scripts/doneAllTasks.js?");

/***/ }),

/***/ "./src/app/scripts/doneTask.js":
/*!*************************************!*\
  !*** ./src/app/scripts/doneTask.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   doneTask: () => (/* binding */ doneTask)\n/* harmony export */ });\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.js */ \"./src/app/app.js\");\n/* harmony import */ var _saveToLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saveToLocalStorage.js */ \"./src/app/scripts/saveToLocalStorage.js\");\n\r\n\r\n\r\nfunction doneTask(event) {\r\n    console.log('>>>DONE TASK<<<');\r\n\r\n    if (event.target.dataset.action !== 'done') return\r\n\r\n    const parentNode = event.target.closest('.list-group-item');\r\n\r\n    // Поиск объекта\r\n    const id = Number(parentNode.id);\r\n    const newTasks = _app_js__WEBPACK_IMPORTED_MODULE_0__.defTasks.GetTasks().map(task=>{\r\n        if (task.id===id){\r\n            const newTask = { ...task };\r\n            newTask.done = true;\r\n            return newTask;\r\n        } else {\r\n            return task\r\n        }\r\n    })\r\n\r\n_app_js__WEBPACK_IMPORTED_MODULE_0__.defTasks.ReplaceTasks(newTasks)\r\n\r\n    // Присвоение стиля done (toggle переключает (добавляет/убирает))\r\n    const taskTitle = parentNode.querySelector('.task-title');\r\n    taskTitle.classList.toggle('task-title--done')\r\n    ;(0,_saveToLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.saveToLocalStorage)()\r\n}\n\n//# sourceURL=webpack://todo/./src/app/scripts/doneTask.js?");

/***/ }),

/***/ "./src/app/scripts/getTasksService.js":
/*!********************************************!*\
  !*** ./src/app/scripts/getTasksService.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getTasksFromLocalStorage: () => (/* binding */ getTasksFromLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.js */ \"./src/app/app.js\");\n/* harmony import */ var _checkEmptyList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkEmptyList.js */ \"./src/app/scripts/checkEmptyList.js\");\n\r\n\r\n\r\nfunction getTasksFromLocalStorage() {\r\n    console.log('>>>GET TASKS FROM LOCAL STORAGE<<<');\r\n\r\n    if (localStorage.getItem(\"tasks\")) {\r\n        _app_js__WEBPACK_IMPORTED_MODULE_0__.defTasks.ReplaceTasks(JSON.parse(localStorage.getItem(\"tasks\")))\r\n        _app_js__WEBPACK_IMPORTED_MODULE_0__.defTasks.GetTasks().forEach((task) => (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.renderTask)(task));\r\n        (0,_checkEmptyList_js__WEBPACK_IMPORTED_MODULE_1__.checkEmptyList)();\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo/./src/app/scripts/getTasksService.js?");

/***/ }),

/***/ "./src/app/scripts/removeAllTasks.js":
/*!*******************************************!*\
  !*** ./src/app/scripts/removeAllTasks.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeAllTasks: () => (/* binding */ removeAllTasks)\n/* harmony export */ });\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.js */ \"./src/app/app.js\");\n/* harmony import */ var _checkEmptyList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkEmptyList.js */ \"./src/app/scripts/checkEmptyList.js\");\n/* harmony import */ var _saveToLocalStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saveToLocalStorage.js */ \"./src/app/scripts/saveToLocalStorage.js\");\n\r\n\r\n\r\n\r\nfunction removeAllTasks() {\r\n    console.log(\"REMOVE ALL TASKS\");\r\n    _app_js__WEBPACK_IMPORTED_MODULE_0__.defTasks.ReplaceTasks([]);\r\n    (0,_saveToLocalStorage_js__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)();\r\n    _app_js__WEBPACK_IMPORTED_MODULE_0__.tasksList.innerHTML = \"\";\r\n\r\n    // while (tasksList.firstChild){\r\n    // tasksList.removeChild(tasksList.firstChild)}\r\n    (0,_checkEmptyList_js__WEBPACK_IMPORTED_MODULE_1__.checkEmptyList)();\r\n}\r\n\n\n//# sourceURL=webpack://todo/./src/app/scripts/removeAllTasks.js?");

/***/ }),

/***/ "./src/app/scripts/saveToLocalStorage.js":
/*!***********************************************!*\
  !*** ./src/app/scripts/saveToLocalStorage.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   saveToLocalStorage: () => (/* binding */ saveToLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ \"./src/app/app.js\");\n\r\n\r\nfunction saveToLocalStorage() {\r\n    console.log('>>>SAVE TO LOCAL STORAGE<<<');\r\n\r\n    localStorage.setItem('tasks', JSON.stringify(_app__WEBPACK_IMPORTED_MODULE_0__.defTasks.GetTasks()))\r\n}\n\n//# sourceURL=webpack://todo/./src/app/scripts/saveToLocalStorage.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app/app.js");
/******/ 	
/******/ })()
;