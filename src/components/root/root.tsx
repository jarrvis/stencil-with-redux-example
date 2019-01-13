import { Component, Prop} from "@stencil/core";
import { Store } from '@stencil/redux';
import { configureStore } from '../../store';

@Component({
  tag: "root-cmp"
})
export class Root {
  @Prop({ context: 'store' }) store: Store;


 componentWillLoad() {
    console.log("app will load");
    this.store.setStore(configureStore({}));
  }

  
  render() {
      return (
        <slot/>
      );
    }
  }