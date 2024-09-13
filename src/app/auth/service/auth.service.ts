import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  public confirmPasswords(password: string, confirmPassword: string): boolean {
    return password === confirmPassword;
  }
}
