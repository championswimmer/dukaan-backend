import {DataTypeAbstract, DefineAttributeColumnOptions, DefineAttributes, Instance, Model} from 'sequelize'
import * as Sequelize from 'sequelize'

export interface TransactionAttributes {
    id: number
    wallet_tx_type?: string
    wallet_tx_amt?: number
    type: string
    amount_paid: number
    payment_type: string
    rp_tx_id?: string
    status: string
    currency: string
    meta: any // TODO: Create a lose definition
}

type TransactionDefineAttributes = {
    [x in keyof TransactionAttributes]: string | DataTypeAbstract | DefineAttributeColumnOptions
    }

export const transactionAttrs: TransactionDefineAttributes = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // cart: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //         model: 'Cart',
    //         key: 'id'
    //     },
    //     allowNull: false
    // },
    // created_by: {
    //     type: Sequelize.STRING,
    //     allowNull: false
    // },
    // reconciled_by: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //         model: 'User',
    //         key: 'id'
    //     }
    // },
    // user: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //         model: 'User',
    //         key: 'id'
    //     },
    //     allowNull: false
    // },
    wallet_tx_type: Sequelize.ENUM('credit', 'debit'),
    wallet_tx_amt: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        allowNull: false
    },
    type: {
        type: Sequelize.ENUM('credit', 'debit'),
        allowNull: false
    },
    amount_paid: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    payment_type: Sequelize.ENUM('cash', 'razorpay', 'pos', 'cheque'),
    rp_tx_id: Sequelize.STRING,
    status: Sequelize.ENUM(
        'requested',
        'created',
        'authorised',
        'captured',
        'failed',
        'refunded'
    ),
    currency: {
        type: Sequelize.ENUM('INR'),
        allowNull: false
    },
    meta: Sequelize.JSONB
}

export interface TransactionInstance extends Instance<TransactionAttributes> {
    get(): TransactionAttributes
}

export interface Transaction extends Model<TransactionInstance, TransactionAttributes> {

}
