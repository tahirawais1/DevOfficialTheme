import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-headingDesc',
  templateUrl: './headingDesc.component.html',
  styleUrls: ['./headingDesc.component.scss']
})
export class HeadingDescComponent implements OnInit {

  @Input() heading;
  @Input() description;
  @Input() bgprime = false;
  @Input() button;
  @Input() btnwidth = '230px';
  @Input() btnheight = '55px';

  constructor() { }

  ngOnInit() {
  }

}
