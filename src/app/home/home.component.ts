import { Component, OnInit } from '@angular/core';
import { DataService } from '../Data Services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data;
  heading;
  description;
 

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.data = this.dataService.technology;
    this.heading = this.data.headerSection.tittle;
    this.description = this.data.headerSection.description;
  }

}
