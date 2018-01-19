import {DefineAttributes, Instance, Model} from "sequelize";
import * as Sequelize from 'sequelize'

export interface ProductCategoryAttributes {
    id: number,
    secret: string,
    whitelist_domains: string[],
    whitelist_ips: string[],
    redirect_url: string[]
}

export const productCategoryAttrs: DefineAttributes = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    secret: Sequelize.STRING(32),
    whitelist_domains: Sequelize.ARRAY(Sequelize.STRING),
    whitelist_ips: Sequelize.ARRAY(Sequelize.STRING),
    redirect_url: Sequelize.STRING
}

export interface ProductCategoryInstance extends Instance<ProductCategoryAttributes> {
    get(): ProductCategoryAttributes
}

export interface ProductCategory extends Model<ProductCategoryInstance, ProductCategoryAttributes> {

}