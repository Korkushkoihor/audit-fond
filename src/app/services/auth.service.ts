import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from './config.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isUserLoggedIn = false;

  constructor(private http: HttpClient) {
    if (localStorage.getItem('access_token')) {
      this.isUserLoggedIn = true;
    }
  }

  signIn(email, password) {
    return new Promise((resolve, reject) => {
      const headersDict = {
        'Content-Type': 'raw',
        'Accept': 'application/json',
      };
      const headerObj = {
        headers: new HttpHeaders(headersDict)
      };
      // username=Donavan@zurvus.com&password=elias1906
      const data = `grant_type=password&username=${email}&password=${password}&client_id=RoomsManagementClientId`;
      // const data = `grant_type=password&client_id=RoomsManagementClientId&userName=Ihor&password=1q2w3e`;
      this.http.post('http://localhost:49981/' + 'token', data, headerObj).subscribe((response: any) => {
        console.log(response);
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('userName', response.userName);
        this.isUserLoggedIn = true;
        resolve(response);
      }, error => {
        this.removeToken();
        reject(error);
      });
    });
  }

  public getIsUserLoggedIn() {
    return this.isUserLoggedIn;
  }

  public getUserName(){
    return localStorage.getItem('userName');
  }

  removeToken() {
    this.isUserLoggedIn = false;
    localStorage.removeItem('access_token');
    localStorage.removeItem('userName');
    // localStorage.removeItem('id');/
    // this.router.navigate(['/login']);
  }
}
