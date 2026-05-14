import { Component } from '@angular/core';
import { FavoritosService } from '../../services/favoritos';

@Component({
  selector: 'app-favoritos',
  imports: [],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})

export class Favoritos {

  constructor(public favoritosService: FavoritosService) { }

}