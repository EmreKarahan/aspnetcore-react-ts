/// <reference path="../../typings/index.d.ts" />

import {RequestType} from './Enums'

class Helper {

    static AjaxRequest(url: string, type: RequestType, success: any, datas?: any, onError?: any): any {

        let isFormData = datas instanceof FormData ? true : false;

        let settings: JQueryAjaxSettings = {
            url: url,
            type: type.toString(),
            data: !isFormData ? (type == RequestType.POST ? JSON.stringify(datas) : datas) : datas,
            success: (data) => { success(data); },
            error: (xhr, ajaxOptions, thrownError) => {
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
    }



    static onAjaxSuccess(data: any): any {
        return data;
    }

    static onAjaxError(xhr: any, ajaxOptions: any, thrownError: any): void {
        alert(xhr.status);
        alert(thrownError);
        alert(xhr.responseText);
    }

    static GetParameterByName(name: string, url?: string): string {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

}

export {Helper}