import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private httpClient: HttpClient) { }

  get_gallery()
  {
    return this.httpClient.get("https://api.imgur.com/3/gallery/hot/viral/0.json");
  }
}
