import { LayoutComponent } from '../layout/layout.component';
import { CartComponent } from    './cart/cart.component';
import { ProductListComponent } from    './product-list/product-list.component';
import { ProductComponent } from    './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutConfirmationComponent } from './checkout-confirmation/checkout-confirmation.component';
 
export * from '../layout/layout.component';
export * from './cart/cart.component';
export * from './product-list/product-list.component';
export * from './product/product.component';
export * from './checkout/checkout.component';
export * from './checkout-confirmation/checkout-confirmation.component';


export const uiPages = [CheckoutConfirmationComponent, CartComponent, ProductListComponent,
  ProductComponent, LayoutComponent, CheckoutComponent];

