import { Component, OnInit } from '@angular/core';

import {FileUploadService} from 'src/app/services/file-upload.service';

@Component({
  selector: 'app-filelist',
  templateUrl: './filelist.component.html',
  styleUrls: ['./filelist.component.css']
})
export class FilelistComponent implements OnInit {


  fileToUpload: File = null;

  constructor(private fileUploadService :FileUploadService ) { }

  ngOnInit() {
  }


  handleFileInput(files: FileList)
  {
    this.fileToUpload = files.item(0);

    console.log( this.fileToUpload);
    this.uploadFileToActivity();
  }

  uploadFileToActivity() {

    console.log("callled");
    this.fileUploadService.postFile(this.fileToUpload);
  }

}
