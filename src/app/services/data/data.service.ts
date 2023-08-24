import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../api/api.service';


@Injectable({
  providedIn: 'root'
})

export class DataService {
  private shortUrlsSubject = new BehaviorSubject<any[]>([]);
  shortUrls$ = this.shortUrlsSubject.asObservable();

  constructor(private apiService: ApiService) {
    this.fetchShortUrls();
  }

  addShortUrl(url: any) {
    this.shortUrlsSubject.next([...this.shortUrlsSubject.value, url]);
  }

  fetchShortUrls() {
    this.apiService.getShortUrls().subscribe(
      response => {
        this.shortUrlsSubject.next(response);
      },
      error => {
        console.error('Error fetching short URLs:', error);
      }
    );
  }

}

