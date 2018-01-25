import {DataTypeAbstract, DefineAttributeColumnOptions, DefineAttributes, Instance, Model} from 'sequelize'
import * as Sequelize from 'sequelize'

export interface InvoiceAttributes {
    id: number
}

type InvoiceDefineAttributes = {
    [x in keyof InvoiceAttributes]: string | DataTypeAbstract | DefineAttributeColumnOptions
    }

export const invoiceAttrs: InvoiceDefineAttributes = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}

export interface InvoiceInstance extends Instance<InvoiceAttributes> {
    get(): InvoiceAttributes
}

export interface Invoice extends Model<InvoiceInstance, InvoiceAttributes> {

}
