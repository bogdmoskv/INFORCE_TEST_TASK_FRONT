import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ShortUrlsComponent } from './components/short-urls/short-urls.component';
import { ShortUrlInfoComponent } from './components/short-url-info/short-url-info.component';
import { AboutComponent } from './components/about/about.component';
import { AuthGuard } from './guards/auth.guard';
import { RedirectComponent } from './components/redirect/redirect.component';

const routes: Routes = [
  { path: '', redirectTo: '/redirect', pathMatch: 'full' }, 
  { path: 'redirect', component: RedirectComponent }, 
  { path: 'login', component: LoginComponent },
  { path: 'short-urls', component: ShortUrlsComponent },
  { path: 'short-url-info/:id', component: ShortUrlInfoComponent, canActivate: [AuthGuard], runGuardsAndResolvers: 'always' }, // Пример маршрута с параметром Id
  { path: 'about', component: AboutComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
