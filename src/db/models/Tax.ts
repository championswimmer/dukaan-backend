import {DataTypeAbstract, DefineAttributeColumnOptions, DefineAttributes, Instance, Model} from 'sequelize'
import * as Sequelize from 'sequelize'

export interface TaxAttributes {
    id: number
}

type TaxKeys = keyof TaxAttributes

type TaxDefineAttributes = {
    [x in TaxKeys]: string | DataTypeAbstract | DefineAttributeColumnOptions
}

export const taxAttrs: TaxDefineAttributes = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}

export interface TaxInstance extends Instance<TaxAttributes> {
    get(): TaxAttributes
}

export interface Tax extends Model<TaxInstance, TaxAttributes> {

}
