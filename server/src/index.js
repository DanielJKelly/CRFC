"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path_1 = require("path");
var routing_mw_1 = require("./middleware/routing.mw");
var clientDist = path_1.join(__dirname, '..', '..', 'client', 'dist');
var configure = function (app) {
    app
        .use(express.static(clientDist))
        .use(express.json())
        .use(express.urlencoded({ extended: false }))
        .use(routing_mw_1.default);
};
exports.default = configure;
