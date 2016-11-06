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
	var State = ($__state__ = __webpack_require__(2), $__state__ && $__state__.__esModule && $__state__ || {default: $__state__}).default;
	var data = ($__data__ = __webpack_require__(3), $__data__ && $__data__.__esModule && $__data__ || {default: $__data__}).default;
	var singleChoiceQuestionViewBuilder = ($__viewBuilders_47_singleChoiceQuestionViewBuilder__ = __webpack_require__(4), $__viewBuilders_47_singleChoiceQuestionViewBuilder__ && $__viewBuilders_47_singleChoiceQuestionViewBuilder__.__esModule && $__viewBuilders_47_singleChoiceQuestionViewBuilder__ || {default: $__viewBuilders_47_singleChoiceQuestionViewBuilder__}).default;
	var multiChoiceQuestionViewBuilder = ($__viewBuilders_47_multiChoiceQuestionViewBuilder__ = __webpack_require__(6), $__viewBuilders_47_multiChoiceQuestionViewBuilder__ && $__viewBuilders_47_multiChoiceQuestionViewBuilder__.__esModule && $__viewBuilders_47_multiChoiceQuestionViewBuilder__ || {default: $__viewBuilders_47_multiChoiceQuestionViewBuilder__}).default;
	var welcomeViewBuilder = ($__viewBuilders_47_welcomeViewBuilder__ = __webpack_require__(8), $__viewBuilders_47_welcomeViewBuilder__ && $__viewBuilders_47_welcomeViewBuilder__.__esModule && $__viewBuilders_47_welcomeViewBuilder__ || {default: $__viewBuilders_47_welcomeViewBuilder__}).default;
	var summaryViewBuilder = ($__viewBuilders_47_summaryViewBuilder__ = __webpack_require__(9), $__viewBuilders_47_summaryViewBuilder__ && $__viewBuilders_47_summaryViewBuilder__.__esModule && $__viewBuilders_47_summaryViewBuilder__ || {default: $__viewBuilders_47_summaryViewBuilder__}).default;
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
	      var paramName = route[$traceurRuntime.toProperty(i)];
	      if (paramName[0] !== ':' && route[$traceurRuntime.toProperty(i)] !== path[$traceurRuntime.toProperty(i)]) {
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
	            var paramName = route[$traceurRuntime.toProperty(i)];
	            if (paramName[0] === ':') {
	              paramName = paramName.replace(':', '');
	              $traceurRuntime.setProperty(params, paramName, path[$traceurRuntime.toProperty(i)]);
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


/***/ },
/* 3 */
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
	  "use strict";
	  var $__1 = this;
	  var $___46__46__47_data_47_singleChoiceQuestion__;
	  var data = ($___46__46__47_data_47_singleChoiceQuestion__ = __webpack_require__(5), $___46__46__47_data_47_singleChoiceQuestion__ && $___46__46__47_data_47_singleChoiceQuestion__.__esModule && $___46__46__47_data_47_singleChoiceQuestion__ || {default: $___46__46__47_data_47_singleChoiceQuestion__}).default;
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
	    inputs[$traceurRuntime.toProperty(answer)].checked = true;
	    inputs[$traceurRuntime.toProperty(answer)].parentElement.className += ' active';
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
/* 5 */
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
	  "use strict";
	  var $__1 = this;
	  var $___46__46__47_data_47_multiChoiceQuestion__;
	  var data = ($___46__46__47_data_47_multiChoiceQuestion__ = __webpack_require__(7), $___46__46__47_data_47_multiChoiceQuestion__ && $___46__46__47_data_47_multiChoiceQuestion__.__esModule && $___46__46__47_data_47_multiChoiceQuestion__ || {default: $___46__46__47_data_47_multiChoiceQuestion__}).default;
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
	      inputs[$traceurRuntime.toProperty(answer)].checked = true;
	      inputs[$traceurRuntime.toProperty(answer)].parentElement.className += ' active';
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
	  question: 'Jakie są Twoje ulubione gatunki muzyczne?',
	  answers: ['rock', 'pop', 'jazz', 'funk', 'muzyka klasyczna', 'inny'],
	  correct: 1
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
	  "use strict";
	  var $__4 = this;
	  var $___46__46__47_data_47_singleChoiceQuestion__,
	      $___46__46__47_data_47_multiChoiceQuestion__,
	      $___46__46__47_utils_47_validate__,
	      $___46__46__47_utils_47_http__;
	  var singleChoiceQuestion = ($___46__46__47_data_47_singleChoiceQuestion__ = __webpack_require__(5), $___46__46__47_data_47_singleChoiceQuestion__ && $___46__46__47_data_47_singleChoiceQuestion__.__esModule && $___46__46__47_data_47_singleChoiceQuestion__ || {default: $___46__46__47_data_47_singleChoiceQuestion__}).default;
	  var multiChoiceQuestion = ($___46__46__47_data_47_multiChoiceQuestion__ = __webpack_require__(7), $___46__46__47_data_47_multiChoiceQuestion__ && $___46__46__47_data_47_multiChoiceQuestion__.__esModule && $___46__46__47_data_47_multiChoiceQuestion__ || {default: $___46__46__47_data_47_multiChoiceQuestion__}).default;
	  var validate = ($___46__46__47_utils_47_validate__ = __webpack_require__(10), $___46__46__47_utils_47_validate__ && $___46__46__47_utils_47_validate__.__esModule && $___46__46__47_utils_47_validate__ || {default: $___46__46__47_utils_47_validate__}).default;
	  var http = ($___46__46__47_utils_47_http__ = __webpack_require__(11), $___46__46__47_utils_47_http__ && $___46__46__47_utils_47_http__.__esModule && $___46__46__47_utils_47_http__ || {default: $___46__46__47_utils_47_http__}).default;
	  var answersBuilder = (function(answers) {
	    var template = '';
	    answers.forEach(function(i) {
	      template += ("<li>" + (i + 1) + ". " + multiChoiceQuestion.answers[$traceurRuntime.toProperty(i)] + "</li>");
	    }, $__4);
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
	  var sendData = (function() {
	    var data,
	        res;
	    return $traceurRuntime.asyncWrap(function($ctx) {
	      while (true)
	        switch ($ctx.state) {
	          case 0:
	            data = {
	              name: localStorage.name,
	              singleChoiceQuestion: parseInt(localStorage.singleChoiceQuestion),
	              multiChoiceQuestion: localStorage.multiChoiceQuestion.split(',').map((function(x) {
	                return parseInt(x);
	              }))
	            };
	            $ctx.state = 5;
	            break;
	          case 5:
	            Promise.resolve(http.post({
	              url: 'server_app/server.php',
	              data: data
	            })).then($ctx.createCallback(2), $ctx.errback);
	            return;
	          case 2:
	            res = $ctx.value;
	            $ctx.state = 3;
	            break;
	          case 3:
	            console.log(res);
	            $ctx.state = -2;
	            break;
	          default:
	            return $ctx.end();
	        }
	    }, this);
	  });
	  var $__default = function() {
	    if (!validate()) {
	      return;
	    }
	    if (State.prev) {
	      sendData();
	    }
	    var mainContainer = document.querySelector('.main-container');
	    var singleChoiceAnswer = parseInt(localStorage.singleChoiceQuestion);
	    var multiChoiceAnswers = localStorage.multiChoiceQuestion.split(',').map((function(x) {
	      return parseInt(x);
	    }));
	    var template = ("\n        <div class=\"summary\">\n            <h2>Podsumowanie</h2>\n            <h4>Twoje imię: " + getName() + "</h4>\n            <div class=\"questions\">\n                <h4>Pytanie 1: " + singleChoiceQuestion.question + "</h4>\n                <p>Twoja odpowiedź: \n                    <ul>\n                        <li>" + (singleChoiceAnswer + 1) + ". " + singleChoiceQuestion.answers[$traceurRuntime.toProperty(singleChoiceAnswer)] + "</li>\n                    </ul>\n                </p>\n                <h4>Pytanie 2: " + multiChoiceQuestion.question + "</h4>\n                <p>Twoje odpowiedzi: \n                    <ul>\n                        " + answersBuilder(multiChoiceAnswers) + "\n                    </ul>\n                </p>\n            </div>\n            <div class=\"buttons-container\">\n                <a class=\"button\" href=\"#/\">Powrót do startu</a>\n                <a class=\"button clear\">Wyczyść i wróć na start</a>\n            </div>\n        </div>\n    ");
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
/* 10 */
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
	    if (!localStorage[$traceurRuntime.toProperty(key)]) {
	      isValid = false;
	      State.go(map[$traceurRuntime.toProperty(key)]);
	      showNotification();
	      return;
	    }
	  }
	  return isValid;
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var $__q__;
	var q = ($__q__ = __webpack_require__(12), $__q__ && $__q__.__esModule && $__q__ || {default: $__q__}).default;
	var $__default = {
	  post: (function($__1) {
	    var $__2 = $__1,
	        url = $__2.url,
	        data = $__2.data;
	    data = ("data=" + JSON.stringify(data));
	    var deferred = q.defer();
	    var req = new XMLHttpRequest();
	    req.open('POST', url, true);
	    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	    req.onreadystatechange = function(aEvt) {
	      if (req.readyState == 4) {
	        if (req.status == 200) {
	          var res = JSON.parse(req.responseText);
	          deferred.resolve(res);
	        } else {
	          console.log("Błąd podczas ładowania strony\n");
	          deferred.reject('POST error');
	        }
	      }
	    };
	    req.send(data);
	    return deferred.promise;
	  }),
	  get: (function($__1) {
	    var $__2 = $__1,
	        url = $__2.url,
	        data = $__2.data;
	    var deferred = q.defer();
	    var req = new XMLHttpRequest();
	    req.open('GET', url, true);
	    req.onreadystatechange = function(aEvt) {
	      if (req.readyState == 4) {
	        if (req.status == 200) {
	          var res = JSON.parse(req.responseText);
	          deferred.resolve(res);
	        } else {
	          console.log("Błąd podczas ładowania strony\n");
	          deferred.reject('POST error');
	        }
	      }
	    };
	    req.send();
	    return deferred.promise;
	  })
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process, setImmediate, module) {"use strict";
	(function(definition) {
	  "use strict";
	  if (typeof bootstrap === "function") {
	    bootstrap("promise", definition);
	  } else if (( false ? 'undefined' : $traceurRuntime.typeof(exports)) === "object" && ( false ? 'undefined' : $traceurRuntime.typeof(module)) === "object") {
	    module.exports = definition();
	  } else if (true) {
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof ses !== "undefined") {
	    if (!ses.ok()) {
	      return;
	    } else {
	      ses.makeQ = definition;
	    }
	  } else if (typeof window !== "undefined" || typeof self !== "undefined") {
	    var global = typeof window !== "undefined" ? window : self;
	    var previousQ = global.Q;
	    global.Q = definition();
	    global.Q.noConflict = function() {
	      global.Q = previousQ;
	      return this;
	    };
	  } else {
	    throw new Error("This environment was not anticipated by Q. Please file a bug.");
	  }
	})(function() {
	  "use strict";
	  var hasStacks = false;
	  try {
	    throw new Error();
	  } catch (e) {
	    hasStacks = !!e.stack;
	  }
	  var qStartingLine = captureLine();
	  var qFileName;
	  var noop = function() {};
	  var nextTick = (function() {
	    var head = {
	      task: void 0,
	      next: null
	    };
	    var tail = head;
	    var flushing = false;
	    var requestTick = void 0;
	    var isNodeJS = false;
	    var laterQueue = [];
	    function flush() {
	      var task,
	          domain;
	      while (head.next) {
	        head = head.next;
	        task = head.task;
	        head.task = void 0;
	        domain = head.domain;
	        if (domain) {
	          head.domain = void 0;
	          domain.enter();
	        }
	        runSingle(task, domain);
	      }
	      while (laterQueue.length) {
	        task = laterQueue.pop();
	        runSingle(task);
	      }
	      flushing = false;
	    }
	    function runSingle(task, domain) {
	      try {
	        task();
	      } catch (e) {
	        if (isNodeJS) {
	          if (domain) {
	            domain.exit();
	          }
	          setTimeout(flush, 0);
	          if (domain) {
	            domain.enter();
	          }
	          throw e;
	        } else {
	          setTimeout(function() {
	            throw e;
	          }, 0);
	        }
	      }
	      if (domain) {
	        domain.exit();
	      }
	    }
	    nextTick = function(task) {
	      tail = tail.next = {
	        task: task,
	        domain: isNodeJS && process.domain,
	        next: null
	      };
	      if (!flushing) {
	        flushing = true;
	        requestTick();
	      }
	    };
	    if ((typeof process === 'undefined' ? 'undefined' : $traceurRuntime.typeof(process)) === "object" && process.toString() === "[object process]" && process.nextTick) {
	      isNodeJS = true;
	      requestTick = function() {
	        process.nextTick(flush);
	      };
	    } else if (typeof setImmediate === "function") {
	      if (typeof window !== "undefined") {
	        requestTick = setImmediate.bind(window, flush);
	      } else {
	        requestTick = function() {
	          setImmediate(flush);
	        };
	      }
	    } else if (typeof MessageChannel !== "undefined") {
	      var channel = new MessageChannel();
	      channel.port1.onmessage = function() {
	        requestTick = requestPortTick;
	        channel.port1.onmessage = flush;
	        flush();
	      };
	      var requestPortTick = function() {
	        channel.port2.postMessage(0);
	      };
	      requestTick = function() {
	        setTimeout(flush, 0);
	        requestPortTick();
	      };
	    } else {
	      requestTick = function() {
	        setTimeout(flush, 0);
	      };
	    }
	    nextTick.runAfter = function(task) {
	      laterQueue.push(task);
	      if (!flushing) {
	        flushing = true;
	        requestTick();
	      }
	    };
	    return nextTick;
	  })();
	  var call = Function.call;
	  function uncurryThis(f) {
	    return function() {
	      return call.apply(f, arguments);
	    };
	  }
	  var array_slice = uncurryThis(Array.prototype.slice);
	  var array_reduce = uncurryThis(Array.prototype.reduce || function(callback, basis) {
	    var index = 0,
	        length = this.length;
	    if (arguments.length === 1) {
	      do {
	        if ($traceurRuntime.toProperty(index) in this) {
	          basis = this[$traceurRuntime.toProperty(index++)];
	          break;
	        }
	        if (++index >= length) {
	          throw new TypeError();
	        }
	      } while (1);
	    }
	    for (; index < length; index++) {
	      if ($traceurRuntime.toProperty(index) in this) {
	        basis = callback(basis, this[$traceurRuntime.toProperty(index)], index);
	      }
	    }
	    return basis;
	  });
	  var array_indexOf = uncurryThis(Array.prototype.indexOf || function(value) {
	    for (var i = 0; i < this.length; i++) {
	      if (this[$traceurRuntime.toProperty(i)] === value) {
	        return i;
	      }
	    }
	    return -1;
	  });
	  var array_map = uncurryThis(Array.prototype.map || function(callback, thisp) {
	    var self = this;
	    var collect = [];
	    array_reduce(self, function(undefined, value, index) {
	      collect.push(callback.call(thisp, value, index, self));
	    }, void 0);
	    return collect;
	  });
	  var object_create = Object.create || function(prototype) {
	    function Type() {}
	    Type.prototype = prototype;
	    return new Type();
	  };
	  var object_hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);
	  var object_keys = Object.keys || function(object) {
	    var keys = [];
	    for (var key in object) {
	      if (object_hasOwnProperty(object, key)) {
	        keys.push(key);
	      }
	    }
	    return keys;
	  };
	  var object_toString = uncurryThis(Object.prototype.toString);
	  function isObject(value) {
	    return value === Object(value);
	  }
	  function isStopIteration(exception) {
	    return (object_toString(exception) === "[object StopIteration]" || exception instanceof QReturnValue);
	  }
	  var QReturnValue;
	  if (typeof ReturnValue !== "undefined") {
	    QReturnValue = ReturnValue;
	  } else {
	    QReturnValue = function(value) {
	      this.value = value;
	    };
	  }
	  var STACK_JUMP_SEPARATOR = "From previous event:";
	  function makeStackTraceLong(error, promise) {
	    if (hasStacks && promise.stack && (typeof error === 'undefined' ? 'undefined' : $traceurRuntime.typeof(error)) === "object" && error !== null && error.stack && error.stack.indexOf(STACK_JUMP_SEPARATOR) === -1) {
	      var stacks = [];
	      for (var p = promise; !!p; p = p.source) {
	        if (p.stack) {
	          stacks.unshift(p.stack);
	        }
	      }
	      stacks.unshift(error.stack);
	      var concatedStacks = stacks.join("\n" + STACK_JUMP_SEPARATOR + "\n");
	      error.stack = filterStackString(concatedStacks);
	    }
	  }
	  function filterStackString(stackString) {
	    var lines = stackString.split("\n");
	    var desiredLines = [];
	    for (var i = 0; i < lines.length; ++i) {
	      var line = lines[$traceurRuntime.toProperty(i)];
	      if (!isInternalFrame(line) && !isNodeFrame(line) && line) {
	        desiredLines.push(line);
	      }
	    }
	    return desiredLines.join("\n");
	  }
	  function isNodeFrame(stackLine) {
	    return stackLine.indexOf("(module.js:") !== -1 || stackLine.indexOf("(node.js:") !== -1;
	  }
	  function getFileNameAndLineNumber(stackLine) {
	    var attempt1 = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(stackLine);
	    if (attempt1) {
	      return [attempt1[1], Number(attempt1[2])];
	    }
	    var attempt2 = /at ([^ ]+):(\d+):(?:\d+)$/.exec(stackLine);
	    if (attempt2) {
	      return [attempt2[1], Number(attempt2[2])];
	    }
	    var attempt3 = /.*@(.+):(\d+)$/.exec(stackLine);
	    if (attempt3) {
	      return [attempt3[1], Number(attempt3[2])];
	    }
	  }
	  function isInternalFrame(stackLine) {
	    var fileNameAndLineNumber = getFileNameAndLineNumber(stackLine);
	    if (!fileNameAndLineNumber) {
	      return false;
	    }
	    var fileName = fileNameAndLineNumber[0];
	    var lineNumber = fileNameAndLineNumber[1];
	    return fileName === qFileName && lineNumber >= qStartingLine && lineNumber <= qEndingLine;
	  }
	  function captureLine() {
	    if (!hasStacks) {
	      return;
	    }
	    try {
	      throw new Error();
	    } catch (e) {
	      var lines = e.stack.split("\n");
	      var firstLine = lines[0].indexOf("@") > 0 ? lines[1] : lines[2];
	      var fileNameAndLineNumber = getFileNameAndLineNumber(firstLine);
	      if (!fileNameAndLineNumber) {
	        return;
	      }
	      qFileName = fileNameAndLineNumber[0];
	      return fileNameAndLineNumber[1];
	    }
	  }
	  function deprecate(callback, name, alternative) {
	    return function() {
	      if (typeof console !== "undefined" && typeof console.warn === "function") {
	        console.warn(name + " is deprecated, use " + alternative + " instead.", new Error("").stack);
	      }
	      return callback.apply(callback, arguments);
	    };
	  }
	  function Q(value) {
	    if (value instanceof Promise) {
	      return value;
	    }
	    if (isPromiseAlike(value)) {
	      return coerce(value);
	    } else {
	      return fulfill(value);
	    }
	  }
	  Q.resolve = Q;
	  Q.nextTick = nextTick;
	  Q.longStackSupport = false;
	  if ((typeof process === 'undefined' ? 'undefined' : $traceurRuntime.typeof(process)) === "object" && process && process.env && process.env.Q_DEBUG) {
	    Q.longStackSupport = true;
	  }
	  Q.defer = defer;
	  function defer() {
	    var messages = [],
	        progressListeners = [],
	        resolvedPromise;
	    var deferred = object_create(defer.prototype);
	    var promise = object_create(Promise.prototype);
	    promise.promiseDispatch = function(resolve, op, operands) {
	      var args = array_slice(arguments);
	      if (messages) {
	        messages.push(args);
	        if (op === "when" && operands[1]) {
	          progressListeners.push(operands[1]);
	        }
	      } else {
	        Q.nextTick(function() {
	          resolvedPromise.promiseDispatch.apply(resolvedPromise, args);
	        });
	      }
	    };
	    promise.valueOf = function() {
	      if (messages) {
	        return promise;
	      }
	      var nearerValue = nearer(resolvedPromise);
	      if (isPromise(nearerValue)) {
	        resolvedPromise = nearerValue;
	      }
	      return nearerValue;
	    };
	    promise.inspect = function() {
	      if (!resolvedPromise) {
	        return {state: "pending"};
	      }
	      return resolvedPromise.inspect();
	    };
	    if (Q.longStackSupport && hasStacks) {
	      try {
	        throw new Error();
	      } catch (e) {
	        promise.stack = e.stack.substring(e.stack.indexOf("\n") + 1);
	      }
	    }
	    function become(newPromise) {
	      resolvedPromise = newPromise;
	      promise.source = newPromise;
	      array_reduce(messages, function(undefined, message) {
	        Q.nextTick(function() {
	          newPromise.promiseDispatch.apply(newPromise, message);
	        });
	      }, void 0);
	      messages = void 0;
	      progressListeners = void 0;
	    }
	    deferred.promise = promise;
	    deferred.resolve = function(value) {
	      if (resolvedPromise) {
	        return;
	      }
	      become(Q(value));
	    };
	    deferred.fulfill = function(value) {
	      if (resolvedPromise) {
	        return;
	      }
	      become(fulfill(value));
	    };
	    deferred.reject = function(reason) {
	      if (resolvedPromise) {
	        return;
	      }
	      become(reject(reason));
	    };
	    deferred.notify = function(progress) {
	      if (resolvedPromise) {
	        return;
	      }
	      array_reduce(progressListeners, function(undefined, progressListener) {
	        Q.nextTick(function() {
	          progressListener(progress);
	        });
	      }, void 0);
	    };
	    return deferred;
	  }
	  defer.prototype.makeNodeResolver = function() {
	    var self = this;
	    return function(error, value) {
	      if (error) {
	        self.reject(error);
	      } else if (arguments.length > 2) {
	        self.resolve(array_slice(arguments, 1));
	      } else {
	        self.resolve(value);
	      }
	    };
	  };
	  Q.Promise = promise;
	  Q.promise = promise;
	  function promise(resolver) {
	    if (typeof resolver !== "function") {
	      throw new TypeError("resolver must be a function.");
	    }
	    var deferred = defer();
	    try {
	      resolver(deferred.resolve, deferred.reject, deferred.notify);
	    } catch (reason) {
	      deferred.reject(reason);
	    }
	    return deferred.promise;
	  }
	  promise.race = race;
	  promise.all = all;
	  promise.reject = reject;
	  promise.resolve = Q;
	  Q.passByCopy = function(object) {
	    return object;
	  };
	  Promise.prototype.passByCopy = function() {
	    return this;
	  };
	  Q.join = function(x, y) {
	    return Q(x).join(y);
	  };
	  Promise.prototype.join = function(that) {
	    return Q([this, that]).spread(function(x, y) {
	      if (x === y) {
	        return x;
	      } else {
	        throw new Error("Can't join: not the same: " + x + " " + y);
	      }
	    });
	  };
	  Q.race = race;
	  function race(answerPs) {
	    return promise(function(resolve, reject) {
	      for (var i = 0,
	          len = answerPs.length; i < len; i++) {
	        Q(answerPs[$traceurRuntime.toProperty(i)]).then(resolve, reject);
	      }
	    });
	  }
	  Promise.prototype.race = function() {
	    return this.then(Q.race);
	  };
	  Q.makePromise = Promise;
	  function Promise(descriptor, fallback, inspect) {
	    if (fallback === void 0) {
	      fallback = function(op) {
	        return reject(new Error("Promise does not support operation: " + op));
	      };
	    }
	    if (inspect === void 0) {
	      inspect = function() {
	        return {state: "unknown"};
	      };
	    }
	    var promise = object_create(Promise.prototype);
	    promise.promiseDispatch = function(resolve, op, args) {
	      var result;
	      try {
	        if (descriptor[$traceurRuntime.toProperty(op)]) {
	          result = descriptor[$traceurRuntime.toProperty(op)].apply(promise, args);
	        } else {
	          result = fallback.call(promise, op, args);
	        }
	      } catch (exception) {
	        result = reject(exception);
	      }
	      if (resolve) {
	        resolve(result);
	      }
	    };
	    promise.inspect = inspect;
	    if (inspect) {
	      var inspected = inspect();
	      if (inspected.state === "rejected") {
	        promise.exception = inspected.reason;
	      }
	      promise.valueOf = function() {
	        var inspected = inspect();
	        if (inspected.state === "pending" || inspected.state === "rejected") {
	          return promise;
	        }
	        return inspected.value;
	      };
	    }
	    return promise;
	  }
	  Promise.prototype.toString = function() {
	    return "[object Promise]";
	  };
	  Promise.prototype.then = function(fulfilled, rejected, progressed) {
	    var self = this;
	    var deferred = defer();
	    var done = false;
	    function _fulfilled(value) {
	      try {
	        return typeof fulfilled === "function" ? fulfilled(value) : value;
	      } catch (exception) {
	        return reject(exception);
	      }
	    }
	    function _rejected(exception) {
	      if (typeof rejected === "function") {
	        makeStackTraceLong(exception, self);
	        try {
	          return rejected(exception);
	        } catch (newException) {
	          return reject(newException);
	        }
	      }
	      return reject(exception);
	    }
	    function _progressed(value) {
	      return typeof progressed === "function" ? progressed(value) : value;
	    }
	    Q.nextTick(function() {
	      self.promiseDispatch(function(value) {
	        if (done) {
	          return;
	        }
	        done = true;
	        deferred.resolve(_fulfilled(value));
	      }, "when", [function(exception) {
	        if (done) {
	          return;
	        }
	        done = true;
	        deferred.resolve(_rejected(exception));
	      }]);
	    });
	    self.promiseDispatch(void 0, "when", [void 0, function(value) {
	      var newValue;
	      var threw = false;
	      try {
	        newValue = _progressed(value);
	      } catch (e) {
	        threw = true;
	        if (Q.onerror) {
	          Q.onerror(e);
	        } else {
	          throw e;
	        }
	      }
	      if (!threw) {
	        deferred.notify(newValue);
	      }
	    }]);
	    return deferred.promise;
	  };
	  Q.tap = function(promise, callback) {
	    return Q(promise).tap(callback);
	  };
	  Promise.prototype.tap = function(callback) {
	    callback = Q(callback);
	    return this.then(function(value) {
	      return callback.fcall(value).thenResolve(value);
	    });
	  };
	  Q.when = when;
	  function when(value, fulfilled, rejected, progressed) {
	    return Q(value).then(fulfilled, rejected, progressed);
	  }
	  Promise.prototype.thenResolve = function(value) {
	    return this.then(function() {
	      return value;
	    });
	  };
	  Q.thenResolve = function(promise, value) {
	    return Q(promise).thenResolve(value);
	  };
	  Promise.prototype.thenReject = function(reason) {
	    return this.then(function() {
	      throw reason;
	    });
	  };
	  Q.thenReject = function(promise, reason) {
	    return Q(promise).thenReject(reason);
	  };
	  Q.nearer = nearer;
	  function nearer(value) {
	    if (isPromise(value)) {
	      var inspected = value.inspect();
	      if (inspected.state === "fulfilled") {
	        return inspected.value;
	      }
	    }
	    return value;
	  }
	  Q.isPromise = isPromise;
	  function isPromise(object) {
	    return object instanceof Promise;
	  }
	  Q.isPromiseAlike = isPromiseAlike;
	  function isPromiseAlike(object) {
	    return isObject(object) && typeof object.then === "function";
	  }
	  Q.isPending = isPending;
	  function isPending(object) {
	    return isPromise(object) && object.inspect().state === "pending";
	  }
	  Promise.prototype.isPending = function() {
	    return this.inspect().state === "pending";
	  };
	  Q.isFulfilled = isFulfilled;
	  function isFulfilled(object) {
	    return !isPromise(object) || object.inspect().state === "fulfilled";
	  }
	  Promise.prototype.isFulfilled = function() {
	    return this.inspect().state === "fulfilled";
	  };
	  Q.isRejected = isRejected;
	  function isRejected(object) {
	    return isPromise(object) && object.inspect().state === "rejected";
	  }
	  Promise.prototype.isRejected = function() {
	    return this.inspect().state === "rejected";
	  };
	  var unhandledReasons = [];
	  var unhandledRejections = [];
	  var reportedUnhandledRejections = [];
	  var trackUnhandledRejections = true;
	  function resetUnhandledRejections() {
	    unhandledReasons.length = 0;
	    unhandledRejections.length = 0;
	    if (!trackUnhandledRejections) {
	      trackUnhandledRejections = true;
	    }
	  }
	  function trackRejection(promise, reason) {
	    if (!trackUnhandledRejections) {
	      return;
	    }
	    if ((typeof process === 'undefined' ? 'undefined' : $traceurRuntime.typeof(process)) === "object" && typeof process.emit === "function") {
	      Q.nextTick.runAfter(function() {
	        if (array_indexOf(unhandledRejections, promise) !== -1) {
	          process.emit("unhandledRejection", reason, promise);
	          reportedUnhandledRejections.push(promise);
	        }
	      });
	    }
	    unhandledRejections.push(promise);
	    if (reason && typeof reason.stack !== "undefined") {
	      unhandledReasons.push(reason.stack);
	    } else {
	      unhandledReasons.push("(no stack) " + reason);
	    }
	  }
	  function untrackRejection(promise) {
	    if (!trackUnhandledRejections) {
	      return;
	    }
	    var at = array_indexOf(unhandledRejections, promise);
	    if (at !== -1) {
	      if ((typeof process === 'undefined' ? 'undefined' : $traceurRuntime.typeof(process)) === "object" && typeof process.emit === "function") {
	        Q.nextTick.runAfter(function() {
	          var atReport = array_indexOf(reportedUnhandledRejections, promise);
	          if (atReport !== -1) {
	            process.emit("rejectionHandled", unhandledReasons[$traceurRuntime.toProperty(at)], promise);
	            reportedUnhandledRejections.splice(atReport, 1);
	          }
	        });
	      }
	      unhandledRejections.splice(at, 1);
	      unhandledReasons.splice(at, 1);
	    }
	  }
	  Q.resetUnhandledRejections = resetUnhandledRejections;
	  Q.getUnhandledReasons = function() {
	    return unhandledReasons.slice();
	  };
	  Q.stopUnhandledRejectionTracking = function() {
	    resetUnhandledRejections();
	    trackUnhandledRejections = false;
	  };
	  resetUnhandledRejections();
	  Q.reject = reject;
	  function reject(reason) {
	    var rejection = Promise({"when": function(rejected) {
	        if (rejected) {
	          untrackRejection(this);
	        }
	        return rejected ? rejected(reason) : this;
	      }}, function fallback() {
	      return this;
	    }, function inspect() {
	      return {
	        state: "rejected",
	        reason: reason
	      };
	    });
	    trackRejection(rejection, reason);
	    return rejection;
	  }
	  Q.fulfill = fulfill;
	  function fulfill(value) {
	    return Promise({
	      "when": function() {
	        return value;
	      },
	      "get": function(name) {
	        return value[$traceurRuntime.toProperty(name)];
	      },
	      "set": function(name, rhs) {
	        $traceurRuntime.setProperty(value, name, rhs);
	      },
	      "delete": function(name) {
	        delete value[$traceurRuntime.toProperty(name)];
	      },
	      "post": function(name, args) {
	        if (name === null || name === void 0) {
	          return value.apply(void 0, args);
	        } else {
	          return value[$traceurRuntime.toProperty(name)].apply(value, args);
	        }
	      },
	      "apply": function(thisp, args) {
	        return value.apply(thisp, args);
	      },
	      "keys": function() {
	        return object_keys(value);
	      }
	    }, void 0, function inspect() {
	      return {
	        state: "fulfilled",
	        value: value
	      };
	    });
	  }
	  function coerce(promise) {
	    var deferred = defer();
	    Q.nextTick(function() {
	      try {
	        promise.then(deferred.resolve, deferred.reject, deferred.notify);
	      } catch (exception) {
	        deferred.reject(exception);
	      }
	    });
	    return deferred.promise;
	  }
	  Q.master = master;
	  function master(object) {
	    return Promise({"isDef": function() {}}, function fallback(op, args) {
	      return dispatch(object, op, args);
	    }, function() {
	      return Q(object).inspect();
	    });
	  }
	  Q.spread = spread;
	  function spread(value, fulfilled, rejected) {
	    return Q(value).spread(fulfilled, rejected);
	  }
	  Promise.prototype.spread = function(fulfilled, rejected) {
	    return this.all().then(function(array) {
	      return fulfilled.apply(void 0, array);
	    }, rejected);
	  };
	  Q.async = async;
	  function async(makeGenerator) {
	    return function() {
	      function continuer(verb, arg) {
	        var result;
	        if (typeof StopIteration === "undefined") {
	          try {
	            result = generator[$traceurRuntime.toProperty(verb)](arg);
	          } catch (exception) {
	            return reject(exception);
	          }
	          if (result.done) {
	            return Q(result.value);
	          } else {
	            return when(result.value, callback, errback);
	          }
	        } else {
	          try {
	            result = generator[$traceurRuntime.toProperty(verb)](arg);
	          } catch (exception) {
	            if (isStopIteration(exception)) {
	              return Q(exception.value);
	            } else {
	              return reject(exception);
	            }
	          }
	          return when(result, callback, errback);
	        }
	      }
	      var generator = makeGenerator.apply(this, arguments);
	      var callback = continuer.bind(continuer, "next");
	      var errback = continuer.bind(continuer, "throw");
	      return callback();
	    };
	  }
	  Q.spawn = spawn;
	  function spawn(makeGenerator) {
	    Q.done(Q.async(makeGenerator)());
	  }
	  $traceurRuntime.setProperty(Q, "return", _return);
	  function _return(value) {
	    throw new QReturnValue(value);
	  }
	  Q.promised = promised;
	  function promised(callback) {
	    return function() {
	      return spread([this, all(arguments)], function(self, args) {
	        return callback.apply(self, args);
	      });
	    };
	  }
	  Q.dispatch = dispatch;
	  function dispatch(object, op, args) {
	    return Q(object).dispatch(op, args);
	  }
	  Promise.prototype.dispatch = function(op, args) {
	    var self = this;
	    var deferred = defer();
	    Q.nextTick(function() {
	      self.promiseDispatch(deferred.resolve, op, args);
	    });
	    return deferred.promise;
	  };
	  Q.get = function(object, key) {
	    return Q(object).dispatch("get", [key]);
	  };
	  Promise.prototype.get = function(key) {
	    return this.dispatch("get", [key]);
	  };
	  Q.set = function(object, key, value) {
	    return Q(object).dispatch("set", [key, value]);
	  };
	  Promise.prototype.set = function(key, value) {
	    return this.dispatch("set", [key, value]);
	  };
	  Q.del = $traceurRuntime.setProperty(Q, "delete", function(object, key) {
	    return Q(object).dispatch("delete", [key]);
	  });
	  Promise.prototype.del = $traceurRuntime.setProperty(Promise.prototype, "delete", function(key) {
	    return this.dispatch("delete", [key]);
	  });
	  Q.mapply = Q.post = function(object, name, args) {
	    return Q(object).dispatch("post", [name, args]);
	  };
	  Promise.prototype.mapply = Promise.prototype.post = function(name, args) {
	    return this.dispatch("post", [name, args]);
	  };
	  Q.send = Q.mcall = Q.invoke = function(object, name) {
	    return Q(object).dispatch("post", [name, array_slice(arguments, 2)]);
	  };
	  Promise.prototype.send = Promise.prototype.mcall = Promise.prototype.invoke = function(name) {
	    return this.dispatch("post", [name, array_slice(arguments, 1)]);
	  };
	  Q.fapply = function(object, args) {
	    return Q(object).dispatch("apply", [void 0, args]);
	  };
	  Promise.prototype.fapply = function(args) {
	    return this.dispatch("apply", [void 0, args]);
	  };
	  $traceurRuntime.setProperty(Q, "try", Q.fcall = function(object) {
	    return Q(object).dispatch("apply", [void 0, array_slice(arguments, 1)]);
	  });
	  Promise.prototype.fcall = function() {
	    return this.dispatch("apply", [void 0, array_slice(arguments)]);
	  };
	  Q.fbind = function(object) {
	    var promise = Q(object);
	    var args = array_slice(arguments, 1);
	    return function fbound() {
	      return promise.dispatch("apply", [this, args.concat(array_slice(arguments))]);
	    };
	  };
	  Promise.prototype.fbind = function() {
	    var promise = this;
	    var args = array_slice(arguments);
	    return function fbound() {
	      return promise.dispatch("apply", [this, args.concat(array_slice(arguments))]);
	    };
	  };
	  Q.keys = function(object) {
	    return Q(object).dispatch("keys", []);
	  };
	  Promise.prototype.keys = function() {
	    return this.dispatch("keys", []);
	  };
	  Q.all = all;
	  function all(promises) {
	    return when(promises, function(promises) {
	      var pendingCount = 0;
	      var deferred = defer();
	      array_reduce(promises, function(undefined, promise, index) {
	        var snapshot;
	        if (isPromise(promise) && (snapshot = promise.inspect()).state === "fulfilled") {
	          $traceurRuntime.setProperty(promises, index, snapshot.value);
	        } else {
	          ++pendingCount;
	          when(promise, function(value) {
	            $traceurRuntime.setProperty(promises, index, value);
	            if (--pendingCount === 0) {
	              deferred.resolve(promises);
	            }
	          }, deferred.reject, function(progress) {
	            deferred.notify({
	              index: index,
	              value: progress
	            });
	          });
	        }
	      }, void 0);
	      if (pendingCount === 0) {
	        deferred.resolve(promises);
	      }
	      return deferred.promise;
	    });
	  }
	  Promise.prototype.all = function() {
	    return all(this);
	  };
	  Q.any = any;
	  function any(promises) {
	    if (promises.length === 0) {
	      return Q.resolve();
	    }
	    var deferred = Q.defer();
	    var pendingCount = 0;
	    array_reduce(promises, function(prev, current, index) {
	      var promise = promises[$traceurRuntime.toProperty(index)];
	      pendingCount++;
	      when(promise, onFulfilled, onRejected, onProgress);
	      function onFulfilled(result) {
	        deferred.resolve(result);
	      }
	      function onRejected() {
	        pendingCount--;
	        if (pendingCount === 0) {
	          deferred.reject(new Error("Can't get fulfillment value from any promise, all " + "promises were rejected."));
	        }
	      }
	      function onProgress(progress) {
	        deferred.notify({
	          index: index,
	          value: progress
	        });
	      }
	    }, undefined);
	    return deferred.promise;
	  }
	  Promise.prototype.any = function() {
	    return any(this);
	  };
	  Q.allResolved = deprecate(allResolved, "allResolved", "allSettled");
	  function allResolved(promises) {
	    return when(promises, function(promises) {
	      promises = array_map(promises, Q);
	      return when(all(array_map(promises, function(promise) {
	        return when(promise, noop, noop);
	      })), function() {
	        return promises;
	      });
	    });
	  }
	  Promise.prototype.allResolved = function() {
	    return allResolved(this);
	  };
	  Q.allSettled = allSettled;
	  function allSettled(promises) {
	    return Q(promises).allSettled();
	  }
	  Promise.prototype.allSettled = function() {
	    return this.then(function(promises) {
	      return all(array_map(promises, function(promise) {
	        promise = Q(promise);
	        function regardless() {
	          return promise.inspect();
	        }
	        return promise.then(regardless, regardless);
	      }));
	    });
	  };
	  Q.fail = $traceurRuntime.setProperty(Q, "catch", function(object, rejected) {
	    return Q(object).then(void 0, rejected);
	  });
	  Promise.prototype.fail = $traceurRuntime.setProperty(Promise.prototype, "catch", function(rejected) {
	    return this.then(void 0, rejected);
	  });
	  Q.progress = progress;
	  function progress(object, progressed) {
	    return Q(object).then(void 0, void 0, progressed);
	  }
	  Promise.prototype.progress = function(progressed) {
	    return this.then(void 0, void 0, progressed);
	  };
	  Q.fin = $traceurRuntime.setProperty(Q, "finally", function(object, callback) {
	    return Q(object)[$traceurRuntime.toProperty("finally")](callback);
	  });
	  Promise.prototype.fin = $traceurRuntime.setProperty(Promise.prototype, "finally", function(callback) {
	    callback = Q(callback);
	    return this.then(function(value) {
	      return callback.fcall().then(function() {
	        return value;
	      });
	    }, function(reason) {
	      return callback.fcall().then(function() {
	        throw reason;
	      });
	    });
	  });
	  Q.done = function(object, fulfilled, rejected, progress) {
	    return Q(object).done(fulfilled, rejected, progress);
	  };
	  Promise.prototype.done = function(fulfilled, rejected, progress) {
	    var onUnhandledError = function(error) {
	      Q.nextTick(function() {
	        makeStackTraceLong(error, promise);
	        if (Q.onerror) {
	          Q.onerror(error);
	        } else {
	          throw error;
	        }
	      });
	    };
	    var promise = fulfilled || rejected || progress ? this.then(fulfilled, rejected, progress) : this;
	    if ((typeof process === 'undefined' ? 'undefined' : $traceurRuntime.typeof(process)) === "object" && process && process.domain) {
	      onUnhandledError = process.domain.bind(onUnhandledError);
	    }
	    promise.then(void 0, onUnhandledError);
	  };
	  Q.timeout = function(object, ms, error) {
	    return Q(object).timeout(ms, error);
	  };
	  Promise.prototype.timeout = function(ms, error) {
	    var deferred = defer();
	    var timeoutId = setTimeout(function() {
	      if (!error || "string" === typeof error) {
	        error = new Error(error || "Timed out after " + ms + " ms");
	        error.code = "ETIMEDOUT";
	      }
	      deferred.reject(error);
	    }, ms);
	    this.then(function(value) {
	      clearTimeout(timeoutId);
	      deferred.resolve(value);
	    }, function(exception) {
	      clearTimeout(timeoutId);
	      deferred.reject(exception);
	    }, deferred.notify);
	    return deferred.promise;
	  };
	  Q.delay = function(object, timeout) {
	    if (timeout === void 0) {
	      timeout = object;
	      object = void 0;
	    }
	    return Q(object).delay(timeout);
	  };
	  Promise.prototype.delay = function(timeout) {
	    return this.then(function(value) {
	      var deferred = defer();
	      setTimeout(function() {
	        deferred.resolve(value);
	      }, timeout);
	      return deferred.promise;
	    });
	  };
	  Q.nfapply = function(callback, args) {
	    return Q(callback).nfapply(args);
	  };
	  Promise.prototype.nfapply = function(args) {
	    var deferred = defer();
	    var nodeArgs = array_slice(args);
	    nodeArgs.push(deferred.makeNodeResolver());
	    this.fapply(nodeArgs).fail(deferred.reject);
	    return deferred.promise;
	  };
	  Q.nfcall = function(callback) {
	    var args = array_slice(arguments, 1);
	    return Q(callback).nfapply(args);
	  };
	  Promise.prototype.nfcall = function() {
	    var nodeArgs = array_slice(arguments);
	    var deferred = defer();
	    nodeArgs.push(deferred.makeNodeResolver());
	    this.fapply(nodeArgs).fail(deferred.reject);
	    return deferred.promise;
	  };
	  Q.nfbind = Q.denodeify = function(callback) {
	    var baseArgs = array_slice(arguments, 1);
	    return function() {
	      var nodeArgs = baseArgs.concat(array_slice(arguments));
	      var deferred = defer();
	      nodeArgs.push(deferred.makeNodeResolver());
	      Q(callback).fapply(nodeArgs).fail(deferred.reject);
	      return deferred.promise;
	    };
	  };
	  Promise.prototype.nfbind = Promise.prototype.denodeify = function() {
	    var args = array_slice(arguments);
	    args.unshift(this);
	    return Q.denodeify.apply(void 0, args);
	  };
	  Q.nbind = function(callback, thisp) {
	    var baseArgs = array_slice(arguments, 2);
	    return function() {
	      var nodeArgs = baseArgs.concat(array_slice(arguments));
	      var deferred = defer();
	      nodeArgs.push(deferred.makeNodeResolver());
	      function bound() {
	        return callback.apply(thisp, arguments);
	      }
	      Q(bound).fapply(nodeArgs).fail(deferred.reject);
	      return deferred.promise;
	    };
	  };
	  Promise.prototype.nbind = function() {
	    var args = array_slice(arguments, 0);
	    args.unshift(this);
	    return Q.nbind.apply(void 0, args);
	  };
	  Q.nmapply = Q.npost = function(object, name, args) {
	    return Q(object).npost(name, args);
	  };
	  Promise.prototype.nmapply = Promise.prototype.npost = function(name, args) {
	    var nodeArgs = array_slice(args || []);
	    var deferred = defer();
	    nodeArgs.push(deferred.makeNodeResolver());
	    this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
	    return deferred.promise;
	  };
	  Q.nsend = Q.nmcall = Q.ninvoke = function(object, name) {
	    var nodeArgs = array_slice(arguments, 2);
	    var deferred = defer();
	    nodeArgs.push(deferred.makeNodeResolver());
	    Q(object).dispatch("post", [name, nodeArgs]).fail(deferred.reject);
	    return deferred.promise;
	  };
	  Promise.prototype.nsend = Promise.prototype.nmcall = Promise.prototype.ninvoke = function(name) {
	    var nodeArgs = array_slice(arguments, 1);
	    var deferred = defer();
	    nodeArgs.push(deferred.makeNodeResolver());
	    this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
	    return deferred.promise;
	  };
	  Q.nodeify = nodeify;
	  function nodeify(object, nodeback) {
	    return Q(object).nodeify(nodeback);
	  }
	  Promise.prototype.nodeify = function(nodeback) {
	    if (nodeback) {
	      this.then(function(value) {
	        Q.nextTick(function() {
	          nodeback(null, value);
	        });
	      }, function(error) {
	        Q.nextTick(function() {
	          nodeback(error);
	        });
	      });
	    } else {
	      return this;
	    }
	  };
	  Q.noConflict = function() {
	    throw new Error("Q.noConflict only works when Q is used as a global");
	  };
	  var qEndingLine = captureLine();
	  return Q;
	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13), __webpack_require__(14).setImmediate, __webpack_require__(15)(module)))

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	var process = module.exports = {};
	var cachedSetTimeout;
	var cachedClearTimeout;
	function defaultSetTimout() {
	  throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	  throw new Error('clearTimeout has not been defined');
	}
	(function() {
	  try {
	    if (typeof setTimeout === 'function') {
	      cachedSetTimeout = setTimeout;
	    } else {
	      cachedSetTimeout = defaultSetTimout;
	    }
	  } catch (e) {
	    cachedSetTimeout = defaultSetTimout;
	  }
	  try {
	    if (typeof clearTimeout === 'function') {
	      cachedClearTimeout = clearTimeout;
	    } else {
	      cachedClearTimeout = defaultClearTimeout;
	    }
	  } catch (e) {
	    cachedClearTimeout = defaultClearTimeout;
	  }
	}());
	function runTimeout(fun) {
	  if (cachedSetTimeout === setTimeout) {
	    return setTimeout(fun, 0);
	  }
	  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	    cachedSetTimeout = setTimeout;
	    return setTimeout(fun, 0);
	  }
	  try {
	    return cachedSetTimeout(fun, 0);
	  } catch (e) {
	    try {
	      return cachedSetTimeout.call(null, fun, 0);
	    } catch (e) {
	      return cachedSetTimeout.call(this, fun, 0);
	    }
	  }
	}
	function runClearTimeout(marker) {
	  if (cachedClearTimeout === clearTimeout) {
	    return clearTimeout(marker);
	  }
	  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	    cachedClearTimeout = clearTimeout;
	    return clearTimeout(marker);
	  }
	  try {
	    return cachedClearTimeout(marker);
	  } catch (e) {
	    try {
	      return cachedClearTimeout.call(null, marker);
	    } catch (e) {
	      return cachedClearTimeout.call(this, marker);
	    }
	  }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	function cleanUpNextTick() {
	  if (!draining || !currentQueue) {
	    return;
	  }
	  draining = false;
	  if (currentQueue.length) {
	    queue = currentQueue.concat(queue);
	  } else {
	    queueIndex = -1;
	  }
	  if (queue.length) {
	    drainQueue();
	  }
	}
	function drainQueue() {
	  if (draining) {
	    return;
	  }
	  var timeout = runTimeout(cleanUpNextTick);
	  draining = true;
	  var len = queue.length;
	  while (len) {
	    currentQueue = queue;
	    queue = [];
	    while (++queueIndex < len) {
	      if (currentQueue) {
	        currentQueue[$traceurRuntime.toProperty(queueIndex)].run();
	      }
	    }
	    queueIndex = -1;
	    len = queue.length;
	  }
	  currentQueue = null;
	  draining = false;
	  runClearTimeout(timeout);
	}
	process.nextTick = function(fun) {
	  var args = new Array(arguments.length - 1);
	  if (arguments.length > 1) {
	    for (var i = 1; i < arguments.length; i++) {
	      $traceurRuntime.setProperty(args, i - 1, arguments[$traceurRuntime.toProperty(i)]);
	    }
	  }
	  queue.push(new Item(fun, args));
	  if (queue.length === 1 && !draining) {
	    runTimeout(drainQueue);
	  }
	};
	function Item(fun, array) {
	  this.fun = fun;
	  this.array = array;
	}
	Item.prototype.run = function() {
	  this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = '';
	process.versions = {};
	function noop() {}
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.binding = function(name) {
	  throw new Error('process.binding is not supported');
	};
	process.cwd = function() {
	  return '/';
	};
	process.chdir = function(dir) {
	  throw new Error('process.chdir is not supported');
	};
	process.umask = function() {
	  return 0;
	};


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {"use strict";
	var nextTick = __webpack_require__(13).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;
	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout = exports.clearInterval = function(timeout) {
	  timeout.close();
	};
	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};
	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};
	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);
	  $traceurRuntime.setProperty(immediateIds, id, true);
	  nextTick(function onNextTick() {
	    if (immediateIds[$traceurRuntime.toProperty(id)]) {
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      exports.clearImmediate(id);
	    }
	  });
	  return id;
	};
	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[$traceurRuntime.toProperty(id)];
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14).setImmediate, __webpack_require__(14).clearImmediate))

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	module.exports = function(module) {
	  if (!module.webpackPolyfill) {
	    module.deprecate = function() {};
	    module.paths = [];
	    module.children = [];
	    module.webpackPolyfill = 1;
	  }
	  return module;
	};


/***/ }
/******/ ]);