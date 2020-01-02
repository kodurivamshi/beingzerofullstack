import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  //users={};
  //count=0;
  movie={};
  a=[];
  movies;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getData().subscribe(d=>{
      //this.users['arr']=d;
      //this.count=this.users['arr'].length;
      //console.log(this.users);
      this.movie=d;
      this.a=this.movie['data'];
      this.movies=this.a['movies'];
      //this.a=this.movie['data'];
    })
  }

}
