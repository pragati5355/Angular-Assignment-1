import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

import { Name } from '../_model/Name';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {


  Names : Name[] = [];

  constructor(
    private router : Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getProductListAPI().subscribe(
      (res: any)=>{
        console.log(res);
        this.Names = res;
      },
      (err: any)=>{
        console.error(err);
      }
    );
  }

  deleteDate(data:any){
    if(confirm("Are you sure ..? You want to delete the product")){
      this.productService.deleteProductAPI(data).subscribe(
        (res:any)=>{
          alert("Product Deleted Sucessfully !");
          this.ngOnInit();
        },
        (err:any)=>{
          console.error(err);
        }
      )
    }

  }

  backtowelcome(){
    this.router.navigate(["welcomepage"]);
  }

  openAddnewproduct()
  {
    this.router.navigate(["addnewproduct"]);
  }

  openProductdetails(data:any)
  {
    this.router.navigate(["productdetails/"+data]);
  }

}
