"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loading = exports.formatDate = exports.outputFile = exports.getOptionOfFile = exports.hasOptionFile = exports.processCwd = void 0;
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
const loading_1 = __importDefault(require("../utils/loading"));
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
        const option = yield (hasOptionFile(filePath) ? (_a = filePath, Promise.resolve().then(() => __importStar(require(_a)))) : Promise.resolve().then(() => __importStar(require("../cli.config.json"))));
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
function loading(text = "加载中...") {
    return new loading_1.default(text);
}
exports.loading = loading;
exports.default = {
    hasOptionFile,
    getOptionOfFile,
    processCwd,
    outputFile,
    formatDate,
    loading
};
