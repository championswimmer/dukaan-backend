"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
exports.clientAttrs = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    secret: {
        type: Sequelize.STRING(32),
        allowNull: false,
        unique: true
    },
    whitelist_domains: Sequelize.ARRAY(Sequelize.STRING),
    whitelist_ips: Sequelize.ARRAY(Sequelize.STRING),
    redirect_url: {
        type: Sequelize.STRING,
        allowNull: false
    }
};
//# sourceMappingURL=Client.js.map