import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  getIsUserLoggedIn() {
    return false;
  }
}
