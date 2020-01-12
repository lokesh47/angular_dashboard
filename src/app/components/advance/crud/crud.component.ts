import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControlName,FormBuilder,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {CrudService} from 'src/app/services/crud.service';

import { ConfirmDialogModel, ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})

export class CrudComponent implements OnInit {

  constructor(private crud :CrudService,private fb:FormBuilder,
    private router:Router,public dialog: MatDialog) { 

    }
employee: any [];  
Userform : FormGroup;

form_data:boolean = false;
search_data:boolean = true;
button_text :string = "Create User";

  ngOnInit() {

    this.Userform = this.fb.group(
      {
        name:new FormControl('',[Validators.required, Validators.maxLength(100)]),
        address: new FormControl('',[Validators.required, Validators.maxLength(100)]),
        email:new FormControl('',[Validators.required, Validators.maxLength(100)])
      }
    )

    this.crud.getData().subscribe(response_data =>
      {
        this.employee = response_data[0];
      });

      localStorage.setItem("employee_id","0");

  }

  show_user_block()
  {
    if(this.form_data == true)
    {
      this.form_data = false;
      this.button_text = "Create User";
      this.Userform.setValue({name: "", address: "",email:""});

      this.search_data = true;

    }
    else
    {
      this.form_data = true;
      this.button_text = "Cancel";
      this.search_data = false;
    }
  }

  create_user()
  {
    const UserForm = this.Userform.value;
    
    if(localStorage.getItem("employee_id") == "0")
    {
        this.crud.addEmployee(UserForm);

        this.crud.a
    }
    else
    {
      this.crud.updateEmployee(UserForm);
    }
   
    this.show_user_block();
  }

  delete_employee(emp:any)
  {

    const dialogData = new ConfirmDialogModel("Confirm Action", "Are you sure you want to do delete user "+emp.name+"?");
    const dialogRef = this.dialog.open(ConfirmDialogComponent, 
      {
        maxWidth: "400px",
        data: dialogData
      });

    dialogRef.afterClosed().subscribe(dialogResult => 
      {
        if(dialogResult == true)
        {
          this.crud.deleteEmployee(emp.id);
        }
      });
   
  }

  
  updateEmployee(emp_data:any)
  {
    localStorage.setItem("employee_id",emp_data.id);
    this.Userform.setValue({name: emp_data.name, address: emp_data.address,email:emp_data.email});
    this.show_user_block();
        
  }

  get_filter_data(key:any)
  {  
      this.crud.getFilterEmployee(key);   
  }

}
