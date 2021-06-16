import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(
    private http:HttpClient
  ) { }

  getAllUsers() {
    return this.http.get<Array<string>>("https://jsonplaceholder.typicode.com/users");
  }

}
