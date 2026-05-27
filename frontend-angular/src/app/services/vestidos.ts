import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class VestidosService {

  private apiUrl = 'http://localhost:8080/api/vestidos';
  
  constructor(private http: HttpClient) { }

  obtenerVestidos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

}