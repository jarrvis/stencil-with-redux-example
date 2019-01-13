import { GetProductsRequest } from "../api/requests/get-products-request";

export const FETCH_PRODUCTS_BEGIN = "FETCH_PRODUCTS_BEGIN";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_MERGE_PRODUCTS_SUCCESS = "FETCH_MERGE_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

export const PRODUCTS_BASE_URL = (<any>window).apiUrls.productsApi;

export const fetchProductsBegin = request => ({
  type: FETCH_PRODUCTS_BEGIN,
  payload: request
});

export const fetchProductsSuccess = (productResponse, merge) => ({
  type: merge ? FETCH_MERGE_PRODUCTS_SUCCESS : FETCH_PRODUCTS_SUCCESS,
  payload: { productResponse }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

/**
 * @jsdoc method
 * @name getProducts
 * @methodOf actions.productActions
 * @description description
 * Get products
 */
export function getProducts(request: GetProductsRequest, merge: boolean = false) {
  const url = PRODUCTS_BASE_URL + request.toQueryString();
  return dispatch => {
    dispatch(fetchProductsBegin(request));
    return fetch(url, { credentials: "same-origin" })
      .then(async res => {
        if (!res.ok) {
          throw Error(await res.json());
        }
        return res.json();
      })
      .then(data => {
        dispatch(fetchProductsSuccess(data, merge));
      })
      .catch(error => {
        dispatch(fetchProductsFailure(error));
        console.log(error);
      });
  };
}
