import {DataTypeAbstract, DefineAttributeColumnOptions, DefineAttributes, Instance, Model} from 'sequelize'
import * as Sequelize from 'sequelize'

export interface InvoiceAttributes {
    id: number
    quantity: number
    list_price: number
    coupon_added_at?: Date
    final_price: number
    amount: number,
    status: string
    time_meta_data: any
}

type InvoiceDefineAttributes = {
    [x in keyof InvoiceAttributes]: string | DataTypeAbstract | DefineAttributeColumnOptions
    }

export const invoiceAttrs: InvoiceDefineAttributes = {
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
    status: { // TODO: Finalize this type
        type: Sequelize.ENUM(
            'requested',
            'created',
            'authorised',
            'captured',
            'failed',
            'refunded'
        )
    },
    time_meta_data: {
        type: Sequelize.JSONB
    }
}

export interface InvoiceInstance extends Instance<InvoiceAttributes> {
    get(): InvoiceAttributes
}

export interface Invoice extends Model<InvoiceInstance, InvoiceAttributes> {

}
