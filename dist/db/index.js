"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const config = require("../../config");
const Client_1 = require("./models/Client");
const ProductCategories_1 = require("./models/ProductCategories");
const db = new Sequelize(config.DB.NAME, config.DB.USER, config.DB.PASSWORD, {
    dialect: 'postgres'
});
exports.Clients = db.define('clients', Client_1.clientAttrs);
exports.ProductCategories = db.define('product_categories', ProductCategories_1.productCategoryAttrs);
//# sourceMappingURL=index.js.map