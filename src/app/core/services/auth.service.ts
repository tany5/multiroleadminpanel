import { MUser } from './../model/user';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable, map, catchError, throwError } from 'rxjs';

@Injectable()
export class AuthService {
  isLogin: boolean = false;
  roleAs: unknown = [];
  constructor(private httpClient: HttpClient) { }
  login(payload: any): Observable<any> {
    const { username, userpassword } = payload
    return this.httpClient.get<MUser[]>(`${environment.ROOT_API}/users?email=${username}&password=${userpassword}`).pipe(
      map((res: any) => {
        if (res.length > 0) {
          this.isLogin = true;
          this.roleAs = res[0].roles;
          console.log(this.roleAs)
          sessionStorage.setItem('STATE', 'true');
          sessionStorage.setItem('ROLE', JSON.stringify(this.roleAs));
          return { success: this.isLogin };
        }
        else {
          throwError(() => new Error('Login Failed')) 
          return { success: this.isLogin, role: [] };
        }
      }),
      catchError((error: any) => {
        return throwError(() => new Error('Login Failed'))          
      })
    )
  }

  logout() {
    this.isLogin = false;
    this.roleAs = '';
    sessionStorage.setItem('STATE', 'false');
    sessionStorage.setItem('ROLE', '');
    return of({ success: this.isLogin, role: '' });
  }

  isLoggedIn() {
    const loggedIn = sessionStorage.getItem('STATE');
    if (loggedIn == 'true')
      this.isLogin = true;
    else
      this.isLogin = false;
    return this.isLogin;
  }

  getRole() {
    const roles: any = sessionStorage.getItem('ROLE');
    console.log(sessionStorage.getItem('ROLE'))
    this.roleAs = JSON.parse(roles)
    return this.roleAs;
  }
}


