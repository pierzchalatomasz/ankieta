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
	    $__state__,
	    $__data__,
	    $__viewBuilders_47_singleChoiceQuestionViewBuilder__,
	    $__viewBuilders_47_multiChoiceQuestionViewBuilder__,
	    $__viewBuilders_47_welcomeViewBuilder__,
	    $__viewBuilders_47_summaryViewBuilder__;
	var Router = ($__router__ = __webpack_require__(1), $__router__ && $__router__.__esModule && $__router__ || {default: $__router__}).default;
	var State = ($__state__ = __webpack_require__(11), $__state__ && $__state__.__esModule && $__state__ || {default: $__state__}).default;
	var data = ($__data__ = __webpack_require__(2), $__data__ && $__data__.__esModule && $__data__ || {default: $__data__}).default;
	var singleChoiceQuestionViewBuilder = ($__viewBuilders_47_singleChoiceQuestionViewBuilder__ = __webpack_require__(3), $__viewBuilders_47_singleChoiceQuestionViewBuilder__ && $__viewBuilders_47_singleChoiceQuestionViewBuilder__.__esModule && $__viewBuilders_47_singleChoiceQuestionViewBuilder__ || {default: $__viewBuilders_47_singleChoiceQuestionViewBuilder__}).default;
	var multiChoiceQuestionViewBuilder = ($__viewBuilders_47_multiChoiceQuestionViewBuilder__ = __webpack_require__(7), $__viewBuilders_47_multiChoiceQuestionViewBuilder__ && $__viewBuilders_47_multiChoiceQuestionViewBuilder__.__esModule && $__viewBuilders_47_multiChoiceQuestionViewBuilder__ || {default: $__viewBuilders_47_multiChoiceQuestionViewBuilder__}).default;
	var welcomeViewBuilder = ($__viewBuilders_47_welcomeViewBuilder__ = __webpack_require__(9), $__viewBuilders_47_welcomeViewBuilder__ && $__viewBuilders_47_welcomeViewBuilder__.__esModule && $__viewBuilders_47_welcomeViewBuilder__ || {default: $__viewBuilders_47_welcomeViewBuilder__}).default;
	var summaryViewBuilder = ($__viewBuilders_47_summaryViewBuilder__ = __webpack_require__(10), $__viewBuilders_47_summaryViewBuilder__ && $__viewBuilders_47_summaryViewBuilder__.__esModule && $__viewBuilders_47_summaryViewBuilder__ || {default: $__viewBuilders_47_summaryViewBuilder__}).default;
	window.State = new State();
	Router.route({
	  route: '/single-choice-question',
	  handler: singleChoiceQuestionViewBuilder
	}).route({
	  route: '/multi-choice-question',
	  handler: multiChoiceQuestionViewBuilder
	}).route({
	  route: '/',
	  handler: welcomeViewBuilder
	}).route({
	  route: '/summary',
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
	  var $__1 = this;
	  var $___46__46__47_data_47_singleChoiceQuestion__;
	  var data = ($___46__46__47_data_47_singleChoiceQuestion__ = __webpack_require__(4), $___46__46__47_data_47_singleChoiceQuestion__ && $___46__46__47_data_47_singleChoiceQuestion__.__esModule && $___46__46__47_data_47_singleChoiceQuestion__ || {default: $___46__46__47_data_47_singleChoiceQuestion__}).default;
	  var answersBuilder = function(answers) {
	    var template = '';
	    answers.forEach(function(answer, index) {
	      template += ("\n            <div class=\"answer\">\n                <input type=\"radio\" name=\"single-choice-question\" value=\"" + index + "\" id=" + index + ">\n                <label for=\"" + index + "\">" + (index + 1) + ". " + answer + "</label>\n            </div>\n        ");
	    }, this);
	    return template;
	  };
	  var addChangeListener = (function($__3) {
	    var inputs = $__3.inputs;
	    inputs = Array.from(inputs);
	    inputs.forEach(function(input) {
	      var $__2 = this;
	      input.onchange = (function() {
	        localStorage.singleChoiceQuestion = input.value;
	        inputs.forEach(function(input) {
	          input.parentElement.className = input.parentElement.className.replace('active', '');
	        }, $__2);
	        if (input.checked) {
	          input.parentElement.className += ' active';
	        }
	      });
	    }, $__1);
	  });
	  var readSavedState = (function($__3) {
	    var inputs = $__3.inputs;
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
	    var template = ("\n        <div class=\"question\">\n            <h3>" + questionObj.question + "</h3>\n            <div class=\"answers\">\n                " + answersBuilder(questionObj.answers) + "\n            </div>\n            <div class=\"buttons-container\">\n                <a class=\"button\" onClick=\"State.go('/')\">Wstecz</a>\n                <a class=\"button next\" onClick=\"State.go('/multi-choice-question')\">Następne</a>\n            </div>\n        </div>\n    ");
	    mainContainer.innerHTML = template;
	    window.MathJax.Hub.Typeset();
	    var inputs = document.querySelectorAll('input[name=single-choice-question]');
	    addChangeListener({inputs: inputs});
	    readSavedState({inputs: inputs});
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
	  question: 'Wybierz najciekawszy wzór matematyczny',
	  answers: ['$$\\sqrt{2\\sqrt{2\\sqrt{2\\sqrt{\\ldots}}}}=2$$', '$$\\\infty! = \\sqrt{2 \\pi}$$', '$$\\sum_{n=1}^\\infty \\frac{1}{n^2}=\\frac{\\pi^2}{6}$$', '$$sin^{2}x+cos^{2}x=1$$', '$$e^{i\\pi}+1=0$$', '$$\\frac{2\\sqrt{2}}{99^2}\\sum_{k=0}^{\\infty} \\frac{(4k)!}{k!^4}\\frac{26390k+1103}{396^{4k}}=\\frac{1}{\\pi}$$']
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
	var $__default = function() {
	  var mainContainer = document.querySelector('.main-container');
	  var isValid = true;
	  var map = {
	    name: '/',
	    singleChoiceQuestion: '/single-choice-question',
	    multiChoiceQuestion: '/multi-choice-question'
	  };
	  function showNotification() {
	    var notification = document.createElement('div');
	    notification.className = 'notification';
	    notification.innerText = 'Nie odpowiedziałeś na to pytanie!';
	    document.querySelector('body').appendChild(notification);
	    setTimeout((function() {
	      document.querySelector('body').removeChild(notification);
	    }), 1000);
	  }
	  for (var key in map) {
	    if (!localStorage[key]) {
	      isValid = false;
	      State.go(map[key]);
	      showNotification();
	      return;
	    }
	  }
	  return isValid;
	};


/***/ },
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
	  "use strict";
	  var $__1 = this;
	  var $___46__46__47_data_47_multiChoiceQuestion__;
	  var data = ($___46__46__47_data_47_multiChoiceQuestion__ = __webpack_require__(8), $___46__46__47_data_47_multiChoiceQuestion__ && $___46__46__47_data_47_multiChoiceQuestion__.__esModule && $___46__46__47_data_47_multiChoiceQuestion__ || {default: $___46__46__47_data_47_multiChoiceQuestion__}).default;
	  var save = (function() {
	    var values = [];
	    var inputs = document.querySelectorAll('input[name=multi-choice-question]');
	    inputs.forEach(function(input) {
	      if (input.checked) {
	        values.push(input.value);
	      }
	    }, $__1);
	    localStorage.multiChoiceQuestion = values;
	  });
	  var answersBuilder = function(answers) {
	    var template = '';
	    answers.forEach(function(answer, index) {
	      template += ("\n            <div class=\"answer\">\n                <input type=\"checkbox\" name=\"multi-choice-question\" value=\"" + index + "\" id=" + index + ">\n                <label for=\"" + index + "\">" + (index + 1) + ". " + answer + "</label>\n            </div>\n        ");
	    }, this);
	    return template;
	  };
	  var addChangeListener = (function($__2) {
	    var inputs = $__2.inputs;
	    inputs = Array.from(inputs);
	    inputs.forEach(function(input) {
	      input.onchange = (function() {
	        save();
	        if (input.checked) {
	          input.parentElement.className += ' active';
	          return;
	        }
	        input.parentElement.className = input.parentElement.className.replace('active', '');
	      });
	    }, $__1);
	  });
	  var readSavedState = (function($__2) {
	    var inputs = $__2.inputs;
	    var answers = localStorage.multiChoiceQuestion;
	    if (!answers) {
	      return;
	    }
	    answers = answers.split(',');
	    answers.forEach(function(answer) {
	      var answer = parseInt(answer);
	      inputs[answer].checked = true;
	      inputs[answer].parentElement.className += ' active';
	    });
	  });
	  function QuestionViewBuilder(routeParams) {
	    var mainContainer = document.querySelector('.main-container');
	    var questionObj = data;
	    var template = ("\n        <div class=\"question\">\n            <h3>" + questionObj.question + "</h3>\n            <div class=\"answers\">\n                " + answersBuilder(questionObj.answers) + "\n            </div>\n            <div class=\"buttons-container\">\n                <a class=\"button\" onClick=\"State.go('/single-choice-question')\">Wstecz</a>\n                <a class=\"button summary\" onClick=\"State.go('/summary')\">Podsumowanie</a>\n            </div>\n        </div>\n    ");
	    mainContainer.innerHTML = template;
	    var inputs = document.querySelectorAll('input[name=multi-choice-question]');
	    addChangeListener({inputs: inputs});
	    readSavedState({inputs: inputs});
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
/* 8 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var $__default = {
	  question: 'Jakie są Twoje ulubione gatunki muzyczne?',
	  answers: ['rock', 'pop', 'jazz', 'funk', 'muzyka klasyczna', 'inny'],
	  correct: 1
	};


/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var save = (function(name) {
	  localStorage.name = name;
	});
	var $__default = function() {
	  var mainContainer = document.querySelector('.main-container');
	  var template = ("\n        <div class=\"welcome\">\n            <h2 class=\"welcome-heading\">Witamy w ankiecie</h2>\n            <input class=\"name-input\" type=\"text\" placeholder=\"Wpisz swoje imię\" value=\"" + (localStorage.name || '') + "\">\n            <a class=\"button button-welcome\">Rozpocznij ankietę</a>\n        </div>\n    ");
	  mainContainer.innerHTML = template;
	  document.querySelector('.button-welcome').onclick = (function() {
	    var input = document.querySelector('.name-input');
	    if (input.value) {
	      save(input.value);
	    }
	    State.go('/single-choice-question');
	  });
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
	  "use strict";
	  var $__3 = this;
	  var $___46__46__47_data_47_singleChoiceQuestion__,
	      $___46__46__47_data_47_multiChoiceQuestion__,
	      $___46__46__47_utils_47_validate__;
	  var singleChoiceQuestion = ($___46__46__47_data_47_singleChoiceQuestion__ = __webpack_require__(4), $___46__46__47_data_47_singleChoiceQuestion__ && $___46__46__47_data_47_singleChoiceQuestion__.__esModule && $___46__46__47_data_47_singleChoiceQuestion__ || {default: $___46__46__47_data_47_singleChoiceQuestion__}).default;
	  var multiChoiceQuestion = ($___46__46__47_data_47_multiChoiceQuestion__ = __webpack_require__(8), $___46__46__47_data_47_multiChoiceQuestion__ && $___46__46__47_data_47_multiChoiceQuestion__.__esModule && $___46__46__47_data_47_multiChoiceQuestion__ || {default: $___46__46__47_data_47_multiChoiceQuestion__}).default;
	  var validate = ($___46__46__47_utils_47_validate__ = __webpack_require__(5), $___46__46__47_utils_47_validate__ && $___46__46__47_utils_47_validate__.__esModule && $___46__46__47_utils_47_validate__ || {default: $___46__46__47_utils_47_validate__}).default;
	  var answersBuilder = (function(answers) {
	    var template = '';
	    answers.forEach(function(i) {
	      template += ("<li>" + (i + 1) + ". " + multiChoiceQuestion.answers[i] + "</li>");
	    }, $__3);
	    return template;
	  });
	  var getName = (function() {
	    return localStorage.name || '';
	  });
	  var setClearEvent = (function() {
	    document.querySelector('.clear').onclick = (function() {
	      ['name', 'singleChoiceQuestion', 'multiChoiceQuestion'].map((function(x) {
	        return localStorage.removeItem(x);
	      }));
	      State.go('/');
	    });
	  });
	  var $__default = function() {
	    if (!validate()) {
	      return;
	    }
	    console.log(State.prev);
	    var mainContainer = document.querySelector('.main-container');
	    var singleChoiceAnswer = parseInt(localStorage.singleChoiceQuestion);
	    var multiChoiceAnswers = localStorage.multiChoiceQuestion.split(',').map((function(x) {
	      return parseInt(x);
	    }));
	    var template = ("\n        <div class=\"summary\">\n            <h2>Podsumowanie</h2>\n            <h4>Twoje imię: " + getName() + "</h4>\n            <div class=\"questions\">\n                <h4>Pytanie 1: " + singleChoiceQuestion.question + "</h4>\n                <p>Twoja odpowiedź: \n                    <ul>\n                        <li>" + (singleChoiceAnswer + 1) + ". " + singleChoiceQuestion.answers[singleChoiceAnswer] + "</li>\n                    </ul>\n                </p>\n                <h4>Pytanie 2: " + multiChoiceQuestion.question + "</h4>\n                <p>Twoje odpowiedzi: \n                    <ul>\n                        " + answersBuilder(multiChoiceAnswers) + "\n                    </ul>\n                </p>\n            </div>\n            <div class=\"buttons-container\">\n                <a class=\"button\" href=\"#/\">Powrót do startu</a>\n                <a class=\"button clear\">Wyczyść i wróć na start</a>\n            </div>\n        </div>\n    ");
	    mainContainer.innerHTML = template;
	    window.MathJax.Hub.Typeset();
	    setClearEvent();
	  };
	  return {
	    get default() {
	      return $__default;
	    },
	    __esModule: true
	  };
	}.call(Reflect.global);


/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var $__default = function() {
	  var $__0 = this;
	  this.prev = null;
	  this.current = null;
	  this.go = (function(route) {
	    $__0.prev = window.location.hash;
	    window.location.hash = route;
	    $__0.current = route;
	  });
	};
	;


/***/ }
/******/ ]);