import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class VestidosService {

  vestidos = [

    {
      id: 1,
      nombre: 'Vestido boda de día verde',
      precio: 129.99,
      categoria: 'Boda de día',
      imagen: '/assets/vestido2catalogobdn.png',
      descripcion: 'Vestido elegante para bodas de día con un diseño fresco y sofisticado.'
    },

    {
      id: 2,
      nombre: 'Vestido noche negro elegante',
      precio: 189.99,
      categoria: 'Boda de noche',
      imagen: '/assets/vestido3catalogobdd_g.png',
      descripcion: 'Vestido negro elegante ideal para eventos y celebraciones nocturnas.'
    },

    {
      id: 3,
      nombre: 'Vestido graduación fucsia',
      precio: 159.99,
      categoria: 'Graduación',
      imagen: '/assets/vestido4catalogog.png',
      descripcion: 'Vestido moderno y juvenil perfecto para graduaciones.'
    },

    {
      id: 4,
      nombre: 'Vestido boda noche satén',
      precio: 210.99,
      categoria: 'Boda de noche',
      imagen: '/assets/vestido5catalogobdn.png',
      descripcion: 'Diseño satinado elegante con acabado premium.'
    },

    {
      id: 5,
      nombre: 'Vestido boda de día floral',
      precio: 119.99,
      categoria: 'Boda de día',
      imagen: '/assets/vestido6catalogobdd.png',
      descripcion: 'Vestido floral ligero y elegante para celebraciones de día.'
    },

    {
      id: 6,
      nombre: 'Vestido graduación elegante',
      precio: 169.99,
      categoria: 'Graduación',
      imagen: '/assets/vestido7catalogog.png',
      descripcion: 'Vestido sofisticado con corte moderno para graduaciones.'
    },

    {
      id: 7,
      nombre: 'Vestido rosa satinado',
      precio: 179.99,
      categoria: 'Graduación',
      imagen: '/assets/vestido8catalogog.png',
      descripcion: 'Vestido satinado juvenil con acabado brillante.'
    },

    {
      id: 8,
      nombre: 'Vestido boda de día beige',
      precio: 139.99,
      categoria: 'Boda de día',
      imagen: '/assets/vestido9catalogobdd.png',
      descripcion: 'Diseño beige elegante y minimalista.'
    },

    {
      id: 9,
      nombre: 'Vestido noche premium',
      precio: 249.99,
      categoria: 'Boda de noche',
      imagen: '/assets/vestido10catalogobdn.png',
      descripcion: 'Vestido premium con corte exclusivo y elegante.'
    },

    {
      id: 10,
      nombre: 'Vestido negro minimal',
      precio: 199.99,
      categoria: 'Boda de noche',
      imagen: '/assets/vestido11catalogobdn.png',
      descripcion: 'Diseño minimalista negro para eventos elegantes.'
    },

    {
      id: 11,
      nombre: 'Vestido elegante granate',
      precio: 189.99,
      categoria: 'Boda de noche',
      imagen: '/assets/vestido12catalogobdn.png',
      descripcion: 'Vestido granate sofisticado para ocasiones especiales.'
    },

    {
      id: 12,
      nombre: 'Vestido verde ceremonia',
      precio: 149.99,
      categoria: 'Boda de día',
      imagen: '/assets/vestido13catalogobdn.png',
      descripcion: 'Vestido verde elegante perfecto para ceremonias.'
    },

    {
      id: 13,
      nombre: 'Vestido graduación moderno',
      precio: 174.99,
      categoria: 'Graduación',
      imagen: '/assets/vestido14catalogog.png',
      descripcion: 'Vestido moderno y juvenil para graduaciones.'
    },

    {
      id: 14,
      nombre: 'Vestido elegante champagne',
      precio: 229.99,
      categoria: 'Boda de día',
      imagen: '/assets/vestido15catalogog.png',
      descripcion: 'Vestido champagne exclusivo con acabado elegante.'
    }

  ];

  obtenerVestidos() {
    return this.vestidos;
  }

  obtenerVestidoPorId(id: number) {
    return this.vestidos.find(
      vestido => vestido.id === id
    );
  }

}