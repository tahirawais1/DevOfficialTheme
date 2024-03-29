import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Data Services/data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services;
  data;
  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.services = this.dataService.services;
    this.data = this.dataService.home;

  }
  routeToServices(item) {
    this.router.navigate(['/service'], { queryParams: { page: item.id } });
    window.scrollTo(0, 0);

  }
  routetopage(page){
    this.router.navigate([page]);
    window.scrollTo(0, 0);

  }

}










 
 
