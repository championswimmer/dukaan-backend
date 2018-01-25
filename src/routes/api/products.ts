import {Router} from 'express'
import {getAllProducts} from '../../controllers/data/products'
import {validateGetProductsReq} from '../../validators/api/products'

const route = Router()

/**
 * Get all products
 */
route.get('/', (req, res, next) => {
    validateGetProductsReq(req)
        .then((findOpts) => getAllProducts(findOpts)
            .then((products) => res.status(200).json(products))
            .catch((dbErr) => res.status(500).json(dbErr)))
        .catch((invalidErr) => res.status(400).json(invalidErr))
})

/**
 * Add a new product
 */
route.post('/', (req, res, next) => {

})

export default route
