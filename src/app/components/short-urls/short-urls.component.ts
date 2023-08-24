import { Component } from '@angular/core';

@Component({
  selector: 'app-short-urls',
  templateUrl: './short-urls.component.html',
  styleUrls: ['./short-urls.component.css']
})
export class ShortUrlsComponent {


  addNewUrl(): void {
    // Implement your logic to add a new URL and update the shortUrls array
  }

  viewDetails(id: number): void {
    // Implement your logic to navigate to the Short URL Info view with the specified ID
  }

  deleteUrl(id: number): void {
    // Implement your logic to delete a URL by its ID and update the shortUrls array
  }

}


