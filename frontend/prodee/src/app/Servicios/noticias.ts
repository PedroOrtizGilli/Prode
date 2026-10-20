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

    interface Rss2JsonItem {
    title: string;
    description: string;
    link: string;
    pubDate: string;
    thumbnail: string;
    enclosure?: { link: string };
    }

    interface Rss2JsonResponse {
    status: string;
    feed: { title: string };
    items: Rss2JsonItem[];
    }

    @Injectable({ providedIn: 'root' })
    export class Noticias {
    private readonly RSS2JSON_URL = 'https://api.rss2json.com/v1/api.json';
    private readonly FEED_F1 = 'https://www.formula1.com/en/latest/all.xml';
    private readonly IMG_DEFAULT = 'https://picsum.photos/seed/f1news/400/240';

    private noticias$?: Observable<Noticia[]>;

    constructor(private http: HttpClient) {}

    obtenerNoticias(desde: number, cantidad: number): Observable<Noticia[]> {
        if (!this.noticias$) {
        this.noticias$ = this.http
            .get<Rss2JsonResponse>(this.RSS2JSON_URL, {
            params: { rss_url: this.FEED_F1 },
            })
            .pipe(
            map((res) => res.items.map((item, i) => this.mapearNoticia(item, i))),
            shareReplay(1)
            );
        }

        return this.noticias$.pipe(
        map((noticias) => noticias.slice(desde, desde + cantidad))
        );
    }

    private mapearNoticia(item: Rss2JsonItem, index: number): Noticia {
        return {
        id: index + 1,
        titulo: item.title,
        resumen: this.limpiarHtml(item.description).slice(0, 160),
        imagen: item.thumbnail || item.enclosure?.link || this.IMG_DEFAULT,
        fuente: 'Formula 1',
        fecha: new Date(item.pubDate).toLocaleDateString('es-AR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        }),
        url: item.link,
        };
    }

    private limpiarHtml(texto: string): string {
        return texto.replace(/<[^>]*>/g, '').trim();
    }
    }