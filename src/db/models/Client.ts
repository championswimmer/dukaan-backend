import {DataTypeAbstract, DefineAttributeColumnOptions, DefineAttributes, Instance, Model} from 'sequelize'
import * as Sequelize from 'sequelize'

export interface ClientAttributes {
    id: number,
    secret: string,
    whitelist_domains: string[],
    whitelist_ips: string[],
    redirect_url: string
}

type ClientDefineAttributes = {
    [x in keyof ClientAttributes]: string | DataTypeAbstract | DefineAttributeColumnOptions
}

export const clientAttrs: ClientDefineAttributes = {
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

export interface ClientInstance extends Instance<ClientAttributes> {
    get(): ClientAttributes
}

export interface Client extends Model<ClientInstance, ClientAttributes> {

}
