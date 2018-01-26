import * as Sequelize from 'sequelize'
import {DataTypes, DefineOptions} from 'sequelize'
import * as config from '../../config'
import {ClientAttributes, clientAttrs, ClientInstance} from './models/Client'
import {ProductAttributes, productAttrs, ProductInstance} from './models/Product'
import {ProductCategoryAttributes, productCategoryAttrs, ProductCategoryInstance} from './models/ProductCategory'
import {TaxAttributes, taxAttrs, TaxInstance} from './models/Tax'
import {InvoiceAttributes, invoiceAttrs, InvoiceInstance} from './models/Invoice'
import {CouponAttributes, couponAttrs, CouponInstance} from './models/Coupon'
import {UserAttributes, userAttrs, UserInstance} from './models/User'
import {CartAttributes, cartAttrs, CartInstance} from './models/Cart'
import {TransactionAttributes, transactionAttrs, TransactionInstance} from './models/Transaction'

export const db = new Sequelize(
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

export const Client =
    db.define<ClientInstance, ClientAttributes>(
        'clients',
        clientAttrs,
        defaultTableOptions
    )

export const User =
    db.define<UserInstance, UserAttributes>(
        'users',
        userAttrs
    )

export const ProductCategory =
    db.define<ProductCategoryInstance, ProductCategoryAttributes>(
        'product_categories',
        productCategoryAttrs,
        defaultTableOptions
    )
export const Tax =
    db.define<TaxInstance, TaxAttributes>(
        'taxes',
        taxAttrs,
        defaultTableOptions
    )

export const Product =
    db.define<ProductInstance, ProductAttributes>(
        'products',
        productAttrs,
        defaultTableOptions
    )

Product.belongsTo(ProductCategory)

export const Coupon =
    db.define<CouponInstance, CouponAttributes>(
        'coupons',
        couponAttrs
    )

export const Invoice =
    db.define<InvoiceInstance, InvoiceAttributes>(
        'invoices',
        invoiceAttrs
    )

export const Cart =
    db.define<CartInstance, CartAttributes>(
        'carts',
        cartAttrs
    )

export const Transaction =
    db.define<TransactionInstance, TransactionAttributes>(
        'transactions',
        transactionAttrs
    )
