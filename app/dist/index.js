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
	    $__viewBuilders_47_singleChoiceQuestionViewBuilder__,
	    $__viewBuilders_47_multiChoiceQuestionViewBuilder__,
	    $__viewBuilders_47_welcomeViewBuilder__,
	    $__viewBuilders_47_summaryViewBuilder__;
	var Router = ($__router__ = __webpack_require__(1), $__router__ && $__router__.__esModule && $__router__ || {default: $__router__}).default;
	var data = ($__data__ = __webpack_require__(2), $__data__ && $__data__.__esModule && $__data__ || {default: $__data__}).default;
	var singleChoiceQuestionViewBuilder = ($__viewBuilders_47_singleChoiceQuestionViewBuilder__ = __webpack_require__(3), $__viewBuilders_47_singleChoiceQuestionViewBuilder__ && $__viewBuilders_47_singleChoiceQuestionViewBuilder__.__esModule && $__viewBuilders_47_singleChoiceQuestionViewBuilder__ || {default: $__viewBuilders_47_singleChoiceQuestionViewBuilder__}).default;
	var multiChoiceQuestionViewBuilder = ($__viewBuilders_47_multiChoiceQuestionViewBuilder__ = __webpack_require__(6), $__viewBuilders_47_multiChoiceQuestionViewBuilder__ && $__viewBuilders_47_multiChoiceQuestionViewBuilder__.__esModule && $__viewBuilders_47_multiChoiceQuestionViewBuilder__ || {default: $__viewBuilders_47_multiChoiceQuestionViewBuilder__}).default;
	var welcomeViewBuilder = ($__viewBuilders_47_welcomeViewBuilder__ = __webpack_require__(8), $__viewBuilders_47_welcomeViewBuilder__ && $__viewBuilders_47_welcomeViewBuilder__.__esModule && $__viewBuilders_47_welcomeViewBuilder__ || {default: $__viewBuilders_47_welcomeViewBuilder__}).default;
	var summaryViewBuilder = ($__viewBuilders_47_summaryViewBuilder__ = __webpack_require__(9), $__viewBuilders_47_summaryViewBuilder__ && $__viewBuilders_47_summaryViewBuilder__.__esModule && $__viewBuilders_47_summaryViewBuilder__ || {default: $__viewBuilders_47_summaryViewBuilder__}).default;
	Router.route({
	  route: 'single-choice-question/',
	  handler: singleChoiceQuestionViewBuilder
	}).route({
	  route: 'multi-choice-question/',
	  handler: multiChoiceQuestionViewBuilder
	}).route({
	  route: '/',
	  handler: welcomeViewBuilder
	}).route({
	  route: 'summary/',
	  handler: summaryViewBuilder
	});


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

	module.exports = function() {
	  "use strict";
	  var $__2 = this;
	  var $___46__46__47_data_47_singleChoiceQuestion__,
	      $___46__46__47_utils_47_validate__;
	  var data = ($___46__46__47_data_47_singleChoiceQuestion__ = __webpack_require__(4), $___46__46__47_data_47_singleChoiceQuestion__ && $___46__46__47_data_47_singleChoiceQuestion__.__esModule && $___46__46__47_data_47_singleChoiceQuestion__ || {default: $___46__46__47_data_47_singleChoiceQuestion__}).default;
	  var validate = ($___46__46__47_utils_47_validate__ = __webpack_require__(5), $___46__46__47_utils_47_validate__ && $___46__46__47_utils_47_validate__.__esModule && $___46__46__47_utils_47_validate__ || {default: $___46__46__47_utils_47_validate__}).default;
	  var answersBuilder = function(answers) {
	    var template = '';
	    answers.forEach(function(answer, index) {
	      template += ("\n            <div class=\"answer\">\n                <input type=\"radio\" name=\"single-choice-question\" value=\"" + index + "\" id=" + index + ">\n                <label for=\"" + index + "\">" + (index + 1) + ". " + answer + "</label>\n            </div>\n        ");
	    }, this);
	    return template;
	  };
	  var addChangeListener = (function($__4) {
	    var inputs = $__4.inputs;
	    inputs = Array.from(inputs);
	    inputs.forEach(function(input) {
	      var $__3 = this;
	      input.onchange = (function() {
	        localStorage.singleChoiceQuestion = input.value;
	        inputs.forEach(function(input) {
	          input.parentElement.className = input.parentElement.className.replace('active', '');
	        }, $__3);
	        if (input.checked) {
	          input.parentElement.className += ' active';
	        }
	      });
	    }, $__2);
	  });
	  var readSavedState = (function($__4) {
	    var inputs = $__4.inputs;
	    var answer = parseInt(localStorage.singleChoiceQuestion);
	    if (isNaN(answer)) {
	      return;
	    }
	    inputs[answer].checked = true;
	    inputs[answer].parentElement.className += ' active';
	  });
	  function QuestionViewBuilder(routeParams) {
	    var mainContainer = document.querySelector('.main-container');
	    var questionObj = data;
	    var template = ("\n        <div class=\"question\">\n            <h3>" + questionObj.question + "</h3>\n            <div class=\"answers\">\n                " + answersBuilder(questionObj.answers) + "\n            </div>\n            <a class=\"button next\">Następne</a>\n        </div>\n    ");
	    mainContainer.innerHTML = template;
	    var inputs = document.querySelectorAll('input[name=single-choice-question]');
	    addChangeListener({inputs: inputs});
	    readSavedState({inputs: inputs});
	    validate({
	      element: document.querySelector('.next'),
	      inputs: inputs,
	      route: '/multi-choice-question'
	    });
	  }
	  var $__default = QuestionViewBuilder;
	  return {
	    get default() {
	      return $__default;
	    },
	    __esModule: true
	  };
	}.call(Reflect.global);


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
	var $__default = {
	  question: 'Lorem ipsum dolor sit amet?',
	  answers: ['consectetur adipiscing elit', 'sed do eiusmod tempor incididunt ut labore', 'et dolore magna aliqua', 'enim ad minima veniam', 'quis nostrum exercitationem', 'ullam corporis suscipit'],
	  correct: 1
	};


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var $__default = (function($__0) {
	  var $__1 = $__0,
	      element = $__1.element,
	      inputs = $__1.inputs,
	      route = $__1.route;
	  element.onclick = (function(e) {
	    inputs = Array.prototype.slice.call(inputs);
	    var checked = inputs.filter((function(x) {
	      return x.checked;
	    }));
	    if (checked.length) {
	      window.location.hash = route;
	      return;
	    }
	    alert('Nie odpowiedziałeś!');
	  });
	});


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
	  "use strict";
	  var $__2 = this;
	  var $___46__46__47_data_47_multiChoiceQuestion__,
	      $___46__46__47_utils_47_validate__;
	  var data = ($___46__46__47_data_47_multiChoiceQuestion__ = __webpack_require__(7), $___46__46__47_data_47_multiChoiceQuestion__ && $___46__46__47_data_47_multiChoiceQuestion__.__esModule && $___46__46__47_data_47_multiChoiceQuestion__ || {default: $___46__46__47_data_47_multiChoiceQuestion__}).default;
	  var validate = ($___46__46__47_utils_47_validate__ = __webpack_require__(5), $___46__46__47_utils_47_validate__ && $___46__46__47_utils_47_validate__.__esModule && $___46__46__47_utils_47_validate__ || {default: $___46__46__47_utils_47_validate__}).default;
	  var save = (function() {
	    var values = [];
	    var inputs = document.querySelectorAll('input[name=multi-choice-question]');
	    inputs.forEach(function(input) {
	      if (input.checked) {
	        values.push(input.value);
	      }
	    }, $__2);
	    localStorage.multiChoiceQuestion = values;
	  });
	  var addChangeListener = (function($__3) {
	    var inputs = $__3.inputs;
	    inputs.forEach(function(input) {
	      input.onchange = save;
	    }, $__2);
	  });
	  var answersBuilder = function(answers) {
	    var template = '';
	    answers.forEach(function(answer, index) {
	      template += ("\n            <p>\n                <input type=\"checkbox\" name=\"multi-choice-question\" value=\"" + index + "\" onchange=\"save(" + index + ")\">\n                <label>" + (index + 1) + ". " + answer + "</label>\n            </p>\n        ");
	    }, this);
	    return template;
	  };
	  var readSavedState = (function($__3) {
	    var inputs = $__3.inputs;
	    if (!localStorage.multiChoiceQuestion) {
	      return;
	    }
	    var answers = localStorage.multiChoiceQuestion.split(',');
	    answers.forEach(function(answer) {
	      answer = parseInt(answer);
	      inputs[answer].checked = true;
	    }, $__2);
	  });
	  function QuestionViewBuilder(routeParams) {
	    var mainContainer = document.querySelector('.main-container');
	    var questionObj = data;
	    var template = ("\n        <div class=\"question\">\n            <h3>" + questionObj.question + "</h3>\n            <div class=\"answers\">\n                " + answersBuilder(questionObj.answers) + "\n            </div>\n            <div class=\"buttons-container\">\n                <a class=\"button\" href=\"#/single-choice-question\">Wstecz</a>\n                <a class=\"button summary\">Podsumowanie</a>\n            </div>\n        </div>\n    ");
	    mainContainer.innerHTML = template;
	    var inputs = document.querySelectorAll('input[name=multi-choice-question]');
	    addChangeListener({inputs: inputs});
	    readSavedState({inputs: inputs});
	    validate({
	      element: document.querySelector('.summary'),
	      inputs: inputs,
	      route: '/summary'
	    });
	  }
	  var $__default = QuestionViewBuilder;
	  return {
	    get default() {
	      return $__default;
	    },
	    __esModule: true
	  };
	}.call(Reflect.global);


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var $__default = {
	  question: 'Najciekawszy wzór matematyczny',
	  answers: ['$$\\sqrt{2\\sqrt{2\\sqrt{2\\sqrt{\\ldots}}}}=2$$', '$$\\\infty! = \\sqrt{2 \\pi}$$', '$$\\sum_{n=1}^\\infty \\frac{1}{n^2}=\\frac{\\pi^2}{6}$$', '$$sin^{2}x+cos^{2}x=1$$', '$$e^{i\\pi}+1=0$$', '$$\\frac{2\\sqrt{2}}{99^2}\\sum_{k=0}^{\\infty} \\frac{(4k)!}{k!^4}\\frac{26390k+1103}{396^{4k}}=\\frac{1}{\\pi}$$'],
	  correct: [0, 1]
	};


/***/ },
/* 8 */
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
	  var template = "\n        <div class=\"welcome\">\n            <h2 class=\"welcome-heading\">Witamy w ankiecie</h2>\n            <input class=\"name-input\" type=\"text\" placeholder=\"Wpisz swoje imię\">\n            <a class=\"button button-welcome\" href=\"#/single-choice-question\">Rozpocznij ankietę</a>\n        </div>\n    ";
	  mainContainer.innerHTML = template;
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
	  "use strict";
	  var $__2 = this;
	  var $___46__46__47_data_47_singleChoiceQuestion__,
	      $___46__46__47_data_47_multiChoiceQuestion__;
	  var singleChoiceQuestion = ($___46__46__47_data_47_singleChoiceQuestion__ = __webpack_require__(4), $___46__46__47_data_47_singleChoiceQuestion__ && $___46__46__47_data_47_singleChoiceQuestion__.__esModule && $___46__46__47_data_47_singleChoiceQuestion__ || {default: $___46__46__47_data_47_singleChoiceQuestion__}).default;
	  var multiChoiceQuestion = ($___46__46__47_data_47_multiChoiceQuestion__ = __webpack_require__(7), $___46__46__47_data_47_multiChoiceQuestion__ && $___46__46__47_data_47_multiChoiceQuestion__.__esModule && $___46__46__47_data_47_multiChoiceQuestion__ || {default: $___46__46__47_data_47_multiChoiceQuestion__}).default;
	  var answersBuilder = (function(answers) {
	    var template = '';
	    answers.forEach(function(i) {
	      template += ("<li>" + (i + 1) + ". " + multiChoiceQuestion.answers[i] + "</li>");
	    }, $__2);
	    return template;
	  });
	  var $__default = function() {
	    var mainContainer = document.querySelector('.main-container');
	    var singleChoiceAnswer = parseInt(localStorage.singleChoiceQuestion);
	    var multiChoiceAnswers = localStorage.multiChoiceQuestion.split(',').map((function(x) {
	      return parseInt(x);
	    }));
	    var template = ("\n        <div class=\"summary\">\n            <h2>Podsumowanie</h2>\n            <div class=\"questions\">\n                <h4>Pytanie 1: " + singleChoiceQuestion.question + "</h4>\n                <p>Twoja odpowiedź: \n                    <ul>\n                        <li>" + (singleChoiceAnswer + 1) + ". " + singleChoiceQuestion.answers[singleChoiceAnswer] + "</li>\n                    </ul>\n                </p>\n                <h4>Pytanie 2: " + multiChoiceQuestion.question + "</h4>\n                <p>Twoje odpowiedzi: \n                    <ul>\n                        " + answersBuilder(multiChoiceAnswers) + "\n                    </ul>\n                </p>\n            </div>\n            <a class=\"button\" href=\"#/\">Powrót do startu</a>\n        </div>\n    ");
	    mainContainer.innerHTML = template;
	  };
	  return {
	    get default() {
	      return $__default;
	    },
	    __esModule: true
	  };
	}.call(Reflect.global);


/***/ }
/******/ ]);