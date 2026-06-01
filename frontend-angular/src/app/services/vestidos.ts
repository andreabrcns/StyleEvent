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
  obtenerVestidoPorId(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  crearVestido(vestido: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, vestido);
  }
  eliminarVestido(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

}