/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var $__router__,
	    $__data__;
	var Router = ($__router__ = __webpack_require__(2), $__router__ && $__router__.__esModule && $__router__ || {default: $__router__}).default;
	var data = ($__data__ = __webpack_require__(1), $__data__ && $__data__.__esModule && $__data__ || {default: $__data__}).default;
	Router.route({route: 'question/:id'}).route({route: 'a/:b/:c/:d'});


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var $__default = [{
	  question: 'Lorem ipsum dolor sit amet?',
	  answers: ['consectetur adipiscing elit', 'sed do eiusmod tempor incididunt ut labore', 'et dolore magna aliqua'],
	  correct: 1
	}, {
	  question: 'Duis aute irure dolor in reprehenderit?',
	  answers: ['consectetur adipiscing elit', 'sed do eiusmod tempor incididunt ut labore', 'et dolore magna aliqua'],
	  correct: 0
	}];


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var mainContainer = document.querySelector('.main-container');
	function compareRoutes($__0) {
	  var $__1 = $__0,
	      route = $__1.route,
	      path = $__1.path;
	  if (route.length !== path.length) {
	    return false;
	  }
	  var result = true;
	  for (var i = 0; i < route.length; i++) {
	    var paramName = route[i];
	    if (paramName[0] !== ':' && route[i] !== path[i]) {
	      result = false;
	      break;
	    }
	  }
	  return result;
	}
	var Router = {route: (function($__0) {
	    var route = $__0.route;
	    var path = window.location.hash;
	    path = path.split('/').splice(1).filter((function(x) {
	      return x;
	    }));
	    route = route.split('/').filter((function(x) {
	      return x;
	    }));
	    if (compareRoutes({
	      path: path,
	      route: route
	    })) {
	      var params = {};
	      for (var i = 0; i < route.length; i++) {
	        var paramName = route[i];
	        if (paramName[0] === ':') {
	          paramName = paramName.replace(':', '');
	          params[paramName] = path[i];
	        }
	      }
	      console.log(params);
	    }
	    return Router;
	  })};
	var $__default = Router;


/***/ }
/******/ ]);