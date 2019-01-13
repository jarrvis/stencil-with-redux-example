import { GetProductsRequest } from "./get-products-request";

/**
 * @author kai8wz
 * @date 2018-12
 * @licensor Robert Bosch GmbH, 2018
 * @version 1.0.0
*/

it('should build query string with pageSize and productName', async () => {
  const request = new GetProductsRequest();
  request.pageNumber = 10;
  request.pageSize = 20;

  expect(request.toQueryString()).toBe('?pageSize=20&pageNumber=10');
});

it('should build query string with pageSize, productName and productNumber', async () => {
    const request = new GetProductsRequest();
    request.pageNumber = 10;
    request.pageSize = 20;
    request.productName = "testProduct";
    request.productNumber = "123456";
  
    expect(request.toQueryString()).toBe('?pageSize=20&offset=10&startDate=1970-01-01&endDate=1975-01-01');
  });

it('should build query string with known parameter', async () => {
  const request = new GetProductsRequest();
  request.setQueryParam('productName', 'test');

  expect(request.toQueryString()).toBe('?productName=test');
});

it('should not build query string with unknown parameter', async () => {
    const request = new GetProductsRequest();
    request.setQueryParam('test', 'test');
  
    expect(request.toQueryString()).toBe('');
  });