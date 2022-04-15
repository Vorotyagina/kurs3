/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./style.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style.css ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../fonts/Stratos-Regular.ttf */ "./fonts/Stratos-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../fonts/Stratos-Regular.woff */ "./fonts/Stratos-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! img/close_card.jpg */ "./img/close_card.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: StratosSkyeng;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"ttf\"),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n    font-weight: 400;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nimg {\n    max-width: 100%;\n    transition: all 1s;\n}\n\nbody {\n    font-family: Montserrat, sans-serif;\n    background-color: #004980;\n}\n\na {\n    text-decoration: none;\n}\n\n.center {\n    padding-left: calc(50% - 615px);\n    padding-right: calc(50% - 615px);\n}\n\n.div-game-field {\n    margin: auto;\n    width: 1030px;\n}\n\n.div-main {\n    background-color: #004980;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border: 1px;\n    height: 100vh;\n}\n\n.disabled {\n    display: none;\n}\n\n.div-container {\n    width: 480px;\n    height: 459px;\n    background-color: #c2f5ff;\n    border-radius: 12px;\n    padding: 52px 69px;\n    box-sizing: border-box;\n    border: #000 1px;\n    display: inline-block;\n}\n\n.div-container-again {\n    width: 480px;\n    height: 459px;\n    background-color: #c2f5ff;\n    background-color: #241245;\n    border-radius: 12px;\n    padding: 20px 69px 52px;\n    box-sizing: border-box;\n    border: #000 1px;\n    display: inline-block;\n}\n\n.div-container-image {\n    display: flex;\n    justify-content: center;\n    margin-bottom: 10px;\n}\n\n.div-container-text {\n    display: flex;\n    text-align: center;\n    justify-content: center;\n    font-size: 40px;\n    font-family: StratosSkyeng, sans-serif;\n    color: #004980;\n    font-weight: 400;\n}\n\n.div-container-time-small-text {\n    font-family: StratosSkyeng, sans-serif;\n    font-weight: 400;\n    font-size: 24px;\n    color: #000;\n    text-align: center;\n    padding-top: 28px;\n}\n\n.div-container-time-value {\n    font-family: StratosSkyeng, sans-serif;\n    font-weight: 400;\n    font-size: 64px;\n    color: #000;\n    text-align: center;\n    padding-top: 10px;\n}\n\n.div-container-level {\n    display: flex;\n    flex-direction: row;\n    gap: 24px;\n}\n\n.level-number {\n    width: 97px;\n    height: 98px;\n    margin-top: 48px;\n    border-radius: 12px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #fff;\n    font-weight: 400;\n    font-size: 64px;\n    color: #0080c1;\n    font-family: StratosSkyeng, sans-serif;\n}\n\n.div-container-level-number {\n    width: 97px;\n    height: 98px;\n    margin-top: 48px;\n    border-radius: 12px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #fff;\n    font-weight: 400;\n    font-size: 64px;\n    color: #0080c1;\n    font-family: StratosSkyeng, sans-serif;\n}\n\n.div-container-button {\n    margin-top: 67px;\n    display: flex;\n    justify-content: center;\n}\n\n.div-container-button-again {\n    margin-top: 40px;\n    display: flex;\n    justify-content: center;\n}\n\n.button-again {\n    width: 246px;\n    height: 48px;\n    border-radius: 12px;\n    border: none;\n    font-family: StratosSkyeng, sans-serif;\n    font-weight: 400;\n    font-size: 24px;\n    color: #ffff;\n    background-color: #7ac100;\n}\n\n.enter {\n    width: 246px;\n    height: 48px;\n    border-radius: 12px;\n    border: none;\n    font-family: StratosSkyeng, sans-serif;\n    font-weight: 400;\n    font-size: 24px;\n    color: #ffff;\n    background-color: #7ac100;\n}\n\n.button-start-again {\n    width: 246px;\n    height: 48px;\n    border-radius: 12px;\n    border: none;\n    font-family: StratosSkyeng, sans-serif;\n    font-weight: 400;\n    font-size: 24px;\n    color: #ffff;\n    background-color: #7ac100;\n}\n\n.gallery-title {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 1010px;\n    padding-left: 22px;\n    padding-right: 22px;\n    margin-top: 22px;\n    margin-bottom: 41px;\n}\n\n.time {\n    display: flex;\n    flex-direction: column;\n    justify-content: right;\n    vertical-align: top;\n    width: 155px;\n    font-family: StratosSkyeng, sans-serif;\n    font-size: 64px;\n    font-weight: 400;\n    color: #fff;\n}\n\n.time-text {\n    font-family: StratosSkyeng, sans-serif;\n    font-size: 16px;\n    font-weight: 400;\n    color: #fff;\n    display: flex;\n    gap: 57px;\n    text-align: right;\n    vertical-align: bottom;\n    width: 100%;\n    padding-left: 39px;\n}\n\n.time-value {\n    display: flex;\n    align-items: top;\n}\n\n.gallery {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n    flex-wrap: wrap;\n    row-gap: 15px;\n    padding-left: 25px;\n    padding-right: 25px;\n}\n\n.card {\n    width: 95px;\n    height: 133px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n", "",{"version":3,"sources":["webpack://./style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: StratosSkyeng;\n    src: url(\"/fonts/Stratos-Regular.ttf\") format(\"ttf\"),\n        url(\"/fonts/Stratos-Regular.woff\") format(\"woff\");\n    font-weight: 400;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nimg {\n    max-width: 100%;\n    transition: all 1s;\n}\n\nbody {\n    font-family: Montserrat, sans-serif;\n    background-color: #004980;\n}\n\na {\n    text-decoration: none;\n}\n\n.center {\n    padding-left: calc(50% - 615px);\n    padding-right: calc(50% - 615px);\n}\n\n.div-game-field {\n    margin: auto;\n    width: 1030px;\n}\n\n.div-main {\n    background-color: #004980;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border: 1px;\n    height: 100vh;\n}\n\n.disabled {\n    display: none;\n}\n\n.div-container {\n    width: 480px;\n    height: 459px;\n    background-color: #c2f5ff;\n    border-radius: 12px;\n    padding: 52px 69px;\n    box-sizing: border-box;\n    border: #000 1px;\n    display: inline-block;\n}\n\n.div-container-again {\n    width: 480px;\n    height: 459px;\n    background-color: #c2f5ff;\n    background-color: #241245;\n    border-radius: 12px;\n    padding: 20px 69px 52px;\n    box-sizing: border-box;\n    border: #000 1px;\n    display: inline-block;\n}\n\n.div-container-image {\n    display: flex;\n    justify-content: center;\n    margin-bottom: 10px;\n}\n\n.div-container-text {\n    display: flex;\n    text-align: center;\n    justify-content: center;\n    font-size: 40px;\n    font-family: StratosSkyeng, sans-serif;\n    color: #004980;\n    font-weight: 400;\n}\n\n.div-container-time-small-text {\n    font-family: StratosSkyeng, sans-serif;\n    font-weight: 400;\n    font-size: 24px;\n    color: #000;\n    text-align: center;\n    padding-top: 28px;\n}\n\n.div-container-time-value {\n    font-family: StratosSkyeng, sans-serif;\n    font-weight: 400;\n    font-size: 64px;\n    color: #000;\n    text-align: center;\n    padding-top: 10px;\n}\n\n.div-container-level {\n    display: flex;\n    flex-direction: row;\n    gap: 24px;\n}\n\n.level-number {\n    width: 97px;\n    height: 98px;\n    margin-top: 48px;\n    border-radius: 12px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #fff;\n    font-weight: 400;\n    font-size: 64px;\n    color: #0080c1;\n    font-family: StratosSkyeng, sans-serif;\n}\n\n.div-container-level-number {\n    width: 97px;\n    height: 98px;\n    margin-top: 48px;\n    border-radius: 12px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #fff;\n    font-weight: 400;\n    font-size: 64px;\n    color: #0080c1;\n    font-family: StratosSkyeng, sans-serif;\n}\n\n.div-container-button {\n    margin-top: 67px;\n    display: flex;\n    justify-content: center;\n}\n\n.div-container-button-again {\n    margin-top: 40px;\n    display: flex;\n    justify-content: center;\n}\n\n.button-again {\n    width: 246px;\n    height: 48px;\n    border-radius: 12px;\n    border: none;\n    font-family: StratosSkyeng, sans-serif;\n    font-weight: 400;\n    font-size: 24px;\n    color: #ffff;\n    background-color: #7ac100;\n}\n\n.enter {\n    width: 246px;\n    height: 48px;\n    border-radius: 12px;\n    border: none;\n    font-family: StratosSkyeng, sans-serif;\n    font-weight: 400;\n    font-size: 24px;\n    color: #ffff;\n    background-color: #7ac100;\n}\n\n.button-start-again {\n    width: 246px;\n    height: 48px;\n    border-radius: 12px;\n    border: none;\n    font-family: StratosSkyeng, sans-serif;\n    font-weight: 400;\n    font-size: 24px;\n    color: #ffff;\n    background-color: #7ac100;\n}\n\n.gallery-title {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 1010px;\n    padding-left: 22px;\n    padding-right: 22px;\n    margin-top: 22px;\n    margin-bottom: 41px;\n}\n\n.time {\n    display: flex;\n    flex-direction: column;\n    justify-content: right;\n    vertical-align: top;\n    width: 155px;\n    font-family: StratosSkyeng, sans-serif;\n    font-size: 64px;\n    font-weight: 400;\n    color: #fff;\n}\n\n.time-text {\n    font-family: StratosSkyeng, sans-serif;\n    font-size: 16px;\n    font-weight: 400;\n    color: #fff;\n    display: flex;\n    gap: 57px;\n    text-align: right;\n    vertical-align: bottom;\n    width: 100%;\n    padding-left: 39px;\n}\n\n.time-value {\n    display: flex;\n    align-items: top;\n}\n\n.gallery {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n    flex-wrap: wrap;\n    row-gap: 15px;\n    padding-left: 25px;\n    padding-right: 25px;\n}\n\n.card {\n    width: 95px;\n    height: 133px;\n    background-image: url(\"img/close_card.jpg\");\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./fonts/Stratos-Regular.ttf":
/*!***********************************!*\
  !*** ./fonts/Stratos-Regular.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fab7b456f94390b08d94.ttf";

/***/ }),

/***/ "./fonts/Stratos-Regular.woff":
/*!************************************!*\
  !*** ./fonts/Stratos-Regular.woff ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f1ea4266e833c512b678.woff";

/***/ }),

/***/ "./img/close_card.jpg":
/*!****************************!*\
  !*** ./img/close_card.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "da2be3d6f24f8a60da42.jpg";

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.ts ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./style.css");
//ts-ignore

function shuffle(arr) {
    //перемешивает карты
    var j, temp;
    for (var i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
function countCard(arr) {
    //раздаем карты в зависимости от уровня игры
    var shortArr = [];
    if (level === 1) {
        numberCard = 3;
    }
    if (level === 2) {
        numberCard = 6;
    }
    if (level === 3) {
        numberCard = 12;
    }
    shortArr = arr.slice(0, numberCard);
    shortArr = shuffle(shortArr.concat(shortArr));
    return shortArr;
}
function cardInit() {
    var valueCard = [];
    var shortCard = [];
    valueCard = shuffle(valueCardInit); //перемешиваем колоду
    shortCard = countCard(valueCard); //берем нужно количество карт
    itemNumber = numberCard * 2;
    // //покажем карты
    // for (var it: number = 1; it < itemNumber + 1; it++) {
    //     const card: HTMLElement = document.createElement("div");
    //     card.classList.add("card");
    //     card.style.background = `url("img/${valueCardSave[j]}.jpg")`
    //     gallery?.appendChild(card);
    // }
    // //задержка
    //выводим рубашками вниз
    // for (var it: number = 1; it < itemNumber + 1; it++) {
    //     const card: HTMLElement = document.createElement("div");
    //     card.classList.add("card");
    //     gallery?.appendChild(card);
    // }
    valueCardSave = shortCard;
    showCards(shortCard, itemNumber, "open");
    // console.log("до задержки");
    // setTimeout( () => {
    //     showCards(shortCard, itemNumber, "close");
    //     console.log("после задержки");
    //     }, 10000);
}
function showCards(cardArray, item, mode, time) {
    if (mode === "close") {
        for (var it = 0; it < itemNumber; it++) {
            // const card: HTMLElement = document.createElement("div");
            console.log(gallery);
            gallery.children[it].style.background = "close_card.jpg";
            // card.classList.add("card");
            // gallery?.appendChild(card);
            console.log("close");
        }
    }
    else if (mode === "open") {
        for (var it = 0; it < itemNumber; it++) {
            var card = document.createElement("div");
            card.classList.add("card");
            gallery === null || gallery === void 0 ? void 0 : gallery.appendChild(card);
            gallery.children[it].style.background = "url(\"img/".concat(valueCardSave[it], ".jpg\");");
            console.log("open");
        }
    }
}
function removeChilds(node) {
    var fc = node.firstChild;
    while (fc) {
        node.removeChild(fc);
        fc = node.firstChild;
    }
}
//выводим карты рубашками вверх
var gallery = document.querySelector(".gallery");
var itemNumber = 36;
var valueCardInit = [
    "6 бубны",
    "6 крести",
    "6 пики",
    "6 черви",
    "7 бубны",
    "7 крести",
    "7 пики",
    "7 черви",
    "8 бубны",
    "8 крести",
    "8 пики",
    "8 черви",
    "9 бубны",
    "9 крести",
    "9 пики",
    "9 черви",
    "10 бубны",
    "10 крести",
    "10 пики",
    "10 черви",
    "валет бубны",
    "валет крести",
    "валет пики",
    "валет черви",
    "дама бубны",
    "дама крести",
    "дама пики",
    "дама черви",
    "король бубны",
    "король крести",
    "король пики",
    "король черви",
    "туз бубны",
    "туз крести",
    "туз пики",
    "туз черви",
]; //массив с порядковыми номерами карт;
var valueCardSave = [];
var numberCard;
//раздаем карты
cardInit();
//по клику переворачиваем карты
gallery.addEventListener("click", function (event) {
    event.preventDefault();
    var j = 0;
    console.log(event);
    var eventCurrent = event.target.className;
    if (eventCurrent === "card") {
        // if (event.currentTarget.className === "card") {
        var tempElement = event.target;
        for (var i = itemNumber; i > 0; i--) {
            if (tempElement.previousElementSibling) {
                j++;
                tempElement = tempElement.previousElementSibling;
            }
        }
        event.target.style.background = "url(\"img/".concat(valueCardSave[j], ".jpg\")");
    }
});
var buttonLevels = document.querySelectorAll(".level-number");
var containerLevel = document.querySelectorAll(".div-container-level");
var level;
buttonLevels.forEach(function (element) {
    element.addEventListener("click", function (event) {
        event.preventDefault();
        var buttons = element.parentElement.children;
        for (var index = 0; index < buttons.length; index++) {
            // for (let button of buttons) {
            var button = buttons[index];
            button.style.border = "#ffffff";
        }
        element.style.border = "#241245 solid 3px";
        level = Number(element.textContent);
    });
});
var enter = document.querySelector(".enter");
var divMain = document.querySelector(".div-main");
var game = document.querySelector(".center");
var buttonAgain = document.querySelector(".button-again");
enter.addEventListener("click", function (event) {
    event.preventDefault();
    valueCardSave = [];
    cardInit();
    divMain.classList.add("disabled");
    game.classList.remove("disabled");
});
buttonAgain.addEventListener("click", function (event) {
    event.preventDefault();
    removeChilds(gallery);
    game.classList.add("disabled");
    var buttons = containerLevel[0].children;
    for (var index = 0; index < buttons.length; index++) {
        // for (let button of buttons) {
        var button = buttons[index];
        button.style.border = "#ffffff";
    }
    level = 0;
    divMain.classList.remove("disabled");
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map