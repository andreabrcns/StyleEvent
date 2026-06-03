import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavoritosService } from '../../services/favoritos';
import { CarritoService } from '../../services/carrito';

@Component({
  selector: 'app-detalle-vestido',
  imports: [],
  templateUrl: './detalle-vestido.html',
  styleUrl: './detalle-vestido.css',
})
export class DetalleVestido implements OnInit {

  vestido: any;
  mensaje = 'Cargando vestido...';

  constructor(
    private route: ActivatedRoute,
    public favoritosService: FavoritosService,
    public carritoService: CarritoService,
    private cd: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    try {
      const respuesta = await fetch('http://localhost:8080/api/vestidos/' + id);
      const datos = await respuesta.json();

      this.vestido = datos;
      this.mensaje = '';

      this.cd.detectChanges();

    } catch (error) {
      console.log(error);
      this.mensaje = 'Error al cargar el vestido';
      this.cd.detectChanges();
    }
  }

  cambiarFavorito() {
    if (this.vestido) {
      this.favoritosService.agregarOQuitarFavorito(this.vestido);
    }
  }

  esFavorito() {
    return this.favoritosService.esFavorito(this.vestido);
  }

  agregarCarrito() {
    if (this.vestido) {
      this.carritoService.agregarAlCarrito(this.vestido);
    }
  }
}