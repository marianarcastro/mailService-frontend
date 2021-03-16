import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CredenciaisDTO } from '../models/credenciais.dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  creds : CredenciaisDTO = {
    email: "",
    senha: ""
  };
  public currentUser: Observable<any>;
  headers = { 'Content-type': 'application/json'} ;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private app: AppComponent) {
    }

  ngOnInit(): void {
  }

  login() {
    this.http.post("http://localhost:8081/login", this.creds, {headers: this.headers, observe: "response"}).subscribe(res => { 
      localStorage.setItem('token', res.headers.get("Authorization"));
      this.app.ngOnInit();
      this.router.navigateByUrl('/home');
      }, error => alert("Usuário ou senha incorretos!"));
    }

  
}
