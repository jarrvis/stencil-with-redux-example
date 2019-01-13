import { Component, Prop } from "@stencil/core";
import { GetProductsRequest } from "../../api/requests/get-products-request";
import { getProducts } from "../../actions/productActions";
import { Store, Action } from "@stencil/redux";

@Component({
  tag: "product-search",
})
export class ProductSearch { 
  @Prop({ context: 'store' }) store: Store; 
  queryEL: HTMLInputElement;
  selectEl: HTMLSelectElement;

  
  getProducts: Action
  private request: GetProductsRequest;

  async componentWillLoad() {
    await document.querySelector("root-cmp").componentOnReady();
    console.log("search will load");
    this.store.mapDispatchToProps(this, {
        getProducts
    });
    this.request = new GetProductsRequest();
  }

  search() {
    if (this.selectEl.value && this.queryEL.value) {
      this.request.setQueryParam(this.selectEl.value, this.queryEL.value);
      this.getProducts(this.request);
    }
  }

  render() {
    return (
      <div>
        <div class="col-xs-12 col-sm-4 col-md-5">
            <select ref={el => (this.selectEl = el as HTMLSelectElement)}>
                <option value="productName">By Product name</option>
                <option value="productNumber">By Product number</option>
            </select>
        </div>
        <div>
          <input type="text" ref={el => (this.queryEL = el as HTMLInputElement)}/>
        </div>
        <div class="col-xs-12 col-sm-2 col-md-2 padd_mob_0">
          <button type="button" onClick={this.search.bind(this)}>Search</button>
        </div>
      </div>
    );
  }
}
