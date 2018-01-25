"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_1 = require("../../controllers/data/products");
const products_2 = require("../../validators/api/products");
const route = express_1.Router();
/**
 * @api {get} /products GET /products
 * @apiDescription Get all products
 * @apiName GetProducts
 * @apiGroup Products
 * @apiVersion 0.0.1
 */
route.get('/', (req, res, next) => {
    products_2.validateGetProductsReq(req)
        .then((findOpts) => products_1.getAllProducts(findOpts)
        .then((products) => res.status(200).json(products))
        .catch((dbErr) => res.status(500).json(dbErr)))
        .catch((invalidErr) => res.status(400).json(invalidErr));
});
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
});
exports.default = route;
//# sourceMappingURL=products.js.map