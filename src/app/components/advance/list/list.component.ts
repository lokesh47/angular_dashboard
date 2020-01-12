import { Component, OnInit } from '@angular/core';
import { UserlistService } from 'src/app/services/userlist.service';
import { MatPaginator, MatTableDataSource, MatDialog, MatDialogRef } from '@angular/material';
import {CrudService} from 'src/app/services/crud.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  displayedColumns: string[] = ['#','UserID','Title', 'Action'];
  result :any;
  dataSource=new MatTableDataSource(this.result);
  
  constructor(private user_service:UserlistService,private crud:CrudService) { }

  ngOnInit() 
  {
    return this.user_service.User.subscribe(result =>{
      //this.dataSource = result

      console.log(result);
      this.dataSource=new MatTableDataSource(result);
      });

      // this.crud.getData().subscribe(response_data =>
      //   {
      //     this.dataSource = response_data[0];
      //   });
  }

  delete()
  {
 
  }

  edit()
  {
    
  }


  loadSubCategory()
  {

  }
}
