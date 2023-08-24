import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';



@Component({
  template: ''
})
export class RedirectComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/short-urls']); 
    } else {
      this.router.navigate(['/login']); 
    }
  }
}
