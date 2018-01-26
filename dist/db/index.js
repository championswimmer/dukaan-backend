"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const config = require("../../config");
const Client_1 = require("./models/Client");
const Product_1 = require("./models/Product");
const ProductCategory_1 = require("./models/ProductCategory");
const Tax_1 = require("./models/Tax");
const Invoice_1 = require("./models/Invoice");
const Coupon_1 = require("./models/Coupon");
const User_1 = require("./models/User");
const Cart_1 = require("./models/Cart");
const Transaction_1 = require("./models/Transaction");
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
exports.User = db.define('user', User_1.userAttrs);
exports.ProductCategories = db.define('product_categories', ProductCategory_1.productCategoryAttrs, defaultTableOptions);
exports.Tax = db.define('tax', Tax_1.taxAttrs, defaultTableOptions);
exports.Product = db.define('product', Product_1.productAttrs, defaultTableOptions);
exports.Coupon = db.define('coupon', Coupon_1.couponAttrs);
exports.Invoice = db.define('invoice', Invoice_1.invoiceAttrs);
exports.Cart = db.define('cart', Cart_1.cartAttrs);
exports.Transaction = db.define('transaction', Transaction_1.transactionAttrs);
//# sourceMappingURL=index.js.map