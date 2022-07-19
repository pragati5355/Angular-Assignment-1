import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent implements OnInit {

  categoryNames = ['Mobile','laptop','TV','Refrigerator','Washing-Machine','Camera'];
  maxDate:any = new Date();

  validAlphanumeric = "^[a-zA-Z0-9]{30}$";
  validprice="[0-9]+$";
  validstock="[0-9]+$";
  

  product:any = {
    product_name:"",
    category: "",
    price: "",
    stock_units: "",
    serial_no: "",
    release_date: "",
    description: "",
  };

  invalidname: boolean = false
  invalidprice: boolean = false;
  invalidstock_units: boolean = false;
  invalidserial_no: boolean = false;
  invalidrelease_date: boolean = false;
  invalid_description: boolean = false;

  constructor(
    private router : Router,
    private productService : ProductService
  ) { }

  ngOnInit(): void {
  }

  addNewProduct(){
   
      
    if(this.product.product_name == '' || this.product.product_name == undefined || this.product.product_name == null){
      this.invalidname = true;
    } else if(String(this.product.product_name).length < 30){
      this.invalidname = true;
    } else {
      this.invalidname = false;
    }

    if(this.product.serial_no == '' || this.product.serial_no == undefined || this.product.serial_no == null){
      this.invalidserial_no = true;
    } else if(String(this.product.serial_no).length < 30){
      this.invalidserial_no = true;
    } else {
      this.invalidserial_no = false;
    }

    if(this.product.release_date == '' || this.product.release_date == undefined || this.product.release_date == null){
      this.invalidrelease_date = true;
    }else{
      this.invalidrelease_date = false;
    }

    if(this.product.description == '' || this.product.description == undefined || this.product.description == null){
      this.invalid_description = true;
    } else if(String(this.product.description).length < 150){
      this.invalid_description = true;
    } else {
      this.invalid_description = false;
    }

    if(this.invalidname || this.invalidserial_no){
      this.productService.postProductListAPI(this.product).subscribe(
        (res:any)=>{
          console.log(res);
        },
        (err:any)=>{
          console.error(err);
        }
      )

    } 



    console.log(JSON.stringify(this.product));
    this.router.navigate(["productlist"]);
    this.product = [];
  }

  backProductLis(){
    this.router.navigate(["productlist"]);
  }

}
