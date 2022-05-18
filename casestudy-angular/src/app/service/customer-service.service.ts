import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../customer-component/customer';
import {environment} from '../../environments/environment';

const API_URL = `${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http: HttpClient) {
  }

  getAll(page: number): Observable<Customer[]> {
    return this.http.get<Customer[]>(API_URL + `/customer/list?page=${page}`);
  }

  findById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${API_URL}/customer/edit/${id}`);
  }

  updateCustomer( customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${API_URL}/customer/update`, customer);
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(API_URL + '/customer/save', customer);
  }

  deleteCustomer(customer: Customer): Observable<Customer> {
    return this.http.patch<Customer>(`${API_URL}/customer/delete`, customer);
  }
}
