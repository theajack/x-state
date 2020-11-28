(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.experience = {}));
}(this, (function (exports) { 'use strict';

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  // import 'es6-promise/auto';
  var fn = function fn() {
    var _console;

    (_console = console).log.apply(_console, arguments);
  };
  var A = function A() {
    _classCallCheck(this, A);
  };
  function aa() {
    return _aa.apply(this, arguments);
  } // import event from '../../event/event';
  // import {XState, buildXState} from './store';
  // console.log(event, XState, buildXState);
  // let state = {
  //     a: 1,
  //     b: 2,
  // };
  // let commit = {
  //     addA () {
  //         state.a += 1;
  //     }
  // };
  // let dispatch = {
  //     test () {
  //         return new Promise((res) => {
  //             setTimeout(() => {
  //                 state.b = 3;
  //                 res();
  //             }, 3000);
  //         });
  //     }
  // };
  // let getters = {
  //     aplus () {
  //         return state.a + 1;
  //     }
  // };
  // export let store = {
  //     state,
  //     commit,
  //     dispatch,
  //     getters,
  // };
  // store = buildXState(store);

  function _aa() {
    _aa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _aa.apply(this, arguments);
  }

  exports.A = A;
  exports.aa = aa;
  exports.fn = fn;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
