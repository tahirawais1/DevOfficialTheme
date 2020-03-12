import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, UpperFooterComponent, FooterComponent, ButtonComponent, HeadingDescComponent } from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FooterComponent, HeaderComponent , UpperFooterComponent , ButtonComponent , HeadingDescComponent],
  exports:[FooterComponent, HeaderComponent , UpperFooterComponent , ButtonComponent , HeadingDescComponent]
})
export class DuThemeModule { }
