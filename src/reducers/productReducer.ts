import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_MERGE_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE 
} from "../actions/productActions";

const initialState = {
    products: [],
    totalNoOfProducts: 0,
    merge: false,
    loading: false,
    error: null,
    request: null,
  };
  
  export default function productReducer(
    state = initialState,
    action
  ) {
    switch (action.type) {
      case FETCH_PRODUCTS_BEGIN:
        return {
          ...state,
          loading: true,
          error: null,
          request: action.payload,
        };
  
      case FETCH_PRODUCTS_SUCCESS:
        return {
          ...state,
          loading: false,
          products: action.payload.productResponse.products,
          totalNoOfProducts: action.payload.productResponse.totalNoOfProducts,
          merge: false,
        };
      
      case FETCH_MERGE_PRODUCTS_SUCCESS:
        return {
          ...state,
          loading: false,
          products: action.payload.productResponse.products,
          totalNoOfProducts: action.payload.productResponse.totalNoOfProducts,
          merge: true,
        };
  
      case FETCH_PRODUCTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.productResponse.error,
          products: []
        };
  
      default:
        return state;
    }
}