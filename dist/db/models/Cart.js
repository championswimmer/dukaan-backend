"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
exports.cartAttrs = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // buyer: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //         model: 'User',
    //         key: 'id'
    //     },
    //     allowNull: false
    // },
    invoices: {
        type: Sequelize.ARRAY,
        allowNull: false
    },
    payment_status: {
        type: Sequelize.ENUM(// FIXME: Finalize the enum params
        'unpaid', 'partial', 'paid'),
        allowNull: false
    },
    amount: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    credits_used: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    amount_payable: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
};
//# sourceMappingURL=Cart.js.map