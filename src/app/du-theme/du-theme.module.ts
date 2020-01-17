import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DuButtonComponent, DuDropdownComponent, DuTextAreaComponent, DuTextFieldComponent } from '.';


@NgModule({
  imports: [
    CommonModule
  ],

  declarations: [DuButtonComponent,DuDropdownComponent,DuTextAreaComponent,DuTextFieldComponent],

  exports: [DuButtonComponent,DuDropdownComponent,DuTextAreaComponent,DuTextFieldComponent],
  
  entryComponents: [DuButtonComponent,DuDropdownComponent,DuTextAreaComponent,DuTextFieldComponent]
})
export class DuThemeModule { }
