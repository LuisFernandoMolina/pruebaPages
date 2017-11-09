import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../shared/empleado.service';
import { AngularFireList} from 'angularfire2/database';
import { Empleado } from '../shared/empleado.model';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {
  listaempleados : Empleado[];
  constructor(private empleadoService:EmpleadoService) { }

  ngOnInit() {
    var x = this.empleadoService.getData();
    x.snapshotChanges().subscribe(item =>{
      this.listaempleados=[];
      item.forEach(elemento =>{
        var y =elemento.payload.toJSON();
        y["$key"]=elemento.key;
        this.listaempleados.push(y as Empleado);
      });
    });
  }

  onItemClick(emp : Empleado){
    this.empleadoService.empleadoSeleccionado=Object.assign({},emp);
  }

}
