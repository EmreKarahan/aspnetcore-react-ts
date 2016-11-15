(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
/// <reference path="../../typings/index.d.ts"/>
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
var HelloComponent = (function (_super) {
    __extends(HelloComponent, _super);
    function HelloComponent(props) {
        _super.call(this, props);
    }
    HelloComponent.prototype.render = function () {
        var b = $('#main');
        var a = React.createElement("div", null, "Hellooo ");
        console.log(b);
        return a;
    };
    return HelloComponent;
}(React.Component));
exports.HelloComponent = HelloComponent;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
(function (global){
/// <reference path="../typings/index.d.ts"/>
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var ReactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);
var Hello_1 = require('./components/Hello');
var MainClass = (function (_super) {
    __extends(MainClass, _super);
    function MainClass(props) {
        _super.call(this, props);
    }
    MainClass.prototype.render = function () {
        var output = React.createElement("div", null, 
            React.createElement(Hello_1.HelloComponent, null)
        );
        return output;
    };
    return MainClass;
}(React.Component));
ReactDom.render(React.createElement(MainClass, null), document.getElementById('main'));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./components/Hello":1}]},{},[2]);
