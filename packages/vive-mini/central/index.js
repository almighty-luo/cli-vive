"use strict";
exports.__esModule = true;
var Central = (function () {
    function Central(option) {
        this.renderignore = ["*.svg", "*.png", "*.jpg", "*.webp", "*.mp4", "*.mp3"];
        this.moveignore = [];
        var cmdPath = option.cmdPath, project = option.project, logType = option.logType, templatePath = option.templatePath;
        this.cmdPath = cmdPath;
        this.project = project;
        this.logType = logType;
        this.templatePath = templatePath;
    }
    Central.prototype.getRenderignore = function () {
        return this.renderignore;
    };
    Central.prototype.pushRenderignore = function (args) {
        var _a;
        (_a = this.renderignore).push.apply(_a, args);
        return this.renderignore;
    };
    Central.prototype.getMoveignore = function () {
        return this.moveignore;
    };
    Central.prototype.pushMoveignore = function (args) {
        var _a;
        (_a = this.moveignore).push.apply(_a, args);
        return this.moveignore;
    };
    return Central;
}());
exports["default"] = Central;
