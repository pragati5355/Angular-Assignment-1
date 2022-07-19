import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { ProductService } from '../services/product.service';
import { Name } from '../_model/Name';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  Names : Name[] = [];
  
  id = this.router.snapshot.params['id'];
  product:any;

  constructor(

    private router : ActivatedRoute,
    private route: Router,
    private productService : ProductService

  ) { }

  ngOnInit(): void {

    console.log(this.id);
    // console.log(this.productId);
    this.productService.getProductDetailsAPI(this.id).subscribe(
      (res:any)=>{
        this.product = res;
        console.log(res);
      },
      (err:any)=>{
        console.log(err);
      }
    )

    
  }

  openProductList()
    {
      this.route.navigate(["productlist"]);
    }





}


