import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { AddNewUrlModalComponent } from '../add-new-url-modal/add-new-url-modal.component';
import { ApiService } from 'src/app/services/api/api.service';


@Component({
  selector: 'app-short-urls',
  templateUrl: './short-urls.component.html',
  styleUrls: ['./short-urls.component.css']
})
export class ShortUrlsComponent {
  newUrl:string = '';
  modalRef: MdbModalRef<AddNewUrlModalComponent> | null = null;
  shortUrls: any[] = [];

  constructor(
    private authService: AuthService,
    private modalService: MdbModalService,
    private apiService:ApiService
    ){}

    ngOnInit():void{
      this.fetchShortUrls();
    }

  isUserLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  openAddUrlModal() {
    this.modalRef = this.modalService.open(AddNewUrlModalComponent)
  }

  closeAddUrlModal() {
   
  }

  addNewUrl(): void {
    
  }

  viewDetails(id: number): void {
    
  }

  deleteUrl(id: number): void {
    
  }

  private fetchShortUrls(): void {
    // Запрашиваем список URL из бэкэнда
    this.apiService.getShortUrls().subscribe(
      response => {
        this.shortUrls = response; // Присваиваем полученный список URL к shortUrls
      },
      error => {
        console.error('Error fetching short URLs:', error);
      }
    );
  }
  
}


