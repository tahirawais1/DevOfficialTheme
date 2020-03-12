import { BadgesComponent } from './components/badges/badges.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, UpperFooterComponent, FooterComponent, ButtonComponent, HeadingDescComponent } from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FooterComponent, HeaderComponent, UpperFooterComponent, ButtonComponent, HeadingDescComponent, BadgesComponent],
  exports: [FooterComponent, HeaderComponent, UpperFooterComponent, ButtonComponent, HeadingDescComponent, BadgesComponent]
})
export class DuThemeModule { }
