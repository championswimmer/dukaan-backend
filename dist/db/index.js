"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const config = require("../../config");
const Client_1 = require("./models/Client");
const ProductCategory_1 = require("./models/ProductCategory");
const Tax_1 = require("./models/Tax");
const db = new Sequelize(config.DB.NAME, config.DB.USER, config.DB.PASSWORD, {
    dialect: 'postgres'
});
exports.Clients = db.define('clients', Client_1.clientAttrs);
exports.ProductCategories = db.define('product_categories', ProductCategory_1.productCategoryAttrs);
exports.Tax = db.define('tax', Tax_1.taxAttrs);
//# sourceMappingURL=index.js.map