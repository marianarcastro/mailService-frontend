import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private homeServiceURL = "http://localhost:8081/users";

  headers = { 'Content-type': 'application/json', 'Authorization': localStorage.getItem("token")} ;

  constructor( private http: HttpClient) { }

  getItens(): Observable<User[]> {
    return this.http.get<User[]>(this.homeServiceURL,  {headers: this.headers});
  }
}
