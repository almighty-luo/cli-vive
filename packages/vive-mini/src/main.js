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
const index_1 = __importDefault(require("./download/index"));
const index_2 = __importDefault(require("./handleTemplate/index"));
const index_3 = __importDefault(require("./deleteFlie/index"));
const cas_1 = __importDefault(require("../utils/cas"));
const log_1 = __importDefault(require("../utils/log"));
log_1.default;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const cas = new cas_1.default();
        const args = cas.parse.args;
        const options = cas.parse.options;
        console.log(args);
        console.log(options);
        if (!args.length)
            return new Error("请输入创建项目名称");
        const downloadCentral = yield (0, index_1.default)(args[0], options.p, options.log);
        const handleTemplateCentral = yield (0, index_2.default)(downloadCentral);
        (0, index_3.default)(handleTemplateCentral);
    });
}
main();
