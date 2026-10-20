import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Auth } from '../../Servicios/auth';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(private router: Router, private auth: Auth){}

  estaLogueado(): boolean{
    return this.auth.estaLogueado();
  }

  esAdmin(): boolean{
    return this.auth.getUsuario()?.rol === 'administrador';
  }

  logout(): void{
    this.auth.cerrarSesion();
    this.router.navigate(['/logout']);
  }
}
