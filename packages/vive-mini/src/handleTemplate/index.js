"use strict";
exports.__esModule = true;
var fs_extra_1 = require("fs-extra");
console.log(fs_extra_1.outputFile);
function handleTemplate(central) {
    return new Promise(function (resolve, reject) {
        console.log(central);
        console.log(resolve, reject);
    });
}
exports["default"] = handleTemplate;
