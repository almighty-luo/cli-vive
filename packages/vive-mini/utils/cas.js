"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cac_1 = require("cac");
const config_1 = require("../config/config");
const cli_config_json_1 = require("../cli.config.json");
class Cas {
    constructor() {
        const cli = (0, cac_1.cac)();
        cli.command("create", "创建项目：vive create xxx");
        cli.option("--p <p>", "指定模板路径: vive create xxx --p xxx/sss", {
            default: cli_config_json_1.templateDir
        });
        cli.option("--log <log>", "日志打印方式: 仅支持log和txt两种", {
            default: cli_config_json_1.logType
        });
        cli.option("--out <outPath>", "输出项目地址");
        cli.option("--http <httpAddress>", "提供http接口地址");
        cli.option("--git <gitAddress>", "提供git clone地址");
        cli.help();
        cli.version(config_1.version);
        const parse = cli.parse();
        this.parse = parse;
        this.version = config_1.version;
    }
}
exports.default = Cas;
