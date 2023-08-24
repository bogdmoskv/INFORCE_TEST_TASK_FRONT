  import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class DataService{
   shortUrls:any[]=[];

   addShortUrl(url:any){
    this.shortUrls.push(url);
   }
}

