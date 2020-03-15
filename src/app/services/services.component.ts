import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Data Services/data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services
  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.services = this.dataService.services;

  }

}










 
 
