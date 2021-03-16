import { Component } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';
import { MailService } from './home/mail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mailService';
  loggedUser: any;
  constructor(private router: Router, private mailService: MailService) {
  }

  ngOnInit(): void {
    console.log(localStorage.getItem("token"));
    this.loggedUser = localStorage.getItem("token");
  }

  isTokenExpired(): boolean {
    const expiryTime: number = 60;
    if (expiryTime) {
      return ((1000 * expiryTime) - (new Date()).getTime()) < 5000;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem("token");
    this.ngOnInit();
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/']);
    });
    //this.router.navigate(['/']);
  }
  
  sendEmail() {
    this.mailService.sendEmail();
  }
}
