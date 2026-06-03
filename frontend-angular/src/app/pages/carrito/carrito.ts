import { Component } from '@angular/core';
import { CarritoService } from '../../services/carrito';

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito {
  constructor(public carritoService: CarritoService) {}
}
