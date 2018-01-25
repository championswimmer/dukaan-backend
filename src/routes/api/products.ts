import {Router} from 'express'
import {getAllProducts} from '../../controllers/data/products'
import {validateGetProductsReq} from '../../validators/api/products'

const route = Router()

/**
 * @api {get} /products GET /products
 * @apiDescription Get all products
 * @apiName GetProducts
 * @apiGroup Products
 * @apiVersion 0.0.1
 */
route.get('/', (req, res, next) => {
    validateGetProductsReq(req)
        .then((findOpts) => getAllProducts(findOpts)
            .then((products) => res.status(200).json(products))
            .catch((dbErr) => res.status(500).json(dbErr)))
        .catch((invalidErr) => res.status(400).json(invalidErr))
})

/**
 * @api {post} /products POST /products
 * @apiDescription Add a new product
 * @apiName AddProduct
 * @apiGroup Products
 * @apiVersion 0.0.1
 *
 * @apiParam {string[]} fields
 *      The fields you want to query, (all fields if left blank)
 */
route.post('/', (req, res, next) => {

})

export default route
