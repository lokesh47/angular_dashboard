import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { RouterModule, Routes,Router  } from '@angular/router';

import { ToastrManager } from 'ng6-toastr-notifications';

import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private url = 'http://localhost:3000/employees';  

  private emp_List: BehaviorSubject<any>;// This is declaration for EMP BehaviorSubject

  private dataStore: {  // This is where we will store our EMP data in BehaviorSubject memory
    EmpStore: any[],
    DummyStore: any[],
  };

  constructor(private http: HttpClient,private router:Router,public toastr: ToastrManager) 
  {
    this.dataStore  = { EmpStore: [] ,DummyStore:[]}; // This BehaviorSubject memory Intailization
    this.emp_List   = <BehaviorSubject<any>>new BehaviorSubject([]); // Creating New instance

    this.getEmployee();

   }

  getEmployee() 
  {  
    return this.http.get(this.url).subscribe(res_data =>
      {
         this.dataStore.EmpStore.push(res_data);
         this.emp_List.next(Object.assign({}, this.dataStore).EmpStore);

         console.log(this.emp_List);
      });  
  }

  getData(): Observable<any> {

    return this.emp_List;
  }

  addEmployee(employee:any) {  

    let headers = new HttpHeaders();
    headers     = headers.append('Accept', 'application/json');
    headers     = headers.append('Content-Type', 'application/json');
    
    return this.http.post(this.url,employee,{headers : headers}).subscribe(res=>
      {

        this.toastr.successToastr('User Created Sucessfully.', 'Success!');
        this.dataStore.EmpStore[0].push(res);
        this.emp_List.next(Object.assign({}, this.dataStore).EmpStore);
      });  
  }


  updateEmployee(employee:any) {  

    let headers = new HttpHeaders();
    headers     = headers.append('Accept', 'application/json');
    headers     = headers.append('Content-Type', 'application/json');
   
    return this.http.put(this.url+"/"+localStorage.getItem("employee_id")+"/",employee,{headers : headers}).subscribe(res=>
      {
        // this.toastr.successToastr('User Details Updated Sucessfully.', 'Success!');
        this.toastr.customToastr('<span style="color: green; font-size: 16px; text-align: center;">Custom Toast</span>',null,{ enableHTML: true });

        this.dataStore.EmpStore = [];
        this.getEmployee();
      });  
  }


  deleteEmployee(id:any)
  {
    return this.http.delete(this.url+"/"+id+"/").subscribe(res=>
      {
        this.toastr.successToastr('User Deleted Sucessfully.', 'Success!');

        this.dataStore.EmpStore = [];
        this.getEmployee();
      });
  }


  getFilterData() 
  {  
    return this.http.get(this.url+"?name_like=").subscribe(res_data =>
      {
         this.dataStore.EmpStore.push(res_data);
         this.emp_List.next(Object.assign({}, this.dataStore).EmpStore);

         console.log(this.emp_List);
      });  
  }

  getFilterEmployee(key:any)
  {
    this.dataStore.EmpStore = [];

   if(key == "")
   {
      this.getEmployee();
   }
   else
   {
    return this.http.get(this.url+"?name_like="+key).subscribe(res_data =>
      {
         this.dataStore.EmpStore.push(res_data);
         this.emp_List.next(Object.assign({}, this.dataStore).EmpStore);
      });  
   }
    
  }


}


//GET ALL-  http://localhost:3000/employees
//GET ONE - http://localhost:3000/employees?id=1