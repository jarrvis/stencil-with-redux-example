import { Component, Prop, State } from "@stencil/core";
import { Store } from "@stencil/redux";
import { Product } from "../../api/model/product";

  
  @Component({
    tag: "product-table"
  })
  export class ProductTable {
    @Prop({ context: 'store' }) store: Store;
    @State() products: Product[] = [];

    async componentWillLoad() {
       await document.querySelector("root-cmp").componentOnReady();
       console.log('table will load');
        this.store.mapStateToProps(this, state => {
          return {
            products: state.productResponse.products,
          }
        });
      }

      render() {
          return (
            <div>
              <table>
                <tbody>
                  {this.products.map(product => (
                    <tr>
                      <td>
                        <p>{product.name}</p>                 
                      </td>
                      <td>
                        <p>{product.number}</p>
                      </td>
                      <td>
                        <p>{product.placedDate}</p>
                      </td>
                      <td>
                        <p>{product.totalAmount}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
      }
  
}