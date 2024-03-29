import { Component, OnInit } from '@angular/core';
import { DataService } from '../Data Services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data;
  workings;
  heading;
  description;


  constructor(private dataService: DataService, private router: Router ) { }

  ngOnInit() {
    this.data = this.dataService.home;
    this.workings = this.dataService.workPage;
    this.heading = this.data.headerSection.tittle;
    this.description = this.data.headerSection.description;
  }
  routetoDetail(item) {
    this.router.navigate(['work'] , { queryParams: { item } });
    window.scrollTo(0, 0);

  }
  routetopage(page){
    this.router.navigate([page]);
    window.scrollTo(0, 0);
  }

}
