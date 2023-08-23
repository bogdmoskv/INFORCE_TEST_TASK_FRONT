import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ShortUrlsComponent } from './short-urls/short-urls.component';
import { ShortUrlInfoComponent } from './short-url-info/short-url-info.component';
import { AboutComponent } from './about/about.component';
import { ApiService } from './services/api/api.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShortUrlsComponent,
    ShortUrlInfoComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
