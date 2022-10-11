import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { place } from 'src/app/place/place';
import { PlacesService } from 'src/app/places.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  constructor(
    private placeService: PlacesService
  ) { }
  
  formulario = new FormGroup({
    cedula: new FormControl('',Validators.required),
    nombre: new FormControl('',Validators.required),
    apellido: new FormControl('',Validators.required),
    cargo: new FormControl('',Validators.required),
    salario: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
  }
  );
  
  ingresoEmpleado(form: any){
    const empleado: place = {
      cedula: form.cedula,
      nombre: form.nombre,
      apellido: form.apellido,
      cargo: form.cargo,
      salario: form.salario,
      email: form.email,
    }
    this.placeService.addPlace(empleado)
    this.formulario.reset();
    console.log("registro exitoso")
  }

  ngOnInit(): void {

  }
}
