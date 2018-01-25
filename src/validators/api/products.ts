import {Request} from 'express'
import {FindOptions} from 'sequelize'
import {productAttrs, ProductInstance} from '../../db/models/Product'

function checkFields(req: Request, findOpts: FindOptions<ProductInstance>) {
    if (req.body.fields) {
        findOpts.attributes = []

        // Check that no fields that don't actually exist are requested
        for (const field of req.body.fields) {
            if (Object.keys(productAttrs).indexOf(field)) {
                throw new Error(`Invalid field = ${field}`)
            } else {
                findOpts.attributes.push(field)
            }
        }
    }
}

export async function validateGetProductsReq(req: Request) {
    const findOpts: FindOptions<ProductInstance> = {
    }
    checkFields(req, findOpts)

    return findOpts
}
