import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth';
import { VentasService } from './ventas';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private apiUrl = 'http://localhost:8080/api/carrito';

  carrito: any[] = [];

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private ventasService: VentasService
  ) {}

  cargarCarrito() {
    const usuario = this.authService.usuarioActual;

    if (usuario) {
      this.http.get<any[]>(`${this.apiUrl}/${usuario.id}`).subscribe({
        next: (datos) => {
          this.carrito = datos;
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }

  agregarAlCarrito(vestido: any) {
    const usuario = this.authService.usuarioActual;

    if (!usuario) {
      alert('Debes iniciar sesión para añadir al carrito');
      return;
    }

    const producto = {
      usuarioId: usuario.id,
      vestidoId: vestido.id,
      nombre: vestido.nombre,
      precio: vestido.precio,
      categoria: vestido.categoria,
      imagen: vestido.imagen,
      descripcion: vestido.descripcion
    };

    this.http.post<any>(this.apiUrl, producto).subscribe({
      next: (nuevoProducto) => {
        this.carrito.push(nuevoProducto);
        alert('Vestido añadido al carrito');
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  eliminarCarrito(vestido: any) {
    const usuario = this.authService.usuarioActual;

    this.http.delete(
      `${this.apiUrl}/${usuario.id}/${vestido.vestidoId}`
    ).subscribe({
      next: () => {
        this.carrito = this.carrito.filter(
          v => v.vestidoId !== vestido.vestidoId
        );
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  vaciarCarrito() {
    const usuario = this.authService.usuarioActual;

    const venta = {
      usuarioId: usuario.id,
      emailUsuario: usuario.email,
      vestidos: this.carrito,
      total: this.totalCarrito()
    };

    this.ventasService.crearVenta(venta).subscribe({
      next: () => {
        this.http.delete(
          `${this.apiUrl}/vaciar/${usuario.id}`
        ).subscribe({
          next: () => {
            this.carrito.splice(0, this.carrito.length);
            this.carrito= [];
            alert('Compra realizada correctamente');
          },
          error: (error) => {
            console.log(error);
          }
        });
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  obtenerCarrito() {
    return this.carrito;
  }

  totalCarrito() {
    let total = 0;

    for (let vestido of this.carrito) {
      total = total + vestido.precio;
    }

    return total;
  }
}