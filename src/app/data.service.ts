import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getData(){
    //return this.http.get('https://api.github.com/users?since=135');
    return this.http.get('https://yts.lt/api/v2/list_movies.json?limit=5');
  }
}
