import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VestidosService } from '../../services/vestidos';
import { VentasService } from '../../services/ventas';

@Component({
  selector: 'app-admin',
  imports: [FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin implements OnInit {

  vestidos: any[] = [];
  ventas: any[] = [];

  vestido = {
    nombre: '',
    categoria: 'Boda de día',
    precio: 0,
    imagen: '',
    descripcion: ''
  };

  mensaje = '';

  editando = false;
  idEditando = '';

  constructor(
    private vestidosService: VestidosService,
    private ventasService: VentasService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.cargarVestidos();
    this.cargarVentas();
  }

  cargarVentas() {
    this.ventasService.obtenerVentas().subscribe({
      next: (datos) => {
        this.ventas = datos;
        this.cd.detectChanges();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  calcularIngresos() {
    let total = 0;

    for (let venta of this.ventas) {
      total = total + venta.total;
    }

    return total;
  }

  cargarVestidos() {
    this.vestidosService.obtenerVestidos().subscribe({
      next: (datos) => {
        this.vestidos = datos;
        this.cd.detectChanges();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  anadirVestido() {
    if (this.editando) {
      this.vestidosService.editarVestido(this.idEditando, this.vestido).subscribe({
        next: () => {
          this.mensaje = 'Vestido editado correctamente';
          this.limpiarFormulario();
          this.cargarVestidos();
        },
        error: (error) => {
          console.log(error);
          this.mensaje = 'Error al editar el vestido';
        }
      });
    } else {
      this.vestidosService.crearVestido(this.vestido).subscribe({
        next: () => {
          this.mensaje = 'Vestido añadido correctamente';
          this.limpiarFormulario();
          this.cargarVestidos();
        },
        error: (error) => {
          console.log(error);
          this.mensaje = 'Error al añadir el vestido';
        }
      });
    }
  }

  editarVestido(vestido: any) {
    this.editando = true;
    this.idEditando = vestido.id;

    this.vestido = {
      nombre: vestido.nombre,
      categoria: vestido.categoria,
      precio: vestido.precio,
      imagen: vestido.imagen,
      descripcion: vestido.descripcion
    };

    this.mensaje = 'Editando vestido';
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

  limpiarFormulario() {
    this.editando = false;
    this.idEditando = '';

    this.vestido = {
      nombre: '',
      categoria: 'Boda de día',
      precio: 0,
      imagen: '',
      descripcion: ''
    };
  }
}