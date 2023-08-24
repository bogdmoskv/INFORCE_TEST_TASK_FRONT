import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-short-urls',
  templateUrl: './short-urls.component.html',
  styleUrls: ['./short-urls.component.css']
})
export class ShortUrlsComponent {
  newUrl:string = '';
  isModalOpen:boolean=false;

  constructor(private authService: AuthService){}

  isUserLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  openAddUrlModal() {
    this.isModalOpen = true; 
  }

  closeAddUrlModal() {
    this.isModalOpen = false; 
  }

  addNewUrl(): void {
    
  }

  viewDetails(id: number): void {
    
  }

  deleteUrl(id: number): void {
    
  }

}


