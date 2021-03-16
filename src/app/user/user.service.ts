import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  headers = { 'Content-type': 'application/json', 'Authorization': localStorage.getItem("token")} ;
  private userServiceURL = "http://localhost:8081/users";

  constructor( private http: HttpClient) { }

  getItens(): Observable<User[]> {
    return this.http.get<User[]>(this.userServiceURL);
  }

  getUserById(id: number) {
    return this.http.get<User>(this.userServiceURL + "/" + id, {headers: this.headers});
  }

  save(user: User) {
    return this.http.post<User>(this.userServiceURL + "/cadastrar", user, {headers: this.headers});
  }

  register(user: User) {
    return this.http.post<User>(this.userServiceURL + "/registrar", user);
  }

  alterar(user: User) {
    return this.http.post<User>(this.userServiceURL + "/alterar", user, {headers: this.headers});
  }
}
