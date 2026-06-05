import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FavoritosService } from '../../services/favoritos';
import { RouterLink } from '@angular/router';
import { VestidosService } from '../../services/vestidos';
import { CategoriasService } from '../../services/categorias';

@Component({
  selector: 'app-catalogo',
  imports: [RouterLink],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo implements OnInit {

  categoriaSeleccionada = 'Todos';
  precioMaximo = 500;

  vestidos: any[] = [];
  categorias: any[] = [];

  constructor(
    public favoritosService: FavoritosService,
    private vestidosService: VestidosService,
    private categoriasService: CategoriasService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.vestidosService.obtenerVestidos().subscribe({
      next: (datos) => {
        this.vestidos = datos;
        this.cd.detectChanges();
      },
      error: (error) => {
        console.log('Error al cargar vestidos', error);
      }
    });

    this.categoriasService.obtenerCategorias().subscribe({
      next: (datos) => {
        this.categorias = datos;
        this.cd.detectChanges();
      },
      error: (error) => {
        console.log('Error al cargar categorias', error);
      }
    });
  }

  filtrarCategoria(categoria: string) {
    this.categoriaSeleccionada = categoria;
  }

  cambiarPrecio(event: Event) {
    const input = event.target as HTMLInputElement;
    this.precioMaximo = Number(input.value);
  }

  get vestidosFiltrados() {
    return this.vestidos.filter(vestido => {
      const coincideCategoria =
        this.categoriaSeleccionada === 'Todos' ||
        vestido.categoria === this.categoriaSeleccionada;

      const coincidePrecio = vestido.precio <= this.precioMaximo;

      return coincideCategoria && coincidePrecio;
    });
  }

  cambiarFavorito(vestido: any) {
    this.favoritosService.agregarOQuitarFavorito(vestido);
  }

  esFavorito(vestido: any) {
    return this.favoritosService.esFavorito(vestido);
  }
}