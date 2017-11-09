import { Injectable } from '@angular/core';
import {Empleado } from './empleado.model'
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
@Injectable()
export class EmpleadoService {
  listaempleados : AngularFireList<any>;
  empleadoSeleccionado : Empleado =new Empleado();
  constructor(private firebase:AngularFireDatabase) { }

  getData(){
    this.listaempleados=this.firebase.list('empleados');
    return this.listaempleados;
  } 

  insertEmpleadado(empleado : Empleado){
    this.listaempleados.push({
      nombre : empleado.nombre,
      posicion : empleado.posicion,
      oficina: empleado.oficina,
      salario: empleado.salario
    });
  }

  updateEmpleado(emp: Empleado){
    this.listaempleados.update(emp.$key,{
      nombre: emp.nombre,
      posicion: emp.posicion,
      oficina: emp.oficina,
      salario: emp.salario
    })
  }

  deleteEmpleado(key: string){
    this.listaempleados.remove(key);
  }
}
