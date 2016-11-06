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
	var welcomeViewBuilder = ($__viewBuilders_47_welcomeViewBuilder__ = __webpack_require__(14), $__viewBuilders_47_welcomeViewBuilder__ && $__viewBuilders_47_welcomeViewBuilder__.__esModule && $__viewBuilders_47_welcomeViewBuilder__ || {default: $__viewBuilders_47_welcomeViewBuilder__}).default;
	var summaryViewBuilder = ($__viewBuilders_47_summaryViewBuilder__ = __webpack_require__(15), $__viewBuilders_47_summaryViewBuilder__ && $__viewBuilders_47_summaryViewBuilder__.__esModule && $__viewBuilders_47_summaryViewBuilder__ || {default: $__viewBuilders_47_summaryViewBuilder__}).default;
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
	  var $__3 = this;
	  var $___46__46__47_data_47_multiChoiceQuestion__,
	      $___46__46__47_utils_47_http__,
	      $___46__46__47_utils_47_validate__;
	  var data = ($___46__46__47_data_47_multiChoiceQuestion__ = __webpack_require__(7), $___46__46__47_data_47_multiChoiceQuestion__ && $___46__46__47_data_47_multiChoiceQuestion__.__esModule && $___46__46__47_data_47_multiChoiceQuestion__ || {default: $___46__46__47_data_47_multiChoiceQuestion__}).default;
	  var http = ($___46__46__47_utils_47_http__ = __webpack_require__(8), $___46__46__47_utils_47_http__ && $___46__46__47_utils_47_http__.__esModule && $___46__46__47_utils_47_http__ || {default: $___46__46__47_utils_47_http__}).default;
	  var validate = ($___46__46__47_utils_47_validate__ = __webpack_require__(13), $___46__46__47_utils_47_validate__ && $___46__46__47_utils_47_validate__.__esModule && $___46__46__47_utils_47_validate__ || {default: $___46__46__47_utils_47_validate__}).default;
	  var sendData = (function() {
	    var data,
	        res;
	    return $traceurRuntime.asyncWrap(function($ctx) {
	      while (true)
	        switch ($ctx.state) {
	          case 0:
	            $ctx.state = (!validate()) ? 1 : 3;
	            break;
	          case 1:
	            $ctx.returnValue = undefined;
	            $ctx.state = 2;
	            break;
	          case 2:
	            $ctx.state = -2;
	            break;
	          case 3:
	            data = {
	              name: localStorage.name,
	              singleChoiceQuestion: parseInt(localStorage.singleChoiceQuestion),
	              multiChoiceQuestion: localStorage.multiChoiceQuestion.split(',').map((function(x) {
	                return parseInt(x);
	              }))
	            };
	            $ctx.state = 9;
	            break;
	          case 9:
	            Promise.resolve(http.post({
	              url: 'server_app/post.php',
	              data: data
	            })).then($ctx.createCallback(6), $ctx.errback);
	            return;
	          case 6:
	            res = $ctx.value;
	            $ctx.state = 7;
	            break;
	          case 7:
	            console.log(res);
	            State.go('/summary');
	            $ctx.state = -2;
	            break;
	          default:
	            return $ctx.end();
	        }
	    }, this);
	  });
	  var save = (function() {
	    var values = [];
	    var inputs = document.querySelectorAll('input[name=multi-choice-question]');
	    inputs.forEach(function(input) {
	      if (input.checked) {
	        values.push(input.value);
	      }
	    }, $__3);
	    localStorage.multiChoiceQuestion = values;
	  });
	  var answersBuilder = function(answers) {
	    var template = '';
	    answers.forEach(function(answer, index) {
	      template += ("\n            <div class=\"answer\">\n                <input type=\"checkbox\" name=\"multi-choice-question\" value=\"" + index + "\" id=" + index + ">\n                <label for=\"" + index + "\">" + (index + 1) + ". " + answer + "</label>\n            </div>\n        ");
	    }, this);
	    return template;
	  };
	  var addChangeListener = (function($__4) {
	    var inputs = $__4.inputs;
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
	    }, $__3);
	  });
	  var readSavedState = (function($__4) {
	    var inputs = $__4.inputs;
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
	    var template = ("\n        <div class=\"question\">\n            <h3>" + questionObj.question + "</h3>\n            <div class=\"answers\">\n                " + answersBuilder(questionObj.answers) + "\n            </div>\n            <div class=\"buttons-container\">\n                <a class=\"button\" onClick=\"State.go('/single-choice-question')\">Wstecz</a>\n                <a class=\"button summary\" onClick=\"State.go('/summary')\">Wyślij</a>\n            </div>\n        </div>\n    ");
	    mainContainer.innerHTML = template;
	    var inputs = document.querySelectorAll('input[name=multi-choice-question]');
	    addChangeListener({inputs: inputs});
	    readSavedState({inputs: inputs});
	    document.querySelector('.summary').addEventListener('click', sendData);
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
	  answers: ['rock', 'pop', 'jazz', 'funk', 'metal', 'inny'],
	  correct: 1
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var $__q__;
	var q = ($__q__ = __webpack_require__(9), $__q__ && $__q__.__esModule && $__q__ || {default: $__q__}).default;
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
	          console.log(req.responseText);
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
/* 9 */
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

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10), __webpack_require__(11).setImmediate, __webpack_require__(12)(module)))

/***/ },
/* 10 */
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {"use strict";
	var nextTick = __webpack_require__(10).nextTick;
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

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11).setImmediate, __webpack_require__(11).clearImmediate))

/***/ },
/* 12 */
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


/***/ },
/* 13 */
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
/* 14 */
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
	  "use strict";
	  var $__4 = this;
	  var $___46__46__47_data_47_singleChoiceQuestion__,
	      $___46__46__47_data_47_multiChoiceQuestion__,
	      $__chartsViewBuilder__,
	      $___46__46__47_utils_47_http__;
	  var singleChoiceQuestion = ($___46__46__47_data_47_singleChoiceQuestion__ = __webpack_require__(5), $___46__46__47_data_47_singleChoiceQuestion__ && $___46__46__47_data_47_singleChoiceQuestion__.__esModule && $___46__46__47_data_47_singleChoiceQuestion__ || {default: $___46__46__47_data_47_singleChoiceQuestion__}).default;
	  var multiChoiceQuestion = ($___46__46__47_data_47_multiChoiceQuestion__ = __webpack_require__(7), $___46__46__47_data_47_multiChoiceQuestion__ && $___46__46__47_data_47_multiChoiceQuestion__.__esModule && $___46__46__47_data_47_multiChoiceQuestion__ || {default: $___46__46__47_data_47_multiChoiceQuestion__}).default;
	  var chartsViewBuilder = ($__chartsViewBuilder__ = __webpack_require__(16), $__chartsViewBuilder__ && $__chartsViewBuilder__.__esModule && $__chartsViewBuilder__ || {default: $__chartsViewBuilder__}).default;
	  var http = ($___46__46__47_utils_47_http__ = __webpack_require__(8), $___46__46__47_utils_47_http__ && $___46__46__47_utils_47_http__.__esModule && $___46__46__47_utils_47_http__ || {default: $___46__46__47_utils_47_http__}).default;
	  var answersBuilder = (function(answers) {
	    var template = '';
	    answers.forEach(function(i) {
	      template += ("<li>" + (i + 1) + ". " + multiChoiceQuestion.answers[$traceurRuntime.toProperty(i)] + "</li>");
	    }, $__4);
	    return template;
	  });
	  var setClearEvent = (function() {
	    document.querySelector('.clear').onclick = (function() {
	      ['name', 'singleChoiceQuestion', 'multiChoiceQuestion'].map((function(x) {
	        return localStorage.removeItem(x);
	      }));
	      State.go('/');
	    });
	  });
	  var getData = (function() {
	    var res;
	    return $traceurRuntime.asyncWrap(function($ctx) {
	      while (true)
	        switch ($ctx.state) {
	          case 0:
	            Promise.resolve(http.get({url: 'server_app/get.php'})).then($ctx.createCallback(2), $ctx.errback);
	            return;
	          case 2:
	            res = $ctx.value;
	            $ctx.state = 3;
	            break;
	          case 3:
	            $ctx.returnValue = res;
	            $ctx.state = 5;
	            break;
	          case 5:
	            $ctx.state = -2;
	            break;
	          default:
	            return $ctx.end();
	        }
	    }, this);
	  });
	  var getSingleAnswer = (function(answers) {
	    var max = 0;
	    var index;
	    for (var i = 0; i < answers.length; i++) {
	      if (answers[$traceurRuntime.toProperty(i)] > max) {
	        max = answers[$traceurRuntime.toProperty(i)];
	        index = i;
	      }
	    }
	    ;
	    return index;
	  });
	  var $__default = function() {
	    var mainContainer,
	        data,
	        singleChoiceAnswer,
	        template;
	    return $traceurRuntime.asyncWrap(function($ctx) {
	      while (true)
	        switch ($ctx.state) {
	          case 0:
	            mainContainer = document.querySelector('.main-container');
	            $ctx.state = 5;
	            break;
	          case 5:
	            Promise.resolve(getData()).then($ctx.createCallback(2), $ctx.errback);
	            return;
	          case 2:
	            data = $ctx.value;
	            $ctx.state = 3;
	            break;
	          case 3:
	            singleChoiceAnswer = getSingleAnswer(data.singleChoiceAnswers);
	            template = ("\n        <div class=\"summary\">\n            <h2>Podsumowanie wyników</h2>\n                <div style=\"display: flex; flex-direction: row;\">\n                    <div style=\"padding: 15px;\">\n                        <h4>" + singleChoiceQuestion.question + "</h4>\n                        <p>Użytkownicy najczęściej wybierali:</p>\n                        " + singleChoiceQuestion.answers[$traceurRuntime.toProperty(singleChoiceAnswer)] + "\n                    </div>\n                    <div style=\"padding: 15px;\">\n                        <h4>" + multiChoiceQuestion.question + "</h4>\n                        <canvas id=\"multiChoiceQuestionChart\" height=\"200\"></canvas>\n                    </div>\n                </div>\n            <div class=\"buttons-container\">\n                <a class=\"button\" href=\"#/\">Powrót do startu</a>\n                <a class=\"button clear\">Wyczyść i wróć na start</a>\n            </div>\n        </div>\n    ");
	            mainContainer.innerHTML = template;
	            window.MathJax.Hub.Typeset();
	            setClearEvent();
	            chartsViewBuilder({data: data});
	            $ctx.state = -2;
	            break;
	          default:
	            return $ctx.end();
	        }
	    }, this);
	  };
	  return {
	    get default() {
	      return $__default;
	    },
	    __esModule: true
	  };
	}.call(Reflect.global);


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var $___46__46__47_data_47_multiChoiceQuestion__,
	    $__chart_46_js_47_src_47_chart__;
	var multiChoiceQuestion = ($___46__46__47_data_47_multiChoiceQuestion__ = __webpack_require__(7), $___46__46__47_data_47_multiChoiceQuestion__ && $___46__46__47_data_47_multiChoiceQuestion__.__esModule && $___46__46__47_data_47_multiChoiceQuestion__ || {default: $___46__46__47_data_47_multiChoiceQuestion__}).default;
	var Chart = ($__chart_46_js_47_src_47_chart__ = __webpack_require__(17), $__chart_46_js_47_src_47_chart__ && $__chart_46_js_47_src_47_chart__.__esModule && $__chart_46_js_47_src_47_chart__ || {default: $__chart_46_js_47_src_47_chart__}).default;
	var $__default = function($__2) {
	  var data,
	      ctx,
	      chart;
	  return $traceurRuntime.asyncWrap(function($ctx) {
	    while (true)
	      switch ($ctx.state) {
	        case 0:
	          data = $__2.data;
	          ctx = document.querySelector('#multiChoiceQuestionChart');
	          chart = new Chart(ctx, {
	            type: 'bar',
	            data: {
	              labels: multiChoiceQuestion.answers,
	              datasets: [{
	                label: 'ilość głosów',
	                data: data.multiChoiceAnswers
	              }]
	            }
	          });
	          $ctx.state = -2;
	          break;
	        default:
	          return $ctx.end();
	      }
	  }, this);
	};


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Chart = __webpack_require__(18)();
	__webpack_require__(19)(Chart);
	__webpack_require__(25)(Chart);
	__webpack_require__(26)(Chart);
	__webpack_require__(27)(Chart);
	__webpack_require__(28)(Chart);
	__webpack_require__(29)(Chart);
	__webpack_require__(30)(Chart);
	__webpack_require__(31)(Chart);
	__webpack_require__(32)(Chart);
	__webpack_require__(33)(Chart);
	__webpack_require__(34)(Chart);
	__webpack_require__(35)(Chart);
	__webpack_require__(36)(Chart);
	__webpack_require__(37)(Chart);
	__webpack_require__(38)(Chart);
	__webpack_require__(39)(Chart);
	__webpack_require__(40)(Chart);
	__webpack_require__(41)(Chart);
	__webpack_require__(42)(Chart);
	__webpack_require__(43)(Chart);
	__webpack_require__(44)(Chart);
	__webpack_require__(45)(Chart);
	__webpack_require__(46)(Chart);
	__webpack_require__(153)(Chart);
	__webpack_require__(154)(Chart);
	__webpack_require__(155)(Chart);
	__webpack_require__(156)(Chart);
	__webpack_require__(157)(Chart);
	__webpack_require__(158)(Chart);
	__webpack_require__(159)(Chart);
	__webpack_require__(160)(Chart);
	__webpack_require__(161)(Chart);
	__webpack_require__(162)(Chart);
	__webpack_require__(163)(Chart);
	__webpack_require__(164)(Chart);
	__webpack_require__(165)(Chart);
	window.Chart = module.exports = Chart;


/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	module.exports = function() {
	  var Chart = function(context, config) {
	    var me = this;
	    var helpers = Chart.helpers;
	    me.config = config || {data: {datasets: []}};
	    if (context.length && context[0].getContext) {
	      context = context[0];
	    }
	    if (context.getContext) {
	      context = context.getContext('2d');
	    }
	    me.ctx = context;
	    me.canvas = context.canvas;
	    context.canvas.style.display = context.canvas.style.display || 'block';
	    me.width = context.canvas.width || parseInt(helpers.getStyle(context.canvas, 'width'), 10) || helpers.getMaximumWidth(context.canvas);
	    me.height = context.canvas.height || parseInt(helpers.getStyle(context.canvas, 'height'), 10) || helpers.getMaximumHeight(context.canvas);
	    me.aspectRatio = me.width / me.height;
	    if (isNaN(me.aspectRatio) || isFinite(me.aspectRatio) === false) {
	      me.aspectRatio = config.aspectRatio !== undefined ? config.aspectRatio : 2;
	    }
	    me.originalCanvasStyleWidth = context.canvas.style.width;
	    me.originalCanvasStyleHeight = context.canvas.style.height;
	    helpers.retinaScale(me);
	    me.controller = new Chart.Controller(me);
	    helpers.addResizeListener(context.canvas.parentNode, function() {
	      if (me.controller && me.controller.config.options.responsive) {
	        me.controller.resize();
	      }
	    });
	    return me.controller ? me.controller : me;
	  };
	  Chart.defaults = {global: {
	      responsive: true,
	      responsiveAnimationDuration: 0,
	      maintainAspectRatio: true,
	      events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
	      hover: {
	        onHover: null,
	        mode: 'single',
	        animationDuration: 400
	      },
	      onClick: null,
	      defaultColor: 'rgba(0,0,0,0.1)',
	      defaultFontColor: '#666',
	      defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
	      defaultFontSize: 12,
	      defaultFontStyle: 'normal',
	      showLines: true,
	      elements: {},
	      legendCallback: function(chart) {
	        var text = [];
	        text.push('<ul class="' + chart.id + '-legend">');
	        for (var i = 0; i < chart.data.datasets.length; i++) {
	          text.push('<li><span style="background-color:' + chart.data.datasets[$traceurRuntime.toProperty(i)].backgroundColor + '"></span>');
	          if (chart.data.datasets[$traceurRuntime.toProperty(i)].label) {
	            text.push(chart.data.datasets[$traceurRuntime.toProperty(i)].label);
	          }
	          text.push('</li>');
	        }
	        text.push('</ul>');
	        return text.join('');
	      }
	    }};
	  Chart.Chart = Chart;
	  return Chart;
	};


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	var color = __webpack_require__(20);
	module.exports = function(Chart) {
	  var helpers = Chart.helpers = {};
	  helpers.each = function(loopable, callback, self, reverse) {
	    var i,
	        len;
	    if (helpers.isArray(loopable)) {
	      len = loopable.length;
	      if (reverse) {
	        for (i = len - 1; i >= 0; i--) {
	          callback.call(self, loopable[$traceurRuntime.toProperty(i)], i);
	        }
	      } else {
	        for (i = 0; i < len; i++) {
	          callback.call(self, loopable[$traceurRuntime.toProperty(i)], i);
	        }
	      }
	    } else if ((typeof loopable === 'undefined' ? 'undefined' : $traceurRuntime.typeof(loopable)) === 'object') {
	      var keys = Object.keys(loopable);
	      len = keys.length;
	      for (i = 0; i < len; i++) {
	        callback.call(self, loopable[$traceurRuntime.toProperty(keys[$traceurRuntime.toProperty(i)])], keys[$traceurRuntime.toProperty(i)]);
	      }
	    }
	  };
	  helpers.clone = function(obj) {
	    var objClone = {};
	    helpers.each(obj, function(value, key) {
	      if (helpers.isArray(value)) {
	        $traceurRuntime.setProperty(objClone, key, value.slice(0));
	      } else if ((typeof value === 'undefined' ? 'undefined' : $traceurRuntime.typeof(value)) === 'object' && value !== null) {
	        $traceurRuntime.setProperty(objClone, key, helpers.clone(value));
	      } else {
	        $traceurRuntime.setProperty(objClone, key, value);
	      }
	    });
	    return objClone;
	  };
	  helpers.extend = function(base) {
	    var setFn = function(value, key) {
	      $traceurRuntime.setProperty(base, key, value);
	    };
	    for (var i = 1,
	        ilen = arguments.length; i < ilen; i++) {
	      helpers.each(arguments[$traceurRuntime.toProperty(i)], setFn);
	    }
	    return base;
	  };
	  helpers.configMerge = function(_base) {
	    var base = helpers.clone(_base);
	    helpers.each(Array.prototype.slice.call(arguments, 1), function(extension) {
	      helpers.each(extension, function(value, key) {
	        if (key === 'scales') {
	          $traceurRuntime.setProperty(base, key, helpers.scaleMerge(base.hasOwnProperty(key) ? base[$traceurRuntime.toProperty(key)] : {}, value));
	        } else if (key === 'scale') {
	          $traceurRuntime.setProperty(base, key, helpers.configMerge(base.hasOwnProperty(key) ? base[$traceurRuntime.toProperty(key)] : {}, Chart.scaleService.getScaleDefaults(value.type), value));
	        } else if (base.hasOwnProperty(key) && helpers.isArray(base[$traceurRuntime.toProperty(key)]) && helpers.isArray(value)) {
	          var baseArray = base[$traceurRuntime.toProperty(key)];
	          helpers.each(value, function(valueObj, index) {
	            if (index < baseArray.length) {
	              if ($traceurRuntime.typeof(baseArray[$traceurRuntime.toProperty(index)]) === 'object' && baseArray[$traceurRuntime.toProperty(index)] !== null && (typeof valueObj === 'undefined' ? 'undefined' : $traceurRuntime.typeof(valueObj)) === 'object' && valueObj !== null) {
	                $traceurRuntime.setProperty(baseArray, index, helpers.configMerge(baseArray[$traceurRuntime.toProperty(index)], valueObj));
	              } else {
	                $traceurRuntime.setProperty(baseArray, index, valueObj);
	              }
	            } else {
	              baseArray.push(valueObj);
	            }
	          });
	        } else if (base.hasOwnProperty(key) && $traceurRuntime.typeof(base[$traceurRuntime.toProperty(key)]) === 'object' && base[$traceurRuntime.toProperty(key)] !== null && (typeof value === 'undefined' ? 'undefined' : $traceurRuntime.typeof(value)) === 'object') {
	          $traceurRuntime.setProperty(base, key, helpers.configMerge(base[$traceurRuntime.toProperty(key)], value));
	        } else {
	          $traceurRuntime.setProperty(base, key, value);
	        }
	      });
	    });
	    return base;
	  };
	  helpers.scaleMerge = function(_base, extension) {
	    var base = helpers.clone(_base);
	    helpers.each(extension, function(value, key) {
	      if (key === 'xAxes' || key === 'yAxes') {
	        if (base.hasOwnProperty(key)) {
	          helpers.each(value, function(valueObj, index) {
	            var axisType = helpers.getValueOrDefault(valueObj.type, key === 'xAxes' ? 'category' : 'linear');
	            var axisDefaults = Chart.scaleService.getScaleDefaults(axisType);
	            if (index >= base[$traceurRuntime.toProperty(key)].length || !base[$traceurRuntime.toProperty(key)][$traceurRuntime.toProperty(index)].type) {
	              base[$traceurRuntime.toProperty(key)].push(helpers.configMerge(axisDefaults, valueObj));
	            } else if (valueObj.type && valueObj.type !== base[$traceurRuntime.toProperty(key)][$traceurRuntime.toProperty(index)].type) {
	              $traceurRuntime.setProperty(base[$traceurRuntime.toProperty(key)], index, helpers.configMerge(base[$traceurRuntime.toProperty(key)][$traceurRuntime.toProperty(index)], axisDefaults, valueObj));
	            } else {
	              $traceurRuntime.setProperty(base[$traceurRuntime.toProperty(key)], index, helpers.configMerge(base[$traceurRuntime.toProperty(key)][$traceurRuntime.toProperty(index)], valueObj));
	            }
	          });
	        } else {
	          $traceurRuntime.setProperty(base, key, []);
	          helpers.each(value, function(valueObj) {
	            var axisType = helpers.getValueOrDefault(valueObj.type, key === 'xAxes' ? 'category' : 'linear');
	            base[$traceurRuntime.toProperty(key)].push(helpers.configMerge(Chart.scaleService.getScaleDefaults(axisType), valueObj));
	          });
	        }
	      } else if (base.hasOwnProperty(key) && $traceurRuntime.typeof(base[$traceurRuntime.toProperty(key)]) === 'object' && base[$traceurRuntime.toProperty(key)] !== null && (typeof value === 'undefined' ? 'undefined' : $traceurRuntime.typeof(value)) === 'object') {
	        $traceurRuntime.setProperty(base, key, helpers.configMerge(base[$traceurRuntime.toProperty(key)], value));
	      } else {
	        $traceurRuntime.setProperty(base, key, value);
	      }
	    });
	    return base;
	  };
	  helpers.getValueAtIndexOrDefault = function(value, index, defaultValue) {
	    if (value === undefined || value === null) {
	      return defaultValue;
	    }
	    if (helpers.isArray(value)) {
	      return index < value.length ? value[$traceurRuntime.toProperty(index)] : defaultValue;
	    }
	    return value;
	  };
	  helpers.getValueOrDefault = function(value, defaultValue) {
	    return value === undefined ? defaultValue : value;
	  };
	  helpers.indexOf = Array.prototype.indexOf ? function(array, item) {
	    return array.indexOf(item);
	  } : function(array, item) {
	    for (var i = 0,
	        ilen = array.length; i < ilen; ++i) {
	      if (array[$traceurRuntime.toProperty(i)] === item) {
	        return i;
	      }
	    }
	    return -1;
	  };
	  helpers.where = function(collection, filterCallback) {
	    if (helpers.isArray(collection) && Array.prototype.filter) {
	      return collection.filter(filterCallback);
	    }
	    var filtered = [];
	    helpers.each(collection, function(item) {
	      if (filterCallback(item)) {
	        filtered.push(item);
	      }
	    });
	    return filtered;
	  };
	  helpers.findIndex = Array.prototype.findIndex ? function(array, callback, scope) {
	    return array.findIndex(callback, scope);
	  } : function(array, callback, scope) {
	    scope = scope === undefined ? array : scope;
	    for (var i = 0,
	        ilen = array.length; i < ilen; ++i) {
	      if (callback.call(scope, array[$traceurRuntime.toProperty(i)], i, array)) {
	        return i;
	      }
	    }
	    return -1;
	  };
	  helpers.findNextWhere = function(arrayToSearch, filterCallback, startIndex) {
	    if (startIndex === undefined || startIndex === null) {
	      startIndex = -1;
	    }
	    for (var i = startIndex + 1; i < arrayToSearch.length; i++) {
	      var currentItem = arrayToSearch[$traceurRuntime.toProperty(i)];
	      if (filterCallback(currentItem)) {
	        return currentItem;
	      }
	    }
	  };
	  helpers.findPreviousWhere = function(arrayToSearch, filterCallback, startIndex) {
	    if (startIndex === undefined || startIndex === null) {
	      startIndex = arrayToSearch.length;
	    }
	    for (var i = startIndex - 1; i >= 0; i--) {
	      var currentItem = arrayToSearch[$traceurRuntime.toProperty(i)];
	      if (filterCallback(currentItem)) {
	        return currentItem;
	      }
	    }
	  };
	  helpers.inherits = function(extensions) {
	    var me = this;
	    var ChartElement = (extensions && extensions.hasOwnProperty('constructor')) ? extensions.constructor : function() {
	      return me.apply(this, arguments);
	    };
	    var Surrogate = function() {
	      this.constructor = ChartElement;
	    };
	    Surrogate.prototype = me.prototype;
	    ChartElement.prototype = new Surrogate();
	    ChartElement.extend = helpers.inherits;
	    if (extensions) {
	      helpers.extend(ChartElement.prototype, extensions);
	    }
	    ChartElement.__super__ = me.prototype;
	    return ChartElement;
	  };
	  helpers.noop = function() {};
	  helpers.uid = (function() {
	    var id = 0;
	    return function() {
	      return id++;
	    };
	  }());
	  helpers.isNumber = function(n) {
	    return !isNaN(parseFloat(n)) && isFinite(n);
	  };
	  helpers.almostEquals = function(x, y, epsilon) {
	    return Math.abs(x - y) < epsilon;
	  };
	  helpers.max = function(array) {
	    return array.reduce(function(max, value) {
	      if (!isNaN(value)) {
	        return Math.max(max, value);
	      }
	      return max;
	    }, Number.NEGATIVE_INFINITY);
	  };
	  helpers.min = function(array) {
	    return array.reduce(function(min, value) {
	      if (!isNaN(value)) {
	        return Math.min(min, value);
	      }
	      return min;
	    }, Number.POSITIVE_INFINITY);
	  };
	  helpers.sign = Math.sign ? function(x) {
	    return Math.sign(x);
	  } : function(x) {
	    x = +x;
	    if (x === 0 || isNaN(x)) {
	      return x;
	    }
	    return x > 0 ? 1 : -1;
	  };
	  helpers.log10 = Math.log10 ? function(x) {
	    return Math.log10(x);
	  } : function(x) {
	    return Math.log(x) / Math.LN10;
	  };
	  helpers.toRadians = function(degrees) {
	    return degrees * (Math.PI / 180);
	  };
	  helpers.toDegrees = function(radians) {
	    return radians * (180 / Math.PI);
	  };
	  helpers.getAngleFromPoint = function(centrePoint, anglePoint) {
	    var distanceFromXCenter = anglePoint.x - centrePoint.x,
	        distanceFromYCenter = anglePoint.y - centrePoint.y,
	        radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);
	    var angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);
	    if (angle < (-0.5 * Math.PI)) {
	      angle += 2.0 * Math.PI;
	    }
	    return {
	      angle: angle,
	      distance: radialDistanceFromCenter
	    };
	  };
	  helpers.aliasPixel = function(pixelWidth) {
	    return (pixelWidth % 2 === 0) ? 0 : 0.5;
	  };
	  helpers.splineCurve = function(firstPoint, middlePoint, afterPoint, t) {
	    var previous = firstPoint.skip ? middlePoint : firstPoint,
	        current = middlePoint,
	        next = afterPoint.skip ? middlePoint : afterPoint;
	    var d01 = Math.sqrt(Math.pow(current.x - previous.x, 2) + Math.pow(current.y - previous.y, 2));
	    var d12 = Math.sqrt(Math.pow(next.x - current.x, 2) + Math.pow(next.y - current.y, 2));
	    var s01 = d01 / (d01 + d12);
	    var s12 = d12 / (d01 + d12);
	    s01 = isNaN(s01) ? 0 : s01;
	    s12 = isNaN(s12) ? 0 : s12;
	    var fa = t * s01;
	    var fb = t * s12;
	    return {
	      previous: {
	        x: current.x - fa * (next.x - previous.x),
	        y: current.y - fa * (next.y - previous.y)
	      },
	      next: {
	        x: current.x + fb * (next.x - previous.x),
	        y: current.y + fb * (next.y - previous.y)
	      }
	    };
	  };
	  helpers.EPSILON = Number.EPSILON || 1e-14;
	  helpers.splineCurveMonotone = function(points) {
	    var pointsWithTangents = (points || []).map(function(point) {
	      return {
	        model: point._model,
	        deltaK: 0,
	        mK: 0
	      };
	    });
	    var pointsLen = pointsWithTangents.length;
	    var i,
	        pointBefore,
	        pointCurrent,
	        pointAfter;
	    for (i = 0; i < pointsLen; ++i) {
	      pointCurrent = pointsWithTangents[$traceurRuntime.toProperty(i)];
	      if (pointCurrent.model.skip) {
	        continue;
	      }
	      pointBefore = i > 0 ? pointsWithTangents[$traceurRuntime.toProperty(i - 1)] : null;
	      pointAfter = i < pointsLen - 1 ? pointsWithTangents[$traceurRuntime.toProperty(i + 1)] : null;
	      if (pointAfter && !pointAfter.model.skip) {
	        pointCurrent.deltaK = (pointAfter.model.y - pointCurrent.model.y) / (pointAfter.model.x - pointCurrent.model.x);
	      }
	      if (!pointBefore || pointBefore.model.skip) {
	        pointCurrent.mK = pointCurrent.deltaK;
	      } else if (!pointAfter || pointAfter.model.skip) {
	        pointCurrent.mK = pointBefore.deltaK;
	      } else if (this.sign(pointBefore.deltaK) !== this.sign(pointCurrent.deltaK)) {
	        pointCurrent.mK = 0;
	      } else {
	        pointCurrent.mK = (pointBefore.deltaK + pointCurrent.deltaK) / 2;
	      }
	    }
	    var alphaK,
	        betaK,
	        tauK,
	        squaredMagnitude;
	    for (i = 0; i < pointsLen - 1; ++i) {
	      pointCurrent = pointsWithTangents[$traceurRuntime.toProperty(i)];
	      pointAfter = pointsWithTangents[$traceurRuntime.toProperty(i + 1)];
	      if (pointCurrent.model.skip || pointAfter.model.skip) {
	        continue;
	      }
	      if (helpers.almostEquals(pointCurrent.deltaK, 0, this.EPSILON)) {
	        pointCurrent.mK = pointAfter.mK = 0;
	        continue;
	      }
	      alphaK = pointCurrent.mK / pointCurrent.deltaK;
	      betaK = pointAfter.mK / pointCurrent.deltaK;
	      squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);
	      if (squaredMagnitude <= 9) {
	        continue;
	      }
	      tauK = 3 / Math.sqrt(squaredMagnitude);
	      pointCurrent.mK = alphaK * tauK * pointCurrent.deltaK;
	      pointAfter.mK = betaK * tauK * pointCurrent.deltaK;
	    }
	    var deltaX;
	    for (i = 0; i < pointsLen; ++i) {
	      pointCurrent = pointsWithTangents[$traceurRuntime.toProperty(i)];
	      if (pointCurrent.model.skip) {
	        continue;
	      }
	      pointBefore = i > 0 ? pointsWithTangents[$traceurRuntime.toProperty(i - 1)] : null;
	      pointAfter = i < pointsLen - 1 ? pointsWithTangents[$traceurRuntime.toProperty(i + 1)] : null;
	      if (pointBefore && !pointBefore.model.skip) {
	        deltaX = (pointCurrent.model.x - pointBefore.model.x) / 3;
	        pointCurrent.model.controlPointPreviousX = pointCurrent.model.x - deltaX;
	        pointCurrent.model.controlPointPreviousY = pointCurrent.model.y - deltaX * pointCurrent.mK;
	      }
	      if (pointAfter && !pointAfter.model.skip) {
	        deltaX = (pointAfter.model.x - pointCurrent.model.x) / 3;
	        pointCurrent.model.controlPointNextX = pointCurrent.model.x + deltaX;
	        pointCurrent.model.controlPointNextY = pointCurrent.model.y + deltaX * pointCurrent.mK;
	      }
	    }
	  };
	  helpers.nextItem = function(collection, index, loop) {
	    if (loop) {
	      return index >= collection.length - 1 ? collection[0] : collection[$traceurRuntime.toProperty(index + 1)];
	    }
	    return index >= collection.length - 1 ? collection[$traceurRuntime.toProperty(collection.length - 1)] : collection[$traceurRuntime.toProperty(index + 1)];
	  };
	  helpers.previousItem = function(collection, index, loop) {
	    if (loop) {
	      return index <= 0 ? collection[$traceurRuntime.toProperty(collection.length - 1)] : collection[$traceurRuntime.toProperty(index - 1)];
	    }
	    return index <= 0 ? collection[0] : collection[$traceurRuntime.toProperty(index - 1)];
	  };
	  helpers.niceNum = function(range, round) {
	    var exponent = Math.floor(helpers.log10(range));
	    var fraction = range / Math.pow(10, exponent);
	    var niceFraction;
	    if (round) {
	      if (fraction < 1.5) {
	        niceFraction = 1;
	      } else if (fraction < 3) {
	        niceFraction = 2;
	      } else if (fraction < 7) {
	        niceFraction = 5;
	      } else {
	        niceFraction = 10;
	      }
	    } else if (fraction <= 1.0) {
	      niceFraction = 1;
	    } else if (fraction <= 2) {
	      niceFraction = 2;
	    } else if (fraction <= 5) {
	      niceFraction = 5;
	    } else {
	      niceFraction = 10;
	    }
	    return niceFraction * Math.pow(10, exponent);
	  };
	  var easingEffects = helpers.easingEffects = {
	    linear: function(t) {
	      return t;
	    },
	    easeInQuad: function(t) {
	      return t * t;
	    },
	    easeOutQuad: function(t) {
	      return -1 * t * (t - 2);
	    },
	    easeInOutQuad: function(t) {
	      if ((t /= 1 / 2) < 1) {
	        return 1 / 2 * t * t;
	      }
	      return -1 / 2 * ((--t) * (t - 2) - 1);
	    },
	    easeInCubic: function(t) {
	      return t * t * t;
	    },
	    easeOutCubic: function(t) {
	      return 1 * ((t = t / 1 - 1) * t * t + 1);
	    },
	    easeInOutCubic: function(t) {
	      if ((t /= 1 / 2) < 1) {
	        return 1 / 2 * t * t * t;
	      }
	      return 1 / 2 * ((t -= 2) * t * t + 2);
	    },
	    easeInQuart: function(t) {
	      return t * t * t * t;
	    },
	    easeOutQuart: function(t) {
	      return -1 * ((t = t / 1 - 1) * t * t * t - 1);
	    },
	    easeInOutQuart: function(t) {
	      if ((t /= 1 / 2) < 1) {
	        return 1 / 2 * t * t * t * t;
	      }
	      return -1 / 2 * ((t -= 2) * t * t * t - 2);
	    },
	    easeInQuint: function(t) {
	      return 1 * (t /= 1) * t * t * t * t;
	    },
	    easeOutQuint: function(t) {
	      return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
	    },
	    easeInOutQuint: function(t) {
	      if ((t /= 1 / 2) < 1) {
	        return 1 / 2 * t * t * t * t * t;
	      }
	      return 1 / 2 * ((t -= 2) * t * t * t * t + 2);
	    },
	    easeInSine: function(t) {
	      return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;
	    },
	    easeOutSine: function(t) {
	      return 1 * Math.sin(t / 1 * (Math.PI / 2));
	    },
	    easeInOutSine: function(t) {
	      return -1 / 2 * (Math.cos(Math.PI * t / 1) - 1);
	    },
	    easeInExpo: function(t) {
	      return (t === 0) ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
	    },
	    easeOutExpo: function(t) {
	      return (t === 1) ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1);
	    },
	    easeInOutExpo: function(t) {
	      if (t === 0) {
	        return 0;
	      }
	      if (t === 1) {
	        return 1;
	      }
	      if ((t /= 1 / 2) < 1) {
	        return 1 / 2 * Math.pow(2, 10 * (t - 1));
	      }
	      return 1 / 2 * (-Math.pow(2, -10 * --t) + 2);
	    },
	    easeInCirc: function(t) {
	      if (t >= 1) {
	        return t;
	      }
	      return -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
	    },
	    easeOutCirc: function(t) {
	      return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
	    },
	    easeInOutCirc: function(t) {
	      if ((t /= 1 / 2) < 1) {
	        return -1 / 2 * (Math.sqrt(1 - t * t) - 1);
	      }
	      return 1 / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1);
	    },
	    easeInElastic: function(t) {
	      var s = 1.70158;
	      var p = 0;
	      var a = 1;
	      if (t === 0) {
	        return 0;
	      }
	      if ((t /= 1) === 1) {
	        return 1;
	      }
	      if (!p) {
	        p = 1 * 0.3;
	      }
	      if (a < Math.abs(1)) {
	        a = 1;
	        s = p / 4;
	      } else {
	        s = p / (2 * Math.PI) * Math.asin(1 / a);
	      }
	      return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
	    },
	    easeOutElastic: function(t) {
	      var s = 1.70158;
	      var p = 0;
	      var a = 1;
	      if (t === 0) {
	        return 0;
	      }
	      if ((t /= 1) === 1) {
	        return 1;
	      }
	      if (!p) {
	        p = 1 * 0.3;
	      }
	      if (a < Math.abs(1)) {
	        a = 1;
	        s = p / 4;
	      } else {
	        s = p / (2 * Math.PI) * Math.asin(1 / a);
	      }
	      return a * Math.pow(2, -10 * t) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) + 1;
	    },
	    easeInOutElastic: function(t) {
	      var s = 1.70158;
	      var p = 0;
	      var a = 1;
	      if (t === 0) {
	        return 0;
	      }
	      if ((t /= 1 / 2) === 2) {
	        return 1;
	      }
	      if (!p) {
	        p = 1 * (0.3 * 1.5);
	      }
	      if (a < Math.abs(1)) {
	        a = 1;
	        s = p / 4;
	      } else {
	        s = p / (2 * Math.PI) * Math.asin(1 / a);
	      }
	      if (t < 1) {
	        return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
	      }
	      return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) * 0.5 + 1;
	    },
	    easeInBack: function(t) {
	      var s = 1.70158;
	      return 1 * (t /= 1) * t * ((s + 1) * t - s);
	    },
	    easeOutBack: function(t) {
	      var s = 1.70158;
	      return 1 * ((t = t / 1 - 1) * t * ((s + 1) * t + s) + 1);
	    },
	    easeInOutBack: function(t) {
	      var s = 1.70158;
	      if ((t /= 1 / 2) < 1) {
	        return 1 / 2 * (t * t * (((s *= (1.525)) + 1) * t - s));
	      }
	      return 1 / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
	    },
	    easeInBounce: function(t) {
	      return 1 - easingEffects.easeOutBounce(1 - t);
	    },
	    easeOutBounce: function(t) {
	      if ((t /= 1) < (1 / 2.75)) {
	        return 1 * (7.5625 * t * t);
	      } else if (t < (2 / 2.75)) {
	        return 1 * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75);
	      } else if (t < (2.5 / 2.75)) {
	        return 1 * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375);
	      }
	      return 1 * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375);
	    },
	    easeInOutBounce: function(t) {
	      if (t < 1 / 2) {
	        return easingEffects.easeInBounce(t * 2) * 0.5;
	      }
	      return easingEffects.easeOutBounce(t * 2 - 1) * 0.5 + 1 * 0.5;
	    }
	  };
	  helpers.requestAnimFrame = (function() {
	    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
	      return window.setTimeout(callback, 1000 / 60);
	    };
	  }());
	  helpers.cancelAnimFrame = (function() {
	    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(callback) {
	      return window.clearTimeout(callback, 1000 / 60);
	    };
	  }());
	  helpers.getRelativePosition = function(evt, chart) {
	    var mouseX,
	        mouseY;
	    var e = evt.originalEvent || evt,
	        canvas = evt.currentTarget || evt.srcElement,
	        boundingRect = canvas.getBoundingClientRect();
	    var touches = e.touches;
	    if (touches && touches.length > 0) {
	      mouseX = touches[0].clientX;
	      mouseY = touches[0].clientY;
	    } else {
	      mouseX = e.clientX;
	      mouseY = e.clientY;
	    }
	    var paddingLeft = parseFloat(helpers.getStyle(canvas, 'padding-left'));
	    var paddingTop = parseFloat(helpers.getStyle(canvas, 'padding-top'));
	    var paddingRight = parseFloat(helpers.getStyle(canvas, 'padding-right'));
	    var paddingBottom = parseFloat(helpers.getStyle(canvas, 'padding-bottom'));
	    var width = boundingRect.right - boundingRect.left - paddingLeft - paddingRight;
	    var height = boundingRect.bottom - boundingRect.top - paddingTop - paddingBottom;
	    mouseX = Math.round((mouseX - boundingRect.left - paddingLeft) / (width) * canvas.width / chart.currentDevicePixelRatio);
	    mouseY = Math.round((mouseY - boundingRect.top - paddingTop) / (height) * canvas.height / chart.currentDevicePixelRatio);
	    return {
	      x: mouseX,
	      y: mouseY
	    };
	  };
	  helpers.addEvent = function(node, eventType, method) {
	    if (node.addEventListener) {
	      node.addEventListener(eventType, method);
	    } else if (node.attachEvent) {
	      node.attachEvent('on' + eventType, method);
	    } else {
	      $traceurRuntime.setProperty(node, 'on' + eventType, method);
	    }
	  };
	  helpers.removeEvent = function(node, eventType, handler) {
	    if (node.removeEventListener) {
	      node.removeEventListener(eventType, handler, false);
	    } else if (node.detachEvent) {
	      node.detachEvent('on' + eventType, handler);
	    } else {
	      $traceurRuntime.setProperty(node, 'on' + eventType, helpers.noop);
	    }
	  };
	  helpers.bindEvents = function(chartInstance, arrayOfEvents, handler) {
	    var events = chartInstance.events = chartInstance.events || {};
	    helpers.each(arrayOfEvents, function(eventName) {
	      $traceurRuntime.setProperty(events, eventName, function() {
	        handler.apply(chartInstance, arguments);
	      });
	      helpers.addEvent(chartInstance.chart.canvas, eventName, events[$traceurRuntime.toProperty(eventName)]);
	    });
	  };
	  helpers.unbindEvents = function(chartInstance, arrayOfEvents) {
	    var canvas = chartInstance.chart.canvas;
	    helpers.each(arrayOfEvents, function(handler, eventName) {
	      helpers.removeEvent(canvas, eventName, handler);
	    });
	  };
	  function parseMaxStyle(styleValue, node, parentProperty) {
	    var valueInPixels;
	    if (typeof(styleValue) === 'string') {
	      valueInPixels = parseInt(styleValue, 10);
	      if (styleValue.indexOf('%') !== -1) {
	        valueInPixels = valueInPixels / 100 * node.parentNode[$traceurRuntime.toProperty(parentProperty)];
	      }
	    } else {
	      valueInPixels = styleValue;
	    }
	    return valueInPixels;
	  }
	  function isConstrainedValue(value) {
	    return value !== undefined && value !== null && value !== 'none';
	  }
	  function getConstraintDimension(domNode, maxStyle, percentageProperty) {
	    var view = document.defaultView;
	    var parentNode = domNode.parentNode;
	    var constrainedNode = view.getComputedStyle(domNode)[$traceurRuntime.toProperty(maxStyle)];
	    var constrainedContainer = view.getComputedStyle(parentNode)[$traceurRuntime.toProperty(maxStyle)];
	    var hasCNode = isConstrainedValue(constrainedNode);
	    var hasCContainer = isConstrainedValue(constrainedContainer);
	    var infinity = Number.POSITIVE_INFINITY;
	    if (hasCNode || hasCContainer) {
	      return Math.min(hasCNode ? parseMaxStyle(constrainedNode, domNode, percentageProperty) : infinity, hasCContainer ? parseMaxStyle(constrainedContainer, parentNode, percentageProperty) : infinity);
	    }
	    return 'none';
	  }
	  helpers.getConstraintWidth = function(domNode) {
	    return getConstraintDimension(domNode, 'max-width', 'clientWidth');
	  };
	  helpers.getConstraintHeight = function(domNode) {
	    return getConstraintDimension(domNode, 'max-height', 'clientHeight');
	  };
	  helpers.getMaximumWidth = function(domNode) {
	    var container = domNode.parentNode;
	    var paddingLeft = parseInt(helpers.getStyle(container, 'padding-left'), 10);
	    var paddingRight = parseInt(helpers.getStyle(container, 'padding-right'), 10);
	    var w = container.clientWidth - paddingLeft - paddingRight;
	    var cw = helpers.getConstraintWidth(domNode);
	    return isNaN(cw) ? w : Math.min(w, cw);
	  };
	  helpers.getMaximumHeight = function(domNode) {
	    var container = domNode.parentNode;
	    var paddingTop = parseInt(helpers.getStyle(container, 'padding-top'), 10);
	    var paddingBottom = parseInt(helpers.getStyle(container, 'padding-bottom'), 10);
	    var h = container.clientHeight - paddingTop - paddingBottom;
	    var ch = helpers.getConstraintHeight(domNode);
	    return isNaN(ch) ? h : Math.min(h, ch);
	  };
	  helpers.getStyle = function(el, property) {
	    return el.currentStyle ? el.currentStyle[$traceurRuntime.toProperty(property)] : document.defaultView.getComputedStyle(el, null).getPropertyValue(property);
	  };
	  helpers.retinaScale = function(chart) {
	    var ctx = chart.ctx;
	    var canvas = chart.canvas;
	    var width = canvas.width;
	    var height = canvas.height;
	    var pixelRatio = chart.currentDevicePixelRatio = window.devicePixelRatio || 1;
	    if (pixelRatio !== 1) {
	      canvas.height = height * pixelRatio;
	      canvas.width = width * pixelRatio;
	      ctx.scale(pixelRatio, pixelRatio);
	      chart.originalDevicePixelRatio = chart.originalDevicePixelRatio || pixelRatio;
	    }
	    canvas.style.width = width + 'px';
	    canvas.style.height = height + 'px';
	  };
	  helpers.clear = function(chart) {
	    chart.ctx.clearRect(0, 0, chart.width, chart.height);
	  };
	  helpers.fontString = function(pixelSize, fontStyle, fontFamily) {
	    return fontStyle + ' ' + pixelSize + 'px ' + fontFamily;
	  };
	  helpers.longestText = function(ctx, font, arrayOfThings, cache) {
	    cache = cache || {};
	    var data = cache.data = cache.data || {};
	    var gc = cache.garbageCollect = cache.garbageCollect || [];
	    if (cache.font !== font) {
	      data = cache.data = {};
	      gc = cache.garbageCollect = [];
	      cache.font = font;
	    }
	    ctx.font = font;
	    var longest = 0;
	    helpers.each(arrayOfThings, function(thing) {
	      if (thing !== undefined && thing !== null && helpers.isArray(thing) !== true) {
	        longest = helpers.measureText(ctx, data, gc, longest, thing);
	      } else if (helpers.isArray(thing)) {
	        helpers.each(thing, function(nestedThing) {
	          if (nestedThing !== undefined && nestedThing !== null && !helpers.isArray(nestedThing)) {
	            longest = helpers.measureText(ctx, data, gc, longest, nestedThing);
	          }
	        });
	      }
	    });
	    var gcLen = gc.length / 2;
	    if (gcLen > arrayOfThings.length) {
	      for (var i = 0; i < gcLen; i++) {
	        delete data[$traceurRuntime.toProperty(gc[$traceurRuntime.toProperty(i)])];
	      }
	      gc.splice(0, gcLen);
	    }
	    return longest;
	  };
	  helpers.measureText = function(ctx, data, gc, longest, string) {
	    var textWidth = data[$traceurRuntime.toProperty(string)];
	    if (!textWidth) {
	      textWidth = $traceurRuntime.setProperty(data, string, ctx.measureText(string).width);
	      gc.push(string);
	    }
	    if (textWidth > longest) {
	      longest = textWidth;
	    }
	    return longest;
	  };
	  helpers.numberOfLabelLines = function(arrayOfThings) {
	    var numberOfLines = 1;
	    helpers.each(arrayOfThings, function(thing) {
	      if (helpers.isArray(thing)) {
	        if (thing.length > numberOfLines) {
	          numberOfLines = thing.length;
	        }
	      }
	    });
	    return numberOfLines;
	  };
	  helpers.drawRoundedRectangle = function(ctx, x, y, width, height, radius) {
	    ctx.beginPath();
	    ctx.moveTo(x + radius, y);
	    ctx.lineTo(x + width - radius, y);
	    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
	    ctx.lineTo(x + width, y + height - radius);
	    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
	    ctx.lineTo(x + radius, y + height);
	    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
	    ctx.lineTo(x, y + radius);
	    ctx.quadraticCurveTo(x, y, x + radius, y);
	    ctx.closePath();
	  };
	  helpers.color = function(c) {
	    if (!color) {
	      console.error('Color.js not found!');
	      return c;
	    }
	    if (c instanceof CanvasGradient) {
	      return color(Chart.defaults.global.defaultColor);
	    }
	    return color(c);
	  };
	  helpers.addResizeListener = function(node, callback) {
	    var hiddenIframe = document.createElement('iframe');
	    var hiddenIframeClass = 'chartjs-hidden-iframe';
	    if (hiddenIframe.classlist) {
	      hiddenIframe.classlist.add(hiddenIframeClass);
	    } else {
	      hiddenIframe.setAttribute('class', hiddenIframeClass);
	    }
	    hiddenIframe.tabIndex = -1;
	    var style = hiddenIframe.style;
	    style.width = '100%';
	    style.display = 'block';
	    style.border = 0;
	    style.height = 0;
	    style.margin = 0;
	    style.position = 'absolute';
	    style.left = 0;
	    style.right = 0;
	    style.top = 0;
	    style.bottom = 0;
	    node.insertBefore(hiddenIframe, node.firstChild);
	    (hiddenIframe.contentWindow || hiddenIframe).onresize = function() {
	      if (callback) {
	        return callback();
	      }
	    };
	  };
	  helpers.removeResizeListener = function(node) {
	    var hiddenIframe = node.querySelector('.chartjs-hidden-iframe');
	    if (hiddenIframe) {
	      hiddenIframe.parentNode.removeChild(hiddenIframe);
	    }
	  };
	  helpers.isArray = Array.isArray ? function(obj) {
	    return Array.isArray(obj);
	  } : function(obj) {
	    return Object.prototype.toString.call(obj) === '[object Array]';
	  };
	  helpers.arrayEquals = function(a0, a1) {
	    var i,
	        ilen,
	        v0,
	        v1;
	    if (!a0 || !a1 || a0.length !== a1.length) {
	      return false;
	    }
	    for (i = 0, ilen = a0.length; i < ilen; ++i) {
	      v0 = a0[$traceurRuntime.toProperty(i)];
	      v1 = a1[$traceurRuntime.toProperty(i)];
	      if (v0 instanceof Array && v1 instanceof Array) {
	        if (!helpers.arrayEquals(v0, v1)) {
	          return false;
	        }
	      } else if (v0 !== v1) {
	        return false;
	      }
	    }
	    return true;
	  };
	  helpers.callCallback = function(fn, args, _tArg) {
	    if (fn && typeof fn.call === 'function') {
	      fn.apply(_tArg, args);
	    }
	  };
	  helpers.getHoverColor = function(colorValue) {
	    return (colorValue instanceof CanvasPattern) ? colorValue : helpers.color(colorValue).saturate(0.5).darken(0.1).rgbString();
	  };
	};


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var convert = __webpack_require__(21);
	var string = __webpack_require__(23);
	var Color = function(obj) {
	  if (obj instanceof Color) {
	    return obj;
	  }
	  if (!(this instanceof Color)) {
	    return new Color(obj);
	  }
	  this.values = {
	    rgb: [0, 0, 0],
	    hsl: [0, 0, 0],
	    hsv: [0, 0, 0],
	    hwb: [0, 0, 0],
	    cmyk: [0, 0, 0, 0],
	    alpha: 1
	  };
	  var vals;
	  if (typeof obj === 'string') {
	    vals = string.getRgba(obj);
	    if (vals) {
	      this.setValues('rgb', vals);
	    } else if (vals = string.getHsla(obj)) {
	      this.setValues('hsl', vals);
	    } else if (vals = string.getHwb(obj)) {
	      this.setValues('hwb', vals);
	    } else {
	      throw new Error('Unable to parse color from string "' + obj + '"');
	    }
	  } else if ((typeof obj === 'undefined' ? 'undefined' : $traceurRuntime.typeof(obj)) === 'object') {
	    vals = obj;
	    if (vals.r !== undefined || vals.red !== undefined) {
	      this.setValues('rgb', vals);
	    } else if (vals.l !== undefined || vals.lightness !== undefined) {
	      this.setValues('hsl', vals);
	    } else if (vals.v !== undefined || vals.value !== undefined) {
	      this.setValues('hsv', vals);
	    } else if (vals.w !== undefined || vals.whiteness !== undefined) {
	      this.setValues('hwb', vals);
	    } else if (vals.c !== undefined || vals.cyan !== undefined) {
	      this.setValues('cmyk', vals);
	    } else {
	      throw new Error('Unable to parse color from object ' + JSON.stringify(obj));
	    }
	  }
	};
	Color.prototype = {
	  rgb: function() {
	    return this.setSpace('rgb', arguments);
	  },
	  hsl: function() {
	    return this.setSpace('hsl', arguments);
	  },
	  hsv: function() {
	    return this.setSpace('hsv', arguments);
	  },
	  hwb: function() {
	    return this.setSpace('hwb', arguments);
	  },
	  cmyk: function() {
	    return this.setSpace('cmyk', arguments);
	  },
	  rgbArray: function() {
	    return this.values.rgb;
	  },
	  hslArray: function() {
	    return this.values.hsl;
	  },
	  hsvArray: function() {
	    return this.values.hsv;
	  },
	  hwbArray: function() {
	    var values = this.values;
	    if (values.alpha !== 1) {
	      return values.hwb.concat([values.alpha]);
	    }
	    return values.hwb;
	  },
	  cmykArray: function() {
	    return this.values.cmyk;
	  },
	  rgbaArray: function() {
	    var values = this.values;
	    return values.rgb.concat([values.alpha]);
	  },
	  hslaArray: function() {
	    var values = this.values;
	    return values.hsl.concat([values.alpha]);
	  },
	  alpha: function(val) {
	    if (val === undefined) {
	      return this.values.alpha;
	    }
	    this.setValues('alpha', val);
	    return this;
	  },
	  red: function(val) {
	    return this.setChannel('rgb', 0, val);
	  },
	  green: function(val) {
	    return this.setChannel('rgb', 1, val);
	  },
	  blue: function(val) {
	    return this.setChannel('rgb', 2, val);
	  },
	  hue: function(val) {
	    if (val) {
	      val %= 360;
	      val = val < 0 ? 360 + val : val;
	    }
	    return this.setChannel('hsl', 0, val);
	  },
	  saturation: function(val) {
	    return this.setChannel('hsl', 1, val);
	  },
	  lightness: function(val) {
	    return this.setChannel('hsl', 2, val);
	  },
	  saturationv: function(val) {
	    return this.setChannel('hsv', 1, val);
	  },
	  whiteness: function(val) {
	    return this.setChannel('hwb', 1, val);
	  },
	  blackness: function(val) {
	    return this.setChannel('hwb', 2, val);
	  },
	  value: function(val) {
	    return this.setChannel('hsv', 2, val);
	  },
	  cyan: function(val) {
	    return this.setChannel('cmyk', 0, val);
	  },
	  magenta: function(val) {
	    return this.setChannel('cmyk', 1, val);
	  },
	  yellow: function(val) {
	    return this.setChannel('cmyk', 2, val);
	  },
	  black: function(val) {
	    return this.setChannel('cmyk', 3, val);
	  },
	  hexString: function() {
	    return string.hexString(this.values.rgb);
	  },
	  rgbString: function() {
	    return string.rgbString(this.values.rgb, this.values.alpha);
	  },
	  rgbaString: function() {
	    return string.rgbaString(this.values.rgb, this.values.alpha);
	  },
	  percentString: function() {
	    return string.percentString(this.values.rgb, this.values.alpha);
	  },
	  hslString: function() {
	    return string.hslString(this.values.hsl, this.values.alpha);
	  },
	  hslaString: function() {
	    return string.hslaString(this.values.hsl, this.values.alpha);
	  },
	  hwbString: function() {
	    return string.hwbString(this.values.hwb, this.values.alpha);
	  },
	  keyword: function() {
	    return string.keyword(this.values.rgb, this.values.alpha);
	  },
	  rgbNumber: function() {
	    var rgb = this.values.rgb;
	    return (rgb[0] << 16) | (rgb[1] << 8) | rgb[2];
	  },
	  luminosity: function() {
	    var rgb = this.values.rgb;
	    var lum = [];
	    for (var i = 0; i < rgb.length; i++) {
	      var chan = rgb[$traceurRuntime.toProperty(i)] / 255;
	      $traceurRuntime.setProperty(lum, i, (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4));
	    }
	    return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	  },
	  contrast: function(color2) {
	    var lum1 = this.luminosity();
	    var lum2 = color2.luminosity();
	    if (lum1 > lum2) {
	      return (lum1 + 0.05) / (lum2 + 0.05);
	    }
	    return (lum2 + 0.05) / (lum1 + 0.05);
	  },
	  level: function(color2) {
	    var contrastRatio = this.contrast(color2);
	    if (contrastRatio >= 7.1) {
	      return 'AAA';
	    }
	    return (contrastRatio >= 4.5) ? 'AA' : '';
	  },
	  dark: function() {
	    var rgb = this.values.rgb;
	    var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
	    return yiq < 128;
	  },
	  light: function() {
	    return !this.dark();
	  },
	  negate: function() {
	    var rgb = [];
	    for (var i = 0; i < 3; i++) {
	      $traceurRuntime.setProperty(rgb, i, 255 - this.values.rgb[$traceurRuntime.toProperty(i)]);
	    }
	    this.setValues('rgb', rgb);
	    return this;
	  },
	  lighten: function(ratio) {
	    var $__0,
	        $__1,
	        $__2;
	    var hsl = this.values.hsl;
	    ($__0 = hsl[2], $__1 = hsl[2], $__2 = $__1 + $__0 * ratio, $traceurRuntime.setProperty(hsl, 2, $__2), $__2);
	    this.setValues('hsl', hsl);
	    return this;
	  },
	  darken: function(ratio) {
	    var $__0,
	        $__1,
	        $__2;
	    var hsl = this.values.hsl;
	    ($__0 = hsl[2], $__1 = hsl[2], $__2 = $__1 - $__0 * ratio, $traceurRuntime.setProperty(hsl, 2, $__2), $__2);
	    this.setValues('hsl', hsl);
	    return this;
	  },
	  saturate: function(ratio) {
	    var $__0,
	        $__1,
	        $__2;
	    var hsl = this.values.hsl;
	    ($__0 = hsl[1], $__1 = hsl[1], $__2 = $__1 + $__0 * ratio, $traceurRuntime.setProperty(hsl, 1, $__2), $__2);
	    this.setValues('hsl', hsl);
	    return this;
	  },
	  desaturate: function(ratio) {
	    var $__0,
	        $__1,
	        $__2;
	    var hsl = this.values.hsl;
	    ($__0 = hsl[1], $__1 = hsl[1], $__2 = $__1 - $__0 * ratio, $traceurRuntime.setProperty(hsl, 1, $__2), $__2);
	    this.setValues('hsl', hsl);
	    return this;
	  },
	  whiten: function(ratio) {
	    var $__0,
	        $__1,
	        $__2;
	    var hwb = this.values.hwb;
	    ($__0 = hwb[1], $__1 = hwb[1], $__2 = $__1 + $__0 * ratio, $traceurRuntime.setProperty(hwb, 1, $__2), $__2);
	    this.setValues('hwb', hwb);
	    return this;
	  },
	  blacken: function(ratio) {
	    var $__0,
	        $__1,
	        $__2;
	    var hwb = this.values.hwb;
	    ($__0 = hwb[2], $__1 = hwb[2], $__2 = $__1 + $__0 * ratio, $traceurRuntime.setProperty(hwb, 2, $__2), $__2);
	    this.setValues('hwb', hwb);
	    return this;
	  },
	  greyscale: function() {
	    var rgb = this.values.rgb;
	    var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
	    this.setValues('rgb', [val, val, val]);
	    return this;
	  },
	  clearer: function(ratio) {
	    var alpha = this.values.alpha;
	    this.setValues('alpha', alpha - (alpha * ratio));
	    return this;
	  },
	  opaquer: function(ratio) {
	    var alpha = this.values.alpha;
	    this.setValues('alpha', alpha + (alpha * ratio));
	    return this;
	  },
	  rotate: function(degrees) {
	    var hsl = this.values.hsl;
	    var hue = (hsl[0] + degrees) % 360;
	    $traceurRuntime.setProperty(hsl, 0, hue < 0 ? 360 + hue : hue);
	    this.setValues('hsl', hsl);
	    return this;
	  },
	  mix: function(mixinColor, weight) {
	    var color1 = this;
	    var color2 = mixinColor;
	    var p = weight === undefined ? 0.5 : weight;
	    var w = 2 * p - 1;
	    var a = color1.alpha() - color2.alpha();
	    var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
	    var w2 = 1 - w1;
	    return this.rgb(w1 * color1.red() + w2 * color2.red(), w1 * color1.green() + w2 * color2.green(), w1 * color1.blue() + w2 * color2.blue()).alpha(color1.alpha() * p + color2.alpha() * (1 - p));
	  },
	  toJSON: function() {
	    return this.rgb();
	  },
	  clone: function() {
	    var result = new Color();
	    var source = this.values;
	    var target = result.values;
	    var value,
	        type;
	    for (var prop in source) {
	      if (source.hasOwnProperty(prop)) {
	        value = source[$traceurRuntime.toProperty(prop)];
	        type = ({}).toString.call(value);
	        if (type === '[object Array]') {
	          $traceurRuntime.setProperty(target, prop, value.slice(0));
	        } else if (type === '[object Number]') {
	          $traceurRuntime.setProperty(target, prop, value);
	        } else {
	          console.error('unexpected color value:', value);
	        }
	      }
	    }
	    return result;
	  }
	};
	Color.prototype.spaces = {
	  rgb: ['red', 'green', 'blue'],
	  hsl: ['hue', 'saturation', 'lightness'],
	  hsv: ['hue', 'saturation', 'value'],
	  hwb: ['hue', 'whiteness', 'blackness'],
	  cmyk: ['cyan', 'magenta', 'yellow', 'black']
	};
	Color.prototype.maxes = {
	  rgb: [255, 255, 255],
	  hsl: [360, 100, 100],
	  hsv: [360, 100, 100],
	  hwb: [360, 100, 100],
	  cmyk: [100, 100, 100, 100]
	};
	Color.prototype.getValues = function(space) {
	  var values = this.values;
	  var vals = {};
	  for (var i = 0; i < space.length; i++) {
	    $traceurRuntime.setProperty(vals, space.charAt(i), values[$traceurRuntime.toProperty(space)][$traceurRuntime.toProperty(i)]);
	  }
	  if (values.alpha !== 1) {
	    vals.a = values.alpha;
	  }
	  return vals;
	};
	Color.prototype.setValues = function(space, vals) {
	  var values = this.values;
	  var spaces = this.spaces;
	  var maxes = this.maxes;
	  var alpha = 1;
	  var i;
	  if (space === 'alpha') {
	    alpha = vals;
	  } else if (vals.length) {
	    $traceurRuntime.setProperty(values, space, vals.slice(0, space.length));
	    alpha = vals[$traceurRuntime.toProperty(space.length)];
	  } else if (vals[$traceurRuntime.toProperty(space.charAt(0))] !== undefined) {
	    for (i = 0; i < space.length; i++) {
	      $traceurRuntime.setProperty(values[$traceurRuntime.toProperty(space)], i, vals[$traceurRuntime.toProperty(space.charAt(i))]);
	    }
	    alpha = vals.a;
	  } else if (vals[$traceurRuntime.toProperty(spaces[$traceurRuntime.toProperty(space)][0])] !== undefined) {
	    var chans = spaces[$traceurRuntime.toProperty(space)];
	    for (i = 0; i < space.length; i++) {
	      $traceurRuntime.setProperty(values[$traceurRuntime.toProperty(space)], i, vals[$traceurRuntime.toProperty(chans[$traceurRuntime.toProperty(i)])]);
	    }
	    alpha = vals.alpha;
	  }
	  values.alpha = Math.max(0, Math.min(1, (alpha === undefined ? values.alpha : alpha)));
	  if (space === 'alpha') {
	    return false;
	  }
	  var capped;
	  for (i = 0; i < space.length; i++) {
	    capped = Math.max(0, Math.min(maxes[$traceurRuntime.toProperty(space)][$traceurRuntime.toProperty(i)], values[$traceurRuntime.toProperty(space)][$traceurRuntime.toProperty(i)]));
	    $traceurRuntime.setProperty(values[$traceurRuntime.toProperty(space)], i, Math.round(capped));
	  }
	  for (var sname in spaces) {
	    if (sname !== space) {
	      $traceurRuntime.setProperty(values, sname, convert[$traceurRuntime.toProperty(space)][$traceurRuntime.toProperty(sname)](values[$traceurRuntime.toProperty(space)]));
	    }
	  }
	  return true;
	};
	Color.prototype.setSpace = function(space, args) {
	  var vals = args[0];
	  if (vals === undefined) {
	    return this.getValues(space);
	  }
	  if (typeof vals === 'number') {
	    vals = Array.prototype.slice.call(args);
	  }
	  this.setValues(space, vals);
	  return this;
	};
	Color.prototype.setChannel = function(space, index, val) {
	  var svalues = this.values[$traceurRuntime.toProperty(space)];
	  if (val === undefined) {
	    return svalues[$traceurRuntime.toProperty(index)];
	  } else if (val === svalues[$traceurRuntime.toProperty(index)]) {
	    return this;
	  }
	  $traceurRuntime.setProperty(svalues, index, val);
	  this.setValues(space, svalues);
	  return this;
	};
	if (typeof window !== 'undefined') {
	  window.Color = Color;
	}
	module.exports = Color;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var conversions = __webpack_require__(22);
	var convert = function() {
	  return new Converter();
	};
	for (var func in conversions) {
	  $traceurRuntime.setProperty(convert, func + "Raw", (function(func) {
	    return function(arg) {
	      if (typeof arg == "number")
	        arg = Array.prototype.slice.call(arguments);
	      return conversions[$traceurRuntime.toProperty(func)](arg);
	    };
	  })(func));
	  var pair = /(\w+)2(\w+)/.exec(func),
	      from = pair[1],
	      to = pair[2];
	  $traceurRuntime.setProperty(convert, from, convert[$traceurRuntime.toProperty(from)] || {});
	  $traceurRuntime.setProperty(convert[$traceurRuntime.toProperty(from)], to, $traceurRuntime.setProperty(convert, func, (function(func) {
	    return function(arg) {
	      if (typeof arg == "number")
	        arg = Array.prototype.slice.call(arguments);
	      var val = conversions[$traceurRuntime.toProperty(func)](arg);
	      if (typeof val == "string" || val === undefined)
	        return val;
	      for (var i = 0; i < val.length; i++)
	        $traceurRuntime.setProperty(val, i, Math.round(val[$traceurRuntime.toProperty(i)]));
	      return val;
	    };
	  })(func)));
	}
	var Converter = function() {
	  this.convs = {};
	};
	Converter.prototype.routeSpace = function(space, args) {
	  var values = args[0];
	  if (values === undefined) {
	    return this.getValues(space);
	  }
	  if (typeof values == "number") {
	    values = Array.prototype.slice.call(args);
	  }
	  return this.setValues(space, values);
	};
	Converter.prototype.setValues = function(space, values) {
	  this.space = space;
	  this.convs = {};
	  $traceurRuntime.setProperty(this.convs, space, values);
	  return this;
	};
	Converter.prototype.getValues = function(space) {
	  var vals = this.convs[$traceurRuntime.toProperty(space)];
	  if (!vals) {
	    var fspace = this.space,
	        from = this.convs[$traceurRuntime.toProperty(fspace)];
	    vals = convert[$traceurRuntime.toProperty(fspace)][$traceurRuntime.toProperty(space)](from);
	    $traceurRuntime.setProperty(this.convs, space, vals);
	  }
	  return vals;
	};
	["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(space) {
	  $traceurRuntime.setProperty(Converter.prototype, space, function(vals) {
	    return this.routeSpace(space, arguments);
	  });
	});
	module.exports = convert;


/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	module.exports = {
	  rgb2hsl: rgb2hsl,
	  rgb2hsv: rgb2hsv,
	  rgb2hwb: rgb2hwb,
	  rgb2cmyk: rgb2cmyk,
	  rgb2keyword: rgb2keyword,
	  rgb2xyz: rgb2xyz,
	  rgb2lab: rgb2lab,
	  rgb2lch: rgb2lch,
	  hsl2rgb: hsl2rgb,
	  hsl2hsv: hsl2hsv,
	  hsl2hwb: hsl2hwb,
	  hsl2cmyk: hsl2cmyk,
	  hsl2keyword: hsl2keyword,
	  hsv2rgb: hsv2rgb,
	  hsv2hsl: hsv2hsl,
	  hsv2hwb: hsv2hwb,
	  hsv2cmyk: hsv2cmyk,
	  hsv2keyword: hsv2keyword,
	  hwb2rgb: hwb2rgb,
	  hwb2hsl: hwb2hsl,
	  hwb2hsv: hwb2hsv,
	  hwb2cmyk: hwb2cmyk,
	  hwb2keyword: hwb2keyword,
	  cmyk2rgb: cmyk2rgb,
	  cmyk2hsl: cmyk2hsl,
	  cmyk2hsv: cmyk2hsv,
	  cmyk2hwb: cmyk2hwb,
	  cmyk2keyword: cmyk2keyword,
	  keyword2rgb: keyword2rgb,
	  keyword2hsl: keyword2hsl,
	  keyword2hsv: keyword2hsv,
	  keyword2hwb: keyword2hwb,
	  keyword2cmyk: keyword2cmyk,
	  keyword2lab: keyword2lab,
	  keyword2xyz: keyword2xyz,
	  xyz2rgb: xyz2rgb,
	  xyz2lab: xyz2lab,
	  xyz2lch: xyz2lch,
	  lab2xyz: lab2xyz,
	  lab2rgb: lab2rgb,
	  lab2lch: lab2lch,
	  lch2lab: lch2lab,
	  lch2xyz: lch2xyz,
	  lch2rgb: lch2rgb
	};
	function rgb2hsl(rgb) {
	  var r = rgb[0] / 255,
	      g = rgb[1] / 255,
	      b = rgb[2] / 255,
	      min = Math.min(r, g, b),
	      max = Math.max(r, g, b),
	      delta = max - min,
	      h,
	      s,
	      l;
	  if (max == min)
	    h = 0;
	  else if (r == max)
	    h = (g - b) / delta;
	  else if (g == max)
	    h = 2 + (b - r) / delta;
	  else if (b == max)
	    h = 4 + (r - g) / delta;
	  h = Math.min(h * 60, 360);
	  if (h < 0)
	    h += 360;
	  l = (min + max) / 2;
	  if (max == min)
	    s = 0;
	  else if (l <= 0.5)
	    s = delta / (max + min);
	  else
	    s = delta / (2 - max - min);
	  return [h, s * 100, l * 100];
	}
	function rgb2hsv(rgb) {
	  var r = rgb[0],
	      g = rgb[1],
	      b = rgb[2],
	      min = Math.min(r, g, b),
	      max = Math.max(r, g, b),
	      delta = max - min,
	      h,
	      s,
	      v;
	  if (max == 0)
	    s = 0;
	  else
	    s = (delta / max * 1000) / 10;
	  if (max == min)
	    h = 0;
	  else if (r == max)
	    h = (g - b) / delta;
	  else if (g == max)
	    h = 2 + (b - r) / delta;
	  else if (b == max)
	    h = 4 + (r - g) / delta;
	  h = Math.min(h * 60, 360);
	  if (h < 0)
	    h += 360;
	  v = ((max / 255) * 1000) / 10;
	  return [h, s, v];
	}
	function rgb2hwb(rgb) {
	  var r = rgb[0],
	      g = rgb[1],
	      b = rgb[2],
	      h = rgb2hsl(rgb)[0],
	      w = 1 / 255 * Math.min(r, Math.min(g, b)),
	      b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
	  return [h, w * 100, b * 100];
	}
	function rgb2cmyk(rgb) {
	  var r = rgb[0] / 255,
	      g = rgb[1] / 255,
	      b = rgb[2] / 255,
	      c,
	      m,
	      y,
	      k;
	  k = Math.min(1 - r, 1 - g, 1 - b);
	  c = (1 - r - k) / (1 - k) || 0;
	  m = (1 - g - k) / (1 - k) || 0;
	  y = (1 - b - k) / (1 - k) || 0;
	  return [c * 100, m * 100, y * 100, k * 100];
	}
	function rgb2keyword(rgb) {
	  return reverseKeywords[$traceurRuntime.toProperty(JSON.stringify(rgb))];
	}
	function rgb2xyz(rgb) {
	  var r = rgb[0] / 255,
	      g = rgb[1] / 255,
	      b = rgb[2] / 255;
	  r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	  g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	  b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);
	  var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	  var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	  var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);
	  return [x * 100, y * 100, z * 100];
	}
	function rgb2lab(rgb) {
	  var xyz = rgb2xyz(rgb),
	      x = xyz[0],
	      y = xyz[1],
	      z = xyz[2],
	      l,
	      a,
	      b;
	  x /= 95.047;
	  y /= 100;
	  z /= 108.883;
	  x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	  y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	  z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);
	  l = (116 * y) - 16;
	  a = 500 * (x - y);
	  b = 200 * (y - z);
	  return [l, a, b];
	}
	function rgb2lch(args) {
	  return lab2lch(rgb2lab(args));
	}
	function hsl2rgb(hsl) {
	  var h = hsl[0] / 360,
	      s = hsl[1] / 100,
	      l = hsl[2] / 100,
	      t1,
	      t2,
	      t3,
	      rgb,
	      val;
	  if (s == 0) {
	    val = l * 255;
	    return [val, val, val];
	  }
	  if (l < 0.5)
	    t2 = l * (1 + s);
	  else
	    t2 = l + s - l * s;
	  t1 = 2 * l - t2;
	  rgb = [0, 0, 0];
	  for (var i = 0; i < 3; i++) {
	    t3 = h + 1 / 3 * -(i - 1);
	    t3 < 0 && t3++;
	    t3 > 1 && t3--;
	    if (6 * t3 < 1)
	      val = t1 + (t2 - t1) * 6 * t3;
	    else if (2 * t3 < 1)
	      val = t2;
	    else if (3 * t3 < 2)
	      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
	    else
	      val = t1;
	    $traceurRuntime.setProperty(rgb, i, val * 255);
	  }
	  return rgb;
	}
	function hsl2hsv(hsl) {
	  var h = hsl[0],
	      s = hsl[1] / 100,
	      l = hsl[2] / 100,
	      sv,
	      v;
	  if (l === 0) {
	    return [0, 0, 0];
	  }
	  l *= 2;
	  s *= (l <= 1) ? l : 2 - l;
	  v = (l + s) / 2;
	  sv = (2 * s) / (l + s);
	  return [h, sv * 100, v * 100];
	}
	function hsl2hwb(args) {
	  return rgb2hwb(hsl2rgb(args));
	}
	function hsl2cmyk(args) {
	  return rgb2cmyk(hsl2rgb(args));
	}
	function hsl2keyword(args) {
	  return rgb2keyword(hsl2rgb(args));
	}
	function hsv2rgb(hsv) {
	  var h = hsv[0] / 60,
	      s = hsv[1] / 100,
	      v = hsv[2] / 100,
	      hi = Math.floor(h) % 6;
	  var f = h - Math.floor(h),
	      p = 255 * v * (1 - s),
	      q = 255 * v * (1 - (s * f)),
	      t = 255 * v * (1 - (s * (1 - f))),
	      v = 255 * v;
	  switch (hi) {
	    case 0:
	      return [v, t, p];
	    case 1:
	      return [q, v, p];
	    case 2:
	      return [p, v, t];
	    case 3:
	      return [p, q, v];
	    case 4:
	      return [t, p, v];
	    case 5:
	      return [v, p, q];
	  }
	}
	function hsv2hsl(hsv) {
	  var h = hsv[0],
	      s = hsv[1] / 100,
	      v = hsv[2] / 100,
	      sl,
	      l;
	  l = (2 - s) * v;
	  sl = s * v;
	  sl /= (l <= 1) ? l : 2 - l;
	  sl = sl || 0;
	  l /= 2;
	  return [h, sl * 100, l * 100];
	}
	function hsv2hwb(args) {
	  return rgb2hwb(hsv2rgb(args));
	}
	function hsv2cmyk(args) {
	  return rgb2cmyk(hsv2rgb(args));
	}
	function hsv2keyword(args) {
	  return rgb2keyword(hsv2rgb(args));
	}
	function hwb2rgb(hwb) {
	  var h = hwb[0] / 360,
	      wh = hwb[1] / 100,
	      bl = hwb[2] / 100,
	      ratio = wh + bl,
	      i,
	      v,
	      f,
	      n;
	  if (ratio > 1) {
	    wh /= ratio;
	    bl /= ratio;
	  }
	  i = Math.floor(6 * h);
	  v = 1 - bl;
	  f = 6 * h - i;
	  if ((i & 0x01) != 0) {
	    f = 1 - f;
	  }
	  n = wh + f * (v - wh);
	  switch (i) {
	    default:
	    case 6:
	    case 0:
	      r = v;
	      g = n;
	      b = wh;
	      break;
	    case 1:
	      r = n;
	      g = v;
	      b = wh;
	      break;
	    case 2:
	      r = wh;
	      g = v;
	      b = n;
	      break;
	    case 3:
	      r = wh;
	      g = n;
	      b = v;
	      break;
	    case 4:
	      r = n;
	      g = wh;
	      b = v;
	      break;
	    case 5:
	      r = v;
	      g = wh;
	      b = n;
	      break;
	  }
	  return [r * 255, g * 255, b * 255];
	}
	function hwb2hsl(args) {
	  return rgb2hsl(hwb2rgb(args));
	}
	function hwb2hsv(args) {
	  return rgb2hsv(hwb2rgb(args));
	}
	function hwb2cmyk(args) {
	  return rgb2cmyk(hwb2rgb(args));
	}
	function hwb2keyword(args) {
	  return rgb2keyword(hwb2rgb(args));
	}
	function cmyk2rgb(cmyk) {
	  var c = cmyk[0] / 100,
	      m = cmyk[1] / 100,
	      y = cmyk[2] / 100,
	      k = cmyk[3] / 100,
	      r,
	      g,
	      b;
	  r = 1 - Math.min(1, c * (1 - k) + k);
	  g = 1 - Math.min(1, m * (1 - k) + k);
	  b = 1 - Math.min(1, y * (1 - k) + k);
	  return [r * 255, g * 255, b * 255];
	}
	function cmyk2hsl(args) {
	  return rgb2hsl(cmyk2rgb(args));
	}
	function cmyk2hsv(args) {
	  return rgb2hsv(cmyk2rgb(args));
	}
	function cmyk2hwb(args) {
	  return rgb2hwb(cmyk2rgb(args));
	}
	function cmyk2keyword(args) {
	  return rgb2keyword(cmyk2rgb(args));
	}
	function xyz2rgb(xyz) {
	  var x = xyz[0] / 100,
	      y = xyz[1] / 100,
	      z = xyz[2] / 100,
	      r,
	      g,
	      b;
	  r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	  g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	  b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);
	  r = r > 0.0031308 ? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055) : r = (r * 12.92);
	  g = g > 0.0031308 ? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055) : g = (g * 12.92);
	  b = b > 0.0031308 ? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055) : b = (b * 12.92);
	  r = Math.min(Math.max(0, r), 1);
	  g = Math.min(Math.max(0, g), 1);
	  b = Math.min(Math.max(0, b), 1);
	  return [r * 255, g * 255, b * 255];
	}
	function xyz2lab(xyz) {
	  var x = xyz[0],
	      y = xyz[1],
	      z = xyz[2],
	      l,
	      a,
	      b;
	  x /= 95.047;
	  y /= 100;
	  z /= 108.883;
	  x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	  y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	  z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);
	  l = (116 * y) - 16;
	  a = 500 * (x - y);
	  b = 200 * (y - z);
	  return [l, a, b];
	}
	function xyz2lch(args) {
	  return lab2lch(xyz2lab(args));
	}
	function lab2xyz(lab) {
	  var l = lab[0],
	      a = lab[1],
	      b = lab[2],
	      x,
	      y,
	      z,
	      y2;
	  if (l <= 8) {
	    y = (l * 100) / 903.3;
	    y2 = (7.787 * (y / 100)) + (16 / 116);
	  } else {
	    y = 100 * Math.pow((l + 16) / 116, 3);
	    y2 = Math.pow(y / 100, 1 / 3);
	  }
	  x = x / 95.047 <= 0.008856 ? x = (95.047 * ((a / 500) + y2 - (16 / 116))) / 7.787 : 95.047 * Math.pow((a / 500) + y2, 3);
	  z = z / 108.883 <= 0.008859 ? z = (108.883 * (y2 - (b / 200) - (16 / 116))) / 7.787 : 108.883 * Math.pow(y2 - (b / 200), 3);
	  return [x, y, z];
	}
	function lab2lch(lab) {
	  var l = lab[0],
	      a = lab[1],
	      b = lab[2],
	      hr,
	      h,
	      c;
	  hr = Math.atan2(b, a);
	  h = hr * 360 / 2 / Math.PI;
	  if (h < 0) {
	    h += 360;
	  }
	  c = Math.sqrt(a * a + b * b);
	  return [l, c, h];
	}
	function lab2rgb(args) {
	  return xyz2rgb(lab2xyz(args));
	}
	function lch2lab(lch) {
	  var l = lch[0],
	      c = lch[1],
	      h = lch[2],
	      a,
	      b,
	      hr;
	  hr = h / 360 * 2 * Math.PI;
	  a = c * Math.cos(hr);
	  b = c * Math.sin(hr);
	  return [l, a, b];
	}
	function lch2xyz(args) {
	  return lab2xyz(lch2lab(args));
	}
	function lch2rgb(args) {
	  return lab2rgb(lch2lab(args));
	}
	function keyword2rgb(keyword) {
	  return cssKeywords[$traceurRuntime.toProperty(keyword)];
	}
	function keyword2hsl(args) {
	  return rgb2hsl(keyword2rgb(args));
	}
	function keyword2hsv(args) {
	  return rgb2hsv(keyword2rgb(args));
	}
	function keyword2hwb(args) {
	  return rgb2hwb(keyword2rgb(args));
	}
	function keyword2cmyk(args) {
	  return rgb2cmyk(keyword2rgb(args));
	}
	function keyword2lab(args) {
	  return rgb2lab(keyword2rgb(args));
	}
	function keyword2xyz(args) {
	  return rgb2xyz(keyword2rgb(args));
	}
	var cssKeywords = {
	  aliceblue: [240, 248, 255],
	  antiquewhite: [250, 235, 215],
	  aqua: [0, 255, 255],
	  aquamarine: [127, 255, 212],
	  azure: [240, 255, 255],
	  beige: [245, 245, 220],
	  bisque: [255, 228, 196],
	  black: [0, 0, 0],
	  blanchedalmond: [255, 235, 205],
	  blue: [0, 0, 255],
	  blueviolet: [138, 43, 226],
	  brown: [165, 42, 42],
	  burlywood: [222, 184, 135],
	  cadetblue: [95, 158, 160],
	  chartreuse: [127, 255, 0],
	  chocolate: [210, 105, 30],
	  coral: [255, 127, 80],
	  cornflowerblue: [100, 149, 237],
	  cornsilk: [255, 248, 220],
	  crimson: [220, 20, 60],
	  cyan: [0, 255, 255],
	  darkblue: [0, 0, 139],
	  darkcyan: [0, 139, 139],
	  darkgoldenrod: [184, 134, 11],
	  darkgray: [169, 169, 169],
	  darkgreen: [0, 100, 0],
	  darkgrey: [169, 169, 169],
	  darkkhaki: [189, 183, 107],
	  darkmagenta: [139, 0, 139],
	  darkolivegreen: [85, 107, 47],
	  darkorange: [255, 140, 0],
	  darkorchid: [153, 50, 204],
	  darkred: [139, 0, 0],
	  darksalmon: [233, 150, 122],
	  darkseagreen: [143, 188, 143],
	  darkslateblue: [72, 61, 139],
	  darkslategray: [47, 79, 79],
	  darkslategrey: [47, 79, 79],
	  darkturquoise: [0, 206, 209],
	  darkviolet: [148, 0, 211],
	  deeppink: [255, 20, 147],
	  deepskyblue: [0, 191, 255],
	  dimgray: [105, 105, 105],
	  dimgrey: [105, 105, 105],
	  dodgerblue: [30, 144, 255],
	  firebrick: [178, 34, 34],
	  floralwhite: [255, 250, 240],
	  forestgreen: [34, 139, 34],
	  fuchsia: [255, 0, 255],
	  gainsboro: [220, 220, 220],
	  ghostwhite: [248, 248, 255],
	  gold: [255, 215, 0],
	  goldenrod: [218, 165, 32],
	  gray: [128, 128, 128],
	  green: [0, 128, 0],
	  greenyellow: [173, 255, 47],
	  grey: [128, 128, 128],
	  honeydew: [240, 255, 240],
	  hotpink: [255, 105, 180],
	  indianred: [205, 92, 92],
	  indigo: [75, 0, 130],
	  ivory: [255, 255, 240],
	  khaki: [240, 230, 140],
	  lavender: [230, 230, 250],
	  lavenderblush: [255, 240, 245],
	  lawngreen: [124, 252, 0],
	  lemonchiffon: [255, 250, 205],
	  lightblue: [173, 216, 230],
	  lightcoral: [240, 128, 128],
	  lightcyan: [224, 255, 255],
	  lightgoldenrodyellow: [250, 250, 210],
	  lightgray: [211, 211, 211],
	  lightgreen: [144, 238, 144],
	  lightgrey: [211, 211, 211],
	  lightpink: [255, 182, 193],
	  lightsalmon: [255, 160, 122],
	  lightseagreen: [32, 178, 170],
	  lightskyblue: [135, 206, 250],
	  lightslategray: [119, 136, 153],
	  lightslategrey: [119, 136, 153],
	  lightsteelblue: [176, 196, 222],
	  lightyellow: [255, 255, 224],
	  lime: [0, 255, 0],
	  limegreen: [50, 205, 50],
	  linen: [250, 240, 230],
	  magenta: [255, 0, 255],
	  maroon: [128, 0, 0],
	  mediumaquamarine: [102, 205, 170],
	  mediumblue: [0, 0, 205],
	  mediumorchid: [186, 85, 211],
	  mediumpurple: [147, 112, 219],
	  mediumseagreen: [60, 179, 113],
	  mediumslateblue: [123, 104, 238],
	  mediumspringgreen: [0, 250, 154],
	  mediumturquoise: [72, 209, 204],
	  mediumvioletred: [199, 21, 133],
	  midnightblue: [25, 25, 112],
	  mintcream: [245, 255, 250],
	  mistyrose: [255, 228, 225],
	  moccasin: [255, 228, 181],
	  navajowhite: [255, 222, 173],
	  navy: [0, 0, 128],
	  oldlace: [253, 245, 230],
	  olive: [128, 128, 0],
	  olivedrab: [107, 142, 35],
	  orange: [255, 165, 0],
	  orangered: [255, 69, 0],
	  orchid: [218, 112, 214],
	  palegoldenrod: [238, 232, 170],
	  palegreen: [152, 251, 152],
	  paleturquoise: [175, 238, 238],
	  palevioletred: [219, 112, 147],
	  papayawhip: [255, 239, 213],
	  peachpuff: [255, 218, 185],
	  peru: [205, 133, 63],
	  pink: [255, 192, 203],
	  plum: [221, 160, 221],
	  powderblue: [176, 224, 230],
	  purple: [128, 0, 128],
	  rebeccapurple: [102, 51, 153],
	  red: [255, 0, 0],
	  rosybrown: [188, 143, 143],
	  royalblue: [65, 105, 225],
	  saddlebrown: [139, 69, 19],
	  salmon: [250, 128, 114],
	  sandybrown: [244, 164, 96],
	  seagreen: [46, 139, 87],
	  seashell: [255, 245, 238],
	  sienna: [160, 82, 45],
	  silver: [192, 192, 192],
	  skyblue: [135, 206, 235],
	  slateblue: [106, 90, 205],
	  slategray: [112, 128, 144],
	  slategrey: [112, 128, 144],
	  snow: [255, 250, 250],
	  springgreen: [0, 255, 127],
	  steelblue: [70, 130, 180],
	  tan: [210, 180, 140],
	  teal: [0, 128, 128],
	  thistle: [216, 191, 216],
	  tomato: [255, 99, 71],
	  turquoise: [64, 224, 208],
	  violet: [238, 130, 238],
	  wheat: [245, 222, 179],
	  white: [255, 255, 255],
	  whitesmoke: [245, 245, 245],
	  yellow: [255, 255, 0],
	  yellowgreen: [154, 205, 50]
	};
	var reverseKeywords = {};
	for (var key in cssKeywords) {
	  $traceurRuntime.setProperty(reverseKeywords, JSON.stringify(cssKeywords[$traceurRuntime.toProperty(key)]), key);
	}


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var colorNames = __webpack_require__(24);
	module.exports = {
	  getRgba: getRgba,
	  getHsla: getHsla,
	  getRgb: getRgb,
	  getHsl: getHsl,
	  getHwb: getHwb,
	  getAlpha: getAlpha,
	  hexString: hexString,
	  rgbString: rgbString,
	  rgbaString: rgbaString,
	  percentString: percentString,
	  percentaString: percentaString,
	  hslString: hslString,
	  hslaString: hslaString,
	  hwbString: hwbString,
	  keyword: keyword
	};
	function getRgba(string) {
	  if (!string) {
	    return;
	  }
	  var abbr = /^#([a-fA-F0-9]{3})$/,
	      hex = /^#([a-fA-F0-9]{6})$/,
	      rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
	      per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
	      keyword = /(\w+)/;
	  var rgb = [0, 0, 0],
	      a = 1,
	      match = string.match(abbr);
	  if (match) {
	    match = match[1];
	    for (var i = 0; i < rgb.length; i++) {
	      $traceurRuntime.setProperty(rgb, i, parseInt(match[$traceurRuntime.toProperty(i)] + match[$traceurRuntime.toProperty(i)], 16));
	    }
	  } else if (match = string.match(hex)) {
	    match = match[1];
	    for (var i = 0; i < rgb.length; i++) {
	      $traceurRuntime.setProperty(rgb, i, parseInt(match.slice(i * 2, i * 2 + 2), 16));
	    }
	  } else if (match = string.match(rgba)) {
	    for (var i = 0; i < rgb.length; i++) {
	      $traceurRuntime.setProperty(rgb, i, parseInt(match[$traceurRuntime.toProperty(i + 1)]));
	    }
	    a = parseFloat(match[4]);
	  } else if (match = string.match(per)) {
	    for (var i = 0; i < rgb.length; i++) {
	      $traceurRuntime.setProperty(rgb, i, Math.round(parseFloat(match[$traceurRuntime.toProperty(i + 1)]) * 2.55));
	    }
	    a = parseFloat(match[4]);
	  } else if (match = string.match(keyword)) {
	    if (match[1] == "transparent") {
	      return [0, 0, 0, 0];
	    }
	    rgb = colorNames[$traceurRuntime.toProperty(match[1])];
	    if (!rgb) {
	      return;
	    }
	  }
	  for (var i = 0; i < rgb.length; i++) {
	    $traceurRuntime.setProperty(rgb, i, scale(rgb[$traceurRuntime.toProperty(i)], 0, 255));
	  }
	  if (!a && a != 0) {
	    a = 1;
	  } else {
	    a = scale(a, 0, 1);
	  }
	  $traceurRuntime.setProperty(rgb, 3, a);
	  return rgb;
	}
	function getHsla(string) {
	  if (!string) {
	    return;
	  }
	  var hsl = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
	  var match = string.match(hsl);
	  if (match) {
	    var alpha = parseFloat(match[4]);
	    var h = scale(parseInt(match[1]), 0, 360),
	        s = scale(parseFloat(match[2]), 0, 100),
	        l = scale(parseFloat(match[3]), 0, 100),
	        a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
	    return [h, s, l, a];
	  }
	}
	function getHwb(string) {
	  if (!string) {
	    return;
	  }
	  var hwb = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
	  var match = string.match(hwb);
	  if (match) {
	    var alpha = parseFloat(match[4]);
	    var h = scale(parseInt(match[1]), 0, 360),
	        w = scale(parseFloat(match[2]), 0, 100),
	        b = scale(parseFloat(match[3]), 0, 100),
	        a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
	    return [h, w, b, a];
	  }
	}
	function getRgb(string) {
	  var rgba = getRgba(string);
	  return rgba && rgba.slice(0, 3);
	}
	function getHsl(string) {
	  var hsla = getHsla(string);
	  return hsla && hsla.slice(0, 3);
	}
	function getAlpha(string) {
	  var vals = getRgba(string);
	  if (vals) {
	    return vals[3];
	  } else if (vals = getHsla(string)) {
	    return vals[3];
	  } else if (vals = getHwb(string)) {
	    return vals[3];
	  }
	}
	function hexString(rgb) {
	  return "#" + hexDouble(rgb[0]) + hexDouble(rgb[1]) + hexDouble(rgb[2]);
	}
	function rgbString(rgba, alpha) {
	  if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
	    return rgbaString(rgba, alpha);
	  }
	  return "rgb(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")";
	}
	function rgbaString(rgba, alpha) {
	  if (alpha === undefined) {
	    alpha = (rgba[3] !== undefined ? rgba[3] : 1);
	  }
	  return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + alpha + ")";
	}
	function percentString(rgba, alpha) {
	  if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
	    return percentaString(rgba, alpha);
	  }
	  var r = Math.round(rgba[0] / 255 * 100),
	      g = Math.round(rgba[1] / 255 * 100),
	      b = Math.round(rgba[2] / 255 * 100);
	  return "rgb(" + r + "%, " + g + "%, " + b + "%)";
	}
	function percentaString(rgba, alpha) {
	  var r = Math.round(rgba[0] / 255 * 100),
	      g = Math.round(rgba[1] / 255 * 100),
	      b = Math.round(rgba[2] / 255 * 100);
	  return "rgba(" + r + "%, " + g + "%, " + b + "%, " + (alpha || rgba[3] || 1) + ")";
	}
	function hslString(hsla, alpha) {
	  if (alpha < 1 || (hsla[3] && hsla[3] < 1)) {
	    return hslaString(hsla, alpha);
	  }
	  return "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)";
	}
	function hslaString(hsla, alpha) {
	  if (alpha === undefined) {
	    alpha = (hsla[3] !== undefined ? hsla[3] : 1);
	  }
	  return "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, " + alpha + ")";
	}
	function hwbString(hwb, alpha) {
	  if (alpha === undefined) {
	    alpha = (hwb[3] !== undefined ? hwb[3] : 1);
	  }
	  return "hwb(" + hwb[0] + ", " + hwb[1] + "%, " + hwb[2] + "%" + (alpha !== undefined && alpha !== 1 ? ", " + alpha : "") + ")";
	}
	function keyword(rgb) {
	  return reverseNames[$traceurRuntime.toProperty(rgb.slice(0, 3))];
	}
	function scale(num, min, max) {
	  return Math.min(Math.max(min, num), max);
	}
	function hexDouble(num) {
	  var str = num.toString(16).toUpperCase();
	  return (str.length < 2) ? "0" + str : str;
	}
	var reverseNames = {};
	for (var name in colorNames) {
	  $traceurRuntime.setProperty(reverseNames, colorNames[$traceurRuntime.toProperty(name)], name);
	}


/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";
	module.exports = {
	  "aliceblue": [240, 248, 255],
	  "antiquewhite": [250, 235, 215],
	  "aqua": [0, 255, 255],
	  "aquamarine": [127, 255, 212],
	  "azure": [240, 255, 255],
	  "beige": [245, 245, 220],
	  "bisque": [255, 228, 196],
	  "black": [0, 0, 0],
	  "blanchedalmond": [255, 235, 205],
	  "blue": [0, 0, 255],
	  "blueviolet": [138, 43, 226],
	  "brown": [165, 42, 42],
	  "burlywood": [222, 184, 135],
	  "cadetblue": [95, 158, 160],
	  "chartreuse": [127, 255, 0],
	  "chocolate": [210, 105, 30],
	  "coral": [255, 127, 80],
	  "cornflowerblue": [100, 149, 237],
	  "cornsilk": [255, 248, 220],
	  "crimson": [220, 20, 60],
	  "cyan": [0, 255, 255],
	  "darkblue": [0, 0, 139],
	  "darkcyan": [0, 139, 139],
	  "darkgoldenrod": [184, 134, 11],
	  "darkgray": [169, 169, 169],
	  "darkgreen": [0, 100, 0],
	  "darkgrey": [169, 169, 169],
	  "darkkhaki": [189, 183, 107],
	  "darkmagenta": [139, 0, 139],
	  "darkolivegreen": [85, 107, 47],
	  "darkorange": [255, 140, 0],
	  "darkorchid": [153, 50, 204],
	  "darkred": [139, 0, 0],
	  "darksalmon": [233, 150, 122],
	  "darkseagreen": [143, 188, 143],
	  "darkslateblue": [72, 61, 139],
	  "darkslategray": [47, 79, 79],
	  "darkslategrey": [47, 79, 79],
	  "darkturquoise": [0, 206, 209],
	  "darkviolet": [148, 0, 211],
	  "deeppink": [255, 20, 147],
	  "deepskyblue": [0, 191, 255],
	  "dimgray": [105, 105, 105],
	  "dimgrey": [105, 105, 105],
	  "dodgerblue": [30, 144, 255],
	  "firebrick": [178, 34, 34],
	  "floralwhite": [255, 250, 240],
	  "forestgreen": [34, 139, 34],
	  "fuchsia": [255, 0, 255],
	  "gainsboro": [220, 220, 220],
	  "ghostwhite": [248, 248, 255],
	  "gold": [255, 215, 0],
	  "goldenrod": [218, 165, 32],
	  "gray": [128, 128, 128],
	  "green": [0, 128, 0],
	  "greenyellow": [173, 255, 47],
	  "grey": [128, 128, 128],
	  "honeydew": [240, 255, 240],
	  "hotpink": [255, 105, 180],
	  "indianred": [205, 92, 92],
	  "indigo": [75, 0, 130],
	  "ivory": [255, 255, 240],
	  "khaki": [240, 230, 140],
	  "lavender": [230, 230, 250],
	  "lavenderblush": [255, 240, 245],
	  "lawngreen": [124, 252, 0],
	  "lemonchiffon": [255, 250, 205],
	  "lightblue": [173, 216, 230],
	  "lightcoral": [240, 128, 128],
	  "lightcyan": [224, 255, 255],
	  "lightgoldenrodyellow": [250, 250, 210],
	  "lightgray": [211, 211, 211],
	  "lightgreen": [144, 238, 144],
	  "lightgrey": [211, 211, 211],
	  "lightpink": [255, 182, 193],
	  "lightsalmon": [255, 160, 122],
	  "lightseagreen": [32, 178, 170],
	  "lightskyblue": [135, 206, 250],
	  "lightslategray": [119, 136, 153],
	  "lightslategrey": [119, 136, 153],
	  "lightsteelblue": [176, 196, 222],
	  "lightyellow": [255, 255, 224],
	  "lime": [0, 255, 0],
	  "limegreen": [50, 205, 50],
	  "linen": [250, 240, 230],
	  "magenta": [255, 0, 255],
	  "maroon": [128, 0, 0],
	  "mediumaquamarine": [102, 205, 170],
	  "mediumblue": [0, 0, 205],
	  "mediumorchid": [186, 85, 211],
	  "mediumpurple": [147, 112, 219],
	  "mediumseagreen": [60, 179, 113],
	  "mediumslateblue": [123, 104, 238],
	  "mediumspringgreen": [0, 250, 154],
	  "mediumturquoise": [72, 209, 204],
	  "mediumvioletred": [199, 21, 133],
	  "midnightblue": [25, 25, 112],
	  "mintcream": [245, 255, 250],
	  "mistyrose": [255, 228, 225],
	  "moccasin": [255, 228, 181],
	  "navajowhite": [255, 222, 173],
	  "navy": [0, 0, 128],
	  "oldlace": [253, 245, 230],
	  "olive": [128, 128, 0],
	  "olivedrab": [107, 142, 35],
	  "orange": [255, 165, 0],
	  "orangered": [255, 69, 0],
	  "orchid": [218, 112, 214],
	  "palegoldenrod": [238, 232, 170],
	  "palegreen": [152, 251, 152],
	  "paleturquoise": [175, 238, 238],
	  "palevioletred": [219, 112, 147],
	  "papayawhip": [255, 239, 213],
	  "peachpuff": [255, 218, 185],
	  "peru": [205, 133, 63],
	  "pink": [255, 192, 203],
	  "plum": [221, 160, 221],
	  "powderblue": [176, 224, 230],
	  "purple": [128, 0, 128],
	  "rebeccapurple": [102, 51, 153],
	  "red": [255, 0, 0],
	  "rosybrown": [188, 143, 143],
	  "royalblue": [65, 105, 225],
	  "saddlebrown": [139, 69, 19],
	  "salmon": [250, 128, 114],
	  "sandybrown": [244, 164, 96],
	  "seagreen": [46, 139, 87],
	  "seashell": [255, 245, 238],
	  "sienna": [160, 82, 45],
	  "silver": [192, 192, 192],
	  "skyblue": [135, 206, 235],
	  "slateblue": [106, 90, 205],
	  "slategray": [112, 128, 144],
	  "slategrey": [112, 128, 144],
	  "snow": [255, 250, 250],
	  "springgreen": [0, 255, 127],
	  "steelblue": [70, 130, 180],
	  "tan": [210, 180, 140],
	  "teal": [0, 128, 128],
	  "thistle": [216, 191, 216],
	  "tomato": [255, 99, 71],
	  "turquoise": [64, 224, 208],
	  "violet": [238, 130, 238],
	  "wheat": [245, 222, 179],
	  "white": [255, 255, 255],
	  "whitesmoke": [245, 245, 245],
	  "yellow": [255, 255, 0],
	  "yellowgreen": [154, 205, 50]
	};


/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	module.exports = function(Chart) {
	  var helpers = Chart.canvasHelpers = {};
	  helpers.drawPoint = function(ctx, pointStyle, radius, x, y) {
	    var type,
	        edgeLength,
	        xOffset,
	        yOffset,
	        height,
	        size;
	    if ((typeof pointStyle === 'undefined' ? 'undefined' : $traceurRuntime.typeof(pointStyle)) === 'object') {
	      type = pointStyle.toString();
	      if (type === '[object HTMLImageElement]' || type === '[object HTMLCanvasElement]') {
	        ctx.drawImage(pointStyle, x - pointStyle.width / 2, y - pointStyle.height / 2);
	        return;
	      }
	    }
	    if (isNaN(radius) || radius <= 0) {
	      return;
	    }
	    switch (pointStyle) {
	      default:
	        ctx.beginPath();
	        ctx.arc(x, y, radius, 0, Math.PI * 2);
	        ctx.closePath();
	        ctx.fill();
	        break;
	      case 'triangle':
	        ctx.beginPath();
	        edgeLength = 3 * radius / Math.sqrt(3);
	        height = edgeLength * Math.sqrt(3) / 2;
	        ctx.moveTo(x - edgeLength / 2, y + height / 3);
	        ctx.lineTo(x + edgeLength / 2, y + height / 3);
	        ctx.lineTo(x, y - 2 * height / 3);
	        ctx.closePath();
	        ctx.fill();
	        break;
	      case 'rect':
	        size = 1 / Math.SQRT2 * radius;
	        ctx.beginPath();
	        ctx.fillRect(x - size, y - size, 2 * size, 2 * size);
	        ctx.strokeRect(x - size, y - size, 2 * size, 2 * size);
	        break;
	      case 'rectRot':
	        size = 1 / Math.SQRT2 * radius;
	        ctx.beginPath();
	        ctx.moveTo(x - size, y);
	        ctx.lineTo(x, y + size);
	        ctx.lineTo(x + size, y);
	        ctx.lineTo(x, y - size);
	        ctx.closePath();
	        ctx.fill();
	        break;
	      case 'cross':
	        ctx.beginPath();
	        ctx.moveTo(x, y + radius);
	        ctx.lineTo(x, y - radius);
	        ctx.moveTo(x - radius, y);
	        ctx.lineTo(x + radius, y);
	        ctx.closePath();
	        break;
	      case 'crossRot':
	        ctx.beginPath();
	        xOffset = Math.cos(Math.PI / 4) * radius;
	        yOffset = Math.sin(Math.PI / 4) * radius;
	        ctx.moveTo(x - xOffset, y - yOffset);
	        ctx.lineTo(x + xOffset, y + yOffset);
	        ctx.moveTo(x - xOffset, y + yOffset);
	        ctx.lineTo(x + xOffset, y - yOffset);
	        ctx.closePath();
	        break;
	      case 'star':
	        ctx.beginPath();
	        ctx.moveTo(x, y + radius);
	        ctx.lineTo(x, y - radius);
	        ctx.moveTo(x - radius, y);
	        ctx.lineTo(x + radius, y);
	        xOffset = Math.cos(Math.PI / 4) * radius;
	        yOffset = Math.sin(Math.PI / 4) * radius;
	        ctx.moveTo(x - xOffset, y - yOffset);
	        ctx.lineTo(x + xOffset, y + yOffset);
	        ctx.moveTo(x - xOffset, y + yOffset);
	        ctx.lineTo(x + xOffset, y - yOffset);
	        ctx.closePath();
	        break;
	      case 'line':
	        ctx.beginPath();
	        ctx.moveTo(x - radius, y);
	        ctx.lineTo(x + radius, y);
	        ctx.closePath();
	        break;
	      case 'dash':
	        ctx.beginPath();
	        ctx.moveTo(x, y);
	        ctx.lineTo(x + radius, y);
	        ctx.closePath();
	        break;
	    }
	    ctx.stroke();
	  };
	};


/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	module.exports = function(Chart) {
	  var helpers = Chart.helpers;
	  Chart.elements = {};
	  Chart.Element = function(configuration) {
	    helpers.extend(this, configuration);
	    this.initialize.apply(this, arguments);
	  };
	  helpers.extend(Chart.Element.prototype, {
	    initialize: function() {
	      this.hidden = false;
	    },
	    pivot: function() {
	      var me = this;
	      if (!me._view) {
	        me._view = helpers.clone(me._model);
	      }
	      me._start = helpers.clone(me._view);
	      return me;
	    },
	    transition: function(ease) {
	      var me = this;
	      if (!me._view) {
	        me._view = helpers.clone(me._model);
	      }
	      if (ease === 1) {
	        me._view = me._model;
	        me._start = null;
	        return me;
	      }
	      if (!me._start) {
	        me.pivot();
	      }
	      helpers.each(me._model, function(value, key) {
	        if (key[0] === '_') {} else if (!me._view.hasOwnProperty(key)) {
	          if (typeof value === 'number' && !isNaN(me._view[$traceurRuntime.toProperty(key)])) {
	            $traceurRuntime.setProperty(me._view, key, value * ease);
	          } else {
	            $traceurRuntime.setProperty(me._view, key, value);
	          }
	        } else if (value === me._view[$traceurRuntime.toProperty(key)]) {} else if (typeof value === 'string') {
	          try {
	            var color = helpers.color(me._model[$traceurRuntime.toProperty(key)]).mix(helpers.color(me._start[$traceurRuntime.toProperty(key)]), ease);
	            $traceurRuntime.setProperty(me._view, key, color.rgbString());
	          } catch (err) {
	            $traceurRuntime.setProperty(me._view, key, value);
	          }
	        } else if (typeof value === 'number') {
	          var startVal = me._start[$traceurRuntime.toProperty(key)] !== undefined && isNaN(me._start[$traceurRuntime.toProperty(key)]) === false ? me._start[$traceurRuntime.toProperty(key)] : 0;
	          $traceurRuntime.setProperty(me._view, key, ((me._model[$traceurRuntime.toProperty(key)] - startVal) * ease) + startVal);
	        } else {
	          $traceurRuntime.setProperty(me._view, key, value);
	        }
	      }, me);
	      return me;
	    },
	    tooltipPosition: function() {
	      return {
	        x: this._model.x,
	        y: this._model.y
	      };
	    },
	    hasValue: function() {
	      return helpers.isNumber(this._model.x) && helpers.isNumber(this._model.y);
	    }
	  });
	  Chart.Element.extend = helpers.inherits;
	};


/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	module.exports = function(Chart) {
	  var helpers = Chart.helpers;
	  Chart.defaults.global.animation = {
	    duration: 1000,
	    easing: 'easeOutQuart',
	    onProgress: helpers.noop,
	    onComplete: helpers.noop
	  };
	  Chart.Animation = Chart.Element.extend({
	    currentStep: null,
	    numSteps: 60,
	    easing: '',
	    render: null,
	    onAnimationProgress: null,
	    onAnimationComplete: null
	  });
	  Chart.animationService = {
	    frameDuration: 17,
	    animations: [],
	    dropFrames: 0,
	    request: null,
	    addAnimation: function(chartInstance, animationObject, duration, lazy) {
	      var me = this;
	      if (!lazy) {
	        chartInstance.animating = true;
	      }
	      for (var index = 0; index < me.animations.length; ++index) {
	        if (me.animations[$traceurRuntime.toProperty(index)].chartInstance === chartInstance) {
	          me.animations[$traceurRuntime.toProperty(index)].animationObject = animationObject;
	          return;
	        }
	      }
	      me.animations.push({
	        chartInstance: chartInstance,
	        animationObject: animationObject
	      });
	      if (me.animations.length === 1) {
	        me.requestAnimationFrame();
	      }
	    },
	    cancelAnimation: function(chartInstance) {
	      var index = helpers.findIndex(this.animations, function(animationWrapper) {
	        return animationWrapper.chartInstance === chartInstance;
	      });
	      if (index !== -1) {
	        this.animations.splice(index, 1);
	        chartInstance.animating = false;
	      }
	    },
	    requestAnimationFrame: function() {
	      var me = this;
	      if (me.request === null) {
	        me.request = helpers.requestAnimFrame.call(window, function() {
	          me.request = null;
	          me.startDigest();
	        });
	      }
	    },
	    startDigest: function() {
	      var me = this;
	      var startTime = Date.now();
	      var framesToDrop = 0;
	      if (me.dropFrames > 1) {
	        framesToDrop = Math.floor(me.dropFrames);
	        me.dropFrames = me.dropFrames % 1;
	      }
	      var i = 0;
	      while (i < me.animations.length) {
	        if (me.animations[$traceurRuntime.toProperty(i)].animationObject.currentStep === null) {
	          me.animations[$traceurRuntime.toProperty(i)].animationObject.currentStep = 0;
	        }
	        me.animations[$traceurRuntime.toProperty(i)].animationObject.currentStep += 1 + framesToDrop;
	        if (me.animations[$traceurRuntime.toProperty(i)].animationObject.currentStep > me.animations[$traceurRuntime.toProperty(i)].animationObject.numSteps) {
	          me.animations[$traceurRuntime.toProperty(i)].animationObject.currentStep = me.animations[$traceurRuntime.toProperty(i)].animationObject.numSteps;
	        }
	        me.animations[$traceurRuntime.toProperty(i)].animationObject.render(me.animations[$traceurRuntime.toProperty(i)].chartInstance, me.animations[$traceurRuntime.toProperty(i)].animationObject);
	        if (me.animations[$traceurRuntime.toProperty(i)].animationObject.onAnimationProgress && me.animations[$traceurRuntime.toProperty(i)].animationObject.onAnimationProgress.call) {
	          me.animations[$traceurRuntime.toProperty(i)].animationObject.onAnimationProgress.call(me.animations[$traceurRuntime.toProperty(i)].chartInstance, me.animations[$traceurRuntime.toProperty(i)]);
	        }
	        if (me.animations[$traceurRuntime.toProperty(i)].animationObject.currentStep === me.animations[$traceurRuntime.toProperty(i)].animationObject.numSteps) {
	          if (me.animations[$traceurRuntime.toProperty(i)].animationObject.onAnimationComplete && me.animations[$traceurRuntime.toProperty(i)].animationObject.onAnimationComplete.call) {
	            me.animations[$traceurRuntime.toProperty(i)].animationObject.onAnimationComplete.call(me.animations[$traceurRuntime.toProperty(i)].chartInstance, me.animations[$traceurRuntime.toProperty(i)]);
	          }
	          me.animations[$traceurRuntime.toProperty(i)].chartInstance.animating = false;
	          me.animations.splice(i, 1);
	        } else {
	          ++i;
	        }
	      }
	      var endTime = Date.now();
	      var dropFrames = (endTime - startTime) / me.frameDuration;
	      me.dropFrames += dropFrames;
	      if (me.animations.length > 0) {
	        me.requestAnimationFrame();
	      }
	    }
	  };
	};


/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	module.exports = function(Chart) {
	  var helpers = Chart.helpers;
	  Chart.types = {};
	  Chart.instances = {};
	  Chart.controllers = {};
	  Chart.Controller = function(instance) {
	    this.chart = instance;
	    this.config = instance.config;
	    this.options = this.config.options = helpers.configMerge(Chart.defaults.global, Chart.defaults[$traceurRuntime.toProperty(this.config.type)], this.config.options || {});
	    this.id = helpers.uid();
	    Object.defineProperty(this, 'data', {get: function() {
	        return this.config.data;
	      }});
	    $traceurRuntime.setProperty(Chart.instances, this.id, this);
	    if (this.options.responsive) {
	      this.resize(true);
	    }
	    this.initialize();
	    return this;
	  };
	  helpers.extend(Chart.Controller.prototype, {
	    initialize: function() {
	      var me = this;
	      Chart.plugins.notify('beforeInit', [me]);
	      me.bindEvents();
	      me.ensureScalesHaveIDs();
	      me.buildOrUpdateControllers();
	      me.buildScales();
	      me.updateLayout();
	      me.resetElements();
	      me.initToolTip();
	      me.update();
	      Chart.plugins.notify('afterInit', [me]);
	      return me;
	    },
	    clear: function() {
	      helpers.clear(this.chart);
	      return this;
	    },
	    stop: function() {
	      Chart.animationService.cancelAnimation(this);
	      return this;
	    },
	    resize: function(silent) {
	      var me = this;
	      var chart = me.chart;
	      var canvas = chart.canvas;
	      var newWidth = helpers.getMaximumWidth(canvas);
	      var aspectRatio = chart.aspectRatio;
	      var newHeight = (me.options.maintainAspectRatio && isNaN(aspectRatio) === false && isFinite(aspectRatio) && aspectRatio !== 0) ? newWidth / aspectRatio : helpers.getMaximumHeight(canvas);
	      var sizeChanged = chart.width !== newWidth || chart.height !== newHeight;
	      if (!sizeChanged) {
	        return me;
	      }
	      canvas.width = chart.width = newWidth;
	      canvas.height = chart.height = newHeight;
	      helpers.retinaScale(chart);
	      var newSize = {
	        width: newWidth,
	        height: newHeight
	      };
	      Chart.plugins.notify('resize', [me, newSize]);
	      if (me.options.onResize) {
	        me.options.onResize(me, newSize);
	      }
	      if (!silent) {
	        me.stop();
	        me.update(me.options.responsiveAnimationDuration);
	      }
	      return me;
	    },
	    ensureScalesHaveIDs: function() {
	      var options = this.options;
	      var scalesOptions = options.scales || {};
	      var scaleOptions = options.scale;
	      helpers.each(scalesOptions.xAxes, function(xAxisOptions, index) {
	        xAxisOptions.id = xAxisOptions.id || ('x-axis-' + index);
	      });
	      helpers.each(scalesOptions.yAxes, function(yAxisOptions, index) {
	        yAxisOptions.id = yAxisOptions.id || ('y-axis-' + index);
	      });
	      if (scaleOptions) {
	        scaleOptions.id = scaleOptions.id || 'scale';
	      }
	    },
	    buildScales: function() {
	      var me = this;
	      var options = me.options;
	      var scales = me.scales = {};
	      var items = [];
	      if (options.scales) {
	        items = items.concat((options.scales.xAxes || []).map(function(xAxisOptions) {
	          return {
	            options: xAxisOptions,
	            dtype: 'category'
	          };
	        }), (options.scales.yAxes || []).map(function(yAxisOptions) {
	          return {
	            options: yAxisOptions,
	            dtype: 'linear'
	          };
	        }));
	      }
	      if (options.scale) {
	        items.push({
	          options: options.scale,
	          dtype: 'radialLinear',
	          isDefault: true
	        });
	      }
	      helpers.each(items, function(item) {
	        var scaleOptions = item.options;
	        var scaleType = helpers.getValueOrDefault(scaleOptions.type, item.dtype);
	        var scaleClass = Chart.scaleService.getScaleConstructor(scaleType);
	        if (!scaleClass) {
	          return;
	        }
	        var scale = new scaleClass({
	          id: scaleOptions.id,
	          options: scaleOptions,
	          ctx: me.chart.ctx,
	          chart: me
	        });
	        $traceurRuntime.setProperty(scales, scale.id, scale);
	        if (item.isDefault) {
	          me.scale = scale;
	        }
	      });
	      Chart.scaleService.addScalesToLayout(this);
	    },
	    updateLayout: function() {
	      Chart.layoutService.update(this, this.chart.width, this.chart.height);
	    },
	    buildOrUpdateControllers: function() {
	      var me = this;
	      var types = [];
	      var newControllers = [];
	      helpers.each(me.data.datasets, function(dataset, datasetIndex) {
	        var meta = me.getDatasetMeta(datasetIndex);
	        if (!meta.type) {
	          meta.type = dataset.type || me.config.type;
	        }
	        types.push(meta.type);
	        if (meta.controller) {
	          meta.controller.updateIndex(datasetIndex);
	        } else {
	          meta.controller = new Chart.controllers[$traceurRuntime.toProperty(meta.type)](me, datasetIndex);
	          newControllers.push(meta.controller);
	        }
	      }, me);
	      if (types.length > 1) {
	        for (var i = 1; i < types.length; i++) {
	          if (types[$traceurRuntime.toProperty(i)] !== types[$traceurRuntime.toProperty(i - 1)]) {
	            me.isCombo = true;
	            break;
	          }
	        }
	      }
	      return newControllers;
	    },
	    resetElements: function() {
	      var me = this;
	      helpers.each(me.data.datasets, function(dataset, datasetIndex) {
	        me.getDatasetMeta(datasetIndex).controller.reset();
	      }, me);
	    },
	    update: function(animationDuration, lazy) {
	      var me = this;
	      Chart.plugins.notify('beforeUpdate', [me]);
	      me.tooltip._data = me.data;
	      var newControllers = me.buildOrUpdateControllers();
	      helpers.each(me.data.datasets, function(dataset, datasetIndex) {
	        me.getDatasetMeta(datasetIndex).controller.buildOrUpdateElements();
	      }, me);
	      Chart.layoutService.update(me, me.chart.width, me.chart.height);
	      Chart.plugins.notify('afterScaleUpdate', [me]);
	      helpers.each(newControllers, function(controller) {
	        controller.reset();
	      });
	      me.updateDatasets();
	      Chart.plugins.notify('afterUpdate', [me]);
	      me.render(animationDuration, lazy);
	    },
	    updateDatasets: function() {
	      var me = this;
	      var i,
	          ilen;
	      if (Chart.plugins.notify('beforeDatasetsUpdate', [me])) {
	        for (i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
	          me.getDatasetMeta(i).controller.update();
	        }
	        Chart.plugins.notify('afterDatasetsUpdate', [me]);
	      }
	    },
	    render: function(duration, lazy) {
	      var me = this;
	      Chart.plugins.notify('beforeRender', [me]);
	      var animationOptions = me.options.animation;
	      if (animationOptions && ((typeof duration !== 'undefined' && duration !== 0) || (typeof duration === 'undefined' && animationOptions.duration !== 0))) {
	        var animation = new Chart.Animation();
	        animation.numSteps = (duration || animationOptions.duration) / 16.66;
	        animation.easing = animationOptions.easing;
	        animation.render = function(chartInstance, animationObject) {
	          var easingFunction = helpers.easingEffects[$traceurRuntime.toProperty(animationObject.easing)];
	          var stepDecimal = animationObject.currentStep / animationObject.numSteps;
	          var easeDecimal = easingFunction(stepDecimal);
	          chartInstance.draw(easeDecimal, stepDecimal, animationObject.currentStep);
	        };
	        animation.onAnimationProgress = animationOptions.onProgress;
	        animation.onAnimationComplete = animationOptions.onComplete;
	        Chart.animationService.addAnimation(me, animation, duration, lazy);
	      } else {
	        me.draw();
	        if (animationOptions && animationOptions.onComplete && animationOptions.onComplete.call) {
	          animationOptions.onComplete.call(me);
	        }
	      }
	      return me;
	    },
	    draw: function(ease) {
	      var me = this;
	      var easingDecimal = ease || 1;
	      me.clear();
	      Chart.plugins.notify('beforeDraw', [me, easingDecimal]);
	      helpers.each(me.boxes, function(box) {
	        box.draw(me.chartArea);
	      }, me);
	      if (me.scale) {
	        me.scale.draw();
	      }
	      Chart.plugins.notify('beforeDatasetsDraw', [me, easingDecimal]);
	      helpers.each(me.data.datasets, function(dataset, datasetIndex) {
	        if (me.isDatasetVisible(datasetIndex)) {
	          me.getDatasetMeta(datasetIndex).controller.draw(ease);
	        }
	      }, me, true);
	      Chart.plugins.notify('afterDatasetsDraw', [me, easingDecimal]);
	      me.tooltip.transition(easingDecimal).draw();
	      Chart.plugins.notify('afterDraw', [me, easingDecimal]);
	    },
	    getElementAtEvent: function(e) {
	      var me = this;
	      var eventPosition = helpers.getRelativePosition(e, me.chart);
	      var elementsArray = [];
	      helpers.each(me.data.datasets, function(dataset, datasetIndex) {
	        if (me.isDatasetVisible(datasetIndex)) {
	          var meta = me.getDatasetMeta(datasetIndex);
	          helpers.each(meta.data, function(element) {
	            if (element.inRange(eventPosition.x, eventPosition.y)) {
	              elementsArray.push(element);
	              return elementsArray;
	            }
	          });
	        }
	      });
	      return elementsArray.slice(0, 1);
	    },
	    getElementsAtEvent: function(e) {
	      var me = this;
	      var eventPosition = helpers.getRelativePosition(e, me.chart);
	      var elementsArray = [];
	      var found = function() {
	        if (me.data.datasets) {
	          for (var i = 0; i < me.data.datasets.length; i++) {
	            var meta = me.getDatasetMeta(i);
	            if (me.isDatasetVisible(i)) {
	              for (var j = 0; j < meta.data.length; j++) {
	                if (meta.data[$traceurRuntime.toProperty(j)].inRange(eventPosition.x, eventPosition.y)) {
	                  return meta.data[$traceurRuntime.toProperty(j)];
	                }
	              }
	            }
	          }
	        }
	      }.call(me);
	      if (!found) {
	        return elementsArray;
	      }
	      helpers.each(me.data.datasets, function(dataset, datasetIndex) {
	        if (me.isDatasetVisible(datasetIndex)) {
	          var meta = me.getDatasetMeta(datasetIndex),
	              element = meta.data[$traceurRuntime.toProperty(found._index)];
	          if (element && !element._view.skip) {
	            elementsArray.push(element);
	          }
	        }
	      }, me);
	      return elementsArray;
	    },
	    getElementsAtXAxis: function(e) {
	      var me = this;
	      var eventPosition = helpers.getRelativePosition(e, me.chart);
	      var elementsArray = [];
	      var found = function() {
	        if (me.data.datasets) {
	          for (var i = 0; i < me.data.datasets.length; i++) {
	            var meta = me.getDatasetMeta(i);
	            if (me.isDatasetVisible(i)) {
	              for (var j = 0; j < meta.data.length; j++) {
	                if (meta.data[$traceurRuntime.toProperty(j)].inLabelRange(eventPosition.x, eventPosition.y)) {
	                  return meta.data[$traceurRuntime.toProperty(j)];
	                }
	              }
	            }
	          }
	        }
	      }.call(me);
	      if (!found) {
	        return elementsArray;
	      }
	      helpers.each(me.data.datasets, function(dataset, datasetIndex) {
	        if (me.isDatasetVisible(datasetIndex)) {
	          var meta = me.getDatasetMeta(datasetIndex);
	          var index = helpers.findIndex(meta.data, function(it) {
	            return found._model.x === it._model.x;
	          });
	          if (index !== -1 && !meta.data[$traceurRuntime.toProperty(index)]._view.skip) {
	            elementsArray.push(meta.data[$traceurRuntime.toProperty(index)]);
	          }
	        }
	      }, me);
	      return elementsArray;
	    },
	    getElementsAtEventForMode: function(e, mode) {
	      var me = this;
	      switch (mode) {
	        case 'single':
	          return me.getElementAtEvent(e);
	        case 'label':
	          return me.getElementsAtEvent(e);
	        case 'dataset':
	          return me.getDatasetAtEvent(e);
	        case 'x-axis':
	          return me.getElementsAtXAxis(e);
	        default:
	          return e;
	      }
	    },
	    getDatasetAtEvent: function(e) {
	      var elementsArray = this.getElementAtEvent(e);
	      if (elementsArray.length > 0) {
	        elementsArray = this.getDatasetMeta(elementsArray[0]._datasetIndex).data;
	      }
	      return elementsArray;
	    },
	    getDatasetMeta: function(datasetIndex) {
	      var me = this;
	      var dataset = me.data.datasets[$traceurRuntime.toProperty(datasetIndex)];
	      if (!dataset._meta) {
	        dataset._meta = {};
	      }
	      var meta = dataset._meta[$traceurRuntime.toProperty(me.id)];
	      if (!meta) {
	        meta = $traceurRuntime.setProperty(dataset._meta, me.id, {
	          type: null,
	          data: [],
	          dataset: null,
	          controller: null,
	          hidden: null,
	          xAxisID: null,
	          yAxisID: null
	        });
	      }
	      return meta;
	    },
	    getVisibleDatasetCount: function() {
	      var count = 0;
	      for (var i = 0,
	          ilen = this.data.datasets.length; i < ilen; ++i) {
	        if (this.isDatasetVisible(i)) {
	          count++;
	        }
	      }
	      return count;
	    },
	    isDatasetVisible: function(datasetIndex) {
	      var meta = this.getDatasetMeta(datasetIndex);
	      return typeof meta.hidden === 'boolean' ? !meta.hidden : !this.data.datasets[$traceurRuntime.toProperty(datasetIndex)].hidden;
	    },
	    generateLegend: function() {
	      return this.options.legendCallback(this);
	    },
	    destroy: function() {
	      var me = this;
	      me.stop();
	      me.clear();
	      helpers.unbindEvents(me, me.events);
	      helpers.removeResizeListener(me.chart.canvas.parentNode);
	      var canvas = me.chart.canvas;
	      canvas.width = me.chart.width;
	      canvas.height = me.chart.height;
	      if (me.chart.originalDevicePixelRatio !== undefined) {
	        me.chart.ctx.scale(1 / me.chart.originalDevicePixelRatio, 1 / me.chart.originalDevicePixelRatio);
	      }
	      canvas.style.width = me.chart.originalCanvasStyleWidth;
	      canvas.style.height = me.chart.originalCanvasStyleHeight;
	      Chart.plugins.notify('destroy', [me]);
	      delete Chart.instances[$traceurRuntime.toProperty(me.id)];
	    },
	    toBase64Image: function() {
	      return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments);
	    },
	    initToolTip: function() {
	      var me = this;
	      me.tooltip = new Chart.Tooltip({
	        _chart: me.chart,
	        _chartInstance: me,
	        _data: me.data,
	        _options: me.options.tooltips
	      }, me);
	    },
	    bindEvents: function() {
	      var me = this;
	      helpers.bindEvents(me, me.options.events, function(evt) {
	        me.eventHandler(evt);
	      });
	    },
	    updateHoverStyle: function(elements, mode, enabled) {
	      var method = enabled ? 'setHoverStyle' : 'removeHoverStyle';
	      var element,
	          i,
	          ilen;
	      switch (mode) {
	        case 'single':
	          elements = [elements[0]];
	          break;
	        case 'label':
	        case 'dataset':
	        case 'x-axis':
	          break;
	        default:
	          return;
	      }
	      for (i = 0, ilen = elements.length; i < ilen; ++i) {
	        element = elements[$traceurRuntime.toProperty(i)];
	        if (element) {
	          this.getDatasetMeta(element._datasetIndex).controller[$traceurRuntime.toProperty(method)](element);
	        }
	      }
	    },
	    eventHandler: function(e) {
	      var me = this;
	      var tooltip = me.tooltip;
	      var options = me.options || {};
	      var hoverOptions = options.hover;
	      var tooltipsOptions = options.tooltips;
	      me.lastActive = me.lastActive || [];
	      me.lastTooltipActive = me.lastTooltipActive || [];
	      if (e.type === 'mouseout') {
	        me.active = [];
	        me.tooltipActive = [];
	      } else {
	        me.active = me.getElementsAtEventForMode(e, hoverOptions.mode);
	        me.tooltipActive = me.getElementsAtEventForMode(e, tooltipsOptions.mode);
	      }
	      if (hoverOptions.onHover) {
	        hoverOptions.onHover.call(me, me.active);
	      }
	      if (me.legend && me.legend.handleEvent) {
	        me.legend.handleEvent(e);
	      }
	      if (e.type === 'mouseup' || e.type === 'click') {
	        if (options.onClick) {
	          options.onClick.call(me, e, me.active);
	        }
	      }
	      if (me.lastActive.length) {
	        me.updateHoverStyle(me.lastActive, hoverOptions.mode, false);
	      }
	      if (me.active.length && hoverOptions.mode) {
	        me.updateHoverStyle(me.active, hoverOptions.mode, true);
	      }
	      if (tooltipsOptions.enabled || tooltipsOptions.custom) {
	        tooltip.initialize();
	        tooltip._active = me.tooltipActive;
	        tooltip.update(true);
	      }
	      tooltip.pivot();
	      if (!me.animating) {
	        if (!helpers.arrayEquals(me.active, me.lastActive) || !helpers.arrayEquals(me.tooltipActive, me.lastTooltipActive)) {
	          me.stop();
	          if (tooltipsOptions.enabled || tooltipsOptions.custom) {
	            tooltip.update(true);
	          }
	          me.render(hoverOptions.animationDuration, true);
	        }
	      }
	      me.lastActive = me.active;
	      me.lastTooltipActive = me.tooltipActive;
	      return me;
	    }
	  });
	};


/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	module.exports = function(Chart) {
	  var helpers = Chart.helpers;
	  var noop = helpers.noop;
	  Chart.DatasetController = function(chart, datasetIndex) {
	    this.initialize(chart, datasetIndex);
	  };
	  helpers.extend(Chart.DatasetController.prototype, {
	    datasetElementType: null,
	    dataElementType: null,
	    initialize: function(chart, datasetIndex) {
	      var me = this;
	      me.chart = chart;
	      me.index = datasetIndex;
	      me.linkScales();
	      me.addElements();
	    },
	    updateIndex: function(datasetIndex) {
	      this.index = datasetIndex;
	    },
	    linkScales: function() {
	      var me = this;
	      var meta = me.getMeta();
	      var dataset = me.getDataset();
	      if (meta.xAxisID === null) {
	        meta.xAxisID = dataset.xAxisID || me.chart.options.scales.xAxes[0].id;
	      }
	      if (meta.yAxisID === null) {
	        meta.yAxisID = dataset.yAxisID || me.chart.options.scales.yAxes[0].id;
	      }
	    },
	    getDataset: function() {
	      return this.chart.data.datasets[$traceurRuntime.toProperty(this.index)];
	    },
	    getMeta: function() {
	      return this.chart.getDatasetMeta(this.index);
	    },
	    getScaleForId: function(scaleID) {
	      return this.chart.scales[$traceurRuntime.toProperty(scaleID)];
	    },
	    reset: function() {
	      this.update(true);
	    },
	    createMetaDataset: function() {
	      var me = this;
	      var type = me.datasetElementType;
	      return type && new type({
	        _chart: me.chart.chart,
	        _datasetIndex: me.index
	      });
	    },
	    createMetaData: function(index) {
	      var me = this;
	      var type = me.dataElementType;
	      return type && new type({
	        _chart: me.chart.chart,
	        _datasetIndex: me.index,
	        _index: index
	      });
	    },
	    addElements: function() {
	      var me = this;
	      var meta = me.getMeta();
	      var data = me.getDataset().data || [];
	      var metaData = meta.data;
	      var i,
	          ilen;
	      for (i = 0, ilen = data.length; i < ilen; ++i) {
	        $traceurRuntime.setProperty(metaData, i, metaData[$traceurRuntime.toProperty(i)] || me.createMetaData(meta, i));
	      }
	      meta.dataset = meta.dataset || me.createMetaDataset();
	    },
	    addElementAndReset: function(index) {
	      var me = this;
	      var element = me.createMetaData(index);
	      me.getMeta().data.splice(index, 0, element);
	      me.updateElement(element, index, true);
	    },
	    buildOrUpdateElements: function() {
	      var meta = this.getMeta(),
	          md = meta.data,
	          numData = this.getDataset().data.length,
	          numMetaData = md.length;
	      if (numData < numMetaData) {
	        md.splice(numData, numMetaData - numData);
	      } else if (numData > numMetaData) {
	        for (var index = numMetaData; index < numData; ++index) {
	          this.addElementAndReset(index);
	        }
	      }
	    },
	    update: noop,
	    draw: function(ease) {
	      var easingDecimal = ease || 1;
	      helpers.each(this.getMeta().data, function(element) {
	        element.transition(easingDecimal).draw();
	      });
	    },
	    removeHoverStyle: function(element, elementOpts) {
	      var dataset = this.chart.data.datasets[$traceurRuntime.toProperty(element._datasetIndex)],
	          index = element._index,
	          custom = element.custom || {},
	          valueOrDefault = helpers.getValueAtIndexOrDefault,
	          model = element._model;
	      model.backgroundColor = custom.backgroundColor ? custom.backgroundColor : valueOrDefault(dataset.backgroundColor, index, elementOpts.backgroundColor);
	      model.borderColor = custom.borderColor ? custom.borderColor : valueOrDefault(dataset.borderColor, index, elementOpts.borderColor);
	      model.borderWidth = custom.borderWidth ? custom.borderWidth : valueOrDefault(dataset.borderWidth, index, elementOpts.borderWidth);
	    },
	    setHoverStyle: function(element) {
	      var dataset = this.chart.data.datasets[$traceurRuntime.toProperty(element._datasetIndex)],
	          index = element._index,
	          custom = element.custom || {},
	          valueOrDefault = helpers.getValueAtIndexOrDefault,
	          getHoverColor = helpers.getHoverColor,
	          model = element._model;
	      model.backgroundColor = custom.hoverBackgroundColor ? custom.hoverBackgroundColor : valueOrDefault(dataset.hoverBackgroundColor, index, getHoverColor(model.backgroundColor));
	      model.borderColor = custom.hoverBorderColor ? custom.hoverBorderColor : valueOrDefault(dataset.hoverBorderColor, index, getHoverColor(model.borderColor));
	      model.borderWidth = custom.hoverBorderWidth ? custom.hoverBorderWidth : valueOrDefault(dataset.hoverBorderWidth, index, model.borderWidth);
	    }
	  });
	  Chart.DatasetController.extend = helpers.inherits;
	};


/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	module.exports = function(Chart) {
	  var helpers = Chart.helpers;
	  Chart.layoutService = {
	    defaults: {},
	    addBox: function(chartInstance, box) {
	      if (!chartInstance.boxes) {
	        chartInstance.boxes = [];
	      }
	      chartInstance.boxes.push(box);
	    },
	    removeBox: function(chartInstance, box) {
	      if (!chartInstance.boxes) {
	        return;
	      }
	      chartInstance.boxes.splice(chartInstance.boxes.indexOf(box), 1);
	    },
	    update: function(chartInstance, width, height) {
	      if (!chartInstance) {
	        return;
	      }
	      var xPadding = 0;
	      var yPadding = 0;
	      var leftBoxes = helpers.where(chartInstance.boxes, function(box) {
	        return box.options.position === 'left';
	      });
	      var rightBoxes = helpers.where(chartInstance.boxes, function(box) {
	        return box.options.position === 'right';
	      });
	      var topBoxes = helpers.where(chartInstance.boxes, function(box) {
	        return box.options.position === 'top';
	      });
	      var bottomBoxes = helpers.where(chartInstance.boxes, function(box) {
	        return box.options.position === 'bottom';
	      });
	      var chartAreaBoxes = helpers.where(chartInstance.boxes, function(box) {
	        return box.options.position === 'chartArea';
	      });
	      topBoxes.sort(function(a, b) {
	        return (b.options.fullWidth ? 1 : 0) - (a.options.fullWidth ? 1 : 0);
	      });
	      bottomBoxes.sort(function(a, b) {
	        return (a.options.fullWidth ? 1 : 0) - (b.options.fullWidth ? 1 : 0);
	      });
	      var chartWidth = width - (2 * xPadding);
	      var chartHeight = height - (2 * yPadding);
	      var chartAreaWidth = chartWidth / 2;
	      var chartAreaHeight = chartHeight / 2;
	      var verticalBoxWidth = (width - chartAreaWidth) / (leftBoxes.length + rightBoxes.length);
	      var horizontalBoxHeight = (height - chartAreaHeight) / (topBoxes.length + bottomBoxes.length);
	      var maxChartAreaWidth = chartWidth;
	      var maxChartAreaHeight = chartHeight;
	      var minBoxSizes = [];
	      function getMinimumBoxSize(box) {
	        var minSize;
	        var isHorizontal = box.isHorizontal();
	        if (isHorizontal) {
	          minSize = box.update(box.options.fullWidth ? chartWidth : maxChartAreaWidth, horizontalBoxHeight);
	          maxChartAreaHeight -= minSize.height;
	        } else {
	          minSize = box.update(verticalBoxWidth, chartAreaHeight);
	          maxChartAreaWidth -= minSize.width;
	        }
	        minBoxSizes.push({
	          horizontal: isHorizontal,
	          minSize: minSize,
	          box: box
	        });
	      }
	      helpers.each(leftBoxes.concat(rightBoxes, topBoxes, bottomBoxes), getMinimumBoxSize);
	      var totalLeftBoxesWidth = xPadding;
	      var totalRightBoxesWidth = xPadding;
	      var totalTopBoxesHeight = yPadding;
	      var totalBottomBoxesHeight = yPadding;
	      function fitBox(box) {
	        var minBoxSize = helpers.findNextWhere(minBoxSizes, function(minBox) {
	          return minBox.box === box;
	        });
	        if (minBoxSize) {
	          if (box.isHorizontal()) {
	            var scaleMargin = {
	              left: totalLeftBoxesWidth,
	              right: totalRightBoxesWidth,
	              top: 0,
	              bottom: 0
	            };
	            box.update(box.options.fullWidth ? chartWidth : maxChartAreaWidth, chartHeight / 2, scaleMargin);
	          } else {
	            box.update(minBoxSize.minSize.width, maxChartAreaHeight);
	          }
	        }
	      }
	      helpers.each(leftBoxes.concat(rightBoxes), fitBox);
	      helpers.each(leftBoxes, function(box) {
	        totalLeftBoxesWidth += box.width;
	      });
	      helpers.each(rightBoxes, function(box) {
	        totalRightBoxesWidth += box.width;
	      });
	      helpers.each(topBoxes.concat(bottomBoxes), fitBox);
	      helpers.each(topBoxes, function(box) {
	        totalTopBoxesHeight += box.height;
	      });
	      helpers.each(bottomBoxes, function(box) {
	        totalBottomBoxesHeight += box.height;
	      });
	      function finalFitVerticalBox(box) {
	        var minBoxSize = helpers.findNextWhere(minBoxSizes, function(minSize) {
	          return minSize.box === box;
	        });
	        var scaleMargin = {
	          left: 0,
	          right: 0,
	          top: totalTopBoxesHeight,
	          bottom: totalBottomBoxesHeight
	        };
	        if (minBoxSize) {
	          box.update(minBoxSize.minSize.width, maxChartAreaHeight, scaleMargin);
	        }
	      }
	      helpers.each(leftBoxes.concat(rightBoxes), finalFitVerticalBox);
	      totalLeftBoxesWidth = xPadding;
	      totalRightBoxesWidth = xPadding;
	      totalTopBoxesHeight = yPadding;
	      totalBottomBoxesHeight = yPadding;
	      helpers.each(leftBoxes, function(box) {
	        totalLeftBoxesWidth += box.width;
	      });
	      helpers.each(rightBoxes, function(box) {
	        totalRightBoxesWidth += box.width;
	      });
	      helpers.each(topBoxes, function(box) {
	        totalTopBoxesHeight += box.height;
	      });
	      helpers.each(bottomBoxes, function(box) {
	        totalBottomBoxesHeight += box.height;
	      });
	      var newMaxChartAreaHeight = height - totalTopBoxesHeight - totalBottomBoxesHeight;
	      var newMaxChartAreaWidth = width - totalLeftBoxesWidth - totalRightBoxesWidth;
	      if (newMaxChartAreaWidth !== maxChartAreaWidth || newMaxChartAreaHeight !== maxChartAreaHeight) {
	        helpers.each(leftBoxes, function(box) {
	          box.height = newMaxChartAreaHeight;
	        });
	        helpers.each(rightBoxes, function(box) {
	          box.height = newMaxChartAreaHeight;
	        });
	        helpers.each(topBoxes, function(box) {
	          if (!box.options.fullWidth) {
	            box.width = newMaxChartAreaWidth;
	          }
	        });
	        helpers.each(bottomBoxes, function(box) {
	          if (!box.options.fullWidth) {
	            box.width = newMaxChartAreaWidth;
	          }
	        });
	        maxChartAreaHeight = newMaxChartAreaHeight;
	        maxChartAreaWidth = newMaxChartAreaWidth;
	      }
	      var left = xPadding;
	      var top = yPadding;
	      function placeBox(box) {
	        if (box.isHorizontal()) {
	          box.left = box.options.fullWidth ? xPadding : totalLeftBoxesWidth;
	          box.right = box.options.fullWidth ? width - xPadding : totalLeftBoxesWidth + maxChartAreaWidth;
	          box.top = top;
	          box.bottom = top + box.height;
	          top = box.bottom;
	        } else {
	          box.left = left;
	          box.right = left + box.width;
	          box.top = totalTopBoxesHeight;
	          box.bottom = totalTopBoxesHeight + maxChartAreaHeight;
	          left = box.right;
	        }
	      }
	      helpers.each(leftBoxes.concat(topBoxes), placeBox);
	      left += maxChartAreaWidth;
	      top += maxChartAreaHeight;
	      helpers.each(rightBoxes, placeBox);
	      helpers.each(bottomBoxes, placeBox);
	      chartInstance.chartArea = {
	        left: totalLeftBoxesWidth,
	        top: totalTopBoxesHeight,
	        right: totalLeftBoxesWidth + maxChartAreaWidth,
	        bottom: totalTopBoxesHeight + maxChartAreaHeight
	      };
	      helpers.each(chartAreaBoxes, function(box) {
	        box.left = chartInstance.chartArea.left;
	        box.top = chartInstance.chartArea.top;
	        box.right = chartInstance.chartArea.right;
	        box.bottom = chartInstance.chartArea.bottom;
	        box.update(maxChartAreaWidth, maxChartAreaHeight);
	      });
	    }
	  };
	};


/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	module.exports = function(Chart) {
	  var helpers = Chart.helpers;
	  Chart.scaleService = {
	    constructors: {},
	    defaults: {},
	    registerScaleType: function(type, scaleConstructor, defaults) {
	      $traceurRuntime.setProperty(this.constructors, type, scaleConstructor);
	      $traceurRuntime.setProperty(this.defaults, type, helpers.clone(defaults));
	    },
	    getScaleConstructor: function(type) {
	      return this.constructors.hasOwnProperty(type) ? this.constructors[$traceurRuntime.toProperty(type)] : undefined;
	    },
	    getScaleDefaults: function(type) {
	      return this.defaults.hasOwnProperty(type) ? helpers.scaleMerge(Chart.defaults.scale, this.defaults[$traceurRuntime.toProperty(type)]) : {};
	    },
	    updateScaleDefaults: function(type, additions) {
	      var defaults = this.defaults;
	      if (defaults.hasOwnProperty(type)) {
	        $traceurRuntime.setProperty(defaults, type, helpers.extend(defaults[$traceurRuntime.toProperty(type)], additions));
	      }
	    },
	    addScalesToLayout: function(chartInstance) {
	      helpers.each(chartInstance.scales, function(scale) {
	        Chart.layoutService.addBox(chartInstance, scale);
	      });
	    }
	  };
	};


/***/ },
/* 32 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	module.exports = function(Chart) {
	  var noop = Chart.helpers.noop;
	  Chart.plugins = {
	    _plugins: [],
	    register: function(plugins) {
	      var p = this._plugins;
	      ([]).concat(plugins).forEach(function(plugin) {
	        if (p.indexOf(plugin) === -1) {
	          p.push(plugin);
	        }
	      });
	    },
	    unregister: function(plugins) {
	      var p = this._plugins;
	      ([]).concat(plugins).forEach(function(plugin) {
	        var idx = p.indexOf(plugin);
	        if (idx !== -1) {
	          p.splice(idx, 1);
	        }
	      });
	    },
	    clear: function() {
	      this._plugins = [];
	    },
	    count: function() {
	      return this._plugins.length;
	    },
	    getAll: function() {
	      return this._plugins;
	    },
	    notify: function(extension, args) {
	      var plugins = this._plugins;
	      var ilen = plugins.length;
	      var i,
	          plugin;
	      for (i = 0; i < ilen; ++i) {
	        plugin = plugins[$traceurRuntime.toProperty(i)];
	        if (typeof plugin[$traceurRuntime.toProperty(extension)] === 'function') {
	          if (plugin[$traceurRuntime.toProperty(extension)].apply(plugin, args || []) === false) {
	            return false;
	          }
	        }
	      }
	      return true;
	    }
	  };
	  Chart.PluginBase = Chart.Element.extend({
	    beforeInit: noop,
	    afterInit: noop,
	    beforeUpdate: noop,
	    afterUpdate: noop,
	    beforeDraw: noop,
	    afterDraw: noop,
	    destroy: noop
	  });
	  Chart.pluginService = Chart.plugins;
	};


/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	module.exports = function(Chart) {
	  var helpers = Chart.helpers;
	  Chart.defaults.scale = {
	    display: true,
	    position: 'left',
	    gridLines: {
	      display: true,
	      color: 'rgba(0, 0, 0, 0.1)',
	      lineWidth: 1,
	      drawBorder: true,
	      drawOnChartArea: true,
	      drawTicks: true,
	      tickMarkLength: 10,
	      zeroLineWidth: 1,
	      zeroLineColor: 'rgba(0,0,0,0.25)',
	      offsetGridLines: false,
	      borderDash: [],
	      borderDashOffset: 0.0
	    },
	    scaleLabel: {
	      labelString: '',
	      display: false
	    },
	    ticks: {
	      beginAtZero: false,
	      minRotation: 0,
	      maxRotation: 50,
	      mirror: false,
	      padding: 10,
	      reverse: false,
	      display: true,
	      autoSkip: true,
	      autoSkipPadding: 0,
	      labelOffset: 0,
	      callback: function(value) {
	        return helpers.isArray(value) ? value : '' + value;
	      }
	    }
	  };
	  Chart.Scale = Chart.Element.extend({
	    beforeUpdate: function() {
	      helpers.callCallback(this.options.beforeUpdate, [this]);
	    },
	    update: function(maxWidth, maxHeight, margins) {
	      var me = this;
	      me.beforeUpdate();
	      me.maxWidth = maxWidth;
	      me.maxHeight = maxHeight;
	      me.margins = helpers.extend({
	        left: 0,
	        right: 0,
	        top: 0,
	        bottom: 0
	      }, margins);
	      me.beforeSetDimensions();
	      me.setDimensions();
	      me.afterSetDimensions();
	      me.beforeDataLimits();
	      me.determineDataLimits();
	      me.afterDataLimits();
	      me.beforeBuildTicks();
	      me.buildTicks();
	      me.afterBuildTicks();
	      me.beforeTickToLabelConversion();
	      me.convertTicksToLabels();
	      me.afterTickToLabelConversion();
	      me.beforeCalculateTickRotation();
	      me.calculateTickRotation();
	      me.afterCalculateTickRotation();
	      me.beforeFit();
	      me.fit();
	      me.afterFit();
	      me.afterUpdate();
	      return me.minSize;
	    },
	    afterUpdate: function() {
	      helpers.callCallback(this.options.afterUpdate, [this]);
	    },
	    beforeSetDimensions: function() {
	      helpers.callCallback(this.options.beforeSetDimensions, [this]);
	    },
	    setDimensions: function() {
	      var me = this;
	      if (me.isHorizontal()) {
	        me.width = me.maxWidth;
	        me.left = 0;
	        me.right = me.width;
	      } else {
	        me.height = me.maxHeight;
	        me.top = 0;
	        me.bottom = me.height;
	      }
	      me.paddingLeft = 0;
	      me.paddingTop = 0;
	      me.paddingRight = 0;
	      me.paddingBottom = 0;
	    },
	    afterSetDimensions: function() {
	      helpers.callCallback(this.options.afterSetDimensions, [this]);
	    },
	    beforeDataLimits: function() {
	      helpers.callCallback(this.options.beforeDataLimits, [this]);
	    },
	    determineDataLimits: helpers.noop,
	    afterDataLimits: function() {
	      helpers.callCallback(this.options.afterDataLimits, [this]);
	    },
	    beforeBuildTicks: function() {
	      helpers.callCallback(this.options.beforeBuildTicks, [this]);
	    },
	    buildTicks: helpers.noop,
	    afterBuildTicks: function() {
	      helpers.callCallback(this.options.afterBuildTicks, [this]);
	    },
	    beforeTickToLabelConversion: function() {
	      helpers.callCallback(this.options.beforeTickToLabelConversion, [this]);
	    },
	    convertTicksToLabels: function() {
	      var me = this;
	      me.ticks = me.ticks.map(function(numericalTick, index, ticks) {
	        if (me.options.ticks.userCallback) {
	          return me.options.ticks.userCallback(numericalTick, index, ticks);
	        }
	        return me.options.ticks.callback(numericalTick, index, ticks);
	      }, me);
	    },
	    afterTickToLabelConversion: function() {
	      helpers.callCallback(this.options.afterTickToLabelConversion, [this]);
	    },
	    beforeCalculateTickRotation: function() {
	      helpers.callCallback(this.options.beforeCalculateTickRotation, [this]);
	    },
	    calculateTickRotation: function() {
	      var me = this;
	      var context = me.ctx;
	      var globalDefaults = Chart.defaults.global;
	      var optionTicks = me.options.ticks;
	      var tickFontSize = helpers.getValueOrDefault(optionTicks.fontSize, globalDefaults.defaultFontSize);
	      var tickFontStyle = helpers.getValueOrDefault(optionTicks.fontStyle, globalDefaults.defaultFontStyle);
	      var tickFontFamily = helpers.getValueOrDefault(optionTicks.fontFamily, globalDefaults.defaultFontFamily);
	      var tickLabelFont = helpers.fontString(tickFontSize, tickFontStyle, tickFontFamily);
	      context.font = tickLabelFont;
	      var firstWidth = context.measureText(me.ticks[0]).width;
	      var lastWidth = context.measureText(me.ticks[$traceurRuntime.toProperty(me.ticks.length - 1)]).width;
	      var firstRotated;
	      me.labelRotation = optionTicks.minRotation || 0;
	      me.paddingRight = 0;
	      me.paddingLeft = 0;
	      if (me.options.display) {
	        if (me.isHorizontal()) {
	          me.paddingRight = lastWidth / 2 + 3;
	          me.paddingLeft = firstWidth / 2 + 3;
	          if (!me.longestTextCache) {
	            me.longestTextCache = {};
	          }
	          var originalLabelWidth = helpers.longestText(context, tickLabelFont, me.ticks, me.longestTextCache);
	          var labelWidth = originalLabelWidth;
	          var cosRotation;
	          var sinRotation;
	          var tickWidth = me.getPixelForTick(1) - me.getPixelForTick(0) - 6;
	          while (labelWidth > tickWidth && me.labelRotation < optionTicks.maxRotation) {
	            cosRotation = Math.cos(helpers.toRadians(me.labelRotation));
	            sinRotation = Math.sin(helpers.toRadians(me.labelRotation));
	            firstRotated = cosRotation * firstWidth;
	            if (firstRotated + tickFontSize / 2 > me.yLabelWidth) {
	              me.paddingLeft = firstRotated + tickFontSize / 2;
	            }
	            me.paddingRight = tickFontSize / 2;
	            if (sinRotation * originalLabelWidth > me.maxHeight) {
	              me.labelRotation--;
	              break;
	            }
	            me.labelRotation++;
	            labelWidth = cosRotation * originalLabelWidth;
	          }
	        }
	      }
	      if (me.margins) {
	        me.paddingLeft = Math.max(me.paddingLeft - me.margins.left, 0);
	        me.paddingRight = Math.max(me.paddingRight - me.margins.right, 0);
	      }
	    },
	    afterCalculateTickRotation: function() {
	      helpers.callCallback(this.options.afterCalculateTickRotation, [this]);
	    },
	    beforeFit: function() {
	      helpers.callCallback(this.options.beforeFit, [this]);
	    },
	    fit: function() {
	      var me = this;
	      var minSize = me.minSize = {
	        width: 0,
	        height: 0
	      };
	      var opts = me.options;
	      var globalDefaults = Chart.defaults.global;
	      var tickOpts = opts.ticks;
	      var scaleLabelOpts = opts.scaleLabel;
	      var gridLineOpts = opts.gridLines;
	      var display = opts.display;
	      var isHorizontal = me.isHorizontal();
	      var tickFontSize = helpers.getValueOrDefault(tickOpts.fontSize, globalDefaults.defaultFontSize);
	      var tickFontStyle = helpers.getValueOrDefault(tickOpts.fontStyle, globalDefaults.defaultFontStyle);
	      var tickFontFamily = helpers.getValueOrDefault(tickOpts.fontFamily, globalDefaults.defaultFontFamily);
	      var tickLabelFont = helpers.fontString(tickFontSize, tickFontStyle, tickFontFamily);
	      var scaleLabelFontSize = helpers.getValueOrDefault(scaleLabelOpts.fontSize, globalDefaults.defaultFontSize);
	      var tickMarkLength = opts.gridLines.tickMarkLength;
	      if (isHorizontal) {
	        minSize.width = me.isFullWidth() ? me.maxWidth - me.margins.left - me.margins.right : me.maxWidth;
	      } else {
	        minSize.width = display && gridLineOpts.drawTicks ? tickMarkLength : 0;
	      }
	      if (isHorizontal) {
	        minSize.height = display && gridLineOpts.drawTicks ? tickMarkLength : 0;
	      } else {
	        minSize.height = me.maxHeight;
	      }
	      if (scaleLabelOpts.display && display) {
	        if (isHorizontal) {
	          minSize.height += (scaleLabelFontSize * 1.5);
	        } else {
	          minSize.width += (scaleLabelFontSize * 1.5);
	        }
	      }
	      if (tickOpts.display && display) {
	        if (!me.longestTextCache) {
	          me.longestTextCache = {};
	        }
	        var largestTextWidth = helpers.longestText(me.ctx, tickLabelFont, me.ticks, me.longestTextCache);
	        var tallestLabelHeightInLines = helpers.numberOfLabelLines(me.ticks);
	        var lineSpace = tickFontSize * 0.5;
	        if (isHorizontal) {
	          me.longestLabelWidth = largestTextWidth;
	          var labelHeight = (Math.sin(helpers.toRadians(me.labelRotation)) * me.longestLabelWidth) + (tickFontSize * tallestLabelHeightInLines) + (lineSpace * tallestLabelHeightInLines);
	          minSize.height = Math.min(me.maxHeight, minSize.height + labelHeight);
	          me.ctx.font = tickLabelFont;
	          var firstLabelWidth = me.ctx.measureText(me.ticks[0]).width;
	          var lastLabelWidth = me.ctx.measureText(me.ticks[$traceurRuntime.toProperty(me.ticks.length - 1)]).width;
	          var cosRotation = Math.cos(helpers.toRadians(me.labelRotation));
	          var sinRotation = Math.sin(helpers.toRadians(me.labelRotation));
	          me.paddingLeft = me.labelRotation !== 0 ? (cosRotation * firstLabelWidth) + 3 : firstLabelWidth / 2 + 3;
	          me.paddingRight = me.labelRotation !== 0 ? (sinRotation * (tickFontSize / 2)) + 3 : lastLabelWidth / 2 + 3;
	        } else {
	          var maxLabelWidth = me.maxWidth - minSize.width;
	          var mirror = tickOpts.mirror;
	          if (!mirror) {
	            largestTextWidth += me.options.ticks.padding;
	          } else {
	            largestTextWidth = 0;
	          }
	          if (largestTextWidth < maxLabelWidth) {
	            minSize.width += largestTextWidth;
	          } else {
	            minSize.width = me.maxWidth;
	          }
	          me.paddingTop = tickFontSize / 2;
	          me.paddingBottom = tickFontSize / 2;
	        }
	      }
	      if (me.margins) {
	        me.paddingLeft = Math.max(me.paddingLeft - me.margins.left, 0);
	        me.paddingTop = Math.max(me.paddingTop - me.margins.top, 0);
	        me.paddingRight = Math.max(me.paddingRight - me.margins.right, 0);
	        me.paddingBottom = Math.max(me.paddingBottom - me.margins.bottom, 0);
	      }
	      me.width = minSize.width;
	      me.height = minSize.height;
	    },
	    afterFit: function() {
	      helpers.callCallback(this.options.afterFit, [this]);
	    },
	    isHorizontal: function() {
	      return this.options.position === 'top' || this.options.position === 'bottom';
	    },
	    isFullWidth: function() {
	      return (this.options.fullWidth);
	    },
	    getRightValue: function(rawValue) {
	      if (rawValue === null || typeof(rawValue) === 'undefined') {
	        return NaN;
	      }
	      if (typeof(rawValue) === 'number' && isNaN(rawValue)) {
	        return NaN;
	      }
	      if ($traceurRuntime.typeof((rawValue)) === 'object') {
	        if ((rawValue instanceof Date) || (rawValue.isValid)) {
	          return rawValue;
	        }
	        return this.getRightValue(this.isHorizontal() ? rawValue.x : rawValue.y);
	      }
	      return rawValue;
	    },
	    getLabelForIndex: helpers.noop,
	    getPixelForValue: helpers.noop,
	    getValueForPixel: helpers.noop,
	    getPixelForTick: function(index, includeOffset) {
	      var me = this;
	      if (me.isHorizontal()) {
	        var innerWidth = me.width - (me.paddingLeft + me.paddingRight);
	        var tickWidth = innerWidth / Math.max((me.ticks.length - ((me.options.gridLines.offsetGridLines) ? 0 : 1)), 1);
	        var pixel = (tickWidth * index) + me.paddingLeft;
	        if (includeOffset) {
	          pixel += tickWidth / 2;
	        }
	        var finalVal = me.left + Math.round(pixel);
	        finalVal += me.isFullWidth() ? me.margins.left : 0;
	        return finalVal;
	      }
	      var innerHeight = me.height - (me.paddingTop + me.paddingBottom);
	      return me.top + (index * (innerHeight / (me.ticks.length - 1)));
	    },
	    getPixelForDecimal: function(decimal) {
	      var me = this;
	      if (me.isHorizontal()) {
	        var innerWidth = me.width - (me.paddingLeft + me.paddingRight);
	        var valueOffset = (innerWidth * decimal) + me.paddingLeft;
	        var finalVal = me.left + Math.round(valueOffset);
	        finalVal += me.isFullWidth() ? me.margins.left : 0;
	        return finalVal;
	      }
	      return me.top + (decimal * me.height);
	    },
	    getBasePixel: function() {
	      var me = this;
	      var min = me.min;
	      var max = me.max;
	      return me.getPixelForValue(me.beginAtZero ? 0 : min < 0 && max < 0 ? max : min > 0 && max > 0 ? min : 0);
	    },
	    draw: function(chartArea) {
	      var me = this;
	      var options = me.options;
	      if (!options.display) {
	        return;
	      }
	      var context = me.ctx;
	      var globalDefaults = Chart.defaults.global;
	      var optionTicks = options.ticks;
	      var gridLines = options.gridLines;
	      var scaleLabel = options.scaleLabel;
	      var isRotated = me.labelRotation !== 0;
	      var skipRatio;
	      var useAutoskipper = optionTicks.autoSkip;
	      var isHorizontal = me.isHorizontal();
	      var maxTicks;
	      if (optionTicks.maxTicksLimit) {
	        maxTicks = optionTicks.maxTicksLimit;
	      }
	      var tickFontColor = helpers.getValueOrDefault(optionTicks.fontColor, globalDefaults.defaultFontColor);
	      var tickFontSize = helpers.getValueOrDefault(optionTicks.fontSize, globalDefaults.defaultFontSize);
	      var tickFontStyle = helpers.getValueOrDefault(optionTicks.fontStyle, globalDefaults.defaultFontStyle);
	      var tickFontFamily = helpers.getValueOrDefault(optionTicks.fontFamily, globalDefaults.defaultFontFamily);
	      var tickLabelFont = helpers.fontString(tickFontSize, tickFontStyle, tickFontFamily);
	      var tl = gridLines.tickMarkLength;
	      var borderDash = helpers.getValueOrDefault(gridLines.borderDash, globalDefaults.borderDash);
	      var borderDashOffset = helpers.getValueOrDefault(gridLines.borderDashOffset, globalDefaults.borderDashOffset);
	      var scaleLabelFontColor = helpers.getValueOrDefault(scaleLabel.fontColor, globalDefaults.defaultFontColor);
	      var scaleLabelFontSize = helpers.getValueOrDefault(scaleLabel.fontSize, globalDefaults.defaultFontSize);
	      var scaleLabelFontStyle = helpers.getValueOrDefault(scaleLabel.fontStyle, globalDefaults.defaultFontStyle);
	      var scaleLabelFontFamily = helpers.getValueOrDefault(scaleLabel.fontFamily, globalDefaults.defaultFontFamily);
	      var scaleLabelFont = helpers.fontString(scaleLabelFontSize, scaleLabelFontStyle, scaleLabelFontFamily);
	      var labelRotationRadians = helpers.toRadians(me.labelRotation);
	      var cosRotation = Math.cos(labelRotationRadians);
	      var longestRotatedLabel = me.longestLabelWidth * cosRotation;
	      context.fillStyle = tickFontColor;
	      var itemsToDraw = [];
	      if (isHorizontal) {
	        skipRatio = false;
	        if (isRotated) {
	          longestRotatedLabel /= 2;
	        }
	        if ((longestRotatedLabel + optionTicks.autoSkipPadding) * me.ticks.length > (me.width - (me.paddingLeft + me.paddingRight))) {
	          skipRatio = 1 + Math.floor(((longestRotatedLabel + optionTicks.autoSkipPadding) * me.ticks.length) / (me.width - (me.paddingLeft + me.paddingRight)));
	        }
	        if (maxTicks && me.ticks.length > maxTicks) {
	          while (!skipRatio || me.ticks.length / (skipRatio || 1) > maxTicks) {
	            if (!skipRatio) {
	              skipRatio = 1;
	            }
	            skipRatio += 1;
	          }
	        }
	        if (!useAutoskipper) {
	          skipRatio = false;
	        }
	      }
	      var xTickStart = options.position === 'right' ? me.left : me.right - tl;
	      var xTickEnd = options.position === 'right' ? me.left + tl : me.right;
	      var yTickStart = options.position === 'bottom' ? me.top : me.bottom - tl;
	      var yTickEnd = options.position === 'bottom' ? me.top + tl : me.bottom;
	      helpers.each(me.ticks, function(label, index) {
	        if (label === undefined || label === null) {
	          return;
	        }
	        var isLastTick = me.ticks.length === index + 1;
	        var shouldSkip = (skipRatio > 1 && index % skipRatio > 0) || (index % skipRatio === 0 && index + skipRatio >= me.ticks.length);
	        if (shouldSkip && !isLastTick || (label === undefined || label === null)) {
	          return;
	        }
	        var lineWidth,
	            lineColor;
	        if (index === (typeof me.zeroLineIndex !== 'undefined' ? me.zeroLineIndex : 0)) {
	          lineWidth = gridLines.zeroLineWidth;
	          lineColor = gridLines.zeroLineColor;
	        } else {
	          lineWidth = helpers.getValueAtIndexOrDefault(gridLines.lineWidth, index);
	          lineColor = helpers.getValueAtIndexOrDefault(gridLines.color, index);
	        }
	        var tx1,
	            ty1,
	            tx2,
	            ty2,
	            x1,
	            y1,
	            x2,
	            y2,
	            labelX,
	            labelY;
	        var textAlign = 'middle';
	        var textBaseline = 'middle';
	        if (isHorizontal) {
	          if (!isRotated) {
	            textBaseline = options.position === 'top' ? 'bottom' : 'top';
	          }
	          textAlign = isRotated ? 'right' : 'center';
	          var xLineValue = me.getPixelForTick(index) + helpers.aliasPixel(lineWidth);
	          labelX = me.getPixelForTick(index, gridLines.offsetGridLines) + optionTicks.labelOffset;
	          labelY = (isRotated) ? me.top + 12 : options.position === 'top' ? me.bottom - tl : me.top + tl;
	          tx1 = tx2 = x1 = x2 = xLineValue;
	          ty1 = yTickStart;
	          ty2 = yTickEnd;
	          y1 = chartArea.top;
	          y2 = chartArea.bottom;
	        } else {
	          if (options.position === 'left') {
	            if (optionTicks.mirror) {
	              labelX = me.right + optionTicks.padding;
	              textAlign = 'left';
	            } else {
	              labelX = me.right - optionTicks.padding;
	              textAlign = 'right';
	            }
	          } else if (optionTicks.mirror) {
	            labelX = me.left - optionTicks.padding;
	            textAlign = 'right';
	          } else {
	            labelX = me.left + optionTicks.padding;
	            textAlign = 'left';
	          }
	          var yLineValue = me.getPixelForTick(index);
	          yLineValue += helpers.aliasPixel(lineWidth);
	          labelY = me.getPixelForTick(index, gridLines.offsetGridLines);
	          tx1 = xTickStart;
	          tx2 = xTickEnd;
	          x1 = chartArea.left;
	          x2 = chartArea.right;
	          ty1 = ty2 = y1 = y2 = yLineValue;
	        }
	        itemsToDraw.push({
	          tx1: tx1,
	          ty1: ty1,
	          tx2: tx2,
	          ty2: ty2,
	          x1: x1,
	          y1: y1,
	          x2: x2,
	          y2: y2,
	          labelX: labelX,
	          labelY: labelY,
	          glWidth: lineWidth,
	          glColor: lineColor,
	          glBorderDash: borderDash,
	          glBorderDashOffset: borderDashOffset,
	          rotation: -1 * labelRotationRadians,
	          label: label,
	          textBaseline: textBaseline,
	          textAlign: textAlign
	        });
	      });
	      helpers.each(itemsToDraw, function(itemToDraw) {
	        if (gridLines.display) {
	          context.save();
	          context.lineWidth = itemToDraw.glWidth;
	          context.strokeStyle = itemToDraw.glColor;
	          if (context.setLineDash) {
	            context.setLineDash(itemToDraw.glBorderDash);
	            context.lineDashOffset = itemToDraw.glBorderDashOffset;
	          }
	          context.beginPath();
	          if (gridLines.drawTicks) {
	            context.moveTo(itemToDraw.tx1, itemToDraw.ty1);
	            context.lineTo(itemToDraw.tx2, itemToDraw.ty2);
	          }
	          if (gridLines.drawOnChartArea) {
	            context.moveTo(itemToDraw.x1, itemToDraw.y1);
	            context.lineTo(itemToDraw.x2, itemToDraw.y2);
	          }
	          context.stroke();
	          context.restore();
	        }
	        if (optionTicks.display) {
	          context.save();
	          context.translate(itemToDraw.labelX, itemToDraw.labelY);
	          context.rotate(itemToDraw.rotation);
	          context.font = tickLabelFont;
	          context.textBaseline = itemToDraw.textBaseline;
	          context.textAlign = itemToDraw.textAlign;
	          var label = itemToDraw.label;
	          if (helpers.isArray(label)) {
	            for (var i = 0,
	                y = -(label.length - 1) * tickFontSize * 0.75; i < label.length; ++i) {
	              context.fillText('' + label[$traceurRuntime.toProperty(i)], 0, y);
	              y += (tickFontSize * 1.5);
	            }
	          } else {
	            context.fillText(label, 0, 0);
	          }
	          context.restore();
	        }
	      });
	      if (scaleLabel.display) {
	        var scaleLabelX;
	        var scaleLabelY;
	        var rotation = 0;
	        if (isHorizontal) {
	          scaleLabelX = me.left + ((me.right - me.left) / 2);
	          scaleLabelY = options.position === 'bottom' ? me.bottom - (scaleLabelFontSize / 2) : me.top + (scaleLabelFontSize / 2);
	        } else {
	          var isLeft = options.position === 'left';
	          scaleLabelX = isLeft ? me.left + (scaleLabelFontSize / 2) : me.right - (scaleLabelFontSize / 2);
	          scaleLabelY = me.top + ((me.bottom - me.top) / 2);
	          rotation = isLeft ? -0.5 * Math.PI : 0.5 * Math.PI;
	        }
	        context.save();
	        context.translate(scaleLabelX, scaleLabelY);
	        context.rotate(rotation);
	        context.textAlign = 'center';
	        context.textBaseline = 'middle';
	        context.fillStyle = scaleLabelFontColor;
	        context.font = scaleLabelFont;
	        context.fillText(scaleLabel.labelString, 0, 0);
	        context.restore();
	      }
	      if (gridLines.drawBorder) {
	        context.lineWidth = helpers.getValueAtIndexOrDefault(gridLines.lineWidth, 0);
	        context.strokeStyle = helpers.getValueAtIndexOrDefault(gridLines.color, 0);
	        var x1 = me.left,
	            x2 = me.right,
	            y1 = me.top,
	            y2 = me.bottom;
	        var aliasPixel = helpers.aliasPixel(context.lineWidth);
	        if (isHorizontal) {
	          y1 = y2 = options.position === 'top' ? me.bottom : me.top;
	          y1 += aliasPixel;
	          y2 += aliasPixel;
	        } else {
	          x1 = x2 = options.position === 'left' ? me.right : me.left;
	          x1 += aliasPixel;
	          x2 += aliasPixel;
	        }
	        context.beginPath();
	        context.moveTo(x1, y1);
	        context.lineTo(x2, y2);
	        context.stroke();
	      }
	    }
	  });
	};


/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	module.exports = function(Chart) {
	  var helpers = Chart.helpers;
	  Chart.defaults.global.title = {
	    display: false,
	    position: 'top',
	    fullWidth: true,
	    fontStyle: 'bold',
	    padding: 10,
	    text: ''
	  };
	  var noop = helpers.noop;
	  Chart.Title = Chart.Element.extend({
	    initialize: function(config) {
	      var me = this;
	      helpers.extend(me, config);
	      me.options = helpers.configMerge(Chart.defaults.global.title, config.options);
	      me.legendHitBoxes = [];
	    },
	    beforeUpdate: function() {
	      var chartOpts = this.chart.options;
	      if (chartOpts && chartOpts.title) {
	        this.options = helpers.configMerge(Chart.defaults.global.title, chartOpts.title);
	      }
	    },
	    update: function(maxWidth, maxHeight, margins) {
	      var me = this;
	      me.beforeUpdate();
	      me.maxWidth = maxWidth;
	      me.maxHeight = maxHeight;
	      me.margins = margins;
	      me.beforeSetDimensions();
	      me.setDimensions();
	      me.afterSetDimensions();
	      me.beforeBuildLabels();
	      me.buildLabels();
	      me.afterBuildLabels();
	      me.beforeFit();
	      me.fit();
	      me.afterFit();
	      me.afterUpdate();
	      return me.minSize;
	    },
	    afterUpdate: noop,
	    beforeSetDimensions: noop,
	    setDimensions: function() {
	      var me = this;
	      if (me.isHorizontal()) {
	        me.width = me.maxWidth;
	        me.left = 0;
	        me.right = me.width;
	      } else {
	        me.height = me.maxHeight;
	        me.top = 0;
	        me.bottom = me.height;
	      }
	      me.paddingLeft = 0;
	      me.paddingTop = 0;
	      me.paddingRight = 0;
	      me.paddingBottom = 0;
	      me.minSize = {
	        width: 0,
	        height: 0
	      };
	    },
	    afterSetDimensions: noop,
	    beforeBuildLabels: noop,
	    buildLabels: noop,
	    afterBuildLabels: noop,
	    beforeFit: noop,
	    fit: function() {
	      var me = this,
	          valueOrDefault = helpers.getValueOrDefault,
	          opts = me.options,
	          globalDefaults = Chart.defaults.global,
	          display = opts.display,
	          fontSize = valueOrDefault(opts.fontSize, globalDefaults.defaultFontSize),
	          minSize = me.minSize;
	      if (me.isHorizontal()) {
	        minSize.width = me.maxWidth;
	        minSize.height = display ? fontSize + (opts.padding * 2) : 0;
	      } else {
	        minSize.width = display ? fontSize + (opts.padding * 2) : 0;
	        minSize.height = me.maxHeight;
	      }
	      me.width = minSize.width;
	      me.height = minSize.height;
	    },
	    afterFit: noop,
	    isHorizontal: function() {
	      var pos = this.options.position;
	      return pos === 'top' || pos === 'bottom';
	    },
	    draw: function() {
	      var me = this,
	          ctx = me.ctx,
	          valueOrDefault = helpers.getValueOrDefault,
	          opts = me.options,
	          globalDefaults = Chart.defaults.global;
	      if (opts.display) {
	        var fontSize = valueOrDefault(opts.fontSize, globalDefaults.defaultFontSize),
	            fontStyle = valueOrDefault(opts.fontStyle, globalDefaults.defaultFontStyle),
	            fontFamily = valueOrDefault(opts.fontFamily, globalDefaults.defaultFontFamily),
	            titleFont = helpers.fontString(fontSize, fontStyle, fontFamily),
	            rotation = 0,
	            titleX,
	            titleY,
	            top = me.top,
	            left = me.left,
	            bottom = me.bottom,
	            right = me.right;
	        ctx.fillStyle = valueOrDefault(opts.fontColor, globalDefaults.defaultFontColor);
	        ctx.font = titleFont;
	        if (me.isHorizontal()) {
	          titleX = left + ((right - left) / 2);
	          titleY = top + ((bottom - top) / 2);
	        } else {
	          titleX = opts.position === 'left' ? left + (fontSize / 2) : right - (fontSize / 2);
	          titleY = top + ((bottom - top) / 2);
	          rotation = Math.PI * (opts.position === 'left' ? -0.5 : 0.5);
	        }
	        ctx.save();
	        ctx.translate(titleX, titleY);
	        ctx.rotate(rotation);
	        ctx.textAlign = 'center';
	        ctx.textBaseline = 'middle';
	        ctx.fillText(opts.text, 0, 0);
	        ctx.restore();
	      }
	    }
	  });
	  Chart.plugins.register({beforeInit: function(chartInstance) {
	      var opts = chartInstance.options;
	      var titleOpts = opts.title;
	      if (titleOpts) {
	        chartInstance.titleBlock = new Chart.Title({
	          ctx: chartInstance.chart.ctx,
	          options: titleOpts,
	          chart: chartInstance
	        });
	        Chart.layoutService.addBox(chartInstance, chartInstance.titleBlock);
	      }
	    }});
	};


/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	module.exports = function(Chart) {
	  var helpers = Chart.helpers;
	  var noop = helpers.noop;
	  Chart.defaults.global.legend = {
	    display: true,
	    position: 'top',
	    fullWidth: true,
	    reverse: false,
	    onClick: function(e, legendItem) {
	      var index = legendItem.datasetIndex;
	      var ci = this.chart;
	      var meta = ci.getDatasetMeta(index);
	      meta.hidden = meta.hidden === null ? !ci.data.datasets[$traceurRuntime.toProperty(index)].hidden : null;
	      ci.update();
	    },
	    onHover: null,
	    labels: {
	      boxWidth: 40,
	      padding: 10,
	      generateLabels: function(chart) {
	        var data = chart.data;
	        return helpers.isArray(data.datasets) ? data.datasets.map(function(dataset, i) {
	          return {
	            text: dataset.label,
	            fillStyle: (!helpers.isArray(dataset.backgroundColor) ? dataset.backgroundColor : dataset.backgroundColor[0]),
	            hidden: !chart.isDatasetVisible(i),
	            lineCap: dataset.borderCapStyle,
	            lineDash: dataset.borderDash,
	            lineDashOffset: dataset.borderDashOffset,
	            lineJoin: dataset.borderJoinStyle,
	            lineWidth: dataset.borderWidth,
	            strokeStyle: dataset.borderColor,
	            pointStyle: dataset.pointStyle,
	            datasetIndex: i
	          };
	        }, this) : [];
	      }
	    }
	  };
	  Chart.Legend = Chart.Element.extend({
	    initialize: function(config) {
	      helpers.extend(this, config);
	      this.legendHitBoxes = [];
	      this.doughnutMode = false;
	    },
	    beforeUpdate: noop,
	    update: function(maxWidth, maxHeight, margins) {
	      var me = this;
	      me.beforeUpdate();
	      me.maxWidth = maxWidth;
	      me.maxHeight = maxHeight;
	      me.margins = margins;
	      me.beforeSetDimensions();
	      me.setDimensions();
	      me.afterSetDimensions();
	      me.beforeBuildLabels();
	      me.buildLabels();
	      me.afterBuildLabels();
	      me.beforeFit();
	      me.fit();
	      me.afterFit();
	      me.afterUpdate();
	      return me.minSize;
	    },
	    afterUpdate: noop,
	    beforeSetDimensions: noop,
	    setDimensions: function() {
	      var me = this;
	      if (me.isHorizontal()) {
	        me.width = me.maxWidth;
	        me.left = 0;
	        me.right = me.width;
	      } else {
	        me.height = me.maxHeight;
	        me.top = 0;
	        me.bottom = me.height;
	      }
	      me.paddingLeft = 0;
	      me.paddingTop = 0;
	      me.paddingRight = 0;
	      me.paddingBottom = 0;
	      me.minSize = {
	        width: 0,
	        height: 0
	      };
	    },
	    afterSetDimensions: noop,
	    beforeBuildLabels: noop,
	    buildLabels: function() {
	      var me = this;
	      me.legendItems = me.options.labels.generateLabels.call(me, me.chart);
	      if (me.options.reverse) {
	        me.legendItems.reverse();
	      }
	    },
	    afterBuildLabels: noop,
	    beforeFit: noop,
	    fit: function() {
	      var me = this;
	      var opts = me.options;
	      var labelOpts = opts.labels;
	      var display = opts.display;
	      var ctx = me.ctx;
	      var globalDefault = Chart.defaults.global,
	          itemOrDefault = helpers.getValueOrDefault,
	          fontSize = itemOrDefault(labelOpts.fontSize, globalDefault.defaultFontSize),
	          fontStyle = itemOrDefault(labelOpts.fontStyle, globalDefault.defaultFontStyle),
	          fontFamily = itemOrDefault(labelOpts.fontFamily, globalDefault.defaultFontFamily),
	          labelFont = helpers.fontString(fontSize, fontStyle, fontFamily);
	      var hitboxes = me.legendHitBoxes = [];
	      var minSize = me.minSize;
	      var isHorizontal = me.isHorizontal();
	      if (isHorizontal) {
	        minSize.width = me.maxWidth;
	        minSize.height = display ? 10 : 0;
	      } else {
	        minSize.width = display ? 10 : 0;
	        minSize.height = me.maxHeight;
	      }
	      if (display) {
	        ctx.font = labelFont;
	        if (isHorizontal) {
	          var lineWidths = me.lineWidths = [0];
	          var totalHeight = me.legendItems.length ? fontSize + (labelOpts.padding) : 0;
	          ctx.textAlign = 'left';
	          ctx.textBaseline = 'top';
	          helpers.each(me.legendItems, function(legendItem, i) {
	            var $__0,
	                $__1,
	                $__2,
	                $__3;
	            var boxWidth = labelOpts.usePointStyle ? fontSize * Math.sqrt(2) : labelOpts.boxWidth;
	            var width = boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;
	            if (lineWidths[$traceurRuntime.toProperty(lineWidths.length - 1)] + width + labelOpts.padding >= me.width) {
	              totalHeight += fontSize + (labelOpts.padding);
	              $traceurRuntime.setProperty(lineWidths, lineWidths.length, me.left);
	            }
	            $traceurRuntime.setProperty(hitboxes, i, {
	              left: 0,
	              top: 0,
	              width: width,
	              height: fontSize
	            });
	            ($__0 = lineWidths.length, $__1 = labelOpts.padding, $__2 = lineWidths[$traceurRuntime.toProperty($__0 - 1)], $__3 = $__2 + width + $__1, $traceurRuntime.setProperty(lineWidths, $__0 - 1, $__3), $__3);
	          });
	          minSize.height += totalHeight;
	        } else {
	          var vPadding = labelOpts.padding;
	          var columnWidths = me.columnWidths = [];
	          var totalWidth = labelOpts.padding;
	          var currentColWidth = 0;
	          var currentColHeight = 0;
	          var itemHeight = fontSize + vPadding;
	          helpers.each(me.legendItems, function(legendItem, i) {
	            var boxWidth = labelOpts.usePointStyle ? 2 * labelOpts.boxWidth : labelOpts.boxWidth;
	            var itemWidth = boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;
	            if (currentColHeight + itemHeight > minSize.height) {
	              totalWidth += currentColWidth + labelOpts.padding;
	              columnWidths.push(currentColWidth);
	              currentColWidth = 0;
	              currentColHeight = 0;
	            }
	            currentColWidth = Math.max(currentColWidth, itemWidth);
	            currentColHeight += itemHeight;
	            $traceurRuntime.setProperty(hitboxes, i, {
	              left: 0,
	              top: 0,
	              width: itemWidth,
	              height: fontSize
	            });
	          });
	          totalWidth += currentColWidth;
	          columnWidths.push(currentColWidth);
	          minSize.width += totalWidth;
	        }
	      }
	      me.width = minSize.width;
	      me.height = minSize.height;
	    },
	    afterFit: noop,
	    isHorizontal: function() {
	      return this.options.position === 'top' || this.options.position === 'bottom';
	    },
	    draw: function() {
	      var me = this;
	      var opts = me.options;
	      var labelOpts = opts.labels;
	      var globalDefault = Chart.defaults.global,
	          lineDefault = globalDefault.elements.line,
	          legendWidth = me.width,
	          lineWidths = me.lineWidths;
	      if (opts.display) {
	        var ctx = me.ctx,
	            cursor,
	            itemOrDefault = helpers.getValueOrDefault,
	            fontColor = itemOrDefault(labelOpts.fontColor, globalDefault.defaultFontColor),
	            fontSize = itemOrDefault(labelOpts.fontSize, globalDefault.defaultFontSize),
	            fontStyle = itemOrDefault(labelOpts.fontStyle, globalDefault.defaultFontStyle),
	            fontFamily = itemOrDefault(labelOpts.fontFamily, globalDefault.defaultFontFamily),
	            labelFont = helpers.fontString(fontSize, fontStyle, fontFamily);
	        ctx.textAlign = 'left';
	        ctx.textBaseline = 'top';
	        ctx.lineWidth = 0.5;
	        ctx.strokeStyle = fontColor;
	        ctx.fillStyle = fontColor;
	        ctx.font = labelFont;
	        var boxWidth = labelOpts.boxWidth,
	            hitboxes = me.legendHitBoxes;
	        var drawLegendBox = function(x, y, legendItem) {
	          if (isNaN(boxWidth) || boxWidth <= 0) {
	            return;
	          }
	          ctx.save();
	          ctx.fillStyle = itemOrDefault(legendItem.fillStyle, globalDefault.defaultColor);
	          ctx.lineCap = itemOrDefault(legendItem.lineCap, lineDefault.borderCapStyle);
	          ctx.lineDashOffset = itemOrDefault(legendItem.lineDashOffset, lineDefault.borderDashOffset);
	          ctx.lineJoin = itemOrDefault(legendItem.lineJoin, lineDefault.borderJoinStyle);
	          ctx.lineWidth = itemOrDefault(legendItem.lineWidth, lineDefault.borderWidth);
	          ctx.strokeStyle = itemOrDefault(legendItem.strokeStyle, globalDefault.defaultColor);
	          var isLineWidthZero = (itemOrDefault(legendItem.lineWidth, lineDefault.borderWidth) === 0);
	          if (ctx.setLineDash) {
	            ctx.setLineDash(itemOrDefault(legendItem.lineDash, lineDefault.borderDash));
	          }
	          if (opts.labels && opts.labels.usePointStyle) {
	            var radius = fontSize * Math.SQRT2 / 2;
	            var offSet = radius / Math.SQRT2;
	            var centerX = x + offSet;
	            var centerY = y + offSet;
	            Chart.canvasHelpers.drawPoint(ctx, legendItem.pointStyle, radius, centerX, centerY);
	          } else {
	            if (!isLineWidthZero) {
	              ctx.strokeRect(x, y, boxWidth, fontSize);
	            }
	            ctx.fillRect(x, y, boxWidth, fontSize);
	          }
	          ctx.restore();
	        };
	        var fillText = function(x, y, legendItem, textWidth) {
	          ctx.fillText(legendItem.text, boxWidth + (fontSize / 2) + x, y);
	          if (legendItem.hidden) {
	            ctx.beginPath();
	            ctx.lineWidth = 2;
	            ctx.moveTo(boxWidth + (fontSize / 2) + x, y + (fontSize / 2));
	            ctx.lineTo(boxWidth + (fontSize / 2) + x + textWidth, y + (fontSize / 2));
	            ctx.stroke();
	          }
	        };
	        var isHorizontal = me.isHorizontal();
	        if (isHorizontal) {
	          cursor = {
	            x: me.left + ((legendWidth - lineWidths[0]) / 2),
	            y: me.top + labelOpts.padding,
	            line: 0
	          };
	        } else {
	          cursor = {
	            x: me.left + labelOpts.padding,
	            y: me.top + labelOpts.padding,
	            line: 0
	          };
	        }
	        var itemHeight = fontSize + labelOpts.padding;
	        helpers.each(me.legendItems, function(legendItem, i) {
	          var textWidth = ctx.measureText(legendItem.text).width,
	              width = labelOpts.usePointStyle ? fontSize + (fontSize / 2) + textWidth : boxWidth + (fontSize / 2) + textWidth,
	              x = cursor.x,
	              y = cursor.y;
	          if (isHorizontal) {
	            if (x + width >= legendWidth) {
	              y = cursor.y += itemHeight;
	              cursor.line++;
	              x = cursor.x = me.left + ((legendWidth - lineWidths[$traceurRuntime.toProperty(cursor.line)]) / 2);
	            }
	          } else if (y + itemHeight > me.bottom) {
	            x = cursor.x = x + me.columnWidths[$traceurRuntime.toProperty(cursor.line)] + labelOpts.padding;
	            y = cursor.y = me.top;
	            cursor.line++;
	          }
	          drawLegendBox(x, y, legendItem);
	          hitboxes[$traceurRuntime.toProperty(i)].left = x;
	          hitboxes[$traceurRuntime.toProperty(i)].top = y;
	          fillText(x, y, legendItem, textWidth);
	          if (isHorizontal) {
	            cursor.x += width + (labelOpts.padding);
	          } else {
	            cursor.y += itemHeight;
	          }
	        });
	      }
	    },
	    handleEvent: function(e) {
	      var me = this;
	      var opts = me.options;
	      var type = e.type === 'mouseup' ? 'click' : e.type;
	      if (type === 'mousemove') {
	        if (!opts.onHover) {
	          return;
	        }
	      } else if (type === 'click') {
	        if (!opts.onClick) {
	          return;
	        }
	      } else {
	        return;
	      }
	      var position = helpers.getRelativePosition(e, me.chart.chart),
	          x = position.x,
	          y = position.y;
	      if (x >= me.left && x <= me.right && y >= me.top && y <= me.bottom) {
	        var lh = me.legendHitBoxes;
	        for (var i = 0; i < lh.length; ++i) {
	          var hitBox = lh[$traceurRuntime.toProperty(i)];
	          if (x >= hitBox.left && x <= hitBox.left + hitBox.width && y >= hitBox.top && y <= hitBox.top + hitBox.height) {
	            if (type === 'click') {
	              opts.onClick.call(me, e, me.legendItems[$traceurRuntime.toProperty(i)]);
	              break;
	            } else if (type === 'mousemove') {
	              opts.onHover.call(me, e, me.legendItems[$traceurRuntime.toProperty(i)]);
	              break;
	            }
	          }
	        }
	      }
	    }
	  });
	  Chart.plugins.register({beforeInit: function(chartInstance) {
	      var opts = chartInstance.options;
	      var legendOpts = opts.legend;
	      if (legendOpts) {
	        chartInstance.legend = new Chart.Legend({
	          ctx: chartInstance.chart.ctx,
	          options: legendOpts,
	          chart: chartInstance
	        });
	        Chart.layoutService.addBox(chartInstance, chartInstance.legend);
	      }
	    }});
	};


/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	module.exports = function(Chart) {
	  var helpers = Chart.helpers;
	  Chart.defaults.global.tooltips = {
	    enabled: true,
	    custom: null,
	    mode: 'single',
	    backgroundColor: 'rgba(0,0,0,0.8)',
	    titleFontStyle: 'bold',
	    titleSpacing: 2,
	    titleMarginBottom: 6,
	    titleFontColor: '#fff',
	    titleAlign: 'left',
	    bodySpacing: 2,
	    bodyFontColor: '#fff',
	    bodyAlign: 'left',
	    footerFontStyle: 'bold',
	    footerSpacing: 2,
	    footerMarginTop: 6,
	    footerFontColor: '#fff',
	    footerAlign: 'left',
	    yPadding: 6,
	    xPadding: 6,
	    yAlign: 'center',
	    xAlign: 'center',
	    caretSize: 5,
	    cornerRadius: 6,
	    multiKeyBackground: '#fff',
	    callbacks: {
	      beforeTitle: helpers.noop,
	      title: function(tooltipItems, data) {
	        var title = '';
	        var labels = data.labels;
	        var labelCount = labels ? labels.length : 0;
	        if (tooltipItems.length > 0) {
	          var item = tooltipItems[0];
	          if (item.xLabel) {
	            title = item.xLabel;
	          } else if (labelCount > 0 && item.index < labelCount) {
	            title = labels[$traceurRuntime.toProperty(item.index)];
	          }
	        }
	        return title;
	      },
	      afterTitle: helpers.noop,
	      beforeBody: helpers.noop,
	      beforeLabel: helpers.noop,
	      label: function(tooltipItem, data) {
	        var datasetLabel = data.datasets[$traceurRuntime.toProperty(tooltipItem.datasetIndex)].label || '';
	        return datasetLabel + ': ' + tooltipItem.yLabel;
	      },
	      labelColor: function(tooltipItem, chartInstance) {
	        var meta = chartInstance.getDatasetMeta(tooltipItem.datasetIndex);
	        var activeElement = meta.data[$traceurRuntime.toProperty(tooltipItem.index)];
	        var view = activeElement._view;
	        return {
	          borderColor: view.borderColor,
	          backgroundColor: view.backgroundColor
	        };
	      },
	      afterLabel: helpers.noop,
	      afterBody: helpers.noop,
	      beforeFooter: helpers.noop,
	      footer: helpers.noop,
	      afterFooter: helpers.noop
	    }
	  };
	  function pushOrConcat(base, toPush) {
	    if (toPush) {
	      if (helpers.isArray(toPush)) {
	        Array.prototype.push.apply(base, toPush);
	      } else {
	        base.push(toPush);
	      }
	    }
	    return base;
	  }
	  function getAveragePosition(elements) {
	    if (!elements.length) {
	      return false;
	    }
	    var i,
	        len;
	    var xPositions = [];
	    var yPositions = [];
	    for (i = 0, len = elements.length; i < len; ++i) {
	      var el = elements[$traceurRuntime.toProperty(i)];
	      if (el && el.hasValue()) {
	        var pos = el.tooltipPosition();
	        xPositions.push(pos.x);
	        yPositions.push(pos.y);
	      }
	    }
	    var x = 0,
	        y = 0;
	    for (i = 0; i < xPositions.length; ++i) {
	      if (xPositions[$traceurRuntime.toProperty(i)]) {
	        x += xPositions[$traceurRuntime.toProperty(i)];
	        y += yPositions[$traceurRuntime.toProperty(i)];
	      }
	    }
	    return {
	      x: Math.round(x / xPositions.length),
	      y: Math.round(y / xPositions.length)
	    };
	  }
	  function createTooltipItem(element) {
	    var xScale = element._xScale;
	    var yScale = element._yScale || element._scale;
	    var index = element._index,
	        datasetIndex = element._datasetIndex;
	    return {
	      xLabel: xScale ? xScale.getLabelForIndex(index, datasetIndex) : '',
	      yLabel: yScale ? yScale.getLabelForIndex(index, datasetIndex) : '',
	      index: index,
	      datasetIndex: datasetIndex
	    };
	  }
	  Chart.Tooltip = Chart.Element.extend({
	    initialize: function() {
	      var me = this;
	      var globalDefaults = Chart.defaults.global;
	      var tooltipOpts = me._options;
	      var getValueOrDefault = helpers.getValueOrDefault;
	      helpers.extend(me, {_model: {
	          xPadding: tooltipOpts.xPadding,
	          yPadding: tooltipOpts.yPadding,
	          xAlign: tooltipOpts.xAlign,
	          yAlign: tooltipOpts.yAlign,
	          bodyFontColor: tooltipOpts.bodyFontColor,
	          _bodyFontFamily: getValueOrDefault(tooltipOpts.bodyFontFamily, globalDefaults.defaultFontFamily),
	          _bodyFontStyle: getValueOrDefault(tooltipOpts.bodyFontStyle, globalDefaults.defaultFontStyle),
	          _bodyAlign: tooltipOpts.bodyAlign,
	          bodyFontSize: getValueOrDefault(tooltipOpts.bodyFontSize, globalDefaults.defaultFontSize),
	          bodySpacing: tooltipOpts.bodySpacing,
	          titleFontColor: tooltipOpts.titleFontColor,
	          _titleFontFamily: getValueOrDefault(tooltipOpts.titleFontFamily, globalDefaults.defaultFontFamily),
	          _titleFontStyle: getValueOrDefault(tooltipOpts.titleFontStyle, globalDefaults.defaultFontStyle),
	          titleFontSize: getValueOrDefault(tooltipOpts.titleFontSize, globalDefaults.defaultFontSize),
	          _titleAlign: tooltipOpts.titleAlign,
	          titleSpacing: tooltipOpts.titleSpacing,
	          titleMarginBottom: tooltipOpts.titleMarginBottom,
	          footerFontColor: tooltipOpts.footerFontColor,
	          _footerFontFamily: getValueOrDefault(tooltipOpts.footerFontFamily, globalDefaults.defaultFontFamily),
	          _footerFontStyle: getValueOrDefault(tooltipOpts.footerFontStyle, globalDefaults.defaultFontStyle),
	          footerFontSize: getValueOrDefault(tooltipOpts.footerFontSize, globalDefaults.defaultFontSize),
	          _footerAlign: tooltipOpts.footerAlign,
	          footerSpacing: tooltipOpts.footerSpacing,
	          footerMarginTop: tooltipOpts.footerMarginTop,
	          caretSize: tooltipOpts.caretSize,
	          cornerRadius: tooltipOpts.cornerRadius,
	          backgroundColor: tooltipOpts.backgroundColor,
	          opacity: 0,
	          legendColorBackground: tooltipOpts.multiKeyBackground
	        }});
	    },
	    getTitle: function() {
	      var me = this;
	      var opts = me._options;
	      var callbacks = opts.callbacks;
	      var beforeTitle = callbacks.beforeTitle.apply(me, arguments),
	          title = callbacks.title.apply(me, arguments),
	          afterTitle = callbacks.afterTitle.apply(me, arguments);
	      var lines = [];
	      lines = pushOrConcat(lines, beforeTitle);
	      lines = pushOrConcat(lines, title);
	      lines = pushOrConcat(lines, afterTitle);
	      return lines;
	    },
	    getBeforeBody: function() {
	      var lines = this._options.callbacks.beforeBody.apply(this, arguments);
	      return helpers.isArray(lines) ? lines : lines !== undefined ? [lines] : [];
	    },
	    getBody: function(tooltipItems, data) {
	      var me = this;
	      var callbacks = me._options.callbacks;
	      var bodyItems = [];
	      helpers.each(tooltipItems, function(tooltipItem) {
	        var bodyItem = {
	          before: [],
	          lines: [],
	          after: []
	        };
	        pushOrConcat(bodyItem.before, callbacks.beforeLabel.call(me, tooltipItem, data));
	        pushOrConcat(bodyItem.lines, callbacks.label.call(me, tooltipItem, data));
	        pushOrConcat(bodyItem.after, callbacks.afterLabel.call(me, tooltipItem, data));
	        bodyItems.push(bodyItem);
	      });
	      return bodyItems;
	    },
	    getAfterBody: function() {
	      var lines = this._options.callbacks.afterBody.apply(this, arguments);
	      return helpers.isArray(lines) ? lines : lines !== undefined ? [lines] : [];
	    },
	    getFooter: function() {
	      var me = this;
	      var callbacks = me._options.callbacks;
	      var beforeFooter = callbacks.beforeFooter.apply(me, arguments);
	      var footer = callbacks.footer.apply(me, arguments);
	      var afterFooter = callbacks.afterFooter.apply(me, arguments);
	      var lines = [];
	      lines = pushOrConcat(lines, beforeFooter);
	      lines = pushOrConcat(lines, footer);
	      lines = pushOrConcat(lines, afterFooter);
	      return lines;
	    },
	    update: function(changed) {
	      var me = this;
	      var opts = me._options;
	      var model = me._model;
	      var active = me._active;
	      var data = me._data;
	      var chartInstance = me._chartInstance;
	      var i,
	          len;
	      if (active.length) {
	        model.opacity = 1;
	        var labelColors = [],
	            tooltipPosition = getAveragePosition(active);
	        var tooltipItems = [];
	        for (i = 0, len = active.length; i < len; ++i) {
	          tooltipItems.push(createTooltipItem(active[$traceurRuntime.toProperty(i)]));
	        }
	        if (opts.itemSort) {
	          tooltipItems = tooltipItems.sort(function(a, b) {
	            return opts.itemSort(a, b, data);
	          });
	        }
	        if (active.length > 1) {
	          helpers.each(tooltipItems, function(tooltipItem) {
	            labelColors.push(opts.callbacks.labelColor.call(me, tooltipItem, chartInstance));
	          });
	        }
	        helpers.extend(model, {
	          title: me.getTitle(tooltipItems, data),
	          beforeBody: me.getBeforeBody(tooltipItems, data),
	          body: me.getBody(tooltipItems, data),
	          afterBody: me.getAfterBody(tooltipItems, data),
	          footer: me.getFooter(tooltipItems, data),
	          x: Math.round(tooltipPosition.x),
	          y: Math.round(tooltipPosition.y),
	          caretPadding: helpers.getValueOrDefault(tooltipPosition.padding, 2),
	          labelColors: labelColors
	        });
	        var tooltipSize = me.getTooltipSize(model);
	        me.determineAlignment(tooltipSize);
	        helpers.extend(model, me.getBackgroundPoint(model, tooltipSize));
	      } else {
	        me._model.opacity = 0;
	      }
	      if (changed && opts.custom) {
	        opts.custom.call(me, model);
	      }
	      return me;
	    },
	    getTooltipSize: function(vm) {
	      var ctx = this._chart.ctx;
	      var size = {
	        height: vm.yPadding * 2,
	        width: 0
	      };
	      var body = vm.body;
	      var combinedBodyLength = body.reduce(function(count, bodyItem) {
	        return count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length;
	      }, 0);
	      combinedBodyLength += vm.beforeBody.length + vm.afterBody.length;
	      var titleLineCount = vm.title.length;
	      var footerLineCount = vm.footer.length;
	      var titleFontSize = vm.titleFontSize,
	          bodyFontSize = vm.bodyFontSize,
	          footerFontSize = vm.footerFontSize;
	      size.height += titleLineCount * titleFontSize;
	      size.height += (titleLineCount - 1) * vm.titleSpacing;
	      size.height += titleLineCount ? vm.titleMarginBottom : 0;
	      size.height += combinedBodyLength * bodyFontSize;
	      size.height += combinedBodyLength ? (combinedBodyLength - 1) * vm.bodySpacing : 0;
	      size.height += footerLineCount ? vm.footerMarginTop : 0;
	      size.height += footerLineCount * (footerFontSize);
	      size.height += footerLineCount ? (footerLineCount - 1) * vm.footerSpacing : 0;
	      var widthPadding = 0;
	      var maxLineWidth = function(line) {
	        size.width = Math.max(size.width, ctx.measureText(line).width + widthPadding);
	      };
	      ctx.font = helpers.fontString(titleFontSize, vm._titleFontStyle, vm._titleFontFamily);
	      helpers.each(vm.title, maxLineWidth);
	      ctx.font = helpers.fontString(bodyFontSize, vm._bodyFontStyle, vm._bodyFontFamily);
	      helpers.each(vm.beforeBody.concat(vm.afterBody), maxLineWidth);
	      widthPadding = body.length > 1 ? (bodyFontSize + 2) : 0;
	      helpers.each(body, function(bodyItem) {
	        helpers.each(bodyItem.before, maxLineWidth);
	        helpers.each(bodyItem.lines, maxLineWidth);
	        helpers.each(bodyItem.after, maxLineWidth);
	      });
	      widthPadding = 0;
	      ctx.font = helpers.fontString(footerFontSize, vm._footerFontStyle, vm._footerFontFamily);
	      helpers.each(vm.footer, maxLineWidth);
	      size.width += 2 * vm.xPadding;
	      return size;
	    },
	    determineAlignment: function(size) {
	      var me = this;
	      var model = me._model;
	      var chart = me._chart;
	      var chartArea = me._chartInstance.chartArea;
	      if (model.y < size.height) {
	        model.yAlign = 'top';
	      } else if (model.y > (chart.height - size.height)) {
	        model.yAlign = 'bottom';
	      }
	      var lf,
	          rf;
	      var olf,
	          orf;
	      var yf;
	      var midX = (chartArea.left + chartArea.right) / 2;
	      var midY = (chartArea.top + chartArea.bottom) / 2;
	      if (model.yAlign === 'center') {
	        lf = function(x) {
	          return x <= midX;
	        };
	        rf = function(x) {
	          return x > midX;
	        };
	      } else {
	        lf = function(x) {
	          return x <= (size.width / 2);
	        };
	        rf = function(x) {
	          return x >= (chart.width - (size.width / 2));
	        };
	      }
	      olf = function(x) {
	        return x + size.width > chart.width;
	      };
	      orf = function(x) {
	        return x - size.width < 0;
	      };
	      yf = function(y) {
	        return y <= midY ? 'top' : 'bottom';
	      };
	      if (lf(model.x)) {
	        model.xAlign = 'left';
	        if (olf(model.x)) {
	          model.xAlign = 'center';
	          model.yAlign = yf(model.y);
	        }
	      } else if (rf(model.x)) {
	        model.xAlign = 'right';
	        if (orf(model.x)) {
	          model.xAlign = 'center';
	          model.yAlign = yf(model.y);
	        }
	      }
	    },
	    getBackgroundPoint: function(vm, size) {
	      var pt = {
	        x: vm.x,
	        y: vm.y
	      };
	      var caretSize = vm.caretSize,
	          caretPadding = vm.caretPadding,
	          cornerRadius = vm.cornerRadius,
	          xAlign = vm.xAlign,
	          yAlign = vm.yAlign,
	          paddingAndSize = caretSize + caretPadding,
	          radiusAndPadding = cornerRadius + caretPadding;
	      if (xAlign === 'right') {
	        pt.x -= size.width;
	      } else if (xAlign === 'center') {
	        pt.x -= (size.width / 2);
	      }
	      if (yAlign === 'top') {
	        pt.y += paddingAndSize;
	      } else if (yAlign === 'bottom') {
	        pt.y -= size.height + paddingAndSize;
	      } else {
	        pt.y -= (size.height / 2);
	      }
	      if (yAlign === 'center') {
	        if (xAlign === 'left') {
	          pt.x += paddingAndSize;
	        } else if (xAlign === 'right') {
	          pt.x -= paddingAndSize;
	        }
	      } else if (xAlign === 'left') {
	        pt.x -= radiusAndPadding;
	      } else if (xAlign === 'right') {
	        pt.x += radiusAndPadding;
	      }
	      return pt;
	    },
	    drawCaret: function(tooltipPoint, size, opacity) {
	      var vm = this._view;
	      var ctx = this._chart.ctx;
	      var x1,
	          x2,
	          x3;
	      var y1,
	          y2,
	          y3;
	      var caretSize = vm.caretSize;
	      var cornerRadius = vm.cornerRadius;
	      var xAlign = vm.xAlign,
	          yAlign = vm.yAlign;
	      var ptX = tooltipPoint.x,
	          ptY = tooltipPoint.y;
	      var width = size.width,
	          height = size.height;
	      if (yAlign === 'center') {
	        if (xAlign === 'left') {
	          x1 = ptX;
	          x2 = x1 - caretSize;
	          x3 = x1;
	        } else {
	          x1 = ptX + width;
	          x2 = x1 + caretSize;
	          x3 = x1;
	        }
	        y2 = ptY + (height / 2);
	        y1 = y2 - caretSize;
	        y3 = y2 + caretSize;
	      } else {
	        if (xAlign === 'left') {
	          x1 = ptX + cornerRadius;
	          x2 = x1 + caretSize;
	          x3 = x2 + caretSize;
	        } else if (xAlign === 'right') {
	          x1 = ptX + width - cornerRadius;
	          x2 = x1 - caretSize;
	          x3 = x2 - caretSize;
	        } else {
	          x2 = ptX + (width / 2);
	          x1 = x2 - caretSize;
	          x3 = x2 + caretSize;
	        }
	        if (yAlign === 'top') {
	          y1 = ptY;
	          y2 = y1 - caretSize;
	          y3 = y1;
	        } else {
	          y1 = ptY + height;
	          y2 = y1 + caretSize;
	          y3 = y1;
	        }
	      }
	      var bgColor = helpers.color(vm.backgroundColor);
	      ctx.fillStyle = bgColor.alpha(opacity * bgColor.alpha()).rgbString();
	      ctx.beginPath();
	      ctx.moveTo(x1, y1);
	      ctx.lineTo(x2, y2);
	      ctx.lineTo(x3, y3);
	      ctx.closePath();
	      ctx.fill();
	    },
	    drawTitle: function(pt, vm, ctx, opacity) {
	      var title = vm.title;
	      if (title.length) {
	        ctx.textAlign = vm._titleAlign;
	        ctx.textBaseline = 'top';
	        var titleFontSize = vm.titleFontSize,
	            titleSpacing = vm.titleSpacing;
	        var titleFontColor = helpers.color(vm.titleFontColor);
	        ctx.fillStyle = titleFontColor.alpha(opacity * titleFontColor.alpha()).rgbString();
	        ctx.font = helpers.fontString(titleFontSize, vm._titleFontStyle, vm._titleFontFamily);
	        var i,
	            len;
	        for (i = 0, len = title.length; i < len; ++i) {
	          ctx.fillText(title[$traceurRuntime.toProperty(i)], pt.x, pt.y);
	          pt.y += titleFontSize + titleSpacing;
	          if (i + 1 === title.length) {
	            pt.y += vm.titleMarginBottom - titleSpacing;
	          }
	        }
	      }
	    },
	    drawBody: function(pt, vm, ctx, opacity) {
	      var bodyFontSize = vm.bodyFontSize;
	      var bodySpacing = vm.bodySpacing;
	      var body = vm.body;
	      ctx.textAlign = vm._bodyAlign;
	      ctx.textBaseline = 'top';
	      var bodyFontColor = helpers.color(vm.bodyFontColor);
	      var textColor = bodyFontColor.alpha(opacity * bodyFontColor.alpha()).rgbString();
	      ctx.fillStyle = textColor;
	      ctx.font = helpers.fontString(bodyFontSize, vm._bodyFontStyle, vm._bodyFontFamily);
	      var xLinePadding = 0;
	      var fillLineOfText = function(line) {
	        ctx.fillText(line, pt.x + xLinePadding, pt.y);
	        pt.y += bodyFontSize + bodySpacing;
	      };
	      helpers.each(vm.beforeBody, fillLineOfText);
	      var drawColorBoxes = body.length > 1;
	      xLinePadding = drawColorBoxes ? (bodyFontSize + 2) : 0;
	      helpers.each(body, function(bodyItem, i) {
	        helpers.each(bodyItem.before, fillLineOfText);
	        helpers.each(bodyItem.lines, function(line) {
	          if (drawColorBoxes) {
	            ctx.fillStyle = helpers.color(vm.legendColorBackground).alpha(opacity).rgbaString();
	            ctx.fillRect(pt.x, pt.y, bodyFontSize, bodyFontSize);
	            ctx.strokeStyle = helpers.color(vm.labelColors[$traceurRuntime.toProperty(i)].borderColor).alpha(opacity).rgbaString();
	            ctx.strokeRect(pt.x, pt.y, bodyFontSize, bodyFontSize);
	            ctx.fillStyle = helpers.color(vm.labelColors[$traceurRuntime.toProperty(i)].backgroundColor).alpha(opacity).rgbaString();
	            ctx.fillRect(pt.x + 1, pt.y + 1, bodyFontSize - 2, bodyFontSize - 2);
	            ctx.fillStyle = textColor;
	          }
	          fillLineOfText(line);
	        });
	        helpers.each(bodyItem.after, fillLineOfText);
	      });
	      xLinePadding = 0;
	      helpers.each(vm.afterBody, fillLineOfText);
	      pt.y -= bodySpacing;
	    },
	    drawFooter: function(pt, vm, ctx, opacity) {
	      var footer = vm.footer;
	      if (footer.length) {
	        pt.y += vm.footerMarginTop;
	        ctx.textAlign = vm._footerAlign;
	        ctx.textBaseline = 'top';
	        var footerFontColor = helpers.color(vm.footerFontColor);
	        ctx.fillStyle = footerFontColor.alpha(opacity * footerFontColor.alpha()).rgbString();
	        ctx.font = helpers.fontString(vm.footerFontSize, vm._footerFontStyle, vm._footerFontFamily);
	        helpers.each(footer, function(line) {
	          ctx.fillText(line, pt.x, pt.y);
	          pt.y += vm.footerFontSize + vm.footerSpacing;
	        });
	      }
	    },
	    draw: function() {
	      var ctx = this._chart.ctx;
	      var vm = this._view;
	      if (vm.opacity === 0) {
	        return;
	      }
	      var tooltipSize = this.getTooltipSize(vm);
	      var pt = {
	        x: vm.x,
	        y: vm.y
	      };
	      var opacity = Math.abs(vm.opacity < 1e-3) ? 0 : vm.opacity;
	      if (this._options.enabled) {
	        var bgColor = helpers.color(vm.backgroundColor);
	        ctx.fillStyle = bgColor.alpha(opacity * bgColor.alpha()).rgbString();
	        helpers.drawRoundedRectangle(ctx, pt.x, pt.y, tooltipSize.width, tooltipSize.height, vm.cornerRadius);
	        ctx.fill();
	        this.drawCaret(pt, tooltipSize, opacity);
	        pt.x += vm.xPadding;
	        pt.y += vm.yPadding;
	        this.drawTitle(pt, vm, ctx, opacity);
	        this.drawBody(pt, vm, ctx, opacity);
	        this.drawFooter(pt, vm, ctx, opacity);
	      }
	    }
	  });
	};


/***/ },
/* 37 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	module.exports = function(Chart) {
	  var helpers = Chart.helpers,
	      globalOpts = Chart.defaults.global;
	  globalOpts.elements.arc = {
	    backgroundColor: globalOpts.defaultColor,
	    borderColor: '#fff',
	    borderWidth: 2
	  };
	  Chart.elements.Arc = Chart.Element.extend({
	    inLabelRange: function(mouseX) {
	      var vm = this._view;
	      if (vm) {
	        return (Math.pow(mouseX - vm.x, 2) < Math.pow(vm.radius + vm.hoverRadius, 2));
	      }
	      return false;
	    },
	    inRange: function(chartX, chartY) {
	      var vm = this._view;
	      if (vm) {
	        var pointRelativePosition = helpers.getAngleFromPoint(vm, {
	          x: chartX,
	          y: chartY
	        }),
	            angle = pointRelativePosition.angle,
	            distance = pointRelativePosition.distance;
	        var startAngle = vm.startAngle;
	        var endAngle = vm.endAngle;
	        while (endAngle < startAngle) {
	          endAngle += 2.0 * Math.PI;
	        }
	        while (angle > endAngle) {
	          angle -= 2.0 * Math.PI;
	        }
	        while (angle < startAngle) {
	          angle += 2.0 * Math.PI;
	        }
	        var betweenAngles = (angle >= startAngle && angle <= endAngle),
	            withinRadius = (distance >= vm.innerRadius && distance <= vm.outerRadius);
	        return (betweenAngles && withinRadius);
	      }
	      return false;
	    },
	    tooltipPosition: function() {
	      var vm = this._view;
	      var centreAngle = vm.startAngle + ((vm.endAngle - vm.startAngle) / 2),
	          rangeFromCentre = (vm.outerRadius - vm.innerRadius) / 2 + vm.innerRadius;
	      return {
	        x: vm.x + (Math.cos(centreAngle) * rangeFromCentre),
	        y: vm.y + (Math.sin(centreAngle) * rangeFromCentre)
	      };
	    },
	    draw: function() {
	      var ctx = this._chart.ctx,
	          vm = this._view,
	          sA = vm.startAngle,
	          eA = vm.endAngle;
	      ctx.beginPath();
	      ctx.arc(vm.x, vm.y, vm.outerRadius, sA, eA);
	      ctx.arc(vm.x, vm.y, vm.innerRadius, eA, sA, true);
	      ctx.closePath();
	      ctx.strokeStyle = vm.borderColor;
	      ctx.lineWidth = vm.borderWidth;
	      ctx.fillStyle = vm.backgroundColor;
	      ctx.fill();
	      ctx.lineJoin = 'bevel';
	      if (vm.borderWidth) {
	        ctx.stroke();
	      }
	    }
	  });
	};


/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	module.exports = function(Chart) {
	  var helpers = Chart.helpers;
	  var globalDefaults = Chart.defaults.global;
	  Chart.defaults.global.elements.line = {
	    tension: 0.4,
	    backgroundColor: globalDefaults.defaultColor,
	    borderWidth: 3,
	    borderColor: globalDefaults.defaultColor,
	    borderCapStyle: 'butt',
	    borderDash: [],
	    borderDashOffset: 0.0,
	    borderJoinStyle: 'miter',
	    capBezierPoints: true,
	    fill: true
	  };
	  Chart.elements.Line = Chart.Element.extend({draw: function() {
	      var me = this;
	      var vm = me._view;
	      var spanGaps = vm.spanGaps;
	      var scaleZero = vm.scaleZero;
	      var loop = me._loop;
	      var ctx = me._chart.ctx;
	      ctx.save();
	      function lineToPoint(previousPoint, point) {
	        var pointVM = point._view;
	        if (point._view.steppedLine === true) {
	          ctx.lineTo(pointVM.x, previousPoint._view.y);
	          ctx.lineTo(pointVM.x, pointVM.y);
	        } else if (point._view.tension === 0) {
	          ctx.lineTo(pointVM.x, pointVM.y);
	        } else {
	          ctx.bezierCurveTo(previousPoint._view.controlPointNextX, previousPoint._view.controlPointNextY, pointVM.controlPointPreviousX, pointVM.controlPointPreviousY, pointVM.x, pointVM.y);
	        }
	      }
	      var points = me._children.slice();
	      var lastDrawnIndex = -1;
	      if (loop && points.length) {
	        points.push(points[0]);
	      }
	      var index,
	          current,
	          previous,
	          currentVM;
	      if (points.length && vm.fill) {
	        ctx.beginPath();
	        for (index = 0; index < points.length; ++index) {
	          current = points[$traceurRuntime.toProperty(index)];
	          previous = helpers.previousItem(points, index);
	          currentVM = current._view;
	          if (index === 0) {
	            if (loop) {
	              ctx.moveTo(scaleZero.x, scaleZero.y);
	            } else {
	              ctx.moveTo(currentVM.x, scaleZero);
	            }
	            if (!currentVM.skip) {
	              lastDrawnIndex = index;
	              ctx.lineTo(currentVM.x, currentVM.y);
	            }
	          } else {
	            previous = lastDrawnIndex === -1 ? previous : points[$traceurRuntime.toProperty(lastDrawnIndex)];
	            if (currentVM.skip) {
	              if (!spanGaps && lastDrawnIndex === (index - 1)) {
	                if (loop) {
	                  ctx.lineTo(scaleZero.x, scaleZero.y);
	                } else {
	                  ctx.lineTo(previous._view.x, scaleZero);
	                }
	              }
	            } else {
	              if (lastDrawnIndex !== (index - 1)) {
	                if (spanGaps && lastDrawnIndex !== -1) {
	                  lineToPoint(previous, current);
	                } else if (loop) {
	                  ctx.lineTo(currentVM.x, currentVM.y);
	                } else {
	                  ctx.lineTo(currentVM.x, scaleZero);
	                  ctx.lineTo(currentVM.x, currentVM.y);
	                }
	              } else {
	                lineToPoint(previous, current);
	              }
	              lastDrawnIndex = index;
	            }
	          }
	        }
	        if (!loop && lastDrawnIndex !== -1) {
	          ctx.lineTo(points[$traceurRuntime.toProperty(lastDrawnIndex)]._view.x, scaleZero);
	        }
	        ctx.fillStyle = vm.backgroundColor || globalDefaults.defaultColor;
	        ctx.closePath();
	        ctx.fill();
	      }
	      var globalOptionLineElements = globalDefaults.elements.line;
	      ctx.lineCap = vm.borderCapStyle || globalOptionLineElements.borderCapStyle;
	      if (ctx.setLineDash) {
	        ctx.setLineDash(vm.borderDash || globalOptionLineElements.borderDash);
	      }
	      ctx.lineDashOffset = vm.borderDashOffset || globalOptionLineElements.borderDashOffset;
	      ctx.lineJoin = vm.borderJoinStyle || globalOptionLineElements.borderJoinStyle;
	      ctx.lineWidth = vm.borderWidth || globalOptionLineElements.borderWidth;
	      ctx.strokeStyle = vm.borderColor || globalDefaults.defaultColor;
	      ctx.beginPath();
	      lastDrawnIndex = -1;
	      for (index = 0; index < points.length; ++index) {
	        current = points[$traceurRuntime.toProperty(index)];
	        previous = helpers.previousItem(points, index);
	        currentVM = current._view;
	        if (index === 0) {
	          if (!currentVM.skip) {
	            ctx.moveTo(currentVM.x, currentVM.y);
	            lastDrawnIndex = index;
	          }
	        } else {
	          previous = lastDrawnIndex === -1 ? previous : points[$traceurRuntime.toProperty(lastDrawnIndex)];
	          if (!currentVM.skip) {
	            if ((lastDrawnIndex !== (index - 1) && !spanGaps) || lastDrawnIndex === -1) {
	              ctx.moveTo(currentVM.x, currentVM.y);
	            } else {
	              lineToPoint(previous, current);
	            }
	            lastDrawnIndex = index;
	          }
	        }
	      }
	      ctx.stroke();
	      ctx.restore();
	    }});
	};


/***/ },
/* 39 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	module.exports = function(Chart) {
	  var helpers = Chart.helpers,
	      globalOpts = Chart.defaults.global,
	      defaultColor = globalOpts.defaultColor;
	  globalOpts.elements.point = {
	    radius: 3,
	    pointStyle: 'circle',
	    backgroundColor: defaultColor,
	    borderWidth: 1,
	    borderColor: defaultColor,
	    hitRadius: 1,
	    hoverRadius: 4,
	    hoverBorderWidth: 1
	  };
	  Chart.elements.Point = Chart.Element.extend({
	    inRange: function(mouseX, mouseY) {
	      var vm = this._view;
	      return vm ? ((Math.pow(mouseX - vm.x, 2) + Math.pow(mouseY - vm.y, 2)) < Math.pow(vm.hitRadius + vm.radius, 2)) : false;
	    },
	    inLabelRange: function(mouseX) {
	      var vm = this._view;
	      return vm ? (Math.pow(mouseX - vm.x, 2) < Math.pow(vm.radius + vm.hitRadius, 2)) : false;
	    },
	    tooltipPosition: function() {
	      var vm = this._view;
	      return {
	        x: vm.x,
	        y: vm.y,
	        padding: vm.radius + vm.borderWidth
	      };
	    },
	    draw: function() {
	      var vm = this._view;
	      var ctx = this._chart.ctx;
	      var pointStyle = vm.pointStyle;
	      var radius = vm.radius;
	      var x = vm.x;
	      var y = vm.y;
	      if (vm.skip) {
	        return;
	      }
	      ctx.strokeStyle = vm.borderColor || defaultColor;
	      ctx.lineWidth = helpers.getValueOrDefault(vm.borderWidth, globalOpts.elements.point.borderWidth);
	      ctx.fillStyle = vm.backgroundColor || defaultColor;
	      Chart.canvasHelpers.drawPoint(ctx, pointStyle, radius, x, y);
	    }
	  });
	};


/***/ },
/* 40 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	module.exports = function(Chart) {
	  var globalOpts = Chart.defaults.global;
	  globalOpts.elements.rectangle = {
	    backgroundColor: globalOpts.defaultColor,
	    borderWidth: 0,
	    borderColor: globalOpts.defaultColor,
	    borderSkipped: 'bottom'
	  };
	  Chart.elements.Rectangle = Chart.Element.extend({
	    draw: function() {
	      var ctx = this._chart.ctx;
	      var vm = this._view;
	      var halfWidth = vm.width / 2,
	          leftX = vm.x - halfWidth,
	          rightX = vm.x + halfWidth,
	          top = vm.base - (vm.base - vm.y),
	          halfStroke = vm.borderWidth / 2;
	      if (vm.borderWidth) {
	        leftX += halfStroke;
	        rightX -= halfStroke;
	        top += halfStroke;
	      }
	      ctx.beginPath();
	      ctx.fillStyle = vm.backgroundColor;
	      ctx.strokeStyle = vm.borderColor;
	      ctx.lineWidth = vm.borderWidth;
	      var corners = [[leftX, vm.base], [leftX, top], [rightX, top], [rightX, vm.base]];
	      var borders = ['bottom', 'left', 'top', 'right'];
	      var startCorner = borders.indexOf(vm.borderSkipped, 0);
	      if (startCorner === -1) {
	        startCorner = 0;
	      }
	      function cornerAt(index) {
	        return corners[$traceurRuntime.toProperty((startCorner + index) % 4)];
	      }
	      ctx.moveTo.apply(ctx, cornerAt(0));
	      for (var i = 1; i < 4; i++) {
	        ctx.lineTo.apply(ctx, cornerAt(i));
	      }
	      ctx.fill();
	      if (vm.borderWidth) {
	        ctx.stroke();
	      }
	    },
	    height: function() {
	      var vm = this._view;
	      return vm.base - vm.y;
	    },
	    inRange: function(mouseX, mouseY) {
	      var vm = this._view;
	      return vm ? (vm.y < vm.base ? (mouseX >= vm.x - vm.width / 2 && mouseX <= vm.x + vm.width / 2) && (mouseY >= vm.y && mouseY <= vm.base) : (mouseX >= vm.x - vm.width / 2 && mouseX <= vm.x + vm.width / 2) && (mouseY >= vm.base && mouseY <= vm.y)) : false;
	    },
	    inLabelRange: function(mouseX) {
	      var vm = this._view;
	      return vm ? (mouseX >= vm.x - vm.width / 2 && mouseX <= vm.x + vm.width / 2) : false;
	    },
	    tooltipPosition: function() {
	      var vm = this._view;
	      return {
	        x: vm.x,
	        y: vm.y
	      };
	    }
	  });
	};


/***/ },
/* 41 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	module.exports = function(Chart) {
	  var helpers = Chart.helpers,
	      noop = helpers.noop;
	  Chart.LinearScaleBase = Chart.Scale.extend({
	    handleTickRangeOptions: function() {
	      var me = this;
	      var opts = me.options;
	      var tickOpts = opts.ticks;
	      if (tickOpts.beginAtZero) {
	        var minSign = helpers.sign(me.min);
	        var maxSign = helpers.sign(me.max);
	        if (minSign < 0 && maxSign < 0) {
	          me.max = 0;
	        } else if (minSign > 0 && maxSign > 0) {
	          me.min = 0;
	        }
	      }
	      if (tickOpts.min !== undefined) {
	        me.min = tickOpts.min;
	      } else if (tickOpts.suggestedMin !== undefined) {
	        me.min = Math.min(me.min, tickOpts.suggestedMin);
	      }
	      if (tickOpts.max !== undefined) {
	        me.max = tickOpts.max;
	      } else if (tickOpts.suggestedMax !== undefined) {
	        me.max = Math.max(me.max, tickOpts.suggestedMax);
	      }
	      if (me.min === me.max) {
	        me.max++;
	        if (!tickOpts.beginAtZero) {
	          me.min--;
	        }
	      }
	    },
	    getTickLimit: noop,
	    handleDirectionalChanges: noop,
	    buildTicks: function() {
	      var me = this;
	      var opts = me.options;
	      var ticks = me.ticks = [];
	      var tickOpts = opts.ticks;
	      var getValueOrDefault = helpers.getValueOrDefault;
	      var maxTicks = me.getTickLimit();
	      maxTicks = Math.max(2, maxTicks);
	      var spacing;
	      var fixedStepSizeSet = (tickOpts.fixedStepSize && tickOpts.fixedStepSize > 0) || (tickOpts.stepSize && tickOpts.stepSize > 0);
	      if (fixedStepSizeSet) {
	        spacing = getValueOrDefault(tickOpts.fixedStepSize, tickOpts.stepSize);
	      } else {
	        var niceRange = helpers.niceNum(me.max - me.min, false);
	        spacing = helpers.niceNum(niceRange / (maxTicks - 1), true);
	      }
	      var niceMin = Math.floor(me.min / spacing) * spacing;
	      var niceMax = Math.ceil(me.max / spacing) * spacing;
	      var numSpaces = (niceMax - niceMin) / spacing;
	      if (helpers.almostEquals(numSpaces, Math.round(numSpaces), spacing / 1000)) {
	        numSpaces = Math.round(numSpaces);
	      } else {
	        numSpaces = Math.ceil(numSpaces);
	      }
	      ticks.push(tickOpts.min !== undefined ? tickOpts.min : niceMin);
	      for (var j = 1; j < numSpaces; ++j) {
	        ticks.push(niceMin + (j * spacing));
	      }
	      ticks.push(tickOpts.max !== undefined ? tickOpts.max : niceMax);
	      me.handleDirectionalChanges();
	      me.max = helpers.max(ticks);
	      me.min = helpers.min(ticks);
	      if (tickOpts.reverse) {
	        ticks.reverse();
	        me.start = me.max;
	        me.end = me.min;
	      } else {
	        me.start = me.min;
	        me.end = me.max;
	      }
	    },
	    convertTicksToLabels: function() {
	      var me = this;
	      me.ticksAsNumbers = me.ticks.slice();
	      me.zeroLineIndex = me.ticks.indexOf(0);
	      Chart.Scale.prototype.convertTicksToLabels.call(me);
	    }
	  });
	};


/***/ },
/* 42 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	module.exports = function(Chart) {
	  var helpers = Chart.helpers;
	  var defaultConfig = {position: 'bottom'};
	  var DatasetScale = Chart.Scale.extend({
	    getLabels: function() {
	      var data = this.chart.data;
	      return (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels;
	    },
	    determineDataLimits: function() {
	      var me = this;
	      var labels = me.getLabels();
	      me.minIndex = 0;
	      me.maxIndex = labels.length - 1;
	      var findIndex;
	      if (me.options.ticks.min !== undefined) {
	        findIndex = helpers.indexOf(labels, me.options.ticks.min);
	        me.minIndex = findIndex !== -1 ? findIndex : me.minIndex;
	      }
	      if (me.options.ticks.max !== undefined) {
	        findIndex = helpers.indexOf(labels, me.options.ticks.max);
	        me.maxIndex = findIndex !== -1 ? findIndex : me.maxIndex;
	      }
	      me.min = labels[$traceurRuntime.toProperty(me.minIndex)];
	      me.max = labels[$traceurRuntime.toProperty(me.maxIndex)];
	    },
	    buildTicks: function() {
	      var me = this;
	      var labels = me.getLabels();
	      me.ticks = (me.minIndex === 0 && me.maxIndex === labels.length - 1) ? labels : labels.slice(me.minIndex, me.maxIndex + 1);
	    },
	    getLabelForIndex: function(index, datasetIndex) {
	      var me = this;
	      var data = me.chart.data;
	      var isHorizontal = me.isHorizontal();
	      if ((data.xLabels && isHorizontal) || (data.yLabels && !isHorizontal)) {
	        return me.getRightValue(data.datasets[$traceurRuntime.toProperty(datasetIndex)].data[$traceurRuntime.toProperty(index)]);
	      }
	      return me.ticks[$traceurRuntime.toProperty(index)];
	    },
	    getPixelForValue: function(value, index, datasetIndex, includeOffset) {
	      var me = this;
	      var offsetAmt = Math.max((me.maxIndex + 1 - me.minIndex - ((me.options.gridLines.offsetGridLines) ? 0 : 1)), 1);
	      if (value !== undefined && isNaN(index)) {
	        var labels = me.getLabels();
	        var idx = labels.indexOf(value);
	        index = idx !== -1 ? idx : index;
	      }
	      if (me.isHorizontal()) {
	        var innerWidth = me.width - (me.paddingLeft + me.paddingRight);
	        var valueWidth = innerWidth / offsetAmt;
	        var widthOffset = (valueWidth * (index - me.minIndex)) + me.paddingLeft;
	        if (me.options.gridLines.offsetGridLines && includeOffset || me.maxIndex === me.minIndex && includeOffset) {
	          widthOffset += (valueWidth / 2);
	        }
	        return me.left + Math.round(widthOffset);
	      }
	      var innerHeight = me.height - (me.paddingTop + me.paddingBottom);
	      var valueHeight = innerHeight / offsetAmt;
	      var heightOffset = (valueHeight * (index - me.minIndex)) + me.paddingTop;
	      if (me.options.gridLines.offsetGridLines && includeOffset) {
	        heightOffset += (valueHeight / 2);
	      }
	      return me.top + Math.round(heightOffset);
	    },
	    getPixelForTick: function(index, includeOffset) {
	      return this.getPixelForValue(this.ticks[$traceurRuntime.toProperty(index)], index + this.minIndex, null, includeOffset);
	    },
	    getValueForPixel: function(pixel) {
	      var me = this;
	      var value;
	      var offsetAmt = Math.max((me.ticks.length - ((me.options.gridLines.offsetGridLines) ? 0 : 1)), 1);
	      var horz = me.isHorizontal();
	      var innerDimension = horz ? me.width - (me.paddingLeft + me.paddingRight) : me.height - (me.paddingTop + me.paddingBottom);
	      var valueDimension = innerDimension / offsetAmt;
	      pixel -= horz ? me.left : me.top;
	      if (me.options.gridLines.offsetGridLines) {
	        pixel -= (valueDimension / 2);
	      }
	      pixel -= horz ? me.paddingLeft : me.paddingTop;
	      if (pixel <= 0) {
	        value = 0;
	      } else {
	        value = Math.round(pixel / valueDimension);
	      }
	      return value;
	    },
	    getBasePixel: function() {
	      return this.bottom;
	    }
	  });
	  Chart.scaleService.registerScaleType('category', DatasetScale, defaultConfig);
	};


/***/ },
/* 43 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	module.exports = function(Chart) {
	  var helpers = Chart.helpers;
	  var defaultConfig = {
	    position: 'left',
	    ticks: {callback: function(tickValue, index, ticks) {
	        var delta = ticks.length > 3 ? ticks[2] - ticks[1] : ticks[1] - ticks[0];
	        if (Math.abs(delta) > 1) {
	          if (tickValue !== Math.floor(tickValue)) {
	            delta = tickValue - Math.floor(tickValue);
	          }
	        }
	        var logDelta = helpers.log10(Math.abs(delta));
	        var tickString = '';
	        if (tickValue !== 0) {
	          var numDecimal = -1 * Math.floor(logDelta);
	          numDecimal = Math.max(Math.min(numDecimal, 20), 0);
	          tickString = tickValue.toFixed(numDecimal);
	        } else {
	          tickString = '0';
	        }
	        return tickString;
	      }}
	  };
	  var LinearScale = Chart.LinearScaleBase.extend({
	    determineDataLimits: function() {
	      var me = this;
	      var opts = me.options;
	      var chart = me.chart;
	      var data = chart.data;
	      var datasets = data.datasets;
	      var isHorizontal = me.isHorizontal();
	      function IDMatches(meta) {
	        return isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id;
	      }
	      me.min = null;
	      me.max = null;
	      if (opts.stacked) {
	        var valuesPerType = {};
	        helpers.each(datasets, function(dataset, datasetIndex) {
	          var meta = chart.getDatasetMeta(datasetIndex);
	          if (valuesPerType[$traceurRuntime.toProperty(meta.type)] === undefined) {
	            $traceurRuntime.setProperty(valuesPerType, meta.type, {
	              positiveValues: [],
	              negativeValues: []
	            });
	          }
	          var positiveValues = valuesPerType[$traceurRuntime.toProperty(meta.type)].positiveValues;
	          var negativeValues = valuesPerType[$traceurRuntime.toProperty(meta.type)].negativeValues;
	          if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
	            helpers.each(dataset.data, function(rawValue, index) {
	              var $__0,
	                  $__1,
	                  $__2,
	                  $__3;
	              var value = +me.getRightValue(rawValue);
	              if (isNaN(value) || meta.data[$traceurRuntime.toProperty(index)].hidden) {
	                return;
	              }
	              $traceurRuntime.setProperty(positiveValues, index, positiveValues[$traceurRuntime.toProperty(index)] || 0);
	              $traceurRuntime.setProperty(negativeValues, index, negativeValues[$traceurRuntime.toProperty(index)] || 0);
	              if (opts.relativePoints) {
	                $traceurRuntime.setProperty(positiveValues, index, 100);
	              } else if (value < 0) {
	                ($__0 = negativeValues[$traceurRuntime.toProperty(index)], $__1 = $__0 + value, $traceurRuntime.setProperty(negativeValues, index, $__1), $__1);
	              } else {
	                ($__2 = positiveValues[$traceurRuntime.toProperty(index)], $__3 = $__2 + value, $traceurRuntime.setProperty(positiveValues, index, $__3), $__3);
	              }
	            });
	          }
	        });
	        helpers.each(valuesPerType, function(valuesForType) {
	          var values = valuesForType.positiveValues.concat(valuesForType.negativeValues);
	          var minVal = helpers.min(values);
	          var maxVal = helpers.max(values);
	          me.min = me.min === null ? minVal : Math.min(me.min, minVal);
	          me.max = me.max === null ? maxVal : Math.max(me.max, maxVal);
	        });
	      } else {
	        helpers.each(datasets, function(dataset, datasetIndex) {
	          var meta = chart.getDatasetMeta(datasetIndex);
	          if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
	            helpers.each(dataset.data, function(rawValue, index) {
	              var value = +me.getRightValue(rawValue);
	              if (isNaN(value) || meta.data[$traceurRuntime.toProperty(index)].hidden) {
	                return;
	              }
	              if (me.min === null) {
	                me.min = value;
	              } else if (value < me.min) {
	                me.min = value;
	              }
	              if (me.max === null) {
	                me.max = value;
	              } else if (value > me.max) {
	                me.max = value;
	              }
	            });
	          }
	        });
	      }
	      this.handleTickRangeOptions();
	    },
	    getTickLimit: function() {
	      var maxTicks;
	      var me = this;
	      var tickOpts = me.options.ticks;
	      if (me.isHorizontal()) {
	        maxTicks = Math.min(tickOpts.maxTicksLimit ? tickOpts.maxTicksLimit : 11, Math.ceil(me.width / 50));
	      } else {
	        var tickFontSize = helpers.getValueOrDefault(tickOpts.fontSize, Chart.defaults.global.defaultFontSize);
	        maxTicks = Math.min(tickOpts.maxTicksLimit ? tickOpts.maxTicksLimit : 11, Math.ceil(me.height / (2 * tickFontSize)));
	      }
	      return maxTicks;
	    },
	    handleDirectionalChanges: function() {
	      if (!this.isHorizontal()) {
	        this.ticks.reverse();
	      }
	    },
	    getLabelForIndex: function(index, datasetIndex) {
	      return +this.getRightValue(this.chart.data.datasets[$traceurRuntime.toProperty(datasetIndex)].data[$traceurRuntime.toProperty(index)]);
	    },
	    getPixelForValue: function(value) {
	      var me = this;
	      var paddingLeft = me.paddingLeft;
	      var paddingBottom = me.paddingBottom;
	      var start = me.start;
	      var rightValue = +me.getRightValue(value);
	      var pixel;
	      var innerDimension;
	      var range = me.end - start;
	      if (me.isHorizontal()) {
	        innerDimension = me.width - (paddingLeft + me.paddingRight);
	        pixel = me.left + (innerDimension / range * (rightValue - start));
	        return Math.round(pixel + paddingLeft);
	      }
	      innerDimension = me.height - (me.paddingTop + paddingBottom);
	      pixel = (me.bottom - paddingBottom) - (innerDimension / range * (rightValue - start));
	      return Math.round(pixel);
	    },
	    getValueForPixel: function(pixel) {
	      var me = this;
	      var isHorizontal = me.isHorizontal();
	      var paddingLeft = me.paddingLeft;
	      var paddingBottom = me.paddingBottom;
	      var innerDimension = isHorizontal ? me.width - (paddingLeft + me.paddingRight) : me.height - (me.paddingTop + paddingBottom);
	      var offset = (isHorizontal ? pixel - me.left - paddingLeft : me.bottom - paddingBottom - pixel) / innerDimension;
	      return me.start + ((me.end - me.start) * offset);
	    },
	    getPixelForTick: function(index) {
	      return this.getPixelForValue(this.ticksAsNumbers[$traceurRuntime.toProperty(index)]);
	    }
	  });
	  Chart.scaleService.registerScaleType('linear', LinearScale, defaultConfig);
	};


/***/ },
/* 44 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	module.exports = function(Chart) {
	  var helpers = Chart.helpers;
	  var defaultConfig = {
	    position: 'left',
	    ticks: {callback: function(value, index, arr) {
	        var remain = value / (Math.pow(10, Math.floor(helpers.log10(value))));
	        if (value === 0) {
	          return '0';
	        } else if (remain === 1 || remain === 2 || remain === 5 || index === 0 || index === arr.length - 1) {
	          return value.toExponential();
	        }
	        return '';
	      }}
	  };
	  var LogarithmicScale = Chart.Scale.extend({
	    determineDataLimits: function() {
	      var me = this;
	      var opts = me.options;
	      var tickOpts = opts.ticks;
	      var chart = me.chart;
	      var data = chart.data;
	      var datasets = data.datasets;
	      var getValueOrDefault = helpers.getValueOrDefault;
	      var isHorizontal = me.isHorizontal();
	      function IDMatches(meta) {
	        return isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id;
	      }
	      me.min = null;
	      me.max = null;
	      me.minNotZero = null;
	      if (opts.stacked) {
	        var valuesPerType = {};
	        helpers.each(datasets, function(dataset, datasetIndex) {
	          var meta = chart.getDatasetMeta(datasetIndex);
	          if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
	            if (valuesPerType[$traceurRuntime.toProperty(meta.type)] === undefined) {
	              $traceurRuntime.setProperty(valuesPerType, meta.type, []);
	            }
	            helpers.each(dataset.data, function(rawValue, index) {
	              var $__0,
	                  $__1;
	              var values = valuesPerType[$traceurRuntime.toProperty(meta.type)];
	              var value = +me.getRightValue(rawValue);
	              if (isNaN(value) || meta.data[$traceurRuntime.toProperty(index)].hidden) {
	                return;
	              }
	              $traceurRuntime.setProperty(values, index, values[$traceurRuntime.toProperty(index)] || 0);
	              if (opts.relativePoints) {
	                $traceurRuntime.setProperty(values, index, 100);
	              } else {
	                ($__0 = values[$traceurRuntime.toProperty(index)], $__1 = $__0 + value, $traceurRuntime.setProperty(values, index, $__1), $__1);
	              }
	            });
	          }
	        });
	        helpers.each(valuesPerType, function(valuesForType) {
	          var minVal = helpers.min(valuesForType);
	          var maxVal = helpers.max(valuesForType);
	          me.min = me.min === null ? minVal : Math.min(me.min, minVal);
	          me.max = me.max === null ? maxVal : Math.max(me.max, maxVal);
	        });
	      } else {
	        helpers.each(datasets, function(dataset, datasetIndex) {
	          var meta = chart.getDatasetMeta(datasetIndex);
	          if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
	            helpers.each(dataset.data, function(rawValue, index) {
	              var value = +me.getRightValue(rawValue);
	              if (isNaN(value) || meta.data[$traceurRuntime.toProperty(index)].hidden) {
	                return;
	              }
	              if (me.min === null) {
	                me.min = value;
	              } else if (value < me.min) {
	                me.min = value;
	              }
	              if (me.max === null) {
	                me.max = value;
	              } else if (value > me.max) {
	                me.max = value;
	              }
	              if (value !== 0 && (me.minNotZero === null || value < me.minNotZero)) {
	                me.minNotZero = value;
	              }
	            });
	          }
	        });
	      }
	      me.min = getValueOrDefault(tickOpts.min, me.min);
	      me.max = getValueOrDefault(tickOpts.max, me.max);
	      if (me.min === me.max) {
	        if (me.min !== 0 && me.min !== null) {
	          me.min = Math.pow(10, Math.floor(helpers.log10(me.min)) - 1);
	          me.max = Math.pow(10, Math.floor(helpers.log10(me.max)) + 1);
	        } else {
	          me.min = 1;
	          me.max = 10;
	        }
	      }
	    },
	    buildTicks: function() {
	      var me = this;
	      var opts = me.options;
	      var tickOpts = opts.ticks;
	      var getValueOrDefault = helpers.getValueOrDefault;
	      var ticks = me.ticks = [];
	      var tickVal = getValueOrDefault(tickOpts.min, Math.pow(10, Math.floor(helpers.log10(me.min))));
	      while (tickVal < me.max) {
	        ticks.push(tickVal);
	        var exp;
	        var significand;
	        if (tickVal === 0) {
	          exp = Math.floor(helpers.log10(me.minNotZero));
	          significand = Math.round(me.minNotZero / Math.pow(10, exp));
	        } else {
	          exp = Math.floor(helpers.log10(tickVal));
	          significand = Math.floor(tickVal / Math.pow(10, exp)) + 1;
	        }
	        if (significand === 10) {
	          significand = 1;
	          ++exp;
	        }
	        tickVal = significand * Math.pow(10, exp);
	      }
	      var lastTick = getValueOrDefault(tickOpts.max, tickVal);
	      ticks.push(lastTick);
	      if (!me.isHorizontal()) {
	        ticks.reverse();
	      }
	      me.max = helpers.max(ticks);
	      me.min = helpers.min(ticks);
	      if (tickOpts.reverse) {
	        ticks.reverse();
	        me.start = me.max;
	        me.end = me.min;
	      } else {
	        me.start = me.min;
	        me.end = me.max;
	      }
	    },
	    convertTicksToLabels: function() {
	      this.tickValues = this.ticks.slice();
	      Chart.Scale.prototype.convertTicksToLabels.call(this);
	    },
	    getLabelForIndex: function(index, datasetIndex) {
	      return +this.getRightValue(this.chart.data.datasets[$traceurRuntime.toProperty(datasetIndex)].data[$traceurRuntime.toProperty(index)]);
	    },
	    getPixelForTick: function(index) {
	      return this.getPixelForValue(this.tickValues[$traceurRuntime.toProperty(index)]);
	    },
	    getPixelForValue: function(value) {
	      var me = this;
	      var innerDimension;
	      var pixel;
	      var start = me.start;
	      var newVal = +me.getRightValue(value);
	      var range;
	      var paddingTop = me.paddingTop;
	      var paddingBottom = me.paddingBottom;
	      var paddingLeft = me.paddingLeft;
	      var opts = me.options;
	      var tickOpts = opts.ticks;
	      if (me.isHorizontal()) {
	        range = helpers.log10(me.end) - helpers.log10(start);
	        if (newVal === 0) {
	          pixel = me.left + paddingLeft;
	        } else {
	          innerDimension = me.width - (paddingLeft + me.paddingRight);
	          pixel = me.left + (innerDimension / range * (helpers.log10(newVal) - helpers.log10(start)));
	          pixel += paddingLeft;
	        }
	      } else {
	        innerDimension = me.height - (paddingTop + paddingBottom);
	        if (start === 0 && !tickOpts.reverse) {
	          range = helpers.log10(me.end) - helpers.log10(me.minNotZero);
	          if (newVal === start) {
	            pixel = me.bottom - paddingBottom;
	          } else if (newVal === me.minNotZero) {
	            pixel = me.bottom - paddingBottom - innerDimension * 0.02;
	          } else {
	            pixel = me.bottom - paddingBottom - innerDimension * 0.02 - (innerDimension * 0.98 / range * (helpers.log10(newVal) - helpers.log10(me.minNotZero)));
	          }
	        } else if (me.end === 0 && tickOpts.reverse) {
	          range = helpers.log10(me.start) - helpers.log10(me.minNotZero);
	          if (newVal === me.end) {
	            pixel = me.top + paddingTop;
	          } else if (newVal === me.minNotZero) {
	            pixel = me.top + paddingTop + innerDimension * 0.02;
	          } else {
	            pixel = me.top + paddingTop + innerDimension * 0.02 + (innerDimension * 0.98 / range * (helpers.log10(newVal) - helpers.log10(me.minNotZero)));
	          }
	        } else {
	          range = helpers.log10(me.end) - helpers.log10(start);
	          innerDimension = me.height - (paddingTop + paddingBottom);
	          pixel = (me.bottom - paddingBottom) - (innerDimension / range * (helpers.log10(newVal) - helpers.log10(start)));
	        }
	      }
	      return pixel;
	    },
	    getValueForPixel: function(pixel) {
	      var me = this;
	      var range = helpers.log10(me.end) - helpers.log10(me.start);
	      var value,
	          innerDimension;
	      if (me.isHorizontal()) {
	        innerDimension = me.width - (me.paddingLeft + me.paddingRight);
	        value = me.start * Math.pow(10, (pixel - me.left - me.paddingLeft) * range / innerDimension);
	      } else {
	        innerDimension = me.height - (me.paddingTop + me.paddingBottom);
	        value = Math.pow(10, (me.bottom - me.paddingBottom - pixel) * range / innerDimension) / me.start;
	      }
	      return value;
	    }
	  });
	  Chart.scaleService.registerScaleType('logarithmic', LogarithmicScale, defaultConfig);
	};


/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	module.exports = function(Chart) {
	  var helpers = Chart.helpers;
	  var globalDefaults = Chart.defaults.global;
	  var defaultConfig = {
	    display: true,
	    animate: true,
	    lineArc: false,
	    position: 'chartArea',
	    angleLines: {
	      display: true,
	      color: 'rgba(0, 0, 0, 0.1)',
	      lineWidth: 1
	    },
	    ticks: {
	      showLabelBackdrop: true,
	      backdropColor: 'rgba(255,255,255,0.75)',
	      backdropPaddingY: 2,
	      backdropPaddingX: 2
	    },
	    pointLabels: {
	      fontSize: 10,
	      callback: function(label) {
	        return label;
	      }
	    }
	  };
	  var LinearRadialScale = Chart.LinearScaleBase.extend({
	    getValueCount: function() {
	      return this.chart.data.labels.length;
	    },
	    setDimensions: function() {
	      var me = this;
	      var opts = me.options;
	      var tickOpts = opts.ticks;
	      me.width = me.maxWidth;
	      me.height = me.maxHeight;
	      me.xCenter = Math.round(me.width / 2);
	      me.yCenter = Math.round(me.height / 2);
	      var minSize = helpers.min([me.height, me.width]);
	      var tickFontSize = helpers.getValueOrDefault(tickOpts.fontSize, globalDefaults.defaultFontSize);
	      me.drawingArea = opts.display ? (minSize / 2) - (tickFontSize / 2 + tickOpts.backdropPaddingY) : (minSize / 2);
	    },
	    determineDataLimits: function() {
	      var me = this;
	      var chart = me.chart;
	      me.min = null;
	      me.max = null;
	      helpers.each(chart.data.datasets, function(dataset, datasetIndex) {
	        if (chart.isDatasetVisible(datasetIndex)) {
	          var meta = chart.getDatasetMeta(datasetIndex);
	          helpers.each(dataset.data, function(rawValue, index) {
	            var value = +me.getRightValue(rawValue);
	            if (isNaN(value) || meta.data[$traceurRuntime.toProperty(index)].hidden) {
	              return;
	            }
	            if (me.min === null) {
	              me.min = value;
	            } else if (value < me.min) {
	              me.min = value;
	            }
	            if (me.max === null) {
	              me.max = value;
	            } else if (value > me.max) {
	              me.max = value;
	            }
	          });
	        }
	      });
	      me.handleTickRangeOptions();
	    },
	    getTickLimit: function() {
	      var tickOpts = this.options.ticks;
	      var tickFontSize = helpers.getValueOrDefault(tickOpts.fontSize, globalDefaults.defaultFontSize);
	      return Math.min(tickOpts.maxTicksLimit ? tickOpts.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * tickFontSize)));
	    },
	    convertTicksToLabels: function() {
	      var me = this;
	      Chart.LinearScaleBase.prototype.convertTicksToLabels.call(me);
	      me.pointLabels = me.chart.data.labels.map(me.options.pointLabels.callback, me);
	    },
	    getLabelForIndex: function(index, datasetIndex) {
	      return +this.getRightValue(this.chart.data.datasets[$traceurRuntime.toProperty(datasetIndex)].data[$traceurRuntime.toProperty(index)]);
	    },
	    fit: function() {
	      var pointLabels = this.options.pointLabels;
	      var pointLabelFontSize = helpers.getValueOrDefault(pointLabels.fontSize, globalDefaults.defaultFontSize);
	      var pointLabeFontStyle = helpers.getValueOrDefault(pointLabels.fontStyle, globalDefaults.defaultFontStyle);
	      var pointLabeFontFamily = helpers.getValueOrDefault(pointLabels.fontFamily, globalDefaults.defaultFontFamily);
	      var pointLabeFont = helpers.fontString(pointLabelFontSize, pointLabeFontStyle, pointLabeFontFamily);
	      var largestPossibleRadius = helpers.min([(this.height / 2 - pointLabelFontSize - 5), this.width / 2]),
	          pointPosition,
	          i,
	          textWidth,
	          halfTextWidth,
	          furthestRight = this.width,
	          furthestRightIndex,
	          furthestRightAngle,
	          furthestLeft = 0,
	          furthestLeftIndex,
	          furthestLeftAngle,
	          xProtrusionLeft,
	          xProtrusionRight,
	          radiusReductionRight,
	          radiusReductionLeft;
	      this.ctx.font = pointLabeFont;
	      for (i = 0; i < this.getValueCount(); i++) {
	        pointPosition = this.getPointPosition(i, largestPossibleRadius);
	        textWidth = this.ctx.measureText(this.pointLabels[$traceurRuntime.toProperty(i)] ? this.pointLabels[$traceurRuntime.toProperty(i)] : '').width + 5;
	        var angleRadians = this.getIndexAngle(i) + (Math.PI / 2);
	        var angle = (angleRadians * 360 / (2 * Math.PI)) % 360;
	        if (angle === 0 || angle === 180) {
	          halfTextWidth = textWidth / 2;
	          if (pointPosition.x + halfTextWidth > furthestRight) {
	            furthestRight = pointPosition.x + halfTextWidth;
	            furthestRightIndex = i;
	          }
	          if (pointPosition.x - halfTextWidth < furthestLeft) {
	            furthestLeft = pointPosition.x - halfTextWidth;
	            furthestLeftIndex = i;
	          }
	        } else if (angle < 180) {
	          if (pointPosition.x + textWidth > furthestRight) {
	            furthestRight = pointPosition.x + textWidth;
	            furthestRightIndex = i;
	          }
	        } else if (pointPosition.x - textWidth < furthestLeft) {
	          furthestLeft = pointPosition.x - textWidth;
	          furthestLeftIndex = i;
	        }
	      }
	      xProtrusionLeft = furthestLeft;
	      xProtrusionRight = Math.ceil(furthestRight - this.width);
	      furthestRightAngle = this.getIndexAngle(furthestRightIndex);
	      furthestLeftAngle = this.getIndexAngle(furthestLeftIndex);
	      radiusReductionRight = xProtrusionRight / Math.sin(furthestRightAngle + Math.PI / 2);
	      radiusReductionLeft = xProtrusionLeft / Math.sin(furthestLeftAngle + Math.PI / 2);
	      radiusReductionRight = (helpers.isNumber(radiusReductionRight)) ? radiusReductionRight : 0;
	      radiusReductionLeft = (helpers.isNumber(radiusReductionLeft)) ? radiusReductionLeft : 0;
	      this.drawingArea = Math.round(largestPossibleRadius - (radiusReductionLeft + radiusReductionRight) / 2);
	      this.setCenterPoint(radiusReductionLeft, radiusReductionRight);
	    },
	    setCenterPoint: function(leftMovement, rightMovement) {
	      var me = this;
	      var maxRight = me.width - rightMovement - me.drawingArea,
	          maxLeft = leftMovement + me.drawingArea;
	      me.xCenter = Math.round(((maxLeft + maxRight) / 2) + me.left);
	      me.yCenter = Math.round((me.height / 2) + me.top);
	    },
	    getIndexAngle: function(index) {
	      var angleMultiplier = (Math.PI * 2) / this.getValueCount();
	      var startAngle = this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0;
	      var startAngleRadians = startAngle * Math.PI * 2 / 360;
	      return index * angleMultiplier - (Math.PI / 2) + startAngleRadians;
	    },
	    getDistanceFromCenterForValue: function(value) {
	      var me = this;
	      if (value === null) {
	        return 0;
	      }
	      var scalingFactor = me.drawingArea / (me.max - me.min);
	      if (me.options.reverse) {
	        return (me.max - value) * scalingFactor;
	      }
	      return (value - me.min) * scalingFactor;
	    },
	    getPointPosition: function(index, distanceFromCenter) {
	      var me = this;
	      var thisAngle = me.getIndexAngle(index);
	      return {
	        x: Math.round(Math.cos(thisAngle) * distanceFromCenter) + me.xCenter,
	        y: Math.round(Math.sin(thisAngle) * distanceFromCenter) + me.yCenter
	      };
	    },
	    getPointPositionForValue: function(index, value) {
	      return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
	    },
	    getBasePosition: function() {
	      var me = this;
	      var min = me.min;
	      var max = me.max;
	      return me.getPointPositionForValue(0, me.beginAtZero ? 0 : min < 0 && max < 0 ? max : min > 0 && max > 0 ? min : 0);
	    },
	    draw: function() {
	      var me = this;
	      var opts = me.options;
	      var gridLineOpts = opts.gridLines;
	      var tickOpts = opts.ticks;
	      var angleLineOpts = opts.angleLines;
	      var pointLabelOpts = opts.pointLabels;
	      var getValueOrDefault = helpers.getValueOrDefault;
	      if (opts.display) {
	        var ctx = me.ctx;
	        var tickFontSize = getValueOrDefault(tickOpts.fontSize, globalDefaults.defaultFontSize);
	        var tickFontStyle = getValueOrDefault(tickOpts.fontStyle, globalDefaults.defaultFontStyle);
	        var tickFontFamily = getValueOrDefault(tickOpts.fontFamily, globalDefaults.defaultFontFamily);
	        var tickLabelFont = helpers.fontString(tickFontSize, tickFontStyle, tickFontFamily);
	        helpers.each(me.ticks, function(label, index) {
	          if (index > 0 || opts.reverse) {
	            var yCenterOffset = me.getDistanceFromCenterForValue(me.ticksAsNumbers[$traceurRuntime.toProperty(index)]);
	            var yHeight = me.yCenter - yCenterOffset;
	            if (gridLineOpts.display && index !== 0) {
	              ctx.strokeStyle = helpers.getValueAtIndexOrDefault(gridLineOpts.color, index - 1);
	              ctx.lineWidth = helpers.getValueAtIndexOrDefault(gridLineOpts.lineWidth, index - 1);
	              if (opts.lineArc) {
	                ctx.beginPath();
	                ctx.arc(me.xCenter, me.yCenter, yCenterOffset, 0, Math.PI * 2);
	                ctx.closePath();
	                ctx.stroke();
	              } else {
	                ctx.beginPath();
	                for (var i = 0; i < me.getValueCount(); i++) {
	                  var pointPosition = me.getPointPosition(i, yCenterOffset);
	                  if (i === 0) {
	                    ctx.moveTo(pointPosition.x, pointPosition.y);
	                  } else {
	                    ctx.lineTo(pointPosition.x, pointPosition.y);
	                  }
	                }
	                ctx.closePath();
	                ctx.stroke();
	              }
	            }
	            if (tickOpts.display) {
	              var tickFontColor = getValueOrDefault(tickOpts.fontColor, globalDefaults.defaultFontColor);
	              ctx.font = tickLabelFont;
	              if (tickOpts.showLabelBackdrop) {
	                var labelWidth = ctx.measureText(label).width;
	                ctx.fillStyle = tickOpts.backdropColor;
	                ctx.fillRect(me.xCenter - labelWidth / 2 - tickOpts.backdropPaddingX, yHeight - tickFontSize / 2 - tickOpts.backdropPaddingY, labelWidth + tickOpts.backdropPaddingX * 2, tickFontSize + tickOpts.backdropPaddingY * 2);
	              }
	              ctx.textAlign = 'center';
	              ctx.textBaseline = 'middle';
	              ctx.fillStyle = tickFontColor;
	              ctx.fillText(label, me.xCenter, yHeight);
	            }
	          }
	        });
	        if (!opts.lineArc) {
	          ctx.lineWidth = angleLineOpts.lineWidth;
	          ctx.strokeStyle = angleLineOpts.color;
	          var outerDistance = me.getDistanceFromCenterForValue(opts.reverse ? me.min : me.max);
	          var pointLabelFontSize = getValueOrDefault(pointLabelOpts.fontSize, globalDefaults.defaultFontSize);
	          var pointLabeFontStyle = getValueOrDefault(pointLabelOpts.fontStyle, globalDefaults.defaultFontStyle);
	          var pointLabeFontFamily = getValueOrDefault(pointLabelOpts.fontFamily, globalDefaults.defaultFontFamily);
	          var pointLabeFont = helpers.fontString(pointLabelFontSize, pointLabeFontStyle, pointLabeFontFamily);
	          for (var i = me.getValueCount() - 1; i >= 0; i--) {
	            if (angleLineOpts.display) {
	              var outerPosition = me.getPointPosition(i, outerDistance);
	              ctx.beginPath();
	              ctx.moveTo(me.xCenter, me.yCenter);
	              ctx.lineTo(outerPosition.x, outerPosition.y);
	              ctx.stroke();
	              ctx.closePath();
	            }
	            var pointLabelPosition = me.getPointPosition(i, outerDistance + 5);
	            var pointLabelFontColor = getValueOrDefault(pointLabelOpts.fontColor, globalDefaults.defaultFontColor);
	            ctx.font = pointLabeFont;
	            ctx.fillStyle = pointLabelFontColor;
	            var pointLabels = me.pointLabels;
	            var angleRadians = this.getIndexAngle(i) + (Math.PI / 2);
	            var angle = (angleRadians * 360 / (2 * Math.PI)) % 360;
	            if (angle === 0 || angle === 180) {
	              ctx.textAlign = 'center';
	            } else if (angle < 180) {
	              ctx.textAlign = 'left';
	            } else {
	              ctx.textAlign = 'right';
	            }
	            if (angle === 90 || angle === 270) {
	              ctx.textBaseline = 'middle';
	            } else if (angle > 270 || angle < 90) {
	              ctx.textBaseline = 'bottom';
	            } else {
	              ctx.textBaseline = 'top';
	            }
	            ctx.fillText(pointLabels[$traceurRuntime.toProperty(i)] ? pointLabels[$traceurRuntime.toProperty(i)] : '', pointLabelPosition.x, pointLabelPosition.y);
	          }
	        }
	      }
	    }
	  });
	  Chart.scaleService.registerScaleType('radialLinear', LinearRadialScale, defaultConfig);
	};


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	var moment = __webpack_require__(47);
	moment = typeof(moment) === 'function' ? moment : window.moment;
	module.exports = function(Chart) {
	  var helpers = Chart.helpers;
	  var time = {units: [{
	      name: 'millisecond',
	      steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
	    }, {
	      name: 'second',
	      steps: [1, 2, 5, 10, 30]
	    }, {
	      name: 'minute',
	      steps: [1, 2, 5, 10, 30]
	    }, {
	      name: 'hour',
	      steps: [1, 2, 3, 6, 12]
	    }, {
	      name: 'day',
	      steps: [1, 2, 5]
	    }, {
	      name: 'week',
	      maxStep: 4
	    }, {
	      name: 'month',
	      maxStep: 3
	    }, {
	      name: 'quarter',
	      maxStep: 4
	    }, {
	      name: 'year',
	      maxStep: false
	    }]};
	  var defaultConfig = {
	    position: 'bottom',
	    time: {
	      parser: false,
	      format: false,
	      unit: false,
	      round: false,
	      displayFormat: false,
	      isoWeekday: false,
	      minUnit: 'millisecond',
	      displayFormats: {
	        millisecond: 'h:mm:ss.SSS a',
	        second: 'h:mm:ss a',
	        minute: 'h:mm:ss a',
	        hour: 'MMM D, hA',
	        day: 'll',
	        week: 'll',
	        month: 'MMM YYYY',
	        quarter: '[Q]Q - YYYY',
	        year: 'YYYY'
	      }
	    },
	    ticks: {autoSkip: false}
	  };
	  var TimeScale = Chart.Scale.extend({
	    initialize: function() {
	      if (!moment) {
	        throw new Error('Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com');
	      }
	      Chart.Scale.prototype.initialize.call(this);
	    },
	    getLabelMoment: function(datasetIndex, index) {
	      if (datasetIndex === null || index === null) {
	        return null;
	      }
	      if (typeof this.labelMoments[$traceurRuntime.toProperty(datasetIndex)] !== 'undefined') {
	        return this.labelMoments[$traceurRuntime.toProperty(datasetIndex)][$traceurRuntime.toProperty(index)];
	      }
	      return null;
	    },
	    getLabelDiff: function(datasetIndex, index) {
	      var me = this;
	      if (datasetIndex === null || index === null) {
	        return null;
	      }
	      if (me.labelDiffs === undefined) {
	        me.buildLabelDiffs();
	      }
	      if (typeof me.labelDiffs[$traceurRuntime.toProperty(datasetIndex)] !== 'undefined') {
	        return me.labelDiffs[$traceurRuntime.toProperty(datasetIndex)][$traceurRuntime.toProperty(index)];
	      }
	      return null;
	    },
	    getMomentStartOf: function(tick) {
	      var me = this;
	      if (me.options.time.unit === 'week' && me.options.time.isoWeekday !== false) {
	        return tick.clone().startOf('isoWeek').isoWeekday(me.options.time.isoWeekday);
	      }
	      return tick.clone().startOf(me.tickUnit);
	    },
	    determineDataLimits: function() {
	      var me = this;
	      me.labelMoments = [];
	      var scaleLabelMoments = [];
	      if (me.chart.data.labels && me.chart.data.labels.length > 0) {
	        helpers.each(me.chart.data.labels, function(label) {
	          var labelMoment = me.parseTime(label);
	          if (labelMoment.isValid()) {
	            if (me.options.time.round) {
	              labelMoment.startOf(me.options.time.round);
	            }
	            scaleLabelMoments.push(labelMoment);
	          }
	        }, me);
	        me.firstTick = moment.min.call(me, scaleLabelMoments);
	        me.lastTick = moment.max.call(me, scaleLabelMoments);
	      } else {
	        me.firstTick = null;
	        me.lastTick = null;
	      }
	      helpers.each(me.chart.data.datasets, function(dataset, datasetIndex) {
	        var momentsForDataset = [];
	        var datasetVisible = me.chart.isDatasetVisible(datasetIndex);
	        if ($traceurRuntime.typeof(dataset.data[0]) === 'object' && dataset.data[0] !== null) {
	          helpers.each(dataset.data, function(value) {
	            var labelMoment = me.parseTime(me.getRightValue(value));
	            if (labelMoment.isValid()) {
	              if (me.options.time.round) {
	                labelMoment.startOf(me.options.time.round);
	              }
	              momentsForDataset.push(labelMoment);
	              if (datasetVisible) {
	                me.firstTick = me.firstTick !== null ? moment.min(me.firstTick, labelMoment) : labelMoment;
	                me.lastTick = me.lastTick !== null ? moment.max(me.lastTick, labelMoment) : labelMoment;
	              }
	            }
	          }, me);
	        } else {
	          momentsForDataset = scaleLabelMoments;
	        }
	        me.labelMoments.push(momentsForDataset);
	      }, me);
	      if (me.options.time.min) {
	        me.firstTick = me.parseTime(me.options.time.min);
	      }
	      if (me.options.time.max) {
	        me.lastTick = me.parseTime(me.options.time.max);
	      }
	      me.firstTick = (me.firstTick || moment()).clone();
	      me.lastTick = (me.lastTick || moment()).clone();
	    },
	    buildLabelDiffs: function() {
	      var me = this;
	      me.labelDiffs = [];
	      var scaleLabelDiffs = [];
	      if (me.chart.data.labels && me.chart.data.labels.length > 0) {
	        helpers.each(me.chart.data.labels, function(label) {
	          var labelMoment = me.parseTime(label);
	          if (labelMoment.isValid()) {
	            if (me.options.time.round) {
	              labelMoment.startOf(me.options.time.round);
	            }
	            scaleLabelDiffs.push(labelMoment.diff(me.firstTick, me.tickUnit, true));
	          }
	        }, me);
	      }
	      helpers.each(me.chart.data.datasets, function(dataset) {
	        var diffsForDataset = [];
	        if ($traceurRuntime.typeof(dataset.data[0]) === 'object' && dataset.data[0] !== null) {
	          helpers.each(dataset.data, function(value) {
	            var labelMoment = me.parseTime(me.getRightValue(value));
	            if (labelMoment.isValid()) {
	              if (me.options.time.round) {
	                labelMoment.startOf(me.options.time.round);
	              }
	              diffsForDataset.push(labelMoment.diff(me.firstTick, me.tickUnit, true));
	            }
	          }, me);
	        } else {
	          diffsForDataset = scaleLabelDiffs;
	        }
	        me.labelDiffs.push(diffsForDataset);
	      }, me);
	    },
	    buildTicks: function() {
	      var me = this;
	      me.ctx.save();
	      var tickFontSize = helpers.getValueOrDefault(me.options.ticks.fontSize, Chart.defaults.global.defaultFontSize);
	      var tickFontStyle = helpers.getValueOrDefault(me.options.ticks.fontStyle, Chart.defaults.global.defaultFontStyle);
	      var tickFontFamily = helpers.getValueOrDefault(me.options.ticks.fontFamily, Chart.defaults.global.defaultFontFamily);
	      var tickLabelFont = helpers.fontString(tickFontSize, tickFontStyle, tickFontFamily);
	      me.ctx.font = tickLabelFont;
	      me.ticks = [];
	      me.unitScale = 1;
	      me.scaleSizeInUnits = 0;
	      if (me.options.time.unit) {
	        me.tickUnit = me.options.time.unit || 'day';
	        me.displayFormat = me.options.time.displayFormats[$traceurRuntime.toProperty(me.tickUnit)];
	        me.scaleSizeInUnits = me.lastTick.diff(me.firstTick, me.tickUnit, true);
	        me.unitScale = helpers.getValueOrDefault(me.options.time.unitStepSize, 1);
	      } else {
	        var innerWidth = me.isHorizontal() ? me.width - (me.paddingLeft + me.paddingRight) : me.height - (me.paddingTop + me.paddingBottom);
	        var tempFirstLabel = me.tickFormatFunction(me.firstTick, 0, []);
	        var tickLabelWidth = me.ctx.measureText(tempFirstLabel).width;
	        var cosRotation = Math.cos(helpers.toRadians(me.options.ticks.maxRotation));
	        var sinRotation = Math.sin(helpers.toRadians(me.options.ticks.maxRotation));
	        tickLabelWidth = (tickLabelWidth * cosRotation) + (tickFontSize * sinRotation);
	        var labelCapacity = innerWidth / (tickLabelWidth);
	        me.tickUnit = me.options.time.minUnit;
	        me.scaleSizeInUnits = me.lastTick.diff(me.firstTick, me.tickUnit, true);
	        me.displayFormat = me.options.time.displayFormats[$traceurRuntime.toProperty(me.tickUnit)];
	        var unitDefinitionIndex = 0;
	        var unitDefinition = time.units[$traceurRuntime.toProperty(unitDefinitionIndex)];
	        while (unitDefinitionIndex < time.units.length) {
	          me.unitScale = 1;
	          if (helpers.isArray(unitDefinition.steps) && Math.ceil(me.scaleSizeInUnits / labelCapacity) < helpers.max(unitDefinition.steps)) {
	            for (var idx = 0; idx < unitDefinition.steps.length; ++idx) {
	              if (unitDefinition.steps[$traceurRuntime.toProperty(idx)] >= Math.ceil(me.scaleSizeInUnits / labelCapacity)) {
	                me.unitScale = helpers.getValueOrDefault(me.options.time.unitStepSize, unitDefinition.steps[$traceurRuntime.toProperty(idx)]);
	                break;
	              }
	            }
	            break;
	          } else if ((unitDefinition.maxStep === false) || (Math.ceil(me.scaleSizeInUnits / labelCapacity) < unitDefinition.maxStep)) {
	            me.unitScale = helpers.getValueOrDefault(me.options.time.unitStepSize, Math.ceil(me.scaleSizeInUnits / labelCapacity));
	            break;
	          } else {
	            ++unitDefinitionIndex;
	            unitDefinition = time.units[$traceurRuntime.toProperty(unitDefinitionIndex)];
	            me.tickUnit = unitDefinition.name;
	            var leadingUnitBuffer = me.firstTick.diff(me.getMomentStartOf(me.firstTick), me.tickUnit, true);
	            var trailingUnitBuffer = me.getMomentStartOf(me.lastTick.clone().add(1, me.tickUnit)).diff(me.lastTick, me.tickUnit, true);
	            me.scaleSizeInUnits = me.lastTick.diff(me.firstTick, me.tickUnit, true) + leadingUnitBuffer + trailingUnitBuffer;
	            me.displayFormat = me.options.time.displayFormats[$traceurRuntime.toProperty(unitDefinition.name)];
	          }
	        }
	      }
	      var roundedStart;
	      if (!me.options.time.min) {
	        me.firstTick = me.getMomentStartOf(me.firstTick);
	        roundedStart = me.firstTick;
	      } else {
	        roundedStart = me.getMomentStartOf(me.firstTick);
	      }
	      if (!me.options.time.max) {
	        var roundedEnd = me.getMomentStartOf(me.lastTick);
	        var delta = roundedEnd.diff(me.lastTick, me.tickUnit, true);
	        if (delta < 0) {
	          me.lastTick = me.getMomentStartOf(me.lastTick.add(1, me.tickUnit));
	        } else if (delta >= 0) {
	          me.lastTick = roundedEnd;
	        }
	        me.scaleSizeInUnits = me.lastTick.diff(me.firstTick, me.tickUnit, true);
	      }
	      if (me.options.time.displayFormat) {
	        me.displayFormat = me.options.time.displayFormat;
	      }
	      me.ticks.push(me.firstTick.clone());
	      for (var i = 1; i <= me.scaleSizeInUnits; ++i) {
	        var newTick = roundedStart.clone().add(i, me.tickUnit);
	        if (me.options.time.max && newTick.diff(me.lastTick, me.tickUnit, true) >= 0) {
	          break;
	        }
	        if (i % me.unitScale === 0) {
	          me.ticks.push(newTick);
	        }
	      }
	      var diff = me.ticks[$traceurRuntime.toProperty(me.ticks.length - 1)].diff(me.lastTick, me.tickUnit);
	      if (diff !== 0 || me.scaleSizeInUnits === 0) {
	        if (me.options.time.max) {
	          me.ticks.push(me.lastTick.clone());
	          me.scaleSizeInUnits = me.lastTick.diff(me.ticks[0], me.tickUnit, true);
	        } else {
	          me.ticks.push(me.lastTick.clone());
	          me.scaleSizeInUnits = me.lastTick.diff(me.firstTick, me.tickUnit, true);
	        }
	      }
	      me.ctx.restore();
	      me.labelDiffs = undefined;
	    },
	    getLabelForIndex: function(index, datasetIndex) {
	      var me = this;
	      var label = me.chart.data.labels && index < me.chart.data.labels.length ? me.chart.data.labels[$traceurRuntime.toProperty(index)] : '';
	      if ($traceurRuntime.typeof(me.chart.data.datasets[$traceurRuntime.toProperty(datasetIndex)].data[0]) === 'object') {
	        label = me.getRightValue(me.chart.data.datasets[$traceurRuntime.toProperty(datasetIndex)].data[$traceurRuntime.toProperty(index)]);
	      }
	      if (me.options.time.tooltipFormat) {
	        label = me.parseTime(label).format(me.options.time.tooltipFormat);
	      }
	      return label;
	    },
	    tickFormatFunction: function(tick, index, ticks) {
	      var formattedTick = tick.format(this.displayFormat);
	      var tickOpts = this.options.ticks;
	      var callback = helpers.getValueOrDefault(tickOpts.callback, tickOpts.userCallback);
	      if (callback) {
	        return callback(formattedTick, index, ticks);
	      }
	      return formattedTick;
	    },
	    convertTicksToLabels: function() {
	      var me = this;
	      me.tickMoments = me.ticks;
	      me.ticks = me.ticks.map(me.tickFormatFunction, me);
	    },
	    getPixelForValue: function(value, index, datasetIndex) {
	      var me = this;
	      var offset = null;
	      if (index !== undefined && datasetIndex !== undefined) {
	        offset = me.getLabelDiff(datasetIndex, index);
	      }
	      if (offset === null) {
	        if (!value || !value.isValid) {
	          value = me.parseTime(me.getRightValue(value));
	        }
	        if (value && value.isValid && value.isValid()) {
	          offset = value.diff(me.firstTick, me.tickUnit, true);
	        }
	      }
	      if (offset !== null) {
	        var decimal = offset !== 0 ? offset / me.scaleSizeInUnits : offset;
	        if (me.isHorizontal()) {
	          var innerWidth = me.width - (me.paddingLeft + me.paddingRight);
	          var valueOffset = (innerWidth * decimal) + me.paddingLeft;
	          return me.left + Math.round(valueOffset);
	        }
	        var innerHeight = me.height - (me.paddingTop + me.paddingBottom);
	        var heightOffset = (innerHeight * decimal) + me.paddingTop;
	        return me.top + Math.round(heightOffset);
	      }
	    },
	    getPixelForTick: function(index) {
	      return this.getPixelForValue(this.tickMoments[$traceurRuntime.toProperty(index)], null, null);
	    },
	    getValueForPixel: function(pixel) {
	      var me = this;
	      var innerDimension = me.isHorizontal() ? me.width - (me.paddingLeft + me.paddingRight) : me.height - (me.paddingTop + me.paddingBottom);
	      var offset = (pixel - (me.isHorizontal() ? me.left + me.paddingLeft : me.top + me.paddingTop)) / innerDimension;
	      offset *= me.scaleSizeInUnits;
	      return me.firstTick.clone().add(moment.duration(offset, me.tickUnit).asSeconds(), 'seconds');
	    },
	    parseTime: function(label) {
	      var me = this;
	      if (typeof me.options.time.parser === 'string') {
	        return moment(label, me.options.time.parser);
	      }
	      if (typeof me.options.time.parser === 'function') {
	        return me.options.time.parser(label);
	      }
	      if (typeof label.getMonth === 'function' || typeof label === 'number') {
	        return moment(label);
	      }
	      if (label.isValid && label.isValid()) {
	        return label;
	      }
	      if (typeof me.options.time.format !== 'string' && me.options.time.format.call) {
	        console.warn('options.time.format is deprecated and replaced by options.time.parser. See http://nnnick.github.io/Chart.js/docs-v2/#scales-time-scale');
	        return me.options.time.format(label);
	      }
	      return moment(label, me.options.time.format);
	    }
	  });
	  Chart.scaleService.registerScaleType('time', TimeScale, defaultConfig);
	};


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.moment = factory();
	  }(this, function() {
	    'use strict';
	    var hookCallback;
	    function utils_hooks__hooks() {
	      return hookCallback.apply(null, arguments);
	    }
	    function setHookCallback(callback) {
	      hookCallback = callback;
	    }
	    function isArray(input) {
	      return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
	    }
	    function isObject(input) {
	      return input != null && Object.prototype.toString.call(input) === '[object Object]';
	    }
	    function isObjectEmpty(obj) {
	      var k;
	      for (k in obj) {
	        return false;
	      }
	      return true;
	    }
	    function isDate(input) {
	      return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
	    }
	    function map(arr, fn) {
	      var res = [],
	          i;
	      for (i = 0; i < arr.length; ++i) {
	        res.push(fn(arr[$traceurRuntime.toProperty(i)], i));
	      }
	      return res;
	    }
	    function hasOwnProp(a, b) {
	      return Object.prototype.hasOwnProperty.call(a, b);
	    }
	    function extend(a, b) {
	      for (var i in b) {
	        if (hasOwnProp(b, i)) {
	          $traceurRuntime.setProperty(a, i, b[$traceurRuntime.toProperty(i)]);
	        }
	      }
	      if (hasOwnProp(b, 'toString')) {
	        a.toString = b.toString;
	      }
	      if (hasOwnProp(b, 'valueOf')) {
	        a.valueOf = b.valueOf;
	      }
	      return a;
	    }
	    function create_utc__createUTC(input, format, locale, strict) {
	      return createLocalOrUTC(input, format, locale, strict, true).utc();
	    }
	    function defaultParsingFlags() {
	      return {
	        empty: false,
	        unusedTokens: [],
	        unusedInput: [],
	        overflow: -2,
	        charsLeftOver: 0,
	        nullInput: false,
	        invalidMonth: null,
	        invalidFormat: false,
	        userInvalidated: false,
	        iso: false,
	        parsedDateParts: [],
	        meridiem: null
	      };
	    }
	    function getParsingFlags(m) {
	      if (m._pf == null) {
	        m._pf = defaultParsingFlags();
	      }
	      return m._pf;
	    }
	    var some;
	    if (Array.prototype.some) {
	      some = Array.prototype.some;
	    } else {
	      some = function(fun) {
	        var t = Object(this);
	        var len = t.length >>> 0;
	        for (var i = 0; i < len; i++) {
	          if ($traceurRuntime.toProperty(i) in t && fun.call(this, t[$traceurRuntime.toProperty(i)], i, t)) {
	            return true;
	          }
	        }
	        return false;
	      };
	    }
	    function valid__isValid(m) {
	      if (m._isValid == null) {
	        var flags = getParsingFlags(m);
	        var parsedParts = some.call(flags.parsedDateParts, function(i) {
	          return i != null;
	        });
	        var isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidMonth && !flags.invalidWeekday && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || (flags.meridiem && parsedParts));
	        if (m._strict) {
	          isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
	        }
	        if (Object.isFrozen == null || !Object.isFrozen(m)) {
	          m._isValid = isNowValid;
	        } else {
	          return isNowValid;
	        }
	      }
	      return m._isValid;
	    }
	    function valid__createInvalid(flags) {
	      var m = create_utc__createUTC(NaN);
	      if (flags != null) {
	        extend(getParsingFlags(m), flags);
	      } else {
	        getParsingFlags(m).userInvalidated = true;
	      }
	      return m;
	    }
	    function isUndefined(input) {
	      return input === void 0;
	    }
	    var momentProperties = utils_hooks__hooks.momentProperties = [];
	    function copyConfig(to, from) {
	      var i,
	          prop,
	          val;
	      if (!isUndefined(from._isAMomentObject)) {
	        to._isAMomentObject = from._isAMomentObject;
	      }
	      if (!isUndefined(from._i)) {
	        to._i = from._i;
	      }
	      if (!isUndefined(from._f)) {
	        to._f = from._f;
	      }
	      if (!isUndefined(from._l)) {
	        to._l = from._l;
	      }
	      if (!isUndefined(from._strict)) {
	        to._strict = from._strict;
	      }
	      if (!isUndefined(from._tzm)) {
	        to._tzm = from._tzm;
	      }
	      if (!isUndefined(from._isUTC)) {
	        to._isUTC = from._isUTC;
	      }
	      if (!isUndefined(from._offset)) {
	        to._offset = from._offset;
	      }
	      if (!isUndefined(from._pf)) {
	        to._pf = getParsingFlags(from);
	      }
	      if (!isUndefined(from._locale)) {
	        to._locale = from._locale;
	      }
	      if (momentProperties.length > 0) {
	        for (i in momentProperties) {
	          prop = momentProperties[$traceurRuntime.toProperty(i)];
	          val = from[$traceurRuntime.toProperty(prop)];
	          if (!isUndefined(val)) {
	            $traceurRuntime.setProperty(to, prop, val);
	          }
	        }
	      }
	      return to;
	    }
	    var updateInProgress = false;
	    function Moment(config) {
	      copyConfig(this, config);
	      this._d = new Date(config._d != null ? config._d.getTime() : NaN);
	      if (updateInProgress === false) {
	        updateInProgress = true;
	        utils_hooks__hooks.updateOffset(this);
	        updateInProgress = false;
	      }
	    }
	    function isMoment(obj) {
	      return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
	    }
	    function absFloor(number) {
	      if (number < 0) {
	        return Math.ceil(number) || 0;
	      } else {
	        return Math.floor(number);
	      }
	    }
	    function toInt(argumentForCoercion) {
	      var coercedNumber = +argumentForCoercion,
	          value = 0;
	      if (coercedNumber !== 0 && isFinite(coercedNumber)) {
	        value = absFloor(coercedNumber);
	      }
	      return value;
	    }
	    function compareArrays(array1, array2, dontConvert) {
	      var len = Math.min(array1.length, array2.length),
	          lengthDiff = Math.abs(array1.length - array2.length),
	          diffs = 0,
	          i;
	      for (i = 0; i < len; i++) {
	        if ((dontConvert && array1[$traceurRuntime.toProperty(i)] !== array2[$traceurRuntime.toProperty(i)]) || (!dontConvert && toInt(array1[$traceurRuntime.toProperty(i)]) !== toInt(array2[$traceurRuntime.toProperty(i)]))) {
	          diffs++;
	        }
	      }
	      return diffs + lengthDiff;
	    }
	    function warn(msg) {
	      if (utils_hooks__hooks.suppressDeprecationWarnings === false && (typeof console !== 'undefined') && console.warn) {
	        console.warn('Deprecation warning: ' + msg);
	      }
	    }
	    function deprecate(msg, fn) {
	      var firstTime = true;
	      return extend(function() {
	        if (utils_hooks__hooks.deprecationHandler != null) {
	          utils_hooks__hooks.deprecationHandler(null, msg);
	        }
	        if (firstTime) {
	          var args = [];
	          var arg;
	          for (var i = 0; i < arguments.length; i++) {
	            arg = '';
	            if ($traceurRuntime.typeof(arguments[$traceurRuntime.toProperty(i)]) === 'object') {
	              arg += '\n[' + i + '] ';
	              for (var key in arguments[0]) {
	                arg += key + ': ' + arguments[0][$traceurRuntime.toProperty(key)] + ', ';
	              }
	              arg = arg.slice(0, -2);
	            } else {
	              arg = arguments[$traceurRuntime.toProperty(i)];
	            }
	            args.push(arg);
	          }
	          warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
	          firstTime = false;
	        }
	        return fn.apply(this, arguments);
	      }, fn);
	    }
	    var deprecations = {};
	    function deprecateSimple(name, msg) {
	      if (utils_hooks__hooks.deprecationHandler != null) {
	        utils_hooks__hooks.deprecationHandler(name, msg);
	      }
	      if (!deprecations[$traceurRuntime.toProperty(name)]) {
	        warn(msg);
	        $traceurRuntime.setProperty(deprecations, name, true);
	      }
	    }
	    utils_hooks__hooks.suppressDeprecationWarnings = false;
	    utils_hooks__hooks.deprecationHandler = null;
	    function isFunction(input) {
	      return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
	    }
	    function locale_set__set(config) {
	      var prop,
	          i;
	      for (i in config) {
	        prop = config[$traceurRuntime.toProperty(i)];
	        if (isFunction(prop)) {
	          $traceurRuntime.setProperty(this, i, prop);
	        } else {
	          $traceurRuntime.setProperty(this, '_' + i, prop);
	        }
	      }
	      this._config = config;
	      this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);
	    }
	    function mergeConfigs(parentConfig, childConfig) {
	      var res = extend({}, parentConfig),
	          prop;
	      for (prop in childConfig) {
	        if (hasOwnProp(childConfig, prop)) {
	          if (isObject(parentConfig[$traceurRuntime.toProperty(prop)]) && isObject(childConfig[$traceurRuntime.toProperty(prop)])) {
	            $traceurRuntime.setProperty(res, prop, {});
	            extend(res[$traceurRuntime.toProperty(prop)], parentConfig[$traceurRuntime.toProperty(prop)]);
	            extend(res[$traceurRuntime.toProperty(prop)], childConfig[$traceurRuntime.toProperty(prop)]);
	          } else if (childConfig[$traceurRuntime.toProperty(prop)] != null) {
	            $traceurRuntime.setProperty(res, prop, childConfig[$traceurRuntime.toProperty(prop)]);
	          } else {
	            delete res[$traceurRuntime.toProperty(prop)];
	          }
	        }
	      }
	      for (prop in parentConfig) {
	        if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[$traceurRuntime.toProperty(prop)])) {
	          $traceurRuntime.setProperty(res, prop, extend({}, res[$traceurRuntime.toProperty(prop)]));
	        }
	      }
	      return res;
	    }
	    function Locale(config) {
	      if (config != null) {
	        this.set(config);
	      }
	    }
	    var keys;
	    if (Object.keys) {
	      keys = Object.keys;
	    } else {
	      keys = function(obj) {
	        var i,
	            res = [];
	        for (i in obj) {
	          if (hasOwnProp(obj, i)) {
	            res.push(i);
	          }
	        }
	        return res;
	      };
	    }
	    var defaultCalendar = {
	      sameDay: '[Today at] LT',
	      nextDay: '[Tomorrow at] LT',
	      nextWeek: 'dddd [at] LT',
	      lastDay: '[Yesterday at] LT',
	      lastWeek: '[Last] dddd [at] LT',
	      sameElse: 'L'
	    };
	    function locale_calendar__calendar(key, mom, now) {
	      var output = this._calendar[$traceurRuntime.toProperty(key)] || this._calendar[$traceurRuntime.toProperty('sameElse')];
	      return isFunction(output) ? output.call(mom, now) : output;
	    }
	    var defaultLongDateFormat = {
	      LTS: 'h:mm:ss A',
	      LT: 'h:mm A',
	      L: 'MM/DD/YYYY',
	      LL: 'MMMM D, YYYY',
	      LLL: 'MMMM D, YYYY h:mm A',
	      LLLL: 'dddd, MMMM D, YYYY h:mm A'
	    };
	    function longDateFormat(key) {
	      var format = this._longDateFormat[$traceurRuntime.toProperty(key)],
	          formatUpper = this._longDateFormat[$traceurRuntime.toProperty(key.toUpperCase())];
	      if (format || !formatUpper) {
	        return format;
	      }
	      $traceurRuntime.setProperty(this._longDateFormat, key, formatUpper.replace(/MMMM|MM|DD|dddd/g, function(val) {
	        return val.slice(1);
	      }));
	      return this._longDateFormat[$traceurRuntime.toProperty(key)];
	    }
	    var defaultInvalidDate = 'Invalid date';
	    function invalidDate() {
	      return this._invalidDate;
	    }
	    var defaultOrdinal = '%d';
	    var defaultOrdinalParse = /\d{1,2}/;
	    function ordinal(number) {
	      return this._ordinal.replace('%d', number);
	    }
	    var defaultRelativeTime = {
	      future: 'in %s',
	      past: '%s ago',
	      s: 'a few seconds',
	      m: 'a minute',
	      mm: '%d minutes',
	      h: 'an hour',
	      hh: '%d hours',
	      d: 'a day',
	      dd: '%d days',
	      M: 'a month',
	      MM: '%d months',
	      y: 'a year',
	      yy: '%d years'
	    };
	    function relative__relativeTime(number, withoutSuffix, string, isFuture) {
	      var output = this._relativeTime[$traceurRuntime.toProperty(string)];
	      return (isFunction(output)) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
	    }
	    function pastFuture(diff, output) {
	      var format = this._relativeTime[$traceurRuntime.toProperty(diff > 0 ? 'future' : 'past')];
	      return isFunction(format) ? format(output) : format.replace(/%s/i, output);
	    }
	    var aliases = {};
	    function addUnitAlias(unit, shorthand) {
	      var lowerCase = unit.toLowerCase();
	      $traceurRuntime.setProperty(aliases, lowerCase, $traceurRuntime.setProperty(aliases, lowerCase + 's', $traceurRuntime.setProperty(aliases, shorthand, unit)));
	    }
	    function normalizeUnits(units) {
	      return typeof units === 'string' ? aliases[$traceurRuntime.toProperty(units)] || aliases[$traceurRuntime.toProperty(units.toLowerCase())] : undefined;
	    }
	    function normalizeObjectUnits(inputObject) {
	      var normalizedInput = {},
	          normalizedProp,
	          prop;
	      for (prop in inputObject) {
	        if (hasOwnProp(inputObject, prop)) {
	          normalizedProp = normalizeUnits(prop);
	          if (normalizedProp) {
	            $traceurRuntime.setProperty(normalizedInput, normalizedProp, inputObject[$traceurRuntime.toProperty(prop)]);
	          }
	        }
	      }
	      return normalizedInput;
	    }
	    var priorities = {};
	    function addUnitPriority(unit, priority) {
	      $traceurRuntime.setProperty(priorities, unit, priority);
	    }
	    function getPrioritizedUnits(unitsObj) {
	      var units = [];
	      for (var u in unitsObj) {
	        units.push({
	          unit: u,
	          priority: priorities[$traceurRuntime.toProperty(u)]
	        });
	      }
	      units.sort(function(a, b) {
	        return a.priority - b.priority;
	      });
	      return units;
	    }
	    function makeGetSet(unit, keepTime) {
	      return function(value) {
	        if (value != null) {
	          get_set__set(this, unit, value);
	          utils_hooks__hooks.updateOffset(this, keepTime);
	          return this;
	        } else {
	          return get_set__get(this, unit);
	        }
	      };
	    }
	    function get_set__get(mom, unit) {
	      return mom.isValid() ? mom._d[$traceurRuntime.toProperty('get' + (mom._isUTC ? 'UTC' : '') + unit)]() : NaN;
	    }
	    function get_set__set(mom, unit, value) {
	      if (mom.isValid()) {
	        mom._d[$traceurRuntime.toProperty('set' + (mom._isUTC ? 'UTC' : '') + unit)](value);
	      }
	    }
	    function stringGet(units) {
	      units = normalizeUnits(units);
	      if (isFunction(this[$traceurRuntime.toProperty(units)])) {
	        return this[$traceurRuntime.toProperty(units)]();
	      }
	      return this;
	    }
	    function stringSet(units, value) {
	      if ((typeof units === 'undefined' ? 'undefined' : $traceurRuntime.typeof(units)) === 'object') {
	        units = normalizeObjectUnits(units);
	        var prioritized = getPrioritizedUnits(units);
	        for (var i = 0; i < prioritized.length; i++) {
	          this[$traceurRuntime.toProperty(prioritized[$traceurRuntime.toProperty(i)].unit)](units[$traceurRuntime.toProperty(prioritized[$traceurRuntime.toProperty(i)].unit)]);
	        }
	      } else {
	        units = normalizeUnits(units);
	        if (isFunction(this[$traceurRuntime.toProperty(units)])) {
	          return this[$traceurRuntime.toProperty(units)](value);
	        }
	      }
	      return this;
	    }
	    function zeroFill(number, targetLength, forceSign) {
	      var absNumber = '' + Math.abs(number),
	          zerosToFill = targetLength - absNumber.length,
	          sign = number >= 0;
	      return (sign ? (forceSign ? '+' : '') : '-') + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
	    }
	    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
	    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
	    var formatFunctions = {};
	    var formatTokenFunctions = {};
	    function addFormatToken(token, padded, ordinal, callback) {
	      var func = callback;
	      if (typeof callback === 'string') {
	        func = function() {
	          return this[$traceurRuntime.toProperty(callback)]();
	        };
	      }
	      if (token) {
	        $traceurRuntime.setProperty(formatTokenFunctions, token, func);
	      }
	      if (padded) {
	        $traceurRuntime.setProperty(formatTokenFunctions, padded[0], function() {
	          return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
	        });
	      }
	      if (ordinal) {
	        $traceurRuntime.setProperty(formatTokenFunctions, ordinal, function() {
	          return this.localeData().ordinal(func.apply(this, arguments), token);
	        });
	      }
	    }
	    function removeFormattingTokens(input) {
	      if (input.match(/\[[\s\S]/)) {
	        return input.replace(/^\[|\]$/g, '');
	      }
	      return input.replace(/\\/g, '');
	    }
	    function makeFormatFunction(format) {
	      var array = format.match(formattingTokens),
	          i,
	          length;
	      for (i = 0, length = array.length; i < length; i++) {
	        if (formatTokenFunctions[$traceurRuntime.toProperty(array[$traceurRuntime.toProperty(i)])]) {
	          $traceurRuntime.setProperty(array, i, formatTokenFunctions[$traceurRuntime.toProperty(array[$traceurRuntime.toProperty(i)])]);
	        } else {
	          $traceurRuntime.setProperty(array, i, removeFormattingTokens(array[$traceurRuntime.toProperty(i)]));
	        }
	      }
	      return function(mom) {
	        var output = '',
	            i;
	        for (i = 0; i < length; i++) {
	          output += array[$traceurRuntime.toProperty(i)] instanceof Function ? array[$traceurRuntime.toProperty(i)].call(mom, format) : array[$traceurRuntime.toProperty(i)];
	        }
	        return output;
	      };
	    }
	    function formatMoment(m, format) {
	      if (!m.isValid()) {
	        return m.localeData().invalidDate();
	      }
	      format = expandFormat(format, m.localeData());
	      $traceurRuntime.setProperty(formatFunctions, format, formatFunctions[$traceurRuntime.toProperty(format)] || makeFormatFunction(format));
	      return formatFunctions[$traceurRuntime.toProperty(format)](m);
	    }
	    function expandFormat(format, locale) {
	      var i = 5;
	      function replaceLongDateFormatTokens(input) {
	        return locale.longDateFormat(input) || input;
	      }
	      localFormattingTokens.lastIndex = 0;
	      while (i >= 0 && localFormattingTokens.test(format)) {
	        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
	        localFormattingTokens.lastIndex = 0;
	        i -= 1;
	      }
	      return format;
	    }
	    var match1 = /\d/;
	    var match2 = /\d\d/;
	    var match3 = /\d{3}/;
	    var match4 = /\d{4}/;
	    var match6 = /[+-]?\d{6}/;
	    var match1to2 = /\d\d?/;
	    var match3to4 = /\d\d\d\d?/;
	    var match5to6 = /\d\d\d\d\d\d?/;
	    var match1to3 = /\d{1,3}/;
	    var match1to4 = /\d{1,4}/;
	    var match1to6 = /[+-]?\d{1,6}/;
	    var matchUnsigned = /\d+/;
	    var matchSigned = /[+-]?\d+/;
	    var matchOffset = /Z|[+-]\d\d:?\d\d/gi;
	    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi;
	    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/;
	    var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
	    var regexes = {};
	    function addRegexToken(token, regex, strictRegex) {
	      $traceurRuntime.setProperty(regexes, token, isFunction(regex) ? regex : function(isStrict, localeData) {
	        return (isStrict && strictRegex) ? strictRegex : regex;
	      });
	    }
	    function getParseRegexForToken(token, config) {
	      if (!hasOwnProp(regexes, token)) {
	        return new RegExp(unescapeFormat(token));
	      }
	      return regexes[$traceurRuntime.toProperty(token)](config._strict, config._locale);
	    }
	    function unescapeFormat(s) {
	      return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(matched, p1, p2, p3, p4) {
	        return p1 || p2 || p3 || p4;
	      }));
	    }
	    function regexEscape(s) {
	      return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	    }
	    var tokens = {};
	    function addParseToken(token, callback) {
	      var i,
	          func = callback;
	      if (typeof token === 'string') {
	        token = [token];
	      }
	      if (typeof callback === 'number') {
	        func = function(input, array) {
	          $traceurRuntime.setProperty(array, callback, toInt(input));
	        };
	      }
	      for (i = 0; i < token.length; i++) {
	        $traceurRuntime.setProperty(tokens, token[$traceurRuntime.toProperty(i)], func);
	      }
	    }
	    function addWeekParseToken(token, callback) {
	      addParseToken(token, function(input, array, config, token) {
	        config._w = config._w || {};
	        callback(input, config._w, config, token);
	      });
	    }
	    function addTimeToArrayFromToken(token, input, config) {
	      if (input != null && hasOwnProp(tokens, token)) {
	        tokens[$traceurRuntime.toProperty(token)](input, config._a, config, token);
	      }
	    }
	    var YEAR = 0;
	    var MONTH = 1;
	    var DATE = 2;
	    var HOUR = 3;
	    var MINUTE = 4;
	    var SECOND = 5;
	    var MILLISECOND = 6;
	    var WEEK = 7;
	    var WEEKDAY = 8;
	    var indexOf;
	    if (Array.prototype.indexOf) {
	      indexOf = Array.prototype.indexOf;
	    } else {
	      indexOf = function(o) {
	        var i;
	        for (i = 0; i < this.length; ++i) {
	          if (this[$traceurRuntime.toProperty(i)] === o) {
	            return i;
	          }
	        }
	        return -1;
	      };
	    }
	    function daysInMonth(year, month) {
	      return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
	    }
	    addFormatToken('M', ['MM', 2], 'Mo', function() {
	      return this.month() + 1;
	    });
	    addFormatToken('MMM', 0, 0, function(format) {
	      return this.localeData().monthsShort(this, format);
	    });
	    addFormatToken('MMMM', 0, 0, function(format) {
	      return this.localeData().months(this, format);
	    });
	    addUnitAlias('month', 'M');
	    addUnitPriority('month', 8);
	    addRegexToken('M', match1to2);
	    addRegexToken('MM', match1to2, match2);
	    addRegexToken('MMM', function(isStrict, locale) {
	      return locale.monthsShortRegex(isStrict);
	    });
	    addRegexToken('MMMM', function(isStrict, locale) {
	      return locale.monthsRegex(isStrict);
	    });
	    addParseToken(['M', 'MM'], function(input, array) {
	      $traceurRuntime.setProperty(array, MONTH, toInt(input) - 1);
	    });
	    addParseToken(['MMM', 'MMMM'], function(input, array, config, token) {
	      var month = config._locale.monthsParse(input, token, config._strict);
	      if (month != null) {
	        $traceurRuntime.setProperty(array, MONTH, month);
	      } else {
	        getParsingFlags(config).invalidMonth = input;
	      }
	    });
	    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
	    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
	    function localeMonths(m, format) {
	      if (!m) {
	        return this._months;
	      }
	      return isArray(this._months) ? this._months[$traceurRuntime.toProperty(m.month())] : this._months[$traceurRuntime.toProperty((this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone')][$traceurRuntime.toProperty(m.month())];
	    }
	    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
	    function localeMonthsShort(m, format) {
	      if (!m) {
	        return this._monthsShort;
	      }
	      return isArray(this._monthsShort) ? this._monthsShort[$traceurRuntime.toProperty(m.month())] : this._monthsShort[$traceurRuntime.toProperty(MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone')][$traceurRuntime.toProperty(m.month())];
	    }
	    function units_month__handleStrictParse(monthName, format, strict) {
	      var i,
	          ii,
	          mom,
	          llc = monthName.toLocaleLowerCase();
	      if (!this._monthsParse) {
	        this._monthsParse = [];
	        this._longMonthsParse = [];
	        this._shortMonthsParse = [];
	        for (i = 0; i < 12; ++i) {
	          mom = create_utc__createUTC([2000, i]);
	          $traceurRuntime.setProperty(this._shortMonthsParse, i, this.monthsShort(mom, '').toLocaleLowerCase());
	          $traceurRuntime.setProperty(this._longMonthsParse, i, this.months(mom, '').toLocaleLowerCase());
	        }
	      }
	      if (strict) {
	        if (format === 'MMM') {
	          ii = indexOf.call(this._shortMonthsParse, llc);
	          return ii !== -1 ? ii : null;
	        } else {
	          ii = indexOf.call(this._longMonthsParse, llc);
	          return ii !== -1 ? ii : null;
	        }
	      } else {
	        if (format === 'MMM') {
	          ii = indexOf.call(this._shortMonthsParse, llc);
	          if (ii !== -1) {
	            return ii;
	          }
	          ii = indexOf.call(this._longMonthsParse, llc);
	          return ii !== -1 ? ii : null;
	        } else {
	          ii = indexOf.call(this._longMonthsParse, llc);
	          if (ii !== -1) {
	            return ii;
	          }
	          ii = indexOf.call(this._shortMonthsParse, llc);
	          return ii !== -1 ? ii : null;
	        }
	      }
	    }
	    function localeMonthsParse(monthName, format, strict) {
	      var i,
	          mom,
	          regex;
	      if (this._monthsParseExact) {
	        return units_month__handleStrictParse.call(this, monthName, format, strict);
	      }
	      if (!this._monthsParse) {
	        this._monthsParse = [];
	        this._longMonthsParse = [];
	        this._shortMonthsParse = [];
	      }
	      for (i = 0; i < 12; i++) {
	        mom = create_utc__createUTC([2000, i]);
	        if (strict && !this._longMonthsParse[$traceurRuntime.toProperty(i)]) {
	          $traceurRuntime.setProperty(this._longMonthsParse, i, new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i'));
	          $traceurRuntime.setProperty(this._shortMonthsParse, i, new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i'));
	        }
	        if (!strict && !this._monthsParse[$traceurRuntime.toProperty(i)]) {
	          regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
	          $traceurRuntime.setProperty(this._monthsParse, i, new RegExp(regex.replace('.', ''), 'i'));
	        }
	        if (strict && format === 'MMMM' && this._longMonthsParse[$traceurRuntime.toProperty(i)].test(monthName)) {
	          return i;
	        } else if (strict && format === 'MMM' && this._shortMonthsParse[$traceurRuntime.toProperty(i)].test(monthName)) {
	          return i;
	        } else if (!strict && this._monthsParse[$traceurRuntime.toProperty(i)].test(monthName)) {
	          return i;
	        }
	      }
	    }
	    function setMonth(mom, value) {
	      var dayOfMonth;
	      if (!mom.isValid()) {
	        return mom;
	      }
	      if (typeof value === 'string') {
	        if (/^\d+$/.test(value)) {
	          value = toInt(value);
	        } else {
	          value = mom.localeData().monthsParse(value);
	          if (typeof value !== 'number') {
	            return mom;
	          }
	        }
	      }
	      dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
	      mom._d[$traceurRuntime.toProperty('set' + (mom._isUTC ? 'UTC' : '') + 'Month')](value, dayOfMonth);
	      return mom;
	    }
	    function getSetMonth(value) {
	      if (value != null) {
	        setMonth(this, value);
	        utils_hooks__hooks.updateOffset(this, true);
	        return this;
	      } else {
	        return get_set__get(this, 'Month');
	      }
	    }
	    function getDaysInMonth() {
	      return daysInMonth(this.year(), this.month());
	    }
	    var defaultMonthsShortRegex = matchWord;
	    function monthsShortRegex(isStrict) {
	      if (this._monthsParseExact) {
	        if (!hasOwnProp(this, '_monthsRegex')) {
	          computeMonthsParse.call(this);
	        }
	        if (isStrict) {
	          return this._monthsShortStrictRegex;
	        } else {
	          return this._monthsShortRegex;
	        }
	      } else {
	        if (!hasOwnProp(this, '_monthsShortRegex')) {
	          this._monthsShortRegex = defaultMonthsShortRegex;
	        }
	        return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
	      }
	    }
	    var defaultMonthsRegex = matchWord;
	    function monthsRegex(isStrict) {
	      if (this._monthsParseExact) {
	        if (!hasOwnProp(this, '_monthsRegex')) {
	          computeMonthsParse.call(this);
	        }
	        if (isStrict) {
	          return this._monthsStrictRegex;
	        } else {
	          return this._monthsRegex;
	        }
	      } else {
	        if (!hasOwnProp(this, '_monthsRegex')) {
	          this._monthsRegex = defaultMonthsRegex;
	        }
	        return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
	      }
	    }
	    function computeMonthsParse() {
	      function cmpLenRev(a, b) {
	        return b.length - a.length;
	      }
	      var shortPieces = [],
	          longPieces = [],
	          mixedPieces = [],
	          i,
	          mom;
	      for (i = 0; i < 12; i++) {
	        mom = create_utc__createUTC([2000, i]);
	        shortPieces.push(this.monthsShort(mom, ''));
	        longPieces.push(this.months(mom, ''));
	        mixedPieces.push(this.months(mom, ''));
	        mixedPieces.push(this.monthsShort(mom, ''));
	      }
	      shortPieces.sort(cmpLenRev);
	      longPieces.sort(cmpLenRev);
	      mixedPieces.sort(cmpLenRev);
	      for (i = 0; i < 12; i++) {
	        $traceurRuntime.setProperty(shortPieces, i, regexEscape(shortPieces[$traceurRuntime.toProperty(i)]));
	        $traceurRuntime.setProperty(longPieces, i, regexEscape(longPieces[$traceurRuntime.toProperty(i)]));
	      }
	      for (i = 0; i < 24; i++) {
	        $traceurRuntime.setProperty(mixedPieces, i, regexEscape(mixedPieces[$traceurRuntime.toProperty(i)]));
	      }
	      this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
	      this._monthsShortRegex = this._monthsRegex;
	      this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
	      this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
	    }
	    addFormatToken('Y', 0, 0, function() {
	      var y = this.year();
	      return y <= 9999 ? '' + y : '+' + y;
	    });
	    addFormatToken(0, ['YY', 2], 0, function() {
	      return this.year() % 100;
	    });
	    addFormatToken(0, ['YYYY', 4], 0, 'year');
	    addFormatToken(0, ['YYYYY', 5], 0, 'year');
	    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');
	    addUnitAlias('year', 'y');
	    addUnitPriority('year', 1);
	    addRegexToken('Y', matchSigned);
	    addRegexToken('YY', match1to2, match2);
	    addRegexToken('YYYY', match1to4, match4);
	    addRegexToken('YYYYY', match1to6, match6);
	    addRegexToken('YYYYYY', match1to6, match6);
	    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
	    addParseToken('YYYY', function(input, array) {
	      $traceurRuntime.setProperty(array, YEAR, input.length === 2 ? utils_hooks__hooks.parseTwoDigitYear(input) : toInt(input));
	    });
	    addParseToken('YY', function(input, array) {
	      $traceurRuntime.setProperty(array, YEAR, utils_hooks__hooks.parseTwoDigitYear(input));
	    });
	    addParseToken('Y', function(input, array) {
	      $traceurRuntime.setProperty(array, YEAR, parseInt(input, 10));
	    });
	    function daysInYear(year) {
	      return isLeapYear(year) ? 366 : 365;
	    }
	    function isLeapYear(year) {
	      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	    }
	    utils_hooks__hooks.parseTwoDigitYear = function(input) {
	      return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
	    };
	    var getSetYear = makeGetSet('FullYear', true);
	    function getIsLeapYear() {
	      return isLeapYear(this.year());
	    }
	    function createDate(y, m, d, h, M, s, ms) {
	      var date = new Date(y, m, d, h, M, s, ms);
	      if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
	        date.setFullYear(y);
	      }
	      return date;
	    }
	    function createUTCDate(y) {
	      var date = new Date(Date.UTC.apply(null, arguments));
	      if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
	        date.setUTCFullYear(y);
	      }
	      return date;
	    }
	    function firstWeekOffset(year, dow, doy) {
	      var fwd = 7 + dow - doy,
	          fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
	      return -fwdlw + fwd - 1;
	    }
	    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
	      var localWeekday = (7 + weekday - dow) % 7,
	          weekOffset = firstWeekOffset(year, dow, doy),
	          dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
	          resYear,
	          resDayOfYear;
	      if (dayOfYear <= 0) {
	        resYear = year - 1;
	        resDayOfYear = daysInYear(resYear) + dayOfYear;
	      } else if (dayOfYear > daysInYear(year)) {
	        resYear = year + 1;
	        resDayOfYear = dayOfYear - daysInYear(year);
	      } else {
	        resYear = year;
	        resDayOfYear = dayOfYear;
	      }
	      return {
	        year: resYear,
	        dayOfYear: resDayOfYear
	      };
	    }
	    function weekOfYear(mom, dow, doy) {
	      var weekOffset = firstWeekOffset(mom.year(), dow, doy),
	          week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
	          resWeek,
	          resYear;
	      if (week < 1) {
	        resYear = mom.year() - 1;
	        resWeek = week + weeksInYear(resYear, dow, doy);
	      } else if (week > weeksInYear(mom.year(), dow, doy)) {
	        resWeek = week - weeksInYear(mom.year(), dow, doy);
	        resYear = mom.year() + 1;
	      } else {
	        resYear = mom.year();
	        resWeek = week;
	      }
	      return {
	        week: resWeek,
	        year: resYear
	      };
	    }
	    function weeksInYear(year, dow, doy) {
	      var weekOffset = firstWeekOffset(year, dow, doy),
	          weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
	      return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
	    }
	    addFormatToken('w', ['ww', 2], 'wo', 'week');
	    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');
	    addUnitAlias('week', 'w');
	    addUnitAlias('isoWeek', 'W');
	    addUnitPriority('week', 5);
	    addUnitPriority('isoWeek', 5);
	    addRegexToken('w', match1to2);
	    addRegexToken('ww', match1to2, match2);
	    addRegexToken('W', match1to2);
	    addRegexToken('WW', match1to2, match2);
	    addWeekParseToken(['w', 'ww', 'W', 'WW'], function(input, week, config, token) {
	      $traceurRuntime.setProperty(week, token.substr(0, 1), toInt(input));
	    });
	    function localeWeek(mom) {
	      return weekOfYear(mom, this._week.dow, this._week.doy).week;
	    }
	    var defaultLocaleWeek = {
	      dow: 0,
	      doy: 6
	    };
	    function localeFirstDayOfWeek() {
	      return this._week.dow;
	    }
	    function localeFirstDayOfYear() {
	      return this._week.doy;
	    }
	    function getSetWeek(input) {
	      var week = this.localeData().week(this);
	      return input == null ? week : this.add((input - week) * 7, 'd');
	    }
	    function getSetISOWeek(input) {
	      var week = weekOfYear(this, 1, 4).week;
	      return input == null ? week : this.add((input - week) * 7, 'd');
	    }
	    addFormatToken('d', 0, 'do', 'day');
	    addFormatToken('dd', 0, 0, function(format) {
	      return this.localeData().weekdaysMin(this, format);
	    });
	    addFormatToken('ddd', 0, 0, function(format) {
	      return this.localeData().weekdaysShort(this, format);
	    });
	    addFormatToken('dddd', 0, 0, function(format) {
	      return this.localeData().weekdays(this, format);
	    });
	    addFormatToken('e', 0, 0, 'weekday');
	    addFormatToken('E', 0, 0, 'isoWeekday');
	    addUnitAlias('day', 'd');
	    addUnitAlias('weekday', 'e');
	    addUnitAlias('isoWeekday', 'E');
	    addUnitPriority('day', 11);
	    addUnitPriority('weekday', 11);
	    addUnitPriority('isoWeekday', 11);
	    addRegexToken('d', match1to2);
	    addRegexToken('e', match1to2);
	    addRegexToken('E', match1to2);
	    addRegexToken('dd', function(isStrict, locale) {
	      return locale.weekdaysMinRegex(isStrict);
	    });
	    addRegexToken('ddd', function(isStrict, locale) {
	      return locale.weekdaysShortRegex(isStrict);
	    });
	    addRegexToken('dddd', function(isStrict, locale) {
	      return locale.weekdaysRegex(isStrict);
	    });
	    addWeekParseToken(['dd', 'ddd', 'dddd'], function(input, week, config, token) {
	      var weekday = config._locale.weekdaysParse(input, token, config._strict);
	      if (weekday != null) {
	        week.d = weekday;
	      } else {
	        getParsingFlags(config).invalidWeekday = input;
	      }
	    });
	    addWeekParseToken(['d', 'e', 'E'], function(input, week, config, token) {
	      $traceurRuntime.setProperty(week, token, toInt(input));
	    });
	    function parseWeekday(input, locale) {
	      if (typeof input !== 'string') {
	        return input;
	      }
	      if (!isNaN(input)) {
	        return parseInt(input, 10);
	      }
	      input = locale.weekdaysParse(input);
	      if (typeof input === 'number') {
	        return input;
	      }
	      return null;
	    }
	    function parseIsoWeekday(input, locale) {
	      if (typeof input === 'string') {
	        return locale.weekdaysParse(input) % 7 || 7;
	      }
	      return isNaN(input) ? null : input;
	    }
	    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
	    function localeWeekdays(m, format) {
	      if (!m) {
	        return this._weekdays;
	      }
	      return isArray(this._weekdays) ? this._weekdays[$traceurRuntime.toProperty(m.day())] : this._weekdays[$traceurRuntime.toProperty(this._weekdays.isFormat.test(format) ? 'format' : 'standalone')][$traceurRuntime.toProperty(m.day())];
	    }
	    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
	    function localeWeekdaysShort(m) {
	      return (m) ? this._weekdaysShort[$traceurRuntime.toProperty(m.day())] : this._weekdaysShort;
	    }
	    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
	    function localeWeekdaysMin(m) {
	      return (m) ? this._weekdaysMin[$traceurRuntime.toProperty(m.day())] : this._weekdaysMin;
	    }
	    function day_of_week__handleStrictParse(weekdayName, format, strict) {
	      var i,
	          ii,
	          mom,
	          llc = weekdayName.toLocaleLowerCase();
	      if (!this._weekdaysParse) {
	        this._weekdaysParse = [];
	        this._shortWeekdaysParse = [];
	        this._minWeekdaysParse = [];
	        for (i = 0; i < 7; ++i) {
	          mom = create_utc__createUTC([2000, 1]).day(i);
	          $traceurRuntime.setProperty(this._minWeekdaysParse, i, this.weekdaysMin(mom, '').toLocaleLowerCase());
	          $traceurRuntime.setProperty(this._shortWeekdaysParse, i, this.weekdaysShort(mom, '').toLocaleLowerCase());
	          $traceurRuntime.setProperty(this._weekdaysParse, i, this.weekdays(mom, '').toLocaleLowerCase());
	        }
	      }
	      if (strict) {
	        if (format === 'dddd') {
	          ii = indexOf.call(this._weekdaysParse, llc);
	          return ii !== -1 ? ii : null;
	        } else if (format === 'ddd') {
	          ii = indexOf.call(this._shortWeekdaysParse, llc);
	          return ii !== -1 ? ii : null;
	        } else {
	          ii = indexOf.call(this._minWeekdaysParse, llc);
	          return ii !== -1 ? ii : null;
	        }
	      } else {
	        if (format === 'dddd') {
	          ii = indexOf.call(this._weekdaysParse, llc);
	          if (ii !== -1) {
	            return ii;
	          }
	          ii = indexOf.call(this._shortWeekdaysParse, llc);
	          if (ii !== -1) {
	            return ii;
	          }
	          ii = indexOf.call(this._minWeekdaysParse, llc);
	          return ii !== -1 ? ii : null;
	        } else if (format === 'ddd') {
	          ii = indexOf.call(this._shortWeekdaysParse, llc);
	          if (ii !== -1) {
	            return ii;
	          }
	          ii = indexOf.call(this._weekdaysParse, llc);
	          if (ii !== -1) {
	            return ii;
	          }
	          ii = indexOf.call(this._minWeekdaysParse, llc);
	          return ii !== -1 ? ii : null;
	        } else {
	          ii = indexOf.call(this._minWeekdaysParse, llc);
	          if (ii !== -1) {
	            return ii;
	          }
	          ii = indexOf.call(this._weekdaysParse, llc);
	          if (ii !== -1) {
	            return ii;
	          }
	          ii = indexOf.call(this._shortWeekdaysParse, llc);
	          return ii !== -1 ? ii : null;
	        }
	      }
	    }
	    function localeWeekdaysParse(weekdayName, format, strict) {
	      var i,
	          mom,
	          regex;
	      if (this._weekdaysParseExact) {
	        return day_of_week__handleStrictParse.call(this, weekdayName, format, strict);
	      }
	      if (!this._weekdaysParse) {
	        this._weekdaysParse = [];
	        this._minWeekdaysParse = [];
	        this._shortWeekdaysParse = [];
	        this._fullWeekdaysParse = [];
	      }
	      for (i = 0; i < 7; i++) {
	        mom = create_utc__createUTC([2000, 1]).day(i);
	        if (strict && !this._fullWeekdaysParse[$traceurRuntime.toProperty(i)]) {
	          $traceurRuntime.setProperty(this._fullWeekdaysParse, i, new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i'));
	          $traceurRuntime.setProperty(this._shortWeekdaysParse, i, new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i'));
	          $traceurRuntime.setProperty(this._minWeekdaysParse, i, new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i'));
	        }
	        if (!this._weekdaysParse[$traceurRuntime.toProperty(i)]) {
	          regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
	          $traceurRuntime.setProperty(this._weekdaysParse, i, new RegExp(regex.replace('.', ''), 'i'));
	        }
	        if (strict && format === 'dddd' && this._fullWeekdaysParse[$traceurRuntime.toProperty(i)].test(weekdayName)) {
	          return i;
	        } else if (strict && format === 'ddd' && this._shortWeekdaysParse[$traceurRuntime.toProperty(i)].test(weekdayName)) {
	          return i;
	        } else if (strict && format === 'dd' && this._minWeekdaysParse[$traceurRuntime.toProperty(i)].test(weekdayName)) {
	          return i;
	        } else if (!strict && this._weekdaysParse[$traceurRuntime.toProperty(i)].test(weekdayName)) {
	          return i;
	        }
	      }
	    }
	    function getSetDayOfWeek(input) {
	      if (!this.isValid()) {
	        return input != null ? this : NaN;
	      }
	      var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
	      if (input != null) {
	        input = parseWeekday(input, this.localeData());
	        return this.add(input - day, 'd');
	      } else {
	        return day;
	      }
	    }
	    function getSetLocaleDayOfWeek(input) {
	      if (!this.isValid()) {
	        return input != null ? this : NaN;
	      }
	      var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
	      return input == null ? weekday : this.add(input - weekday, 'd');
	    }
	    function getSetISODayOfWeek(input) {
	      if (!this.isValid()) {
	        return input != null ? this : NaN;
	      }
	      if (input != null) {
	        var weekday = parseIsoWeekday(input, this.localeData());
	        return this.day(this.day() % 7 ? weekday : weekday - 7);
	      } else {
	        return this.day() || 7;
	      }
	    }
	    var defaultWeekdaysRegex = matchWord;
	    function weekdaysRegex(isStrict) {
	      if (this._weekdaysParseExact) {
	        if (!hasOwnProp(this, '_weekdaysRegex')) {
	          computeWeekdaysParse.call(this);
	        }
	        if (isStrict) {
	          return this._weekdaysStrictRegex;
	        } else {
	          return this._weekdaysRegex;
	        }
	      } else {
	        if (!hasOwnProp(this, '_weekdaysRegex')) {
	          this._weekdaysRegex = defaultWeekdaysRegex;
	        }
	        return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
	      }
	    }
	    var defaultWeekdaysShortRegex = matchWord;
	    function weekdaysShortRegex(isStrict) {
	      if (this._weekdaysParseExact) {
	        if (!hasOwnProp(this, '_weekdaysRegex')) {
	          computeWeekdaysParse.call(this);
	        }
	        if (isStrict) {
	          return this._weekdaysShortStrictRegex;
	        } else {
	          return this._weekdaysShortRegex;
	        }
	      } else {
	        if (!hasOwnProp(this, '_weekdaysShortRegex')) {
	          this._weekdaysShortRegex = defaultWeekdaysShortRegex;
	        }
	        return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
	      }
	    }
	    var defaultWeekdaysMinRegex = matchWord;
	    function weekdaysMinRegex(isStrict) {
	      if (this._weekdaysParseExact) {
	        if (!hasOwnProp(this, '_weekdaysRegex')) {
	          computeWeekdaysParse.call(this);
	        }
	        if (isStrict) {
	          return this._weekdaysMinStrictRegex;
	        } else {
	          return this._weekdaysMinRegex;
	        }
	      } else {
	        if (!hasOwnProp(this, '_weekdaysMinRegex')) {
	          this._weekdaysMinRegex = defaultWeekdaysMinRegex;
	        }
	        return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
	      }
	    }
	    function computeWeekdaysParse() {
	      function cmpLenRev(a, b) {
	        return b.length - a.length;
	      }
	      var minPieces = [],
	          shortPieces = [],
	          longPieces = [],
	          mixedPieces = [],
	          i,
	          mom,
	          minp,
	          shortp,
	          longp;
	      for (i = 0; i < 7; i++) {
	        mom = create_utc__createUTC([2000, 1]).day(i);
	        minp = this.weekdaysMin(mom, '');
	        shortp = this.weekdaysShort(mom, '');
	        longp = this.weekdays(mom, '');
	        minPieces.push(minp);
	        shortPieces.push(shortp);
	        longPieces.push(longp);
	        mixedPieces.push(minp);
	        mixedPieces.push(shortp);
	        mixedPieces.push(longp);
	      }
	      minPieces.sort(cmpLenRev);
	      shortPieces.sort(cmpLenRev);
	      longPieces.sort(cmpLenRev);
	      mixedPieces.sort(cmpLenRev);
	      for (i = 0; i < 7; i++) {
	        $traceurRuntime.setProperty(shortPieces, i, regexEscape(shortPieces[$traceurRuntime.toProperty(i)]));
	        $traceurRuntime.setProperty(longPieces, i, regexEscape(longPieces[$traceurRuntime.toProperty(i)]));
	        $traceurRuntime.setProperty(mixedPieces, i, regexEscape(mixedPieces[$traceurRuntime.toProperty(i)]));
	      }
	      this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
	      this._weekdaysShortRegex = this._weekdaysRegex;
	      this._weekdaysMinRegex = this._weekdaysRegex;
	      this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
	      this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
	      this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
	    }
	    function hFormat() {
	      return this.hours() % 12 || 12;
	    }
	    function kFormat() {
	      return this.hours() || 24;
	    }
	    addFormatToken('H', ['HH', 2], 0, 'hour');
	    addFormatToken('h', ['hh', 2], 0, hFormat);
	    addFormatToken('k', ['kk', 2], 0, kFormat);
	    addFormatToken('hmm', 0, 0, function() {
	      return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
	    });
	    addFormatToken('hmmss', 0, 0, function() {
	      return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
	    });
	    addFormatToken('Hmm', 0, 0, function() {
	      return '' + this.hours() + zeroFill(this.minutes(), 2);
	    });
	    addFormatToken('Hmmss', 0, 0, function() {
	      return '' + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
	    });
	    function meridiem(token, lowercase) {
	      addFormatToken(token, 0, 0, function() {
	        return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
	      });
	    }
	    meridiem('a', true);
	    meridiem('A', false);
	    addUnitAlias('hour', 'h');
	    addUnitPriority('hour', 13);
	    function matchMeridiem(isStrict, locale) {
	      return locale._meridiemParse;
	    }
	    addRegexToken('a', matchMeridiem);
	    addRegexToken('A', matchMeridiem);
	    addRegexToken('H', match1to2);
	    addRegexToken('h', match1to2);
	    addRegexToken('HH', match1to2, match2);
	    addRegexToken('hh', match1to2, match2);
	    addRegexToken('hmm', match3to4);
	    addRegexToken('hmmss', match5to6);
	    addRegexToken('Hmm', match3to4);
	    addRegexToken('Hmmss', match5to6);
	    addParseToken(['H', 'HH'], HOUR);
	    addParseToken(['a', 'A'], function(input, array, config) {
	      config._isPm = config._locale.isPM(input);
	      config._meridiem = input;
	    });
	    addParseToken(['h', 'hh'], function(input, array, config) {
	      $traceurRuntime.setProperty(array, HOUR, toInt(input));
	      getParsingFlags(config).bigHour = true;
	    });
	    addParseToken('hmm', function(input, array, config) {
	      var pos = input.length - 2;
	      $traceurRuntime.setProperty(array, HOUR, toInt(input.substr(0, pos)));
	      $traceurRuntime.setProperty(array, MINUTE, toInt(input.substr(pos)));
	      getParsingFlags(config).bigHour = true;
	    });
	    addParseToken('hmmss', function(input, array, config) {
	      var pos1 = input.length - 4;
	      var pos2 = input.length - 2;
	      $traceurRuntime.setProperty(array, HOUR, toInt(input.substr(0, pos1)));
	      $traceurRuntime.setProperty(array, MINUTE, toInt(input.substr(pos1, 2)));
	      $traceurRuntime.setProperty(array, SECOND, toInt(input.substr(pos2)));
	      getParsingFlags(config).bigHour = true;
	    });
	    addParseToken('Hmm', function(input, array, config) {
	      var pos = input.length - 2;
	      $traceurRuntime.setProperty(array, HOUR, toInt(input.substr(0, pos)));
	      $traceurRuntime.setProperty(array, MINUTE, toInt(input.substr(pos)));
	    });
	    addParseToken('Hmmss', function(input, array, config) {
	      var pos1 = input.length - 4;
	      var pos2 = input.length - 2;
	      $traceurRuntime.setProperty(array, HOUR, toInt(input.substr(0, pos1)));
	      $traceurRuntime.setProperty(array, MINUTE, toInt(input.substr(pos1, 2)));
	      $traceurRuntime.setProperty(array, SECOND, toInt(input.substr(pos2)));
	    });
	    function localeIsPM(input) {
	      return ((input + '').toLowerCase().charAt(0) === 'p');
	    }
	    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
	    function localeMeridiem(hours, minutes, isLower) {
	      if (hours > 11) {
	        return isLower ? 'pm' : 'PM';
	      } else {
	        return isLower ? 'am' : 'AM';
	      }
	    }
	    var getSetHour = makeGetSet('Hours', true);
	    var baseConfig = {
	      calendar: defaultCalendar,
	      longDateFormat: defaultLongDateFormat,
	      invalidDate: defaultInvalidDate,
	      ordinal: defaultOrdinal,
	      ordinalParse: defaultOrdinalParse,
	      relativeTime: defaultRelativeTime,
	      months: defaultLocaleMonths,
	      monthsShort: defaultLocaleMonthsShort,
	      week: defaultLocaleWeek,
	      weekdays: defaultLocaleWeekdays,
	      weekdaysMin: defaultLocaleWeekdaysMin,
	      weekdaysShort: defaultLocaleWeekdaysShort,
	      meridiemParse: defaultLocaleMeridiemParse
	    };
	    var locales = {};
	    var globalLocale;
	    function normalizeLocale(key) {
	      return key ? key.toLowerCase().replace('_', '-') : key;
	    }
	    function chooseLocale(names) {
	      var i = 0,
	          j,
	          next,
	          locale,
	          split;
	      while (i < names.length) {
	        split = normalizeLocale(names[$traceurRuntime.toProperty(i)]).split('-');
	        j = split.length;
	        next = normalizeLocale(names[$traceurRuntime.toProperty(i + 1)]);
	        next = next ? next.split('-') : null;
	        while (j > 0) {
	          locale = loadLocale(split.slice(0, j).join('-'));
	          if (locale) {
	            return locale;
	          }
	          if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
	            break;
	          }
	          j--;
	        }
	        i++;
	      }
	      return null;
	    }
	    function loadLocale(name) {
	      var oldLocale = null;
	      if (!locales[$traceurRuntime.toProperty(name)] && (typeof module !== 'undefined') && module && module.exports) {
	        try {
	          oldLocale = globalLocale._abbr;
	          __webpack_require__(48)("./" + name);
	          locale_locales__getSetGlobalLocale(oldLocale);
	        } catch (e) {}
	      }
	      return locales[$traceurRuntime.toProperty(name)];
	    }
	    function locale_locales__getSetGlobalLocale(key, values) {
	      var data;
	      if (key) {
	        if (isUndefined(values)) {
	          data = locale_locales__getLocale(key);
	        } else {
	          data = defineLocale(key, values);
	        }
	        if (data) {
	          globalLocale = data;
	        }
	      }
	      return globalLocale._abbr;
	    }
	    function defineLocale(name, config) {
	      if (config !== null) {
	        var parentConfig = baseConfig;
	        config.abbr = name;
	        if (locales[$traceurRuntime.toProperty(name)] != null) {
	          deprecateSimple('defineLocaleOverride', 'use moment.updateLocale(localeName, config) to change ' + 'an existing locale. moment.defineLocale(localeName, ' + 'config) should only be used for creating a new locale ' + 'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
	          parentConfig = locales[$traceurRuntime.toProperty(name)]._config;
	        } else if (config.parentLocale != null) {
	          if (locales[$traceurRuntime.toProperty(config.parentLocale)] != null) {
	            parentConfig = locales[$traceurRuntime.toProperty(config.parentLocale)]._config;
	          } else {
	            deprecateSimple('parentLocaleUndefined', 'specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/');
	          }
	        }
	        $traceurRuntime.setProperty(locales, name, new Locale(mergeConfigs(parentConfig, config)));
	        locale_locales__getSetGlobalLocale(name);
	        return locales[$traceurRuntime.toProperty(name)];
	      } else {
	        delete locales[$traceurRuntime.toProperty(name)];
	        return null;
	      }
	    }
	    function updateLocale(name, config) {
	      if (config != null) {
	        var locale,
	            parentConfig = baseConfig;
	        if (locales[$traceurRuntime.toProperty(name)] != null) {
	          parentConfig = locales[$traceurRuntime.toProperty(name)]._config;
	        }
	        config = mergeConfigs(parentConfig, config);
	        locale = new Locale(config);
	        locale.parentLocale = locales[$traceurRuntime.toProperty(name)];
	        $traceurRuntime.setProperty(locales, name, locale);
	        locale_locales__getSetGlobalLocale(name);
	      } else {
	        if (locales[$traceurRuntime.toProperty(name)] != null) {
	          if (locales[$traceurRuntime.toProperty(name)].parentLocale != null) {
	            $traceurRuntime.setProperty(locales, name, locales[$traceurRuntime.toProperty(name)].parentLocale);
	          } else if (locales[$traceurRuntime.toProperty(name)] != null) {
	            delete locales[$traceurRuntime.toProperty(name)];
	          }
	        }
	      }
	      return locales[$traceurRuntime.toProperty(name)];
	    }
	    function locale_locales__getLocale(key) {
	      var locale;
	      if (key && key._locale && key._locale._abbr) {
	        key = key._locale._abbr;
	      }
	      if (!key) {
	        return globalLocale;
	      }
	      if (!isArray(key)) {
	        locale = loadLocale(key);
	        if (locale) {
	          return locale;
	        }
	        key = [key];
	      }
	      return chooseLocale(key);
	    }
	    function locale_locales__listLocales() {
	      return keys(locales);
	    }
	    function checkOverflow(m) {
	      var overflow;
	      var a = m._a;
	      if (a && getParsingFlags(m).overflow === -2) {
	        overflow = a[$traceurRuntime.toProperty(MONTH)] < 0 || a[$traceurRuntime.toProperty(MONTH)] > 11 ? MONTH : a[$traceurRuntime.toProperty(DATE)] < 1 || a[$traceurRuntime.toProperty(DATE)] > daysInMonth(a[$traceurRuntime.toProperty(YEAR)], a[$traceurRuntime.toProperty(MONTH)]) ? DATE : a[$traceurRuntime.toProperty(HOUR)] < 0 || a[$traceurRuntime.toProperty(HOUR)] > 24 || (a[$traceurRuntime.toProperty(HOUR)] === 24 && (a[$traceurRuntime.toProperty(MINUTE)] !== 0 || a[$traceurRuntime.toProperty(SECOND)] !== 0 || a[$traceurRuntime.toProperty(MILLISECOND)] !== 0)) ? HOUR : a[$traceurRuntime.toProperty(MINUTE)] < 0 || a[$traceurRuntime.toProperty(MINUTE)] > 59 ? MINUTE : a[$traceurRuntime.toProperty(SECOND)] < 0 || a[$traceurRuntime.toProperty(SECOND)] > 59 ? SECOND : a[$traceurRuntime.toProperty(MILLISECOND)] < 0 || a[$traceurRuntime.toProperty(MILLISECOND)] > 999 ? MILLISECOND : -1;
	        if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
	          overflow = DATE;
	        }
	        if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
	          overflow = WEEK;
	        }
	        if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
	          overflow = WEEKDAY;
	        }
	        getParsingFlags(m).overflow = overflow;
	      }
	      return m;
	    }
	    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
	    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
	    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
	    var isoDates = [['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/], ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/], ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/], ['GGGG-[W]WW', /\d{4}-W\d\d/, false], ['YYYY-DDD', /\d{4}-\d{3}/], ['YYYY-MM', /\d{4}-\d\d/, false], ['YYYYYYMMDD', /[+-]\d{10}/], ['YYYYMMDD', /\d{8}/], ['GGGG[W]WWE', /\d{4}W\d{3}/], ['GGGG[W]WW', /\d{4}W\d{2}/, false], ['YYYYDDD', /\d{7}/]];
	    var isoTimes = [['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/], ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/], ['HH:mm:ss', /\d\d:\d\d:\d\d/], ['HH:mm', /\d\d:\d\d/], ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/], ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/], ['HHmmss', /\d\d\d\d\d\d/], ['HHmm', /\d\d\d\d/], ['HH', /\d\d/]];
	    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;
	    function configFromISO(config) {
	      var i,
	          l,
	          string = config._i,
	          match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
	          allowTime,
	          dateFormat,
	          timeFormat,
	          tzFormat;
	      if (match) {
	        getParsingFlags(config).iso = true;
	        for (i = 0, l = isoDates.length; i < l; i++) {
	          if (isoDates[$traceurRuntime.toProperty(i)][1].exec(match[1])) {
	            dateFormat = isoDates[$traceurRuntime.toProperty(i)][0];
	            allowTime = isoDates[$traceurRuntime.toProperty(i)][2] !== false;
	            break;
	          }
	        }
	        if (dateFormat == null) {
	          config._isValid = false;
	          return;
	        }
	        if (match[3]) {
	          for (i = 0, l = isoTimes.length; i < l; i++) {
	            if (isoTimes[$traceurRuntime.toProperty(i)][1].exec(match[3])) {
	              timeFormat = (match[2] || ' ') + isoTimes[$traceurRuntime.toProperty(i)][0];
	              break;
	            }
	          }
	          if (timeFormat == null) {
	            config._isValid = false;
	            return;
	          }
	        }
	        if (!allowTime && timeFormat != null) {
	          config._isValid = false;
	          return;
	        }
	        if (match[4]) {
	          if (tzRegex.exec(match[4])) {
	            tzFormat = 'Z';
	          } else {
	            config._isValid = false;
	            return;
	          }
	        }
	        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
	        configFromStringAndFormat(config);
	      } else {
	        config._isValid = false;
	      }
	    }
	    function configFromString(config) {
	      var matched = aspNetJsonRegex.exec(config._i);
	      if (matched !== null) {
	        config._d = new Date(+matched[1]);
	        return;
	      }
	      configFromISO(config);
	      if (config._isValid === false) {
	        delete config._isValid;
	        utils_hooks__hooks.createFromInputFallback(config);
	      }
	    }
	    utils_hooks__hooks.createFromInputFallback = deprecate('value provided is not in a recognized ISO format. moment construction falls back to js Date(), ' + 'which is not reliable across all browsers and versions. Non ISO date formats are ' + 'discouraged and will be removed in an upcoming major release. Please refer to ' + 'http://momentjs.com/guides/#/warnings/js-date/ for more info.', function(config) {
	      config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
	    });
	    function defaults(a, b, c) {
	      if (a != null) {
	        return a;
	      }
	      if (b != null) {
	        return b;
	      }
	      return c;
	    }
	    function currentDateArray(config) {
	      var nowValue = new Date(utils_hooks__hooks.now());
	      if (config._useUTC) {
	        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
	      }
	      return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
	    }
	    function configFromArray(config) {
	      var i,
	          date,
	          input = [],
	          currentDate,
	          yearToUse;
	      if (config._d) {
	        return;
	      }
	      currentDate = currentDateArray(config);
	      if (config._w && config._a[$traceurRuntime.toProperty(DATE)] == null && config._a[$traceurRuntime.toProperty(MONTH)] == null) {
	        dayOfYearFromWeekInfo(config);
	      }
	      if (config._dayOfYear) {
	        yearToUse = defaults(config._a[$traceurRuntime.toProperty(YEAR)], currentDate[$traceurRuntime.toProperty(YEAR)]);
	        if (config._dayOfYear > daysInYear(yearToUse)) {
	          getParsingFlags(config)._overflowDayOfYear = true;
	        }
	        date = createUTCDate(yearToUse, 0, config._dayOfYear);
	        $traceurRuntime.setProperty(config._a, MONTH, date.getUTCMonth());
	        $traceurRuntime.setProperty(config._a, DATE, date.getUTCDate());
	      }
	      for (i = 0; i < 3 && config._a[$traceurRuntime.toProperty(i)] == null; ++i) {
	        $traceurRuntime.setProperty(config._a, i, $traceurRuntime.setProperty(input, i, currentDate[$traceurRuntime.toProperty(i)]));
	      }
	      for (; i < 7; i++) {
	        $traceurRuntime.setProperty(config._a, i, $traceurRuntime.setProperty(input, i, (config._a[$traceurRuntime.toProperty(i)] == null) ? (i === 2 ? 1 : 0) : config._a[$traceurRuntime.toProperty(i)]));
	      }
	      if (config._a[$traceurRuntime.toProperty(HOUR)] === 24 && config._a[$traceurRuntime.toProperty(MINUTE)] === 0 && config._a[$traceurRuntime.toProperty(SECOND)] === 0 && config._a[$traceurRuntime.toProperty(MILLISECOND)] === 0) {
	        config._nextDay = true;
	        $traceurRuntime.setProperty(config._a, HOUR, 0);
	      }
	      config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
	      if (config._tzm != null) {
	        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
	      }
	      if (config._nextDay) {
	        $traceurRuntime.setProperty(config._a, HOUR, 24);
	      }
	    }
	    function dayOfYearFromWeekInfo(config) {
	      var w,
	          weekYear,
	          week,
	          weekday,
	          dow,
	          doy,
	          temp,
	          weekdayOverflow;
	      w = config._w;
	      if (w.GG != null || w.W != null || w.E != null) {
	        dow = 1;
	        doy = 4;
	        weekYear = defaults(w.GG, config._a[$traceurRuntime.toProperty(YEAR)], weekOfYear(local__createLocal(), 1, 4).year);
	        week = defaults(w.W, 1);
	        weekday = defaults(w.E, 1);
	        if (weekday < 1 || weekday > 7) {
	          weekdayOverflow = true;
	        }
	      } else {
	        dow = config._locale._week.dow;
	        doy = config._locale._week.doy;
	        weekYear = defaults(w.gg, config._a[$traceurRuntime.toProperty(YEAR)], weekOfYear(local__createLocal(), dow, doy).year);
	        week = defaults(w.w, 1);
	        if (w.d != null) {
	          weekday = w.d;
	          if (weekday < 0 || weekday > 6) {
	            weekdayOverflow = true;
	          }
	        } else if (w.e != null) {
	          weekday = w.e + dow;
	          if (w.e < 0 || w.e > 6) {
	            weekdayOverflow = true;
	          }
	        } else {
	          weekday = dow;
	        }
	      }
	      if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
	        getParsingFlags(config)._overflowWeeks = true;
	      } else if (weekdayOverflow != null) {
	        getParsingFlags(config)._overflowWeekday = true;
	      } else {
	        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
	        $traceurRuntime.setProperty(config._a, YEAR, temp.year);
	        config._dayOfYear = temp.dayOfYear;
	      }
	    }
	    utils_hooks__hooks.ISO_8601 = function() {};
	    function configFromStringAndFormat(config) {
	      if (config._f === utils_hooks__hooks.ISO_8601) {
	        configFromISO(config);
	        return;
	      }
	      config._a = [];
	      getParsingFlags(config).empty = true;
	      var string = '' + config._i,
	          i,
	          parsedInput,
	          tokens,
	          token,
	          skipped,
	          stringLength = string.length,
	          totalParsedInputLength = 0;
	      tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
	      for (i = 0; i < tokens.length; i++) {
	        token = tokens[$traceurRuntime.toProperty(i)];
	        parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
	        if (parsedInput) {
	          skipped = string.substr(0, string.indexOf(parsedInput));
	          if (skipped.length > 0) {
	            getParsingFlags(config).unusedInput.push(skipped);
	          }
	          string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
	          totalParsedInputLength += parsedInput.length;
	        }
	        if (formatTokenFunctions[$traceurRuntime.toProperty(token)]) {
	          if (parsedInput) {
	            getParsingFlags(config).empty = false;
	          } else {
	            getParsingFlags(config).unusedTokens.push(token);
	          }
	          addTimeToArrayFromToken(token, parsedInput, config);
	        } else if (config._strict && !parsedInput) {
	          getParsingFlags(config).unusedTokens.push(token);
	        }
	      }
	      getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
	      if (string.length > 0) {
	        getParsingFlags(config).unusedInput.push(string);
	      }
	      if (config._a[$traceurRuntime.toProperty(HOUR)] <= 12 && getParsingFlags(config).bigHour === true && config._a[$traceurRuntime.toProperty(HOUR)] > 0) {
	        getParsingFlags(config).bigHour = undefined;
	      }
	      getParsingFlags(config).parsedDateParts = config._a.slice(0);
	      getParsingFlags(config).meridiem = config._meridiem;
	      $traceurRuntime.setProperty(config._a, HOUR, meridiemFixWrap(config._locale, config._a[$traceurRuntime.toProperty(HOUR)], config._meridiem));
	      configFromArray(config);
	      checkOverflow(config);
	    }
	    function meridiemFixWrap(locale, hour, meridiem) {
	      var isPm;
	      if (meridiem == null) {
	        return hour;
	      }
	      if (locale.meridiemHour != null) {
	        return locale.meridiemHour(hour, meridiem);
	      } else if (locale.isPM != null) {
	        isPm = locale.isPM(meridiem);
	        if (isPm && hour < 12) {
	          hour += 12;
	        }
	        if (!isPm && hour === 12) {
	          hour = 0;
	        }
	        return hour;
	      } else {
	        return hour;
	      }
	    }
	    function configFromStringAndArray(config) {
	      var tempConfig,
	          bestMoment,
	          scoreToBeat,
	          i,
	          currentScore;
	      if (config._f.length === 0) {
	        getParsingFlags(config).invalidFormat = true;
	        config._d = new Date(NaN);
	        return;
	      }
	      for (i = 0; i < config._f.length; i++) {
	        currentScore = 0;
	        tempConfig = copyConfig({}, config);
	        if (config._useUTC != null) {
	          tempConfig._useUTC = config._useUTC;
	        }
	        tempConfig._f = config._f[$traceurRuntime.toProperty(i)];
	        configFromStringAndFormat(tempConfig);
	        if (!valid__isValid(tempConfig)) {
	          continue;
	        }
	        currentScore += getParsingFlags(tempConfig).charsLeftOver;
	        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
	        getParsingFlags(tempConfig).score = currentScore;
	        if (scoreToBeat == null || currentScore < scoreToBeat) {
	          scoreToBeat = currentScore;
	          bestMoment = tempConfig;
	        }
	      }
	      extend(config, bestMoment || tempConfig);
	    }
	    function configFromObject(config) {
	      if (config._d) {
	        return;
	      }
	      var i = normalizeObjectUnits(config._i);
	      config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function(obj) {
	        return obj && parseInt(obj, 10);
	      });
	      configFromArray(config);
	    }
	    function createFromConfig(config) {
	      var res = new Moment(checkOverflow(prepareConfig(config)));
	      if (res._nextDay) {
	        res.add(1, 'd');
	        res._nextDay = undefined;
	      }
	      return res;
	    }
	    function prepareConfig(config) {
	      var input = config._i,
	          format = config._f;
	      config._locale = config._locale || locale_locales__getLocale(config._l);
	      if (input === null || (format === undefined && input === '')) {
	        return valid__createInvalid({nullInput: true});
	      }
	      if (typeof input === 'string') {
	        config._i = input = config._locale.preparse(input);
	      }
	      if (isMoment(input)) {
	        return new Moment(checkOverflow(input));
	      } else if (isArray(format)) {
	        configFromStringAndArray(config);
	      } else if (isDate(input)) {
	        config._d = input;
	      } else if (format) {
	        configFromStringAndFormat(config);
	      } else {
	        configFromInput(config);
	      }
	      if (!valid__isValid(config)) {
	        config._d = null;
	      }
	      return config;
	    }
	    function configFromInput(config) {
	      var input = config._i;
	      if (input === undefined) {
	        config._d = new Date(utils_hooks__hooks.now());
	      } else if (isDate(input)) {
	        config._d = new Date(input.valueOf());
	      } else if (typeof input === 'string') {
	        configFromString(config);
	      } else if (isArray(input)) {
	        config._a = map(input.slice(0), function(obj) {
	          return parseInt(obj, 10);
	        });
	        configFromArray(config);
	      } else if ($traceurRuntime.typeof((input)) === 'object') {
	        configFromObject(config);
	      } else if (typeof(input) === 'number') {
	        config._d = new Date(input);
	      } else {
	        utils_hooks__hooks.createFromInputFallback(config);
	      }
	    }
	    function createLocalOrUTC(input, format, locale, strict, isUTC) {
	      var c = {};
	      if (typeof(locale) === 'boolean') {
	        strict = locale;
	        locale = undefined;
	      }
	      if ((isObject(input) && isObjectEmpty(input)) || (isArray(input) && input.length === 0)) {
	        input = undefined;
	      }
	      c._isAMomentObject = true;
	      c._useUTC = c._isUTC = isUTC;
	      c._l = locale;
	      c._i = input;
	      c._f = format;
	      c._strict = strict;
	      return createFromConfig(c);
	    }
	    function local__createLocal(input, format, locale, strict) {
	      return createLocalOrUTC(input, format, locale, strict, false);
	    }
	    var prototypeMin = deprecate('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/', function() {
	      var other = local__createLocal.apply(null, arguments);
	      if (this.isValid() && other.isValid()) {
	        return other < this ? this : other;
	      } else {
	        return valid__createInvalid();
	      }
	    });
	    var prototypeMax = deprecate('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/', function() {
	      var other = local__createLocal.apply(null, arguments);
	      if (this.isValid() && other.isValid()) {
	        return other > this ? this : other;
	      } else {
	        return valid__createInvalid();
	      }
	    });
	    function pickBy(fn, moments) {
	      var res,
	          i;
	      if (moments.length === 1 && isArray(moments[0])) {
	        moments = moments[0];
	      }
	      if (!moments.length) {
	        return local__createLocal();
	      }
	      res = moments[0];
	      for (i = 1; i < moments.length; ++i) {
	        if (!moments[$traceurRuntime.toProperty(i)].isValid() || moments[$traceurRuntime.toProperty(i)][$traceurRuntime.toProperty(fn)](res)) {
	          res = moments[$traceurRuntime.toProperty(i)];
	        }
	      }
	      return res;
	    }
	    function min() {
	      var args = [].slice.call(arguments, 0);
	      return pickBy('isBefore', args);
	    }
	    function max() {
	      var args = [].slice.call(arguments, 0);
	      return pickBy('isAfter', args);
	    }
	    var now = function() {
	      return Date.now ? Date.now() : +(new Date());
	    };
	    function Duration(duration) {
	      var normalizedInput = normalizeObjectUnits(duration),
	          years = normalizedInput.year || 0,
	          quarters = normalizedInput.quarter || 0,
	          months = normalizedInput.month || 0,
	          weeks = normalizedInput.week || 0,
	          days = normalizedInput.day || 0,
	          hours = normalizedInput.hour || 0,
	          minutes = normalizedInput.minute || 0,
	          seconds = normalizedInput.second || 0,
	          milliseconds = normalizedInput.millisecond || 0;
	      this._milliseconds = +milliseconds + seconds * 1e3 + minutes * 6e4 + hours * 1000 * 60 * 60;
	      this._days = +days + weeks * 7;
	      this._months = +months + quarters * 3 + years * 12;
	      this._data = {};
	      this._locale = locale_locales__getLocale();
	      this._bubble();
	    }
	    function isDuration(obj) {
	      return obj instanceof Duration;
	    }
	    function absRound(number) {
	      if (number < 0) {
	        return Math.round(-1 * number) * -1;
	      } else {
	        return Math.round(number);
	      }
	    }
	    function offset(token, separator) {
	      addFormatToken(token, 0, 0, function() {
	        var offset = this.utcOffset();
	        var sign = '+';
	        if (offset < 0) {
	          offset = -offset;
	          sign = '-';
	        }
	        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
	      });
	    }
	    offset('Z', ':');
	    offset('ZZ', '');
	    addRegexToken('Z', matchShortOffset);
	    addRegexToken('ZZ', matchShortOffset);
	    addParseToken(['Z', 'ZZ'], function(input, array, config) {
	      config._useUTC = true;
	      config._tzm = offsetFromString(matchShortOffset, input);
	    });
	    var chunkOffset = /([\+\-]|\d\d)/gi;
	    function offsetFromString(matcher, string) {
	      var matches = ((string || '').match(matcher) || []);
	      var chunk = matches[$traceurRuntime.toProperty(matches.length - 1)] || [];
	      var parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
	      var minutes = +(parts[1] * 60) + toInt(parts[2]);
	      return parts[0] === '+' ? minutes : -minutes;
	    }
	    function cloneWithOffset(input, model) {
	      var res,
	          diff;
	      if (model._isUTC) {
	        res = model.clone();
	        diff = (isMoment(input) || isDate(input) ? input.valueOf() : local__createLocal(input).valueOf()) - res.valueOf();
	        res._d.setTime(res._d.valueOf() + diff);
	        utils_hooks__hooks.updateOffset(res, false);
	        return res;
	      } else {
	        return local__createLocal(input).local();
	      }
	    }
	    function getDateOffset(m) {
	      return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
	    }
	    utils_hooks__hooks.updateOffset = function() {};
	    function getSetOffset(input, keepLocalTime) {
	      var offset = this._offset || 0,
	          localAdjust;
	      if (!this.isValid()) {
	        return input != null ? this : NaN;
	      }
	      if (input != null) {
	        if (typeof input === 'string') {
	          input = offsetFromString(matchShortOffset, input);
	        } else if (Math.abs(input) < 16) {
	          input = input * 60;
	        }
	        if (!this._isUTC && keepLocalTime) {
	          localAdjust = getDateOffset(this);
	        }
	        this._offset = input;
	        this._isUTC = true;
	        if (localAdjust != null) {
	          this.add(localAdjust, 'm');
	        }
	        if (offset !== input) {
	          if (!keepLocalTime || this._changeInProgress) {
	            add_subtract__addSubtract(this, create__createDuration(input - offset, 'm'), 1, false);
	          } else if (!this._changeInProgress) {
	            this._changeInProgress = true;
	            utils_hooks__hooks.updateOffset(this, true);
	            this._changeInProgress = null;
	          }
	        }
	        return this;
	      } else {
	        return this._isUTC ? offset : getDateOffset(this);
	      }
	    }
	    function getSetZone(input, keepLocalTime) {
	      if (input != null) {
	        if (typeof input !== 'string') {
	          input = -input;
	        }
	        this.utcOffset(input, keepLocalTime);
	        return this;
	      } else {
	        return -this.utcOffset();
	      }
	    }
	    function setOffsetToUTC(keepLocalTime) {
	      return this.utcOffset(0, keepLocalTime);
	    }
	    function setOffsetToLocal(keepLocalTime) {
	      if (this._isUTC) {
	        this.utcOffset(0, keepLocalTime);
	        this._isUTC = false;
	        if (keepLocalTime) {
	          this.subtract(getDateOffset(this), 'm');
	        }
	      }
	      return this;
	    }
	    function setOffsetToParsedOffset() {
	      if (this._tzm) {
	        this.utcOffset(this._tzm);
	      } else if (typeof this._i === 'string') {
	        var tZone = offsetFromString(matchOffset, this._i);
	        if (tZone === 0) {
	          this.utcOffset(0, true);
	        } else {
	          this.utcOffset(offsetFromString(matchOffset, this._i));
	        }
	      }
	      return this;
	    }
	    function hasAlignedHourOffset(input) {
	      if (!this.isValid()) {
	        return false;
	      }
	      input = input ? local__createLocal(input).utcOffset() : 0;
	      return (this.utcOffset() - input) % 60 === 0;
	    }
	    function isDaylightSavingTime() {
	      return (this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset());
	    }
	    function isDaylightSavingTimeShifted() {
	      if (!isUndefined(this._isDSTShifted)) {
	        return this._isDSTShifted;
	      }
	      var c = {};
	      copyConfig(c, this);
	      c = prepareConfig(c);
	      if (c._a) {
	        var other = c._isUTC ? create_utc__createUTC(c._a) : local__createLocal(c._a);
	        this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
	      } else {
	        this._isDSTShifted = false;
	      }
	      return this._isDSTShifted;
	    }
	    function isLocal() {
	      return this.isValid() ? !this._isUTC : false;
	    }
	    function isUtcOffset() {
	      return this.isValid() ? this._isUTC : false;
	    }
	    function isUtc() {
	      return this.isValid() ? this._isUTC && this._offset === 0 : false;
	    }
	    var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;
	    var isoRegex = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
	    function create__createDuration(input, key) {
	      var duration = input,
	          match = null,
	          sign,
	          ret,
	          diffRes;
	      if (isDuration(input)) {
	        duration = {
	          ms: input._milliseconds,
	          d: input._days,
	          M: input._months
	        };
	      } else if (typeof input === 'number') {
	        duration = {};
	        if (key) {
	          $traceurRuntime.setProperty(duration, key, input);
	        } else {
	          duration.milliseconds = input;
	        }
	      } else if (!!(match = aspNetRegex.exec(input))) {
	        sign = (match[1] === '-') ? -1 : 1;
	        duration = {
	          y: 0,
	          d: toInt(match[$traceurRuntime.toProperty(DATE)]) * sign,
	          h: toInt(match[$traceurRuntime.toProperty(HOUR)]) * sign,
	          m: toInt(match[$traceurRuntime.toProperty(MINUTE)]) * sign,
	          s: toInt(match[$traceurRuntime.toProperty(SECOND)]) * sign,
	          ms: toInt(absRound(match[$traceurRuntime.toProperty(MILLISECOND)] * 1000)) * sign
	        };
	      } else if (!!(match = isoRegex.exec(input))) {
	        sign = (match[1] === '-') ? -1 : 1;
	        duration = {
	          y: parseIso(match[2], sign),
	          M: parseIso(match[3], sign),
	          w: parseIso(match[4], sign),
	          d: parseIso(match[5], sign),
	          h: parseIso(match[6], sign),
	          m: parseIso(match[7], sign),
	          s: parseIso(match[8], sign)
	        };
	      } else if (duration == null) {
	        duration = {};
	      } else if ((typeof duration === 'undefined' ? 'undefined' : $traceurRuntime.typeof(duration)) === 'object' && ('from' in duration || 'to' in duration)) {
	        diffRes = momentsDifference(local__createLocal(duration.from), local__createLocal(duration.to));
	        duration = {};
	        duration.ms = diffRes.milliseconds;
	        duration.M = diffRes.months;
	      }
	      ret = new Duration(duration);
	      if (isDuration(input) && hasOwnProp(input, '_locale')) {
	        ret._locale = input._locale;
	      }
	      return ret;
	    }
	    create__createDuration.fn = Duration.prototype;
	    function parseIso(inp, sign) {
	      var res = inp && parseFloat(inp.replace(',', '.'));
	      return (isNaN(res) ? 0 : res) * sign;
	    }
	    function positiveMomentsDifference(base, other) {
	      var res = {
	        milliseconds: 0,
	        months: 0
	      };
	      res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
	      if (base.clone().add(res.months, 'M').isAfter(other)) {
	        --res.months;
	      }
	      res.milliseconds = +other - +(base.clone().add(res.months, 'M'));
	      return res;
	    }
	    function momentsDifference(base, other) {
	      var res;
	      if (!(base.isValid() && other.isValid())) {
	        return {
	          milliseconds: 0,
	          months: 0
	        };
	      }
	      other = cloneWithOffset(other, base);
	      if (base.isBefore(other)) {
	        res = positiveMomentsDifference(base, other);
	      } else {
	        res = positiveMomentsDifference(other, base);
	        res.milliseconds = -res.milliseconds;
	        res.months = -res.months;
	      }
	      return res;
	    }
	    function createAdder(direction, name) {
	      return function(val, period) {
	        var dur,
	            tmp;
	        if (period !== null && !isNaN(+period)) {
	          deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' + 'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
	          tmp = val;
	          val = period;
	          period = tmp;
	        }
	        val = typeof val === 'string' ? +val : val;
	        dur = create__createDuration(val, period);
	        add_subtract__addSubtract(this, dur, direction);
	        return this;
	      };
	    }
	    function add_subtract__addSubtract(mom, duration, isAdding, updateOffset) {
	      var milliseconds = duration._milliseconds,
	          days = absRound(duration._days),
	          months = absRound(duration._months);
	      if (!mom.isValid()) {
	        return;
	      }
	      updateOffset = updateOffset == null ? true : updateOffset;
	      if (milliseconds) {
	        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
	      }
	      if (days) {
	        get_set__set(mom, 'Date', get_set__get(mom, 'Date') + days * isAdding);
	      }
	      if (months) {
	        setMonth(mom, get_set__get(mom, 'Month') + months * isAdding);
	      }
	      if (updateOffset) {
	        utils_hooks__hooks.updateOffset(mom, days || months);
	      }
	    }
	    var add_subtract__add = createAdder(1, 'add');
	    var add_subtract__subtract = createAdder(-1, 'subtract');
	    function getCalendarFormat(myMoment, now) {
	      var diff = myMoment.diff(now, 'days', true);
	      return diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
	    }
	    function moment_calendar__calendar(time, formats) {
	      var now = time || local__createLocal(),
	          sod = cloneWithOffset(now, this).startOf('day'),
	          format = utils_hooks__hooks.calendarFormat(this, sod) || 'sameElse';
	      var output = formats && (isFunction(formats[$traceurRuntime.toProperty(format)]) ? formats[$traceurRuntime.toProperty(format)].call(this, now) : formats[$traceurRuntime.toProperty(format)]);
	      return this.format(output || this.localeData().calendar(format, this, local__createLocal(now)));
	    }
	    function clone() {
	      return new Moment(this);
	    }
	    function isAfter(input, units) {
	      var localInput = isMoment(input) ? input : local__createLocal(input);
	      if (!(this.isValid() && localInput.isValid())) {
	        return false;
	      }
	      units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
	      if (units === 'millisecond') {
	        return this.valueOf() > localInput.valueOf();
	      } else {
	        return localInput.valueOf() < this.clone().startOf(units).valueOf();
	      }
	    }
	    function isBefore(input, units) {
	      var localInput = isMoment(input) ? input : local__createLocal(input);
	      if (!(this.isValid() && localInput.isValid())) {
	        return false;
	      }
	      units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
	      if (units === 'millisecond') {
	        return this.valueOf() < localInput.valueOf();
	      } else {
	        return this.clone().endOf(units).valueOf() < localInput.valueOf();
	      }
	    }
	    function isBetween(from, to, units, inclusivity) {
	      inclusivity = inclusivity || '()';
	      return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) && (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
	    }
	    function isSame(input, units) {
	      var localInput = isMoment(input) ? input : local__createLocal(input),
	          inputMs;
	      if (!(this.isValid() && localInput.isValid())) {
	        return false;
	      }
	      units = normalizeUnits(units || 'millisecond');
	      if (units === 'millisecond') {
	        return this.valueOf() === localInput.valueOf();
	      } else {
	        inputMs = localInput.valueOf();
	        return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
	      }
	    }
	    function isSameOrAfter(input, units) {
	      return this.isSame(input, units) || this.isAfter(input, units);
	    }
	    function isSameOrBefore(input, units) {
	      return this.isSame(input, units) || this.isBefore(input, units);
	    }
	    function diff(input, units, asFloat) {
	      var that,
	          zoneDelta,
	          delta,
	          output;
	      if (!this.isValid()) {
	        return NaN;
	      }
	      that = cloneWithOffset(input, this);
	      if (!that.isValid()) {
	        return NaN;
	      }
	      zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
	      units = normalizeUnits(units);
	      if (units === 'year' || units === 'month' || units === 'quarter') {
	        output = monthDiff(this, that);
	        if (units === 'quarter') {
	          output = output / 3;
	        } else if (units === 'year') {
	          output = output / 12;
	        }
	      } else {
	        delta = this - that;
	        output = units === 'second' ? delta / 1e3 : units === 'minute' ? delta / 6e4 : units === 'hour' ? delta / 36e5 : units === 'day' ? (delta - zoneDelta) / 864e5 : units === 'week' ? (delta - zoneDelta) / 6048e5 : delta;
	      }
	      return asFloat ? output : absFloor(output);
	    }
	    function monthDiff(a, b) {
	      var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
	          anchor = a.clone().add(wholeMonthDiff, 'months'),
	          anchor2,
	          adjust;
	      if (b - anchor < 0) {
	        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
	        adjust = (b - anchor) / (anchor - anchor2);
	      } else {
	        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
	        adjust = (b - anchor) / (anchor2 - anchor);
	      }
	      return -(wholeMonthDiff + adjust) || 0;
	    }
	    utils_hooks__hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
	    utils_hooks__hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';
	    function toString() {
	      return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
	    }
	    function moment_format__toISOString() {
	      var m = this.clone().utc();
	      if (0 < m.year() && m.year() <= 9999) {
	        if (isFunction(Date.prototype.toISOString)) {
	          return this.toDate().toISOString();
	        } else {
	          return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
	        }
	      } else {
	        return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
	      }
	    }
	    function format(inputString) {
	      if (!inputString) {
	        inputString = this.isUtc() ? utils_hooks__hooks.defaultFormatUtc : utils_hooks__hooks.defaultFormat;
	      }
	      var output = formatMoment(this, inputString);
	      return this.localeData().postformat(output);
	    }
	    function from(time, withoutSuffix) {
	      if (this.isValid() && ((isMoment(time) && time.isValid()) || local__createLocal(time).isValid())) {
	        return create__createDuration({
	          to: this,
	          from: time
	        }).locale(this.locale()).humanize(!withoutSuffix);
	      } else {
	        return this.localeData().invalidDate();
	      }
	    }
	    function fromNow(withoutSuffix) {
	      return this.from(local__createLocal(), withoutSuffix);
	    }
	    function to(time, withoutSuffix) {
	      if (this.isValid() && ((isMoment(time) && time.isValid()) || local__createLocal(time).isValid())) {
	        return create__createDuration({
	          from: this,
	          to: time
	        }).locale(this.locale()).humanize(!withoutSuffix);
	      } else {
	        return this.localeData().invalidDate();
	      }
	    }
	    function toNow(withoutSuffix) {
	      return this.to(local__createLocal(), withoutSuffix);
	    }
	    function locale(key) {
	      var newLocaleData;
	      if (key === undefined) {
	        return this._locale._abbr;
	      } else {
	        newLocaleData = locale_locales__getLocale(key);
	        if (newLocaleData != null) {
	          this._locale = newLocaleData;
	        }
	        return this;
	      }
	    }
	    var lang = deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function(key) {
	      if (key === undefined) {
	        return this.localeData();
	      } else {
	        return this.locale(key);
	      }
	    });
	    function localeData() {
	      return this._locale;
	    }
	    function startOf(units) {
	      units = normalizeUnits(units);
	      switch (units) {
	        case 'year':
	          this.month(0);
	        case 'quarter':
	        case 'month':
	          this.date(1);
	        case 'week':
	        case 'isoWeek':
	        case 'day':
	        case 'date':
	          this.hours(0);
	        case 'hour':
	          this.minutes(0);
	        case 'minute':
	          this.seconds(0);
	        case 'second':
	          this.milliseconds(0);
	      }
	      if (units === 'week') {
	        this.weekday(0);
	      }
	      if (units === 'isoWeek') {
	        this.isoWeekday(1);
	      }
	      if (units === 'quarter') {
	        this.month(Math.floor(this.month() / 3) * 3);
	      }
	      return this;
	    }
	    function endOf(units) {
	      units = normalizeUnits(units);
	      if (units === undefined || units === 'millisecond') {
	        return this;
	      }
	      if (units === 'date') {
	        units = 'day';
	      }
	      return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
	    }
	    function to_type__valueOf() {
	      return this._d.valueOf() - ((this._offset || 0) * 60000);
	    }
	    function unix() {
	      return Math.floor(this.valueOf() / 1000);
	    }
	    function toDate() {
	      return new Date(this.valueOf());
	    }
	    function toArray() {
	      var m = this;
	      return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
	    }
	    function toObject() {
	      var m = this;
	      return {
	        years: m.year(),
	        months: m.month(),
	        date: m.date(),
	        hours: m.hours(),
	        minutes: m.minutes(),
	        seconds: m.seconds(),
	        milliseconds: m.milliseconds()
	      };
	    }
	    function toJSON() {
	      return this.isValid() ? this.toISOString() : null;
	    }
	    function moment_valid__isValid() {
	      return valid__isValid(this);
	    }
	    function parsingFlags() {
	      return extend({}, getParsingFlags(this));
	    }
	    function invalidAt() {
	      return getParsingFlags(this).overflow;
	    }
	    function creationData() {
	      return {
	        input: this._i,
	        format: this._f,
	        locale: this._locale,
	        isUTC: this._isUTC,
	        strict: this._strict
	      };
	    }
	    addFormatToken(0, ['gg', 2], 0, function() {
	      return this.weekYear() % 100;
	    });
	    addFormatToken(0, ['GG', 2], 0, function() {
	      return this.isoWeekYear() % 100;
	    });
	    function addWeekYearFormatToken(token, getter) {
	      addFormatToken(0, [token, token.length], 0, getter);
	    }
	    addWeekYearFormatToken('gggg', 'weekYear');
	    addWeekYearFormatToken('ggggg', 'weekYear');
	    addWeekYearFormatToken('GGGG', 'isoWeekYear');
	    addWeekYearFormatToken('GGGGG', 'isoWeekYear');
	    addUnitAlias('weekYear', 'gg');
	    addUnitAlias('isoWeekYear', 'GG');
	    addUnitPriority('weekYear', 1);
	    addUnitPriority('isoWeekYear', 1);
	    addRegexToken('G', matchSigned);
	    addRegexToken('g', matchSigned);
	    addRegexToken('GG', match1to2, match2);
	    addRegexToken('gg', match1to2, match2);
	    addRegexToken('GGGG', match1to4, match4);
	    addRegexToken('gggg', match1to4, match4);
	    addRegexToken('GGGGG', match1to6, match6);
	    addRegexToken('ggggg', match1to6, match6);
	    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function(input, week, config, token) {
	      $traceurRuntime.setProperty(week, token.substr(0, 2), toInt(input));
	    });
	    addWeekParseToken(['gg', 'GG'], function(input, week, config, token) {
	      $traceurRuntime.setProperty(week, token, utils_hooks__hooks.parseTwoDigitYear(input));
	    });
	    function getSetWeekYear(input) {
	      return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
	    }
	    function getSetISOWeekYear(input) {
	      return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
	    }
	    function getISOWeeksInYear() {
	      return weeksInYear(this.year(), 1, 4);
	    }
	    function getWeeksInYear() {
	      var weekInfo = this.localeData()._week;
	      return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
	    }
	    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
	      var weeksTarget;
	      if (input == null) {
	        return weekOfYear(this, dow, doy).year;
	      } else {
	        weeksTarget = weeksInYear(input, dow, doy);
	        if (week > weeksTarget) {
	          week = weeksTarget;
	        }
	        return setWeekAll.call(this, input, week, weekday, dow, doy);
	      }
	    }
	    function setWeekAll(weekYear, week, weekday, dow, doy) {
	      var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
	          date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
	      this.year(date.getUTCFullYear());
	      this.month(date.getUTCMonth());
	      this.date(date.getUTCDate());
	      return this;
	    }
	    addFormatToken('Q', 0, 'Qo', 'quarter');
	    addUnitAlias('quarter', 'Q');
	    addUnitPriority('quarter', 7);
	    addRegexToken('Q', match1);
	    addParseToken('Q', function(input, array) {
	      $traceurRuntime.setProperty(array, MONTH, (toInt(input) - 1) * 3);
	    });
	    function getSetQuarter(input) {
	      return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
	    }
	    addFormatToken('D', ['DD', 2], 'Do', 'date');
	    addUnitAlias('date', 'D');
	    addUnitPriority('date', 9);
	    addRegexToken('D', match1to2);
	    addRegexToken('DD', match1to2, match2);
	    addRegexToken('Do', function(isStrict, locale) {
	      return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
	    });
	    addParseToken(['D', 'DD'], DATE);
	    addParseToken('Do', function(input, array) {
	      $traceurRuntime.setProperty(array, DATE, toInt(input.match(match1to2)[0], 10));
	    });
	    var getSetDayOfMonth = makeGetSet('Date', true);
	    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');
	    addUnitAlias('dayOfYear', 'DDD');
	    addUnitPriority('dayOfYear', 4);
	    addRegexToken('DDD', match1to3);
	    addRegexToken('DDDD', match3);
	    addParseToken(['DDD', 'DDDD'], function(input, array, config) {
	      config._dayOfYear = toInt(input);
	    });
	    function getSetDayOfYear(input) {
	      var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
	      return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
	    }
	    addFormatToken('m', ['mm', 2], 0, 'minute');
	    addUnitAlias('minute', 'm');
	    addUnitPriority('minute', 14);
	    addRegexToken('m', match1to2);
	    addRegexToken('mm', match1to2, match2);
	    addParseToken(['m', 'mm'], MINUTE);
	    var getSetMinute = makeGetSet('Minutes', false);
	    addFormatToken('s', ['ss', 2], 0, 'second');
	    addUnitAlias('second', 's');
	    addUnitPriority('second', 15);
	    addRegexToken('s', match1to2);
	    addRegexToken('ss', match1to2, match2);
	    addParseToken(['s', 'ss'], SECOND);
	    var getSetSecond = makeGetSet('Seconds', false);
	    addFormatToken('S', 0, 0, function() {
	      return ~~(this.millisecond() / 100);
	    });
	    addFormatToken(0, ['SS', 2], 0, function() {
	      return ~~(this.millisecond() / 10);
	    });
	    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
	    addFormatToken(0, ['SSSS', 4], 0, function() {
	      return this.millisecond() * 10;
	    });
	    addFormatToken(0, ['SSSSS', 5], 0, function() {
	      return this.millisecond() * 100;
	    });
	    addFormatToken(0, ['SSSSSS', 6], 0, function() {
	      return this.millisecond() * 1000;
	    });
	    addFormatToken(0, ['SSSSSSS', 7], 0, function() {
	      return this.millisecond() * 10000;
	    });
	    addFormatToken(0, ['SSSSSSSS', 8], 0, function() {
	      return this.millisecond() * 100000;
	    });
	    addFormatToken(0, ['SSSSSSSSS', 9], 0, function() {
	      return this.millisecond() * 1000000;
	    });
	    addUnitAlias('millisecond', 'ms');
	    addUnitPriority('millisecond', 16);
	    addRegexToken('S', match1to3, match1);
	    addRegexToken('SS', match1to3, match2);
	    addRegexToken('SSS', match1to3, match3);
	    var token;
	    for (token = 'SSSS'; token.length <= 9; token += 'S') {
	      addRegexToken(token, matchUnsigned);
	    }
	    function parseMs(input, array) {
	      $traceurRuntime.setProperty(array, MILLISECOND, toInt(('0.' + input) * 1000));
	    }
	    for (token = 'S'; token.length <= 9; token += 'S') {
	      addParseToken(token, parseMs);
	    }
	    var getSetMillisecond = makeGetSet('Milliseconds', false);
	    addFormatToken('z', 0, 0, 'zoneAbbr');
	    addFormatToken('zz', 0, 0, 'zoneName');
	    function getZoneAbbr() {
	      return this._isUTC ? 'UTC' : '';
	    }
	    function getZoneName() {
	      return this._isUTC ? 'Coordinated Universal Time' : '';
	    }
	    var momentPrototype__proto = Moment.prototype;
	    momentPrototype__proto.add = add_subtract__add;
	    momentPrototype__proto.calendar = moment_calendar__calendar;
	    momentPrototype__proto.clone = clone;
	    momentPrototype__proto.diff = diff;
	    momentPrototype__proto.endOf = endOf;
	    momentPrototype__proto.format = format;
	    momentPrototype__proto.from = from;
	    momentPrototype__proto.fromNow = fromNow;
	    momentPrototype__proto.to = to;
	    momentPrototype__proto.toNow = toNow;
	    momentPrototype__proto.get = stringGet;
	    momentPrototype__proto.invalidAt = invalidAt;
	    momentPrototype__proto.isAfter = isAfter;
	    momentPrototype__proto.isBefore = isBefore;
	    momentPrototype__proto.isBetween = isBetween;
	    momentPrototype__proto.isSame = isSame;
	    momentPrototype__proto.isSameOrAfter = isSameOrAfter;
	    momentPrototype__proto.isSameOrBefore = isSameOrBefore;
	    momentPrototype__proto.isValid = moment_valid__isValid;
	    momentPrototype__proto.lang = lang;
	    momentPrototype__proto.locale = locale;
	    momentPrototype__proto.localeData = localeData;
	    momentPrototype__proto.max = prototypeMax;
	    momentPrototype__proto.min = prototypeMin;
	    momentPrototype__proto.parsingFlags = parsingFlags;
	    momentPrototype__proto.set = stringSet;
	    momentPrototype__proto.startOf = startOf;
	    momentPrototype__proto.subtract = add_subtract__subtract;
	    momentPrototype__proto.toArray = toArray;
	    momentPrototype__proto.toObject = toObject;
	    momentPrototype__proto.toDate = toDate;
	    momentPrototype__proto.toISOString = moment_format__toISOString;
	    momentPrototype__proto.toJSON = toJSON;
	    momentPrototype__proto.toString = toString;
	    momentPrototype__proto.unix = unix;
	    momentPrototype__proto.valueOf = to_type__valueOf;
	    momentPrototype__proto.creationData = creationData;
	    momentPrototype__proto.year = getSetYear;
	    momentPrototype__proto.isLeapYear = getIsLeapYear;
	    momentPrototype__proto.weekYear = getSetWeekYear;
	    momentPrototype__proto.isoWeekYear = getSetISOWeekYear;
	    momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter;
	    momentPrototype__proto.month = getSetMonth;
	    momentPrototype__proto.daysInMonth = getDaysInMonth;
	    momentPrototype__proto.week = momentPrototype__proto.weeks = getSetWeek;
	    momentPrototype__proto.isoWeek = momentPrototype__proto.isoWeeks = getSetISOWeek;
	    momentPrototype__proto.weeksInYear = getWeeksInYear;
	    momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear;
	    momentPrototype__proto.date = getSetDayOfMonth;
	    momentPrototype__proto.day = momentPrototype__proto.days = getSetDayOfWeek;
	    momentPrototype__proto.weekday = getSetLocaleDayOfWeek;
	    momentPrototype__proto.isoWeekday = getSetISODayOfWeek;
	    momentPrototype__proto.dayOfYear = getSetDayOfYear;
	    momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour;
	    momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute;
	    momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond;
	    momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond;
	    momentPrototype__proto.utcOffset = getSetOffset;
	    momentPrototype__proto.utc = setOffsetToUTC;
	    momentPrototype__proto.local = setOffsetToLocal;
	    momentPrototype__proto.parseZone = setOffsetToParsedOffset;
	    momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;
	    momentPrototype__proto.isDST = isDaylightSavingTime;
	    momentPrototype__proto.isLocal = isLocal;
	    momentPrototype__proto.isUtcOffset = isUtcOffset;
	    momentPrototype__proto.isUtc = isUtc;
	    momentPrototype__proto.isUTC = isUtc;
	    momentPrototype__proto.zoneAbbr = getZoneAbbr;
	    momentPrototype__proto.zoneName = getZoneName;
	    momentPrototype__proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
	    momentPrototype__proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
	    momentPrototype__proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
	    momentPrototype__proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
	    momentPrototype__proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);
	    var momentPrototype = momentPrototype__proto;
	    function moment__createUnix(input) {
	      return local__createLocal(input * 1000);
	    }
	    function moment__createInZone() {
	      return local__createLocal.apply(null, arguments).parseZone();
	    }
	    function preParsePostFormat(string) {
	      return string;
	    }
	    var prototype__proto = Locale.prototype;
	    prototype__proto.calendar = locale_calendar__calendar;
	    prototype__proto.longDateFormat = longDateFormat;
	    prototype__proto.invalidDate = invalidDate;
	    prototype__proto.ordinal = ordinal;
	    prototype__proto.preparse = preParsePostFormat;
	    prototype__proto.postformat = preParsePostFormat;
	    prototype__proto.relativeTime = relative__relativeTime;
	    prototype__proto.pastFuture = pastFuture;
	    prototype__proto.set = locale_set__set;
	    prototype__proto.months = localeMonths;
	    prototype__proto.monthsShort = localeMonthsShort;
	    prototype__proto.monthsParse = localeMonthsParse;
	    prototype__proto.monthsRegex = monthsRegex;
	    prototype__proto.monthsShortRegex = monthsShortRegex;
	    prototype__proto.week = localeWeek;
	    prototype__proto.firstDayOfYear = localeFirstDayOfYear;
	    prototype__proto.firstDayOfWeek = localeFirstDayOfWeek;
	    prototype__proto.weekdays = localeWeekdays;
	    prototype__proto.weekdaysMin = localeWeekdaysMin;
	    prototype__proto.weekdaysShort = localeWeekdaysShort;
	    prototype__proto.weekdaysParse = localeWeekdaysParse;
	    prototype__proto.weekdaysRegex = weekdaysRegex;
	    prototype__proto.weekdaysShortRegex = weekdaysShortRegex;
	    prototype__proto.weekdaysMinRegex = weekdaysMinRegex;
	    prototype__proto.isPM = localeIsPM;
	    prototype__proto.meridiem = localeMeridiem;
	    function lists__get(format, index, field, setter) {
	      var locale = locale_locales__getLocale();
	      var utc = create_utc__createUTC().set(setter, index);
	      return locale[$traceurRuntime.toProperty(field)](utc, format);
	    }
	    function listMonthsImpl(format, index, field) {
	      if (typeof format === 'number') {
	        index = format;
	        format = undefined;
	      }
	      format = format || '';
	      if (index != null) {
	        return lists__get(format, index, field, 'month');
	      }
	      var i;
	      var out = [];
	      for (i = 0; i < 12; i++) {
	        $traceurRuntime.setProperty(out, i, lists__get(format, i, field, 'month'));
	      }
	      return out;
	    }
	    function listWeekdaysImpl(localeSorted, format, index, field) {
	      if (typeof localeSorted === 'boolean') {
	        if (typeof format === 'number') {
	          index = format;
	          format = undefined;
	        }
	        format = format || '';
	      } else {
	        format = localeSorted;
	        index = format;
	        localeSorted = false;
	        if (typeof format === 'number') {
	          index = format;
	          format = undefined;
	        }
	        format = format || '';
	      }
	      var locale = locale_locales__getLocale(),
	          shift = localeSorted ? locale._week.dow : 0;
	      if (index != null) {
	        return lists__get(format, (index + shift) % 7, field, 'day');
	      }
	      var i;
	      var out = [];
	      for (i = 0; i < 7; i++) {
	        $traceurRuntime.setProperty(out, i, lists__get(format, (i + shift) % 7, field, 'day'));
	      }
	      return out;
	    }
	    function lists__listMonths(format, index) {
	      return listMonthsImpl(format, index, 'months');
	    }
	    function lists__listMonthsShort(format, index) {
	      return listMonthsImpl(format, index, 'monthsShort');
	    }
	    function lists__listWeekdays(localeSorted, format, index) {
	      return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
	    }
	    function lists__listWeekdaysShort(localeSorted, format, index) {
	      return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
	    }
	    function lists__listWeekdaysMin(localeSorted, format, index) {
	      return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
	    }
	    locale_locales__getSetGlobalLocale('en', {
	      ordinalParse: /\d{1,2}(th|st|nd|rd)/,
	      ordinal: function(number) {
	        var b = number % 10,
	            output = (toInt(number % 100 / 10) === 1) ? 'th' : (b === 1) ? 'st' : (b === 2) ? 'nd' : (b === 3) ? 'rd' : 'th';
	        return number + output;
	      }
	    });
	    utils_hooks__hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', locale_locales__getSetGlobalLocale);
	    utils_hooks__hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', locale_locales__getLocale);
	    var mathAbs = Math.abs;
	    function duration_abs__abs() {
	      var data = this._data;
	      this._milliseconds = mathAbs(this._milliseconds);
	      this._days = mathAbs(this._days);
	      this._months = mathAbs(this._months);
	      data.milliseconds = mathAbs(data.milliseconds);
	      data.seconds = mathAbs(data.seconds);
	      data.minutes = mathAbs(data.minutes);
	      data.hours = mathAbs(data.hours);
	      data.months = mathAbs(data.months);
	      data.years = mathAbs(data.years);
	      return this;
	    }
	    function duration_add_subtract__addSubtract(duration, input, value, direction) {
	      var other = create__createDuration(input, value);
	      duration._milliseconds += direction * other._milliseconds;
	      duration._days += direction * other._days;
	      duration._months += direction * other._months;
	      return duration._bubble();
	    }
	    function duration_add_subtract__add(input, value) {
	      return duration_add_subtract__addSubtract(this, input, value, 1);
	    }
	    function duration_add_subtract__subtract(input, value) {
	      return duration_add_subtract__addSubtract(this, input, value, -1);
	    }
	    function absCeil(number) {
	      if (number < 0) {
	        return Math.floor(number);
	      } else {
	        return Math.ceil(number);
	      }
	    }
	    function bubble() {
	      var milliseconds = this._milliseconds;
	      var days = this._days;
	      var months = this._months;
	      var data = this._data;
	      var seconds,
	          minutes,
	          hours,
	          years,
	          monthsFromDays;
	      if (!((milliseconds >= 0 && days >= 0 && months >= 0) || (milliseconds <= 0 && days <= 0 && months <= 0))) {
	        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
	        days = 0;
	        months = 0;
	      }
	      data.milliseconds = milliseconds % 1000;
	      seconds = absFloor(milliseconds / 1000);
	      data.seconds = seconds % 60;
	      minutes = absFloor(seconds / 60);
	      data.minutes = minutes % 60;
	      hours = absFloor(minutes / 60);
	      data.hours = hours % 24;
	      days += absFloor(hours / 24);
	      monthsFromDays = absFloor(daysToMonths(days));
	      months += monthsFromDays;
	      days -= absCeil(monthsToDays(monthsFromDays));
	      years = absFloor(months / 12);
	      months %= 12;
	      data.days = days;
	      data.months = months;
	      data.years = years;
	      return this;
	    }
	    function daysToMonths(days) {
	      return days * 4800 / 146097;
	    }
	    function monthsToDays(months) {
	      return months * 146097 / 4800;
	    }
	    function as(units) {
	      var days;
	      var months;
	      var milliseconds = this._milliseconds;
	      units = normalizeUnits(units);
	      if (units === 'month' || units === 'year') {
	        days = this._days + milliseconds / 864e5;
	        months = this._months + daysToMonths(days);
	        return units === 'month' ? months : months / 12;
	      } else {
	        days = this._days + Math.round(monthsToDays(this._months));
	        switch (units) {
	          case 'week':
	            return days / 7 + milliseconds / 6048e5;
	          case 'day':
	            return days + milliseconds / 864e5;
	          case 'hour':
	            return days * 24 + milliseconds / 36e5;
	          case 'minute':
	            return days * 1440 + milliseconds / 6e4;
	          case 'second':
	            return days * 86400 + milliseconds / 1000;
	          case 'millisecond':
	            return Math.floor(days * 864e5) + milliseconds;
	          default:
	            throw new Error('Unknown unit ' + units);
	        }
	      }
	    }
	    function duration_as__valueOf() {
	      return (this._milliseconds + this._days * 864e5 + (this._months % 12) * 2592e6 + toInt(this._months / 12) * 31536e6);
	    }
	    function makeAs(alias) {
	      return function() {
	        return this.as(alias);
	      };
	    }
	    var asMilliseconds = makeAs('ms');
	    var asSeconds = makeAs('s');
	    var asMinutes = makeAs('m');
	    var asHours = makeAs('h');
	    var asDays = makeAs('d');
	    var asWeeks = makeAs('w');
	    var asMonths = makeAs('M');
	    var asYears = makeAs('y');
	    function duration_get__get(units) {
	      units = normalizeUnits(units);
	      return this[$traceurRuntime.toProperty(units + 's')]();
	    }
	    function makeGetter(name) {
	      return function() {
	        return this._data[$traceurRuntime.toProperty(name)];
	      };
	    }
	    var milliseconds = makeGetter('milliseconds');
	    var seconds = makeGetter('seconds');
	    var minutes = makeGetter('minutes');
	    var hours = makeGetter('hours');
	    var days = makeGetter('days');
	    var months = makeGetter('months');
	    var years = makeGetter('years');
	    function weeks() {
	      return absFloor(this.days() / 7);
	    }
	    var round = Math.round;
	    var thresholds = {
	      s: 45,
	      m: 45,
	      h: 22,
	      d: 26,
	      M: 11
	    };
	    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
	      return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
	    }
	    function duration_humanize__relativeTime(posNegDuration, withoutSuffix, locale) {
	      var duration = create__createDuration(posNegDuration).abs();
	      var seconds = round(duration.as('s'));
	      var minutes = round(duration.as('m'));
	      var hours = round(duration.as('h'));
	      var days = round(duration.as('d'));
	      var months = round(duration.as('M'));
	      var years = round(duration.as('y'));
	      var a = seconds < thresholds.s && ['s', seconds] || minutes <= 1 && ['m'] || minutes < thresholds.m && ['mm', minutes] || hours <= 1 && ['h'] || hours < thresholds.h && ['hh', hours] || days <= 1 && ['d'] || days < thresholds.d && ['dd', days] || months <= 1 && ['M'] || months < thresholds.M && ['MM', months] || years <= 1 && ['y'] || ['yy', years];
	      $traceurRuntime.setProperty(a, 2, withoutSuffix);
	      $traceurRuntime.setProperty(a, 3, +posNegDuration > 0);
	      $traceurRuntime.setProperty(a, 4, locale);
	      return substituteTimeAgo.apply(null, a);
	    }
	    function duration_humanize__getSetRelativeTimeRounding(roundingFunction) {
	      if (roundingFunction === undefined) {
	        return round;
	      }
	      if (typeof(roundingFunction) === 'function') {
	        round = roundingFunction;
	        return true;
	      }
	      return false;
	    }
	    function duration_humanize__getSetRelativeTimeThreshold(threshold, limit) {
	      if (thresholds[$traceurRuntime.toProperty(threshold)] === undefined) {
	        return false;
	      }
	      if (limit === undefined) {
	        return thresholds[$traceurRuntime.toProperty(threshold)];
	      }
	      $traceurRuntime.setProperty(thresholds, threshold, limit);
	      return true;
	    }
	    function humanize(withSuffix) {
	      var locale = this.localeData();
	      var output = duration_humanize__relativeTime(this, !withSuffix, locale);
	      if (withSuffix) {
	        output = locale.pastFuture(+this, output);
	      }
	      return locale.postformat(output);
	    }
	    var iso_string__abs = Math.abs;
	    function iso_string__toISOString() {
	      var seconds = iso_string__abs(this._milliseconds) / 1000;
	      var days = iso_string__abs(this._days);
	      var months = iso_string__abs(this._months);
	      var minutes,
	          hours,
	          years;
	      minutes = absFloor(seconds / 60);
	      hours = absFloor(minutes / 60);
	      seconds %= 60;
	      minutes %= 60;
	      years = absFloor(months / 12);
	      months %= 12;
	      var Y = years;
	      var M = months;
	      var D = days;
	      var h = hours;
	      var m = minutes;
	      var s = seconds;
	      var total = this.asSeconds();
	      if (!total) {
	        return 'P0D';
	      }
	      return (total < 0 ? '-' : '') + 'P' + (Y ? Y + 'Y' : '') + (M ? M + 'M' : '') + (D ? D + 'D' : '') + ((h || m || s) ? 'T' : '') + (h ? h + 'H' : '') + (m ? m + 'M' : '') + (s ? s + 'S' : '');
	    }
	    var duration_prototype__proto = Duration.prototype;
	    duration_prototype__proto.abs = duration_abs__abs;
	    duration_prototype__proto.add = duration_add_subtract__add;
	    duration_prototype__proto.subtract = duration_add_subtract__subtract;
	    duration_prototype__proto.as = as;
	    duration_prototype__proto.asMilliseconds = asMilliseconds;
	    duration_prototype__proto.asSeconds = asSeconds;
	    duration_prototype__proto.asMinutes = asMinutes;
	    duration_prototype__proto.asHours = asHours;
	    duration_prototype__proto.asDays = asDays;
	    duration_prototype__proto.asWeeks = asWeeks;
	    duration_prototype__proto.asMonths = asMonths;
	    duration_prototype__proto.asYears = asYears;
	    duration_prototype__proto.valueOf = duration_as__valueOf;
	    duration_prototype__proto._bubble = bubble;
	    duration_prototype__proto.get = duration_get__get;
	    duration_prototype__proto.milliseconds = milliseconds;
	    duration_prototype__proto.seconds = seconds;
	    duration_prototype__proto.minutes = minutes;
	    duration_prototype__proto.hours = hours;
	    duration_prototype__proto.days = days;
	    duration_prototype__proto.weeks = weeks;
	    duration_prototype__proto.months = months;
	    duration_prototype__proto.years = years;
	    duration_prototype__proto.humanize = humanize;
	    duration_prototype__proto.toISOString = iso_string__toISOString;
	    duration_prototype__proto.toString = iso_string__toISOString;
	    duration_prototype__proto.toJSON = iso_string__toISOString;
	    duration_prototype__proto.locale = locale;
	    duration_prototype__proto.localeData = localeData;
	    duration_prototype__proto.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', iso_string__toISOString);
	    duration_prototype__proto.lang = lang;
	    addFormatToken('X', 0, 0, 'unix');
	    addFormatToken('x', 0, 0, 'valueOf');
	    addRegexToken('x', matchSigned);
	    addRegexToken('X', matchTimestamp);
	    addParseToken('X', function(input, array, config) {
	      config._d = new Date(parseFloat(input, 10) * 1000);
	    });
	    addParseToken('x', function(input, array, config) {
	      config._d = new Date(toInt(input));
	    });
	    utils_hooks__hooks.version = '2.15.2';
	    setHookCallback(local__createLocal);
	    utils_hooks__hooks.fn = momentPrototype;
	    utils_hooks__hooks.min = min;
	    utils_hooks__hooks.max = max;
	    utils_hooks__hooks.now = now;
	    utils_hooks__hooks.utc = create_utc__createUTC;
	    utils_hooks__hooks.unix = moment__createUnix;
	    utils_hooks__hooks.months = lists__listMonths;
	    utils_hooks__hooks.isDate = isDate;
	    utils_hooks__hooks.locale = locale_locales__getSetGlobalLocale;
	    utils_hooks__hooks.invalid = valid__createInvalid;
	    utils_hooks__hooks.duration = create__createDuration;
	    utils_hooks__hooks.isMoment = isMoment;
	    utils_hooks__hooks.weekdays = lists__listWeekdays;
	    utils_hooks__hooks.parseZone = moment__createInZone;
	    utils_hooks__hooks.localeData = locale_locales__getLocale;
	    utils_hooks__hooks.isDuration = isDuration;
	    utils_hooks__hooks.monthsShort = lists__listMonthsShort;
	    utils_hooks__hooks.weekdaysMin = lists__listWeekdaysMin;
	    utils_hooks__hooks.defineLocale = defineLocale;
	    utils_hooks__hooks.updateLocale = updateLocale;
	    utils_hooks__hooks.locales = locale_locales__listLocales;
	    utils_hooks__hooks.weekdaysShort = lists__listWeekdaysShort;
	    utils_hooks__hooks.normalizeUnits = normalizeUnits;
	    utils_hooks__hooks.relativeTimeRounding = duration_humanize__getSetRelativeTimeRounding;
	    utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;
	    utils_hooks__hooks.calendarFormat = getCalendarFormat;
	    utils_hooks__hooks.prototype = momentPrototype;
	    var _moment = utils_hooks__hooks;
	    return _moment;
	  }));
	  return {};
	}.call(Reflect.global);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./af": 49,
		"./af.js": 49,
		"./ar": 50,
		"./ar-ly": 51,
		"./ar-ly.js": 51,
		"./ar-ma": 52,
		"./ar-ma.js": 52,
		"./ar-sa": 53,
		"./ar-sa.js": 53,
		"./ar-tn": 54,
		"./ar-tn.js": 54,
		"./ar.js": 50,
		"./az": 55,
		"./az.js": 55,
		"./be": 56,
		"./be.js": 56,
		"./bg": 57,
		"./bg.js": 57,
		"./bn": 58,
		"./bn.js": 58,
		"./bo": 59,
		"./bo.js": 59,
		"./br": 60,
		"./br.js": 60,
		"./bs": 61,
		"./bs.js": 61,
		"./ca": 62,
		"./ca.js": 62,
		"./cs": 63,
		"./cs.js": 63,
		"./cv": 64,
		"./cv.js": 64,
		"./cy": 65,
		"./cy.js": 65,
		"./da": 66,
		"./da.js": 66,
		"./de": 67,
		"./de-at": 68,
		"./de-at.js": 68,
		"./de.js": 67,
		"./dv": 69,
		"./dv.js": 69,
		"./el": 70,
		"./el.js": 70,
		"./en-au": 71,
		"./en-au.js": 71,
		"./en-ca": 72,
		"./en-ca.js": 72,
		"./en-gb": 73,
		"./en-gb.js": 73,
		"./en-ie": 74,
		"./en-ie.js": 74,
		"./en-nz": 75,
		"./en-nz.js": 75,
		"./eo": 76,
		"./eo.js": 76,
		"./es": 77,
		"./es-do": 78,
		"./es-do.js": 78,
		"./es.js": 77,
		"./et": 79,
		"./et.js": 79,
		"./eu": 80,
		"./eu.js": 80,
		"./fa": 81,
		"./fa.js": 81,
		"./fi": 82,
		"./fi.js": 82,
		"./fo": 83,
		"./fo.js": 83,
		"./fr": 84,
		"./fr-ca": 85,
		"./fr-ca.js": 85,
		"./fr-ch": 86,
		"./fr-ch.js": 86,
		"./fr.js": 84,
		"./fy": 87,
		"./fy.js": 87,
		"./gd": 88,
		"./gd.js": 88,
		"./gl": 89,
		"./gl.js": 89,
		"./he": 90,
		"./he.js": 90,
		"./hi": 91,
		"./hi.js": 91,
		"./hr": 92,
		"./hr.js": 92,
		"./hu": 93,
		"./hu.js": 93,
		"./hy-am": 94,
		"./hy-am.js": 94,
		"./id": 95,
		"./id.js": 95,
		"./is": 96,
		"./is.js": 96,
		"./it": 97,
		"./it.js": 97,
		"./ja": 98,
		"./ja.js": 98,
		"./jv": 99,
		"./jv.js": 99,
		"./ka": 100,
		"./ka.js": 100,
		"./kk": 101,
		"./kk.js": 101,
		"./km": 102,
		"./km.js": 102,
		"./ko": 103,
		"./ko.js": 103,
		"./ky": 104,
		"./ky.js": 104,
		"./lb": 105,
		"./lb.js": 105,
		"./lo": 106,
		"./lo.js": 106,
		"./lt": 107,
		"./lt.js": 107,
		"./lv": 108,
		"./lv.js": 108,
		"./me": 109,
		"./me.js": 109,
		"./mi": 110,
		"./mi.js": 110,
		"./mk": 111,
		"./mk.js": 111,
		"./ml": 112,
		"./ml.js": 112,
		"./mr": 113,
		"./mr.js": 113,
		"./ms": 114,
		"./ms-my": 115,
		"./ms-my.js": 115,
		"./ms.js": 114,
		"./my": 116,
		"./my.js": 116,
		"./nb": 117,
		"./nb.js": 117,
		"./ne": 118,
		"./ne.js": 118,
		"./nl": 119,
		"./nl.js": 119,
		"./nn": 120,
		"./nn.js": 120,
		"./pa-in": 121,
		"./pa-in.js": 121,
		"./pl": 122,
		"./pl.js": 122,
		"./pt": 123,
		"./pt-br": 124,
		"./pt-br.js": 124,
		"./pt.js": 123,
		"./ro": 125,
		"./ro.js": 125,
		"./ru": 126,
		"./ru.js": 126,
		"./se": 127,
		"./se.js": 127,
		"./si": 128,
		"./si.js": 128,
		"./sk": 129,
		"./sk.js": 129,
		"./sl": 130,
		"./sl.js": 130,
		"./sq": 131,
		"./sq.js": 131,
		"./sr": 132,
		"./sr-cyrl": 133,
		"./sr-cyrl.js": 133,
		"./sr.js": 132,
		"./ss": 134,
		"./ss.js": 134,
		"./sv": 135,
		"./sv.js": 135,
		"./sw": 136,
		"./sw.js": 136,
		"./ta": 137,
		"./ta.js": 137,
		"./te": 138,
		"./te.js": 138,
		"./th": 139,
		"./th.js": 139,
		"./tl-ph": 140,
		"./tl-ph.js": 140,
		"./tlh": 141,
		"./tlh.js": 141,
		"./tr": 142,
		"./tr.js": 142,
		"./tzl": 143,
		"./tzl.js": 143,
		"./tzm": 144,
		"./tzm-latn": 145,
		"./tzm-latn.js": 145,
		"./tzm.js": 144,
		"./uk": 146,
		"./uk.js": 146,
		"./uz": 147,
		"./uz.js": 147,
		"./vi": 148,
		"./vi.js": 148,
		"./x-pseudo": 149,
		"./x-pseudo.js": 149,
		"./zh-cn": 150,
		"./zh-cn.js": 150,
		"./zh-hk": 151,
		"./zh-hk.js": 151,
		"./zh-tw": 152,
		"./zh-tw.js": 152
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 48;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var af = moment.defineLocale('af', {
	      months: 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split('_'),
	      monthsShort: 'Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
	      weekdays: 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
	      weekdaysShort: 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
	      weekdaysMin: 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
	      meridiemParse: /vm|nm/i,
	      isPM: function(input) {
	        return /^nm$/i.test(input);
	      },
	      meridiem: function(hours, minutes, isLower) {
	        if (hours < 12) {
	          return isLower ? 'vm' : 'VM';
	        } else {
	          return isLower ? 'nm' : 'NM';
	        }
	      },
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY HH:mm',
	        LLLL: 'dddd, D MMMM YYYY HH:mm'
	      },
	      calendar: {
	        sameDay: '[Vandag om] LT',
	        nextDay: '[Môre om] LT',
	        nextWeek: 'dddd [om] LT',
	        lastDay: '[Gister om] LT',
	        lastWeek: '[Laas] dddd [om] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'oor %s',
	        past: '%s gelede',
	        s: '\'n paar sekondes',
	        m: '\'n minuut',
	        mm: '%d minute',
	        h: '\'n uur',
	        hh: '%d ure',
	        d: '\'n dag',
	        dd: '%d dae',
	        M: '\'n maand',
	        MM: '%d maande',
	        y: '\'n jaar',
	        yy: '%d jaar'
	      },
	      ordinalParse: /\d{1,2}(ste|de)/,
	      ordinal: function(number) {
	        return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
	      },
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return af;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var symbolMap = {
	      '1': '١',
	      '2': '٢',
	      '3': '٣',
	      '4': '٤',
	      '5': '٥',
	      '6': '٦',
	      '7': '٧',
	      '8': '٨',
	      '9': '٩',
	      '0': '٠'
	    },
	        numberMap = {
	          '١': '1',
	          '٢': '2',
	          '٣': '3',
	          '٤': '4',
	          '٥': '5',
	          '٦': '6',
	          '٧': '7',
	          '٨': '8',
	          '٩': '9',
	          '٠': '0'
	        },
	        pluralForm = function(n) {
	          return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
	        },
	        plurals = {
	          s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
	          m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
	          h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
	          d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
	          M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
	          y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
	        },
	        pluralize = function(u) {
	          return function(number, withoutSuffix, string, isFuture) {
	            var f = pluralForm(number),
	                str = plurals[$traceurRuntime.toProperty(u)][$traceurRuntime.toProperty(pluralForm(number))];
	            if (f === 2) {
	              str = str[$traceurRuntime.toProperty(withoutSuffix ? 0 : 1)];
	            }
	            return str.replace(/%d/i, number);
	          };
	        },
	        months = ['كانون الثاني يناير', 'شباط فبراير', 'آذار مارس', 'نيسان أبريل', 'أيار مايو', 'حزيران يونيو', 'تموز يوليو', 'آب أغسطس', 'أيلول سبتمبر', 'تشرين الأول أكتوبر', 'تشرين الثاني نوفمبر', 'كانون الأول ديسمبر'];
	    var ar = moment.defineLocale('ar', {
	      months: months,
	      monthsShort: months,
	      weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	      weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
	      weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	      weekdaysParseExact: true,
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'D/\u200FM/\u200FYYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY HH:mm',
	        LLLL: 'dddd D MMMM YYYY HH:mm'
	      },
	      meridiemParse: /ص|م/,
	      isPM: function(input) {
	        return 'م' === input;
	      },
	      meridiem: function(hour, minute, isLower) {
	        if (hour < 12) {
	          return 'ص';
	        } else {
	          return 'م';
	        }
	      },
	      calendar: {
	        sameDay: '[اليوم عند الساعة] LT',
	        nextDay: '[غدًا عند الساعة] LT',
	        nextWeek: 'dddd [عند الساعة] LT',
	        lastDay: '[أمس عند الساعة] LT',
	        lastWeek: 'dddd [عند الساعة] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'بعد %s',
	        past: 'منذ %s',
	        s: pluralize('s'),
	        m: pluralize('m'),
	        mm: pluralize('m'),
	        h: pluralize('h'),
	        hh: pluralize('h'),
	        d: pluralize('d'),
	        dd: pluralize('d'),
	        M: pluralize('M'),
	        MM: pluralize('M'),
	        y: pluralize('y'),
	        yy: pluralize('y')
	      },
	      preparse: function(string) {
	        return string.replace(/\u200f/g, '').replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(match) {
	          return numberMap[$traceurRuntime.toProperty(match)];
	        }).replace(/،/g, ',');
	      },
	      postformat: function(string) {
	        return string.replace(/\d/g, function(match) {
	          return symbolMap[$traceurRuntime.toProperty(match)];
	        }).replace(/,/g, '،');
	      },
	      week: {
	        dow: 6,
	        doy: 12
	      }
	    });
	    return ar;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var symbolMap = {
	      '1': '1',
	      '2': '2',
	      '3': '3',
	      '4': '4',
	      '5': '5',
	      '6': '6',
	      '7': '7',
	      '8': '8',
	      '9': '9',
	      '0': '0'
	    },
	        pluralForm = function(n) {
	          return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
	        },
	        plurals = {
	          s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
	          m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
	          h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
	          d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
	          M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
	          y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
	        },
	        pluralize = function(u) {
	          return function(number, withoutSuffix, string, isFuture) {
	            var f = pluralForm(number),
	                str = plurals[$traceurRuntime.toProperty(u)][$traceurRuntime.toProperty(pluralForm(number))];
	            if (f === 2) {
	              str = str[$traceurRuntime.toProperty(withoutSuffix ? 0 : 1)];
	            }
	            return str.replace(/%d/i, number);
	          };
	        },
	        months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
	    var ar_ly = moment.defineLocale('ar-ly', {
	      months: months,
	      monthsShort: months,
	      weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	      weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
	      weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	      weekdaysParseExact: true,
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'D/\u200FM/\u200FYYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY HH:mm',
	        LLLL: 'dddd D MMMM YYYY HH:mm'
	      },
	      meridiemParse: /ص|م/,
	      isPM: function(input) {
	        return 'م' === input;
	      },
	      meridiem: function(hour, minute, isLower) {
	        if (hour < 12) {
	          return 'ص';
	        } else {
	          return 'م';
	        }
	      },
	      calendar: {
	        sameDay: '[اليوم عند الساعة] LT',
	        nextDay: '[غدًا عند الساعة] LT',
	        nextWeek: 'dddd [عند الساعة] LT',
	        lastDay: '[أمس عند الساعة] LT',
	        lastWeek: 'dddd [عند الساعة] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'بعد %s',
	        past: 'منذ %s',
	        s: pluralize('s'),
	        m: pluralize('m'),
	        mm: pluralize('m'),
	        h: pluralize('h'),
	        hh: pluralize('h'),
	        d: pluralize('d'),
	        dd: pluralize('d'),
	        M: pluralize('M'),
	        MM: pluralize('M'),
	        y: pluralize('y'),
	        yy: pluralize('y')
	      },
	      preparse: function(string) {
	        return string.replace(/\u200f/g, '').replace(/،/g, ',');
	      },
	      postformat: function(string) {
	        return string.replace(/\d/g, function(match) {
	          return symbolMap[$traceurRuntime.toProperty(match)];
	        }).replace(/,/g, '،');
	      },
	      week: {
	        dow: 6,
	        doy: 12
	      }
	    });
	    return ar_ly;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var ar_ma = moment.defineLocale('ar-ma', {
	      months: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
	      monthsShort: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
	      weekdays: 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	      weekdaysShort: 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
	      weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	      weekdaysParseExact: true,
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY HH:mm',
	        LLLL: 'dddd D MMMM YYYY HH:mm'
	      },
	      calendar: {
	        sameDay: '[اليوم على الساعة] LT',
	        nextDay: '[غدا على الساعة] LT',
	        nextWeek: 'dddd [على الساعة] LT',
	        lastDay: '[أمس على الساعة] LT',
	        lastWeek: 'dddd [على الساعة] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'في %s',
	        past: 'منذ %s',
	        s: 'ثوان',
	        m: 'دقيقة',
	        mm: '%d دقائق',
	        h: 'ساعة',
	        hh: '%d ساعات',
	        d: 'يوم',
	        dd: '%d أيام',
	        M: 'شهر',
	        MM: '%d أشهر',
	        y: 'سنة',
	        yy: '%d سنوات'
	      },
	      week: {
	        dow: 6,
	        doy: 12
	      }
	    });
	    return ar_ma;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var symbolMap = {
	      '1': '١',
	      '2': '٢',
	      '3': '٣',
	      '4': '٤',
	      '5': '٥',
	      '6': '٦',
	      '7': '٧',
	      '8': '٨',
	      '9': '٩',
	      '0': '٠'
	    },
	        numberMap = {
	          '١': '1',
	          '٢': '2',
	          '٣': '3',
	          '٤': '4',
	          '٥': '5',
	          '٦': '6',
	          '٧': '7',
	          '٨': '8',
	          '٩': '9',
	          '٠': '0'
	        };
	    var ar_sa = moment.defineLocale('ar-sa', {
	      months: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
	      monthsShort: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
	      weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	      weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
	      weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	      weekdaysParseExact: true,
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY HH:mm',
	        LLLL: 'dddd D MMMM YYYY HH:mm'
	      },
	      meridiemParse: /ص|م/,
	      isPM: function(input) {
	        return 'م' === input;
	      },
	      meridiem: function(hour, minute, isLower) {
	        if (hour < 12) {
	          return 'ص';
	        } else {
	          return 'م';
	        }
	      },
	      calendar: {
	        sameDay: '[اليوم على الساعة] LT',
	        nextDay: '[غدا على الساعة] LT',
	        nextWeek: 'dddd [على الساعة] LT',
	        lastDay: '[أمس على الساعة] LT',
	        lastWeek: 'dddd [على الساعة] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'في %s',
	        past: 'منذ %s',
	        s: 'ثوان',
	        m: 'دقيقة',
	        mm: '%d دقائق',
	        h: 'ساعة',
	        hh: '%d ساعات',
	        d: 'يوم',
	        dd: '%d أيام',
	        M: 'شهر',
	        MM: '%d أشهر',
	        y: 'سنة',
	        yy: '%d سنوات'
	      },
	      preparse: function(string) {
	        return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(match) {
	          return numberMap[$traceurRuntime.toProperty(match)];
	        }).replace(/،/g, ',');
	      },
	      postformat: function(string) {
	        return string.replace(/\d/g, function(match) {
	          return symbolMap[$traceurRuntime.toProperty(match)];
	        }).replace(/,/g, '،');
	      },
	      week: {
	        dow: 6,
	        doy: 12
	      }
	    });
	    return ar_sa;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var ar_tn = moment.defineLocale('ar-tn', {
	      months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
	      monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
	      weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	      weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
	      weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	      weekdaysParseExact: true,
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY HH:mm',
	        LLLL: 'dddd D MMMM YYYY HH:mm'
	      },
	      calendar: {
	        sameDay: '[اليوم على الساعة] LT',
	        nextDay: '[غدا على الساعة] LT',
	        nextWeek: 'dddd [على الساعة] LT',
	        lastDay: '[أمس على الساعة] LT',
	        lastWeek: 'dddd [على الساعة] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'في %s',
	        past: 'منذ %s',
	        s: 'ثوان',
	        m: 'دقيقة',
	        mm: '%d دقائق',
	        h: 'ساعة',
	        hh: '%d ساعات',
	        d: 'يوم',
	        dd: '%d أيام',
	        M: 'شهر',
	        MM: '%d أشهر',
	        y: 'سنة',
	        yy: '%d سنوات'
	      },
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return ar_tn;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var suffixes = {
	      1: '-inci',
	      5: '-inci',
	      8: '-inci',
	      70: '-inci',
	      80: '-inci',
	      2: '-nci',
	      7: '-nci',
	      20: '-nci',
	      50: '-nci',
	      3: '-üncü',
	      4: '-üncü',
	      100: '-üncü',
	      6: '-ncı',
	      9: '-uncu',
	      10: '-uncu',
	      30: '-uncu',
	      60: '-ıncı',
	      90: '-ıncı'
	    };
	    var az = moment.defineLocale('az', {
	      months: 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'),
	      monthsShort: 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
	      weekdays: 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split('_'),
	      weekdaysShort: 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),
	      weekdaysMin: 'Bz_BE_ÇA_Çə_CA_Cü_Şə'.split('_'),
	      weekdaysParseExact: true,
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD.MM.YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY HH:mm',
	        LLLL: 'dddd, D MMMM YYYY HH:mm'
	      },
	      calendar: {
	        sameDay: '[bugün saat] LT',
	        nextDay: '[sabah saat] LT',
	        nextWeek: '[gələn həftə] dddd [saat] LT',
	        lastDay: '[dünən] LT',
	        lastWeek: '[keçən həftə] dddd [saat] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: '%s sonra',
	        past: '%s əvvəl',
	        s: 'birneçə saniyyə',
	        m: 'bir dəqiqə',
	        mm: '%d dəqiqə',
	        h: 'bir saat',
	        hh: '%d saat',
	        d: 'bir gün',
	        dd: '%d gün',
	        M: 'bir ay',
	        MM: '%d ay',
	        y: 'bir il',
	        yy: '%d il'
	      },
	      meridiemParse: /gecə|səhər|gündüz|axşam/,
	      isPM: function(input) {
	        return /^(gündüz|axşam)$/.test(input);
	      },
	      meridiem: function(hour, minute, isLower) {
	        if (hour < 4) {
	          return 'gecə';
	        } else if (hour < 12) {
	          return 'səhər';
	        } else if (hour < 17) {
	          return 'gündüz';
	        } else {
	          return 'axşam';
	        }
	      },
	      ordinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
	      ordinal: function(number) {
	        if (number === 0) {
	          return number + '-ıncı';
	        }
	        var a = number % 10,
	            b = number % 100 - a,
	            c = number >= 100 ? 100 : null;
	        return number + (suffixes[$traceurRuntime.toProperty(a)] || suffixes[$traceurRuntime.toProperty(b)] || suffixes[$traceurRuntime.toProperty(c)]);
	      },
	      week: {
	        dow: 1,
	        doy: 7
	      }
	    });
	    return az;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    function plural(word, num) {
	      var forms = word.split('_');
	      return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
	    }
	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	      var format = {
	        'mm': withoutSuffix ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
	        'hh': withoutSuffix ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
	        'dd': 'дзень_дні_дзён',
	        'MM': 'месяц_месяцы_месяцаў',
	        'yy': 'год_гады_гадоў'
	      };
	      if (key === 'm') {
	        return withoutSuffix ? 'хвіліна' : 'хвіліну';
	      } else if (key === 'h') {
	        return withoutSuffix ? 'гадзіна' : 'гадзіну';
	      } else {
	        return number + ' ' + plural(format[$traceurRuntime.toProperty(key)], +number);
	      }
	    }
	    var be = moment.defineLocale('be', {
	      months: {
	        format: 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split('_'),
	        standalone: 'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split('_')
	      },
	      monthsShort: 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
	      weekdays: {
	        format: 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split('_'),
	        standalone: 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'),
	        isFormat: /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/
	      },
	      weekdaysShort: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
	      weekdaysMin: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD.MM.YYYY',
	        LL: 'D MMMM YYYY г.',
	        LLL: 'D MMMM YYYY г., HH:mm',
	        LLLL: 'dddd, D MMMM YYYY г., HH:mm'
	      },
	      calendar: {
	        sameDay: '[Сёння ў] LT',
	        nextDay: '[Заўтра ў] LT',
	        lastDay: '[Учора ў] LT',
	        nextWeek: function() {
	          return '[У] dddd [ў] LT';
	        },
	        lastWeek: function() {
	          switch (this.day()) {
	            case 0:
	            case 3:
	            case 5:
	            case 6:
	              return '[У мінулую] dddd [ў] LT';
	            case 1:
	            case 2:
	            case 4:
	              return '[У мінулы] dddd [ў] LT';
	          }
	        },
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'праз %s',
	        past: '%s таму',
	        s: 'некалькі секунд',
	        m: relativeTimeWithPlural,
	        mm: relativeTimeWithPlural,
	        h: relativeTimeWithPlural,
	        hh: relativeTimeWithPlural,
	        d: 'дзень',
	        dd: relativeTimeWithPlural,
	        M: 'месяц',
	        MM: relativeTimeWithPlural,
	        y: 'год',
	        yy: relativeTimeWithPlural
	      },
	      meridiemParse: /ночы|раніцы|дня|вечара/,
	      isPM: function(input) {
	        return /^(дня|вечара)$/.test(input);
	      },
	      meridiem: function(hour, minute, isLower) {
	        if (hour < 4) {
	          return 'ночы';
	        } else if (hour < 12) {
	          return 'раніцы';
	        } else if (hour < 17) {
	          return 'дня';
	        } else {
	          return 'вечара';
	        }
	      },
	      ordinalParse: /\d{1,2}-(і|ы|га)/,
	      ordinal: function(number, period) {
	        switch (period) {
	          case 'M':
	          case 'd':
	          case 'DDD':
	          case 'w':
	          case 'W':
	            return (number % 10 === 2 || number % 10 === 3) && (number % 100 !== 12 && number % 100 !== 13) ? number + '-і' : number + '-ы';
	          case 'D':
	            return number + '-га';
	          default:
	            return number;
	        }
	      },
	      week: {
	        dow: 1,
	        doy: 7
	      }
	    });
	    return be;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var bg = moment.defineLocale('bg', {
	      months: 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
	      monthsShort: 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
	      weekdays: 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
	      weekdaysShort: 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
	      weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
	      longDateFormat: {
	        LT: 'H:mm',
	        LTS: 'H:mm:ss',
	        L: 'D.MM.YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY H:mm',
	        LLLL: 'dddd, D MMMM YYYY H:mm'
	      },
	      calendar: {
	        sameDay: '[Днес в] LT',
	        nextDay: '[Утре в] LT',
	        nextWeek: 'dddd [в] LT',
	        lastDay: '[Вчера в] LT',
	        lastWeek: function() {
	          switch (this.day()) {
	            case 0:
	            case 3:
	            case 6:
	              return '[В изминалата] dddd [в] LT';
	            case 1:
	            case 2:
	            case 4:
	            case 5:
	              return '[В изминалия] dddd [в] LT';
	          }
	        },
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'след %s',
	        past: 'преди %s',
	        s: 'няколко секунди',
	        m: 'минута',
	        mm: '%d минути',
	        h: 'час',
	        hh: '%d часа',
	        d: 'ден',
	        dd: '%d дни',
	        M: 'месец',
	        MM: '%d месеца',
	        y: 'година',
	        yy: '%d години'
	      },
	      ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
	      ordinal: function(number) {
	        var lastDigit = number % 10,
	            last2Digits = number % 100;
	        if (number === 0) {
	          return number + '-ев';
	        } else if (last2Digits === 0) {
	          return number + '-ен';
	        } else if (last2Digits > 10 && last2Digits < 20) {
	          return number + '-ти';
	        } else if (lastDigit === 1) {
	          return number + '-ви';
	        } else if (lastDigit === 2) {
	          return number + '-ри';
	        } else if (lastDigit === 7 || lastDigit === 8) {
	          return number + '-ми';
	        } else {
	          return number + '-ти';
	        }
	      },
	      week: {
	        dow: 1,
	        doy: 7
	      }
	    });
	    return bg;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var symbolMap = {
	      '1': '১',
	      '2': '২',
	      '3': '৩',
	      '4': '৪',
	      '5': '৫',
	      '6': '৬',
	      '7': '৭',
	      '8': '৮',
	      '9': '৯',
	      '0': '০'
	    },
	        numberMap = {
	          '১': '1',
	          '২': '2',
	          '৩': '3',
	          '৪': '4',
	          '৫': '5',
	          '৬': '6',
	          '৭': '7',
	          '৮': '8',
	          '৯': '9',
	          '০': '0'
	        };
	    var bn = moment.defineLocale('bn', {
	      months: 'জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split('_'),
	      monthsShort: 'জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে'.split('_'),
	      weekdays: 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার'.split('_'),
	      weekdaysShort: 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি'.split('_'),
	      weekdaysMin: 'রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি'.split('_'),
	      longDateFormat: {
	        LT: 'A h:mm সময়',
	        LTS: 'A h:mm:ss সময়',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY, A h:mm সময়',
	        LLLL: 'dddd, D MMMM YYYY, A h:mm সময়'
	      },
	      calendar: {
	        sameDay: '[আজ] LT',
	        nextDay: '[আগামীকাল] LT',
	        nextWeek: 'dddd, LT',
	        lastDay: '[গতকাল] LT',
	        lastWeek: '[গত] dddd, LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: '%s পরে',
	        past: '%s আগে',
	        s: 'কয়েক সেকেন্ড',
	        m: 'এক মিনিট',
	        mm: '%d মিনিট',
	        h: 'এক ঘন্টা',
	        hh: '%d ঘন্টা',
	        d: 'এক দিন',
	        dd: '%d দিন',
	        M: 'এক মাস',
	        MM: '%d মাস',
	        y: 'এক বছর',
	        yy: '%d বছর'
	      },
	      preparse: function(string) {
	        return string.replace(/[১২৩৪৫৬৭৮৯০]/g, function(match) {
	          return numberMap[$traceurRuntime.toProperty(match)];
	        });
	      },
	      postformat: function(string) {
	        return string.replace(/\d/g, function(match) {
	          return symbolMap[$traceurRuntime.toProperty(match)];
	        });
	      },
	      meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
	      meridiemHour: function(hour, meridiem) {
	        if (hour === 12) {
	          hour = 0;
	        }
	        if ((meridiem === 'রাত' && hour >= 4) || (meridiem === 'দুপুর' && hour < 5) || meridiem === 'বিকাল') {
	          return hour + 12;
	        } else {
	          return hour;
	        }
	      },
	      meridiem: function(hour, minute, isLower) {
	        if (hour < 4) {
	          return 'রাত';
	        } else if (hour < 10) {
	          return 'সকাল';
	        } else if (hour < 17) {
	          return 'দুপুর';
	        } else if (hour < 20) {
	          return 'বিকাল';
	        } else {
	          return 'রাত';
	        }
	      },
	      week: {
	        dow: 0,
	        doy: 6
	      }
	    });
	    return bn;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var symbolMap = {
	      '1': '༡',
	      '2': '༢',
	      '3': '༣',
	      '4': '༤',
	      '5': '༥',
	      '6': '༦',
	      '7': '༧',
	      '8': '༨',
	      '9': '༩',
	      '0': '༠'
	    },
	        numberMap = {
	          '༡': '1',
	          '༢': '2',
	          '༣': '3',
	          '༤': '4',
	          '༥': '5',
	          '༦': '6',
	          '༧': '7',
	          '༨': '8',
	          '༩': '9',
	          '༠': '0'
	        };
	    var bo = moment.defineLocale('bo', {
	      months: 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
	      monthsShort: 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
	      weekdays: 'གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་'.split('_'),
	      weekdaysShort: 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
	      weekdaysMin: 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
	      longDateFormat: {
	        LT: 'A h:mm',
	        LTS: 'A h:mm:ss',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY, A h:mm',
	        LLLL: 'dddd, D MMMM YYYY, A h:mm'
	      },
	      calendar: {
	        sameDay: '[དི་རིང] LT',
	        nextDay: '[སང་ཉིན] LT',
	        nextWeek: '[བདུན་ཕྲག་རྗེས་མ], LT',
	        lastDay: '[ཁ་སང] LT',
	        lastWeek: '[བདུན་ཕྲག་མཐའ་མ] dddd, LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: '%s ལ་',
	        past: '%s སྔན་ལ',
	        s: 'ལམ་སང',
	        m: 'སྐར་མ་གཅིག',
	        mm: '%d སྐར་མ',
	        h: 'ཆུ་ཚོད་གཅིག',
	        hh: '%d ཆུ་ཚོད',
	        d: 'ཉིན་གཅིག',
	        dd: '%d ཉིན་',
	        M: 'ཟླ་བ་གཅིག',
	        MM: '%d ཟླ་བ',
	        y: 'ལོ་གཅིག',
	        yy: '%d ལོ'
	      },
	      preparse: function(string) {
	        return string.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function(match) {
	          return numberMap[$traceurRuntime.toProperty(match)];
	        });
	      },
	      postformat: function(string) {
	        return string.replace(/\d/g, function(match) {
	          return symbolMap[$traceurRuntime.toProperty(match)];
	        });
	      },
	      meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
	      meridiemHour: function(hour, meridiem) {
	        if (hour === 12) {
	          hour = 0;
	        }
	        if ((meridiem === 'མཚན་མོ' && hour >= 4) || (meridiem === 'ཉིན་གུང' && hour < 5) || meridiem === 'དགོང་དག') {
	          return hour + 12;
	        } else {
	          return hour;
	        }
	      },
	      meridiem: function(hour, minute, isLower) {
	        if (hour < 4) {
	          return 'མཚན་མོ';
	        } else if (hour < 10) {
	          return 'ཞོགས་ཀས';
	        } else if (hour < 17) {
	          return 'ཉིན་གུང';
	        } else if (hour < 20) {
	          return 'དགོང་དག';
	        } else {
	          return 'མཚན་མོ';
	        }
	      },
	      week: {
	        dow: 0,
	        doy: 6
	      }
	    });
	    return bo;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    function relativeTimeWithMutation(number, withoutSuffix, key) {
	      var format = {
	        'mm': 'munutenn',
	        'MM': 'miz',
	        'dd': 'devezh'
	      };
	      return number + ' ' + mutation(format[$traceurRuntime.toProperty(key)], number);
	    }
	    function specialMutationForYears(number) {
	      switch (lastNumber(number)) {
	        case 1:
	        case 3:
	        case 4:
	        case 5:
	        case 9:
	          return number + ' bloaz';
	        default:
	          return number + ' vloaz';
	      }
	    }
	    function lastNumber(number) {
	      if (number > 9) {
	        return lastNumber(number % 10);
	      }
	      return number;
	    }
	    function mutation(text, number) {
	      if (number === 2) {
	        return softMutation(text);
	      }
	      return text;
	    }
	    function softMutation(text) {
	      var mutationTable = {
	        'm': 'v',
	        'b': 'v',
	        'd': 'z'
	      };
	      if (mutationTable[$traceurRuntime.toProperty(text.charAt(0))] === undefined) {
	        return text;
	      }
	      return mutationTable[$traceurRuntime.toProperty(text.charAt(0))] + text.substring(1);
	    }
	    var br = moment.defineLocale('br', {
	      months: 'Genver_C\'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split('_'),
	      monthsShort: 'Gen_C\'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_'),
	      weekdays: 'Sul_Lun_Meurzh_Merc\'her_Yaou_Gwener_Sadorn'.split('_'),
	      weekdaysShort: 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
	      weekdaysMin: 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
	      weekdaysParseExact: true,
	      longDateFormat: {
	        LT: 'h[e]mm A',
	        LTS: 'h[e]mm:ss A',
	        L: 'DD/MM/YYYY',
	        LL: 'D [a viz] MMMM YYYY',
	        LLL: 'D [a viz] MMMM YYYY h[e]mm A',
	        LLLL: 'dddd, D [a viz] MMMM YYYY h[e]mm A'
	      },
	      calendar: {
	        sameDay: '[Hiziv da] LT',
	        nextDay: '[Warc\'hoazh da] LT',
	        nextWeek: 'dddd [da] LT',
	        lastDay: '[Dec\'h da] LT',
	        lastWeek: 'dddd [paset da] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'a-benn %s',
	        past: '%s \'zo',
	        s: 'un nebeud segondennoù',
	        m: 'ur vunutenn',
	        mm: relativeTimeWithMutation,
	        h: 'un eur',
	        hh: '%d eur',
	        d: 'un devezh',
	        dd: relativeTimeWithMutation,
	        M: 'ur miz',
	        MM: relativeTimeWithMutation,
	        y: 'ur bloaz',
	        yy: specialMutationForYears
	      },
	      ordinalParse: /\d{1,2}(añ|vet)/,
	      ordinal: function(number) {
	        var output = (number === 1) ? 'añ' : 'vet';
	        return number + output;
	      },
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return br;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    function translate(number, withoutSuffix, key) {
	      var result = number + ' ';
	      switch (key) {
	        case 'm':
	          return withoutSuffix ? 'jedna minuta' : 'jedne minute';
	        case 'mm':
	          if (number === 1) {
	            result += 'minuta';
	          } else if (number === 2 || number === 3 || number === 4) {
	            result += 'minute';
	          } else {
	            result += 'minuta';
	          }
	          return result;
	        case 'h':
	          return withoutSuffix ? 'jedan sat' : 'jednog sata';
	        case 'hh':
	          if (number === 1) {
	            result += 'sat';
	          } else if (number === 2 || number === 3 || number === 4) {
	            result += 'sata';
	          } else {
	            result += 'sati';
	          }
	          return result;
	        case 'dd':
	          if (number === 1) {
	            result += 'dan';
	          } else {
	            result += 'dana';
	          }
	          return result;
	        case 'MM':
	          if (number === 1) {
	            result += 'mjesec';
	          } else if (number === 2 || number === 3 || number === 4) {
	            result += 'mjeseca';
	          } else {
	            result += 'mjeseci';
	          }
	          return result;
	        case 'yy':
	          if (number === 1) {
	            result += 'godina';
	          } else if (number === 2 || number === 3 || number === 4) {
	            result += 'godine';
	          } else {
	            result += 'godina';
	          }
	          return result;
	      }
	    }
	    var bs = moment.defineLocale('bs', {
	      months: 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'),
	      monthsShort: 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
	      monthsParseExact: true,
	      weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
	      weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
	      weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
	      weekdaysParseExact: true,
	      longDateFormat: {
	        LT: 'H:mm',
	        LTS: 'H:mm:ss',
	        L: 'DD.MM.YYYY',
	        LL: 'D. MMMM YYYY',
	        LLL: 'D. MMMM YYYY H:mm',
	        LLLL: 'dddd, D. MMMM YYYY H:mm'
	      },
	      calendar: {
	        sameDay: '[danas u] LT',
	        nextDay: '[sutra u] LT',
	        nextWeek: function() {
	          switch (this.day()) {
	            case 0:
	              return '[u] [nedjelju] [u] LT';
	            case 3:
	              return '[u] [srijedu] [u] LT';
	            case 6:
	              return '[u] [subotu] [u] LT';
	            case 1:
	            case 2:
	            case 4:
	            case 5:
	              return '[u] dddd [u] LT';
	          }
	        },
	        lastDay: '[jučer u] LT',
	        lastWeek: function() {
	          switch (this.day()) {
	            case 0:
	            case 3:
	              return '[prošlu] dddd [u] LT';
	            case 6:
	              return '[prošle] [subote] [u] LT';
	            case 1:
	            case 2:
	            case 4:
	            case 5:
	              return '[prošli] dddd [u] LT';
	          }
	        },
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'za %s',
	        past: 'prije %s',
	        s: 'par sekundi',
	        m: translate,
	        mm: translate,
	        h: translate,
	        hh: translate,
	        d: 'dan',
	        dd: translate,
	        M: 'mjesec',
	        MM: translate,
	        y: 'godinu',
	        yy: translate
	      },
	      ordinalParse: /\d{1,2}\./,
	      ordinal: '%d.',
	      week: {
	        dow: 1,
	        doy: 7
	      }
	    });
	    return bs;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var ca = moment.defineLocale('ca', {
	      months: 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
	      monthsShort: 'gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.'.split('_'),
	      monthsParseExact: true,
	      weekdays: 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
	      weekdaysShort: 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
	      weekdaysMin: 'Dg_Dl_Dt_Dc_Dj_Dv_Ds'.split('_'),
	      weekdaysParseExact: true,
	      longDateFormat: {
	        LT: 'H:mm',
	        LTS: 'H:mm:ss',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY H:mm',
	        LLLL: 'dddd D MMMM YYYY H:mm'
	      },
	      calendar: {
	        sameDay: function() {
	          return '[avui a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
	        },
	        nextDay: function() {
	          return '[demà a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
	        },
	        nextWeek: function() {
	          return 'dddd [a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
	        },
	        lastDay: function() {
	          return '[ahir a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
	        },
	        lastWeek: function() {
	          return '[el] dddd [passat a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
	        },
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'en %s',
	        past: 'fa %s',
	        s: 'uns segons',
	        m: 'un minut',
	        mm: '%d minuts',
	        h: 'una hora',
	        hh: '%d hores',
	        d: 'un dia',
	        dd: '%d dies',
	        M: 'un mes',
	        MM: '%d mesos',
	        y: 'un any',
	        yy: '%d anys'
	      },
	      ordinalParse: /\d{1,2}(r|n|t|è|a)/,
	      ordinal: function(number, period) {
	        var output = (number === 1) ? 'r' : (number === 2) ? 'n' : (number === 3) ? 'r' : (number === 4) ? 't' : 'è';
	        if (period === 'w' || period === 'W') {
	          output = 'a';
	        }
	        return number + output;
	      },
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return ca;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var months = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'),
	        monthsShort = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');
	    function plural(n) {
	      return (n > 1) && (n < 5) && (~~(n / 10) !== 1);
	    }
	    function translate(number, withoutSuffix, key, isFuture) {
	      var result = number + ' ';
	      switch (key) {
	        case 's':
	          return (withoutSuffix || isFuture) ? 'pár sekund' : 'pár sekundami';
	        case 'm':
	          return withoutSuffix ? 'minuta' : (isFuture ? 'minutu' : 'minutou');
	        case 'mm':
	          if (withoutSuffix || isFuture) {
	            return result + (plural(number) ? 'minuty' : 'minut');
	          } else {
	            return result + 'minutami';
	          }
	          break;
	        case 'h':
	          return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
	        case 'hh':
	          if (withoutSuffix || isFuture) {
	            return result + (plural(number) ? 'hodiny' : 'hodin');
	          } else {
	            return result + 'hodinami';
	          }
	          break;
	        case 'd':
	          return (withoutSuffix || isFuture) ? 'den' : 'dnem';
	        case 'dd':
	          if (withoutSuffix || isFuture) {
	            return result + (plural(number) ? 'dny' : 'dní');
	          } else {
	            return result + 'dny';
	          }
	          break;
	        case 'M':
	          return (withoutSuffix || isFuture) ? 'měsíc' : 'měsícem';
	        case 'MM':
	          if (withoutSuffix || isFuture) {
	            return result + (plural(number) ? 'měsíce' : 'měsíců');
	          } else {
	            return result + 'měsíci';
	          }
	          break;
	        case 'y':
	          return (withoutSuffix || isFuture) ? 'rok' : 'rokem';
	        case 'yy':
	          if (withoutSuffix || isFuture) {
	            return result + (plural(number) ? 'roky' : 'let');
	          } else {
	            return result + 'lety';
	          }
	          break;
	      }
	    }
	    var cs = moment.defineLocale('cs', {
	      months: months,
	      monthsShort: monthsShort,
	      monthsParse: (function(months, monthsShort) {
	        var i,
	            _monthsParse = [];
	        for (i = 0; i < 12; i++) {
	          $traceurRuntime.setProperty(_monthsParse, i, new RegExp('^' + months[$traceurRuntime.toProperty(i)] + '$|^' + monthsShort[$traceurRuntime.toProperty(i)] + '$', 'i'));
	        }
	        return _monthsParse;
	      }(months, monthsShort)),
	      shortMonthsParse: (function(monthsShort) {
	        var i,
	            _shortMonthsParse = [];
	        for (i = 0; i < 12; i++) {
	          $traceurRuntime.setProperty(_shortMonthsParse, i, new RegExp('^' + monthsShort[$traceurRuntime.toProperty(i)] + '$', 'i'));
	        }
	        return _shortMonthsParse;
	      }(monthsShort)),
	      longMonthsParse: (function(months) {
	        var i,
	            _longMonthsParse = [];
	        for (i = 0; i < 12; i++) {
	          $traceurRuntime.setProperty(_longMonthsParse, i, new RegExp('^' + months[$traceurRuntime.toProperty(i)] + '$', 'i'));
	        }
	        return _longMonthsParse;
	      }(months)),
	      weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
	      weekdaysShort: 'ne_po_út_st_čt_pá_so'.split('_'),
	      weekdaysMin: 'ne_po_út_st_čt_pá_so'.split('_'),
	      longDateFormat: {
	        LT: 'H:mm',
	        LTS: 'H:mm:ss',
	        L: 'DD.MM.YYYY',
	        LL: 'D. MMMM YYYY',
	        LLL: 'D. MMMM YYYY H:mm',
	        LLLL: 'dddd D. MMMM YYYY H:mm',
	        l: 'D. M. YYYY'
	      },
	      calendar: {
	        sameDay: '[dnes v] LT',
	        nextDay: '[zítra v] LT',
	        nextWeek: function() {
	          switch (this.day()) {
	            case 0:
	              return '[v neděli v] LT';
	            case 1:
	            case 2:
	              return '[v] dddd [v] LT';
	            case 3:
	              return '[ve středu v] LT';
	            case 4:
	              return '[ve čtvrtek v] LT';
	            case 5:
	              return '[v pátek v] LT';
	            case 6:
	              return '[v sobotu v] LT';
	          }
	        },
	        lastDay: '[včera v] LT',
	        lastWeek: function() {
	          switch (this.day()) {
	            case 0:
	              return '[minulou neděli v] LT';
	            case 1:
	            case 2:
	              return '[minulé] dddd [v] LT';
	            case 3:
	              return '[minulou středu v] LT';
	            case 4:
	            case 5:
	              return '[minulý] dddd [v] LT';
	            case 6:
	              return '[minulou sobotu v] LT';
	          }
	        },
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'za %s',
	        past: 'před %s',
	        s: translate,
	        m: translate,
	        mm: translate,
	        h: translate,
	        hh: translate,
	        d: translate,
	        dd: translate,
	        M: translate,
	        MM: translate,
	        y: translate,
	        yy: translate
	      },
	      ordinalParse: /\d{1,2}\./,
	      ordinal: '%d.',
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return cs;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var cv = moment.defineLocale('cv', {
	      months: 'кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав'.split('_'),
	      monthsShort: 'кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш'.split('_'),
	      weekdays: 'вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун'.split('_'),
	      weekdaysShort: 'выр_тун_ытл_юн_кӗҫ_эрн_шӑм'.split('_'),
	      weekdaysMin: 'вр_тн_ыт_юн_кҫ_эр_шм'.split('_'),
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD-MM-YYYY',
	        LL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]',
	        LLL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
	        LLLL: 'dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm'
	      },
	      calendar: {
	        sameDay: '[Паян] LT [сехетре]',
	        nextDay: '[Ыран] LT [сехетре]',
	        lastDay: '[Ӗнер] LT [сехетре]',
	        nextWeek: '[Ҫитес] dddd LT [сехетре]',
	        lastWeek: '[Иртнӗ] dddd LT [сехетре]',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: function(output) {
	          var affix = /сехет$/i.exec(output) ? 'рен' : /ҫул$/i.exec(output) ? 'тан' : 'ран';
	          return output + affix;
	        },
	        past: '%s каялла',
	        s: 'пӗр-ик ҫеккунт',
	        m: 'пӗр минут',
	        mm: '%d минут',
	        h: 'пӗр сехет',
	        hh: '%d сехет',
	        d: 'пӗр кун',
	        dd: '%d кун',
	        M: 'пӗр уйӑх',
	        MM: '%d уйӑх',
	        y: 'пӗр ҫул',
	        yy: '%d ҫул'
	      },
	      ordinalParse: /\d{1,2}-мӗш/,
	      ordinal: '%d-мӗш',
	      week: {
	        dow: 1,
	        doy: 7
	      }
	    });
	    return cv;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var cy = moment.defineLocale('cy', {
	      months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split('_'),
	      monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_'),
	      weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split('_'),
	      weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
	      weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
	      weekdaysParseExact: true,
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY HH:mm',
	        LLLL: 'dddd, D MMMM YYYY HH:mm'
	      },
	      calendar: {
	        sameDay: '[Heddiw am] LT',
	        nextDay: '[Yfory am] LT',
	        nextWeek: 'dddd [am] LT',
	        lastDay: '[Ddoe am] LT',
	        lastWeek: 'dddd [diwethaf am] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'mewn %s',
	        past: '%s yn ôl',
	        s: 'ychydig eiliadau',
	        m: 'munud',
	        mm: '%d munud',
	        h: 'awr',
	        hh: '%d awr',
	        d: 'diwrnod',
	        dd: '%d diwrnod',
	        M: 'mis',
	        MM: '%d mis',
	        y: 'blwyddyn',
	        yy: '%d flynedd'
	      },
	      ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
	      ordinal: function(number) {
	        var b = number,
	            output = '',
	            lookup = ['', 'af', 'il', 'ydd', 'ydd', 'ed', 'ed', 'ed', 'fed', 'fed', 'fed', 'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'fed'];
	        if (b > 20) {
	          if (b === 40 || b === 50 || b === 60 || b === 80 || b === 100) {
	            output = 'fed';
	          } else {
	            output = 'ain';
	          }
	        } else if (b > 0) {
	          output = lookup[$traceurRuntime.toProperty(b)];
	        }
	        return number + output;
	      },
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return cy;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var da = moment.defineLocale('da', {
	      months: 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split('_'),
	      monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
	      weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
	      weekdaysShort: 'søn_man_tir_ons_tor_fre_lør'.split('_'),
	      weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD/MM/YYYY',
	        LL: 'D. MMMM YYYY',
	        LLL: 'D. MMMM YYYY HH:mm',
	        LLLL: 'dddd [d.] D. MMMM YYYY HH:mm'
	      },
	      calendar: {
	        sameDay: '[I dag kl.] LT',
	        nextDay: '[I morgen kl.] LT',
	        nextWeek: 'dddd [kl.] LT',
	        lastDay: '[I går kl.] LT',
	        lastWeek: '[sidste] dddd [kl] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'om %s',
	        past: '%s siden',
	        s: 'få sekunder',
	        m: 'et minut',
	        mm: '%d minutter',
	        h: 'en time',
	        hh: '%d timer',
	        d: 'en dag',
	        dd: '%d dage',
	        M: 'en måned',
	        MM: '%d måneder',
	        y: 'et år',
	        yy: '%d år'
	      },
	      ordinalParse: /\d{1,2}\./,
	      ordinal: '%d.',
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return da;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	      var format = {
	        'm': ['eine Minute', 'einer Minute'],
	        'h': ['eine Stunde', 'einer Stunde'],
	        'd': ['ein Tag', 'einem Tag'],
	        'dd': [number + ' Tage', number + ' Tagen'],
	        'M': ['ein Monat', 'einem Monat'],
	        'MM': [number + ' Monate', number + ' Monaten'],
	        'y': ['ein Jahr', 'einem Jahr'],
	        'yy': [number + ' Jahre', number + ' Jahren']
	      };
	      return withoutSuffix ? format[$traceurRuntime.toProperty(key)][0] : format[$traceurRuntime.toProperty(key)][1];
	    }
	    var de = moment.defineLocale('de', {
	      months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
	      monthsShort: 'Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
	      monthsParseExact: true,
	      weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
	      weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
	      weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
	      weekdaysParseExact: true,
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD.MM.YYYY',
	        LL: 'D. MMMM YYYY',
	        LLL: 'D. MMMM YYYY HH:mm',
	        LLLL: 'dddd, D. MMMM YYYY HH:mm'
	      },
	      calendar: {
	        sameDay: '[heute um] LT [Uhr]',
	        sameElse: 'L',
	        nextDay: '[morgen um] LT [Uhr]',
	        nextWeek: 'dddd [um] LT [Uhr]',
	        lastDay: '[gestern um] LT [Uhr]',
	        lastWeek: '[letzten] dddd [um] LT [Uhr]'
	      },
	      relativeTime: {
	        future: 'in %s',
	        past: 'vor %s',
	        s: 'ein paar Sekunden',
	        m: processRelativeTime,
	        mm: '%d Minuten',
	        h: processRelativeTime,
	        hh: '%d Stunden',
	        d: processRelativeTime,
	        dd: processRelativeTime,
	        M: processRelativeTime,
	        MM: processRelativeTime,
	        y: processRelativeTime,
	        yy: processRelativeTime
	      },
	      ordinalParse: /\d{1,2}\./,
	      ordinal: '%d.',
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return de;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	      var format = {
	        'm': ['eine Minute', 'einer Minute'],
	        'h': ['eine Stunde', 'einer Stunde'],
	        'd': ['ein Tag', 'einem Tag'],
	        'dd': [number + ' Tage', number + ' Tagen'],
	        'M': ['ein Monat', 'einem Monat'],
	        'MM': [number + ' Monate', number + ' Monaten'],
	        'y': ['ein Jahr', 'einem Jahr'],
	        'yy': [number + ' Jahre', number + ' Jahren']
	      };
	      return withoutSuffix ? format[$traceurRuntime.toProperty(key)][0] : format[$traceurRuntime.toProperty(key)][1];
	    }
	    var de_at = moment.defineLocale('de-at', {
	      months: 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
	      monthsShort: 'Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
	      monthsParseExact: true,
	      weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
	      weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
	      weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
	      weekdaysParseExact: true,
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD.MM.YYYY',
	        LL: 'D. MMMM YYYY',
	        LLL: 'D. MMMM YYYY HH:mm',
	        LLLL: 'dddd, D. MMMM YYYY HH:mm'
	      },
	      calendar: {
	        sameDay: '[heute um] LT [Uhr]',
	        sameElse: 'L',
	        nextDay: '[morgen um] LT [Uhr]',
	        nextWeek: 'dddd [um] LT [Uhr]',
	        lastDay: '[gestern um] LT [Uhr]',
	        lastWeek: '[letzten] dddd [um] LT [Uhr]'
	      },
	      relativeTime: {
	        future: 'in %s',
	        past: 'vor %s',
	        s: 'ein paar Sekunden',
	        m: processRelativeTime,
	        mm: '%d Minuten',
	        h: processRelativeTime,
	        hh: '%d Stunden',
	        d: processRelativeTime,
	        dd: processRelativeTime,
	        M: processRelativeTime,
	        MM: processRelativeTime,
	        y: processRelativeTime,
	        yy: processRelativeTime
	      },
	      ordinalParse: /\d{1,2}\./,
	      ordinal: '%d.',
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return de_at;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var months = ['ޖެނުއަރީ', 'ފެބްރުއަރީ', 'މާރިޗު', 'އޭޕްރީލު', 'މޭ', 'ޖޫން', 'ޖުލައި', 'އޯގަސްޓު', 'ސެޕްޓެމްބަރު', 'އޮކްޓޯބަރު', 'ނޮވެމްބަރު', 'ޑިސެމްބަރު'],
	        weekdays = ['އާދިއްތަ', 'ހޯމަ', 'އަންގާރަ', 'ބުދަ', 'ބުރާސްފަތި', 'ހުކުރު', 'ހޮނިހިރު'];
	    var dv = moment.defineLocale('dv', {
	      months: months,
	      monthsShort: months,
	      weekdays: weekdays,
	      weekdaysShort: weekdays,
	      weekdaysMin: 'އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި'.split('_'),
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'D/M/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY HH:mm',
	        LLLL: 'dddd D MMMM YYYY HH:mm'
	      },
	      meridiemParse: /މކ|މފ/,
	      isPM: function(input) {
	        return 'މފ' === input;
	      },
	      meridiem: function(hour, minute, isLower) {
	        if (hour < 12) {
	          return 'މކ';
	        } else {
	          return 'މފ';
	        }
	      },
	      calendar: {
	        sameDay: '[މިއަދު] LT',
	        nextDay: '[މާދަމާ] LT',
	        nextWeek: 'dddd LT',
	        lastDay: '[އިއްޔެ] LT',
	        lastWeek: '[ފާއިތުވި] dddd LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'ތެރޭގައި %s',
	        past: 'ކުރިން %s',
	        s: 'ސިކުންތުކޮޅެއް',
	        m: 'މިނިޓެއް',
	        mm: 'މިނިޓު %d',
	        h: 'ގަޑިއިރެއް',
	        hh: 'ގަޑިއިރު %d',
	        d: 'ދުވަހެއް',
	        dd: 'ދުވަސް %d',
	        M: 'މަހެއް',
	        MM: 'މަސް %d',
	        y: 'އަހަރެއް',
	        yy: 'އަހަރު %d'
	      },
	      preparse: function(string) {
	        return string.replace(/،/g, ',');
	      },
	      postformat: function(string) {
	        return string.replace(/,/g, '،');
	      },
	      week: {
	        dow: 7,
	        doy: 12
	      }
	    });
	    return dv;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    function isFunction(input) {
	      return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
	    }
	    var el = moment.defineLocale('el', {
	      monthsNominativeEl: 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split('_'),
	      monthsGenitiveEl: 'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split('_'),
	      months: function(momentToFormat, format) {
	        if (/D/.test(format.substring(0, format.indexOf('MMMM')))) {
	          return this._monthsGenitiveEl[$traceurRuntime.toProperty(momentToFormat.month())];
	        } else {
	          return this._monthsNominativeEl[$traceurRuntime.toProperty(momentToFormat.month())];
	        }
	      },
	      monthsShort: 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_'),
	      weekdays: 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split('_'),
	      weekdaysShort: 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
	      weekdaysMin: 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
	      meridiem: function(hours, minutes, isLower) {
	        if (hours > 11) {
	          return isLower ? 'μμ' : 'ΜΜ';
	        } else {
	          return isLower ? 'πμ' : 'ΠΜ';
	        }
	      },
	      isPM: function(input) {
	        return ((input + '').toLowerCase()[0] === 'μ');
	      },
	      meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
	      longDateFormat: {
	        LT: 'h:mm A',
	        LTS: 'h:mm:ss A',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY h:mm A',
	        LLLL: 'dddd, D MMMM YYYY h:mm A'
	      },
	      calendarEl: {
	        sameDay: '[Σήμερα {}] LT',
	        nextDay: '[Αύριο {}] LT',
	        nextWeek: 'dddd [{}] LT',
	        lastDay: '[Χθες {}] LT',
	        lastWeek: function() {
	          switch (this.day()) {
	            case 6:
	              return '[το προηγούμενο] dddd [{}] LT';
	            default:
	              return '[την προηγούμενη] dddd [{}] LT';
	          }
	        },
	        sameElse: 'L'
	      },
	      calendar: function(key, mom) {
	        var output = this._calendarEl[$traceurRuntime.toProperty(key)],
	            hours = mom && mom.hours();
	        if (isFunction(output)) {
	          output = output.apply(mom);
	        }
	        return output.replace('{}', (hours % 12 === 1 ? 'στη' : 'στις'));
	      },
	      relativeTime: {
	        future: 'σε %s',
	        past: '%s πριν',
	        s: 'λίγα δευτερόλεπτα',
	        m: 'ένα λεπτό',
	        mm: '%d λεπτά',
	        h: 'μία ώρα',
	        hh: '%d ώρες',
	        d: 'μία μέρα',
	        dd: '%d μέρες',
	        M: 'ένας μήνας',
	        MM: '%d μήνες',
	        y: 'ένας χρόνος',
	        yy: '%d χρόνια'
	      },
	      ordinalParse: /\d{1,2}η/,
	      ordinal: '%dη',
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return el;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var en_au = moment.defineLocale('en-au', {
	      months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	      monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	      weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	      weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	      weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	      longDateFormat: {
	        LT: 'h:mm A',
	        LTS: 'h:mm:ss A',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY h:mm A',
	        LLLL: 'dddd, D MMMM YYYY h:mm A'
	      },
	      calendar: {
	        sameDay: '[Today at] LT',
	        nextDay: '[Tomorrow at] LT',
	        nextWeek: 'dddd [at] LT',
	        lastDay: '[Yesterday at] LT',
	        lastWeek: '[Last] dddd [at] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'in %s',
	        past: '%s ago',
	        s: 'a few seconds',
	        m: 'a minute',
	        mm: '%d minutes',
	        h: 'an hour',
	        hh: '%d hours',
	        d: 'a day',
	        dd: '%d days',
	        M: 'a month',
	        MM: '%d months',
	        y: 'a year',
	        yy: '%d years'
	      },
	      ordinalParse: /\d{1,2}(st|nd|rd|th)/,
	      ordinal: function(number) {
	        var b = number % 10,
	            output = (~~(number % 100 / 10) === 1) ? 'th' : (b === 1) ? 'st' : (b === 2) ? 'nd' : (b === 3) ? 'rd' : 'th';
	        return number + output;
	      },
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return en_au;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var en_ca = moment.defineLocale('en-ca', {
	      months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	      monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	      weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	      weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	      weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	      longDateFormat: {
	        LT: 'h:mm A',
	        LTS: 'h:mm:ss A',
	        L: 'YYYY-MM-DD',
	        LL: 'MMMM D, YYYY',
	        LLL: 'MMMM D, YYYY h:mm A',
	        LLLL: 'dddd, MMMM D, YYYY h:mm A'
	      },
	      calendar: {
	        sameDay: '[Today at] LT',
	        nextDay: '[Tomorrow at] LT',
	        nextWeek: 'dddd [at] LT',
	        lastDay: '[Yesterday at] LT',
	        lastWeek: '[Last] dddd [at] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'in %s',
	        past: '%s ago',
	        s: 'a few seconds',
	        m: 'a minute',
	        mm: '%d minutes',
	        h: 'an hour',
	        hh: '%d hours',
	        d: 'a day',
	        dd: '%d days',
	        M: 'a month',
	        MM: '%d months',
	        y: 'a year',
	        yy: '%d years'
	      },
	      ordinalParse: /\d{1,2}(st|nd|rd|th)/,
	      ordinal: function(number) {
	        var b = number % 10,
	            output = (~~(number % 100 / 10) === 1) ? 'th' : (b === 1) ? 'st' : (b === 2) ? 'nd' : (b === 3) ? 'rd' : 'th';
	        return number + output;
	      }
	    });
	    return en_ca;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var en_gb = moment.defineLocale('en-gb', {
	      months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	      monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	      weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	      weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	      weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY HH:mm',
	        LLLL: 'dddd, D MMMM YYYY HH:mm'
	      },
	      calendar: {
	        sameDay: '[Today at] LT',
	        nextDay: '[Tomorrow at] LT',
	        nextWeek: 'dddd [at] LT',
	        lastDay: '[Yesterday at] LT',
	        lastWeek: '[Last] dddd [at] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'in %s',
	        past: '%s ago',
	        s: 'a few seconds',
	        m: 'a minute',
	        mm: '%d minutes',
	        h: 'an hour',
	        hh: '%d hours',
	        d: 'a day',
	        dd: '%d days',
	        M: 'a month',
	        MM: '%d months',
	        y: 'a year',
	        yy: '%d years'
	      },
	      ordinalParse: /\d{1,2}(st|nd|rd|th)/,
	      ordinal: function(number) {
	        var b = number % 10,
	            output = (~~(number % 100 / 10) === 1) ? 'th' : (b === 1) ? 'st' : (b === 2) ? 'nd' : (b === 3) ? 'rd' : 'th';
	        return number + output;
	      },
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return en_gb;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var en_ie = moment.defineLocale('en-ie', {
	      months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	      monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	      weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	      weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	      weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD-MM-YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY HH:mm',
	        LLLL: 'dddd D MMMM YYYY HH:mm'
	      },
	      calendar: {
	        sameDay: '[Today at] LT',
	        nextDay: '[Tomorrow at] LT',
	        nextWeek: 'dddd [at] LT',
	        lastDay: '[Yesterday at] LT',
	        lastWeek: '[Last] dddd [at] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'in %s',
	        past: '%s ago',
	        s: 'a few seconds',
	        m: 'a minute',
	        mm: '%d minutes',
	        h: 'an hour',
	        hh: '%d hours',
	        d: 'a day',
	        dd: '%d days',
	        M: 'a month',
	        MM: '%d months',
	        y: 'a year',
	        yy: '%d years'
	      },
	      ordinalParse: /\d{1,2}(st|nd|rd|th)/,
	      ordinal: function(number) {
	        var b = number % 10,
	            output = (~~(number % 100 / 10) === 1) ? 'th' : (b === 1) ? 'st' : (b === 2) ? 'nd' : (b === 3) ? 'rd' : 'th';
	        return number + output;
	      },
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return en_ie;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var en_nz = moment.defineLocale('en-nz', {
	      months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	      monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	      weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	      weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	      weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	      longDateFormat: {
	        LT: 'h:mm A',
	        LTS: 'h:mm:ss A',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY h:mm A',
	        LLLL: 'dddd, D MMMM YYYY h:mm A'
	      },
	      calendar: {
	        sameDay: '[Today at] LT',
	        nextDay: '[Tomorrow at] LT',
	        nextWeek: 'dddd [at] LT',
	        lastDay: '[Yesterday at] LT',
	        lastWeek: '[Last] dddd [at] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'in %s',
	        past: '%s ago',
	        s: 'a few seconds',
	        m: 'a minute',
	        mm: '%d minutes',
	        h: 'an hour',
	        hh: '%d hours',
	        d: 'a day',
	        dd: '%d days',
	        M: 'a month',
	        MM: '%d months',
	        y: 'a year',
	        yy: '%d years'
	      },
	      ordinalParse: /\d{1,2}(st|nd|rd|th)/,
	      ordinal: function(number) {
	        var b = number % 10,
	            output = (~~(number % 100 / 10) === 1) ? 'th' : (b === 1) ? 'st' : (b === 2) ? 'nd' : (b === 3) ? 'rd' : 'th';
	        return number + output;
	      },
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return en_nz;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var eo = moment.defineLocale('eo', {
	      months: 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'.split('_'),
	      monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec'.split('_'),
	      weekdays: 'Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato'.split('_'),
	      weekdaysShort: 'Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab'.split('_'),
	      weekdaysMin: 'Di_Lu_Ma_Me_Ĵa_Ve_Sa'.split('_'),
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'YYYY-MM-DD',
	        LL: 'D[-an de] MMMM, YYYY',
	        LLL: 'D[-an de] MMMM, YYYY HH:mm',
	        LLLL: 'dddd, [la] D[-an de] MMMM, YYYY HH:mm'
	      },
	      meridiemParse: /[ap]\.t\.m/i,
	      isPM: function(input) {
	        return input.charAt(0).toLowerCase() === 'p';
	      },
	      meridiem: function(hours, minutes, isLower) {
	        if (hours > 11) {
	          return isLower ? 'p.t.m.' : 'P.T.M.';
	        } else {
	          return isLower ? 'a.t.m.' : 'A.T.M.';
	        }
	      },
	      calendar: {
	        sameDay: '[Hodiaŭ je] LT',
	        nextDay: '[Morgaŭ je] LT',
	        nextWeek: 'dddd [je] LT',
	        lastDay: '[Hieraŭ je] LT',
	        lastWeek: '[pasinta] dddd [je] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'je %s',
	        past: 'antaŭ %s',
	        s: 'sekundoj',
	        m: 'minuto',
	        mm: '%d minutoj',
	        h: 'horo',
	        hh: '%d horoj',
	        d: 'tago',
	        dd: '%d tagoj',
	        M: 'monato',
	        MM: '%d monatoj',
	        y: 'jaro',
	        yy: '%d jaroj'
	      },
	      ordinalParse: /\d{1,2}a/,
	      ordinal: '%da',
	      week: {
	        dow: 1,
	        doy: 7
	      }
	    });
	    return eo;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
	        monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
	    var es = moment.defineLocale('es', {
	      months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
	      monthsShort: function(m, format) {
	        if (/-MMM-/.test(format)) {
	          return monthsShort[$traceurRuntime.toProperty(m.month())];
	        } else {
	          return monthsShortDot[$traceurRuntime.toProperty(m.month())];
	        }
	      },
	      monthsParseExact: true,
	      weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
	      weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
	      weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
	      weekdaysParseExact: true,
	      longDateFormat: {
	        LT: 'H:mm',
	        LTS: 'H:mm:ss',
	        L: 'DD/MM/YYYY',
	        LL: 'D [de] MMMM [de] YYYY',
	        LLL: 'D [de] MMMM [de] YYYY H:mm',
	        LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
	      },
	      calendar: {
	        sameDay: function() {
	          return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	        },
	        nextDay: function() {
	          return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	        },
	        nextWeek: function() {
	          return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	        },
	        lastDay: function() {
	          return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	        },
	        lastWeek: function() {
	          return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	        },
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'en %s',
	        past: 'hace %s',
	        s: 'unos segundos',
	        m: 'un minuto',
	        mm: '%d minutos',
	        h: 'una hora',
	        hh: '%d horas',
	        d: 'un día',
	        dd: '%d días',
	        M: 'un mes',
	        MM: '%d meses',
	        y: 'un año',
	        yy: '%d años'
	      },
	      ordinalParse: /\d{1,2}º/,
	      ordinal: '%dº',
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return es;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
	        monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
	    var es_do = moment.defineLocale('es-do', {
	      months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
	      monthsShort: function(m, format) {
	        if (/-MMM-/.test(format)) {
	          return monthsShort[$traceurRuntime.toProperty(m.month())];
	        } else {
	          return monthsShortDot[$traceurRuntime.toProperty(m.month())];
	        }
	      },
	      monthsParseExact: true,
	      weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
	      weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
	      weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
	      weekdaysParseExact: true,
	      longDateFormat: {
	        LT: 'h:mm A',
	        LTS: 'h:mm:ss A',
	        L: 'DD/MM/YYYY',
	        LL: 'D [de] MMMM [de] YYYY',
	        LLL: 'D [de] MMMM [de] YYYY h:mm A',
	        LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A'
	      },
	      calendar: {
	        sameDay: function() {
	          return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	        },
	        nextDay: function() {
	          return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	        },
	        nextWeek: function() {
	          return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	        },
	        lastDay: function() {
	          return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	        },
	        lastWeek: function() {
	          return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	        },
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'en %s',
	        past: 'hace %s',
	        s: 'unos segundos',
	        m: 'un minuto',
	        mm: '%d minutos',
	        h: 'una hora',
	        hh: '%d horas',
	        d: 'un día',
	        dd: '%d días',
	        M: 'un mes',
	        MM: '%d meses',
	        y: 'un año',
	        yy: '%d años'
	      },
	      ordinalParse: /\d{1,2}º/,
	      ordinal: '%dº',
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return es_do;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	      var format = {
	        's': ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
	        'm': ['ühe minuti', 'üks minut'],
	        'mm': [number + ' minuti', number + ' minutit'],
	        'h': ['ühe tunni', 'tund aega', 'üks tund'],
	        'hh': [number + ' tunni', number + ' tundi'],
	        'd': ['ühe päeva', 'üks päev'],
	        'M': ['kuu aja', 'kuu aega', 'üks kuu'],
	        'MM': [number + ' kuu', number + ' kuud'],
	        'y': ['ühe aasta', 'aasta', 'üks aasta'],
	        'yy': [number + ' aasta', number + ' aastat']
	      };
	      if (withoutSuffix) {
	        return format[$traceurRuntime.toProperty(key)][2] ? format[$traceurRuntime.toProperty(key)][2] : format[$traceurRuntime.toProperty(key)][1];
	      }
	      return isFuture ? format[$traceurRuntime.toProperty(key)][0] : format[$traceurRuntime.toProperty(key)][1];
	    }
	    var et = moment.defineLocale('et', {
	      months: 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
	      monthsShort: 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
	      weekdays: 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
	      weekdaysShort: 'P_E_T_K_N_R_L'.split('_'),
	      weekdaysMin: 'P_E_T_K_N_R_L'.split('_'),
	      longDateFormat: {
	        LT: 'H:mm',
	        LTS: 'H:mm:ss',
	        L: 'DD.MM.YYYY',
	        LL: 'D. MMMM YYYY',
	        LLL: 'D. MMMM YYYY H:mm',
	        LLLL: 'dddd, D. MMMM YYYY H:mm'
	      },
	      calendar: {
	        sameDay: '[Täna,] LT',
	        nextDay: '[Homme,] LT',
	        nextWeek: '[Järgmine] dddd LT',
	        lastDay: '[Eile,] LT',
	        lastWeek: '[Eelmine] dddd LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: '%s pärast',
	        past: '%s tagasi',
	        s: processRelativeTime,
	        m: processRelativeTime,
	        mm: processRelativeTime,
	        h: processRelativeTime,
	        hh: processRelativeTime,
	        d: processRelativeTime,
	        dd: '%d päeva',
	        M: processRelativeTime,
	        MM: processRelativeTime,
	        y: processRelativeTime,
	        yy: processRelativeTime
	      },
	      ordinalParse: /\d{1,2}\./,
	      ordinal: '%d.',
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return et;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var eu = moment.defineLocale('eu', {
	      months: 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
	      monthsShort: 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
	      monthsParseExact: true,
	      weekdays: 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
	      weekdaysShort: 'ig._al._ar._az._og._ol._lr.'.split('_'),
	      weekdaysMin: 'ig_al_ar_az_og_ol_lr'.split('_'),
	      weekdaysParseExact: true,
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'YYYY-MM-DD',
	        LL: 'YYYY[ko] MMMM[ren] D[a]',
	        LLL: 'YYYY[ko] MMMM[ren] D[a] HH:mm',
	        LLLL: 'dddd, YYYY[ko] MMMM[ren] D[a] HH:mm',
	        l: 'YYYY-M-D',
	        ll: 'YYYY[ko] MMM D[a]',
	        lll: 'YYYY[ko] MMM D[a] HH:mm',
	        llll: 'ddd, YYYY[ko] MMM D[a] HH:mm'
	      },
	      calendar: {
	        sameDay: '[gaur] LT[etan]',
	        nextDay: '[bihar] LT[etan]',
	        nextWeek: 'dddd LT[etan]',
	        lastDay: '[atzo] LT[etan]',
	        lastWeek: '[aurreko] dddd LT[etan]',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: '%s barru',
	        past: 'duela %s',
	        s: 'segundo batzuk',
	        m: 'minutu bat',
	        mm: '%d minutu',
	        h: 'ordu bat',
	        hh: '%d ordu',
	        d: 'egun bat',
	        dd: '%d egun',
	        M: 'hilabete bat',
	        MM: '%d hilabete',
	        y: 'urte bat',
	        yy: '%d urte'
	      },
	      ordinalParse: /\d{1,2}\./,
	      ordinal: '%d.',
	      week: {
	        dow: 1,
	        doy: 7
	      }
	    });
	    return eu;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var symbolMap = {
	      '1': '۱',
	      '2': '۲',
	      '3': '۳',
	      '4': '۴',
	      '5': '۵',
	      '6': '۶',
	      '7': '۷',
	      '8': '۸',
	      '9': '۹',
	      '0': '۰'
	    },
	        numberMap = {
	          '۱': '1',
	          '۲': '2',
	          '۳': '3',
	          '۴': '4',
	          '۵': '5',
	          '۶': '6',
	          '۷': '7',
	          '۸': '8',
	          '۹': '9',
	          '۰': '0'
	        };
	    var fa = moment.defineLocale('fa', {
	      months: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
	      monthsShort: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
	      weekdays: 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
	      weekdaysShort: 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
	      weekdaysMin: 'ی_د_س_چ_پ_ج_ش'.split('_'),
	      weekdaysParseExact: true,
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY HH:mm',
	        LLLL: 'dddd, D MMMM YYYY HH:mm'
	      },
	      meridiemParse: /قبل از ظهر|بعد از ظهر/,
	      isPM: function(input) {
	        return /بعد از ظهر/.test(input);
	      },
	      meridiem: function(hour, minute, isLower) {
	        if (hour < 12) {
	          return 'قبل از ظهر';
	        } else {
	          return 'بعد از ظهر';
	        }
	      },
	      calendar: {
	        sameDay: '[امروز ساعت] LT',
	        nextDay: '[فردا ساعت] LT',
	        nextWeek: 'dddd [ساعت] LT',
	        lastDay: '[دیروز ساعت] LT',
	        lastWeek: 'dddd [پیش] [ساعت] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'در %s',
	        past: '%s پیش',
	        s: 'چندین ثانیه',
	        m: 'یک دقیقه',
	        mm: '%d دقیقه',
	        h: 'یک ساعت',
	        hh: '%d ساعت',
	        d: 'یک روز',
	        dd: '%d روز',
	        M: 'یک ماه',
	        MM: '%d ماه',
	        y: 'یک سال',
	        yy: '%d سال'
	      },
	      preparse: function(string) {
	        return string.replace(/[۰-۹]/g, function(match) {
	          return numberMap[$traceurRuntime.toProperty(match)];
	        }).replace(/،/g, ',');
	      },
	      postformat: function(string) {
	        return string.replace(/\d/g, function(match) {
	          return symbolMap[$traceurRuntime.toProperty(match)];
	        }).replace(/,/g, '،');
	      },
	      ordinalParse: /\d{1,2}م/,
	      ordinal: '%dم',
	      week: {
	        dow: 6,
	        doy: 12
	      }
	    });
	    return fa;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' '),
	        numbersFuture = ['nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden', numbersPast[7], numbersPast[8], numbersPast[9]];
	    function translate(number, withoutSuffix, key, isFuture) {
	      var result = '';
	      switch (key) {
	        case 's':
	          return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';
	        case 'm':
	          return isFuture ? 'minuutin' : 'minuutti';
	        case 'mm':
	          result = isFuture ? 'minuutin' : 'minuuttia';
	          break;
	        case 'h':
	          return isFuture ? 'tunnin' : 'tunti';
	        case 'hh':
	          result = isFuture ? 'tunnin' : 'tuntia';
	          break;
	        case 'd':
	          return isFuture ? 'päivän' : 'päivä';
	        case 'dd':
	          result = isFuture ? 'päivän' : 'päivää';
	          break;
	        case 'M':
	          return isFuture ? 'kuukauden' : 'kuukausi';
	        case 'MM':
	          result = isFuture ? 'kuukauden' : 'kuukautta';
	          break;
	        case 'y':
	          return isFuture ? 'vuoden' : 'vuosi';
	        case 'yy':
	          result = isFuture ? 'vuoden' : 'vuotta';
	          break;
	      }
	      result = verbalNumber(number, isFuture) + ' ' + result;
	      return result;
	    }
	    function verbalNumber(number, isFuture) {
	      return number < 10 ? (isFuture ? numbersFuture[$traceurRuntime.toProperty(number)] : numbersPast[$traceurRuntime.toProperty(number)]) : number;
	    }
	    var fi = moment.defineLocale('fi', {
	      months: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
	      monthsShort: 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
	      weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
	      weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
	      weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
	      longDateFormat: {
	        LT: 'HH.mm',
	        LTS: 'HH.mm.ss',
	        L: 'DD.MM.YYYY',
	        LL: 'Do MMMM[ta] YYYY',
	        LLL: 'Do MMMM[ta] YYYY, [klo] HH.mm',
	        LLLL: 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
	        l: 'D.M.YYYY',
	        ll: 'Do MMM YYYY',
	        lll: 'Do MMM YYYY, [klo] HH.mm',
	        llll: 'ddd, Do MMM YYYY, [klo] HH.mm'
	      },
	      calendar: {
	        sameDay: '[tänään] [klo] LT',
	        nextDay: '[huomenna] [klo] LT',
	        nextWeek: 'dddd [klo] LT',
	        lastDay: '[eilen] [klo] LT',
	        lastWeek: '[viime] dddd[na] [klo] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: '%s päästä',
	        past: '%s sitten',
	        s: translate,
	        m: translate,
	        mm: translate,
	        h: translate,
	        hh: translate,
	        d: translate,
	        dd: translate,
	        M: translate,
	        MM: translate,
	        y: translate,
	        yy: translate
	      },
	      ordinalParse: /\d{1,2}\./,
	      ordinal: '%d.',
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return fi;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var fo = moment.defineLocale('fo', {
	      months: 'januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
	      monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
	      weekdays: 'sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur'.split('_'),
	      weekdaysShort: 'sun_mán_týs_mik_hós_frí_ley'.split('_'),
	      weekdaysMin: 'su_má_tý_mi_hó_fr_le'.split('_'),
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY HH:mm',
	        LLLL: 'dddd D. MMMM, YYYY HH:mm'
	      },
	      calendar: {
	        sameDay: '[Í dag kl.] LT',
	        nextDay: '[Í morgin kl.] LT',
	        nextWeek: 'dddd [kl.] LT',
	        lastDay: '[Í gjár kl.] LT',
	        lastWeek: '[síðstu] dddd [kl] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'um %s',
	        past: '%s síðani',
	        s: 'fá sekund',
	        m: 'ein minutt',
	        mm: '%d minuttir',
	        h: 'ein tími',
	        hh: '%d tímar',
	        d: 'ein dagur',
	        dd: '%d dagar',
	        M: 'ein mánaði',
	        MM: '%d mánaðir',
	        y: 'eitt ár',
	        yy: '%d ár'
	      },
	      ordinalParse: /\d{1,2}\./,
	      ordinal: '%d.',
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return fo;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var fr = moment.defineLocale('fr', {
	      months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
	      monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
	      monthsParseExact: true,
	      weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
	      weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
	      weekdaysMin: 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
	      weekdaysParseExact: true,
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY HH:mm',
	        LLLL: 'dddd D MMMM YYYY HH:mm'
	      },
	      calendar: {
	        sameDay: '[Aujourd\'hui à] LT',
	        nextDay: '[Demain à] LT',
	        nextWeek: 'dddd [à] LT',
	        lastDay: '[Hier à] LT',
	        lastWeek: 'dddd [dernier à] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'dans %s',
	        past: 'il y a %s',
	        s: 'quelques secondes',
	        m: 'une minute',
	        mm: '%d minutes',
	        h: 'une heure',
	        hh: '%d heures',
	        d: 'un jour',
	        dd: '%d jours',
	        M: 'un mois',
	        MM: '%d mois',
	        y: 'un an',
	        yy: '%d ans'
	      },
	      ordinalParse: /\d{1,2}(er|)/,
	      ordinal: function(number) {
	        return number + (number === 1 ? 'er' : '');
	      },
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return fr;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var fr_ca = moment.defineLocale('fr-ca', {
	      months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
	      monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
	      monthsParseExact: true,
	      weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
	      weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
	      weekdaysMin: 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
	      weekdaysParseExact: true,
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'YYYY-MM-DD',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY HH:mm',
	        LLLL: 'dddd D MMMM YYYY HH:mm'
	      },
	      calendar: {
	        sameDay: '[Aujourd\'hui à] LT',
	        nextDay: '[Demain à] LT',
	        nextWeek: 'dddd [à] LT',
	        lastDay: '[Hier à] LT',
	        lastWeek: 'dddd [dernier à] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'dans %s',
	        past: 'il y a %s',
	        s: 'quelques secondes',
	        m: 'une minute',
	        mm: '%d minutes',
	        h: 'une heure',
	        hh: '%d heures',
	        d: 'un jour',
	        dd: '%d jours',
	        M: 'un mois',
	        MM: '%d mois',
	        y: 'un an',
	        yy: '%d ans'
	      },
	      ordinalParse: /\d{1,2}(er|e)/,
	      ordinal: function(number) {
	        return number + (number === 1 ? 'er' : 'e');
	      }
	    });
	    return fr_ca;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var fr_ch = moment.defineLocale('fr-ch', {
	      months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
	      monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
	      monthsParseExact: true,
	      weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
	      weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
	      weekdaysMin: 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
	      weekdaysParseExact: true,
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD.MM.YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY HH:mm',
	        LLLL: 'dddd D MMMM YYYY HH:mm'
	      },
	      calendar: {
	        sameDay: '[Aujourd\'hui à] LT',
	        nextDay: '[Demain à] LT',
	        nextWeek: 'dddd [à] LT',
	        lastDay: '[Hier à] LT',
	        lastWeek: 'dddd [dernier à] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'dans %s',
	        past: 'il y a %s',
	        s: 'quelques secondes',
	        m: 'une minute',
	        mm: '%d minutes',
	        h: 'une heure',
	        hh: '%d heures',
	        d: 'un jour',
	        dd: '%d jours',
	        M: 'un mois',
	        MM: '%d mois',
	        y: 'un an',
	        yy: '%d ans'
	      },
	      ordinalParse: /\d{1,2}(er|e)/,
	      ordinal: function(number) {
	        return number + (number === 1 ? 'er' : 'e');
	      },
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return fr_ch;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var monthsShortWithDots = 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split('_'),
	        monthsShortWithoutDots = 'jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_');
	    var fy = moment.defineLocale('fy', {
	      months: 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split('_'),
	      monthsShort: function(m, format) {
	        if (/-MMM-/.test(format)) {
	          return monthsShortWithoutDots[$traceurRuntime.toProperty(m.month())];
	        } else {
	          return monthsShortWithDots[$traceurRuntime.toProperty(m.month())];
	        }
	      },
	      monthsParseExact: true,
	      weekdays: 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split('_'),
	      weekdaysShort: 'si._mo._ti._wo._to._fr._so.'.split('_'),
	      weekdaysMin: 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
	      weekdaysParseExact: true,
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD-MM-YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY HH:mm',
	        LLLL: 'dddd D MMMM YYYY HH:mm'
	      },
	      calendar: {
	        sameDay: '[hjoed om] LT',
	        nextDay: '[moarn om] LT',
	        nextWeek: 'dddd [om] LT',
	        lastDay: '[juster om] LT',
	        lastWeek: '[ôfrûne] dddd [om] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'oer %s',
	        past: '%s lyn',
	        s: 'in pear sekonden',
	        m: 'ien minút',
	        mm: '%d minuten',
	        h: 'ien oere',
	        hh: '%d oeren',
	        d: 'ien dei',
	        dd: '%d dagen',
	        M: 'ien moanne',
	        MM: '%d moannen',
	        y: 'ien jier',
	        yy: '%d jierren'
	      },
	      ordinalParse: /\d{1,2}(ste|de)/,
	      ordinal: function(number) {
	        return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
	      },
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return fy;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var months = ['Am Faoilleach', 'An Gearran', 'Am Màrt', 'An Giblean', 'An Cèitean', 'An t-Ògmhios', 'An t-Iuchar', 'An Lùnastal', 'An t-Sultain', 'An Dàmhair', 'An t-Samhain', 'An Dùbhlachd'];
	    var monthsShort = ['Faoi', 'Gear', 'Màrt', 'Gibl', 'Cèit', 'Ògmh', 'Iuch', 'Lùn', 'Sult', 'Dàmh', 'Samh', 'Dùbh'];
	    var weekdays = ['Didòmhnaich', 'Diluain', 'Dimàirt', 'Diciadain', 'Diardaoin', 'Dihaoine', 'Disathairne'];
	    var weekdaysShort = ['Did', 'Dil', 'Dim', 'Dic', 'Dia', 'Dih', 'Dis'];
	    var weekdaysMin = ['Dò', 'Lu', 'Mà', 'Ci', 'Ar', 'Ha', 'Sa'];
	    var gd = moment.defineLocale('gd', {
	      months: months,
	      monthsShort: monthsShort,
	      monthsParseExact: true,
	      weekdays: weekdays,
	      weekdaysShort: weekdaysShort,
	      weekdaysMin: weekdaysMin,
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY HH:mm',
	        LLLL: 'dddd, D MMMM YYYY HH:mm'
	      },
	      calendar: {
	        sameDay: '[An-diugh aig] LT',
	        nextDay: '[A-màireach aig] LT',
	        nextWeek: 'dddd [aig] LT',
	        lastDay: '[An-dè aig] LT',
	        lastWeek: 'dddd [seo chaidh] [aig] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'ann an %s',
	        past: 'bho chionn %s',
	        s: 'beagan diogan',
	        m: 'mionaid',
	        mm: '%d mionaidean',
	        h: 'uair',
	        hh: '%d uairean',
	        d: 'latha',
	        dd: '%d latha',
	        M: 'mìos',
	        MM: '%d mìosan',
	        y: 'bliadhna',
	        yy: '%d bliadhna'
	      },
	      ordinalParse: /\d{1,2}(d|na|mh)/,
	      ordinal: function(number) {
	        var output = number === 1 ? 'd' : number % 10 === 2 ? 'na' : 'mh';
	        return number + output;
	      },
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return gd;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var gl = moment.defineLocale('gl', {
	      months: 'xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro'.split('_'),
	      monthsShort: 'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split('_'),
	      monthsParseExact: true,
	      weekdays: 'domingo_luns_martes_mércores_xoves_venres_sábado'.split('_'),
	      weekdaysShort: 'dom._lun._mar._mér._xov._ven._sáb.'.split('_'),
	      weekdaysMin: 'do_lu_ma_mé_xo_ve_sá'.split('_'),
	      weekdaysParseExact: true,
	      longDateFormat: {
	        LT: 'H:mm',
	        LTS: 'H:mm:ss',
	        L: 'DD/MM/YYYY',
	        LL: 'D [de] MMMM [de] YYYY',
	        LLL: 'D [de] MMMM [de] YYYY H:mm',
	        LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
	      },
	      calendar: {
	        sameDay: function() {
	          return '[hoxe ' + ((this.hours() !== 1) ? 'ás' : 'á') + '] LT';
	        },
	        nextDay: function() {
	          return '[mañá ' + ((this.hours() !== 1) ? 'ás' : 'á') + '] LT';
	        },
	        nextWeek: function() {
	          return 'dddd [' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
	        },
	        lastDay: function() {
	          return '[onte ' + ((this.hours() !== 1) ? 'á' : 'a') + '] LT';
	        },
	        lastWeek: function() {
	          return '[o] dddd [pasado ' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
	        },
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: function(str) {
	          if (str.indexOf('un') === 0) {
	            return 'n' + str;
	          }
	          return 'en ' + str;
	        },
	        past: 'hai %s',
	        s: 'uns segundos',
	        m: 'un minuto',
	        mm: '%d minutos',
	        h: 'unha hora',
	        hh: '%d horas',
	        d: 'un día',
	        dd: '%d días',
	        M: 'un mes',
	        MM: '%d meses',
	        y: 'un ano',
	        yy: '%d anos'
	      },
	      ordinalParse: /\d{1,2}º/,
	      ordinal: '%dº',
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return gl;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var he = moment.defineLocale('he', {
	      months: 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
	      monthsShort: 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
	      weekdays: 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
	      weekdaysShort: 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
	      weekdaysMin: 'א_ב_ג_ד_ה_ו_ש'.split('_'),
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD/MM/YYYY',
	        LL: 'D [ב]MMMM YYYY',
	        LLL: 'D [ב]MMMM YYYY HH:mm',
	        LLLL: 'dddd, D [ב]MMMM YYYY HH:mm',
	        l: 'D/M/YYYY',
	        ll: 'D MMM YYYY',
	        lll: 'D MMM YYYY HH:mm',
	        llll: 'ddd, D MMM YYYY HH:mm'
	      },
	      calendar: {
	        sameDay: '[היום ב־]LT',
	        nextDay: '[מחר ב־]LT',
	        nextWeek: 'dddd [בשעה] LT',
	        lastDay: '[אתמול ב־]LT',
	        lastWeek: '[ביום] dddd [האחרון בשעה] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'בעוד %s',
	        past: 'לפני %s',
	        s: 'מספר שניות',
	        m: 'דקה',
	        mm: '%d דקות',
	        h: 'שעה',
	        hh: function(number) {
	          if (number === 2) {
	            return 'שעתיים';
	          }
	          return number + ' שעות';
	        },
	        d: 'יום',
	        dd: function(number) {
	          if (number === 2) {
	            return 'יומיים';
	          }
	          return number + ' ימים';
	        },
	        M: 'חודש',
	        MM: function(number) {
	          if (number === 2) {
	            return 'חודשיים';
	          }
	          return number + ' חודשים';
	        },
	        y: 'שנה',
	        yy: function(number) {
	          if (number === 2) {
	            return 'שנתיים';
	          } else if (number % 10 === 0 && number !== 10) {
	            return number + ' שנה';
	          }
	          return number + ' שנים';
	        }
	      },
	      meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
	      isPM: function(input) {
	        return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input);
	      },
	      meridiem: function(hour, minute, isLower) {
	        if (hour < 5) {
	          return 'לפנות בוקר';
	        } else if (hour < 10) {
	          return 'בבוקר';
	        } else if (hour < 12) {
	          return isLower ? 'לפנה"צ' : 'לפני הצהריים';
	        } else if (hour < 18) {
	          return isLower ? 'אחה"צ' : 'אחרי הצהריים';
	        } else {
	          return 'בערב';
	        }
	      }
	    });
	    return he;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var symbolMap = {
	      '1': '१',
	      '2': '२',
	      '3': '३',
	      '4': '४',
	      '5': '५',
	      '6': '६',
	      '7': '७',
	      '8': '८',
	      '9': '९',
	      '0': '०'
	    },
	        numberMap = {
	          '१': '1',
	          '२': '2',
	          '३': '3',
	          '४': '4',
	          '५': '5',
	          '६': '6',
	          '७': '7',
	          '८': '8',
	          '९': '9',
	          '०': '0'
	        };
	    var hi = moment.defineLocale('hi', {
	      months: 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
	      monthsShort: 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
	      monthsParseExact: true,
	      weekdays: 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
	      weekdaysShort: 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
	      weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
	      longDateFormat: {
	        LT: 'A h:mm बजे',
	        LTS: 'A h:mm:ss बजे',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY, A h:mm बजे',
	        LLLL: 'dddd, D MMMM YYYY, A h:mm बजे'
	      },
	      calendar: {
	        sameDay: '[आज] LT',
	        nextDay: '[कल] LT',
	        nextWeek: 'dddd, LT',
	        lastDay: '[कल] LT',
	        lastWeek: '[पिछले] dddd, LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: '%s में',
	        past: '%s पहले',
	        s: 'कुछ ही क्षण',
	        m: 'एक मिनट',
	        mm: '%d मिनट',
	        h: 'एक घंटा',
	        hh: '%d घंटे',
	        d: 'एक दिन',
	        dd: '%d दिन',
	        M: 'एक महीने',
	        MM: '%d महीने',
	        y: 'एक वर्ष',
	        yy: '%d वर्ष'
	      },
	      preparse: function(string) {
	        return string.replace(/[१२३४५६७८९०]/g, function(match) {
	          return numberMap[$traceurRuntime.toProperty(match)];
	        });
	      },
	      postformat: function(string) {
	        return string.replace(/\d/g, function(match) {
	          return symbolMap[$traceurRuntime.toProperty(match)];
	        });
	      },
	      meridiemParse: /रात|सुबह|दोपहर|शाम/,
	      meridiemHour: function(hour, meridiem) {
	        if (hour === 12) {
	          hour = 0;
	        }
	        if (meridiem === 'रात') {
	          return hour < 4 ? hour : hour + 12;
	        } else if (meridiem === 'सुबह') {
	          return hour;
	        } else if (meridiem === 'दोपहर') {
	          return hour >= 10 ? hour : hour + 12;
	        } else if (meridiem === 'शाम') {
	          return hour + 12;
	        }
	      },
	      meridiem: function(hour, minute, isLower) {
	        if (hour < 4) {
	          return 'रात';
	        } else if (hour < 10) {
	          return 'सुबह';
	        } else if (hour < 17) {
	          return 'दोपहर';
	        } else if (hour < 20) {
	          return 'शाम';
	        } else {
	          return 'रात';
	        }
	      },
	      week: {
	        dow: 0,
	        doy: 6
	      }
	    });
	    return hi;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    function translate(number, withoutSuffix, key) {
	      var result = number + ' ';
	      switch (key) {
	        case 'm':
	          return withoutSuffix ? 'jedna minuta' : 'jedne minute';
	        case 'mm':
	          if (number === 1) {
	            result += 'minuta';
	          } else if (number === 2 || number === 3 || number === 4) {
	            result += 'minute';
	          } else {
	            result += 'minuta';
	          }
	          return result;
	        case 'h':
	          return withoutSuffix ? 'jedan sat' : 'jednog sata';
	        case 'hh':
	          if (number === 1) {
	            result += 'sat';
	          } else if (number === 2 || number === 3 || number === 4) {
	            result += 'sata';
	          } else {
	            result += 'sati';
	          }
	          return result;
	        case 'dd':
	          if (number === 1) {
	            result += 'dan';
	          } else {
	            result += 'dana';
	          }
	          return result;
	        case 'MM':
	          if (number === 1) {
	            result += 'mjesec';
	          } else if (number === 2 || number === 3 || number === 4) {
	            result += 'mjeseca';
	          } else {
	            result += 'mjeseci';
	          }
	          return result;
	        case 'yy':
	          if (number === 1) {
	            result += 'godina';
	          } else if (number === 2 || number === 3 || number === 4) {
	            result += 'godine';
	          } else {
	            result += 'godina';
	          }
	          return result;
	      }
	    }
	    var hr = moment.defineLocale('hr', {
	      months: {
	        format: 'siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca'.split('_'),
	        standalone: 'siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_')
	      },
	      monthsShort: 'sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
	      monthsParseExact: true,
	      weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
	      weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
	      weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
	      weekdaysParseExact: true,
	      longDateFormat: {
	        LT: 'H:mm',
	        LTS: 'H:mm:ss',
	        L: 'DD.MM.YYYY',
	        LL: 'D. MMMM YYYY',
	        LLL: 'D. MMMM YYYY H:mm',
	        LLLL: 'dddd, D. MMMM YYYY H:mm'
	      },
	      calendar: {
	        sameDay: '[danas u] LT',
	        nextDay: '[sutra u] LT',
	        nextWeek: function() {
	          switch (this.day()) {
	            case 0:
	              return '[u] [nedjelju] [u] LT';
	            case 3:
	              return '[u] [srijedu] [u] LT';
	            case 6:
	              return '[u] [subotu] [u] LT';
	            case 1:
	            case 2:
	            case 4:
	            case 5:
	              return '[u] dddd [u] LT';
	          }
	        },
	        lastDay: '[jučer u] LT',
	        lastWeek: function() {
	          switch (this.day()) {
	            case 0:
	            case 3:
	              return '[prošlu] dddd [u] LT';
	            case 6:
	              return '[prošle] [subote] [u] LT';
	            case 1:
	            case 2:
	            case 4:
	            case 5:
	              return '[prošli] dddd [u] LT';
	          }
	        },
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'za %s',
	        past: 'prije %s',
	        s: 'par sekundi',
	        m: translate,
	        mm: translate,
	        h: translate,
	        hh: translate,
	        d: 'dan',
	        dd: translate,
	        M: 'mjesec',
	        MM: translate,
	        y: 'godinu',
	        yy: translate
	      },
	      ordinalParse: /\d{1,2}\./,
	      ordinal: '%d.',
	      week: {
	        dow: 1,
	        doy: 7
	      }
	    });
	    return hr;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
	    function translate(number, withoutSuffix, key, isFuture) {
	      var num = number,
	          suffix;
	      switch (key) {
	        case 's':
	          return (isFuture || withoutSuffix) ? 'néhány másodperc' : 'néhány másodperce';
	        case 'm':
	          return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
	        case 'mm':
	          return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
	        case 'h':
	          return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');
	        case 'hh':
	          return num + (isFuture || withoutSuffix ? ' óra' : ' órája');
	        case 'd':
	          return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
	        case 'dd':
	          return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
	        case 'M':
	          return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
	        case 'MM':
	          return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
	        case 'y':
	          return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');
	        case 'yy':
	          return num + (isFuture || withoutSuffix ? ' év' : ' éve');
	      }
	      return '';
	    }
	    function week(isFuture) {
	      return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[$traceurRuntime.toProperty(this.day())] + '] LT[-kor]';
	    }
	    var hu = moment.defineLocale('hu', {
	      months: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
	      monthsShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
	      weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
	      weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
	      weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
	      longDateFormat: {
	        LT: 'H:mm',
	        LTS: 'H:mm:ss',
	        L: 'YYYY.MM.DD.',
	        LL: 'YYYY. MMMM D.',
	        LLL: 'YYYY. MMMM D. H:mm',
	        LLLL: 'YYYY. MMMM D., dddd H:mm'
	      },
	      meridiemParse: /de|du/i,
	      isPM: function(input) {
	        return input.charAt(1).toLowerCase() === 'u';
	      },
	      meridiem: function(hours, minutes, isLower) {
	        if (hours < 12) {
	          return isLower === true ? 'de' : 'DE';
	        } else {
	          return isLower === true ? 'du' : 'DU';
	        }
	      },
	      calendar: {
	        sameDay: '[ma] LT[-kor]',
	        nextDay: '[holnap] LT[-kor]',
	        nextWeek: function() {
	          return week.call(this, true);
	        },
	        lastDay: '[tegnap] LT[-kor]',
	        lastWeek: function() {
	          return week.call(this, false);
	        },
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: '%s múlva',
	        past: '%s',
	        s: translate,
	        m: translate,
	        mm: translate,
	        h: translate,
	        hh: translate,
	        d: translate,
	        dd: translate,
	        M: translate,
	        MM: translate,
	        y: translate,
	        yy: translate
	      },
	      ordinalParse: /\d{1,2}\./,
	      ordinal: '%d.',
	      week: {
	        dow: 1,
	        doy: 7
	      }
	    });
	    return hu;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var hy_am = moment.defineLocale('hy-am', {
	      months: {
	        format: 'հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի'.split('_'),
	        standalone: 'հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր'.split('_')
	      },
	      monthsShort: 'հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ'.split('_'),
	      weekdays: 'կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ'.split('_'),
	      weekdaysShort: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
	      weekdaysMin: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD.MM.YYYY',
	        LL: 'D MMMM YYYY թ.',
	        LLL: 'D MMMM YYYY թ., HH:mm',
	        LLLL: 'dddd, D MMMM YYYY թ., HH:mm'
	      },
	      calendar: {
	        sameDay: '[այսօր] LT',
	        nextDay: '[վաղը] LT',
	        lastDay: '[երեկ] LT',
	        nextWeek: function() {
	          return 'dddd [օրը ժամը] LT';
	        },
	        lastWeek: function() {
	          return '[անցած] dddd [օրը ժամը] LT';
	        },
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: '%s հետո',
	        past: '%s առաջ',
	        s: 'մի քանի վայրկյան',
	        m: 'րոպե',
	        mm: '%d րոպե',
	        h: 'ժամ',
	        hh: '%d ժամ',
	        d: 'օր',
	        dd: '%d օր',
	        M: 'ամիս',
	        MM: '%d ամիս',
	        y: 'տարի',
	        yy: '%d տարի'
	      },
	      meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
	      isPM: function(input) {
	        return /^(ցերեկվա|երեկոյան)$/.test(input);
	      },
	      meridiem: function(hour) {
	        if (hour < 4) {
	          return 'գիշերվա';
	        } else if (hour < 12) {
	          return 'առավոտվա';
	        } else if (hour < 17) {
	          return 'ցերեկվա';
	        } else {
	          return 'երեկոյան';
	        }
	      },
	      ordinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
	      ordinal: function(number, period) {
	        switch (period) {
	          case 'DDD':
	          case 'w':
	          case 'W':
	          case 'DDDo':
	            if (number === 1) {
	              return number + '-ին';
	            }
	            return number + '-րդ';
	          default:
	            return number;
	        }
	      },
	      week: {
	        dow: 1,
	        doy: 7
	      }
	    });
	    return hy_am;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var id = moment.defineLocale('id', {
	      months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
	      monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des'.split('_'),
	      weekdays: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
	      weekdaysShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
	      weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
	      longDateFormat: {
	        LT: 'HH.mm',
	        LTS: 'HH.mm.ss',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY [pukul] HH.mm',
	        LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
	      },
	      meridiemParse: /pagi|siang|sore|malam/,
	      meridiemHour: function(hour, meridiem) {
	        if (hour === 12) {
	          hour = 0;
	        }
	        if (meridiem === 'pagi') {
	          return hour;
	        } else if (meridiem === 'siang') {
	          return hour >= 11 ? hour : hour + 12;
	        } else if (meridiem === 'sore' || meridiem === 'malam') {
	          return hour + 12;
	        }
	      },
	      meridiem: function(hours, minutes, isLower) {
	        if (hours < 11) {
	          return 'pagi';
	        } else if (hours < 15) {
	          return 'siang';
	        } else if (hours < 19) {
	          return 'sore';
	        } else {
	          return 'malam';
	        }
	      },
	      calendar: {
	        sameDay: '[Hari ini pukul] LT',
	        nextDay: '[Besok pukul] LT',
	        nextWeek: 'dddd [pukul] LT',
	        lastDay: '[Kemarin pukul] LT',
	        lastWeek: 'dddd [lalu pukul] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'dalam %s',
	        past: '%s yang lalu',
	        s: 'beberapa detik',
	        m: 'semenit',
	        mm: '%d menit',
	        h: 'sejam',
	        hh: '%d jam',
	        d: 'sehari',
	        dd: '%d hari',
	        M: 'sebulan',
	        MM: '%d bulan',
	        y: 'setahun',
	        yy: '%d tahun'
	      },
	      week: {
	        dow: 1,
	        doy: 7
	      }
	    });
	    return id;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    function plural(n) {
	      if (n % 100 === 11) {
	        return true;
	      } else if (n % 10 === 1) {
	        return false;
	      }
	      return true;
	    }
	    function translate(number, withoutSuffix, key, isFuture) {
	      var result = number + ' ';
	      switch (key) {
	        case 's':
	          return withoutSuffix || isFuture ? 'nokkrar sekúndur' : 'nokkrum sekúndum';
	        case 'm':
	          return withoutSuffix ? 'mínúta' : 'mínútu';
	        case 'mm':
	          if (plural(number)) {
	            return result + (withoutSuffix || isFuture ? 'mínútur' : 'mínútum');
	          } else if (withoutSuffix) {
	            return result + 'mínúta';
	          }
	          return result + 'mínútu';
	        case 'hh':
	          if (plural(number)) {
	            return result + (withoutSuffix || isFuture ? 'klukkustundir' : 'klukkustundum');
	          }
	          return result + 'klukkustund';
	        case 'd':
	          if (withoutSuffix) {
	            return 'dagur';
	          }
	          return isFuture ? 'dag' : 'degi';
	        case 'dd':
	          if (plural(number)) {
	            if (withoutSuffix) {
	              return result + 'dagar';
	            }
	            return result + (isFuture ? 'daga' : 'dögum');
	          } else if (withoutSuffix) {
	            return result + 'dagur';
	          }
	          return result + (isFuture ? 'dag' : 'degi');
	        case 'M':
	          if (withoutSuffix) {
	            return 'mánuður';
	          }
	          return isFuture ? 'mánuð' : 'mánuði';
	        case 'MM':
	          if (plural(number)) {
	            if (withoutSuffix) {
	              return result + 'mánuðir';
	            }
	            return result + (isFuture ? 'mánuði' : 'mánuðum');
	          } else if (withoutSuffix) {
	            return result + 'mánuður';
	          }
	          return result + (isFuture ? 'mánuð' : 'mánuði');
	        case 'y':
	          return withoutSuffix || isFuture ? 'ár' : 'ári';
	        case 'yy':
	          if (plural(number)) {
	            return result + (withoutSuffix || isFuture ? 'ár' : 'árum');
	          }
	          return result + (withoutSuffix || isFuture ? 'ár' : 'ári');
	      }
	    }
	    var is = moment.defineLocale('is', {
	      months: 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split('_'),
	      monthsShort: 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),
	      weekdays: 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split('_'),
	      weekdaysShort: 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
	      weekdaysMin: 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
	      longDateFormat: {
	        LT: 'H:mm',
	        LTS: 'H:mm:ss',
	        L: 'DD.MM.YYYY',
	        LL: 'D. MMMM YYYY',
	        LLL: 'D. MMMM YYYY [kl.] H:mm',
	        LLLL: 'dddd, D. MMMM YYYY [kl.] H:mm'
	      },
	      calendar: {
	        sameDay: '[í dag kl.] LT',
	        nextDay: '[á morgun kl.] LT',
	        nextWeek: 'dddd [kl.] LT',
	        lastDay: '[í gær kl.] LT',
	        lastWeek: '[síðasta] dddd [kl.] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'eftir %s',
	        past: 'fyrir %s síðan',
	        s: translate,
	        m: translate,
	        mm: translate,
	        h: 'klukkustund',
	        hh: translate,
	        d: translate,
	        dd: translate,
	        M: translate,
	        MM: translate,
	        y: translate,
	        yy: translate
	      },
	      ordinalParse: /\d{1,2}\./,
	      ordinal: '%d.',
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return is;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var it = moment.defineLocale('it', {
	      months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
	      monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
	      weekdays: 'Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato'.split('_'),
	      weekdaysShort: 'Dom_Lun_Mar_Mer_Gio_Ven_Sab'.split('_'),
	      weekdaysMin: 'Do_Lu_Ma_Me_Gi_Ve_Sa'.split('_'),
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY HH:mm',
	        LLLL: 'dddd, D MMMM YYYY HH:mm'
	      },
	      calendar: {
	        sameDay: '[Oggi alle] LT',
	        nextDay: '[Domani alle] LT',
	        nextWeek: 'dddd [alle] LT',
	        lastDay: '[Ieri alle] LT',
	        lastWeek: function() {
	          switch (this.day()) {
	            case 0:
	              return '[la scorsa] dddd [alle] LT';
	            default:
	              return '[lo scorso] dddd [alle] LT';
	          }
	        },
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: function(s) {
	          return ((/^[0-9].+$/).test(s) ? 'tra' : 'in') + ' ' + s;
	        },
	        past: '%s fa',
	        s: 'alcuni secondi',
	        m: 'un minuto',
	        mm: '%d minuti',
	        h: 'un\'ora',
	        hh: '%d ore',
	        d: 'un giorno',
	        dd: '%d giorni',
	        M: 'un mese',
	        MM: '%d mesi',
	        y: 'un anno',
	        yy: '%d anni'
	      },
	      ordinalParse: /\d{1,2}º/,
	      ordinal: '%dº',
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return it;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var ja = moment.defineLocale('ja', {
	      months: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	      monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	      weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
	      weekdaysShort: '日_月_火_水_木_金_土'.split('_'),
	      weekdaysMin: '日_月_火_水_木_金_土'.split('_'),
	      longDateFormat: {
	        LT: 'Ah時m分',
	        LTS: 'Ah時m分s秒',
	        L: 'YYYY/MM/DD',
	        LL: 'YYYY年M月D日',
	        LLL: 'YYYY年M月D日Ah時m分',
	        LLLL: 'YYYY年M月D日Ah時m分 dddd'
	      },
	      meridiemParse: /午前|午後/i,
	      isPM: function(input) {
	        return input === '午後';
	      },
	      meridiem: function(hour, minute, isLower) {
	        if (hour < 12) {
	          return '午前';
	        } else {
	          return '午後';
	        }
	      },
	      calendar: {
	        sameDay: '[今日] LT',
	        nextDay: '[明日] LT',
	        nextWeek: '[来週]dddd LT',
	        lastDay: '[昨日] LT',
	        lastWeek: '[前週]dddd LT',
	        sameElse: 'L'
	      },
	      ordinalParse: /\d{1,2}日/,
	      ordinal: function(number, period) {
	        switch (period) {
	          case 'd':
	          case 'D':
	          case 'DDD':
	            return number + '日';
	          default:
	            return number;
	        }
	      },
	      relativeTime: {
	        future: '%s後',
	        past: '%s前',
	        s: '数秒',
	        m: '1分',
	        mm: '%d分',
	        h: '1時間',
	        hh: '%d時間',
	        d: '1日',
	        dd: '%d日',
	        M: '1ヶ月',
	        MM: '%dヶ月',
	        y: '1年',
	        yy: '%d年'
	      }
	    });
	    return ja;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var jv = moment.defineLocale('jv', {
	      months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember'.split('_'),
	      monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des'.split('_'),
	      weekdays: 'Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu'.split('_'),
	      weekdaysShort: 'Min_Sen_Sel_Reb_Kem_Jem_Sep'.split('_'),
	      weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sp'.split('_'),
	      longDateFormat: {
	        LT: 'HH.mm',
	        LTS: 'HH.mm.ss',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY [pukul] HH.mm',
	        LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
	      },
	      meridiemParse: /enjing|siyang|sonten|ndalu/,
	      meridiemHour: function(hour, meridiem) {
	        if (hour === 12) {
	          hour = 0;
	        }
	        if (meridiem === 'enjing') {
	          return hour;
	        } else if (meridiem === 'siyang') {
	          return hour >= 11 ? hour : hour + 12;
	        } else if (meridiem === 'sonten' || meridiem === 'ndalu') {
	          return hour + 12;
	        }
	      },
	      meridiem: function(hours, minutes, isLower) {
	        if (hours < 11) {
	          return 'enjing';
	        } else if (hours < 15) {
	          return 'siyang';
	        } else if (hours < 19) {
	          return 'sonten';
	        } else {
	          return 'ndalu';
	        }
	      },
	      calendar: {
	        sameDay: '[Dinten puniko pukul] LT',
	        nextDay: '[Mbenjang pukul] LT',
	        nextWeek: 'dddd [pukul] LT',
	        lastDay: '[Kala wingi pukul] LT',
	        lastWeek: 'dddd [kepengker pukul] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'wonten ing %s',
	        past: '%s ingkang kepengker',
	        s: 'sawetawis detik',
	        m: 'setunggal menit',
	        mm: '%d menit',
	        h: 'setunggal jam',
	        hh: '%d jam',
	        d: 'sedinten',
	        dd: '%d dinten',
	        M: 'sewulan',
	        MM: '%d wulan',
	        y: 'setaun',
	        yy: '%d taun'
	      },
	      week: {
	        dow: 1,
	        doy: 7
	      }
	    });
	    return jv;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var ka = moment.defineLocale('ka', {
	      months: {
	        standalone: 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_'),
	        format: 'იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს'.split('_')
	      },
	      monthsShort: 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
	      weekdays: {
	        standalone: 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
	        format: 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split('_'),
	        isFormat: /(წინა|შემდეგ)/
	      },
	      weekdaysShort: 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
	      weekdaysMin: 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
	      longDateFormat: {
	        LT: 'h:mm A',
	        LTS: 'h:mm:ss A',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY h:mm A',
	        LLLL: 'dddd, D MMMM YYYY h:mm A'
	      },
	      calendar: {
	        sameDay: '[დღეს] LT[-ზე]',
	        nextDay: '[ხვალ] LT[-ზე]',
	        lastDay: '[გუშინ] LT[-ზე]',
	        nextWeek: '[შემდეგ] dddd LT[-ზე]',
	        lastWeek: '[წინა] dddd LT-ზე',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: function(s) {
	          return (/(წამი|წუთი|საათი|წელი)/).test(s) ? s.replace(/ი$/, 'ში') : s + 'ში';
	        },
	        past: function(s) {
	          if ((/(წამი|წუთი|საათი|დღე|თვე)/).test(s)) {
	            return s.replace(/(ი|ე)$/, 'ის წინ');
	          }
	          if ((/წელი/).test(s)) {
	            return s.replace(/წელი$/, 'წლის წინ');
	          }
	        },
	        s: 'რამდენიმე წამი',
	        m: 'წუთი',
	        mm: '%d წუთი',
	        h: 'საათი',
	        hh: '%d საათი',
	        d: 'დღე',
	        dd: '%d დღე',
	        M: 'თვე',
	        MM: '%d თვე',
	        y: 'წელი',
	        yy: '%d წელი'
	      },
	      ordinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
	      ordinal: function(number) {
	        if (number === 0) {
	          return number;
	        }
	        if (number === 1) {
	          return number + '-ლი';
	        }
	        if ((number < 20) || (number <= 100 && (number % 20 === 0)) || (number % 100 === 0)) {
	          return 'მე-' + number;
	        }
	        return number + '-ე';
	      },
	      week: {
	        dow: 1,
	        doy: 7
	      }
	    });
	    return ka;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var suffixes = {
	      0: '-ші',
	      1: '-ші',
	      2: '-ші',
	      3: '-ші',
	      4: '-ші',
	      5: '-ші',
	      6: '-шы',
	      7: '-ші',
	      8: '-ші',
	      9: '-шы',
	      10: '-шы',
	      20: '-шы',
	      30: '-шы',
	      40: '-шы',
	      50: '-ші',
	      60: '-шы',
	      70: '-ші',
	      80: '-ші',
	      90: '-шы',
	      100: '-ші'
	    };
	    var kk = moment.defineLocale('kk', {
	      months: 'қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан'.split('_'),
	      monthsShort: 'қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел'.split('_'),
	      weekdays: 'жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі'.split('_'),
	      weekdaysShort: 'жек_дүй_сей_сәр_бей_жұм_сен'.split('_'),
	      weekdaysMin: 'жк_дй_сй_ср_бй_жм_сн'.split('_'),
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD.MM.YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY HH:mm',
	        LLLL: 'dddd, D MMMM YYYY HH:mm'
	      },
	      calendar: {
	        sameDay: '[Бүгін сағат] LT',
	        nextDay: '[Ертең сағат] LT',
	        nextWeek: 'dddd [сағат] LT',
	        lastDay: '[Кеше сағат] LT',
	        lastWeek: '[Өткен аптаның] dddd [сағат] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: '%s ішінде',
	        past: '%s бұрын',
	        s: 'бірнеше секунд',
	        m: 'бір минут',
	        mm: '%d минут',
	        h: 'бір сағат',
	        hh: '%d сағат',
	        d: 'бір күн',
	        dd: '%d күн',
	        M: 'бір ай',
	        MM: '%d ай',
	        y: 'бір жыл',
	        yy: '%d жыл'
	      },
	      ordinalParse: /\d{1,2}-(ші|шы)/,
	      ordinal: function(number) {
	        var a = number % 10,
	            b = number >= 100 ? 100 : null;
	        return number + (suffixes[$traceurRuntime.toProperty(number)] || suffixes[$traceurRuntime.toProperty(a)] || suffixes[$traceurRuntime.toProperty(b)]);
	      },
	      week: {
	        dow: 1,
	        doy: 7
	      }
	    });
	    return kk;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var km = moment.defineLocale('km', {
	      months: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
	      monthsShort: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
	      weekdays: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
	      weekdaysShort: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
	      weekdaysMin: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY HH:mm',
	        LLLL: 'dddd, D MMMM YYYY HH:mm'
	      },
	      calendar: {
	        sameDay: '[ថ្ងៃនេះ ម៉ោង] LT',
	        nextDay: '[ស្អែក ម៉ោង] LT',
	        nextWeek: 'dddd [ម៉ោង] LT',
	        lastDay: '[ម្សិលមិញ ម៉ោង] LT',
	        lastWeek: 'dddd [សប្តាហ៍មុន] [ម៉ោង] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: '%sទៀត',
	        past: '%sមុន',
	        s: 'ប៉ុន្មានវិនាទី',
	        m: 'មួយនាទី',
	        mm: '%d នាទី',
	        h: 'មួយម៉ោង',
	        hh: '%d ម៉ោង',
	        d: 'មួយថ្ងៃ',
	        dd: '%d ថ្ងៃ',
	        M: 'មួយខែ',
	        MM: '%d ខែ',
	        y: 'មួយឆ្នាំ',
	        yy: '%d ឆ្នាំ'
	      },
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return km;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var ko = moment.defineLocale('ko', {
	      months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
	      monthsShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
	      weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
	      weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
	      weekdaysMin: '일_월_화_수_목_금_토'.split('_'),
	      longDateFormat: {
	        LT: 'A h시 m분',
	        LTS: 'A h시 m분 s초',
	        L: 'YYYY.MM.DD',
	        LL: 'YYYY년 MMMM D일',
	        LLL: 'YYYY년 MMMM D일 A h시 m분',
	        LLLL: 'YYYY년 MMMM D일 dddd A h시 m분'
	      },
	      calendar: {
	        sameDay: '오늘 LT',
	        nextDay: '내일 LT',
	        nextWeek: 'dddd LT',
	        lastDay: '어제 LT',
	        lastWeek: '지난주 dddd LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: '%s 후',
	        past: '%s 전',
	        s: '몇 초',
	        ss: '%d초',
	        m: '일분',
	        mm: '%d분',
	        h: '한 시간',
	        hh: '%d시간',
	        d: '하루',
	        dd: '%d일',
	        M: '한 달',
	        MM: '%d달',
	        y: '일 년',
	        yy: '%d년'
	      },
	      ordinalParse: /\d{1,2}일/,
	      ordinal: '%d일',
	      meridiemParse: /오전|오후/,
	      isPM: function(token) {
	        return token === '오후';
	      },
	      meridiem: function(hour, minute, isUpper) {
	        return hour < 12 ? '오전' : '오후';
	      }
	    });
	    return ko;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var suffixes = {
	      0: '-чү',
	      1: '-чи',
	      2: '-чи',
	      3: '-чү',
	      4: '-чү',
	      5: '-чи',
	      6: '-чы',
	      7: '-чи',
	      8: '-чи',
	      9: '-чу',
	      10: '-чу',
	      20: '-чы',
	      30: '-чу',
	      40: '-чы',
	      50: '-чү',
	      60: '-чы',
	      70: '-чи',
	      80: '-чи',
	      90: '-чу',
	      100: '-чү'
	    };
	    var ky = moment.defineLocale('ky', {
	      months: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
	      monthsShort: 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
	      weekdays: 'Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби'.split('_'),
	      weekdaysShort: 'Жек_Дүй_Шей_Шар_Бей_Жум_Ише'.split('_'),
	      weekdaysMin: 'Жк_Дй_Шй_Шр_Бй_Жм_Иш'.split('_'),
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD.MM.YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY HH:mm',
	        LLLL: 'dddd, D MMMM YYYY HH:mm'
	      },
	      calendar: {
	        sameDay: '[Бүгүн саат] LT',
	        nextDay: '[Эртең саат] LT',
	        nextWeek: 'dddd [саат] LT',
	        lastDay: '[Кече саат] LT',
	        lastWeek: '[Өткен аптанын] dddd [күнү] [саат] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: '%s ичинде',
	        past: '%s мурун',
	        s: 'бирнече секунд',
	        m: 'бир мүнөт',
	        mm: '%d мүнөт',
	        h: 'бир саат',
	        hh: '%d саат',
	        d: 'бир күн',
	        dd: '%d күн',
	        M: 'бир ай',
	        MM: '%d ай',
	        y: 'бир жыл',
	        yy: '%d жыл'
	      },
	      ordinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
	      ordinal: function(number) {
	        var a = number % 10,
	            b = number >= 100 ? 100 : null;
	        return number + (suffixes[$traceurRuntime.toProperty(number)] || suffixes[$traceurRuntime.toProperty(a)] || suffixes[$traceurRuntime.toProperty(b)]);
	      },
	      week: {
	        dow: 1,
	        doy: 7
	      }
	    });
	    return ky;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	      var format = {
	        'm': ['eng Minutt', 'enger Minutt'],
	        'h': ['eng Stonn', 'enger Stonn'],
	        'd': ['een Dag', 'engem Dag'],
	        'M': ['ee Mount', 'engem Mount'],
	        'y': ['ee Joer', 'engem Joer']
	      };
	      return withoutSuffix ? format[$traceurRuntime.toProperty(key)][0] : format[$traceurRuntime.toProperty(key)][1];
	    }
	    function processFutureTime(string) {
	      var number = string.substr(0, string.indexOf(' '));
	      if (eifelerRegelAppliesToNumber(number)) {
	        return 'a ' + string;
	      }
	      return 'an ' + string;
	    }
	    function processPastTime(string) {
	      var number = string.substr(0, string.indexOf(' '));
	      if (eifelerRegelAppliesToNumber(number)) {
	        return 'viru ' + string;
	      }
	      return 'virun ' + string;
	    }
	    function eifelerRegelAppliesToNumber(number) {
	      number = parseInt(number, 10);
	      if (isNaN(number)) {
	        return false;
	      }
	      if (number < 0) {
	        return true;
	      } else if (number < 10) {
	        if (4 <= number && number <= 7) {
	          return true;
	        }
	        return false;
	      } else if (number < 100) {
	        var lastDigit = number % 10,
	            firstDigit = number / 10;
	        if (lastDigit === 0) {
	          return eifelerRegelAppliesToNumber(firstDigit);
	        }
	        return eifelerRegelAppliesToNumber(lastDigit);
	      } else if (number < 10000) {
	        while (number >= 10) {
	          number = number / 10;
	        }
	        return eifelerRegelAppliesToNumber(number);
	      } else {
	        number = number / 1000;
	        return eifelerRegelAppliesToNumber(number);
	      }
	    }
	    var lb = moment.defineLocale('lb', {
	      months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
	      monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
	      monthsParseExact: true,
	      weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
	      weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
	      weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
	      weekdaysParseExact: true,
	      longDateFormat: {
	        LT: 'H:mm [Auer]',
	        LTS: 'H:mm:ss [Auer]',
	        L: 'DD.MM.YYYY',
	        LL: 'D. MMMM YYYY',
	        LLL: 'D. MMMM YYYY H:mm [Auer]',
	        LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]'
	      },
	      calendar: {
	        sameDay: '[Haut um] LT',
	        sameElse: 'L',
	        nextDay: '[Muer um] LT',
	        nextWeek: 'dddd [um] LT',
	        lastDay: '[Gëschter um] LT',
	        lastWeek: function() {
	          switch (this.day()) {
	            case 2:
	            case 4:
	              return '[Leschten] dddd [um] LT';
	            default:
	              return '[Leschte] dddd [um] LT';
	          }
	        }
	      },
	      relativeTime: {
	        future: processFutureTime,
	        past: processPastTime,
	        s: 'e puer Sekonnen',
	        m: processRelativeTime,
	        mm: '%d Minutten',
	        h: processRelativeTime,
	        hh: '%d Stonnen',
	        d: processRelativeTime,
	        dd: '%d Deeg',
	        M: processRelativeTime,
	        MM: '%d Méint',
	        y: processRelativeTime,
	        yy: '%d Joer'
	      },
	      ordinalParse: /\d{1,2}\./,
	      ordinal: '%d.',
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return lb;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var lo = moment.defineLocale('lo', {
	      months: 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
	      monthsShort: 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
	      weekdays: 'ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
	      weekdaysShort: 'ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
	      weekdaysMin: 'ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ'.split('_'),
	      weekdaysParseExact: true,
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY HH:mm',
	        LLLL: 'ວັນdddd D MMMM YYYY HH:mm'
	      },
	      meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
	      isPM: function(input) {
	        return input === 'ຕອນແລງ';
	      },
	      meridiem: function(hour, minute, isLower) {
	        if (hour < 12) {
	          return 'ຕອນເຊົ້າ';
	        } else {
	          return 'ຕອນແລງ';
	        }
	      },
	      calendar: {
	        sameDay: '[ມື້ນີ້ເວລາ] LT',
	        nextDay: '[ມື້ອື່ນເວລາ] LT',
	        nextWeek: '[ວັນ]dddd[ໜ້າເວລາ] LT',
	        lastDay: '[ມື້ວານນີ້ເວລາ] LT',
	        lastWeek: '[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'ອີກ %s',
	        past: '%sຜ່ານມາ',
	        s: 'ບໍ່ເທົ່າໃດວິນາທີ',
	        m: '1 ນາທີ',
	        mm: '%d ນາທີ',
	        h: '1 ຊົ່ວໂມງ',
	        hh: '%d ຊົ່ວໂມງ',
	        d: '1 ມື້',
	        dd: '%d ມື້',
	        M: '1 ເດືອນ',
	        MM: '%d ເດືອນ',
	        y: '1 ປີ',
	        yy: '%d ປີ'
	      },
	      ordinalParse: /(ທີ່)\d{1,2}/,
	      ordinal: function(number) {
	        return 'ທີ່' + number;
	      }
	    });
	    return lo;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var units = {
	      'm': 'minutė_minutės_minutę',
	      'mm': 'minutės_minučių_minutes',
	      'h': 'valanda_valandos_valandą',
	      'hh': 'valandos_valandų_valandas',
	      'd': 'diena_dienos_dieną',
	      'dd': 'dienos_dienų_dienas',
	      'M': 'mėnuo_mėnesio_mėnesį',
	      'MM': 'mėnesiai_mėnesių_mėnesius',
	      'y': 'metai_metų_metus',
	      'yy': 'metai_metų_metus'
	    };
	    function translateSeconds(number, withoutSuffix, key, isFuture) {
	      if (withoutSuffix) {
	        return 'kelios sekundės';
	      } else {
	        return isFuture ? 'kelių sekundžių' : 'kelias sekundes';
	      }
	    }
	    function translateSingular(number, withoutSuffix, key, isFuture) {
	      return withoutSuffix ? forms(key)[0] : (isFuture ? forms(key)[1] : forms(key)[2]);
	    }
	    function special(number) {
	      return number % 10 === 0 || (number > 10 && number < 20);
	    }
	    function forms(key) {
	      return units[$traceurRuntime.toProperty(key)].split('_');
	    }
	    function translate(number, withoutSuffix, key, isFuture) {
	      var result = number + ' ';
	      if (number === 1) {
	        return result + translateSingular(number, withoutSuffix, key[0], isFuture);
	      } else if (withoutSuffix) {
	        return result + (special(number) ? forms(key)[1] : forms(key)[0]);
	      } else {
	        if (isFuture) {
	          return result + forms(key)[1];
	        } else {
	          return result + (special(number) ? forms(key)[1] : forms(key)[2]);
	        }
	      }
	    }
	    var lt = moment.defineLocale('lt', {
	      months: {
	        format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
	        standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_'),
	        isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
	      },
	      monthsShort: 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
	      weekdays: {
	        format: 'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split('_'),
	        standalone: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_'),
	        isFormat: /dddd HH:mm/
	      },
	      weekdaysShort: 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
	      weekdaysMin: 'S_P_A_T_K_Pn_Š'.split('_'),
	      weekdaysParseExact: true,
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'YYYY-MM-DD',
	        LL: 'YYYY [m.] MMMM D [d.]',
	        LLL: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
	        LLLL: 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
	        l: 'YYYY-MM-DD',
	        ll: 'YYYY [m.] MMMM D [d.]',
	        lll: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
	        llll: 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'
	      },
	      calendar: {
	        sameDay: '[Šiandien] LT',
	        nextDay: '[Rytoj] LT',
	        nextWeek: 'dddd LT',
	        lastDay: '[Vakar] LT',
	        lastWeek: '[Praėjusį] dddd LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'po %s',
	        past: 'prieš %s',
	        s: translateSeconds,
	        m: translateSingular,
	        mm: translate,
	        h: translateSingular,
	        hh: translate,
	        d: translateSingular,
	        dd: translate,
	        M: translateSingular,
	        MM: translate,
	        y: translateSingular,
	        yy: translate
	      },
	      ordinalParse: /\d{1,2}-oji/,
	      ordinal: function(number) {
	        return number + '-oji';
	      },
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return lt;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var units = {
	      'm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
	      'mm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
	      'h': 'stundas_stundām_stunda_stundas'.split('_'),
	      'hh': 'stundas_stundām_stunda_stundas'.split('_'),
	      'd': 'dienas_dienām_diena_dienas'.split('_'),
	      'dd': 'dienas_dienām_diena_dienas'.split('_'),
	      'M': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
	      'MM': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
	      'y': 'gada_gadiem_gads_gadi'.split('_'),
	      'yy': 'gada_gadiem_gads_gadi'.split('_')
	    };
	    function format(forms, number, withoutSuffix) {
	      if (withoutSuffix) {
	        return number % 10 === 1 && number % 100 !== 11 ? forms[2] : forms[3];
	      } else {
	        return number % 10 === 1 && number % 100 !== 11 ? forms[0] : forms[1];
	      }
	    }
	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	      return number + ' ' + format(units[$traceurRuntime.toProperty(key)], number, withoutSuffix);
	    }
	    function relativeTimeWithSingular(number, withoutSuffix, key) {
	      return format(units[$traceurRuntime.toProperty(key)], number, withoutSuffix);
	    }
	    function relativeSeconds(number, withoutSuffix) {
	      return withoutSuffix ? 'dažas sekundes' : 'dažām sekundēm';
	    }
	    var lv = moment.defineLocale('lv', {
	      months: 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
	      monthsShort: 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),
	      weekdays: 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split('_'),
	      weekdaysShort: 'Sv_P_O_T_C_Pk_S'.split('_'),
	      weekdaysMin: 'Sv_P_O_T_C_Pk_S'.split('_'),
	      weekdaysParseExact: true,
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD.MM.YYYY.',
	        LL: 'YYYY. [gada] D. MMMM',
	        LLL: 'YYYY. [gada] D. MMMM, HH:mm',
	        LLLL: 'YYYY. [gada] D. MMMM, dddd, HH:mm'
	      },
	      calendar: {
	        sameDay: '[Šodien pulksten] LT',
	        nextDay: '[Rīt pulksten] LT',
	        nextWeek: 'dddd [pulksten] LT',
	        lastDay: '[Vakar pulksten] LT',
	        lastWeek: '[Pagājušā] dddd [pulksten] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'pēc %s',
	        past: 'pirms %s',
	        s: relativeSeconds,
	        m: relativeTimeWithSingular,
	        mm: relativeTimeWithPlural,
	        h: relativeTimeWithSingular,
	        hh: relativeTimeWithPlural,
	        d: relativeTimeWithSingular,
	        dd: relativeTimeWithPlural,
	        M: relativeTimeWithSingular,
	        MM: relativeTimeWithPlural,
	        y: relativeTimeWithSingular,
	        yy: relativeTimeWithPlural
	      },
	      ordinalParse: /\d{1,2}\./,
	      ordinal: '%d.',
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return lv;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var translator = {
	      words: {
	        m: ['jedan minut', 'jednog minuta'],
	        mm: ['minut', 'minuta', 'minuta'],
	        h: ['jedan sat', 'jednog sata'],
	        hh: ['sat', 'sata', 'sati'],
	        dd: ['dan', 'dana', 'dana'],
	        MM: ['mjesec', 'mjeseca', 'mjeseci'],
	        yy: ['godina', 'godine', 'godina']
	      },
	      correctGrammaticalCase: function(number, wordKey) {
	        return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
	      },
	      translate: function(number, withoutSuffix, key) {
	        var wordKey = translator.words[$traceurRuntime.toProperty(key)];
	        if (key.length === 1) {
	          return withoutSuffix ? wordKey[0] : wordKey[1];
	        } else {
	          return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
	        }
	      }
	    };
	    var me = moment.defineLocale('me', {
	      months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
	      monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
	      monthsParseExact: true,
	      weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
	      weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
	      weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
	      weekdaysParseExact: true,
	      longDateFormat: {
	        LT: 'H:mm',
	        LTS: 'H:mm:ss',
	        L: 'DD.MM.YYYY',
	        LL: 'D. MMMM YYYY',
	        LLL: 'D. MMMM YYYY H:mm',
	        LLLL: 'dddd, D. MMMM YYYY H:mm'
	      },
	      calendar: {
	        sameDay: '[danas u] LT',
	        nextDay: '[sjutra u] LT',
	        nextWeek: function() {
	          switch (this.day()) {
	            case 0:
	              return '[u] [nedjelju] [u] LT';
	            case 3:
	              return '[u] [srijedu] [u] LT';
	            case 6:
	              return '[u] [subotu] [u] LT';
	            case 1:
	            case 2:
	            case 4:
	            case 5:
	              return '[u] dddd [u] LT';
	          }
	        },
	        lastDay: '[juče u] LT',
	        lastWeek: function() {
	          var lastWeekDays = ['[prošle] [nedjelje] [u] LT', '[prošlog] [ponedjeljka] [u] LT', '[prošlog] [utorka] [u] LT', '[prošle] [srijede] [u] LT', '[prošlog] [četvrtka] [u] LT', '[prošlog] [petka] [u] LT', '[prošle] [subote] [u] LT'];
	          return lastWeekDays[$traceurRuntime.toProperty(this.day())];
	        },
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'za %s',
	        past: 'prije %s',
	        s: 'nekoliko sekundi',
	        m: translator.translate,
	        mm: translator.translate,
	        h: translator.translate,
	        hh: translator.translate,
	        d: 'dan',
	        dd: translator.translate,
	        M: 'mjesec',
	        MM: translator.translate,
	        y: 'godinu',
	        yy: translator.translate
	      },
	      ordinalParse: /\d{1,2}\./,
	      ordinal: '%d.',
	      week: {
	        dow: 1,
	        doy: 7
	      }
	    });
	    return me;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var mi = moment.defineLocale('mi', {
	      months: 'Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea'.split('_'),
	      monthsShort: 'Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki'.split('_'),
	      monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
	      monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
	      monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
	      monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
	      weekdays: 'Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei'.split('_'),
	      weekdaysShort: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
	      weekdaysMin: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY [i] HH:mm',
	        LLLL: 'dddd, D MMMM YYYY [i] HH:mm'
	      },
	      calendar: {
	        sameDay: '[i teie mahana, i] LT',
	        nextDay: '[apopo i] LT',
	        nextWeek: 'dddd [i] LT',
	        lastDay: '[inanahi i] LT',
	        lastWeek: 'dddd [whakamutunga i] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'i roto i %s',
	        past: '%s i mua',
	        s: 'te hēkona ruarua',
	        m: 'he meneti',
	        mm: '%d meneti',
	        h: 'te haora',
	        hh: '%d haora',
	        d: 'he ra',
	        dd: '%d ra',
	        M: 'he marama',
	        MM: '%d marama',
	        y: 'he tau',
	        yy: '%d tau'
	      },
	      ordinalParse: /\d{1,2}º/,
	      ordinal: '%dº',
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return mi;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var mk = moment.defineLocale('mk', {
	      months: 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split('_'),
	      monthsShort: 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),
	      weekdays: 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split('_'),
	      weekdaysShort: 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
	      weekdaysMin: 'нe_пo_вт_ср_че_пе_сa'.split('_'),
	      longDateFormat: {
	        LT: 'H:mm',
	        LTS: 'H:mm:ss',
	        L: 'D.MM.YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY H:mm',
	        LLLL: 'dddd, D MMMM YYYY H:mm'
	      },
	      calendar: {
	        sameDay: '[Денес во] LT',
	        nextDay: '[Утре во] LT',
	        nextWeek: '[Во] dddd [во] LT',
	        lastDay: '[Вчера во] LT',
	        lastWeek: function() {
	          switch (this.day()) {
	            case 0:
	            case 3:
	            case 6:
	              return '[Изминатата] dddd [во] LT';
	            case 1:
	            case 2:
	            case 4:
	            case 5:
	              return '[Изминатиот] dddd [во] LT';
	          }
	        },
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'после %s',
	        past: 'пред %s',
	        s: 'неколку секунди',
	        m: 'минута',
	        mm: '%d минути',
	        h: 'час',
	        hh: '%d часа',
	        d: 'ден',
	        dd: '%d дена',
	        M: 'месец',
	        MM: '%d месеци',
	        y: 'година',
	        yy: '%d години'
	      },
	      ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
	      ordinal: function(number) {
	        var lastDigit = number % 10,
	            last2Digits = number % 100;
	        if (number === 0) {
	          return number + '-ев';
	        } else if (last2Digits === 0) {
	          return number + '-ен';
	        } else if (last2Digits > 10 && last2Digits < 20) {
	          return number + '-ти';
	        } else if (lastDigit === 1) {
	          return number + '-ви';
	        } else if (lastDigit === 2) {
	          return number + '-ри';
	        } else if (lastDigit === 7 || lastDigit === 8) {
	          return number + '-ми';
	        } else {
	          return number + '-ти';
	        }
	      },
	      week: {
	        dow: 1,
	        doy: 7
	      }
	    });
	    return mk;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var ml = moment.defineLocale('ml', {
	      months: 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'.split('_'),
	      monthsShort: 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split('_'),
	      monthsParseExact: true,
	      weekdays: 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split('_'),
	      weekdaysShort: 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split('_'),
	      weekdaysMin: 'ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ'.split('_'),
	      longDateFormat: {
	        LT: 'A h:mm -നു',
	        LTS: 'A h:mm:ss -നു',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY, A h:mm -നു',
	        LLLL: 'dddd, D MMMM YYYY, A h:mm -നു'
	      },
	      calendar: {
	        sameDay: '[ഇന്ന്] LT',
	        nextDay: '[നാളെ] LT',
	        nextWeek: 'dddd, LT',
	        lastDay: '[ഇന്നലെ] LT',
	        lastWeek: '[കഴിഞ്ഞ] dddd, LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: '%s കഴിഞ്ഞ്',
	        past: '%s മുൻപ്',
	        s: 'അൽപ നിമിഷങ്ങൾ',
	        m: 'ഒരു മിനിറ്റ്',
	        mm: '%d മിനിറ്റ്',
	        h: 'ഒരു മണിക്കൂർ',
	        hh: '%d മണിക്കൂർ',
	        d: 'ഒരു ദിവസം',
	        dd: '%d ദിവസം',
	        M: 'ഒരു മാസം',
	        MM: '%d മാസം',
	        y: 'ഒരു വർഷം',
	        yy: '%d വർഷം'
	      },
	      meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
	      meridiemHour: function(hour, meridiem) {
	        if (hour === 12) {
	          hour = 0;
	        }
	        if ((meridiem === 'രാത്രി' && hour >= 4) || meridiem === 'ഉച്ച കഴിഞ്ഞ്' || meridiem === 'വൈകുന്നേരം') {
	          return hour + 12;
	        } else {
	          return hour;
	        }
	      },
	      meridiem: function(hour, minute, isLower) {
	        if (hour < 4) {
	          return 'രാത്രി';
	        } else if (hour < 12) {
	          return 'രാവിലെ';
	        } else if (hour < 17) {
	          return 'ഉച്ച കഴിഞ്ഞ്';
	        } else if (hour < 20) {
	          return 'വൈകുന്നേരം';
	        } else {
	          return 'രാത്രി';
	        }
	      }
	    });
	    return ml;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var symbolMap = {
	      '1': '१',
	      '2': '२',
	      '3': '३',
	      '4': '४',
	      '5': '५',
	      '6': '६',
	      '7': '७',
	      '8': '८',
	      '9': '९',
	      '0': '०'
	    },
	        numberMap = {
	          '१': '1',
	          '२': '2',
	          '३': '3',
	          '४': '4',
	          '५': '5',
	          '६': '6',
	          '७': '7',
	          '८': '8',
	          '९': '9',
	          '०': '0'
	        };
	    function relativeTimeMr(number, withoutSuffix, string, isFuture) {
	      var output = '';
	      if (withoutSuffix) {
	        switch (string) {
	          case 's':
	            output = 'काही सेकंद';
	            break;
	          case 'm':
	            output = 'एक मिनिट';
	            break;
	          case 'mm':
	            output = '%d मिनिटे';
	            break;
	          case 'h':
	            output = 'एक तास';
	            break;
	          case 'hh':
	            output = '%d तास';
	            break;
	          case 'd':
	            output = 'एक दिवस';
	            break;
	          case 'dd':
	            output = '%d दिवस';
	            break;
	          case 'M':
	            output = 'एक महिना';
	            break;
	          case 'MM':
	            output = '%d महिने';
	            break;
	          case 'y':
	            output = 'एक वर्ष';
	            break;
	          case 'yy':
	            output = '%d वर्षे';
	            break;
	        }
	      } else {
	        switch (string) {
	          case 's':
	            output = 'काही सेकंदां';
	            break;
	          case 'm':
	            output = 'एका मिनिटा';
	            break;
	          case 'mm':
	            output = '%d मिनिटां';
	            break;
	          case 'h':
	            output = 'एका तासा';
	            break;
	          case 'hh':
	            output = '%d तासां';
	            break;
	          case 'd':
	            output = 'एका दिवसा';
	            break;
	          case 'dd':
	            output = '%d दिवसां';
	            break;
	          case 'M':
	            output = 'एका महिन्या';
	            break;
	          case 'MM':
	            output = '%d महिन्यां';
	            break;
	          case 'y':
	            output = 'एका वर्षा';
	            break;
	          case 'yy':
	            output = '%d वर्षां';
	            break;
	        }
	      }
	      return output.replace(/%d/i, number);
	    }
	    var mr = moment.defineLocale('mr', {
	      months: 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
	      monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
	      monthsParseExact: true,
	      weekdays: 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
	      weekdaysShort: 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),
	      weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
	      longDateFormat: {
	        LT: 'A h:mm वाजता',
	        LTS: 'A h:mm:ss वाजता',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY, A h:mm वाजता',
	        LLLL: 'dddd, D MMMM YYYY, A h:mm वाजता'
	      },
	      calendar: {
	        sameDay: '[आज] LT',
	        nextDay: '[उद्या] LT',
	        nextWeek: 'dddd, LT',
	        lastDay: '[काल] LT',
	        lastWeek: '[मागील] dddd, LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: '%sमध्ये',
	        past: '%sपूर्वी',
	        s: relativeTimeMr,
	        m: relativeTimeMr,
	        mm: relativeTimeMr,
	        h: relativeTimeMr,
	        hh: relativeTimeMr,
	        d: relativeTimeMr,
	        dd: relativeTimeMr,
	        M: relativeTimeMr,
	        MM: relativeTimeMr,
	        y: relativeTimeMr,
	        yy: relativeTimeMr
	      },
	      preparse: function(string) {
	        return string.replace(/[१२३४५६७८९०]/g, function(match) {
	          return numberMap[$traceurRuntime.toProperty(match)];
	        });
	      },
	      postformat: function(string) {
	        return string.replace(/\d/g, function(match) {
	          return symbolMap[$traceurRuntime.toProperty(match)];
	        });
	      },
	      meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
	      meridiemHour: function(hour, meridiem) {
	        if (hour === 12) {
	          hour = 0;
	        }
	        if (meridiem === 'रात्री') {
	          return hour < 4 ? hour : hour + 12;
	        } else if (meridiem === 'सकाळी') {
	          return hour;
	        } else if (meridiem === 'दुपारी') {
	          return hour >= 10 ? hour : hour + 12;
	        } else if (meridiem === 'सायंकाळी') {
	          return hour + 12;
	        }
	      },
	      meridiem: function(hour, minute, isLower) {
	        if (hour < 4) {
	          return 'रात्री';
	        } else if (hour < 10) {
	          return 'सकाळी';
	        } else if (hour < 17) {
	          return 'दुपारी';
	        } else if (hour < 20) {
	          return 'सायंकाळी';
	        } else {
	          return 'रात्री';
	        }
	      },
	      week: {
	        dow: 0,
	        doy: 6
	      }
	    });
	    return mr;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var ms = moment.defineLocale('ms', {
	      months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
	      monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
	      weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
	      weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
	      weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
	      longDateFormat: {
	        LT: 'HH.mm',
	        LTS: 'HH.mm.ss',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY [pukul] HH.mm',
	        LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
	      },
	      meridiemParse: /pagi|tengahari|petang|malam/,
	      meridiemHour: function(hour, meridiem) {
	        if (hour === 12) {
	          hour = 0;
	        }
	        if (meridiem === 'pagi') {
	          return hour;
	        } else if (meridiem === 'tengahari') {
	          return hour >= 11 ? hour : hour + 12;
	        } else if (meridiem === 'petang' || meridiem === 'malam') {
	          return hour + 12;
	        }
	      },
	      meridiem: function(hours, minutes, isLower) {
	        if (hours < 11) {
	          return 'pagi';
	        } else if (hours < 15) {
	          return 'tengahari';
	        } else if (hours < 19) {
	          return 'petang';
	        } else {
	          return 'malam';
	        }
	      },
	      calendar: {
	        sameDay: '[Hari ini pukul] LT',
	        nextDay: '[Esok pukul] LT',
	        nextWeek: 'dddd [pukul] LT',
	        lastDay: '[Kelmarin pukul] LT',
	        lastWeek: 'dddd [lepas pukul] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'dalam %s',
	        past: '%s yang lepas',
	        s: 'beberapa saat',
	        m: 'seminit',
	        mm: '%d minit',
	        h: 'sejam',
	        hh: '%d jam',
	        d: 'sehari',
	        dd: '%d hari',
	        M: 'sebulan',
	        MM: '%d bulan',
	        y: 'setahun',
	        yy: '%d tahun'
	      },
	      week: {
	        dow: 1,
	        doy: 7
	      }
	    });
	    return ms;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var ms_my = moment.defineLocale('ms-my', {
	      months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
	      monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
	      weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
	      weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
	      weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
	      longDateFormat: {
	        LT: 'HH.mm',
	        LTS: 'HH.mm.ss',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY [pukul] HH.mm',
	        LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
	      },
	      meridiemParse: /pagi|tengahari|petang|malam/,
	      meridiemHour: function(hour, meridiem) {
	        if (hour === 12) {
	          hour = 0;
	        }
	        if (meridiem === 'pagi') {
	          return hour;
	        } else if (meridiem === 'tengahari') {
	          return hour >= 11 ? hour : hour + 12;
	        } else if (meridiem === 'petang' || meridiem === 'malam') {
	          return hour + 12;
	        }
	      },
	      meridiem: function(hours, minutes, isLower) {
	        if (hours < 11) {
	          return 'pagi';
	        } else if (hours < 15) {
	          return 'tengahari';
	        } else if (hours < 19) {
	          return 'petang';
	        } else {
	          return 'malam';
	        }
	      },
	      calendar: {
	        sameDay: '[Hari ini pukul] LT',
	        nextDay: '[Esok pukul] LT',
	        nextWeek: 'dddd [pukul] LT',
	        lastDay: '[Kelmarin pukul] LT',
	        lastWeek: 'dddd [lepas pukul] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'dalam %s',
	        past: '%s yang lepas',
	        s: 'beberapa saat',
	        m: 'seminit',
	        mm: '%d minit',
	        h: 'sejam',
	        hh: '%d jam',
	        d: 'sehari',
	        dd: '%d hari',
	        M: 'sebulan',
	        MM: '%d bulan',
	        y: 'setahun',
	        yy: '%d tahun'
	      },
	      week: {
	        dow: 1,
	        doy: 7
	      }
	    });
	    return ms_my;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var symbolMap = {
	      '1': '၁',
	      '2': '၂',
	      '3': '၃',
	      '4': '၄',
	      '5': '၅',
	      '6': '၆',
	      '7': '၇',
	      '8': '၈',
	      '9': '၉',
	      '0': '၀'
	    },
	        numberMap = {
	          '၁': '1',
	          '၂': '2',
	          '၃': '3',
	          '၄': '4',
	          '၅': '5',
	          '၆': '6',
	          '၇': '7',
	          '၈': '8',
	          '၉': '9',
	          '၀': '0'
	        };
	    var my = moment.defineLocale('my', {
	      months: 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'.split('_'),
	      monthsShort: 'ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ'.split('_'),
	      weekdays: 'တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ'.split('_'),
	      weekdaysShort: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
	      weekdaysMin: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY HH:mm',
	        LLLL: 'dddd D MMMM YYYY HH:mm'
	      },
	      calendar: {
	        sameDay: '[ယနေ.] LT [မှာ]',
	        nextDay: '[မနက်ဖြန်] LT [မှာ]',
	        nextWeek: 'dddd LT [မှာ]',
	        lastDay: '[မနေ.က] LT [မှာ]',
	        lastWeek: '[ပြီးခဲ့သော] dddd LT [မှာ]',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'လာမည့် %s မှာ',
	        past: 'လွန်ခဲ့သော %s က',
	        s: 'စက္ကန်.အနည်းငယ်',
	        m: 'တစ်မိနစ်',
	        mm: '%d မိနစ်',
	        h: 'တစ်နာရီ',
	        hh: '%d နာရီ',
	        d: 'တစ်ရက်',
	        dd: '%d ရက်',
	        M: 'တစ်လ',
	        MM: '%d လ',
	        y: 'တစ်နှစ်',
	        yy: '%d နှစ်'
	      },
	      preparse: function(string) {
	        return string.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function(match) {
	          return numberMap[$traceurRuntime.toProperty(match)];
	        });
	      },
	      postformat: function(string) {
	        return string.replace(/\d/g, function(match) {
	          return symbolMap[$traceurRuntime.toProperty(match)];
	        });
	      },
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return my;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var nb = moment.defineLocale('nb', {
	      months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
	      monthsShort: 'jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
	      monthsParseExact: true,
	      weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
	      weekdaysShort: 'sø._ma._ti._on._to._fr._lø.'.split('_'),
	      weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
	      weekdaysParseExact: true,
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD.MM.YYYY',
	        LL: 'D. MMMM YYYY',
	        LLL: 'D. MMMM YYYY [kl.] HH:mm',
	        LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm'
	      },
	      calendar: {
	        sameDay: '[i dag kl.] LT',
	        nextDay: '[i morgen kl.] LT',
	        nextWeek: 'dddd [kl.] LT',
	        lastDay: '[i går kl.] LT',
	        lastWeek: '[forrige] dddd [kl.] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'om %s',
	        past: '%s siden',
	        s: 'noen sekunder',
	        m: 'ett minutt',
	        mm: '%d minutter',
	        h: 'en time',
	        hh: '%d timer',
	        d: 'en dag',
	        dd: '%d dager',
	        M: 'en måned',
	        MM: '%d måneder',
	        y: 'ett år',
	        yy: '%d år'
	      },
	      ordinalParse: /\d{1,2}\./,
	      ordinal: '%d.',
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return nb;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var symbolMap = {
	      '1': '१',
	      '2': '२',
	      '3': '३',
	      '4': '४',
	      '5': '५',
	      '6': '६',
	      '7': '७',
	      '8': '८',
	      '9': '९',
	      '0': '०'
	    },
	        numberMap = {
	          '१': '1',
	          '२': '2',
	          '३': '3',
	          '४': '4',
	          '५': '5',
	          '६': '6',
	          '७': '7',
	          '८': '8',
	          '९': '9',
	          '०': '0'
	        };
	    var ne = moment.defineLocale('ne', {
	      months: 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split('_'),
	      monthsShort: 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split('_'),
	      monthsParseExact: true,
	      weekdays: 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split('_'),
	      weekdaysShort: 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split('_'),
	      weekdaysMin: 'आ._सो._मं._बु._बि._शु._श.'.split('_'),
	      weekdaysParseExact: true,
	      longDateFormat: {
	        LT: 'Aको h:mm बजे',
	        LTS: 'Aको h:mm:ss बजे',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY, Aको h:mm बजे',
	        LLLL: 'dddd, D MMMM YYYY, Aको h:mm बजे'
	      },
	      preparse: function(string) {
	        return string.replace(/[१२३४५६७८९०]/g, function(match) {
	          return numberMap[$traceurRuntime.toProperty(match)];
	        });
	      },
	      postformat: function(string) {
	        return string.replace(/\d/g, function(match) {
	          return symbolMap[$traceurRuntime.toProperty(match)];
	        });
	      },
	      meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
	      meridiemHour: function(hour, meridiem) {
	        if (hour === 12) {
	          hour = 0;
	        }
	        if (meridiem === 'राति') {
	          return hour < 4 ? hour : hour + 12;
	        } else if (meridiem === 'बिहान') {
	          return hour;
	        } else if (meridiem === 'दिउँसो') {
	          return hour >= 10 ? hour : hour + 12;
	        } else if (meridiem === 'साँझ') {
	          return hour + 12;
	        }
	      },
	      meridiem: function(hour, minute, isLower) {
	        if (hour < 3) {
	          return 'राति';
	        } else if (hour < 12) {
	          return 'बिहान';
	        } else if (hour < 16) {
	          return 'दिउँसो';
	        } else if (hour < 20) {
	          return 'साँझ';
	        } else {
	          return 'राति';
	        }
	      },
	      calendar: {
	        sameDay: '[आज] LT',
	        nextDay: '[भोलि] LT',
	        nextWeek: '[आउँदो] dddd[,] LT',
	        lastDay: '[हिजो] LT',
	        lastWeek: '[गएको] dddd[,] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: '%sमा',
	        past: '%s अगाडि',
	        s: 'केही क्षण',
	        m: 'एक मिनेट',
	        mm: '%d मिनेट',
	        h: 'एक घण्टा',
	        hh: '%d घण्टा',
	        d: 'एक दिन',
	        dd: '%d दिन',
	        M: 'एक महिना',
	        MM: '%d महिना',
	        y: 'एक बर्ष',
	        yy: '%d बर्ष'
	      },
	      week: {
	        dow: 0,
	        doy: 6
	      }
	    });
	    return ne;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
	        monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');
	    var monthsParse = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
	    var monthsRegex = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
	    var nl = moment.defineLocale('nl', {
	      months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
	      monthsShort: function(m, format) {
	        if (/-MMM-/.test(format)) {
	          return monthsShortWithoutDots[$traceurRuntime.toProperty(m.month())];
	        } else {
	          return monthsShortWithDots[$traceurRuntime.toProperty(m.month())];
	        }
	      },
	      monthsRegex: monthsRegex,
	      monthsShortRegex: monthsRegex,
	      monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
	      monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
	      monthsParse: monthsParse,
	      longMonthsParse: monthsParse,
	      shortMonthsParse: monthsParse,
	      weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
	      weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
	      weekdaysMin: 'Zo_Ma_Di_Wo_Do_Vr_Za'.split('_'),
	      weekdaysParseExact: true,
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD-MM-YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY HH:mm',
	        LLLL: 'dddd D MMMM YYYY HH:mm'
	      },
	      calendar: {
	        sameDay: '[vandaag om] LT',
	        nextDay: '[morgen om] LT',
	        nextWeek: 'dddd [om] LT',
	        lastDay: '[gisteren om] LT',
	        lastWeek: '[afgelopen] dddd [om] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'over %s',
	        past: '%s geleden',
	        s: 'een paar seconden',
	        m: 'één minuut',
	        mm: '%d minuten',
	        h: 'één uur',
	        hh: '%d uur',
	        d: 'één dag',
	        dd: '%d dagen',
	        M: 'één maand',
	        MM: '%d maanden',
	        y: 'één jaar',
	        yy: '%d jaar'
	      },
	      ordinalParse: /\d{1,2}(ste|de)/,
	      ordinal: function(number) {
	        return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
	      },
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return nl;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var nn = moment.defineLocale('nn', {
	      months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
	      monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
	      weekdays: 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
	      weekdaysShort: 'sun_mån_tys_ons_tor_fre_lau'.split('_'),
	      weekdaysMin: 'su_må_ty_on_to_fr_lø'.split('_'),
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD.MM.YYYY',
	        LL: 'D. MMMM YYYY',
	        LLL: 'D. MMMM YYYY [kl.] H:mm',
	        LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm'
	      },
	      calendar: {
	        sameDay: '[I dag klokka] LT',
	        nextDay: '[I morgon klokka] LT',
	        nextWeek: 'dddd [klokka] LT',
	        lastDay: '[I går klokka] LT',
	        lastWeek: '[Føregåande] dddd [klokka] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'om %s',
	        past: '%s sidan',
	        s: 'nokre sekund',
	        m: 'eit minutt',
	        mm: '%d minutt',
	        h: 'ein time',
	        hh: '%d timar',
	        d: 'ein dag',
	        dd: '%d dagar',
	        M: 'ein månad',
	        MM: '%d månader',
	        y: 'eit år',
	        yy: '%d år'
	      },
	      ordinalParse: /\d{1,2}\./,
	      ordinal: '%d.',
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return nn;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var symbolMap = {
	      '1': '੧',
	      '2': '੨',
	      '3': '੩',
	      '4': '੪',
	      '5': '੫',
	      '6': '੬',
	      '7': '੭',
	      '8': '੮',
	      '9': '੯',
	      '0': '੦'
	    },
	        numberMap = {
	          '੧': '1',
	          '੨': '2',
	          '੩': '3',
	          '੪': '4',
	          '੫': '5',
	          '੬': '6',
	          '੭': '7',
	          '੮': '8',
	          '੯': '9',
	          '੦': '0'
	        };
	    var pa_in = moment.defineLocale('pa-in', {
	      months: 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
	      monthsShort: 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
	      weekdays: 'ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ'.split('_'),
	      weekdaysShort: 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
	      weekdaysMin: 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
	      longDateFormat: {
	        LT: 'A h:mm ਵਜੇ',
	        LTS: 'A h:mm:ss ਵਜੇ',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY, A h:mm ਵਜੇ',
	        LLLL: 'dddd, D MMMM YYYY, A h:mm ਵਜੇ'
	      },
	      calendar: {
	        sameDay: '[ਅਜ] LT',
	        nextDay: '[ਕਲ] LT',
	        nextWeek: 'dddd, LT',
	        lastDay: '[ਕਲ] LT',
	        lastWeek: '[ਪਿਛਲੇ] dddd, LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: '%s ਵਿੱਚ',
	        past: '%s ਪਿਛਲੇ',
	        s: 'ਕੁਝ ਸਕਿੰਟ',
	        m: 'ਇਕ ਮਿੰਟ',
	        mm: '%d ਮਿੰਟ',
	        h: 'ਇੱਕ ਘੰਟਾ',
	        hh: '%d ਘੰਟੇ',
	        d: 'ਇੱਕ ਦਿਨ',
	        dd: '%d ਦਿਨ',
	        M: 'ਇੱਕ ਮਹੀਨਾ',
	        MM: '%d ਮਹੀਨੇ',
	        y: 'ਇੱਕ ਸਾਲ',
	        yy: '%d ਸਾਲ'
	      },
	      preparse: function(string) {
	        return string.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function(match) {
	          return numberMap[$traceurRuntime.toProperty(match)];
	        });
	      },
	      postformat: function(string) {
	        return string.replace(/\d/g, function(match) {
	          return symbolMap[$traceurRuntime.toProperty(match)];
	        });
	      },
	      meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
	      meridiemHour: function(hour, meridiem) {
	        if (hour === 12) {
	          hour = 0;
	        }
	        if (meridiem === 'ਰਾਤ') {
	          return hour < 4 ? hour : hour + 12;
	        } else if (meridiem === 'ਸਵੇਰ') {
	          return hour;
	        } else if (meridiem === 'ਦੁਪਹਿਰ') {
	          return hour >= 10 ? hour : hour + 12;
	        } else if (meridiem === 'ਸ਼ਾਮ') {
	          return hour + 12;
	        }
	      },
	      meridiem: function(hour, minute, isLower) {
	        if (hour < 4) {
	          return 'ਰਾਤ';
	        } else if (hour < 10) {
	          return 'ਸਵੇਰ';
	        } else if (hour < 17) {
	          return 'ਦੁਪਹਿਰ';
	        } else if (hour < 20) {
	          return 'ਸ਼ਾਮ';
	        } else {
	          return 'ਰਾਤ';
	        }
	      },
	      week: {
	        dow: 0,
	        doy: 6
	      }
	    });
	    return pa_in;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_'),
	        monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');
	    function plural(n) {
	      return (n % 10 < 5) && (n % 10 > 1) && ((~~(n / 10) % 10) !== 1);
	    }
	    function translate(number, withoutSuffix, key) {
	      var result = number + ' ';
	      switch (key) {
	        case 'm':
	          return withoutSuffix ? 'minuta' : 'minutę';
	        case 'mm':
	          return result + (plural(number) ? 'minuty' : 'minut');
	        case 'h':
	          return withoutSuffix ? 'godzina' : 'godzinę';
	        case 'hh':
	          return result + (plural(number) ? 'godziny' : 'godzin');
	        case 'MM':
	          return result + (plural(number) ? 'miesiące' : 'miesięcy');
	        case 'yy':
	          return result + (plural(number) ? 'lata' : 'lat');
	      }
	    }
	    var pl = moment.defineLocale('pl', {
	      months: function(momentToFormat, format) {
	        if (format === '') {
	          return '(' + monthsSubjective[$traceurRuntime.toProperty(momentToFormat.month())] + '|' + monthsNominative[$traceurRuntime.toProperty(momentToFormat.month())] + ')';
	        } else if (/D MMMM/.test(format)) {
	          return monthsSubjective[$traceurRuntime.toProperty(momentToFormat.month())];
	        } else {
	          return monthsNominative[$traceurRuntime.toProperty(momentToFormat.month())];
	        }
	      },
	      monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
	      weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
	      weekdaysShort: 'nie_pon_wt_śr_czw_pt_sb'.split('_'),
	      weekdaysMin: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD.MM.YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY HH:mm',
	        LLLL: 'dddd, D MMMM YYYY HH:mm'
	      },
	      calendar: {
	        sameDay: '[Dziś o] LT',
	        nextDay: '[Jutro o] LT',
	        nextWeek: '[W] dddd [o] LT',
	        lastDay: '[Wczoraj o] LT',
	        lastWeek: function() {
	          switch (this.day()) {
	            case 0:
	              return '[W zeszłą niedzielę o] LT';
	            case 3:
	              return '[W zeszłą środę o] LT';
	            case 6:
	              return '[W zeszłą sobotę o] LT';
	            default:
	              return '[W zeszły] dddd [o] LT';
	          }
	        },
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'za %s',
	        past: '%s temu',
	        s: 'kilka sekund',
	        m: translate,
	        mm: translate,
	        h: translate,
	        hh: translate,
	        d: '1 dzień',
	        dd: '%d dni',
	        M: 'miesiąc',
	        MM: translate,
	        y: 'rok',
	        yy: translate
	      },
	      ordinalParse: /\d{1,2}\./,
	      ordinal: '%d.',
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return pl;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var pt = moment.defineLocale('pt', {
	      months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
	      monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
	      weekdays: 'Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado'.split('_'),
	      weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
	      weekdaysMin: 'Dom_2ª_3ª_4ª_5ª_6ª_Sáb'.split('_'),
	      weekdaysParseExact: true,
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD/MM/YYYY',
	        LL: 'D [de] MMMM [de] YYYY',
	        LLL: 'D [de] MMMM [de] YYYY HH:mm',
	        LLLL: 'dddd, D [de] MMMM [de] YYYY HH:mm'
	      },
	      calendar: {
	        sameDay: '[Hoje às] LT',
	        nextDay: '[Amanhã às] LT',
	        nextWeek: 'dddd [às] LT',
	        lastDay: '[Ontem às] LT',
	        lastWeek: function() {
	          return (this.day() === 0 || this.day() === 6) ? '[Último] dddd [às] LT' : '[Última] dddd [às] LT';
	        },
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'em %s',
	        past: 'há %s',
	        s: 'segundos',
	        m: 'um minuto',
	        mm: '%d minutos',
	        h: 'uma hora',
	        hh: '%d horas',
	        d: 'um dia',
	        dd: '%d dias',
	        M: 'um mês',
	        MM: '%d meses',
	        y: 'um ano',
	        yy: '%d anos'
	      },
	      ordinalParse: /\d{1,2}º/,
	      ordinal: '%dº',
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return pt;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var pt_br = moment.defineLocale('pt-br', {
	      months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
	      monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
	      weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
	      weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
	      weekdaysMin: 'Dom_2ª_3ª_4ª_5ª_6ª_Sáb'.split('_'),
	      weekdaysParseExact: true,
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD/MM/YYYY',
	        LL: 'D [de] MMMM [de] YYYY',
	        LLL: 'D [de] MMMM [de] YYYY [às] HH:mm',
	        LLLL: 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
	      },
	      calendar: {
	        sameDay: '[Hoje às] LT',
	        nextDay: '[Amanhã às] LT',
	        nextWeek: 'dddd [às] LT',
	        lastDay: '[Ontem às] LT',
	        lastWeek: function() {
	          return (this.day() === 0 || this.day() === 6) ? '[Último] dddd [às] LT' : '[Última] dddd [às] LT';
	        },
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'em %s',
	        past: '%s atrás',
	        s: 'poucos segundos',
	        m: 'um minuto',
	        mm: '%d minutos',
	        h: 'uma hora',
	        hh: '%d horas',
	        d: 'um dia',
	        dd: '%d dias',
	        M: 'um mês',
	        MM: '%d meses',
	        y: 'um ano',
	        yy: '%d anos'
	      },
	      ordinalParse: /\d{1,2}º/,
	      ordinal: '%dº'
	    });
	    return pt_br;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	      var format = {
	        'mm': 'minute',
	        'hh': 'ore',
	        'dd': 'zile',
	        'MM': 'luni',
	        'yy': 'ani'
	      },
	          separator = ' ';
	      if (number % 100 >= 20 || (number >= 100 && number % 100 === 0)) {
	        separator = ' de ';
	      }
	      return number + separator + format[$traceurRuntime.toProperty(key)];
	    }
	    var ro = moment.defineLocale('ro', {
	      months: 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
	      monthsShort: 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
	      monthsParseExact: true,
	      weekdays: 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
	      weekdaysShort: 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
	      weekdaysMin: 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
	      longDateFormat: {
	        LT: 'H:mm',
	        LTS: 'H:mm:ss',
	        L: 'DD.MM.YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY H:mm',
	        LLLL: 'dddd, D MMMM YYYY H:mm'
	      },
	      calendar: {
	        sameDay: '[azi la] LT',
	        nextDay: '[mâine la] LT',
	        nextWeek: 'dddd [la] LT',
	        lastDay: '[ieri la] LT',
	        lastWeek: '[fosta] dddd [la] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'peste %s',
	        past: '%s în urmă',
	        s: 'câteva secunde',
	        m: 'un minut',
	        mm: relativeTimeWithPlural,
	        h: 'o oră',
	        hh: relativeTimeWithPlural,
	        d: 'o zi',
	        dd: relativeTimeWithPlural,
	        M: 'o lună',
	        MM: relativeTimeWithPlural,
	        y: 'un an',
	        yy: relativeTimeWithPlural
	      },
	      week: {
	        dow: 1,
	        doy: 7
	      }
	    });
	    return ro;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    function plural(word, num) {
	      var forms = word.split('_');
	      return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
	    }
	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	      var format = {
	        'mm': withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
	        'hh': 'час_часа_часов',
	        'dd': 'день_дня_дней',
	        'MM': 'месяц_месяца_месяцев',
	        'yy': 'год_года_лет'
	      };
	      if (key === 'm') {
	        return withoutSuffix ? 'минута' : 'минуту';
	      } else {
	        return number + ' ' + plural(format[$traceurRuntime.toProperty(key)], +number);
	      }
	    }
	    var monthsParse = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
	    var ru = moment.defineLocale('ru', {
	      months: {
	        format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
	        standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_')
	      },
	      monthsShort: {
	        format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'),
	        standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_')
	      },
	      weekdays: {
	        standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
	        format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'),
	        isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
	      },
	      weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
	      weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
	      monthsParse: monthsParse,
	      longMonthsParse: monthsParse,
	      shortMonthsParse: monthsParse,
	      monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
	      monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
	      monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
	      monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD.MM.YYYY',
	        LL: 'D MMMM YYYY г.',
	        LLL: 'D MMMM YYYY г., HH:mm',
	        LLLL: 'dddd, D MMMM YYYY г., HH:mm'
	      },
	      calendar: {
	        sameDay: '[Сегодня в] LT',
	        nextDay: '[Завтра в] LT',
	        lastDay: '[Вчера в] LT',
	        nextWeek: function(now) {
	          if (now.week() !== this.week()) {
	            switch (this.day()) {
	              case 0:
	                return '[В следующее] dddd [в] LT';
	              case 1:
	              case 2:
	              case 4:
	                return '[В следующий] dddd [в] LT';
	              case 3:
	              case 5:
	              case 6:
	                return '[В следующую] dddd [в] LT';
	            }
	          } else {
	            if (this.day() === 2) {
	              return '[Во] dddd [в] LT';
	            } else {
	              return '[В] dddd [в] LT';
	            }
	          }
	        },
	        lastWeek: function(now) {
	          if (now.week() !== this.week()) {
	            switch (this.day()) {
	              case 0:
	                return '[В прошлое] dddd [в] LT';
	              case 1:
	              case 2:
	              case 4:
	                return '[В прошлый] dddd [в] LT';
	              case 3:
	              case 5:
	              case 6:
	                return '[В прошлую] dddd [в] LT';
	            }
	          } else {
	            if (this.day() === 2) {
	              return '[Во] dddd [в] LT';
	            } else {
	              return '[В] dddd [в] LT';
	            }
	          }
	        },
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'через %s',
	        past: '%s назад',
	        s: 'несколько секунд',
	        m: relativeTimeWithPlural,
	        mm: relativeTimeWithPlural,
	        h: 'час',
	        hh: relativeTimeWithPlural,
	        d: 'день',
	        dd: relativeTimeWithPlural,
	        M: 'месяц',
	        MM: relativeTimeWithPlural,
	        y: 'год',
	        yy: relativeTimeWithPlural
	      },
	      meridiemParse: /ночи|утра|дня|вечера/i,
	      isPM: function(input) {
	        return /^(дня|вечера)$/.test(input);
	      },
	      meridiem: function(hour, minute, isLower) {
	        if (hour < 4) {
	          return 'ночи';
	        } else if (hour < 12) {
	          return 'утра';
	        } else if (hour < 17) {
	          return 'дня';
	        } else {
	          return 'вечера';
	        }
	      },
	      ordinalParse: /\d{1,2}-(й|го|я)/,
	      ordinal: function(number, period) {
	        switch (period) {
	          case 'M':
	          case 'd':
	          case 'DDD':
	            return number + '-й';
	          case 'D':
	            return number + '-го';
	          case 'w':
	          case 'W':
	            return number + '-я';
	          default:
	            return number;
	        }
	      },
	      week: {
	        dow: 1,
	        doy: 7
	      }
	    });
	    return ru;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var se = moment.defineLocale('se', {
	      months: 'ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu'.split('_'),
	      monthsShort: 'ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov'.split('_'),
	      weekdays: 'sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat'.split('_'),
	      weekdaysShort: 'sotn_vuos_maŋ_gask_duor_bear_láv'.split('_'),
	      weekdaysMin: 's_v_m_g_d_b_L'.split('_'),
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD.MM.YYYY',
	        LL: 'MMMM D. [b.] YYYY',
	        LLL: 'MMMM D. [b.] YYYY [ti.] HH:mm',
	        LLLL: 'dddd, MMMM D. [b.] YYYY [ti.] HH:mm'
	      },
	      calendar: {
	        sameDay: '[otne ti] LT',
	        nextDay: '[ihttin ti] LT',
	        nextWeek: 'dddd [ti] LT',
	        lastDay: '[ikte ti] LT',
	        lastWeek: '[ovddit] dddd [ti] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: '%s geažes',
	        past: 'maŋit %s',
	        s: 'moadde sekunddat',
	        m: 'okta minuhta',
	        mm: '%d minuhtat',
	        h: 'okta diimmu',
	        hh: '%d diimmut',
	        d: 'okta beaivi',
	        dd: '%d beaivvit',
	        M: 'okta mánnu',
	        MM: '%d mánut',
	        y: 'okta jahki',
	        yy: '%d jagit'
	      },
	      ordinalParse: /\d{1,2}\./,
	      ordinal: '%d.',
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return se;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var si = moment.defineLocale('si', {
	      months: 'ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්'.split('_'),
	      monthsShort: 'ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ'.split('_'),
	      weekdays: 'ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා'.split('_'),
	      weekdaysShort: 'ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන'.split('_'),
	      weekdaysMin: 'ඉ_ස_අ_බ_බ්‍ර_සි_සෙ'.split('_'),
	      weekdaysParseExact: true,
	      longDateFormat: {
	        LT: 'a h:mm',
	        LTS: 'a h:mm:ss',
	        L: 'YYYY/MM/DD',
	        LL: 'YYYY MMMM D',
	        LLL: 'YYYY MMMM D, a h:mm',
	        LLLL: 'YYYY MMMM D [වැනි] dddd, a h:mm:ss'
	      },
	      calendar: {
	        sameDay: '[අද] LT[ට]',
	        nextDay: '[හෙට] LT[ට]',
	        nextWeek: 'dddd LT[ට]',
	        lastDay: '[ඊයේ] LT[ට]',
	        lastWeek: '[පසුගිය] dddd LT[ට]',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: '%sකින්',
	        past: '%sකට පෙර',
	        s: 'තත්පර කිහිපය',
	        m: 'මිනිත්තුව',
	        mm: 'මිනිත්තු %d',
	        h: 'පැය',
	        hh: 'පැය %d',
	        d: 'දිනය',
	        dd: 'දින %d',
	        M: 'මාසය',
	        MM: 'මාස %d',
	        y: 'වසර',
	        yy: 'වසර %d'
	      },
	      ordinalParse: /\d{1,2} වැනි/,
	      ordinal: function(number) {
	        return number + ' වැනි';
	      },
	      meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
	      isPM: function(input) {
	        return input === 'ප.ව.' || input === 'පස් වරු';
	      },
	      meridiem: function(hours, minutes, isLower) {
	        if (hours > 11) {
	          return isLower ? 'ප.ව.' : 'පස් වරු';
	        } else {
	          return isLower ? 'පෙ.ව.' : 'පෙර වරු';
	        }
	      }
	    });
	    return si;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var months = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_'),
	        monthsShort = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');
	    function plural(n) {
	      return (n > 1) && (n < 5);
	    }
	    function translate(number, withoutSuffix, key, isFuture) {
	      var result = number + ' ';
	      switch (key) {
	        case 's':
	          return (withoutSuffix || isFuture) ? 'pár sekúnd' : 'pár sekundami';
	        case 'm':
	          return withoutSuffix ? 'minúta' : (isFuture ? 'minútu' : 'minútou');
	        case 'mm':
	          if (withoutSuffix || isFuture) {
	            return result + (plural(number) ? 'minúty' : 'minút');
	          } else {
	            return result + 'minútami';
	          }
	          break;
	        case 'h':
	          return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
	        case 'hh':
	          if (withoutSuffix || isFuture) {
	            return result + (plural(number) ? 'hodiny' : 'hodín');
	          } else {
	            return result + 'hodinami';
	          }
	          break;
	        case 'd':
	          return (withoutSuffix || isFuture) ? 'deň' : 'dňom';
	        case 'dd':
	          if (withoutSuffix || isFuture) {
	            return result + (plural(number) ? 'dni' : 'dní');
	          } else {
	            return result + 'dňami';
	          }
	          break;
	        case 'M':
	          return (withoutSuffix || isFuture) ? 'mesiac' : 'mesiacom';
	        case 'MM':
	          if (withoutSuffix || isFuture) {
	            return result + (plural(number) ? 'mesiace' : 'mesiacov');
	          } else {
	            return result + 'mesiacmi';
	          }
	          break;
	        case 'y':
	          return (withoutSuffix || isFuture) ? 'rok' : 'rokom';
	        case 'yy':
	          if (withoutSuffix || isFuture) {
	            return result + (plural(number) ? 'roky' : 'rokov');
	          } else {
	            return result + 'rokmi';
	          }
	          break;
	      }
	    }
	    var sk = moment.defineLocale('sk', {
	      months: months,
	      monthsShort: monthsShort,
	      weekdays: 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
	      weekdaysShort: 'ne_po_ut_st_št_pi_so'.split('_'),
	      weekdaysMin: 'ne_po_ut_st_št_pi_so'.split('_'),
	      longDateFormat: {
	        LT: 'H:mm',
	        LTS: 'H:mm:ss',
	        L: 'DD.MM.YYYY',
	        LL: 'D. MMMM YYYY',
	        LLL: 'D. MMMM YYYY H:mm',
	        LLLL: 'dddd D. MMMM YYYY H:mm'
	      },
	      calendar: {
	        sameDay: '[dnes o] LT',
	        nextDay: '[zajtra o] LT',
	        nextWeek: function() {
	          switch (this.day()) {
	            case 0:
	              return '[v nedeľu o] LT';
	            case 1:
	            case 2:
	              return '[v] dddd [o] LT';
	            case 3:
	              return '[v stredu o] LT';
	            case 4:
	              return '[vo štvrtok o] LT';
	            case 5:
	              return '[v piatok o] LT';
	            case 6:
	              return '[v sobotu o] LT';
	          }
	        },
	        lastDay: '[včera o] LT',
	        lastWeek: function() {
	          switch (this.day()) {
	            case 0:
	              return '[minulú nedeľu o] LT';
	            case 1:
	            case 2:
	              return '[minulý] dddd [o] LT';
	            case 3:
	              return '[minulú stredu o] LT';
	            case 4:
	            case 5:
	              return '[minulý] dddd [o] LT';
	            case 6:
	              return '[minulú sobotu o] LT';
	          }
	        },
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'za %s',
	        past: 'pred %s',
	        s: translate,
	        m: translate,
	        mm: translate,
	        h: translate,
	        hh: translate,
	        d: translate,
	        dd: translate,
	        M: translate,
	        MM: translate,
	        y: translate,
	        yy: translate
	      },
	      ordinalParse: /\d{1,2}\./,
	      ordinal: '%d.',
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return sk;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	      var result = number + ' ';
	      switch (key) {
	        case 's':
	          return withoutSuffix || isFuture ? 'nekaj sekund' : 'nekaj sekundami';
	        case 'm':
	          return withoutSuffix ? 'ena minuta' : 'eno minuto';
	        case 'mm':
	          if (number === 1) {
	            result += withoutSuffix ? 'minuta' : 'minuto';
	          } else if (number === 2) {
	            result += withoutSuffix || isFuture ? 'minuti' : 'minutama';
	          } else if (number < 5) {
	            result += withoutSuffix || isFuture ? 'minute' : 'minutami';
	          } else {
	            result += withoutSuffix || isFuture ? 'minut' : 'minutami';
	          }
	          return result;
	        case 'h':
	          return withoutSuffix ? 'ena ura' : 'eno uro';
	        case 'hh':
	          if (number === 1) {
	            result += withoutSuffix ? 'ura' : 'uro';
	          } else if (number === 2) {
	            result += withoutSuffix || isFuture ? 'uri' : 'urama';
	          } else if (number < 5) {
	            result += withoutSuffix || isFuture ? 'ure' : 'urami';
	          } else {
	            result += withoutSuffix || isFuture ? 'ur' : 'urami';
	          }
	          return result;
	        case 'd':
	          return withoutSuffix || isFuture ? 'en dan' : 'enim dnem';
	        case 'dd':
	          if (number === 1) {
	            result += withoutSuffix || isFuture ? 'dan' : 'dnem';
	          } else if (number === 2) {
	            result += withoutSuffix || isFuture ? 'dni' : 'dnevoma';
	          } else {
	            result += withoutSuffix || isFuture ? 'dni' : 'dnevi';
	          }
	          return result;
	        case 'M':
	          return withoutSuffix || isFuture ? 'en mesec' : 'enim mesecem';
	        case 'MM':
	          if (number === 1) {
	            result += withoutSuffix || isFuture ? 'mesec' : 'mesecem';
	          } else if (number === 2) {
	            result += withoutSuffix || isFuture ? 'meseca' : 'mesecema';
	          } else if (number < 5) {
	            result += withoutSuffix || isFuture ? 'mesece' : 'meseci';
	          } else {
	            result += withoutSuffix || isFuture ? 'mesecev' : 'meseci';
	          }
	          return result;
	        case 'y':
	          return withoutSuffix || isFuture ? 'eno leto' : 'enim letom';
	        case 'yy':
	          if (number === 1) {
	            result += withoutSuffix || isFuture ? 'leto' : 'letom';
	          } else if (number === 2) {
	            result += withoutSuffix || isFuture ? 'leti' : 'letoma';
	          } else if (number < 5) {
	            result += withoutSuffix || isFuture ? 'leta' : 'leti';
	          } else {
	            result += withoutSuffix || isFuture ? 'let' : 'leti';
	          }
	          return result;
	      }
	    }
	    var sl = moment.defineLocale('sl', {
	      months: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
	      monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
	      monthsParseExact: true,
	      weekdays: 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
	      weekdaysShort: 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
	      weekdaysMin: 'ne_po_to_sr_če_pe_so'.split('_'),
	      weekdaysParseExact: true,
	      longDateFormat: {
	        LT: 'H:mm',
	        LTS: 'H:mm:ss',
	        L: 'DD.MM.YYYY',
	        LL: 'D. MMMM YYYY',
	        LLL: 'D. MMMM YYYY H:mm',
	        LLLL: 'dddd, D. MMMM YYYY H:mm'
	      },
	      calendar: {
	        sameDay: '[danes ob] LT',
	        nextDay: '[jutri ob] LT',
	        nextWeek: function() {
	          switch (this.day()) {
	            case 0:
	              return '[v] [nedeljo] [ob] LT';
	            case 3:
	              return '[v] [sredo] [ob] LT';
	            case 6:
	              return '[v] [soboto] [ob] LT';
	            case 1:
	            case 2:
	            case 4:
	            case 5:
	              return '[v] dddd [ob] LT';
	          }
	        },
	        lastDay: '[včeraj ob] LT',
	        lastWeek: function() {
	          switch (this.day()) {
	            case 0:
	              return '[prejšnjo] [nedeljo] [ob] LT';
	            case 3:
	              return '[prejšnjo] [sredo] [ob] LT';
	            case 6:
	              return '[prejšnjo] [soboto] [ob] LT';
	            case 1:
	            case 2:
	            case 4:
	            case 5:
	              return '[prejšnji] dddd [ob] LT';
	          }
	        },
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'čez %s',
	        past: 'pred %s',
	        s: processRelativeTime,
	        m: processRelativeTime,
	        mm: processRelativeTime,
	        h: processRelativeTime,
	        hh: processRelativeTime,
	        d: processRelativeTime,
	        dd: processRelativeTime,
	        M: processRelativeTime,
	        MM: processRelativeTime,
	        y: processRelativeTime,
	        yy: processRelativeTime
	      },
	      ordinalParse: /\d{1,2}\./,
	      ordinal: '%d.',
	      week: {
	        dow: 1,
	        doy: 7
	      }
	    });
	    return sl;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var sq = moment.defineLocale('sq', {
	      months: 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split('_'),
	      monthsShort: 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split('_'),
	      weekdays: 'E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split('_'),
	      weekdaysShort: 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),
	      weekdaysMin: 'D_H_Ma_Më_E_P_Sh'.split('_'),
	      weekdaysParseExact: true,
	      meridiemParse: /PD|MD/,
	      isPM: function(input) {
	        return input.charAt(0) === 'M';
	      },
	      meridiem: function(hours, minutes, isLower) {
	        return hours < 12 ? 'PD' : 'MD';
	      },
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY HH:mm',
	        LLLL: 'dddd, D MMMM YYYY HH:mm'
	      },
	      calendar: {
	        sameDay: '[Sot në] LT',
	        nextDay: '[Nesër në] LT',
	        nextWeek: 'dddd [në] LT',
	        lastDay: '[Dje në] LT',
	        lastWeek: 'dddd [e kaluar në] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'në %s',
	        past: '%s më parë',
	        s: 'disa sekonda',
	        m: 'një minutë',
	        mm: '%d minuta',
	        h: 'një orë',
	        hh: '%d orë',
	        d: 'një ditë',
	        dd: '%d ditë',
	        M: 'një muaj',
	        MM: '%d muaj',
	        y: 'një vit',
	        yy: '%d vite'
	      },
	      ordinalParse: /\d{1,2}\./,
	      ordinal: '%d.',
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return sq;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var translator = {
	      words: {
	        m: ['jedan minut', 'jedne minute'],
	        mm: ['minut', 'minute', 'minuta'],
	        h: ['jedan sat', 'jednog sata'],
	        hh: ['sat', 'sata', 'sati'],
	        dd: ['dan', 'dana', 'dana'],
	        MM: ['mesec', 'meseca', 'meseci'],
	        yy: ['godina', 'godine', 'godina']
	      },
	      correctGrammaticalCase: function(number, wordKey) {
	        return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
	      },
	      translate: function(number, withoutSuffix, key) {
	        var wordKey = translator.words[$traceurRuntime.toProperty(key)];
	        if (key.length === 1) {
	          return withoutSuffix ? wordKey[0] : wordKey[1];
	        } else {
	          return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
	        }
	      }
	    };
	    var sr = moment.defineLocale('sr', {
	      months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
	      monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
	      monthsParseExact: true,
	      weekdays: 'nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota'.split('_'),
	      weekdaysShort: 'ned._pon._uto._sre._čet._pet._sub.'.split('_'),
	      weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
	      weekdaysParseExact: true,
	      longDateFormat: {
	        LT: 'H:mm',
	        LTS: 'H:mm:ss',
	        L: 'DD.MM.YYYY',
	        LL: 'D. MMMM YYYY',
	        LLL: 'D. MMMM YYYY H:mm',
	        LLLL: 'dddd, D. MMMM YYYY H:mm'
	      },
	      calendar: {
	        sameDay: '[danas u] LT',
	        nextDay: '[sutra u] LT',
	        nextWeek: function() {
	          switch (this.day()) {
	            case 0:
	              return '[u] [nedelju] [u] LT';
	            case 3:
	              return '[u] [sredu] [u] LT';
	            case 6:
	              return '[u] [subotu] [u] LT';
	            case 1:
	            case 2:
	            case 4:
	            case 5:
	              return '[u] dddd [u] LT';
	          }
	        },
	        lastDay: '[juče u] LT',
	        lastWeek: function() {
	          var lastWeekDays = ['[prošle] [nedelje] [u] LT', '[prošlog] [ponedeljka] [u] LT', '[prošlog] [utorka] [u] LT', '[prošle] [srede] [u] LT', '[prošlog] [četvrtka] [u] LT', '[prošlog] [petka] [u] LT', '[prošle] [subote] [u] LT'];
	          return lastWeekDays[$traceurRuntime.toProperty(this.day())];
	        },
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'za %s',
	        past: 'pre %s',
	        s: 'nekoliko sekundi',
	        m: translator.translate,
	        mm: translator.translate,
	        h: translator.translate,
	        hh: translator.translate,
	        d: 'dan',
	        dd: translator.translate,
	        M: 'mesec',
	        MM: translator.translate,
	        y: 'godinu',
	        yy: translator.translate
	      },
	      ordinalParse: /\d{1,2}\./,
	      ordinal: '%d.',
	      week: {
	        dow: 1,
	        doy: 7
	      }
	    });
	    return sr;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var translator = {
	      words: {
	        m: ['један минут', 'једне минуте'],
	        mm: ['минут', 'минуте', 'минута'],
	        h: ['један сат', 'једног сата'],
	        hh: ['сат', 'сата', 'сати'],
	        dd: ['дан', 'дана', 'дана'],
	        MM: ['месец', 'месеца', 'месеци'],
	        yy: ['година', 'године', 'година']
	      },
	      correctGrammaticalCase: function(number, wordKey) {
	        return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
	      },
	      translate: function(number, withoutSuffix, key) {
	        var wordKey = translator.words[$traceurRuntime.toProperty(key)];
	        if (key.length === 1) {
	          return withoutSuffix ? wordKey[0] : wordKey[1];
	        } else {
	          return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
	        }
	      }
	    };
	    var sr_cyrl = moment.defineLocale('sr-cyrl', {
	      months: 'јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар'.split('_'),
	      monthsShort: 'јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.'.split('_'),
	      monthsParseExact: true,
	      weekdays: 'недеља_понедељак_уторак_среда_четвртак_петак_субота'.split('_'),
	      weekdaysShort: 'нед._пон._уто._сре._чет._пет._суб.'.split('_'),
	      weekdaysMin: 'не_по_ут_ср_че_пе_су'.split('_'),
	      weekdaysParseExact: true,
	      longDateFormat: {
	        LT: 'H:mm',
	        LTS: 'H:mm:ss',
	        L: 'DD.MM.YYYY',
	        LL: 'D. MMMM YYYY',
	        LLL: 'D. MMMM YYYY H:mm',
	        LLLL: 'dddd, D. MMMM YYYY H:mm'
	      },
	      calendar: {
	        sameDay: '[данас у] LT',
	        nextDay: '[сутра у] LT',
	        nextWeek: function() {
	          switch (this.day()) {
	            case 0:
	              return '[у] [недељу] [у] LT';
	            case 3:
	              return '[у] [среду] [у] LT';
	            case 6:
	              return '[у] [суботу] [у] LT';
	            case 1:
	            case 2:
	            case 4:
	            case 5:
	              return '[у] dddd [у] LT';
	          }
	        },
	        lastDay: '[јуче у] LT',
	        lastWeek: function() {
	          var lastWeekDays = ['[прошле] [недеље] [у] LT', '[прошлог] [понедељка] [у] LT', '[прошлог] [уторка] [у] LT', '[прошле] [среде] [у] LT', '[прошлог] [четвртка] [у] LT', '[прошлог] [петка] [у] LT', '[прошле] [суботе] [у] LT'];
	          return lastWeekDays[$traceurRuntime.toProperty(this.day())];
	        },
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'за %s',
	        past: 'пре %s',
	        s: 'неколико секунди',
	        m: translator.translate,
	        mm: translator.translate,
	        h: translator.translate,
	        hh: translator.translate,
	        d: 'дан',
	        dd: translator.translate,
	        M: 'месец',
	        MM: translator.translate,
	        y: 'годину',
	        yy: translator.translate
	      },
	      ordinalParse: /\d{1,2}\./,
	      ordinal: '%d.',
	      week: {
	        dow: 1,
	        doy: 7
	      }
	    });
	    return sr_cyrl;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var ss = moment.defineLocale('ss', {
	      months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split('_'),
	      monthsShort: 'Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo'.split('_'),
	      weekdays: 'Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo'.split('_'),
	      weekdaysShort: 'Lis_Umb_Lsb_Les_Lsi_Lsh_Umg'.split('_'),
	      weekdaysMin: 'Li_Us_Lb_Lt_Ls_Lh_Ug'.split('_'),
	      weekdaysParseExact: true,
	      longDateFormat: {
	        LT: 'h:mm A',
	        LTS: 'h:mm:ss A',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY h:mm A',
	        LLLL: 'dddd, D MMMM YYYY h:mm A'
	      },
	      calendar: {
	        sameDay: '[Namuhla nga] LT',
	        nextDay: '[Kusasa nga] LT',
	        nextWeek: 'dddd [nga] LT',
	        lastDay: '[Itolo nga] LT',
	        lastWeek: 'dddd [leliphelile] [nga] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'nga %s',
	        past: 'wenteka nga %s',
	        s: 'emizuzwana lomcane',
	        m: 'umzuzu',
	        mm: '%d emizuzu',
	        h: 'lihora',
	        hh: '%d emahora',
	        d: 'lilanga',
	        dd: '%d emalanga',
	        M: 'inyanga',
	        MM: '%d tinyanga',
	        y: 'umnyaka',
	        yy: '%d iminyaka'
	      },
	      meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
	      meridiem: function(hours, minutes, isLower) {
	        if (hours < 11) {
	          return 'ekuseni';
	        } else if (hours < 15) {
	          return 'emini';
	        } else if (hours < 19) {
	          return 'entsambama';
	        } else {
	          return 'ebusuku';
	        }
	      },
	      meridiemHour: function(hour, meridiem) {
	        if (hour === 12) {
	          hour = 0;
	        }
	        if (meridiem === 'ekuseni') {
	          return hour;
	        } else if (meridiem === 'emini') {
	          return hour >= 11 ? hour : hour + 12;
	        } else if (meridiem === 'entsambama' || meridiem === 'ebusuku') {
	          if (hour === 0) {
	            return 0;
	          }
	          return hour + 12;
	        }
	      },
	      ordinalParse: /\d{1,2}/,
	      ordinal: '%d',
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return ss;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var sv = moment.defineLocale('sv', {
	      months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
	      monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
	      weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
	      weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
	      weekdaysMin: 'sö_må_ti_on_to_fr_lö'.split('_'),
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'YYYY-MM-DD',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY [kl.] HH:mm',
	        LLLL: 'dddd D MMMM YYYY [kl.] HH:mm',
	        lll: 'D MMM YYYY HH:mm',
	        llll: 'ddd D MMM YYYY HH:mm'
	      },
	      calendar: {
	        sameDay: '[Idag] LT',
	        nextDay: '[Imorgon] LT',
	        lastDay: '[Igår] LT',
	        nextWeek: '[På] dddd LT',
	        lastWeek: '[I] dddd[s] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'om %s',
	        past: 'för %s sedan',
	        s: 'några sekunder',
	        m: 'en minut',
	        mm: '%d minuter',
	        h: 'en timme',
	        hh: '%d timmar',
	        d: 'en dag',
	        dd: '%d dagar',
	        M: 'en månad',
	        MM: '%d månader',
	        y: 'ett år',
	        yy: '%d år'
	      },
	      ordinalParse: /\d{1,2}(e|a)/,
	      ordinal: function(number) {
	        var b = number % 10,
	            output = (~~(number % 100 / 10) === 1) ? 'e' : (b === 1) ? 'a' : (b === 2) ? 'a' : (b === 3) ? 'e' : 'e';
	        return number + output;
	      },
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return sv;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var sw = moment.defineLocale('sw', {
	      months: 'Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba'.split('_'),
	      monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des'.split('_'),
	      weekdays: 'Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi'.split('_'),
	      weekdaysShort: 'Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos'.split('_'),
	      weekdaysMin: 'J2_J3_J4_J5_Al_Ij_J1'.split('_'),
	      weekdaysParseExact: true,
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD.MM.YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY HH:mm',
	        LLLL: 'dddd, D MMMM YYYY HH:mm'
	      },
	      calendar: {
	        sameDay: '[leo saa] LT',
	        nextDay: '[kesho saa] LT',
	        nextWeek: '[wiki ijayo] dddd [saat] LT',
	        lastDay: '[jana] LT',
	        lastWeek: '[wiki iliyopita] dddd [saat] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: '%s baadaye',
	        past: 'tokea %s',
	        s: 'hivi punde',
	        m: 'dakika moja',
	        mm: 'dakika %d',
	        h: 'saa limoja',
	        hh: 'masaa %d',
	        d: 'siku moja',
	        dd: 'masiku %d',
	        M: 'mwezi mmoja',
	        MM: 'miezi %d',
	        y: 'mwaka mmoja',
	        yy: 'miaka %d'
	      },
	      week: {
	        dow: 1,
	        doy: 7
	      }
	    });
	    return sw;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var symbolMap = {
	      '1': '௧',
	      '2': '௨',
	      '3': '௩',
	      '4': '௪',
	      '5': '௫',
	      '6': '௬',
	      '7': '௭',
	      '8': '௮',
	      '9': '௯',
	      '0': '௦'
	    },
	        numberMap = {
	          '௧': '1',
	          '௨': '2',
	          '௩': '3',
	          '௪': '4',
	          '௫': '5',
	          '௬': '6',
	          '௭': '7',
	          '௮': '8',
	          '௯': '9',
	          '௦': '0'
	        };
	    var ta = moment.defineLocale('ta', {
	      months: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
	      monthsShort: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
	      weekdays: 'ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை'.split('_'),
	      weekdaysShort: 'ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி'.split('_'),
	      weekdaysMin: 'ஞா_தி_செ_பு_வி_வெ_ச'.split('_'),
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY, HH:mm',
	        LLLL: 'dddd, D MMMM YYYY, HH:mm'
	      },
	      calendar: {
	        sameDay: '[இன்று] LT',
	        nextDay: '[நாளை] LT',
	        nextWeek: 'dddd, LT',
	        lastDay: '[நேற்று] LT',
	        lastWeek: '[கடந்த வாரம்] dddd, LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: '%s இல்',
	        past: '%s முன்',
	        s: 'ஒரு சில விநாடிகள்',
	        m: 'ஒரு நிமிடம்',
	        mm: '%d நிமிடங்கள்',
	        h: 'ஒரு மணி நேரம்',
	        hh: '%d மணி நேரம்',
	        d: 'ஒரு நாள்',
	        dd: '%d நாட்கள்',
	        M: 'ஒரு மாதம்',
	        MM: '%d மாதங்கள்',
	        y: 'ஒரு வருடம்',
	        yy: '%d ஆண்டுகள்'
	      },
	      ordinalParse: /\d{1,2}வது/,
	      ordinal: function(number) {
	        return number + 'வது';
	      },
	      preparse: function(string) {
	        return string.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function(match) {
	          return numberMap[$traceurRuntime.toProperty(match)];
	        });
	      },
	      postformat: function(string) {
	        return string.replace(/\d/g, function(match) {
	          return symbolMap[$traceurRuntime.toProperty(match)];
	        });
	      },
	      meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
	      meridiem: function(hour, minute, isLower) {
	        if (hour < 2) {
	          return ' யாமம்';
	        } else if (hour < 6) {
	          return ' வைகறை';
	        } else if (hour < 10) {
	          return ' காலை';
	        } else if (hour < 14) {
	          return ' நண்பகல்';
	        } else if (hour < 18) {
	          return ' எற்பாடு';
	        } else if (hour < 22) {
	          return ' மாலை';
	        } else {
	          return ' யாமம்';
	        }
	      },
	      meridiemHour: function(hour, meridiem) {
	        if (hour === 12) {
	          hour = 0;
	        }
	        if (meridiem === 'யாமம்') {
	          return hour < 2 ? hour : hour + 12;
	        } else if (meridiem === 'வைகறை' || meridiem === 'காலை') {
	          return hour;
	        } else if (meridiem === 'நண்பகல்') {
	          return hour >= 10 ? hour : hour + 12;
	        } else {
	          return hour + 12;
	        }
	      },
	      week: {
	        dow: 0,
	        doy: 6
	      }
	    });
	    return ta;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var te = moment.defineLocale('te', {
	      months: 'జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్'.split('_'),
	      monthsShort: 'జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.'.split('_'),
	      monthsParseExact: true,
	      weekdays: 'ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం'.split('_'),
	      weekdaysShort: 'ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని'.split('_'),
	      weekdaysMin: 'ఆ_సో_మం_బు_గు_శు_శ'.split('_'),
	      longDateFormat: {
	        LT: 'A h:mm',
	        LTS: 'A h:mm:ss',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY, A h:mm',
	        LLLL: 'dddd, D MMMM YYYY, A h:mm'
	      },
	      calendar: {
	        sameDay: '[నేడు] LT',
	        nextDay: '[రేపు] LT',
	        nextWeek: 'dddd, LT',
	        lastDay: '[నిన్న] LT',
	        lastWeek: '[గత] dddd, LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: '%s లో',
	        past: '%s క్రితం',
	        s: 'కొన్ని క్షణాలు',
	        m: 'ఒక నిమిషం',
	        mm: '%d నిమిషాలు',
	        h: 'ఒక గంట',
	        hh: '%d గంటలు',
	        d: 'ఒక రోజు',
	        dd: '%d రోజులు',
	        M: 'ఒక నెల',
	        MM: '%d నెలలు',
	        y: 'ఒక సంవత్సరం',
	        yy: '%d సంవత్సరాలు'
	      },
	      ordinalParse: /\d{1,2}వ/,
	      ordinal: '%dవ',
	      meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
	      meridiemHour: function(hour, meridiem) {
	        if (hour === 12) {
	          hour = 0;
	        }
	        if (meridiem === 'రాత్రి') {
	          return hour < 4 ? hour : hour + 12;
	        } else if (meridiem === 'ఉదయం') {
	          return hour;
	        } else if (meridiem === 'మధ్యాహ్నం') {
	          return hour >= 10 ? hour : hour + 12;
	        } else if (meridiem === 'సాయంత్రం') {
	          return hour + 12;
	        }
	      },
	      meridiem: function(hour, minute, isLower) {
	        if (hour < 4) {
	          return 'రాత్రి';
	        } else if (hour < 10) {
	          return 'ఉదయం';
	        } else if (hour < 17) {
	          return 'మధ్యాహ్నం';
	        } else if (hour < 20) {
	          return 'సాయంత్రం';
	        } else {
	          return 'రాత్రి';
	        }
	      },
	      week: {
	        dow: 0,
	        doy: 6
	      }
	    });
	    return te;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var th = moment.defineLocale('th', {
	      months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
	      monthsShort: 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
	      monthsParseExact: true,
	      weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
	      weekdaysShort: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'),
	      weekdaysMin: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
	      weekdaysParseExact: true,
	      longDateFormat: {
	        LT: 'H:mm',
	        LTS: 'H:mm:ss',
	        L: 'YYYY/MM/DD',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY เวลา H:mm',
	        LLLL: 'วันddddที่ D MMMM YYYY เวลา H:mm'
	      },
	      meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
	      isPM: function(input) {
	        return input === 'หลังเที่ยง';
	      },
	      meridiem: function(hour, minute, isLower) {
	        if (hour < 12) {
	          return 'ก่อนเที่ยง';
	        } else {
	          return 'หลังเที่ยง';
	        }
	      },
	      calendar: {
	        sameDay: '[วันนี้ เวลา] LT',
	        nextDay: '[พรุ่งนี้ เวลา] LT',
	        nextWeek: 'dddd[หน้า เวลา] LT',
	        lastDay: '[เมื่อวานนี้ เวลา] LT',
	        lastWeek: '[วัน]dddd[ที่แล้ว เวลา] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'อีก %s',
	        past: '%sที่แล้ว',
	        s: 'ไม่กี่วินาที',
	        m: '1 นาที',
	        mm: '%d นาที',
	        h: '1 ชั่วโมง',
	        hh: '%d ชั่วโมง',
	        d: '1 วัน',
	        dd: '%d วัน',
	        M: '1 เดือน',
	        MM: '%d เดือน',
	        y: '1 ปี',
	        yy: '%d ปี'
	      }
	    });
	    return th;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var tl_ph = moment.defineLocale('tl-ph', {
	      months: 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
	      monthsShort: 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
	      weekdays: 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
	      weekdaysShort: 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
	      weekdaysMin: 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'MM/D/YYYY',
	        LL: 'MMMM D, YYYY',
	        LLL: 'MMMM D, YYYY HH:mm',
	        LLLL: 'dddd, MMMM DD, YYYY HH:mm'
	      },
	      calendar: {
	        sameDay: '[Ngayon sa] LT',
	        nextDay: '[Bukas sa] LT',
	        nextWeek: 'dddd [sa] LT',
	        lastDay: '[Kahapon sa] LT',
	        lastWeek: 'dddd [huling linggo] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'sa loob ng %s',
	        past: '%s ang nakalipas',
	        s: 'ilang segundo',
	        m: 'isang minuto',
	        mm: '%d minuto',
	        h: 'isang oras',
	        hh: '%d oras',
	        d: 'isang araw',
	        dd: '%d araw',
	        M: 'isang buwan',
	        MM: '%d buwan',
	        y: 'isang taon',
	        yy: '%d taon'
	      },
	      ordinalParse: /\d{1,2}/,
	      ordinal: function(number) {
	        return number;
	      },
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return tl_ph;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var numbersNouns = 'pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut'.split('_');
	    function translateFuture(output) {
	      var time = output;
	      time = (output.indexOf('jaj') !== -1) ? time.slice(0, -3) + 'leS' : (output.indexOf('jar') !== -1) ? time.slice(0, -3) + 'waQ' : (output.indexOf('DIS') !== -1) ? time.slice(0, -3) + 'nem' : time + ' pIq';
	      return time;
	    }
	    function translatePast(output) {
	      var time = output;
	      time = (output.indexOf('jaj') !== -1) ? time.slice(0, -3) + 'Hu’' : (output.indexOf('jar') !== -1) ? time.slice(0, -3) + 'wen' : (output.indexOf('DIS') !== -1) ? time.slice(0, -3) + 'ben' : time + ' ret';
	      return time;
	    }
	    function translate(number, withoutSuffix, string, isFuture) {
	      var numberNoun = numberAsNoun(number);
	      switch (string) {
	        case 'mm':
	          return numberNoun + ' tup';
	        case 'hh':
	          return numberNoun + ' rep';
	        case 'dd':
	          return numberNoun + ' jaj';
	        case 'MM':
	          return numberNoun + ' jar';
	        case 'yy':
	          return numberNoun + ' DIS';
	      }
	    }
	    function numberAsNoun(number) {
	      var hundred = Math.floor((number % 1000) / 100),
	          ten = Math.floor((number % 100) / 10),
	          one = number % 10,
	          word = '';
	      if (hundred > 0) {
	        word += numbersNouns[$traceurRuntime.toProperty(hundred)] + 'vatlh';
	      }
	      if (ten > 0) {
	        word += ((word !== '') ? ' ' : '') + numbersNouns[$traceurRuntime.toProperty(ten)] + 'maH';
	      }
	      if (one > 0) {
	        word += ((word !== '') ? ' ' : '') + numbersNouns[$traceurRuntime.toProperty(one)];
	      }
	      return (word === '') ? 'pagh' : word;
	    }
	    var tlh = moment.defineLocale('tlh', {
	      months: 'tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’'.split('_'),
	      monthsShort: 'jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’'.split('_'),
	      monthsParseExact: true,
	      weekdays: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
	      weekdaysShort: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
	      weekdaysMin: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD.MM.YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY HH:mm',
	        LLLL: 'dddd, D MMMM YYYY HH:mm'
	      },
	      calendar: {
	        sameDay: '[DaHjaj] LT',
	        nextDay: '[wa’leS] LT',
	        nextWeek: 'LLL',
	        lastDay: '[wa’Hu’] LT',
	        lastWeek: 'LLL',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: translateFuture,
	        past: translatePast,
	        s: 'puS lup',
	        m: 'wa’ tup',
	        mm: translate,
	        h: 'wa’ rep',
	        hh: translate,
	        d: 'wa’ jaj',
	        dd: translate,
	        M: 'wa’ jar',
	        MM: translate,
	        y: 'wa’ DIS',
	        yy: translate
	      },
	      ordinalParse: /\d{1,2}\./,
	      ordinal: '%d.',
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return tlh;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var suffixes = {
	      1: '\'inci',
	      5: '\'inci',
	      8: '\'inci',
	      70: '\'inci',
	      80: '\'inci',
	      2: '\'nci',
	      7: '\'nci',
	      20: '\'nci',
	      50: '\'nci',
	      3: '\'üncü',
	      4: '\'üncü',
	      100: '\'üncü',
	      6: '\'ncı',
	      9: '\'uncu',
	      10: '\'uncu',
	      30: '\'uncu',
	      60: '\'ıncı',
	      90: '\'ıncı'
	    };
	    var tr = moment.defineLocale('tr', {
	      months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
	      monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
	      weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
	      weekdaysShort: 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
	      weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD.MM.YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY HH:mm',
	        LLLL: 'dddd, D MMMM YYYY HH:mm'
	      },
	      calendar: {
	        sameDay: '[bugün saat] LT',
	        nextDay: '[yarın saat] LT',
	        nextWeek: '[haftaya] dddd [saat] LT',
	        lastDay: '[dün] LT',
	        lastWeek: '[geçen hafta] dddd [saat] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: '%s sonra',
	        past: '%s önce',
	        s: 'birkaç saniye',
	        m: 'bir dakika',
	        mm: '%d dakika',
	        h: 'bir saat',
	        hh: '%d saat',
	        d: 'bir gün',
	        dd: '%d gün',
	        M: 'bir ay',
	        MM: '%d ay',
	        y: 'bir yıl',
	        yy: '%d yıl'
	      },
	      ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
	      ordinal: function(number) {
	        if (number === 0) {
	          return number + '\'ıncı';
	        }
	        var a = number % 10,
	            b = number % 100 - a,
	            c = number >= 100 ? 100 : null;
	        return number + (suffixes[$traceurRuntime.toProperty(a)] || suffixes[$traceurRuntime.toProperty(b)] || suffixes[$traceurRuntime.toProperty(c)]);
	      },
	      week: {
	        dow: 1,
	        doy: 7
	      }
	    });
	    return tr;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var tzl = moment.defineLocale('tzl', {
	      months: 'Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar'.split('_'),
	      monthsShort: 'Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec'.split('_'),
	      weekdays: 'Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi'.split('_'),
	      weekdaysShort: 'Súl_Lún_Mai_Már_Xhú_Vié_Sát'.split('_'),
	      weekdaysMin: 'Sú_Lú_Ma_Má_Xh_Vi_Sá'.split('_'),
	      longDateFormat: {
	        LT: 'HH.mm',
	        LTS: 'HH.mm.ss',
	        L: 'DD.MM.YYYY',
	        LL: 'D. MMMM [dallas] YYYY',
	        LLL: 'D. MMMM [dallas] YYYY HH.mm',
	        LLLL: 'dddd, [li] D. MMMM [dallas] YYYY HH.mm'
	      },
	      meridiemParse: /d\'o|d\'a/i,
	      isPM: function(input) {
	        return 'd\'o' === input.toLowerCase();
	      },
	      meridiem: function(hours, minutes, isLower) {
	        if (hours > 11) {
	          return isLower ? 'd\'o' : 'D\'O';
	        } else {
	          return isLower ? 'd\'a' : 'D\'A';
	        }
	      },
	      calendar: {
	        sameDay: '[oxhi à] LT',
	        nextDay: '[demà à] LT',
	        nextWeek: 'dddd [à] LT',
	        lastDay: '[ieiri à] LT',
	        lastWeek: '[sür el] dddd [lasteu à] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'osprei %s',
	        past: 'ja%s',
	        s: processRelativeTime,
	        m: processRelativeTime,
	        mm: processRelativeTime,
	        h: processRelativeTime,
	        hh: processRelativeTime,
	        d: processRelativeTime,
	        dd: processRelativeTime,
	        M: processRelativeTime,
	        MM: processRelativeTime,
	        y: processRelativeTime,
	        yy: processRelativeTime
	      },
	      ordinalParse: /\d{1,2}\./,
	      ordinal: '%d.',
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	      var format = {
	        's': ['viensas secunds', '\'iensas secunds'],
	        'm': ['\'n míut', '\'iens míut'],
	        'mm': [number + ' míuts', '' + number + ' míuts'],
	        'h': ['\'n þora', '\'iensa þora'],
	        'hh': [number + ' þoras', '' + number + ' þoras'],
	        'd': ['\'n ziua', '\'iensa ziua'],
	        'dd': [number + ' ziuas', '' + number + ' ziuas'],
	        'M': ['\'n mes', '\'iens mes'],
	        'MM': [number + ' mesen', '' + number + ' mesen'],
	        'y': ['\'n ar', '\'iens ar'],
	        'yy': [number + ' ars', '' + number + ' ars']
	      };
	      return isFuture ? format[$traceurRuntime.toProperty(key)][0] : (withoutSuffix ? format[$traceurRuntime.toProperty(key)][0] : format[$traceurRuntime.toProperty(key)][1]);
	    }
	    return tzl;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var tzm = moment.defineLocale('tzm', {
	      months: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
	      monthsShort: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
	      weekdays: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
	      weekdaysShort: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
	      weekdaysMin: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY HH:mm',
	        LLLL: 'dddd D MMMM YYYY HH:mm'
	      },
	      calendar: {
	        sameDay: '[ⴰⵙⴷⵅ ⴴ] LT',
	        nextDay: '[ⴰⵙⴽⴰ ⴴ] LT',
	        nextWeek: 'dddd [ⴴ] LT',
	        lastDay: '[ⴰⵚⴰⵏⵜ ⴴ] LT',
	        lastWeek: 'dddd [ⴴ] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s',
	        past: 'ⵢⴰⵏ %s',
	        s: 'ⵉⵎⵉⴽ',
	        m: 'ⵎⵉⵏⵓⴺ',
	        mm: '%d ⵎⵉⵏⵓⴺ',
	        h: 'ⵙⴰⵄⴰ',
	        hh: '%d ⵜⴰⵙⵙⴰⵄⵉⵏ',
	        d: 'ⴰⵙⵙ',
	        dd: '%d oⵙⵙⴰⵏ',
	        M: 'ⴰⵢoⵓⵔ',
	        MM: '%d ⵉⵢⵢⵉⵔⵏ',
	        y: 'ⴰⵙⴳⴰⵙ',
	        yy: '%d ⵉⵙⴳⴰⵙⵏ'
	      },
	      week: {
	        dow: 6,
	        doy: 12
	      }
	    });
	    return tzm;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var tzm_latn = moment.defineLocale('tzm-latn', {
	      months: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
	      monthsShort: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
	      weekdays: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
	      weekdaysShort: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
	      weekdaysMin: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY HH:mm',
	        LLLL: 'dddd D MMMM YYYY HH:mm'
	      },
	      calendar: {
	        sameDay: '[asdkh g] LT',
	        nextDay: '[aska g] LT',
	        nextWeek: 'dddd [g] LT',
	        lastDay: '[assant g] LT',
	        lastWeek: 'dddd [g] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'dadkh s yan %s',
	        past: 'yan %s',
	        s: 'imik',
	        m: 'minuḍ',
	        mm: '%d minuḍ',
	        h: 'saɛa',
	        hh: '%d tassaɛin',
	        d: 'ass',
	        dd: '%d ossan',
	        M: 'ayowr',
	        MM: '%d iyyirn',
	        y: 'asgas',
	        yy: '%d isgasn'
	      },
	      week: {
	        dow: 6,
	        doy: 12
	      }
	    });
	    return tzm_latn;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    function plural(word, num) {
	      var forms = word.split('_');
	      return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
	    }
	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	      var format = {
	        'mm': withoutSuffix ? 'хвилина_хвилини_хвилин' : 'хвилину_хвилини_хвилин',
	        'hh': withoutSuffix ? 'година_години_годин' : 'годину_години_годин',
	        'dd': 'день_дні_днів',
	        'MM': 'місяць_місяці_місяців',
	        'yy': 'рік_роки_років'
	      };
	      if (key === 'm') {
	        return withoutSuffix ? 'хвилина' : 'хвилину';
	      } else if (key === 'h') {
	        return withoutSuffix ? 'година' : 'годину';
	      } else {
	        return number + ' ' + plural(format[$traceurRuntime.toProperty(key)], +number);
	      }
	    }
	    function weekdaysCaseReplace(m, format) {
	      var weekdays = {
	        'nominative': 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
	        'accusative': 'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split('_'),
	        'genitive': 'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split('_')
	      },
	          nounCase = (/(\[[ВвУу]\]) ?dddd/).test(format) ? 'accusative' : ((/\[?(?:минулої|наступної)? ?\] ?dddd/).test(format) ? 'genitive' : 'nominative');
	      return weekdays[$traceurRuntime.toProperty(nounCase)][$traceurRuntime.toProperty(m.day())];
	    }
	    function processHoursFunction(str) {
	      return function() {
	        return str + 'о' + (this.hours() === 11 ? 'б' : '') + '] LT';
	      };
	    }
	    var uk = moment.defineLocale('uk', {
	      months: {
	        'format': 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_'),
	        'standalone': 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_')
	      },
	      monthsShort: 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
	      weekdays: weekdaysCaseReplace,
	      weekdaysShort: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
	      weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD.MM.YYYY',
	        LL: 'D MMMM YYYY р.',
	        LLL: 'D MMMM YYYY р., HH:mm',
	        LLLL: 'dddd, D MMMM YYYY р., HH:mm'
	      },
	      calendar: {
	        sameDay: processHoursFunction('[Сьогодні '),
	        nextDay: processHoursFunction('[Завтра '),
	        lastDay: processHoursFunction('[Вчора '),
	        nextWeek: processHoursFunction('[У] dddd ['),
	        lastWeek: function() {
	          switch (this.day()) {
	            case 0:
	            case 3:
	            case 5:
	            case 6:
	              return processHoursFunction('[Минулої] dddd [').call(this);
	            case 1:
	            case 2:
	            case 4:
	              return processHoursFunction('[Минулого] dddd [').call(this);
	          }
	        },
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'за %s',
	        past: '%s тому',
	        s: 'декілька секунд',
	        m: relativeTimeWithPlural,
	        mm: relativeTimeWithPlural,
	        h: 'годину',
	        hh: relativeTimeWithPlural,
	        d: 'день',
	        dd: relativeTimeWithPlural,
	        M: 'місяць',
	        MM: relativeTimeWithPlural,
	        y: 'рік',
	        yy: relativeTimeWithPlural
	      },
	      meridiemParse: /ночі|ранку|дня|вечора/,
	      isPM: function(input) {
	        return /^(дня|вечора)$/.test(input);
	      },
	      meridiem: function(hour, minute, isLower) {
	        if (hour < 4) {
	          return 'ночі';
	        } else if (hour < 12) {
	          return 'ранку';
	        } else if (hour < 17) {
	          return 'дня';
	        } else {
	          return 'вечора';
	        }
	      },
	      ordinalParse: /\d{1,2}-(й|го)/,
	      ordinal: function(number, period) {
	        switch (period) {
	          case 'M':
	          case 'd':
	          case 'DDD':
	          case 'w':
	          case 'W':
	            return number + '-й';
	          case 'D':
	            return number + '-го';
	          default:
	            return number;
	        }
	      },
	      week: {
	        dow: 1,
	        doy: 7
	      }
	    });
	    return uk;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var uz = moment.defineLocale('uz', {
	      months: 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
	      monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
	      weekdays: 'Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба'.split('_'),
	      weekdaysShort: 'Якш_Душ_Сеш_Чор_Пай_Жум_Шан'.split('_'),
	      weekdaysMin: 'Як_Ду_Се_Чо_Па_Жу_Ша'.split('_'),
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY HH:mm',
	        LLLL: 'D MMMM YYYY, dddd HH:mm'
	      },
	      calendar: {
	        sameDay: '[Бугун соат] LT [да]',
	        nextDay: '[Эртага] LT [да]',
	        nextWeek: 'dddd [куни соат] LT [да]',
	        lastDay: '[Кеча соат] LT [да]',
	        lastWeek: '[Утган] dddd [куни соат] LT [да]',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'Якин %s ичида',
	        past: 'Бир неча %s олдин',
	        s: 'фурсат',
	        m: 'бир дакика',
	        mm: '%d дакика',
	        h: 'бир соат',
	        hh: '%d соат',
	        d: 'бир кун',
	        dd: '%d кун',
	        M: 'бир ой',
	        MM: '%d ой',
	        y: 'бир йил',
	        yy: '%d йил'
	      },
	      week: {
	        dow: 1,
	        doy: 7
	      }
	    });
	    return uz;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var vi = moment.defineLocale('vi', {
	      months: 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split('_'),
	      monthsShort: 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
	      monthsParseExact: true,
	      weekdays: 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),
	      weekdaysShort: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
	      weekdaysMin: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
	      weekdaysParseExact: true,
	      meridiemParse: /sa|ch/i,
	      isPM: function(input) {
	        return /^ch$/i.test(input);
	      },
	      meridiem: function(hours, minutes, isLower) {
	        if (hours < 12) {
	          return isLower ? 'sa' : 'SA';
	        } else {
	          return isLower ? 'ch' : 'CH';
	        }
	      },
	      longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM [năm] YYYY',
	        LLL: 'D MMMM [năm] YYYY HH:mm',
	        LLLL: 'dddd, D MMMM [năm] YYYY HH:mm',
	        l: 'DD/M/YYYY',
	        ll: 'D MMM YYYY',
	        lll: 'D MMM YYYY HH:mm',
	        llll: 'ddd, D MMM YYYY HH:mm'
	      },
	      calendar: {
	        sameDay: '[Hôm nay lúc] LT',
	        nextDay: '[Ngày mai lúc] LT',
	        nextWeek: 'dddd [tuần tới lúc] LT',
	        lastDay: '[Hôm qua lúc] LT',
	        lastWeek: 'dddd [tuần rồi lúc] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: '%s tới',
	        past: '%s trước',
	        s: 'vài giây',
	        m: 'một phút',
	        mm: '%d phút',
	        h: 'một giờ',
	        hh: '%d giờ',
	        d: 'một ngày',
	        dd: '%d ngày',
	        M: 'một tháng',
	        MM: '%d tháng',
	        y: 'một năm',
	        yy: '%d năm'
	      },
	      ordinalParse: /\d{1,2}/,
	      ordinal: function(number) {
	        return number;
	      },
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return vi;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var x_pseudo = moment.defineLocale('x-pseudo', {
	      months: 'J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér'.split('_'),
	      monthsShort: 'J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc'.split('_'),
	      monthsParseExact: true,
	      weekdays: 'S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý'.split('_'),
	      weekdaysShort: 'S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát'.split('_'),
	      weekdaysMin: 'S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá'.split('_'),
	      weekdaysParseExact: true,
	      longDateFormat: {
	        LT: 'HH:mm',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY HH:mm',
	        LLLL: 'dddd, D MMMM YYYY HH:mm'
	      },
	      calendar: {
	        sameDay: '[T~ódá~ý át] LT',
	        nextDay: '[T~ómó~rró~w át] LT',
	        nextWeek: 'dddd [át] LT',
	        lastDay: '[Ý~ést~érdá~ý át] LT',
	        lastWeek: '[L~ást] dddd [át] LT',
	        sameElse: 'L'
	      },
	      relativeTime: {
	        future: 'í~ñ %s',
	        past: '%s á~gó',
	        s: 'á ~féw ~sécó~ñds',
	        m: 'á ~míñ~úté',
	        mm: '%d m~íñú~tés',
	        h: 'á~ñ hó~úr',
	        hh: '%d h~óúrs',
	        d: 'á ~dáý',
	        dd: '%d d~áýs',
	        M: 'á ~móñ~th',
	        MM: '%d m~óñt~hs',
	        y: 'á ~ýéár',
	        yy: '%d ý~éárs'
	      },
	      ordinalParse: /\d{1,2}(th|st|nd|rd)/,
	      ordinal: function(number) {
	        var b = number % 10,
	            output = (~~(number % 100 / 10) === 1) ? 'th' : (b === 1) ? 'st' : (b === 2) ? 'nd' : (b === 3) ? 'rd' : 'th';
	        return number + output;
	      },
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return x_pseudo;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var zh_cn = moment.defineLocale('zh-cn', {
	      months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
	      monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	      weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
	      weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
	      weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
	      longDateFormat: {
	        LT: 'Ah点mm分',
	        LTS: 'Ah点m分s秒',
	        L: 'YYYY-MM-DD',
	        LL: 'YYYY年MMMD日',
	        LLL: 'YYYY年MMMD日Ah点mm分',
	        LLLL: 'YYYY年MMMD日ddddAh点mm分',
	        l: 'YYYY-MM-DD',
	        ll: 'YYYY年MMMD日',
	        lll: 'YYYY年MMMD日Ah点mm分',
	        llll: 'YYYY年MMMD日ddddAh点mm分'
	      },
	      meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
	      meridiemHour: function(hour, meridiem) {
	        if (hour === 12) {
	          hour = 0;
	        }
	        if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
	          return hour;
	        } else if (meridiem === '下午' || meridiem === '晚上') {
	          return hour + 12;
	        } else {
	          return hour >= 11 ? hour : hour + 12;
	        }
	      },
	      meridiem: function(hour, minute, isLower) {
	        var hm = hour * 100 + minute;
	        if (hm < 600) {
	          return '凌晨';
	        } else if (hm < 900) {
	          return '早上';
	        } else if (hm < 1130) {
	          return '上午';
	        } else if (hm < 1230) {
	          return '中午';
	        } else if (hm < 1800) {
	          return '下午';
	        } else {
	          return '晚上';
	        }
	      },
	      calendar: {
	        sameDay: function() {
	          return this.minutes() === 0 ? '[今天]Ah[点整]' : '[今天]LT';
	        },
	        nextDay: function() {
	          return this.minutes() === 0 ? '[明天]Ah[点整]' : '[明天]LT';
	        },
	        lastDay: function() {
	          return this.minutes() === 0 ? '[昨天]Ah[点整]' : '[昨天]LT';
	        },
	        nextWeek: function() {
	          var startOfWeek,
	              prefix;
	          startOfWeek = moment().startOf('week');
	          prefix = this.diff(startOfWeek, 'days') >= 7 ? '[下]' : '[本]';
	          return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
	        },
	        lastWeek: function() {
	          var startOfWeek,
	              prefix;
	          startOfWeek = moment().startOf('week');
	          prefix = this.unix() < startOfWeek.unix() ? '[上]' : '[本]';
	          return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
	        },
	        sameElse: 'LL'
	      },
	      ordinalParse: /\d{1,2}(日|月|周)/,
	      ordinal: function(number, period) {
	        switch (period) {
	          case 'd':
	          case 'D':
	          case 'DDD':
	            return number + '日';
	          case 'M':
	            return number + '月';
	          case 'w':
	          case 'W':
	            return number + '周';
	          default:
	            return number;
	        }
	      },
	      relativeTime: {
	        future: '%s内',
	        past: '%s前',
	        s: '几秒',
	        m: '1 分钟',
	        mm: '%d 分钟',
	        h: '1 小时',
	        hh: '%d 小时',
	        d: '1 天',
	        dd: '%d 天',
	        M: '1 个月',
	        MM: '%d 个月',
	        y: '1 年',
	        yy: '%d 年'
	      },
	      week: {
	        dow: 1,
	        doy: 4
	      }
	    });
	    return zh_cn;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var zh_hk = moment.defineLocale('zh-hk', {
	      months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
	      monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	      weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
	      weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
	      weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
	      longDateFormat: {
	        LT: 'Ah點mm分',
	        LTS: 'Ah點m分s秒',
	        L: 'YYYY年MMMD日',
	        LL: 'YYYY年MMMD日',
	        LLL: 'YYYY年MMMD日Ah點mm分',
	        LLLL: 'YYYY年MMMD日ddddAh點mm分',
	        l: 'YYYY年MMMD日',
	        ll: 'YYYY年MMMD日',
	        lll: 'YYYY年MMMD日Ah點mm分',
	        llll: 'YYYY年MMMD日ddddAh點mm分'
	      },
	      meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
	      meridiemHour: function(hour, meridiem) {
	        if (hour === 12) {
	          hour = 0;
	        }
	        if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
	          return hour;
	        } else if (meridiem === '中午') {
	          return hour >= 11 ? hour : hour + 12;
	        } else if (meridiem === '下午' || meridiem === '晚上') {
	          return hour + 12;
	        }
	      },
	      meridiem: function(hour, minute, isLower) {
	        var hm = hour * 100 + minute;
	        if (hm < 600) {
	          return '凌晨';
	        } else if (hm < 900) {
	          return '早上';
	        } else if (hm < 1130) {
	          return '上午';
	        } else if (hm < 1230) {
	          return '中午';
	        } else if (hm < 1800) {
	          return '下午';
	        } else {
	          return '晚上';
	        }
	      },
	      calendar: {
	        sameDay: '[今天]LT',
	        nextDay: '[明天]LT',
	        nextWeek: '[下]ddddLT',
	        lastDay: '[昨天]LT',
	        lastWeek: '[上]ddddLT',
	        sameElse: 'L'
	      },
	      ordinalParse: /\d{1,2}(日|月|週)/,
	      ordinal: function(number, period) {
	        switch (period) {
	          case 'd':
	          case 'D':
	          case 'DDD':
	            return number + '日';
	          case 'M':
	            return number + '月';
	          case 'w':
	          case 'W':
	            return number + '週';
	          default:
	            return number;
	        }
	      },
	      relativeTime: {
	        future: '%s內',
	        past: '%s前',
	        s: '幾秒',
	        m: '1 分鐘',
	        mm: '%d 分鐘',
	        h: '1 小時',
	        hh: '%d 小時',
	        d: '1 天',
	        dd: '%d 天',
	        M: '1 個月',
	        MM: '%d 個月',
	        y: '1 年',
	        yy: '%d 年'
	      }
	    });
	    return zh_hk;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function() {
	  "use strict";
	  ;
	  (function(global, factory) {
	    ( false ? 'undefined' : $traceurRuntime.typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(47)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(47)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.moment);
	  }(this, function(moment) {
	    'use strict';
	    var zh_tw = moment.defineLocale('zh-tw', {
	      months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
	      monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	      weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
	      weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
	      weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
	      longDateFormat: {
	        LT: 'Ah點mm分',
	        LTS: 'Ah點m分s秒',
	        L: 'YYYY年MMMD日',
	        LL: 'YYYY年MMMD日',
	        LLL: 'YYYY年MMMD日Ah點mm分',
	        LLLL: 'YYYY年MMMD日ddddAh點mm分',
	        l: 'YYYY年MMMD日',
	        ll: 'YYYY年MMMD日',
	        lll: 'YYYY年MMMD日Ah點mm分',
	        llll: 'YYYY年MMMD日ddddAh點mm分'
	      },
	      meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
	      meridiemHour: function(hour, meridiem) {
	        if (hour === 12) {
	          hour = 0;
	        }
	        if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
	          return hour;
	        } else if (meridiem === '中午') {
	          return hour >= 11 ? hour : hour + 12;
	        } else if (meridiem === '下午' || meridiem === '晚上') {
	          return hour + 12;
	        }
	      },
	      meridiem: function(hour, minute, isLower) {
	        var hm = hour * 100 + minute;
	        if (hm < 600) {
	          return '凌晨';
	        } else if (hm < 900) {
	          return '早上';
	        } else if (hm < 1130) {
	          return '上午';
	        } else if (hm < 1230) {
	          return '中午';
	        } else if (hm < 1800) {
	          return '下午';
	        } else {
	          return '晚上';
	        }
	      },
	      calendar: {
	        sameDay: '[今天]LT',
	        nextDay: '[明天]LT',
	        nextWeek: '[下]ddddLT',
	        lastDay: '[昨天]LT',
	        lastWeek: '[上]ddddLT',
	        sameElse: 'L'
	      },
	      ordinalParse: /\d{1,2}(日|月|週)/,
	      ordinal: function(number, period) {
	        switch (period) {
	          case 'd':
	          case 'D':
	          case 'DDD':
	            return number + '日';
	          case 'M':
	            return number + '月';
	          case 'w':
	          case 'W':
	            return number + '週';
	          default:
	            return number;
	        }
	      },
	      relativeTime: {
	        future: '%s內',
	        past: '%s前',
	        s: '幾秒',
	        m: '1 分鐘',
	        mm: '%d 分鐘',
	        h: '1 小時',
	        hh: '%d 小時',
	        d: '1 天',
	        dd: '%d 天',
	        M: '1 個月',
	        MM: '%d 個月',
	        y: '1 年',
	        yy: '%d 年'
	      }
	    });
	    return zh_tw;
	  }));
	  return {};
	}.call(Reflect.global);


/***/ },
/* 153 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	module.exports = function(Chart) {
	  var helpers = Chart.helpers;
	  Chart.defaults.bar = {
	    hover: {mode: 'label'},
	    scales: {
	      xAxes: [{
	        type: 'category',
	        categoryPercentage: 0.8,
	        barPercentage: 0.9,
	        gridLines: {offsetGridLines: true}
	      }],
	      yAxes: [{type: 'linear'}]
	    }
	  };
	  Chart.controllers.bar = Chart.DatasetController.extend({
	    dataElementType: Chart.elements.Rectangle,
	    initialize: function(chart, datasetIndex) {
	      Chart.DatasetController.prototype.initialize.call(this, chart, datasetIndex);
	      this.getMeta().bar = true;
	    },
	    getBarCount: function() {
	      var me = this;
	      var barCount = 0;
	      helpers.each(me.chart.data.datasets, function(dataset, datasetIndex) {
	        var meta = me.chart.getDatasetMeta(datasetIndex);
	        if (meta.bar && me.chart.isDatasetVisible(datasetIndex)) {
	          ++barCount;
	        }
	      }, me);
	      return barCount;
	    },
	    update: function(reset) {
	      var me = this;
	      helpers.each(me.getMeta().data, function(rectangle, index) {
	        me.updateElement(rectangle, index, reset);
	      }, me);
	    },
	    updateElement: function(rectangle, index, reset) {
	      var me = this;
	      var meta = me.getMeta();
	      var xScale = me.getScaleForId(meta.xAxisID);
	      var yScale = me.getScaleForId(meta.yAxisID);
	      var scaleBase = yScale.getBasePixel();
	      var rectangleElementOptions = me.chart.options.elements.rectangle;
	      var custom = rectangle.custom || {};
	      var dataset = me.getDataset();
	      helpers.extend(rectangle, {
	        _xScale: xScale,
	        _yScale: yScale,
	        _datasetIndex: me.index,
	        _index: index,
	        _model: {
	          x: me.calculateBarX(index, me.index),
	          y: reset ? scaleBase : me.calculateBarY(index, me.index),
	          label: me.chart.data.labels[$traceurRuntime.toProperty(index)],
	          datasetLabel: dataset.label,
	          base: reset ? scaleBase : me.calculateBarBase(me.index, index),
	          width: me.calculateBarWidth(index),
	          backgroundColor: custom.backgroundColor ? custom.backgroundColor : helpers.getValueAtIndexOrDefault(dataset.backgroundColor, index, rectangleElementOptions.backgroundColor),
	          borderSkipped: custom.borderSkipped ? custom.borderSkipped : rectangleElementOptions.borderSkipped,
	          borderColor: custom.borderColor ? custom.borderColor : helpers.getValueAtIndexOrDefault(dataset.borderColor, index, rectangleElementOptions.borderColor),
	          borderWidth: custom.borderWidth ? custom.borderWidth : helpers.getValueAtIndexOrDefault(dataset.borderWidth, index, rectangleElementOptions.borderWidth)
	        }
	      });
	      rectangle.pivot();
	    },
	    calculateBarBase: function(datasetIndex, index) {
	      var me = this;
	      var meta = me.getMeta();
	      var yScale = me.getScaleForId(meta.yAxisID);
	      var base = 0;
	      if (yScale.options.stacked) {
	        var chart = me.chart;
	        var datasets = chart.data.datasets;
	        var value = Number(datasets[$traceurRuntime.toProperty(datasetIndex)].data[$traceurRuntime.toProperty(index)]);
	        for (var i = 0; i < datasetIndex; i++) {
	          var currentDs = datasets[$traceurRuntime.toProperty(i)];
	          var currentDsMeta = chart.getDatasetMeta(i);
	          if (currentDsMeta.bar && currentDsMeta.yAxisID === yScale.id && chart.isDatasetVisible(i)) {
	            var currentVal = Number(currentDs.data[$traceurRuntime.toProperty(index)]);
	            base += value < 0 ? Math.min(currentVal, 0) : Math.max(currentVal, 0);
	          }
	        }
	        return yScale.getPixelForValue(base);
	      }
	      return yScale.getBasePixel();
	    },
	    getRuler: function(index) {
	      var me = this;
	      var meta = me.getMeta();
	      var xScale = me.getScaleForId(meta.xAxisID);
	      var datasetCount = me.getBarCount();
	      var tickWidth;
	      if (xScale.options.type === 'category') {
	        tickWidth = xScale.getPixelForTick(index + 1) - xScale.getPixelForTick(index);
	      } else {
	        tickWidth = xScale.width / xScale.ticks.length;
	      }
	      var categoryWidth = tickWidth * xScale.options.categoryPercentage;
	      var categorySpacing = (tickWidth - (tickWidth * xScale.options.categoryPercentage)) / 2;
	      var fullBarWidth = categoryWidth / datasetCount;
	      if (xScale.ticks.length !== me.chart.data.labels.length) {
	        var perc = xScale.ticks.length / me.chart.data.labels.length;
	        fullBarWidth = fullBarWidth * perc;
	      }
	      var barWidth = fullBarWidth * xScale.options.barPercentage;
	      var barSpacing = fullBarWidth - (fullBarWidth * xScale.options.barPercentage);
	      return {
	        datasetCount: datasetCount,
	        tickWidth: tickWidth,
	        categoryWidth: categoryWidth,
	        categorySpacing: categorySpacing,
	        fullBarWidth: fullBarWidth,
	        barWidth: barWidth,
	        barSpacing: barSpacing
	      };
	    },
	    calculateBarWidth: function(index) {
	      var xScale = this.getScaleForId(this.getMeta().xAxisID);
	      if (xScale.options.barThickness) {
	        return xScale.options.barThickness;
	      }
	      var ruler = this.getRuler(index);
	      return xScale.options.stacked ? ruler.categoryWidth : ruler.barWidth;
	    },
	    getBarIndex: function(datasetIndex) {
	      var barIndex = 0;
	      var meta,
	          j;
	      for (j = 0; j < datasetIndex; ++j) {
	        meta = this.chart.getDatasetMeta(j);
	        if (meta.bar && this.chart.isDatasetVisible(j)) {
	          ++barIndex;
	        }
	      }
	      return barIndex;
	    },
	    calculateBarX: function(index, datasetIndex) {
	      var me = this;
	      var meta = me.getMeta();
	      var xScale = me.getScaleForId(meta.xAxisID);
	      var barIndex = me.getBarIndex(datasetIndex);
	      var ruler = me.getRuler(index);
	      var leftTick = xScale.getPixelForValue(null, index, datasetIndex, me.chart.isCombo);
	      leftTick -= me.chart.isCombo ? (ruler.tickWidth / 2) : 0;
	      if (xScale.options.stacked) {
	        return leftTick + (ruler.categoryWidth / 2) + ruler.categorySpacing;
	      }
	      return leftTick + (ruler.barWidth / 2) + ruler.categorySpacing + (ruler.barWidth * barIndex) + (ruler.barSpacing / 2) + (ruler.barSpacing * barIndex);
	    },
	    calculateBarY: function(index, datasetIndex) {
	      var me = this;
	      var meta = me.getMeta();
	      var yScale = me.getScaleForId(meta.yAxisID);
	      var value = Number(me.getDataset().data[$traceurRuntime.toProperty(index)]);
	      if (yScale.options.stacked) {
	        var sumPos = 0,
	            sumNeg = 0;
	        for (var i = 0; i < datasetIndex; i++) {
	          var ds = me.chart.data.datasets[$traceurRuntime.toProperty(i)];
	          var dsMeta = me.chart.getDatasetMeta(i);
	          if (dsMeta.bar && dsMeta.yAxisID === yScale.id && me.chart.isDatasetVisible(i)) {
	            var stackedVal = Number(ds.data[$traceurRuntime.toProperty(index)]);
	            if (stackedVal < 0) {
	              sumNeg += stackedVal || 0;
	            } else {
	              sumPos += stackedVal || 0;
	            }
	          }
	        }
	        if (value < 0) {
	          return yScale.getPixelForValue(sumNeg + value);
	        }
	        return yScale.getPixelForValue(sumPos + value);
	      }
	      return yScale.getPixelForValue(value);
	    },
	    draw: function(ease) {
	      var me = this;
	      var easingDecimal = ease || 1;
	      helpers.each(me.getMeta().data, function(rectangle, index) {
	        var d = me.getDataset().data[$traceurRuntime.toProperty(index)];
	        if (d !== null && d !== undefined && !isNaN(d)) {
	          rectangle.transition(easingDecimal).draw();
	        }
	      }, me);
	    },
	    setHoverStyle: function(rectangle) {
	      var dataset = this.chart.data.datasets[$traceurRuntime.toProperty(rectangle._datasetIndex)];
	      var index = rectangle._index;
	      var custom = rectangle.custom || {};
	      var model = rectangle._model;
	      model.backgroundColor = custom.hoverBackgroundColor ? custom.hoverBackgroundColor : helpers.getValueAtIndexOrDefault(dataset.hoverBackgroundColor, index, helpers.getHoverColor(model.backgroundColor));
	      model.borderColor = custom.hoverBorderColor ? custom.hoverBorderColor : helpers.getValueAtIndexOrDefault(dataset.hoverBorderColor, index, helpers.getHoverColor(model.borderColor));
	      model.borderWidth = custom.hoverBorderWidth ? custom.hoverBorderWidth : helpers.getValueAtIndexOrDefault(dataset.hoverBorderWidth, index, model.borderWidth);
	    },
	    removeHoverStyle: function(rectangle) {
	      var dataset = this.chart.data.datasets[$traceurRuntime.toProperty(rectangle._datasetIndex)];
	      var index = rectangle._index;
	      var custom = rectangle.custom || {};
	      var model = rectangle._model;
	      var rectangleElementOptions = this.chart.options.elements.rectangle;
	      model.backgroundColor = custom.backgroundColor ? custom.backgroundColor : helpers.getValueAtIndexOrDefault(dataset.backgroundColor, index, rectangleElementOptions.backgroundColor);
	      model.borderColor = custom.borderColor ? custom.borderColor : helpers.getValueAtIndexOrDefault(dataset.borderColor, index, rectangleElementOptions.borderColor);
	      model.borderWidth = custom.borderWidth ? custom.borderWidth : helpers.getValueAtIndexOrDefault(dataset.borderWidth, index, rectangleElementOptions.borderWidth);
	    }
	  });
	  Chart.defaults.horizontalBar = {
	    hover: {mode: 'label'},
	    scales: {
	      xAxes: [{
	        type: 'linear',
	        position: 'bottom'
	      }],
	      yAxes: [{
	        position: 'left',
	        type: 'category',
	        categoryPercentage: 0.8,
	        barPercentage: 0.9,
	        gridLines: {offsetGridLines: true}
	      }]
	    },
	    elements: {rectangle: {borderSkipped: 'left'}},
	    tooltips: {callbacks: {
	        title: function(tooltipItems, data) {
	          var title = '';
	          if (tooltipItems.length > 0) {
	            if (tooltipItems[0].yLabel) {
	              title = tooltipItems[0].yLabel;
	            } else if (data.labels.length > 0 && tooltipItems[0].index < data.labels.length) {
	              title = data.labels[$traceurRuntime.toProperty(tooltipItems[0].index)];
	            }
	          }
	          return title;
	        },
	        label: function(tooltipItem, data) {
	          var datasetLabel = data.datasets[$traceurRuntime.toProperty(tooltipItem.datasetIndex)].label || '';
	          return datasetLabel + ': ' + tooltipItem.xLabel;
	        }
	      }}
	  };
	  Chart.controllers.horizontalBar = Chart.controllers.bar.extend({
	    updateElement: function(rectangle, index, reset) {
	      var me = this;
	      var meta = me.getMeta();
	      var xScale = me.getScaleForId(meta.xAxisID);
	      var yScale = me.getScaleForId(meta.yAxisID);
	      var scaleBase = xScale.getBasePixel();
	      var custom = rectangle.custom || {};
	      var dataset = me.getDataset();
	      var rectangleElementOptions = me.chart.options.elements.rectangle;
	      helpers.extend(rectangle, {
	        _xScale: xScale,
	        _yScale: yScale,
	        _datasetIndex: me.index,
	        _index: index,
	        _model: {
	          x: reset ? scaleBase : me.calculateBarX(index, me.index),
	          y: me.calculateBarY(index, me.index),
	          label: me.chart.data.labels[$traceurRuntime.toProperty(index)],
	          datasetLabel: dataset.label,
	          base: reset ? scaleBase : me.calculateBarBase(me.index, index),
	          height: me.calculateBarHeight(index),
	          backgroundColor: custom.backgroundColor ? custom.backgroundColor : helpers.getValueAtIndexOrDefault(dataset.backgroundColor, index, rectangleElementOptions.backgroundColor),
	          borderSkipped: custom.borderSkipped ? custom.borderSkipped : rectangleElementOptions.borderSkipped,
	          borderColor: custom.borderColor ? custom.borderColor : helpers.getValueAtIndexOrDefault(dataset.borderColor, index, rectangleElementOptions.borderColor),
	          borderWidth: custom.borderWidth ? custom.borderWidth : helpers.getValueAtIndexOrDefault(dataset.borderWidth, index, rectangleElementOptions.borderWidth)
	        },
	        draw: function() {
	          var ctx = this._chart.ctx;
	          var vm = this._view;
	          var halfHeight = vm.height / 2,
	              topY = vm.y - halfHeight,
	              bottomY = vm.y + halfHeight,
	              right = vm.base - (vm.base - vm.x),
	              halfStroke = vm.borderWidth / 2;
	          if (vm.borderWidth) {
	            topY += halfStroke;
	            bottomY -= halfStroke;
	            right += halfStroke;
	          }
	          ctx.beginPath();
	          ctx.fillStyle = vm.backgroundColor;
	          ctx.strokeStyle = vm.borderColor;
	          ctx.lineWidth = vm.borderWidth;
	          var corners = [[vm.base, bottomY], [vm.base, topY], [right, topY], [right, bottomY]];
	          var borders = ['bottom', 'left', 'top', 'right'];
	          var startCorner = borders.indexOf(vm.borderSkipped, 0);
	          if (startCorner === -1) {
	            startCorner = 0;
	          }
	          function cornerAt(cornerIndex) {
	            return corners[$traceurRuntime.toProperty((startCorner + cornerIndex) % 4)];
	          }
	          ctx.moveTo.apply(ctx, cornerAt(0));
	          for (var i = 1; i < 4; i++) {
	            ctx.lineTo.apply(ctx, cornerAt(i));
	          }
	          ctx.fill();
	          if (vm.borderWidth) {
	            ctx.stroke();
	          }
	        },
	        inRange: function(mouseX, mouseY) {
	          var vm = this._view;
	          var inRange = false;
	          if (vm) {
	            if (vm.x < vm.base) {
	              inRange = (mouseY >= vm.y - vm.height / 2 && mouseY <= vm.y + vm.height / 2) && (mouseX >= vm.x && mouseX <= vm.base);
	            } else {
	              inRange = (mouseY >= vm.y - vm.height / 2 && mouseY <= vm.y + vm.height / 2) && (mouseX >= vm.base && mouseX <= vm.x);
	            }
	          }
	          return inRange;
	        }
	      });
	      rectangle.pivot();
	    },
	    calculateBarBase: function(datasetIndex, index) {
	      var me = this;
	      var meta = me.getMeta();
	      var xScale = me.getScaleForId(meta.xAxisID);
	      var base = 0;
	      if (xScale.options.stacked) {
	        var chart = me.chart;
	        var datasets = chart.data.datasets;
	        var value = Number(datasets[$traceurRuntime.toProperty(datasetIndex)].data[$traceurRuntime.toProperty(index)]);
	        for (var i = 0; i < datasetIndex; i++) {
	          var currentDs = datasets[$traceurRuntime.toProperty(i)];
	          var currentDsMeta = chart.getDatasetMeta(i);
	          if (currentDsMeta.bar && currentDsMeta.xAxisID === xScale.id && chart.isDatasetVisible(i)) {
	            var currentVal = Number(currentDs.data[$traceurRuntime.toProperty(index)]);
	            base += value < 0 ? Math.min(currentVal, 0) : Math.max(currentVal, 0);
	          }
	        }
	        return xScale.getPixelForValue(base);
	      }
	      return xScale.getBasePixel();
	    },
	    getRuler: function(index) {
	      var me = this;
	      var meta = me.getMeta();
	      var yScale = me.getScaleForId(meta.yAxisID);
	      var datasetCount = me.getBarCount();
	      var tickHeight;
	      if (yScale.options.type === 'category') {
	        tickHeight = yScale.getPixelForTick(index + 1) - yScale.getPixelForTick(index);
	      } else {
	        tickHeight = yScale.width / yScale.ticks.length;
	      }
	      var categoryHeight = tickHeight * yScale.options.categoryPercentage;
	      var categorySpacing = (tickHeight - (tickHeight * yScale.options.categoryPercentage)) / 2;
	      var fullBarHeight = categoryHeight / datasetCount;
	      if (yScale.ticks.length !== me.chart.data.labels.length) {
	        var perc = yScale.ticks.length / me.chart.data.labels.length;
	        fullBarHeight = fullBarHeight * perc;
	      }
	      var barHeight = fullBarHeight * yScale.options.barPercentage;
	      var barSpacing = fullBarHeight - (fullBarHeight * yScale.options.barPercentage);
	      return {
	        datasetCount: datasetCount,
	        tickHeight: tickHeight,
	        categoryHeight: categoryHeight,
	        categorySpacing: categorySpacing,
	        fullBarHeight: fullBarHeight,
	        barHeight: barHeight,
	        barSpacing: barSpacing
	      };
	    },
	    calculateBarHeight: function(index) {
	      var me = this;
	      var yScale = me.getScaleForId(me.getMeta().yAxisID);
	      if (yScale.options.barThickness) {
	        return yScale.options.barThickness;
	      }
	      var ruler = me.getRuler(index);
	      return yScale.options.stacked ? ruler.categoryHeight : ruler.barHeight;
	    },
	    calculateBarX: function(index, datasetIndex) {
	      var me = this;
	      var meta = me.getMeta();
	      var xScale = me.getScaleForId(meta.xAxisID);
	      var value = Number(me.getDataset().data[$traceurRuntime.toProperty(index)]);
	      if (xScale.options.stacked) {
	        var sumPos = 0,
	            sumNeg = 0;
	        for (var i = 0; i < datasetIndex; i++) {
	          var ds = me.chart.data.datasets[$traceurRuntime.toProperty(i)];
	          var dsMeta = me.chart.getDatasetMeta(i);
	          if (dsMeta.bar && dsMeta.xAxisID === xScale.id && me.chart.isDatasetVisible(i)) {
	            var stackedVal = Number(ds.data[$traceurRuntime.toProperty(index)]);
	            if (stackedVal < 0) {
	              sumNeg += stackedVal || 0;
	            } else {
	              sumPos += stackedVal || 0;
	            }
	          }
	        }
	        if (value < 0) {
	          return xScale.getPixelForValue(sumNeg + value);
	        }
	        return xScale.getPixelForValue(sumPos + value);
	      }
	      return xScale.getPixelForValue(value);
	    },
	    calculateBarY: function(index, datasetIndex) {
	      var me = this;
	      var meta = me.getMeta();
	      var yScale = me.getScaleForId(meta.yAxisID);
	      var barIndex = me.getBarIndex(datasetIndex);
	      var ruler = me.getRuler(index);
	      var topTick = yScale.getPixelForValue(null, index, datasetIndex, me.chart.isCombo);
	      topTick -= me.chart.isCombo ? (ruler.tickHeight / 2) : 0;
	      if (yScale.options.stacked) {
	        return topTick + (ruler.categoryHeight / 2) + ruler.categorySpacing;
	      }
	      return topTick + (ruler.barHeight / 2) + ruler.categorySpacing + (ruler.barHeight * barIndex) + (ruler.barSpacing / 2) + (ruler.barSpacing * barIndex);
	    }
	  });
	};


/***/ },
/* 154 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	module.exports = function(Chart) {
	  var helpers = Chart.helpers;
	  Chart.defaults.bubble = {
	    hover: {mode: 'single'},
	    scales: {
	      xAxes: [{
	        type: 'linear',
	        position: 'bottom',
	        id: 'x-axis-0'
	      }],
	      yAxes: [{
	        type: 'linear',
	        position: 'left',
	        id: 'y-axis-0'
	      }]
	    },
	    tooltips: {callbacks: {
	        title: function() {
	          return '';
	        },
	        label: function(tooltipItem, data) {
	          var datasetLabel = data.datasets[$traceurRuntime.toProperty(tooltipItem.datasetIndex)].label || '';
	          var dataPoint = data.datasets[$traceurRuntime.toProperty(tooltipItem.datasetIndex)].data[$traceurRuntime.toProperty(tooltipItem.index)];
	          return datasetLabel + ': (' + dataPoint.x + ', ' + dataPoint.y + ', ' + dataPoint.r + ')';
	        }
	      }}
	  };
	  Chart.controllers.bubble = Chart.DatasetController.extend({
	    dataElementType: Chart.elements.Point,
	    update: function(reset) {
	      var me = this;
	      var meta = me.getMeta();
	      var points = meta.data;
	      helpers.each(points, function(point, index) {
	        me.updateElement(point, index, reset);
	      });
	    },
	    updateElement: function(point, index, reset) {
	      var me = this;
	      var meta = me.getMeta();
	      var xScale = me.getScaleForId(meta.xAxisID);
	      var yScale = me.getScaleForId(meta.yAxisID);
	      var custom = point.custom || {};
	      var dataset = me.getDataset();
	      var data = dataset.data[$traceurRuntime.toProperty(index)];
	      var pointElementOptions = me.chart.options.elements.point;
	      var dsIndex = me.index;
	      helpers.extend(point, {
	        _xScale: xScale,
	        _yScale: yScale,
	        _datasetIndex: dsIndex,
	        _index: index,
	        _model: {
	          x: reset ? xScale.getPixelForDecimal(0.5) : xScale.getPixelForValue((typeof data === 'undefined' ? 'undefined' : $traceurRuntime.typeof(data)) === 'object' ? data : NaN, index, dsIndex, me.chart.isCombo),
	          y: reset ? yScale.getBasePixel() : yScale.getPixelForValue(data, index, dsIndex),
	          radius: reset ? 0 : custom.radius ? custom.radius : me.getRadius(data),
	          hitRadius: custom.hitRadius ? custom.hitRadius : helpers.getValueAtIndexOrDefault(dataset.hitRadius, index, pointElementOptions.hitRadius)
	        }
	      });
	      Chart.DatasetController.prototype.removeHoverStyle.call(me, point, pointElementOptions);
	      var model = point._model;
	      model.skip = custom.skip ? custom.skip : (isNaN(model.x) || isNaN(model.y));
	      point.pivot();
	    },
	    getRadius: function(value) {
	      return value.r || this.chart.options.elements.point.radius;
	    },
	    setHoverStyle: function(point) {
	      var me = this;
	      Chart.DatasetController.prototype.setHoverStyle.call(me, point);
	      var dataset = me.chart.data.datasets[$traceurRuntime.toProperty(point._datasetIndex)];
	      var index = point._index;
	      var custom = point.custom || {};
	      var model = point._model;
	      model.radius = custom.hoverRadius ? custom.hoverRadius : (helpers.getValueAtIndexOrDefault(dataset.hoverRadius, index, me.chart.options.elements.point.hoverRadius)) + me.getRadius(dataset.data[$traceurRuntime.toProperty(index)]);
	    },
	    removeHoverStyle: function(point) {
	      var me = this;
	      Chart.DatasetController.prototype.removeHoverStyle.call(me, point, me.chart.options.elements.point);
	      var dataVal = me.chart.data.datasets[$traceurRuntime.toProperty(point._datasetIndex)].data[$traceurRuntime.toProperty(point._index)];
	      var custom = point.custom || {};
	      var model = point._model;
	      model.radius = custom.radius ? custom.radius : me.getRadius(dataVal);
	    }
	  });
	};


/***/ },
/* 155 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	module.exports = function(Chart) {
	  var helpers = Chart.helpers,
	      defaults = Chart.defaults;
	  defaults.doughnut = {
	    animation: {
	      animateRotate: true,
	      animateScale: false
	    },
	    aspectRatio: 1,
	    hover: {mode: 'single'},
	    legendCallback: function(chart) {
	      var text = [];
	      text.push('<ul class="' + chart.id + '-legend">');
	      var data = chart.data;
	      var datasets = data.datasets;
	      var labels = data.labels;
	      if (datasets.length) {
	        for (var i = 0; i < datasets[0].data.length; ++i) {
	          text.push('<li><span style="background-color:' + datasets[0].backgroundColor[$traceurRuntime.toProperty(i)] + '"></span>');
	          if (labels[$traceurRuntime.toProperty(i)]) {
	            text.push(labels[$traceurRuntime.toProperty(i)]);
	          }
	          text.push('</li>');
	        }
	      }
	      text.push('</ul>');
	      return text.join('');
	    },
	    legend: {
	      labels: {generateLabels: function(chart) {
	          var data = chart.data;
	          if (data.labels.length && data.datasets.length) {
	            return data.labels.map(function(label, i) {
	              var meta = chart.getDatasetMeta(0);
	              var ds = data.datasets[0];
	              var arc = meta.data[$traceurRuntime.toProperty(i)];
	              var custom = arc && arc.custom || {};
	              var getValueAtIndexOrDefault = helpers.getValueAtIndexOrDefault;
	              var arcOpts = chart.options.elements.arc;
	              var fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
	              var stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
	              var bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);
	              return {
	                text: label,
	                fillStyle: fill,
	                strokeStyle: stroke,
	                lineWidth: bw,
	                hidden: isNaN(ds.data[$traceurRuntime.toProperty(i)]) || meta.data[$traceurRuntime.toProperty(i)].hidden,
	                index: i
	              };
	            });
	          }
	          return [];
	        }},
	      onClick: function(e, legendItem) {
	        var index = legendItem.index;
	        var chart = this.chart;
	        var i,
	            ilen,
	            meta;
	        for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
	          meta = chart.getDatasetMeta(i);
	          if (meta.data[$traceurRuntime.toProperty(index)]) {
	            meta.data[$traceurRuntime.toProperty(index)].hidden = !meta.data[$traceurRuntime.toProperty(index)].hidden;
	          }
	        }
	        chart.update();
	      }
	    },
	    cutoutPercentage: 50,
	    rotation: Math.PI * -0.5,
	    circumference: Math.PI * 2.0,
	    tooltips: {callbacks: {
	        title: function() {
	          return '';
	        },
	        label: function(tooltipItem, data) {
	          return data.labels[$traceurRuntime.toProperty(tooltipItem.index)] + ': ' + data.datasets[$traceurRuntime.toProperty(tooltipItem.datasetIndex)].data[$traceurRuntime.toProperty(tooltipItem.index)];
	        }
	      }}
	  };
	  defaults.pie = helpers.clone(defaults.doughnut);
	  helpers.extend(defaults.pie, {cutoutPercentage: 0});
	  Chart.controllers.doughnut = Chart.controllers.pie = Chart.DatasetController.extend({
	    dataElementType: Chart.elements.Arc,
	    linkScales: helpers.noop,
	    getRingIndex: function(datasetIndex) {
	      var ringIndex = 0;
	      for (var j = 0; j < datasetIndex; ++j) {
	        if (this.chart.isDatasetVisible(j)) {
	          ++ringIndex;
	        }
	      }
	      return ringIndex;
	    },
	    update: function(reset) {
	      var me = this;
	      var chart = me.chart,
	          chartArea = chart.chartArea,
	          opts = chart.options,
	          arcOpts = opts.elements.arc,
	          availableWidth = chartArea.right - chartArea.left - arcOpts.borderWidth,
	          availableHeight = chartArea.bottom - chartArea.top - arcOpts.borderWidth,
	          minSize = Math.min(availableWidth, availableHeight),
	          offset = {
	            x: 0,
	            y: 0
	          },
	          meta = me.getMeta(),
	          cutoutPercentage = opts.cutoutPercentage,
	          circumference = opts.circumference;
	      if (circumference < Math.PI * 2.0) {
	        var startAngle = opts.rotation % (Math.PI * 2.0);
	        startAngle += Math.PI * 2.0 * (startAngle >= Math.PI ? -1 : startAngle < -Math.PI ? 1 : 0);
	        var endAngle = startAngle + circumference;
	        var start = {
	          x: Math.cos(startAngle),
	          y: Math.sin(startAngle)
	        };
	        var end = {
	          x: Math.cos(endAngle),
	          y: Math.sin(endAngle)
	        };
	        var contains0 = (startAngle <= 0 && 0 <= endAngle) || (startAngle <= Math.PI * 2.0 && Math.PI * 2.0 <= endAngle);
	        var contains90 = (startAngle <= Math.PI * 0.5 && Math.PI * 0.5 <= endAngle) || (startAngle <= Math.PI * 2.5 && Math.PI * 2.5 <= endAngle);
	        var contains180 = (startAngle <= -Math.PI && -Math.PI <= endAngle) || (startAngle <= Math.PI && Math.PI <= endAngle);
	        var contains270 = (startAngle <= -Math.PI * 0.5 && -Math.PI * 0.5 <= endAngle) || (startAngle <= Math.PI * 1.5 && Math.PI * 1.5 <= endAngle);
	        var cutout = cutoutPercentage / 100.0;
	        var min = {
	          x: contains180 ? -1 : Math.min(start.x * (start.x < 0 ? 1 : cutout), end.x * (end.x < 0 ? 1 : cutout)),
	          y: contains270 ? -1 : Math.min(start.y * (start.y < 0 ? 1 : cutout), end.y * (end.y < 0 ? 1 : cutout))
	        };
	        var max = {
	          x: contains0 ? 1 : Math.max(start.x * (start.x > 0 ? 1 : cutout), end.x * (end.x > 0 ? 1 : cutout)),
	          y: contains90 ? 1 : Math.max(start.y * (start.y > 0 ? 1 : cutout), end.y * (end.y > 0 ? 1 : cutout))
	        };
	        var size = {
	          width: (max.x - min.x) * 0.5,
	          height: (max.y - min.y) * 0.5
	        };
	        minSize = Math.min(availableWidth / size.width, availableHeight / size.height);
	        offset = {
	          x: (max.x + min.x) * -0.5,
	          y: (max.y + min.y) * -0.5
	        };
	      }
	      chart.borderWidth = me.getMaxBorderWidth(meta.data);
	      chart.outerRadius = Math.max((minSize - chart.borderWidth) / 2, 0);
	      chart.innerRadius = Math.max(cutoutPercentage ? (chart.outerRadius / 100) * (cutoutPercentage) : 1, 0);
	      chart.radiusLength = (chart.outerRadius - chart.innerRadius) / chart.getVisibleDatasetCount();
	      chart.offsetX = offset.x * chart.outerRadius;
	      chart.offsetY = offset.y * chart.outerRadius;
	      meta.total = me.calculateTotal();
	      me.outerRadius = chart.outerRadius - (chart.radiusLength * me.getRingIndex(me.index));
	      me.innerRadius = me.outerRadius - chart.radiusLength;
	      helpers.each(meta.data, function(arc, index) {
	        me.updateElement(arc, index, reset);
	      });
	    },
	    updateElement: function(arc, index, reset) {
	      var me = this;
	      var chart = me.chart,
	          chartArea = chart.chartArea,
	          opts = chart.options,
	          animationOpts = opts.animation,
	          centerX = (chartArea.left + chartArea.right) / 2,
	          centerY = (chartArea.top + chartArea.bottom) / 2,
	          startAngle = opts.rotation,
	          endAngle = opts.rotation,
	          dataset = me.getDataset(),
	          circumference = reset && animationOpts.animateRotate ? 0 : arc.hidden ? 0 : me.calculateCircumference(dataset.data[$traceurRuntime.toProperty(index)]) * (opts.circumference / (2.0 * Math.PI)),
	          innerRadius = reset && animationOpts.animateScale ? 0 : me.innerRadius,
	          outerRadius = reset && animationOpts.animateScale ? 0 : me.outerRadius,
	          valueAtIndexOrDefault = helpers.getValueAtIndexOrDefault;
	      helpers.extend(arc, {
	        _datasetIndex: me.index,
	        _index: index,
	        _model: {
	          x: centerX + chart.offsetX,
	          y: centerY + chart.offsetY,
	          startAngle: startAngle,
	          endAngle: endAngle,
	          circumference: circumference,
	          outerRadius: outerRadius,
	          innerRadius: innerRadius,
	          label: valueAtIndexOrDefault(dataset.label, index, chart.data.labels[$traceurRuntime.toProperty(index)])
	        }
	      });
	      var model = arc._model;
	      this.removeHoverStyle(arc);
	      if (!reset || !animationOpts.animateRotate) {
	        if (index === 0) {
	          model.startAngle = opts.rotation;
	        } else {
	          model.startAngle = me.getMeta().data[$traceurRuntime.toProperty(index - 1)]._model.endAngle;
	        }
	        model.endAngle = model.startAngle + model.circumference;
	      }
	      arc.pivot();
	    },
	    removeHoverStyle: function(arc) {
	      Chart.DatasetController.prototype.removeHoverStyle.call(this, arc, this.chart.options.elements.arc);
	    },
	    calculateTotal: function() {
	      var dataset = this.getDataset();
	      var meta = this.getMeta();
	      var total = 0;
	      var value;
	      helpers.each(meta.data, function(element, index) {
	        value = dataset.data[$traceurRuntime.toProperty(index)];
	        if (!isNaN(value) && !element.hidden) {
	          total += Math.abs(value);
	        }
	      });
	      return total;
	    },
	    calculateCircumference: function(value) {
	      var total = this.getMeta().total;
	      if (total > 0 && !isNaN(value)) {
	        return (Math.PI * 2.0) * (value / total);
	      }
	      return 0;
	    },
	    getMaxBorderWidth: function(elements) {
	      var max = 0,
	          index = this.index,
	          length = elements.length,
	          borderWidth,
	          hoverWidth;
	      for (var i = 0; i < length; i++) {
	        borderWidth = elements[$traceurRuntime.toProperty(i)]._model ? elements[$traceurRuntime.toProperty(i)]._model.borderWidth : 0;
	        hoverWidth = elements[$traceurRuntime.toProperty(i)]._chart ? elements[$traceurRuntime.toProperty(i)]._chart.config.data.datasets[$traceurRuntime.toProperty(index)].hoverBorderWidth : 0;
	        max = borderWidth > max ? borderWidth : max;
	        max = hoverWidth > max ? hoverWidth : max;
	      }
	      return max;
	    }
	  });
	};


/***/ },
/* 156 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	module.exports = function(Chart) {
	  var helpers = Chart.helpers;
	  Chart.defaults.line = {
	    showLines: true,
	    spanGaps: false,
	    hover: {mode: 'label'},
	    scales: {
	      xAxes: [{
	        type: 'category',
	        id: 'x-axis-0'
	      }],
	      yAxes: [{
	        type: 'linear',
	        id: 'y-axis-0'
	      }]
	    }
	  };
	  function lineEnabled(dataset, options) {
	    return helpers.getValueOrDefault(dataset.showLine, options.showLines);
	  }
	  Chart.controllers.line = Chart.DatasetController.extend({
	    datasetElementType: Chart.elements.Line,
	    dataElementType: Chart.elements.Point,
	    addElementAndReset: function(index) {
	      var me = this;
	      var options = me.chart.options;
	      var meta = me.getMeta();
	      Chart.DatasetController.prototype.addElementAndReset.call(me, index);
	      if (lineEnabled(me.getDataset(), options) && meta.dataset._model.tension !== 0) {
	        me.updateBezierControlPoints();
	      }
	    },
	    update: function(reset) {
	      var me = this;
	      var meta = me.getMeta();
	      var line = meta.dataset;
	      var points = meta.data || [];
	      var options = me.chart.options;
	      var lineElementOptions = options.elements.line;
	      var scale = me.getScaleForId(meta.yAxisID);
	      var i,
	          ilen,
	          custom;
	      var dataset = me.getDataset();
	      var showLine = lineEnabled(dataset, options);
	      if (showLine) {
	        custom = line.custom || {};
	        if ((dataset.tension !== undefined) && (dataset.lineTension === undefined)) {
	          dataset.lineTension = dataset.tension;
	        }
	        line._scale = scale;
	        line._datasetIndex = me.index;
	        line._children = points;
	        line._model = {
	          spanGaps: dataset.spanGaps ? dataset.spanGaps : options.spanGaps,
	          tension: custom.tension ? custom.tension : helpers.getValueOrDefault(dataset.lineTension, lineElementOptions.tension),
	          backgroundColor: custom.backgroundColor ? custom.backgroundColor : (dataset.backgroundColor || lineElementOptions.backgroundColor),
	          borderWidth: custom.borderWidth ? custom.borderWidth : (dataset.borderWidth || lineElementOptions.borderWidth),
	          borderColor: custom.borderColor ? custom.borderColor : (dataset.borderColor || lineElementOptions.borderColor),
	          borderCapStyle: custom.borderCapStyle ? custom.borderCapStyle : (dataset.borderCapStyle || lineElementOptions.borderCapStyle),
	          borderDash: custom.borderDash ? custom.borderDash : (dataset.borderDash || lineElementOptions.borderDash),
	          borderDashOffset: custom.borderDashOffset ? custom.borderDashOffset : (dataset.borderDashOffset || lineElementOptions.borderDashOffset),
	          borderJoinStyle: custom.borderJoinStyle ? custom.borderJoinStyle : (dataset.borderJoinStyle || lineElementOptions.borderJoinStyle),
	          fill: custom.fill ? custom.fill : (dataset.fill !== undefined ? dataset.fill : lineElementOptions.fill),
	          steppedLine: custom.steppedLine ? custom.steppedLine : helpers.getValueOrDefault(dataset.steppedLine, lineElementOptions.stepped),
	          cubicInterpolationMode: custom.cubicInterpolationMode ? custom.cubicInterpolationMode : helpers.getValueOrDefault(dataset.cubicInterpolationMode, lineElementOptions.cubicInterpolationMode),
	          scaleTop: scale.top,
	          scaleBottom: scale.bottom,
	          scaleZero: scale.getBasePixel()
	        };
	        line.pivot();
	      }
	      for (i = 0, ilen = points.length; i < ilen; ++i) {
	        me.updateElement(points[$traceurRuntime.toProperty(i)], i, reset);
	      }
	      if (showLine && line._model.tension !== 0) {
	        me.updateBezierControlPoints();
	      }
	      for (i = 0, ilen = points.length; i < ilen; ++i) {
	        points[$traceurRuntime.toProperty(i)].pivot();
	      }
	    },
	    getPointBackgroundColor: function(point, index) {
	      var backgroundColor = this.chart.options.elements.point.backgroundColor;
	      var dataset = this.getDataset();
	      var custom = point.custom || {};
	      if (custom.backgroundColor) {
	        backgroundColor = custom.backgroundColor;
	      } else if (dataset.pointBackgroundColor) {
	        backgroundColor = helpers.getValueAtIndexOrDefault(dataset.pointBackgroundColor, index, backgroundColor);
	      } else if (dataset.backgroundColor) {
	        backgroundColor = dataset.backgroundColor;
	      }
	      return backgroundColor;
	    },
	    getPointBorderColor: function(point, index) {
	      var borderColor = this.chart.options.elements.point.borderColor;
	      var dataset = this.getDataset();
	      var custom = point.custom || {};
	      if (custom.borderColor) {
	        borderColor = custom.borderColor;
	      } else if (dataset.pointBorderColor) {
	        borderColor = helpers.getValueAtIndexOrDefault(dataset.pointBorderColor, index, borderColor);
	      } else if (dataset.borderColor) {
	        borderColor = dataset.borderColor;
	      }
	      return borderColor;
	    },
	    getPointBorderWidth: function(point, index) {
	      var borderWidth = this.chart.options.elements.point.borderWidth;
	      var dataset = this.getDataset();
	      var custom = point.custom || {};
	      if (custom.borderWidth) {
	        borderWidth = custom.borderWidth;
	      } else if (dataset.pointBorderWidth) {
	        borderWidth = helpers.getValueAtIndexOrDefault(dataset.pointBorderWidth, index, borderWidth);
	      } else if (dataset.borderWidth) {
	        borderWidth = dataset.borderWidth;
	      }
	      return borderWidth;
	    },
	    updateElement: function(point, index, reset) {
	      var me = this;
	      var meta = me.getMeta();
	      var custom = point.custom || {};
	      var dataset = me.getDataset();
	      var datasetIndex = me.index;
	      var value = dataset.data[$traceurRuntime.toProperty(index)];
	      var yScale = me.getScaleForId(meta.yAxisID);
	      var xScale = me.getScaleForId(meta.xAxisID);
	      var pointOptions = me.chart.options.elements.point;
	      var x,
	          y;
	      var labels = me.chart.data.labels || [];
	      var includeOffset = (labels.length === 1 || dataset.data.length === 1) || me.chart.isCombo;
	      if ((dataset.radius !== undefined) && (dataset.pointRadius === undefined)) {
	        dataset.pointRadius = dataset.radius;
	      }
	      if ((dataset.hitRadius !== undefined) && (dataset.pointHitRadius === undefined)) {
	        dataset.pointHitRadius = dataset.hitRadius;
	      }
	      x = xScale.getPixelForValue((typeof value === 'undefined' ? 'undefined' : $traceurRuntime.typeof(value)) === 'object' ? value : NaN, index, datasetIndex, includeOffset);
	      y = reset ? yScale.getBasePixel() : me.calculatePointY(value, index, datasetIndex);
	      point._xScale = xScale;
	      point._yScale = yScale;
	      point._datasetIndex = datasetIndex;
	      point._index = index;
	      point._model = {
	        x: x,
	        y: y,
	        skip: custom.skip || isNaN(x) || isNaN(y),
	        radius: custom.radius || helpers.getValueAtIndexOrDefault(dataset.pointRadius, index, pointOptions.radius),
	        pointStyle: custom.pointStyle || helpers.getValueAtIndexOrDefault(dataset.pointStyle, index, pointOptions.pointStyle),
	        backgroundColor: me.getPointBackgroundColor(point, index),
	        borderColor: me.getPointBorderColor(point, index),
	        borderWidth: me.getPointBorderWidth(point, index),
	        tension: meta.dataset._model ? meta.dataset._model.tension : 0,
	        steppedLine: meta.dataset._model ? meta.dataset._model.steppedLine : false,
	        hitRadius: custom.hitRadius || helpers.getValueAtIndexOrDefault(dataset.pointHitRadius, index, pointOptions.hitRadius)
	      };
	    },
	    calculatePointY: function(value, index, datasetIndex) {
	      var me = this;
	      var chart = me.chart;
	      var meta = me.getMeta();
	      var yScale = me.getScaleForId(meta.yAxisID);
	      var sumPos = 0;
	      var sumNeg = 0;
	      var i,
	          ds,
	          dsMeta;
	      if (yScale.options.stacked) {
	        for (i = 0; i < datasetIndex; i++) {
	          ds = chart.data.datasets[$traceurRuntime.toProperty(i)];
	          dsMeta = chart.getDatasetMeta(i);
	          if (dsMeta.type === 'line' && dsMeta.yAxisID === yScale.id && chart.isDatasetVisible(i)) {
	            var stackedRightValue = Number(yScale.getRightValue(ds.data[$traceurRuntime.toProperty(index)]));
	            if (stackedRightValue < 0) {
	              sumNeg += stackedRightValue || 0;
	            } else {
	              sumPos += stackedRightValue || 0;
	            }
	          }
	        }
	        var rightValue = Number(yScale.getRightValue(value));
	        if (rightValue < 0) {
	          return yScale.getPixelForValue(sumNeg + rightValue);
	        }
	        return yScale.getPixelForValue(sumPos + rightValue);
	      }
	      return yScale.getPixelForValue(value);
	    },
	    updateBezierControlPoints: function() {
	      var me = this;
	      var meta = me.getMeta();
	      var area = me.chart.chartArea;
	      var points = (meta.data || []);
	      var i,
	          ilen,
	          point,
	          model,
	          controlPoints;
	      if (meta.dataset._model.spanGaps) {
	        points = points.filter(function(pt) {
	          return !pt._model.skip;
	        });
	      }
	      function capControlPoint(pt, min, max) {
	        return Math.max(Math.min(pt, max), min);
	      }
	      if (meta.dataset._model.cubicInterpolationMode === 'monotone') {
	        helpers.splineCurveMonotone(points);
	      } else {
	        for (i = 0, ilen = points.length; i < ilen; ++i) {
	          point = points[$traceurRuntime.toProperty(i)];
	          model = point._model;
	          controlPoints = helpers.splineCurve(helpers.previousItem(points, i)._model, model, helpers.nextItem(points, i)._model, meta.dataset._model.tension);
	          model.controlPointPreviousX = controlPoints.previous.x;
	          model.controlPointPreviousY = controlPoints.previous.y;
	          model.controlPointNextX = controlPoints.next.x;
	          model.controlPointNextY = controlPoints.next.y;
	        }
	      }
	      if (me.chart.options.elements.line.capBezierPoints) {
	        for (i = 0, ilen = points.length; i < ilen; ++i) {
	          model = points[$traceurRuntime.toProperty(i)]._model;
	          model.controlPointPreviousX = capControlPoint(model.controlPointPreviousX, area.left, area.right);
	          model.controlPointPreviousY = capControlPoint(model.controlPointPreviousY, area.top, area.bottom);
	          model.controlPointNextX = capControlPoint(model.controlPointNextX, area.left, area.right);
	          model.controlPointNextY = capControlPoint(model.controlPointNextY, area.top, area.bottom);
	        }
	      }
	    },
	    draw: function(ease) {
	      var me = this;
	      var meta = me.getMeta();
	      var points = meta.data || [];
	      var easingDecimal = ease || 1;
	      var i,
	          ilen;
	      for (i = 0, ilen = points.length; i < ilen; ++i) {
	        points[$traceurRuntime.toProperty(i)].transition(easingDecimal);
	      }
	      if (lineEnabled(me.getDataset(), me.chart.options)) {
	        meta.dataset.transition(easingDecimal).draw();
	      }
	      for (i = 0, ilen = points.length; i < ilen; ++i) {
	        points[$traceurRuntime.toProperty(i)].draw();
	      }
	    },
	    setHoverStyle: function(point) {
	      var dataset = this.chart.data.datasets[$traceurRuntime.toProperty(point._datasetIndex)];
	      var index = point._index;
	      var custom = point.custom || {};
	      var model = point._model;
	      model.radius = custom.hoverRadius || helpers.getValueAtIndexOrDefault(dataset.pointHoverRadius, index, this.chart.options.elements.point.hoverRadius);
	      model.backgroundColor = custom.hoverBackgroundColor || helpers.getValueAtIndexOrDefault(dataset.pointHoverBackgroundColor, index, helpers.getHoverColor(model.backgroundColor));
	      model.borderColor = custom.hoverBorderColor || helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderColor, index, helpers.getHoverColor(model.borderColor));
	      model.borderWidth = custom.hoverBorderWidth || helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderWidth, index, model.borderWidth);
	    },
	    removeHoverStyle: function(point) {
	      var me = this;
	      var dataset = me.chart.data.datasets[$traceurRuntime.toProperty(point._datasetIndex)];
	      var index = point._index;
	      var custom = point.custom || {};
	      var model = point._model;
	      if ((dataset.radius !== undefined) && (dataset.pointRadius === undefined)) {
	        dataset.pointRadius = dataset.radius;
	      }
	      model.radius = custom.radius || helpers.getValueAtIndexOrDefault(dataset.pointRadius, index, me.chart.options.elements.point.radius);
	      model.backgroundColor = me.getPointBackgroundColor(point, index);
	      model.borderColor = me.getPointBorderColor(point, index);
	      model.borderWidth = me.getPointBorderWidth(point, index);
	    }
	  });
	};


/***/ },
/* 157 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	module.exports = function(Chart) {
	  var helpers = Chart.helpers;
	  Chart.defaults.polarArea = {
	    scale: {
	      type: 'radialLinear',
	      lineArc: true,
	      ticks: {beginAtZero: true}
	    },
	    animation: {
	      animateRotate: true,
	      animateScale: true
	    },
	    startAngle: -0.5 * Math.PI,
	    aspectRatio: 1,
	    legendCallback: function(chart) {
	      var text = [];
	      text.push('<ul class="' + chart.id + '-legend">');
	      var data = chart.data;
	      var datasets = data.datasets;
	      var labels = data.labels;
	      if (datasets.length) {
	        for (var i = 0; i < datasets[0].data.length; ++i) {
	          text.push('<li><span style="background-color:' + datasets[0].backgroundColor[$traceurRuntime.toProperty(i)] + '">');
	          if (labels[$traceurRuntime.toProperty(i)]) {
	            text.push(labels[$traceurRuntime.toProperty(i)]);
	          }
	          text.push('</span></li>');
	        }
	      }
	      text.push('</ul>');
	      return text.join('');
	    },
	    legend: {
	      labels: {generateLabels: function(chart) {
	          var data = chart.data;
	          if (data.labels.length && data.datasets.length) {
	            return data.labels.map(function(label, i) {
	              var meta = chart.getDatasetMeta(0);
	              var ds = data.datasets[0];
	              var arc = meta.data[$traceurRuntime.toProperty(i)];
	              var custom = arc.custom || {};
	              var getValueAtIndexOrDefault = helpers.getValueAtIndexOrDefault;
	              var arcOpts = chart.options.elements.arc;
	              var fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
	              var stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
	              var bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);
	              return {
	                text: label,
	                fillStyle: fill,
	                strokeStyle: stroke,
	                lineWidth: bw,
	                hidden: isNaN(ds.data[$traceurRuntime.toProperty(i)]) || meta.data[$traceurRuntime.toProperty(i)].hidden,
	                index: i
	              };
	            });
	          }
	          return [];
	        }},
	      onClick: function(e, legendItem) {
	        var index = legendItem.index;
	        var chart = this.chart;
	        var i,
	            ilen,
	            meta;
	        for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
	          meta = chart.getDatasetMeta(i);
	          meta.data[$traceurRuntime.toProperty(index)].hidden = !meta.data[$traceurRuntime.toProperty(index)].hidden;
	        }
	        chart.update();
	      }
	    },
	    tooltips: {callbacks: {
	        title: function() {
	          return '';
	        },
	        label: function(tooltipItem, data) {
	          return data.labels[$traceurRuntime.toProperty(tooltipItem.index)] + ': ' + tooltipItem.yLabel;
	        }
	      }}
	  };
	  Chart.controllers.polarArea = Chart.DatasetController.extend({
	    dataElementType: Chart.elements.Arc,
	    linkScales: helpers.noop,
	    update: function(reset) {
	      var me = this;
	      var chart = me.chart;
	      var chartArea = chart.chartArea;
	      var meta = me.getMeta();
	      var opts = chart.options;
	      var arcOpts = opts.elements.arc;
	      var minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
	      chart.outerRadius = Math.max((minSize - arcOpts.borderWidth / 2) / 2, 0);
	      chart.innerRadius = Math.max(opts.cutoutPercentage ? (chart.outerRadius / 100) * (opts.cutoutPercentage) : 1, 0);
	      chart.radiusLength = (chart.outerRadius - chart.innerRadius) / chart.getVisibleDatasetCount();
	      me.outerRadius = chart.outerRadius - (chart.radiusLength * me.index);
	      me.innerRadius = me.outerRadius - chart.radiusLength;
	      meta.count = me.countVisibleElements();
	      helpers.each(meta.data, function(arc, index) {
	        me.updateElement(arc, index, reset);
	      });
	    },
	    updateElement: function(arc, index, reset) {
	      var me = this;
	      var chart = me.chart;
	      var dataset = me.getDataset();
	      var opts = chart.options;
	      var animationOpts = opts.animation;
	      var scale = chart.scale;
	      var getValueAtIndexOrDefault = helpers.getValueAtIndexOrDefault;
	      var labels = chart.data.labels;
	      var circumference = me.calculateCircumference(dataset.data[$traceurRuntime.toProperty(index)]);
	      var centerX = scale.xCenter;
	      var centerY = scale.yCenter;
	      var visibleCount = 0;
	      var meta = me.getMeta();
	      for (var i = 0; i < index; ++i) {
	        if (!isNaN(dataset.data[$traceurRuntime.toProperty(i)]) && !meta.data[$traceurRuntime.toProperty(i)].hidden) {
	          ++visibleCount;
	        }
	      }
	      var datasetStartAngle = opts.startAngle;
	      var distance = arc.hidden ? 0 : scale.getDistanceFromCenterForValue(dataset.data[$traceurRuntime.toProperty(index)]);
	      var startAngle = datasetStartAngle + (circumference * visibleCount);
	      var endAngle = startAngle + (arc.hidden ? 0 : circumference);
	      var resetRadius = animationOpts.animateScale ? 0 : scale.getDistanceFromCenterForValue(dataset.data[$traceurRuntime.toProperty(index)]);
	      helpers.extend(arc, {
	        _datasetIndex: me.index,
	        _index: index,
	        _scale: scale,
	        _model: {
	          x: centerX,
	          y: centerY,
	          innerRadius: 0,
	          outerRadius: reset ? resetRadius : distance,
	          startAngle: reset && animationOpts.animateRotate ? datasetStartAngle : startAngle,
	          endAngle: reset && animationOpts.animateRotate ? datasetStartAngle : endAngle,
	          label: getValueAtIndexOrDefault(labels, index, labels[$traceurRuntime.toProperty(index)])
	        }
	      });
	      me.removeHoverStyle(arc);
	      arc.pivot();
	    },
	    removeHoverStyle: function(arc) {
	      Chart.DatasetController.prototype.removeHoverStyle.call(this, arc, this.chart.options.elements.arc);
	    },
	    countVisibleElements: function() {
	      var dataset = this.getDataset();
	      var meta = this.getMeta();
	      var count = 0;
	      helpers.each(meta.data, function(element, index) {
	        if (!isNaN(dataset.data[$traceurRuntime.toProperty(index)]) && !element.hidden) {
	          count++;
	        }
	      });
	      return count;
	    },
	    calculateCircumference: function(value) {
	      var count = this.getMeta().count;
	      if (count > 0 && !isNaN(value)) {
	        return (2 * Math.PI) / count;
	      }
	      return 0;
	    }
	  });
	};


/***/ },
/* 158 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	module.exports = function(Chart) {
	  var helpers = Chart.helpers;
	  Chart.defaults.radar = {
	    scale: {type: 'radialLinear'},
	    elements: {line: {tension: 0}}
	  };
	  Chart.controllers.radar = Chart.DatasetController.extend({
	    datasetElementType: Chart.elements.Line,
	    dataElementType: Chart.elements.Point,
	    linkScales: helpers.noop,
	    addElementAndReset: function(index) {
	      Chart.DatasetController.prototype.addElementAndReset.call(this, index);
	      this.updateBezierControlPoints();
	    },
	    update: function(reset) {
	      var me = this;
	      var meta = me.getMeta();
	      var line = meta.dataset;
	      var points = meta.data;
	      var custom = line.custom || {};
	      var dataset = me.getDataset();
	      var lineElementOptions = me.chart.options.elements.line;
	      var scale = me.chart.scale;
	      if ((dataset.tension !== undefined) && (dataset.lineTension === undefined)) {
	        dataset.lineTension = dataset.tension;
	      }
	      helpers.extend(meta.dataset, {
	        _datasetIndex: me.index,
	        _children: points,
	        _loop: true,
	        _model: {
	          tension: custom.tension ? custom.tension : helpers.getValueOrDefault(dataset.lineTension, lineElementOptions.tension),
	          backgroundColor: custom.backgroundColor ? custom.backgroundColor : (dataset.backgroundColor || lineElementOptions.backgroundColor),
	          borderWidth: custom.borderWidth ? custom.borderWidth : (dataset.borderWidth || lineElementOptions.borderWidth),
	          borderColor: custom.borderColor ? custom.borderColor : (dataset.borderColor || lineElementOptions.borderColor),
	          fill: custom.fill ? custom.fill : (dataset.fill !== undefined ? dataset.fill : lineElementOptions.fill),
	          borderCapStyle: custom.borderCapStyle ? custom.borderCapStyle : (dataset.borderCapStyle || lineElementOptions.borderCapStyle),
	          borderDash: custom.borderDash ? custom.borderDash : (dataset.borderDash || lineElementOptions.borderDash),
	          borderDashOffset: custom.borderDashOffset ? custom.borderDashOffset : (dataset.borderDashOffset || lineElementOptions.borderDashOffset),
	          borderJoinStyle: custom.borderJoinStyle ? custom.borderJoinStyle : (dataset.borderJoinStyle || lineElementOptions.borderJoinStyle),
	          scaleTop: scale.top,
	          scaleBottom: scale.bottom,
	          scaleZero: scale.getBasePosition()
	        }
	      });
	      meta.dataset.pivot();
	      helpers.each(points, function(point, index) {
	        me.updateElement(point, index, reset);
	      }, me);
	      me.updateBezierControlPoints();
	    },
	    updateElement: function(point, index, reset) {
	      var me = this;
	      var custom = point.custom || {};
	      var dataset = me.getDataset();
	      var scale = me.chart.scale;
	      var pointElementOptions = me.chart.options.elements.point;
	      var pointPosition = scale.getPointPositionForValue(index, dataset.data[$traceurRuntime.toProperty(index)]);
	      helpers.extend(point, {
	        _datasetIndex: me.index,
	        _index: index,
	        _scale: scale,
	        _model: {
	          x: reset ? scale.xCenter : pointPosition.x,
	          y: reset ? scale.yCenter : pointPosition.y,
	          tension: custom.tension ? custom.tension : helpers.getValueOrDefault(dataset.tension, me.chart.options.elements.line.tension),
	          radius: custom.radius ? custom.radius : helpers.getValueAtIndexOrDefault(dataset.pointRadius, index, pointElementOptions.radius),
	          backgroundColor: custom.backgroundColor ? custom.backgroundColor : helpers.getValueAtIndexOrDefault(dataset.pointBackgroundColor, index, pointElementOptions.backgroundColor),
	          borderColor: custom.borderColor ? custom.borderColor : helpers.getValueAtIndexOrDefault(dataset.pointBorderColor, index, pointElementOptions.borderColor),
	          borderWidth: custom.borderWidth ? custom.borderWidth : helpers.getValueAtIndexOrDefault(dataset.pointBorderWidth, index, pointElementOptions.borderWidth),
	          pointStyle: custom.pointStyle ? custom.pointStyle : helpers.getValueAtIndexOrDefault(dataset.pointStyle, index, pointElementOptions.pointStyle),
	          hitRadius: custom.hitRadius ? custom.hitRadius : helpers.getValueAtIndexOrDefault(dataset.hitRadius, index, pointElementOptions.hitRadius)
	        }
	      });
	      point._model.skip = custom.skip ? custom.skip : (isNaN(point._model.x) || isNaN(point._model.y));
	    },
	    updateBezierControlPoints: function() {
	      var chartArea = this.chart.chartArea;
	      var meta = this.getMeta();
	      helpers.each(meta.data, function(point, index) {
	        var model = point._model;
	        var controlPoints = helpers.splineCurve(helpers.previousItem(meta.data, index, true)._model, model, helpers.nextItem(meta.data, index, true)._model, model.tension);
	        model.controlPointPreviousX = Math.max(Math.min(controlPoints.previous.x, chartArea.right), chartArea.left);
	        model.controlPointPreviousY = Math.max(Math.min(controlPoints.previous.y, chartArea.bottom), chartArea.top);
	        model.controlPointNextX = Math.max(Math.min(controlPoints.next.x, chartArea.right), chartArea.left);
	        model.controlPointNextY = Math.max(Math.min(controlPoints.next.y, chartArea.bottom), chartArea.top);
	        point.pivot();
	      });
	    },
	    draw: function(ease) {
	      var meta = this.getMeta();
	      var easingDecimal = ease || 1;
	      helpers.each(meta.data, function(point) {
	        point.transition(easingDecimal);
	      });
	      meta.dataset.transition(easingDecimal).draw();
	      helpers.each(meta.data, function(point) {
	        point.draw();
	      });
	    },
	    setHoverStyle: function(point) {
	      var dataset = this.chart.data.datasets[$traceurRuntime.toProperty(point._datasetIndex)];
	      var custom = point.custom || {};
	      var index = point._index;
	      var model = point._model;
	      model.radius = custom.hoverRadius ? custom.hoverRadius : helpers.getValueAtIndexOrDefault(dataset.pointHoverRadius, index, this.chart.options.elements.point.hoverRadius);
	      model.backgroundColor = custom.hoverBackgroundColor ? custom.hoverBackgroundColor : helpers.getValueAtIndexOrDefault(dataset.pointHoverBackgroundColor, index, helpers.getHoverColor(model.backgroundColor));
	      model.borderColor = custom.hoverBorderColor ? custom.hoverBorderColor : helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderColor, index, helpers.getHoverColor(model.borderColor));
	      model.borderWidth = custom.hoverBorderWidth ? custom.hoverBorderWidth : helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderWidth, index, model.borderWidth);
	    },
	    removeHoverStyle: function(point) {
	      var dataset = this.chart.data.datasets[$traceurRuntime.toProperty(point._datasetIndex)];
	      var custom = point.custom || {};
	      var index = point._index;
	      var model = point._model;
	      var pointElementOptions = this.chart.options.elements.point;
	      model.radius = custom.radius ? custom.radius : helpers.getValueAtIndexOrDefault(dataset.radius, index, pointElementOptions.radius);
	      model.backgroundColor = custom.backgroundColor ? custom.backgroundColor : helpers.getValueAtIndexOrDefault(dataset.pointBackgroundColor, index, pointElementOptions.backgroundColor);
	      model.borderColor = custom.borderColor ? custom.borderColor : helpers.getValueAtIndexOrDefault(dataset.pointBorderColor, index, pointElementOptions.borderColor);
	      model.borderWidth = custom.borderWidth ? custom.borderWidth : helpers.getValueAtIndexOrDefault(dataset.pointBorderWidth, index, pointElementOptions.borderWidth);
	    }
	  });
	};


/***/ },
/* 159 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	module.exports = function(Chart) {
	  Chart.Bar = function(context, config) {
	    config.type = 'bar';
	    return new Chart(context, config);
	  };
	};


/***/ },
/* 160 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	module.exports = function(Chart) {
	  Chart.Bubble = function(context, config) {
	    config.type = 'bubble';
	    return new Chart(context, config);
	  };
	};


/***/ },
/* 161 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	module.exports = function(Chart) {
	  Chart.Doughnut = function(context, config) {
	    config.type = 'doughnut';
	    return new Chart(context, config);
	  };
	};


/***/ },
/* 162 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	module.exports = function(Chart) {
	  Chart.Line = function(context, config) {
	    config.type = 'line';
	    return new Chart(context, config);
	  };
	};


/***/ },
/* 163 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	module.exports = function(Chart) {
	  Chart.PolarArea = function(context, config) {
	    config.type = 'polarArea';
	    return new Chart(context, config);
	  };
	};


/***/ },
/* 164 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	module.exports = function(Chart) {
	  Chart.Radar = function(context, config) {
	    config.options = Chart.helpers.configMerge({aspectRatio: 1}, config.options);
	    config.type = 'radar';
	    return new Chart(context, config);
	  };
	};


/***/ },
/* 165 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	module.exports = function(Chart) {
	  var defaultConfig = {
	    hover: {mode: 'single'},
	    scales: {
	      xAxes: [{
	        type: 'linear',
	        position: 'bottom',
	        id: 'x-axis-1'
	      }],
	      yAxes: [{
	        type: 'linear',
	        position: 'left',
	        id: 'y-axis-1'
	      }]
	    },
	    tooltips: {callbacks: {
	        title: function() {
	          return '';
	        },
	        label: function(tooltipItem) {
	          return '(' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ')';
	        }
	      }}
	  };
	  Chart.defaults.scatter = defaultConfig;
	  Chart.controllers.scatter = Chart.controllers.line;
	  Chart.Scatter = function(context, config) {
	    config.type = 'scatter';
	    return new Chart(context, config);
	  };
	};


/***/ }
/******/ ]);