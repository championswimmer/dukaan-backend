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

export const User =
    db.define<UserInstance, UserAttributes>(
        'user',
        userAttrs
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

export const Coupon =
    db.define<CouponInstance, CouponAttributes>(
        'coupon',
        couponAttrs
    )

export const Invoice =
    db.define<InvoiceInstance, InvoiceAttributes>(
        'invoice',
        invoiceAttrs
    )

export const Cart =
    db.define<CartInstance, CartAttributes>(
        'cart',
        cartAttrs
    )

export const Transaction =
    db.define<TransactionInstance, TransactionAttributes>(
        'transaction',
        transactionAttrs
    )

