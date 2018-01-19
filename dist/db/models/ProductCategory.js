"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
exports.productCategoryAttrs = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    emi_allowed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }
};
//# sourceMappingURL=ProductCategory.js.map