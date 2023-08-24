import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-short-urls',
  templateUrl: './short-urls.component.html',
  styleUrls: ['./short-urls.component.css']
})
export class ShortUrlsComponent {
  constructor(private authService: AuthService){}

  isUserLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  addNewUrl(): void {
    
  }

  viewDetails(id: number): void {
    
  }

  deleteUrl(id: number): void {
    
  }

}


