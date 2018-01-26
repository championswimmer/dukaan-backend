import {DataTypeAbstract, DefineAttributeColumnOptions, DefineAttributes, Instance, Model} from 'sequelize'
import * as Sequelize from 'sequelize'
import {ProductCategoryInstance} from './ProductCategory'

export interface ProductAttributes {
    id: number
    name: string
    mrp: number
    list_price: number
    emi_min_base: number
    emi_min_repeat: number
    display_slug: string
    listed: boolean
    instances?: number
    per_user: number,
    category: ProductCategoryInstance
    redirect_url?: string

}

type ProductDefineAttributes = {
    [x in keyof Partial<ProductAttributes>]: string | DataTypeAbstract | DefineAttributeColumnOptions
    }

export const productAttrs: ProductDefineAttributes = {
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
}

export interface ProductInstance extends Instance<ProductAttributes> {
    get(): ProductAttributes
}

export interface Product extends Model<ProductInstance, ProductAttributes> {

}
