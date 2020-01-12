import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatypes',
  templateUrl: './datatypes.component.html',
  styleUrls: ['./datatypes.component.css']
})
export class DatatypesComponent implements OnInit {

  //String
  title:string = "lokesh";

  //Number
  age:number;

  //Number array
  lucky_number:Number[];

  //String array
  fav_games: Array<string> = ["cricket","volleyball","Kabbadi"];

  //Any - Dynamic value
  fav_icecream:any;

  // Boolean
  isvalid :boolean;

  // tuple
  dob:[number,string,boolean] = [1,"-jan-",true];

   // Object
  student:object;

  // Classs
  empolyees1:Employee;
  empolyees2:Employee;

  constructor() {

    //assigning number value
    this.age = 25;
    //assigning  value whihc is only number type
    this.lucky_number=[4,7,47,10];

    //assigning  value which is only tuple type
    this.dob=[10,"Lokesh",false];

    //assigning  value which is only object type
    this.student ={id:"RS60",Name:"Lokesh R",Email:"lokesh@riversilica.com"};

    //assigning  value which is only class type
    this.empolyees1 = new Employee();
    this.empolyees1.name = "RAJ M";
    this.empolyees1.department ="CS";
    this.empolyees1.empid = "RS1000";
    this.empolyees1.active = true;
    this.empolyees1.age = 28;

    this.empolyees2 = new Employee();
    this.empolyees2.name = "RAJ RAJ M";
    this.empolyees2.department ="MECH";
    this.empolyees2.empid = "SS1000";
    this.empolyees2.active = false;
    this.empolyees2.age = 30;
   }

  ngOnInit() {

    //assigning  dynamic value:anything thing number/string/array/boolean etc
    this.fav_icecream = "Chocodream";

    //assigning Boolean value
    this.isvalid =true;
  }
}

class Employee
{
    empid:any;
    name:string;
    age:number;
    department:string;
    active:boolean;
}
