import * as Sequelize from 'sequelize'
import {DataTypes, DefineOptions} from 'sequelize'
import * as config from '../../config'
import {ClientAttributes, clientAttrs, ClientInstance} from './models/Client'
import {ProductAttributes, productAttrs, ProductInstance} from './models/Product'
import {ProductCategoryAttributes, productCategoryAttrs, ProductCategoryInstance} from './models/ProductCategory'
import {TaxAttributes, taxAttrs, TaxInstance} from './models/Tax'

const db = new Sequelize(
    config.DB.NAME,
    config.DB.USER,
    config.DB.PASSWORD,
    {
        dialect: 'postgres'
    }
)

const defaultTableOptions: DefineOptions<any> = {
    timestamps: true,
    paranoid: true,
    underscored: true,
    underscoredAll: true,
    freezeTableName: true
}

export const Clients =
    db.define<ClientInstance, ClientAttributes>(
        'clients',
        clientAttrs,
        defaultTableOptions
    )

export const ProductCategories =
    db.define<ProductCategoryInstance, ProductCategoryAttributes>(
        'product_categories',
        productCategoryAttrs,
        defaultTableOptions
    )
export const Tax =
    db.define<TaxInstance, TaxAttributes>(
        'tax',
        taxAttrs,
        defaultTableOptions
    )

export const Product =
    db.define<ProductInstance, ProductAttributes>(
        'product',
        productAttrs,
        defaultTableOptions
    )
