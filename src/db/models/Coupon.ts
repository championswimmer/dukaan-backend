import {DataTypeAbstract, DefineAttributeColumnOptions, DefineAttributes, Instance, Model} from 'sequelize'
import * as Sequelize from 'sequelize'

export interface CouponAttributes {
    id: number
    authority_doc?: string
    code: string
    categories: number[]
    products: number[]
    referrer_cashback?: number
    valid_start: Date
    valid_end: Date
    type: string
    amount: number
    total: number
    left: number
}

type CouponDefineAttributes = {
    [x in keyof Partial<CouponAttributes>]: string | DataTypeAbstract | DefineAttributeColumnOptions
    }

export const couponAttrs: CouponDefineAttributes = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // created_by: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false,
    //     references: {
    //         model: 'User',
    //         key: 'id'
    //     }
    // },
    authority_doc: {
        type: Sequelize.STRING
    },
    code: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    categories: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
    },
    products: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
    },
    // user: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //         model: 'User',
    //         key: 'id'
    //     }
    // },
    // referrer: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //         model: 'User',
    //         key: 'id'
    //     }
    // },
    referrer_cashback: {
        type: Sequelize.FLOAT
    },
    valid_start: {
        type: Sequelize.DATE,
        allowNull: false
    },
    valid_end: {
        type: Sequelize.DATE,
        allowNull: false
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    amount: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    total: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    left: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}

export interface CouponInstance extends Instance<CouponAttributes> {
    get(): CouponAttributes
}

export interface Coupon extends Model<CouponInstance, CouponAttributes> {

}
