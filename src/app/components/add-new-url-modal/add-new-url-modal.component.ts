import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ApiService } from 'src/app/services/api/api.service';
import { DataService } from 'src/app/services/data/data.service';


@Component({
  selector: 'app-add-new-url-modal',
  templateUrl: './add-new-url-modal.component.html',
  styleUrls: ['./add-new-url-modal.component.css']
})
export class AddNewUrlModalComponent {
  newUrl:string='';
  constructor(
    public modalRef: MdbModalRef<AddNewUrlModalComponent>,
    private apiService: ApiService,
    private dataService:DataService
    ) {}

    addNewUrl():void{
      this.apiService.addNewUrl(this.newUrl).subscribe(
        response => {
          console.log(response); 
          this.dataService.addShortUrl(response);
          this.modalRef.close();
        },
        error => {
          console.error('Error creating new URL:', error);
        }
      );
    }
}
