import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
    nombre = "David";
    apellido = "Rivas";
    edad:number = 25;
    estatura:number = 0;
    direccion = "";

getEdad(){
    return this.edad;
}

set_Edad(edad:number){

}

set_estatura(estatura:number){

}

set_direccion(estatura:string){

}

}
