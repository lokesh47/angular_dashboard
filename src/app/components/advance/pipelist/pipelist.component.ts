import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipelist',
  templateUrl: './pipelist.component.html',
  styleUrls: ['./pipelist.component.css']
})
export class PipelistComponent implements OnInit {

  title = 'Angular 6 Project!';
  todaydate = new Date();
  jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};
  months = ["Jan", "Feb", "Mar", "April", "May", "Jun",
           "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

  constructor() { }

  ngOnInit() {
  }

}
