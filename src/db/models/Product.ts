import {DataTypeAbstract, DefineAttributeColumnOptions, DefineAttributes, Instance, Model} from 'sequelize'
import * as Sequelize from 'sequelize'

export interface ProductAttributes {
    id: number
}

type ProductDefineAttributes = {
    [x in keyof ProductAttributes]: string | DataTypeAbstract | DefineAttributeColumnOptions
    }

export const productAttrs: ProductDefineAttributes = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}

export interface ProductInstance extends Instance<ProductAttributes> {
    get(): ProductAttributes
}

export interface Product extends Model<ProductInstance, ProductAttributes> {

}
