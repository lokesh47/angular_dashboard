import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { map } from 'rxjs/operators';
const uploadURL = '/';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private httpClient: HttpClient) { }

  postFile(fileToUpload: File)
  {

    let formData = new FormData();

    formData.append('photo', fileToUpload);

    this.httpClient.post(uploadURL, formData).pipe(map((response: any) => response.json())).subscribe(
      // map the success function and alert the response
      (success) => 
      {
        alert("success");
      },
      (error) => alert("error")
      
      );
     }
     
}

