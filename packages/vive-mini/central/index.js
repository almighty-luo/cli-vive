"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Central {
    constructor(option) {
        this.deletePropsList = [];
        this._renderignore = ["*.svg", "*.png", "*.jpg", "*.webp", "*.mp4", "*.mp3"];
        this._moveignore = [];
        const { cmdPath, project, logType, templatePath } = option;
        this.cmdPath = cmdPath;
        this.project = project;
        this.logType = logType;
        this.templatePath = templatePath;
    }
    get renderignore() {
        return this._renderignore;
    }
    pushRenderignore(args) {
        this._renderignore.push(...args);
        return this._renderignore;
    }
    get moveignore() {
        return this._moveignore;
    }
    pushMoveignore(args) {
        this._moveignore.push(...args);
        return this._moveignore;
    }
}
exports.default = Central;
