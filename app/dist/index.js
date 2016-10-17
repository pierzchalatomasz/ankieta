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
	    $__data__,
	    $__viewBuilders_47_questionViewBuilder__,
	    $__viewBuilders_47_welcomeViewBuilder__;
	var Router = ($__router__ = __webpack_require__(1), $__router__ && $__router__.__esModule && $__router__ || {default: $__router__}).default;
	var data = ($__data__ = __webpack_require__(2), $__data__ && $__data__.__esModule && $__data__ || {default: $__data__}).default;
	var questionViewBuilder = ($__viewBuilders_47_questionViewBuilder__ = __webpack_require__(3), $__viewBuilders_47_questionViewBuilder__ && $__viewBuilders_47_questionViewBuilder__.__esModule && $__viewBuilders_47_questionViewBuilder__ || {default: $__viewBuilders_47_questionViewBuilder__}).default;
	var welcomeViewBuilder = ($__viewBuilders_47_welcomeViewBuilder__ = __webpack_require__(4), $__viewBuilders_47_welcomeViewBuilder__ && $__viewBuilders_47_welcomeViewBuilder__.__esModule && $__viewBuilders_47_welcomeViewBuilder__ || {default: $__viewBuilders_47_welcomeViewBuilder__}).default;
	Router.route({
	  route: 'question/:id',
	  handler: questionViewBuilder
	}).route({
	  route: '',
	  handler: welcomeViewBuilder
	}).route({route: 'thankyou'});


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = function() {
	  "use strict";
	  var $__0 = this;
	  var mainContainer = document.querySelector('.main-container');
	  function compareRoutes($__1) {
	    var $__2 = $__1,
	        route = $__2.route,
	        path = $__2.path;
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
	  var Router = {
	    routes: [],
	    route: (function($__1) {
	      var $__2 = $__1,
	          route = $__2.route,
	          handler = $__2.handler;
	      Router.routes.push({
	        route: route,
	        handler: handler
	      });
	      return Router;
	    }),
	    performRouting: (function() {
	      var matchedRoute = null;
	      Router.routes.forEach(function(x) {
	        var $__1 = x,
	            route = $__1.route,
	            handler = $__1.handler;
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
	          if (handler) {
	            handler(params);
	          }
	          matchedRoute = x;
	        }
	      }, $__0);
	      if (!matchedRoute) {
	        window.location.hash = '';
	      }
	    })
	  };
	  window.onload = Router.performRouting;
	  window.onhashchange = Router.performRouting;
	  var $__default = Router;
	  return {
	    get default() {
	      return $__default;
	    },
	    __esModule: true
	  };
	}.call(Reflect.global);


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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var $___46__46__47_data__;
	var data = ($___46__46__47_data__ = __webpack_require__(2), $___46__46__47_data__ && $___46__46__47_data__.__esModule && $___46__46__47_data__ || {default: $___46__46__47_data__}).default;
	var answerBuilder = function(answer, index) {
	  return ("\n        <p>\n            <input type=\"radio\" name=\"question\">\n            <label>" + (index + 1) + ". " + answer + "</label>\n        </p>\n    ");
	};
	function QuestionViewBuilder(routeParams) {
	  var mainContainer = document.querySelector('.main-container');
	  var questionId = parseInt(routeParams.id);
	  var questionObj = data[questionId];
	  var navBuilder = function() {
	    var output = '';
	    if (questionId > 0)
	      output += ("<a href=\"#/question/" + (questionId - 1) + "\">Prev</a>");
	    if (questionId < data.length - 1)
	      output += ("<a href=\"#/question/" + (questionId + 1) + "\">Next</a>");
	    return output;
	  };
	  var template = ("\n        <div class=\"question\">\n            <h3>The question is: " + questionObj.question + "</h3>\n            " + questionObj.answers.map((function(x, index) {
	    return answerBuilder(x, index);
	  })) + "\n            " + navBuilder() + "\n        </div>\n    ");
	  mainContainer.innerHTML = template;
	}
	var $__default = QuestionViewBuilder;


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var $__default = function() {
	  var mainContainer = document.querySelector('.main-container');
	  var template = "\n        <div class=\"welcome\">\n            <h3>Witamy w ankiecie</h3>\n            <a href=\"#/question/0\">Rozpocznij ankietę</a>\n        </div>\n    ";
	  mainContainer.innerHTML = template;
	};


/***/ }
/******/ ]);