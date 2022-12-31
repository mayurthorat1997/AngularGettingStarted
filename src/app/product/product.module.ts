import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { MayurComponent } from '../mayur/mayur.component';
import { MyComponentComponent } from '../shared/my-component/my-component.component';
import { ProductDetailsComponent } from './product-details.component';
import { RouterModule } from '@angular/router';
import { ProductDetailsGuard } from './product-details.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductComponent,
    MayurComponent,
    MyComponentComponent,
    ProductDetailsComponent
  ],
  imports: [
    
    RouterModule.forChild(
      [
        
      {path:'product', component :ProductComponent},
      {
        path:'products/:id',  
        canActivate:[ProductDetailsGuard],
        component:ProductDetailsComponent
      }
      ]
    ),
    SharedModule
  ]
})
export class ProductModule { }
