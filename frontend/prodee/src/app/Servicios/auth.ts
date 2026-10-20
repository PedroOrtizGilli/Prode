import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  constructor(private router: Router){}

  guardarSesion(token: string, usuario: any): void{
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  getUsuario(): any {
    const usuario = localStorage.getItem('usuario');
    return usuario ? JSON.parse(usuario) : null;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  cerrarSesion(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }

  estaLogueado(): boolean {
    return !!this.getToken();
  }
}
