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
    HelloComponent.prototype.render = function () {
        return React.createElement("tbody", null, this.props.MovieList.map(function (item, index) {
            return React.createElement("tr", {key: item.imdbID}, 
                React.createElement("td", null, index), 
                React.createElement("td", null, 
                    React.createElement(ReactBootstrap.Image, {width: "171", height: "180", src: item.Poster, responsive: true})
                ), 
                React.createElement("td", null, item.Title), 
                React.createElement("td", null, item.Year), 
                React.createElement("td", null, item.Title), 
                React.createElement("td", null, item.Title));
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
        this.state = (this.state = this.props);
        var result = { "Search": [{ "Title": "Terminator 2: Judgment Day", "Year": "1991", "imdbID": "tt0103064", "Type": "movie", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BZDM2YjYwYWMtMWZlNi00ZDQxLWExMDctMDAzNzQ0OTkzZjljXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" }, { "Title": "The Terminator", "Year": "1984", "imdbID": "tt0088247", "Type": "movie", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BODE1MDczNTUxOV5BMl5BanBnXkFtZTcwMTA0NDQyNA@@._V1_SX300.jpg" }, { "Title": "Terminator 3: Rise of the Machines", "Year": "2003", "imdbID": "tt0181852", "Type": "movie", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk5NzM1ODgyN15BMl5BanBnXkFtZTcwMzA5MjAzMw@@._V1_SX300.jpg" }, { "Title": "Terminator Salvation", "Year": "2009", "imdbID": "tt0438488", "Type": "movie", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BODE1MTM1MzA2NF5BMl5BanBnXkFtZTcwODQ5MTA2Mg@@._V1_SX300.jpg" }, { "Title": "Terminator Genisys", "Year": "2015", "imdbID": "tt1340138", "Type": "movie", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM1NTc0NzE4OF5BMl5BanBnXkFtZTgwNDkyNjQ1NTE@._V1_SX300.jpg" }, { "Title": "Terminator: The Sarah Connor Chronicles", "Year": "2008–2009", "imdbID": "tt0851851", "Type": "series", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMyNjA5ODIxM15BMl5BanBnXkFtZTcwMTA1MjU1MQ@@._V1_SX300.jpg" }, { "Title": "Terminator 3: Rise of the Machines", "Year": "2003", "imdbID": "tt0364056", "Type": "game", "Poster": "http://ia.media-imdb.com/images/M/MV5BMjA5OTk4MTQwNV5BMl5BanBnXkFtZTgwMzkxNTEwMTE@._V1_SX300.jpg" }, { "Title": "Terminator 2: Judgment Day", "Year": "1991", "imdbID": "tt0244839", "Type": "game", "Poster": "N/A" }, { "Title": "Lady Terminator", "Year": "1989", "imdbID": "tt0095483", "Type": "movie", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxNTk0MzE3N15BMl5BanBnXkFtZTYwNzY3Mjg5._V1_SX300.jpg" }, { "Title": "Ninja Terminator", "Year": "1985", "imdbID": "tt0199849", "Type": "movie", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ5OTc5NzI2OV5BMl5BanBnXkFtZTcwNzk4ODQyMQ@@._V1_SX300.jpg" }], "totalResults": "77", "Response": "True" };
        this.state = { search: result, page: 1 };
    }
    MainClass.prototype.SearcMovie = function () {
        var _this = this;
        console.log(this);
        var self = this;
        var query = {
            s: this.state.keyword,
            page: this.state.page,
            apikey: Configuration_1.Configuration.ApiKey
        };
        Helper_1.Helper.AjaxRequest(Configuration_1.Configuration.UrlList.Search, Enums_1.RequestType.GET, function (data) {
            _this.setState({ search: data, totalPage: (Number(data.totalResults) / data.Search.length) });
        }, query);
    };
    MainClass.prototype.ChangeKeyword = function (e) {
        this.setState({ keyword: e.target.value });
    };
    MainClass.prototype.render = function () {
        var _this = this;
        return React.createElement("div", null, 
            React.createElement(ReactBootstrap.Grid, null, 
                React.createElement(ReactBootstrap.Row, {className: "show-grid"}, 
                    React.createElement(ReactBootstrap.Col, {md: 8}, 
                        React.createElement(ReactBootstrap.Pagination, {activePage: this.state.page, onSelect: function (e) { _this.setState({ page: e }); _this.SearcMovie(); }, bsSize: "small", items: this.state.totalPage})
                    ), 
                    React.createElement(ReactBootstrap.Col, {md: 4}, 
                        React.createElement(ReactBootstrap.Button, {bsStyle: "success", bsSize: "small", onClick: function (e) { _this.SearcMovie(); }}, "Search"), 
                        React.createElement(ReactBootstrap.FormControl, {onChange: function (e) { _this.ChangeKeyword(e); }}))), 
                React.createElement(ReactBootstrap.Row, {className: "show-grid"}, 
                    React.createElement(ReactBootstrap.Col, {md: 12}, 
                        React.createElement(ReactBootstrap.Table, {responsive: true}, 
                            React.createElement("thead", null, 
                                React.createElement("tr", null, 
                                    React.createElement("th", null, "#"), 
                                    React.createElement("th", null, "Table heading"), 
                                    React.createElement("th", null, "Table heading"), 
                                    React.createElement("th", null, "Table heading"), 
                                    React.createElement("th", null, "Table heading"), 
                                    React.createElement("th", null, "Table heading"), 
                                    React.createElement("th", null, "Table heading"))
                            ), 
                            React.createElement(Hello_1.HelloComponent, {key: 1, MovieList: this.state.search.Search}))
                    )
                ), 
                React.createElement(ReactBootstrap.Row, {className: "show-grid"}, 
                    React.createElement(ReactBootstrap.Col, {md: 16}, 
                        React.createElement(ReactBootstrap.Pagination, {activePage: this.state.page, onSelect: function (e) { _this.setState({ page: e }); _this.SearcMovie(); }, bsSize: "small", items: this.state.totalPage})
                    )
                ))
        );
    };
    return MainClass;
}(React.Component));
exports.MainClass = MainClass;
ReactDom.render(React.createElement(MainClass, null), document.getElementById('main'));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Components/Hello":1,"./Config/Configuration":2,"./Helper/Enums":3,"./Helper/Helper":4}]},{},[5]);
