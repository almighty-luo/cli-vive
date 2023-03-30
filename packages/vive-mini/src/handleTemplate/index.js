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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ejs_1 = require("ejs");
const fs_extra_1 = require("fs-extra");
const metalsmith_1 = __importDefault(require("metalsmith"));
const utils_1 = require("../../utils");
fs_extra_1.outputFile;
function handleTemplate(central) {
    return new Promise((resolve, reject) => {
        central;
        const templatePath = central.templatePath;
        const inDirNamePath = "";
        const renderignore = central.renderignore;
        const renderData = central.renderData;
        (0, metalsmith_1.default)("")
            .source(templatePath)
            .destination(inDirNamePath)
            .use((files, metal, done) => __awaiter(this, void 0, void 0, function* () {
            for (const key in files) {
                if (Object.hasOwnProperty.call(files, key) && (0, utils_1.noHas)(key, renderignore)) {
                    const element = files[key];
                    const contents = element.contents.toString();
                    if (contents.includes("<%")) {
                        const newContents = (0, ejs_1.render)(contents, renderData);
                        element.contents = Buffer.from(newContents);
                    }
                }
            }
            done(null, files, metal);
        }))
            .clean(true)
            .build((err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(central);
            }
        });
    });
}
exports.default = handleTemplate;
