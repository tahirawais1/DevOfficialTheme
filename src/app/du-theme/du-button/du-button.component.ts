import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'du-button',
  templateUrl: './du-button.component.html',
  styleUrls: ['./du-button.component.scss']
})
export class DuButtonComponent implements OnInit {

  @Input() text = 'btnTest';
  @Input() type = '';
  @Input() class = '';
  @Input() disabled = false;
  @Input() height = '32px';
  @Input() width = '100%';
  @Input() backgroundColor = "pink";
  @Output() click = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  clickEvent($event) {
    console.log('The dialog was closed')
  }


}
