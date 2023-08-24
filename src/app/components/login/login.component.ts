import { Component } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = ''; 
  password: string = '';
  errorMessage: string='';

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private router:Router
    ) { }

  onLogin() {
    this.errorMessage='';
    this.apiService.login(this.username, this.password).subscribe(
      response => {
        console.log('Login successful:', response);
        this.authService.saveToken(response.access_token);
        console.log("TOKEN" + this.authService.getToken());

        this.router.navigate(['/short-urls']);
      },
      error => {
        console.error('Login failed:', error);
        this.errorMessage=error.error;
      }
    );
  }

  onLogout(){
    this.authService.removeToken();
  }


  isUserLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  clearFields() {
    this.username = '';
    this.password = '';
    this.errorMessage = ''; // Очищаем сообщение об ошибке
  }
  
}
