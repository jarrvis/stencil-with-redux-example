import qs from "qs";
import moment_ from 'moment';
const moment = moment_; 

/**
 * @author jarvvis
 * @date 2018-12
 * @version 1.0.0
 * 
 * @jsdoc request
 * @name api.requests:GetProductsRequest
 * @description
 * Product header request holding API query parameters.
 */
export class GetProductsRequest {
        pageSize: number = null;
        pageNumber: number = null;
        productName: string = null;
        productNumber: string = null;
        productId: string = null;
        totalAmount: string = null;
        sortBy: string = null;


  /**
   * @jsdoc method
   * @name constructor
   * @methodOf api.requests:GetProductsRequest
   * @description description
   * Sets request query default parameters.
   */
    constructor(productId?, productName?, totalAmount?, numberOfRecords?, sortBy?) {
        this.productId = productId;
        this.productName = productName;
        this.totalAmount = totalAmount;
        this.pageSize = numberOfRecords;
        this.sortBy = sortBy;
    }


  /**
   * @jsdoc method
   * @name setQueryParam
   * @methodOf api.requests:GetProductsRequest
   * @description description
   * Sets request query parameter. Allows only parameters that are class atributes
   */
    setQueryParam(name, value) {
        if (this.hasOwnProperty(name))
            this[name] = value == '' ? null : value;
    }

  /**
   * @jsdoc method
   * @name toQueryString
   * @methodOf api.requests:GetProductsRequest
   * @description description
   * Builds query string from class atributes. 
   * Uses qs for query string and moment.js for date formatting according to interface requirements 
   */
    toQueryString() {
        return qs.stringify(this, {
            addQueryPrefix: true, 
            skipNulls: true, 
            sort: null, 
            serializeDate: (d) => { return moment(d).format('YYYY-MM-DD'); }
        });
    }
}