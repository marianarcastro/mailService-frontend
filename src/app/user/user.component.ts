import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  permitido: boolean

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router, private httpCliente: HttpClient) { 
  }

  user: User;
  userModel = new User(0, "", "", "", "");
  hasToken: any;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        let id = parseInt(params.get("id")!);
        this.userService.getUserById(id).subscribe(user => this.user = user);
    })
  }

  save() {
    this.userService.save(this.userModel).subscribe(result => {
      alert("Usuário cadastrado com sucesso!");
      this.router.navigateByUrl('/home');
    }, error => console.error(error));
  }

  alterar() {
    this.user.senha = this.userModel.senha;
    this.userService.alterar(this.user).subscribe(result => {
      alert("Usuário alterado com sucesso!");
      this.router.navigateByUrl('/home');
    }, error => console.error(error));
  }
}
