import { Injectable } from '@angular/core';
import {Product} from '../model/product';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';



const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL + '/product');
  }
  findById(id: number): Observable<Product> {
    return this.http.get<Product>(`${API_URL}/product/${id}`);
  }
  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${API_URL}/product/${id}`, product);
  }
  saveProduct(product): Observable<Product> {
    return this.http.post<Product>(API_URL + '/product', product);
  }
  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${API_URL}/product/${id}`);
  }
  // findById(id: number){
  //   return this.products.find(product => product.id === id);
  // }
  // updateProduct(id: number, product: Product){
  //   for(let i = 0; i< this.products.length; i++){
  //     if(this.products[i].id == id){
  //       this.products[i] = product;
  //     }
  //   }
  // }
  // deleteProduct(id: number){
  //   this.products = this.products.filter(product =>{
  //     return product.id != id;
  //   })
  // }
}
