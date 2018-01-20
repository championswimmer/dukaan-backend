import * as Sequelize from 'sequelize'
import {DataTypes} from 'sequelize'
import * as config from '../../config'
import {ClientAttributes, clientAttrs, ClientInstance} from './models/Client'
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
export const Clients =
    db.define<ClientInstance, ClientAttributes>('clients', clientAttrs)

export const ProductCategories =
    db.define<ProductCategoryInstance, ProductCategoryAttributes>(
        'product_categories',
        productCategoryAttrs
    )
export const Tax =
    db.define<TaxInstance, TaxAttributes>(
        'tax',
        taxAttrs
    )

Clients.find({
    where: {

    }
})