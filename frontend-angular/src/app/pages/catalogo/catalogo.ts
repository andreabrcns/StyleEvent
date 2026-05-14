import { Component } from '@angular/core';
import { FavoritosService } from '../../services/favoritos';
@Component({
  selector: 'app-catalogo',
  imports: [],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo {

  vestidos = [

    {
      nombre: 'Vestido boda de día verde',
      precio: 129.99,
      categoria: 'Boda de día',
      imagen: '/assets/vestido2catalogobdn.png'
    },

    {
      nombre: 'Vestido noche negro elegante',
      precio: 189.99,
      categoria: 'Boda de noche',
      imagen: '/assets/vestido3catalogobdd_g.png'
    },

    {
      nombre: 'Vestido graduación fucsia',
      precio: 159.99,
      categoria: 'Graduación',
      imagen: '/assets/vestido4catalogog.png'
    },

    {
      nombre: 'Vestido boda noche satén',
      precio: 210.99,
      categoria: 'Boda de noche',
      imagen: '/assets/vestido5catalogobdn.png'
    },

    {
      nombre: 'Vestido boda de día floral',
      precio: 119.99,
      categoria: 'Boda de día',
      imagen: '/assets/vestido6catalogobdd.png'
    },

    {
      nombre: 'Vestido graduación elegante',
      precio: 169.99,
      categoria: 'Graduación',
      imagen: '/assets/vestido7catalogog.png'
    },

    {
      nombre: 'Vestido rosa satinado',
      precio: 179.99,
      categoria: 'Graduación',
      imagen: '/assets/vestido8catalogog.png'
    },

    {
      nombre: 'Vestido boda de día beige',
      precio: 139.99,
      categoria: 'Boda de día',
      imagen: '/assets/vestido9catalogobdd.png'
    },

    {
      nombre: 'Vestido noche premium',
      precio: 249.99,
      categoria: 'Boda de noche',
      imagen: '/assets/vestido10catalogobdn.png'
    },

    {
      nombre: 'Vestido negro minimal',
      precio: 199.99,
      categoria: 'Boda de noche',
      imagen: '/assets/vestido11catalogobdn.png'
    },

    {
      nombre: 'Vestido elegante granate',
      precio: 189.99,
      categoria: 'Boda de noche',
      imagen: '/assets/vestido12catalogobdn.png'
    },

    {
      nombre: 'Vestido verde ceremonia',
      precio: 149.99,
      categoria: 'Boda de día',
      imagen: '/assets/vestido13catalogobdn.png'
    },

    {
      nombre: 'Vestido graduación moderno',
      precio: 174.99,
      categoria: 'Graduación',
      imagen: '/assets/vestido14catalogog.png'
    },

    {
      nombre: 'Vestido elegante champagne',
      precio: 229.99,
      categoria: 'Boda de día',
      imagen: '/assets/vestido15catalogog.png'
    }

  ];
  favoritos: any[] = [];

  agregarFavorito(vestido: any) {

    const existe = this.favoritos.includes(vestido);

    if (!existe) {
      this.favoritos.push(vestido);
    }

    console.log(this.favoritos);

  }
  categoriaSeleccionada = 'Todos';

  filtrarCategoria(categoria: string) {
    this.categoriaSeleccionada = categoria;
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
  precioMaximo = 250;

  cambiarPrecio(event: Event) {
    const input = event.target as HTMLInputElement;
    this.precioMaximo = Number(input.value);
  }

  constructor(public favoritosService: FavoritosService) { }
  cambiarFavorito(vestido: any) {

    this.favoritosService.agregarOQuitarFavorito(vestido);

  }

  esFavorito(vestido: any) {

    return this.favoritosService.esFavorito(vestido);

  }
}
