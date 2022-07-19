import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getProductListAPI(){
    return this.http.get('http://localhost:3000/products');
  }

  postProductListAPI(data:any){
    return this.http.post('http://localhost:3000/products',data);
  }

  getProductDetailsAPI(data:any){
    console.log(data)
    return this.http.get('http://localhost:3000/products/'+data);
  }
  
  deleteProductAPI(id:any){
    return this.http.delete('http://localhost:3000/products/'+id);
  }
}
