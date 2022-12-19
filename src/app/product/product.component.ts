import { Component, OnInit } from '@angular/core';
import { IProduct } from './ProductInterface';

@Component({
  selector: 'pm-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
 
  pageTitle="Product List !!";
  imageWidth=50;
  imageMargin=2;
  showImage: boolean=false;
private _filterList: string="";
filterProduct:IProduct[]=[];

get filterList():string {
  return this._filterList;
}
set filterList(value:string){
  this._filterList=value;
  console.log(this._filterList);
  this.filterProduct=this.performFilter(value);
}

products: IProduct[]=[
  {
    "productId": 2,
    "productName": "Garden Cart",
    "productCode": "GDN-0023",
    "releaseDate": "March 18, 2021",
    "description": "15 gallon capacity rolling garden cart",
    "price": 32.99,
    "starRating": 4.2,
    "imageUrl": "assets/images/garden_cart.png"
  },
  {
    "productId": 5,
    "productName": "Hammer",
    "productCode": "TBX-0048",
    "releaseDate": "May 21, 2021",
    "description": "Curved claw steel hammer",
    "price": 8.9,
    "starRating": 4.8,
    "imageUrl": "assets/images/hammer.png"
  },{
    "productId": 5,
    "productName": "Fammer",
    "productCode": "TBX-0048",
    "releaseDate": "May 21, 2021",
    "description": "Curved claw steel hammer",
    "price": 8.9,
    "starRating": 4.8,
    "imageUrl": "assets/images/hammer.png"
  },{
    "productId": 5,
    "productName": "Haddmmer",
    "productCode": "TBX-0048",
    "releaseDate": "May 21, 2021",
    "description": "Curved claw steel hammer",
    "price": 8.9,
    "starRating": 4.8,
    "imageUrl": "assets/images/hammer.png"
  },{
    "productId": 5,
    "productName": "Maammer",
    "productCode": "TBX-0048",
    "releaseDate": "May 21, 2021",
    "description": "Curved claw steel hammer",
    "price": 8.9,
    "starRating": 4.8,
    "imageUrl": "assets/images/hammer.png"
  }
];
ngOnInit(): void {
  this.filterList="cart";
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
}
