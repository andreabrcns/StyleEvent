import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VestidosService } from '../../services/vestidos';
import { FavoritosService } from '../../services/favoritos';

@Component({
  selector: 'app-detalle-vestido',
  imports: [],
  templateUrl: './detalle-vestido.html',
  styleUrl: './detalle-vestido.css',
})
export class DetalleVestido {

  vestido: any;

  constructor(
    private route: ActivatedRoute,
    private vestidosService: VestidosService,
    public favoritosService: FavoritosService
  ) {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.vestido = this.vestidosService.obtenerVestidoPorId(id);
  }

  cambiarFavorito() {
    this.favoritosService.agregarOQuitarFavorito(this.vestido);
  }

  esFavorito() {
    return this.favoritosService.esFavorito(this.vestido);
  }
}