import {Injectable} from '@angular/core';
import {ConfigService} from './config.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private configService: ConfigService) {
  }

  // public logIn(loginObj) {
  //   this.configService.postConfig('/user/create', loginObj).subscribe(response => {
  //   });
  // }
}
