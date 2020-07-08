import { Component } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Capitan America';

  arreglo = [ 1,2,3,4,5,6,7,8,9];

  PI: number = Math.PI;

  porcentaje: number = 0.234;
  
  salario: number = 1234.5;

  valorPromesa = new Promise<string>((resolve)=>{
      setTimeout(()=>{
        resolve('llego la data');
      },4500)

  });

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverin',
    edad: 500,
    direccion: {
      calle:'Primera',
      casa: 20
    }
  }

  fecha: Date = new Date();

  idioma: string = 'es';

   nombre2:string = 'adriAN sAlAs aGuErO';

   videoUrl: string = 'https://www.youtube.com/embed/GPOQjzZGoeQ';

   activar: boolean = true;


}
