import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email = '';
  password = '';
  mensaje = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  iniciarSesion() {
    this.authService.login(this.email, this.password).subscribe({
      next: (usuario) => {
        if (usuario) {
          this.authService.guardarUsuario(usuario);

          if (usuario.rol === 'ADMIN') {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/catalogo']);
          }
        } else {
          this.mensaje = 'Email o contraseña incorrectos';
        }
      },
      error: (error) => {
        console.log(error);
        this.mensaje = 'Error al iniciar sesión';
      }
    });
  }
}