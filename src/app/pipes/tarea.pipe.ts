import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tarea'
})
export class TareaPipe implements PipeTransform {

  transform(value: string, mostrar: boolean = false): string {
      
        let cantidad = value.length;
        let nuevoNombre: string;
        if (mostrar){
          nuevoNombre = '*'.repeat(value.length);
          return nuevoNombre;
        }else
        {
          return value;
        }
          
      
       //return (mostrar) ?  '*'.repeat(value.length) : value ;
  }

}
