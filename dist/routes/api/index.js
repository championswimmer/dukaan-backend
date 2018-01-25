"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_1 = require("./products");
const route = express_1.Router();
route.use('/products', products_1.default);
exports.default = route;
//# sourceMappingURL=index.js.map