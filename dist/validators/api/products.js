"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("../../db/models/Product");
function checkFields(req, findOpts) {
    if (req.body.fields) {
        findOpts.attributes = [];
        // Check that no fields that don't actually exist are requested
        for (const field of req.body.fields) {
            if (Object.keys(Product_1.productAttrs).indexOf(field)) {
                throw new Error(`Invalid field = ${field}`);
            }
            else {
                findOpts.attributes.push(field);
            }
        }
    }
}
function validateGetProductsReq(req) {
    return __awaiter(this, void 0, void 0, function* () {
        const findOpts = {};
        checkFields(req, findOpts);
        return findOpts;
    });
}
exports.validateGetProductsReq = validateGetProductsReq;
//# sourceMappingURL=products.js.map