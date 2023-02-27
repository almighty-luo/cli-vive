"use strict";
exports.__esModule = true;
var index_1 = require("../../central/index");
var obj = {
    cmdPath: "",
    project: "",
    logType: "log",
    templatePath: ""
};
function download() {
    return new Promise(function (resolve, reject) {
        var central = new index_1["default"](obj);
        console.log(resolve, reject, central);
        resolve(central);
    });
}
exports["default"] = download;
