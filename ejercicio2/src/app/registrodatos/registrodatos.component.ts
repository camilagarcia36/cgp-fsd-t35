import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrodatos',
  templateUrl: './registrodatos.component.html',
  styleUrls: ['./registrodatos.component.css']
})
export class RegistrodatosComponent implements OnInit {

  @Input() datos: any;

  constructor() { }

  ngOnInit(): void {
  }
}
