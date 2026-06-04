import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/usuarios';

  usuarioActual: any = JSON.parse(
    localStorage.getItem('usuario') || 'null'
  );

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, {
      email: email,
      password: password
    });
  }

  guardarUsuario(usuario: any) {
    this.usuarioActual = usuario;
    localStorage.setItem(
      'usuario',
      JSON.stringify(usuario)
    );
  }

  cerrarSesion() {
    this.usuarioActual = null;
    localStorage.removeItem('usuario');
  }

  esAdmin() {
    return this.usuarioActual?.rol === 'ADMIN';
  }

  estaLogueado() {
    return this.usuarioActual !== null;
  }
}