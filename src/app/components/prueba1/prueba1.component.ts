import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba1',
  templateUrl: './prueba1.component.html',
  styleUrls: ['./prueba1.component.css']
})
export class Prueba1Component implements OnInit {

  private nombre:string;
  private edad:number;
  private curso:number;
  private apellido:string;

  constructor(nombre:string, edad:number, curso:number, apellido:string) { 
    this.nombre = nombre;
    this.edad = edad;
    this.curso = curso;
    this.apellido = apellido;
  }

  ngOnInit() {
  }

  nombreAlumnoPrueba():string{
    return this.nombre;
  }

  edadAlumnoPrueba():number{
    return this.edad;
  }

  cursoAlumnoPrueba():number{
    return this.curso;
  }

  apellidoAlumnoPrueba():string{
    return this.apellido;
  }
}

let alumno = new Prueba1Component("esteban", 24, 4, "Droguett");

console.log(alumno.nombreAlumnoPrueba());
/*console.log(alumno.edadAlumnoPrueba());
console.log(alumno.cursoAlumnoPrueba());*/
console.log(alumno.apellidoAlumnoPrueba());
