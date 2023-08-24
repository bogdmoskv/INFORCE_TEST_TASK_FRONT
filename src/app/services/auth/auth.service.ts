import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY = 'access_token';
  private readonly USER_EMAIL = 'user_email';
  private readonly USER_ROLE = 'user_password';

  constructor() {}

  saveToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  removeToken() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  removeUserEmail(){
    localStorage.removeItem(this.USER_EMAIL);
  }

  removeUserRole(){
    localStorage.removeItem(this.USER_ROLE);
  }

  saveUserEmail(em:string){
    console.log("IN SAVE USER EMAIL: " + em);
    localStorage.setItem(this.USER_EMAIL, em);
  }

  saveUserRole(role:string){
    localStorage.setItem(this.USER_ROLE, role);
  }

  getUserEmail(): string | null{
    return localStorage.getItem(this.USER_EMAIL);
  }

  getUserRole(): string | null{
    return localStorage.getItem(this.USER_ROLE);
  }


}
