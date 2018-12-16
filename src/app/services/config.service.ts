import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public apiUrl = 'http://localhost:49981/api';

  constructor(private httpClient: HttpClient) {
  }

  public getConfig(url): Observable<any> {
    return this.httpClient.get(this.apiUrl + url, {headers: this.generateHeaders()});
  }

  public postConfig(url, obj): Observable<any> {
    return this.httpClient.post(this.apiUrl + url, obj, {headers: this.generateHeaders()});
  }

  public deleteConfig(url): Observable<any> {
    return this.httpClient.delete(url, {headers: this.generateHeaders()});
  }

  public putConfig(url, obj): Observable<any> {
    return this.httpClient.put(url, obj, {headers: this.generateHeaders()});
  }

  private generateHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    });
  }
}
