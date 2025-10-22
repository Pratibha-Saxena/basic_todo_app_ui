import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthApi {
  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    let body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    let options = {
        headers: new HttpHeaders()
                    .set('Content-Type', 'application/x-www-form-urlencoded')
                    .set('Accept', 'application/json')
                    .set('Grant_Type', 'password')
    };

    return this.http
        .post(`${environment.API_BASE_URL}/auth`, body.toString(), options);
        // .subscribe(response => {
        //     //...
        //     console.log('Login successful', response);
        //     return response;
        //   });
    // return this.http.post<any>(`${this.baseUrl}/login`, { username, password });
  }

  saveToken(token: string) {
    sessionStorage.setItem('jwtToken', token);
  }

  getToken(): string | null {
    return sessionStorage.getItem('jwtToken');
  }

  logout() {
    sessionStorage.removeItem('jwtToken');
    this.router.navigate(['/login']);
  }

  getWelcomeMessage() {
    // const token = this.getToken();
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${environment.API_BASE_URL}/api/welcome`, { responseType: 'text'});
  }
}
