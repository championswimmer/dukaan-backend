"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const config = require("../../config");
const Client_1 = require("./models/Client");
const Product_1 = require("./models/Product");
const ProductCategory_1 = require("./models/ProductCategory");
const Tax_1 = require("./models/Tax");
const db = new Sequelize(config.DB.NAME, config.DB.USER, config.DB.PASSWORD, {
    dialect: 'postgres'
});
const defaultTableOptions = {
    timestamps: true,
    paranoid: true,
    underscored: true,
    underscoredAll: true,
    freezeTableName: true
};
exports.Clients = db.define('clients', Client_1.clientAttrs, defaultTableOptions);
exports.ProductCategories = db.define('product_categories', ProductCategory_1.productCategoryAttrs, defaultTableOptions);
exports.Tax = db.define('tax', Tax_1.taxAttrs, defaultTableOptions);
exports.Product = db.define('product', Product_1.productAttrs, defaultTableOptions);
// product will have fk(product_categegory_id)
exports.Product.belongsTo(exports.ProductCategories);
exports.ProductCategories.hasMany(exports.Product);
/**
 * Keeping a 1:1 mapping because we'll create one Tax 'row'
 * as a _set of taxes_. So CGST+SGST will be a type of Tax
 * a single row called GST
 *
 */
exports.Product.belongsTo(exports.Tax);
//# sourceMappingURL=index.js.map