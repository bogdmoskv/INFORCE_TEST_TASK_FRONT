import { Component } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = ''; 
  password: string = '';

  constructor(
    private apiService: ApiService,
    private authSevice: AuthService
    ) { }

  onLogin() {
    this.apiService.login(this.username, this.password).subscribe(
      response => {
        console.log('Login successful:', response);
        this.authSevice.saveToken(response.access_token);
      },
      error => {
        console.error('Login failed:', error);
      }
    );
  }

  
}
