import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../app/componentes/navbar/navbar';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor(private cdr: ChangeDetectorRef){}
  protected readonly title = signal('Prode');
  cargando: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      console.log("Antes", this.cargando);
      this.cargando = false;
      this.cdr.detectChanges();
      console.log("Despues", this.cargando);
    }, 3000);
  }
}
