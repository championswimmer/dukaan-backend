import {DataTypeAbstract, DefineAttributeColumnOptions, DefineAttributes, Instance, Model} from 'sequelize'
import * as Sequelize from 'sequelize'

export interface UserAttributes {
    id: number // This will come from Oneauth
    role: string,
    wallet_amount: number
}

type UserDefineAttributes = {
    [x in keyof UserAttributes]: string | DataTypeAbstract | DefineAttributeColumnOptions
    }

export const userAttrs: UserDefineAttributes = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    role: {
        type: Sequelize.ENUM('admin', 'user'),
        allowNull: false
    },
    wallet_amount: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        allowNull: false
    }
}

export interface UserInstance extends Instance<UserAttributes> {
    get(): UserAttributes
}

export interface User extends Model<UserInstance, UserAttributes> {

}
