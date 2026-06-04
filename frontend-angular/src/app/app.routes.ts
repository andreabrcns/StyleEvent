import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Catalogo } from './pages/catalogo/catalogo';
import { DetalleVestido } from './pages/detalle-vestido/detalle-vestido';
import { Login } from './pages/login/login';
import { Registro } from './pages/registro/registro';
import { Favoritos } from './pages/favoritos/favoritos';
import { Admin } from './pages/admin/admin';
import { Carrito } from './pages/carrito/carrito';
import { adminGuard } from './guards/admin-guard';
export const routes: Routes = [
    { path: '', component: Home },
    { path: 'catalogo', component: Catalogo },
    { path: 'detalle/:id', component: DetalleVestido },
    { path: 'login', component: Login },
    { path: 'registro', component: Registro },
    { path: 'favoritos', component: Favoritos },
    { path: 'carrito', component: Carrito },
    {
        path: 'admin',
        component: Admin,
        canActivate: [adminGuard]
    }
];