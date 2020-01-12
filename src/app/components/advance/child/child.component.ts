import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  inputs:['ParentData'],
  outputs:["childEvent"]
})
export class ChildComponent implements OnInit {

  public ParentData:string;

  childEvent = new EventEmitter<string>();
  onchange(value:any)
  {
    this.childEvent.emit(value)
  }
  constructor() { }

  ngOnInit() {
  }

}
