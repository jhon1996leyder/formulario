import { Component, OnInit } from '@angular/core';
import { place } from 'src/app/place/place';
import { PlacesService } from 'src/app/places.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

 
  usuarios: place[];
 
  constructor(
    private placeService: PlacesService
  ) { 

    this.usuarios = [{
      nombre:'',
      cargo:'',
      salario:'',
      email:'',
      cedula:'',
      apellido:''
    }]
  }

  ngOnInit(): void {

    this.placeService.getPlace().subscribe(usuario=>{
      this.usuarios = usuario;
    })

  }
}
