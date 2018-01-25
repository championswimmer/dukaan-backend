"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
exports.invoiceAttrs = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // product: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //         model: 'Product',
    //         key: 'id'
    //     },
    //     allowNull: false
    // },
    // client: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //         model: 'Client',
    //         key: 'id'
    //     },
    //     allowNull: false
    // },
    // buyer: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //         model: 'User',
    //         key: 'id'
    //     },
    //     allowNull: false
    // },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    list_price: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    // coupon: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //         model: 'Coupon',
    //         key: 'id'
    //     }
    // },
    // coupon_added_by: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //         model: 'User',
    //         key: 'id'
    //     }
    // },
    coupon_added_at: {
        type: Sequelize.DATE
    },
    final_price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    amount: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('requested', 'created', 'authorised', 'captured', 'failed', 'refunded')
    },
    time_meta_data: {
        type: Sequelize.JSONB
    }
};
//# sourceMappingURL=Invoice.js.map