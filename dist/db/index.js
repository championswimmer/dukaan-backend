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
exports.db = new Sequelize(config.DB.NAME, config.DB.USER, config.DB.PASSWORD, {
    dialect: 'postgres'
});
const defaultTableOptions = {
    timestamps: true,
    paranoid: true,
    underscored: true,
    underscoredAll: true,
    freezeTableName: true
};
exports.Client = exports.db.define('clients', Client_1.clientAttrs, defaultTableOptions);
exports.User = exports.db.define('users', User_1.userAttrs);
exports.ProductCategory = exports.db.define('product_categories', ProductCategory_1.productCategoryAttrs, defaultTableOptions);
exports.Tax = exports.db.define('taxes', Tax_1.taxAttrs, defaultTableOptions);
exports.Product = exports.db.define('products', Product_1.productAttrs, defaultTableOptions);
exports.Product.belongsTo(exports.ProductCategory);
exports.Coupon = exports.db.define('coupons', Coupon_1.couponAttrs);
exports.Invoice = exports.db.define('invoices', Invoice_1.invoiceAttrs);
exports.Cart = exports.db.define('carts', Cart_1.cartAttrs);
exports.Transaction = exports.db.define('transactions', Transaction_1.transactionAttrs);
//# sourceMappingURL=index.js.map