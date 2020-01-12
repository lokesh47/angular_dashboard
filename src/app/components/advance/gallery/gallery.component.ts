import { Component, OnInit } from '@angular/core';

import {GalleryService} from 'src/app/services/gallery.service';
 @Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private galllery :GalleryService) { }

  images: any;  
  data : any;
  ngOnInit() {


    this.galllery.get_gallery().subscribe(res=>
      {

        //console.log(res.data);
        //this.images = res.data;
      });
  }

}
