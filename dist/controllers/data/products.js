"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../../db");
/**
 * Get all products
 * @param {sequelize.FindOptions<ProductInstance>} findOpts
 *      Options like where and attributes, required for
 *      Sequelize find operation
 * @returns {Bluebird<ProductInstance[]>}
 *      A promise of all product rows
 */
function getAllProducts(findOpts) {
    return db_1.Product.findAll(findOpts);
}
exports.getAllProducts = getAllProducts;
//# sourceMappingURL=products.js.map