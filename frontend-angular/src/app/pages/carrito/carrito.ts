import { Component, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { loadScript } from '@paypal/paypal-js';
import { CarritoService } from '../../services/carrito';

@Component({
  selector: 'app-carrito',
  imports: [FormsModule],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito implements AfterViewInit {

  direccion = '';
  ciudad = '';
  codigoPostal = '';

  paypalEmail = '';
  paypalPassword = '';

  constructor(public carritoService: CarritoService) {
    this.carritoService.cargarCarrito();
  }

  async ngAfterViewInit() {
    const paypal = await loadScript({
      clientId: 'Af64sfIiuPiAmBkOLUu8U1SaV768DeFey0hz-Wk55RVKgQpnQMxSb_ONnKl-5Ui2EbZEAtVN-FWl4Dtp',
      currency: 'EUR'
    });

    if (paypal && paypal.Buttons) {
      paypal.Buttons({
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: this.carritoService.totalCarrito().toString()
                }
              }
            ]
          });
        },
        onApprove: (data: any, actions: any) => {
          return actions.order.capture().then(() => {
            this.finalizarCompra();
          });
        }
      })?.render('#paypal-button-container');
    }
  }

  finalizarCompra() {
    if (
      this.direccion === '' ||
      this.ciudad === '' ||
      this.codigoPostal === ''
    ) {
      alert('Rellena los datos de envío antes de pagar');
    } else {
      this.carritoService.vaciarCarrito();
    }
  }
}