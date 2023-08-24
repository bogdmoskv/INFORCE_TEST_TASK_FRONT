import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { AddNewUrlModalComponent } from '../add-new-url-modal/add-new-url-modal.component';

@Component({
  selector: 'app-short-urls',
  templateUrl: './short-urls.component.html',
  styleUrls: ['./short-urls.component.css']
})
export class ShortUrlsComponent {
  newUrl:string = '';
  modalRef: MdbModalRef<AddNewUrlModalComponent> | null = null;

  constructor(
    private authService: AuthService,
    private modalService: MdbModalService
    ){}

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

}


