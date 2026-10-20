  import { Component, OnInit, signal } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { RouterLink } from '@angular/router';
  import { Noticias, Noticia } from '../../Servicios/noticias';

  @Component({
    selector: 'app-inicio',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './inicio.html',
    styleUrl: './inicio.css'
  })
  export class Inicio implements OnInit {
    private readonly ITEMS_POR_TANDA = 6;

    noticias = signal<Noticia[]>([]);
    paginaActual = signal(0);
    cargando = signal(false);
    hayMas = signal(true);

    constructor(private noticiasService: Noticias) {}

    ngOnInit(): void {
      this.cargarNoticias();
    }

    cargarNoticias(): void {
      if (this.cargando() || !this.hayMas()) return;

      this.cargando.set(true);
      const desde = this.paginaActual() * this.ITEMS_POR_TANDA;

      this.noticiasService.obtenerNoticias(desde, this.ITEMS_POR_TANDA).subscribe({
        next: (nuevas) => {
          this.noticias.update((actuales) => [...actuales, ...nuevas]);
          this.paginaActual.update((p) => p + 1);
          this.hayMas.set(nuevas.length === this.ITEMS_POR_TANDA);
          this.cargando.set(false);
        },
        error: () => this.cargando.set(false),
      });
    }

    trackByNoticia(_: number, noticia: Noticia): number {
      return noticia.id;
    }
  }