import {FindOptions} from 'sequelize'
import {Product} from '../../db'
import {ProductInstance} from '../../db/models/Product'

/**
 * Get all products
 * @param {sequelize.FindOptions<ProductInstance>} findOpts
 *      Options like where and attributes, required for
 *      Sequelize find operation
 * @returns {Bluebird<ProductInstance[]>}
 *      A promise of all product rows
 */
export function getAllProducts(findOpts: FindOptions<ProductInstance>) {
    return Product.findAll(
        findOpts
    )
}
