import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inforce-front-BM-project';

  constructor(
    private authService:AuthService,
    private router:Router){

  }

  isUserLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout(){
    this.authService.removeToken();
    this.authService.removeUserEmail();
    this.authService.removeUserRole();
    this.router.navigate(['/login']);
  }

  getUserEmail():string | null{
    return this.authService.getUserEmail();
  }

  getUserRole():string | null{
    return this.authService.getUserRole();
  }
}
