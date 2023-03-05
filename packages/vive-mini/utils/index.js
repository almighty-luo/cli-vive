"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = exports.outputFile = exports.getOptionOfFile = exports.hasOptionFile = exports.processCwd = void 0;
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
function processCwd() {
    return process.cwd();
}
exports.processCwd = processCwd;
function hasOptionFile(path) {
    try {
        if ((0, fs_extra_1.pathExistsSync)(path))
            return true;
    }
    catch (error) {
        return false;
    }
    return false;
}
exports.hasOptionFile = hasOptionFile;
function getOptionOfFile() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const filePath = (0, path_1.join)(processCwd(), "cli.config.json");
        const option = yield (hasOptionFile(filePath) ? (_a = filePath, Promise.resolve().then(() => require(_a))) : Promise.resolve().then(() => require("../cli.config.json")));
        return option;
    });
}
exports.getOptionOfFile = getOptionOfFile;
function outputFile(file, text, flag = "a+") {
    (0, fs_extra_1.outputFileSync)(file, text, { flag });
}
exports.outputFile = outputFile;
function formatDate(date, format = "YYYY-mm-dd HH:MM:SS") {
    const opt = {
        "Y+": date.getFullYear().toString(),
        "m+": (date.getMonth() + 1).toString(),
        "d+": date.getDate().toString(),
        "H+": date.getHours().toString(),
        "M+": date.getMinutes().toString(),
        "S+": date.getSeconds().toString()
    };
    for (const k in opt) {
        const r = new RegExp("(" + k + ")").exec(format);
        if (r)
            format = format.replace(r[1], RegExp.$1.length === 1 ? opt[k] : opt[k].padStart(RegExp.$1.length, "0"));
    }
    return format;
}
exports.formatDate = formatDate;
exports.default = {
    hasOptionFile,
    getOptionOfFile,
    processCwd,
    outputFile,
    formatDate
};
