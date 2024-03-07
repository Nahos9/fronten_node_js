import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL= "http://localhost:4000"
  constructor(private http:HttpClient) { }

  signup(data:any){
    return this.http.post(`${this.URL}/api/login`,data)
  }
}
