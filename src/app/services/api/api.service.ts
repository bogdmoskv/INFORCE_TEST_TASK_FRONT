  import { Injectable } from '@angular/core';
   import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService{
    private baseUrl = 'https://localhost:7059'; 
    constructor(private http: HttpClient) {

    }

   login(email: string, password: string): Observable<any> {
    const body = { email, password };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(`${this.baseUrl}/auth/login`, body, { headers });
  }

  addNewUrl(url: string): Observable<any> {
    const body = { url }; 

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(`${this.baseUrl}/url/shorturl`, body, { headers });
  }

  getShortUrls(): Observable<any> {
    return this.http.get(`${this.baseUrl}/url/getAll`);
  }
}

