import {DataTypeAbstract, DefineAttributeColumnOptions, DefineAttributes, Instance, Model} from 'sequelize'
import * as Sequelize from 'sequelize'

export interface TaxAttributes {
    id: number
    name: string
    name_admin: string
    percentage: number
    sub_taxes: any[]
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
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name_admin: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    percentage: Sequelize.INTEGER,
    sub_taxes: Sequelize.ARRAY(Sequelize.JSONB)
}

export interface TaxInstance extends Instance<TaxAttributes> {
    get(): TaxAttributes
}

export interface Tax extends Model<TaxInstance, TaxAttributes> {

}
