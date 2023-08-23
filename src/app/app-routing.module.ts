import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ShortUrlsComponent } from './short-urls/short-urls.component';
import { ShortUrlInfoComponent } from './short-url-info/short-url-info.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // По умолчанию перенаправляем на страницу входа
  { path: 'login', component: LoginComponent },
  { path: 'short-urls', component: ShortUrlsComponent },
  { path: 'short-url-info/:id', component: ShortUrlInfoComponent }, // Пример маршрута с параметром Id
  { path: 'about', component: AboutComponent },
  // Добавьте другие маршруты для ваших компонентов
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
