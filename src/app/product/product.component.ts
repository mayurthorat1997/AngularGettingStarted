import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from './product.service';
import { IProduct } from './ProductInterface';

@Component({
  selector: 'pm-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy{
 
  
  pageTitle="Product List !!";
  imageWidth=50;
  imageMargin=2;
  showImage: boolean=false;
  errorMessage:string='';
  sub!: Subscription;
  
  private _filterList: string="";
  filterProduct:IProduct[]=[];

constructor(private productService:ProductService){}

get filterList():string {
  return this._filterList;
}
set filterList(value:string){
  this._filterList=value;
  console.log(this._filterList);
  this.filterProduct=this.performFilter(value);
}

products: IProduct[]=[];

ngOnInit(): void {
  this.sub=this.productService.getProducts().subscribe({
    next: products=>
    {
      this.products=products;
      this.filterProduct=this.products;
    },
    error:err=>this.errorMessage=err
  });
  
 }

 ngOnDestroy(): void {
   this.sub.unsubscribe();
 }

toggleImage():void
{
 this.showImage=!this.showImage;
}

performFilter(filterby:string):IProduct[]{
filterby=filterby.toLocaleLowerCase();
return this.products.filter((product:IProduct)=>
product.productName.toLocaleLowerCase().includes(filterby));
}
onRatingClicked(message: string): void{
this.pageTitle='Product List: '+message;
}
}
