import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  constructor() { }

  getEmployees(){
   return [
     {id : 1, name : "Andrew", age:30},
     {id : 2, name : "Brito" , age:25},
     {id : 3, name : "Jhon"  , age:27},
     {id : 4, name : "Elena" , age:28} 
   ];
  }
}
