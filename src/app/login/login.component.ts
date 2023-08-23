import { Component } from '@angular/core';
import { ApiService } from '../services/api/api.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private apiService: ApiService) { }

  onLogin(username: string, password: string) {
    this.apiService.login(username, password).subscribe(
      response => {
        const accessToken = response.access_token;
      },
      error => {
        console.error('Login failed:', error);
      }
    );
  }
}
