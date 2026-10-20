    import { Injectable } from '@angular/core';
    import { HttpClient } from '@angular/common/http';
    import { Observable, map, shareReplay } from 'rxjs';

    export interface Noticia {
    id: number;
    titulo: string;
    resumen: string;
    imagen: string;
    fuente: string;
    fecha: string;
    url: string;
    }

    interface RaceControlMessage {
    date: string;
    category: string;
    flag: string | null;
    message: string;
    scope: string | null;
    driver_number: number | null;
    session_key: number;
    meeting_key: number;
    }

    @Injectable({ providedIn: 'root' })
    export class Noticias {
    private readonly BASE_URL = 'https://api.openf1.org/v1';
    private readonly IMG_DEFAULT = 'https://picsum.photos/seed/f1prode/400/240';

    private mensajes$?: Observable<Noticia[]>;

    constructor(private http: HttpClient) {}

    obtenerNoticias(desde: number, cantidad: number): Observable<Noticia[]> {
        if (!this.mensajes$) {
        this.mensajes$ = this.http
            .get<RaceControlMessage[]>(`${this.BASE_URL}/race_control?session_key=latest`)
            .pipe(
            map((mensajes) =>
                mensajes
                .slice()
                .reverse() // más recientes primero
                .map((m, i) => this.mapearNoticia(m, i))
            ),
            shareReplay(1)
            );
        }

        return this.mensajes$.pipe(
        map((noticias) => noticias.slice(desde, desde + cantidad))
        );
    }

    private mapearNoticia(m: RaceControlMessage, index: number): Noticia {
        return {
        id: index + 1,
        titulo: this.armarTitulo(m),
        resumen: m.message,
        imagen: this.IMG_DEFAULT,
        fuente: 'FIA - Race Control',
        fecha: new Date(m.date).toLocaleString('es-AR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        }),
        url: '#',
        };
    }

    private armarTitulo(m: RaceControlMessage): string {
        if (m.flag) return `${m.category} — Bandera ${m.flag}`;
        return m.category ?? 'Aviso de dirección de carrera';
    }
    }