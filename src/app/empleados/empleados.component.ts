import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from './shared/empleado.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  providers:[EmpleadoService]
})
export class EmpleadosComponent implements OnInit {

  constructor(private empleadoService:EmpleadoService) { }

  ngOnInit() {
  }

}
