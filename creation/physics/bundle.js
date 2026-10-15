/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
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
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
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
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(4);

var _vue2 = _interopRequireDefault(_vue);

var _plot = __webpack_require__(8);

var _plot2 = _interopRequireDefault(_plot);

var _katex = __webpack_require__(13);

var _katex2 = _interopRequireDefault(_katex);

var _sheetmd = __webpack_require__(17);

var _sheetmd2 = _interopRequireDefault(_sheetmd);

__webpack_require__(19);

__webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.component("katex", _katex2.default);
_vue2.default.component("plot", _plot2.default);

window.Vue = _vue2.default;

var config = window.location.href.match(/\?([^]+?)(\/(\w*))?#?$/);
console.log(config);
if (!config[3]) config[3] = 'en';
_sheetmd2.default.load(config[1], config[3]);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process, global, setImmediate) {/*!
 * Vue.js v2.5.2
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
/*  */

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef(v) {
  return v === undefined || v === null;
}

function isDef(v) {
  return v !== undefined && v !== null;
}

function isTrue(v) {
  return v === true;
}

function isFalse(v) {
  return v === false;
}

/**
 * Check if value is primitive
 */
function isPrimitive(value) {
  return typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean';
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType(value) {
  return _toString.call(value).slice(8, -1);
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function isRegExp(v) {
  return _toString.call(v) === '[object RegExp]';
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex(val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val);
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString(val) {
  return val == null ? '' : typeof val === 'object' ? JSON.stringify(val, null, 2) : String(val);
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber(val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n;
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? function (val) {
    return map[val.toLowerCase()];
  } : function (val) {
    return map[val];
  };
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
});

/**
 * Simple bind, faster than native
 */
function bind(fn, ctx) {
  function boundFn(a) {
    var l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn;
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret;
}

/**
 * Mix properties into target object.
 */
function extend(to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to;
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject(arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res;
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop(a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) {
  return false;
};

/**
 * Return same value
 */
var identity = function (_) {
  return _;
};

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys(modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || []);
  }, []).join(',');
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual(a, b) {
  if (a === b) {
    return true;
  }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i]);
        });
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key]);
        });
      } else {
        /* istanbul ignore next */
        return false;
      }
    } catch (e) {
      /* istanbul ignore next */
      return false;
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
}

function looseIndexOf(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) {
      return i;
    }
  }
  return -1;
}

/**
 * Ensure a function is called only once.
 */
function once(fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  };
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = ['component', 'directive', 'filter'];

var LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated', 'errorCaptured'];

/*  */

var config = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: process.env.NODE_ENV !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: process.env.NODE_ENV !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
};

/*  */

var emptyObject = Object.freeze({});

/**
 * Check if a string starts with $ or _
 */
function isReserved(str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F;
}

/**
 * Define a property.
 */
function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath(path) {
  if (bailRE.test(path)) {
    return;
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) {
        return;
      }
      obj = obj[segments[i]];
    }
    return obj;
  };
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = {}.watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', {
      get: function get() {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    }); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer;
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative(Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
}

var hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) && typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = function () {
    function Set() {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has(key) {
      return this.set[key] === true;
    };
    Set.prototype.add = function add(key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear() {
      this.set = Object.create(null);
    };

    return Set;
  }();
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = noop; // work around flow check
var formatComponentName = noop;

if (process.env.NODE_ENV !== 'production') {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) {
    return str.replace(classifyRE, function (c) {
      return c.toUpperCase();
    }).replace(/[-_]/g, '');
  };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && !config.silent) {
      console.error("[Vue warn]: " + msg + trace);
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && !config.silent) {
      console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ''));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>';
    }
    var options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : '');
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) {
        res += str;
      }
      if (n > 1) {
        str += str;
      }
      n >>= 1;
    }
    return res;
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue;
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree.map(function (vm, i) {
        return "" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm) ? formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)" : formatComponentName(vm));
      }).join('\n');
    } else {
      return "\n\n(found in " + formatComponentName(vm) + ")";
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep() {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub(sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub(sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend() {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify() {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget(_target) {
  if (Dep.target) {
    targetStack.push(Dep.target);
  }
  Dep.target = _target;
}

function popTarget() {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.functionalContext = undefined;
  this.functionalOptions = undefined;
  this.functionalScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance;
};

Object.defineProperties(VNode.prototype, prototypeAccessors);

var createEmptyVNode = function (text) {
  if (text === void 0) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node;
};

function createTextVNode(val) {
  return new VNode(undefined, undefined, undefined, String(val));
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode(vnode, deep) {
  var cloned = new VNode(vnode.tag, vnode.data, vnode.children, vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.isCloned = true;
  if (deep && vnode.children) {
    cloned.children = cloneVNodes(vnode.children);
  }
  return cloned;
}

function cloneVNodes(vnodes, deep) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i], deep);
  }
  return res;
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator() {
    var args = [],
        len = arguments.length;
    while (len--) args[len] = arguments[len];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.slice(2);
        break;
    }
    if (inserted) {
      ob.observeArray(inserted);
    }
    // notify change
    ob.dep.notify();
    return result;
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer(value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto ? protoAugment : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk(obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray(items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment(target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment(target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe(value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return;
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (observerState.shouldConvert && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob;
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive(obj, key, val, customSetter, shallow) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return;
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value;
    },
    set: function reactiveSetter(newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || newVal !== newVal && value !== value) {
        return;
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set(target, key, val) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  if (hasOwn(target, key)) {
    target[key] = val;
    return val;
  }
  var ob = target.__ob__;
  if (target._isVue || ob && ob.vmCount) {
    process.env.NODE_ENV !== 'production' && warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
    return val;
  }
  if (!ob) {
    target[key] = val;
    return val;
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val;
}

/**
 * Delete a property and trigger change if necessary.
 */
function del(target, key) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return;
  }
  var ob = target.__ob__;
  if (target._isVue || ob && ob.vmCount) {
    process.env.NODE_ENV !== 'production' && warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
    return;
  }
  if (!hasOwn(target, key)) {
    return;
  }
  delete target[key];
  if (!ob) {
    return;
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray(value) {
  for (var e = void 0, i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (process.env.NODE_ENV !== 'production') {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');
    }
    return defaultStrat(parent, child);
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData(to, from) {
  if (!from) {
    return to;
  }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to;
}

/**
 * Data
 */
function mergeDataOrFn(parentVal, childVal, vm) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal;
    }
    if (!parentVal) {
      return childVal;
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn() {
      return mergeData(typeof childVal === 'function' ? childVal.call(this) : childVal, typeof parentVal === 'function' ? parentVal.call(this) : parentVal);
    };
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn() {
      // instance merge
      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData);
      } else {
        return defaultData;
      }
    };
  }
}

strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);

      return parentVal;
    }
    return mergeDataOrFn.call(this, parentVal, childVal);
  }

  return mergeDataOrFn(parentVal, childVal, vm);
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook(parentVal, childVal) {
  return childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets(parentVal, childVal, vm, key) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    process.env.NODE_ENV !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal);
  } else {
    return res;
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal, vm, key) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) {
    parentVal = undefined;
  }
  if (childVal === nativeWatch) {
    childVal = undefined;
  }
  /* istanbul ignore if */
  if (!childVal) {
    return Object.create(parentVal || null);
  }
  if (process.env.NODE_ENV !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) {
    return childVal;
  }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
  }
  return ret;
};

/**
 * Other object hashes.
 */
strats.props = strats.methods = strats.inject = strats.computed = function (parentVal, childVal, vm, key) {
  if (childVal && process.env.NODE_ENV !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) {
    return childVal;
  }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) {
    extend(ret, childVal);
  }
  return ret;
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};

/**
 * Validate component names
 */
function checkComponents(options) {
  for (var key in options.components) {
    var lower = key.toLowerCase();
    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
      warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps(options, vm) {
  var props = options.props;
  if (!props) {
    return;
  }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (process.env.NODE_ENV !== 'production') {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val) ? val : { type: val };
    }
  } else if (process.env.NODE_ENV !== 'production') {
    warn("Invalid value for option \"props\": expected an Array or an Object, " + "but got " + toRawType(props) + ".", vm);
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject(options, vm) {
  var inject = options.inject;
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val) ? extend({ from: key }, val) : { from: val };
    }
  } else if (process.env.NODE_ENV !== 'production' && inject) {
    warn("Invalid value for option \"inject\": expected an Array or an Object, " + "but got " + toRawType(inject) + ".", vm);
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives(options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType(name, value, vm) {
  if (!isPlainObject(value)) {
    warn("Invalid value for option \"" + name + "\": expected an Object, " + "but got " + toRawType(value) + ".", vm);
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions(parent, child, vm) {
  if (process.env.NODE_ENV !== 'production') {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField(key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options;
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset(options, type, id, warnMissing) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return;
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) {
    return assets[id];
  }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) {
    return assets[camelizedId];
  }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) {
    return assets[PascalCaseId];
  }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
  }
  return res;
}

/*  */

function validateProp(key, propOptions, propsData, vm) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  if (process.env.NODE_ENV !== 'production') {
    assertProp(prop, key, value, vm, absent);
  }
  return value;
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue(vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined;
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (process.env.NODE_ENV !== 'production' && isObject(def)) {
    warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
    return vm._props[key];
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def;
}

/**
 * Assert whether a prop is valid.
 */
function assertProp(prop, name, value, vm, absent) {
  if (prop.required && absent) {
    warn('Missing required prop: "' + name + '"', vm);
    return;
  }
  if (value == null && !prop.required) {
    return;
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn("Invalid prop: type check failed for prop \"" + name + "\"." + " Expected " + expectedTypes.map(capitalize).join(', ') + ", got " + toRawType(value) + ".", vm);
    return;
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType(value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  };
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType(fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : '';
}

function isType(type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type);
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true;
    }
  }
  /* istanbul ignore next */
  return false;
}

/*  */

function handleError(err, vm, info) {
  if (vm) {
    var cur = vm;
    while (cur = cur.$parent) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) {
              return;
            }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError(err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info);
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError(err, vm, info) {
  if (process.env.NODE_ENV !== 'production') {
    warn("Error in " + info + ": \"" + err.toString() + "\"", vm);
  }
  /* istanbul ignore else */
  if (inBrowser && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err;
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks() {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both micro and macro tasks.
// In < 2.4 we used micro tasks everywhere, but there are some scenarios where
// micro tasks have too high a priority and fires in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using macro tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use micro task by default, but expose a way to force macro task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) Task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (isNative(MessageChannel) ||
// PhantomJS
MessageChannel.toString() === '[object MessageChannelConstructor]')) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine MicroTask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) {
      setTimeout(noop);
    }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a Task instead of a MicroTask.
 */
function withMacroTask(fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res;
  });
}

function nextTick(cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    });
  }
}

/*  */

var mark;
var measure;

if (process.env.NODE_ENV !== 'production') {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
    mark = function (tag) {
      return perf.mark(tag);
    };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (process.env.NODE_ENV !== 'production') {
  var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn("Property or method \"" + key + "\" is not defined on the instance but " + 'referenced during render. Make sure that this property is reactive, ' + 'either in the data option, or for class-based components, by ' + 'initializing the property. ' + 'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
  };

  var hasProxy = typeof Proxy !== 'undefined' && Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set(target, key, value) {
        if (isBuiltInModifier(key)) {
          warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
          return false;
        } else {
          target[key] = value;
          return true;
        }
      }
    });
  }

  var hasHandler = {
    has: function has(target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed;
    }
  };

  var getHandler = {
    get: function get(target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key];
    }
  };

  initProxy = function initProxy(vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  };
});

function createFnInvoker(fns) {
  function invoker() {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments);
    }
  }
  invoker.fns = fns;
  return invoker;
}

function updateListeners(on, oldOn, add, remove$$1, vm) {
  var name, cur, old, event;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      process.env.NODE_ENV !== 'production' && warn("Invalid handler for event \"" + event.name + "\": got " + String(cur), vm);
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook(def, hookKey, hook) {
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook() {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData(data, Ctor, tag) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return;
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (process.env.NODE_ENV !== 'production') {
        var keyInLowerCase = key.toLowerCase();
        if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
          tip("Prop \"" + keyInLowerCase + "\" is passed to component " + formatComponentName(tag || Ctor) + ", but the declared prop name is" + " \"" + key + "\". " + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\".");
        }
      }
      checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
    }
  }
  return res;
}

function checkProp(res, hash, key, altKey, preserve) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true;
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true;
    }
  }
  return false;
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren(children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children);
    }
  }
  return children;
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren(children) {
  return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
}

function isTextNode(node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment);
}

function normalizeArrayChildren(children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') {
      continue;
    }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, (nestedIndex || '') + "_" + i);
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + c[0].text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res;
}

/*  */

function ensureCtor(comp, base) {
  if (comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === 'Module') {
    comp = comp.default;
  }
  return isObject(comp) ? base.extend(comp) : comp;
}

function createAsyncPlaceholder(factory, data, context, children, tag) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node;
}

function resolveAsyncComponent(factory, baseCtor, context) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp;
  }

  if (isDef(factory.resolved)) {
    return factory.resolved;
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp;
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      process.env.NODE_ENV !== 'production' && warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ''));
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(process.env.NODE_ENV !== 'production' ? "timeout (" + res.timeout + "ms)" : null);
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading ? factory.loadingComp : factory.resolved;
  }
}

/*  */

function isAsyncPlaceholder(node) {
  return node.isComment && node.asyncFactory;
}

/*  */

function getFirstComponentChild(children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c;
      }
    }
  }
}

/*  */

/*  */

function initEvents(vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add(event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1(event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners(vm, listeners, oldListeners) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
}

function eventsMixin(Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm;
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on() {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm;
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm;
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm;
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm;
    }
    if (arguments.length === 1) {
      vm._events[event] = null;
      return vm;
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break;
        }
      }
    }
    return vm;
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (process.env.NODE_ENV !== 'production') {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip("Event \"" + lowerCaseEvent + "\" is emitted in component " + formatComponentName(vm) + " but the handler is registered for \"" + event + "\". " + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"" + hyphenate(event) + "\" instead of \"" + event + "\".");
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, "event handler for \"" + event + "\"");
        }
      }
    }
    return vm;
  };
}

/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots(children, context) {
  var slots = {};
  if (!children) {
    return slots;
  }
  var defaultSlot = [];
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.functionalContext === context) && data && data.slot != null) {
      var name = child.data.slot;
      var slot = slots[name] || (slots[name] = []);
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      defaultSlot.push(child);
    }
  }
  // ignore whitespace
  if (!defaultSlot.every(isWhitespace)) {
    slots.default = defaultSlot;
  }
  return slots;
}

function isWhitespace(node) {
  return node.isComment || node.text === ' ';
}

function resolveScopedSlots(fns, // see flow/vnode
res) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res;
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle(vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin(Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */
      , vm.$options._parentElm, vm.$options._refElm);
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return;
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent(vm, el, hydrating) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (process.env.NODE_ENV !== 'production') {
      /* istanbul ignore if */
      if (vm.$options.template && vm.$options.template.charAt(0) !== '#' || vm.$options.el || el) {
        warn('You are using the runtime-only build of Vue where the template ' + 'compiler is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
      } else {
        warn('Failed to mount component: template or render function not defined.', vm);
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure("vue " + name + " render", startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure("vue " + name + " patch", startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  vm._watcher = new Watcher(vm, updateComponent, noop);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm;
}

function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
  if (process.env.NODE_ENV !== 'production') {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(renderChildren || // has new static slots
  vm.$options._renderChildren || // has old static slots
  parentVnode.data.scopedSlots || // has new scoped slots
  vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) {
    // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data && parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (process.env.NODE_ENV !== 'production') {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree(vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) {
      return true;
    }
  }
  return false;
}

function activateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return;
    }
  } else if (vm._directInactive) {
    return;
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return;
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook(vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, hook + " hook");
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState() {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (process.env.NODE_ENV !== 'production') {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue() {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) {
    return a.id - b.id;
  });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn('You may have an infinite update loop ' + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
        break;
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks(queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent(vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks(queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher(watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher(vm, expOrFn, cb, options) {
  this.vm = vm;
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = process.env.NODE_ENV !== 'production' ? expOrFn.toString() : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      process.env.NODE_ENV !== 'production' && warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
    }
  }
  this.value = this.lazy ? undefined : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get() {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, "getter for watcher \"" + this.expression + "\"");
    } else {
      throw e;
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value;
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep(dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps() {
  var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update() {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run() {
  if (this.active) {
    var value = this.get();
    if (value !== this.value ||
    // Deep watchers and watchers on Object/Arrays should fire even
    // when the value is the same, because the value may
    // have mutated.
    isObject(value) || this.deep) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, "callback for watcher \"" + this.expression + "\"");
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate() {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend() {
  var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown() {
  var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
var seenObjects = new _Set();
function traverse(val) {
  seenObjects.clear();
  _traverse(val, seenObjects);
}

function _traverse(val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if (!isA && !isObject(val) || !Object.isExtensible(val)) {
    return;
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return;
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) {
      _traverse(val[i], seen);
    }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) {
      _traverse(val[keys[i]], seen);
    }
  }
}

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState(vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) {
    initProps(vm, opts.props);
  }
  if (opts.methods) {
    initMethods(vm, opts.methods);
  }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) {
    initComputed(vm, opts.computed);
  }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps(vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function (key) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)) {
        warn("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop.", vm);
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
        }
      });
    } else {
      defineReactive(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop(key);
  observerState.shouldConvert = true;
}

function initData(vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {};
  if (!isPlainObject(data)) {
    data = {};
    process.env.NODE_ENV !== 'production' && warn('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (process.env.NODE_ENV !== 'production') {
      if (methods && hasOwn(methods, key)) {
        warn("Method \"" + key + "\" has already been defined as a data property.", vm);
      }
    }
    if (props && hasOwn(props, key)) {
      process.env.NODE_ENV !== 'production' && warn("The data property \"" + key + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData(data, vm) {
  try {
    return data.call(vm, vm);
  } catch (e) {
    handleError(e, vm, "data()");
    return {};
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed(vm, computed) {
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (process.env.NODE_ENV !== 'production' && getter == null) {
      warn("Getter is missing for computed property \"" + key + "\".", vm);
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (process.env.NODE_ENV !== 'production') {
      if (key in vm.$data) {
        warn("The computed property \"" + key + "\" is already defined in data.", vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn("The computed property \"" + key + "\" is already defined as a prop.", vm);
      }
    }
  }
}

function defineComputed(target, key, userDef) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : userDef.get : noop;
    sharedPropertyDefinition.set = userDef.set ? userDef.set : noop;
  }
  if (process.env.NODE_ENV !== 'production' && sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn("Computed property \"" + key + "\" was assigned to but it has no setter.", this);
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter(key) {
  return function computedGetter() {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value;
    }
  };
}

function initMethods(vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (process.env.NODE_ENV !== 'production') {
      if (methods[key] == null) {
        warn("Method \"" + key + "\" has an undefined value in the component definition. " + "Did you reference the function correctly?", vm);
      }
      if (props && hasOwn(props, key)) {
        warn("Method \"" + key + "\" has already been defined as a prop.", vm);
      }
      if (key in vm && isReserved(key)) {
        warn("Method \"" + key + "\" conflicts with an existing Vue instance method. " + "Avoid defining component methods that start with _ or $.");
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch(vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher(vm, keyOrFn, handler, options) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(keyOrFn, handler, options);
}

function stateMixin(Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () {
    return this._data;
  };
  var propsDef = {};
  propsDef.get = function () {
    return this._props;
  };
  if (process.env.NODE_ENV !== 'production') {
    dataDef.set = function (newData) {
      warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (expOrFn, cb, options) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options);
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn() {
      watcher.teardown();
    };
  };
}

/*  */

function initProvide(vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
  }
}

function initInjections(vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    observerState.shouldConvert = false;
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        defineReactive(vm, key, result[key], function () {
          warn("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + "injection being mutated: \"" + key + "\"", vm);
        });
      } else {
        defineReactive(vm, key, result[key]);
      }
    });
    observerState.shouldConvert = true;
  }
}

function resolveInject(inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol ? Reflect.ownKeys(inject).filter(function (key) {
      /* istanbul ignore next */
      return Object.getOwnPropertyDescriptor(inject, key).enumerable;
    }) : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          result[key] = source._provided[provideKey];
          break;
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function' ? provideDefault.call(vm) : provideDefault;
        } else if (process.env.NODE_ENV !== 'production') {
          warn("Injection \"" + key + "\" not found", vm);
        }
      }
    }
    return result;
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList(val, render) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    ret._isVList = true;
  }
  return ret;
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot(name, fallback, props, bindObject) {
  var scopedSlotFn = this.$scopedSlots[name];
  if (scopedSlotFn) {
    // scoped slot
    props = props || {};
    if (bindObject) {
      if (process.env.NODE_ENV !== 'production' && !isObject(bindObject)) {
        warn('slot v-bind without argument expects an Object', this);
      }
      props = extend(extend({}, bindObject), props);
    }
    return scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes && process.env.NODE_ENV !== 'production') {
      slotNodes._rendered && warn("Duplicate presence of slot \"" + name + "\" found in the same render tree " + "- this will likely cause render errors.", this);
      slotNodes._rendered = true;
    }
    return slotNodes || fallback;
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter(id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity;
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes(eventKeyCode, key, builtInAlias, eventKeyName) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (keyCodes) {
    if (Array.isArray(keyCodes)) {
      return keyCodes.indexOf(eventKeyCode) === -1;
    } else {
      return keyCodes !== eventKeyCode;
    }
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key;
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps(data, tag, value, asProp, isSync) {
  if (value) {
    if (!isObject(value)) {
      process.env.NODE_ENV !== 'production' && warn('v-bind without argument expects an Object or Array value', this);
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function (key) {
        if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on["update:" + key] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop(key);
    }
  }
  return data;
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic(index, isInFor) {
  // static trees can be rendered once and cached on the contructor options
  // so every instance shares the same cached trees
  var renderFns = this.$options.staticRenderFns;
  var cached = renderFns.cached || (renderFns.cached = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree) ? cloneVNodes(tree) : cloneVNode(tree);
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = renderFns[index].call(this._renderProxy, null, this);
  markStatic(tree, "__static__" + index, false);
  return tree;
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce(tree, index, key) {
  markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
  return tree;
}

function markStatic(tree, key, isOnce) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], key + "_" + i, isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode(node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners(data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      process.env.NODE_ENV !== 'production' && warn('v-on without argument expects an Object value', this);
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data;
}

/*  */

function installRenderHelpers(target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext(data, props, children, parent, Ctor) {
  var options = Ctor.options;
  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    return resolveSlots(children, parent);
  };

  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm = Object.create(parent);
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode) {
        vnode.functionalScopeId = options._scopeId;
        vnode.functionalContext = parent;
      }
      return vnode;
    };
  } else {
    this._c = function (a, b, c, d) {
      return createElement(contextVm, a, b, c, d, needNormalization);
    };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) {
      mergeProps(props, data.attrs);
    }
    if (isDef(data.props)) {
      mergeProps(props, data.props);
    }
  }

  var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    vnode.functionalContext = contextVm;
    vnode.functionalOptions = options;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }

  return vnode;
}

function mergeProps(to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init(vnode, hydrating, parentElm, refElm) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance, parentElm, refElm);
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch(oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(child, options.propsData, // updated props
    options.listeners, // updated listeners
    vnode, // new parent vnode
    options.children // new children
    );
  },

  insert: function insert(vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy(vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent(Ctor, data, context, children, tag) {
  if (isUndef(Ctor)) {
    return;
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (process.env.NODE_ENV !== 'production') {
      warn("Invalid Component definition: " + String(Ctor), context);
    }
    return;
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children);
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }, asyncFactory);
  return vnode;
}

function createComponentInstanceForVnode(vnode, // we know it's MountedComponentVNode but flow doesn't
parent, // activeInstance in lifecycle state
parentElm, refElm) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options);
}

function mergeHooks(data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1(one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  };
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel(options, data) {
  var prop = options.model && options.model.prop || 'value';
  var event = options.model && options.model.event || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType);
}

function _createElement(context, tag, data, children, normalizationType) {
  if (isDef(data) && isDef(data.__ob__)) {
    process.env.NODE_ENV !== 'production' && warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + 'Always create fresh vnode data objects in each render!', context);
    return createEmptyVNode();
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode();
  }
  // warn against non-primitive key
  if (process.env.NODE_ENV !== 'production' && isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
    warn('Avoid using non-primitive value as key, ' + 'use string/number value instead.', context);
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) && typeof children[0] === 'function') {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(tag, data, children, undefined, undefined, context);
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (isDef(vnode)) {
    if (ns) {
      applyNS(vnode, ns);
    }
    return vnode;
  } else {
    return createEmptyVNode();
  }
}

function applyNS(vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force))) {
        applyNS(child, ns, force);
      }
    }
  }
}

/*  */

function initRender(vm) {
  vm._vnode = null; // the root of the child tree
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) {
    return createElement(vm, a, b, c, d, false);
  };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) {
    return createElement(vm, a, b, c, d, true);
  };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (process.env.NODE_ENV !== 'production') {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

function renderMixin(Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this);
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // if the parent didn't update, the slot nodes will be the ones from
      // last render. They need to be cloned to ensure "freshness" for this render.
      for (var key in vm.$slots) {
        var slot = vm.$slots[key];
        if (slot._rendered) {
          vm.$slots[key] = cloneVNodes(slot, true /* deep */);
        }
      }
    }

    vm.$scopedSlots = _parentVnode && _parentVnode.data.scopedSlots || emptyObject;

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
        warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode;
  };
}

/*  */

var uid$1 = 0;

function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$1++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + vm._uid;
      endTag = "vue-perf-end:" + vm._uid;
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
    }
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure("vue " + vm._name + " init", startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent(vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions(Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options;
}

function resolveModifiedOptions(Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) {
        modified = {};
      }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified;
}

function dedupe(latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res;
  } else {
    return latest;
  }
}

function Vue$3(options) {
  if (process.env.NODE_ENV !== 'production' && !(this instanceof Vue$3)) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

/*  */

function initUse(Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = this._installedPlugins || (this._installedPlugins = []);
    if (installedPlugins.indexOf(plugin) > -1) {
      return this;
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this;
  };
}

/*  */

function initMixin$1(Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this;
  };
}

/*  */

function initExtend(Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId];
    }

    var name = extendOptions.name || Super.options.name;
    if (process.env.NODE_ENV !== 'production') {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characters and the hyphen, ' + 'and must start with a letter.');
      }
    }

    var Sub = function VueComponent(options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(Super.options, extendOptions);
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub;
  };
}

function initProps$1(Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1(Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters(Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (id, definition) {
      if (!definition) {
        return this.options[type + 's'][id];
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production') {
          if (type === 'component' && config.isReservedTag(id)) {
            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition;
      }
    };
  });
}

/*  */

function getComponentName(opts) {
  return opts && (opts.Ctor.options.name || opts.tag);
}

function matches(pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1;
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1;
  } else if (isRegExp(pattern)) {
    return pattern.test(name);
  }
  /* istanbul ignore next */
  return false;
}

function pruneCache(keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry(cache, key, keys, current) {
  var cached$$1 = cache[key];
  if (cached$$1 && cached$$1 !== current) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created() {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed() {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  watch: {
    include: function include(val) {
      pruneCache(this, function (name) {
        return matches(val, name);
      });
    },
    exclude: function exclude(val) {
      pruneCache(this, function (name) {
        return !matches(val, name);
      });
    }
  },

  render: function render() {
    var vnode = getFirstComponentChild(this.$slots.default);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      if (name && (this.include && !matches(this.include, name) || this.exclude && matches(this.exclude, name))) {
        return vnode;
      }

      var ref = this;
      var cache = ref.cache;
      var keys = ref.keys;
      var key = vnode.key == null
      // same constructor may get registered as different local components
      // so cid alone is not enough (#3269)
      ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : '') : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode;
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI(Vue) {
  // config
  var configDef = {};
  configDef.get = function () {
    return config;
  };
  if (process.env.NODE_ENV !== 'production') {
    configDef.set = function () {
      warn('Do not replace the Vue.config object, set individual fields instead.');
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue$3.prototype, '$ssrContext', {
  get: function get() {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext;
  }
});

Vue$3.version = '2.5.2';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return attr === 'value' && acceptValue(tag) && type !== 'button' || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,translate,' + 'truespeed,typemustmatch,visible');

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : '';
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false;
};

/*  */

function genClassForVnode(vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class);
}

function mergeClassData(child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class) ? [child.class, parent.class] : parent.class
  };
}

function renderClass(staticClass, dynamicClass) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass));
  }
  /* istanbul ignore next */
  return '';
}

function concat(a, b) {
  return a ? b ? a + ' ' + b : a : b || '';
}

function stringifyClass(value) {
  if (Array.isArray(value)) {
    return stringifyArray(value);
  }
  if (isObject(value)) {
    return stringifyObject(value);
  }
  if (typeof value === 'string') {
    return value;
  }
  /* istanbul ignore next */
  return '';
}

function stringifyArray(value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) {
        res += ' ';
      }
      res += stringified;
    }
  }
  return res;
}

function stringifyObject(value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) {
        res += ' ';
      }
      res += key;
    }
  }
  return res;
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot');

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);

var isPreTag = function (tag) {
  return tag === 'pre';
};

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag);
};

function getTagNamespace(tag) {
  if (isSVG(tag)) {
    return 'svg';
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math';
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement(tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true;
  }
  if (isReservedTag(tag)) {
    return false;
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag];
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
  } else {
    return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query(el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + el);
      return document.createElement('div');
    }
    return selected;
  } else {
    return el;
  }
}

/*  */

function createElement$1(tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm;
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm;
}

function createElementNS(namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName);
}

function createTextNode(text) {
  return document.createTextNode(text);
}

function createComment(text) {
  return document.createComment(text);
}

function insertBefore(parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild(node, child) {
  node.removeChild(child);
}

function appendChild(node, child) {
  node.appendChild(child);
}

function parentNode(node) {
  return node.parentNode;
}

function nextSibling(node) {
  return node.nextSibling;
}

function tagName(node) {
  return node.tagName;
}

function setTextContent(node, text) {
  node.textContent = text;
}

function setAttribute(node, key, val) {
  node.setAttribute(key, val);
}

var nodeOps = Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create(_, vnode) {
    registerRef(vnode);
  },
  update: function update(oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy(vnode) {
    registerRef(vnode, true);
  }
};

function registerRef(vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) {
    return;
  }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode(a, b) {
  return a.key === b.key && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && a.asyncFactory === b.asyncFactory && isUndef(b.asyncFactory.error));
}

function sameInputType(a, b) {
  if (a.tag !== 'input') {
    return true;
  }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) {
      map[key] = i;
    }
  }
  return map;
}

function createPatchFunction(backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt(elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
  }

  function createRmCb(childElm, listeners) {
    function remove() {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove;
  }

  function removeNode(el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  var inPre = 0;
  function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return;
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (process.env.NODE_ENV !== 'production') {
        if (data && data.pre) {
          inPre++;
        }
        if (!inPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore) ? ignore.test(tag) : ignore === tag;
        })) && config.isUnknownElement(tag)) {
          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
        }
      }
      vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (process.env.NODE_ENV !== 'production' && data && data.pre) {
        inPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true;
      }
    }
  }

  function initComponent(vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break;
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert(parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren(vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable(vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag);
  }

  function invokeCreateHooks(vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) {
        i.create(emptyNode, vnode);
      }
      if (isDef(i.insert)) {
        insertedVnodeQueue.push(vnode);
      }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope(vnode) {
    var i;
    if (isDef(i = vnode.functionalScopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setAttribute(vnode.elm, i, '');
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) && i !== vnode.context && i !== vnode.functionalContext && isDef(i = i.$options._scopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook(vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) {
        i(vnode);
      }
      for (i = 0; i < cbs.destroy.length; ++i) {
        cbs.destroy[i](vnode);
      }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else {
          // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook(vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) {
        // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) {
        // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) {
          oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        }
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) {
          // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
        } else {
          vnodeToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if (process.env.NODE_ENV !== 'production' && !vnodeToMove) {
            warn('It seems there are duplicate keys that is causing an update error. ' + 'Make sure each v-for item has a unique key.');
          }
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function findIdxInOld(node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) {
        return i;
      }
    }
  }

  function patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return;
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return;
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
      vnode.componentInstance = oldVnode.componentInstance;
      return;
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) {
        cbs.update[i](oldVnode, vnode);
      }
      if (isDef(i = data.hook) && isDef(i = i.update)) {
        i(oldVnode, vnode);
      }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) {
          updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
        }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
        i(oldVnode, vnode);
      }
    }
  }

  function invokeInsertHook(vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var bailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate(elm, vnode, insertedVnodeQueue) {
    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.elm = elm;
      vnode.isAsyncPlaceholder = true;
      return true;
    }
    if (process.env.NODE_ENV !== 'production') {
      if (!assertNodeMatch(elm, vnode)) {
        return false;
      }
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) {
        i(vnode, true /* hydrating */);
      }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true;
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined' && !bailed) {
                bailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false;
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
                childrenMatch = false;
                break;
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined' && !bailed) {
                bailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false;
            }
          }
        }
      }
      if (isDef(data)) {
        for (var key in data) {
          if (!isRenderedModule(key)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break;
          }
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true;
  }

  function assertNodeMatch(node, vnode) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3);
    }
  }

  return function patch(oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) {
        invokeDestroyHook(oldVnode);
      }
      return;
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode;
            } else if (process.env.NODE_ENV !== 'production') {
              warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }
        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);
        createElm(vnode, insertedVnodeQueue,
        // extremely rare edge case: do not insert if old element is in a
        // leaving transition. Only happens when combining transition +
        // keep-alive + HOCs. (#4590)
        oldElm._leaveCb ? null : parentElm$1, nodeOps.nextSibling(oldElm));

        if (isDef(vnode.parent)) {
          // component root element replaced.
          // update parent placeholder node element, recursively
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm;
  };
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives(vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives(oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update(oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1(dirs, vm) {
  var res = Object.create(null);
  if (!dirs) {
    return res;
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  return res;
}

function getRawDirName(dir) {
  return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join('.');
}

function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
    }
  }
}

var baseModules = [ref, directives];

/*  */

function updateAttrs(oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return;
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return;
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE9 || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr(el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED' ? 'true' : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass(oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class))) {
    return;
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters(exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) {
        inSingle = false;
      }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) {
        inDouble = false;
      }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) {
        inTemplateString = false;
      }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) {
        inRegex = false;
      }
    } else if (c === 0x7C && // pipe
    exp.charCodeAt(i + 1) !== 0x7C && exp.charCodeAt(i - 1) !== 0x7C && !curly && !square && !paren) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22:
          inDouble = true;break; // "
        case 0x27:
          inSingle = true;break; // '
        case 0x60:
          inTemplateString = true;break; // `
        case 0x28:
          paren++;break; // (
        case 0x29:
          paren--;break; // )
        case 0x5B:
          square++;break; // [
        case 0x5D:
          square--;break; // ]
        case 0x7B:
          curly++;break; // {
        case 0x7D:
          curly--;break; // }
      }
      if (c === 0x2f) {
        // /
        var j = i - 1;
        var p = void 0;
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') {
            break;
          }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter() {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression;
}

function wrapFilter(exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return "_f(\"" + filter + "\")(" + exp + ")";
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return "_f(\"" + name + "\")(" + exp + "," + args;
  }
}

/*  */

function baseWarn(msg) {
  console.error("[Vue compiler]: " + msg);
}

function pluckModuleFunction(modules, key) {
  return modules ? modules.map(function (m) {
    return m[key];
  }).filter(function (_) {
    return _;
  }) : [];
}

function addProp(el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
}

function addAttr(el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
}

function addDirective(el, name, rawName, value, arg, modifiers) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
}

function addHandler(el, name, value, modifiers, important, warn) {
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production' && warn && modifiers && modifiers.prevent && modifiers.passive) {
    warn('passive and prevent can\'t be used together. ' + 'Passive handler can\'t prevent default event.');
  }
  // check capture modifier
  if (modifiers && modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers && modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers && modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }
  var events;
  if (modifiers && modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }
  var newHandler = { value: value, modifiers: modifiers };
  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }
}

function getBindingAttr(el, name, getStatic) {
  var dynamicValue = getAndRemoveAttr(el, ':' + name) || getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue);
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue);
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr(el, name, removeFromMap) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break;
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val;
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel(el, value, modifiers) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression = "(typeof " + baseValueExpression + " === 'string'" + "? " + baseValueExpression + ".trim()" + ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: "(" + value + ")",
    expression: "\"" + value + "\"",
    callback: "function (" + baseValueExpression + ") {" + assignment + "}"
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode(value, assignment) {
  var res = parseModel(value);
  if (res.key === null) {
    return value + "=" + assignment;
  } else {
    return "$set(" + res.exp + ", " + res.key + ", " + assignment + ")";
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;

function parseModel(val) {
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      };
    } else {
      return {
        exp: val,
        key: null
      };
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  };
}

function next() {
  return str.charCodeAt(++index$1);
}

function eof() {
  return index$1 >= len;
}

function isStringStart(chr) {
  return chr === 0x22 || chr === 0x27;
}

function parseBracket(chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue;
    }
    if (chr === 0x5B) {
      inBracket++;
    }
    if (chr === 0x5D) {
      inBracket--;
    }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break;
    }
  }
}

function parseString(chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break;
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model(el, dir, _warn) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (process.env.NODE_ENV !== 'production') {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1("<" + el.tag + " v-model=\"" + value + "\" type=\"file\">:\n" + "File inputs are read only. Use a v-on:change listener instead.");
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false;
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false;
  } else if (process.env.NODE_ENV !== 'production') {
    warn$1("<" + el.tag + " v-model=\"" + value + "\">: " + "v-model is not supported on this element type. " + 'If you are working with contenteditable, it\'s recommended to ' + 'wrap a library dedicated for that purpose inside a custom component.');
  }

  // ensure runtime directive metadata
  return true;
}

function genCheckboxModel(el, value, modifiers) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked', "Array.isArray(" + value + ")" + "?_i(" + value + "," + valueBinding + ")>-1" + (trueValueBinding === 'true' ? ":(" + value + ")" : ":_q(" + value + "," + trueValueBinding + ")"));
  addHandler(el, 'change', "var $$a=" + value + "," + '$$el=$event.target,' + "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" + 'if(Array.isArray($$a)){' + "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," + '$$i=_i($$a,$$v);' + "if($$el.checked){$$i<0&&(" + value + "=$$a.concat([$$v]))}" + "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" + "}else{" + genAssignmentCode(value, '$$c') + "}", null, true);
}

function genRadioModel(el, value, modifiers) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? "_n(" + valueBinding + ")" : valueBinding;
  addProp(el, 'checked', "_q(" + value + "," + valueBinding + ")");
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect(el, value, modifiers) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" + ".call($event.target.options,function(o){return o.selected})" + ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" + "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + genAssignmentCode(value, assignment);
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel(el, value, modifiers) {
  var type = el.attrsMap.type;
  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy ? 'change' : type === 'range' ? RANGE_TOKEN : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', "(" + value + ")");
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents(on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler(handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler() {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  };
}

function add$1(event, handler, once$$1, capture, passive) {
  handler = withMacroTask(handler);
  if (once$$1) {
    handler = createOnceHandler(handler, event, capture);
  }
  target$1.addEventListener(event, handler, supportsPassive ? { capture: capture, passive: passive } : capture);
}

function remove$2(event, handler, capture, _target) {
  (_target || target$1).removeEventListener(event, handler._withTask || handler, capture);
}

function updateDOMListeners(oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return;
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps(oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return;
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) {
        vnode.children.length = 0;
      }
      if (cur === oldProps[key]) {
        continue;
      }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue(elm, checkVal) {
  return !elm.composing && (elm.tagName === 'OPTION' || isDirty(elm, checkVal) || isInputChanged(elm, checkVal));
}

function isDirty(elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try {
    notInFocus = document.activeElement !== elm;
  } catch (e) {}
  return notInFocus && elm.value !== checkVal;
}

function isInputChanged(elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers) && modifiers.number) {
    return toNumber(value) !== toNumber(newVal);
  }
  if (isDef(modifiers) && modifiers.trim) {
    return value.trim() !== newVal.trim();
  }
  return value !== newVal;
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res;
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData(data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle ? extend(data.staticStyle, style) : style;
}

// normalize possible array / string values into Object
function normalizeStyleBinding(bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle);
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle);
  }
  return bindingStyle;
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle(vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if (styleData = normalizeStyleData(vnode.data)) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while (parentNode = parentNode.parent) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res;
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && prop in emptyStyle) {
    return prop;
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name;
    }
  }
});

function updateStyle(oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
    return;
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass(el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return;
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) {
        return el.classList.add(c);
      });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass(el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return;
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) {
        return el.classList.remove(c);
      });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition(def) {
  if (!def) {
    return;
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res;
  } else if (typeof def === 'string') {
    return autoCssTransition(def);
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: name + "-enter",
    enterToClass: name + "-enter-to",
    enterActiveClass: name + "-enter-active",
    leaveClass: name + "-leave",
    leaveToClass: name + "-leave-to",
    leaveActiveClass: name + "-leave-active"
  };
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : /* istanbul ignore next */function (fn) {
  return fn();
};

function nextFrame(fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass(el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass(el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds(el, expectedType, cb) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) {
    return cb();
  }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo(el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }
  var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  };
}

function getTimeout(delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i]);
  }));
}

function toMs(s) {
  return Number(s.slice(0, -1)) * 1000;
}

/*  */

function enter(vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return;
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return;
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return;
  }

  var startClass = isAppear && appearClass ? appearClass : enterClass;
  var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
  var toClass = isAppear && appearToClass ? appearToClass : enterToClass;

  var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
  var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
  var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
  var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;

  var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);

  if (process.env.NODE_ENV !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave(vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return rm();
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb) || el.nodeType !== 1) {
    return;
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);

  if (process.env.NODE_ENV !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave() {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return;
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration(val, name, vnode) {
  if (typeof val !== 'number') {
    warn("<transition> explicit " + name + " duration is not a valid number - " + "got " + JSON.stringify(val) + ".", vnode.context);
  } else if (isNaN(val)) {
    warn("<transition> explicit " + name + " duration is NaN - " + 'the duration expression might be incorrect.', vnode.context);
  }
}

function isValidDuration(val) {
  return typeof val === 'number' && !isNaN(val);
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength(fn) {
  if (isUndef(fn)) {
    return false;
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
  } else {
    return (fn._length || fn.length) > 1;
  }
}

function _enter(_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1(vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [attrs, klass, events, domProps, style, transition];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var model$1 = {
  inserted: function inserted(el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated(el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) {
        return !looseEqual(o, prevOptions[i]);
      })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple ? binding.value.some(function (v) {
          return hasNoMatchingOption(v, curOptions);
        }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected(el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected(el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    process.env.NODE_ENV !== 'production' && warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
    return;
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return;
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption(value, options) {
  return options.every(function (o) {
    return !looseEqual(o, value);
  });
}

function getValue(option) {
  return '_value' in option ? option._value : option.value;
}

function onCompositionStart(e) {
  e.target.composing = true;
}

function onCompositionEnd(e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) {
    return;
  }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger(el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode(vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
}

var show = {
  bind: function bind(el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay = el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update(el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) {
      return;
    }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: model$1,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild(vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children));
  } else {
    return vnode;
  }
}

function extractTransitionData(comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data;
}

function placeholder(h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    });
  }
}

function hasParentTransition(vnode) {
  while (vnode = vnode.parent) {
    if (vnode.data.transition) {
      return true;
    }
  }
}

function isSameChild(child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag;
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render(h) {
    var this$1 = this;

    var children = this.$options._renderChildren;
    if (!children) {
      return;
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) {
      return c.tag || isAsyncPlaceholder(c);
    });
    /* istanbul ignore if */
    if (!children.length) {
      return;
    }

    // warn multiple elements
    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
      warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.', this.$parent);
    }

    var mode = this.mode;

    // warn invalid mode
    if (process.env.NODE_ENV !== 'production' && mode && mode !== 'in-out' && mode !== 'out-in') {
      warn('invalid <transition> mode: ' + mode, this.$parent);
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild;
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild;
    }

    if (this._leaving) {
      return placeholder(h, rawChild);
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + this._uid + "-";
    child.key = child.key == null ? child.isComment ? id + 'comment' : id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) {
      return d.name === 'show';
    })) {
      child.data.show = true;
    }

    if (oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild)) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild);
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild;
        }
        var delayedLeave;
        var performLeave = function () {
          delayedLeave();
        };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
          delayedLeave = leave;
        });
      }
    }

    return rawChild;
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render(h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c;(c.data || (c.data = {})).transition = transitionData;
        } else if (process.env.NODE_ENV !== 'production') {
          var opts = c.componentOptions;
          var name = opts ? opts.Ctor.options.name || opts.tag || '' : c.tag;
          warn("<transition-group> children must be keyed: <" + name + ">");
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children);
  },

  beforeUpdate: function beforeUpdate() {
    // force removing pass
    this.__patch__(this._vnode, this.kept, false, // hydrating
    true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated() {
    var children = this.prevChildren;
    var moveClass = this.moveClass || (this.name || 'v') + '-move';
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return;
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove(el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false;
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove;
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) {
          removeClass(clone, cls);
        });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return this._hasMove = info.hasTransform;
    }
  }
};

function callPendingCbs(c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition(c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation(c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$3.config.mustUseProp = mustUseProp;
Vue$3.config.isReservedTag = isReservedTag;
Vue$3.config.isReservedAttr = isReservedAttr;
Vue$3.config.getTagNamespace = getTagNamespace;
Vue$3.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue$3.options.directives, platformDirectives);
extend(Vue$3.options.components, platformComponents);

// install platform patch function
Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue$3.prototype.$mount = function (el, hydrating) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating);
};

// devtools global hook
/* istanbul ignore next */
Vue$3.nextTick(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$3);
    } else if (process.env.NODE_ENV !== 'production' && isChrome) {
      console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
    }
  }
  if (process.env.NODE_ENV !== 'production' && config.productionTip !== false && inBrowser && typeof console !== 'undefined') {
    console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
  }
}, 0);

/*  */

// check whether current browser encodes a char inside attribute values
function shouldDecode(content, encoded) {
  var div = document.createElement('div');
  div.innerHTML = "<div a=\"" + content + "\"/>";
  return div.innerHTML.indexOf(encoded) > 0;
}

// #3663
// IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false;

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g');
});

function parseText(text, delimiters) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return;
  }
  var tokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index;
  while (match = tagRE.exec(text)) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      tokens.push(JSON.stringify(text.slice(lastIndex, index)));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push("_s(" + exp + ")");
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    tokens.push(JSON.stringify(text.slice(lastIndex)));
  }
  return tokens.join('+');
}

/*  */

function transformNode(el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if (process.env.NODE_ENV !== 'production' && staticClass) {
    var expression = parseText(staticClass, options.delimiters);
    if (expression) {
      warn("class=\"" + staticClass + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div class="{{ val }}">, use <div :class="val">.');
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData(el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + el.staticClass + ",";
  }
  if (el.classBinding) {
    data += "class:" + el.classBinding + ",";
  }
  return data;
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1(el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production') {
      var expression = parseText(staticStyle, options.delimiters);
      if (expression) {
        warn("style=\"" + staticStyle + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div style="{{ val }}">, use <div :style="val">.');
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1(el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + el.staticStyle + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + el.styleBinding + "),";
  }
  return data;
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

/*  */

var decoder;

var he = {
  decode: function decode(html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent;
  }
};

/*  */

var isUnaryTag = makeMap('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' + 'link,meta,param,source,track,wbr');

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source');

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' + 'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' + 'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' + 'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' + 'title,tr,track');

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp("^<" + qnameCapture);
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp("^<\\/" + qnameCapture + "[^>]*>");
var doctype = /^<!DOCTYPE [^>]+>/i;
var comment = /^<!--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) {
  return tag && isIgnoreNewlineTag(tag) && html[0] === '\n';
};

function decodeAttr(value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) {
    return decodingMap[match];
  });
}

function parseHTML(html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue;
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue;
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue;
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue;
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue;
        }
      }

      var text = void 0,
          rest = void 0,
          next = void 0;
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (!endTag.test(rest) && !startTagOpen.test(rest) && !comment.test(rest) && !conditionalComment.test(rest)) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) {
            break;
          }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text.replace(/<!--([\s\S]*?)-->/g, '$1').replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return '';
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if (process.env.NODE_ENV !== 'production' && !stack.length && options.warn) {
        options.warn("Mal-formatted tag at end of template: \"" + html + "\"");
      }
      break;
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance(n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag() {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match;
      }
    }
  }

  function handleStartTag(match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') {
          delete args[3];
        }
        if (args[4] === '') {
          delete args[4];
        }
        if (args[5] === '') {
          delete args[5];
        }
      }
      var value = args[3] || args[4] || args[5] || '';
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, options.shouldDecodeNewlines)
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag(tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) {
      start = index;
    }
    if (end == null) {
      end = index;
    }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break;
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (process.env.NODE_ENV !== 'production' && (i > pos || !tagName) && options.warn) {
          options.warn("tag <" + stack[i].tag + "> has no matching end tag.");
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
var forIteratorRE = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;

function createASTElement(tag, attrs, parent) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    parent: parent,
    children: []
  };
}

/**
 * Convert HTML string to AST.
 */
function parse(template, options) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce(msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function endPre(element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldKeepComment: options.comments,
    start: function start(tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = currentParent && currentParent.ns || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        process.env.NODE_ENV !== 'production' && warn$2('Templates should only be responsible for mapping the state to the ' + 'UI. Avoid placing tags with side-effects in your templates, such as ' + "<" + tag + ">" + ', as they will not be parsed.');
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
        // element-scope stuff
        processElement(element, options);
      }

      function checkRootConstraints(el) {
        if (process.env.NODE_ENV !== 'production') {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce("Cannot use <" + el.tag + "> as component root element because it may " + 'contain multiple nodes.');
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce('Cannot use v-for on stateful component root element because ' + 'it renders multiple elements.');
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (process.env.NODE_ENV !== 'production') {
          warnOnce("Component template should contain exactly one root element. " + "If you are using v-if on multiple elements, " + "use v-else-if to chain them instead.");
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) {
          // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        endPre(element);
      }
      // apply post-transforms
      for (var i$1 = 0; i$1 < postTransforms.length; i$1++) {
        postTransforms[i$1](element, options);
      }
    },

    end: function end() {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      endPre(element);
    },

    chars: function chars(text) {
      if (!currentParent) {
        if (process.env.NODE_ENV !== 'production') {
          if (text === template) {
            warnOnce('Component template requires a root element, rather than just text.');
          } else if (text = text.trim()) {
            warnOnce("text \"" + text + "\" outside root element will be ignored.");
          }
        }
        return;
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE && currentParent.tag === 'textarea' && currentParent.attrsMap.placeholder === text) {
        return;
      }
      var children = currentParent.children;
      text = inPre || text.trim() ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
      // only preserve whitespace if its not right after a starting tag
      : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var expression;
        if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: expression,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment(text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root;
}

function processPre(el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs(el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement(element, options) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = !element.key && !element.attrsList.length;

  processRef(element);
  processSlot(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
}

function processKey(el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if (process.env.NODE_ENV !== 'production' && el.tag === 'template') {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef(el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor(el) {
  var exp;
  if (exp = getAndRemoveAttr(el, 'v-for')) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) {
      process.env.NODE_ENV !== 'production' && warn$2("Invalid v-for expression: " + exp);
      return;
    }
    el.for = inMatch[2].trim();
    var alias = inMatch[1].trim();
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      el.alias = iteratorMatch[1].trim();
      el.iterator1 = iteratorMatch[2].trim();
      if (iteratorMatch[3]) {
        el.iterator2 = iteratorMatch[3].trim();
      }
    } else {
      el.alias = alias;
    }
  }
}

function processIf(el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions(el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (process.env.NODE_ENV !== 'production') {
    warn$2("v-" + (el.elseif ? 'else-if="' + el.elseif + '"' : 'else') + " " + "used on element <" + el.tag + "> without corresponding v-if.");
  }
}

function findPrevElement(children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i];
    } else {
      if (process.env.NODE_ENV !== 'production' && children[i].text !== ' ') {
        warn$2("text \"" + children[i].text.trim() + "\" between v-if and v-else(-if) " + "will be ignored.");
      }
      children.pop();
    }
  }
}

function addIfCondition(el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce(el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot(el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if (process.env.NODE_ENV !== 'production' && el.key) {
      warn$2("`key` does not work on <slot> because slots are abstract outlets " + "and can possibly expand into multiple elements. " + "Use the key on a wrapping element instead.");
    }
  } else {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && slotScope) {
        warn$2("the \"scope\" attribute for scoped slots have been deprecated and " + "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " + "can also be used on plain elements in addition to <template> to " + "denote scoped slots.", true);
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if (slotScope = getAndRemoveAttr(el, 'slot-scope')) {
      el.slotScope = slotScope;
    }
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (!el.slotScope) {
        addAttr(el, 'slot', slotTarget);
      }
    }
  }
}

function processComponent(el) {
  var binding;
  if (binding = getBindingAttr(el, 'is')) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs(el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) {
        // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') {
              name = 'innerHTML';
            }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(el, "update:" + camelize(name), genAssignmentCode(value, "$event"));
          }
        }
        if (isProp || !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) {
        // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else {
        // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if (process.env.NODE_ENV !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (process.env.NODE_ENV !== 'production') {
        var expression = parseText(value, delimiters);
        if (expression) {
          warn$2(name + "=\"" + value + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div id="{{ val }}">, use <div :id="val">.');
        }
      }
      addAttr(el, name, JSON.stringify(value));
    }
  }
}

function checkInFor(el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true;
    }
    parent = parent.parent;
  }
  return false;
}

function parseModifiers(name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) {
      ret[m.slice(1)] = true;
    });
    return ret;
  }
}

function makeAttrsMap(attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (process.env.NODE_ENV !== 'production' && map[attrs[i].name] && !isIE && !isEdge) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map;
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag(el) {
  return el.tag === 'script' || el.tag === 'style';
}

function isForbiddenTag(el) {
  return el.tag === 'style' || el.tag === 'script' && (!el.attrsMap.type || el.attrsMap.type === 'text/javascript');
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug(attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res;
}

function checkForAliasModel(el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2("<" + el.tag + " v-model=\"" + value + "\">: " + "You are binding v-model directly to a v-for iteration alias. " + "This will not be able to modify the v-for source array because " + "writing to the alias is like modifying a function local variable. " + "Consider using an array of objects and use v-model on an object property instead.");
    }
    _el = _el.parent;
  }
}

/*  */

/**
 * Expand input[v-model] with dyanmic type bindings into v-if-else chains
 * Turn this:
 *   <input v-model="data[type]" :type="type">
 * into this:
 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
 *   <input v-else :type="type" v-model="data[type]">
 */

function preTransformNode(el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (map['v-model'] && (map['v-bind:type'] || map[':type'])) {
      var typeBinding = getBindingAttr(el, 'type');
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? "&&(" + ifCondition + ")" : "";
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });
      return branch0;
    }
  }
}

function cloneASTElement(el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent);
}

function addRawAttr(el, name, value) {
  el.attrsMap[name] = value;
  el.attrsList.push({ name: name, value: value });
}

var model$2 = {
  preTransformNode: preTransformNode
};

var modules$1 = [klass$1, style$1, model$2];

/*  */

function text(el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', "_s(" + dir.value + ")");
  }
}

/*  */

function html(el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', "_s(" + dir.value + ")");
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize(root, options) {
  if (!root) {
    return;
  }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1(keys) {
  return makeMap('type,tag,attrsList,attrsMap,plain,parent,children,attrs' + (keys ? ',' + keys : ''));
}

function markStatic$1(node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (!isPlatformReservedTag(node.tag) && node.tag !== 'slot' && node.attrsMap['inline-template'] == null) {
      return;
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots(node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(node.children.length === 1 && node.children[0].type === 3)) {
      node.staticRoot = true;
      return;
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic(node) {
  if (node.type === 2) {
    // expression
    return false;
  }
  if (node.type === 3) {
    // text
    return true;
  }
  return !!(node.pre || !node.hasBindings && // no dynamic bindings
  !node.if && !node.for && // not v-if or v-for or v-else
  !isBuiltInTag(node.tag) && // not a built-in
  isPlatformReservedTag(node.tag) && // not a component
  !isDirectChildOfTemplateFor(node) && Object.keys(node).every(isStaticKey));
}

function isDirectChildOfTemplateFor(node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false;
    }
    if (node.for) {
      return true;
    }
  }
  return false;
}

/*  */

var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) {
  return "if(" + condition + ")return null;";
};

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers(events, isNative, warn) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    var handler = events[name];
    // #5330: warn click.right, since right clicks do not actually fire click events.
    if (process.env.NODE_ENV !== 'production' && name === 'click' && handler && handler.modifiers && handler.modifiers.right) {
      warn("Use \"contextmenu\" instead of \"click.right\" since right clicks " + "do not actually fire \"click\" events.");
    }
    res += "\"" + name + "\":" + genHandler(name, handler) + ",";
  }
  return res.slice(0, -1) + '}';
}

function genHandler(name, handler) {
  if (!handler) {
    return 'function(){}';
  }

  if (Array.isArray(handler)) {
    return "[" + handler.map(function (handler) {
      return genHandler(name, handler);
    }).join(',') + "]";
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    return isMethodPath || isFunctionExpression ? handler.value : "function($event){" + handler.value + "}"; // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = handler.modifiers;
        genModifierCode += genGuard(['ctrl', 'shift', 'alt', 'meta'].filter(function (keyModifier) {
          return !modifiers[keyModifier];
        }).map(function (keyModifier) {
          return "$event." + keyModifier + "Key";
        }).join('||'));
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath ? handler.value + '($event)' : isFunctionExpression ? "(" + handler.value + ")($event)" : handler.value;
    return "function($event){" + code + handlerCode + "}";
  }
}

function genKeyFilter(keys) {
  return "if(!('button' in $event)&&" + keys.map(genFilterCode).join('&&') + ")return null;";
}

function genFilterCode(key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return "$event.keyCode!==" + keyVal;
  }
  var code = keyCodes[key];
  return "_k($event.keyCode," + JSON.stringify(key) + "," + JSON.stringify(code) + "," + "$event.key)";
}

/*  */

function on(el, dir) {
  if (process.env.NODE_ENV !== 'production' && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) {
    return "_g(" + code + "," + dir.value + ")";
  };
}

/*  */

function bind$1(el, dir) {
  el.wrapData = function (code) {
    return "_b(" + code + ",'" + el.tag + "'," + dir.value + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")";
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */

var CodegenState = function CodegenState(options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) {
    return !isReservedTag(el.tag);
  };
  this.onceId = 0;
  this.staticRenderFns = [];
};

function generate(ast, options) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: "with(this){return " + code + "}",
    staticRenderFns: state.staticRenderFns
  };
}

function genElement(el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state);
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state);
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state);
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state);
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0';
  } else if (el.tag === 'slot') {
    return genSlot(el, state);
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + el.tag + "'" + (data ? "," + data : '') + (children ? "," + children : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code;
  }
}

// hoist static sub-trees out
function genStatic(el, state) {
  el.staticProcessed = true;
  state.staticRenderFns.push("with(this){return " + genElement(el, state) + "}");
  return "_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")";
}

// v-once
function genOnce(el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state);
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break;
      }
      parent = parent.parent;
    }
    if (!key) {
      process.env.NODE_ENV !== 'production' && state.warn("v-once can only be used inside v-for that is keyed. ");
      return genElement(el, state);
    }
    return "_o(" + genElement(el, state) + "," + state.onceId++ + "," + key + ")";
  } else {
    return genStatic(el, state);
  }
}

function genIf(el, state, altGen, altEmpty) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty);
}

function genIfConditions(conditions, state, altGen, altEmpty) {
  if (!conditions.length) {
    return altEmpty || '_e()';
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return "(" + condition.exp + ")?" + genTernaryExp(condition.block) + ":" + genIfConditions(conditions, state, altGen, altEmpty);
  } else {
    return "" + genTernaryExp(condition.block);
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp(el) {
    return altGen ? altGen(el, state) : el.once ? genOnce(el, state) : genElement(el, state);
  }
}

function genFor(el, state, altGen, altHelper) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? "," + el.iterator1 : '';
  var iterator2 = el.iterator2 ? "," + el.iterator2 : '';

  if (process.env.NODE_ENV !== 'production' && state.maybeComponent(el) && el.tag !== 'slot' && el.tag !== 'template' && !el.key) {
    state.warn("<" + el.tag + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " + "v-for should have explicit keys. " + "See https://vuejs.org/guide/list.html#key for more info.", true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," + "function(" + alias + iterator1 + iterator2 + "){" + "return " + (altGen || genElement)(el, state) + '})';
}

function genData$2(el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) {
    data += dirs + ',';
  }

  // key
  if (el.key) {
    data += "key:" + el.key + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + el.ref + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + el.tag + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + genProps(el.attrs) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + genProps(el.props) + "},";
  }
  // event handlers
  if (el.events) {
    data += genHandlers(el.events, false, state.warn) + ",";
  }
  if (el.nativeEvents) {
    data += genHandlers(el.nativeEvents, true, state.warn) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + el.slotTarget + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += genScopedSlots(el.scopedSlots, state) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + el.model.value + ",callback:" + el.model.callback + ",expression:" + el.model.expression + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data;
}

function genDirectives(el, state) {
  var dirs = el.directives;
  if (!dirs) {
    return;
  }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + dir.name + "\",rawName:\"" + dir.rawName + "\"" + (dir.value ? ",value:(" + dir.value + "),expression:" + JSON.stringify(dir.value) : '') + (dir.arg ? ",arg:\"" + dir.arg + "\"" : '') + (dir.modifiers ? ",modifiers:" + JSON.stringify(dir.modifiers) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']';
  }
}

function genInlineTemplate(el, state) {
  var ast = el.children[0];
  if (process.env.NODE_ENV !== 'production' && (el.children.length !== 1 || ast.type !== 1)) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return "inlineTemplate:{render:function(){" + inlineRenderFns.render + "},staticRenderFns:[" + inlineRenderFns.staticRenderFns.map(function (code) {
      return "function(){" + code + "}";
    }).join(',') + "]}";
  }
}

function genScopedSlots(slots, state) {
  return "scopedSlots:_u([" + Object.keys(slots).map(function (key) {
    return genScopedSlot(key, slots[key], state);
  }).join(',') + "])";
}

function genScopedSlot(key, el, state) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state);
  }
  var fn = "function(" + String(el.slotScope) + "){" + "return " + (el.tag === 'template' ? el.if ? el.if + "?" + (genChildren(el, state) || 'undefined') + ":undefined" : genChildren(el, state) || 'undefined' : genElement(el, state)) + "}";
  return "{key:" + key + ",fn:" + fn + "}";
}

function genForScopedSlot(key, el, state) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? "," + el.iterator1 : '';
  var iterator2 = el.iterator2 ? "," + el.iterator2 : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," + "function(" + alias + iterator1 + iterator2 + "){" + "return " + genScopedSlot(key, el, state) + '})';
}

function genChildren(el, state, checkSkip, altGenElement, altGenNode) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 && el$1.for && el$1.tag !== 'template' && el$1.tag !== 'slot') {
      return (altGenElement || genElement)(el$1, state);
    }
    var normalizationType = checkSkip ? getNormalizationType(children, state.maybeComponent) : 0;
    var gen = altGenNode || genNode;
    return "[" + children.map(function (c) {
      return gen(c, state);
    }).join(',') + "]" + (normalizationType ? "," + normalizationType : '');
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType(children, maybeComponent) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue;
    }
    if (needsNormalization(el) || el.ifConditions && el.ifConditions.some(function (c) {
      return needsNormalization(c.block);
    })) {
      res = 2;
      break;
    }
    if (maybeComponent(el) || el.ifConditions && el.ifConditions.some(function (c) {
      return maybeComponent(c.block);
    })) {
      res = 1;
    }
  }
  return res;
}

function needsNormalization(el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot';
}

function genNode(node, state) {
  if (node.type === 1) {
    return genElement(node, state);
  }if (node.type === 3 && node.isComment) {
    return genComment(node);
  } else {
    return genText(node);
  }
}

function genText(text) {
  return "_v(" + (text.type === 2 ? text.expression // no need for () because already wrapped in _s()
  : transformSpecialNewlines(JSON.stringify(text.text))) + ")";
}

function genComment(comment) {
  return "_e(" + JSON.stringify(comment.text) + ")";
}

function genSlot(el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? "," + children : '');
  var attrs = el.attrs && "{" + el.attrs.map(function (a) {
    return camelize(a.name) + ":" + a.value;
  }).join(',') + "}";
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')';
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent(componentName, el, state) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return "_c(" + componentName + "," + genData$2(el, state) + (children ? "," + children : '') + ")";
}

function genProps(props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    res += "\"" + prop.name + "\":" + transformSpecialNewlines(prop.value) + ",";
  }
  return res.slice(0, -1);
}

// #3895, #4268
function transformSpecialNewlines(text) {
  return text.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + ('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' + 'super,throw,while,yield,delete,export,import,return,switch,default,' + 'extends,finally,continue,debugger,function,arguments').split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + 'delete,typeof,void'.split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// check valid identifier for v-for
var identRE = /[A-Za-z_$][\w$]*/;

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors(ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors;
}

function checkNode(node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, "v-for=\"" + value + "\"", errors);
          } else if (onRE.test(name)) {
            checkEvent(value, name + "=\"" + value + "\"", errors);
          } else {
            checkExpression(value, name + "=\"" + value + "\"", errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent(exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push("avoid using JavaScript unary operator as property name: " + "\"" + keywordMatch[0] + "\" in expression " + text.trim());
  }
  checkExpression(exp, text, errors);
}

function checkFor(node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier(ident, type, text, errors) {
  if (typeof ident === 'string' && !identRE.test(ident)) {
    errors.push("invalid " + type + " \"" + ident + "\" in expression: " + text.trim());
  }
}

function checkExpression(exp, text, errors) {
  try {
    new Function("return " + exp);
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push("avoid using JavaScript keyword as property name: " + "\"" + keywordMatch[0] + "\"\n  Raw expression: " + text.trim());
    } else {
      errors.push("invalid expression: " + e.message + " in\n\n" + "    " + exp + "\n\n" + "  Raw expression: " + text.trim() + "\n");
    }
  }
}

/*  */

function createFunction(code, errors) {
  try {
    return new Function(code);
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop;
  }
}

function createCompileToFunctionFn(compile) {
  var cache = Object.create(null);

  return function compileToFunctions(template, options, vm) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production') {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1('It seems you are using the standalone build of Vue.js in an ' + 'environment with Content Security Policy that prohibits unsafe-eval. ' + 'The template compiler cannot work in this environment. Consider ' + 'relaxing the policy to allow unsafe-eval or pre-compiling your ' + 'templates into render functions.');
        }
      }
    }

    // check cache
    var key = options.delimiters ? String(options.delimiters) + template : template;
    if (cache[key]) {
      return cache[key];
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (process.env.NODE_ENV !== 'production') {
      if (compiled.errors && compiled.errors.length) {
        warn$$1("Error compiling template:\n\n" + template + "\n\n" + compiled.errors.map(function (e) {
          return "- " + e;
        }).join('\n') + '\n', vm);
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) {
          return tip(msg, vm);
        });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors);
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production') {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1("Failed to generate render function:\n\n" + fnGenErrors.map(function (ref) {
          var err = ref.err;
          var code = ref.code;

          return err.toString() + " in\n\n" + code + "\n";
        }).join('\n'), vm);
      }
    }

    return cache[key] = res;
  };
}

/*  */

function createCompilerCreator(baseCompile) {
  return function createCompiler(baseOptions) {
    function compile(template, options) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules = (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(Object.create(baseOptions.directives), options.directives);
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      if (process.env.NODE_ENV !== 'production') {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled;
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    };
  };
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile(template, options) {
  var ast = parse(template.trim(), options);
  optimize(ast, options);
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  };
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML;
});

var mount = Vue$3.prototype.$mount;
Vue$3.prototype.$mount = function (el, hydrating) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    process.env.NODE_ENV !== 'production' && warn("Do not mount Vue to <html> or <body> - mount to normal elements instead.");
    return this;
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if (process.env.NODE_ENV !== 'production' && !template) {
            warn("Template element not found or is empty: " + options.template, this);
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (process.env.NODE_ENV !== 'production') {
          warn('invalid template option:' + template, this);
        }
        return this;
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
        mark('compile end');
        measure("vue " + this._name + " compile", 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating);
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML(el) {
  if (el.outerHTML) {
    return el.outerHTML;
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML;
  }
}

Vue$3.compile = compileToFunctions;

/* harmony default export */ __webpack_exports__["default"] = (Vue$3);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1), __webpack_require__(0), __webpack_require__(5).setImmediate))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function () {};
Timeout.prototype.close = function () {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(6);
var global = __webpack_require__(7);
exports.setImmediate = global.setImmediate;
exports.clearImmediate = global.clearImmediate;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
        // Callback can either be a function or a string
        if (typeof callback !== "function") {
            callback = new Function("" + callback);
        }
        // Copy function arguments
        var args = new Array(arguments.length - 1);
        for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i + 1];
        }
        // Store and register the task
        var task = { callback: callback, args: args };
        tasksByHandle[nextHandle] = task;
        registerImmediate(nextHandle);
        return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
            case 0:
                callback();
                break;
            case 1:
                callback(args[0]);
                break;
            case 2:
                callback(args[0], args[1]);
                break;
            case 3:
                callback(args[0], args[1], args[2]);
                break;
            default:
                callback.apply(undefined, args);
                break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function (handle) {
            process.nextTick(function () {
                runIfPresent(handle);
            });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function () {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function (event) {
            if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function (handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function (event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function (handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function (handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function (handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();
    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();
    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();
    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();
    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(1)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof global !== "undefined") {
    win = global;
} else if (typeof self !== "undefined") {
    win = self;
} else {
    win = {};
}

module.exports = win;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_plot_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_plot_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_plot_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_14869752_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_plot_vue__ = __webpack_require__(12);
var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_plot_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_14869752_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_plot_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "source\\plot\\plot.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-14869752", Component.options)
  } else {
    hotAPI.reload("data-v-14869752", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _entry = __webpack_require__(10);

var _entry2 = _interopRequireDefault(_entry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: ['width', 'height', 'data'],
    data: function data() {
        return {};
    },

    methods: {
        plot: function plot() {
            (0, _entry2.default)(this.$refs.canvas, this.data);
        }
    },
    watch: {
        data: function data() {
            this.plot();
        }
    },
    mounted: function mounted() {
        this.plot();
    }
}; //
//
//

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _v = __webpack_require__(11);

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function fmt(x) {
    var text = x.toString();
    var e = 0;
    if (Math.floor(x).toString().length > 4) {
        var e = Math.floor(Math.log10(x));
        var n = x / Math.pow(10, e);
        text = n.toString();
    }
    text = text.replace(/(\d)\.(\d+)/, function (text, g1, g2) {
        return g1 + '.' + g2.substr(0, 2);
    });
    if (e != 0) return text + 'e+' + e;else return text;
}

/**
 * 
 * @param {HTMLCanvasElement} canvas 
 * @param {*} setups 
 */
function Plot(canvas, setups) {

    if (!canvas) return;

    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (!(setups instanceof Array)) setups = [setups];

    var margin = 10;

    var dataStart = null;
    var dataEnd = null;

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = setups[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var setup = _step.value;

            if (setup.data.f instanceof Function) {
                var data = [];
                for (var i = 0; i <= setup.data.d; i++) {
                    var x = i / setup.data.d * (setup.data.e - setup.data.s) + setup.data.s;
                    data.push([x, setup.data.f(x)]);
                }
                setup.data = data;
                console.log(data);
            }

            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
                for (var _iterator5 = setup.data[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var i = _step5.value;

                    if (dataStart == null) dataStart = i;
                    if (dataEnd == null) dataEnd = i;
                    dataStart = _v2.default.min(dataStart, i);
                    dataEnd = _v2.default.max(dataEnd, i);
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                        _iterator5.return();
                    }
                } finally {
                    if (_didIteratorError5) {
                        throw _iteratorError5;
                    }
                }
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    if (dataStart[0] == dataEnd[0]) {
        dataStart[0]--;
        dataEnd[0]++;
    }
    if (dataStart[1] == dataEnd[1]) {
        dataStart[1]--;
        dataEnd[1]++;
    }

    [0, 1].map(function (i) {
        if (dataStart[i] > 0 && dataEnd[i] > 0 && dataEnd[i] / 2 > dataStart[i]) dataStart[i] = 0;
        if (dataStart[i] < 0 && dataEnd[i] < 0 && dataStart[i] / 2 < dataEnd[i]) dataEnd[i] = 0;
    });

    var left = Math.sign(dataStart[0] + dataEnd[0]);
    var top = -Math.sign(dataStart[1] + dataEnd[1]);

    var maxtextlen = 40;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = setups[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var i = _step2.value;

            if (i.mark !== false) {
                var _iteratorNormalCompletion6 = true;
                var _didIteratorError6 = false;
                var _iteratorError6 = undefined;

                try {
                    for (var _iterator6 = i.data[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                        var j = _step6.value;

                        maxtextlen = Math.max(ctx.measureText(fmt(j[1])).width, maxtextlen);
                    }
                } catch (err) {
                    _didIteratorError6 = true;
                    _iteratorError6 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion6 && _iterator6.return) {
                            _iterator6.return();
                        }
                    } finally {
                        if (_didIteratorError6) {
                            throw _iteratorError6;
                        }
                    }
                }
            }
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    maxtextlen += 8;
    maxtextlen = Math.round(maxtextlen);
    var plotStart = [margin + (left > 0 ? maxtextlen : 0), canvas.height - margin - (top < 0 ? 20 : 0)];
    var plotEnd = [canvas.width - margin - (left < 0 ? maxtextlen : 0), margin + 8];

    left = left >= 0;
    top = top > 0;
    var translate = function translate(point) {
        return [0, 1].map(function (i) {
            return Math.round((point[i] - dataStart[i]) * (plotEnd[i] - plotStart[i]) / (dataEnd[i] - dataStart[i]) + plotStart[i]);
        });
    };

    var markedX = {};
    var markedY = {};

    var origin = translate([0, 0]);
    origin = _v2.default.min(_v2.default.max(origin, [plotStart[0], plotEnd[1]]), [plotEnd[0], plotStart[1]]);

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = setups[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var setup = _step3.value;


            var data = setup.data;

            ctx.strokeStyle = 'black';
            ctx.font = "16px arial";
            ctx.beginPath();
            ctx.moveTo(origin[0], plotStart[1]);
            ctx.lineTo(origin[0], plotEnd[1]);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(plotStart[0], origin[1]);
            ctx.lineTo(plotEnd[0], origin[1]);
            ctx.stroke();

            var prev = null;

            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;
            var _iteratorError7 = undefined;

            try {
                for (var _iterator7 = data[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                    var i = _step7.value;

                    if (setup.mark !== false && i[2] !== false) {
                        var p = translate(i);

                        ctx.strokeStyle = '#ddd';
                        ctx.beginPath();
                        ctx.moveTo(origin[0], p[1]);
                        ctx.lineTo(p[0], p[1]);
                        ctx.stroke();

                        ctx.beginPath();
                        ctx.moveTo(p[0], origin[1]);
                        ctx.lineTo(p[0], p[1]);
                        ctx.stroke();

                        ctx.strokeStyle = 'black';
                        ctx.beginPath();
                        ctx.moveTo(origin[0] - 5, p[1]);
                        ctx.lineTo(origin[0] + 5, p[1]);
                        ctx.stroke();

                        ctx.beginPath();
                        ctx.moveTo(p[0], origin[1] - 5);
                        ctx.lineTo(p[0], origin[1] + 5);
                        ctx.stroke();

                        ctx.textBaseline = 'middle';
                        ctx.fillStyle = 'black';
                        ctx.textAlign = left ? 'right' : 'left';
                        var my = fmt(i[1]);
                        if (!markedY[my]) ctx.fillText(my, origin[0] + (left ? -8 : 8), p[1]);
                        markedY[my] = true;

                        ctx.textAlign = 'center';
                        ctx.textBaseline = top ? 'bottom' : 'top';
                        var mx = fmt(i[0]);
                        if (!markedX[mx]) ctx.fillText(mx, p[0], origin[1] + (top ? -8 : 8));
                        markedX[mx] = true;
                    }
                }
            } catch (err) {
                _didIteratorError7 = true;
                _iteratorError7 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion7 && _iterator7.return) {
                        _iterator7.return();
                    }
                } finally {
                    if (_didIteratorError7) {
                        throw _iteratorError7;
                    }
                }
            }
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }

    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
        for (var _iterator4 = setups[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var setup = _step4.value;

            var data = setup.data;
            setup.color = setup.color || '#2196F3';
            var prev = null;
            var _iteratorNormalCompletion8 = true;
            var _didIteratorError8 = false;
            var _iteratorError8 = undefined;

            try {
                for (var _iterator8 = data[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                    var i = _step8.value;

                    var p = translate(i);
                    if (setup.connect !== false) {
                        if (prev) {
                            ctx.strokeStyle = setup.color;
                            ctx.beginPath();
                            ctx.moveTo.apply(ctx, _toConsumableArray(p));
                            ctx.lineTo.apply(ctx, _toConsumableArray(prev));
                            ctx.stroke();
                        }
                    }
                    if (setup.mark !== false && i[2] !== false) {
                        ctx.fillStyle = setup.color;
                        ctx.fillRect(p[0] - 2.5, p[1] - 2.5, 5, 5);
                    }
                    prev = p;
                }
            } catch (err) {
                _didIteratorError8 = true;
                _iteratorError8 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion8 && _iterator8.return) {
                        _iterator8.return();
                    }
                } finally {
                    if (_didIteratorError8) {
                        throw _iteratorError8;
                    }
                }
            }
        }
    } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
            }
        } finally {
            if (_didIteratorError4) {
                throw _iteratorError4;
            }
        }
    }
}

window.Plot = Plot;
exports.default = Plot;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
    add(a, b) {
        return a.map((x, i) => x + b[i]);
    },
    sub(a, b) {
        return a.map((x, i) => x - b[i]);
    },
    multeach(a, b) {
        return a.map((x, i) => x * b[i]);
    },
    mult(a, b) {
        return a.map(x => x * b);
    },
    magsq(a) {
        return a[0] * a[0] + a[1] * a[1];
    },
    max(a, b) {
        return a.map((x, i) => Math.max(x, b[i]));
    },
    min(a, b) {
        return a.map((x, i) => Math.min(x, b[i]));
    }
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("canvas", {
    ref: "canvas",
    attrs: { width: _vm.width, height: _vm.height }
  })
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-14869752", esExports)
  }
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_katex_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_katex_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_katex_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7aec68ca_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_katex_vue__ = __webpack_require__(16);
var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_katex_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7aec68ca_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_katex_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "source\\katex\\katex.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7aec68ca", Component.options)
  } else {
    hotAPI.reload("data-v-7aec68ca", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _katexMin = __webpack_require__(15);

var _katexMin2 = _interopRequireDefault(_katexMin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: ["expr"],
    data: function data() {
        return { script: "" };
    },

    computed: {
        content: function content() {
            return _katexMin2.default.renderToString(this.expr);
        }
    }
}; //
//
//
//

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var katex = null;
(function (e) {
  if (( false ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
    module.exports = e();
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    var t;if (typeof window !== "undefined") {
      t = window;
    } else if (typeof global !== "undefined") {
      t = global;
    } else if (typeof self !== "undefined") {
      t = self;
    } else {
      t = this;
    }t.katex = e();
  }
})(function () {
  var e, t, r;return function e(t, r, a) {
    function n(l, o) {
      if (!r[l]) {
        if (!t[l]) {
          var u = typeof require == "function" && require;if (!o && u) return require(l, !0);if (i) return i(l, !0);var s = new Error("Cannot find module '" + l + "'");throw s.code = "MODULE_NOT_FOUND", s;
        }var f = r[l] = { exports: {} };t[l][0].call(f.exports, function (e) {
          var r = t[l][1][e];return n(r ? r : e);
        }, f, f.exports, e, t, r, a);
      }return r[l].exports;
    }var i = typeof require == "function" && require;for (var l = 0; l < a.length; l++) {
      n(a[l]);
    }return n;
  }({ 1: [function (e, t, r) {
      "use strict";
      var a = e("./src/ParseError");var n = v(a);var i = e("./src/Settings");var l = v(i);var o = e("./src/buildTree");var u = v(o);var s = e("./src/parseTree");var f = v(s);var c = e("./src/utils");var d = v(c);function v(e) {
        return e && e.__esModule ? e : { default: e };
      }var h = function e(t, r, a) {
        d.default.clearNode(r);var n = new l.default(a);var i = (0, f.default)(t, n);var o = (0, u.default)(i, t, n).toNode();r.appendChild(o);
      };if (typeof document !== "undefined") {
        if (document.compatMode !== "CSS1Compat") {
          typeof console !== "undefined" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your " + "website has a suitable doctype.");h = function e() {
            throw new n.default("KaTeX doesn't work in quirks mode.");
          };
        }
      }var p = function e(t, r) {
        var a = new l.default(r);var n = (0, f.default)(t, a);return (0, u.default)(n, t, a).toMarkup();
      };var m = function e(t, r) {
        var a = new l.default(r);return (0, f.default)(t, a);
      };t.exports = { render: h, renderToString: p, __parse: m, ParseError: n.default };
    }, { "./src/ParseError": 84, "./src/Settings": 87, "./src/buildTree": 94, "./src/parseTree": 109, "./src/utils": 115 }], 2: [function (e, t, r) {
      t.exports = { default: e("core-js/library/fn/array/from"), __esModule: true };
    }, { "core-js/library/fn/array/from": 12 }], 3: [function (e, t, r) {
      t.exports = { default: e("core-js/library/fn/get-iterator"), __esModule: true };
    }, { "core-js/library/fn/get-iterator": 13 }], 4: [function (e, t, r) {
      t.exports = { default: e("core-js/library/fn/is-iterable"), __esModule: true };
    }, { "core-js/library/fn/is-iterable": 14 }], 5: [function (e, t, r) {
      t.exports = { default: e("core-js/library/fn/json/stringify"), __esModule: true };
    }, { "core-js/library/fn/json/stringify": 15 }], 6: [function (e, t, r) {
      t.exports = { default: e("core-js/library/fn/object/define-property"), __esModule: true };
    }, { "core-js/library/fn/object/define-property": 16 }], 7: [function (e, t, r) {
      t.exports = { default: e("core-js/library/fn/object/freeze"), __esModule: true };
    }, { "core-js/library/fn/object/freeze": 17 }], 8: [function (e, t, r) {
      "use strict";
      r.__esModule = true;r.default = function (e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };
    }, {}], 9: [function (e, t, r) {
      "use strict";
      r.__esModule = true;var a = e("../core-js/object/define-property");var n = i(a);function i(e) {
        return e && e.__esModule ? e : { default: e };
      }r.default = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r];a.enumerable = a.enumerable || false;a.configurable = true;if ("value" in a) a.writable = true;(0, n.default)(e, a.key, a);
          }
        }return function (t, r, a) {
          if (r) e(t.prototype, r);if (a) e(t, a);return t;
        };
      }();
    }, { "../core-js/object/define-property": 6 }], 10: [function (e, t, r) {
      "use strict";
      r.__esModule = true;var a = e("../core-js/is-iterable");var n = o(a);var i = e("../core-js/get-iterator");var l = o(i);function o(e) {
        return e && e.__esModule ? e : { default: e };
      }r.default = function () {
        function e(e, t) {
          var r = [];var a = true;var n = false;var i = undefined;try {
            for (var o = (0, l.default)(e), u; !(a = (u = o.next()).done); a = true) {
              r.push(u.value);if (t && r.length === t) break;
            }
          } catch (e) {
            n = true;i = e;
          } finally {
            try {
              if (!a && o["return"]) o["return"]();
            } finally {
              if (n) throw i;
            }
          }return r;
        }return function (t, r) {
          if (Array.isArray(t)) {
            return t;
          } else if ((0, n.default)(Object(t))) {
            return e(t, r);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      }();
    }, { "../core-js/get-iterator": 3, "../core-js/is-iterable": 4 }], 11: [function (e, t, r) {
      "use strict";
      r.__esModule = true;var a = e("../core-js/array/from");var n = i(a);function i(e) {
        return e && e.__esModule ? e : { default: e };
      }r.default = function (e) {
        if (Array.isArray(e)) {
          for (var t = 0, r = Array(e.length); t < e.length; t++) {
            r[t] = e[t];
          }return r;
        } else {
          return (0, n.default)(e);
        }
      };
    }, { "../core-js/array/from": 2 }], 12: [function (e, t, r) {
      e("../../modules/es6.string.iterator");e("../../modules/es6.array.from");t.exports = e("../../modules/_core").Array.from;
    }, { "../../modules/_core": 24, "../../modules/es6.array.from": 73, "../../modules/es6.string.iterator": 77 }], 13: [function (e, t, r) {
      e("../modules/web.dom.iterable");e("../modules/es6.string.iterator");t.exports = e("../modules/core.get-iterator");
    }, { "../modules/core.get-iterator": 71, "../modules/es6.string.iterator": 77, "../modules/web.dom.iterable": 78 }], 14: [function (e, t, r) {
      e("../modules/web.dom.iterable");e("../modules/es6.string.iterator");t.exports = e("../modules/core.is-iterable");
    }, { "../modules/core.is-iterable": 72, "../modules/es6.string.iterator": 77, "../modules/web.dom.iterable": 78 }], 15: [function (e, t, r) {
      var a = e("../../modules/_core");var n = a.JSON || (a.JSON = { stringify: JSON.stringify });t.exports = function e(t) {
        return n.stringify.apply(n, arguments);
      };
    }, { "../../modules/_core": 24 }], 16: [function (e, t, r) {
      e("../../modules/es6.object.define-property");var a = e("../../modules/_core").Object;t.exports = function e(t, r, n) {
        return a.defineProperty(t, r, n);
      };
    }, { "../../modules/_core": 24, "../../modules/es6.object.define-property": 75 }], 17: [function (e, t, r) {
      e("../../modules/es6.object.freeze");t.exports = e("../../modules/_core").Object.freeze;
    }, { "../../modules/_core": 24, "../../modules/es6.object.freeze": 76 }], 18: [function (e, t, r) {
      t.exports = function (e) {
        if (typeof e != "function") throw TypeError(e + " is not a function!");return e;
      };
    }, {}], 19: [function (e, t, r) {
      t.exports = function () {};
    }, {}], 20: [function (e, t, r) {
      var a = e("./_is-object");t.exports = function (e) {
        if (!a(e)) throw TypeError(e + " is not an object!");return e;
      };
    }, { "./_is-object": 40 }], 21: [function (e, t, r) {
      var a = e("./_to-iobject");var n = e("./_to-length");var i = e("./_to-absolute-index");t.exports = function (e) {
        return function (t, r, l) {
          var o = a(t);var u = n(o.length);var s = i(l, u);var f;if (e && r != r) while (u > s) {
            f = o[s++];if (f != f) return true;
          } else for (; u > s; s++) {
            if (e || s in o) {
              if (o[s] === r) return e || s || 0;
            }
          }return !e && -1;
        };
      };
    }, { "./_to-absolute-index": 62, "./_to-iobject": 64, "./_to-length": 65 }], 22: [function (e, t, r) {
      var a = e("./_cof");var n = e("./_wks")("toStringTag");var i = a(function () {
        return arguments;
      }()) == "Arguments";var l = function l(e, t) {
        try {
          return e[t];
        } catch (e) {}
      };t.exports = function (e) {
        var t, r, o;return e === undefined ? "Undefined" : e === null ? "Null" : typeof (r = l(t = Object(e), n)) == "string" ? r : i ? a(t) : (o = a(t)) == "Object" && typeof t.callee == "function" ? "Arguments" : o;
      };
    }, { "./_cof": 23, "./_wks": 69 }], 23: [function (e, t, r) {
      var a = {}.toString;t.exports = function (e) {
        return a.call(e).slice(8, -1);
      };
    }, {}], 24: [function (e, t, r) {
      var a = t.exports = { version: "2.5.1" };if (typeof __e == "number") __e = a;
    }, {}], 25: [function (e, t, r) {
      "use strict";
      var a = e("./_object-dp");var n = e("./_property-desc");t.exports = function (e, t, r) {
        if (t in e) a.f(e, t, n(0, r));else e[t] = r;
      };
    }, { "./_object-dp": 50, "./_property-desc": 56 }], 26: [function (e, t, r) {
      var a = e("./_a-function");t.exports = function (e, t, r) {
        a(e);if (t === undefined) return e;switch (r) {case 1:
            return function (r) {
              return e.call(t, r);
            };case 2:
            return function (r, a) {
              return e.call(t, r, a);
            };case 3:
            return function (r, a, n) {
              return e.call(t, r, a, n);
            };}return function () {
          return e.apply(t, arguments);
        };
      };
    }, { "./_a-function": 18 }], 27: [function (e, t, r) {
      t.exports = function (e) {
        if (e == undefined) throw TypeError("Can't call method on  " + e);return e;
      };
    }, {}], 28: [function (e, t, r) {
      t.exports = !e("./_fails")(function () {
        return Object.defineProperty({}, "a", { get: function get() {
            return 7;
          } }).a != 7;
      });
    }, { "./_fails": 32 }], 29: [function (e, t, r) {
      var a = e("./_is-object");var n = e("./_global").document;var i = a(n) && a(n.createElement);t.exports = function (e) {
        return i ? n.createElement(e) : {};
      };
    }, { "./_global": 33, "./_is-object": 40 }], 30: [function (e, t, r) {
      t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }, {}], 31: [function (e, t, r) {
      var a = e("./_global");var n = e("./_core");var i = e("./_ctx");var l = e("./_hide");var o = "prototype";var u = function u(e, t, r) {
        var s = e & u.F;var f = e & u.G;var c = e & u.S;var d = e & u.P;var v = e & u.B;var h = e & u.W;var p = f ? n : n[t] || (n[t] = {});var m = p[o];var g = f ? a : c ? a[t] : (a[t] || {})[o];var b, y, x;if (f) r = t;for (b in r) {
          y = !s && g && g[b] !== undefined;if (y && b in p) continue;x = y ? g[b] : r[b];p[b] = f && typeof g[b] != "function" ? r[b] : v && y ? i(x, a) : h && g[b] == x ? function (e) {
            var t = function t(_t, r, a) {
              if (this instanceof e) {
                switch (arguments.length) {case 0:
                    return new e();case 1:
                    return new e(_t);case 2:
                    return new e(_t, r);}return new e(_t, r, a);
              }return e.apply(this, arguments);
            };t[o] = e[o];return t;
          }(x) : d && typeof x == "function" ? i(Function.call, x) : x;if (d) {
            (p.virtual || (p.virtual = {}))[b] = x;if (e & u.R && m && !m[b]) l(m, b, x);
          }
        }
      };u.F = 1;u.G = 2;u.S = 4;u.P = 8;u.B = 16;u.W = 32;u.U = 64;u.R = 128;t.exports = u;
    }, { "./_core": 24, "./_ctx": 26, "./_global": 33, "./_hide": 35 }], 32: [function (e, t, r) {
      t.exports = function (e) {
        try {
          return !!e();
        } catch (e) {
          return true;
        }
      };
    }, {}], 33: [function (e, t, r) {
      var a = t.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();if (typeof __g == "number") __g = a;
    }, {}], 34: [function (e, t, r) {
      var a = {}.hasOwnProperty;t.exports = function (e, t) {
        return a.call(e, t);
      };
    }, {}], 35: [function (e, t, r) {
      var a = e("./_object-dp");var n = e("./_property-desc");t.exports = e("./_descriptors") ? function (e, t, r) {
        return a.f(e, t, n(1, r));
      } : function (e, t, r) {
        e[t] = r;return e;
      };
    }, { "./_descriptors": 28, "./_object-dp": 50, "./_property-desc": 56 }], 36: [function (e, t, r) {
      var a = e("./_global").document;t.exports = a && a.documentElement;
    }, { "./_global": 33 }], 37: [function (e, t, r) {
      t.exports = !e("./_descriptors") && !e("./_fails")(function () {
        return Object.defineProperty(e("./_dom-create")("div"), "a", { get: function get() {
            return 7;
          } }).a != 7;
      });
    }, { "./_descriptors": 28, "./_dom-create": 29, "./_fails": 32 }], 38: [function (e, t, r) {
      var a = e("./_cof");t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
        return a(e) == "String" ? e.split("") : Object(e);
      };
    }, { "./_cof": 23 }], 39: [function (e, t, r) {
      var a = e("./_iterators");var n = e("./_wks")("iterator");var i = Array.prototype;t.exports = function (e) {
        return e !== undefined && (a.Array === e || i[n] === e);
      };
    }, { "./_iterators": 46, "./_wks": 69 }], 40: [function (e, t, r) {
      t.exports = function (e) {
        return (typeof e === "undefined" ? "undefined" : _typeof(e)) === "object" ? e !== null : typeof e === "function";
      };
    }, {}], 41: [function (e, t, r) {
      var a = e("./_an-object");t.exports = function (e, t, r, n) {
        try {
          return n ? t(a(r)[0], r[1]) : t(r);
        } catch (t) {
          var i = e["return"];if (i !== undefined) a(i.call(e));throw t;
        }
      };
    }, { "./_an-object": 20 }], 42: [function (e, t, r) {
      "use strict";
      var a = e("./_object-create");var n = e("./_property-desc");var i = e("./_set-to-string-tag");var l = {};e("./_hide")(l, e("./_wks")("iterator"), function () {
        return this;
      });t.exports = function (e, t, r) {
        e.prototype = a(l, { next: n(1, r) });i(e, t + " Iterator");
      };
    }, { "./_hide": 35, "./_object-create": 49, "./_property-desc": 56, "./_set-to-string-tag": 58, "./_wks": 69 }], 43: [function (e, t, r) {
      "use strict";
      var a = e("./_library");var n = e("./_export");var i = e("./_redefine");var l = e("./_hide");var o = e("./_has");var u = e("./_iterators");var s = e("./_iter-create");var f = e("./_set-to-string-tag");var c = e("./_object-gpo");var d = e("./_wks")("iterator");var v = !([].keys && "next" in [].keys());var h = "@@iterator";var p = "keys";var m = "values";var g = function g() {
        return this;
      };t.exports = function (e, t, r, b, y, x, w) {
        s(r, t, b);var k = function k(e) {
          if (!v && e in S) return S[e];switch (e) {case p:
              return function t() {
                return new r(this, e);
              };case m:
              return function t() {
                return new r(this, e);
              };}return function t() {
            return new r(this, e);
          };
        };var M = t + " Iterator";var _ = y == m;var z = false;var S = e.prototype;var T = S[d] || S[h] || y && S[y];var A = T || k(y);var C = y ? !_ ? A : k("entries") : undefined;var N = t == "Array" ? S.entries || T : T;var O, j, E;if (N) {
          E = c(N.call(new e()));if (E !== Object.prototype && E.next) {
            f(E, M, true);if (!a && !o(E, d)) l(E, d, g);
          }
        }if (_ && T && T.name !== m) {
          z = true;A = function e() {
            return T.call(this);
          };
        }if ((!a || w) && (v || z || !S[d])) {
          l(S, d, A);
        }u[t] = A;u[M] = g;if (y) {
          O = { values: _ ? A : k(m), keys: x ? A : k(p), entries: C };if (w) for (j in O) {
            if (!(j in S)) i(S, j, O[j]);
          } else n(n.P + n.F * (v || z), t, O);
        }return O;
      };
    }, { "./_export": 31, "./_has": 34, "./_hide": 35, "./_iter-create": 42, "./_iterators": 46, "./_library": 47, "./_object-gpo": 52, "./_redefine": 57, "./_set-to-string-tag": 58, "./_wks": 69 }], 44: [function (e, t, r) {
      var a = e("./_wks")("iterator");var n = false;try {
        var i = [7][a]();i["return"] = function () {
          n = true;
        };Array.from(i, function () {
          throw 2;
        });
      } catch (e) {}t.exports = function (e, t) {
        if (!t && !n) return false;var r = false;try {
          var i = [7];var l = i[a]();l.next = function () {
            return { done: r = true };
          };i[a] = function () {
            return l;
          };e(i);
        } catch (e) {}return r;
      };
    }, { "./_wks": 69 }], 45: [function (e, t, r) {
      t.exports = function (e, t) {
        return { value: t, done: !!e };
      };
    }, {}], 46: [function (e, t, r) {
      t.exports = {};
    }, {}], 47: [function (e, t, r) {
      t.exports = true;
    }, {}], 48: [function (e, t, r) {
      var a = e("./_uid")("meta");var n = e("./_is-object");var i = e("./_has");var l = e("./_object-dp").f;var o = 0;var u = Object.isExtensible || function () {
        return true;
      };var s = !e("./_fails")(function () {
        return u(Object.preventExtensions({}));
      });var f = function f(e) {
        l(e, a, { value: { i: "O" + ++o, w: {} } });
      };var c = function c(e, t) {
        if (!n(e)) return (typeof e === "undefined" ? "undefined" : _typeof(e)) == "symbol" ? e : (typeof e == "string" ? "S" : "P") + e;if (!i(e, a)) {
          if (!u(e)) return "F";if (!t) return "E";f(e);
        }return e[a].i;
      };var d = function d(e, t) {
        if (!i(e, a)) {
          if (!u(e)) return true;if (!t) return false;f(e);
        }return e[a].w;
      };var v = function v(e) {
        if (s && h.NEED && u(e) && !i(e, a)) f(e);return e;
      };var h = t.exports = { KEY: a, NEED: false, fastKey: c, getWeak: d, onFreeze: v };
    }, { "./_fails": 32, "./_has": 34, "./_is-object": 40, "./_object-dp": 50, "./_uid": 68 }], 49: [function (e, t, r) {
      var a = e("./_an-object");var n = e("./_object-dps");var i = e("./_enum-bug-keys");var l = e("./_shared-key")("IE_PROTO");var o = function o() {};var u = "prototype";var _s = function s() {
        var t = e("./_dom-create")("iframe");var r = i.length;var a = "<";var n = ">";var l;t.style.display = "none";e("./_html").appendChild(t);t.src = "javascript:";l = t.contentWindow.document;l.open();l.write(a + "script" + n + "document.F=Object" + a + "/script" + n);l.close();_s = l.F;while (r--) {
          delete _s[u][i[r]];
        }return _s();
      };t.exports = Object.create || function e(t, r) {
        var i;if (t !== null) {
          o[u] = a(t);i = new o();o[u] = null;i[l] = t;
        } else i = _s();return r === undefined ? i : n(i, r);
      };
    }, { "./_an-object": 20, "./_dom-create": 29, "./_enum-bug-keys": 30, "./_html": 36, "./_object-dps": 51, "./_shared-key": 59 }], 50: [function (e, t, r) {
      var a = e("./_an-object");var n = e("./_ie8-dom-define");var i = e("./_to-primitive");var l = Object.defineProperty;r.f = e("./_descriptors") ? Object.defineProperty : function e(t, r, o) {
        a(t);r = i(r, true);a(o);if (n) try {
          return l(t, r, o);
        } catch (e) {}if ("get" in o || "set" in o) throw TypeError("Accessors not supported!");if ("value" in o) t[r] = o.value;return t;
      };
    }, { "./_an-object": 20, "./_descriptors": 28, "./_ie8-dom-define": 37, "./_to-primitive": 67 }], 51: [function (e, t, r) {
      var a = e("./_object-dp");var n = e("./_an-object");var i = e("./_object-keys");t.exports = e("./_descriptors") ? Object.defineProperties : function e(t, r) {
        n(t);var l = i(r);var o = l.length;var u = 0;var s;while (o > u) {
          a.f(t, s = l[u++], r[s]);
        }return t;
      };
    }, { "./_an-object": 20, "./_descriptors": 28, "./_object-dp": 50, "./_object-keys": 54 }], 52: [function (e, t, r) {
      var a = e("./_has");var n = e("./_to-object");var i = e("./_shared-key")("IE_PROTO");var l = Object.prototype;t.exports = Object.getPrototypeOf || function (e) {
        e = n(e);if (a(e, i)) return e[i];if (typeof e.constructor == "function" && e instanceof e.constructor) {
          return e.constructor.prototype;
        }return e instanceof Object ? l : null;
      };
    }, { "./_has": 34, "./_shared-key": 59, "./_to-object": 66 }], 53: [function (e, t, r) {
      var a = e("./_has");var n = e("./_to-iobject");var i = e("./_array-includes")(false);var l = e("./_shared-key")("IE_PROTO");t.exports = function (e, t) {
        var r = n(e);var o = 0;var u = [];var s;for (s in r) {
          if (s != l) a(r, s) && u.push(s);
        }while (t.length > o) {
          if (a(r, s = t[o++])) {
            ~i(u, s) || u.push(s);
          }
        }return u;
      };
    }, { "./_array-includes": 21, "./_has": 34, "./_shared-key": 59, "./_to-iobject": 64 }], 54: [function (e, t, r) {
      var a = e("./_object-keys-internal");var n = e("./_enum-bug-keys");t.exports = Object.keys || function e(t) {
        return a(t, n);
      };
    }, { "./_enum-bug-keys": 30, "./_object-keys-internal": 53 }], 55: [function (e, t, r) {
      var a = e("./_export");var n = e("./_core");var i = e("./_fails");t.exports = function (e, t) {
        var r = (n.Object || {})[e] || Object[e];var l = {};l[e] = t(r);a(a.S + a.F * i(function () {
          r(1);
        }), "Object", l);
      };
    }, { "./_core": 24, "./_export": 31, "./_fails": 32 }], 56: [function (e, t, r) {
      t.exports = function (e, t) {
        return { enumerable: !(e & 1), configurable: !(e & 2), writable: !(e & 4), value: t };
      };
    }, {}], 57: [function (e, t, r) {
      t.exports = e("./_hide");
    }, { "./_hide": 35 }], 58: [function (e, t, r) {
      var a = e("./_object-dp").f;var n = e("./_has");var i = e("./_wks")("toStringTag");t.exports = function (e, t, r) {
        if (e && !n(e = r ? e : e.prototype, i)) a(e, i, { configurable: true, value: t });
      };
    }, { "./_has": 34, "./_object-dp": 50, "./_wks": 69 }], 59: [function (e, t, r) {
      var a = e("./_shared")("keys");var n = e("./_uid");t.exports = function (e) {
        return a[e] || (a[e] = n(e));
      };
    }, { "./_shared": 60, "./_uid": 68 }], 60: [function (e, t, r) {
      var a = e("./_global");var n = "__core-js_shared__";var i = a[n] || (a[n] = {});t.exports = function (e) {
        return i[e] || (i[e] = {});
      };
    }, { "./_global": 33 }], 61: [function (e, t, r) {
      var a = e("./_to-integer");var n = e("./_defined");t.exports = function (e) {
        return function (t, r) {
          var i = String(n(t));var l = a(r);var o = i.length;var u, s;if (l < 0 || l >= o) return e ? "" : undefined;u = i.charCodeAt(l);return u < 55296 || u > 56319 || l + 1 === o || (s = i.charCodeAt(l + 1)) < 56320 || s > 57343 ? e ? i.charAt(l) : u : e ? i.slice(l, l + 2) : (u - 55296 << 10) + (s - 56320) + 65536;
        };
      };
    }, { "./_defined": 27, "./_to-integer": 63 }], 62: [function (e, t, r) {
      var a = e("./_to-integer");var n = Math.max;var i = Math.min;t.exports = function (e, t) {
        e = a(e);return e < 0 ? n(e + t, 0) : i(e, t);
      };
    }, { "./_to-integer": 63 }], 63: [function (e, t, r) {
      var a = Math.ceil;var n = Math.floor;t.exports = function (e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? n : a)(e);
      };
    }, {}], 64: [function (e, t, r) {
      var a = e("./_iobject");var n = e("./_defined");t.exports = function (e) {
        return a(n(e));
      };
    }, { "./_defined": 27, "./_iobject": 38 }], 65: [function (e, t, r) {
      var a = e("./_to-integer");var n = Math.min;t.exports = function (e) {
        return e > 0 ? n(a(e), 9007199254740991) : 0;
      };
    }, { "./_to-integer": 63 }], 66: [function (e, t, r) {
      var a = e("./_defined");t.exports = function (e) {
        return Object(a(e));
      };
    }, { "./_defined": 27 }], 67: [function (e, t, r) {
      var a = e("./_is-object");t.exports = function (e, t) {
        if (!a(e)) return e;var r, n;if (t && typeof (r = e.toString) == "function" && !a(n = r.call(e))) return n;if (typeof (r = e.valueOf) == "function" && !a(n = r.call(e))) return n;if (!t && typeof (r = e.toString) == "function" && !a(n = r.call(e))) return n;throw TypeError("Can't convert object to primitive value");
      };
    }, { "./_is-object": 40 }], 68: [function (e, t, r) {
      var a = 0;var n = Math.random();t.exports = function (e) {
        return "Symbol(".concat(e === undefined ? "" : e, ")_", (++a + n).toString(36));
      };
    }, {}], 69: [function (e, t, r) {
      var a = e("./_shared")("wks");var n = e("./_uid");var i = e("./_global").Symbol;var l = typeof i == "function";var o = t.exports = function (e) {
        return a[e] || (a[e] = l && i[e] || (l ? i : n)("Symbol." + e));
      };o.store = a;
    }, { "./_global": 33, "./_shared": 60, "./_uid": 68 }], 70: [function (e, t, r) {
      var a = e("./_classof");var n = e("./_wks")("iterator");var i = e("./_iterators");t.exports = e("./_core").getIteratorMethod = function (e) {
        if (e != undefined) return e[n] || e["@@iterator"] || i[a(e)];
      };
    }, { "./_classof": 22, "./_core": 24, "./_iterators": 46, "./_wks": 69 }], 71: [function (e, t, r) {
      var a = e("./_an-object");var n = e("./core.get-iterator-method");t.exports = e("./_core").getIterator = function (e) {
        var t = n(e);if (typeof t != "function") throw TypeError(e + " is not iterable!");return a(t.call(e));
      };
    }, { "./_an-object": 20, "./_core": 24, "./core.get-iterator-method": 70 }], 72: [function (e, t, r) {
      var a = e("./_classof");var n = e("./_wks")("iterator");var i = e("./_iterators");t.exports = e("./_core").isIterable = function (e) {
        var t = Object(e);return t[n] !== undefined || "@@iterator" in t || i.hasOwnProperty(a(t));
      };
    }, { "./_classof": 22, "./_core": 24, "./_iterators": 46, "./_wks": 69 }], 73: [function (e, t, r) {
      "use strict";
      var a = e("./_ctx");var n = e("./_export");var i = e("./_to-object");var l = e("./_iter-call");var o = e("./_is-array-iter");var u = e("./_to-length");var s = e("./_create-property");var f = e("./core.get-iterator-method");n(n.S + n.F * !e("./_iter-detect")(function (e) {
        Array.from(e);
      }), "Array", { from: function e(t) {
          var r = i(t);var n = typeof this == "function" ? this : Array;var c = arguments.length;var d = c > 1 ? arguments[1] : undefined;var v = d !== undefined;var h = 0;var p = f(r);var m, g, b, y;if (v) d = a(d, c > 2 ? arguments[2] : undefined, 2);if (p != undefined && !(n == Array && o(p))) {
            for (y = p.call(r), g = new n(); !(b = y.next()).done; h++) {
              s(g, h, v ? l(y, d, [b.value, h], true) : b.value);
            }
          } else {
            m = u(r.length);for (g = new n(m); m > h; h++) {
              s(g, h, v ? d(r[h], h) : r[h]);
            }
          }g.length = h;return g;
        } });
    }, { "./_create-property": 25, "./_ctx": 26, "./_export": 31, "./_is-array-iter": 39, "./_iter-call": 41, "./_iter-detect": 44, "./_to-length": 65, "./_to-object": 66, "./core.get-iterator-method": 70 }], 74: [function (e, t, r) {
      "use strict";
      var a = e("./_add-to-unscopables");var n = e("./_iter-step");var i = e("./_iterators");var l = e("./_to-iobject");t.exports = e("./_iter-define")(Array, "Array", function (e, t) {
        this._t = l(e);this._i = 0;this._k = t;
      }, function () {
        var e = this._t;var t = this._k;var r = this._i++;if (!e || r >= e.length) {
          this._t = undefined;return n(1);
        }if (t == "keys") return n(0, r);if (t == "values") return n(0, e[r]);return n(0, [r, e[r]]);
      }, "values");i.Arguments = i.Array;a("keys");a("values");a("entries");
    }, { "./_add-to-unscopables": 19, "./_iter-define": 43, "./_iter-step": 45, "./_iterators": 46, "./_to-iobject": 64 }], 75: [function (e, t, r) {
      var a = e("./_export");a(a.S + a.F * !e("./_descriptors"), "Object", { defineProperty: e("./_object-dp").f });
    }, { "./_descriptors": 28, "./_export": 31, "./_object-dp": 50 }], 76: [function (e, t, r) {
      var a = e("./_is-object");var n = e("./_meta").onFreeze;e("./_object-sap")("freeze", function (e) {
        return function t(r) {
          return e && a(r) ? e(n(r)) : r;
        };
      });
    }, { "./_is-object": 40, "./_meta": 48, "./_object-sap": 55 }], 77: [function (e, t, r) {
      "use strict";
      var a = e("./_string-at")(true);e("./_iter-define")(String, "String", function (e) {
        this._t = String(e);this._i = 0;
      }, function () {
        var e = this._t;var t = this._i;var r;if (t >= e.length) return { value: undefined, done: true };r = a(e, t);this._i += r.length;return { value: r, done: false };
      });
    }, { "./_iter-define": 43, "./_string-at": 61 }], 78: [function (e, t, r) {
      e("./es6.array.iterator");var a = e("./_global");var n = e("./_hide");var i = e("./_iterators");var l = e("./_wks")("toStringTag");var o = ("CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList," + "DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement," + "MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList," + "SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList," + "TextTrackList,TouchList").split(",");for (var u = 0; u < o.length; u++) {
        var s = o[u];var f = a[s];var c = f && f.prototype;if (c && !c[l]) n(c, l, s);i[s] = i.Array;
      }
    }, { "./_global": 33, "./_hide": 35, "./_iterators": 46, "./_wks": 69, "./es6.array.iterator": 74 }], 79: [function (e, t, r) {
      function a(e) {
        if (!e.__matchAtRelocatable) {
          var t = e.source + "|()";var r = "g" + (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "");e.__matchAtRelocatable = new RegExp(t, r);
        }return e.__matchAtRelocatable;
      }function n(e, t, r) {
        if (e.global || e.sticky) {
          throw new Error("matchAt(...): Only non-global regexes are supported");
        }var n = a(e);n.lastIndex = r;var i = n.exec(t);if (i[i.length - 1] == null) {
          i.length = i.length - 1;return i;
        } else {
          return null;
        }
      }t.exports = n;
    }, {}], 80: [function (e, t, r) {
      "use strict";
      var a = Object.getOwnPropertySymbols;var n = Object.prototype.hasOwnProperty;var i = Object.prototype.propertyIsEnumerable;function l(e) {
        if (e === null || e === undefined) {
          throw new TypeError("Object.assign cannot be called with null or undefined");
        }return Object(e);
      }function o() {
        try {
          if (!Object.assign) {
            return false;
          }var e = new String("abc");e[5] = "de";if (Object.getOwnPropertyNames(e)[0] === "5") {
            return false;
          }var t = {};for (var r = 0; r < 10; r++) {
            t["_" + String.fromCharCode(r)] = r;
          }var a = Object.getOwnPropertyNames(t).map(function (e) {
            return t[e];
          });if (a.join("") !== "0123456789") {
            return false;
          }var n = {};"abcdefghijklmnopqrst".split("").forEach(function (e) {
            n[e] = e;
          });if (Object.keys(Object.assign({}, n)).join("") !== "abcdefghijklmnopqrst") {
            return false;
          }return true;
        } catch (e) {
          return false;
        }
      }t.exports = o() ? Object.assign : function (e, t) {
        var r;var o = l(e);var u;for (var s = 1; s < arguments.length; s++) {
          r = Object(arguments[s]);for (var f in r) {
            if (n.call(r, f)) {
              o[f] = r[f];
            }
          }if (a) {
            u = a(r);for (var c = 0; c < u.length; c++) {
              if (i.call(r, u[c])) {
                o[u[c]] = r[u[c]];
              }
            }
          }
        }return o;
      };
    }, {}], 81: [function (e, t, r) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: true });r.controlWordRegex = undefined;var a = e("babel-runtime/helpers/classCallCheck");var n = h(a);var i = e("babel-runtime/helpers/createClass");var l = h(i);var o = e("match-at");var u = h(o);var s = e("./ParseError");var f = h(s);var c = e("./SourceLocation");var d = h(c);var v = e("./Token");function h(e) {
        return e && e.__esModule ? e : { default: e };
      }var p = "%[^\n]*[\n]";var m = "\\\\[a-zA-Z@]+";var g = "\\\\[^\uD800-\uDFFF]";var b = new RegExp("([ \r\n\t]+)|" + ("(" + p + "|") + "[!-\\[\\]-\u2027\u202A-\uD7FF\uF900-\uFFFF]" + "|[\uD800-\uDBFF][\uDC00-\uDFFF]" + "|\\\\verb\\*([^]).*?\\3" + "|\\\\verb([^*a-zA-Z]).*?\\4" + ("|" + m) + ("|" + g) + ")");var y = r.controlWordRegex = new RegExp("^" + m);var x = new RegExp("^" + p);var w = function () {
        function e(t) {
          (0, n.default)(this, e);this.input = t;this.pos = 0;
        }(0, l.default)(e, [{ key: "lex", value: function e() {
            var t = this.input;var r = this.pos;if (r === t.length) {
              return new v.Token("EOF", new d.default(this, r, r));
            }var a = (0, u.default)(b, t, r);if (a === null) {
              throw new f.default("Unexpected character: '" + t[r] + "'", new v.Token(t[r], new d.default(this, r, r + 1)));
            }var n = a[2] || " ";var i = this.pos;this.pos += a[0].length;var l = this.pos;if (x.test(n)) {
              return this.lex();
            } else {
              return new v.Token(n, new d.default(this, i, l));
            }
          } }]);return e;
      }();r.default = w;
    }, { "./ParseError": 84, "./SourceLocation": 88, "./Token": 90, "babel-runtime/helpers/classCallCheck": 8, "babel-runtime/helpers/createClass": 9, "match-at": 79 }], 82: [function (e, t, r) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: true });var a = e("babel-runtime/helpers/toConsumableArray");var n = b(a);var i = e("babel-runtime/helpers/classCallCheck");var l = b(i);var o = e("babel-runtime/helpers/createClass");var u = b(o);var s = e("./Lexer");var f = b(s);var c = e("./Token");var d = e("./macros");var v = b(d);var h = e("./ParseError");var p = b(h);var m = e("object-assign");var g = b(m);function b(e) {
        return e && e.__esModule ? e : { default: e };
      }var y = function () {
        function e(t, r) {
          (0, l.default)(this, e);this.lexer = new f.default(t);this.macros = (0, g.default)({}, v.default, r);this.stack = [];
        }(0, u.default)(e, [{ key: "future", value: function e() {
            if (this.stack.length === 0) {
              this.pushToken(this.lexer.lex());
            }return this.stack[this.stack.length - 1];
          } }, { key: "popToken", value: function e() {
            this.future();return this.stack.pop();
          } }, { key: "consumeSpaces", value: function e() {
            for (;;) {
              var t = this.future();if (t.text === " ") {
                this.stack.pop();
              } else {
                break;
              }
            }
          } }, { key: "expandOnce", value: function e() {
            var t;var r = this.popToken();var a = r.text;var i = a.charAt(0) === "\\";if (i && s.controlWordRegex.test(a)) {
              this.consumeSpaces();
            }if (!(i && this.macros.hasOwnProperty(a))) {
              this.pushToken(r);return r;
            }var l = this._getExpansion(a),
                o = l.tokens,
                u = l.numArgs;var f = o;if (u) {
              var c = [];for (var d = 0; d < u; ++d) {
                this.consumeSpaces();var v = this.popToken();if (v.text === "{") {
                  var h = [];var m = 1;while (m !== 0) {
                    var g = this.popToken();h.push(g);if (g.text === "{") {
                      ++m;
                    } else if (g.text === "}") {
                      --m;
                    } else if (g.text === "EOF") {
                      throw new p.default("End of input in macro argument", v);
                    }
                  }h.pop();h.reverse();c[d] = h;
                } else if (v.text === "EOF") {
                  throw new p.default("End of input expecting macro argument", r);
                } else {
                  c[d] = [v];
                }
              }f = f.slice();for (var b = f.length - 1; b >= 0; --b) {
                var y = f[b];if (y.text === "#") {
                  if (b === 0) {
                    throw new p.default("Incomplete placeholder at end of macro body", y);
                  }y = f[--b];if (y.text === "#") {
                    f.splice(b + 1, 1);
                  } else if (/^[1-9]$/.test(y.text)) {
                    var x;(x = f).splice.apply(x, [b, 2].concat((0, n.default)(c[+y.text - 1])));
                  } else {
                    throw new p.default("Not a valid argument number", y);
                  }
                }
              }
            }(t = this.stack).push.apply(t, (0, n.default)(f));return f;
          } }, { key: "expandAfterFuture", value: function e() {
            this.expandOnce();return this.future();
          } }, { key: "expandNextToken", value: function e() {
            for (;;) {
              var t = this.expandOnce();if (t instanceof c.Token) {
                if (t.text === "\\relax") {
                  this.stack.pop();
                } else {
                  return this.stack.pop();
                }
              }
            }throw new Error();
          } }, { key: "_getExpansion", value: function e(t) {
            var r = this.macros[t];var a = typeof r === "function" ? r(this) : r;if (typeof a === "string") {
              var n = 0;if (a.indexOf("#") !== -1) {
                var i = a.replace(/##/g, "");while (i.indexOf("#" + (n + 1)) !== -1) {
                  ++n;
                }
              }var l = new f.default(a);var o = [];var u = l.lex();while (u.text !== "EOF") {
                o.push(u);u = l.lex();
              }o.reverse();var s = { tokens: o, numArgs: n };if (typeof r !== "function") {
                this.macros[t] = s;
              }return s;
            }return a;
          } }, { key: "pushToken", value: function e(t) {
            this.stack.push(t);
          } }]);return e;
      }();r.default = y;
    }, { "./Lexer": 81, "./ParseError": 84, "./Token": 90, "./macros": 107, "babel-runtime/helpers/classCallCheck": 8, "babel-runtime/helpers/createClass": 9, "babel-runtime/helpers/toConsumableArray": 11, "object-assign": 80 }], 83: [function (e, t, r) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: true });var a = e("babel-runtime/helpers/classCallCheck");var n = s(a);var i = e("babel-runtime/helpers/createClass");var l = s(i);var o = e("./fontMetrics");var u = s(o);function s(e) {
        return e && e.__esModule ? e : { default: e };
      }var f = [[1, 1, 1], [2, 1, 1], [3, 1, 1], [4, 2, 1], [5, 2, 1], [6, 3, 1], [7, 4, 2], [8, 6, 3], [9, 7, 6], [10, 8, 7], [11, 10, 9]];var c = [.5, .6, .7, .8, .9, 1, 1.2, 1.44, 1.728, 2.074, 2.488];var d = function e(t, r) {
        return r.size < 2 ? t : f[t - 1][r.size - 1];
      };var v = function () {
        function e(t) {
          (0, n.default)(this, e);this.style = t.style;this.color = t.color;this.size = t.size || e.BASESIZE;this.textSize = t.textSize || this.size;this.phantom = !!t.phantom;this.font = t.font;this.sizeMultiplier = c[this.size - 1];this.maxSize = t.maxSize;this._fontMetrics = undefined;
        }(0, l.default)(e, [{ key: "extend", value: function t(r) {
            var a = { style: this.style, size: this.size, textSize: this.textSize, color: this.color, phantom: this.phantom, font: this.font, maxSize: this.maxSize };for (var n in r) {
              if (r.hasOwnProperty(n)) {
                a[n] = r[n];
              }
            }return new e(a);
          } }, { key: "havingStyle", value: function e(t) {
            if (this.style === t) {
              return this;
            } else {
              return this.extend({ style: t, size: d(this.textSize, t) });
            }
          } }, { key: "havingCrampedStyle", value: function e() {
            return this.havingStyle(this.style.cramp());
          } }, { key: "havingSize", value: function e(t) {
            if (this.size === t && this.textSize === t) {
              return this;
            } else {
              return this.extend({ style: this.style.text(), size: t, textSize: t });
            }
          } }, { key: "havingBaseStyle", value: function t(r) {
            r = r || this.style.text();var a = d(e.BASESIZE, r);if (this.size === a && this.textSize === e.BASESIZE && this.style === r) {
              return this;
            } else {
              return this.extend({ style: r, size: a });
            }
          } }, { key: "withColor", value: function e(t) {
            return this.extend({ color: t });
          } }, { key: "withPhantom", value: function e() {
            return this.extend({ phantom: true });
          } }, { key: "withFont", value: function e(t) {
            return this.extend({ font: t || this.font });
          } }, { key: "sizingClasses", value: function e(t) {
            if (t.size !== this.size) {
              return ["sizing", "reset-size" + t.size, "size" + this.size];
            } else {
              return [];
            }
          } }, { key: "baseSizingClasses", value: function t() {
            if (this.size !== e.BASESIZE) {
              return ["sizing", "reset-size" + this.size, "size" + e.BASESIZE];
            } else {
              return [];
            }
          } }, { key: "fontMetrics", value: function e() {
            if (!this._fontMetrics) {
              this._fontMetrics = u.default.getFontMetrics(this.size);
            }return this._fontMetrics;
          } }, { key: "getColor", value: function t() {
            if (this.phantom) {
              return "transparent";
            } else if (this.color != null && e.colorMap.hasOwnProperty(this.color)) {
              return e.colorMap[this.color];
            } else {
              return this.color;
            }
          } }]);return e;
      }();v.BASESIZE = 6;v.colorMap = { "katex-blue": "#6495ed", "katex-orange": "#ffa500", "katex-pink": "#ff00af", "katex-red": "#df0030", "katex-green": "#28ae7b", "katex-gray": "gray", "katex-purple": "#9d38bd", "katex-blueA": "#ccfaff", "katex-blueB": "#80f6ff", "katex-blueC": "#63d9ea", "katex-blueD": "#11accd", "katex-blueE": "#0c7f99", "katex-tealA": "#94fff5", "katex-tealB": "#26edd5", "katex-tealC": "#01d1c1", "katex-tealD": "#01a995", "katex-tealE": "#208170", "katex-greenA": "#b6ffb0", "katex-greenB": "#8af281", "katex-greenC": "#74cf70", "katex-greenD": "#1fab54", "katex-greenE": "#0d923f", "katex-goldA": "#ffd0a9", "katex-goldB": "#ffbb71", "katex-goldC": "#ff9c39", "katex-goldD": "#e07d10", "katex-goldE": "#a75a05", "katex-redA": "#fca9a9", "katex-redB": "#ff8482", "katex-redC": "#f9685d", "katex-redD": "#e84d39", "katex-redE": "#bc2612", "katex-maroonA": "#ffbde0", "katex-maroonB": "#ff92c6", "katex-maroonC": "#ed5fa6", "katex-maroonD": "#ca337c", "katex-maroonE": "#9e034e", "katex-purpleA": "#ddd7ff",
        "katex-purpleB": "#c6b9fc", "katex-purpleC": "#aa87ff", "katex-purpleD": "#7854ab", "katex-purpleE": "#543b78", "katex-mintA": "#f5f9e8", "katex-mintB": "#edf2df", "katex-mintC": "#e0e5cc", "katex-grayA": "#f6f7f7", "katex-grayB": "#f0f1f2", "katex-grayC": "#e3e5e6", "katex-grayD": "#d6d8da", "katex-grayE": "#babec2", "katex-grayF": "#888d93", "katex-grayG": "#626569", "katex-grayH": "#3b3e40", "katex-grayI": "#21242c", "katex-kaBlue": "#314453", "katex-kaGreen": "#71B307" };r.default = v;
    }, { "./fontMetrics": 101, "babel-runtime/helpers/classCallCheck": 8, "babel-runtime/helpers/createClass": 9 }], 84: [function (e, t, r) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: true });var a = e("babel-runtime/helpers/classCallCheck");var n = u(a);var i = e("./ParseNode");var l = u(i);var o = e("./Token");function u(e) {
        return e && e.__esModule ? e : { default: e };
      }var s = function e(t, r) {
        (0, n.default)(this, e);var a = "KaTeX parse error: " + t;var i = void 0;var l = r && r.loc;if (l && l.start <= l.end) {
          var o = l.lexer.input;i = l.start;var u = l.end;if (i === o.length) {
            a += " at end of input: ";
          } else {
            a += " at position " + (i + 1) + ": ";
          }var s = o.slice(i, u).replace(/[^]/g, "$&\u0332");var f = void 0;if (i > 15) {
            f = "\u2026" + o.slice(i - 15, i);
          } else {
            f = o.slice(0, i);
          }var c = void 0;if (u + 15 < o.length) {
            c = o.slice(u, u + 15) + "\u2026";
          } else {
            c = o.slice(u);
          }a += f + s + c;
        }var d = new Error(a);d.name = "ParseError";d.__proto__ = e.prototype;d.position = i;return d;
      };s.prototype.__proto__ = Error.prototype;r.default = s;
    }, { "./ParseNode": 85, "./Token": 90, "babel-runtime/helpers/classCallCheck": 8 }], 85: [function (e, t, r) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: true });var a = e("babel-runtime/helpers/classCallCheck");var n = u(a);var i = e("./Token");var l = e("./SourceLocation");var o = u(l);function u(e) {
        return e && e.__esModule ? e : { default: e };
      }var s = function e(t, r, a, i, l) {
        (0, n.default)(this, e);this.type = t;this.value = r;this.mode = a;this.loc = o.default.range(i, l);
      };r.default = s;
    }, { "./SourceLocation": 88, "./Token": 90, "babel-runtime/helpers/classCallCheck": 8 }], 86: [function (e, t, r) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: true });var a = e("babel-runtime/helpers/classCallCheck");var n = M(a);var i = e("babel-runtime/helpers/createClass");var l = M(i);var o = e("./functions");var u = M(o);var s = e("./environments");var f = M(s);var c = e("./MacroExpander");var d = M(c);var v = e("./symbols");var h = M(v);var p = e("./utils");var m = M(p);var g = e("./units");var b = e("./unicodeRegexes");var y = e("./ParseNode");var x = M(y);var w = e("./ParseError");var k = M(w);function M(e) {
        return e && e.__esModule ? e : { default: e };
      }function _(e, t) {
        return { type: "arg", result: e, token: t };
      }function z(e) {
        return { type: "fn", result: e.text, token: e };
      }function S(e) {
        return { type: "$", result: "$", token: e };
      }function T(e) {
        if (e.type === "$") {
          throw new k.default("Unexpected $", e.token);
        }return e;
      }var A = function () {
        function e(t, r) {
          (0, n.default)(this, e);this.gullet = new d.default(t, r.macros);if (r.colorIsTextColor) {
            this.gullet.macros["\\color"] = "\\textcolor";
          }this.settings = r;this.leftrightDepth = 0;
        }(0, l.default)(e, [{ key: "expect", value: function e(t, r) {
            if (this.nextToken.text !== t) {
              throw new k.default("Expected '" + t + "', got '" + this.nextToken.text + "'", this.nextToken);
            }if (r !== false) {
              this.consume();
            }
          } }, { key: "consume", value: function e() {
            this.nextToken = this.gullet.expandNextToken();
          } }, { key: "switchMode", value: function e(t) {
            this.mode = t;
          } }, { key: "parse", value: function e() {
            this.mode = "math";this.consume();var e = this.parseInput();return e;
          } }, { key: "parseInput", value: function e() {
            var t = this.parseExpression(false);this.expect("EOF", false);return t;
          } }, { key: "parseExpression", value: function t(r, a) {
            var n = [];while (true) {
              if (this.mode === "math") {
                this.consumeSpaces();
              }var i = this.nextToken;if (e.endOfExpression.indexOf(i.text) !== -1) {
                break;
              }if (a && i.text === a) {
                break;
              }if (r && u.default[i.text] && u.default[i.text].infix) {
                break;
              }var l = this.parseAtom(a);if (!l) {
                if (!this.settings.throwOnError && i.text[0] === "\\") {
                  var o = this.handleUnsupportedCmd();n.push(o);continue;
                }break;
              }n.push(l);
            }return this.handleInfixNodes(n);
          } }, { key: "handleInfixNodes", value: function e(t) {
            var r = -1;var a = void 0;for (var n = 0; n < t.length; n++) {
              var i = t[n];if (i.type === "infix") {
                if (r !== -1) {
                  throw new k.default("only one infix operator per group", i.value.token);
                }r = n;a = i.value.replaceWith;
              }
            }if (r !== -1) {
              var l = void 0;var o = void 0;var u = t.slice(0, r);var s = t.slice(r + 1);if (u.length === 1 && u[0].type === "ordgroup") {
                l = u[0];
              } else {
                l = new x.default("ordgroup", u, this.mode);
              }if (s.length === 1 && s[0].type === "ordgroup") {
                o = s[0];
              } else {
                o = new x.default("ordgroup", s, this.mode);
              }var f = this.callFunction(a, [l, o], []);return [new x.default(f.type, f, this.mode)];
            } else {
              return t;
            }
          } }, { key: "handleSupSubscript", value: function t(r) {
            var a = this.nextToken;var n = a.text;this.consume();this.consumeSpaces();var i = this.parseGroup();if (!i) {
              if (!this.settings.throwOnError && this.nextToken.text[0] === "\\") {
                return this.handleUnsupportedCmd();
              } else {
                throw new k.default("Expected group after '" + n + "'", a);
              }
            }var l = T(i);if (l.type === "fn") {
              var o = u.default[i.result].greediness;if (o > e.SUPSUB_GREEDINESS) {
                return this.parseGivenFunction(i);
              } else {
                throw new k.default("Got function '" + i.result + "' with no arguments " + "as " + r, a);
              }
            } else {
              return i.result;
            }
          } }, { key: "handleUnsupportedCmd", value: function e() {
            var t = this.nextToken.text;var r = [];for (var a = 0; a < t.length; a++) {
              r.push(new x.default("textord", t[a], "text"));
            }var n = new x.default("text", { body: r, type: "text" }, this.mode);var i = new x.default("color", { color: this.settings.errorColor, value: [n], type: "color" }, this.mode);this.consume();return i;
          } }, { key: "parseAtom", value: function e(t) {
            var r = this.parseImplicitGroup(t);if (this.mode === "text") {
              return r;
            }var a = void 0;var n = void 0;while (true) {
              this.consumeSpaces();var i = this.nextToken;if (i.text === "\\limits" || i.text === "\\nolimits") {
                if (!r || r.type !== "op") {
                  throw new k.default("Limit controls must follow a math operator", i);
                } else {
                  var l = i.text === "\\limits";r.value.limits = l;r.value.alwaysHandleSupSub = true;
                }this.consume();
              } else if (i.text === "^") {
                if (a) {
                  throw new k.default("Double superscript", i);
                }a = this.handleSupSubscript("superscript");
              } else if (i.text === "_") {
                if (n) {
                  throw new k.default("Double subscript", i);
                }n = this.handleSupSubscript("subscript");
              } else if (i.text === "'") {
                if (a) {
                  throw new k.default("Double superscript", i);
                }var o = new x.default("textord", "\\prime", this.mode);var u = [o];this.consume();while (this.nextToken.text === "'") {
                  u.push(o);this.consume();
                }if (this.nextToken.text === "^") {
                  u.push(this.handleSupSubscript("superscript"));
                }a = new x.default("ordgroup", u, this.mode);
              } else {
                break;
              }
            }if (a || n) {
              return new x.default("supsub", { base: r, sup: a, sub: n }, this.mode);
            } else {
              return r;
            }
          } }, { key: "parseImplicitGroup", value: function t(r) {
            var a = this.parseSymbol();if (a == null) {
              return this.parseFunction();
            }var n = a.result;if (n === "\\left") {
              var i = this.parseGivenFunction(a);++this.leftrightDepth;var l = this.parseExpression(false);--this.leftrightDepth;this.expect("\\right", false);var o = this.parseFunction();return new x.default("leftright", { body: l, left: i.value.value, right: o.value.value }, this.mode);
            } else if (n === "\\begin") {
              var u = this.parseGivenFunction(a);var s = u.value.name;if (!f.default.has(s)) {
                throw new k.default("No such environment: " + s, u.value.nameGroup);
              }var c = f.default.get(s);var d = this.parseArguments("\\begin{" + s + "}", c),
                  v = d.args,
                  h = d.optArgs;var p = { mode: this.mode, envName: s, parser: this };var g = c.handler(p, v, h);this.expect("\\end", false);var b = this.nextToken;var y = this.parseFunction();if (y.value.name !== s) {
                throw new k.default("Mismatch: \\begin{" + s + "} matched " + "by \\end{" + y.value.name + "}", b);
              }g.position = y.position;return g;
            } else if (m.default.contains(e.sizeFuncs, n)) {
              this.consumeSpaces();var w = this.parseExpression(false, r);return new x.default("sizing", { size: m.default.indexOf(e.sizeFuncs, n) + 1, value: w }, this.mode);
            } else if (m.default.contains(e.styleFuncs, n)) {
              this.consumeSpaces();var M = this.parseExpression(true, r);return new x.default("styling", { style: n.slice(1, n.length - 5), value: M }, this.mode);
            } else if (n in e.oldFontFuncs) {
              var _ = e.oldFontFuncs[n];this.consumeSpaces();var z = this.parseExpression(true, r);if (_.slice(0, 4) === "text") {
                return new x.default("text", { style: _, body: new x.default("ordgroup", z, this.mode) }, this.mode);
              } else {
                return new x.default("font", { font: _, body: new x.default("ordgroup", z, this.mode) }, this.mode);
              }
            } else if (n === "\\color") {
              var S = this.parseColorGroup(false);if (!S) {
                throw new k.default("\\color not followed by color");
              }var T = this.parseExpression(true, r);return new x.default("color", { type: "color", color: S.result.value, value: T }, this.mode);
            } else if (n === "$") {
              if (this.mode === "math") {
                throw new k.default("$ within math mode");
              }this.consume();var A = this.mode;this.switchMode("math");var C = this.parseExpression(false, "$");this.expect("$", true);this.switchMode(A);return new x.default("styling", { style: "text", value: C }, "math");
            } else {
              return this.parseGivenFunction(a);
            }
          } }, { key: "parseFunction", value: function e() {
            var t = this.parseGroup();return t ? this.parseGivenFunction(t) : null;
          } }, { key: "parseGivenFunction", value: function e(t) {
            t = T(t);if (t.type === "fn") {
              var r = t.result;var a = u.default[r];if (this.mode === "text" && !a.allowedInText) {
                throw new k.default("Can't use function '" + r + "' in text mode", t.token);
              } else if (this.mode === "math" && a.allowedInMath === false) {
                throw new k.default("Can't use function '" + r + "' in math mode", t.token);
              }var n = this.parseArguments(r, a),
                  i = n.args,
                  l = n.optArgs;var o = t.token;var s = this.callFunction(r, i, l, o);return new x.default(s.type, s, this.mode);
            } else {
              return t.result;
            }
          } }, { key: "callFunction", value: function e(t, r, a, n) {
            var i = { funcName: t, parser: this, token: n };return u.default[t].handler(i, r, a);
          } }, { key: "parseArguments", value: function e(t, r) {
            var a = r.numArgs + r.numOptionalArgs;if (a === 0) {
              return { args: [], optArgs: [] };
            }var n = r.greediness;var i = [];var l = [];for (var o = 0; o < a; o++) {
              var s = r.argTypes && r.argTypes[o];var f = o < r.numOptionalArgs;if (o > 0 && !f) {
                this.consumeSpaces();
              }if (o === 0 && !f && this.mode === "math") {
                this.consumeSpaces();
              }var c = this.nextToken;var d = s ? this.parseGroupOfType(s, f) : this.parseGroup(f);if (!d) {
                if (f) {
                  l.push(null);continue;
                }if (!this.settings.throwOnError && this.nextToken.text[0] === "\\") {
                  d = _(this.handleUnsupportedCmd(), c);
                } else {
                  throw new k.default("Expected group after '" + t + "'", c);
                }
              }var v = void 0;d = T(d);if (d.type === "fn") {
                var h = u.default[d.result].greediness;if (h > n) {
                  v = this.parseGivenFunction(d);
                } else {
                  throw new k.default("Got function '" + d.result + "' as " + "argument to '" + t + "'", c);
                }
              } else {
                v = d.result;
              }(f ? l : i).push(v);
            }return { args: i, optArgs: l };
          } }, { key: "parseGroupOfType", value: function e(t, r) {
            var a = this.mode;if (t === "original") {
              t = a;
            }if (t === "color") {
              return this.parseColorGroup(r);
            }if (t === "size") {
              return this.parseSizeGroup(r);
            }this.switchMode(t);var n = this.parseGroup(r);this.switchMode(a);return n;
          } }, { key: "consumeSpaces", value: function e() {
            while (this.nextToken.text === " ") {
              this.consume();
            }
          } }, { key: "parseStringGroup", value: function e(t, r) {
            if (r && this.nextToken.text !== "[") {
              return null;
            }var a = this.mode;this.mode = "text";this.expect(r ? "[" : "{");var n = "";var i = this.nextToken;var l = i;while (this.nextToken.text !== (r ? "]" : "}")) {
              if (this.nextToken.text === "EOF") {
                throw new k.default("Unexpected end of input in " + t, i.range(this.nextToken, n));
              }l = this.nextToken;n += l.text;this.consume();
            }this.mode = a;this.expect(r ? "]" : "}");return i.range(l, n);
          } }, { key: "parseRegexGroup", value: function e(t, r) {
            var a = this.mode;this.mode = "text";var n = this.nextToken;var i = n;var l = "";while (this.nextToken.text !== "EOF" && t.test(l + this.nextToken.text)) {
              i = this.nextToken;l += i.text;this.consume();
            }if (l === "") {
              throw new k.default("Invalid " + r + ": '" + n.text + "'", n);
            }this.mode = a;return n.range(i, l);
          } }, { key: "parseColorGroup", value: function e(t) {
            var r = this.parseStringGroup("color", t);if (!r) {
              return null;
            }var a = /^(#[a-f0-9]{3}|#[a-f0-9]{6}|[a-z]+)$/i.exec(r.text);if (!a) {
              throw new k.default("Invalid color: '" + r.text + "'", r);
            }return _(new x.default("color", a[0], this.mode), r);
          } }, { key: "parseSizeGroup", value: function e(t) {
            var r = void 0;if (!t && this.nextToken.text !== "{") {
              r = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size");
            } else {
              r = this.parseStringGroup("size", t);
            }if (!r) {
              return null;
            }var a = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(r.text);if (!a) {
              throw new k.default("Invalid size: '" + r.text + "'", r);
            }var n = { number: +(a[1] + a[2]), unit: a[3] };if (!(0, g.validUnit)(n)) {
              throw new k.default("Invalid unit: '" + n.unit + "'", r);
            }return _(new x.default("size", n, this.mode), r);
          } }, { key: "parseGroup", value: function e(t) {
            var r = this.nextToken;if (this.nextToken.text === (t ? "[" : "{")) {
              this.consume();var a = this.parseExpression(false, t ? "]" : "}");var n = this.nextToken;this.expect(t ? "]" : "}");if (this.mode === "text") {
                this.formLigatures(a);
              }return _(new x.default("ordgroup", a, this.mode, r, n), r.range(n, r.text));
            } else {
              return t ? null : this.parseSymbol();
            }
          } }, { key: "formLigatures", value: function e(t) {
            var r = t.length - 1;for (var a = 0; a < r; ++a) {
              var n = t[a];var i = n.value;if (i === "-" && t[a + 1].value === "-") {
                if (a + 1 < r && t[a + 2].value === "-") {
                  t.splice(a, 3, new x.default("textord", "---", "text", n, t[a + 2]));r -= 2;
                } else {
                  t.splice(a, 2, new x.default("textord", "--", "text", n, t[a + 1]));r -= 1;
                }
              }if ((i === "'" || i === "`") && t[a + 1].value === i) {
                t.splice(a, 2, new x.default("textord", i + i, "text", n, t[a + 1]));r -= 1;
              }
            }
          } }, { key: "parseSymbol", value: function e() {
            var t = this.nextToken;if (u.default[t.text]) {
              this.consume();return z(t);
            } else if (h.default[this.mode][t.text]) {
              this.consume();return _(new x.default(h.default[this.mode][t.text].group, t.text, this.mode, t), t);
            } else if (this.mode === "text" && b.cjkRegex.test(t.text)) {
              this.consume();return _(new x.default("textord", t.text, this.mode, t), t);
            } else if (t.text === "$") {
              return S(t);
            } else if (/^\\verb[^a-zA-Z]/.test(t.text)) {
              this.consume();var r = t.text.slice(5);var a = r.charAt(0) === "*";if (a) {
                r = r.slice(1);
              }if (r.length < 2 || r.charAt(0) !== r.slice(-1)) {
                throw new k.default("\\verb assertion failed --\n                    please report what input caused this bug");
              }r = r.slice(1, -1);return _(new x.default("verb", { body: r, star: a }, "text"), t);
            } else {
              return null;
            }
          } }]);return e;
      }();A.endOfExpression = ["}", "\\end", "\\right", "&", "\\\\", "\\cr"];A.SUPSUB_GREEDINESS = 1;A.sizeFuncs = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"];A.styleFuncs = ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"];A.oldFontFuncs = { "\\rm": "mathrm", "\\sf": "mathsf", "\\tt": "mathtt", "\\bf": "mathbf", "\\it": "mathit" };r.default = A;
    }, { "./MacroExpander": 82, "./ParseError": 84, "./ParseNode": 85, "./environments": 99, "./functions": 103, "./symbols": 112, "./unicodeRegexes": 113, "./units": 114, "./utils": 115, "babel-runtime/helpers/classCallCheck": 8, "babel-runtime/helpers/createClass": 9 }], 87: [function (e, t, r) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: true });var a = e("babel-runtime/helpers/classCallCheck");var n = o(a);var i = e("./utils");var l = o(i);function o(e) {
        return e && e.__esModule ? e : { default: e };
      }var u = function e(t) {
        (0, n.default)(this, e);t = t || {};this.displayMode = l.default.deflt(t.displayMode, false);this.throwOnError = l.default.deflt(t.throwOnError, true);this.errorColor = l.default.deflt(t.errorColor, "#cc0000");this.macros = t.macros || {};this.colorIsTextColor = l.default.deflt(t.colorIsTextColor, false);this.maxSize = Math.max(0, l.default.deflt(t.maxSize, Infinity));
      };r.default = u;
    }, { "./utils": 115, "babel-runtime/helpers/classCallCheck": 8 }], 88: [function (e, t, r) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: true });var a = e("babel-runtime/core-js/object/freeze");var n = s(a);var i = e("babel-runtime/helpers/classCallCheck");var l = s(i);var o = e("babel-runtime/helpers/createClass");var u = s(o);function s(e) {
        return e && e.__esModule ? e : { default: e };
      }var f = function () {
        function e(t, r, a) {
          (0, l.default)(this, e);this.lexer = t;this.start = r;this.end = a;(0, n.default)(this);
        }(0, u.default)(e, null, [{ key: "range", value: function t(r, a) {
            if (!a) {
              return r && r.loc;
            } else if (!r || !r.loc || !a.loc || r.loc.lexer !== a.loc.lexer) {
              return null;
            } else {
              return new e(r.loc.lexer, r.loc.start, a.loc.end);
            }
          } }]);return e;
      }();r.default = f;
    }, { "babel-runtime/core-js/object/freeze": 7, "babel-runtime/helpers/classCallCheck": 8, "babel-runtime/helpers/createClass": 9 }], 89: [function (e, t, r) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: true });var a = e("babel-runtime/helpers/classCallCheck");var n = o(a);var i = e("babel-runtime/helpers/createClass");var l = o(i);function o(e) {
        return e && e.__esModule ? e : { default: e };
      }var u = function () {
        function e(t, r, a) {
          (0, n.default)(this, e);this.id = t;this.size = r;this.cramped = a;
        }(0, l.default)(e, [{ key: "sup", value: function e() {
            return g[b[this.id]];
          } }, { key: "sub", value: function e() {
            return g[y[this.id]];
          } }, { key: "fracNum", value: function e() {
            return g[x[this.id]];
          } }, { key: "fracDen", value: function e() {
            return g[w[this.id]];
          } }, { key: "cramp", value: function e() {
            return g[k[this.id]];
          } }, { key: "text", value: function e() {
            return g[M[this.id]];
          } }, { key: "isTight", value: function e() {
            return this.size >= 2;
          } }]);return e;
      }();var s = 0;var f = 1;var c = 2;var d = 3;var v = 4;var h = 5;var p = 6;var m = 7;var g = [new u(s, 0, false), new u(f, 0, true), new u(c, 1, false), new u(d, 1, true), new u(v, 2, false), new u(h, 2, true), new u(p, 3, false), new u(m, 3, true)];var b = [v, h, v, h, p, m, p, m];var y = [h, h, h, h, m, m, m, m];var x = [c, d, v, h, p, m, p, m];var w = [d, d, h, h, m, m, m, m];var k = [f, f, d, d, h, h, m, m];var M = [s, f, c, d, c, d, c, d];r.default = { DISPLAY: g[s], TEXT: g[c], SCRIPT: g[v], SCRIPTSCRIPT: g[p] };
    }, { "babel-runtime/helpers/classCallCheck": 8, "babel-runtime/helpers/createClass": 9 }], 90: [function (e, t, r) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: true });r.Token = undefined;var a = e("babel-runtime/helpers/classCallCheck");var n = s(a);var i = e("babel-runtime/helpers/createClass");var l = s(i);var o = e("./SourceLocation");var u = s(o);function s(e) {
        return e && e.__esModule ? e : { default: e };
      }var f = r.Token = function () {
        function e(t, r) {
          (0, n.default)(this, e);this.text = t;this.loc = r;
        }(0, l.default)(e, [{ key: "range", value: function t(r, a) {
            return new e(a, u.default.range(this, r));
          } }]);return e;
      }();
    }, { "./SourceLocation": 88, "babel-runtime/helpers/classCallCheck": 8, "babel-runtime/helpers/createClass": 9 }], 91: [function (e, t, r) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: true });var a = e("./domTree");var n = c(a);var i = e("./fontMetrics");var l = c(i);var o = e("./symbols");var u = c(o);var s = e("./utils");var f = c(s);function c(e) {
        return e && e.__esModule ? e : { default: e };
      }var d = ["\\imath", "\\jmath", "\\pounds"];var v = function e(t, r, a) {
        if (u.default[a][t] && u.default[a][t].replace) {
          t = u.default[a][t].replace;
        }return { value: t, metrics: l.default.getCharacterMetrics(t, r) };
      };var h = function e(t, r, a, i, l) {
        var o = v(t, r, a);var u = o.metrics;t = o.value;var s = void 0;if (u) {
          var f = u.italic;if (a === "text") {
            f = 0;
          }s = new n.default.symbolNode(t, u.height, u.depth, f, u.skew, l);
        } else {
          typeof console !== "undefined" && console.warn("No character metrics for '" + t + "' in style '" + r + "'");s = new n.default.symbolNode(t, 0, 0, 0, 0, l);
        }if (i) {
          s.maxFontSize = i.sizeMultiplier;if (i.style.isTight()) {
            s.classes.push("mtight");
          }if (i.getColor()) {
            s.style.color = i.getColor();
          }
        }return s;
      };var p = function e(t, r, a, n) {
        if (t === "\\" || u.default[r][t].font === "main") {
          return h(t, "Main-Regular", r, a, n);
        } else {
          return h(t, "AMS-Regular", r, a, n.concat(["amsrm"]));
        }
      };var m = function e(t, r, a, n, i) {
        if (i === "mathord") {
          var l = g(t, r, a, n);return h(t, l.fontName, r, a, n.concat([l.fontClass]));
        } else if (i === "textord") {
          var o = u.default[r][t] && u.default[r][t].font;if (o === "ams") {
            return h(t, "AMS-Regular", r, a, n.concat(["amsrm"]));
          } else {
            return h(t, "Main-Regular", r, a, n.concat(["mathrm"]));
          }
        } else {
          throw new Error("unexpected type: " + i + " in mathDefault");
        }
      };var g = function e(t, r, a, n) {
        if (/[0-9]/.test(t.charAt(0)) || f.default.contains(d, t)) {
          return { fontName: "Main-Italic", fontClass: "mainit" };
        } else {
          return { fontName: "Math-Italic", fontClass: "mathit" };
        }
      };var b = function e(t, r, a) {
        var n = t.mode;var i = t.value;var l = ["mord"];var o = r.font;if (o) {
          var u = void 0;if (o === "mathit" || f.default.contains(d, i)) {
            u = g(i, n, r, l);
          } else {
            u = T[o];
          }if (v(i, u.fontName, n).metrics) {
            return h(i, u.fontName, n, r, l.concat([u.fontClass || o]));
          } else {
            return m(i, n, r, l, a);
          }
        } else {
          return m(i, n, r, l, a);
        }
      };var y = function e(t) {
        for (var r = 0; r < t.length - 1; r++) {
          if (t[r].tryCombine(t[r + 1])) {
            t.splice(r + 1, 1);r--;
          }
        }return t;
      };var x = function e(t) {
        var r = 0;var a = 0;var n = 0;if (t.children) {
          for (var i = 0; i < t.children.length; i++) {
            if (t.children[i].height > r) {
              r = t.children[i].height;
            }if (t.children[i].depth > a) {
              a = t.children[i].depth;
            }if (t.children[i].maxFontSize > n) {
              n = t.children[i].maxFontSize;
            }
          }
        }t.height = r;t.depth = a;t.maxFontSize = n;
      };var w = function e(t, r, a) {
        var i = new n.default.span(t, r, a);x(i);return i;
      };var k = function e(t, r) {
        t.children = r.concat(t.children);x(t);
      };var M = function e(t) {
        var r = new n.default.documentFragment(t);x(r);return r;
      };var _ = function e(t, r, a, i) {
        var l = void 0;var o = void 0;var u = void 0;if (r === "individualShift") {
          var s = t;t = [s[0]];l = -s[0].shift - s[0].elem.depth;o = l;for (u = 1; u < s.length; u++) {
            var f = -s[u].shift - o - s[u].elem.depth;var c = f - (s[u - 1].elem.height + s[u - 1].elem.depth);o = o + f;t.push({ type: "kern", size: c });t.push(s[u]);
          }
        } else if (r === "top") {
          var d = a;for (u = 0; u < t.length; u++) {
            if (t[u].type === "kern") {
              d -= t[u].size;
            } else {
              d -= t[u].elem.height + t[u].elem.depth;
            }
          }l = d;
        } else if (r === "bottom") {
          l = -a;
        } else if (r === "shift") {
          l = -t[0].elem.depth - a;
        } else if (r === "firstBaseline") {
          l = -t[0].elem.depth;
        } else {
          l = 0;
        }var v = 0;for (u = 0; u < t.length; u++) {
          if (t[u].type === "elem") {
            var h = t[u].elem;v = Math.max(v, h.maxFontSize, h.height);
          }
        }v += 2;var p = w(["pstrut"], []);p.style.height = v + "em";var m = [];var g = l;var b = l;o = l;for (u = 0; u < t.length; u++) {
          if (t[u].type === "kern") {
            o += t[u].size;
          } else {
            var y = t[u].elem;var x = w([], [p, y]);x.style.top = -v - o - y.depth + "em";if (t[u].marginLeft) {
              x.style.marginLeft = t[u].marginLeft;
            }if (t[u].marginRight) {
              x.style.marginRight = t[u].marginRight;
            }m.push(x);o += y.height + y.depth;
          }g = Math.min(g, o);b = Math.max(b, o);
        }var k = w(["vlist"], m);k.style.height = b + "em";var M = void 0;if (g < 0) {
          var _ = w(["vlist"], []);_.style.height = -g + "em";var z = w(["vlist-s"], [new n.default.symbolNode("\u200B")]);M = [w(["vlist-r"], [k, z]), w(["vlist-r"], [_])];
        } else {
          M = [w(["vlist-r"], [k])];
        }var S = w(["vlist-t"], M);if (M.length === 2) {
          S.classes.push("vlist-t2");
        }S.height = b;S.depth = -g;return S;
      };var z = function e(t, r) {
        var a = t.value.body;if (t.value.star) {
          a = a.replace(/ /g, "\u2423");
        } else {
          a = a.replace(/ /g, "\xa0");
        }return a;
      };var S = { "\\qquad": { size: "2em", className: "qquad" }, "\\quad": { size: "1em", className: "quad" }, "\\enspace": { size: "0.5em", className: "enspace" }, "\\;": { size: "0.277778em", className: "thickspace" }, "\\:": { size: "0.22222em", className: "mediumspace" }, "\\,": { size: "0.16667em", className: "thinspace" }, "\\!": { size: "-0.16667em", className: "negativethinspace" } };var T = { mathbf: { variant: "bold", fontName: "Main-Bold" }, mathrm: { variant: "normal", fontName: "Main-Regular" }, textit: { variant: "italic", fontName: "Main-Italic" }, mathbb: { variant: "double-struck", fontName: "AMS-Regular" }, mathcal: { variant: "script", fontName: "Caligraphic-Regular" }, mathfrak: { variant: "fraktur", fontName: "Fraktur-Regular" }, mathscr: { variant: "script", fontName: "Script-Regular" }, mathsf: { variant: "sans-serif", fontName: "SansSerif-Regular" }, mathtt: { variant: "monospace", fontName: "Typewriter-Regular" } };r.default = { fontMap: T, makeSymbol: h, mathsym: p, makeSpan: w, makeFragment: M, makeVList: _, makeOrd: b, makeVerb: z, tryCombineChars: y, prependChildren: k, spacingFunctions: S };
    }, { "./domTree": 98, "./fontMetrics": 101, "./symbols": 112, "./utils": 115 }], 92: [function (e, t, r) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: true });r.buildGroup = r.groupTypes = r.makeNullDelimiter = r.buildExpression = r.spliceSpaces = undefined;var a = e("babel-runtime/core-js/json/stringify");var n = x(a);r.default = R;var i = e("./ParseError");var l = x(i);var o = e("./Style");var u = x(o);var s = e("./buildCommon");var f = x(s);var c = e("./delimiter");var d = x(c);var v = e("./domTree");var h = x(v);var p = e("./units");var m = e("./utils");var g = x(m);var b = e("./stretchy");var y = x(b);function x(e) {
        return e && e.__esModule ? e : { default: e };
      }var w = f.default.makeSpan;var k = function e(t) {
        return t instanceof h.default.span && t.classes[0] === "mspace";
      };var M = function e(t) {
        return t && t.classes[0] === "mbin";
      };var _ = function e(t, r) {
        if (t) {
          return g.default.contains(["mbin", "mopen", "mrel", "mop", "mpunct"], t.classes[0]);
        } else {
          return r;
        }
      };var z = function e(t, r) {
        if (t) {
          return g.default.contains(["mrel", "mclose", "mpunct"], t.classes[0]);
        } else {
          return r;
        }
      };var S = r.spliceSpaces = function e(t, r) {
        var a = r;while (a < t.length && k(t[a])) {
          a++;
        }if (a === r) {
          return null;
        } else {
          return t.splice(r, a - r);
        }
      };var T = r.buildExpression = function e(t, r, a) {
        var n = [];for (var i = 0; i < t.length; i++) {
          var l = t[i];var o = P(l, r);if (o instanceof h.default.documentFragment) {
            Array.prototype.push.apply(n, o.children);
          } else {
            n.push(o);
          }
        }for (var u = 0; u < n.length; u++) {
          var s = S(n, u);if (s) {
            if (u < n.length) {
              if (n[u] instanceof h.default.symbolNode) {
                n[u] = w([].concat(n[u].classes), [n[u]]);
              }f.default.prependChildren(n[u], s);
            } else {
              Array.prototype.push.apply(n, s);break;
            }
          }
        }for (var c = 0; c < n.length; c++) {
          if (M(n[c]) && (_(n[c - 1], a) || z(n[c + 1], a))) {
            n[c].classes[0] = "mord";
          }
        }for (var d = 0; d < n.length; d++) {
          if (n[d].value === "\u0338" && d + 1 < n.length) {
            var v = n.slice(d, d + 2);v[0].classes = ["mainrm"];v[0].style.position = "absolute";v[0].style.right = "0";var p = n[d + 1].classes;var m = w(p, v);if (p.indexOf("mord") !== -1) {
              m.style.paddingLeft = "0.277771em";
            }m.style.position = "relative";n.splice(d, 2, m);
          }
        }return n;
      };var A = function e(t) {
        if (t instanceof h.default.documentFragment) {
          if (t.children.length) {
            return e(t.children[t.children.length - 1]);
          }
        } else {
          if (g.default.contains(["mord", "mop", "mbin", "mrel", "mopen", "mclose", "mpunct", "minner"], t.classes[0])) {
            return t.classes[0];
          }
        }return null;
      };var C = function e(t, r) {
        if (!t.value.base) {
          return false;
        } else {
          var a = t.value.base;if (a.type === "op") {
            return a.value.limits && (r.style.size === u.default.DISPLAY.size || a.value.alwaysHandleSupSub);
          } else if (a.type === "accent") {
            return O(a.value.base);
          } else if (a.type === "horizBrace") {
            var n = t.value.sub ? false : true;return n === a.value.isOver;
          } else {
            return null;
          }
        }
      };var N = function e(t) {
        if (!t) {
          return false;
        } else if (t.type === "ordgroup") {
          if (t.value.length === 1) {
            return e(t.value[0]);
          } else {
            return t;
          }
        } else if (t.type === "color") {
          if (t.value.value.length === 1) {
            return e(t.value.value[0]);
          } else {
            return t;
          }
        } else if (t.type === "font") {
          return e(t.value.body);
        } else {
          return t;
        }
      };var O = function e(t) {
        var r = N(t);return r.type === "mathord" || r.type === "textord" || r.type === "bin" || r.type === "rel" || r.type === "inner" || r.type === "open" || r.type === "close" || r.type === "punct";
      };var j = r.makeNullDelimiter = function e(t, r) {
        var a = ["nulldelimiter"].concat(t.baseSizingClasses());return w(r.concat(a));
      };var E = r.groupTypes = {};E.mathord = function (e, t) {
        return f.default.makeOrd(e, t, "mathord");
      };E.textord = function (e, t) {
        return f.default.makeOrd(e, t, "textord");
      };E.bin = function (e, t) {
        return f.default.mathsym(e.value, e.mode, t, ["mbin"]);
      };E.rel = function (e, t) {
        return f.default.mathsym(e.value, e.mode, t, ["mrel"]);
      };E.open = function (e, t) {
        return f.default.mathsym(e.value, e.mode, t, ["mopen"]);
      };E.close = function (e, t) {
        return f.default.mathsym(e.value, e.mode, t, ["mclose"]);
      };E.inner = function (e, t) {
        return f.default.mathsym(e.value, e.mode, t, ["minner"]);
      };E.punct = function (e, t) {
        return f.default.mathsym(e.value, e.mode, t, ["mpunct"]);
      };E.ordgroup = function (e, t) {
        return w(["mord"], T(e.value, t, true), t);
      };E.text = function (e, t) {
        var r = t.withFont(e.value.font);var a = T(e.value.body, r, true);f.default.tryCombineChars(a);return w(["mord", "text"], a, r);
      };E.color = function (e, t) {
        var r = T(e.value.value, t.withColor(e.value.color), false);return new f.default.makeFragment(r);
      };E.supsub = function (e, t) {
        if (C(e, t)) {
          return E[e.value.base.type](e, t);
        }var r = P(e.value.base, t);var a = void 0;var n = void 0;var i = t.fontMetrics();var l = void 0;var o = 0;var s = 0;if (e.value.sup) {
          l = t.havingStyle(t.style.sup());a = P(e.value.sup, l, t);if (!O(e.value.base)) {
            o = r.height - l.fontMetrics().supDrop * l.sizeMultiplier / t.sizeMultiplier;
          }
        }if (e.value.sub) {
          l = t.havingStyle(t.style.sub());n = P(e.value.sub, l, t);if (!O(e.value.base)) {
            s = r.depth + l.fontMetrics().subDrop * l.sizeMultiplier / t.sizeMultiplier;
          }
        }var c = void 0;if (t.style === u.default.DISPLAY) {
          c = i.sup1;
        } else if (t.style.cramped) {
          c = i.sup3;
        } else {
          c = i.sup2;
        }var d = t.sizeMultiplier;var v = .5 / i.ptPerEm / d + "em";var p = void 0;if (!e.value.sup) {
          s = Math.max(s, i.sub1, n.height - .8 * i.xHeight);var m = [{ type: "elem", elem: n, marginRight: v }];if (r instanceof h.default.symbolNode) {
            m[0].marginLeft = -r.italic + "em";
          }p = f.default.makeVList(m, "shift", s, t);
        } else if (!e.value.sub) {
          o = Math.max(o, c, a.depth + .25 * i.xHeight);p = f.default.makeVList([{ type: "elem", elem: a, marginRight: v }], "shift", -o, t);
        } else {
          o = Math.max(o, c, a.depth + .25 * i.xHeight);s = Math.max(s, i.sub2);var g = i.defaultRuleThickness;if (o - a.depth - (n.height - s) < 4 * g) {
            s = 4 * g - (o - a.depth) + n.height;var b = .8 * i.xHeight - (o - a.depth);if (b > 0) {
              o += b;s -= b;
            }
          }var y = [{ type: "elem", elem: n, shift: s, marginRight: v }, { type: "elem", elem: a, shift: -o, marginRight: v }];if (r instanceof h.default.symbolNode) {
            y[0].marginLeft = -r.italic + "em";
          }p = f.default.makeVList(y, "individualShift", null, t);
        }var x = A(r) || "mord";return w([x], [r, w(["msupsub"], [p])], t);
      };E.genfrac = function (e, t) {
        var r = t.style;if (e.value.size === "display") {
          r = u.default.DISPLAY;
        } else if (e.value.size === "text") {
          r = u.default.TEXT;
        }var a = r.fracNum();var n = r.fracDen();var i = void 0;i = t.havingStyle(a);var l = P(e.value.numer, i, t);i = t.havingStyle(n);var o = P(e.value.denom, i, t);var s = void 0;var c = void 0;var v = void 0;if (e.value.hasBarLine) {
          s = L("frac-line", t);c = s.height;v = s.height;
        } else {
          s = null;c = 0;v = t.fontMetrics().defaultRuleThickness;
        }var h = void 0;var p = void 0;var m = void 0;if (r.size === u.default.DISPLAY.size) {
          h = t.fontMetrics().num1;if (c > 0) {
            p = 3 * v;
          } else {
            p = 7 * v;
          }m = t.fontMetrics().denom1;
        } else {
          if (c > 0) {
            h = t.fontMetrics().num2;p = v;
          } else {
            h = t.fontMetrics().num3;p = 3 * v;
          }m = t.fontMetrics().denom2;
        }var g = void 0;if (c === 0) {
          var b = h - l.depth - (o.height - m);if (b < p) {
            h += .5 * (p - b);m += .5 * (p - b);
          }g = f.default.makeVList([{ type: "elem", elem: o, shift: m }, { type: "elem", elem: l, shift: -h }], "individualShift", null, t);
        } else {
          var y = t.fontMetrics().axisHeight;if (h - l.depth - (y + .5 * c) < p) {
            h += p - (h - l.depth - (y + .5 * c));
          }if (y - .5 * c - (o.height - m) < p) {
            m += p - (y - .5 * c - (o.height - m));
          }var x = -(y - .5 * c);g = f.default.makeVList([{ type: "elem", elem: o, shift: m }, { type: "elem", elem: s, shift: x }, { type: "elem", elem: l, shift: -h }], "individualShift", null, t);
        }i = t.havingStyle(r);g.height *= i.sizeMultiplier / t.sizeMultiplier;g.depth *= i.sizeMultiplier / t.sizeMultiplier;var k = void 0;if (r.size === u.default.DISPLAY.size) {
          k = t.fontMetrics().delim1;
        } else {
          k = t.fontMetrics().delim2;
        }var M = void 0;var _ = void 0;if (e.value.leftDelim == null) {
          M = j(t, ["mopen"]);
        } else {
          M = d.default.customSizedDelim(e.value.leftDelim, k, true, t.havingStyle(r), e.mode, ["mopen"]);
        }if (e.value.rightDelim == null) {
          _ = j(t, ["mclose"]);
        } else {
          _ = d.default.customSizedDelim(e.value.rightDelim, k, true, t.havingStyle(r), e.mode, ["mclose"]);
        }return w(["mord"].concat(i.sizingClasses(t)), [M, w(["mfrac"], [g]), _], t);
      };E.spacing = function (e, t) {
        if (e.value === "\\ " || e.value === "\\space" || e.value === " " || e.value === "~") {
          if (e.mode === "text") {
            return f.default.makeOrd(e, t, "textord");
          } else {
            return w(["mspace"], [f.default.mathsym(e.value, e.mode, t)], t);
          }
        } else {
          return w(["mspace", f.default.spacingFunctions[e.value].className], [], t);
        }
      };E.lap = function (e, t) {
        var r = void 0;if (e.value.alignment === "clap") {
          r = w([], [P(e.value.body, t)]);r = w(["inner"], [r], t);
        } else {
          r = w(["inner"], [P(e.value.body, t)]);
        }var a = w(["fix"], []);return w(["mord", e.value.alignment], [r, a], t);
      };E.smash = function (e, t) {
        var r = w(["mord"], [P(e.value.body, t)]);if (!e.value.smashHeight && !e.value.smashDepth) {
          return r;
        }if (e.value.smashHeight) {
          r.height = 0;if (r.children) {
            for (var a = 0; a < r.children.length; a++) {
              r.children[a].height = 0;
            }
          }
        }if (e.value.smashDepth) {
          r.depth = 0;if (r.children) {
            for (var n = 0; n < r.children.length; n++) {
              r.children[n].depth = 0;
            }
          }
        }return f.default.makeVList([{ type: "elem", elem: r }], "firstBaseline", null, t);
      };E.op = function (e, t) {
        var r = void 0;var a = void 0;var n = false;if (e.type === "supsub") {
          r = e.value.sup;a = e.value.sub;e = e.value.base;n = true;
        }var i = t.style;var l = ["\\smallint"];var o = false;if (i.size === u.default.DISPLAY.size && e.value.symbol && !g.default.contains(l, e.value.body)) {
          o = true;
        }var s = void 0;if (e.value.symbol) {
          var c = o ? "Size2-Regular" : "Size1-Regular";s = f.default.makeSymbol(e.value.body, c, "math", t, ["mop", "op-symbol", o ? "large-op" : "small-op"]);
        } else if (e.value.value) {
          var d = T(e.value.value, t, true);if (d.length === 1 && d[0] instanceof h.default.symbolNode) {
            s = d[0];s.classes[0] = "mop";
          } else {
            s = w(["mop"], d, t);
          }
        } else {
          var v = [];for (var p = 1; p < e.value.body.length; p++) {
            v.push(f.default.mathsym(e.value.body[p], e.mode));
          }s = w(["mop"], v, t);
        }var m = 0;var b = 0;if (s instanceof h.default.symbolNode) {
          m = (s.height - s.depth) / 2 - t.fontMetrics().axisHeight;b = s.italic;
        }if (n) {
          s = w([], [s]);var y = void 0;var x = void 0;var k = void 0;var M = void 0;var _ = void 0;if (r) {
            _ = t.havingStyle(i.sup());y = P(r, _, t);x = Math.max(t.fontMetrics().bigOpSpacing1, t.fontMetrics().bigOpSpacing3 - y.depth);
          }if (a) {
            _ = t.havingStyle(i.sub());k = P(a, _, t);M = Math.max(t.fontMetrics().bigOpSpacing2, t.fontMetrics().bigOpSpacing4 - k.height);
          }var z = void 0;var S = void 0;var A = void 0;if (!r) {
            S = s.height - m;z = f.default.makeVList([{ type: "kern", size: t.fontMetrics().bigOpSpacing5 }, { type: "elem", elem: k, marginLeft: -b + "em" }, { type: "kern", size: M }, { type: "elem", elem: s }], "top", S, t);
          } else if (!a) {
            A = s.depth + m;z = f.default.makeVList([{ type: "elem", elem: s }, { type: "kern", size: x }, { type: "elem", elem: y, marginLeft: b + "em" }, { type: "kern", size: t.fontMetrics().bigOpSpacing5 }], "bottom", A, t);
          } else if (!r && !a) {
            return s;
          } else {
            A = t.fontMetrics().bigOpSpacing5 + k.height + k.depth + M + s.depth + m;z = f.default.makeVList([{ type: "kern", size: t.fontMetrics().bigOpSpacing5 }, { type: "elem", elem: k, marginLeft: -b + "em" }, { type: "kern", size: M }, { type: "elem", elem: s }, { type: "kern", size: x }, { type: "elem", elem: y, marginLeft: b + "em" }, { type: "kern", size: t.fontMetrics().bigOpSpacing5 }], "bottom", A, t);
          }return w(["mop", "op-limits"], [z], t);
        } else {
          if (m) {
            s.style.position = "relative";s.style.top = m + "em";
          }return s;
        }
      };E.mod = function (e, t) {
        var r = [];if (e.value.modType === "bmod") {
          if (!t.style.isTight()) {
            r.push(w(["mspace", "negativemediumspace"], [], t));
          }r.push(w(["mspace", "thickspace"], [], t));
        } else if (t.style.size === u.default.DISPLAY.size) {
          r.push(w(["mspace", "quad"], [], t));
        } else if (e.value.modType === "mod") {
          r.push(w(["mspace", "twelvemuspace"], [], t));
        } else {
          r.push(w(["mspace", "eightmuspace"], [], t));
        }if (e.value.modType === "pod" || e.value.modType === "pmod") {
          r.push(f.default.mathsym("(", e.mode));
        }if (e.value.modType !== "pod") {
          var a = [f.default.mathsym("m", e.mode), f.default.mathsym("o", e.mode), f.default.mathsym("d", e.mode)];if (e.value.modType === "bmod") {
            r.push(w(["mbin"], a, t));r.push(w(["mspace", "thickspace"], [], t));if (!t.style.isTight()) {
              r.push(w(["mspace", "negativemediumspace"], [], t));
            }
          } else {
            Array.prototype.push.apply(r, a);r.push(w(["mspace", "sixmuspace"], [], t));
          }
        }if (e.value.value) {
          Array.prototype.push.apply(r, T(e.value.value, t, false));
        }if (e.value.modType === "pod" || e.value.modType === "pmod") {
          r.push(f.default.mathsym(")", e.mode));
        }return f.default.makeFragment(r);
      };E.katex = function (e, t) {
        var r = w(["k"], [f.default.mathsym("K", e.mode)], t);var a = w(["a"], [f.default.mathsym("A", e.mode)], t);a.height = (a.height + .2) * .75;a.depth = (a.height - .2) * .75;var n = w(["t"], [f.default.mathsym("T", e.mode)], t);var i = w(["e"], [f.default.mathsym("E", e.mode)], t);i.height = i.height - .2155;i.depth = i.depth + .2155;var l = w(["x"], [f.default.mathsym("X", e.mode)], t);return w(["mord", "katex-logo"], [r, a, n, i, l], t);
      };var L = function e(t, r, a) {
        var n = w([t], [], r);n.height = a || r.fontMetrics().defaultRuleThickness;n.style.borderBottomWidth = n.height + "em";n.maxFontSize = 1;return n;
      };E.overline = function (e, t) {
        var r = P(e.value.body, t.havingCrampedStyle());var a = L("overline-line", t);var n = f.default.makeVList([{ type: "elem", elem: r }, { type: "kern", size: 3 * a.height }, { type: "elem", elem: a }, { type: "kern", size: a.height }], "firstBaseline", null, t);return w(["mord", "overline"], [n], t);
      };E.underline = function (e, t) {
        var r = P(e.value.body, t);var a = L("underline-line", t);var n = f.default.makeVList([{ type: "kern", size: a.height }, { type: "elem", elem: a }, { type: "kern", size: 3 * a.height }, { type: "elem", elem: r }], "top", r.height, t);return w(["mord", "underline"], [n], t);
      };E.sqrt = function (e, t) {
        var r = P(e.value.body, t.havingCrampedStyle());if (r.height === 0) {
          r.height = t.fontMetrics().xHeight;
        }if (r instanceof h.default.documentFragment) {
          r = w([], [r], t);
        }var a = t.fontMetrics();var n = a.defaultRuleThickness;var i = n;if (t.style.id < u.default.TEXT.id) {
          i = t.fontMetrics().xHeight;
        }var l = n + i / 4;var o = (r.height + r.depth + l + n) * t.sizeMultiplier;var s = d.default.customSizedDelim("\\surd", o, false, t, e.mode);var c = t.fontMetrics().sqrtRuleThickness * s.sizeMultiplier;var v = s.height - c;if (v > r.height + r.depth + l) {
          l = (l + v - r.height - r.depth) / 2;
        }var p = s.height - r.height - l - c;r.style.paddingLeft = s.advanceWidth + "em";var m = f.default.makeVList([{ type: "elem", elem: r }, { type: "kern", size: -(r.height + p) }, { type: "elem", elem: s }, { type: "kern", size: c }], "firstBaseline", null, t);m.children[0].children[0].classes.push("svg-align");if (!e.value.index) {
          return w(["mord", "sqrt"], [m], t);
        } else {
          var g = t.havingStyle(u.default.SCRIPTSCRIPT);var b = P(e.value.index, g, t);var y = .6 * (m.height - m.depth);var x = f.default.makeVList([{ type: "elem", elem: b }], "shift", -y, t);var k = w(["root"], [x]);return w(["mord", "sqrt"], [k, m], t);
        }
      };function q(e, t, r) {
        var a = T(e, t, false);var n = t.sizeMultiplier / r.sizeMultiplier;for (var i = 0; i < a.length; i++) {
          var l = g.default.indexOf(a[i].classes, "sizing");if (l < 0) {
            Array.prototype.push.apply(a[i].classes, t.sizingClasses(r));
          } else if (a[i].classes[l + 1] === "reset-size" + t.size) {
            a[i].classes[l + 1] = "reset-size" + r.size;
          }a[i].height *= n;a[i].depth *= n;
        }return f.default.makeFragment(a);
      }E.sizing = function (e, t) {
        var r = t.havingSize(e.value.size);return q(e.value.value, r, t);
      };E.styling = function (e, t) {
        var r = { display: u.default.DISPLAY, text: u.default.TEXT, script: u.default.SCRIPT, scriptscript: u.default.SCRIPTSCRIPT };var a = r[e.value.style];var n = t.havingStyle(a);return q(e.value.value, n, t);
      };E.font = function (e, t) {
        var r = e.value.font;return P(e.value.body, t.withFont(r));
      };E.verb = function (e, t) {
        var r = f.default.makeVerb(e, t);var a = [];var n = t.havingStyle(t.style.text());for (var i = 0; i < r.length; i++) {
          if (r[i] === "\xa0") {
            var l = w(["mord", "rule"], [], n);l.style.marginLeft = "0.525em";a.push(l);
          } else {
            a.push(f.default.makeSymbol(r[i], "Typewriter-Regular", e.mode, n, ["mathtt"]));
          }
        }f.default.tryCombineChars(a);return w(["mord", "text"].concat(n.sizingClasses(t)), a, n);
      };E.rule = function (e, t) {
        var r = w(["mord", "rule"], [], t);var a = 0;if (e.value.shift) {
          a = (0, p.calculateSize)(e.value.shift, t);
        }var n = (0, p.calculateSize)(e.value.width, t);var i = (0, p.calculateSize)(e.value.height, t);r.style.borderRightWidth = n + "em";r.style.borderTopWidth = i + "em";r.style.bottom = a + "em";r.width = n;r.height = i + a;r.depth = -a;r.maxFontSize = i * 1.125 * t.sizeMultiplier;return r;
      };E.kern = function (e, t) {
        var r = w(["mord", "rule"], [], t);if (e.value.dimension) {
          var a = (0, p.calculateSize)(e.value.dimension, t);r.style.marginLeft = a + "em";
        }return r;
      };E.accent = function (e, t) {
        var r = e.value.base;var a = void 0;if (e.type === "supsub") {
          var n = e;e = n.value.base;r = e.value.base;n.value.base = r;a = P(n, t);
        }var i = P(r, t.havingCrampedStyle());var l = e.value.isShifty && O(r);var o = 0;if (l) {
          var u = N(r);var s = P(u, t.havingCrampedStyle());o = s.skew;
        }var c = Math.min(i.height, t.fontMetrics().xHeight);var d = void 0;if (!e.value.isStretchy) {
          var v = f.default.makeSymbol(e.value.label, "Main-Regular", e.mode, t);v.italic = 0;var h = null;if (e.value.label === "\\vec") {
            h = "accent-vec";
          } else if (e.value.label === "\\H") {
            h = "accent-hungarian";
          }d = w([], [v]);d = w(["accent-body", h], [d]);d.style.marginLeft = 2 * o + "em";d = f.default.makeVList([{ type: "elem", elem: i }, { type: "kern", size: -c }, { type: "elem", elem: d }], "firstBaseline", null, t);
        } else {
          d = y.default.svgSpan(e, t);d = f.default.makeVList([{ type: "elem", elem: i }, { type: "elem", elem: d }], "firstBaseline", null, t);var p = d.children[0].children[0].children[1];p.classes.push("svg-align");if (o > 0) {
            p.style.width = "calc(100% - " + 2 * o + "em)";p.style.marginLeft = 2 * o + "em";
          }
        }var m = w(["mord", "accent"], [d], t);if (a) {
          a.children[0] = m;a.height = Math.max(m.height, a.height);a.classes[0] = "mord";return a;
        } else {
          return m;
        }
      };E.horizBrace = function (e, t) {
        var r = t.style;var a = e.type === "supsub";var n = void 0;var i = void 0;if (a) {
          if (e.value.sup) {
            i = t.havingStyle(r.sup());n = P(e.value.sup, i, t);
          } else {
            i = t.havingStyle(r.sub());n = P(e.value.sub, i, t);
          }e = e.value.base;
        }var l = P(e.value.base, t.havingBaseStyle(u.default.DISPLAY));var o = y.default.svgSpan(e, t);var s = void 0;if (e.value.isOver) {
          s = f.default.makeVList([{ type: "elem", elem: l }, { type: "kern", size: .1 }, { type: "elem", elem: o }], "firstBaseline", null, t);s.children[0].children[0].children[1].classes.push("svg-align");
        } else {
          s = f.default.makeVList([{ type: "elem", elem: o }, { type: "kern", size: .1 }, { type: "elem", elem: l }], "bottom", l.depth + .1 + o.height, t);s.children[0].children[0].children[0].classes.push("svg-align");
        }if (a) {
          var c = w(["mord", e.value.isOver ? "mover" : "munder"], [s], t);if (e.value.isOver) {
            s = f.default.makeVList([{ type: "elem", elem: c }, { type: "kern", size: .2 }, { type: "elem", elem: n }], "firstBaseline", null, t);
          } else {
            s = f.default.makeVList([{ type: "elem", elem: n }, { type: "kern", size: .2 }, { type: "elem", elem: c }], "bottom", c.depth + .2 + n.height, t);
          }
        }return w(["mord", e.value.isOver ? "mover" : "munder"], [s], t);
      };E.accentUnder = function (e, t) {
        var r = P(e.value.base, t);var a = y.default.svgSpan(e, t);var n = /tilde/.test(e.value.label) ? .12 : 0;var i = f.default.makeVList([{ type: "elem", elem: a }, { type: "kern", size: n }, { type: "elem", elem: r }], "bottom", a.height + n, t);i.children[0].children[0].children[0].classes.push("svg-align");return w(["mord", "accentunder"], [i], t);
      };E.enclose = function (e, t) {
        var r = P(e.value.body, t);var a = e.value.label.substr(1);var n = t.sizeMultiplier;var i = void 0;var l = 0;var o = /color/.test(a);if (a === "sout") {
          i = w(["stretchy", "sout"]);i.height = t.fontMetrics().defaultRuleThickness / n;l = -.5 * t.fontMetrics().xHeight;
        } else {
          r.classes.push(/cancel/.test(a) ? "cancel-pad" : "boxpad");var u = 0;if (/box/.test(a)) {
            u = a === "colorbox" ? .3 : .34;
          } else {
            u = O(e.value.body) ? .2 : 0;
          }i = y.default.encloseSpan(r, a, u, t);l = r.depth + u;if (o) {
            i.style.backgroundColor = e.value.backgroundColor.value;if (a === "fcolorbox") {
              i.style.borderColor = e.value.borderColor.value;
            }
          }
        }var s = void 0;if (o) {
          s = f.default.makeVList([{ type: "elem", elem: i, shift: l }, { type: "elem", elem: r, shift: 0 }], "individualShift", null, t);
        } else {
          s = f.default.makeVList([{ type: "elem", elem: r, shift: 0 }, { type: "elem", elem: i, shift: l }], "individualShift", null, t);
        }if (/cancel/.test(a)) {
          s.children[0].children[0].children[1].classes.push("svg-align");return w(["mord", "cancel-lap"], [s], t);
        } else {
          return w(["mord"], [s], t);
        }
      };E.xArrow = function (e, t) {
        var r = t.style;var a = t.havingStyle(r.sup());var n = P(e.value.body, a, t);n.classes.push("x-arrow-pad");var i = void 0;if (e.value.below) {
          a = t.havingStyle(r.sub());i = P(e.value.below, a, t);i.classes.push("x-arrow-pad");
        }var l = y.default.svgSpan(e, t);var o = -t.fontMetrics().axisHeight + .5 * l.height;var u = -t.fontMetrics().axisHeight - .5 * l.height - .111;var s = void 0;if (e.value.below) {
          var c = -t.fontMetrics().axisHeight + i.height + .5 * l.height + .111;s = f.default.makeVList([{ type: "elem", elem: n, shift: u }, { type: "elem", elem: l, shift: o }, { type: "elem", elem: i, shift: c }], "individualShift", null, t);
        } else {
          s = f.default.makeVList([{ type: "elem", elem: n, shift: u }, { type: "elem", elem: l, shift: o }], "individualShift", null, t);
        }s.children[0].children[0].children[1].classes.push("svg-align");return w(["mrel", "x-arrow"], [s], t);
      };E.mclass = function (e, t) {
        var r = T(e.value.value, t, true);return w([e.value.mclass], r, t);
      };E.raisebox = function (e, t) {
        var r = E.sizing({ value: { value: [{ type: "text", value: { body: e.value.value, font: "mathrm" } }], size: 6 } }, t);var a = (0, p.calculateSize)(e.value.dy.value, t);return f.default.makeVList([{ type: "elem", elem: r }], "shift", -a, t);
      };var P = r.buildGroup = function e(t, r, a) {
        if (!t) {
          return w();
        }if (E[t.type]) {
          var n = E[t.type](t, r);if (a && r.size !== a.size) {
            n = w(r.sizingClasses(a), [n], r);var i = r.sizeMultiplier / a.sizeMultiplier;n.height *= i;n.depth *= i;
          }return n;
        } else {
          throw new l.default("Got group of unknown type: '" + t.type + "'");
        }
      };function R(e, t) {
        e = JSON.parse((0, n.default)(e));var r = T(e, t, true);var a = w(["base"], r, t);var i = w(["strut"]);var l = w(["strut", "bottom"]);i.style.height = a.height + "em";l.style.height = a.height + a.depth + "em";l.style.verticalAlign = -a.depth + "em";var o = w(["katex-html"], [i, l, a]);o.setAttribute("aria-hidden", "true");return o;
      }
    }, { "./ParseError": 84, "./Style": 89, "./buildCommon": 91, "./delimiter": 97, "./domTree": 98, "./stretchy": 110, "./units": 114, "./utils": 115, "babel-runtime/core-js/json/stringify": 5 }], 93: [function (e, t, r) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: true });r.buildGroup = r.buildExpression = r.groupTypes = r.makeText = undefined;r.default = S;var a = e("./buildCommon");var n = y(a);var i = e("./fontMetrics");var l = y(i);var o = e("./mathMLTree");var u = y(o);var s = e("./ParseError");var f = y(s);var c = e("./Style");var d = y(c);var v = e("./symbols");var h = y(v);var p = e("./utils");var m = y(p);var g = e("./stretchy");var b = y(g);function y(e) {
        return e && e.__esModule ? e : { default: e };
      }var x = r.makeText = function e(t, r) {
        if (h.default[r][t] && h.default[r][t].replace) {
          t = h.default[r][t].replace;
        }return new u.default.TextNode(t);
      };var w = function e(t, r) {
        var a = r.font;if (!a) {
          return null;
        }var i = t.mode;if (a === "mathit") {
          return "italic";
        }var o = t.value;if (m.default.contains(["\\imath", "\\jmath"], o)) {
          return null;
        }if (h.default[i][o] && h.default[i][o].replace) {
          o = h.default[i][o].replace;
        }var u = n.default.fontMap[a].fontName;if (l.default.getCharacterMetrics(o, u)) {
          return n.default.fontMap[r.font].variant;
        }return null;
      };var k = r.groupTypes = {};var M = { mi: "italic", mn: "normal", mtext: "normal" };k.mathord = function (e, t) {
        var r = new u.default.MathNode("mi", [x(e.value, e.mode)]);var a = w(e, t) || "italic";if (a !== M[r.type]) {
          r.setAttribute("mathvariant", a);
        }return r;
      };k.textord = function (e, t) {
        var r = x(e.value, e.mode);var a = w(e, t) || "normal";var n = void 0;if (e.mode === "text") {
          n = new u.default.MathNode("mtext", [r]);
        } else if (/[0-9]/.test(e.value)) {
          n = new u.default.MathNode("mn", [r]);
        } else if (e.value === "\\prime") {
          n = new u.default.MathNode("mo", [r]);
        } else {
          n = new u.default.MathNode("mi", [r]);
        }if (a !== M[n.type]) {
          n.setAttribute("mathvariant", a);
        }return n;
      };k.bin = function (e) {
        var t = new u.default.MathNode("mo", [x(e.value, e.mode)]);return t;
      };k.rel = function (e) {
        var t = new u.default.MathNode("mo", [x(e.value, e.mode)]);return t;
      };k.open = function (e) {
        var t = new u.default.MathNode("mo", [x(e.value, e.mode)]);return t;
      };k.close = function (e) {
        var t = new u.default.MathNode("mo", [x(e.value, e.mode)]);return t;
      };k.inner = function (e) {
        var t = new u.default.MathNode("mo", [x(e.value, e.mode)]);return t;
      };k.punct = function (e) {
        var t = new u.default.MathNode("mo", [x(e.value, e.mode)]);t.setAttribute("separator", "true");return t;
      };k.ordgroup = function (e, t) {
        var r = _(e.value, t);var a = new u.default.MathNode("mrow", r);return a;
      };k.text = function (e, t) {
        var r = e.value.body;var a = [];var n = null;for (var i = 0; i < r.length; i++) {
          var l = z(r[i], t);if (l.type === "mtext" && n != null) {
            Array.prototype.push.apply(n.children, l.children);
          } else {
            a.push(l);if (l.type === "mtext") {
              n = l;
            }
          }
        }if (a.length === 1) {
          return a[0];
        } else {
          return new u.default.MathNode("mrow", a);
        }
      };k.color = function (e, t) {
        var r = _(e.value.value, t);var a = new u.default.MathNode("mstyle", r);a.setAttribute("mathcolor", e.value.color);return a;
      };k.supsub = function (e, t) {
        var r = false;var a = void 0;var n = void 0;if (e.value.base) {
          if (e.value.base.value.type === "horizBrace") {
            n = e.value.sup ? true : false;if (n === e.value.base.value.isOver) {
              r = true;a = e.value.base.value.isOver;
            }
          }
        }var i = true;var l = [z(e.value.base, t, i)];if (e.value.sub) {
          l.push(z(e.value.sub, t, i));
        }if (e.value.sup) {
          l.push(z(e.value.sup, t, i));
        }var o = void 0;if (r) {
          o = a ? "mover" : "munder";
        } else if (!e.value.sub) {
          o = "msup";
        } else if (!e.value.sup) {
          o = "msub";
        } else {
          var s = e.value.base;if (s && s.value.limits && t.style === d.default.DISPLAY) {
            o = "munderover";
          } else {
            o = "msubsup";
          }
        }var f = new u.default.MathNode(o, l);return f;
      };k.genfrac = function (e, t) {
        var r = new u.default.MathNode("mfrac", [z(e.value.numer, t), z(e.value.denom, t)]);if (!e.value.hasBarLine) {
          r.setAttribute("linethickness", "0px");
        }if (e.value.leftDelim != null || e.value.rightDelim != null) {
          var a = [];if (e.value.leftDelim != null) {
            var n = new u.default.MathNode("mo", [new u.default.TextNode(e.value.leftDelim)]);n.setAttribute("fence", "true");a.push(n);
          }a.push(r);if (e.value.rightDelim != null) {
            var i = new u.default.MathNode("mo", [new u.default.TextNode(e.value.rightDelim)]);i.setAttribute("fence", "true");a.push(i);
          }var l = new u.default.MathNode("mrow", a);return l;
        }return r;
      };k.sqrt = function (e, t) {
        var r = void 0;if (e.value.index) {
          r = new u.default.MathNode("mroot", [z(e.value.body, t), z(e.value.index, t)]);
        } else {
          r = new u.default.MathNode("msqrt", [z(e.value.body, t)]);
        }return r;
      };k.accent = function (e, t) {
        var r = void 0;if (e.value.isStretchy) {
          r = b.default.mathMLnode(e.value.label);
        } else {
          r = new u.default.MathNode("mo", [x(e.value.label, e.mode)]);
        }var a = new u.default.MathNode("mover", [z(e.value.base, t), r]);a.setAttribute("accent", "true");return a;
      };k.spacing = function (e) {
        var t = void 0;if (e.value === "\\ " || e.value === "\\space" || e.value === " " || e.value === "~") {
          t = new u.default.MathNode("mtext", [new u.default.TextNode("\xa0")]);
        } else {
          t = new u.default.MathNode("mspace");t.setAttribute("width", n.default.spacingFunctions[e.value].size);
        }return t;
      };k.op = function (e, t) {
        var r = void 0;if (e.value.symbol) {
          r = new u.default.MathNode("mo", [x(e.value.body, e.mode)]);
        } else if (e.value.value) {
          r = new u.default.MathNode("mo", _(e.value.value, t));
        } else {
          r = new u.default.MathNode("mi", [new u.default.TextNode(e.value.body.slice(1))]);
        }return r;
      };k.mod = function (e, t) {
        var r = [];if (e.value.modType === "pod" || e.value.modType === "pmod") {
          r.push(new u.default.MathNode("mo", [x("(", e.mode)]));
        }if (e.value.modType !== "pod") {
          r.push(new u.default.MathNode("mo", [x("mod", e.mode)]));
        }if (e.value.value) {
          var a = new u.default.MathNode("mspace");a.setAttribute("width", "0.333333em");r.push(a);r = r.concat(_(e.value.value, t));
        }if (e.value.modType === "pod" || e.value.modType === "pmod") {
          r.push(new u.default.MathNode("mo", [x(")", e.mode)]));
        }return new u.default.MathNode("mo", r);
      };k.katex = function (e) {
        var t = new u.default.MathNode("mtext", [new u.default.TextNode("KaTeX")]);return t;
      };k.font = function (e, t) {
        var r = e.value.font;return z(e.value.body, t.withFont(r));
      };k.styling = function (e, t) {
        var r = { display: d.default.DISPLAY, text: d.default.TEXT, script: d.default.SCRIPT, scriptscript: d.default.SCRIPTSCRIPT };var a = r[e.value.style];var n = t.havingStyle(a);var i = _(e.value.value, n);var l = new u.default.MathNode("mstyle", i);var o = { display: ["0", "true"], text: ["0", "false"], script: ["1", "false"], scriptscript: ["2", "false"] };var s = o[e.value.style];l.setAttribute("scriptlevel", s[0]);l.setAttribute("displaystyle", s[1]);return l;
      };k.sizing = function (e, t) {
        var r = t.havingSize(e.value.size);var a = _(e.value.value, r);var n = new u.default.MathNode("mstyle", a);n.setAttribute("mathsize", r.sizeMultiplier + "em");return n;
      };k.verb = function (e, t) {
        var r = new u.default.TextNode(n.default.makeVerb(e, t));var a = new u.default.MathNode("mtext", [r]);a.setAttribute("mathvariant", n.default.fontMap["mathtt"].variant);return a;
      };k.overline = function (e, t) {
        var r = new u.default.MathNode("mo", [new u.default.TextNode("\u203E")]);r.setAttribute("stretchy", "true");var a = new u.default.MathNode("mover", [z(e.value.body, t), r]);a.setAttribute("accent", "true");return a;
      };k.underline = function (e, t) {
        var r = new u.default.MathNode("mo", [new u.default.TextNode("\u203E")]);r.setAttribute("stretchy", "true");var a = new u.default.MathNode("munder", [z(e.value.body, t), r]);a.setAttribute("accentunder", "true");return a;
      };k.accentUnder = function (e, t) {
        var r = b.default.mathMLnode(e.value.label);var a = new u.default.MathNode("munder", [z(e.value.body, t), r]);a.setAttribute("accentunder", "true");return a;
      };k.enclose = function (e, t) {
        var r = new u.default.MathNode("menclose", [z(e.value.body, t)]);switch (e.value.label) {case "\\cancel":
            r.setAttribute("notation", "updiagonalstrike");break;case "\\bcancel":
            r.setAttribute("notation", "downdiagonalstrike");break;case "\\sout":
            r.setAttribute("notation", "horizontalstrike");break;case "\\fbox":
            r.setAttribute("notation", "box");break;case "\\colorbox":
            r.setAttribute("mathbackground", e.value.backgroundColor.value);break;case "\\fcolorbox":
            r.setAttribute("mathbackground", e.value.backgroundColor.value);r.setAttribute("notation", "box");break;default:
            r.setAttribute("notation", "updiagonalstrike downdiagonalstrike");}return r;
      };k.horizBrace = function (e, t) {
        var r = b.default.mathMLnode(e.value.label);return new u.default.MathNode(e.value.isOver ? "mover" : "munder", [z(e.value.base, t), r]);
      };k.xArrow = function (e, t) {
        var r = b.default.mathMLnode(e.value.label);var a = void 0;var n = void 0;if (e.value.body) {
          var i = z(e.value.body, t);if (e.value.below) {
            n = z(e.value.below, t);a = new u.default.MathNode("munderover", [r, n, i]);
          } else {
            a = new u.default.MathNode("mover", [r, i]);
          }
        } else if (e.value.below) {
          n = z(e.value.below, t);a = new u.default.MathNode("munder", [r, n]);
        } else {
          a = new u.default.MathNode("mover", [r]);
        }return a;
      };k.rule = function (e) {
        var t = new u.default.MathNode("mrow");return t;
      };k.kern = function (e) {
        var t = new u.default.MathNode("mrow");return t;
      };k.lap = function (e, t) {
        var r = new u.default.MathNode("mpadded", [z(e.value.body, t)]);if (e.value.alignment !== "rlap") {
          var a = e.value.alignment === "llap" ? "-1" : "-0.5";r.setAttribute("lspace", a + "width");
        }r.setAttribute("width", "0px");return r;
      };k.smash = function (e, t) {
        var r = new u.default.MathNode("mpadded", [z(e.value.body, t)]);if (e.value.smashHeight) {
          r.setAttribute("height", "0px");
        }if (e.value.smashDepth) {
          r.setAttribute("depth", "0px");
        }return r;
      };k.mclass = function (e, t) {
        var r = _(e.value.value, t);return new u.default.MathNode("mstyle", r);
      };k.raisebox = function (e, t) {
        var r = new u.default.MathNode("mpadded", [z(e.value.body, t)]);var a = e.value.dy.value.number + e.value.dy.value.unit;r.setAttribute("voffset", a);return r;
      };var _ = r.buildExpression = function e(t, r) {
        var a = [];for (var n = 0; n < t.length; n++) {
          var i = t[n];a.push(z(i, r));
        }return a;
      };var z = r.buildGroup = function e(t, r) {
        var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;if (!t) {
          return new u.default.MathNode("mrow");
        }if (k[t.type]) {
          var n = k[t.type](t, r);if (a) {
            if (n.type === "mrow" && n.children.length === 1) {
              return n.children[0];
            }
          }return n;
        } else {
          throw new f.default("Got group of unknown type: '" + t.type + "'");
        }
      };function S(e, t, r) {
        var a = _(e, r);var i = new u.default.MathNode("mrow", a);var l = new u.default.MathNode("annotation", [new u.default.TextNode(t)]);l.setAttribute("encoding", "application/x-tex");var o = new u.default.MathNode("semantics", [i, l]);var s = new u.default.MathNode("math", [o]);return n.default.makeSpan(["katex-mathml"], [s]);
      }
    }, { "./ParseError": 84, "./Style": 89, "./buildCommon": 91, "./fontMetrics": 101, "./mathMLTree": 108, "./stretchy": 110, "./symbols": 112, "./utils": 115 }], 94: [function (e, t, r) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: true });var a = e("./buildHTML");var n = p(a);var i = e("./buildMathML");var l = p(i);var o = e("./buildCommon");var u = p(o);var s = e("./Options");var f = p(s);var c = e("./Settings");var d = p(c);var v = e("./Style");var h = p(v);function p(e) {
        return e && e.__esModule ? e : { default: e };
      }var m = function e(t, r, a) {
        a = a || new d.default({});var i = h.default.TEXT;if (a.displayMode) {
          i = h.default.DISPLAY;
        }var o = new f.default({ style: i, maxSize: a.maxSize });var s = (0, l.default)(t, r, o);var c = (0, n.default)(t, o);var v = u.default.makeSpan(["katex"], [s, c]);if (a.displayMode) {
          return u.default.makeSpan(["katex-display"], [v]);
        } else {
          return v;
        }
      };r.default = m;
    }, { "./Options": 83, "./Settings": 87, "./Style": 89, "./buildCommon": 91, "./buildHTML": 92, "./buildMathML": 93 }], 95: [function (e, t, r) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: true });r._environments = undefined;r.default = c;var a = e("./buildHTML");var n = e("./buildMathML");var i = e("./Options");var l = s(i);var o = e("./ParseNode");var u = s(o);function s(e) {
        return e && e.__esModule ? e : { default: e };
      }var f = r._environments = {};function c(e) {
        var t = e.type,
            r = e.names,
            i = e.props,
            l = e.handler,
            o = e.htmlBuilder,
            u = e.mathmlBuilder;var s = { numArgs: i.numArgs || 0, greediness: 1, allowedInText: false, numOptionalArgs: 0, handler: l };for (var c = 0; c < r.length; ++c) {
          f[r[c]] = s;
        }if (o) {
          a.groupTypes[t] = o;
        }if (u) {
          n.groupTypes[t] = u;
        }
      }
    }, { "./Options": 83, "./ParseNode": 85, "./buildHTML": 92, "./buildMathML": 93 }], 96: [function (e, t, r) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: true });r.ordargument = r._functions = undefined;r.default = l;var a = e("./buildHTML");var n = e("./buildMathML");var i = r._functions = {};function l(e) {
        var t = e.type,
            r = e.names,
            l = e.props,
            o = e.handler,
            u = e.htmlBuilder,
            s = e.mathmlBuilder;var f = { numArgs: l.numArgs, argTypes: l.argTypes, greediness: l.greediness === undefined ? 1 : l.greediness, allowedInText: !!l.allowedInText, allowedInMath: l.allowedInMath === undefined ? true : l.allowedInMath, numOptionalArgs: l.numOptionalArgs || 0, infix: !!l.infix, handler: o };for (var c = 0; c < r.length; ++c) {
          i[r[c]] = f;
        }if (t) {
          if (u) {
            a.groupTypes[t] = u;
          }if (s) {
            n.groupTypes[t] = s;
          }
        }
      }var o = r.ordargument = function e(t) {
        if (t.type === "ordgroup") {
          return t.value;
        } else {
          return [t];
        }
      };
    }, { "./buildHTML": 92, "./buildMathML": 93 }], 97: [function (e, t, r) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: true });var a = e("./ParseError");var n = g(a);var i = e("./Style");var l = g(i);var o = e("./domTree");var u = g(o);var s = e("./buildCommon");var f = g(s);var c = e("./fontMetrics");var d = g(c);var v = e("./symbols");var h = g(v);var p = e("./utils");var m = g(p);function g(e) {
        return e && e.__esModule ? e : { default: e };
      }var b = function e(t, r) {
        if (h.default.math[t] && h.default.math[t].replace) {
          return d.default.getCharacterMetrics(h.default.math[t].replace, r);
        } else {
          return d.default.getCharacterMetrics(t, r);
        }
      };var y = function e(t, r, a, n) {
        var i = a.havingBaseStyle(r);var l = f.default.makeSpan((n || []).concat(i.sizingClasses(a)), [t], a);l.delimSizeMultiplier = i.sizeMultiplier / a.sizeMultiplier;l.height *= l.delimSizeMultiplier;l.depth *= l.delimSizeMultiplier;l.maxFontSize = i.sizeMultiplier;return l;
      };var x = function e(t, r, a) {
        var n = r.havingBaseStyle(a);var i = (1 - r.sizeMultiplier / n.sizeMultiplier) * r.fontMetrics().axisHeight;t.classes.push("delimcenter");t.style.top = i + "em";t.height -= i;t.depth += i;
      };var w = function e(t, r, a, n, i, l) {
        var o = f.default.makeSymbol(t, "Main-Regular", i, n);var u = y(o, r, n, l);if (a) {
          x(u, n, r);
        }return u;
      };var k = function e(t, r, a, n) {
        return f.default.makeSymbol(t, "Size" + r + "-Regular", a, n);
      };var M = function e(t, r, a, n, i, o) {
        var u = k(t, r, i, n);var s = y(f.default.makeSpan(["delimsizing", "size" + r], [u], n), l.default.TEXT, n, o);if (a) {
          x(s, n, l.default.TEXT);
        }return s;
      };var _ = function e(t, r, a) {
        var n = void 0;if (r === "Size1-Regular") {
          n = "delim-size1";
        } else if (r === "Size4-Regular") {
          n = "delim-size4";
        }var i = f.default.makeSpan(["delimsizinginner", n], [f.default.makeSpan([], [f.default.makeSymbol(t, r, a)])]);return { type: "elem", elem: i };
      };var z = function e(t, r, a, n, i, o) {
        var u = void 0;var s = void 0;var c = void 0;var d = void 0;u = c = d = t;s = null;var v = "Size1-Regular";if (t === "\\uparrow") {
          c = d = "\u23D0";
        } else if (t === "\\Uparrow") {
          c = d = "\u2016";
        } else if (t === "\\downarrow") {
          u = c = "\u23D0";
        } else if (t === "\\Downarrow") {
          u = c = "\u2016";
        } else if (t === "\\updownarrow") {
          u = "\\uparrow";c = "\u23D0";d = "\\downarrow";
        } else if (t === "\\Updownarrow") {
          u = "\\Uparrow";c = "\u2016";d = "\\Downarrow";
        } else if (t === "[" || t === "\\lbrack") {
          u = "\u23A1";c = "\u23A2";d = "\u23A3";v = "Size4-Regular";
        } else if (t === "]" || t === "\\rbrack") {
          u = "\u23A4";c = "\u23A5";d = "\u23A6";v = "Size4-Regular";
        } else if (t === "\\lfloor") {
          c = u = "\u23A2";d = "\u23A3";v = "Size4-Regular";
        } else if (t === "\\lceil") {
          u = "\u23A1";c = d = "\u23A2";v = "Size4-Regular";
        } else if (t === "\\rfloor") {
          c = u = "\u23A5";d = "\u23A6";v = "Size4-Regular";
        } else if (t === "\\rceil") {
          u = "\u23A4";c = d = "\u23A5";v = "Size4-Regular";
        } else if (t === "(") {
          u = "\u239B";c = "\u239C";d = "\u239D";v = "Size4-Regular";
        } else if (t === ")") {
          u = "\u239E";c = "\u239F";d = "\u23A0";v = "Size4-Regular";
        } else if (t === "\\{" || t === "\\lbrace") {
          u = "\u23A7";s = "\u23A8";d = "\u23A9";c = "\u23AA";v = "Size4-Regular";
        } else if (t === "\\}" || t === "\\rbrace") {
          u = "\u23AB";s = "\u23AC";d = "\u23AD";c = "\u23AA";v = "Size4-Regular";
        } else if (t === "\\lgroup") {
          u = "\u23A7";d = "\u23A9";c = "\u23AA";v = "Size4-Regular";
        } else if (t === "\\rgroup") {
          u = "\u23AB";d = "\u23AD";c = "\u23AA";v = "Size4-Regular";
        } else if (t === "\\lmoustache") {
          u = "\u23A7";d = "\u23AD";c = "\u23AA";v = "Size4-Regular";
        } else if (t === "\\rmoustache") {
          u = "\u23AB";d = "\u23A9";c = "\u23AA";v = "Size4-Regular";
        }var h = b(u, v);var p = h.height + h.depth;var m = b(c, v);var g = m.height + m.depth;var x = b(d, v);var w = x.height + x.depth;var k = 0;var M = 1;if (s !== null) {
          var z = b(s, v);k = z.height + z.depth;M = 2;
        }var S = p + w + k;var T = Math.ceil((r - S) / (M * g));var A = S + T * M * g;var C = n.fontMetrics().axisHeight;if (a) {
          C *= n.sizeMultiplier;
        }var N = A / 2 - C;var O = [];O.push(_(d, v, i));if (s === null) {
          for (var j = 0; j < T; j++) {
            O.push(_(c, v, i));
          }
        } else {
          for (var E = 0; E < T; E++) {
            O.push(_(c, v, i));
          }O.push(_(s, v, i));for (var L = 0; L < T; L++) {
            O.push(_(c, v, i));
          }
        }O.push(_(u, v, i));var q = n.havingBaseStyle(l.default.TEXT);var P = f.default.makeVList(O, "bottom", N, q);return y(f.default.makeSpan(["delimsizing", "mult"], [P], q), l.default.TEXT, n, o);
      };var S = function e(t, r, a, n) {
        var i = void 0;if (t === "sqrtTall") {
          var l = a - 54;i = "M702 0H400000v40H742v" + l + "l-4 4-4 4c-.667.667\n-2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1h-12l-28-84c-16.667-52-96.667\n-294.333-240-727l-212 -643 -85 170c-4-3.333-8.333-7.667-13 -13l-13-13l77-155\n 77-156c66 199.333 139 419.667 219 661 l218 661zM702 0H400000v40H742z";
        }var o = new u.default.pathNode(t, i);var s = [["width", "400em"], ["height", r + "em"]];s.push(["viewBox", "0 0 400000 " + a]);s.push(["preserveAspectRatio", "xMinYMin slice"]);var c = new u.default.svgNode([o], s);return f.default.makeSpan(["hide-tail"], [c], n);
      };var T = function e(t, r, a) {
        var n = void 0;var i = a.sizeMultiplier;var l = void 0;var o = void 0;if (r.type === "small") {
          o = 1e3;var u = a.havingBaseStyle(r.style);i = u.sizeMultiplier / a.sizeMultiplier;l = 1 * i;n = S("sqrtMain", l, o, a);n.style.minWidth = "0.853em";n.advanceWidth = .833 * i;
        } else if (r.type === "large") {
          o = 1e3 * O[r.size];l = O[r.size] / i;n = S("sqrtSize" + r.size, l, o, a);n.style.minWidth = "1.02em";n.advanceWidth = 1 / i;
        } else {
          l = t / i;o = Math.floor(1e3 * t);n = S("sqrtTall", l, o, a);n.style.minWidth = "0.742em";n.advanceWidth = 1.056 / i;
        }n.height = l;n.style.height = l + "em";n.sizeMultiplier = i;return n;
      };var A = ["(", ")", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\\lceil", "\\rceil", "\\surd"];var C = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\\lmoustache", "\\rmoustache"];var N = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"];var O = [0, 1.2, 1.8, 2.4, 3];var j = function e(t, r, a, i, l) {
        if (t === "<" || t === "\\lt") {
          t = "\\langle";
        } else if (t === ">" || t === "\\gt") {
          t = "\\rangle";
        }if (m.default.contains(A, t) || m.default.contains(N, t)) {
          return M(t, r, false, a, i, l);
        } else if (m.default.contains(C, t)) {
          return z(t, O[r], false, a, i, l);
        } else {
          throw new n.default("Illegal delimiter: '" + t + "'");
        }
      };var E = [{ type: "small", style: l.default.SCRIPTSCRIPT }, { type: "small", style: l.default.SCRIPT }, { type: "small", style: l.default.TEXT }, { type: "large", size: 1 }, { type: "large", size: 2 }, { type: "large", size: 3 }, { type: "large", size: 4 }];var L = [{ type: "small", style: l.default.SCRIPTSCRIPT }, { type: "small", style: l.default.SCRIPT }, { type: "small", style: l.default.TEXT }, { type: "stack" }];var q = [{ type: "small", style: l.default.SCRIPTSCRIPT }, { type: "small", style: l.default.SCRIPT }, { type: "small", style: l.default.TEXT }, { type: "large", size: 1 }, { type: "large", size: 2 }, { type: "large", size: 3 }, { type: "large", size: 4 }, { type: "stack" }];var P = function e(t) {
        if (t.type === "small") {
          return "Main-Regular";
        } else if (t.type === "large") {
          return "Size" + t.size + "-Regular";
        } else if (t.type === "stack") {
          return "Size4-Regular";
        }
      };var R = function e(t, r, a, n) {
        var i = Math.min(2, 3 - n.style.size);for (var l = i; l < a.length; l++) {
          if (a[l].type === "stack") {
            break;
          }var o = b(t, P(a[l]));var u = o.height + o.depth;if (a[l].type === "small") {
            var s = n.havingBaseStyle(a[l].style);u *= s.sizeMultiplier;
          }if (u > r) {
            return a[l];
          }
        }return a[a.length - 1];
      };var B = function e(t, r, a, n, i, l) {
        if (t === "<" || t === "\\lt") {
          t = "\\langle";
        } else if (t === ">" || t === "\\gt") {
          t = "\\rangle";
        }var o = void 0;if (m.default.contains(N, t)) {
          o = E;
        } else if (m.default.contains(A, t)) {
          o = q;
        } else {
          o = L;
        }var u = R(t, r, o, n);if (t === "\\surd") {
          return T(r, u, n);
        } else {
          if (u.type === "small") {
            return w(t, u.style, a, n, i, l);
          } else if (u.type === "large") {
            return M(t, u.size, a, n, i, l);
          } else if (u.type === "stack") {
            return z(t, r, a, n, i, l);
          }
        }
      };var F = function e(t, r, a, n, i, l) {
        var o = n.fontMetrics().axisHeight * n.sizeMultiplier;var u = 901;var s = 5 / n.fontMetrics().ptPerEm;var f = Math.max(r - o, a + o);var c = Math.max(f / 500 * u, 2 * f - s);return B(t, c, true, n, i, l);
      };r.default = { sizedDelim: j, customSizedDelim: B, leftRightDelim: F };
    }, { "./ParseError": 84, "./Style": 89, "./buildCommon": 91, "./domTree": 98, "./fontMetrics": 101, "./symbols": 112, "./utils": 115 }], 98: [function (e, t, r) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: true });var a = e("babel-runtime/helpers/slicedToArray");var n = h(a);var i = e("babel-runtime/helpers/classCallCheck");var l = h(i);var o = e("babel-runtime/helpers/createClass");var u = h(o);var s = e("./unicodeRegexes");var f = e("./utils");var c = h(f);var d = e("./svgGeometry");var v = h(d);function h(e) {
        return e && e.__esModule ? e : { default: e };
      }var p = function e(t) {
        t = t.slice();for (var r = t.length - 1; r >= 0; r--) {
          if (!t[r]) {
            t.splice(r, 1);
          }
        }return t.join(" ");
      };var m = function () {
        function e(t, r, a) {
          (0, l.default)(this, e);this.classes = t || [];this.children = r || [];this.height = 0;this.depth = 0;this.maxFontSize = 0;this.style = {};this.attributes = {};if (a) {
            if (a.style.isTight()) {
              this.classes.push("mtight");
            }if (a.getColor()) {
              this.style.color = a.getColor();
            }
          }
        }(0, u.default)(e, [{ key: "setAttribute", value: function e(t, r) {
            this.attributes[t] = r;
          } }, { key: "tryCombine", value: function e(t) {
            return false;
          } }, { key: "toNode", value: function e() {
            var t = document.createElement("span");t.className = p(this.classes);for (var r in this.style) {
              if (Object.prototype.hasOwnProperty.call(this.style, r)) {
                t.style[r] = this.style[r];
              }
            }for (var a in this.attributes) {
              if (Object.prototype.hasOwnProperty.call(this.attributes, a)) {
                t.setAttribute(a, this.attributes[a]);
              }
            }for (var n = 0; n < this.children.length; n++) {
              t.appendChild(this.children[n].toNode());
            }return t;
          } }, { key: "toMarkup", value: function e() {
            var t = "<span";if (this.classes.length) {
              t += ' class="';t += c.default.escape(p(this.classes));t += '"';
            }var r = "";for (var a in this.style) {
              if (this.style.hasOwnProperty(a)) {
                r += c.default.hyphenate(a) + ":" + this.style[a] + ";";
              }
            }if (r) {
              t += ' style="' + c.default.escape(r) + '"';
            }for (var n in this.attributes) {
              if (Object.prototype.hasOwnProperty.call(this.attributes, n)) {
                t += " " + n + '="';t += c.default.escape(this.attributes[n]);t += '"';
              }
            }t += ">";for (var i = 0; i < this.children.length; i++) {
              t += this.children[i].toMarkup();
            }t += "</span>";return t;
          } }]);return e;
      }();var g = function () {
        function e(t) {
          (0, l.default)(this, e);this.children = t || [];this.height = 0;this.depth = 0;this.maxFontSize = 0;
        }(0, u.default)(e, [{ key: "toNode", value: function e() {
            var t = document.createDocumentFragment();for (var r = 0; r < this.children.length; r++) {
              t.appendChild(this.children[r].toNode());
            }return t;
          } }, { key: "toMarkup", value: function e() {
            var t = "";for (var r = 0; r < this.children.length; r++) {
              t += this.children[r].toMarkup();
            }return t;
          } }]);return e;
      }();var b = { "\xee": "\u0131\u0302", "\xef": "\u0131\u0308", "\xed": "\u0131\u0301", "\xec": "\u0131\u0300" };var y = function () {
        function e(t, r, a, n, i, o, u) {
          (0, l.default)(this, e);this.value = t || "";this.height = r || 0;this.depth = a || 0;this.italic = n || 0;this.skew = i || 0;this.classes = o || [];this.style = u || {};this.maxFontSize = 0;if (s.cjkRegex.test(t)) {
            if (s.hangulRegex.test(t)) {
              this.classes.push("hangul_fallback");
            } else {
              this.classes.push("cjk_fallback");
            }
          }if (/[\xee\xef\xed\xec]/.test(this.value)) {
            this.value = b[this.value];
          }
        }(0, u.default)(e, [{ key: "tryCombine", value: function t(r) {
            if (!r || !(r instanceof e) || this.italic > 0 || p(this.classes) !== p(r.classes) || this.skew !== r.skew || this.maxFontSize !== r.maxFontSize) {
              return false;
            }for (var a in this.style) {
              if (this.style.hasOwnProperty(a) && this.style[a] !== r.style[a]) {
                return false;
              }
            }for (var n in r.style) {
              if (r.style.hasOwnProperty(n) && this.style[n] !== r.style[n]) {
                return false;
              }
            }this.value += r.value;this.height = Math.max(this.height, r.height);this.depth = Math.max(this.depth, r.depth);this.italic = r.italic;return true;
          } }, { key: "toNode", value: function e() {
            var t = document.createTextNode(this.value);var r = null;if (this.italic > 0) {
              r = document.createElement("span");r.style.marginRight = this.italic + "em";
            }if (this.classes.length > 0) {
              r = r || document.createElement("span");r.className = p(this.classes);
            }for (var a in this.style) {
              if (this.style.hasOwnProperty(a)) {
                r = r || document.createElement("span");r.style[a] = this.style[a];
              }
            }if (r) {
              r.appendChild(t);return r;
            } else {
              return t;
            }
          } }, { key: "toMarkup", value: function e() {
            var t = false;var r = "<span";if (this.classes.length) {
              t = true;r += ' class="';r += c.default.escape(p(this.classes));r += '"';
            }var a = "";if (this.italic > 0) {
              a += "margin-right:" + this.italic + "em;";
            }for (var n in this.style) {
              if (this.style.hasOwnProperty(n)) {
                a += c.default.hyphenate(n) + ":" + this.style[n] + ";";
              }
            }if (a) {
              t = true;r += ' style="' + c.default.escape(a) + '"';
            }var i = c.default.escape(this.value);if (t) {
              r += ">";r += i;r += "</span>";return r;
            } else {
              return i;
            }
          } }]);return e;
      }();var x = function () {
        function e(t, r) {
          (0, l.default)(this, e);this.children = t || [];this.attributes = r || [];
        }(0, u.default)(e, [{ key: "toNode", value: function e() {
            var t = "http://www.w3.org/2000/svg";var r = document.createElementNS(t, "svg");for (var a = 0; a < this.attributes.length; a++) {
              var i = (0, n.default)(this.attributes[a], 2),
                  l = i[0],
                  o = i[1];r.setAttribute(l, o);
            }for (var u = 0; u < this.children.length; u++) {
              r.appendChild(this.children[u].toNode());
            }return r;
          } }, { key: "toMarkup", value: function e() {
            var t = "<svg";for (var r = 0; r < this.attributes.length; r++) {
              var a = (0, n.default)(this.attributes[r], 2),
                  i = a[0],
                  l = a[1];t += " " + i + "='" + l + "'";
            }t += ">";for (var o = 0; o < this.children.length; o++) {
              t += this.children[o].toMarkup();
            }t += "</svg>";return t;
          } }]);return e;
      }();var w = function () {
        function e(t, r) {
          (0, l.default)(this, e);this.pathName = t;this.alternate = r;
        }(0, u.default)(e, [{ key: "toNode", value: function e() {
            var t = "http://www.w3.org/2000/svg";var r = document.createElementNS(t, "path");if (this.pathName !== "sqrtTall") {
              r.setAttribute("d", v.default.path[this.pathName]);
            } else {
              r.setAttribute("d", this.alternate);
            }return r;
          } }, { key: "toMarkup", value: function e() {
            if (this.pathName !== "sqrtTall") {
              return "<path d='" + v.default.path[this.pathName] + "'/>";
            } else {
              return "<path d='" + this.alternate + "'/>";
            }
          } }]);return e;
      }();var k = function () {
        function e(t) {
          (0, l.default)(this, e);this.attributes = t || [];
        }(0, u.default)(e, [{ key: "toNode", value: function e() {
            var t = "http://www.w3.org/2000/svg";var r = document.createElementNS(t, "line");for (var a = 0; a < this.attributes.length; a++) {
              var i = (0, n.default)(this.attributes[a], 2),
                  l = i[0],
                  o = i[1];r.setAttribute(l, o);
            }return r;
          } }, { key: "toMarkup", value: function e() {
            var t = "<line";for (var r = 0; r < this.attributes.length; r++) {
              var a = (0, n.default)(this.attributes[r], 2),
                  i = a[0],
                  l = a[1];t += " " + i + "='" + l + "'";
            }t += "/>";return t;
          } }]);return e;
      }();r.default = { span: m, documentFragment: g, symbolNode: y, svgNode: x, pathNode: w, lineNode: k };
    }, { "./svgGeometry": 111, "./unicodeRegexes": 113, "./utils": 115, "babel-runtime/helpers/classCallCheck": 8, "babel-runtime/helpers/createClass": 9, "babel-runtime/helpers/slicedToArray": 10 }], 99: [function (e, t, r) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: true });var a = e("./defineEnvironment");e("./environments/array.js");var n = { has: function e(t) {
          return a._environments.hasOwnProperty(t);
        }, get: function e(t) {
          return a._environments[t];
        } };r.default = n;
    }, { "./defineEnvironment": 95, "./environments/array.js": 100 }], 100: [function (e, t, r) {
      "use strict";
      var a = e("../buildCommon");var n = w(a);var i = e("../defineEnvironment");var l = w(i);var o = e("../mathMLTree");var u = w(o);var s = e("../ParseError");var f = w(s);var c = e("../ParseNode");var d = w(c);var v = e("../units");var h = e("../utils");var p = w(h);var m = e("../buildHTML");var g = x(m);var b = e("../buildMathML");var y = x(b);function x(e) {
        if (e && e.__esModule) {
          return e;
        } else {
          var t = {};if (e != null) {
            for (var r in e) {
              if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
            }
          }t.default = e;return t;
        }
      }function w(e) {
        return e && e.__esModule ? e : { default: e };
      }function k(e, t, r) {
        var a = [];var n = [a];var i = [];while (true) {
          var l = e.parseExpression(false, null);l = new d.default("ordgroup", l, e.mode);if (r) {
            l = new d.default("styling", { style: r, value: [l] }, e.mode);
          }a.push(l);var o = e.nextToken.text;if (o === "&") {
            e.consume();
          } else if (o === "\\end") {
            var u = n[n.length - 1][0].value;if (n.length > 1 && u.value.length === 1 && u.value[0].value.length === 0) {
              n.pop();
            }break;
          } else if (o === "\\\\" || o === "\\cr") {
            var s = e.parseFunction();i.push(s.value.size);a = [];n.push(a);
          } else {
            throw new f.default("Expected & or \\\\ or \\end", e.nextToken);
          }
        }t.body = n;t.rowGaps = i;return new d.default(t.type, t, e.mode);
      }function M(e) {
        if (e.substr(0, 1) === "d") {
          return "display";
        } else {
          return "text";
        }
      }var _ = function e(t, r) {
        var a = void 0;var i = void 0;var l = t.value.body.length;var o = 0;var u = new Array(l);var s = 1 / r.fontMetrics().ptPerEm;var c = 5 * s;var d = 12 * s;var h = 3 * s;var m = p.default.deflt(t.value.arraystretch, 1);var b = m * d;var y = .7 * b;var x = .3 * b;var w = 0;for (a = 0; a < t.value.body.length; ++a) {
          var k = t.value.body[a];var M = y;var _ = x;if (o < k.length) {
            o = k.length;
          }var z = new Array(k.length);for (i = 0; i < k.length; ++i) {
            var S = g.buildGroup(k[i], r);if (_ < S.depth) {
              _ = S.depth;
            }if (M < S.height) {
              M = S.height;
            }z[i] = S;
          }var T = 0;if (t.value.rowGaps[a]) {
            T = (0, v.calculateSize)(t.value.rowGaps[a].value, r);if (T > 0) {
              T += x;if (_ < T) {
                _ = T;
              }T = 0;
            }
          }if (t.value.addJot) {
            _ += h;
          }z.height = M;z.depth = _;w += M;z.pos = w;w += _ + T;u[a] = z;
        }var A = w / 2 + r.fontMetrics().axisHeight;var C = t.value.cols || [];var N = [];var O = void 0;var j = void 0;for (i = 0, j = 0; i < o || j < C.length; ++i, ++j) {
          var E = C[j] || {};var L = true;while (E.type === "separator") {
            if (!L) {
              O = n.default.makeSpan(["arraycolsep"], []);O.style.width = r.fontMetrics().doubleRuleSep + "em";N.push(O);
            }if (E.separator === "|") {
              var q = n.default.makeSpan(["vertical-separator"], []);q.style.height = w + "em";q.style.verticalAlign = -(w - A) + "em";N.push(q);
            } else {
              throw new f.default("Invalid separator type: " + E.separator);
            }j++;E = C[j] || {};L = false;
          }if (i >= o) {
            continue;
          }var P = void 0;if (i > 0 || t.value.hskipBeforeAndAfter) {
            P = p.default.deflt(E.pregap, c);if (P !== 0) {
              O = n.default.makeSpan(["arraycolsep"], []);O.style.width = P + "em";N.push(O);
            }
          }var R = [];for (a = 0; a < l; ++a) {
            var B = u[a];var F = B[i];if (!F) {
              continue;
            }var H = B.pos - A;F.depth = B.depth;F.height = B.height;R.push({ type: "elem", elem: F, shift: H });
          }R = n.default.makeVList(R, "individualShift", null, r);R = n.default.makeSpan(["col-align-" + (E.align || "c")], [R]);N.push(R);if (i < o - 1 || t.value.hskipBeforeAndAfter) {
            P = p.default.deflt(E.postgap, c);if (P !== 0) {
              O = n.default.makeSpan(["arraycolsep"], []);O.style.width = P + "em";N.push(O);
            }
          }
        }u = n.default.makeSpan(["mtable"], N);return n.default.makeSpan(["mord"], [u], r);
      };var z = function e(t, r) {
        return new u.default.MathNode("mtable", t.value.body.map(function (e) {
          return new u.default.MathNode("mtr", e.map(function (e) {
            return new u.default.MathNode("mtd", [y.buildGroup(e, r)]);
          }));
        }));
      };(0, l.default)({ type: "array", names: ["array", "darray"], props: { numArgs: 1 }, handler: function e(t, r) {
          var a = r[0];a = a.value.map ? a.value : [a];var n = a.map(function (e) {
            var t = e.value;if ("lcr".indexOf(t) !== -1) {
              return { type: "align", align: t };
            } else if (t === "|") {
              return { type: "separator", separator: "|" };
            }throw new f.default("Unknown column alignment: " + e.value, e);
          });var i = { type: "array", cols: n, hskipBeforeAndAfter: true };i = k(t.parser, i, M(t.envName));return i;
        }, htmlBuilder: _, mathmlBuilder: z });(0, l.default)({ type: "array", names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix"], props: { numArgs: 0 }, handler: function e(t) {
          var r = { matrix: null, pmatrix: ["(", ")"], bmatrix: ["[", "]"], Bmatrix: ["\\{", "\\}"], vmatrix: ["|", "|"], Vmatrix: ["\\Vert", "\\Vert"] }[t.envName];var a = { type: "array", hskipBeforeAndAfter: false };a = k(t.parser, a, M(t.envName));if (r) {
            a = new d.default("leftright", { body: [a], left: r[0], right: r[1] }, t.mode);
          }return a;
        }, htmlBuilder: _, mathmlBuilder: z });(0, l.default)({ type: "array", names: ["cases", "dcases"], props: { numArgs: 0 }, handler: function e(t) {
          var r = { type: "array", arraystretch: 1.2, cols: [{ type: "align", align: "l", pregap: 0, postgap: 1 }, { type: "align", align: "l", pregap: 0, postgap: 0 }] };r = k(t.parser, r, M(t.envName));r = new d.default("leftright", { body: [r], left: "\\{", right: "." }, t.mode);return r;
        }, htmlBuilder: _, mathmlBuilder: z });(0, l.default)({ type: "array", names: ["aligned"], props: { numArgs: 0 }, handler: function e(t) {
          var r = { type: "array", cols: [], addJot: true };r = k(t.parser, r, "display");var a = new d.default("ordgroup", [], t.mode);var n = 0;r.value.body.forEach(function (e) {
            for (var t = 1; t < e.length; t += 2) {
              var r = e[t].value.value[0];r.value.unshift(a);
            }if (n < e.length) {
              n = e.length;
            }
          });for (var i = 0; i < n; ++i) {
            var l = "r";var o = 0;if (i % 2 === 1) {
              l = "l";
            } else if (i > 0) {
              o = 2;
            }r.value.cols[i] = { type: "align", align: l, pregap: o, postgap: 0 };
          }return r;
        }, htmlBuilder: _, mathmlBuilder: z });(0, l.default)({ type: "array", names: ["gathered"], props: { numArgs: 0 }, handler: function e(t) {
          var r = { type: "array", cols: [{ type: "align", align: "c" }], addJot: true };r = k(t.parser, r, "display");return r;
        }, htmlBuilder: _, mathmlBuilder: z });
    }, { "../ParseError": 84, "../ParseNode": 85, "../buildCommon": 91, "../buildHTML": 92, "../buildMathML": 93, "../defineEnvironment": 95, "../mathMLTree": 108, "../units": 114, "../utils": 115 }], 101: [function (e, t, r) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: true });var a = e("./unicodeRegexes");var n = e("./fontMetricsData");var i = l(n);function l(e) {
        return e && e.__esModule ? e : { default: e };
      }var o = { slant: [.25, .25, .25], space: [0, 0, 0], stretch: [0, 0, 0], shrink: [0, 0, 0], xHeight: [.431, .431, .431], quad: [1, 1.171, 1.472], extraSpace: [0, 0, 0], num1: [.677, .732, .925], num2: [.394, .384, .387], num3: [.444, .471, .504], denom1: [.686, .752, 1.025], denom2: [.345, .344, .532], sup1: [.413, .503, .504], sup2: [.363, .431, .404], sup3: [.289, .286, .294], sub1: [.15, .143, .2], sub2: [.247, .286, .4], supDrop: [.386, .353, .494], subDrop: [.05, .071, .1], delim1: [2.39, 1.7, 1.98], delim2: [1.01, 1.157, 1.42], axisHeight: [.25, .25, .25], defaultRuleThickness: [.04, .049, .049], bigOpSpacing1: [.111, .111, .111], bigOpSpacing2: [.166, .166, .166], bigOpSpacing3: [.2, .2, .2], bigOpSpacing4: [.6, .611, .611], bigOpSpacing5: [.1, .143, .143], sqrtRuleThickness: [.04, .04, .04], ptPerEm: [10, 10, 10], doubleRuleSep: [.2, .2, .2] };var u = { "\xc0": "A", "\xc1": "A", "\xc2": "A", "\xc3": "A", "\xc4": "A", "\xc5": "A", "\xc6": "A", "\xc7": "C", "\xc8": "E", "\xc9": "E", "\xca": "E", "\xcb": "E", "\xcc": "I", "\xcd": "I", "\xce": "I", "\xcf": "I", "\xd0": "D", "\xd1": "N", "\xd2": "O", "\xd3": "O", "\xd4": "O", "\xd5": "O", "\xd6": "O", "\xd8": "O", "\xd9": "U", "\xda": "U", "\xdb": "U", "\xdc": "U", "\xdd": "Y", "\xde": "o", "\xdf": "B", "\xe0": "a", "\xe1": "a", "\xe2": "a", "\xe3": "a", "\xe4": "a", "\xe5": "a", "\xe6": "a", "\xe7": "c", "\xe8": "e", "\xe9": "e", "\xea": "e", "\xeb": "e", "\xec": "i", "\xed": "i", "\xee": "i", "\xef": "i", "\xf0": "d", "\xf1": "n", "\xf2": "o", "\xf3": "o", "\xf4": "o", "\xf5": "o", "\xf6": "o", "\xf8": "o", "\xf9": "u", "\xfa": "u", "\xfb": "u", "\xfc": "u", "\xfd": "y", "\xfe": "o", "\xff": "y", "\u0410": "A", "\u0411": "B", "\u0412": "B", "\u0413": "F", "\u0414": "A", "\u0415": "E", "\u0416": "K", "\u0417": "3", "\u0418": "N", "\u0419": "N", "\u041A": "K", "\u041B": "N", "\u041C": "M", "\u041D": "H", "\u041E": "O", "\u041F": "N", "\u0420": "P", "\u0421": "C", "\u0422": "T", "\u0423": "y", "\u0424": "O", "\u0425": "X", "\u0426": "U", "\u0427": "h", "\u0428": "W", "\u0429": "W", "\u042A": "B", "\u042B": "X", "\u042C": "B", "\u042D": "3", "\u042E": "X", "\u042F": "R", "\u0430": "a", "\u0431": "b", "\u0432": "a", "\u0433": "r", "\u0434": "y", "\u0435": "e", "\u0436": "m", "\u0437": "e", "\u0438": "n", "\u0439": "n", "\u043A": "n", "\u043B": "n", "\u043C": "m", "\u043D": "n", "\u043E": "o", "\u043F": "n", "\u0440": "p", "\u0441": "c", "\u0442": "o", "\u0443": "y", "\u0444": "b", "\u0445": "x", "\u0446": "n", "\u0447": "n", "\u0448": "w", "\u0449": "w", "\u044A": "a", "\u044B": "m", "\u044C": "a", "\u044D": "e", "\u044E": "m", "\u044F": "r" };var s = function e(t, r) {
        var n = t.charCodeAt(0);if (t[0] in u) {
          n = u[t[0]].charCodeAt(0);
        } else if (a.cjkRegex.test(t[0])) {
          n = "M".charCodeAt(0);
        }var l = i.default[r]["" + n];if (l) {
          return { depth: l[0], height: l[1], italic: l[2], skew: l[3], width: l[4] };
        }
      };var f = {};var c = function e(t) {
        var r = void 0;if (t >= 5) {
          r = 0;
        } else if (t >= 3) {
          r = 1;
        } else {
          r = 2;
        }if (!f[r]) {
          var a = f[r] = { cssEmPerMu: o.quad[r] / 18 };for (var n in o) {
            if (o.hasOwnProperty(n)) {
              a[n] = o[n][r];
            }
          }
        }return f[r];
      };r.default = { getFontMetrics: c, getCharacterMetrics: s };
    }, { "./fontMetricsData": 102, "./unicodeRegexes": 113 }], 102: [function (e, t, r) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: true });var a = { "AMS-Regular": { 65: [0, .68889, 0, 0], 66: [0, .68889, 0, 0], 67: [0, .68889, 0, 0], 68: [0, .68889, 0, 0], 69: [0, .68889, 0, 0], 70: [0, .68889, 0, 0], 71: [0, .68889, 0, 0], 72: [0, .68889, 0, 0], 73: [0, .68889, 0, 0], 74: [.16667, .68889, 0, 0], 75: [0, .68889, 0, 0], 76: [0, .68889, 0, 0], 77: [0, .68889, 0, 0], 78: [0, .68889, 0, 0], 79: [.16667, .68889, 0, 0], 80: [0, .68889, 0, 0], 81: [.16667, .68889, 0, 0], 82: [0, .68889, 0, 0], 83: [0, .68889, 0, 0], 84: [0, .68889, 0, 0], 85: [0, .68889, 0, 0], 86: [0, .68889, 0, 0], 87: [0, .68889, 0, 0], 88: [0, .68889, 0, 0], 89: [0, .68889, 0, 0], 90: [0, .68889, 0, 0], 107: [0, .68889, 0, 0], 165: [0, .675, .025, 0], 174: [.15559, .69224, 0, 0], 240: [0, .68889, 0, 0], 295: [0, .68889, 0, 0], 710: [0, .825, 0, 0], 732: [0, .9, 0, 0], 770: [0, .825, 0, 0], 771: [0, .9, 0, 0], 989: [.08167, .58167, 0, 0], 1008: [0, .43056, .04028, 0], 8245: [0, .54986, 0, 0], 8463: [0, .68889, 0, 0], 8487: [0, .68889, 0, 0], 8498: [0, .68889, 0, 0], 8502: [0, .68889, 0, 0], 8503: [0, .68889, 0, 0], 8504: [0, .68889, 0, 0], 8513: [0, .68889, 0, 0], 8592: [-.03598, .46402, 0, 0], 8594: [-.03598, .46402, 0, 0], 8602: [-.13313, .36687, 0, 0], 8603: [-.13313, .36687, 0, 0], 8606: [.01354, .52239, 0, 0], 8608: [.01354, .52239, 0, 0], 8610: [.01354, .52239, 0, 0], 8611: [.01354, .52239, 0, 0], 8619: [0, .54986, 0, 0], 8620: [0, .54986, 0, 0], 8621: [-.13313, .37788, 0, 0], 8622: [-.13313, .36687, 0, 0], 8624: [0, .69224, 0, 0], 8625: [0, .69224, 0, 0], 8630: [0, .43056, 0, 0], 8631: [0, .43056, 0, 0], 8634: [.08198, .58198, 0, 0], 8635: [.08198, .58198, 0, 0], 8638: [.19444, .69224, 0, 0], 8639: [.19444, .69224, 0, 0], 8642: [.19444, .69224, 0, 0], 8643: [.19444, .69224, 0, 0], 8644: [.1808, .675, 0, 0], 8646: [.1808, .675, 0, 0], 8647: [.1808, .675, 0, 0], 8648: [.19444, .69224, 0, 0], 8649: [.1808, .675, 0, 0], 8650: [.19444, .69224, 0, 0], 8651: [.01354, .52239, 0, 0], 8652: [.01354, .52239, 0, 0], 8653: [-.13313, .36687, 0, 0], 8654: [-.13313, .36687, 0, 0], 8655: [-.13313, .36687, 0, 0], 8666: [.13667, .63667, 0, 0], 8667: [.13667, .63667, 0, 0], 8669: [-.13313, .37788, 0, 0], 8672: [-.064, .437, 0, 0], 8674: [-.064, .437, 0, 0], 8705: [0, .825, 0, 0], 8708: [0, .68889, 0, 0], 8709: [.08167, .58167, 0, 0], 8717: [0, .43056, 0, 0], 8722: [-.03598, .46402, 0, 0], 8724: [.08198, .69224, 0, 0], 8726: [.08167, .58167, 0, 0], 8733: [0, .69224, 0, 0], 8736: [0, .69224, 0, 0], 8737: [0, .69224, 0, 0], 8738: [.03517, .52239, 0, 0], 8739: [.08167, .58167, 0, 0], 8740: [.25142, .74111, 0, 0], 8741: [.08167, .58167, 0, 0], 8742: [.25142, .74111, 0, 0], 8756: [0, .69224, 0, 0], 8757: [0, .69224, 0, 0], 8764: [-.13313, .36687, 0, 0], 8765: [-.13313, .37788, 0, 0], 8769: [-.13313, .36687, 0, 0], 8770: [-.03625, .46375, 0, 0], 8774: [.30274, .79383, 0, 0], 8776: [-.01688, .48312, 0, 0], 8778: [.08167, .58167, 0, 0], 8782: [.06062, .54986, 0, 0], 8783: [.06062, .54986, 0, 0], 8785: [.08198, .58198, 0, 0], 8786: [.08198, .58198, 0, 0], 8787: [.08198, .58198, 0, 0], 8790: [0, .69224, 0, 0], 8791: [.22958, .72958, 0, 0], 8796: [.08198, .91667, 0, 0], 8806: [.25583, .75583, 0, 0], 8807: [.25583, .75583, 0, 0], 8808: [.25142, .75726, 0, 0], 8809: [.25142, .75726, 0, 0], 8812: [.25583, .75583, 0, 0], 8814: [.20576, .70576, 0, 0], 8815: [.20576, .70576, 0, 0], 8816: [.30274, .79383, 0, 0], 8817: [.30274, .79383, 0, 0], 8818: [.22958, .72958, 0, 0], 8819: [.22958, .72958, 0, 0], 8822: [.1808, .675, 0, 0], 8823: [.1808, .675, 0, 0], 8828: [.13667, .63667, 0, 0], 8829: [.13667, .63667, 0, 0], 8830: [.22958, .72958, 0, 0], 8831: [.22958, .72958, 0, 0], 8832: [.20576, .70576, 0, 0], 8833: [.20576, .70576, 0, 0], 8840: [.30274, .79383, 0, 0], 8841: [.30274, .79383, 0, 0], 8842: [.13597, .63597, 0, 0], 8843: [.13597, .63597, 0, 0], 8847: [.03517, .54986, 0, 0], 8848: [.03517, .54986, 0, 0], 8858: [.08198, .58198, 0, 0], 8859: [.08198, .58198, 0, 0], 8861: [.08198, .58198, 0, 0], 8862: [0, .675, 0, 0], 8863: [0, .675, 0, 0], 8864: [0, .675, 0, 0], 8865: [0, .675, 0, 0], 8872: [0, .69224, 0, 0], 8873: [0, .69224, 0, 0], 8874: [0, .69224, 0, 0], 8876: [0, .68889, 0, 0], 8877: [0, .68889, 0, 0], 8878: [0, .68889, 0, 0], 8879: [0, .68889, 0, 0], 8882: [.03517, .54986, 0, 0], 8883: [.03517, .54986, 0, 0], 8884: [.13667, .63667, 0, 0], 8885: [.13667, .63667, 0, 0], 8888: [0, .54986, 0, 0], 8890: [.19444, .43056, 0, 0], 8891: [.19444, .69224, 0, 0], 8892: [.19444, .69224, 0, 0], 8901: [0, .54986, 0, 0], 8903: [.08167, .58167, 0, 0], 8905: [.08167, .58167, 0, 0], 8906: [.08167, .58167, 0, 0], 8907: [0, .69224, 0, 0], 8908: [0, .69224, 0, 0], 8909: [-.03598, .46402, 0, 0], 8910: [0, .54986, 0, 0], 8911: [0, .54986, 0, 0], 8912: [.03517, .54986, 0, 0], 8913: [.03517, .54986, 0, 0], 8914: [0, .54986, 0, 0], 8915: [0, .54986, 0, 0], 8916: [0, .69224, 0, 0], 8918: [.0391, .5391, 0, 0], 8919: [.0391, .5391, 0, 0], 8920: [.03517, .54986, 0, 0], 8921: [.03517, .54986, 0, 0], 8922: [.38569, .88569, 0, 0], 8923: [.38569, .88569, 0, 0], 8926: [.13667, .63667, 0, 0], 8927: [.13667, .63667, 0, 0], 8928: [.30274, .79383, 0, 0], 8929: [.30274, .79383, 0, 0], 8934: [.23222, .74111, 0, 0], 8935: [.23222, .74111, 0, 0], 8936: [.23222, .74111, 0, 0], 8937: [.23222, .74111, 0, 0], 8938: [.20576, .70576, 0, 0], 8939: [.20576, .70576, 0, 0], 8940: [.30274, .79383, 0, 0], 8941: [.30274, .79383, 0, 0], 8994: [.19444, .69224, 0, 0], 8995: [.19444, .69224, 0, 0], 9416: [.15559, .69224, 0, 0], 9484: [0, .69224, 0, 0], 9488: [0, .69224, 0, 0], 9492: [0, .37788, 0, 0], 9496: [0, .37788, 0, 0], 9585: [.19444, .68889, 0, 0], 9586: [.19444, .74111, 0, 0], 9632: [0, .675, 0, 0], 9633: [0, .675, 0, 0], 9650: [0, .54986, 0, 0], 9651: [0, .54986, 0, 0], 9654: [.03517, .54986, 0, 0], 9660: [0, .54986, 0, 0], 9661: [0, .54986, 0, 0], 9664: [.03517, .54986, 0, 0], 9674: [.11111, .69224, 0, 0], 9733: [.19444, .69224, 0, 0], 10003: [0, .69224, 0, 0], 10016: [0, .69224, 0, 0], 10731: [.11111, .69224, 0, 0], 10846: [.19444, .75583, 0, 0], 10877: [.13667, .63667, 0, 0], 10878: [.13667, .63667, 0, 0], 10885: [.25583, .75583, 0, 0], 10886: [.25583, .75583, 0, 0], 10887: [.13597, .63597, 0, 0], 10888: [.13597, .63597, 0, 0], 10889: [.26167, .75726, 0, 0], 10890: [.26167, .75726, 0, 0], 10891: [.48256, .98256, 0, 0], 10892: [.48256, .98256, 0, 0], 10901: [.13667, .63667, 0, 0], 10902: [.13667, .63667, 0, 0], 10933: [.25142, .75726, 0, 0], 10934: [.25142, .75726, 0, 0], 10935: [.26167, .75726, 0, 0], 10936: [.26167, .75726, 0, 0], 10937: [.26167, .75726, 0, 0], 10938: [.26167, .75726, 0, 0], 10949: [.25583, .75583, 0, 0], 10950: [.25583, .75583, 0, 0], 10955: [.28481, .79383, 0, 0], 10956: [.28481, .79383, 0, 0], 57350: [.08167, .58167, 0, 0], 57351: [.08167, .58167, 0, 0], 57352: [.08167, .58167, 0, 0], 57353: [0, .43056, .04028, 0], 57356: [.25142, .75726, 0, 0], 57357: [.25142, .75726, 0, 0], 57358: [.41951, .91951, 0, 0], 57359: [.30274, .79383, 0, 0], 57360: [.30274, .79383, 0, 0], 57361: [.41951, .91951, 0, 0], 57366: [.25142, .75726, 0, 0], 57367: [.25142, .75726, 0, 0], 57368: [.25142, .75726, 0, 0], 57369: [.25142, .75726, 0, 0], 57370: [.13597, .63597, 0, 0], 57371: [.13597, .63597, 0, 0] }, "Caligraphic-Regular": { 48: [0, .43056, 0, 0], 49: [0, .43056, 0, 0], 50: [0, .43056, 0, 0], 51: [.19444, .43056, 0, 0], 52: [.19444, .43056, 0, 0], 53: [.19444, .43056, 0, 0], 54: [0, .64444, 0, 0], 55: [.19444, .43056, 0, 0], 56: [0, .64444, 0, 0], 57: [.19444, .43056, 0, 0], 65: [0, .68333, 0, .19445], 66: [0, .68333, .03041, .13889], 67: [0, .68333, .05834, .13889], 68: [0, .68333, .02778, .08334], 69: [0, .68333, .08944, .11111], 70: [0, .68333, .09931, .11111], 71: [.09722, .68333, .0593, .11111], 72: [0, .68333, .00965, .11111], 73: [0, .68333, .07382, 0], 74: [.09722, .68333, .18472, .16667], 75: [0, .68333, .01445, .05556], 76: [0, .68333, 0, .13889], 77: [0, .68333, 0, .13889], 78: [0, .68333, .14736, .08334], 79: [0, .68333, .02778, .11111], 80: [0, .68333, .08222, .08334], 81: [.09722, .68333, 0, .11111], 82: [0, .68333, 0, .08334], 83: [0, .68333, .075, .13889], 84: [0, .68333, .25417, 0], 85: [0, .68333, .09931, .08334], 86: [0, .68333, .08222, 0], 87: [0, .68333, .08222, .08334], 88: [0, .68333, .14643, .13889], 89: [.09722, .68333, .08222, .08334], 90: [0, .68333, .07944, .13889] }, "Fraktur-Regular": { 33: [0, .69141, 0, 0], 34: [0, .69141, 0, 0], 38: [0, .69141, 0, 0], 39: [0, .69141, 0, 0], 40: [.24982, .74947, 0, 0], 41: [.24982, .74947, 0, 0], 42: [0, .62119, 0, 0], 43: [.08319, .58283, 0, 0], 44: [0, .10803, 0, 0], 45: [.08319, .58283, 0, 0], 46: [0, .10803, 0, 0], 47: [.24982, .74947, 0, 0], 48: [0, .47534, 0, 0], 49: [0, .47534, 0, 0], 50: [0, .47534, 0, 0], 51: [.18906, .47534, 0, 0], 52: [.18906, .47534, 0, 0], 53: [.18906, .47534, 0, 0], 54: [0, .69141, 0, 0], 55: [.18906, .47534, 0, 0], 56: [0, .69141, 0, 0], 57: [.18906, .47534, 0, 0], 58: [0, .47534, 0, 0], 59: [.12604, .47534, 0, 0], 61: [-.13099, .36866, 0, 0], 63: [0, .69141, 0, 0], 65: [0, .69141, 0, 0], 66: [0, .69141, 0, 0], 67: [0, .69141, 0, 0], 68: [0, .69141, 0, 0], 69: [0, .69141, 0, 0], 70: [.12604, .69141, 0, 0], 71: [0, .69141, 0, 0], 72: [.06302, .69141, 0, 0], 73: [0, .69141, 0, 0], 74: [.12604, .69141, 0, 0], 75: [0, .69141, 0, 0], 76: [0, .69141, 0, 0], 77: [0, .69141, 0, 0], 78: [0, .69141, 0, 0], 79: [0, .69141, 0, 0], 80: [.18906, .69141, 0, 0], 81: [.03781, .69141, 0, 0], 82: [0, .69141, 0, 0], 83: [0, .69141, 0, 0], 84: [0, .69141, 0, 0], 85: [0, .69141, 0, 0], 86: [0, .69141, 0, 0], 87: [0, .69141, 0, 0], 88: [0, .69141, 0, 0], 89: [.18906, .69141, 0, 0], 90: [.12604, .69141, 0, 0], 91: [.24982, .74947, 0, 0], 93: [.24982, .74947, 0, 0], 94: [0, .69141, 0, 0], 97: [0, .47534, 0, 0], 98: [0, .69141, 0, 0], 99: [0, .47534, 0, 0], 100: [0, .62119, 0, 0], 101: [0, .47534, 0, 0], 102: [.18906, .69141, 0, 0], 103: [.18906, .47534, 0, 0], 104: [.18906, .69141, 0, 0], 105: [0, .69141, 0, 0], 106: [0, .69141, 0, 0], 107: [0, .69141, 0, 0], 108: [0, .69141, 0, 0], 109: [0, .47534, 0, 0], 110: [0, .47534, 0, 0], 111: [0, .47534, 0, 0], 112: [.18906, .52396, 0, 0], 113: [.18906, .47534, 0, 0], 114: [0, .47534, 0, 0], 115: [0, .47534, 0, 0], 116: [0, .62119, 0, 0], 117: [0, .47534, 0, 0], 118: [0, .52396, 0, 0], 119: [0, .52396, 0, 0], 120: [.18906, .47534, 0, 0], 121: [.18906, .47534, 0, 0], 122: [.18906, .47534, 0, 0], 8216: [0, .69141, 0, 0], 8217: [0, .69141, 0, 0], 58112: [0, .62119, 0, 0], 58113: [0, .62119, 0, 0], 58114: [.18906, .69141, 0, 0], 58115: [.18906, .69141, 0, 0], 58116: [.18906, .47534, 0, 0], 58117: [0, .69141, 0, 0], 58118: [0, .62119, 0, 0], 58119: [0, .47534, 0, 0] }, "Main-Bold": { 33: [0, .69444, 0, 0], 34: [0, .69444, 0, 0], 35: [.19444, .69444, 0, 0], 36: [.05556, .75, 0, 0], 37: [.05556, .75, 0, 0], 38: [0, .69444, 0, 0], 39: [0, .69444, 0, 0], 40: [.25, .75, 0, 0], 41: [.25, .75, 0, 0], 42: [0, .75, 0, 0], 43: [.13333, .63333, 0, 0], 44: [.19444, .15556, 0, 0], 45: [0, .44444, 0, 0], 46: [0, .15556, 0, 0], 47: [.25, .75, 0, 0], 48: [0, .64444, 0, 0], 49: [0, .64444, 0, 0], 50: [0, .64444, 0, 0], 51: [0, .64444, 0, 0], 52: [0, .64444, 0, 0], 53: [0, .64444, 0, 0], 54: [0, .64444, 0, 0], 55: [0, .64444, 0, 0], 56: [0, .64444, 0, 0], 57: [0, .64444, 0, 0], 58: [0, .44444, 0, 0], 59: [.19444, .44444, 0, 0], 60: [.08556, .58556, 0, 0], 61: [-.10889, .39111, 0, 0], 62: [.08556, .58556, 0, 0], 63: [0, .69444, 0, 0], 64: [0, .69444, 0, 0], 65: [0, .68611, 0, 0], 66: [0, .68611, 0, 0], 67: [0, .68611, 0, 0], 68: [0, .68611, 0, 0], 69: [0, .68611, 0, 0], 70: [0, .68611, 0, 0], 71: [0, .68611, 0, 0], 72: [0, .68611, 0, 0], 73: [0, .68611, 0, 0], 74: [0, .68611, 0, 0], 75: [0, .68611, 0, 0], 76: [0, .68611, 0, 0], 77: [0, .68611, 0, 0], 78: [0, .68611, 0, 0], 79: [0, .68611, 0, 0], 80: [0, .68611, 0, 0], 81: [.19444, .68611, 0, 0], 82: [0, .68611, 0, 0], 83: [0, .68611, 0, 0], 84: [0, .68611, 0, 0], 85: [0, .68611, 0, 0], 86: [0, .68611, .01597, 0], 87: [0, .68611, .01597, 0], 88: [0, .68611, 0, 0], 89: [0, .68611, .02875, 0], 90: [0, .68611, 0, 0], 91: [.25, .75, 0, 0], 92: [.25, .75, 0, 0], 93: [.25, .75, 0, 0], 94: [0, .69444, 0, 0], 95: [.31, .13444, .03194, 0], 96: [0, .69444, 0, 0], 97: [0, .44444, 0, 0], 98: [0, .69444, 0, 0], 99: [0, .44444, 0, 0], 100: [0, .69444, 0, 0], 101: [0, .44444, 0, 0], 102: [0, .69444, .10903, 0], 103: [.19444, .44444, .01597, 0], 104: [0, .69444, 0, 0], 105: [0, .69444, 0, 0], 106: [.19444, .69444, 0, 0], 107: [0, .69444, 0, 0], 108: [0, .69444, 0, 0], 109: [0, .44444, 0, 0], 110: [0, .44444, 0, 0], 111: [0, .44444, 0, 0], 112: [.19444, .44444, 0, 0], 113: [.19444, .44444, 0, 0], 114: [0, .44444, 0, 0], 115: [0, .44444, 0, 0], 116: [0, .63492, 0, 0], 117: [0, .44444, 0, 0], 118: [0, .44444, .01597, 0], 119: [0, .44444, .01597, 0], 120: [0, .44444, 0, 0], 121: [.19444, .44444, .01597, 0], 122: [0, .44444, 0, 0], 123: [.25, .75, 0, 0], 124: [.25, .75, 0, 0], 125: [.25, .75, 0, 0], 126: [.35, .34444, 0, 0], 168: [0, .69444, 0, 0], 172: [0, .44444, 0, 0], 175: [0, .59611, 0, 0], 176: [0, .69444, 0, 0], 177: [.13333, .63333, 0, 0], 180: [0, .69444, 0, 0], 215: [.13333, .63333, 0, 0], 247: [.13333, .63333, 0, 0], 305: [0, .44444, 0, 0], 567: [.19444, .44444, 0, 0], 710: [0, .69444, 0, 0], 711: [0, .63194, 0, 0], 713: [0, .59611, 0, 0], 714: [0, .69444, 0, 0], 715: [0, .69444, 0, 0], 728: [0, .69444, 0, 0], 729: [0, .69444, 0, 0], 730: [0, .69444, 0, 0], 732: [0, .69444, 0, 0], 768: [0, .69444, 0, 0], 769: [0, .69444, 0, 0], 770: [0, .69444, 0, 0], 771: [0, .69444, 0, 0], 772: [0, .59611, 0, 0], 774: [0, .69444, 0, 0], 775: [0, .69444, 0, 0], 776: [0, .69444, 0, 0], 778: [0, .69444, 0, 0], 779: [0, .69444, 0, 0], 780: [0, .63194, 0, 0], 824: [.19444, .69444, 0, 0], 915: [0, .68611, 0, 0], 916: [0, .68611, 0, 0], 920: [0, .68611, 0, 0], 923: [0, .68611, 0, 0], 926: [0, .68611, 0, 0], 928: [0, .68611, 0, 0], 931: [0, .68611, 0, 0], 933: [0, .68611, 0, 0], 934: [0, .68611, 0, 0], 936: [0, .68611, 0, 0], 937: [0, .68611, 0, 0], 8211: [0, .44444, .03194, 0], 8212: [0, .44444, .03194, 0], 8216: [0, .69444, 0, 0], 8217: [0, .69444, 0, 0], 8220: [0, .69444, 0, 0], 8221: [0, .69444, 0, 0], 8224: [.19444, .69444, 0, 0], 8225: [.19444, .69444, 0, 0], 8242: [0, .55556, 0, 0], 8407: [0, .72444, .15486, 0], 8463: [0, .69444, 0, 0], 8465: [0, .69444, 0, 0], 8467: [0, .69444, 0, 0], 8472: [.19444, .44444, 0, 0], 8476: [0, .69444, 0, 0], 8501: [0, .69444, 0, 0], 8592: [-.10889, .39111, 0, 0], 8593: [.19444, .69444, 0, 0], 8594: [-.10889, .39111, 0, 0], 8595: [.19444, .69444, 0, 0], 8596: [-.10889, .39111, 0, 0], 8597: [.25, .75, 0, 0], 8598: [.19444, .69444, 0, 0], 8599: [.19444, .69444, 0, 0], 8600: [.19444, .69444, 0, 0], 8601: [.19444, .69444, 0, 0], 8636: [-.10889, .39111, 0, 0], 8637: [-.10889, .39111, 0, 0], 8640: [-.10889, .39111, 0, 0], 8641: [-.10889, .39111, 0, 0], 8656: [-.10889, .39111, 0, 0], 8657: [.19444, .69444, 0, 0], 8658: [-.10889, .39111, 0, 0], 8659: [.19444, .69444, 0, 0], 8660: [-.10889, .39111, 0, 0], 8661: [.25, .75, 0, 0], 8704: [0, .69444, 0, 0], 8706: [0, .69444, .06389, 0], 8707: [0, .69444, 0, 0], 8709: [.05556, .75, 0, 0], 8711: [0, .68611, 0, 0], 8712: [.08556, .58556, 0, 0], 8715: [.08556, .58556, 0, 0], 8722: [.13333, .63333, 0, 0], 8723: [.13333, .63333, 0, 0], 8725: [.25, .75, 0, 0], 8726: [.25, .75, 0, 0], 8727: [-.02778, .47222, 0, 0], 8728: [-.02639, .47361, 0, 0], 8729: [-.02639, .47361, 0, 0], 8730: [.18, .82, 0, 0], 8733: [0, .44444, 0, 0], 8734: [0, .44444, 0, 0], 8736: [0, .69224, 0, 0], 8739: [.25, .75, 0, 0], 8741: [.25, .75, 0, 0], 8743: [0, .55556, 0, 0], 8744: [0, .55556, 0, 0], 8745: [0, .55556, 0, 0], 8746: [0, .55556, 0, 0], 8747: [.19444, .69444, .12778, 0], 8764: [-.10889, .39111, 0, 0], 8768: [.19444, .69444, 0, 0], 8771: [.00222, .50222, 0, 0], 8776: [.02444, .52444, 0, 0], 8781: [.00222, .50222, 0, 0], 8801: [.00222, .50222, 0, 0], 8804: [.19667, .69667, 0, 0], 8805: [.19667, .69667, 0, 0], 8810: [.08556, .58556, 0, 0], 8811: [.08556, .58556, 0, 0], 8826: [.08556, .58556, 0, 0], 8827: [.08556, .58556, 0, 0], 8834: [.08556, .58556, 0, 0], 8835: [.08556, .58556, 0, 0], 8838: [.19667, .69667, 0, 0], 8839: [.19667, .69667, 0, 0], 8846: [0, .55556, 0, 0], 8849: [.19667, .69667, 0, 0], 8850: [.19667, .69667, 0, 0], 8851: [0, .55556, 0, 0], 8852: [0, .55556, 0, 0], 8853: [.13333, .63333, 0, 0], 8854: [.13333, .63333, 0, 0], 8855: [.13333, .63333, 0, 0], 8856: [.13333, .63333, 0, 0], 8857: [.13333, .63333, 0, 0], 8866: [0, .69444, 0, 0], 8867: [0, .69444, 0, 0], 8868: [0, .69444, 0, 0], 8869: [0, .69444, 0, 0], 8900: [-.02639, .47361, 0, 0], 8901: [-.02639, .47361, 0, 0], 8902: [-.02778, .47222, 0, 0], 8968: [.25, .75, 0, 0], 8969: [.25, .75, 0, 0], 8970: [.25, .75, 0, 0], 8971: [.25, .75, 0, 0], 8994: [-.13889, .36111, 0, 0], 8995: [-.13889, .36111, 0, 0], 9651: [.19444, .69444, 0, 0], 9657: [-.02778, .47222, 0, 0], 9661: [.19444, .69444, 0, 0], 9667: [-.02778, .47222, 0, 0], 9711: [.19444, .69444, 0, 0], 9824: [.12963, .69444, 0, 0], 9825: [.12963, .69444, 0, 0], 9826: [.12963, .69444, 0, 0], 9827: [.12963, .69444, 0, 0], 9837: [0, .75, 0, 0], 9838: [.19444, .69444, 0, 0], 9839: [.19444, .69444, 0, 0], 10216: [.25, .75, 0, 0], 10217: [.25, .75, 0, 0], 10815: [0, .68611, 0, 0], 10927: [.19667, .69667, 0, 0], 10928: [.19667, .69667, 0, 0] }, "Main-Italic": { 33: [0, .69444, .12417, 0], 34: [0, .69444, .06961, 0], 35: [.19444, .69444, .06616, 0], 37: [.05556, .75, .13639, 0], 38: [0, .69444, .09694, 0], 39: [0, .69444, .12417, 0], 40: [.25, .75, .16194, 0], 41: [.25, .75, .03694, 0], 42: [0, .75, .14917, 0], 43: [.05667, .56167, .03694, 0], 44: [.19444, .10556, 0, 0], 45: [0, .43056, .02826, 0], 46: [0, .10556, 0, 0], 47: [.25, .75, .16194, 0], 48: [0, .64444, .13556, 0], 49: [0, .64444, .13556, 0], 50: [0, .64444, .13556, 0], 51: [0, .64444, .13556, 0], 52: [.19444, .64444, .13556, 0], 53: [0, .64444, .13556, 0], 54: [0, .64444, .13556, 0], 55: [.19444, .64444, .13556, 0], 56: [0, .64444, .13556, 0], 57: [0, .64444, .13556, 0], 58: [0, .43056, .0582, 0], 59: [.19444, .43056, .0582, 0], 61: [-.13313, .36687, .06616, 0], 63: [0, .69444, .1225, 0], 64: [0, .69444, .09597, 0], 65: [0, .68333, 0, 0], 66: [0, .68333, .10257, 0], 67: [0, .68333, .14528, 0], 68: [0, .68333, .09403, 0], 69: [0, .68333, .12028, 0], 70: [0, .68333, .13305, 0], 71: [0, .68333, .08722, 0], 72: [0, .68333, .16389, 0], 73: [0, .68333, .15806, 0], 74: [0, .68333, .14028, 0], 75: [0, .68333, .14528, 0], 76: [0, .68333, 0, 0], 77: [0, .68333, .16389, 0], 78: [0, .68333, .16389, 0], 79: [0, .68333, .09403, 0], 80: [0, .68333, .10257, 0], 81: [.19444, .68333, .09403, 0], 82: [0, .68333, .03868, 0], 83: [0, .68333, .11972, 0], 84: [0, .68333, .13305, 0], 85: [0, .68333, .16389, 0], 86: [0, .68333, .18361, 0], 87: [0, .68333, .18361, 0], 88: [0, .68333, .15806, 0], 89: [0, .68333, .19383, 0], 90: [0, .68333, .14528, 0], 91: [.25, .75, .1875, 0], 93: [.25, .75, .10528, 0], 94: [0, .69444, .06646, 0], 95: [.31, .12056, .09208, 0], 97: [0, .43056, .07671, 0], 98: [0, .69444, .06312, 0], 99: [0, .43056, .05653, 0], 100: [0, .69444, .10333, 0], 101: [0, .43056, .07514, 0], 102: [.19444, .69444, .21194, 0], 103: [.19444, .43056, .08847, 0], 104: [0, .69444, .07671, 0], 105: [0, .65536, .1019, 0], 106: [.19444, .65536, .14467, 0], 107: [0, .69444, .10764, 0], 108: [0, .69444, .10333, 0], 109: [0, .43056, .07671, 0], 110: [0, .43056, .07671, 0], 111: [0, .43056, .06312, 0], 112: [.19444, .43056, .06312, 0], 113: [.19444, .43056, .08847, 0], 114: [0, .43056, .10764, 0], 115: [0, .43056, .08208, 0], 116: [0, .61508, .09486, 0], 117: [0, .43056, .07671, 0], 118: [0, .43056, .10764, 0], 119: [0, .43056, .10764, 0], 120: [0, .43056, .12042, 0], 121: [.19444, .43056, .08847, 0], 122: [0, .43056, .12292, 0], 126: [.35, .31786, .11585, 0], 163: [0, .69444, 0, 0], 305: [0, .43056, 0, .02778], 567: [.19444, .43056, 0, .08334], 768: [0, .69444, 0, 0], 769: [0, .69444, .09694, 0], 770: [0, .69444, .06646, 0], 771: [0, .66786, .11585, 0], 772: [0, .56167, .10333, 0], 774: [0, .69444, .10806, 0], 775: [0, .66786, .11752, 0], 776: [0, .66786, .10474, 0], 778: [0, .69444, 0, 0], 779: [0, .69444, .1225, 0], 780: [0, .62847, .08295, 0], 915: [0, .68333, .13305, 0], 916: [0, .68333, 0, 0], 920: [0, .68333, .09403, 0], 923: [0, .68333, 0, 0], 926: [0, .68333, .15294, 0], 928: [0, .68333, .16389, 0], 931: [0, .68333, .12028, 0], 933: [0, .68333, .11111, 0], 934: [0, .68333, .05986, 0], 936: [0, .68333, .11111, 0], 937: [0, .68333, .10257, 0], 8211: [0, .43056, .09208, 0], 8212: [0, .43056, .09208, 0], 8216: [0, .69444, .12417, 0], 8217: [0, .69444, .12417, 0], 8220: [0, .69444, .1685, 0], 8221: [0, .69444, .06961, 0], 8463: [0, .68889, 0, 0] }, "Main-Regular": { 32: [0, 0, 0, 0], 33: [0, .69444, 0, 0], 34: [0, .69444, 0, 0], 35: [.19444, .69444, 0, 0], 36: [.05556, .75, 0, 0], 37: [.05556, .75, 0, 0], 38: [0, .69444, 0, 0], 39: [0, .69444, 0, 0], 40: [.25, .75, 0, 0], 41: [.25, .75, 0, 0], 42: [0, .75, 0, 0], 43: [.08333, .58333, 0, 0], 44: [.19444, .10556, 0, 0], 45: [0, .43056, 0, 0], 46: [0, .10556, 0, 0], 47: [.25, .75, 0, 0], 48: [0, .64444, 0, 0], 49: [0, .64444, 0, 0], 50: [0, .64444, 0, 0], 51: [0, .64444, 0, 0], 52: [0, .64444, 0, 0], 53: [0, .64444, 0, 0], 54: [0, .64444, 0, 0], 55: [0, .64444, 0, 0], 56: [0, .64444, 0, 0], 57: [0, .64444, 0, 0], 58: [0, .43056, 0, 0], 59: [.19444, .43056, 0, 0], 60: [.0391, .5391, 0, 0], 61: [-.13313, .36687, 0, 0], 62: [.0391, .5391, 0, 0], 63: [0, .69444, 0, 0], 64: [0, .69444, 0, 0], 65: [0, .68333, 0, 0], 66: [0, .68333, 0, 0], 67: [0, .68333, 0, 0], 68: [0, .68333, 0, 0], 69: [0, .68333, 0, 0], 70: [0, .68333, 0, 0], 71: [0, .68333, 0, 0], 72: [0, .68333, 0, 0], 73: [0, .68333, 0, 0], 74: [0, .68333, 0, 0], 75: [0, .68333, 0, 0], 76: [0, .68333, 0, 0], 77: [0, .68333, 0, 0], 78: [0, .68333, 0, 0], 79: [0, .68333, 0, 0], 80: [0, .68333, 0, 0], 81: [.19444, .68333, 0, 0], 82: [0, .68333, 0, 0], 83: [0, .68333, 0, 0], 84: [0, .68333, 0, 0], 85: [0, .68333, 0, 0], 86: [0, .68333, .01389, 0],
          87: [0, .68333, .01389, 0], 88: [0, .68333, 0, 0], 89: [0, .68333, .025, 0], 90: [0, .68333, 0, 0], 91: [.25, .75, 0, 0], 92: [.25, .75, 0, 0], 93: [.25, .75, 0, 0], 94: [0, .69444, 0, 0], 95: [.31, .12056, .02778, 0], 96: [0, .69444, 0, 0], 97: [0, .43056, 0, 0], 98: [0, .69444, 0, 0], 99: [0, .43056, 0, 0], 100: [0, .69444, 0, 0], 101: [0, .43056, 0, 0], 102: [0, .69444, .07778, 0], 103: [.19444, .43056, .01389, 0], 104: [0, .69444, 0, 0], 105: [0, .66786, 0, 0], 106: [.19444, .66786, 0, 0], 107: [0, .69444, 0, 0], 108: [0, .69444, 0, 0], 109: [0, .43056, 0, 0], 110: [0, .43056, 0, 0], 111: [0, .43056, 0, 0], 112: [.19444, .43056, 0, 0], 113: [.19444, .43056, 0, 0], 114: [0, .43056, 0, 0], 115: [0, .43056, 0, 0], 116: [0, .61508, 0, 0], 117: [0, .43056, 0, 0], 118: [0, .43056, .01389, 0], 119: [0, .43056, .01389, 0], 120: [0, .43056, 0, 0], 121: [.19444, .43056, .01389, 0], 122: [0, .43056, 0, 0], 123: [.25, .75, 0, 0], 124: [.25, .75, 0, 0], 125: [.25, .75, 0, 0], 126: [.35, .31786, 0, 0], 160: [0, 0, 0, 0], 168: [0, .66786, 0, 0], 172: [0, .43056, 0, 0], 175: [0, .56778, 0, 0], 176: [0, .69444, 0, 0], 177: [.08333, .58333, 0, 0], 180: [0, .69444, 0, 0], 215: [.08333, .58333, 0, 0], 247: [.08333, .58333, 0, 0], 305: [0, .43056, 0, 0], 567: [.19444, .43056, 0, 0], 710: [0, .69444, 0, 0], 711: [0, .62847, 0, 0], 713: [0, .56778, 0, 0], 714: [0, .69444, 0, 0], 715: [0, .69444, 0, 0], 728: [0, .69444, 0, 0], 729: [0, .66786, 0, 0], 730: [0, .69444, 0, 0], 732: [0, .66786, 0, 0], 768: [0, .69444, 0, 0], 769: [0, .69444, 0, 0], 770: [0, .69444, 0, 0], 771: [0, .66786, 0, 0], 772: [0, .56778, 0, 0], 774: [0, .69444, 0, 0], 775: [0, .66786, 0, 0], 776: [0, .66786, 0, 0], 778: [0, .69444, 0, 0], 779: [0, .69444, 0, 0], 780: [0, .62847, 0, 0], 824: [.19444, .69444, 0, 0], 915: [0, .68333, 0, 0], 916: [0, .68333, 0, 0], 920: [0, .68333, 0, 0], 923: [0, .68333, 0, 0], 926: [0, .68333, 0, 0], 928: [0, .68333, 0, 0], 931: [0, .68333, 0, 0], 933: [0, .68333, 0, 0], 934: [0, .68333, 0, 0], 936: [0, .68333, 0, 0], 937: [0, .68333, 0, 0], 8211: [0, .43056, .02778, 0], 8212: [0, .43056, .02778, 0], 8216: [0, .69444, 0, 0], 8217: [0, .69444, 0, 0], 8220: [0, .69444, 0, 0], 8221: [0, .69444, 0, 0], 8224: [.19444, .69444, 0, 0], 8225: [.19444, .69444, 0, 0], 8230: [0, .12, 0, 0], 8242: [0, .55556, 0, 0], 8407: [0, .71444, .15382, 0], 8463: [0, .68889, 0, 0], 8465: [0, .69444, 0, 0], 8467: [0, .69444, 0, .11111], 8472: [.19444, .43056, 0, .11111], 8476: [0, .69444, 0, 0], 8501: [0, .69444, 0, 0], 8592: [-.13313, .36687, 0, 0], 8593: [.19444, .69444, 0, 0], 8594: [-.13313, .36687, 0, 0], 8595: [.19444, .69444, 0, 0], 8596: [-.13313, .36687, 0, 0], 8597: [.25, .75, 0, 0], 8598: [.19444, .69444, 0, 0], 8599: [.19444, .69444, 0, 0], 8600: [.19444, .69444, 0, 0], 8601: [.19444, .69444, 0, 0], 8614: [.011, .511, 0, 0], 8617: [.011, .511, 0, 0], 8618: [.011, .511, 0, 0], 8636: [-.13313, .36687, 0, 0], 8637: [-.13313, .36687, 0, 0], 8640: [-.13313, .36687, 0, 0], 8641: [-.13313, .36687, 0, 0], 8652: [.011, .671, 0, 0], 8656: [-.13313, .36687, 0, 0], 8657: [.19444, .69444, 0, 0], 8658: [-.13313, .36687, 0, 0], 8659: [.19444, .69444, 0, 0], 8660: [-.13313, .36687, 0, 0], 8661: [.25, .75, 0, 0], 8704: [0, .69444, 0, 0], 8706: [0, .69444, .05556, .08334], 8707: [0, .69444, 0, 0], 8709: [.05556, .75, 0, 0], 8711: [0, .68333, 0, 0], 8712: [.0391, .5391, 0, 0], 8715: [.0391, .5391, 0, 0], 8722: [.08333, .58333, 0, 0], 8723: [.08333, .58333, 0, 0], 8725: [.25, .75, 0, 0], 8726: [.25, .75, 0, 0], 8727: [-.03472, .46528, 0, 0], 8728: [-.05555, .44445, 0, 0], 8729: [-.05555, .44445, 0, 0], 8730: [.2, .8, 0, 0], 8733: [0, .43056, 0, 0], 8734: [0, .43056, 0, 0], 8736: [0, .69224, 0, 0], 8739: [.25, .75, 0, 0], 8741: [.25, .75, 0, 0], 8743: [0, .55556, 0, 0], 8744: [0, .55556, 0, 0], 8745: [0, .55556, 0, 0], 8746: [0, .55556, 0, 0], 8747: [.19444, .69444, .11111, 0], 8764: [-.13313, .36687, 0, 0], 8768: [.19444, .69444, 0, 0], 8771: [-.03625, .46375, 0, 0], 8773: [-.022, .589, 0, 0], 8776: [-.01688, .48312, 0, 0], 8781: [-.03625, .46375, 0, 0], 8784: [-.133, .67, 0, 0], 8800: [.215, .716, 0, 0], 8801: [-.03625, .46375, 0, 0], 8804: [.13597, .63597, 0, 0], 8805: [.13597, .63597, 0, 0], 8810: [.0391, .5391, 0, 0], 8811: [.0391, .5391, 0, 0], 8826: [.0391, .5391, 0, 0], 8827: [.0391, .5391, 0, 0], 8834: [.0391, .5391, 0, 0], 8835: [.0391, .5391, 0, 0], 8838: [.13597, .63597, 0, 0], 8839: [.13597, .63597, 0, 0], 8846: [0, .55556, 0, 0], 8849: [.13597, .63597, 0, 0], 8850: [.13597, .63597, 0, 0], 8851: [0, .55556, 0, 0], 8852: [0, .55556, 0, 0], 8853: [.08333, .58333, 0, 0], 8854: [.08333, .58333, 0, 0], 8855: [.08333, .58333, 0, 0], 8856: [.08333, .58333, 0, 0], 8857: [.08333, .58333, 0, 0], 8866: [0, .69444, 0, 0], 8867: [0, .69444, 0, 0], 8868: [0, .69444, 0, 0], 8869: [0, .69444, 0, 0], 8872: [.249, .75, 0, 0], 8900: [-.05555, .44445, 0, 0], 8901: [-.05555, .44445, 0, 0], 8902: [-.03472, .46528, 0, 0], 8904: [.005, .505, 0, 0], 8942: [.03, .9, 0, 0], 8943: [-.19, .31, 0, 0], 8945: [-.1, .82, 0, 0], 8968: [.25, .75, 0, 0], 8969: [.25, .75, 0, 0], 8970: [.25, .75, 0, 0], 8971: [.25, .75, 0, 0], 8994: [-.14236, .35764, 0, 0], 8995: [-.14236, .35764, 0, 0], 9136: [.244, .744, 0, 0], 9137: [.244, .744, 0, 0], 9651: [.19444, .69444, 0, 0], 9657: [-.03472, .46528, 0, 0], 9661: [.19444, .69444, 0, 0], 9667: [-.03472, .46528, 0, 0], 9711: [.19444, .69444, 0, 0], 9824: [.12963, .69444, 0, 0], 9825: [.12963, .69444, 0, 0], 9826: [.12963, .69444, 0, 0], 9827: [.12963, .69444, 0, 0], 9837: [0, .75, 0, 0], 9838: [.19444, .69444, 0, 0], 9839: [.19444, .69444, 0, 0], 10216: [.25, .75, 0, 0], 10217: [.25, .75, 0, 0], 10222: [.244, .744, 0, 0], 10223: [.244, .744, 0, 0], 10229: [.011, .511, 0, 0], 10230: [.011, .511, 0, 0], 10231: [.011, .511, 0, 0], 10232: [.024, .525, 0, 0], 10233: [.024, .525, 0, 0], 10234: [.024, .525, 0, 0], 10236: [.011, .511, 0, 0], 10815: [0, .68333, 0, 0], 10927: [.13597, .63597, 0, 0], 10928: [.13597, .63597, 0, 0] }, "Math-BoldItalic": { 47: [.19444, .69444, 0, 0], 65: [0, .68611, 0, 0], 66: [0, .68611, .04835, 0], 67: [0, .68611, .06979, 0], 68: [0, .68611, .03194, 0], 69: [0, .68611, .05451, 0], 70: [0, .68611, .15972, 0], 71: [0, .68611, 0, 0], 72: [0, .68611, .08229, 0], 73: [0, .68611, .07778, 0], 74: [0, .68611, .10069, 0], 75: [0, .68611, .06979, 0], 76: [0, .68611, 0, 0], 77: [0, .68611, .11424, 0], 78: [0, .68611, .11424, 0], 79: [0, .68611, .03194, 0], 80: [0, .68611, .15972, 0], 81: [.19444, .68611, 0, 0], 82: [0, .68611, .00421, 0], 83: [0, .68611, .05382, 0], 84: [0, .68611, .15972, 0], 85: [0, .68611, .11424, 0], 86: [0, .68611, .25555, 0], 87: [0, .68611, .15972, 0], 88: [0, .68611, .07778, 0], 89: [0, .68611, .25555, 0], 90: [0, .68611, .06979, 0], 97: [0, .44444, 0, 0], 98: [0, .69444, 0, 0], 99: [0, .44444, 0, 0], 100: [0, .69444, 0, 0], 101: [0, .44444, 0, 0], 102: [.19444, .69444, .11042, 0], 103: [.19444, .44444, .03704, 0], 104: [0, .69444, 0, 0], 105: [0, .69326, 0, 0], 106: [.19444, .69326, .0622, 0], 107: [0, .69444, .01852, 0], 108: [0, .69444, .0088, 0], 109: [0, .44444, 0, 0], 110: [0, .44444, 0, 0], 111: [0, .44444, 0, 0], 112: [.19444, .44444, 0, 0], 113: [.19444, .44444, .03704, 0], 114: [0, .44444, .03194, 0], 115: [0, .44444, 0, 0], 116: [0, .63492, 0, 0], 117: [0, .44444, 0, 0], 118: [0, .44444, .03704, 0], 119: [0, .44444, .02778, 0], 120: [0, .44444, 0, 0], 121: [.19444, .44444, .03704, 0], 122: [0, .44444, .04213, 0], 915: [0, .68611, .15972, 0], 916: [0, .68611, 0, 0], 920: [0, .68611, .03194, 0], 923: [0, .68611, 0, 0], 926: [0, .68611, .07458, 0], 928: [0, .68611, .08229, 0], 931: [0, .68611, .05451, 0], 933: [0, .68611, .15972, 0], 934: [0, .68611, 0, 0], 936: [0, .68611, .11653, 0], 937: [0, .68611, .04835, 0], 945: [0, .44444, 0, 0], 946: [.19444, .69444, .03403, 0], 947: [.19444, .44444, .06389, 0], 948: [0, .69444, .03819, 0], 949: [0, .44444, 0, 0], 950: [.19444, .69444, .06215, 0], 951: [.19444, .44444, .03704, 0], 952: [0, .69444, .03194, 0], 953: [0, .44444, 0, 0], 954: [0, .44444, 0, 0], 955: [0, .69444, 0, 0], 956: [.19444, .44444, 0, 0], 957: [0, .44444, .06898, 0], 958: [.19444, .69444, .03021, 0], 959: [0, .44444, 0, 0], 960: [0, .44444, .03704, 0], 961: [.19444, .44444, 0, 0], 962: [.09722, .44444, .07917, 0], 963: [0, .44444, .03704, 0], 964: [0, .44444, .13472, 0], 965: [0, .44444, .03704, 0], 966: [.19444, .44444, 0, 0], 967: [.19444, .44444, 0, 0], 968: [.19444, .69444, .03704, 0], 969: [0, .44444, .03704, 0], 977: [0, .69444, 0, 0], 981: [.19444, .69444, 0, 0], 982: [0, .44444, .03194, 0], 1009: [.19444, .44444, 0, 0], 1013: [0, .44444, 0, 0] }, "Math-Italic": { 47: [.19444, .69444, 0, 0], 65: [0, .68333, 0, .13889], 66: [0, .68333, .05017, .08334], 67: [0, .68333, .07153, .08334], 68: [0, .68333, .02778, .05556], 69: [0, .68333, .05764, .08334], 70: [0, .68333, .13889, .08334], 71: [0, .68333, 0, .08334], 72: [0, .68333, .08125, .05556], 73: [0, .68333, .07847, .11111], 74: [0, .68333, .09618, .16667], 75: [0, .68333, .07153, .05556], 76: [0, .68333, 0, .02778], 77: [0, .68333, .10903, .08334], 78: [0, .68333, .10903, .08334], 79: [0, .68333, .02778, .08334], 80: [0, .68333, .13889, .08334], 81: [.19444, .68333, 0, .08334], 82: [0, .68333, .00773, .08334], 83: [0, .68333, .05764, .08334], 84: [0, .68333, .13889, .08334], 85: [0, .68333, .10903, .02778], 86: [0, .68333, .22222, 0], 87: [0, .68333, .13889, 0], 88: [0, .68333, .07847, .08334], 89: [0, .68333, .22222, 0], 90: [0, .68333, .07153, .08334], 97: [0, .43056, 0, 0], 98: [0, .69444, 0, 0], 99: [0, .43056, 0, .05556], 100: [0, .69444, 0, .16667], 101: [0, .43056, 0, .05556], 102: [.19444, .69444, .10764, .16667], 103: [.19444, .43056, .03588, .02778], 104: [0, .69444, 0, 0], 105: [0, .65952, 0, 0], 106: [.19444, .65952, .05724, 0], 107: [0, .69444, .03148, 0], 108: [0, .69444, .01968, .08334], 109: [0, .43056, 0, 0], 110: [0, .43056, 0, 0], 111: [0, .43056, 0, .05556], 112: [.19444, .43056, 0, .08334], 113: [.19444, .43056, .03588, .08334], 114: [0, .43056, .02778, .05556], 115: [0, .43056, 0, .05556], 116: [0, .61508, 0, .08334], 117: [0, .43056, 0, .02778], 118: [0, .43056, .03588, .02778], 119: [0, .43056, .02691, .08334], 120: [0, .43056, 0, .02778], 121: [.19444, .43056, .03588, .05556], 122: [0, .43056, .04398, .05556], 915: [0, .68333, .13889, .08334], 916: [0, .68333, 0, .16667], 920: [0, .68333, .02778, .08334], 923: [0, .68333, 0, .16667], 926: [0, .68333, .07569, .08334], 928: [0, .68333, .08125, .05556], 931: [0, .68333, .05764, .08334], 933: [0, .68333, .13889, .05556], 934: [0, .68333, 0, .08334], 936: [0, .68333, .11, .05556], 937: [0, .68333, .05017, .08334], 945: [0, .43056, .0037, .02778], 946: [.19444, .69444, .05278, .08334], 947: [.19444, .43056, .05556, 0], 948: [0, .69444, .03785, .05556], 949: [0, .43056, 0, .08334], 950: [.19444, .69444, .07378, .08334], 951: [.19444, .43056, .03588, .05556], 952: [0, .69444, .02778, .08334], 953: [0, .43056, 0, .05556], 954: [0, .43056, 0, 0], 955: [0, .69444, 0, 0], 956: [.19444, .43056, 0, .02778], 957: [0, .43056, .06366, .02778], 958: [.19444, .69444, .04601, .11111], 959: [0, .43056, 0, .05556], 960: [0, .43056, .03588, 0], 961: [.19444, .43056, 0, .08334], 962: [.09722, .43056, .07986, .08334], 963: [0, .43056, .03588, 0], 964: [0, .43056, .1132, .02778], 965: [0, .43056, .03588, .02778], 966: [.19444, .43056, 0, .08334], 967: [.19444, .43056, 0, .05556], 968: [.19444, .69444, .03588, .11111], 969: [0, .43056, .03588, 0], 977: [0, .69444, 0, .08334], 981: [.19444, .69444, 0, .08334], 982: [0, .43056, .02778, 0], 1009: [.19444, .43056, 0, .08334], 1013: [0, .43056, 0, .05556] }, "Math-Regular": { 65: [0, .68333, 0, .13889], 66: [0, .68333, .05017, .08334], 67: [0, .68333, .07153, .08334], 68: [0, .68333, .02778, .05556], 69: [0, .68333, .05764, .08334], 70: [0, .68333, .13889, .08334], 71: [0, .68333, 0, .08334], 72: [0, .68333, .08125, .05556], 73: [0, .68333, .07847, .11111], 74: [0, .68333, .09618, .16667], 75: [0, .68333, .07153, .05556], 76: [0, .68333, 0, .02778], 77: [0, .68333, .10903, .08334], 78: [0, .68333, .10903, .08334], 79: [0, .68333, .02778, .08334], 80: [0, .68333, .13889, .08334], 81: [.19444, .68333, 0, .08334], 82: [0, .68333, .00773, .08334], 83: [0, .68333, .05764, .08334], 84: [0, .68333, .13889, .08334], 85: [0, .68333, .10903, .02778], 86: [0, .68333, .22222, 0], 87: [0, .68333, .13889, 0], 88: [0, .68333, .07847, .08334], 89: [0, .68333, .22222, 0], 90: [0, .68333, .07153, .08334], 97: [0, .43056, 0, 0], 98: [0, .69444, 0, 0], 99: [0, .43056, 0, .05556], 100: [0, .69444, 0, .16667], 101: [0, .43056, 0, .05556], 102: [.19444, .69444, .10764, .16667], 103: [.19444, .43056, .03588, .02778], 104: [0, .69444, 0, 0], 105: [0, .65952, 0, 0], 106: [.19444, .65952, .05724, 0], 107: [0, .69444, .03148, 0], 108: [0, .69444, .01968, .08334], 109: [0, .43056, 0, 0], 110: [0, .43056, 0, 0], 111: [0, .43056, 0, .05556], 112: [.19444, .43056, 0, .08334], 113: [.19444, .43056, .03588, .08334], 114: [0, .43056, .02778, .05556], 115: [0, .43056, 0, .05556], 116: [0, .61508, 0, .08334], 117: [0, .43056, 0, .02778], 118: [0, .43056, .03588, .02778], 119: [0, .43056, .02691, .08334], 120: [0, .43056, 0, .02778], 121: [.19444, .43056, .03588, .05556], 122: [0, .43056, .04398, .05556], 915: [0, .68333, .13889, .08334], 916: [0, .68333, 0, .16667], 920: [0, .68333, .02778, .08334], 923: [0, .68333, 0, .16667], 926: [0, .68333, .07569, .08334], 928: [0, .68333, .08125, .05556], 931: [0, .68333, .05764, .08334], 933: [0, .68333, .13889, .05556], 934: [0, .68333, 0, .08334], 936: [0, .68333, .11, .05556], 937: [0, .68333, .05017, .08334], 945: [0, .43056, .0037, .02778], 946: [.19444, .69444, .05278, .08334], 947: [.19444, .43056, .05556, 0], 948: [0, .69444, .03785, .05556], 949: [0, .43056, 0, .08334], 950: [.19444, .69444, .07378, .08334], 951: [.19444, .43056, .03588, .05556], 952: [0, .69444, .02778, .08334], 953: [0, .43056, 0, .05556], 954: [0, .43056, 0, 0], 955: [0, .69444, 0, 0], 956: [.19444, .43056, 0, .02778], 957: [0, .43056, .06366, .02778], 958: [.19444, .69444, .04601, .11111], 959: [0, .43056, 0, .05556], 960: [0, .43056, .03588, 0], 961: [.19444, .43056, 0, .08334], 962: [.09722, .43056, .07986, .08334], 963: [0, .43056, .03588, 0], 964: [0, .43056, .1132, .02778], 965: [0, .43056, .03588, .02778], 966: [.19444, .43056, 0, .08334], 967: [.19444, .43056, 0, .05556], 968: [.19444, .69444, .03588, .11111], 969: [0, .43056, .03588, 0], 977: [0, .69444, 0, .08334], 981: [.19444, .69444, 0, .08334], 982: [0, .43056, .02778, 0], 1009: [.19444, .43056, 0, .08334], 1013: [0, .43056, 0, .05556] }, "SansSerif-Regular": { 33: [0, .69444, 0, 0], 34: [0, .69444, 0, 0], 35: [.19444, .69444, 0, 0], 36: [.05556, .75, 0, 0], 37: [.05556, .75, 0, 0], 38: [0, .69444, 0, 0], 39: [0, .69444, 0, 0], 40: [.25, .75, 0, 0], 41: [.25, .75, 0, 0], 42: [0, .75, 0, 0], 43: [.08333, .58333, 0, 0], 44: [.125, .08333, 0, 0], 45: [0, .44444, 0, 0], 46: [0, .08333, 0, 0], 47: [.25, .75, 0, 0], 48: [0, .65556, 0, 0], 49: [0, .65556, 0, 0], 50: [0, .65556, 0, 0], 51: [0, .65556, 0, 0], 52: [0, .65556, 0, 0], 53: [0, .65556, 0, 0], 54: [0, .65556, 0, 0], 55: [0, .65556, 0, 0], 56: [0, .65556, 0, 0], 57: [0, .65556, 0, 0], 58: [0, .44444, 0, 0], 59: [.125, .44444, 0, 0], 61: [-.13, .37, 0, 0], 63: [0, .69444, 0, 0], 64: [0, .69444, 0, 0], 65: [0, .69444, 0, 0], 66: [0, .69444, 0, 0], 67: [0, .69444, 0, 0], 68: [0, .69444, 0, 0], 69: [0, .69444, 0, 0], 70: [0, .69444, 0, 0], 71: [0, .69444, 0, 0], 72: [0, .69444, 0, 0], 73: [0, .69444, 0, 0], 74: [0, .69444, 0, 0], 75: [0, .69444, 0, 0], 76: [0, .69444, 0, 0], 77: [0, .69444, 0, 0], 78: [0, .69444, 0, 0], 79: [0, .69444, 0, 0], 80: [0, .69444, 0, 0], 81: [.125, .69444, 0, 0], 82: [0, .69444, 0, 0], 83: [0, .69444, 0, 0], 84: [0, .69444, 0, 0], 85: [0, .69444, 0, 0], 86: [0, .69444, .01389, 0], 87: [0, .69444, .01389, 0], 88: [0, .69444, 0, 0], 89: [0, .69444, .025, 0], 90: [0, .69444, 0, 0], 91: [.25, .75, 0, 0], 93: [.25, .75, 0, 0], 94: [0, .69444, 0, 0], 95: [.35, .09444, .02778, 0], 97: [0, .44444, 0, 0], 98: [0, .69444, 0, 0], 99: [0, .44444, 0, 0], 100: [0, .69444, 0, 0], 101: [0, .44444, 0, 0], 102: [0, .69444, .06944, 0], 103: [.19444, .44444, .01389, 0], 104: [0, .69444, 0, 0], 105: [0, .67937, 0, 0], 106: [.19444, .67937, 0, 0], 107: [0, .69444, 0, 0], 108: [0, .69444, 0, 0], 109: [0, .44444, 0, 0], 110: [0, .44444, 0, 0], 111: [0, .44444, 0, 0], 112: [.19444, .44444, 0, 0], 113: [.19444, .44444, 0, 0], 114: [0, .44444, .01389, 0], 115: [0, .44444, 0, 0], 116: [0, .57143, 0, 0], 117: [0, .44444, 0, 0], 118: [0, .44444, .01389, 0], 119: [0, .44444, .01389, 0], 120: [0, .44444, 0, 0], 121: [.19444, .44444, .01389, 0], 122: [0, .44444, 0, 0], 126: [.35, .32659, 0, 0], 305: [0, .44444, 0, 0], 567: [.19444, .44444, 0, 0], 768: [0, .69444, 0, 0], 769: [0, .69444, 0, 0], 770: [0, .69444, 0, 0], 771: [0, .67659, 0, 0], 772: [0, .60889, 0, 0], 774: [0, .69444, 0, 0], 775: [0, .67937, 0, 0], 776: [0, .67937, 0, 0], 778: [0, .69444, 0, 0], 779: [0, .69444, 0, 0], 780: [0, .63194, 0, 0], 915: [0, .69444, 0, 0], 916: [0, .69444, 0, 0], 920: [0, .69444, 0, 0], 923: [0, .69444, 0, 0], 926: [0, .69444, 0, 0], 928: [0, .69444, 0, 0], 931: [0, .69444, 0, 0], 933: [0, .69444, 0, 0], 934: [0, .69444, 0, 0], 936: [0, .69444, 0, 0], 937: [0, .69444, 0, 0], 8211: [0, .44444, .02778, 0], 8212: [0, .44444, .02778, 0], 8216: [0, .69444, 0, 0], 8217: [0, .69444, 0, 0], 8220: [0, .69444, 0, 0], 8221: [0, .69444, 0, 0] }, "Script-Regular": { 65: [0, .7, .22925, 0], 66: [0, .7, .04087, 0], 67: [0, .7, .1689, 0], 68: [0, .7, .09371, 0], 69: [0, .7, .18583, 0], 70: [0, .7, .13634, 0], 71: [0, .7, .17322, 0], 72: [0, .7, .29694, 0], 73: [0, .7, .19189, 0], 74: [.27778, .7, .19189, 0], 75: [0, .7, .31259, 0], 76: [0, .7, .19189, 0], 77: [0, .7, .15981, 0], 78: [0, .7, .3525, 0], 79: [0, .7, .08078, 0], 80: [0, .7, .08078, 0], 81: [0, .7, .03305, 0], 82: [0, .7, .06259, 0], 83: [0, .7, .19189, 0], 84: [0, .7, .29087, 0], 85: [0, .7, .25815, 0], 86: [0, .7, .27523, 0], 87: [0, .7, .27523, 0], 88: [0, .7, .26006, 0], 89: [0, .7, .2939, 0], 90: [0, .7, .24037, 0] }, "Size1-Regular": { 40: [.35001, .85, 0, 0], 41: [.35001, .85, 0, 0], 47: [.35001, .85, 0, 0], 91: [.35001, .85, 0, 0], 92: [.35001, .85, 0, 0], 93: [.35001, .85, 0, 0], 123: [.35001, .85, 0, 0], 125: [.35001, .85, 0, 0], 710: [0, .72222, 0, 0], 732: [0, .72222, 0, 0], 770: [0, .72222, 0, 0], 771: [0, .72222, 0, 0], 8214: [-99e-5, .601, 0, 0], 8593: [1e-5, .6, 0, 0], 8595: [1e-5, .6, 0, 0], 8657: [1e-5, .6, 0, 0], 8659: [1e-5, .6, 0, 0], 8719: [.25001, .75, 0, 0], 8720: [.25001, .75, 0, 0], 8721: [.25001, .75, 0, 0], 8730: [.35001, .85, 0, 0], 8739: [-.00599, .606, 0, 0], 8741: [-.00599, .606, 0, 0], 8747: [.30612, .805, .19445, 0], 8748: [.306, .805, .19445, 0], 8749: [.306, .805, .19445, 0], 8750: [.30612, .805, .19445, 0], 8896: [.25001, .75, 0, 0], 8897: [.25001, .75, 0, 0], 8898: [.25001, .75, 0, 0], 8899: [.25001, .75, 0, 0], 8968: [.35001, .85, 0, 0], 8969: [.35001, .85, 0, 0], 8970: [.35001, .85, 0, 0], 8971: [.35001, .85, 0, 0], 9168: [-99e-5, .601, 0, 0], 10216: [.35001, .85, 0, 0], 10217: [.35001, .85, 0, 0], 10752: [.25001, .75, 0, 0], 10753: [.25001, .75, 0, 0], 10754: [.25001, .75, 0, 0], 10756: [.25001, .75, 0, 0], 10758: [.25001, .75, 0, 0] }, "Size2-Regular": { 40: [.65002, 1.15, 0, 0], 41: [.65002, 1.15, 0, 0], 47: [.65002, 1.15, 0, 0], 91: [.65002, 1.15, 0, 0], 92: [.65002, 1.15, 0, 0], 93: [.65002, 1.15, 0, 0], 123: [.65002, 1.15, 0, 0], 125: [.65002, 1.15, 0, 0], 710: [0, .75, 0, 0], 732: [0, .75, 0, 0], 770: [0, .75, 0, 0], 771: [0, .75, 0, 0], 8719: [.55001, 1.05, 0, 0], 8720: [.55001, 1.05, 0, 0], 8721: [.55001, 1.05, 0, 0], 8730: [.65002, 1.15, 0, 0], 8747: [.86225, 1.36, .44445, 0], 8748: [.862, 1.36, .44445, 0], 8749: [.862, 1.36, .44445, 0], 8750: [.86225, 1.36, .44445, 0], 8896: [.55001, 1.05, 0, 0], 8897: [.55001, 1.05, 0, 0], 8898: [.55001, 1.05, 0, 0], 8899: [.55001, 1.05, 0, 0], 8968: [.65002, 1.15, 0, 0], 8969: [.65002, 1.15, 0, 0], 8970: [.65002, 1.15, 0, 0], 8971: [.65002, 1.15, 0, 0], 10216: [.65002, 1.15, 0, 0], 10217: [.65002, 1.15, 0, 0], 10752: [.55001, 1.05, 0, 0], 10753: [.55001, 1.05, 0, 0], 10754: [.55001, 1.05, 0, 0], 10756: [.55001, 1.05, 0, 0], 10758: [.55001, 1.05, 0, 0] }, "Size3-Regular": { 40: [.95003, 1.45, 0, 0], 41: [.95003, 1.45, 0, 0], 47: [.95003, 1.45, 0, 0], 91: [.95003, 1.45, 0, 0], 92: [.95003, 1.45, 0, 0], 93: [.95003, 1.45, 0, 0], 123: [.95003, 1.45, 0, 0], 125: [.95003, 1.45, 0, 0], 710: [0, .75, 0, 0], 732: [0, .75, 0, 0], 770: [0, .75, 0, 0], 771: [0, .75, 0, 0], 8730: [.95003, 1.45, 0, 0], 8968: [.95003, 1.45, 0, 0], 8969: [.95003, 1.45, 0, 0], 8970: [.95003, 1.45, 0, 0], 8971: [.95003, 1.45, 0, 0], 10216: [.95003, 1.45, 0, 0], 10217: [.95003, 1.45, 0, 0] }, "Size4-Regular": { 40: [1.25003, 1.75, 0, 0], 41: [1.25003, 1.75, 0, 0], 47: [1.25003, 1.75, 0, 0], 91: [1.25003, 1.75, 0, 0], 92: [1.25003, 1.75, 0, 0], 93: [1.25003, 1.75, 0, 0], 123: [1.25003, 1.75, 0, 0], 125: [1.25003, 1.75, 0, 0], 710: [0, .825, 0, 0], 732: [0, .825, 0, 0], 770: [0, .825, 0, 0], 771: [0, .825, 0, 0], 8730: [1.25003, 1.75, 0, 0], 8968: [1.25003, 1.75, 0, 0], 8969: [1.25003, 1.75, 0, 0], 8970: [1.25003, 1.75, 0, 0], 8971: [1.25003, 1.75, 0, 0], 9115: [.64502, 1.155, 0, 0], 9116: [1e-5, .6, 0, 0], 9117: [.64502, 1.155, 0, 0], 9118: [.64502, 1.155, 0, 0], 9119: [1e-5, .6, 0, 0], 9120: [.64502, 1.155, 0, 0], 9121: [.64502, 1.155, 0, 0], 9122: [-99e-5, .601, 0, 0], 9123: [.64502, 1.155, 0, 0], 9124: [.64502, 1.155, 0, 0], 9125: [-99e-5, .601, 0, 0], 9126: [.64502, 1.155, 0, 0], 9127: [1e-5, .9, 0, 0], 9128: [.65002, 1.15, 0, 0], 9129: [.90001, 0, 0, 0], 9130: [0, .3, 0, 0], 9131: [1e-5, .9, 0, 0], 9132: [.65002, 1.15, 0, 0], 9133: [.90001, 0, 0, 0], 9143: [.88502, .915, 0, 0], 10216: [1.25003, 1.75, 0, 0], 10217: [1.25003, 1.75, 0, 0], 57344: [-.00499, .605, 0, 0], 57345: [-.00499, .605, 0, 0], 57680: [0, .12, 0, 0], 57681: [0, .12, 0, 0], 57682: [0, .12, 0, 0], 57683: [0, .12, 0, 0] }, "Typewriter-Regular": { 33: [0, .61111, 0, 0], 34: [0, .61111, 0, 0], 35: [0, .61111, 0, 0], 36: [.08333, .69444, 0, 0], 37: [.08333, .69444, 0, 0], 38: [0, .61111, 0, 0], 39: [0, .61111, 0, 0], 40: [.08333, .69444, 0, 0], 41: [.08333, .69444, 0, 0], 42: [0, .52083, 0, 0], 43: [-.08056, .53055, 0, 0], 44: [.13889, .125, 0, 0], 45: [-.08056, .53055, 0, 0], 46: [0, .125, 0, 0], 47: [.08333, .69444, 0, 0], 48: [0, .61111, 0, 0], 49: [0, .61111, 0, 0], 50: [0, .61111, 0, 0], 51: [0, .61111, 0, 0], 52: [0, .61111, 0, 0], 53: [0, .61111, 0, 0], 54: [0, .61111, 0, 0], 55: [0, .61111, 0, 0], 56: [0, .61111, 0, 0], 57: [0, .61111, 0, 0], 58: [0, .43056, 0, 0], 59: [.13889, .43056, 0, 0], 60: [-.05556, .55556, 0, 0], 61: [-.19549, .41562, 0, 0], 62: [-.05556, .55556, 0, 0], 63: [0, .61111, 0, 0], 64: [0, .61111, 0, 0], 65: [0, .61111, 0, 0], 66: [0, .61111, 0, 0], 67: [0, .61111, 0, 0], 68: [0, .61111, 0, 0], 69: [0, .61111, 0, 0], 70: [0, .61111, 0, 0], 71: [0, .61111, 0, 0], 72: [0, .61111, 0, 0], 73: [0, .61111, 0, 0], 74: [0, .61111, 0, 0], 75: [0, .61111, 0, 0], 76: [0, .61111, 0, 0], 77: [0, .61111, 0, 0], 78: [0, .61111, 0, 0], 79: [0, .61111, 0, 0], 80: [0, .61111, 0, 0], 81: [.13889, .61111, 0, 0], 82: [0, .61111, 0, 0], 83: [0, .61111, 0, 0], 84: [0, .61111, 0, 0], 85: [0, .61111, 0, 0], 86: [0, .61111, 0, 0], 87: [0, .61111, 0, 0], 88: [0, .61111, 0, 0], 89: [0, .61111, 0, 0], 90: [0, .61111, 0, 0], 91: [.08333, .69444, 0, 0], 92: [.08333, .69444, 0, 0], 93: [.08333, .69444, 0, 0], 94: [0, .61111, 0, 0], 95: [.09514, 0, 0, 0], 96: [0, .61111, 0, 0], 97: [0, .43056, 0, 0], 98: [0, .61111, 0, 0], 99: [0, .43056, 0, 0], 100: [0, .61111, 0, 0], 101: [0, .43056, 0, 0], 102: [0, .61111, 0, 0], 103: [.22222, .43056, 0, 0], 104: [0, .61111, 0, 0], 105: [0, .61111, 0, 0], 106: [.22222, .61111, 0, 0], 107: [0, .61111, 0, 0], 108: [0, .61111, 0, 0], 109: [0, .43056, 0, 0], 110: [0, .43056, 0, 0], 111: [0, .43056, 0, 0], 112: [.22222, .43056, 0, 0], 113: [.22222, .43056, 0, 0], 114: [0, .43056, 0, 0], 115: [0, .43056, 0, 0], 116: [0, .55358, 0, 0], 117: [0, .43056, 0, 0], 118: [0, .43056, 0, 0], 119: [0, .43056, 0, 0], 120: [0, .43056, 0, 0], 121: [.22222, .43056, 0, 0], 122: [0, .43056, 0, 0], 123: [.08333, .69444, 0, 0], 124: [.08333, .69444, 0, 0], 125: [.08333, .69444, 0, 0], 126: [0, .61111, 0, 0], 127: [0, .61111, 0, 0], 305: [0, .43056, 0, 0], 567: [.22222, .43056, 0, 0], 768: [0, .61111, 0, 0], 769: [0, .61111, 0, 0], 770: [0, .61111, 0, 0], 771: [0, .61111, 0, 0], 772: [0, .56555, 0, 0], 774: [0, .61111, 0, 0], 776: [0, .61111, 0, 0], 778: [0, .61111, 0, 0], 780: [0, .56597, 0, 0], 915: [0, .61111, 0, 0], 916: [0, .61111, 0, 0], 920: [0, .61111, 0, 0], 923: [0, .61111, 0, 0], 926: [0, .61111, 0, 0], 928: [0, .61111, 0, 0], 931: [0, .61111, 0, 0], 933: [0, .61111, 0, 0], 934: [0, .61111, 0, 0], 936: [0, .61111, 0, 0], 937: [0, .61111, 0, 0], 2018: [0, .61111, 0, 0], 2019: [0, .61111, 0, 0], 8216: [0, .61111, 0, 0], 8217: [0, .61111, 0, 0], 8242: [0, .61111, 0, 0], 9251: [.11111, .21944, 0, 0] } };r.default = a;
    }, {}], 103: [function (e, t, r) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: true });var a = e("./utils");var n = c(a);var i = e("./ParseError");var l = c(i);var o = e("./ParseNode");var u = c(o);var s = e("./defineFunction");var f = c(s);e("./functions/phantom");e("./functions/operators");e("./functions/delimsizing");function c(e) {
        return e && e.__esModule ? e : { default: e };
      }var d = s._functions;r.default = d;var v = function e(t, r, a) {
        (0, f.default)({ names: t, props: r, handler: a });
      };v(["\\sqrt"], { numArgs: 1, numOptionalArgs: 1 }, function (e, t, r) {
        var a = r[0];var n = t[0];return { type: "sqrt", body: n, index: a };
      });var h = { "\\text": undefined, "\\textrm": "mathrm", "\\textsf": "mathsf", "\\texttt": "mathtt", "\\textnormal": "mathrm", "\\textbf": "mathbf", "\\textit": "textit" };v(["\\text", "\\textrm", "\\textsf", "\\texttt", "\\textnormal", "\\textbf", "\\textit"], { numArgs: 1, argTypes: ["text"], greediness: 2, allowedInText: true }, function (e, t) {
        var r = t[0];return { type: "text", body: (0, s.ordargument)(r), font: h[e.funcName] };
      });v(["\\textcolor"], { numArgs: 2, allowedInText: true, greediness: 3, argTypes: ["color", "original"] }, function (e, t) {
        var r = t[0];var a = t[1];return { type: "color", color: r.value, value: (0, s.ordargument)(a) };
      });v(["\\color"], { numArgs: 1, allowedInText: true, greediness: 3, argTypes: ["color"] }, null);v(["\\colorbox"], { numArgs: 2, allowedInText: true, greediness: 3, argTypes: ["color", "text"] }, function (e, t) {
        var r = t[0];var a = t[1];return { type: "enclose", label: e.funcName, backgroundColor: r, body: a };
      });v(["\\fcolorbox"], { numArgs: 3, allowedInText: true, greediness: 3, argTypes: ["color", "color", "text"] }, function (e, t) {
        var r = t[0];var a = t[1];var n = t[2];return { type: "enclose", label: e.funcName, backgroundColor: a, borderColor: r, body: n };
      });v(["\\overline"], { numArgs: 1 }, function (e, t) {
        var r = t[0];return { type: "overline", body: r };
      });v(["\\underline"], { numArgs: 1 }, function (e, t) {
        var r = t[0];return { type: "underline", body: r };
      });v(["\\rule"], { numArgs: 2, numOptionalArgs: 1, argTypes: ["size", "size", "size"] }, function (e, t, r) {
        var a = r[0];var n = t[0];var i = t[1];return { type: "rule", shift: a && a.value, width: n.value, height: i.value };
      });v(["\\kern", "\\mkern"], { numArgs: 1, argTypes: ["size"] }, function (e, t) {
        return { type: "kern", dimension: t[0].value };
      });v(["\\KaTeX"], { numArgs: 0, allowedInText: true }, function (e) {
        return { type: "katex" };
      });v(["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"], { numArgs: 1 }, function (e, t) {
        var r = t[0];return { type: "mclass", mclass: "m" + e.funcName.substr(5), value: (0, s.ordargument)(r) };
      });v(["\\stackrel"], { numArgs: 2 }, function (e, t) {
        var r = t[0];var a = t[1];var n = new u.default("op", { type: "op", limits: true, alwaysHandleSupSub: true, symbol: false, value: (0, s.ordargument)(a) }, a.mode);var i = new u.default("supsub", { base: n, sup: r, sub: null }, r.mode);return { type: "mclass", mclass: "mrel", value: [i] };
      });v(["\\bmod"], { numArgs: 0 }, function (e, t) {
        return { type: "mod", modType: "bmod", value: null };
      });v(["\\pod", "\\pmod", "\\mod"], { numArgs: 1 }, function (e, t) {
        var r = t[0];return { type: "mod", modType: e.funcName.substr(1), value: (0, s.ordargument)(r) };
      });var p = { "\\Bbb": "\\mathbb", "\\bold": "\\mathbf", "\\frak": "\\mathfrak" };v(["\\blue", "\\orange", "\\pink", "\\red", "\\green", "\\gray", "\\purple", "\\blueA", "\\blueB", "\\blueC", "\\blueD", "\\blueE", "\\tealA", "\\tealB", "\\tealC", "\\tealD", "\\tealE", "\\greenA", "\\greenB", "\\greenC", "\\greenD", "\\greenE", "\\goldA", "\\goldB", "\\goldC", "\\goldD", "\\goldE", "\\redA", "\\redB", "\\redC", "\\redD", "\\redE", "\\maroonA", "\\maroonB", "\\maroonC", "\\maroonD", "\\maroonE", "\\purpleA", "\\purpleB", "\\purpleC", "\\purpleD", "\\purpleE", "\\mintA", "\\mintB", "\\mintC", "\\grayA", "\\grayB", "\\grayC", "\\grayD", "\\grayE", "\\grayF", "\\grayG", "\\grayH", "\\grayI", "\\kaBlue", "\\kaGreen"], { numArgs: 1, allowedInText: true, greediness: 3 }, function (e, t) {
        var r = t[0];return { type: "color", color: "katex-" + e.funcName.slice(1), value: (0, s.ordargument)(r) };
      });v(["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"], { numArgs: 0 }, function (e) {
        return { type: "op", limits: false, symbol: false, body: e.funcName };
      });v(["\\det", "\\gcd", "\\inf", "\\lim", "\\liminf", "\\limsup", "\\max", "\\min", "\\Pr", "\\sup"], { numArgs: 0 }, function (e) {
        return { type: "op", limits: true, symbol: false, body: e.funcName };
      });v(["\\int", "\\iint", "\\iiint", "\\oint"], { numArgs: 0 }, function (e) {
        return { type: "op", limits: false, symbol: true, body: e.funcName };
      });v(["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint"], { numArgs: 0 }, function (e) {
        return { type: "op", limits: true, symbol: true, body: e.funcName };
      });v(["\\mathop"], { numArgs: 1 }, function (e, t) {
        var r = t[0];return { type: "op", limits: false, symbol: false, value: (0, s.ordargument)(r) };
      });v(["\\dfrac", "\\frac", "\\tfrac", "\\dbinom", "\\binom", "\\tbinom", "\\\\atopfrac"], { numArgs: 2, greediness: 2 }, function (e, t) {
        var r = t[0];var a = t[1];var n = void 0;var i = null;var l = null;var o = "auto";switch (e.funcName) {case "\\dfrac":case "\\frac":case "\\tfrac":
            n = true;break;case "\\\\atopfrac":
            n = false;break;case "\\dbinom":case "\\binom":case "\\tbinom":
            n = false;i = "(";l = ")";break;default:
            throw new Error("Unrecognized genfrac command");}switch (e.funcName) {case "\\dfrac":case "\\dbinom":
            o = "display";break;case "\\tfrac":case "\\tbinom":
            o = "text";break;}return { type: "genfrac", numer: r, denom: a, hasBarLine: n, leftDelim: i, rightDelim: l, size: o };
      });v(["\\mathllap", "\\mathrlap", "\\mathclap"], { numArgs: 1, allowedInText: true }, function (e, t) {
        var r = t[0];return { type: "lap", alignment: e.funcName.slice(5), body: r };
      });v(["\\smash"], { numArgs: 1, numOptionalArgs: 1, allowedInText: true }, function (e, t, r) {
        var a = false;var n = false;var i = r[0];if (i) {
          var l = "";for (var o = 0; o < i.value.length; ++o) {
            l = i.value[o].value;if (l === "t") {
              a = true;
            } else if (l === "b") {
              n = true;
            } else {
              a = false;n = false;break;
            }
          }
        } else {
          a = true;n = true;
        }var u = t[0];return { type: "smash", body: u, smashHeight: a, smashDepth: n };
      });v(["\\tiny", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], { numArgs: 0 }, null);v(["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"], { numArgs: 0 }, null);v(["\\rm", "\\sf", "\\tt", "\\bf", "\\it"], { numArgs: 0 }, null);v(["\\mathrm", "\\mathit", "\\mathbf", "\\mathbb", "\\mathcal", "\\mathfrak", "\\mathscr", "\\mathsf", "\\mathtt", "\\Bbb", "\\bold", "\\frak"], { numArgs: 1, greediness: 2 }, function (e, t) {
        var r = t[0];var a = e.funcName;if (a in p) {
          a = p[a];
        }return { type: "font", font: a.slice(1), body: r };
      });v(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"], { numArgs: 1 }, function (e, t) {
        var r = t[0];var a = !n.default.contains(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot"], e.funcName);var i = !a || n.default.contains(["\\widehat", "\\widetilde"], e.funcName);return { type: "accent", label: e.funcName, isStretchy: a, isShifty: i, base: r };
      });v(["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\r", "\\H", "\\v"], { numArgs: 1, allowedInText: true, allowedInMath: false }, function (e, t) {
        var r = t[0];return { type: "accent", label: e.funcName, isStretchy: false, isShifty: true, base: r };
      });v(["\\overbrace", "\\underbrace"], { numArgs: 1 }, function (e, t) {
        var r = t[0];return { type: "horizBrace", label: e.funcName, isOver: /^\\over/.test(e.funcName), base: r };
      });v(["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\undertilde"], { numArgs: 1 }, function (e, t) {
        var r = t[0];return { type: "accentUnder", label: e.funcName, base: r };
      });v(["\\xleftarrow", "\\xrightarrow", "\\xLeftarrow", "\\xRightarrow", "\\xleftrightarrow", "\\xLeftrightarrow", "\\xhookleftarrow", "\\xhookrightarrow", "\\xmapsto", "\\xrightharpoondown", "\\xrightharpoonup", "\\xleftharpoondown", "\\xleftharpoonup", "\\xrightleftharpoons", "\\xleftrightharpoons", "\\xLongequal", "\\xtwoheadrightarrow", "\\xtwoheadleftarrow", "\\xLongequal", "\\xtofrom"], { numArgs: 1, numOptionalArgs: 1 }, function (e, t, r) {
        var a = r[0];var n = t[0];return { type: "xArrow", label: e.funcName, body: n, below: a };
      });v(["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\fbox"], { numArgs: 1 }, function (e, t) {
        var r = t[0];return { type: "enclose", label: e.funcName, body: r };
      });v(["\\over", "\\choose", "\\atop"], { numArgs: 0, infix: true }, function (e) {
        var t = void 0;switch (e.funcName) {case "\\over":
            t = "\\frac";break;case "\\choose":
            t = "\\binom";break;case "\\atop":
            t = "\\\\atopfrac";break;default:
            throw new Error("Unrecognized infix genfrac command");}return { type: "infix", replaceWith: t, token: e.token };
      });v(["\\\\", "\\cr"], { numArgs: 0, numOptionalArgs: 1, argTypes: ["size"] }, function (e, t, r) {
        var a = r[0];return { type: "cr", size: a };
      });v(["\\begin", "\\end"], { numArgs: 1, argTypes: ["text"] }, function (e, t) {
        var r = t[0];if (r.type !== "ordgroup") {
          throw new l.default("Invalid environment name", r);
        }var a = "";for (var n = 0; n < r.value.length; ++n) {
          a += r.value[n].value;
        }return { type: "environment", name: a, nameGroup: r };
      });v(["\\raisebox"], { numArgs: 2, argTypes: ["size", "text"], allowedInText: true }, function (e, t) {
        var r = t[0];var a = t[1];return { type: "raisebox", dy: r, body: a, value: (0, s.ordargument)(a) };
      });v(["\\verb"], { numArgs: 0, allowedInText: true }, function (e) {
        throw new l.default("\\verb ended by end of line instead of matching delimiter");
      });
    }, { "./ParseError": 84, "./ParseNode": 85, "./defineFunction": 96, "./functions/delimsizing": 104, "./functions/operators": 105, "./functions/phantom": 106, "./utils": 115 }], 104: [function (e, t, r) {
      "use strict";
      var a = e("../buildCommon");var n = x(a);var i = e("../defineFunction");var l = x(i);var o = e("../delimiter");var u = x(o);var s = e("../mathMLTree");var f = x(s);var c = e("../ParseError");var d = x(c);var v = e("../utils");var h = x(v);var p = e("../buildHTML");var m = y(p);var g = e("../buildMathML");var b = y(g);function y(e) {
        if (e && e.__esModule) {
          return e;
        } else {
          var t = {};if (e != null) {
            for (var r in e) {
              if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
            }
          }t.default = e;return t;
        }
      }function x(e) {
        return e && e.__esModule ? e : { default: e };
      }var w = { "\\bigl": { mclass: "mopen", size: 1 }, "\\Bigl": { mclass: "mopen", size: 2 }, "\\biggl": { mclass: "mopen", size: 3 }, "\\Biggl": { mclass: "mopen", size: 4 }, "\\bigr": { mclass: "mclose", size: 1 }, "\\Bigr": { mclass: "mclose", size: 2 }, "\\biggr": { mclass: "mclose", size: 3 }, "\\Biggr": { mclass: "mclose", size: 4 }, "\\bigm": { mclass: "mrel", size: 1 }, "\\Bigm": { mclass: "mrel", size: 2 }, "\\biggm": { mclass: "mrel", size: 3 }, "\\Biggm": { mclass: "mrel", size: 4 }, "\\big": { mclass: "mord", size: 1 }, "\\Big": { mclass: "mord", size: 2 }, "\\bigg": { mclass: "mord", size: 3 }, "\\Bigg": { mclass: "mord", size: 4 } };var k = ["(", ")", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\\lceil", "\\rceil", "<", ">", "\\langle", "\\rangle", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\\lmoustache", "\\rmoustache", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];function M(e, t) {
        if (h.default.contains(k, e.value)) {
          return e;
        } else {
          throw new d.default("Invalid delimiter: '" + e.value + "' after '" + t.funcName + "'", e);
        }
      }(0, l.default)({ type: "delimsizing", names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"], props: { numArgs: 1 }, handler: function e(t, r) {
          var a = M(r[0], t);return { type: "delimsizing", size: w[t.funcName].size, mclass: w[t.funcName].mclass, value: a.value };
        }, htmlBuilder: function e(t, r) {
          var a = t.value.value;if (a === ".") {
            return n.default.makeSpan([t.value.mclass]);
          }return u.default.sizedDelim(a, t.value.size, r, t.mode, [t.value.mclass]);
        }, mathmlBuilder: function e(t) {
          var r = [];if (t.value.value !== ".") {
            r.push(b.makeText(t.value.value, t.mode));
          }var a = new f.default.MathNode("mo", r);if (t.value.mclass === "mopen" || t.value.mclass === "mclose") {
            a.setAttribute("fence", "true");
          } else {
            a.setAttribute("fence", "false");
          }return a;
        } });(0, l.default)({ type: "leftright", names: ["\\left", "\\right"], props: { numArgs: 1 }, handler: function e(t, r) {
          var a = M(r[0], t);return { type: "leftright", value: a.value };
        }, htmlBuilder: function e(t, r) {
          var a = m.buildExpression(t.value.body, r, true);var i = 0;var l = 0;var o = false;for (var s = 0; s < a.length; s++) {
            if (a[s].isMiddle) {
              o = true;
            } else {
              i = Math.max(a[s].height, i);l = Math.max(a[s].depth, l);
            }
          }i *= r.sizeMultiplier;l *= r.sizeMultiplier;var f = void 0;if (t.value.left === ".") {
            f = m.makeNullDelimiter(r, ["mopen"]);
          } else {
            f = u.default.leftRightDelim(t.value.left, i, l, r, t.mode, ["mopen"]);
          }a.unshift(f);if (o) {
            for (var c = 1; c < a.length; c++) {
              var d = a[c];if (d.isMiddle) {
                a[c] = u.default.leftRightDelim(d.isMiddle.value, i, l, d.isMiddle.options, t.mode, []);var v = m.spliceSpaces(d.children, 0);if (v) {
                  n.default.prependChildren(a[c], v);
                }
              }
            }
          }var h = void 0;if (t.value.right === ".") {
            h = m.makeNullDelimiter(r, ["mclose"]);
          } else {
            h = u.default.leftRightDelim(t.value.right, i, l, r, t.mode, ["mclose"]);
          }a.push(h);return n.default.makeSpan(["minner"], a, r);
        }, mathmlBuilder: function e(t, r) {
          var a = b.buildExpression(t.value.body, r);if (t.value.left !== ".") {
            var n = new f.default.MathNode("mo", [b.makeText(t.value.left, t.mode)]);n.setAttribute("fence", "true");a.unshift(n);
          }if (t.value.right !== ".") {
            var i = new f.default.MathNode("mo", [b.makeText(t.value.right, t.mode)]);i.setAttribute("fence", "true");a.push(i);
          }var l = new f.default.MathNode("mrow", a);return l;
        } });(0, l.default)({ type: "middle", names: ["\\middle"], props: { numArgs: 1 }, handler: function e(t, r) {
          var a = M(r[0], t);if (!t.parser.leftrightDepth) {
            throw new d.default("\\middle without preceding \\left", a);
          }return { type: "middle", value: a.value };
        }, htmlBuilder: function e(t, r) {
          var a = void 0;if (t.value.value === ".") {
            a = m.makeNullDelimiter(r, []);
          } else {
            a = u.default.sizedDelim(t.value.value, 1, r, t.mode, []);a.isMiddle = { value: t.value.value, options: r };
          }return a;
        }, mathmlBuilder: function e(t, r) {
          var a = new f.default.MathNode("mo", [b.makeText(t.value.middle, t.mode)]);a.setAttribute("fence", "true");return a;
        } });
    }, { "../ParseError": 84, "../buildCommon": 91, "../buildHTML": 92, "../buildMathML": 93, "../defineFunction": 96, "../delimiter": 97, "../mathMLTree": 108, "../utils": 115 }], 105: [function (e, t, r) {
      "use strict";
      var a = e("../defineFunction");var n = m(a);var i = e("../buildCommon");var l = m(i);var o = e("../mathMLTree");var u = m(o);var s = e("../domTree");var f = m(s);var c = e("../buildHTML");var d = p(c);var v = e("../buildMathML");var h = p(v);function p(e) {
        if (e && e.__esModule) {
          return e;
        } else {
          var t = {};if (e != null) {
            for (var r in e) {
              if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
            }
          }t.default = e;return t;
        }
      }function m(e) {
        return e && e.__esModule ? e : { default: e };
      }(0, n.default)({ type: "operatorname", names: ["\\operatorname"], props: { numArgs: 1 }, handler: function e(t, r) {
          var n = r[0];return { type: "operatorname", value: (0, a.ordargument)(n) };
        }, htmlBuilder: function e(t, r) {
          var a = [];if (t.value.value.length > 0) {
            var n = "";var i = "";var o = d.buildExpression(t.value.value, r, true);for (var u = 0; u < o.length; u++) {
              n = o[u].value;n = n.replace(/\u2212/, "-");n = n.replace(/\u2217/, "*");i = /[\u0391-\u03D7]/.test(n) ? "math" : "text";a.push(l.default.mathsym(n, i));
            }
          }return l.default.makeSpan(["mop"], a, r);
        }, mathmlBuilder: function e(t, r) {
          var a = [];if (t.value.value.length > 0) {
            var n = h.buildExpression(t.value.value, r);var i = "";for (var l = 0; l < n.length; l++) {
              i += n[l].children[0].text;
            }i = i.replace(/\u2212/g, "-");i = i.replace(/\u2217/g, "*");a = [new u.default.TextNode(i)];
          }var o = new u.default.MathNode("mi", a);o.setAttribute("mathvariant", "normal");var s = new u.default.MathNode("mo", [h.makeText("&ApplyFunction;", "text")]);return new f.default.documentFragment([o, s]);
        } });
    }, { "../buildCommon": 91, "../buildHTML": 92, "../buildMathML": 93, "../defineFunction": 96, "../domTree": 98, "../mathMLTree": 108 }], 106: [function (e, t, r) {
      "use strict";
      var a = e("../defineFunction");var n = h(a);var i = e("../buildCommon");var l = h(i);var o = e("../mathMLTree");var u = h(o);var s = e("../buildHTML");var f = v(s);var c = e("../buildMathML");var d = v(c);function v(e) {
        if (e && e.__esModule) {
          return e;
        } else {
          var t = {};if (e != null) {
            for (var r in e) {
              if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
            }
          }t.default = e;return t;
        }
      }function h(e) {
        return e && e.__esModule ? e : { default: e };
      }(0, n.default)({ type: "phantom", names: ["\\phantom"], props: { numArgs: 1 }, handler: function e(t, r) {
          var n = r[0];return { type: "phantom", value: (0, a.ordargument)(n) };
        }, htmlBuilder: function e(t, r) {
          var a = f.buildExpression(t.value.value, r.withPhantom(), false);return new l.default.makeFragment(a);
        }, mathmlBuilder: function e(t, r) {
          var a = d.buildExpression(t.value.value, r);return new u.default.MathNode("mphantom", a);
        } });(0, n.default)({ type: "hphantom", names: ["\\hphantom"], props: { numArgs: 1 }, handler: function e(t, r) {
          var n = r[0];return { type: "hphantom", value: (0, a.ordargument)(n), body: n };
        }, htmlBuilder: function e(t, r) {
          var a = l.default.makeSpan([], [f.buildGroup(t.value.body, r.withPhantom())]);a.height = 0;a.depth = 0;if (a.children) {
            for (var n = 0; n < a.children.length; n++) {
              a.children[n].height = 0;a.children[n].depth = 0;
            }
          }a = l.default.makeVList([{ type: "elem", elem: a }], "firstBaseline", null, r);return a;
        }, mathmlBuilder: function e(t, r) {
          var a = d.buildExpression(t.value.value, r);var n = new u.default.MathNode("mphantom", a);n.setAttribute("height", "0px");return n;
        } });(0, n.default)({ type: "vphantom", names: ["\\vphantom"], props: { numArgs: 1 }, handler: function e(t, r) {
          var n = r[0];return { type: "vphantom", value: (0, a.ordargument)(n), body: n };
        }, htmlBuilder: function e(t, r) {
          var a = l.default.makeSpan(["inner"], [f.buildGroup(t.value.body, r.withPhantom())]);var n = l.default.makeSpan(["fix"], []);return l.default.makeSpan(["mord", "rlap"], [a, n], r);
        }, mathmlBuilder: function e(t, r) {
          var a = d.buildExpression(t.value.value, r);var n = new u.default.MathNode("mphantom", a);n.setAttribute("width", "0px");return n;
        } });
    }, { "../buildCommon": 91, "../buildHTML": 92, "../buildMathML": 93, "../defineFunction": 96, "../mathMLTree": 108 }], 107: [function (e, t, r) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: true });var a = e("./symbols");var n = u(a);var i = e("./utils");var l = u(i);var o = e("./Token");function u(e) {
        return e && e.__esModule ? e : { default: e };
      }var s = {};r.default = s;function f(e, t) {
        s[e] = t;
      }f("\\bgroup", "{");f("\\egroup", "}");f("\\begingroup", "{");f("\\endgroup", "}");f("\\mkern", "\\kern");f("\\llap", "\\mathllap{\\textrm{#1}}");f("\\rlap", "\\mathrlap{\\textrm{#1}}");f("\\clap", "\\mathclap{\\textrm{#1}}");f("\\overset", "\\mathop{#2}\\limits^{#1}");f("\\underset", "\\mathop{#2}\\limits_{#1}");f("\\boxed", "\\fbox{\\displaystyle{#1}}");f("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");f("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");f("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");var c = { ",": "\\dotsc", "\\not": "\\dotsb", "+": "\\dotsb", "=": "\\dotsb", "<": "\\dotsb", ">": "\\dotsb", "-": "\\dotsb", "*": "\\dotsb", ":": "\\dotsb", "\\DOTSB": "\\dotsb", "\\coprod": "\\dotsb", "\\bigvee": "\\dotsb", "\\bigwedge": "\\dotsb", "\\biguplus": "\\dotsb", "\\bigcap": "\\dotsb", "\\bigcup": "\\dotsb", "\\prod": "\\dotsb", "\\sum": "\\dotsb", "\\bigotimes": "\\dotsb", "\\bigoplus": "\\dotsb", "\\bigodot": "\\dotsb", "\\bigsqcup": "\\dotsb", "\\implies": "\\dotsb", "\\impliedby": "\\dotsb", "\\And": "\\dotsb", "\\longrightarrow": "\\dotsb", "\\Longrightarrow": "\\dotsb", "\\longleftarrow": "\\dotsb", "\\Longleftarrow": "\\dotsb", "\\longleftrightarrow": "\\dotsb", "\\Longleftrightarrow": "\\dotsb", "\\mapsto": "\\dotsb", "\\longmapsto": "\\dotsb", "\\hookrightarrow": "\\dotsb", "\\iff": "\\dotsb", "\\doteq": "\\dotsb", "\\mathbin": "\\dotsb", "\\bmod": "\\dotsb", "\\mathrel": "\\dotsb", "\\relbar": "\\dotsb", "\\Relbar": "\\dotsb", "\\xrightarrow": "\\dotsb", "\\xleftarrow": "\\dotsb", "\\DOTSI": "\\dotsi", "\\int": "\\dotsi", "\\oint": "\\dotsi", "\\iint": "\\dotsi", "\\iiint": "\\dotsi", "\\iiiint": "\\dotsi", "\\idotsint": "\\dotsi", "\\DOTSX": "\\dotsx" };f("\\dots", function (e) {
        var t = "\\dotso";var r = e.expandAfterFuture().text;if (r in c) {
          t = c[r];
        } else if (r.substr(0, 4) === "\\not") {
          t = "\\dotsb";
        } else if (r in n.default.math) {
          if (l.default.contains(["bin", "rel"], n.default.math[r].group)) {
            t = "\\dotsb";
          }
        }return t;
      });var d = { ")": true, "]": true, "\\rbrack": true, "\\}": true, "\\rbrace": true, "\\rangle": true, "\\rceil": true, "\\rfloor": true, "\\rgroup": true, "\\rmoustache": true, "\\right": true, "\\bigr": true, "\\biggr": true, "\\Bigr": true, "\\Biggr": true, $: true, ";": true, ".": true, ",": true };f("\\dotso", function (e) {
        var t = e.future().text;if (t in d) {
          return "\\ldots\\,";
        } else {
          return "\\ldots";
        }
      });f("\\dotsc", function (e) {
        var t = e.future().text;if (t in d && t !== ",") {
          return "\\ldots\\,";
        } else {
          return "\\ldots";
        }
      });f("\\cdots", function (e) {
        var t = e.future().text;if (t in d) {
          return "\\@cdots\\,";
        } else {
          return "\\@cdots";
        }
      });f("\\dotsb", "\\cdots");f("\\dotsm", "\\cdots");f("\\dotsi", "\\!\\cdots");f("\\dotsx", "\\ldots\\,");f("\\DOTSI", "\\relax");f("\\DOTSB", "\\relax");f("\\DOTSX", "\\relax");f("\\thinspace", "\\,");f("\\medspace", "\\:");f("\\thickspace", "\\;");f("\\hspace", "\\kern{#1}");f("\\ordinarycolon", ":");f("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");f("\\dblcolon", "\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon");f("\\coloneqq", "\\vcentcolon\\mathrel{\\mkern-1.2mu}=");f("\\Coloneqq", "\\dblcolon\\mathrel{\\mkern-1.2mu}=");f("\\coloneq", "\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}");f("\\Coloneq", "\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}");f("\\eqqcolon", "=\\mathrel{\\mkern-1.2mu}\\vcentcolon");f("\\Eqqcolon", "=\\mathrel{\\mkern-1.2mu}\\dblcolon");f("\\eqcolon", "\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon");f("\\Eqcolon", "\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon");f("\\colonapprox", "\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx");f("\\Colonapprox", "\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx");f("\\colonsim", "\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim");f("\\Colonsim", "\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim");f("\\ratio", "\\vcentcolon");f("\\coloncolon", "\\dblcolon");f("\\colonequals", "\\coloneqq");f("\\coloncolonequals", "\\Coloneqq");f("\\equalscolon", "\\eqqcolon");f("\\equalscoloncolon", "\\Eqqcolon");f("\\colonminus", "\\coloneq");f("\\coloncolonminus", "\\Coloneq");f("\\minuscolon", "\\eqcolon");f("\\minuscoloncolon", "\\Eqcolon");f("\\coloncolonapprox", "\\Colonapprox");f("\\coloncolonsim", "\\Colonsim");f("\\simcolon", "\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon");f("\\simcoloncolon", "\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon");f("\\approxcolon", "\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon");f("\\approxcoloncolon", "\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon");
    }, { "./Token": 90, "./symbols": 112, "./utils": 115 }], 108: [function (e, t, r) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: true });var a = e("babel-runtime/helpers/classCallCheck");var n = s(a);var i = e("babel-runtime/helpers/createClass");var l = s(i);var o = e("./utils");var u = s(o);function s(e) {
        return e && e.__esModule ? e : { default: e };
      }var f = function () {
        function e(t, r) {
          (0, n.default)(this, e);this.type = t;this.attributes = {};this.children = r || [];
        }(0, l.default)(e, [{ key: "setAttribute", value: function e(t, r) {
            this.attributes[t] = r;
          } }, { key: "toNode", value: function e() {
            var t = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);for (var r in this.attributes) {
              if (Object.prototype.hasOwnProperty.call(this.attributes, r)) {
                t.setAttribute(r, this.attributes[r]);
              }
            }for (var a = 0; a < this.children.length; a++) {
              t.appendChild(this.children[a].toNode());
            }return t;
          } }, { key: "toMarkup", value: function e() {
            var t = "<" + this.type;for (var r in this.attributes) {
              if (Object.prototype.hasOwnProperty.call(this.attributes, r)) {
                t += " " + r + '="';t += u.default.escape(this.attributes[r]);t += '"';
              }
            }t += ">";for (var a = 0; a < this.children.length; a++) {
              t += this.children[a].toMarkup();
            }t += "</" + this.type + ">";return t;
          } }]);return e;
      }();var c = function () {
        function e(t) {
          (0, n.default)(this, e);this.text = t;
        }(0, l.default)(e, [{ key: "toNode", value: function e() {
            return document.createTextNode(this.text);
          } }, { key: "toMarkup", value: function e() {
            return u.default.escape(this.text);
          } }]);return e;
      }();r.default = { MathNode: f, TextNode: c };
    }, { "./utils": 115, "babel-runtime/helpers/classCallCheck": 8, "babel-runtime/helpers/createClass": 9 }], 109: [function (e, t, r) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: true });var a = e("./Parser");var n = i(a);function i(e) {
        return e && e.__esModule ? e : { default: e };
      }var l = function e(t, r) {
        if (!(typeof t === "string" || t instanceof String)) {
          throw new TypeError("KaTeX can only parse string typed expression");
        }var a = new n.default(t, r);return a.parse();
      };r.default = l;
    }, { "./Parser": 86 }], 110: [function (e, t, r) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: true });var a = e("babel-runtime/helpers/slicedToArray");var n = v(a);var i = e("./domTree");var l = v(i);var o = e("./buildCommon");var u = v(o);var s = e("./mathMLTree");var f = v(s);var c = e("./utils");var d = v(c);function v(e) {
        return e && e.__esModule ? e : { default: e };
      }var h = { widehat: "^", widetilde: "~", undertilde: "~", overleftarrow: "\u2190", underleftarrow: "\u2190", xleftarrow: "\u2190", overrightarrow: "\u2192", underrightarrow: "\u2192", xrightarrow: "\u2192", underbrace: "\u23B5", overbrace: "\u23DE", overleftrightarrow: "\u2194", underleftrightarrow: "\u2194", xleftrightarrow: "\u2194", Overrightarrow: "\u21D2", xRightarrow: "\u21D2", overleftharpoon: "\u21BC", xleftharpoonup: "\u21BC", overrightharpoon: "\u21C0", xrightharpoonup: "\u21C0", xLeftarrow: "\u21D0", xLeftrightarrow: "\u21D4", xhookleftarrow: "\u21A9", xhookrightarrow: "\u21AA", xmapsto: "\u21A6", xrightharpoondown: "\u21C1", xleftharpoondown: "\u21BD", xrightleftharpoons: "\u21CC", xleftrightharpoons: "\u21CB", xtwoheadleftarrow: "\u219E", xtwoheadrightarrow: "\u21A0", xLongequal: "=", xtofrom: "\u21C4" };var p = function e(t) {
        var r = new f.default.MathNode("mo", [new f.default.TextNode(h[t.substr(1)])]);r.setAttribute("stretchy", "true");return r;
      };var m = { overrightarrow: [["rightarrow"], .888, 522, "xMaxYMin"], overleftarrow: [["leftarrow"], .888, 522, "xMinYMin"], underrightarrow: [["rightarrow"], .888, 522, "xMaxYMin"], underleftarrow: [["leftarrow"], .888, 522, "xMinYMin"], xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"], xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"], Overrightarrow: [["doublerightarrow"], .888, 560, "xMaxYMin"], xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"], xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"], overleftharpoon: [["leftharpoon"], .888, 522, "xMinYMin"], xleftharpoonup: [["leftharpoon"], .888, 522, "xMinYMin"], xleftharpoondown: [["leftharpoondown"], .888, 522, "xMinYMin"], overrightharpoon: [["rightharpoon"], .888, 522, "xMaxYMin"], xrightharpoonup: [["rightharpoon"], .888, 522, "xMaxYMin"], xrightharpoondown: [["rightharpoondown"], .888, 522, "xMaxYMin"], xLongequal: [["longequal"], .888, 334, "xMinYMin"], xtwoheadleftarrow: [["twoheadleftarrow"], .888, 334, "xMinYMin"], xtwoheadrightarrow: [["twoheadrightarrow"], .888, 334, "xMaxYMin"], overleftrightarrow: [["leftarrow", "rightarrow"], .888, 522], overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548], underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548], underleftrightarrow: [["leftarrow", "rightarrow"], .888, 522], xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522], xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560], xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716], xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716], xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522], xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522], overlinesegment: [["leftlinesegment", "rightlinesegment"], .888, 522], underlinesegment: [["leftlinesegment", "rightlinesegment"], .888, 522], overgroup: [["leftgroup", "rightgroup"], .888, 342], undergroup: [["leftgroupunder", "rightgroupunder"], .888, 342], xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522], xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528] };var g = function e(t) {
        if (t.type === "ordgroup") {
          return t.value.length;
        } else {
          return 1;
        }
      };var b = function e(t, r) {
        var a = t.value.label.substr(1);var i = [];var o = void 0;var s = 4e5;var f = 0;var c = 0;var v = void 0;var h = void 0;var p = void 0;var b = void 0;var y = void 0;if (d.default.contains(["widehat", "widetilde", "undertilde"], a)) {
          var x = g(t.value.base);var w = void 0;if (x > 5) {
            w = a === "widehat" ? 420 : 312;s = a === "widehat" ? 2364 : 2340;o = a === "widehat" ? .42 : .34;p = (a === "widehat" ? "widehat" : "tilde") + "4";
          } else {
            var k = [1, 1, 2, 2, 3, 3][x];if (a === "widehat") {
              s = [0, 1062, 2364, 2364, 2364][k];w = [0, 239, 300, 360, 420][k];o = [0, .24, .3, .3, .36, .42][k];p = "widehat" + k;
            } else {
              s = [0, 600, 1033, 2339, 2340][k];w = [0, 260, 286, 306, 312][k];o = [0, .26, .286, .3, .306, .34][k];p = "tilde" + k;
            }
          }v = new l.default.pathNode(p);i.push(["width", "100%"]);i.push(["height", o + "em"]);i.push(["viewBox", "0 0 " + s + " " + w]);i.push(["preserveAspectRatio", "none"]);b = new l.default.svgNode([v], i);y = u.default.makeSpan([], [b], r);
        } else {
          var M = void 0;var _ = void 0;var z = [];var S = (0, n.default)(m[a], 4);h = S[0];c = S[1];f = S[2];_ = S[3];var T = h.length;o = f / 1e3;for (var A = 0; A < T; A++) {
            v = new l.default.pathNode(h[A]);i = [["width", "400em"], ["height", o + "em"]];i.push(["viewBox", "0 0 " + s + " " + f]);if (T === 2) {
              M = ["halfarrow-left", "halfarrow-right"][A];_ = ["xMinYMin", "xMaxYMin"][A];
            } else if (T === 3) {
              M = ["brace-left", "brace-center", "brace-right"][A];_ = ["xMinYMin", "xMidYMin", "xMaxYMin"][A];
            }i.push(["preserveAspectRatio", _ + " slice"]);b = new l.default.svgNode([v], i);if (T === 1) {
              y = u.default.makeSpan(["hide-tail"], [b], r);
            } else {
              y = u.default.makeSpan([M], [b], r);y.style.height = o + "em";z.push(y);
            }
          }if (T > 1) {
            y = u.default.makeSpan(["stretchy"], z, r);
          }
        }y.height = o;y.style.height = o + "em";if (c > 0) {
          y.style.minWidth = c + "em";
        }return y;
      };var y = function e(t, r, a, n) {
        var i = void 0;var o = t.height + t.depth + 2 * a;if (/(fbox)|(color)/.test(r)) {
          i = u.default.makeSpan(["stretchy", r], [], n);if (r === "fbox" && n.color) {
            i.style.borderColor = n.getColor();
          }
        } else {
          var s = [["x1", "0"]];var f = [];if (r !== "cancel") {
            s.push(["y1", "0"]);s.push(["x2", "100%"]);s.push(["y2", "100%"]);s.push(["stroke-width", "0.046em"]);f.push(new l.default.lineNode(s));
          }if (r === "xcancel") {
            s = [["x1", "0"]];
          }if (r !== "bcancel") {
            s.push(["y1", "100%"]);s.push(["x2", "100%"]);s.push(["y2", "0"]);s.push(["stroke-width", "0.046em"]);f.push(new l.default.lineNode(s));
          }s = [["width", "100%"], ["height", o + "em"]];var c = new l.default.svgNode(f, s);i = u.default.makeSpan([], [c], n);
        }i.height = o;i.style.height = o + "em";return i;
      };r.default = { encloseSpan: y, mathMLnode: p, svgSpan: b };
    }, { "./buildCommon": 91, "./domTree": 98, "./mathMLTree": 108, "./utils": 115, "babel-runtime/helpers/slicedToArray": 10 }], 111: [function (e, t, r) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: true });var a = { sqrtMain: "M95 622c-2.667 0-7.167-2.667-13.5\n-8S72 604 72 600c0-2 .333-3.333 1-4 1.333-2.667 23.833-20.667 67.5-54s\n65.833-50.333 66.5-51c1.333-1.333 3-2 5-2 4.667 0 8.667 3.333 12 10l173\n378c.667 0 35.333-71 104-213s137.5-285 206.5-429S812 17.333 812 14c5.333\n-9.333 12-14 20-14h399166v40H845.272L620 507 385 993c-2.667 4.667-9 7-19\n7-6 0-10-1-12-3L160 575l-65 47zM834 0h399166v40H845z", sqrtSize1: "M263 601c.667 0 18 39.667 52 119s68.167\n 158.667 102.5 238 51.833 119.333 52.5 120C810 373.333 980.667 17.667 982 11\nc4.667-7.333 11-11 19-11h398999v40H1012.333L741 607c-38.667 80.667-84 175-136\n 283s-89.167 185.333-111.5 232-33.833 70.333-34.5 71c-4.667 4.667-12.333 7-23\n 7l-12-1-109-253c-72.667-168-109.333-252-110-252-10.667 8-22 16.667-34 26-22\n 17.333-33.333 26-34 26l-26-26 76-59 76-60zM1001 0h398999v40H1012z", sqrtSize2: "M1001 0h398999v40H1013.084S929.667 308 749\n 880s-277 876.333-289 913c-4.667 4.667-12.667 7-24 7h-12c-1.333-3.333-3.667\n-11.667-7-25-35.333-125.333-106.667-373.333-214-744-10 12-21 25-33 39l-32 39\nc-6-5.333-15-14-27-26l25-30c26.667-32.667 52-63 76-91l52-60 208 722c56-175.333\n 126.333-397.333 211-666s153.833-488.167 207.5-658.5C944.167 129.167 975 32.667\n 983 10c4-6.667 10-10 18-10zm0 0h398999v40H1013z", sqrtSize3: "M424 2398c-1.333-.667-38.5-172-111.5-514 S202.667 1370.667 202\n 1370c0-2-10.667 14.333-32 49-4.667 7.333-9.833 15.667-15.5 25s-9.833 16-12.5\n 20l-5 7c-4-3.333-8.333-7.667-13-13l-13-13 76-122 77-121 209 968c0-2 84.667\n-361.667 254-1079C896.333 373.667 981.667 13.333 983 10c4-6.667 10-10 18-10\nh398999v40H1014.622S927.332 418.667 742 1206c-185.333 787.333-279.333 1182.333\n-282 1185-2 6-10 9-24 9-8 0-12-.667-12-2zM1001 0h398999v40H1014z", sqrtSize4: "M473 2713C812.333 913.667 982.333 13 983 11c3.333-7.333 9.333\n-11 18-11h399110v40H1017.698S927.168 518 741.5 1506C555.833 2494 462 2989 460\n 2991c-2 6-10 9-24 9-8 0-12-.667-12-2s-5.333-32-16-92c-50.667-293.333-119.667\n-693.333-207-1200 0-1.333-5.333 8.667-16 30l-32 64-16 33-26-26 76-153 77-151\nc.667.667 35.667 202 105 604 67.333 400.667 102 602.667 104 606z\nM1001 0h398999v40H1017z", doubleleftarrow: "M262 157\nl10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3\n 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28\n 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5\nc2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5\n 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87\n-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7\n-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z\nm8 0v40h399730v-40zm0 194v40h399730v-40z", doublerightarrow: "M399738 392l\n-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5\n 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88\n-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68\n-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18\n-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782\nc-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3\n-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z", leftarrow: "M400000 241H110l3-3c68.7-52.7 113.7-120\n 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8\n-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247\nc-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208\n 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3\n 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202\n l-3-3h399890zM100 241v40h399900v-40z", leftbrace: "M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117\n-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7\n 5-6 9-10 13-.7 1-7.3 1-20 1H6z", leftbraceunder: "M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13\n 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688\n 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7\n-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z", leftgroup: "M400000 80\nH435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0\n 435 0h399565z", leftgroupunder: "M400000 262\nH435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219\n 435 219h399565z", leftharpoon: "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3\n-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5\n-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7\n-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z", leftharpoonplus: "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5\n 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3\n-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7\n-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z\nm0 0v40h400000v-40z", leftharpoondown: "M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333\n 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5\n 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667\n-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z", leftharpoondownplus: "M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12\n 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7\n-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0\nv40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z", lefthook: "M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5\n-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3\n-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21\n 71.5 23h399859zM103 281v-40h399897v40z", leftlinesegment: "M40 281 V428 H0 V94 H40 V241 H400000 v40z\nM40 281 V428 H0 V94 H40 V241 H400000 v40z", leftmapsto: "M40 281 V448H0V74H40V241H400000v40z\nM40 281 V448H0V74H40V241H400000v40z", leftToFrom: "M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23\n-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8\nc28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3\n 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z", longequal: "M0 50 h400000 v40H0z m0 194h40000v40H0z\nM0 50 h400000 v40H0z m0 194h40000v40H0z", midbrace: "M200428 334\nc-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14\n-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7\n 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11\n 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z", midbraceunder: "M199572 214\nc100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14\n 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3\n 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0\n-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z", rightarrow: "M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z", rightbrace: "M400000 542l\n-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5\ns-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1\nc124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z", rightbraceunder: "M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3\n 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237\n-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z", rightgroup: "M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0\n 3-1 3-3v-38c-76-158-257-219-435-219H0z", rightgroupunder: "M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18\n 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z", rightharpoon: "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3\n-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2\n-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58\n 69.2 92 94.5zm0 0v40h399900v-40z", rightharpoonplus: "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11\n-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7\n 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z\nm0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z", rightharpoondown: "M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8\n 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5\n-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95\n-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z", rightharpoondownplus: "M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8\n 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3\n 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3\n-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z\nm0-194v40h400000v-40zm0 0v40h400000v-40z", righthook: "M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3\n 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0\n-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21\n 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z", rightlinesegment: "M399960 241 V94 h40 V428 h-40 V281 H0 v-40z\nM399960 241 V94 h40 V428 h-40 V281 H0 v-40z", rightToFrom: "M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23\n 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32\n-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142\n-167z M100 147v40h399900v-40zM0 341v40h399900v-40z", twoheadleftarrow: "M0 167c68 40\n 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69\n-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3\n-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19\n-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101\n 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z", twoheadrightarrow: "M400000 167\nc-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3\n 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42\n 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333\n-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70\n 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z", tilde1: "M200 55.538c-77 0-168 73.953-177 73.953-3 0-7\n-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0\n 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0\n 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128\n-68.267.847-113-73.952-191-73.952z", tilde2: "M344 55.266c-142 0-300.638 81.316-311.5 86.418\n-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9\n 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114\nc1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751\n 181.476 676 181.476c-149 0-189-126.21-332-126.21z", tilde3: "M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457\n-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0\n 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697\n 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696\n -338 0-409-156.573-744-156.573z", tilde4: "M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345\n-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409\n 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9\n 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409\n -175.236-744-175.236z", widehat1: "M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22\nc-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z", widehat2: "M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z", widehat3: "M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z", widehat4: "M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z" };r.default = { path: a };
    }, {}], 112: [function (e, t, r) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: true });var a = { math: {}, text: {} };r.default = a;function n(e, t, r, n, i, l) {
        a[e][i] = { font: t, group: r, replace: n };if (l && n) {
          a[e][n] = a[e][i];
        }
      }var i = "math";var l = "text";var o = "main";var u = "ams";var s = "accent";var f = "bin";var c = "close";var d = "inner";var v = "mathord";var h = "op";var p = "open";var m = "punct";var g = "rel";var b = "spacing";var y = "textord";n(i, o, g, "\u2261", "\\equiv");n(i, o, g, "\u227A", "\\prec");n(i, o, g, "\u227B", "\\succ");n(i, o, g, "\u223C", "\\sim");n(i, o, g, "\u22A5", "\\perp");n(i, o, g, "\u2AAF", "\\preceq");n(i, o, g, "\u2AB0", "\\succeq");n(i, o, g, "\u2243", "\\simeq");n(i, o, g, "\u2223", "\\mid");n(i, o, g, "\u226A", "\\ll");n(i, o, g, "\u226B", "\\gg");n(i, o, g, "\u224D", "\\asymp");n(i, o, g, "\u2225", "\\parallel");n(i, o, g, "\u22C8", "\\bowtie");n(i, o, g, "\u2323", "\\smile");n(i, o, g, "\u2291", "\\sqsubseteq");
      n(i, o, g, "\u2292", "\\sqsupseteq");n(i, o, g, "\u2250", "\\doteq");n(i, o, g, "\u2322", "\\frown");n(i, o, g, "\u220B", "\\ni");n(i, o, g, "\u221D", "\\propto");n(i, o, g, "\u22A2", "\\vdash");n(i, o, g, "\u22A3", "\\dashv");n(i, o, g, "\u220B", "\\owns");n(i, o, m, ".", "\\ldotp");n(i, o, m, "\u22C5", "\\cdotp");n(i, o, y, "#", "\\#");n(l, o, y, "#", "\\#");n(i, o, y, "&", "\\&");n(l, o, y, "&", "\\&");n(i, o, y, "\u2135", "\\aleph");n(i, o, y, "\u2200", "\\forall");n(i, o, y, "\u210F", "\\hbar");n(i, o, y, "\u2203", "\\exists");n(i, o, y, "\u2207", "\\nabla");n(i, o, y, "\u266D", "\\flat");n(i, o, y, "\u2113", "\\ell");n(i, o, y, "\u266E", "\\natural");n(i, o, y, "\u2663", "\\clubsuit");n(i, o, y, "\u2118", "\\wp");n(i, o, y, "\u266F", "\\sharp");n(i, o, y, "\u2662", "\\diamondsuit");n(i, o, y, "\u211C", "\\Re");n(i, o, y, "\u2661", "\\heartsuit");n(i, o, y, "\u2111", "\\Im");n(i, o, y, "\u2660", "\\spadesuit");n(i, o, y, "\u2020", "\\dag");n(l, o, y, "\u2020", "\\dag");n(l, o, y, "\u2020", "\\textdagger");n(i, o, y, "\u2021", "\\ddag");n(l, o, y, "\u2021", "\\ddag");n(l, o, y, "\u2020", "\\textdaggerdbl");n(i, o, c, "\u23B1", "\\rmoustache");n(i, o, p, "\u23B0", "\\lmoustache");n(i, o, c, "\u27EF", "\\rgroup");n(i, o, p, "\u27EE", "\\lgroup");n(i, o, f, "\u2213", "\\mp");n(i, o, f, "\u2296", "\\ominus");n(i, o, f, "\u228E", "\\uplus");n(i, o, f, "\u2293", "\\sqcap");n(i, o, f, "\u2217", "\\ast");n(i, o, f, "\u2294", "\\sqcup");n(i, o, f, "\u25EF", "\\bigcirc");n(i, o, f, "\u2219", "\\bullet");n(i, o, f, "\u2021", "\\ddagger");n(i, o, f, "\u2240", "\\wr");n(i, o, f, "\u2A3F", "\\amalg");n(i, o, f, "&", "\\And");n(i, o, g, "\u27F5", "\\longleftarrow");n(i, o, g, "\u21D0", "\\Leftarrow");n(i, o, g, "\u27F8", "\\Longleftarrow");n(i, o, g, "\u27F6", "\\longrightarrow");n(i, o, g, "\u21D2", "\\Rightarrow");n(i, o, g, "\u27F9", "\\Longrightarrow");n(i, o, g, "\u2194", "\\leftrightarrow");n(i, o, g, "\u27F7", "\\longleftrightarrow");n(i, o, g, "\u21D4", "\\Leftrightarrow");n(i, o, g, "\u27FA", "\\Longleftrightarrow");n(i, o, g, "\u21A6", "\\mapsto");n(i, o, g, "\u27FC", "\\longmapsto");n(i, o, g, "\u2197", "\\nearrow");n(i, o, g, "\u21A9", "\\hookleftarrow");n(i, o, g, "\u21AA", "\\hookrightarrow");n(i, o, g, "\u2198", "\\searrow");n(i, o, g, "\u21BC", "\\leftharpoonup");n(i, o, g, "\u21C0", "\\rightharpoonup");n(i, o, g, "\u2199", "\\swarrow");n(i, o, g, "\u21BD", "\\leftharpoondown");n(i, o, g, "\u21C1", "\\rightharpoondown");n(i, o, g, "\u2196", "\\nwarrow");n(i, o, g, "\u21CC", "\\rightleftharpoons");n(i, u, g, "\u226E", "\\nless");n(i, u, g, "\uE010", "\\nleqslant");n(i, u, g, "\uE011", "\\nleqq");n(i, u, g, "\u2A87", "\\lneq");n(i, u, g, "\u2268", "\\lneqq");n(i, u, g, "\uE00C", "\\lvertneqq");n(i, u, g, "\u22E6", "\\lnsim");n(i, u, g, "\u2A89", "\\lnapprox");n(i, u, g, "\u2280", "\\nprec");n(i, u, g, "\u22E0", "\\npreceq");n(i, u, g, "\u22E8", "\\precnsim");n(i, u, g, "\u2AB9", "\\precnapprox");n(i, u, g, "\u2241", "\\nsim");n(i, u, g, "\uE006", "\\nshortmid");n(i, u, g, "\u2224", "\\nmid");n(i, u, g, "\u22AC", "\\nvdash");n(i, u, g, "\u22AD", "\\nvDash");n(i, u, g, "\u22EA", "\\ntriangleleft");n(i, u, g, "\u22EC", "\\ntrianglelefteq");n(i, u, g, "\u228A", "\\subsetneq");n(i, u, g, "\uE01A", "\\varsubsetneq");n(i, u, g, "\u2ACB", "\\subsetneqq");n(i, u, g, "\uE017", "\\varsubsetneqq");n(i, u, g, "\u226F", "\\ngtr");n(i, u, g, "\uE00F", "\\ngeqslant");n(i, u, g, "\uE00E", "\\ngeqq");n(i, u, g, "\u2A88", "\\gneq");n(i, u, g, "\u2269", "\\gneqq");n(i, u, g, "\uE00D", "\\gvertneqq");n(i, u, g, "\u22E7", "\\gnsim");n(i, u, g, "\u2A8A", "\\gnapprox");n(i, u, g, "\u2281", "\\nsucc");n(i, u, g, "\u22E1", "\\nsucceq");n(i, u, g, "\u22E9", "\\succnsim");n(i, u, g, "\u2ABA", "\\succnapprox");n(i, u, g, "\u2246", "\\ncong");n(i, u, g, "\uE007", "\\nshortparallel");n(i, u, g, "\u2226", "\\nparallel");n(i, u, g, "\u22AF", "\\nVDash");n(i, u, g, "\u22EB", "\\ntriangleright");n(i, u, g, "\u22ED", "\\ntrianglerighteq");n(i, u, g, "\uE018", "\\nsupseteqq");n(i, u, g, "\u228B", "\\supsetneq");n(i, u, g, "\uE01B", "\\varsupsetneq");n(i, u, g, "\u2ACC", "\\supsetneqq");n(i, u, g, "\uE019", "\\varsupsetneqq");n(i, u, g, "\u22AE", "\\nVdash");n(i, u, g, "\u2AB5", "\\precneqq");n(i, u, g, "\u2AB6", "\\succneqq");n(i, u, g, "\uE016", "\\nsubseteqq");n(i, u, f, "\u22B4", "\\unlhd");n(i, u, f, "\u22B5", "\\unrhd");n(i, u, g, "\u219A", "\\nleftarrow");n(i, u, g, "\u219B", "\\nrightarrow");n(i, u, g, "\u21CD", "\\nLeftarrow");n(i, u, g, "\u21CF", "\\nRightarrow");n(i, u, g, "\u21AE", "\\nleftrightarrow");n(i, u, g, "\u21CE", "\\nLeftrightarrow");n(i, u, g, "\u25B3", "\\vartriangle");n(i, u, y, "\u210F", "\\hslash");n(i, u, y, "\u25BD", "\\triangledown");n(i, u, y, "\u25CA", "\\lozenge");n(i, u, y, "\u24C8", "\\circledS");n(i, u, y, "\xae", "\\circledR");n(l, u, y, "\xae", "\\circledR");n(i, u, y, "\u2221", "\\measuredangle");n(i, u, y, "\u2204", "\\nexists");n(i, u, y, "\u2127", "\\mho");n(i, u, y, "\u2132", "\\Finv");n(i, u, y, "\u2141", "\\Game");n(i, u, y, "k", "\\Bbbk");n(i, u, y, "\u2035", "\\backprime");n(i, u, y, "\u25B2", "\\blacktriangle");n(i, u, y, "\u25BC", "\\blacktriangledown");n(i, u, y, "\u25A0", "\\blacksquare");n(i, u, y, "\u29EB", "\\blacklozenge");n(i, u, y, "\u2605", "\\bigstar");n(i, u, y, "\u2222", "\\sphericalangle");n(i, u, y, "\u2201", "\\complement");n(i, u, y, "\xf0", "\\eth");n(i, u, y, "\u2571", "\\diagup");n(i, u, y, "\u2572", "\\diagdown");n(i, u, y, "\u25A1", "\\square");n(i, u, y, "\u25A1", "\\Box");n(i, u, y, "\u25CA", "\\Diamond");n(i, u, y, "\xa5", "\\yen");n(i, u, y, "\u2713", "\\checkmark");n(l, u, y, "\u2713", "\\checkmark");n(i, u, y, "\u2136", "\\beth");n(i, u, y, "\u2138", "\\daleth");n(i, u, y, "\u2137", "\\gimel");n(i, u, y, "\u03DD", "\\digamma");n(i, u, y, "\u03F0", "\\varkappa");n(i, u, p, "\u250C", "\\ulcorner");n(i, u, c, "\u2510", "\\urcorner");n(i, u, p, "\u2514", "\\llcorner");n(i, u, c, "\u2518", "\\lrcorner");n(i, u, g, "\u2266", "\\leqq");n(i, u, g, "\u2A7D", "\\leqslant");n(i, u, g, "\u2A95", "\\eqslantless");n(i, u, g, "\u2272", "\\lesssim");n(i, u, g, "\u2A85", "\\lessapprox");n(i, u, g, "\u224A", "\\approxeq");n(i, u, f, "\u22D6", "\\lessdot");n(i, u, g, "\u22D8", "\\lll");n(i, u, g, "\u2276", "\\lessgtr");n(i, u, g, "\u22DA", "\\lesseqgtr");n(i, u, g, "\u2A8B", "\\lesseqqgtr");n(i, u, g, "\u2251", "\\doteqdot");n(i, u, g, "\u2253", "\\risingdotseq");n(i, u, g, "\u2252", "\\fallingdotseq");n(i, u, g, "\u223D", "\\backsim");n(i, u, g, "\u22CD", "\\backsimeq");n(i, u, g, "\u2AC5", "\\subseteqq");n(i, u, g, "\u22D0", "\\Subset");n(i, u, g, "\u228F", "\\sqsubset");n(i, u, g, "\u227C", "\\preccurlyeq");n(i, u, g, "\u22DE", "\\curlyeqprec");n(i, u, g, "\u227E", "\\precsim");n(i, u, g, "\u2AB7", "\\precapprox");n(i, u, g, "\u22B2", "\\vartriangleleft");n(i, u, g, "\u22B4", "\\trianglelefteq");n(i, u, g, "\u22A8", "\\vDash");n(i, u, g, "\u22AA", "\\Vvdash");n(i, u, g, "\u2323", "\\smallsmile");n(i, u, g, "\u2322", "\\smallfrown");n(i, u, g, "\u224F", "\\bumpeq");n(i, u, g, "\u224E", "\\Bumpeq");n(i, u, g, "\u2267", "\\geqq");n(i, u, g, "\u2A7E", "\\geqslant");n(i, u, g, "\u2A96", "\\eqslantgtr");n(i, u, g, "\u2273", "\\gtrsim");n(i, u, g, "\u2A86", "\\gtrapprox");n(i, u, f, "\u22D7", "\\gtrdot");n(i, u, g, "\u22D9", "\\ggg");n(i, u, g, "\u2277", "\\gtrless");n(i, u, g, "\u22DB", "\\gtreqless");n(i, u, g, "\u2A8C", "\\gtreqqless");n(i, u, g, "\u2256", "\\eqcirc");n(i, u, g, "\u2257", "\\circeq");n(i, u, g, "\u225C", "\\triangleq");n(i, u, g, "\u223C", "\\thicksim");n(i, u, g, "\u2248", "\\thickapprox");n(i, u, g, "\u2AC6", "\\supseteqq");n(i, u, g, "\u22D1", "\\Supset");n(i, u, g, "\u2290", "\\sqsupset");n(i, u, g, "\u227D", "\\succcurlyeq");n(i, u, g, "\u22DF", "\\curlyeqsucc");n(i, u, g, "\u227F", "\\succsim");n(i, u, g, "\u2AB8", "\\succapprox");n(i, u, g, "\u22B3", "\\vartriangleright");n(i, u, g, "\u22B5", "\\trianglerighteq");n(i, u, g, "\u22A9", "\\Vdash");n(i, u, g, "\u2223", "\\shortmid");n(i, u, g, "\u2225", "\\shortparallel");n(i, u, g, "\u226C", "\\between");n(i, u, g, "\u22D4", "\\pitchfork");n(i, u, g, "\u221D", "\\varpropto");n(i, u, g, "\u25C0", "\\blacktriangleleft");n(i, u, g, "\u2234", "\\therefore");n(i, u, g, "\u220D", "\\backepsilon");n(i, u, g, "\u25B6", "\\blacktriangleright");n(i, u, g, "\u2235", "\\because");n(i, u, g, "\u22D8", "\\llless");n(i, u, g, "\u22D9", "\\gggtr");n(i, u, f, "\u22B2", "\\lhd");n(i, u, f, "\u22B3", "\\rhd");n(i, u, g, "\u2242", "\\eqsim");n(i, o, g, "\u22C8", "\\Join");n(i, u, g, "\u2251", "\\Doteq");n(i, u, f, "\u2214", "\\dotplus");n(i, u, f, "\u2216", "\\smallsetminus");n(i, u, f, "\u22D2", "\\Cap");n(i, u, f, "\u22D3", "\\Cup");n(i, u, f, "\u2A5E", "\\doublebarwedge");n(i, u, f, "\u229F", "\\boxminus");n(i, u, f, "\u229E", "\\boxplus");n(i, u, f, "\u22C7", "\\divideontimes");n(i, u, f, "\u22C9", "\\ltimes");n(i, u, f, "\u22CA", "\\rtimes");n(i, u, f, "\u22CB", "\\leftthreetimes");n(i, u, f, "\u22CC", "\\rightthreetimes");n(i, u, f, "\u22CF", "\\curlywedge");n(i, u, f, "\u22CE", "\\curlyvee");n(i, u, f, "\u229D", "\\circleddash");n(i, u, f, "\u229B", "\\circledast");n(i, u, f, "\u22C5", "\\centerdot");n(i, u, f, "\u22BA", "\\intercal");n(i, u, f, "\u22D2", "\\doublecap");n(i, u, f, "\u22D3", "\\doublecup");n(i, u, f, "\u22A0", "\\boxtimes");n(i, u, g, "\u21E2", "\\dashrightarrow");n(i, u, g, "\u21E0", "\\dashleftarrow");n(i, u, g, "\u21C7", "\\leftleftarrows");n(i, u, g, "\u21C6", "\\leftrightarrows");n(i, u, g, "\u21DA", "\\Lleftarrow");n(i, u, g, "\u219E", "\\twoheadleftarrow");n(i, u, g, "\u21A2", "\\leftarrowtail");n(i, u, g, "\u21AB", "\\looparrowleft");n(i, u, g, "\u21CB", "\\leftrightharpoons");n(i, u, g, "\u21B6", "\\curvearrowleft");n(i, u, g, "\u21BA", "\\circlearrowleft");n(i, u, g, "\u21B0", "\\Lsh");n(i, u, g, "\u21C8", "\\upuparrows");n(i, u, g, "\u21BF", "\\upharpoonleft");n(i, u, g, "\u21C3", "\\downharpoonleft");n(i, u, g, "\u22B8", "\\multimap");n(i, u, g, "\u21AD", "\\leftrightsquigarrow");n(i, u, g, "\u21C9", "\\rightrightarrows");n(i, u, g, "\u21C4", "\\rightleftarrows");n(i, u, g, "\u21A0", "\\twoheadrightarrow");n(i, u, g, "\u21A3", "\\rightarrowtail");n(i, u, g, "\u21AC", "\\looparrowright");n(i, u, g, "\u21B7", "\\curvearrowright");n(i, u, g, "\u21BB", "\\circlearrowright");n(i, u, g, "\u21B1", "\\Rsh");n(i, u, g, "\u21CA", "\\downdownarrows");n(i, u, g, "\u21BE", "\\upharpoonright");n(i, u, g, "\u21C2", "\\downharpoonright");n(i, u, g, "\u21DD", "\\rightsquigarrow");n(i, u, g, "\u21DD", "\\leadsto");n(i, u, g, "\u21DB", "\\Rrightarrow");n(i, u, g, "\u21BE", "\\restriction");n(i, o, y, "\u2018", "`");n(i, o, y, "$", "\\$");n(l, o, y, "$", "\\$");n(l, o, y, "$", "\\textdollar");n(i, o, y, "%", "\\%");n(l, o, y, "%", "\\%");n(i, o, y, "_", "\\_");n(l, o, y, "_", "\\_");n(l, o, y, "_", "\\textunderscore");n(i, o, y, "\u2220", "\\angle");n(i, o, y, "\u221E", "\\infty");n(i, o, y, "\u2032", "\\prime");n(i, o, y, "\u25B3", "\\triangle");n(i, o, y, "\u0393", "\\Gamma", true);n(i, o, y, "\u0394", "\\Delta", true);n(i, o, y, "\u0398", "\\Theta", true);n(i, o, y, "\u039B", "\\Lambda", true);n(i, o, y, "\u039E", "\\Xi", true);n(i, o, y, "\u03A0", "\\Pi", true);n(i, o, y, "\u03A3", "\\Sigma", true);n(i, o, y, "\u03A5", "\\Upsilon", true);n(i, o, y, "\u03A6", "\\Phi", true);n(i, o, y, "\u03A8", "\\Psi", true);n(i, o, y, "\u03A9", "\\Omega", true);n(i, o, y, "\xac", "\\neg");n(i, o, y, "\xac", "\\lnot");n(i, o, y, "\u22A4", "\\top");n(i, o, y, "\u22A5", "\\bot");n(i, o, y, "\u2205", "\\emptyset");n(i, u, y, "\u2205", "\\varnothing");n(i, o, v, "\u03B1", "\\alpha", true);n(i, o, v, "\u03B2", "\\beta", true);n(i, o, v, "\u03B3", "\\gamma", true);n(i, o, v, "\u03B4", "\\delta", true);n(i, o, v, "\u03F5", "\\epsilon", true);n(i, o, v, "\u03B6", "\\zeta", true);n(i, o, v, "\u03B7", "\\eta", true);n(i, o, v, "\u03B8", "\\theta", true);n(i, o, v, "\u03B9", "\\iota", true);n(i, o, v, "\u03BA", "\\kappa", true);n(i, o, v, "\u03BB", "\\lambda", true);n(i, o, v, "\u03BC", "\\mu", true);n(i, o, v, "\u03BD", "\\nu", true);n(i, o, v, "\u03BE", "\\xi", true);n(i, o, v, "\u03BF", "\\omicron", true);n(i, o, v, "\u03C0", "\\pi", true);n(i, o, v, "\u03C1", "\\rho", true);n(i, o, v, "\u03C3", "\\sigma", true);n(i, o, v, "\u03C4", "\\tau", true);n(i, o, v, "\u03C5", "\\upsilon", true);n(i, o, v, "\u03D5", "\\phi", true);n(i, o, v, "\u03C7", "\\chi", true);n(i, o, v, "\u03C8", "\\psi", true);n(i, o, v, "\u03C9", "\\omega", true);n(i, o, v, "\u03B5", "\\varepsilon", true);n(i, o, v, "\u03D1", "\\vartheta", true);n(i, o, v, "\u03D6", "\\varpi", true);n(i, o, v, "\u03F1", "\\varrho", true);n(i, o, v, "\u03C2", "\\varsigma", true);n(i, o, v, "\u03C6", "\\varphi", true);n(i, o, f, "\u2217", "*");n(i, o, f, "+", "+");n(i, o, f, "\u2212", "-");n(i, o, f, "\u22C5", "\\cdot");n(i, o, f, "\u2218", "\\circ");n(i, o, f, "\xf7", "\\div");n(i, o, f, "\xb1", "\\pm");n(i, o, f, "\xd7", "\\times");n(i, o, f, "\u2229", "\\cap");n(i, o, f, "\u222A", "\\cup");n(i, o, f, "\u2216", "\\setminus");n(i, o, f, "\u2227", "\\land");n(i, o, f, "\u2228", "\\lor");n(i, o, f, "\u2227", "\\wedge");n(i, o, f, "\u2228", "\\vee");n(i, o, y, "\u221A", "\\surd");n(i, o, p, "(", "(");n(i, o, p, "[", "[");n(i, o, p, "\u27E8", "\\langle");n(i, o, p, "\u2223", "\\lvert");n(i, o, p, "\u2225", "\\lVert");n(i, o, c, ")", ")");n(i, o, c, "]", "]");n(i, o, c, "?", "?");n(i, o, c, "!", "!");n(i, o, c, "\u27E9", "\\rangle");n(i, o, c, "\u2223", "\\rvert");n(i, o, c, "\u2225", "\\rVert");n(i, o, g, "=", "=");n(i, o, g, "<", "<");n(i, o, g, ">", ">");n(i, o, g, ":", ":");n(i, o, g, "\u2248", "\\approx");n(i, o, g, "\u2245", "\\cong");n(i, o, g, "\u2265", "\\ge");n(i, o, g, "\u2265", "\\geq");n(i, o, g, "\u2190", "\\gets");n(i, o, g, ">", "\\gt");n(i, o, g, "\u2208", "\\in");n(i, o, g, "\u2209", "\\notin");n(i, o, g, "\u0338", "\\not");n(i, o, g, "\u2282", "\\subset");n(i, o, g, "\u2283", "\\supset");n(i, o, g, "\u2286", "\\subseteq");n(i, o, g, "\u2287", "\\supseteq");n(i, u, g, "\u2288", "\\nsubseteq");n(i, u, g, "\u2289", "\\nsupseteq");n(i, o, g, "\u22A8", "\\models");n(i, o, g, "\u2190", "\\leftarrow");n(i, o, g, "\u2264", "\\le");n(i, o, g, "\u2264", "\\leq");n(i, o, g, "<", "\\lt");n(i, o, g, "\u2260", "\\ne");n(i, o, g, "\u2260", "\\neq");n(i, o, g, "\u2192", "\\rightarrow");n(i, o, g, "\u2192", "\\to");n(i, u, g, "\u2271", "\\ngeq");n(i, u, g, "\u2270", "\\nleq");n(i, o, b, null, "\\!");n(i, o, b, "\xa0", "\\ ");n(i, o, b, "\xa0", "~");n(i, o, b, null, "\\,");n(i, o, b, null, "\\:");n(i, o, b, null, "\\;");n(i, o, b, null, "\\enspace");n(i, o, b, null, "\\qquad");n(i, o, b, null, "\\quad");n(i, o, b, "\xa0", "\\space");n(i, o, m, ",", ",");n(i, o, m, ";", ";");n(i, o, m, ":", "\\colon");n(i, u, f, "\u22BC", "\\barwedge");n(i, u, f, "\u22BB", "\\veebar");n(i, o, f, "\u2299", "\\odot");n(i, o, f, "\u2295", "\\oplus");n(i, o, f, "\u2297", "\\otimes");n(i, o, y, "\u2202", "\\partial");n(i, o, f, "\u2298", "\\oslash");n(i, u, f, "\u229A", "\\circledcirc");n(i, u, f, "\u22A1", "\\boxdot");n(i, o, f, "\u25B3", "\\bigtriangleup");n(i, o, f, "\u25BD", "\\bigtriangledown");n(i, o, f, "\u2020", "\\dagger");n(i, o, f, "\u22C4", "\\diamond");n(i, o, f, "\u22C6", "\\star");n(i, o, f, "\u25C3", "\\triangleleft");n(i, o, f, "\u25B9", "\\triangleright");n(i, o, p, "{", "\\{");n(l, o, y, "{", "\\{");n(l, o, y, "{", "\\textbraceleft");n(i, o, c, "}", "\\}");n(l, o, y, "}", "\\}");n(l, o, y, "}", "\\textbraceright");n(i, o, p, "{", "\\lbrace");n(i, o, c, "}", "\\rbrace");n(i, o, p, "[", "\\lbrack");n(i, o, c, "]", "\\rbrack");n(l, o, y, "<", "\\textless");n(l, o, y, ">", "\\textgreater");n(i, o, p, "\u230A", "\\lfloor");n(i, o, c, "\u230B", "\\rfloor");n(i, o, p, "\u2308", "\\lceil");n(i, o, c, "\u2309", "\\rceil");n(i, o, y, "\\", "\\backslash");n(i, o, y, "\u2223", "|");n(i, o, y, "\u2223", "\\vert");n(l, o, y, "|", "\\textbar");n(i, o, y, "\u2225", "\\|");n(i, o, y, "\u2225", "\\Vert");n(l, o, y, "\u2225", "\\textbardbl");n(i, o, g, "\u2191", "\\uparrow");n(i, o, g, "\u21D1", "\\Uparrow");n(i, o, g, "\u2193", "\\downarrow");n(i, o, g, "\u21D3", "\\Downarrow");n(i, o, g, "\u2195", "\\updownarrow");n(i, o, g, "\u21D5", "\\Updownarrow");n(i, o, h, "\u2210", "\\coprod");n(i, o, h, "\u22C1", "\\bigvee");n(i, o, h, "\u22C0", "\\bigwedge");n(i, o, h, "\u2A04", "\\biguplus");n(i, o, h, "\u22C2", "\\bigcap");n(i, o, h, "\u22C3", "\\bigcup");n(i, o, h, "\u222B", "\\int");n(i, o, h, "\u222B", "\\intop");n(i, o, h, "\u222C", "\\iint");n(i, o, h, "\u222D", "\\iiint");n(i, o, h, "\u220F", "\\prod");n(i, o, h, "\u2211", "\\sum");n(i, o, h, "\u2A02", "\\bigotimes");n(i, o, h, "\u2A01", "\\bigoplus");n(i, o, h, "\u2A00", "\\bigodot");n(i, o, h, "\u222E", "\\oint");n(i, o, h, "\u2A06", "\\bigsqcup");n(i, o, h, "\u222B", "\\smallint");n(l, o, d, "\u2026", "\\textellipsis");n(i, o, d, "\u2026", "\\mathellipsis");n(l, o, d, "\u2026", "\\ldots", true);n(i, o, d, "\u2026", "\\ldots", true);n(i, o, d, "\u22EF", "\\@cdots", true);n(i, o, d, "\u22F1", "\\ddots", true);n(i, o, y, "\u22EE", "\\vdots", true);n(i, o, s, "\xb4", "\\acute");n(i, o, s, "`", "\\grave");n(i, o, s, "\xa8", "\\ddot");n(i, o, s, "~", "\\tilde");n(i, o, s, "\xaf", "\\bar");n(i, o, s, "\u02D8", "\\breve");n(i, o, s, "\u02C7", "\\check");n(i, o, s, "^", "\\hat");n(i, o, s, "\u20D7", "\\vec");n(i, o, s, "\u02D9", "\\dot");n(i, o, v, "\u0131", "\\imath");n(i, o, v, "\u0237", "\\jmath");n(l, o, s, "\u02CA", "\\'");n(l, o, s, "\u02CB", "\\`");n(l, o, s, "\u02C6", "\\^");n(l, o, s, "\u02DC", "\\~");n(l, o, s, "\u02C9", "\\=");n(l, o, s, "\u02D8", "\\u");n(l, o, s, "\u02D9", "\\.");n(l, o, s, "\u02DA", "\\r");n(l, o, s, "\u02C7", "\\v");n(l, o, s, "\xa8", '\\"');n(l, o, s, "\u030B", "\\H");n(l, o, y, "\u2013", "--");n(l, o, y, "\u2013", "\\textendash");n(l, o, y, "\u2014", "---");n(l, o, y, "\u2014", "\\textemdash");n(l, o, y, "\u2018", "`");n(l, o, y, "\u2018", "\\textquoteleft");n(l, o, y, "\u2019", "'");n(l, o, y, "\u2019", "\\textquoteright");n(l, o, y, "\u201C", "``");n(l, o, y, "\u201C", "\\textquotedblleft");n(l, o, y, "\u201D", "''");n(l, o, y, "\u201D", "\\textquotedblright");n(i, o, y, "\xb0", "\\degree");n(l, o, y, "\xb0", "\\degree");n(i, o, v, "\xa3", "\\pounds");n(i, o, v, "\xa3", "\\mathsterling");n(l, o, v, "\xa3", "\\pounds");n(l, o, v, "\xa3", "\\textsterling");n(i, u, y, "\u2720", "\\maltese");n(l, u, y, "\u2720", "\\maltese");n(l, o, b, "\xa0", "\\ ");n(l, o, b, "\xa0", " ");n(l, o, b, "\xa0", "~");var x = '0123456789/@."';for (var w = 0; w < x.length; w++) {
        var k = x.charAt(w);n(i, o, y, k, k);
      }var M = '0123456789!@*()-=+[]<>|";:?/.,';for (var _ = 0; _ < M.length; _++) {
        var z = M.charAt(_);n(l, o, y, z, z);
      }var S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for (var T = 0; T < S.length; T++) {
        var A = S.charAt(T);n(i, o, v, A, A);n(l, o, y, A, A);
      }for (var C = 192; C <= 214; C++) {
        var N = String.fromCharCode(C);n(i, o, v, N, N);n(l, o, y, N, N);
      }for (var O = 216; O <= 246; O++) {
        var j = String.fromCharCode(O);n(i, o, v, j, j);n(l, o, y, j, j);
      }for (var E = 248; E <= 255; E++) {
        var L = String.fromCharCode(E);n(i, o, v, L, L);n(l, o, y, L, L);
      }for (var q = 1040; q <= 1103; q++) {
        var P = String.fromCharCode(q);n(l, o, y, P, P);
      }n(l, o, y, "\u2013", "\u2013");n(l, o, y, "\u2014", "\u2014");n(l, o, y, "\u2018", "\u2018");n(l, o, y, "\u2019", "\u2019");n(l, o, y, "\u201C", "\u201C");n(l, o, y, "\u201D", "\u201D");
    }, {}], 113: [function (e, t, r) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: true });var a = r.hangulRegex = /[\uAC00-\uD7AF]/;var n = r.cjkRegex = /[\u3000-\u30FF\u4E00-\u9FAF\uAC00-\uD7AF\uFF00-\uFF60]/;
    }, {}], 114: [function (e, t, r) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: true });r.calculateSize = r.validUnit = undefined;var a = e("./ParseError");var n = o(a);var i = e("./Options");var l = o(i);function o(e) {
        return e && e.__esModule ? e : { default: e };
      }var u = { pt: 1, mm: 7227 / 2540, cm: 7227 / 254, in: 72.27, bp: 803 / 800, pc: 12, dd: 1238 / 1157, cc: 14856 / 1157, nd: 685 / 642, nc: 1370 / 107, sp: 1 / 65536, px: 803 / 800 };var s = { ex: true, em: true, mu: true };var f = r.validUnit = function e(t) {
        if (typeof t !== "string") {
          t = t.unit;
        }return t in u || t in s || t === "ex";
      };var c = r.calculateSize = function e(t, r) {
        var a = void 0;if (t.unit in u) {
          a = u[t.unit] / r.fontMetrics().ptPerEm / r.sizeMultiplier;
        } else if (t.unit === "mu") {
          a = r.fontMetrics().cssEmPerMu;
        } else {
          var i = void 0;if (r.style.isTight()) {
            i = r.havingStyle(r.style.text());
          } else {
            i = r;
          }if (t.unit === "ex") {
            a = i.fontMetrics().xHeight;
          } else if (t.unit === "em") {
            a = i.fontMetrics().quad;
          } else {
            throw new n.default("Invalid unit: '" + t.unit + "'");
          }if (i !== r) {
            a *= i.sizeMultiplier / r.sizeMultiplier;
          }
        }return Math.min(t.number * a, r.maxSize);
      };
    }, { "./Options": 83, "./ParseError": 84 }], 115: [function (e, t, r) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: true });var a = Array.prototype.indexOf;var n = function e(t, r) {
        if (t == null) {
          return -1;
        }if (a && t.indexOf === a) {
          return t.indexOf(r);
        }var n = t.length;for (var i = 0; i < n; i++) {
          if (t[i] === r) {
            return i;
          }
        }return -1;
      };var i = function e(t, r) {
        return n(t, r) !== -1;
      };var l = function e(t, r) {
        return t === undefined ? r : t;
      };var o = /([A-Z])/g;var u = function e(t) {
        return t.replace(o, "-$1").toLowerCase();
      };var s = { "&": "&amp;", ">": "&gt;", "<": "&lt;", '"': "&quot;", "'": "&#x27;" };var f = /[&><"']/g;function c(e) {
        return String(e).replace(f, function (e) {
          return s[e];
        });
      }var d = void 0;if (typeof document !== "undefined") {
        var v = document.createElement("span");if ("textContent" in v) {
          d = function e(t, r) {
            t.textContent = r;
          };
        } else {
          d = function e(t, r) {
            t.innerText = r;
          };
        }
      }function h(e) {
        d(e, "");
      }r.default = { contains: i, deflt: l, escape: c, hyphenate: u, indexOf: n, setTextContent: d, clearNode: h };
    }, {}] }, {}, [1])(1);
});
exports.default = katex;

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", { domProps: { innerHTML: _vm._s(_vm.content) } })
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7aec68ca", esExports)
  }
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _scopes = __webpack_require__(18);

var _scopes2 = _interopRequireDefault(_scopes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function load(path, language) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        compile(xhr.response, language, path);
    };
    xhr.open('get', path);
    xhr.send();
}

function compile(code, language, path) {
    var targetElement = document.createElement('div');
    targetElement.id = 'app';

    console.log(language);

    var config = {
        langs: {},
        el: '#app',
        data: {
            lang: language
        }, computed: [],
        element: targetElement
    };

    var task = function task(x) {};

    var codes = code.split('\n');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = codes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var line = _step.value;

            var scope = line.match(/@@(\w+):/);
            if (scope) {
                task = _scopes2.default[scope[1]];
                continue;
            }
            if (line.trim().length > 0) task(line, config);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    var finalConfig = '{\n    el:"' + config.el + '",\n    data:' + JSON.stringify(config.data) + ',\n    computed:{' + config.computed.join(',') + '}}';

    var p = document.createElement('p');
    for (var i in config.langs) {
        p.innerHTML += '<a href="#" v-if="\'' + i + '\'!=lang" @click="lang=\'' + i + '\'">\n        ' + { ch: "切換至中文", en: "Translate to English" }[i] + '</a>';
    }

    targetElement.insertBefore(p, targetElement.children[0]);
    p.classList.add('lang');
    document.body.appendChild(targetElement);

    var all = targetElement.querySelectorAll('*');

    for (var i in all) {
        var element = all[i];

        if (element.setAttribute) element.setAttribute('key', i);
    }

    console.log(targetElement);
    eval('var app = new Vue(' + finalConfig + '); console.log(app)');
}

window.compile = compile;
window.load = load;

exports.default = {
    compile: compile,
    load: load
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var svgns = "http://www.w3.org/2000/svg";
var docmode = '';
var docparam = '';
var parentNode = null;
exports.default = {
    var: function _var(line, config) {
        var match = line.match(/(\w+)\s*=\s*(.+)/);
        config.data[match[1]] = eval(match[2]);
    },
    calc: function calc(line, config) {
        var match = line.match(/(\w+)\s*=\s*(.+)/);
        config.computed.push(match[1] + '(){return ' + match[2] + '}');
    },
    doc: function doc(line, config) {

        var match = line.match(/```\s*(\w+)([^]+)/);
        if (match) {
            docmode = match[1];
            docparam = match[2];
        } else {
            if (line.match(/```/)) {
                docmode = '';
                if (parentNode) {
                    console.log("append");
                    config.element.appendChild(parentNode);
                    parentNode = null;
                }
                return;
            }
            switch (docmode) {
                case "svg":
                    if (!parentNode) {
                        parentNode = document.createElementNS(svgns, "svg");
                        var scale = docparam.match(/(\d+)x(\d+)/);
                        parentNode.setAttribute('width', scale[1]);
                        parentNode.setAttribute('height', scale[2]);
                    }
                    var part = line.split(',');
                    var match = part[0].match(/([^\s]*"[^"]+"[^\s]*)|[^\s]+/g);
                    var elem = document.createElementNS(svgns, match[0]);
                    for (var i = 1; i < match.length; i++) {
                        var attr = match[i].match(/([^=]+)=(.+)/);
                        elem.setAttribute(attr[1], attr[2]);
                    }
                    if (part[1]) elem.textContent = part[1];
                    parentNode.appendChild(elem);
                    break;
                case "js":

                    if (!parentNode) {
                        parentNode = document.createElement('plot');
                        var scale = docparam.match(/(\d+)x(\d+)/);
                        parentNode.setAttribute('width', scale[1]);
                        parentNode.setAttribute('height', scale[2]);
                    }
                    var data = parentNode.getAttribute(':data') || '';
                    data += line;
                    parentNode.setAttribute(':data', data);

                    break;

                default:

                    line = function (line) {
                        if (line.trim() == '---') return '<hr>';
                        line = line.replace(/<if:([^]+?)>/, function (g, c) {
                            var div = document.createElement('div');
                            div.setAttribute('v-if', c);
                            config.element.appendChild(div);
                            config.element = div;
                            return '';
                        });
                        line = line.replace(/<\/if>/, function (g, c) {
                            config.element = config.element.parentNode;
                            return '';
                        });
                        line = line.replace(/`(\w+)`/g, function (g, variable) {
                            return '<input type="text" v-model.number="' + variable + '"></input>';
                        });
                        line = line.replace(/\$(\w+):([^\$]+)(\$\s)?/g, function (g, lang, content) {
                            config.langs[lang] = true;
                            return '<transition name="list"><span v-if="lang==\'' + lang + '\'">' + content + '</span></transition>';
                        });
                        line = line.replace(/\*([^]+?)\*/g, function (g, code) {
                            code = code.replace(/{{(\w+)}}/g, '"+($1)+"');
                            return '<katex :expr=\'"' + code + '"\'></katex>';
                        });
                        var header = line.match(/^(#+)([^]+)/);
                        if (header) line = '<h' + header[1].length + '>' + header[2] + '</h' + header[1].length + '>';
                        var li = line.match(/^\*([^]+)/);
                        if (li) line = '<li>' + li[1] + '</li>';
                        return line;
                    }(line);
                    console.log(line);

                    var p = document.createElement('p');
                    p.innerHTML = line;

                    config.element.appendChild(p);

                    break;

            }
        }
    }
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(20);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(22)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)(undefined);
// imports


// module
exports.push([module.i, "body{\r\n    max-width: 1024px;\r\n    margin: auto;\r\n    font-family:consolas,微軟正黑體;\r\n    padding-bottom: 100px;\r\n    font-size: 1.5em;\r\n    background-color: #f4f4f4;\r\n}\r\n#app{\r\n    margin: 16px;\r\n}\r\nblockquote{\r\n    margin-left: 0px;\r\n    padding-left: 32px;\r\n    border-left: solid 8px #2196F3;\r\n}\r\ninput{\r\n    font-size: inherit;\r\n    border: none;\r\n    border-bottom: solid 2px #2196F3;\r\n    text-align: center;\r\n    width:96px;\r\n    \r\n}\r\ncanvas{\r\n    background-color: white;\r\n    box-shadow: 4px 4px 16px rgba(0,0,0,0.2);\r\n    max-width: 100%;\r\n}\r\n\r\n\r\nh3{\r\n    font-size: 18px;\r\n    margin: 4px;\r\n}\r\n\r\n.lang{\r\n    margin-left: 16px;\r\n}\r\n.lang>a{\r\n    font-size: 16px;\r\n    color: black;\r\n    text-decoration: none;\r\n    border-bottom: solid 2px #2196F3;\r\n    background-color: white;\r\n    padding: 4px;\r\n    margin-left: 5px;\r\n}\r\n.lang>a:hover{\r\n    background-color:  #2196F3;\r\n    color: white;\r\n}\r\n\r\n.list-enter-active {\r\n    position: relative;\r\n    transition: all .8s ease;\r\n}\r\n\r\n.list-enter, .list-leave {\r\n    position: relative;    \r\n    opacity: 0;\r\n}", ""]);

// exports


/***/ }),
/* 21 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(23);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 23 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "data:text/markdown;base64,IyBAQHZhcjoNCmltID0gMjANCnYwID0gMA0KdXMgPSAwDQp1ayA9IDANCmYgPSA1DQppczEgPSAwLjUNCmlzMiA9IDAuNQ0KZyA9IDkuODA3DQoNCiMgQEBjYWxjOg0KbSA9IHRoaXMuaW0gLyAxMDAwDQpzMSA9IHRoaXMuaXMxICogMTAwMA0KczIgPSB0aGlzLmlzMiAqIDEwMDANCg0KDQpmcyA9IE1hdGguYWJzKHRoaXMudXMgKiB0aGlzLm0gKiB0aGlzLmcpDQpmayA9IE1hdGguYWJzKHRoaXMudXMgKiB0aGlzLm0gKiB0aGlzLmcpDQpmbiA9ICh0aGlzLmYgLSB0aGlzLmZrKk1hdGguc2lnbih0aGlzLmYpKQ0KbW92ZSA9IE1hdGguYWJzKHRoaXMuZikgPiB0aGlzLmZzOw0KbW92ZWsgPSBNYXRoLmFicyh0aGlzLmYpID4gdGhpcy5mazsNCg0KZmsgPSBNYXRoLmFicyh0aGlzLnVrICogdGhpcy5tICogdGhpcy5nKQ0KYTEgPSB0aGlzLmZuL3RoaXMubQ0KIyBAQGRvYzogDQojICRlbjogUEhZU0lDUyAkY2g6IOeJqeeQhg0KIyMgJGVuOiBNaWR0ZXJtIEV4YW0gRXhwbGFpbmVkICRjaDog5pyf5Lit6ICD6Kyb6KejDQotLS0NCiMjICRlbjogVEhFIFBST0JMRU0gJGNoOiDpoYznm64NCg0KYGBgIHN2ZyAzNTB4MTUwDQpyZWN0IHg9MTAgd2lkdGg9NTAgaGVpZ2h0PTUwIHN0eWxlPWZpbGw6bm9uZTtzdHJva2U6YmxhY2sNCnRleHQgZm9udC1zaXplPTE2IHg9MTAgeT03MCx7e219fSBnDQp0ZXh0IGZvbnQtc2l6ZT0xNiB4PTkwIHk9NDAse3tmfX0gTg0KDQp0ZXh0IGZvbnQtc2l6ZT0xNiB4PTUwIHk9ODUse3tpczF9fSBrbQ0KdGV4dCBmb250LXNpemU9MTYgeD0xNzAgeT04NSx7e2lzMn19IGttDQoNCmxpbmUgeDE9MzUgeTE9MjUgeDI9MjAwIHkyPTI1IHN0eWxlPXN0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6Mg0KbGluZSB4MT0wIHkxPTUwIHgyPTIwMCB5Mj01MCBzdHlsZT1zdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjINCmxpbmUgeDE9MTkwIHkxPTM1IHgyPTIwMCB5Mj0yNSBzdHlsZT1zdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjINCmxpbmUgeDE9MTkwIHkxPTE1IHgyPTIwMCB5Mj0yNSBzdHlsZT1zdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjINCg0KbGluZSB4MT0yNSB5MT05MCB4Mj0zMDAgeTI9OTAgc3R5bGU9c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoyDQp0ZXh0IGZvbnQtc2l6ZT0xNiB4PTI1IHk9MTEwLHQwDQpsaW5lIHgxPTI1IHkxPTg1IHgyPTI1IHkyPTk1IHN0eWxlPXN0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6Mg0KdGV4dCBmb250LXNpemU9MTYgeD0xMzAgeT0xMTAsdDENCmxpbmUgeDE9MTQwIHkxPTg1IHgyPTE0MCB5Mj05NSBzdHlsZT1zdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjINCnRleHQgZm9udC1zaXplPTE2IHg9MjU1IHk9MTEwLHQyDQpsaW5lIHgxPTI1NSB5MT04NSB4Mj0yNTUgeTI9OTUgc3R5bGU9c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoyDQpgYGANCg0KIyMjIOKAuyRlbjogeW91IGNhbiBjaGFuZ2UgdGhlIHBhcmFtZXRlcnMgJGNoOiDkvaDlj6/ku6XpmqjmhI/oqr/mlbTpoYznm67lj4PmlbgNCg0KJGVuOiBBIGJveCwgd2VpZ2h0IGBpbWAgZywgcHV0IG9uIGEgdGFibGUsDQokY2g6IOacieWAi+mHjSBgaW1gIOWFrOWFi+eahOebkuWtkOaUvuWcqOahjOS4iiwNCg0KJGVuOiB0aGUgY29lZmZpY2llbnQgb2YgZnJpY3Rpb246DQokY2g6IOaRqeaTpuWKm+S/guaVuOeCuu+8mg0KKlxcbXUgX3MqID0gYHVzYCAsICpcXG11IF9rKiA9IGB1a2ANCiRlbjogQXBwbHkgYSBgZmAgTiBmb3JjZSB0b3dhcmQgcmlnaHQgdW50aWwgaXQgc2xpZGVzIGZvciBgaXMxYCAqa20qLA0KJGNoOiDlsI3lroPlkJHlj7Pmlr3lipsgYGZgIOeJm+mgk++8jOebtOWIsOWug+a7keihjCBgaXMxYCDlhazph4zvvIwNCg0KJGVuOiBhbmQgc3RvcCB0aGUgZm9yY2UsIGxldCBpdCBzbGlkZSBgaXMyYCAqa20qLg0KJGNoOiDnhLblvozlgZzmraLmlr3lipvvvIzlho3orpPlroPmu5HooYwgYGlzMmAg5YWs6YeM44CCDQo8aWY6dXMhPTB8fHVrIT0wPg0KIyMgU1RFUCAwOiAkZW46ZnJpY3Rpb24kY2g65pGp5pOm5YqbDQpgYGAganMgMzAweDE1MA0Kew0KICAgIGRhdGE6Ww0KICAgICAgICBbMCwwXSwNCiAgICAgICAgW2ZzLGZzXSwNCiAgICAgICAgW2ZzLGZrXSwNCiAgICAgICAgW2ZzKjIsZmssZmFsc2VdDQogICAgXQ0KfQ0KYGBgDQojIyMgJGVuOiB0aGUgcmVsYXRpb25zaGlwIGJldHdlZW4gZm9yY2UgYW5kIGZyaWN0aW9uICRjaDog5pa95Yqb6IiH5pGp5pOm5Yqb5LmL6ZaT55qE6Zec5L+CDQo8L2lmPg0KPGlmOnVzIT0wPg0KJGVuOmJlY2F1c2Ugd2UgaGF2ZSBzdGF0aWMgZnJpY3Rpb24gKlxcbXUgX3MqID0gYHVzYA0KJGNoOuWboOeCuuaciemdnOaRqeaTpuWKmyAqXFxtdSBfcyogPSBgdXNgDQokZW46dGhlIGJveCBvbmx5IG1vdmUgaWYkY2g655uS5a2Q5pa95Yqb5b+F6aCI6YGU5oiQJCAgKkY+XFxtdSBfc0ZfbioNCmBmYCB7e21vdmU/Jz4nOic8PSd9fSB7e2ZzfX0gJGVuOiBzbyBpdCB7e21vdmU/J21vdmVzJzond2lsbCBub3QgbW92ZSd9fS4kY2g6IOWboOatpOWug3t7bW92ZT8n5pyDJzon5LiN5pyDJ31956e75YuV44CCDQo8L2lmPg0KDQo8aWY6dWshPTA+DQokZW46YmVjYXVzZSB3ZSBoYXZlIGR5bmFtaWMgZnJpY3Rpb24gKlxcbXUgX2sqID0gYHVrYA0KJGNoOuWboOeCuuacieWLleaRqeaTpuWKmyAqXFxtdSBfayogPSBgdWtgDQokZW46dGhlIGJveCBvbmx5IG1vdmUgaWYkY2g655uS5a2Q5pa95Yqb5b+F6aCI6YGU5oiQJCAgKkY+XFxtdSBfa0ZfbioNCj0gYGZgIHt7bW92ZT8nPic6Jzw9J319IHt7Zmt9fSAkZW46IHNvIGl0IHt7bW92ZT8nbW92ZXMnOid3aWxsIG5vdCBtb3ZlJ319LiRjaDog5Zug5q2k5a6De3ttb3ZlPyfmnIMnOifkuI3mnIMnfX3np7vli5XjgIINCjxpZjptb3Zlaz4NCiRlbjogdGhlbiB3ZSBjYW4gY2FsY3VsYXRlIHRoZSBuZXQgZm9yY2UgKkZfbj1GLUZfayoNCiRjaDog54S25b6M5oiR5YCR6KiI566X5reo5YqbICpGX249Ri1GX2sqDQo9IGBmYCB7e2Y+PTA/Jy0nOicrJ319IHt7Zmt9fSA9IHt7Zm59fQ0KPC9pZj4NCjwvaWY+DQoNCjxpZjptb3ZlJiZtb3Zlaz4NCiMjIFNURVAgMTogJGVuOmFjY2VsZXJhdGlvbiRjaDrliqDpgJ/luqYNCipGPW1hKiwgKmE9XFxmcmFje0Z9e219Kg0KPSAqXFxmcmFje3t7Zm59fX17e3ttfX19PXt7YTF9fSoNCiMjIFNURVAgMjogJGVuOmRpc3BsYWNlbWVudCRjaDrkvY3np7sNCiRlbjogdmVsb2NpdHkgJGNoOumAn+W6piQgID0gKlZfMCthdCoNCmBgYCBqcyAzMDB4MTUwDQp7DQogICAgZGF0YTpbDQogICAgICAgIFswLHYwXSwNCiAgICAgICAgWzEsdjArYTFdLA0KICAgICAgICBbMix2MCthMSoyLGZhbHNlXQ0KICAgIF0NCn0NCmBgYA0KIyMjIHYtdCBncmFwaA0KJGVuOiBkaXNwbGFjZW1lbnQgJGNoOuS9jeenuyQgID0gKlZfMHQrXFxmcmFjezF9ezJ9YXReMioNCmBgYCBqcyAzMDB4MTUwDQpbew0KICAgIGRhdGE6ew0KICAgICAgICBmOnQ9PnYwKnQrMC41KmExKnQqdCwNCiAgICAgICAgczowLCBlOjIsIGQ6MTAsDQogICAgfSwNCiAgICBtYXJrOiBmYWxzZQ0KfSx7DQogICAgZGF0YTpbDQogICAgICAgIFswLDBdLA0KICAgICAgICBbMSx2MCswLjUqYTFdDQogICAgXSwNCiAgICBjb25uZWN0OiBmYWxzZQ0KfV0NCmBgYA0KIyMjIHMtdCBncmFwaA0KPC9pZj4="

/***/ })
/******/ ]);