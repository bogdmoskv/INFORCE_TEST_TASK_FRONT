import { Component } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";

interface DecodedToken {
  [key: string]: string;
}

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
        let decodedToken:DecodedToken = jwt_decode(response.access_token);
        
        console.log(decodedToken);
        
        let userEmail = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'];
        let userRole = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
        

        this.authService.saveUserEmail(userEmail);
        this.authService.saveUserRole(userRole)

        

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
