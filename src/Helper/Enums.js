"use strict";
var RequestType;
(function (RequestType) {
    RequestType[RequestType["GET"] = 'GET'] = "GET";
    RequestType[RequestType["POST"] = 'POST'] = "POST";
})(RequestType || (RequestType = {}));
exports.RequestType = RequestType;
