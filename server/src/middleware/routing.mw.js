"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const lodash_1 = require("lodash");
const utils_mw_1 = require("./utils.mw");
function isServerAsset(path) {
    const pieces = path.split('/');
    if (lodash_1.isEmpty(pieces.length)) {
        return false;
    }
    const last = pieces[pieces.length - 1];
    if (utils_mw_1.isPresent('/api', path) || utils_mw_1.isPresent('/?', path)) {
        return true;
    }
    else if (utils_mw_1.isPresent('.', last)) {
        return true;
    }
    else {
        return false;
    }
}
function stateRouting(req, res, next) {
    if (isServerAsset(req.url)) {
        next();
    }
    else {
        res.sendFile(path_1.join(__dirname, '..', '..', '..', 'client', 'dist', 'index.html'));
    }
}
exports.default = stateRouting;
