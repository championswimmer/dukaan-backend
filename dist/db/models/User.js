"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
exports.userAttrs = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    role: {
        type: Sequelize.ENUM('admin', 'user'),
        allowNull: false
    },
    wallet_amount: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        allowNull: false
    }
};
//# sourceMappingURL=User.js.map