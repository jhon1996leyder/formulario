import { Component, OnInit } from '@angular/core';
import { PlacesService } from './places.service';
import { place } from './place/place';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
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
