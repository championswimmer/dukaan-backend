import {DataTypeAbstract, DefineAttributeColumnOptions, DefineAttributes, Instance, Model} from 'sequelize'
import * as Sequelize from 'sequelize'

export interface CartAttributes {
    id: number
    invoices: any[]
    payment_status: any // TODO: Set type
    amount: number
    credits_used: number
    amount_payable: number
}

type CartDefineAttributes = {
    [x in keyof CartAttributes]: string | DataTypeAbstract | DefineAttributeColumnOptions
    }

export const cartAttrs: CartDefineAttributes = {
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
        // FIXME: DEFINE THIS
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
}

export interface CartInstance extends Instance<CartAttributes> {
    get(): CartAttributes
}

export interface Cart extends Model<CartInstance, CartAttributes> {

}
