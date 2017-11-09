import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../shared/empleado.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  constructor(public empleadoService:EmpleadoService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form: NgForm){
    if(form.value.$key=='')
      this.empleadoService.insertEmpleadado(form.value);
    else
      this.empleadoService.updateEmpleado(form.value);
    this.resetForm(form);
  }

  resetForm(form?: NgForm){
    if(form != null)
      form.reset();
    this.empleadoService.empleadoSeleccionado = {
      $key: '',
      nombre : '',
      posicion: '',
      oficina: '',
      salario :0
    }
  }

  onDelete(form:NgForm){
    if(confirm('Estas seguro que quieres borrar este registro ?')==true)
    {
      this.empleadoService.deleteEmpleado(form.value.$key);
      this.resetForm(form);
    }
  }
}
