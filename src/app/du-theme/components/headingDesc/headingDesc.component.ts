import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-headingDesc',
  templateUrl: './headingDesc.component.html',
  styleUrls: ['./headingDesc.component.scss']
})
export class HeadingDescComponent implements OnInit {

  @Input() heading;
  @Input() description;
  
  constructor() { }

  ngOnInit() {
  }

}
