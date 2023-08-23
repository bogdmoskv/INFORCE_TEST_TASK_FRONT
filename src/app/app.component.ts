import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inforce-front-BM-project';

  constructor(private authService:AuthService){

  }

  isUserLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}
