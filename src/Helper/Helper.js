/// <reference path="../../typings/index.d.ts" />
"use strict";
var Enums_1 = require('./Enums');
var Helper = (function () {
    function Helper() {
    }
    Helper.AjaxRequest = function (url, type, success, datas, onError) {
        var isFormData = datas instanceof FormData ? true : false;
        var settings = {
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
