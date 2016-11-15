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
var HelloComponent = (function (_super) {
    __extends(HelloComponent, _super);
    function HelloComponent(props) {
        _super.call(this, props);
    }
    HelloComponent.prototype.RenderItem = function (item) {
        return React.createElement("div", null, item.Title);
    };
    HelloComponent.prototype.render = function () {
        var _this = this;
        return React.createElement("div", null, this.props.MovieList.map(function (app, index) {
            return _this.RenderItem(app);
        }));
    };
    return HelloComponent;
}(React.Component));
exports.HelloComponent = HelloComponent;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
"use strict";
var Configuration = (function () {
    function Configuration() {
    }
    Configuration.BaseApiUrl = 'http://www.omdbapi.com/';
    Configuration.ApiUrlSuffix = '&y=&plot=full&r=json';
    Configuration.ApiKey = 'bdaada75';
    Configuration.UrlList = {
        Search: Configuration.BaseApiUrl
    };
    return Configuration;
}());
exports.Configuration = Configuration;

},{}],3:[function(require,module,exports){
"use strict";
var RequestType;
(function (RequestType) {
    RequestType[RequestType["GET"] = 'GET'] = "GET";
    RequestType[RequestType["POST"] = 'POST'] = "POST";
})(RequestType || (RequestType = {}));
exports.RequestType = RequestType;

},{}],4:[function(require,module,exports){
/// <reference path="../../typings/index.d.ts" />
"use strict";
var Enums_1 = require('./Enums');
var Helper = (function () {
    function Helper() {
    }
    Helper.AjaxRequest = function (url, type, success, datas, onError) {
        var isFormData = datas instanceof FormData ? true : false;
        var settings = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            url: url,
            type: type.toString(),
            data: !isFormData ? (type == Enums_1.RequestType.POST ? JSON.stringify(datas) : datas) : datas,
            success: function (data) { success(data); },
            error: function (xhr, ajaxOptions, thrownError) {
                if (!onError)
                    onError(xhr, ajaxOptions, thrownError);
                else
                    Helper.onAjaxError(xhr, ajaxOptions, thrownError);
            }
        };
        if (isFormData) {
            settings.processData = false;
            settings.contentType = false;
        }
        else {
            settings.dataType = "JSON";
            settings.contentType = "application/json; charset=utf-8";
            settings.crossDomain = true;
            settings.async = true;
        }
        $.ajax(settings);
    };
    Helper.onAjaxSuccess = function (data) {
        return data;
    };
    Helper.onAjaxError = function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
        alert(xhr.responseText);
    };
    Helper.GetParameterByName = function (name, url) {
        if (!url)
            url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
        if (!results)
            return null;
        if (!results[2])
            return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    };
    return Helper;
}());
exports.Helper = Helper;

},{"./Enums":3}],5:[function(require,module,exports){
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
var Hello_1 = require('./Components/Hello');
var Helper_1 = require('./Helper/Helper');
var Enums_1 = require('./Helper/Enums');
var Configuration_1 = require('./Config/Configuration');
var MainClass = (function (_super) {
    __extends(MainClass, _super);
    function MainClass(props) {
        _super.call(this, props);
        this.state = { MovieList: [] };
    }
    MainClass.prototype.SearcMovie = function () {
        var _this = this;
        Helper_1.Helper.AjaxRequest(Configuration_1.Configuration.UrlList.Search, Enums_1.RequestType.GET, function (data) {
            _this.setState({ MovieList: data });
            console.log(_this.state.MovieList);
        }, {
            s: 'terminator',
            apikey: Configuration_1.Configuration.ApiKey
        });
    };
    MainClass.prototype.render = function () {
        var _this = this;
        var output = React.createElement("div", null, 
            React.createElement(ReactBootstrap.Button, {onClick: function (e) { _this.SearcMovie(); }}), 
            " ", 
            React.createElement(Hello_1.HelloComponent, {MovieList: this.state.MovieList}));
        return output;
    };
    return MainClass;
}(React.Component));
ReactDom.render(React.createElement(MainClass, null), document.getElementById('main'));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Components/Hello":1,"./Config/Configuration":2,"./Helper/Enums":3,"./Helper/Helper":4}]},{},[5]);
