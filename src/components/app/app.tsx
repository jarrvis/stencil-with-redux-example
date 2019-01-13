import { Component, Prop} from "@stencil/core";
import { Store } from '@stencil/redux';
import { configureStore } from '../../store';

@Component({
  tag: "app-cmp"
})
export class App {
  @Prop({ context: 'store' }) store: Store;


 componentWillLoad() {
    this.store.setStore(configureStore({}));
  }

  
  render() {
      return (
        <slot/>
      );
    }
  }