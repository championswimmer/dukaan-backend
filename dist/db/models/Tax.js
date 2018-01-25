"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
exports.taxAttrs = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name_admin: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    percentage: Sequelize.INTEGER,
    sub_taxes: Sequelize.ARRAY(Sequelize.JSONB)
};
//# sourceMappingURL=Tax.js.map