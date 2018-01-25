"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
exports.productAttrs = {
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
    // category: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //         model: 'ProductCategory',
    //         key: 'id'
    //     },
    //     allowNull: false
    // },
    // owner_client: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //         model: 'Client',
    //         key: 'id'
    //     },
    //     allowNull: false
    // },
    // owner_user: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //         model: 'User',
    //         key: 'id'
    //     },
    //     allowNull: false
    // },
    mrp: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    list_price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    emi_min_base: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    emi_min_repeat: {
        type: Sequelize.FLOAT
    },
    // taxes: {
    //     type: Sequelize.ARRAY
    // },
    display_slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    listed: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    instances: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    per_user: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    redirect_url: {
        type: Sequelize.STRING,
    }
};
//# sourceMappingURL=Product.js.map