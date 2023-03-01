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
exports.getOptionOfFile = exports.hasOptionFile = exports.processCwd = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
function processCwd() {
    return process.cwd();
}
exports.processCwd = processCwd;
function hasOptionFile(path) {
    try {
        (0, fs_1.accessSync)(path);
    }
    catch (error) {
        return false;
    }
    return true;
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
exports.default = {
    hasOptionFile,
    getOptionOfFile,
    processCwd
};
