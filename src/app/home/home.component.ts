import { Component } from '@angular/core';
import { User } from '../models/user';
import { HomeService } from './home.service';

@Component({
  templateUrl: './home.component.html'
})

export class HomeComponent {
  users: User[];
  title = 'Lista de Usuários Cadastrados';
  noItens = 'Sem Usuários Cadastrados';
  constructor(private homeService:HomeService) {}

  ngOnInit() {
    this.getUsers();
  }
    
  getUsers() {
    this.homeService.getItens().subscribe(users => this.users = users);
  }

}