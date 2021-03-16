import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  headers = { 'Content-type': 'application/json', 'Authorization': localStorage.getItem("token")} ;
  
  constructor( private http: HttpClient) { }

  sendEmail() {
    this.http.post("http://localhost:8081/email", "Mandando Email", {headers: this.headers, observe: "response"}).subscribe(res => {
      if(res) {
        console.log("Mensagem enviada");
      } else{
        alert("Mensagem falhou");
      }
    })
  }
}
