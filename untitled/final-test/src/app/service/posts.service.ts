import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Posts} from '../model/posts';
import {Category} from '../model/category';
import {Direction} from '../model/direction';
import {Province} from '../model/province';

const API_URL = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getAll(area: number, price: number, directionName: string): Observable<Posts[]>{
    return this.http.get<Posts[]>(API_URL + `/posts/list?area=${area}&price=${price}&directionName=${directionName}`);
  }
  getCategoryList(): Observable<Category[]>{
    return this.http.get<Category[]>(API_URL + '/posts/category');
  }
  getDirectionList(): Observable<Direction[]>{
    return this.http.get<Direction[]>(API_URL + '/posts/direction');
  }
  getProvinceList(): Observable<Province[]>{
    return this.http.get<Province[]>(API_URL + '/posts/province');
  }
  findPostsById(id: number): Observable<Posts> {
    return this.http.get<Posts>(API_URL + `/posts/edit/${id}`);
  }

  savePosts(posts: Posts): Observable<Posts> {
    return this.http.post<Posts>(API_URL + '/posts/save', posts);
  }
  deletePosts(posts: Posts): Observable<Posts> {
    return this.http.patch<Posts>(API_URL + '/delete', posts);
  }
  updatePosts( posts: Posts): Observable<Posts> {
    return this.http.put<Posts>(`${API_URL}/posts/update`, posts);
  }
}
