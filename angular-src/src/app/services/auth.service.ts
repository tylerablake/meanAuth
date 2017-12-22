import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { useAnimation } from '@angular/core/src/animation/dsl';

@Injectable()
export class AuthService {
  authToken:any;
  user:any;

  constructor(private http:Http){

   }

  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'Application/json');
    return this.http.post('http://localhost:8000/users/register', user, {headers: headers})
    .map(res => res.json());
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'Application/json');
    return this.http.post('http://localhost:8000/users/authenticate', user, {headers: headers})
    .map(res => res.json());
  }

  storeUserData(token, user){
    //Angular JWT looks for 'id_token' within localStorage by default
    localStorage.setItem('id_token', token);

    //Stringify because localStorage can only store strings, not objects
    localStorage.setItem('user', JSON.stringify(user));

    this.authToken = token;
    this.user = user;

  }
}
