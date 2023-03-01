"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dirnameStr = exports.processCwd = void 0;
const path = require("path");
exports.processCwd = process.cwd();
exports.dirnameStr = path.resolve(__dirname, "..");
