import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientelista',
  templateUrl: './clientelista.component.html',
  styleUrls: ['./clientelista.component.css']
})
export class ClientelistaComponent implements OnInit {

  @Input() datos: any;

  constructor() { }

  ngOnInit(): void {
  }
}
