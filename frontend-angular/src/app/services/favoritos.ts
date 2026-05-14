import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritosService {

  favoritos: any[] = [];

  agregarOQuitarFavorito(vestido: any) {

    const existe = this.favoritos.find(
      v => v.nombre === vestido.nombre
    );

    if (existe) {

      this.favoritos = this.favoritos.filter(
        v => v.nombre !== vestido.nombre
      );

    } else {

      this.favoritos.push(vestido);

    }

  }

  esFavorito(vestido: any) {

    return this.favoritos.some(
      v => v.nombre === vestido.nombre
    );

  }

  obtenerFavoritos() {

    return this.favoritos;

  }

}
