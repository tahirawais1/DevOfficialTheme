import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  @Output() click = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
  clickEvent(event){
    this.click.emit(event);
  }


}
