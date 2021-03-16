import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userModel = new User(0, "", "", "", "");

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  save() {
    this.userService.register(this.userModel).subscribe(result => {
      alert("Usuário cadastrado com sucesso!");
      this.router.navigateByUrl('/');
    }, error => console.error(error));
  }

}
