(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
xtag.register('multi-choice', require('./multi-choice/multi-choice.js'))

},{"./multi-choice/multi-choice.js":3}],2:[function(require,module,exports){
module.exports = "<div>\n  <h3>Test</h3>\n  <button>\n    Click me\n  </button>\n</iv>\n";

},{}],3:[function(require,module,exports){
var clickCount = 0

xtag.pseudos.double = {

  action: function(pseudo, event){
    setTimeout(function(){
      clickCount = 0
    },200)
    if (clickCount > 0) console.log('double click!')
    else console.log('single click!')
    clickCount = 1
  }

}

module.exports = {

  content: require('./multi-choice.html'),

  lifecycle: {
    created: function () {

    },
    inserted: function () {

    },
    removed: function () {

    },
    attributeChanged: function (attrName, oldValue, newValue) {

    }
  },
  events: {
    'click:double': function(event){
      console.log('click!', event);
    }
  },
  accessors: {

  },
  methods: {

  }

}

},{"./multi-choice.html":2}],4:[function(require,module,exports){
require('./components')

document.addEventListener('DOMContentLoaded', function(){

})

},{"./components":1}]},{},[4]);
