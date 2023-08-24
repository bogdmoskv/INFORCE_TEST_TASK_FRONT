import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { AddNewUrlModalComponent } from '../add-new-url-modal/add-new-url-modal.component';
import { ApiService } from 'src/app/services/api/api.service';
import { DataService } from 'src/app/services/data/data.service';


@Component({
  selector: 'app-short-urls',
  templateUrl: './short-urls.component.html',
  styleUrls: ['./short-urls.component.css']
})
export class ShortUrlsComponent {
  newUrl: string = '';
  modalRef: MdbModalRef<AddNewUrlModalComponent> | null = null;
  shortUrls: any[] = [];

  constructor(
    private authService: AuthService,
    private modalService: MdbModalService,
    private apiService: ApiService,
    private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.shortUrls$.subscribe(shortUrls => {
      this.shortUrls = shortUrls.slice();
    });
  }

  isUserLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  openAddUrlModal() {
    this.modalRef = this.modalService.open(AddNewUrlModalComponent)
  }


  viewDetails(id: number): void {

  }

  deleteUrl(id: number): void {
    this.apiService.deleteUrl(id).subscribe(
      response => {
        console.log(response);
        this.dataService.fetchShortUrls();
      },
      error => {
        console.log(error);
      }
    );
  }

}


