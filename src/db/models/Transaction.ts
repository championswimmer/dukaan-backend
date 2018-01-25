import {DataTypeAbstract, DefineAttributeColumnOptions, DefineAttributes, Instance, Model} from 'sequelize'
import * as Sequelize from 'sequelize'

export interface TransactionAttributes {
    id: number
}

type TransactionDefineAttributes = {
    [x in keyof TransactionAttributes]: string | DataTypeAbstract | DefineAttributeColumnOptions
    }

export const transactionAttrs: TransactionDefineAttributes = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}

export interface TransactionInstance extends Instance<TransactionAttributes> {
    get(): TransactionAttributes
}

export interface Transaction extends Model<TransactionInstance, TransactionAttributes> {

}
