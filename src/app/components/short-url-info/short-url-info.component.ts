import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-short-url-info',
  templateUrl: './short-url-info.component.html',
  styleUrls: ['./short-url-info.component.css']
})
export class ShortUrlInfoComponent implements OnInit {
  urlInfo: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id'); // Получаем id из параметров маршрута
      this.urlInfo = history.state.urlInfo; // Получаем объект состояния из истории переходов
      console.log("SHORT URL INFO: ", this.urlInfo);
    });
    
  }
}
