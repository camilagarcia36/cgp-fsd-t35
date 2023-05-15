import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = '';
  cif: string = '';
  direccion: string = '';
  grupo: string = '';
  registros: Array<object> = [];

  guardar()
  {
    if(this.nombre != '' &&  this.cif != '' &&  this.direccion != '' &&  this.grupo != '')
    {
      this.registros.push({nombre: this.nombre, cif: this.cif, direccion: this.direccion, grupo: this.grupo});
    }
  }
}
