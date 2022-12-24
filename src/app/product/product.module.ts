import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { MayurComponent } from '../mayur/mayur.component';
import { MyComponentComponent } from '../shared/my-component/my-component.component';
import { StarComponent } from '../shared/star.component';
import { ProductDetailsComponent } from './product-details.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductDetailsGuard } from './product-details.guard';

@NgModule({
  declarations: [
    ProductComponent,
    MayurComponent,
    MyComponentComponent,
    StarComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(
      [
        
      {path:'product', component :ProductComponent},
      {
        path:'products/:id',  
        canActivate:[ProductDetailsGuard],
        component:ProductDetailsComponent
      }
      ]
    )
  ]
})
export class ProductModule { }
