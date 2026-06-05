import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  private apiUrl = 'http://localhost:8080/api/favoritos';

  favoritos: any[] = [];

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  cargarFavoritos() {
    const usuario = this.authService.usuarioActual;

    if (usuario) {
      this.http.get<any[]>(`${this.apiUrl}/${usuario.id}`).subscribe({
        next: (datos) => {
          this.favoritos = datos.filter((favorito, index, array) =>
            index === array.findIndex(f => f.vestidoId === favorito.vestidoId)
          );
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }

  agregarOQuitarFavorito(vestido: any) {
    const usuario = this.authService.usuarioActual;

    if (!usuario) {
      alert('Debes iniciar sesión para guardar favoritos');
      return;
    }

    const idVestido = vestido.vestidoId || vestido.id;

    const existe = this.favoritos.find(v => v.vestidoId === idVestido);

    if (existe) {
      this.eliminarFavorito(existe);
    } else {
      const favorito = {
        usuarioId: usuario.id,
        vestidoId: idVestido,
        nombre: vestido.nombre,
        precio: vestido.precio,
        categoria: vestido.categoria,
        imagen: vestido.imagen,
        descripcion: vestido.descripcion
      };

      this.http.post<any>(this.apiUrl, favorito).subscribe({
        next: () => {
          this.cargarFavoritos();
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }

  eliminarFavorito(vestido: any) {
    const usuario = this.authService.usuarioActual;
    const idVestido = vestido.vestidoId || vestido.id;

    this.http.delete(`${this.apiUrl}/${usuario.id}/${idVestido}`).subscribe({
      next: () => {
        this.cargarFavoritos();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  esFavorito(vestido: any) {
    if (!vestido) {
      return false;
    }

    const idVestido = vestido.vestidoId || vestido.id;

    return this.favoritos.some(v => v.vestidoId === idVestido);
  }

  obtenerFavoritos() {
    return this.favoritos;
  }
}