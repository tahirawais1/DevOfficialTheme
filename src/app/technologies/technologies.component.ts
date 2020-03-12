import { Component, OnInit } from '@angular/core';
import { DataService } from '../Data Services/data.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

  data ;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.data = this.dataService.technology;
  }

}
