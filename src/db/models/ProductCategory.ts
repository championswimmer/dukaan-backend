import {DataTypeAbstract, DefineAttributeColumnOptions, DefineAttributes, Instance, Model} from 'sequelize'
import * as Sequelize from 'sequelize'

export interface ProductCategoryAttributes {
    id: number,
    name: string,
    emi_allowed: boolean,
}

type ProductCategoryDefineAttributes = {
    [x in keyof ProductCategoryAttributes]: string | DataTypeAbstract | DefineAttributeColumnOptions
}

export const productCategoryAttrs: ProductCategoryDefineAttributes = {
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
    emi_allowed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }
}

export interface ProductCategoryInstance extends Instance<ProductCategoryAttributes> {
    get(): ProductCategoryAttributes
}

export interface ProductCategory extends Model<ProductCategoryInstance, ProductCategoryAttributes> {

}
