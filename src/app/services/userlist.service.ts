import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})

export class UserlistService {

  private _userlist: BehaviorSubject<User[]>;
  private dataStore: {  // This is where we will store our data in memory
    UserStore: User[];
  };

  constructor(private http:HttpClient) {

    this.dataStore = { UserStore: [] };
    this._userlist = <BehaviorSubject<User[]>>new BehaviorSubject([]);
    this.get_user_list();
   }

  get User() {
    console.log(this._userlist);
    return this._userlist;
  }

  get_user_list(){

    return this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe((result_data : any)=>{

      this.dataStore.UserStore = result_data;
      this._userlist.next(Object.assign({}, this.dataStore).UserStore);
    },  error => console.log("Error: ", error));

    //return this.http.get("https://jsonplaceholder.typicode.com/todos");
  }

}

