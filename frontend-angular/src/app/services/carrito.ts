import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  carrito: any[] = [];

  agregarAlCarrito(vestido: any) {
    const existe = this.carrito.find(v => v.id === vestido.id);

    if (!existe) {
      this.carrito.push(vestido);
    }
  }

  obtenerCarrito() {
    return this.carrito;
  }

  eliminarDelCarrito(id: string) {
    this.carrito = this.carrito.filter(v => v.id !== id);
  }

  vaciarCarrito() {
    this.carrito = [];
  }

  calcularTotal() {
    return this.carrito.reduce((total, vestido) => total + Number(vestido.precio), 0);
  }
}
