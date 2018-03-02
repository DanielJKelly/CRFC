"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var src_1 = require("../src");
var app = express();
src_1.default(app);
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Application is listening on port " + port + ".");
});
