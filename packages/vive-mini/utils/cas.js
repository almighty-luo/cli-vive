"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cac_1 = require("cac");
class Cas {
    constructor() {
        const cli = (0, cac_1.cac)();
        cli.command("create", "创建项目：vive create xxx");
        cli.option("--p <p>", "指定模板路径: vive create xxx --p xxx/sss", {
            default: "template"
        });
        cli.option("--log <log>", "日志打印方式: 仅支持log和txt两种", {
            default: "log"
        });
        cli.help();
        const parse = cli.parse();
        this.parse = parse;
    }
}
exports.default = Cas;