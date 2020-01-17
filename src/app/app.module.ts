import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DuThemeModule } from './du-theme/du-theme.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DuThemeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
