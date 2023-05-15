import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = '';
  email: any = '';
  mensaje: string = '';
  anti_spam: string = '';
  registros: Array<object> = [];

  guardar()
  {
    if(this.nombre != '' &&  this.email != '' &&  this.mensaje != '' && this.anti_spam == '5')
    {
      this.registros.push({nombre: this.nombre, email: this.email, mensaje: this.mensaje});
    }
  }
}
