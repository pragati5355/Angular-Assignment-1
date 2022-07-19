import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';

const routes: Routes = [
  {
    path : 'welcomepage' , component : WelcomeScreenComponent
  },
  {
    path : 'productlist' , component : ProductListComponent
  },
  {
    path : 'productdetails/:id' , component : ProductDetailsComponent
  },
  {
    path : 'addnewproduct' , component : AddNewProductComponent
  },
  {
    path : '' , redirectTo : 'welcomepage' , pathMatch : 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
