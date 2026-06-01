import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VestidosService } from '../../services/vestidos';

@Component({
  selector: 'app-admin',
  imports: [FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {

vestidos: any[] = [];

  vestido = {
    nombre: '',
    categoria: 'Boda de día',
    precio: 0,
    imagen: '',
    descripcion: ''
  };

  mensaje = '';

  constructor(private vestidosService: VestidosService) {
    this.cargarVestidos();
  }
  cargarVestidos() {
    this.vestidosService.obtenerVestidos().subscribe({
      next: (datos) => {
        this.vestidos = datos;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  anadirVestido() {
    this.vestidosService.crearVestido(this.vestido).subscribe({
      next: () => {
        this.mensaje = 'Vestido añadido correctamente';

        this.vestido = {
          nombre: '',
          categoria: 'Boda de día',
          precio: 0,
          imagen: '',
          descripcion: ''
        };
        this.cargarVestidos();
      },
      error: (error) => {
        console.log(error);
        this.mensaje = 'Error al añadir el vestido';
      }
    });
  }
  eliminarVestido(id: string) {
    this.vestidosService.eliminarVestido(id).subscribe({
      next: () => {
        this.mensaje = 'Vestido eliminado correctamente';
        this.cargarVestidos();
      },
      error: (error) => {
        console.log(error);
        this.mensaje = 'Error al eliminar el vestido';
      }
    });
  }
}
