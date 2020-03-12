import { Component, OnInit } from '@angular/core';
import { DataService } from '../Data Services/data.service';

@Component({
  selector: 'app-workDetail',
  templateUrl: './workDetail.component.html',
  styleUrls: ['./workDetail.component.scss']
})
export class WorkDetailComponent implements OnInit {

  data ;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.data = this.dataService.getWorkByTitle('TradeUnleashed')[0];
  }

}
