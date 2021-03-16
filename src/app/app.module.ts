import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule} from '@angular/router';
import { HomeService } from './home/home.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './auth/authguard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
      { path: 'register', component: RegisterComponent },
      { path: 'cadastrar', component: UserComponent, canActivate: [AuthGuardService] },
      { path: 'users/:id', component: UserComponent, canActivate: [AuthGuardService] }
    ])
  ],
  providers: [ AuthGuardService, HomeService, AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
