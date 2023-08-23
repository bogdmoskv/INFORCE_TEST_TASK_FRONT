import { Component } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = ''; 
  password: string = '';

  constructor(private apiService: ApiService) { }

  onLogin() {
    this.apiService.login(this.username, this.password).subscribe(
      response => {
        console.log('Login successful:', response);
      },
      error => {
        console.error('Login failed:', error);
        console.log(this.username + this.password)
      }
    );
  }

  
}
