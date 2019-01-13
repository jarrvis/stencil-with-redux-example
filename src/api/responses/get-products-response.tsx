import { Product } from "../model/product";

/**
 * @author jarrvis
 * @date 2018-12
 * @version 1.0.0
 * 
 * @jsdoc response
 * @name api.responses:GetProductsResponse
 * @description
 * Products header response.
 */
export class GetProductsResponse {
        products: Array<Product> = [];
        total: number = null;
}