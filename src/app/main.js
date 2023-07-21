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

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   defTasks: () => (/* binding */ defTasks),\n/* harmony export */   deleteAllTasks: () => (/* binding */ deleteAllTasks),\n/* harmony export */   doneAllTasks: () => (/* binding */ doneAllTasks),\n/* harmony export */   form: () => (/* binding */ form),\n/* harmony export */   renderTask: () => (/* binding */ renderTask),\n/* harmony export */   taskInput: () => (/* binding */ taskInput),\n/* harmony export */   tasksList: () => (/* binding */ tasksList)\n/* harmony export */ });\n/* harmony import */ var _scripts_addTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/addTask */ \"./src/app/scripts/addTask.js\");\n/* harmony import */ var _scripts_deleteTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/deleteTask */ \"./src/app/scripts/deleteTask.js\");\n/* harmony import */ var _scripts_doneAllTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/doneAllTasks */ \"./src/app/scripts/doneAllTasks.js\");\n/* harmony import */ var _scripts_doneTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/doneTask */ \"./src/app/scripts/doneTask.js\");\n/* harmony import */ var _scripts_removeAllTasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/removeAllTasks */ \"./src/app/scripts/removeAllTasks.js\");\n/* harmony import */ var _scripts_getTasksService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/getTasksService */ \"./src/app/scripts/getTasksService.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Находим элементы на странице\r\nconst form = document.querySelector(\"#form\");\r\nconst taskInput = document.querySelector(\"#taskInput\");\r\nconst tasksList = document.querySelector(\"#tasksList\");\r\nconst deleteAllTasks = document.querySelector(\"#deleteAll\");\r\nconst doneAllTasks = document.querySelector(\"#doneAll\");\r\n\r\nform.addEventListener(\"submit\",  _scripts_addTask__WEBPACK_IMPORTED_MODULE_0__.addTask); // Добавление задачи\r\ntasksList.addEventListener(\"click\", _scripts_deleteTask__WEBPACK_IMPORTED_MODULE_1__.deleteTask); // Удаление задачи\r\ntasksList.addEventListener(\"click\", _scripts_doneTask__WEBPACK_IMPORTED_MODULE_3__.doneTask); // Задача выполнена\r\ndeleteAllTasks.addEventListener(\"click\", _scripts_removeAllTasks__WEBPACK_IMPORTED_MODULE_4__.removeAllTasks); // Удалить все задачи\r\ndoneAllTasks.addEventListener(\"click\", _scripts_doneAllTasks__WEBPACK_IMPORTED_MODULE_2__.doneAllTask); // Удалить все задачи\r\n\r\n\r\nclass tasksType {\r\n    constructor() {\r\n        this.tasks = [];\r\n    }\r\n\r\n    GetTasks() {\r\n        return this.tasks;\r\n    }\r\n    SetTasks(newTask) {\r\n        this.tasks = [...this.tasks, newTask];\r\n    }\r\n    ReplaceTasks(newTasks){\r\n        this.tasks = newTasks;\r\n    }\r\n}\r\nconst defTasks = new tasksType()\r\n\r\n;(0,_scripts_getTasksService__WEBPACK_IMPORTED_MODULE_5__.getTasksFromLocalStorage)();\r\n\r\n\r\n\r\n\r\n\r\n// Функции\r\n\r\nfunction renderTask(task) {\r\n    const cssClass = task.done === true ? \"task-title task-title--done\" : \"task-title\";\r\n\r\n    const taskHTML = `<li id=\"${task.id}\"class=\"list-group-item d-flex justify-content-between task-item\">\r\n                <span class=\"${cssClass}\">${task.text}</span>\r\n                <div class=\"task-item__buttons\">\r\n                    <button type=\"button\" data-action=\"done\" class=\"btn-action\">\r\n                        <img src=\"./img/tick.svg\" alt=\"Done\" width=\"18\" height=\"18\">\r\n                    </button>\r\n                    <button type=\"button\" data-action=\"delete\" class=\"btn-action\">\r\n                        <img src=\"./img/cross.svg\" alt=\"Done\" width=\"18\" height=\"18\">\r\n                    </button>\r\n                </div>\r\n            </li>`;\r\n    // добавляем на страницу\r\n    tasksList.insertAdjacentHTML(\"beforeend\", taskHTML);\r\n}\r\n\n\n//# sourceURL=webpack://todo/./src/app/app.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app/app.js");
/******/ 	
/******/ })()
;